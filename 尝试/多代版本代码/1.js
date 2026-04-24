// ==UserScript==
// @name         网络安全测试 - 动态二维码信道监听
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  研究 WebSocket 劫持与 DOM 动态渲染
// @match        *://*.yuketang.cn/* 这个地方的代码换成对应的每一节课的网址
// @require      https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js
// @run-at       document-idle  // 确保在页面基础元素加载完后再运行
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("[系统审计] 监听脚本已启动...");

    // ==========================================
    // 模块一：搭建“幽灵画布” (DOM 注入)
    // ==========================================
    let qrContainer = document.createElement('div');
    qrContainer.id = 'hacker_qr_box';
    qrContainer.style.cssText = `
        position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        z-index: 999999; background: white; padding: 20px;
        box-shadow: 0 0 20px rgba(0,0,0,0.5); display: none; /* 初始状态隐藏 */
    `;
    document.body.appendChild(qrContainer);

    // ==========================================
    // 模块二：初始化渲染引擎
    // ==========================================
    let myQRCode = new QRCode(qrContainer, {
        text: "init", width: 256, height: 256
    });

    function showQRCode(url) {
        qrContainer.style.display = 'block'; // 让画板显形
        myQRCode.clear();
        myQRCode.makeCode(url);
    }

    // ==========================================
    // 模块三：核心武器 - WebSocket 劫持 (API Hooking)
    // ==========================================
    // 设置一个定时器，等待雨课堂的代码把 window.socket 建立起来
    let checkSocket = setInterval(() => {
        if (window.socket && window.socket.onmessage) {
            clearInterval(checkSocket);
            console.log("[系统审计] 成功捕获 Socket 实例！");

            // 1. 保存原版通讯逻辑
            let originalOnMessage = window.socket.onmessage;

            // 2. 注入我们的“中间人”逻辑
            window.socket.onmessage = function(event) {
                try {
                    let data = JSON.parse(event.data);
                    
                    // 3. 过滤高价值情报（此处为伪代码，需根据实际抓包的数据结构调整）
                    if (data.type === 'checkin_start' || data.url) {
                        console.log("拦截到动态签到链接！", data.url);
                        showQRCode(data.url); // 触发模块二，在屏幕上画出二维码
                    }
                } catch (e) {
                    // 防止解析错误导致正常通讯中断
                }

                // 4. 完美伪装：把数据原封不动交还给系统原函数
                return originalOnMessage.apply(this, arguments);
            };
        }
    }, 1000); // 每秒检查一次 socket 是否就绪

})();

//在油猴脚本里面尝试之后，没有太大作用，无法突破动态二维码的封锁