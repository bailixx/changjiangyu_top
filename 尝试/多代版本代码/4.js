// ==UserScript==
// @name         📡 长江雨课堂 - 全频段嗅探雷达
// @namespace    http://tampermonkey.net/
// @version      5.0
// @description  在左侧显示实时信号流，定位抓不到包的原因
// @match        *://*.yuketang.cn/*  这个地方更换成每一节课程对应的代码
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 1. 创建左侧悬浮调试窗（直接挂在根节点，确保可见）
    let debugWin = document.createElement('div');
    debugWin.style.cssText = "position:fixed;top:0;left:0;width:300px;height:100vh;background:rgba(0,0,0,0.8);color:#0f0;z-index:1000001;font-family:monospace;font-size:10px;overflow-y:auto;padding:10px;pointer-events:none;border-right:2px solid #0f0;";
    debugWin.innerHTML = "<b>[雷达系统已启动] 正在扫描信号...</b><br>";
    document.documentElement.appendChild(debugWin);

    function logToWin(msg, color="#0f0") {
        let line = document.createElement('div');
        line.style.color = color;
        line.innerHTML = `> ${new Date().toLocaleTimeString()}: ${msg}`;
        debugWin.appendChild(line);
        debugWin.scrollTop = debugWin.scrollHeight;
    }

    // 2. 劫持 WebSocket (WSS)
    const OriginalWS = window.WebSocket;
    window.WebSocket = function(...args) {
        logToWin(`发现 WSS 连接: ${args[0].substring(0,30)}...`, "#0af");
        const socket = new OriginalWS(...args);
        socket.addEventListener('message', function(event) {
            try {
                let d = JSON.parse(event.data);
                logToWin(`WSS 收到包: ${event.data.substring(0,50)}...`, "#fff");
                // 自动识别二维码字段
                if (event.data.includes("qrcode")) {
                    logToWin("!!! [命中] 发现二维码包 !!!", "#f00");
                    window.alert("抓到了！快看 F12！"); // 哪怕 Prompt 不行，Alert 也要试一下
                }
            } catch(e){}
        });
        return socket;
    };
    window.WebSocket.prototype = OriginalWS.prototype;

    // 3. 劫持 Fetch (防止它改用 HTTP 轮询)
    const originalFetch = window.fetch;
    window.fetch = function(...args) {
        logToWin(`Fetch 请求: ${args[0].substring(0,30)}...`, "#ff0");
        return originalFetch.apply(this, arguments);
    };

    logToWin("正在监听 WebSocket 和 Fetch...", "#0f0");
})();

//在油猴脚本里面尝试之后，没有太大作用，无法突破动态二维码的封锁