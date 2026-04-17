webpackJsonp([39], {
    1035: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(32)
          , o = n.n(i)
          , a = n(30);
        e.default = {
            name: "slide-cmp",
            components: {},
            data: function() {
                return {
                    scaleRate: 1,
                    initScaleRate: 1,
                    isLoaded: !1
                }
            },
            filters: {
                setStyle: function(t) {
                    return ["width:" + (t.width + 2) + "px;", "min-height:" + (t.height + 2) + "px;", "left:" + (t.left - 1) + "px;", "top:" + (t.top - 1) + "px;", "z-index:" + t.zOrderPosition + ";", "transform: rotate(" + t.rotation + "deg);", "webkit-transform: rotate(" + t.rotation + "deg);"].join("")
                },
                setSubmitText: function(t) {
                    var e = i18n.t("submitansw") || "提交答案";
                    if (t)
                        switch (t) {
                        case 0:
                        case 1:
                            e = i18n.t("submitansw") || "提交答案";
                            break;
                        case 2:
                            e = i18n.t("submiting") || "提交中...";
                            break;
                        case 3:
                            e = i18n.t("submitok") || "提交成功"
                        }
                    return e
                }
            },
            props: {
                item: {
                    type: Object,
                    default: null
                },
                options: {
                    type: Array,
                    default: null
                },
                canSubmit: {
                    type: Number,
                    default: 0
                },
                limit: Number,
                sLeaveTime: String,
                hasNewExtendTime: Boolean,
                timeOver: Boolean,
                warning: Boolean,
                sExtendTimeMsg: String,
                isComplete: Boolean,
                pollingCount: Number,
                isShare: Boolean
            },
            mixins: [],
            computed: o()({}, n.i(a.b)(["lessonStatus", "observerMode", "layoutSize", "inspectorMode"]), {
                maxWidth: function() {
                    return this.layoutSize.maxWidth
                },
                maxHeight: function() {
                    return this.layoutSize.maxHeight
                }
            }),
            watch: {
                maxWidth: function(t, e) {
                    this.zoomSlide()
                },
                maxHeight: function(t, e) {
                    this.zoomSlide()
                },
                item: function(t) {
                    this.isLoaded = !1,
                    this.zoomSlide()
                }
            },
            methods: {
                zoomSlide: function() {
                    var t = this.maxWidth
                      , e = this.maxHeight
                      , n = this.item.Width
                      , i = this.item.Height
                      , o = n / i
                      , a = t / e;
                    this.scaleRate = this.initScaleRate = a > o ? e / i : t / n
                },
                handleClickOption: function(t, e) {
                    this.$emit("setoption", t, e)
                },
                handleClickBtn: function() {
                    this.$emit("clickbtn")
                },
                handleAnswer: function() {
                    this.timeOver && !this.item.isComplete || this.$emit("clickanswer")
                },
                handleImgLoaded: function() {
                    this.isLoaded = !0
                },
                handleToast: function() {
                    this.$toast({
                        message: this.$i18n.t("notsupportedasateacher") || "老师身份在学生模式下不支持此操作",
                        duration: 3e3,
                        type: "info"
                    })
                }
            },
            created: function() {
                this.zoomSlide()
            },
            mounted: function() {},
            updated: function() {},
            beforeDestroy: function() {},
            destroyed: function() {}
        }
    },
    1037: function(t, e, n) {
        e = t.exports = n(146)(!1),
        e.push([t.i, '.slide__cmp{position:relative;width:100%;height:100%;margin:0 auto;overflow:hidden;box-shadow:0 1px 4px 0 rgba(0,0,0,.1)}.slide__cmp .slide__wrap{position:absolute;width:100%;height:100%;-webkit-transform-origin:0 0 0;-ms-transform-origin:0 0 0;transform-origin:0 0 0;-webkit-transition:all .1s ease-in;transition:all .1s ease-in}.slide__cmp .slide__wrap .cover{object-fit:contain;max-height:100%;max-width:100%}.slide__cmp .slide__shape{position:absolute}.slide__cmp .options-label{z-index:1001;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:20px;color:#fff;background-color:#999}.slide__cmp .options-label.selected{background:#5096f5}.slide__cmp .options-label.MultipleChoice{border-radius:50%}.slide__cmp .submit-btn{z-index:1001;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:16px;color:#fff;background:#999;border-radius:4px;cursor:pointer;margin:0!important}.slide__cmp .submit-btn.can{background:#5096f5}.slide__cmp .submit-btn:hover .tips{display:block}.slide__cmp .submit-btn .tips{display:none;bottom:calc(100% + 10px);line-height:17px;white-space:nowrap;background:#fff;border-radius:4px;box-shadow:0 4px 20px 0 rgba(2,2,2,.3);padding:7px 14px 8px}.slide__cmp .submit-btn .tips,.slide__cmp .submit-btn .tips:after{position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.slide__cmp .submit-btn .tips:after{content:"";top:100%;border:5px solid transparent;border-top-color:#fff}.slide__cmp .time-box{position:absolute;top:5px;right:0;z-index:99;font-size:14px;min-width:190px;height:36px}.slide__cmp .time-box .timing{width:100%;height:100%;line-height:36px;text-align:center;background:#e5e5e5;color:#666;border-radius:2px;font-weight:700}.slide__cmp .time-box .timing.warning{background:rgba(248,79,65,.1);color:#666}.slide__cmp .time-box .timing.willEnd{background:#ddd;color:#666}', ""])
    },
    1039: function(t, e, n) {
        var i = n(1037);
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        n(217)("89e3bed0", i, !0)
    },
    1041: function(t, e, n) {
        n(1039);
        var i = n(2)(n(1035), n(1043), null, null);
        t.exports = i.exports
    },
    1043: function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("section", {
                    staticClass: "slide__cmp",
                    style: {
                        width: t.item.Width * t.scaleRate + "px",
                        height: t.item.Height * t.scaleRate + "px"
                    }
                }, [n("section", {
                    staticClass: "slide__wrap box-center",
                    style: {
                        width: t.item.Width + "px",
                        height: t.item.Height + "px",
                        transform: "scale(" + t.scaleRate + ")",
                        webkitTransform: "scale(" + t.scaleRate + ")"
                    }
                }, [t.isLoaded ? n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.observerMode && t.item.problemID,
                        expression: "!observerMode && item.problemID"
                    }],
                    staticClass: "time-box"
                }, [t.lessonStatus ? [n("div", {
                    staticClass: "timing willEnd"
                }, [t._v(" " + t._s(t.$t("student.receivertimeout")) + " ")])] : [!t.isComplete && t.limit > 0 && t.sLeaveTime && !t.hasNewExtendTime || t.timeOver ? n("div", {
                    staticClass: "timing",
                    class: ["timing--number", t.warning && !t.timeOver ? "warning" : ""]
                }, [t._v(t._s(t.timeOver || t.isComplete ? "" : t.$t("countdown")) + " " + t._s(t.sLeaveTime))]) : t.hasNewExtendTime ? n("div", {
                    staticClass: "timing"
                }, [t._v(t._s(t.sExtendTimeMsg))]) : t.isComplete ? n("div", {
                    staticClass: "timing"
                }, [t._v(" " + t._s(t.$t("receiverdone")) + " ")]) : n("div", {
                    staticClass: "timing willEnd"
                }, [t._v(" " + t._s(t.$t("collectprotip")) + " ")])]], 2) : t._e(), t._v(" "), n("img", {
                    staticClass: "cover",
                    attrs: {
                        src: t.item.cover || t.item.src,
                        alt: ""
                    },
                    on: {
                        load: t.handleImgLoaded
                    }
                }), t._v(" "), t.item.problemID && t.isLoaded ? [t._l(t.item.options, function(e) {
                    return t.options ? [n("p", {
                        staticClass: "slide__shape",
                        class: ["options-label", e.selected ? "selected" : "", 1 === t.item.problemType || 1 === t.pollingCount ? "MultipleChoice" : ""],
                        style: t._f("setStyle")(e),
                        attrs: {
                            "data-option": e.label
                        },
                        on: {
                            click: function(n) {
                                return t.handleClickOption(e.label, n)
                            }
                        }
                    }, [t._v(t._s(e.label))])] : t._e()
                }), t._v(" "), t.observerMode || t.inspectorMode ? t.observerMode ? n("div", {
                    staticClass: "slide__shape submit-btn",
                    style: t._f("setStyle")(t.item.submit),
                    on: {
                        click: t.handleToast
                    }
                }, [t._v("\n        " + t._s([4, 5].includes(t.item.problemType) ? t.$t("answer") : t.$t("submitansw")) + "\n      ")]) : t._e() : [[4, 5].includes(t.item.problemType) ? n("div", {
                    staticClass: "slide__shape submit-btn",
                    class: t.timeOver ? "" : "can",
                    style: t._f("setStyle")(t.item.submit),
                    on: {
                        click: t.handleAnswer
                    }
                }, [t._v("\n          " + t._s(t.item.isComplete ? t.$t("viewdetails") : t.$t("answer")) + "\n        ")]) : n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.item.isComplete && !t.lessonStatus,
                        expression: "!item.isComplete && !lessonStatus"
                    }],
                    class: ["slide__shape", "submit-btn", 1 === t.canSubmit || 2 === t.canSubmit ? "can" : ""],
                    style: t._f("setStyle")(t.item.submit),
                    on: {
                        click: t.handleClickBtn
                    }
                }, [t._v("\n          " + t._s(t._f("setSubmitText")(t.canSubmit)) + "\n          "), t.item.isComplete || t.lessonStatus || 0 != t.canSubmit ? t._e() : n("div", {
                    staticClass: "tips f12 c333"
                }, [t._v(" " + t._s(t.$t("qztmzdxx")) + " ")])])]] : t._e()], 2)])
            },
            staticRenderFns: []
        }
    },
    1152: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = {
            name: "BuDongIcon",
            props: {
                layout: {
                    type: String,
                    default: "horizontal",
                    validator: function(t) {
                        return ["horizontal", "vertical"].includes(t)
                    }
                },
                theme: {
                    type: String,
                    default: "light",
                    validator: function(t) {
                        return ["dark", "light"].includes(t)
                    }
                },
                active: {
                    type: Boolean,
                    default: !1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                isMobile: {
                    type: Boolean,
                    default: !1
                },
                animation: {
                    type: Boolean,
                    default: !1
                },
                size: {
                    type: String,
                    default: "normal",
                    validator: function(t) {
                        return ["small", "normal"].includes(t)
                    }
                },
                text: {
                    type: String,
                    default: ""
                }
            }
        }
    },
    1196: function(t, e, n) {
        e = t.exports = n(146)(!1),
        e.push([t.i, ".budong-btn--horizontal[data-v-a3e868cc]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;gap:4px;border-radius:16px}.budong-btn--horizontal.budong-btn--small[data-v-a3e868cc]{height:24px;padding:0 6px}.budong-btn--horizontal.budong-btn--small .budong-btn__icon[data-v-a3e868cc]{font-size:18px}.budong-btn--horizontal.budong-btn--small .budong-btn__text[data-v-a3e868cc]{position:relative;left:-2px;font-size:12px;font-weight:700}.budong-btn--horizontal.budong-btn--normal[data-v-a3e868cc]{height:28px;padding:0 8px}.budong-btn--horizontal.budong-btn--normal .budong-btn__icon[data-v-a3e868cc]{font-size:22px}.budong-btn--horizontal.budong-btn--normal .budong-btn__text[data-v-a3e868cc]{font-weight:700;font-size:14px;position:relative;left:-2px}.budong-btn--vertical[data-v-a3e868cc]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.budong-btn--vertical .budong-btn__icon[data-v-a3e868cc]{font-size:24px}.budong-btn--vertical .budong-btn__text[data-v-a3e868cc]{font-size:13px}.budong-btn--light.budong-btn--horizontal[data-v-a3e868cc]{background:-webkit-linear-gradient(.98deg,rgba(55,100,255,.1) 22.78%,rgba(165,104,255,.1) 99.16%);background:linear-gradient(89.02deg,rgba(55,100,255,.1) 22.78%,rgba(165,104,255,.1) 99.16%)}.budong-btn--light.budong-btn--horizontal .budong-btn__icon[data-v-a3e868cc],.budong-btn--light.budong-btn--horizontal .budong-btn__text[data-v-a3e868cc]{background:-webkit-linear-gradient(.98deg,#3764ff 22.78%,#a568ff 99.16%);background:linear-gradient(89.02deg,#3764ff 22.78%,#a568ff 99.16%);-webkit-background-clip:text;background-clip:text;color:transparent}.budong-btn--light.budong-btn--vertical[data-v-a3e868cc]{background:-webkit-linear-gradient(.98deg,rgba(55,100,255,.15) 5.84%,rgba(165,104,255,.15) 99.16%);background:linear-gradient(89.02deg,rgba(55,100,255,.15) 5.84%,rgba(165,104,255,.15) 99.16%);border-radius:6px;width:44px;height:44px}.budong-btn--light.budong-btn--vertical .budong-btn__icon[data-v-a3e868cc]{left:2px;font-size:20px}.budong-btn--light.budong-btn--vertical .budong-btn__icon[data-v-a3e868cc],.budong-btn--light.budong-btn--vertical .budong-btn__text[data-v-a3e868cc]{position:relative;background:-webkit-linear-gradient(.98deg,#3764ff 22.78%,#a568ff 99.16%);background:linear-gradient(89.02deg,#3764ff 22.78%,#a568ff 99.16%);-webkit-background-clip:text;background-clip:text;color:transparent}.budong-btn--light.budong-btn--vertical .budong-btn__text[data-v-a3e868cc]{top:-5px;font-size:12px}.budong-btn--dark.budong-btn--horizontal[data-v-a3e868cc]{background:-webkit-linear-gradient(.98deg,#3764ff 22.78%,#a568ff 99.16%);background:linear-gradient(89.02deg,#3764ff 22.78%,#a568ff 99.16%)}.budong-btn--dark.budong-btn--horizontal .budong-btn__icon[data-v-a3e868cc],.budong-btn--dark.budong-btn--horizontal .budong-btn__text[data-v-a3e868cc]{color:#fff}.budong-btn--dark.budong-btn--vertical[data-v-a3e868cc]{background:-webkit-linear-gradient(319.88deg,#3764ff 4.15%,#a568ff 92.17%);background:linear-gradient(130.12deg,#3764ff 4.15%,#a568ff 92.17%);border-radius:8px;width:50px;height:50px}.budong-btn--dark.budong-btn--vertical .budong-btn__icon[data-v-a3e868cc]{position:relative;left:2px;font-size:24px;color:#fff}.budong-btn--dark.budong-btn--vertical .budong-btn__text[data-v-a3e868cc]{position:relative;top:-5px;font-size:13px;color:#fff}.budong-btn[data-v-a3e868cc]{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;position:relative}.budong-btn:hover:not(.budong-btn--disable).budong-btn--light.budong-btn--horizontal[data-v-a3e868cc],.budong-btn:hover:not(.budong-btn--disable).budong-btn--light.budong-btn--vertical[data-v-a3e868cc]{background:-webkit-linear-gradient(.98deg,rgba(55,100,255,.24) 22.78%,rgba(165,104,255,.24) 99.16%);background:linear-gradient(89.02deg,rgba(55,100,255,.24) 22.78%,rgba(165,104,255,.24) 99.16%)}.budong-btn:hover:not(.budong-btn--disable).budong-btn--light.budong-btn--horizontal .budong-btn__icon[data-v-a3e868cc],.budong-btn:hover:not(.budong-btn--disable).budong-btn--light.budong-btn--horizontal .budong-btn__text[data-v-a3e868cc],.budong-btn:hover:not(.budong-btn--disable).budong-btn--light.budong-btn--vertical .budong-btn__icon[data-v-a3e868cc],.budong-btn:hover:not(.budong-btn--disable).budong-btn--light.budong-btn--vertical .budong-btn__text[data-v-a3e868cc]{background:-webkit-linear-gradient(.98deg,#1c47e4 10.81%,#964fff 99.16%);background:linear-gradient(89.02deg,#1c47e4 10.81%,#964fff 99.16%);-webkit-background-clip:text;background-clip:text;color:transparent}.budong-btn:hover:not(.budong-btn--disable).budong-btn--dark.budong-btn--horizontal[data-v-a3e868cc],.budong-btn:hover:not(.budong-btn--disable).budong-btn--dark.budong-btn--vertical[data-v-a3e868cc]{background:-webkit-linear-gradient(.98deg,#1c47e4 10.81%,#964fff);background:linear-gradient(89.02deg,#1c47e4 10.81%,#964fff)}.budong-btn.budong-btn--disable[data-v-a3e868cc]{cursor:not-allowed;opacity:.5}.budong-btn.budong-btn--moblie.budong-btn--horizontal[data-v-a3e868cc]{gap:.06rem;height:.745rem;padding:0 .24rem;border-radius:.36rem}.budong-btn.budong-btn--moblie.budong-btn--horizontal .budong-btn__icon[data-v-a3e868cc]{font-size:.525rem}.budong-btn.budong-btn--moblie.budong-btn--horizontal .budong-btn__text[data-v-a3e868cc]{font-size:inherit}.budong-btn.budong-btn--moblie.budong-btn--vertical[data-v-a3e868cc]{min-width:1.28rem;height:1.12rem;padding:.16rem .2rem;border-radius:.24rem}.budong-btn.budong-btn--moblie.budong-btn--vertical .budong-btn__icon[data-v-a3e868cc]{font-size:.48rem}.budong-btn.budong-btn--moblie.budong-btn--vertical .budong-btn__text[data-v-a3e868cc]{font-size:.24rem}.animation[data-v-a3e868cc]{-webkit-animation:float 1.3s infinite;animation:float 1.3s infinite;-webkit-transform-origin:bottom center;-ms-transform-origin:bottom center;transform-origin:bottom center}@-webkit-keyframes float{0%,to{-webkit-transform:translateY(2px);transform:translateY(2px)}50%{-webkit-transform:translateY(-2px);transform:translateY(-2px)}}@keyframes float{0%,to{-webkit-transform:translateY(2px);transform:translateY(2px)}50%{-webkit-transform:translateY(-2px);transform:translateY(-2px)}}", ""])
    },
    1218: function(t, e, n) {
        var i = n(1196);
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        n(217)("0b3c26b1", i, !0)
    },
    1242: function(t, e, n) {
        n(1218);
        var i = n(2)(n(1152), n(1268), "data-v-a3e868cc", null);
        t.exports = i.exports
    },
    1268: function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("span", {
                    class: ["budong-btn", "budong-btn--" + t.layout, "budong-btn--" + t.theme, t.active && "budong-btn--selected", t.disabled && "budong-btn--disable", t.isMobile && "budong-btn--moblie", t.size && "budong-btn--" + t.size],
                    on: {
                        click: function(e) {
                            !t.disabled && t.$emit("click")
                        }
                    }
                }, [n("i", {
                    staticClass: "budong-btn__icon iconfont",
                    class: [t.active ? "icon-budong-AI-mian" : "icon-budong-ai", t.animation && "animation"]
                }), t._v(" "), n("span", {
                    staticClass: "budong-btn__text"
                }, [t._v(t._s(t.text || "不懂"))])])
            },
            staticRenderFns: []
        }
    },
    1374: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = {
            data: function() {
                return {
                    offset: {
                        offsetX: 0,
                        offsetY: 0
                    }
                }
            },
            computed: {},
            watch: {},
            props: {
                chatUrl: String
            },
            methods: {
                init: function() {
                    this.initEvent()
                },
                initEvent: function() {
                    var t = this
                      , e = this.$el.querySelector(".J_drag");
                    e.addEventListener("mousedown", function(n) {
                        t.canMove = !0;
                        var i = getComputedStyle(e)
                          , o = String(i.getPropertyValue("--x")).trim()
                          , a = String(i.getPropertyValue("--y")).trim();
                        o = parseInt(o, 10),
                        a = parseInt(a, 10);
                        var s = n.clientX - o
                          , r = n.clientY - a;
                        t.lastPoint = {
                            x: s,
                            y: r
                        },
                        t.addEventListeners()
                    }, !0)
                },
                translateContent: function(t) {
                    var e = this.$el
                      , n = t.x
                      , i = t.y;
                    e.style.transform = "translate(" + n + "px, " + i + "px)",
                    e.style.setProperty("--x", n + "px"),
                    e.style.setProperty("--y", i + "px")
                },
                addEventListeners: function() {
                    this.$el.addEventListener("mousemove", this.handleMove),
                    this.$el.addEventListener("mouseup", this.handleMoveEnd),
                    document.addEventListener("mousemove", this.handleMove),
                    document.addEventListener("mouseup", this.handleMoveEnd)
                },
                removeEventListeners: function() {
                    this.$el.removeEventListener("mousemove", this.handleMove),
                    this.$el.removeEventListener("mouseup", this.handleMoveEnd),
                    document.removeEventListener("mousemove", this.handleMove),
                    document.removeEventListener("mouseup", this.handleMoveEnd)
                },
                handleMove: function(t) {
                    if (t.preventDefault(),
                    !this.canMove)
                        return !1;
                    var e = this.lastPoint
                      , n = t.clientX - e.x
                      , i = t.clientY - e.y
                      , o = {
                        x: n,
                        y: i
                    };
                    this.translateContent(o)
                },
                handleMoveEnd: function(t) {
                    this.removeEventListeners(),
                    this.canMove = !1
                }
            },
            created: function() {},
            mounted: function() {
                this.init()
            },
            beforeDestroy: function() {}
        }
    },
    1392: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(32)
          , o = n.n(i)
          , a = n(30)
          , s = n(1041)
          , r = n.n(s)
          , d = n(1960)
          , l = n.n(d)
          , c = n(1242)
          , b = n.n(c);
        e.default = {
            name: "lesson-ppt",
            data: function() {
                return {
                    index: 0,
                    slide: null,
                    style: {},
                    chatUrl: ""
                }
            },
            components: {
                slide: r.a,
                chat: l.a,
                BuDongIcon: b.a
            },
            computed: o()({}, n.i(a.b)(["lesson", "cards", "rightType", "inspectorMode", "isAutoJump"]), {
                lessonCompanionState: function() {
                    return this.lesson.lessonCompanionState
                }
            }),
            mixins: [],
            created: function() {},
            mounted: function() {
                this.index = +this.$route.params.index,
                this.init(this.index)
            },
            updated: function() {},
            beforeDestroy: function() {
                window.removeEventListener("resize", this.resize)
            },
            filters: {
                setStyle: function(t) {
                    var e = {}
                      , n = window.innerHeight - 80
                      , i = window.innerWidth - 220 - 40
                      , o = i / n
                      , a = (t.Width,
                    t.Height,
                    t.rate);
                    return 10 === t.type ? e : (a > o ? (e.width = i + "px",
                    e.height = i / a + "px") : (e.width = n * a + "px",
                    e.height = n + "px"),
                    e)
                }
            },
            watch: {
                $route: function(t, e) {
                    if (t && t.params && "ppt" === t.name) {
                        var n = t.params;
                        this.index = n.index
                    }
                },
                index: function(t, e) {
                    var n = this;
                    if (this.cards && this.cards.length) {
                        var i = this.cards[t];
                        this.slide = i
                    } else
                        setTimeout(function() {
                            var e = n.cards[t];
                            n.slide = e
                        }, 1e3);
                    this.isAutoJump || this.chatUrl && (this.chatUrl = "")
                },
                rightType: function(t) {
                    this.resize()
                }
            },
            methods: o()({}, n.i(a.c)(["setCards"]), {
                init: function(t) {
                    var e = this
                      , n = this.cards[t];
                    n ? this.slide = n : setTimeout(function() {
                        var n = e.cards[t];
                        n && (e.slide = n)
                    }, 2e3)
                },
                initEvent: function() {},
                resize: function() {
                    var t = this.slide
                      , e = {};
                    if (!t)
                        return this;
                    var n = document.querySelector(".J_container")
                      , i = window.innerHeight - 80
                      , o = n.clientWidth - 40
                      , a = o / i
                      , s = t.Width
                      , r = t.Height
                      , d = t.rate;
                    if (10 === t.type)
                        return e;
                    var l = a > d ? i / r : o / s;
                    e.width = t.Width * l + "px",
                    e.height = t.Height * l + "px",
                    this.style = e
                },
                handleTag: function(t) {
                    var e = this
                      , n = API.lesson.post_tag
                      , i = this.cards
                      , o = this.slide
                      , a = o.slideID
                      , s = i.filter(function(t, e) {
                        return t.slideID === a
                    })
                      , r = s.length && s[0].hasQuestion ? 1 : 0;
                    1 === t && (r = s.length && s[0].hasStore ? 1 : 0);
                    var d = {
                        type: t,
                        action: r,
                        presentationId: o.presentationid,
                        objId: a,
                        objType: 0
                    };
                    request.post(n, d).then(function(n) {
                        if (n && 0 === n.code) {
                            n.data;
                            s.forEach(function(n) {
                                0 === t ? (n.hasQuestion = !n.hasQuestion,
                                o && (o.question = n.hasQuestion ? 1 : 0),
                                n.hasQuestion && e.lessonCompanionState ? e.chatUrl = "/ai-workspace/chatbot-mobile/" + e.lesson.classroomId + "?lid=" + e.lesson.lessonId + "&presid=" + o.presentationid + "&sid=" + a + "&pIdx=" + o.pageIndex + "&ent=16&entity_type=16&category=3" : e.chatUrl = "") : 1 === t && (n.hasStore = !n.hasStore,
                                o && (o.store = n.hasStore ? 1 : 0))
                            }),
                            e.setCards(i)
                        }
                    }).catch(function(t) {
                        console.log("handleTag:", t)
                    })
                }
            })
        }
    },
    1540: function(t, e, n) {
        e = t.exports = n(146)(!1),
        e.push([t.i, ".chat-wrapper{--x:0px;--y:0px;-webkit-transform:translate(var(--x),var(--y));-ms-transform:translate(var(--x),var(--y));transform:translate(var(--x),var(--y))}", ""])
    },
    1541: function(t, e, n) {
        e = t.exports = n(146)(!1),
        e.push([t.i, ".chat-wrapper[data-v-14d264f6]{position:fixed;top:40px;right:50px;width:400px;height:calc(100vh - 100px);z-index:99999;background:#f7f9ff;border:1px solid #b5ccfc;border-radius:12px;box-shadow:0 6px 26px 0 rgba(123,135,178,.14);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.chat-wrapper .drag-handle[data-v-14d264f6]{width:100%;height:20px;cursor:move;position:absolute;top:0;left:0}.chat-wrapper .close[data-v-14d264f6]{position:absolute;width:26px;height:26px;top:-12px;right:-12px;z-index:2;cursor:pointer;background:#f4f9ff;border:1px solid #b5ccfc;border-radius:50%}.chat-wrapper .close[data-v-14d264f6]:hover{background:#e7f0ff}.chat-wrapper iframe[data-v-14d264f6]{width:100%;height:100%}.chat-wrapper .container[data-v-14d264f6]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow:hidden;border-radius:12px}", ""])
    },
    1672: function(t, e, n) {
        e = t.exports = n(146)(!1),
        e.push([t.i, ".lesson__ppt[data-v-b0737c70]{position:relative;width:100%;height:100%}.cover__container[data-v-b0737c70]{width:100%;height:100%}.cover__container .cover[data-v-b0737c70]{object-fit:contain;max-height:100%}.ppt__modal[data-v-b0737c70]{position:absolute;width:100%;height:100%;background:#fff}.ppt__opt[data-v-b0737c70]{position:fixed;top:50%;right:15px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:50px;height:118px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:rgba(0,0,0,.7);border-radius:4px}.ppt__opt.has-ai[data-v-b0737c70]{background:transparent;height:auto}.ppt__opt.has-ai .opt__action[data-v-b0737c70]{padding-bottom:0;margin-bottom:4px;width:100%;padding:5px 0;border-radius:4px;background:rgba(0,0,0,.7)}.ppt__opt .opt__action[data-v-b0737c70]{cursor:pointer;line-height:1.3}.ppt__opt .opt__action[data-v-b0737c70]:first-child{padding-bottom:10px}", ""])
    },
    1736: function(t, e, n) {
        var i = n(1540);
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        n(217)("798f0e72", i, !0)
    },
    1737: function(t, e, n) {
        var i = n(1541);
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        n(217)("4a91f1a1", i, !0)
    },
    1868: function(t, e, n) {
        var i = n(1672);
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        n(217)("f3d9dbf2", i, !0)
    },
    1960: function(t, e, n) {
        n(1737),
        n(1736);
        var i = n(2)(n(1374), n(2012), "data-v-14d264f6", null);
        t.exports = i.exports
    },
    2012: function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("div", {
                    staticClass: "chat-wrapper"
                }, [n("div", {
                    staticClass: "drag-handle J_drag"
                }), t._v(" "), n("div", {
                    staticClass: "close box-center",
                    on: {
                        click: function(e) {
                            return t.$emit("close")
                        }
                    }
                }, [n("i", {
                    staticClass: "iconfont icon-guanbi1 f14"
                })]), t._v(" "), n("div", {
                    staticClass: "container"
                }, [n("iframe", {
                    attrs: {
                        src: t.chatUrl,
                        frameborder: "0"
                    }
                })])])
            },
            staticRenderFns: []
        }
    },
    2133: function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("section", {
                    staticClass: "lesson__ppt"
                }, [t.slide ? n("div", {
                    staticClass: "cover__container box-center"
                }, [n("slide", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 != t.slide.animation,
                        expression: "slide.animation != 1"
                    }],
                    attrs: {
                        item: t.slide
                    }
                }), t._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 === t.slide.animation,
                        expression: "slide.animation === 1"
                    }],
                    staticClass: "ppt__modal box-center"
                }, [n("div", {
                    staticClass: "modal__center f30 c666"
                }, [n("p", [t._v(" " + t._s(t.$t("currhasanimate")) + " ")]), t._v(" "), n("p", [t._v(" " + t._s(t.$t("listenteacher")) + " ")])])])], 1) : t._e(), t._v(" "), t.slide && 2 === t.slide.type && !t.inspectorMode ? n("section", {
                    staticClass: "ppt__opt f12 cfff",
                    class: {
                        "has-ai": t.lessonCompanionState
                    }
                }, [n("div", {
                    staticClass: "opt__action",
                    on: {
                        click: function(e) {
                            return t.handleTag(1)
                        }
                    }
                }, [n("i", {
                    staticClass: "iconfont f20 cfff",
                    class: [t.slide.hasStore ? "icon-shoucangjihuo-" : "icon-shoucang-"]
                }), t._v(" "), n("p", [t._v(t._s(t.$t("favorite")))])]), t._v(" "), t.lessonCompanionState ? n("bu-dong-icon", {
                    attrs: {
                        layout: "vertical",
                        theme: "dark",
                        active: t.slide.hasQuestion,
                        animation: !0,
                        "is-mobile": !1,
                        text: t.$t("unknown")
                    },
                    on: {
                        click: function(e) {
                            return t.handleTag(0)
                        }
                    }
                }) : n("div", {
                    staticClass: "opt__action"
                }, [n("div", {
                    on: {
                        click: function(e) {
                            return t.handleTag(0)
                        }
                    }
                }, [n("i", {
                    staticClass: "iconfont f20 cfff",
                    class: [t.slide.hasQuestion ? "icon-budongjihuo" : "icon-budong-"]
                }), t._v(" "), n("p", [t._v(t._s(t.$t("unknown")))])])])], 1) : t._e(), t._v(" "), t.lessonCompanionState && t.chatUrl ? n("chat", {
                    attrs: {
                        chatUrl: t.chatUrl
                    },
                    on: {
                        close: function(e) {
                            t.chatUrl = ""
                        }
                    }
                }) : t._e()], 1)
            },
            staticRenderFns: []
        }
    },
    852: function(t, e, n) {
        n(1868);
        var i = n(2)(n(1392), n(2133), "data-v-b0737c70", null);
        t.exports = i.exports
    }
});
