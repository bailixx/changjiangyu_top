// ==UserScript==
// @name         长江雨课堂 - 终极签到拦截器
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  拦截 WebSocket 并使用极简 API 显示二维码
// @match        *://*.yuketang.cn/* 这个地方的代码换成对应的每一节课的网址
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("[系统审计] 监听脚本已启动...");

    // ==========================================
    // 模块一：搭建极简版“画板” (只用 HTML 和 CSS)
    // ==========================================
    let qrContainer = document.createElement('div');
    qrContainer.id = 'hacker_qr_box';
    qrContainer.style.cssText = `
        position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        z-index: 999999; background: white; padding: 25px; border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.5); display: none; text-align: center;
    `;
    // 直接在画板里塞一个 <img> 标签，等下往里面填图片
    qrContainer.innerHTML = `
        <h3 style="color: #e74c3c; margin: 0 0 15px 0;">🎯 成功拦截签到链接</h3>
        <img id="hacker_qr_img" src="" width="250" height="250" style="border: 1px solid #eee;">
        <p style="margin: 15px 0 0 0; font-size: 13px; color: #666;">请配合虚拟定位扫码</p>
    `;
    document.body.appendChild(qrContainer);

    // ==========================================
    // 模块二：极简渲染逻辑 (抛弃本地库，调用 API)
    // ==========================================
    function showQRCode(realUrl) {
        // 利用免费的二维码生成 API，直接把你的链接变成图片返回
        let apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + encodeURIComponent(realUrl);
        
        // 把图片塞进刚才创建的 img 标签里
        document.getElementById('hacker_qr_img').src = apiUrl;
        
        // 让整个画板弹出来
        qrContainer.style.display = 'block'; 
    }

    // ==========================================
    // 模块三：WebSocket 劫持核心
    // ==========================================
    let checkSocket = setInterval(() => {
        if (window.socket && window.socket.onmessage) {
            clearInterval(checkSocket);
            console.log("[系统审计] 成功捕获 Socket 实例！");

            let originalOnMessage = window.socket.onmessage;

            window.socket.onmessage = function(event) {
                try {
                    let payload = JSON.parse(event.data);
                    
                    // 打印日常包
                    console.log("🕵️‍♂️ 截获底层包:", payload);

                    // 精准匹配你抓到的那个签到包
                    if (payload.data && payload.data.op === 'problem' && payload.data.qrcode) {
                        let realUrl = payload.data.qrcode;
                        console.log("🔥 致命一击！提取链接：", realUrl);
                        
                        showQRCode(realUrl); // 触发弹窗！
                    }
                } catch (e) {
                    // 把错误吐出来，不要静默吞噬
                    console.error("拦截器解析出现异常:", e); 
                }

                return originalOnMessage.apply(this, arguments);
            };
        }
    }, 1000);
})();

//在油猴脚本里面尝试之后，没有太大作用，无法突破动态二维码的封锁