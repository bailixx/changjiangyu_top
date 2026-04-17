webpackJsonp([1, 6, 7, 8], {
    1178: function(e, t, n) {
        t = e.exports = n(146)(!1),
        t.push([e.i, "/*! PhotoSwipe main CSS by Dmitry Semenov | photoswipe.com | MIT license */.pswp{display:none;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;-ms-touch-action:none;touch-action:none;z-index:1500;-webkit-text-size-adjust:100%;-webkit-backface-visibility:hidden;outline:none}.pswp *{-webkit-box-sizing:border-box;box-sizing:border-box}.pswp img{max-width:none}.pswp--animate_opacity{opacity:.001;will-change:opacity;-webkit-transition:opacity 333ms cubic-bezier(.4,0,.22,1);transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--open{display:block}.pswp--zoom-allowed .pswp__img{cursor:-webkit-zoom-in;cursor:-moz-zoom-in;cursor:zoom-in}.pswp--zoomed-in .pswp__img{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.pswp--dragging .pswp__img{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.pswp__bg{background:#000;opacity:0;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility:hidden}.pswp__bg,.pswp__scroll-wrap{position:absolute;left:0;top:0;width:100%;height:100%}.pswp__scroll-wrap{overflow:hidden}.pswp__container,.pswp__zoom-wrap{-ms-touch-action:none;touch-action:none;position:absolute;left:0;right:0;top:0;bottom:0}.pswp__container,.pswp__img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}.pswp__zoom-wrap{position:absolute;width:100%;-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 333ms cubic-bezier(.4,0,.22,1);transition:transform 333ms cubic-bezier(.4,0,.22,1)}.pswp__bg{will-change:opacity;-webkit-transition:opacity 333ms cubic-bezier(.4,0,.22,1);transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--animated-in .pswp__bg,.pswp--animated-in .pswp__zoom-wrap{-webkit-transition:none;transition:none}.pswp__container,.pswp__zoom-wrap{-webkit-backface-visibility:hidden}.pswp__item{right:0;bottom:0;overflow:hidden}.pswp__img,.pswp__item{position:absolute;left:0;top:0}.pswp__img{width:auto;height:auto}.pswp__img--placeholder{-webkit-backface-visibility:hidden}.pswp__img--placeholder--blank{background:#222}.pswp--ie .pswp__img{width:100%!important;height:auto!important;left:0;top:0}.pswp__error-msg{position:absolute;left:0;top:50%;width:100%;text-align:center;font-size:14px;line-height:16px;margin-top:-8px;color:#ccc}.pswp__error-msg a{color:#ccc;text-decoration:underline}", ""])
    },
    224: function(e, t, n) {
        var o = n(1178);
        "string" == typeof o && (o = [[e.i, o, ""]]),
        o.locals && (e.exports = o.locals);
        n(217)("6d509b54", o, !0)
    },
    225: function(e, t, n) {
        var o, i;
        /*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
        !function(a, r) {
            o = r,
            void 0 !== (i = "function" == typeof o ? o.call(t, n, t, e) : o) && (e.exports = i)
        }(0, function() {
            "use strict";
            return function(e, t) {
                var n, o, i, a, r, l, s, c, u, p, d, m, f, h, w, v, g, y, x, b = this, C = !1, I = !0, _ = !0, T = {
                    barsSize: {
                        top: 44,
                        bottom: "auto"
                    },
                    closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                    timeToIdle: 4e3,
                    timeToIdleOutside: 1e3,
                    loadingIndicatorDelay: 1e3,
                    addCaptionHTMLFn: function(e, t) {
                        return e.title ? (t.children[0].innerHTML = e.title,
                        !0) : (t.children[0].innerHTML = "",
                        !1)
                    },
                    closeEl: !0,
                    captionEl: !0,
                    fullscreenEl: !0,
                    zoomEl: !0,
                    shareEl: !0,
                    counterEl: !0,
                    arrowEl: !0,
                    preloaderEl: !0,
                    tapToClose: !1,
                    tapToToggleControls: !0,
                    clickToCloseNonZoomable: !0,
                    shareButtons: [{
                        id: "facebook",
                        label: "Share on Facebook",
                        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                    }, {
                        id: "twitter",
                        label: "Tweet",
                        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                    }, {
                        id: "pinterest",
                        label: "Pin it",
                        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                    }, {
                        id: "download",
                        label: "Download image",
                        url: "{{raw_image_url}}",
                        download: !0
                    }],
                    getImageURLForShare: function() {
                        return e.currItem.src || ""
                    },
                    getPageURLForShare: function() {
                        return window.location.href
                    },
                    getTextForShare: function() {
                        return e.currItem.title || ""
                    },
                    indexIndicatorSep: " / ",
                    fitControlsWidth: 1200
                }, E = function(e) {
                    if (v)
                        return !0;
                    e = e || window.event,
                    w.timeToIdle && w.mouseUsed && !u && L();
                    for (var n, o, i = e.target || e.srcElement, a = i.getAttribute("class") || "", r = 0; r < B.length; r++)
                        n = B[r],
                        n.onTap && a.indexOf("pswp__" + n.name) > -1 && (n.onTap(),
                        o = !0);
                    if (o) {
                        e.stopPropagation && e.stopPropagation(),
                        v = !0;
                        var l = t.features.isOldAndroid ? 600 : 30;
                        g = setTimeout(function() {
                            v = !1
                        }, l)
                    }
                }, k = function() {
                    return !e.likelyTouchDevice || w.mouseUsed || screen.width > w.fitControlsWidth
                }, D = function(e, n, o) {
                    t[(o ? "add" : "remove") + "Class"](e, "pswp__" + n)
                }, S = function() {
                    var e = 1 === w.getNumItemsFn();
                    e !== h && (D(o, "ui--one-slide", e),
                    h = e)
                }, M = function() {
                    D(s, "share-modal--hidden", _)
                }, F = function() {
                    return _ = !_,
                    _ ? (t.removeClass(s, "pswp__share-modal--fade-in"),
                    setTimeout(function() {
                        _ && M()
                    }, 300)) : (M(),
                    setTimeout(function() {
                        _ || t.addClass(s, "pswp__share-modal--fade-in")
                    }, 30)),
                    _ || A(),
                    !1
                }, O = function(t) {
                    t = t || window.event;
                    var n = t.target || t.srcElement;
                    return e.shout("shareLinkClick", t, n),
                    !!n.href && (!!n.hasAttribute("download") || (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)),
                    _ || F(),
                    !1))
                }, A = function() {
                    for (var e, t, n, o, i, a = "", r = 0; r < w.shareButtons.length; r++)
                        e = w.shareButtons[r],
                        n = w.getImageURLForShare(e),
                        o = w.getPageURLForShare(e),
                        i = w.getTextForShare(e),
                        t = e.url.replace("{{url}}", encodeURIComponent(o)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(i)),
                        a += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>",
                        w.parseShareButtonOut && (a = w.parseShareButtonOut(e, a));
                    s.children[0].innerHTML = a,
                    s.children[0].onclick = O
                }, R = function(e) {
                    for (var n = 0; n < w.closeElClasses.length; n++)
                        if (t.hasClass(e, "pswp__" + w.closeElClasses[n]))
                            return !0
                }, z = 0, L = function() {
                    clearTimeout(x),
                    z = 0,
                    u && b.setIdle(!1)
                }, Z = function(e) {
                    e = e || window.event;
                    var t = e.relatedTarget || e.toElement;
                    t && "HTML" !== t.nodeName || (clearTimeout(x),
                    x = setTimeout(function() {
                        b.setIdle(!0)
                    }, w.timeToIdleOutside))
                }, P = function() {
                    w.fullscreenEl && !t.features.isOldAndroid && (n || (n = b.getFullscreenAPI()),
                    n ? (t.bind(document, n.eventK, b.updateFullscreen),
                    b.updateFullscreen(),
                    t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs"))
                }, N = function() {
                    w.preloaderEl && (U(!0),
                    p("beforeChange", function() {
                        clearTimeout(f),
                        f = setTimeout(function() {
                            e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && U(!1) : U(!0)
                        }, w.loadingIndicatorDelay)
                    }),
                    p("imageLoadComplete", function(t, n) {
                        e.currItem === n && U(!0)
                    }))
                }, U = function(e) {
                    m !== e && (D(d, "preloader--active", !e),
                    m = e)
                }, K = function(e) {
                    var n = e.vGap;
                    if (k()) {
                        var r = w.barsSize;
                        if (w.captionEl && "auto" === r.bottom)
                            if (a || (a = t.createEl("pswp__caption pswp__caption--fake"),
                            a.appendChild(t.createEl("pswp__caption__center")),
                            o.insertBefore(a, i),
                            t.addClass(o, "pswp__ui--fit")),
                            w.addCaptionHTMLFn(e, a, !0)) {
                                var l = a.clientHeight;
                                n.bottom = parseInt(l, 10) || 44
                            } else
                                n.bottom = r.top;
                        else
                            n.bottom = "auto" === r.bottom ? 0 : r.bottom;
                        n.top = r.top
                    } else
                        n.top = n.bottom = 0
                }, H = function() {
                    w.timeToIdle && p("mouseUsed", function() {
                        t.bind(document, "mousemove", L),
                        t.bind(document, "mouseout", Z),
                        y = setInterval(function() {
                            2 === ++z && b.setIdle(!0)
                        }, w.timeToIdle / 2)
                    })
                }, W = function() {
                    p("onVerticalDrag", function(e) {
                        I && e < .95 ? b.hideControls() : !I && e >= .95 && b.showControls()
                    });
                    var e;
                    p("onPinchClose", function(t) {
                        I && t < .9 ? (b.hideControls(),
                        e = !0) : e && !I && t > .9 && b.showControls()
                    }),
                    p("zoomGestureEnded", function() {
                        (e = !1) && !I && b.showControls()
                    })
                }, B = [{
                    name: "caption",
                    option: "captionEl",
                    onInit: function(e) {
                        i = e
                    }
                }, {
                    name: "share-modal",
                    option: "shareEl",
                    onInit: function(e) {
                        s = e
                    },
                    onTap: function() {
                        F()
                    }
                }, {
                    name: "button--share",
                    option: "shareEl",
                    onInit: function(e) {
                        l = e
                    },
                    onTap: function() {
                        F()
                    }
                }, {
                    name: "button--zoom",
                    option: "zoomEl",
                    onTap: e.toggleDesktopZoom
                }, {
                    name: "counter",
                    option: "counterEl",
                    onInit: function(e) {
                        r = e
                    }
                }, {
                    name: "button--close",
                    option: "closeEl",
                    onTap: e.close
                }, {
                    name: "button--arrow--left",
                    option: "arrowEl",
                    onTap: e.prev
                }, {
                    name: "button--arrow--right",
                    option: "arrowEl",
                    onTap: e.next
                }, {
                    name: "button--fs",
                    option: "fullscreenEl",
                    onTap: function() {
                        n.isFullscreen() ? n.exit() : n.enter()
                    }
                }, {
                    name: "preloader",
                    option: "preloaderEl",
                    onInit: function(e) {
                        d = e
                    }
                }], Y = function() {
                    var e, n, i, a = function(o) {
                        if (o)
                            for (var a = o.length, r = 0; r < a; r++) {
                                e = o[r],
                                n = e.className;
                                for (var l = 0; l < B.length; l++)
                                    i = B[l],
                                    n.indexOf("pswp__" + i.name) > -1 && (w[i.option] ? (t.removeClass(e, "pswp__element--disabled"),
                                    i.onInit && i.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                            }
                    };
                    a(o.children);
                    var r = t.getChildByClass(o, "pswp__top-bar");
                    r && a(r.children)
                };
                b.init = function() {
                    t.extend(e.options, T, !0),
                    w = e.options,
                    o = t.getChildByClass(e.scrollWrap, "pswp__ui"),
                    p = e.listen,
                    W(),
                    p("beforeChange", b.update),
                    p("doubleTap", function(t) {
                        var n = e.currItem.initialZoomLevel;
                        e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(w.getDoubleTapZoom(!1, e.currItem), t, 333)
                    }),
                    p("preventDragEvent", function(e, t, n) {
                        var o = e.target || e.srcElement;
                        o && o.getAttribute("class") && e.type.indexOf("mouse") > -1 && (o.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(o.tagName)) && (n.prevent = !1)
                    }),
                    p("bindEvents", function() {
                        t.bind(o, "pswpTap click", E),
                        t.bind(e.scrollWrap, "pswpTap", b.onGlobalTap),
                        e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", b.onMouseOver)
                    }),
                    p("unbindEvents", function() {
                        _ || F(),
                        y && clearInterval(y),
                        t.unbind(document, "mouseout", Z),
                        t.unbind(document, "mousemove", L),
                        t.unbind(o, "pswpTap click", E),
                        t.unbind(e.scrollWrap, "pswpTap", b.onGlobalTap),
                        t.unbind(e.scrollWrap, "mouseover", b.onMouseOver),
                        n && (t.unbind(document, n.eventK, b.updateFullscreen),
                        n.isFullscreen() && (w.hideAnimationDuration = 0,
                        n.exit()),
                        n = null)
                    }),
                    p("destroy", function() {
                        w.captionEl && (a && o.removeChild(a),
                        t.removeClass(i, "pswp__caption--empty")),
                        s && (s.children[0].onclick = null),
                        t.removeClass(o, "pswp__ui--over-close"),
                        t.addClass(o, "pswp__ui--hidden"),
                        b.setIdle(!1)
                    }),
                    w.showAnimationDuration || t.removeClass(o, "pswp__ui--hidden"),
                    p("initialZoomIn", function() {
                        w.showAnimationDuration && t.removeClass(o, "pswp__ui--hidden")
                    }),
                    p("initialZoomOut", function() {
                        t.addClass(o, "pswp__ui--hidden")
                    }),
                    p("parseVerticalMargin", K),
                    Y(),
                    w.shareEl && l && s && (_ = !0),
                    S(),
                    H(),
                    P(),
                    N()
                }
                ,
                b.setIdle = function(e) {
                    u = e,
                    D(o, "ui--idle", e)
                }
                ,
                b.update = function() {
                    I && e.currItem ? (b.updateIndexIndicator(),
                    w.captionEl && (w.addCaptionHTMLFn(e.currItem, i),
                    D(i, "caption--empty", !e.currItem.title)),
                    C = !0) : C = !1,
                    _ || F(),
                    S()
                }
                ,
                b.updateFullscreen = function(o) {
                    o && setTimeout(function() {
                        e.setScrollOffset(0, t.getScrollY())
                    }, 50),
                    t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
                }
                ,
                b.updateIndexIndicator = function() {
                    w.counterEl && (r.innerHTML = e.getCurrentIndex() + 1 + w.indexIndicatorSep + w.getNumItemsFn())
                }
                ,
                b.onGlobalTap = function(n) {
                    n = n || window.event;
                    var o = n.target || n.srcElement;
                    if (!v)
                        if (n.detail && "mouse" === n.detail.pointerType) {
                            if (R(o))
                                return void e.close();
                            t.hasClass(o, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? w.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
                        } else if (w.tapToToggleControls && (I ? b.hideControls() : b.showControls()),
                        w.tapToClose && (t.hasClass(o, "pswp__img") || R(o)))
                            return void e.close()
                }
                ,
                b.onMouseOver = function(e) {
                    e = e || window.event;
                    var t = e.target || e.srcElement;
                    D(o, "ui--over-close", R(t))
                }
                ,
                b.hideControls = function() {
                    t.addClass(o, "pswp__ui--hidden"),
                    I = !1
                }
                ,
                b.showControls = function() {
                    I = !0,
                    C || b.update(),
                    t.removeClass(o, "pswp__ui--hidden")
                }
                ,
                b.supportsFullscreen = function() {
                    var e = document;
                    return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
                }
                ,
                b.getFullscreenAPI = function() {
                    var t, n = document.documentElement, o = "fullscreenchange";
                    return n.requestFullscreen ? t = {
                        enterK: "requestFullscreen",
                        exitK: "exitFullscreen",
                        elementK: "fullscreenElement",
                        eventK: o
                    } : n.mozRequestFullScreen ? t = {
                        enterK: "mozRequestFullScreen",
                        exitK: "mozCancelFullScreen",
                        elementK: "mozFullScreenElement",
                        eventK: "moz" + o
                    } : n.webkitRequestFullscreen ? t = {
                        enterK: "webkitRequestFullscreen",
                        exitK: "webkitExitFullscreen",
                        elementK: "webkitFullscreenElement",
                        eventK: "webkit" + o
                    } : n.msRequestFullscreen && (t = {
                        enterK: "msRequestFullscreen",
                        exitK: "msExitFullscreen",
                        elementK: "msFullscreenElement",
                        eventK: "MSFullscreenChange"
                    }),
                    t && (t.enter = function() {
                        if (c = w.closeOnScroll,
                        w.closeOnScroll = !1,
                        "webkitRequestFullscreen" !== this.enterK)
                            return e.template[this.enterK]();
                        e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                    }
                    ,
                    t.exit = function() {
                        return w.closeOnScroll = c,
                        document[this.exitK]()
                    }
                    ,
                    t.isFullscreen = function() {
                        return document[this.elementK]
                    }
                    ),
                    t
                }
            }
        })
    },
    226: function(e, t, n) {
        var o, i;
        /*! PhotoSwipe - v4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
        !function(a, r) {
            o = r,
            void 0 !== (i = "function" == typeof o ? o.call(t, n, t, e) : o) && (e.exports = i)
        }(0, function() {
            "use strict";
            return function(e, t, n, o) {
                var i = {
                    features: null,
                    bind: function(e, t, n, o) {
                        var i = (o ? "remove" : "add") + "EventListener";
                        t = t.split(" ");
                        for (var a = 0; a < t.length; a++)
                            t[a] && e[i](t[a], n, !1)
                    },
                    isArray: function(e) {
                        return e instanceof Array
                    },
                    createEl: function(e, t) {
                        var n = document.createElement(t || "div");
                        return e && (n.className = e),
                        n
                    },
                    getScrollY: function() {
                        var e = window.pageYOffset;
                        return void 0 !== e ? e : document.documentElement.scrollTop
                    },
                    unbind: function(e, t, n) {
                        i.bind(e, t, n, !0)
                    },
                    removeClass: function(e, t) {
                        var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                        e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                    },
                    addClass: function(e, t) {
                        i.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
                    },
                    hasClass: function(e, t) {
                        return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
                    },
                    getChildByClass: function(e, t) {
                        for (var n = e.firstChild; n; ) {
                            if (i.hasClass(n, t))
                                return n;
                            n = n.nextSibling
                        }
                    },
                    arraySearch: function(e, t, n) {
                        for (var o = e.length; o--; )
                            if (e[o][n] === t)
                                return o;
                        return -1
                    },
                    extend: function(e, t, n) {
                        for (var o in t)
                            if (t.hasOwnProperty(o)) {
                                if (n && e.hasOwnProperty(o))
                                    continue;
                                e[o] = t[o]
                            }
                    },
                    easing: {
                        sine: {
                            out: function(e) {
                                return Math.sin(e * (Math.PI / 2))
                            },
                            inOut: function(e) {
                                return -(Math.cos(Math.PI * e) - 1) / 2
                            }
                        },
                        cubic: {
                            out: function(e) {
                                return --e * e * e + 1
                            }
                        }
                    },
                    detectFeatures: function() {
                        if (i.features)
                            return i.features;
                        var e = i.createEl()
                          , t = e.style
                          , n = ""
                          , o = {};
                        if (o.oldIE = document.all && !document.addEventListener,
                        o.touch = "ontouchstart"in window,
                        window.requestAnimationFrame && (o.raf = window.requestAnimationFrame,
                        o.caf = window.cancelAnimationFrame),
                        o.pointerEvent = !!window.PointerEvent || navigator.msPointerEnabled,
                        !o.pointerEvent) {
                            var a = navigator.userAgent;
                            if (/iP(hone|od)/.test(navigator.platform)) {
                                var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                                r && r.length > 0 && (r = parseInt(r[1], 10)) >= 1 && r < 8 && (o.isOldIOSPhone = !0)
                            }
                            var l = a.match(/Android\s([0-9\.]*)/)
                              , s = l ? l[1] : 0;
                            s = parseFloat(s),
                            s >= 1 && (s < 4.4 && (o.isOldAndroid = !0),
                            o.androidVersion = s),
                            o.isMobileOpera = /opera mini|opera mobi/i.test(a)
                        }
                        for (var c, u, p = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], m = 0; m < 4; m++) {
                            n = d[m];
                            for (var f = 0; f < 3; f++)
                                c = p[f],
                                u = n + (n ? c.charAt(0).toUpperCase() + c.slice(1) : c),
                                !o[c] && u in t && (o[c] = u);
                            n && !o.raf && (n = n.toLowerCase(),
                            o.raf = window[n + "RequestAnimationFrame"],
                            o.raf && (o.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]))
                        }
                        if (!o.raf) {
                            var h = 0;
                            o.raf = function(e) {
                                var t = (new Date).getTime()
                                  , n = Math.max(0, 16 - (t - h))
                                  , o = window.setTimeout(function() {
                                    e(t + n)
                                }, n);
                                return h = t + n,
                                o
                            }
                            ,
                            o.caf = function(e) {
                                clearTimeout(e)
                            }
                        }
                        return o.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
                        i.features = o,
                        o
                    }
                };
                i.detectFeatures(),
                i.features.oldIE && (i.bind = function(e, t, n, o) {
                    t = t.split(" ");
                    for (var i, a = (o ? "detach" : "attach") + "Event", r = function() {
                        n.handleEvent.call(n)
                    }, l = 0; l < t.length; l++)
                        if (i = t[l])
                            if ("object" == typeof n && n.handleEvent) {
                                if (o) {
                                    if (!n["oldIE" + i])
                                        return !1
                                } else
                                    n["oldIE" + i] = r;
                                e[a]("on" + i, n["oldIE" + i])
                            } else
                                e[a]("on" + i, n)
                }
                );
                var a = this
                  , r = {
                    allowPanToNext: !0,
                    spacing: .12,
                    bgOpacity: 1,
                    mouseUsed: !1,
                    loop: !0,
                    pinchToClose: !0,
                    closeOnScroll: !0,
                    closeOnVerticalDrag: !0,
                    verticalDragRange: .75,
                    hideAnimationDuration: 333,
                    showAnimationDuration: 333,
                    showHideOpacity: !1,
                    focus: !0,
                    escKey: !0,
                    arrowKeys: !0,
                    mainScrollEndFriction: .35,
                    panEndFriction: .35,
                    isClickableElement: function(e) {
                        return "A" === e.tagName
                    },
                    getDoubleTapZoom: function(e, t) {
                        return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
                    },
                    maxSpreadZoom: 1.33,
                    modal: !0,
                    scaleMode: "fit"
                };
                i.extend(r, o);
                var l, s, c, u, p, d, m, f, h, w, v, g, y, x, b, C, I, _, T, E, k, D, S, M, F, O, A, R, z, L, Z, P, N, U, K, H, W, B, Y, G, q, V, X, $, j, J, Q, ee, te, ne, oe, ie, ae, re, le, se, ce, ue = function() {
                    return {
                        x: 0,
                        y: 0
                    }
                }, pe = ue(), de = ue(), me = ue(), fe = {}, he = 0, we = {}, ve = ue(), ge = 0, ye = !0, xe = [], be = {}, Ce = !1, Ie = function(e, t) {
                    i.extend(a, t.publicMethods),
                    xe.push(e)
                }, _e = function(e) {
                    var t = $t();
                    return e > t - 1 ? e - t : e < 0 ? t + e : e
                }, Te = {}, Ee = function(e, t) {
                    return Te[e] || (Te[e] = []),
                    Te[e].push(t)
                }, ke = function(e) {
                    var t = Te[e];
                    if (t) {
                        var n = Array.prototype.slice.call(arguments);
                        n.shift();
                        for (var o = 0; o < t.length; o++)
                            t[o].apply(a, n)
                    }
                }, De = function() {
                    return (new Date).getTime()
                }, Se = function(e) {
                    le = e,
                    a.bg.style.opacity = e * r.bgOpacity
                }, Me = function(e, t, n, o, i) {
                    (!Ce || i && i !== a.currItem) && (o /= i ? i.fitRatio : a.currItem.fitRatio),
                    e[D] = g + t + "px, " + n + "px" + y + " scale(" + o + ")"
                }, Fe = function(e) {
                    ne && (e && (w > a.currItem.fitRatio ? Ce || (cn(a.currItem, !1, !0),
                    Ce = !0) : Ce && (cn(a.currItem),
                    Ce = !1)),
                    Me(ne, me.x, me.y, w))
                }, Oe = function(e) {
                    e.container && Me(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
                }, Ae = function(e, t) {
                    t[D] = g + e + "px, 0px" + y
                }, Re = function(e, t) {
                    if (!r.loop && t) {
                        var n = u + (ve.x * he - e) / ve.x
                          , o = Math.round(e - ht.x);
                        (n < 0 && o > 0 || n >= $t() - 1 && o < 0) && (e = ht.x + o * r.mainScrollEndFriction)
                    }
                    ht.x = e,
                    Ae(e, p)
                }, ze = function(e, t) {
                    var n = wt[e] - we[e];
                    return de[e] + pe[e] + n - n * (t / v)
                }, Le = function(e, t) {
                    e.x = t.x,
                    e.y = t.y,
                    t.id && (e.id = t.id)
                }, Ze = function(e) {
                    e.x = Math.round(e.x),
                    e.y = Math.round(e.y)
                }, Pe = null, Ne = function() {
                    Pe && (i.unbind(document, "mousemove", Ne),
                    i.addClass(e, "pswp--has_mouse"),
                    r.mouseUsed = !0,
                    ke("mouseUsed")),
                    Pe = setTimeout(function() {
                        Pe = null
                    }, 100)
                }, Ue = function() {
                    i.bind(document, "keydown", a),
                    Z.transform && i.bind(a.scrollWrap, "click", a),
                    r.mouseUsed || i.bind(document, "mousemove", Ne),
                    i.bind(window, "resize scroll orientationchange", a),
                    ke("bindEvents")
                }, Ke = function() {
                    i.unbind(window, "resize scroll orientationchange", a),
                    i.unbind(window, "scroll", h.scroll),
                    i.unbind(document, "keydown", a),
                    i.unbind(document, "mousemove", Ne),
                    Z.transform && i.unbind(a.scrollWrap, "click", a),
                    Y && i.unbind(window, m, a),
                    clearTimeout(P),
                    ke("unbindEvents")
                }, He = function(e, t) {
                    var n = an(a.currItem, fe, e);
                    return t && (te = n),
                    n
                }, We = function(e) {
                    return e || (e = a.currItem),
                    e.initialZoomLevel
                }, Be = function(e) {
                    return e || (e = a.currItem),
                    e.w > 0 ? r.maxSpreadZoom : 1
                }, Ye = function(e, t, n, o) {
                    return o === a.currItem.initialZoomLevel ? (n[e] = a.currItem.initialPosition[e],
                    !0) : (n[e] = ze(e, o),
                    n[e] > t.min[e] ? (n[e] = t.min[e],
                    !0) : n[e] < t.max[e] && (n[e] = t.max[e],
                    !0))
                }, Ge = function() {
                    if (D) {
                        var t = Z.perspective && !M;
                        return g = "translate" + (t ? "3d(" : "("),
                        void (y = Z.perspective ? ", 0px)" : ")")
                    }
                    D = "left",
                    i.addClass(e, "pswp--ie"),
                    Ae = function(e, t) {
                        t.left = e + "px"
                    }
                    ,
                    Oe = function(e) {
                        var t = e.fitRatio > 1 ? 1 : e.fitRatio
                          , n = e.container.style
                          , o = t * e.w
                          , i = t * e.h;
                        n.width = o + "px",
                        n.height = i + "px",
                        n.left = e.initialPosition.x + "px",
                        n.top = e.initialPosition.y + "px"
                    }
                    ,
                    Fe = function() {
                        if (ne) {
                            var e = ne
                              , t = a.currItem
                              , n = t.fitRatio > 1 ? 1 : t.fitRatio
                              , o = n * t.w
                              , i = n * t.h;
                            e.width = o + "px",
                            e.height = i + "px",
                            e.left = me.x + "px",
                            e.top = me.y + "px"
                        }
                    }
                }, qe = function(e) {
                    var t = "";
                    r.escKey && 27 === e.keyCode ? t = "close" : r.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")),
                    t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                    a[t]()))
                }, Ve = function(e) {
                    e && (V || q || oe || W) && (e.preventDefault(),
                    e.stopPropagation())
                }, Xe = function() {
                    a.setScrollOffset(0, i.getScrollY())
                }, $e = {}, je = 0, Je = function(e) {
                    $e[e] && ($e[e].raf && O($e[e].raf),
                    je--,
                    delete $e[e])
                }, Qe = function(e) {
                    $e[e] && Je(e),
                    $e[e] || (je++,
                    $e[e] = {})
                }, et = function() {
                    for (var e in $e)
                        $e.hasOwnProperty(e) && Je(e)
                }, tt = function(e, t, n, o, i, a, r) {
                    var l, s = De();
                    Qe(e);
                    var c = function() {
                        if ($e[e]) {
                            if ((l = De() - s) >= o)
                                return Je(e),
                                a(n),
                                void (r && r());
                            a((n - t) * i(l / o) + t),
                            $e[e].raf = F(c)
                        }
                    };
                    c()
                }, nt = {
                    shout: ke,
                    listen: Ee,
                    viewportSize: fe,
                    options: r,
                    isMainScrollAnimating: function() {
                        return oe
                    },
                    getZoomLevel: function() {
                        return w
                    },
                    getCurrentIndex: function() {
                        return u
                    },
                    isDragging: function() {
                        return Y
                    },
                    isZooming: function() {
                        return J
                    },
                    setScrollOffset: function(e, t) {
                        we.x = e,
                        L = we.y = t,
                        ke("updateScrollOffset", we)
                    },
                    applyZoomPan: function(e, t, n, o) {
                        me.x = t,
                        me.y = n,
                        w = e,
                        Fe(o)
                    },
                    init: function() {
                        if (!l && !s) {
                            var n;
                            a.framework = i,
                            a.template = e,
                            a.bg = i.getChildByClass(e, "pswp__bg"),
                            A = e.className,
                            l = !0,
                            Z = i.detectFeatures(),
                            F = Z.raf,
                            O = Z.caf,
                            D = Z.transform,
                            z = Z.oldIE,
                            a.scrollWrap = i.getChildByClass(e, "pswp__scroll-wrap"),
                            a.container = i.getChildByClass(a.scrollWrap, "pswp__container"),
                            p = a.container.style,
                            a.itemHolders = C = [{
                                el: a.container.children[0],
                                wrap: 0,
                                index: -1
                            }, {
                                el: a.container.children[1],
                                wrap: 0,
                                index: -1
                            }, {
                                el: a.container.children[2],
                                wrap: 0,
                                index: -1
                            }],
                            C[0].el.style.display = C[2].el.style.display = "none",
                            Ge(),
                            h = {
                                resize: a.updateSize,
                                orientationchange: function() {
                                    clearTimeout(P),
                                    P = setTimeout(function() {
                                        fe.x !== a.scrollWrap.clientWidth && a.updateSize()
                                    }, 500)
                                },
                                scroll: Xe,
                                keydown: qe,
                                click: Ve
                            };
                            var o = Z.isOldIOSPhone || Z.isOldAndroid || Z.isMobileOpera;
                            for (Z.animationName && Z.transform && !o || (r.showAnimationDuration = r.hideAnimationDuration = 0),
                            n = 0; n < xe.length; n++)
                                a["init" + xe[n]]();
                            if (t) {
                                (a.ui = new t(a,i)).init()
                            }
                            ke("firstUpdate"),
                            u = u || r.index || 0,
                            (isNaN(u) || u < 0 || u >= $t()) && (u = 0),
                            a.currItem = Xt(u),
                            (Z.isOldIOSPhone || Z.isOldAndroid) && (ye = !1),
                            e.setAttribute("aria-hidden", "false"),
                            r.modal && (ye ? e.style.position = "fixed" : (e.style.position = "absolute",
                            e.style.top = i.getScrollY() + "px")),
                            void 0 === L && (ke("initialLayout"),
                            L = R = i.getScrollY());
                            var c = "pswp--open ";
                            for (r.mainClass && (c += r.mainClass + " "),
                            r.showHideOpacity && (c += "pswp--animate_opacity "),
                            c += M ? "pswp--touch" : "pswp--notouch",
                            c += Z.animationName ? " pswp--css_animation" : "",
                            c += Z.svg ? " pswp--svg" : "",
                            i.addClass(e, c),
                            a.updateSize(),
                            d = -1,
                            ge = null,
                            n = 0; n < 3; n++)
                                Ae((n + d) * ve.x, C[n].el.style);
                            z || i.bind(a.scrollWrap, f, a),
                            Ee("initialZoomInEnd", function() {
                                a.setContent(C[0], u - 1),
                                a.setContent(C[2], u + 1),
                                C[0].el.style.display = C[2].el.style.display = "block",
                                r.focus && e.focus(),
                                Ue()
                            }),
                            a.setContent(C[1], u),
                            a.updateCurrItem(),
                            ke("afterInit"),
                            ye || (x = setInterval(function() {
                                je || Y || J || w !== a.currItem.initialZoomLevel || a.updateSize()
                            }, 1e3)),
                            i.addClass(e, "pswp--visible")
                        }
                    },
                    close: function() {
                        l && (l = !1,
                        s = !0,
                        ke("close"),
                        Ke(),
                        Jt(a.currItem, null, !0, a.destroy))
                    },
                    destroy: function() {
                        ke("destroy"),
                        Yt && clearTimeout(Yt),
                        e.setAttribute("aria-hidden", "true"),
                        e.className = A,
                        x && clearInterval(x),
                        i.unbind(a.scrollWrap, f, a),
                        i.unbind(window, "scroll", a),
                        bt(),
                        et(),
                        Te = null
                    },
                    panTo: function(e, t, n) {
                        n || (e > te.min.x ? e = te.min.x : e < te.max.x && (e = te.max.x),
                        t > te.min.y ? t = te.min.y : t < te.max.y && (t = te.max.y)),
                        me.x = e,
                        me.y = t,
                        Fe()
                    },
                    handleEvent: function(e) {
                        e = e || window.event,
                        h[e.type] && h[e.type](e)
                    },
                    goTo: function(e) {
                        e = _e(e);
                        var t = e - u;
                        ge = t,
                        u = e,
                        a.currItem = Xt(u),
                        he -= t,
                        Re(ve.x * he),
                        et(),
                        oe = !1,
                        a.updateCurrItem()
                    },
                    next: function() {
                        a.goTo(u + 1)
                    },
                    prev: function() {
                        a.goTo(u - 1)
                    },
                    updateCurrZoomItem: function(e) {
                        if (e && ke("beforeChange", 0),
                        C[1].el.children.length) {
                            var t = C[1].el.children[0];
                            ne = i.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                        } else
                            ne = null;
                        te = a.currItem.bounds,
                        v = w = a.currItem.initialZoomLevel,
                        me.x = te.center.x,
                        me.y = te.center.y,
                        e && ke("afterChange")
                    },
                    invalidateCurrItems: function() {
                        b = !0;
                        for (var e = 0; e < 3; e++)
                            C[e].item && (C[e].item.needsUpdate = !0)
                    },
                    updateCurrItem: function(e) {
                        if (0 !== ge) {
                            var t, n = Math.abs(ge);
                            if (!(e && n < 2)) {
                                a.currItem = Xt(u),
                                Ce = !1,
                                ke("beforeChange", ge),
                                n >= 3 && (d += ge + (ge > 0 ? -3 : 3),
                                n = 3);
                                for (var o = 0; o < n; o++)
                                    ge > 0 ? (t = C.shift(),
                                    C[2] = t,
                                    d++,
                                    Ae((d + 2) * ve.x, t.el.style),
                                    a.setContent(t, u - n + o + 1 + 1)) : (t = C.pop(),
                                    C.unshift(t),
                                    d--,
                                    Ae(d * ve.x, t.el.style),
                                    a.setContent(t, u + n - o - 1 - 1));
                                if (ne && 1 === Math.abs(ge)) {
                                    var i = Xt(I);
                                    i.initialZoomLevel !== w && (an(i, fe),
                                    cn(i),
                                    Oe(i))
                                }
                                ge = 0,
                                a.updateCurrZoomItem(),
                                I = u,
                                ke("afterChange")
                            }
                        }
                    },
                    updateSize: function(t) {
                        if (!ye && r.modal) {
                            var n = i.getScrollY();
                            if (L !== n && (e.style.top = n + "px",
                            L = n),
                            !t && be.x === window.innerWidth && be.y === window.innerHeight)
                                return;
                            be.x = window.innerWidth,
                            be.y = window.innerHeight,
                            e.style.height = be.y + "px"
                        }
                        if (fe.x = a.scrollWrap.clientWidth,
                        fe.y = a.scrollWrap.clientHeight,
                        Xe(),
                        ve.x = fe.x + Math.round(fe.x * r.spacing),
                        ve.y = fe.y,
                        Re(ve.x * he),
                        ke("beforeResize"),
                        void 0 !== d) {
                            for (var o, l, s, c = 0; c < 3; c++)
                                o = C[c],
                                Ae((c + d) * ve.x, o.el.style),
                                s = u + c - 1,
                                r.loop && $t() > 2 && (s = _e(s)),
                                l = Xt(s),
                                l && (b || l.needsUpdate || !l.bounds) ? (a.cleanSlide(l),
                                a.setContent(o, s),
                                1 === c && (a.currItem = l,
                                a.updateCurrZoomItem(!0)),
                                l.needsUpdate = !1) : -1 === o.index && s >= 0 && a.setContent(o, s),
                                l && l.container && (an(l, fe),
                                cn(l),
                                Oe(l));
                            b = !1
                        }
                        v = w = a.currItem.initialZoomLevel,
                        te = a.currItem.bounds,
                        te && (me.x = te.center.x,
                        me.y = te.center.y,
                        Fe(!0)),
                        ke("resize")
                    },
                    zoomTo: function(e, t, n, o, a) {
                        t && (v = w,
                        wt.x = Math.abs(t.x) - me.x,
                        wt.y = Math.abs(t.y) - me.y,
                        Le(de, me));
                        var r = He(e, !1)
                          , l = {};
                        Ye("x", r, l, e),
                        Ye("y", r, l, e);
                        var s = w
                          , c = {
                            x: me.x,
                            y: me.y
                        };
                        Ze(l);
                        var u = function(t) {
                            1 === t ? (w = e,
                            me.x = l.x,
                            me.y = l.y) : (w = (e - s) * t + s,
                            me.x = (l.x - c.x) * t + c.x,
                            me.y = (l.y - c.y) * t + c.y),
                            a && a(t),
                            Fe(1 === t)
                        };
                        n ? tt("customZoomTo", 0, 1, n, o || i.easing.sine.inOut, u) : u(1)
                    }
                }, ot = {}, it = {}, at = {}, rt = {}, lt = {}, st = [], ct = {}, ut = [], pt = {}, dt = 0, mt = ue(), ft = 0, ht = ue(), wt = ue(), vt = ue(), gt = function(e, t) {
                    return e.x === t.x && e.y === t.y
                }, yt = function(e, t) {
                    return Math.abs(e.x - t.x) < 25 && Math.abs(e.y - t.y) < 25
                }, xt = function(e, t) {
                    return pt.x = Math.abs(e.x - t.x),
                    pt.y = Math.abs(e.y - t.y),
                    Math.sqrt(pt.x * pt.x + pt.y * pt.y)
                }, bt = function() {
                    X && (O(X),
                    X = null)
                }, Ct = function() {
                    Y && (X = F(Ct),
                    Pt())
                }, It = function() {
                    return !("fit" === r.scaleMode && w === a.currItem.initialZoomLevel)
                }, _t = function(e, t) {
                    return !(!e || e === document) && (!(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : _t(e.parentNode, t)))
                }, Tt = {}, Et = function(e, t) {
                    return Tt.prevent = !_t(e.target, r.isClickableElement),
                    ke("preventDragEvent", e, t, Tt),
                    Tt.prevent
                }, kt = function(e, t) {
                    return t.x = e.pageX,
                    t.y = e.pageY,
                    t.id = e.identifier,
                    t
                }, Dt = function(e, t, n) {
                    n.x = .5 * (e.x + t.x),
                    n.y = .5 * (e.y + t.y)
                }, St = function(e, t, n) {
                    if (e - U > 50) {
                        var o = ut.length > 2 ? ut.shift() : {};
                        o.x = t,
                        o.y = n,
                        ut.push(o),
                        U = e
                    }
                }, Mt = function() {
                    var e = me.y - a.currItem.initialPosition.y;
                    return 1 - Math.abs(e / (fe.y / 2))
                }, Ft = {}, Ot = {}, At = [], Rt = function(e) {
                    for (; At.length > 0; )
                        At.pop();
                    return S ? (ce = 0,
                    st.forEach(function(e) {
                        0 === ce ? At[0] = e : 1 === ce && (At[1] = e),
                        ce++
                    })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (At[0] = kt(e.touches[0], Ft),
                    e.touches.length > 1 && (At[1] = kt(e.touches[1], Ot))) : (Ft.x = e.pageX,
                    Ft.y = e.pageY,
                    Ft.id = "",
                    At[0] = Ft),
                    At
                }, zt = function(e, t) {
                    var n, o, i, l, s = me[e] + t[e], c = t[e] > 0, u = ht.x + t.x, p = ht.x - ct.x;
                    if (n = s > te.min[e] || s < te.max[e] ? r.panEndFriction : 1,
                    s = me[e] + t[e] * n,
                    (r.allowPanToNext || w === a.currItem.initialZoomLevel) && (ne ? "h" !== ie || "x" !== e || q || (c ? (s > te.min[e] && (n = r.panEndFriction,
                    te.min[e] - s,
                    o = te.min[e] - de[e]),
                    (o <= 0 || p < 0) && $t() > 1 ? (l = u,
                    p < 0 && u > ct.x && (l = ct.x)) : te.min.x !== te.max.x && (i = s)) : (s < te.max[e] && (n = r.panEndFriction,
                    s - te.max[e],
                    o = de[e] - te.max[e]),
                    (o <= 0 || p > 0) && $t() > 1 ? (l = u,
                    p > 0 && u < ct.x && (l = ct.x)) : te.min.x !== te.max.x && (i = s))) : l = u,
                    "x" === e))
                        return void 0 !== l && (Re(l, !0),
                        $ = l !== ct.x),
                        te.min.x !== te.max.x && (void 0 !== i ? me.x = i : $ || (me.x += t.x * n)),
                        void 0 !== l;
                    oe || $ || w > a.currItem.fitRatio && (me[e] += t[e] * n)
                }, Lt = function(e) {
                    if (!("mousedown" === e.type && e.button > 0)) {
                        if (Vt)
                            return void e.preventDefault();
                        if (!B || "mousedown" !== e.type) {
                            if (Et(e, !0) && e.preventDefault(),
                            ke("pointerDown"),
                            S) {
                                var t = i.arraySearch(st, e.pointerId, "id");
                                t < 0 && (t = st.length),
                                st[t] = {
                                    x: e.pageX,
                                    y: e.pageY,
                                    id: e.pointerId
                                }
                            }
                            var n = Rt(e)
                              , o = n.length;
                            j = null,
                            et(),
                            Y && 1 !== o || (Y = ae = !0,
                            i.bind(window, m, a),
                            H = se = re = W = $ = V = G = q = !1,
                            ie = null,
                            ke("firstTouchStart", n),
                            Le(de, me),
                            pe.x = pe.y = 0,
                            Le(rt, n[0]),
                            Le(lt, rt),
                            ct.x = ve.x * he,
                            ut = [{
                                x: rt.x,
                                y: rt.y
                            }],
                            U = N = De(),
                            He(w, !0),
                            bt(),
                            Ct()),
                            !J && o > 1 && !oe && !$ && (v = w,
                            q = !1,
                            J = G = !0,
                            pe.y = pe.x = 0,
                            Le(de, me),
                            Le(ot, n[0]),
                            Le(it, n[1]),
                            Dt(ot, it, vt),
                            wt.x = Math.abs(vt.x) - me.x,
                            wt.y = Math.abs(vt.y) - me.y,
                            Q = ee = xt(ot, it))
                        }
                    }
                }, Zt = function(e) {
                    if (e.preventDefault(),
                    S) {
                        var t = i.arraySearch(st, e.pointerId, "id");
                        if (t > -1) {
                            var n = st[t];
                            n.x = e.pageX,
                            n.y = e.pageY
                        }
                    }
                    if (Y) {
                        var o = Rt(e);
                        if (ie || V || J)
                            j = o;
                        else if (ht.x !== ve.x * he)
                            ie = "h";
                        else {
                            var a = Math.abs(o[0].x - rt.x) - Math.abs(o[0].y - rt.y);
                            Math.abs(a) >= 10 && (ie = a > 0 ? "h" : "v",
                            j = o)
                        }
                    }
                }, Pt = function() {
                    if (j) {
                        var e = j.length;
                        if (0 !== e)
                            if (Le(ot, j[0]),
                            at.x = ot.x - rt.x,
                            at.y = ot.y - rt.y,
                            J && e > 1) {
                                if (rt.x = ot.x,
                                rt.y = ot.y,
                                !at.x && !at.y && gt(j[1], it))
                                    return;
                                Le(it, j[1]),
                                q || (q = !0,
                                ke("zoomGestureStarted"));
                                var t = xt(ot, it)
                                  , n = Wt(t);
                                n > a.currItem.initialZoomLevel + a.currItem.initialZoomLevel / 15 && (se = !0);
                                var o = 1
                                  , i = We()
                                  , l = Be();
                                if (n < i)
                                    if (r.pinchToClose && !se && v <= a.currItem.initialZoomLevel) {
                                        var s = i - n
                                          , c = 1 - s / (i / 1.2);
                                        Se(c),
                                        ke("onPinchClose", c),
                                        re = !0
                                    } else
                                        o = (i - n) / i,
                                        o > 1 && (o = 1),
                                        n = i - o * (i / 3);
                                else
                                    n > l && (o = (n - l) / (6 * i),
                                    o > 1 && (o = 1),
                                    n = l + o * i);
                                o < 0 && (o = 0),
                                Q = t,
                                Dt(ot, it, mt),
                                pe.x += mt.x - vt.x,
                                pe.y += mt.y - vt.y,
                                Le(vt, mt),
                                me.x = ze("x", n),
                                me.y = ze("y", n),
                                H = n > w,
                                w = n,
                                Fe()
                            } else {
                                if (!ie)
                                    return;
                                if (ae && (ae = !1,
                                Math.abs(at.x) >= 10 && (at.x -= j[0].x - lt.x),
                                Math.abs(at.y) >= 10 && (at.y -= j[0].y - lt.y)),
                                rt.x = ot.x,
                                rt.y = ot.y,
                                0 === at.x && 0 === at.y)
                                    return;
                                if ("v" === ie && r.closeOnVerticalDrag && !It()) {
                                    pe.y += at.y,
                                    me.y += at.y;
                                    var u = Mt();
                                    return W = !0,
                                    ke("onVerticalDrag", u),
                                    Se(u),
                                    void Fe()
                                }
                                St(De(), ot.x, ot.y),
                                V = !0,
                                te = a.currItem.bounds;
                                var p = zt("x", at);
                                p || (zt("y", at),
                                Ze(me),
                                Fe())
                            }
                    }
                }, Nt = function(e) {
                    if (Z.isOldAndroid) {
                        if (B && "mouseup" === e.type)
                            return;
                        e.type.indexOf("touch") > -1 && (clearTimeout(B),
                        B = setTimeout(function() {
                            B = 0
                        }, 600))
                    }
                    ke("pointerUp"),
                    Et(e, !1) && e.preventDefault();
                    var t;
                    if (S) {
                        var n = i.arraySearch(st, e.pointerId, "id");
                        if (n > -1)
                            if (t = st.splice(n, 1)[0],
                            navigator.msPointerEnabled) {
                                var o = {
                                    4: "mouse",
                                    2: "touch",
                                    3: "pen"
                                };
                                t.type = o[e.pointerType],
                                t.type || (t.type = e.pointerType || "mouse")
                            } else
                                t.type = e.pointerType || "mouse"
                    }
                    var l, s = Rt(e), c = s.length;
                    if ("mouseup" === e.type && (c = 0),
                    2 === c)
                        return j = null,
                        !0;
                    1 === c && Le(lt, s[0]),
                    0 !== c || ie || oe || (t || ("mouseup" === e.type ? t = {
                        x: e.pageX,
                        y: e.pageY,
                        type: "mouse"
                    } : e.changedTouches && e.changedTouches[0] && (t = {
                        x: e.changedTouches[0].pageX,
                        y: e.changedTouches[0].pageY,
                        type: "touch"
                    })),
                    ke("touchRelease", e, t));
                    var u = -1;
                    if (0 === c && (Y = !1,
                    i.unbind(window, m, a),
                    bt(),
                    J ? u = 0 : -1 !== ft && (u = De() - ft)),
                    ft = 1 === c ? De() : -1,
                    l = -1 !== u && u < 150 ? "zoom" : "swipe",
                    J && c < 2 && (J = !1,
                    1 === c && (l = "zoomPointerUp"),
                    ke("zoomGestureEnded")),
                    j = null,
                    V || q || oe || W)
                        if (et(),
                        K || (K = Ut()),
                        K.calculateSwipeSpeed("x"),
                        W) {
                            var p = Mt();
                            if (p < r.verticalDragRange)
                                a.close();
                            else {
                                var d = me.y
                                  , f = le;
                                tt("verticalDrag", 0, 1, 300, i.easing.cubic.out, function(e) {
                                    me.y = (a.currItem.initialPosition.y - d) * e + d,
                                    Se((1 - f) * e + f),
                                    Fe()
                                }),
                                ke("onVerticalDrag", 1)
                            }
                        } else {
                            if (($ || oe) && 0 === c) {
                                var h = Ht(l, K);
                                if (h)
                                    return;
                                l = "zoomPointerUp"
                            }
                            if (!oe)
                                return "swipe" !== l ? void Bt() : void (!$ && w > a.currItem.fitRatio && Kt(K))
                        }
                }, Ut = function() {
                    var e, t, n = {
                        lastFlickOffset: {},
                        lastFlickDist: {},
                        lastFlickSpeed: {},
                        slowDownRatio: {},
                        slowDownRatioReverse: {},
                        speedDecelerationRatio: {},
                        speedDecelerationRatioAbs: {},
                        distanceOffset: {},
                        backAnimDestination: {},
                        backAnimStarted: {},
                        calculateSwipeSpeed: function(o) {
                            ut.length > 1 ? (e = De() - U + 50,
                            t = ut[ut.length - 2][o]) : (e = De() - N,
                            t = lt[o]),
                            n.lastFlickOffset[o] = rt[o] - t,
                            n.lastFlickDist[o] = Math.abs(n.lastFlickOffset[o]),
                            n.lastFlickDist[o] > 20 ? n.lastFlickSpeed[o] = n.lastFlickOffset[o] / e : n.lastFlickSpeed[o] = 0,
                            Math.abs(n.lastFlickSpeed[o]) < .1 && (n.lastFlickSpeed[o] = 0),
                            n.slowDownRatio[o] = .95,
                            n.slowDownRatioReverse[o] = 1 - n.slowDownRatio[o],
                            n.speedDecelerationRatio[o] = 1
                        },
                        calculateOverBoundsAnimOffset: function(e, t) {
                            n.backAnimStarted[e] || (me[e] > te.min[e] ? n.backAnimDestination[e] = te.min[e] : me[e] < te.max[e] && (n.backAnimDestination[e] = te.max[e]),
                            void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7,
                            n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e],
                            n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0,
                            n.backAnimStarted[e] = !0,
                            tt("bounceZoomPan" + e, me[e], n.backAnimDestination[e], t || 300, i.easing.sine.out, function(t) {
                                me[e] = t,
                                Fe()
                            }))))
                        },
                        calculateAnimOffset: function(e) {
                            n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10),
                            n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]),
                            n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff,
                            me[e] += n.distanceOffset[e])
                        },
                        panAnimLoop: function() {
                            if ($e.zoomPan && ($e.zoomPan.raf = F(n.panAnimLoop),
                            n.now = De(),
                            n.timeDiff = n.now - n.lastNow,
                            n.lastNow = n.now,
                            n.calculateAnimOffset("x"),
                            n.calculateAnimOffset("y"),
                            Fe(),
                            n.calculateOverBoundsAnimOffset("x"),
                            n.calculateOverBoundsAnimOffset("y"),
                            n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05))
                                return me.x = Math.round(me.x),
                                me.y = Math.round(me.y),
                                Fe(),
                                void Je("zoomPan")
                        }
                    };
                    return n
                }, Kt = function(e) {
                    if (e.calculateSwipeSpeed("y"),
                    te = a.currItem.bounds,
                    e.backAnimDestination = {},
                    e.backAnimStarted = {},
                    Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05)
                        return e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0,
                        e.calculateOverBoundsAnimOffset("x"),
                        e.calculateOverBoundsAnimOffset("y"),
                        !0;
                    Qe("zoomPan"),
                    e.lastNow = De(),
                    e.panAnimLoop()
                }, Ht = function(e, t) {
                    var n;
                    oe || (dt = u);
                    var o;
                    if ("swipe" === e) {
                        var l = rt.x - lt.x
                          , s = t.lastFlickDist.x < 10;
                        l > 30 && (s || t.lastFlickOffset.x > 20) ? o = -1 : l < -30 && (s || t.lastFlickOffset.x < -20) && (o = 1)
                    }
                    var c;
                    o && (u += o,
                    u < 0 ? (u = r.loop ? $t() - 1 : 0,
                    c = !0) : u >= $t() && (u = r.loop ? 0 : $t() - 1,
                    c = !0),
                    c && !r.loop || (ge += o,
                    he -= o,
                    n = !0));
                    var p, d = ve.x * he, m = Math.abs(d - ht.x);
                    return n || d > ht.x == t.lastFlickSpeed.x > 0 ? (p = Math.abs(t.lastFlickSpeed.x) > 0 ? m / Math.abs(t.lastFlickSpeed.x) : 333,
                    p = Math.min(p, 400),
                    p = Math.max(p, 250)) : p = 333,
                    dt === u && (n = !1),
                    oe = !0,
                    ke("mainScrollAnimStart"),
                    tt("mainScroll", ht.x, d, p, i.easing.cubic.out, Re, function() {
                        et(),
                        oe = !1,
                        dt = -1,
                        (n || dt !== u) && a.updateCurrItem(),
                        ke("mainScrollAnimComplete")
                    }),
                    n && a.updateCurrItem(!0),
                    n
                }, Wt = function(e) {
                    return 1 / ee * e * v
                }, Bt = function() {
                    var e = w
                      , t = We()
                      , n = Be();
                    w < t ? e = t : w > n && (e = n);
                    var o, r = le;
                    return re && !H && !se && w < t ? (a.close(),
                    !0) : (re && (o = function(e) {
                        Se((1 - r) * e + r)
                    }
                    ),
                    a.zoomTo(e, 0, 200, i.easing.cubic.out, o),
                    !0)
                };
                Ie("Gestures", {
                    publicMethods: {
                        initGestures: function() {
                            var e = function(e, t, n, o, i) {
                                _ = e + t,
                                T = e + n,
                                E = e + o,
                                k = i ? e + i : ""
                            };
                            S = Z.pointerEvent,
                            S && Z.touch && (Z.touch = !1),
                            S ? navigator.msPointerEnabled ? e("MSPointer", "Down", "Move", "Up", "Cancel") : e("pointer", "down", "move", "up", "cancel") : Z.touch ? (e("touch", "start", "move", "end", "cancel"),
                            M = !0) : e("mouse", "down", "move", "up"),
                            m = T + " " + E + " " + k,
                            f = _,
                            S && !M && (M = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1),
                            a.likelyTouchDevice = M,
                            h[_] = Lt,
                            h[T] = Zt,
                            h[E] = Nt,
                            k && (h[k] = h[E]),
                            Z.touch && (f += " mousedown",
                            m += " mousemove mouseup",
                            h.mousedown = h[_],
                            h.mousemove = h[T],
                            h.mouseup = h[E]),
                            M || (r.allowPanToNext = !1)
                        }
                    }
                });
                var Yt, Gt, qt, Vt, Xt, $t, jt, Jt = function(t, n, o, l) {
                    Yt && clearTimeout(Yt),
                    Vt = !0,
                    qt = !0;
                    var s;
                    t.initialLayout ? (s = t.initialLayout,
                    t.initialLayout = null) : s = r.getThumbBoundsFn && r.getThumbBoundsFn(u);
                    var p = o ? r.hideAnimationDuration : r.showAnimationDuration
                      , d = function() {
                        Je("initialZoom"),
                        o ? (a.template.removeAttribute("style"),
                        a.bg.removeAttribute("style")) : (Se(1),
                        n && (n.style.display = "block"),
                        i.addClass(e, "pswp--animated-in"),
                        ke("initialZoom" + (o ? "OutEnd" : "InEnd"))),
                        l && l(),
                        Vt = !1
                    };
                    if (!p || !s || void 0 === s.x)
                        return ke("initialZoom" + (o ? "Out" : "In")),
                        w = t.initialZoomLevel,
                        Le(me, t.initialPosition),
                        Fe(),
                        e.style.opacity = o ? 0 : 1,
                        Se(1),
                        void (p ? setTimeout(function() {
                            d()
                        }, p) : d());
                    !function() {
                        var n = c
                          , l = !a.currItem.src || a.currItem.loadError || r.showHideOpacity;
                        t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"),
                        o || (w = s.w / t.w,
                        me.x = s.x,
                        me.y = s.y - R,
                        a[l ? "template" : "bg"].style.opacity = .001,
                        Fe()),
                        Qe("initialZoom"),
                        o && !n && i.removeClass(e, "pswp--animated-in"),
                        l && (o ? i[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function() {
                            i.addClass(e, "pswp--animate_opacity")
                        }, 30)),
                        Yt = setTimeout(function() {
                            if (ke("initialZoom" + (o ? "Out" : "In")),
                            o) {
                                var a = s.w / t.w
                                  , r = {
                                    x: me.x,
                                    y: me.y
                                }
                                  , c = w
                                  , u = le
                                  , m = function(t) {
                                    1 === t ? (w = a,
                                    me.x = s.x,
                                    me.y = s.y - L) : (w = (a - c) * t + c,
                                    me.x = (s.x - r.x) * t + r.x,
                                    me.y = (s.y - L - r.y) * t + r.y),
                                    Fe(),
                                    l ? e.style.opacity = 1 - t : Se(u - t * u)
                                };
                                n ? tt("initialZoom", 0, 1, p, i.easing.cubic.out, m, d) : (m(1),
                                Yt = setTimeout(d, p + 20))
                            } else
                                w = t.initialZoomLevel,
                                Le(me, t.initialPosition),
                                Fe(),
                                Se(1),
                                l ? e.style.opacity = 1 : Se(1),
                                Yt = setTimeout(d, p + 20)
                        }, o ? 25 : 90)
                    }()
                }, Qt = {}, en = [], tn = {
                    index: 0,
                    errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                    forceProgressiveLoading: !1,
                    preload: [1, 1],
                    getNumItemsFn: function() {
                        return Gt.length
                    }
                }, nn = function() {
                    return {
                        center: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        },
                        min: {
                            x: 0,
                            y: 0
                        }
                    }
                }, on = function(e, t, n) {
                    var o = e.bounds;
                    o.center.x = Math.round((Qt.x - t) / 2),
                    o.center.y = Math.round((Qt.y - n) / 2) + e.vGap.top,
                    o.max.x = t > Qt.x ? Math.round(Qt.x - t) : o.center.x,
                    o.max.y = n > Qt.y ? Math.round(Qt.y - n) + e.vGap.top : o.center.y,
                    o.min.x = t > Qt.x ? 0 : o.center.x,
                    o.min.y = n > Qt.y ? e.vGap.top : o.center.y
                }, an = function(e, t, n) {
                    if (e.src && !e.loadError) {
                        var o = !n;
                        if (o && (e.vGap || (e.vGap = {
                            top: 0,
                            bottom: 0
                        }),
                        ke("parseVerticalMargin", e)),
                        Qt.x = t.x,
                        Qt.y = t.y - e.vGap.top - e.vGap.bottom,
                        o) {
                            var i = Qt.x / e.w
                              , a = Qt.y / e.h;
                            e.fitRatio = i < a ? i : a;
                            var l = r.scaleMode;
                            "orig" === l ? n = 1 : "fit" === l && (n = e.fitRatio),
                            n > 1 && (n = 1),
                            e.initialZoomLevel = n,
                            e.bounds || (e.bounds = nn())
                        }
                        if (!n)
                            return;
                        return on(e, e.w * n, e.h * n),
                        o && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center),
                        e.bounds
                    }
                    return e.w = e.h = 0,
                    e.initialZoomLevel = e.fitRatio = 1,
                    e.bounds = nn(),
                    e.initialPosition = e.bounds.center,
                    e.bounds
                }, rn = function(e, t, n, o, i, r) {
                    t.loadError || o && (t.imageAppended = !0,
                    cn(t, o, t === a.currItem && Ce),
                    n.appendChild(o),
                    r && setTimeout(function() {
                        t && t.loaded && t.placeholder && (t.placeholder.style.display = "none",
                        t.placeholder = null)
                    }, 500))
                }, ln = function(e) {
                    e.loading = !0,
                    e.loaded = !1;
                    var t = e.img = i.createEl("pswp__img", "img")
                      , n = function() {
                        e.loading = !1,
                        e.loaded = !0,
                        e.loadComplete ? e.loadComplete(e) : e.img = null,
                        t.onload = t.onerror = null,
                        t = null
                    };
                    return t.onload = n,
                    t.onerror = function() {
                        e.loadError = !0,
                        n()
                    }
                    ,
                    t.src = e.src,
                    t
                }, sn = function(e, t) {
                    if (e.src && e.loadError && e.container)
                        return t && (e.container.innerHTML = ""),
                        e.container.innerHTML = r.errorMsg.replace("%url%", e.src),
                        !0
                }, cn = function(e, t, n) {
                    if (e.src) {
                        t || (t = e.container.lastChild);
                        var o = n ? e.w : Math.round(e.w * e.fitRatio)
                          , i = n ? e.h : Math.round(e.h * e.fitRatio);
                        e.placeholder && !e.loaded && (e.placeholder.style.width = o + "px",
                        e.placeholder.style.height = i + "px"),
                        t.style.width = o + "px",
                        t.style.height = i + "px"
                    }
                }, un = function() {
                    if (en.length) {
                        for (var e, t = 0; t < en.length; t++)
                            e = en[t],
                            e.holder.index === e.index && rn(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
                        en = []
                    }
                };
                Ie("Controller", {
                    publicMethods: {
                        lazyLoadItem: function(e) {
                            e = _e(e);
                            var t = Xt(e);
                            t && (!t.loaded && !t.loading || b) && (ke("gettingData", e, t),
                            t.src && ln(t))
                        },
                        initController: function() {
                            i.extend(r, tn, !0),
                            a.items = Gt = n,
                            Xt = a.getItemAt,
                            $t = r.getNumItemsFn,
                            jt = r.loop,
                            $t() < 3 && (r.loop = !1),
                            Ee("beforeChange", function(e) {
                                var t, n = r.preload, o = null === e || e >= 0, i = Math.min(n[0], $t()), l = Math.min(n[1], $t());
                                for (t = 1; t <= (o ? l : i); t++)
                                    a.lazyLoadItem(u + t);
                                for (t = 1; t <= (o ? i : l); t++)
                                    a.lazyLoadItem(u - t)
                            }),
                            Ee("initialLayout", function() {
                                a.currItem.initialLayout = r.getThumbBoundsFn && r.getThumbBoundsFn(u)
                            }),
                            Ee("mainScrollAnimComplete", un),
                            Ee("initialZoomInEnd", un),
                            Ee("destroy", function() {
                                for (var e, t = 0; t < Gt.length; t++)
                                    e = Gt[t],
                                    e.container && (e.container = null),
                                    e.placeholder && (e.placeholder = null),
                                    e.img && (e.img = null),
                                    e.preloader && (e.preloader = null),
                                    e.loadError && (e.loaded = e.loadError = !1);
                                en = null
                            })
                        },
                        getItemAt: function(e) {
                            return e >= 0 && (void 0 !== Gt[e] && Gt[e])
                        },
                        allowProgressiveImg: function() {
                            return r.forceProgressiveLoading || !M || r.mouseUsed || screen.width > 1200
                        },
                        setContent: function(e, t) {
                            r.loop && (t = _e(t));
                            var n = a.getItemAt(e.index);
                            n && (n.container = null);
                            var o, s = a.getItemAt(t);
                            if (!s)
                                return void (e.el.innerHTML = "");
                            ke("gettingData", t, s),
                            e.index = t,
                            e.item = s;
                            var c = s.container = i.createEl("pswp__zoom-wrap");
                            if (!s.src && s.html && (s.html.tagName ? c.appendChild(s.html) : c.innerHTML = s.html),
                            sn(s),
                            an(s, fe),
                            !s.src || s.loadError || s.loaded)
                                s.src && !s.loadError && (o = i.createEl("pswp__img", "img"),
                                o.style.opacity = 1,
                                o.src = s.src,
                                cn(s, o),
                                rn(0, s, c, o));
                            else {
                                if (s.loadComplete = function(n) {
                                    if (l) {
                                        if (e && e.index === t) {
                                            if (sn(n, !0))
                                                return n.loadComplete = n.img = null,
                                                an(n, fe),
                                                Oe(n),
                                                void (e.index === u && a.updateCurrZoomItem());
                                            n.imageAppended ? !Vt && n.placeholder && (n.placeholder.style.display = "none",
                                            n.placeholder = null) : Z.transform && (oe || Vt) ? en.push({
                                                item: n,
                                                baseDiv: c,
                                                img: n.img,
                                                index: t,
                                                holder: e,
                                                clearPlaceholder: !0
                                            }) : rn(0, n, c, n.img, 0, !0)
                                        }
                                        n.loadComplete = null,
                                        n.img = null,
                                        ke("imageLoadComplete", t, n)
                                    }
                                }
                                ,
                                i.features.transform) {
                                    var p = "pswp__img pswp__img--placeholder";
                                    p += s.msrc ? "" : " pswp__img--placeholder--blank";
                                    var d = i.createEl(p, s.msrc ? "img" : "");
                                    s.msrc && (d.src = s.msrc),
                                    cn(s, d),
                                    c.appendChild(d),
                                    s.placeholder = d
                                }
                                s.loading || ln(s),
                                a.allowProgressiveImg() && (!qt && Z.transform ? en.push({
                                    item: s,
                                    baseDiv: c,
                                    img: s.img,
                                    index: t,
                                    holder: e
                                }) : rn(0, s, c, s.img, 0, !0))
                            }
                            qt || t !== u ? Oe(s) : (ne = c.style,
                            Jt(s, o || s.img)),
                            e.el.innerHTML = "",
                            e.el.appendChild(c)
                        },
                        cleanSlide: function(e) {
                            e.img && (e.img.onload = e.img.onerror = null),
                            e.loaded = e.loading = e.img = e.imageAppended = !1
                        }
                    }
                });
                var pn, dn = {}, mn = function(e, t, n) {
                    var o = document.createEvent("CustomEvent")
                      , i = {
                        origEvent: e,
                        target: e.target,
                        releasePoint: t,
                        pointerType: n || "touch"
                    };
                    o.initCustomEvent("pswpTap", !0, !0, i),
                    e.target.dispatchEvent(o)
                };
                Ie("Tap", {
                    publicMethods: {
                        initTap: function() {
                            Ee("firstTouchStart", a.onTapStart),
                            Ee("touchRelease", a.onTapRelease),
                            Ee("destroy", function() {
                                dn = {},
                                pn = null
                            })
                        },
                        onTapStart: function(e) {
                            e.length > 1 && (clearTimeout(pn),
                            pn = null)
                        },
                        onTapRelease: function(e, t) {
                            if (t && !V && !G && !je) {
                                var n = t;
                                if (pn && (clearTimeout(pn),
                                pn = null,
                                yt(n, dn)))
                                    return void ke("doubleTap", n);
                                if ("mouse" === t.type)
                                    return void mn(e, t, "mouse");
                                if ("BUTTON" === e.target.tagName.toUpperCase() || i.hasClass(e.target, "pswp__single-tap"))
                                    return void mn(e, t);
                                Le(dn, n),
                                pn = setTimeout(function() {
                                    mn(e, t),
                                    pn = null
                                }, 300)
                            }
                        }
                    }
                });
                var fn;
                Ie("DesktopZoom", {
                    publicMethods: {
                        initDesktopZoom: function() {
                            z || (M ? Ee("mouseUsed", function() {
                                a.setupDesktopZoom()
                            }) : a.setupDesktopZoom(!0))
                        },
                        setupDesktopZoom: function(t) {
                            fn = {};
                            var n = "wheel mousewheel DOMMouseScroll";
                            Ee("bindEvents", function() {
                                i.bind(e, n, a.handleMouseWheel)
                            }),
                            Ee("unbindEvents", function() {
                                fn && i.unbind(e, n, a.handleMouseWheel)
                            }),
                            a.mouseZoomedIn = !1;
                            var o, r = function() {
                                a.mouseZoomedIn && (i.removeClass(e, "pswp--zoomed-in"),
                                a.mouseZoomedIn = !1),
                                w < 1 ? i.addClass(e, "pswp--zoom-allowed") : i.removeClass(e, "pswp--zoom-allowed"),
                                l()
                            }, l = function() {
                                o && (i.removeClass(e, "pswp--dragging"),
                                o = !1)
                            };
                            Ee("resize", r),
                            Ee("afterChange", r),
                            Ee("pointerDown", function() {
                                a.mouseZoomedIn && (o = !0,
                                i.addClass(e, "pswp--dragging"))
                            }),
                            Ee("pointerUp", l),
                            t || r()
                        },
                        handleMouseWheel: function(e) {
                            if (w <= a.currItem.fitRatio)
                                return r.modal && (!r.closeOnScroll || je || Y ? e.preventDefault() : D && Math.abs(e.deltaY) > 2 && (c = !0,
                                a.close())),
                                !0;
                            if (e.stopPropagation(),
                            fn.x = 0,
                            "deltaX"in e)
                                1 === e.deltaMode ? (fn.x = 18 * e.deltaX,
                                fn.y = 18 * e.deltaY) : (fn.x = e.deltaX,
                                fn.y = e.deltaY);
                            else if ("wheelDelta"in e)
                                e.wheelDeltaX && (fn.x = -.16 * e.wheelDeltaX),
                                e.wheelDeltaY ? fn.y = -.16 * e.wheelDeltaY : fn.y = -.16 * e.wheelDelta;
                            else {
                                if (!("detail"in e))
                                    return;
                                fn.y = e.detail
                            }
                            He(w, !0);
                            var t = me.x - fn.x
                              , n = me.y - fn.y;
                            (r.modal || t <= te.min.x && t >= te.max.x && n <= te.min.y && n >= te.max.y) && e.preventDefault(),
                            a.panTo(t, n)
                        },
                        toggleDesktopZoom: function(t) {
                            t = t || {
                                x: fe.x / 2 + we.x,
                                y: fe.y / 2 + we.y
                            };
                            var n = r.getDoubleTapZoom(!0, a.currItem)
                              , o = w === n;
                            a.mouseZoomedIn = !o,
                            a.zoomTo(o ? a.currItem.initialZoomLevel : n, t, 333),
                            i[(o ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                        }
                    }
                });
                var hn, wn, vn, gn, yn, xn, bn, Cn, In, _n, Tn, En, kn = {
                    history: !0,
                    galleryUID: 1
                }, Dn = function() {
                    return Tn.hash.substring(1)
                }, Sn = function() {
                    hn && clearTimeout(hn),
                    vn && clearTimeout(vn)
                }, Mn = function() {
                    var e = Dn()
                      , t = {};
                    if (e.length < 5)
                        return t;
                    var n, o = e.split("&");
                    for (n = 0; n < o.length; n++)
                        if (o[n]) {
                            var i = o[n].split("=");
                            i.length < 2 || (t[i[0]] = i[1])
                        }
                    if (r.galleryPIDs) {
                        var a = t.pid;
                        for (t.pid = 0,
                        n = 0; n < Gt.length; n++)
                            if (Gt[n].pid === a) {
                                t.pid = n;
                                break
                            }
                    } else
                        t.pid = parseInt(t.pid, 10) - 1;
                    return t.pid < 0 && (t.pid = 0),
                    t
                }, Fn = function() {
                    if (vn && clearTimeout(vn),
                    je || Y)
                        return void (vn = setTimeout(Fn, 500));
                    gn ? clearTimeout(wn) : gn = !0;
                    var e = u + 1
                      , t = Xt(u);
                    t.hasOwnProperty("pid") && (e = t.pid);
                    var n = bn + "&gid=" + r.galleryUID + "&pid=" + e;
                    Cn || -1 === Tn.hash.indexOf(n) && (_n = !0);
                    var o = Tn.href.split("#")[0] + "#" + n;
                    En ? "#" + n !== window.location.hash && history[Cn ? "replaceState" : "pushState"]("", document.title, o) : Cn ? Tn.replace(o) : Tn.hash = n,
                    Cn = !0,
                    wn = setTimeout(function() {
                        gn = !1
                    }, 60)
                };
                Ie("History", {
                    publicMethods: {
                        initHistory: function() {
                            if (i.extend(r, kn, !0),
                            r.history) {
                                Tn = window.location,
                                _n = !1,
                                In = !1,
                                Cn = !1,
                                bn = Dn(),
                                En = "pushState"in history,
                                bn.indexOf("gid=") > -1 && (bn = bn.split("&gid=")[0],
                                bn = bn.split("?gid=")[0]),
                                Ee("afterChange", a.updateURL),
                                Ee("unbindEvents", function() {
                                    i.unbind(window, "hashchange", a.onHashChange)
                                });
                                var e = function() {
                                    xn = !0,
                                    In || (_n ? history.back() : bn ? Tn.hash = bn : En ? history.pushState("", document.title, Tn.pathname + Tn.search) : Tn.hash = ""),
                                    Sn()
                                };
                                Ee("unbindEvents", function() {
                                    c && e()
                                }),
                                Ee("destroy", function() {
                                    xn || e()
                                }),
                                Ee("firstUpdate", function() {
                                    u = Mn().pid
                                });
                                var t = bn.indexOf("pid=");
                                t > -1 && (bn = bn.substring(0, t),
                                "&" === bn.slice(-1) && (bn = bn.slice(0, -1))),
                                setTimeout(function() {
                                    l && i.bind(window, "hashchange", a.onHashChange)
                                }, 40)
                            }
                        },
                        onHashChange: function() {
                            if (Dn() === bn)
                                return In = !0,
                                void a.close();
                            gn || (yn = !0,
                            a.goTo(Mn().pid),
                            yn = !1)
                        },
                        updateURL: function() {
                            Sn(),
                            yn || (Cn ? hn = setTimeout(Fn, 800) : Fn())
                        }
                    }
                }),
                i.extend(a, nt)
            }
        })
    }
});
