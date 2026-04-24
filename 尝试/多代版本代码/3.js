// ==UserScript==
// @name         长江雨课堂 - 终极信号抓取器 (绝对触发版)
// @namespace    http://tampermonkey.net/
// @version      4.0
// @description  放弃画图，直接弹窗显示原始 URL
// @match        *://*.yuketang.cn/* 这个地方更换成每一节课对应的代码
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 1. 在控制台置顶打印，确认脚本活着
    console.log("%c📡 [雷达站] 脚本已强行介入底层通信...", "color: red; font-size: 20px; font-weight: bold;");

    // 2. 劫持 WebSocket 构造函数
    const OriginalWebSocket = window.WebSocket;
    window.WebSocket = function(...args) {
        const socket = new OriginalWebSocket(...args);

        socket.addEventListener('message', function(event) {
            try {
                let payload = JSON.parse(event.data);
                
                // 3. 这里的判断逻辑根据你刚才抓到的截图微调
                let targetData = payload.data || payload; // 兼容不同层级
                
                if (targetData.op === 'problem' && targetData.qrcode) {
                    let realUrl = targetData.qrcode;
                    
                    // 4. 【暴力核心】不画图了，直接弹出一个输入框，里面就是 URL
                    // 这样你直接 Ctrl+C 就能带走，没有任何保安能拦截！
                    window.prompt("🔥 截获签到 URL！请复制并在 3 秒内扫码：", realUrl);
                    
                    // 同时在控制台打出一个巨大的蓝色链接
                    console.log("%c🎯 抓到了！点击跳转: " + realUrl, "background: #222; color: #bada55; font-size: 15px;");
                }
            } catch (e) {}
        });

        return socket;
    };
    window.WebSocket.prototype = OriginalWebSocket.prototype;
})();

//在油猴脚本里面尝试之后，没有太大作用，无法突破动态二维码的封锁