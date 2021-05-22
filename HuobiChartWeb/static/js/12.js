webpackJsonp([12], {
    "2NXm": function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "about-pane bg-gold"
                }, [i("div", {
                    staticClass: "pane-1280 page-main-width flex-center-start text-center"
                }, t._l(t.$t("home.about"), function(e, s) {
                    return i("div", {
                        key: e.title,
                        staticClass: "about-item inline-block"
                    }, [i("div", {
                        class: "item-icon img-" + s
                    }), t._v(" "), i("div", {
                        staticClass: "about-title fz16 text-center text-white"
                    }, [t._v(t._s(e.title))]), t._v(" "), t._l(e.content, function(e, s) {
                        return i("div", {
                            key: s,
                            staticClass: "about-desc-item fz14"
                        }, [i("div", {
                            staticClass: "desc text-gold"
                        }, [t._v(t._s(e))])])
                    })], 2)
                }))])
            },
            staticRenderFns: []
        };
        var n = i("VU/8")({
                name: "About",
                data: function() {
                    return {}
                }
            }, s, !1, function(t) {
                i("sr0O")
            }, "data-v-e2bde476", null).exports,
            o = i("c/Tr"),
            r = i.n(o),
            a = i("Xxa5"),
            l = i.n(a),
            h = i("exGp"),
            c = i.n(h),
            d = i("VsUZ"),
            p = {
                name: "Banner",
                props: {
                    height: {
                        type: String,
                        default: "567px"
                    }
                },
                data: function() {
                    return {
                        bannerList: [],
                        loading: !1,
                        lang: "",
                        currentPage: 1,
                        firstPositionPage: 1,
                        prevPage: 0,
                        totalPage: 0
                    }
                },
                mounted: function() {
                    this.lang = this.$locale ? this.$locale : this.$i18n.locale, window.PRERENDER_INJECTED.prerender || this.getBanner()
                },
                methods: {
                    getBanner: function() {
                        var t = this;
                        return c()(l.a.mark(function e() {
                            var i, s;
                            return l.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return i = {
                                            language: t.lang
                                        }, t.loading = !0, e.next = 4, d.a.getBannerList(i);
                                    case 4:
                                        s = e.sent, t.loading = !1, s.success && (t.bannerList = s.data || [], t.totalPage = s.data && s.data.length || 0);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t)
                        }))()
                    },
                    gaBanner: function(t, e) {
                        this.sa.track({
                            type: "BannerClick",
                            banner_title: e
                        });
                        try {
                            window.ga("send", "event", "HuobiKr_PC", "HomePage", "Banner_" + t)
                        } catch (t) {
                            console.log(t)
                        }
                    },
                    change: function(t) {
                        this.prevPage = this.currentPage, this.currentPage = t + 1, this.setChangeText()
                    },
                    setText: function() {
                        var t = this.currentPage,
                            e = this.bannerList,
                            i = this.totalPage,
                            s = r()(document.querySelectorAll(".el-carousel__button")),
                            n = r()(document.querySelectorAll(".el-carousel__indicator")),
                            o = i > 4 ? 4 : i;
                        if (s.length > 0 && i > 0)
                            for (var a = 0; a < i; a += 1) e[a].title && this.$set(s[a], "innerHTML", e[a].title), o < 4 && (s[a].style.width = 1280 / o + "px", n[a].style.width = 1280 / o + "px"), e.length > 4 && (s[a].className = "el-carousel__button on" + a), n[a].style.left = t > 4 ? 1280 / o * (a - (t - 4)) + "px" : a * (1280 / o) + "px"
                    },
                    setChangeText: function() {
                        var t = this.prevPage,
                            e = this.currentPage,
                            i = this.totalPage,
                            s = r()(document.querySelectorAll(".el-carousel__button")),
                            n = r()(document.querySelectorAll(".el-carousel__indicator")),
                            o = i > 4 ? 4 : i,
                            a = n[e - 1] ? n[e - 1].style.left.split("px")[0] : void 0;
                        if (s.length > 0 && i > 0)
                            for (var l = 0; l < i; l += 1)(e > t || a < 0) && (e > 4 ? (e < this.firstPositionPage || e > this.firstPositionPage + 2) && (this.firstPositionPage = e - 3, n[l].style.left = 1280 / o * (l - (e - 4)) + "px") : (this.firstPositionPage = 1, n[l].style.left = l * (1280 / o) + "px"))
                    }
                },
                watch: {
                    bannerList: function() {
                        var t = this;
                        setTimeout(function() {
                            t.setText()
                        }, 0)
                    }
                }
            },
            u = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: t.loading,
                            expression: "loading"
                        }],
                        staticClass: "banner-pane main-bg",
                        attrs: {
                            "element-loading-spinner": "el-icon-loading"
                        }
                    }, [i("el-carousel", {
                        ref: "carousel",
                        class: "item_" + (t.totalPage > 4 ? 4 : t.totalPage) + " cPage_" + t.currentPage,
                        attrs: {
                            trigger: "click",
                            height: t.height,
                            interval: 5e3,
                            arrow: "always"
                        },
                        on: {
                            change: t.change
                        }
                    }, t._l(t.bannerList, function(e) {
                        return i("el-carousel-item", {
                            key: e.id
                        }, [i("div", {
                            staticClass: "banner-item",
                            style: {
                                background: "url(" + e.img + ") no-repeat 50% center"
                            }
                        }, [e.link_content ? i("a", {
                            attrs: {
                                target: "_blank",
                                href: e.link_content,
                                rel: "noopener noreferrer"
                            },
                            on: {
                                click: function(i) {
                                    t.gaBanner(e.id, e.title)
                                }
                            }
                        }) : t._e()])])
                    }), 1), t._v(" "), t.totalPage > 1 ? i("div", {
                        staticClass: "number-area"
                    }, [i("span", {
                        staticClass: "current"
                    }, [t._v(t._s(t.currentPage))]), t._v(" "), i("span", {
                        staticClass: "slash"
                    }, [t._v("/")]), t._v(" "), i("span", {
                        staticClass: "total"
                    }, [t._v(t._s(t.totalPage))])]) : t._e()], 1)
                },
                staticRenderFns: []
            };
        var f = i("VU/8")(p, u, !1, function(t) {
                i("p2UN")
            }, "data-v-ccf26b98", null).exports,
            g = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "iso-pane page-min-width text-left"
                    }, [s("div", {
                        staticClass: "iso-box",
                        class: t.$locale
                    }, [s("div", {
                        staticClass: "text-center"
                    }, [s("div", {
                        staticClass: "iso-title fz30 font-bold lh30",
                        domProps: {
                            innerHTML: t._s(t.$t("home.iso.title"))
                        }
                    }), t._v(" "), s("div", {
                        staticClass: "iso-subtitle text-tips fz16 lh24",
                        domProps: {
                            innerHTML: t._s(t.$t("home.iso.subtitle"))
                        }
                    }), t._v(" "), s("div", {
                        staticClass: "flex-between-start mt40"
                    }, [s("div", {
                        staticClass: "iso-left"
                    }, [s("div", {
                        staticClass: "flex-center-center iso-left-img"
                    }, [s("el-popover", {
                        attrs: {
                            placement: "bottom",
                            trigger: "hover",
                            "popper-class": "iso-popover"
                        }
                    }, [s("div", {
                        class: "en-us" === t.$locale ? "text-left" : "text-center",
                        domProps: {
                            innerHTML: t._s(t.$t("home.iso.popover"))
                        }
                    }), t._v(" "), s("img", {
                        attrs: {
                            slot: "reference",
                            src: i("WJmn"),
                            alt: "iso"
                        },
                        slot: "reference"
                    })])], 1), t._v(" "), s("div", {
                        staticClass: "fz20 lh20 font-bold iso-left-title",
                        domProps: {
                            innerHTML: t._s(t.$t("home.iso.title1"))
                        }
                    }), t._v(" "), s("p", {
                        staticClass: "fz16 lh24 text-tips",
                        domProps: {
                            innerHTML: t._s(t.$t("home.iso.subtitle1"))
                        }
                    })]), t._v(" "), s("div", {
                        staticClass: "iso-right"
                    }, [t._m(0), t._v(" "), s("div", {
                        staticClass: "fz20 lh20 font-bold iso-right-title",
                        domProps: {
                            innerHTML: t._s(t.$t("home.iso.title2"))
                        }
                    }), t._v(" "), s("p", {
                        staticClass: "fz16 lh24 text-tips",
                        domProps: {
                            innerHTML: t._s(t.$t("home.iso.subtitle2"))
                        }
                    })])])])])])
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "flex-center-center iso-right-img"
                    }, [e("img", {
                        attrs: {
                            src: i("JPXT"),
                            alt: "iso"
                        }
                    }), this._v(" "), e("img", {
                        attrs: {
                            src: i("Bbop"),
                            alt: "iso"
                        }
                    })])
                }]
            };
        var m = i("VU/8")({
                data: function() {
                    return {}
                }
            }, g, !1, function(t) {
                i("2xgS"), i("B2Zc")
            }, "data-v-5418813e", null).exports,
            v = i("PKHo"),
            x = i("RSin"),
            y = i.n(x),
            b = i("2hMI"),
            k = {
                name: "Download",
                mixins: [v.a],
                computed: {
                    qrCode: function() {
                        return y.a.imageSync(b.f, {
                            ec_level: "H",
                            type: "svg"
                        })
                    }
                }
            },
            w = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "download-pane page-min-width"
                    }, [i("div", {
                        staticClass: "flex-center-center"
                    }, [i("div", {
                        staticClass: "download-phone",
                        class: "" + t.$locale
                    }), t._v(" "), i("div", {
                        staticClass: "download-qrcode"
                    }, [i("h3", {
                        staticClass: "down-title text-main fz30 lh34"
                    }, [t._v(t._s(t.$t("home.download.toDown")))]), t._v(" "), i("div", {
                        staticClass: "down-desc mt20 text-main fz16 lh24",
                        domProps: {
                            innerHTML: t._s(t.$t("home.download.desc"))
                        }
                    }), t._v(" "), i("span", {
                        staticClass: "img",
                        domProps: {
                            innerHTML: t._s(t.qrCode)
                        }
                    })])])])
                },
                staticRenderFns: []
            };
        var M = i("VU/8")(k, w, !1, function(t) {
                i("qIt4")
            }, "data-v-32770008", null).exports,
            S = i("8mwC"),
            C = {
                name: "Info",
                data: function() {
                    return {
                        helpLinks: S.a.list[1].links
                    }
                }
            },
            T = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "info-pane"
                    }, [i("div", {
                        staticClass: "pane-1280 page-main-width flex-center-start text-left"
                    }, [i("div", {
                        staticClass: "info-center"
                    }, [i("span", {
                        staticClass: "info-title fz18"
                    }, [t._v(t._s(t.$t("home.info.center.title")))]), t._v(" "), i("span", {
                        staticClass: "info-tel"
                    }, [t._v(t._s(t.$t("home.info.center.tel")))]), t._v(" "), i("span", {
                        staticClass: "info-open",
                        domProps: {
                            innerHTML: t._s(t.$t("home.info.center.open"))
                        }
                    }), t._v(" "), i("span", {
                        staticClass: "info-address",
                        domProps: {
                            innerHTML: t._s(t.$t("home.info.center.address"))
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "item-icon fz40 hb-icon-user-message"
                    })]), t._v(" "), i("a", {
                        staticClass: "info-item img-0",
                        attrs: {
                            href: t.helpLinks["" + t.$locale],
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [i("div", {
                        staticClass: "info-title fz18"
                    }, [t._v("\n                    " + t._s(t.$t("home.info.info[0].title")) + "\n                ")]), t._v(" "), t._l(t.$t("home.info.info[0].content"), function(e, s) {
                        return i("div", {
                            key: s,
                            staticClass: "info-desc-item"
                        }, [t._v("\n                    " + t._s(e) + "\n                ")])
                    }), t._v(" "), i("div", {
                        staticClass: "item-icon hb-icon-user"
                    })], 2), t._v(" "), i("a", {
                        staticClass: "info-item img-1",
                        attrs: {
                            href: "https://support." + this.$hostName + "/hc/ko/articles/360002213031-수수료-안내",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [i("div", {
                        staticClass: "info-title fz18"
                    }, [t._v("\n                    " + t._s(t.$t("home.info.info[1].title")) + "\n                ")]), t._v(" "), t._l(t.$t("home.info.info[1].content"), function(e, s) {
                        return i("div", {
                            key: s,
                            staticClass: "info-desc-item"
                        }, [t._v("\n                    " + t._s(e) + "\n                ")])
                    }), t._v(" "), i("div", {
                        staticClass: "item-icon hb-icon-user"
                    })], 2), t._v(" "), i("router-link", {
                        staticClass: "info-item img-2",
                        attrs: {
                            to: "/" + t.$locale + "/introduction"
                        }
                    }, [i("div", {
                        staticClass: "info-title fz18"
                    }, [t._v("\n                    " + t._s(t.$t("home.info.info[2].title")) + "\n                ")]), t._v(" "), t._l(t.$t("home.info.info[2].content"), function(e, s) {
                        return i("div", {
                            key: s,
                            staticClass: "info-desc-item"
                        }, [t._v("\n                    " + t._s(e) + "\n                ")])
                    }), t._v(" "), i("div", {
                        staticClass: "item-icon hb-icon-user"
                    })], 2)], 1)])
                },
                staticRenderFns: []
            };
        var A = i("VU/8")(C, T, !1, function(t) {
                i("yP92")
            }, "data-v-9b28f9de", null).exports,
            L = i("mvHQ"),
            P = i.n(L),
            E = i("Dd8w"),
            _ = i.n(E),
            O = i("NYxO"),
            D = i("/W9f"),
            I = i("9gmj"),
            z = i("5reh"),
            N = i("GKmE"),
            B = {
                data: function() {
                    return {
                        searchValue: "",
                        current: "krw",
                        favorList: [],
                        showFavor: !1,
                        isEndSend: []
                    }
                },
                computed: _()({}, Object(O.c)({
                    quoteCurrency: function(t) {
                        return t.currency.quoteCurrency
                    },
                    currencyNameObj: function(t) {
                        return t.currency.currencyNameObj
                    },
                    currencyNames: function(t) {
                        return t.currency.currencyNames
                    },
                    currentSymbol: function(t) {
                        return t.exchange.currentSymbol
                    },
                    symbolsDataArr: function(t) {
                        return t.currency.symbolsDataArr
                    }
                }), {
                    tabData: function() {
                        var t = this.quoteCurrency.map(function(t) {
                            return {
                                label: t.toUpperCase(),
                                value: t
                            }
                        });
                        return t.unshift({
                            label: this.$t("exchange.market.collector"),
                            value: "favor",
                            favor: !0
                        }), t
                    },
                    tableData: function() {
                        var t = this;
                        return this.symbolsDataArr.filter(function(e) {
                            var i = e.quote === t.current;
                            return "favor" === t.current && (i = t.favorList.indexOf(e.symbol) > -1), e.currencyName || (e.currencyName = t.getCurrencyName(e.base)), t.searchValue && i && (i = e.base.indexOf(t.searchValue.toLowerCase()) > -1 || e.currencyName.indexOf(t.searchValue.toLowerCase()) > -1), i
                        }).map(function(e) {
                            return !("pre-online" === e.state && t.getNow() < (e["trade-open-at"] || e.trade_open_at) || "suspend" === e.state || "fuse" === e.state) || e["white-enabled"] || e.white_enabled || (e = _()({}, e, {
                                close: "--",
                                rate: "--",
                                amount: "--",
                                amountLegal: "--",
                                vol: "--",
                                volLegal: "--",
                                legal: "--",
                                high: "--",
                                low: "--",
                                direction: "",
                                isLegal: !1,
                                isEnd: !0
                            })), e
                        })
                    }
                }),
                components: {
                    Card: D.a,
                    RadioGroup: I.a
                },
                methods: {
                    bigNumToText: N.c,
                    bigNumToTextKrw: N.d,
                    searchEvent: function(t) {
                        this.searchValue = t.target.value
                    },
                    changeFavor: function(t, e, i) {
                        var s = this;
                        return c()(l.a.mark(function n() {
                            var o, r, a;
                            return l.a.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (!(s.isEndSend.indexOf(t) > -1)) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 2:
                                        if (s.isEndSend.push(t), o = s.favorList.filter(function(e) {
                                                return e !== t
                                            }), r = {
                                                trading_pair: t,
                                                website: "PRO"
                                            }, a = {}, "add" === i && o.push(t), !s.$isLogin) {
                                            n.next = 24;
                                            break
                                        }
                                        if ("add" !== i) {
                                            n.next = 14;
                                            break
                                        }
                                        return n.next = 11, d.p.addFavor(r);
                                    case 11:
                                        a = n.sent, n.next = 17;
                                        break;
                                    case 14:
                                        return n.next = 16, d.p.cancelFavor(r);
                                    case 16:
                                        a = n.sent;
                                    case 17:
                                        if (s.$set(s, "isEndSend", s.isEndSend.filter(function(e) {
                                                return e !== t
                                            })), !1 !== a.success) {
                                            n.next = 20;
                                            break
                                        }
                                        return n.abrupt("return", s.$error(a.message));
                                    case 20:
                                        return localStorage.setItem("favorList", P()(o)), s.$set(s, "favorList", o), s.sa.track({
                                            type: "add" === i ? "AddCollection" : "DeleteCollection",
                                            others: {
                                                token: e,
                                                symbol: t,
                                                market: t.replace(e, "")
                                            }
                                        }), n.abrupt("return");
                                    case 24:
                                        s.$set(s, "isEndSend", s.isEndSend.filter(function(e) {
                                            return e !== t
                                        })), localStorage.setItem("favorList", P()(o)), s.$set(s, "favorList", o);
                                    case 27:
                                    case "end":
                                        return n.stop()
                                }
                            }, n, s)
                        }))()
                    },
                    getFavor: function() {
                        var t = this;
                        return c()(l.a.mark(function e() {
                            var i, s;
                            return l.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (i = JSON.parse(localStorage.getItem("favorList") || "[]"), !t.$isLogin) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 4, d.p.getFavorList();
                                    case 4:
                                        s = e.sent, i = s && s.data ? s.data : [];
                                    case 6:
                                        t.$set(t, "favorList", i);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t)
                        }))()
                    },
                    scrollToSymbol: function(t) {
                        var e = this;
                        try {
                            var i = this.$refs.table.$el,
                                s = document.getElementById(t);
                            if (!i || !s) return void setTimeout(function() {
                                e.scrollToSymbol(e.currentSymbol.replace("_", ""))
                            }, 100);
                            var n = i.offsetHeight,
                                o = s.getBoundingClientRect().top - i.getBoundingClientRect().top;
                            o >= n / 2 ? this.tableScrollTo(o - n / 2) : this.tableScrollTo(0)
                        } catch (t) {}
                    },
                    tableScrollTo: function(t) {
                        var e = this;
                        this.$nextTick(function() {
                            e.$refs.table && e.$refs.table.$refs.bodyWrapper && (e.$refs.table.$refs.bodyWrapper.scrollTop = t)
                        })
                    },
                    getCurrencyName: function(t) {
                        return (this.currencyNameObj[("" + t).toLowerCase()] || {}).currency_name
                    },
                    setSymbol: function(t, e) {
                        if (e.target.className.indexOf("icon-favor") > -1) this.favorList.indexOf(t.symbol) > -1 ? this.changeFavor(t.symbol, t.base, "cancel") : this.changeFavor(t.symbol, t.base, "add");
                        else if (-1 === e.target.className.indexOf("go-link")) {
                            var i = t.name.replace("/", "_");
                            this.$store.commit(z.a.SET_CURRENT_SYMBOL, i), this.$pushState("/exchange/" + i + "/")
                        }
                    },
                    tableRowClassName: function(t) {
                        var e = t.row,
                            i = e.state,
                            s = "";
                        return "pre-online" === i && this.getNow() < (e["trade-open-at"] || e.trade_open_at) && !e["white-enabled"] && !e.white_enabled && (s = "disabled"), "suspend" !== i || e["white-enabled"] || e.white_enabled || (s = "disabled"), "fuse" !== i || e["white-enabled"] || e.white_enabled || (s = "disabled"), s
                    },
                    closeSortMethod: function(t, e) {
                        var i = t.close,
                            s = e.close;
                        return "--" === i && (i = -1 / 0), "--" === s && (s = -1 / 0), Number(i) - Number(s)
                    },
                    lowSortMethod: function(t, e) {
                        var i = t.low,
                            s = e.low;
                        return "--" === i && (i = -1 / 0), "--" === s && (s = -1 / 0), Number(i) - Number(s)
                    },
                    highSortMethod: function(t, e) {
                        var i = t.high,
                            s = e.high;
                        return "--" === i && (i = -1 / 0), "--" === s && (s = -1 / 0), Number(i) - Number(s)
                    },
                    rateSortMethod: function(t, e) {
                        var i = t.rate,
                            s = e.rate;
                        return "--" === i && (i = -1 / 0), "--" === s && (s = -1 / 0), Number(i) - Number(s)
                    },
                    volumeSortMethod: function(t, e) {
                        return t.vol - e.vol
                    },
                    favorIcon: function(t) {
                        return this.favorList.indexOf(t) > -1 ? "icon-favor-on text-favor" : "icon-favor-off"
                    }
                },
                created: function() {
                    this.getFavor(), this.$store.dispatch(z.a.GET_CURRENCY_NAME_LIST)
                },
                watch: {
                    $isLogin: function() {
                        this.getFavor()
                    }
                }
            },
            R = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "marker-main-index page-main-width text-left main-bg"
                    }, [s("Card", {
                        staticClass: "market-card-index clear-fix",
                        staticStyle: {
                            "margin-bottom": "10px"
                        },
                        attrs: {
                            toggle: !1,
                            shadow: "never"
                        }
                    }, [s("div", {
                        staticClass: "market-title clear-fix",
                        attrs: {
                            slot: "header"
                        },
                        slot: "header"
                    }, [s("div", {
                        staticClass: "search-input-box"
                    }, [s("div", {
                        staticClass: "market-radio pt5 fz18 fl clear-fix"
                    }, [s("RadioGroup", {
                        staticClass: "fl noselect",
                        attrs: {
                            name: "radio",
                            list: t.tabData
                        },
                        model: {
                            value: t.current,
                            callback: function(e) {
                                t.current = e
                            },
                            expression: "current"
                        }
                    })], 1), t._v(" "), s("div", {
                        staticClass: "search-input input-default el-input el-input--mini el-input--suffix fr"
                    }, [s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.searchValue,
                            expression: "searchValue"
                        }],
                        staticClass: "el-input__inner main-bg fz14 text-uppercase",
                        attrs: {
                            type: "text",
                            autocomplete: "off",
                            "growing-ignore": "true"
                        },
                        domProps: {
                            value: t.searchValue
                        },
                        on: {
                            input: [function(e) {
                                e.target.composing || (t.searchValue = e.target.value)
                            }, t.searchEvent]
                        }
                    }), t._v(" "), s("span", {
                        staticClass: "el-input__suffix"
                    }, [s("span", {
                        staticClass: "el-input__suffix-inner"
                    }, [s("i", {
                        staticClass: "el-input__icon hb-icon-user-search"
                    })])])])])]), t._v(" "), s("div", {
                        staticClass: "market-data exchange-pannel",
                        attrs: {
                            slot: "cardBody"
                        },
                        slot: "cardBody"
                    }, [s("div", {
                        attrs: {
                            id: "v-step-market"
                        }
                    }), t._v(" "), s("div", {
                        staticClass: "table-main"
                    }, [s("el-table", {
                        ref: "table",
                        staticClass: "hb-el-table market-table",
                        class: {
                            "favor-table": "favor" === t.current
                        },
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            size: "mini",
                            data: t.tableData,
                            "max-height": "584",
                            "row-style": {
                                height: "60px",
                                cursor: "pointer"
                            },
                            "row-class-name": t.tableRowClassName,
                            "empty-text": t.$t("exchange.market.no_records"),
                            "row-key": "symbol"
                        },
                        on: {
                            "row-click": t.setSymbol
                        }
                    }, [s("el-table-column", {
                        attrs: {
                            align: "center",
                            width: "30"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [s("p", {
                                    staticClass: "market-tabal-icon"
                                }, [s("i", {
                                    staticClass: "icon-favor text-subtitle fz14",
                                    class: t.favorIcon(e.row.symbol)
                                })])]
                            }
                        }])
                    }), t._v(" "), s("el-table-column", {
                        attrs: {
                            prop: "symbol",
                            "min-width": "70",
                            label: t.$t("home.market.currency")
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [s("span", {
                                    staticClass: "cb inline-block pr15",
                                    attrs: {
                                        id: e.row.symbol
                                    }
                                }, [s("b", {
                                    staticClass: "icon-name text-main fz14"
                                }, [t._v("\n                                        " + t._s(e.row.currencyName) + "\n                                    ")]), t._v(" "), s("span", {
                                    staticClass: "market-symbol lh16 text-tips"
                                }, [t._v("\n                                        " + t._s(e.row.base_currency_display_name.toUpperCase()) + "\n                                        "), "favor" === t.current ? s("span", {
                                    staticClass: "quote-name text-subtitle"
                                }, [t._v("\n                                            / " + t._s(e.row.quote.toUpperCase()) + "\n                                        ")]) : t._e(), t._v(" "), e.row.etp_leverage_ratio ? s("span", {
                                    staticClass: "market-etp fz12",
                                    class: e.row.etp_leverage_ratio > 0 ? "up" : "down"
                                }, [t._v("\n                                            " + t._s(t.$t("exchange.etp.direction." + e.row.etp_leverage_ratio)) + "\n                                        ")]) : t._e(), t._v(" "), e.row.tags ? [t._l(e.row.tags.split(","), function(e, i) {
                                    return [e && "st" === e.toLowerCase() ? s("el-popover", {
                                        key: i,
                                        staticClass: "text-up cursor-pointe",
                                        attrs: {
                                            placement: "top-start",
                                            width: "400",
                                            trigger: "hover"
                                        }
                                    }, [s("p", {
                                        domProps: {
                                            innerHTML: t._s(t.$t("exchange.tagsTips['" + e.toLowerCase() + "']"))
                                        }
                                    }), t._v(" "), s("template", {
                                        slot: "reference"
                                    }, [s("i", {
                                        staticClass: "hb-icon-user-st"
                                    })])], 2) : t._e()]
                                })] : t._e()], 2)])]
                            }
                        }])
                    }), t._v(" "), s("el-table-column", {
                        attrs: {
                            prop: "close",
                            "min-width": "90",
                            align: "right",
                            sortable: !0,
                            "sort-method": t.closeSortMethod,
                            label: t.$t("home.market.current_price")
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [s("div", {
                                    staticClass: "market-table"
                                }, [s("p", {
                                    staticClass: "fz14 lh24 text-main"
                                }, [t._v("\n                                        " + t._s(t._f("thousandSeparate")(t._f("precision")(e.row.close, e.row.price_precision, e.row.symbol))) + "\n                                        "), "--" !== e.row.close ? s("span", {
                                    staticClass: "text-subtitle"
                                }, [t._v("\n                                            " + t._s(e.row.quote.toUpperCase()) + "\n                                        ")]) : t._e()]), t._v(" "), e.row.isLegal || "--" === e.row.legal ? t._e() : s("p", {
                                    staticClass: "conversion"
                                }, [s("span", {
                                    staticClass: "text-holder lh18"
                                }, [t._v("\n                                            " + t._s(t._f("thousandSeparate")(t._f("precisionKrw")(e.row.legal))) + "\n                                        ")]), t._v(" "), s("s", {
                                    staticClass: "text-holder lh18"
                                }, [t._v("\n                                            KRW\n                                        ")])])])]
                            }
                        }])
                    }), t._v(" "), s("el-table-column", {
                        attrs: {
                            prop: "rate",
                            "min-width": "80",
                            align: "right",
                            "sort-method": t.rateSortMethod,
                            sortable: !0,
                            label: t.$t("home.market.rate")
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [s("p", {
                                    staticClass: "fz14",
                                    class: {
                                        "rate-up": "up" === e.row.direction, "rate-down": "down" === e.row.direction
                                    }
                                }, [s("span", [t._v("\n                                        " + t._s(("up" === e.row.direction && "--" !== e.row.rate ? "+" : "") + e.row.rate) + "\n                                        " + t._s("--" !== e.row.rate ? "%" : "") + "\n                                        "), s("i", {
                                    class: {
                                        "el-icon-caret-bottom": "down" === e.row.direction, "el-icon-caret-top": "up" === e.row.direction
                                    }
                                })])])]
                            }
                        }])
                    }), t._v(" "), s("el-table-column", {
                        attrs: {
                            prop: "high",
                            "min-width": "90",
                            align: "right",
                            "sort-method": t.highSortMethod,
                            sortable: !0,
                            label: t.$t("home.market.high")
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [s("div", {
                                    staticClass: "fz14 price market-table"
                                }, [s("span", [t._v("\n                                        " + t._s(t._f("thousandSeparate")(t._f("precision")(e.row.high, e.row.price_precision, e.row.symbol))) + "\n                                        "), "--" !== e.row.high ? s("span", {
                                    staticClass: "text-subtitle"
                                }, [t._v("\n                                            " + t._s(e.row.quote.toUpperCase()) + "\n                                        ")]) : t._e()]), t._v(" "), e.row.isLegal || "--" === e.row.highLegal ? t._e() : s("p", {
                                    staticClass: "conversion fz12"
                                }, [s("span", {
                                    staticClass: "text-holder lh18"
                                }, [t._v("\n                                            " + t._s(t._f("thousandSeparate")(t._f("precisionKrw")(e.row.highLegal))) + "\n                                        ")]), t._v(" "), s("s", {
                                    staticClass: "text-holder lh18"
                                }, [t._v("\n                                            KRW\n                                        ")])])])]
                            }
                        }])
                    }), t._v(" "), s("el-table-column", {
                        attrs: {
                            prop: "low",
                            "min-width": "90",
                            align: "right",
                            "sort-method": t.lowSortMethod,
                            sortable: !0,
                            label: t.$t("home.market.low")
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [s("div", {
                                    staticClass: "fz14 price market-table"
                                }, [s("span", [t._v("\n                                        " + t._s(t._f("thousandSeparate")(t._f("precision")(e.row.low, e.row.price_precision, e.row.symbol))) + "\n                                        "), "--" !== e.row.low ? s("span", {
                                    staticClass: "text-subtitle"
                                }, [t._v("\n                                            " + t._s(e.row.quote.toUpperCase()) + "\n                                        ")]) : t._e()]), t._v(" "), e.row.isLegal || "--" === e.row.lowLegal ? t._e() : s("p", {
                                    staticClass: "conversion fz12"
                                }, [s("span", {
                                    staticClass: "text-holder lh18"
                                }, [t._v("\n                                            " + t._s(t._f("thousandSeparate")(t._f("precisionKrw")(e.row.lowLegal))) + "\n                                        ")]), t._v(" "), s("s", {
                                    staticClass: "text-holder lh18"
                                }, [t._v("\n                                            KRW\n                                        ")])])])]
                            }
                        }])
                    }), t._v(" "), s("el-table-column", {
                        attrs: {
                            align: "right",
                            "min-width": "70",
                            prop: "amount",
                            "sort-method": t.volumeSortMethod,
                            sortable: !0,
                            label: t.$t("home.market.total_24H")
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [s("span", {
                                    staticClass: "amount-cell text-main fz14"
                                }, [t._v("\n                                    " + t._s(t._f("thousandSeparate")(t.bigNumToText(e.row.vol).num)) + "\n                                    "), t.bigNumToText(e.row.vol).unit ? s("span", {
                                    staticClass: "text-subtitle"
                                }, [t._v("\n                                        " + t._s(t.$t("tools.number." + t.bigNumToText(e.row.vol).unit)) + "\n                                    ")]) : t._e()]), t._v(" "), e.row.isLegal || "--" === e.row.volLegal ? t._e() : s("p", {
                                    staticClass: "conversion fz12"
                                }, [s("span", {
                                    staticClass: "text-holder lh18"
                                }, [t._v("\n                                        " + t._s(t._f("thousandSeparate")(t.bigNumToTextKrw(e.row.volLegal).num)) + "\n                                        "), t.bigNumToTextKrw(e.row.volLegal).unit ? s("span", {
                                    staticClass: "text-subtitle"
                                }, [t._v("\n                                            " + t._s(t.$t("tools.number." + t.bigNumToTextKrw(e.row.volLegal).unit)) + "\n                                        ")]) : t._e()])])]
                            }
                        }])
                    }), t._v(" "), s("el-table-column", {
                        attrs: {
                            align: "right",
                            "min-width": "90",
                            sortable: !1,
                            label: t.$t("home.market.operation"),
                            "class-name": "edit-box"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return s("div", {}, [t.$isLogin && !e.row.etp_leverage_ratio ? s("router-link", {
                                    staticClass: "go-link text-primary font-bold",
                                    attrs: {
                                        to: "/" + t.$locale + "/legal/exchange/?coin=" + e.row.base
                                    }
                                }, [t._v("\n                                    " + t._s(t.$t("home.market.recharge")) + "\n                                ")]) : t._e(), t._v(" "), t.$isLogin && !e.row.etp_leverage_ratio ? s("span", {
                                    staticClass: "text-gray"
                                }, [t._v("\n                                    |\n                                ")]) : t._e(), t._v(" "), t.$isLogin && !e.row.etp_leverage_ratio ? s("router-link", {
                                    staticClass: "go-link text-primary font-bold",
                                    attrs: {
                                        to: "/" + t.$locale + "/legal/exchange/?coin=" + e.row.base
                                    }
                                }, [t._v("\n                                    " + t._s(t.$t("home.market.withdraw")) + "\n                                ")]) : t._e(), t._v(" "), t.$isLogin && !e.row.etp_leverage_ratio ? s("span", {
                                    staticClass: "text-gray"
                                }, [t._v("\n                                    |\n                                ")]) : t._e(), t._v(" "), e.row.isEnd ? t._e() : s("router-link", {
                                    staticClass: "go-link text-primary font-bold",
                                    attrs: {
                                        to: "/" + t.$locale + "/exchange/" + e.row.base + "_" + e.row.quote
                                    }
                                }, [t._v("\n                                    " + t._s(t.$t("home.market.trade")) + "\n                                ")]), t._v(" "), e.row.isEnd ? s("span", {
                                    staticClass: "go-link text-bbb font-bold"
                                }, [t._v("\n                                    " + t._s(t.$t("home.market.trade")) + "\n                                ")]) : t._e()], 1)
                            }
                        }])
                    }), t._v(" "), "favor" === t.current ? s("template", {
                        slot: "empty"
                    }, [s("div", {
                        staticClass: "empty-box"
                    }, [s("img", {
                        attrs: {
                            src: i("6GGM"),
                            width: "92"
                        }
                    }), t._v(" "), s("p", {
                        staticClass: "weight"
                    }, [t._v(t._s(t.$t("home.market.no_favorites")))]), t._v(" "), s("p", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("home.market.no_favor_text1")))]), t._v(" "), s("p", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("home.market.no_favor_text2")))])])]) : t._e()], 2)], 1)])])], 1)
                },
                staticRenderFns: []
            };
        var W = i("VU/8")(B, R, !1, function(t) {
                i("MNPs")
            }, "data-v-162bd38f", null).exports,
            G = i("043Z"),
            H = i("ygAC"),
            j = i.n(H),
            X = i("T183"),
            F = i.n(X),
            Y = {
                name: "Notice",
                components: {
                    Card: D.a
                },
                mounted: function() {
                    this.getTopNotice()
                },
                data: function() {
                    return {
                        noticeList: [],
                        helpConfig: S.a,
                        arrowImg: j.a,
                        important: F.a
                    }
                },
                methods: {
                    goToDetail: function(t) {
                        this.$pushState("/notices/" + t.id + "/")
                    },
                    getTopNotice: function() {
                        var t = this;
                        return c()(l.a.mark(function e() {
                            var i, s;
                            return l.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, d.i.getNotice({
                                            platform: 1
                                        });
                                    case 2:
                                        (i = e.sent).success && i.data && (s = [], i.data.forEach(function(t, e) {
                                            e < 6 && s.push(_()({}, t, {
                                                created: Object(G.a)(t.created_at, "YYYY-MM-DD")
                                            }))
                                        }), t.noticeList = s);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t)
                        }))()
                    }
                }
            },
            $ = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("Card", {
                        staticClass: "notice main-bg"
                    }, [i("div", {
                        staticClass: "flex-start-center text-main",
                        attrs: {
                            slot: "header"
                        },
                        slot: "header"
                    }, [i("span", [t._v(t._s(t.$t("exchange.news.news")))]), t._v(" "), i("span", {
                        staticClass: "pl10"
                    }, [i("a", {
                        staticClass: "text-subtitle",
                        attrs: {
                            href: t.helpConfig.list[0].links[t.$locale],
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [t._v("\n                    " + t._s(t.$t("home.news.more")) + "\n                    "), i("img", {
                        staticClass: "arrow-img",
                        attrs: {
                            src: t.arrowImg
                        }
                    })])])]), t._v(" "), i("ul", {
                        attrs: {
                            slot: "cardBody"
                        },
                        slot: "cardBody"
                    }, t._l(t.noticeList, function(e, s) {
                        return i("li", {
                            key: s
                        }, [i("span", [e.url ? i("a", {
                            attrs: {
                                href: e.url,
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }
                        }, [i("p", {
                            staticClass: "text-main"
                        }, [t._v(t._s(e.title))]), t._v(" "), i("p", {
                            staticClass: "text-subtitle"
                        }, [i("span", {
                            staticClass: "pt5"
                        }, [t._v(t._s(e.created))])])]) : i("a", {
                            on: {
                                click: function(i) {
                                    t.goToDetail(e)
                                }
                            }
                        }, [i("p", {
                            staticClass: "text-main"
                        }, [t._v(t._s(e.title))]), t._v(" "), i("p", {
                            staticClass: "text-subtitle"
                        }, [i("span", {
                            staticClass: "pt5"
                        }, [t._v(t._s(e.created))])])])])])
                    }))])
                },
                staticRenderFns: []
            };
        var U = i("VU/8")(Y, $, !1, function(t) {
                i("XxH0")
            }, "data-v-5b6444d6", null).exports,
            V = i("Gu7T"),
            q = i.n(V),
            K = {
                name: "PriceRanking",
                components: {
                    Card: D.a
                },
                data: function() {
                    return {
                        coins: [],
                        activeName: "up",
                        saData: P()({
                            type: "test",
                            $name: "ranking"
                        }),
                        defiData: []
                    }
                },
                created: function() {
                    var t = this;
                    return c()(l.a.mark(function e() {
                        var i;
                        return l.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, d.a.getDefiCurrency();
                                case 2:
                                    200 === (i = e.sent).code && (t.defiData = i.data, t.defiData.length > 0 && (t.activeName = "defi")), t.getCoinsArr();
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }, e, t)
                    }))()
                },
                methods: {
                    bigNumToText: N.c,
                    goLink: function(t) {
                        if (t) {
                            var e = t.toLowerCase().replace("/", "_");
                            this.$store.commit(z.a.SET_CURRENT_SYMBOL, e), this.$pushState("/exchange/" + e + "/")
                        }
                    },
                    getCurrencyName: function(t) {
                        return (this.currencyNameObj[("" + t).toLowerCase()] || {}).currency_name
                    },
                    getCoinsArr: function() {
                        var t = this;
                        d.h.getCoinsArr({
                            pageType: 1
                        }).then(function(e) {
                            e.success ? t.coins = e.data || [] : t.$error(e.message)
                        })
                    }
                },
                computed: _()({}, Object(O.c)({
                    symbolsDataArr: function(t) {
                        return t.currency.symbolsDataArr
                    },
                    currencyNameObj: function(t) {
                        return t.currency.currencyNameObj
                    }
                }), {
                    rankList: function() {
                        var t = this,
                            e = [].concat(q()(this.symbolsDataArr)).filter(function(t) {
                                return "--" !== t.rate
                            });
                        "defi" === this.activeName ? e = e.filter(function(e) {
                            return -1 !== t.defiData.indexOf(e.base + e.quote)
                        }).sort(function(t, e) {
                            return e.rate - t.rate
                        }) : "up" === this.activeName ? e = e.sort(function(t, e) {
                            return e.rate - t.rate
                        }) : "down" === this.activeName ? e = e.sort(function(t, e) {
                            return t.rate - e.rate
                        }) : "vol" === this.activeName && (e = e.sort(function(t, e) {
                            return ("--" !== e.volLegal ? e.volLegal : e.vol) - ("--" !== t.volLegal ? t.volLegal : t.vol)
                        }));
                        return e
                    }
                })
            },
            Z = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("Card", {
                        staticClass: "rank-pane main-bg"
                    }, [i("span", {
                        attrs: {
                            slot: "header",
                            "sa-data": t.saData
                        },
                        slot: "header"
                    }, [t._v("\n            " + t._s(t.$t("home.ranking.title")) + "\n        ")]), t._v(" "), i("div", {
                        attrs: {
                            slot: "cardBody"
                        },
                        slot: "cardBody"
                    }, [i("el-tabs", {
                        model: {
                            value: t.activeName,
                            callback: function(e) {
                                t.activeName = e
                            },
                            expression: "activeName"
                        }
                    }, [t.defiData.length ? i("el-tab-pane", {
                        attrs: {
                            label: t.$t("home.ranking.market"),
                            name: "defi"
                        }
                    }) : t._e(), t._v(" "), i("el-tab-pane", {
                        attrs: {
                            label: t.$t("home.ranking.increase"),
                            name: "up"
                        }
                    }), t._v(" "), i("el-tab-pane", {
                        attrs: {
                            label: t.$t("home.ranking.decrease"),
                            name: "down"
                        }
                    }), t._v(" "), i("el-tab-pane", {
                        attrs: {
                            label: t.$t("home.ranking.volume"),
                            name: "vol"
                        }
                    })], 1), t._v(" "), i("ul", {
                        staticClass: "rank-list"
                    }, [t._l(t.rankList, function(e, s) {
                        return [e && s < 5 ? i("li", {
                            key: "up_" + s,
                            staticClass: "flex-between-center",
                            on: {
                                click: function(i) {
                                    t.goLink(e.display_name)
                                }
                            }
                        }, [i("span", {
                            staticClass: "rank-num text-white text-center fz10"
                        }, [t._v(t._s(s + 1))]), t._v(" "), i("span", {
                            staticClass: "rank-name fz12"
                        }, [i("span", {
                            staticClass: "text-main"
                        }, [t._v(t._s(("" + e.base_currency_display_name).toUpperCase()))]), t._v(" "), i("span", {
                            staticClass: "text-subtitle"
                        }, [t._v("/ " + t._s(("" + e.quote_currency_display_name).toUpperCase()))]), t._v(" "), e.etp_leverage_ratio ? i("span", {
                            staticClass: "rank-etp",
                            class: e.etp_leverage_ratio > 0 ? "up" : "down"
                        }, [t._v("\n                                " + t._s(t.$t("exchange.etp.direction." + e.etp_leverage_ratio)) + "\n                            ")]) : t._e()]), t._v(" "), i("span", {
                            staticClass: "rank-kname text-ellipsis"
                        }, [t._v(t._s(t.getCurrencyName(e.base)))]), t._v(" "), i("span", {
                            staticClass: "rank-close text-main text-right"
                        }, ["krw" !== e.quote ? i("span", [t._v(t._s(t._f("thousandSeparate")(t._f("precisionKrw")(e.legal))))]) : i("span", [t._v(t._s(t._f("thousandSeparate")(t._f("precision")(e.close, e.price_precision, e.symbol))))]), t._v(" "), i("span", {
                            staticClass: "text-subtitle"
                        }, [t._v("KRW")])]), t._v(" "), i("span", {
                            staticClass: "rank-quote text-holder fz12 text-right"
                        }, [t._v("\n                            " + t._s(t._f("thousandSeparate")(t._f("precision")(e.close, e.price_precision, e.symbol))) + " " + t._s(e.quote.toUpperCase()) + "\n                        ")]), t._v(" "), "vol" !== t.activeName ? i("span", {
                            class: ["rank-rate text-right", !e.rate || 0 === Number(e.rate) && "normal", Number(e.rate) > 0 ? "up" : "", Number(e.rate) < 0 ? "down" : ""]
                        }, [i("span", [t._v(t._s(t._f("precision")(Math.abs(e.rate))) + "%")]), t._v(" "), i("span", {
                            staticClass: "arrow"
                        })]) : i("span", {
                            staticClass: "rank-vol text-subtitle fz12 text-right"
                        }, [i("span", [t._v("\n                                ￦ " + t._s(t._f("thousandSeparate")(t.bigNumToText("--" !== e.volLegal ? e.volLegal : e.vol).num)) + "\n                                "), t.bigNumToText("--" !== e.volLegal ? e.volLegal : e.vol).unit ? [t._v("\n                                    " + t._s(t.$t("tools.number." + t.bigNumToText("--" !== e.volLegal ? e.volLegal : e.vol).unit)) + "\n                                ")] : t._e()], 2)])]) : t._e()]
                    })], 2)], 1)])
                },
                staticRenderFns: []
            };
        var J = i("VU/8")(K, Z, !1, function(t) {
                i("MJuU")
            }, "data-v-5e239609", null).exports,
            Q = i("EzK7"),
            tt = i.n(Q),
            et = i("8C33"),
            it = i.n(et),
            st = i("XGnK"),
            nt = i.n(st),
            ot = {
                data: function() {
                    return {
                        noticeImg: tt.a,
                        noticeImgZh: it.a,
                        noticeImgEn: nt.a,
                        rishModal: !1,
                        lang: this.$i18n.locale,
                        showButton: !1
                    }
                },
                mounted: function() {
                    var t = this;
                    (localStorage.getItem("noticeEnd") || 0) > (new Date).getTime() ? this.rishModal = !1 : (document.body.classList.add("el-popup-parent--hidden"), this.rishModal = !0, this.$nextTick(function() {
                        t.$refs.imgBox && (t.$refs.imgBox.onscroll = function() {
                            t.showButton || (t.showButton = t.$refs.imgBox.scrollHeight - t.$refs.imgBox.scrollTop - t.$refs.imgBox.clientHeight < 1)
                        })
                    }))
                },
                methods: {
                    close: function(t) {
                        if (t) {
                            var e = new Date;
                            e.setHours(23), e.setMinutes(59), e.setSeconds(59), localStorage.setItem("noticeEnd", e.getTime())
                        }
                        document.body.classList.remove("el-popup-parent--hidden"), this.rishModal = !1
                    }
                }
            },
            rt = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("el-dialog", {
                        staticClass: "notice-modal",
                        attrs: {
                            title: "",
                            visible: t.rishModal,
                            "close-on-click-modal": !1,
                            "close-on-press-escape": !1,
                            "show-close": !1,
                            id: "notice-modal",
                            width: "580px"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.rishModal = e
                            }
                        }
                    }, [i("div", {
                        attrs: {
                            slot: "header"
                        },
                        slot: "header"
                    }), t._v(" "), i("div", {
                        ref: "imgBox",
                        staticClass: "img-box"
                    }, [i("i", {
                        staticClass: "el-icon-close",
                        on: {
                            click: function(e) {
                                t.close(!1)
                            }
                        }
                    }), t._v(" "), "ko-kr" === t.lang ? i("img", {
                        staticClass: "img-kr",
                        attrs: {
                            src: t.noticeImg
                        }
                    }) : t._e(), t._v(" "), "zh-cn" === t.lang ? i("img", {
                        staticClass: "img-zh",
                        attrs: {
                            src: t.noticeImgZh
                        }
                    }) : t._e(), t._v(" "), "en-us" === t.lang ? i("img", {
                        staticClass: "img-en",
                        attrs: {
                            src: t.noticeImgEn
                        }
                    }) : t._e()]), t._v(" "), i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.showButton,
                            expression: "showButton"
                        }],
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [i("el-button", {
                        staticClass: "button-default",
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                t.close(!0)
                            }
                        }
                    }, [t._v("\n                " + t._s(t.$t("home.riskModal.hide")) + "\n            ")]), t._v(" "), i("el-button", {
                        staticClass: "button-primary",
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                t.close(!1)
                            }
                        }
                    }, [t._v("\n                " + t._s(t.$t("home.riskModal.close")) + "\n            ")])], 1)])
                },
                staticRenderFns: []
            };
        var at = i("VU/8")(ot, rt, !1, function(t) {
                i("8gQP")
            }, "data-v-38cfd58c", null).exports,
            lt = i("//Fk"),
            ht = i.n(lt),
            ct = i("504h"),
            dt = i.n(ct),
            pt = {
                props: {
                    symbol: {
                        default: "",
                        type: String
                    }
                },
                data: function() {
                    return {
                        klineData: []
                    }
                },
                computed: _()({}, Object(O.c)({
                    symbolsDataObj: function(t) {
                        return t.currency.symbolsDataObj
                    },
                    currencyNameObj: function(t) {
                        return t.currency.currencyNameObj
                    }
                }), {
                    base: function() {
                        return this.symbol.split("/")[0] || ""
                    },
                    quote: function() {
                        return this.symbol.split("/")[1] || ""
                    },
                    baseName: function() {
                        return this.currentSymbolData && ("" + (this.currentSymbolData.base_currency_display_name || this.base)).toUpperCase()
                    },
                    quoteName: function() {
                        return this.currentSymbolData && ("" + (this.currentSymbolData.quote_currency_display_name || this.quote)).toUpperCase()
                    },
                    legal: function() {
                        return this.getBalanceTotal([{
                            close: this.klineData[this.klineData.length - 1] && this.klineData[this.klineData.length - 1].close || 0,
                            currency: this.base,
                            quote: this.quote
                        }]) || "--"
                    },
                    close: function() {
                        return this.klineData[this.klineData.length - 1] && this.klineData[this.klineData.length - 1].close || 0
                    },
                    open: function() {
                        return this.klineData[this.klineData.length - 1] && this.klineData[this.klineData.length - 1].open || 0
                    },
                    rate: function() {
                        var t = this.currentSymbolData.open,
                            e = (this.close - t) / t * 100;
                        return e = Number(e) || "--", e
                    },
                    direction: function() {
                        var t = "";
                        return t = "--" === this.rate || 0 === Number(this.rate) ? "" : this.rate > 0 ? "up" : "down", t
                    },
                    currentSymbolData: function() {
                        return this.symbolsDataObj[this.base + this.quote] || {}
                    },
                    vol: function() {
                        return this.currentSymbolData.vol || 0
                    }
                }),
                watch: {
                    symbol: {
                        immediate: !0,
                        handler: function(t) {
                            t && this.initWs(t.replace("/", ""))
                        }
                    }
                },
                methods: {
                    bigNumToText: N.c,
                    initWs: function(t) {
                        var e = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "1min",
                            s = (new Date).getTime();
                        s = parseInt(s / 1e3, 10), this.$ws.kline.req({
                            api: {
                                symbol: t,
                                period: i
                            },
                            extra: {
                                from: s - 18e3,
                                to: s
                            }
                        }, function(t) {
                            e.callBack(t)
                        }), this.$ws.kline.sub({
                            api: {
                                symbol: t,
                                period: i
                            }
                        }, function(t) {
                            e.callBack(t)
                        })
                    },
                    callBack: function(t) {
                        if (t && t.data && (this.klineData = t.data), t && t.tick && (this.klineData.shift(), this.klineData.push(t.tick)), this.klineData.length > 0) {
                            var e = this.klineData.map(function(t, e) {
                                return [e, t.close]
                            });
                            this.drawKline(this.symbol, e)
                        }
                    },
                    getCurrencyName: function(t) {
                        return (this.currencyNameObj[("" + t).toLowerCase()] || {}).currency_name
                    },
                    drawKline: function(t, e) {
                        if (document.getElementById(t)) {
                            var i = {
                                chart: {
                                    width: 303,
                                    height: 120,
                                    backgroundColor: "transparent",
                                    padding: -2,
                                    margin: -2
                                },
                                title: {
                                    text: ""
                                },
                                credits: {
                                    enabled: !1
                                },
                                xAxis: {
                                    lineWidth: 0,
                                    labels: {
                                        enabled: !1
                                    },
                                    tickLength: 0,
                                    gridLineWidth: 0
                                },
                                tooltip: {
                                    enabled: !1
                                },
                                yAxis: {
                                    title: {
                                        text: ""
                                    },
                                    gridLineWidth: 0,
                                    labels: {
                                        enabled: !1
                                    }
                                },
                                legend: {
                                    enabled: !1
                                },
                                plotOptions: {
                                    area: {
                                        fillColor: {
                                            linearGradient: {
                                                x1: 0,
                                                y1: 0,
                                                x2: 0,
                                                y2: 1
                                            },
                                            stops: [
                                                [0, "#f9f9f9"],
                                                [1, "#f9f9f9"]
                                            ]
                                        },
                                        marker: {
                                            radius: 2
                                        },
                                        lineWidth: 1,
                                        states: {
                                            hover: {
                                                lineWidth: 1
                                            }
                                        },
                                        threshold: null,
                                        padding: 0,
                                        margin: 0
                                    }
                                },
                                padding: 0,
                                margin: 0,
                                series: [{
                                    data: e,
                                    type: "area",
                                    color: "#dedede",
                                    lineWidth: 1,
                                    animation: !1
                                }]
                            };
                            try {
                                dt.a.chart(t, i)
                            } catch (t) {
                                console.log(t)
                            }
                        }
                    },
                    destroyWs: function(t) {
                        var e = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "1min";
                        return new ht.a(function(s) {
                            e.$ws.kline.unsub({
                                api: {
                                    symbol: t,
                                    period: i
                                }
                            }, function() {
                                s()
                            })
                        })
                    }
                },
                beforeDestroy: function() {
                    var t = this;
                    return c()(l.a.mark(function e() {
                        return l.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.destroyWs(t.symbol.replace("/", ""));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }, e, t)
                    }))()
                }
            },
            ut = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("router-link", {
                        staticClass: "coin-line fl border-nav border-radius-2",
                        attrs: {
                            tag: "div",
                            to: "/" + t.$locale + "/exchange/" + t.base + "_" + t.quote
                        }
                    }, [i("div", {
                        staticClass: "kline",
                        attrs: {
                            id: t.symbol
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "content"
                    }, [i("div", {
                        staticClass: "symbol text-left text-main fz18"
                    }, [i("span", {
                        staticClass: "font-bold"
                    }, [t._v(t._s(t.getCurrencyName(t.base)))]), t._v(" "), i("span", {
                        staticClass: "fz12"
                    }, [t._v(t._s(t.baseName) + " "), i("em", {
                        staticClass: "text-subtitle"
                    }, [t._v("| " + t._s(t.quoteName))])])]), t._v(" "), t.currentSymbolData.isLegal ? t._e() : i("div", {
                        staticClass: "legal text-left text-main fz24",
                        class: t.direction
                    }, [i("span", {
                        staticClass: "font-bold"
                    }, [t._v(t._s(t._f("thousandSeparate")(t._f("precision")(t.legal))))]), t._v(" "), i("span", {
                        staticClass: "fz16"
                    }, [t._v("KRW")])]), t._v(" "), t.currentSymbolData.isLegal ? i("div", {
                        staticClass: "legal text-left text-main fz24",
                        class: t.direction
                    }, [i("span", {
                        staticClass: "font-bold"
                    }, [t._v("\n                    " + t._s(t._f("thousandSeparate")(t._f("precision")(t.close, t.currentSymbolData.price_precision, t.currentSymbolData.symbol))) + "\n                ")]), t._v(" "), i("span", {
                        staticClass: "fz16"
                    }, [t._v("KRW")])]) : t._e(), t._v(" "), t.currentSymbolData.isLegal ? t._e() : i("div", {
                        staticClass: "price text-left text-subtitle fz14"
                    }, [t._v("\n                " + t._s(t._f("thousandSeparate")(t._f("precision")(t.close, t.currentSymbolData.price_precision, t.currentSymbolData.symbol))) + "\n                "), i("span", {
                        staticClass: "fz12"
                    }, [t._v(t._s(t.quote.toUpperCase()))])])]), t._v(" "), i("div", {
                        staticClass: "rate text-white bg-no-rise font-bold",
                        class: t.direction
                    }, [t._v("\n            " + t._s(t._f("precision")(("up" === t.direction ? "+" : "") + t.rate)) + t._s("--" === t.rate ? "" : " %") + "\n        ")]), t._v(" "), i("div", {
                        staticClass: "amount text-subtitle fz12"
                    }, [t._v("\n            " + t._s(t.$t("home.coinLine.vol")) + " :  " + t._s(t._f("thousandSeparate")(t.bigNumToText(t.vol).num)) + "\n            "), t.bigNumToText(t.vol).unit ? [t._v("\n                " + t._s(t.$t("tools.number." + t.bigNumToText(t.vol).unit)) + "\n            ")] : t._e()], 2)])
                },
                staticRenderFns: []
            };
        var ft = {
                data: function() {
                    return {
                        showNoticeModal: !window.PRERENDER_INJECTED.prerender,
                        coinList: ["btc/krw", "eth/krw", "usdt/krw", "ht/krw"]
                    }
                },
                components: {
                    Banner: f,
                    Notice: U,
                    PriceRanking: J,
                    About: n,
                    Info: A,
                    ISO: m,
                    Download: M,
                    NoticeModal: at,
                    Market: W,
                    CoinLine: i("VU/8")(pt, ut, !1, function(t) {
                        i("grfs")
                    }, "data-v-d5f9e54e", null).exports
                }
            },
            gt = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("section", {
                        staticClass: "index-home-pane page-min-width"
                    }, [i("Banner", {
                        staticClass: "no-margin"
                    }), t._v(" "), i("div", {
                        staticClass: "help-box page-main-width flex-between-start"
                    }, [i("div", {
                        staticClass: "box"
                    }, [i("Notice")], 1), t._v(" "), i("div", {
                        staticClass: "box"
                    }, [i("PriceRanking")], 1)]), t._v(" "), i("div", {
                        staticClass: "coin-box page-main-width clear-fix"
                    }, t._l(t.coinList, function(t) {
                        return i("CoinLine", {
                            key: t,
                            attrs: {
                                symbol: t
                            }
                        })
                    }), 1), t._v(" "), i("Market"), t._v(" "), i("About", {
                        staticClass: "no-margin"
                    }), t._v(" "), i("Info", {
                        staticClass: "no-margin"
                    }), t._v(" "), i("ISO", {
                        staticClass: "no-margin"
                    }), t._v(" "), i("Download", {
                        staticClass: "no-margin"
                    }), t._v(" "), t.showNoticeModal ? i("NoticeModal") : t._e()], 1)
                },
                staticRenderFns: []
            };
        var mt = i("VU/8")(ft, gt, !1, function(t) {
            i("jw3l")
        }, "data-v-6d40047e", null);
        e.default = mt.exports
    },
    "2xgS": function(t, e) {},
    "504h": function(t, e, i) {
        var s, n, o;
        n = "undefined" != typeof window ? window : this, o = function(t) {
            function e(t, e, i, s) {
                t.hasOwnProperty(e) || (t[e] = s.apply(null, i))
            }
            var i = {};
            return e(i, "parts/Globals.js", [], function() {
                var e = void 0 === t ? "undefined" != typeof window ? window : {} : t,
                    i = e.document,
                    s = e.navigator && e.navigator.userAgent || "",
                    n = i && i.createElementNS && !!i.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
                    o = /(edge|msie|trident)/i.test(s) && !e.opera,
                    r = -1 !== s.indexOf("Firefox"),
                    a = -1 !== s.indexOf("Chrome"),
                    l = r && 4 > parseInt(s.split("Firefox/")[1], 10);
                return {
                    product: "Highcharts",
                    version: "7.1.1",
                    deg2rad: 2 * Math.PI / 360,
                    doc: i,
                    hasBidiBug: l,
                    hasTouch: i && void 0 !== i.documentElement.ontouchstart,
                    isMS: o,
                    isWebKit: -1 !== s.indexOf("AppleWebKit"),
                    isFirefox: r,
                    isChrome: a,
                    isSafari: !a && -1 !== s.indexOf("Safari"),
                    isTouchDevice: /(Mobile|Android|Windows Phone)/.test(s),
                    SVG_NS: "http://www.w3.org/2000/svg",
                    chartCount: 0,
                    seriesTypes: {},
                    symbolSizes: {},
                    svg: n,
                    win: e,
                    marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"],
                    noop: function() {},
                    charts: [],
                    dateFormats: {}
                }
            }), e(i, "parts/Utilities.js", [i["parts/Globals.js"]], function(t) {
                t.timers = [];
                var e = t.charts,
                    i = t.doc,
                    s = t.win;
                t.error = function(e, i, n) {
                    var o = t.isNumber(e) ? "Highcharts error #" + e + ": www.highcharts.com/errors/" + e : e,
                        r = function() {
                            if (i) throw Error(o);
                            s.console && console.log(o)
                        };
                    n ? t.fireEvent(n, "displayError", {
                        code: e,
                        message: o
                    }, r) : r()
                }, t.Fx = function(t, e, i) {
                    this.options = e, this.elem = t, this.prop = i
                }, t.Fx.prototype = {
                    dSetter: function() {
                        var t, e = this.paths[0],
                            i = this.paths[1],
                            s = [],
                            n = this.now,
                            o = e.length;
                        if (1 === n) s = this.toD;
                        else if (o === i.length && 1 > n)
                            for (; o--;) t = parseFloat(e[o]), s[o] = isNaN(t) ? i[o] : n * parseFloat(i[o] - t) + t;
                        else s = i;
                        this.elem.attr("d", s, null, !0)
                    },
                    update: function() {
                        var t = this.elem,
                            e = this.prop,
                            i = this.now,
                            s = this.options.step;
                        this[e + "Setter"] ? this[e + "Setter"]() : t.attr ? t.element && t.attr(e, i, null, !0) : t.style[e] = i + this.unit, s && s.call(t, i, this)
                    },
                    run: function(e, i, n) {
                        var o = this,
                            r = o.options,
                            a = function(t) {
                                return !a.stopped && o.step(t)
                            },
                            l = s.requestAnimationFrame || function(t) {
                                setTimeout(t, 13)
                            },
                            h = function() {
                                for (var e = 0; e < t.timers.length; e++) t.timers[e]() || t.timers.splice(e--, 1);
                                t.timers.length && l(h)
                            };
                        e !== i || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date, this.start = e, this.end = i, this.unit = n, this.now = this.start, this.pos = 0, a.elem = this.elem, a.prop = this.prop, a() && 1 === t.timers.push(a) && l(h)) : (delete r.curAnim[this.prop], r.complete && 0 === Object.keys(r.curAnim).length && r.complete.call(this.elem))
                    },
                    step: function(e) {
                        var i, s = +new Date,
                            n = this.options,
                            o = this.elem,
                            r = n.complete,
                            a = n.duration,
                            l = n.curAnim;
                        return o.attr && !o.element ? e = !1 : e || s >= a + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), i = l[this.prop] = !0, t.objectEach(l, function(t) {
                            !0 !== t && (i = !1)
                        }), i && r && r.call(o), e = !1) : (this.pos = n.easing((s - this.startTime) / a), this.now = this.start + (this.end - this.start) * this.pos, this.update(), e = !0), e
                    },
                    initPath: function(e, i, s) {
                        function n(t) {
                            var e, i;
                            for (c = t.length; c--;) e = "M" === t[c] || "L" === t[c], i = /[a-zA-Z]/.test(t[c + 3]), e && i && t.splice(c + 1, 0, t[c + 1], t[c + 2], t[c + 1], t[c + 2])
                        }

                        function o(t, e) {
                            for (; t.length < l;) {
                                t[0] = e[l - t.length];
                                var i = t.slice(0, f);
                                [].splice.apply(t, [0, 0].concat(i)), m && (i = t.slice(t.length - f), [].splice.apply(t, [t.length, 0].concat(i)), c--)
                            }
                            t[0] = "M"
                        }

                        function r(t, e) {
                            for (var i = (l - t.length) / f; 0 < i && i--;)(h = t.slice().splice(t.length / v - f, f * v))[0] = e[l - f - i * f], u && (h[f - 6] = h[f - 2], h[f - 5] = h[f - 1]), [].splice.apply(t, [t.length / v, 0].concat(h)), m && i--
                        }
                        i = i || "";
                        var a, l, h, c, d = e.startX,
                            p = e.endX,
                            u = -1 < i.indexOf("C"),
                            f = u ? 7 : 3;
                        i = i.split(" "), s = s.slice();
                        var g, m = e.isArea,
                            v = m ? 2 : 1;
                        if (u && (n(i), n(s)), d && p) {
                            for (c = 0; c < d.length; c++) {
                                if (d[c] === p[0]) {
                                    a = c;
                                    break
                                }
                                if (d[0] === p[p.length - d.length + c]) {
                                    a = c, g = !0;
                                    break
                                }
                            }
                            void 0 === a && (i = [])
                        }
                        return i.length && t.isNumber(a) && (l = s.length + a * v * f, g ? (o(i, s), r(s, i)) : (o(s, i), r(i, s))), [i, s]
                    },
                    fillSetter: function() {
                        t.Fx.prototype.strokeSetter.apply(this, arguments)
                    },
                    strokeSetter: function() {
                        this.elem.attr(this.prop, t.color(this.start).tweenTo(t.color(this.end), this.pos), null, !0)
                    }
                }, t.merge = function() {
                    var e, i, s = arguments,
                        n = {},
                        o = function(e, i) {
                            return "object" != typeof e && (e = {}), t.objectEach(i, function(s, n) {
                                !t.isObject(s, !0) || t.isClass(s) || t.isDOMElement(s) ? e[n] = i[n] : e[n] = o(e[n] || {}, s)
                            }), e
                        };
                    for (!0 === s[0] && (n = s[1], s = Array.prototype.slice.call(s, 2)), i = s.length, e = 0; e < i; e++) n = o(n, s[e]);
                    return n
                }, t.pInt = function(t, e) {
                    return parseInt(t, e || 10)
                }, t.isString = function(t) {
                    return "string" == typeof t
                }, t.isArray = function(t) {
                    return "[object Array]" === (t = Object.prototype.toString.call(t)) || "[object Array Iterator]" === t
                }, t.isObject = function(e, i) {
                    return !(!e || "object" != typeof e || i && t.isArray(e))
                }, t.isDOMElement = function(e) {
                    return t.isObject(e) && "number" == typeof e.nodeType
                }, t.isClass = function(e) {
                    var i = e && e.constructor;
                    return !(!t.isObject(e, !0) || t.isDOMElement(e) || !i || !i.name || "Object" === i.name)
                }, t.isNumber = function(t) {
                    return "number" == typeof t && !isNaN(t) && 1 / 0 > t && -1 / 0 < t
                }, t.erase = function(t, e) {
                    for (var i = t.length; i--;)
                        if (t[i] === e) {
                            t.splice(i, 1);
                            break
                        }
                }, t.defined = function(t) {
                    return void 0 !== t && null !== t
                }, t.attr = function(e, i, s) {
                    var n;
                    return t.isString(i) ? t.defined(s) ? e.setAttribute(i, s) : e && e.getAttribute && ((n = e.getAttribute(i)) || "class" !== i || (n = e.getAttribute(i + "Name"))) : t.defined(i) && t.isObject(i) && t.objectEach(i, function(t, i) {
                        e.setAttribute(i, t)
                    }), n
                }, t.splat = function(e) {
                    return t.isArray(e) ? e : [e]
                }, t.syncTimeout = function(t, e, i) {
                    if (e) return setTimeout(t, e, i);
                    t.call(0, i)
                }, t.clearTimeout = function(e) {
                    t.defined(e) && clearTimeout(e)
                }, t.extend = function(t, e) {
                    var i;
                    for (i in t || (t = {}), e) t[i] = e[i];
                    return t
                }, t.pick = function() {
                    var t, e, i = arguments,
                        s = i.length;
                    for (t = 0; t < s; t++)
                        if (void 0 !== (e = i[t]) && null !== e) return e
                }, t.css = function(e, i) {
                    t.isMS && !t.svg && i && void 0 !== i.opacity && (i.filter = "alpha(opacity=" + 100 * i.opacity + ")"), t.extend(e.style, i)
                }, t.createElement = function(e, s, n, o, r) {
                    e = i.createElement(e);
                    var a = t.css;
                    return s && t.extend(e, s), r && a(e, {
                        padding: 0,
                        border: "none",
                        margin: 0
                    }), n && a(e, n), o && o.appendChild(e), e
                }, t.extendClass = function(e, i) {
                    var s = function() {};
                    return s.prototype = new e, t.extend(s.prototype, i), s
                }, t.pad = function(t, e, i) {
                    return Array((e || 2) + 1 - String(t).replace("-", "").length).join(i || 0) + t
                }, t.relativeLength = function(t, e, i) {
                    return /%$/.test(t) ? e * parseFloat(t) / 100 + (i || 0) : parseFloat(t)
                }, t.wrap = function(t, e, i) {
                    var s = t[e];
                    t[e] = function() {
                        var t = Array.prototype.slice.call(arguments),
                            e = arguments,
                            n = this;
                        return n.proceed = function() {
                            s.apply(n, arguments.length ? arguments : e)
                        }, t.unshift(s), t = i.apply(this, t), n.proceed = null, t
                    }
                }, t.datePropsToTimestamps = function(e) {
                    t.objectEach(e, function(i, s) {
                        t.isObject(i) && "function" == typeof i.getTime ? e[s] = i.getTime() : (t.isObject(i) || t.isArray(i)) && t.datePropsToTimestamps(i)
                    })
                }, t.formatSingle = function(e, i, s) {
                    var n = t.defaultOptions.lang;
                    return /f$/.test(e) ? (s = (s = e.match(/\.([0-9])/)) ? s[1] : -1, null !== i && (i = t.numberFormat(i, s, n.decimalPoint, -1 < e.indexOf(",") ? n.thousandsSep : ""))) : i = (s || t.time).dateFormat(e, i), i
                }, t.format = function(e, i, s) {
                    for (var n, o, r, a, l, h = "{", c = !1, d = []; e && -1 !== (h = e.indexOf(h));) {
                        if (n = e.slice(0, h), c) {
                            for (a = (o = (n = n.split(":")).shift().split(".")).length, l = i, r = 0; r < a; r++) l && (l = l[o[r]]);
                            n.length && (l = t.formatSingle(n.join(":"), l, s)), d.push(l)
                        } else d.push(n);
                        e = e.slice(h + 1), h = (c = !c) ? "}" : "{"
                    }
                    return d.push(e), d.join("")
                }, t.getMagnitude = function(t) {
                    return Math.pow(10, Math.floor(Math.log(t) / Math.LN10))
                }, t.normalizeTickInterval = function(e, i, s, n, o) {
                    var r, a = e;
                    for (r = e / (s = t.pick(s, 1)), i || (i = o ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === n && (1 === s ? i = i.filter(function(t) {
                            return 0 == t % 1
                        }) : .1 >= s && (i = [1 / s]))), n = 0; n < i.length && (a = i[n], !(o && a * s >= e || !o && r <= (i[n] + (i[n + 1] || i[n])) / 2)); n++);
                    return t.correctFloat(a * s, -Math.round(Math.log(.001) / Math.LN10))
                }, t.stableSort = function(t, e) {
                    var i, s, n = t.length;
                    for (s = 0; s < n; s++) t[s].safeI = s;
                    for (t.sort(function(t, s) {
                            return 0 === (i = e(t, s)) ? t.safeI - s.safeI : i
                        }), s = 0; s < n; s++) delete t[s].safeI
                }, t.arrayMin = function(t) {
                    for (var e = t.length, i = t[0]; e--;) t[e] < i && (i = t[e]);
                    return i
                }, t.arrayMax = function(t) {
                    for (var e = t.length, i = t[0]; e--;) t[e] > i && (i = t[e]);
                    return i
                }, t.destroyObjectProperties = function(e, i) {
                    t.objectEach(e, function(t, s) {
                        t && t !== i && t.destroy && t.destroy(), delete e[s]
                    })
                }, t.discardElement = function(e) {
                    var i = t.garbageBin;
                    i || (i = t.createElement("div")), e && i.appendChild(e), i.innerHTML = ""
                }, t.correctFloat = function(t, e) {
                    return parseFloat(t.toPrecision(e || 14))
                }, t.setAnimation = function(e, i) {
                    i.renderer.globalAnimation = t.pick(e, i.options.chart.animation, !0)
                }, t.animObject = function(e) {
                    return t.isObject(e) ? t.merge(e) : {
                        duration: e ? 500 : 0
                    }
                }, t.timeUnits = {
                    millisecond: 1,
                    second: 1e3,
                    minute: 6e4,
                    hour: 36e5,
                    day: 864e5,
                    week: 6048e5,
                    month: 24192e5,
                    year: 314496e5
                }, t.numberFormat = function(e, i, s, n) {
                    e = +e || 0, i = +i;
                    var o, r, a = t.defaultOptions.lang,
                        l = (e.toString().split(".")[1] || "").split("e")[0].length,
                        h = e.toString().split("e");
                    return -1 === i ? i = Math.min(l, 20) : t.isNumber(i) ? i && h[1] && 0 > h[1] && (0 <= (o = i + +h[1]) ? (h[0] = (+h[0]).toExponential(o).split("e")[0], i = o) : (h[0] = h[0].split(".")[0] || 0, e = 20 > i ? (h[0] * Math.pow(10, h[1])).toFixed(i) : 0, h[1] = 0)) : i = 2, r = (Math.abs(h[1] ? h[0] : e) + Math.pow(10, -Math.max(i, l) - 1)).toFixed(i), o = 3 < (l = String(t.pInt(r))).length ? l.length % 3 : 0, s = t.pick(s, a.decimalPoint), n = t.pick(n, a.thousandsSep), e = (0 > e ? "-" : "") + (o ? l.substr(0, o) + n : ""), e += l.substr(o).replace(/(\d{3})(?=\d)/g, "$1" + n), i && (e += s + r.slice(-i)), h[1] && 0 != +e && (e += "e" + h[1]), e
                }, Math.easeInOutSine = function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                }, t.getStyle = function(e, i, n) {
                    return "width" === i ? Math.max(0, Math.min(e.offsetWidth, e.scrollWidth, e.getBoundingClientRect && "none" === t.getStyle(e, "transform", !1) ? Math.floor(e.getBoundingClientRect().width) : 1 / 0) - t.getStyle(e, "padding-left") - t.getStyle(e, "padding-right")) : "height" === i ? Math.max(0, Math.min(e.offsetHeight, e.scrollHeight) - t.getStyle(e, "padding-top") - t.getStyle(e, "padding-bottom")) : (s.getComputedStyle || t.error(27, !0), (e = s.getComputedStyle(e, void 0)) && (e = e.getPropertyValue(i), t.pick(n, "opacity" !== i) && (e = t.pInt(e))), e)
                }, t.inArray = function(t, e, i) {
                    return e.indexOf(t, i)
                }, t.find = Array.prototype.find ? function(t, e) {
                    return t.find(e)
                } : function(t, e) {
                    var i, s = t.length;
                    for (i = 0; i < s; i++)
                        if (e(t[i], i)) return t[i]
                }, t.keys = Object.keys, t.offset = function(t) {
                    var e = i.documentElement;
                    return {
                        top: (t = t.parentElement || t.parentNode ? t.getBoundingClientRect() : {
                            top: 0,
                            left: 0
                        }).top + (s.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                        left: t.left + (s.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                    }
                }, t.stop = function(e, i) {
                    for (var s = t.timers.length; s--;) t.timers[s].elem !== e || i && i !== t.timers[s].prop || (t.timers[s].stopped = !0)
                }, t.objectEach = function(t, e, i) {
                    for (var s in t) t.hasOwnProperty(s) && e.call(i || t[s], t[s], s, t)
                }, t.objectEach({
                    map: "map",
                    each: "forEach",
                    grep: "filter",
                    reduce: "reduce",
                    some: "some"
                }, function(e, i) {
                    t[i] = function(t) {
                        return Array.prototype[e].apply(t, [].slice.call(arguments, 1))
                    }
                }), t.addEvent = function(e, i, s, n) {
                    var o, r = e.addEventListener || t.addEventListenerPolyfill;
                    return o = "function" == typeof e && e.prototype ? e.prototype.protoEvents = e.prototype.protoEvents || {} : e.hcEvents = e.hcEvents || {}, t.Point && e instanceof t.Point && e.series && e.series.chart && (e.series.chart.runTrackerClick = !0), r && r.call(e, i, s, !1), o[i] || (o[i] = []), o[i].push(s), n && t.isNumber(n.order) && (s.order = n.order, o[i].sort(function(t, e) {
                            return t.order - e.order
                        })),
                        function() {
                            t.removeEvent(e, i, s)
                        }
                }, t.removeEvent = function(e, i, s) {
                    function n(i, s) {
                        var n = e.removeEventListener || t.removeEventListenerPolyfill;
                        n && n.call(e, i, s, !1)
                    }

                    function o(s) {
                        var o, r;
                        e.nodeName && (i ? (o = {})[i] = !0 : o = s, t.objectEach(o, function(t, e) {
                            if (s[e])
                                for (r = s[e].length; r--;) n(e, s[e][r])
                        }))
                    }
                    var r, a;
                    ["protoEvents", "hcEvents"].forEach(function(t) {
                        var l = e[t];
                        l && (i ? (r = l[i] || [], s ? (-1 < (a = r.indexOf(s)) && (r.splice(a, 1), l[i] = r), n(i, s)) : (o(l), l[i] = [])) : (o(l), e[t] = {}))
                    })
                }, t.fireEvent = function(e, s, n, o) {
                    var r, a, l, h, c;
                    n = n || {}, i.createEvent && (e.dispatchEvent || e.fireEvent) ? ((r = i.createEvent("Events")).initEvent(s, !0, !0), t.extend(r, n), e.dispatchEvent ? e.dispatchEvent(r) : e.fireEvent(s, r)) : ["protoEvents", "hcEvents"].forEach(function(i) {
                        if (e[i])
                            for (a = e[i][s] || [], l = a.length, n.target || t.extend(n, {
                                    preventDefault: function() {
                                        n.defaultPrevented = !0
                                    },
                                    target: e,
                                    type: s
                                }), h = 0; h < l; h++)(c = a[h]) && !1 === c.call(e, n) && n.preventDefault()
                    }), o && !n.defaultPrevented && o.call(e, n)
                }, t.animate = function(e, i, s) {
                    var n, o, r, a, l = "";
                    t.isObject(s) || (s = {
                        duration: (a = arguments)[2],
                        easing: a[3],
                        complete: a[4]
                    }), t.isNumber(s.duration) || (s.duration = 400), s.easing = "function" == typeof s.easing ? s.easing : Math[s.easing] || Math.easeInOutSine, s.curAnim = t.merge(i), t.objectEach(i, function(a, h) {
                        t.stop(e, h), r = new t.Fx(e, s, h), o = null, "d" === h ? (r.paths = r.initPath(e, e.d, i.d), r.toD = i.d, n = 0, o = 1) : e.attr ? n = e.attr(h) : (n = parseFloat(t.getStyle(e, h)) || 0, "opacity" !== h && (l = "px")), o || (o = a), o && o.match && o.match("px") && (o = o.replace(/px/g, "")), r.run(n, o, l)
                    })
                }, t.seriesType = function(e, i, s, n, o) {
                    var r = t.getOptions(),
                        a = t.seriesTypes;
                    return r.plotOptions[e] = t.merge(r.plotOptions[i], s), a[e] = t.extendClass(a[i] || function() {}, n), a[e].prototype.type = e, o && (a[e].prototype.pointClass = t.extendClass(t.Point, o)), a[e]
                }, t.uniqueKey = function() {
                    var t = Math.random().toString(36).substring(2, 9),
                        e = 0;
                    return function() {
                        return "highcharts-" + t + "-" + e++
                    }
                }(), t.isFunction = function(t) {
                    return "function" == typeof t
                }, s.jQuery && (s.jQuery.fn.highcharts = function() {
                    var i = [].slice.call(arguments);
                    if (this[0]) return i[0] ? (new(t[t.isString(i[0]) ? i.shift() : "Chart"])(this[0], i[0], i[1]), this) : e[t.attr(this[0], "data-highcharts-chart")]
                })
            }), e(i, "parts/Color.js", [i["parts/Globals.js"]], function(t) {
                var e = t.isNumber,
                    i = t.merge,
                    s = t.pInt;
                t.Color = function(e) {
                    if (!(this instanceof t.Color)) return new t.Color(e);
                    this.init(e)
                }, t.Color.prototype = {
                    parsers: [{
                        regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                        parse: function(t) {
                            return [s(t[1]), s(t[2]), s(t[3]), parseFloat(t[4], 10)]
                        }
                    }, {
                        regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                        parse: function(t) {
                            return [s(t[1]), s(t[2]), s(t[3]), 1]
                        }
                    }],
                    names: {
                        white: "#ffffff",
                        black: "#000000"
                    },
                    init: function(e) {
                        var i, s, n, o;
                        if ((this.input = e = this.names[e && e.toLowerCase ? e.toLowerCase() : ""] || e) && e.stops) this.stops = e.stops.map(function(e) {
                            return new t.Color(e[1])
                        });
                        else if (e && e.charAt && "#" === e.charAt() && (i = e.length, e = parseInt(e.substr(1), 16), 7 === i ? s = [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, 1] : 4 === i && (s = [(3840 & e) >> 4 | (3840 & e) >> 8, (240 & e) >> 4 | 240 & e, (15 & e) << 4 | 15 & e, 1])), !s)
                            for (n = this.parsers.length; n-- && !s;)(i = (o = this.parsers[n]).regex.exec(e)) && (s = o.parse(i));
                        this.rgba = s || []
                    },
                    get: function(t) {
                        var s, n = this.input,
                            o = this.rgba;
                        return this.stops ? ((s = i(n)).stops = [].concat(s.stops), this.stops.forEach(function(e, i) {
                            s.stops[i] = [s.stops[i][0], e.get(t)]
                        })) : s = o && e(o[0]) ? "rgb" === t || !t && 1 === o[3] ? "rgb(" + o[0] + "," + o[1] + "," + o[2] + ")" : "a" === t ? o[3] : "rgba(" + o.join(",") + ")" : n, s
                    },
                    brighten: function(t) {
                        var i, n = this.rgba;
                        if (this.stops) this.stops.forEach(function(e) {
                            e.brighten(t)
                        });
                        else if (e(t) && 0 !== t)
                            for (i = 0; 3 > i; i++) n[i] += s(255 * t), 0 > n[i] && (n[i] = 0), 255 < n[i] && (n[i] = 255);
                        return this
                    },
                    setOpacity: function(t) {
                        return this.rgba[3] = t, this
                    },
                    tweenTo: function(t, e) {
                        var i = this.rgba,
                            s = t.rgba;
                        return s.length && i && i.length ? e = ((t = 1 !== s[3] || 1 !== i[3]) ? "rgba(" : "rgb(") + Math.round(s[0] + (i[0] - s[0]) * (1 - e)) + "," + Math.round(s[1] + (i[1] - s[1]) * (1 - e)) + "," + Math.round(s[2] + (i[2] - s[2]) * (1 - e)) + (t ? "," + (s[3] + (i[3] - s[3]) * (1 - e)) : "") + ")" : e = t.input || "none", e
                    }
                }, t.color = function(e) {
                    return new t.Color(e)
                }
            }), e(i, "parts/SvgRenderer.js", [i["parts/Globals.js"]], function(t) {
                var e, i, s = t.addEvent,
                    n = t.animate,
                    o = t.attr,
                    r = t.charts,
                    a = t.color,
                    l = t.css,
                    h = t.createElement,
                    c = t.defined,
                    d = t.deg2rad,
                    p = t.destroyObjectProperties,
                    u = t.doc,
                    f = t.extend,
                    g = t.erase,
                    m = t.hasTouch,
                    v = t.isArray,
                    x = t.isFirefox,
                    y = t.isMS,
                    b = t.isObject,
                    k = t.isString,
                    w = t.isWebKit,
                    M = t.merge,
                    S = t.noop,
                    C = t.objectEach,
                    T = t.pick,
                    A = t.pInt,
                    L = t.removeEvent,
                    P = t.splat,
                    E = t.stop,
                    _ = t.svg,
                    O = t.SVG_NS,
                    D = t.symbolSizes,
                    I = t.win;
                e = t.SVGElement = function() {
                    return this
                }, f(e.prototype, {
                    opacity: 1,
                    SVG_NS: O,
                    textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "),
                    init: function(e, i) {
                        this.element = "span" === i ? h(i) : u.createElementNS(this.SVG_NS, i), this.renderer = e, t.fireEvent(this, "afterInit")
                    },
                    animate: function(e, i, s) {
                        var o = t.animObject(T(i, this.renderer.globalAnimation, !0));
                        return T(u.hidden, u.msHidden, u.webkitHidden, !1) && (o.duration = 0), 0 !== o.duration ? (s && (o.complete = s), n(this, e, o)) : (this.attr(e, null, s), t.objectEach(e, function(t, e) {
                            o.step && o.step.call(this, t, {
                                prop: e,
                                pos: 1
                            })
                        }, this)), this
                    },
                    complexColor: function(e, i, s) {
                        var n, o, r, a, l, h, d, p, u, f, g, m, x = this.renderer,
                            y = [];
                        t.fireEvent(this.renderer, "complexColor", {
                            args: arguments
                        }, function() {
                            e.radialGradient ? o = "radialGradient" : e.linearGradient && (o = "linearGradient"), o && (r = e[o], l = x.gradients, d = e.stops, f = s.radialReference, v(r) && (e[o] = r = {
                                x1: r[0],
                                y1: r[1],
                                x2: r[2],
                                y2: r[3],
                                gradientUnits: "userSpaceOnUse"
                            }), "radialGradient" === o && f && !c(r.gradientUnits) && (a = r, r = M(r, x.getRadialAttr(f, a), {
                                gradientUnits: "userSpaceOnUse"
                            })), C(r, function(t, e) {
                                "id" !== e && y.push(e, t)
                            }), C(d, function(t) {
                                y.push(t)
                            }), y = y.join(","), l[y] ? g = l[y].attr("id") : (r.id = g = t.uniqueKey(), l[y] = h = x.createElement(o).attr(r).add(x.defs), h.radAttr = a, h.stops = [], d.forEach(function(e) {
                                0 === e[1].indexOf("rgba") ? (n = t.color(e[1]), p = n.get("rgb"), u = n.get("a")) : (p = e[1], u = 1), e = x.createElement("stop").attr({
                                    offset: e[0],
                                    "stop-color": p,
                                    "stop-opacity": u
                                }).add(h), h.stops.push(e)
                            })), m = "url(" + x.url + "#" + g + ")", s.setAttribute(i, m), s.gradient = y, e.toString = function() {
                                return m
                            })
                        })
                    },
                    applyTextOutline: function(e) {
                        var i, s, n, r = this.element; - 1 !== e.indexOf("contrast") && (e = e.replace(/contrast/g, this.renderer.getContrast(r.style.fill))), e = e.split(" "), i = e[e.length - 1], (s = e[0]) && "none" !== s && t.svg && (this.fakeTS = !0, e = [].slice.call(r.getElementsByTagName("tspan")), this.ySetter = this.xSetter, s = s.replace(/(^[\d\.]+)(.*?)$/g, function(t, e, i) {
                            return 2 * e + i
                        }), this.removeTextOutline(e), n = r.firstChild, e.forEach(function(t, e) {
                            0 === e && (t.setAttribute("x", r.getAttribute("x")), e = r.getAttribute("y"), t.setAttribute("y", e || 0), null === e && r.setAttribute("y", 0)), t = t.cloneNode(1), o(t, {
                                class: "highcharts-text-outline",
                                fill: i,
                                stroke: i,
                                "stroke-width": s,
                                "stroke-linejoin": "round"
                            }), r.insertBefore(t, n)
                        }))
                    },
                    removeTextOutline: function(t) {
                        for (var e, i = t.length; i--;) "highcharts-text-outline" === (e = t[i]).getAttribute("class") && g(t, this.element.removeChild(e))
                    },
                    symbolCustomAttribs: "x y width height r start end innerR anchorX anchorY rounded".split(" "),
                    attr: function(e, i, s, n) {
                        var o, r, a, l, h = this.element,
                            c = this,
                            d = this.symbolCustomAttribs;
                        return "string" == typeof e && void 0 !== i && (o = e, (e = {})[o] = i), "string" == typeof e ? c = (this[e + "Getter"] || this._defaultGetter).call(this, e, h) : (C(e, function(i, s) {
                            a = !1, n || E(this, s), this.symbolName && -1 !== t.inArray(s, d) && (r || (this.symbolAttr(e), r = !0), a = !0), !this.rotation || "x" !== s && "y" !== s || (this.doTransform = !0), a || ((l = this[s + "Setter"] || this._defaultSetter).call(this, i, s, h), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(s) && this.updateShadows(s, i, l))
                        }, this), this.afterSetters()), s && s.call(this), c
                    },
                    afterSetters: function() {
                        this.doTransform && (this.updateTransform(), this.doTransform = !1)
                    },
                    updateShadows: function(t, e, i) {
                        for (var s = this.shadows, n = s.length; n--;) i.call(s[n], "height" === t ? Math.max(e - (s[n].cutHeight || 0), 0) : "d" === t ? this.d : e, t, s[n])
                    },
                    addClass: function(t, e) {
                        var i = this.attr("class") || "";
                        return e || (t = (t || "").split(/ /g).reduce(function(t, e) {
                            return -1 === i.indexOf(e) && t.push(e), t
                        }, i ? [i] : []).join(" ")), t !== i && this.attr("class", t), this
                    },
                    hasClass: function(t) {
                        return -1 !== (this.attr("class") || "").split(" ").indexOf(t)
                    },
                    removeClass: function(t) {
                        return this.attr("class", (this.attr("class") || "").replace(t, ""))
                    },
                    symbolAttr: function(t) {
                        var e = this;
                        "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(i) {
                            e[i] = T(t[i], e[i])
                        }), e.attr({
                            d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)
                        })
                    },
                    clip: function(t) {
                        return this.attr("clip-path", t ? "url(" + this.renderer.url + "#" + t.id + ")" : "none")
                    },
                    crisp: function(t, e) {
                        var i;
                        return e = e || t.strokeWidth || 0, i = Math.round(e) % 2 / 2, t.x = Math.floor(t.x || this.x || 0) + i, t.y = Math.floor(t.y || this.y || 0) + i, t.width = Math.floor((t.width || this.width || 0) - 2 * i), t.height = Math.floor((t.height || this.height || 0) - 2 * i), c(t.strokeWidth) && (t.strokeWidth = e), t
                    },
                    css: function(t) {
                        var e, i, s = this.styles,
                            n = {},
                            r = this.element,
                            a = "",
                            h = !s,
                            c = ["textOutline", "textOverflow", "width"];
                        return t && t.color && (t.fill = t.color), s && C(t, function(t, e) {
                            t !== s[e] && (n[e] = t, h = !0)
                        }), h && (s && (t = f(s, n)), t && (null === t.width || "auto" === t.width ? delete this.textWidth : "text" === r.nodeName.toLowerCase() && t.width && (e = this.textWidth = A(t.width))), this.styles = t, e && !_ && this.renderer.forExport && delete t.width, r.namespaceURI === this.SVG_NS ? (i = function(t, e) {
                            return "-" + e.toLowerCase()
                        }, C(t, function(t, e) {
                            -1 === c.indexOf(e) && (a += e.replace(/([A-Z])/g, i) + ":" + t + ";")
                        }), a && o(r, "style", a)) : l(r, t), this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), t && t.textOutline && this.applyTextOutline(t.textOutline))), this
                    },
                    getStyle: function(t) {
                        return I.getComputedStyle(this.element || this, "").getPropertyValue(t)
                    },
                    strokeWidth: function() {
                        if (!this.renderer.styledMode) return this["stroke-width"] || 0;
                        var t, e = this.getStyle("stroke-width");
                        return e.indexOf("px") === e.length - 2 ? e = A(e) : (t = u.createElementNS(O, "rect"), o(t, {
                            width: e,
                            "stroke-width": 0
                        }), this.element.parentNode.appendChild(t), e = t.getBBox().width, t.parentNode.removeChild(t)), e
                    },
                    on: function(t, e) {
                        var i = this,
                            s = i.element;
                        return m && "click" === t ? (s.ontouchstart = function(t) {
                            i.touchEventFired = Date.now(), t.preventDefault(), e.call(s, t)
                        }, s.onclick = function(t) {
                            (-1 === I.navigator.userAgent.indexOf("Android") || 1100 < Date.now() - (i.touchEventFired || 0)) && e.call(s, t)
                        }) : s["on" + t] = e, this
                    },
                    setRadialReference: function(t) {
                        var e = this.renderer.gradients[this.element.gradient];
                        return this.element.radialReference = t, e && e.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)), this
                    },
                    translate: function(t, e) {
                        return this.attr({
                            translateX: t,
                            translateY: e
                        })
                    },
                    invert: function(t) {
                        return this.inverted = t, this.updateTransform(), this
                    },
                    updateTransform: function() {
                        var t = this.translateX || 0,
                            e = this.translateY || 0,
                            i = this.scaleX,
                            s = this.scaleY,
                            n = this.inverted,
                            o = this.rotation,
                            r = this.matrix,
                            a = this.element;
                        n && (t += this.width, e += this.height), t = ["translate(" + t + "," + e + ")"], c(r) && t.push("matrix(" + r.join(",") + ")"), n ? t.push("rotate(90) scale(-1,1)") : o && t.push("rotate(" + o + " " + T(this.rotationOriginX, a.getAttribute("x"), 0) + " " + T(this.rotationOriginY, a.getAttribute("y") || 0) + ")"), (c(i) || c(s)) && t.push("scale(" + T(i, 1) + " " + T(s, 1) + ")"), t.length && a.setAttribute("transform", t.join(" "))
                    },
                    toFront: function() {
                        var t = this.element;
                        return t.parentNode.appendChild(t), this
                    },
                    align: function(t, e, i) {
                        var s, n, o, r, a, l, h = {};
                        return o = (n = this.renderer).alignedObjects, t ? (this.alignOptions = t, this.alignByTranslate = e, (!i || k(i)) && (this.alignTo = s = i || "renderer", g(o, this), o.push(this), i = null)) : (t = this.alignOptions, e = this.alignByTranslate, s = this.alignTo), i = T(i, n[s], n), s = t.align, n = t.verticalAlign, o = (i.x || 0) + (t.x || 0), r = (i.y || 0) + (t.y || 0), "right" === s ? a = 1 : "center" === s && (a = 2), a && (o += (i.width - (t.width || 0)) / a), h[e ? "translateX" : "x"] = Math.round(o), "bottom" === n ? l = 1 : "middle" === n && (l = 2), l && (r += (i.height - (t.height || 0)) / l), h[e ? "translateY" : "y"] = Math.round(r), this[this.placed ? "animate" : "attr"](h), this.placed = !0, this.alignAttr = h, this
                    },
                    getBBox: function(t, i) {
                        var s, n, o, r, a, l = this.renderer,
                            h = this.element,
                            p = this.styles,
                            u = this.textStr,
                            g = l.cache,
                            m = l.cacheKeys,
                            v = h.namespaceURI === this.SVG_NS;
                        if (n = (i = T(i, this.rotation)) * d, o = l.styledMode ? h && e.prototype.getStyle.call(h, "font-size") : p && p.fontSize, c(u) && (-1 === (a = u.toString()).indexOf("<") && (a = a.replace(/[0-9]/g, "0")), a += ["", i || 0, o, this.textWidth, p && p.textOverflow].join()), a && !t && (s = g[a]), !s) {
                            if (v || l.forExport) {
                                try {
                                    (r = this.fakeTS && function(t) {
                                        [].forEach.call(h.querySelectorAll(".highcharts-text-outline"), function(e) {
                                            e.style.display = t
                                        })
                                    }) && r("none"), s = h.getBBox ? f({}, h.getBBox()) : {
                                        width: h.offsetWidth,
                                        height: h.offsetHeight
                                    }, r && r("")
                                } catch (t) {}(!s || 0 > s.width) && (s = {
                                    width: 0,
                                    height: 0
                                })
                            } else s = this.htmlGetBBox();
                            if (l.isSVG && (t = s.width, l = s.height, v && (s.height = l = {
                                    "11px,17": 14,
                                    "13px,20": 16
                                }[p && p.fontSize + "," + Math.round(l)] || l), i && (s.width = Math.abs(l * Math.sin(n)) + Math.abs(t * Math.cos(n)), s.height = Math.abs(l * Math.cos(n)) + Math.abs(t * Math.sin(n)))), a && 0 < s.height) {
                                for (; 250 < m.length;) delete g[m.shift()];
                                g[a] || m.push(a), g[a] = s
                            }
                        }
                        return s
                    },
                    show: function(t) {
                        return this.attr({
                            visibility: t ? "inherit" : "visible"
                        })
                    },
                    hide: function() {
                        return this.attr({
                            visibility: "hidden"
                        })
                    },
                    fadeOut: function(t) {
                        var e = this;
                        e.animate({
                            opacity: 0
                        }, {
                            duration: t || 150,
                            complete: function() {
                                e.attr({
                                    y: -9999
                                })
                            }
                        })
                    },
                    add: function(t) {
                        var e, i = this.renderer,
                            s = this.element;
                        return t && (this.parentGroup = t), this.parentInverted = t && t.inverted, void 0 !== this.textStr && i.buildText(this), this.added = !0, (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()), e || (t ? t.element : i.box).appendChild(s), this.onAdd && this.onAdd(), this
                    },
                    safeRemoveChild: function(t) {
                        var e = t.parentNode;
                        e && e.removeChild(t)
                    },
                    destroy: function() {
                        var t = this,
                            e = t.element || {},
                            i = t.renderer,
                            s = i.isSVG && "SPAN" === e.nodeName && t.parentGroup,
                            n = e.ownerSVGElement,
                            o = t.clipPath;
                        if (e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null, E(t), o && n && ([].forEach.call(n.querySelectorAll("[clip-path],[CLIP-PATH]"), function(t) {
                                -1 < t.getAttribute("clip-path").indexOf(o.element.id) && t.removeAttribute("clip-path")
                            }), t.clipPath = o.destroy()), t.stops) {
                            for (n = 0; n < t.stops.length; n++) t.stops[n] = t.stops[n].destroy();
                            t.stops = null
                        }
                        for (t.safeRemoveChild(e), i.styledMode || t.destroyShadows(); s && s.div && 0 === s.div.childNodes.length;) e = s.parentGroup, t.safeRemoveChild(s.div), delete s.div, s = e;
                        return t.alignTo && g(i.alignedObjects, t), C(t, function(e, i) {
                            delete t[i]
                        }), null
                    },
                    shadow: function(t, e, i) {
                        var s, n, r, a, l, h, c = [],
                            d = this.element;
                        if (t) {
                            if (!this.shadows) {
                                for (a = T(t.width, 3), l = (t.opacity || .15) / a, h = this.parentInverted ? "(-1,-1)" : "(" + T(t.offsetX, 1) + ", " + T(t.offsetY, 1) + ")", s = 1; s <= a; s++) n = d.cloneNode(0), r = 2 * a + 1 - 2 * s, o(n, {
                                    stroke: t.color || "#000000",
                                    "stroke-opacity": l * s,
                                    "stroke-width": r,
                                    transform: "translate" + h,
                                    fill: "none"
                                }), n.setAttribute("class", (n.getAttribute("class") || "") + " highcharts-shadow"), i && (o(n, "height", Math.max(o(n, "height") - r, 0)), n.cutHeight = r), e ? e.element.appendChild(n) : d.parentNode && d.parentNode.insertBefore(n, d), c.push(n);
                                this.shadows = c
                            }
                        } else this.destroyShadows();
                        return this
                    },
                    destroyShadows: function() {
                        (this.shadows || []).forEach(function(t) {
                            this.safeRemoveChild(t)
                        }, this), this.shadows = void 0
                    },
                    xGetter: function(t) {
                        return "circle" === this.element.nodeName && ("x" === t ? t = "cx" : "y" === t && (t = "cy")), this._defaultGetter(t)
                    },
                    _defaultGetter: function(t) {
                        return t = T(this[t + "Value"], this[t], this.element ? this.element.getAttribute(t) : null, 0), /^[\-0-9\.]+$/.test(t) && (t = parseFloat(t)), t
                    },
                    dSetter: function(t, e, i) {
                        t && t.join && (t = t.join(" ")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), this[e] !== t && (i.setAttribute(e, t), this[e] = t)
                    },
                    dashstyleSetter: function(t) {
                        var e, i = this["stroke-width"];
                        if ("inherit" === i && (i = 1), t = t && t.toLowerCase()) {
                            for (e = (t = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",")).length; e--;) t[e] = A(t[e]) * i;
                            t = t.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t)
                        }
                    },
                    alignSetter: function(t) {
                        var e = {
                            left: "start",
                            center: "middle",
                            right: "end"
                        };
                        e[t] && (this.alignValue = t, this.element.setAttribute("text-anchor", e[t]))
                    },
                    opacitySetter: function(t, e, i) {
                        this[e] = t, i.setAttribute(e, t)
                    },
                    titleSetter: function(t) {
                        var e = this.element.getElementsByTagName("title")[0];
                        e || (e = u.createElementNS(this.SVG_NS, "title"), this.element.appendChild(e)), e.firstChild && e.removeChild(e.firstChild), e.appendChild(u.createTextNode(String(T(t), "").replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">")))
                    },
                    textSetter: function(t) {
                        t !== this.textStr && (delete this.bBox, this.textStr = t, this.added && this.renderer.buildText(this))
                    },
                    setTextPath: function(e, i) {
                        var s, n, o = this.element,
                            r = {
                                textAnchor: "text-anchor"
                            },
                            a = !1,
                            l = this.textPathWrapper,
                            h = !l;
                        if (s = (i = M(!0, {
                                enabled: !0,
                                attributes: {
                                    dy: -5,
                                    startOffset: "50%",
                                    textAnchor: "middle"
                                }
                            }, i)).attributes, e && i && i.enabled) {
                            if (this.options && this.options.padding && (s.dx = -this.options.padding), l || (this.textPathWrapper = l = this.renderer.createElement("textPath"), a = !0), n = l.element, (i = e.element.getAttribute("id")) || e.element.setAttribute("id", i = t.uniqueKey()), h)
                                for (e = o.getElementsByTagName("tspan"); e.length;) e[0].setAttribute("y", 0), n.appendChild(e[0]);
                            a && l.add({
                                element: this.text ? this.text.element : o
                            }), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.renderer.url + "#" + i), c(s.dy) && (n.parentNode.setAttribute("dy", s.dy), delete s.dy), c(s.dx) && (n.parentNode.setAttribute("dx", s.dx), delete s.dx), t.objectEach(s, function(t, e) {
                                n.setAttribute(r[e] || e, t)
                            }), o.removeAttribute("transform"), this.removeTextOutline.call(l, [].slice.call(o.getElementsByTagName("tspan"))), this.applyTextOutline = this.updateTransform = S
                        } else l && (delete this.updateTransform, delete this.applyTextOutline, this.destroyTextPath(o, e));
                        return this
                    },
                    destroyTextPath: function(t, e) {
                        var i;
                        for (e.element.setAttribute("id", ""), i = this.textPathWrapper.element.childNodes; i.length;) t.firstChild.appendChild(i[0]);
                        t.firstChild.removeChild(this.textPathWrapper.element), delete e.textPathWrapper
                    },
                    fillSetter: function(t, e, i) {
                        "string" == typeof t ? i.setAttribute(e, t) : t && this.complexColor(t, e, i)
                    },
                    visibilitySetter: function(t, e, i) {
                        "inherit" === t ? i.removeAttribute(e) : this[e] !== t && i.setAttribute(e, t), this[e] = t
                    },
                    zIndexSetter: function(t, e) {
                        var i, s, n, o, r = this.renderer,
                            a = this.parentGroup,
                            l = (a || r).element || r.box,
                            h = this.element;
                        r = l === r.box;
                        if (i = this.added, c(t) ? (h.setAttribute("data-z-index", t), t = +t, this[e] === t && (i = !1)) : c(this[e]) && h.removeAttribute("data-z-index"), this[e] = t, i) {
                            for ((t = this.zIndex) && a && (a.handleZ = !0), o = (e = l.childNodes).length - 1; 0 <= o && !s; o--) i = (a = e[o]).getAttribute("data-z-index"), n = !c(i), a !== h && (0 > t && n && !r && !o ? (l.insertBefore(h, e[o]), s = !0) : (A(i) <= t || n && (!c(t) || 0 <= t)) && (l.insertBefore(h, e[o + 1] || null), s = !0));
                            s || (l.insertBefore(h, e[r ? 3 : 0] || null), s = !0)
                        }
                        return s
                    },
                    _defaultSetter: function(t, e, i) {
                        i.setAttribute(e, t)
                    }
                }), e.prototype.yGetter = e.prototype.xGetter, e.prototype.translateXSetter = e.prototype.translateYSetter = e.prototype.rotationSetter = e.prototype.verticalAlignSetter = e.prototype.rotationOriginXSetter = e.prototype.rotationOriginYSetter = e.prototype.scaleXSetter = e.prototype.scaleYSetter = e.prototype.matrixSetter = function(t, e) {
                    this[e] = t, this.doTransform = !0
                }, e.prototype["stroke-widthSetter"] = e.prototype.strokeSetter = function(t, i, s) {
                    this[i] = t, this.stroke && this["stroke-width"] ? (e.prototype.fillSetter.call(this, this.stroke, "stroke", s), s.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === i && 0 === t && this.hasStroke && (s.removeAttribute("stroke"), this.hasStroke = !1)
                }, i = t.SVGRenderer = function() {
                    this.init.apply(this, arguments)
                }, f(i.prototype, {
                    Element: e,
                    SVG_NS: O,
                    init: function(t, e, i, n, r, a, h) {
                        var c, d;
                        c = this.createElement("svg").attr({
                            version: "1.1",
                            class: "highcharts-root"
                        }), h || c.css(this.getStyle(n)), n = c.element, t.appendChild(n), o(t, "dir", "ltr"), -1 === t.innerHTML.indexOf("xmlns") && o(n, "xmlns", this.SVG_NS), this.isSVG = !0, this.box = n, this.boxWrapper = c, this.alignedObjects = [], this.url = (x || w) && u.getElementsByTagName("base").length ? I.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "", this.createElement("desc").add().element.appendChild(u.createTextNode("Created with Highcharts 7.1.1")), this.defs = this.createElement("defs").add(), this.allowHTML = a, this.forExport = r, this.styledMode = h, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.setSize(e, i, !1), x && t.getBoundingClientRect && ((e = function() {
                            l(t, {
                                left: 0,
                                top: 0
                            }), d = t.getBoundingClientRect(), l(t, {
                                left: Math.ceil(d.left) - d.left + "px",
                                top: Math.ceil(d.top) - d.top + "px"
                            })
                        })(), this.unSubPixelFix = s(I, "resize", e))
                    },
                    definition: function(t) {
                        var e = this;
                        return function t(i, s) {
                            var n;
                            return P(i).forEach(function(i) {
                                var o = e.createElement(i.tagName),
                                    r = {};
                                C(i, function(t, e) {
                                    "tagName" !== e && "children" !== e && "textContent" !== e && (r[e] = t)
                                }), o.attr(r), o.add(s || e.defs), i.textContent && o.element.appendChild(u.createTextNode(i.textContent)), t(i.children || [], o), n = o
                            }), n
                        }(t)
                    },
                    getStyle: function(t) {
                        return this.style = f({
                            fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                            fontSize: "12px"
                        }, t)
                    },
                    setStyle: function(t) {
                        this.boxWrapper.css(this.getStyle(t))
                    },
                    isHidden: function() {
                        return !this.boxWrapper.getBBox().width
                    },
                    destroy: function() {
                        var t = this.defs;
                        return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), p(this.gradients || {}), this.gradients = null, t && (this.defs = t.destroy()), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null
                    },
                    createElement: function(t) {
                        var e = new this.Element;
                        return e.init(this, t), e
                    },
                    draw: S,
                    getRadialAttr: function(t, e) {
                        return {
                            cx: t[0] - t[2] / 2 + e.cx * t[2],
                            cy: t[1] - t[2] / 2 + e.cy * t[2],
                            r: e.r * t[2]
                        }
                    },
                    truncate: function(t, e, i, s, n, o, r) {
                        var a, l, h, c = this,
                            d = t.rotation,
                            p = s ? 1 : 0,
                            f = (i || s).length,
                            g = f,
                            m = [],
                            v = function(t) {
                                e.firstChild && e.removeChild(e.firstChild), t && e.appendChild(u.createTextNode(t))
                            },
                            x = function(o, a) {
                                if (void 0 === m[a = a || o])
                                    if (e.getSubStringLength) try {
                                        m[a] = n + e.getSubStringLength(0, s ? a + 1 : a)
                                    } catch (t) {} else c.getSpanWidth && (v(r(i || s, o)), m[a] = n + c.getSpanWidth(t, e));
                                return m[a]
                            };
                        if (t.rotation = 0, l = x(e.textContent.length), h = n + l > o) {
                            for (; p <= f;) g = Math.ceil((p + f) / 2), s && (a = r(s, g)), l = x(g, a && a.length - 1), p === f ? p = f + 1 : l > o ? f = g - 1 : p = g;
                            0 === f ? v("") : i && f === i.length - 1 || v(a || r(i || s, g))
                        }
                        return s && s.splice(0, g), t.actualWidth = l, t.rotation = d, h
                    },
                    escapes: {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        "'": "&#39;",
                        '"': "&quot;"
                    },
                    buildText: function(t) {
                        var e, i, s, n = t.element,
                            r = this,
                            a = r.forExport,
                            h = T(t.textStr, "").toString(),
                            c = -1 !== h.indexOf("<"),
                            d = n.childNodes,
                            p = o(n, "x"),
                            f = t.styles,
                            g = t.textWidth,
                            m = f && f.lineHeight,
                            v = f && f.textOutline,
                            x = f && "ellipsis" === f.textOverflow,
                            y = f && "nowrap" === f.whiteSpace,
                            b = f && f.fontSize,
                            k = d.length,
                            w = (f = g && !t.added && this.box, function(t) {
                                var e;
                                return r.styledMode || (e = /(px|em)$/.test(t && t.style.fontSize) ? t.style.fontSize : b || r.style.fontSize || 12), m ? A(m) : r.fontMetrics(e, t.getAttribute("style") ? t : n).h
                            }),
                            M = function(t, e) {
                                return C(r.escapes, function(i, s) {
                                    e && -1 !== e.indexOf(i) || (t = t.toString().replace(new RegExp(i, "g"), s))
                                }), t
                            },
                            S = function(t, e) {
                                var i;
                                if (i = t.indexOf("<"), -1 !== (i = (t = t.substring(i, t.indexOf(">") - i)).indexOf(e + "=")) && (i = i + e.length + 1, '"' === (e = t.charAt(i)) || "'" === e)) return (t = t.substring(i + 1)).substring(0, t.indexOf(e))
                            };
                        if ((i = [h, x, y, m, v, b, g].join()) !== t.textCache) {
                            for (t.textCache = i; k--;) n.removeChild(d[k]);
                            c || v || x || g || -1 !== h.indexOf(" ") ? (f && f.appendChild(n), c ? h = (h = r.styledMode ? h.replace(/<(b|strong)>/g, '<span class="highcharts-strong">').replace(/<(i|em)>/g, '<span class="highcharts-emphasized">') : h.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">')).replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : h = [h], (h = h.filter(function(t) {
                                return "" !== t
                            })).forEach(function(i, h) {
                                var c, d = 0,
                                    f = 0;
                                i = i.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||"), (c = i.split("|||")).forEach(function(i) {
                                    if ("" !== i || 1 === c.length) {
                                        var m, v, k = {},
                                            C = u.createElementNS(r.SVG_NS, "tspan");
                                        if ((m = S(i, "class")) && o(C, "class", m), (m = S(i, "style")) && (m = m.replace(/(;| |^)color([ :])/, "$1fill$2"), o(C, "style", m)), (v = S(i, "href")) && !a && (o(C, "onclick", 'location.href="' + v + '"'), o(C, "class", "highcharts-anchor"), r.styledMode || l(C, {
                                                cursor: "pointer"
                                            })), " " !== (i = M(i.replace(/<[a-zA-Z\/](.|\n)*?>/g, "") || " "))) {
                                            if (C.appendChild(u.createTextNode(i)), d ? k.dx = 0 : h && null !== p && (k.x = p), o(C, k), n.appendChild(C), !d && s && (!_ && a && l(C, {
                                                    display: "block"
                                                }), o(C, "dy", w(C))), g) {
                                                var T = i.replace(/([^\^])-/g, "$1- ").split(" ");
                                                k = !y && (1 < c.length || h || 1 < T.length);
                                                v = 0;
                                                var A = w(C);
                                                if (x) e = r.truncate(t, C, i, void 0, 0, Math.max(0, g - parseInt(b || 12, 10)), function(t, e) {
                                                    return t.substring(0, e) + "…"
                                                });
                                                else if (k)
                                                    for (; T.length;) T.length && !y && 0 < v && (C = u.createElementNS(O, "tspan"), o(C, {
                                                        dy: A,
                                                        x: p
                                                    }), m && o(C, "style", m), C.appendChild(u.createTextNode(T.join(" ").replace(/- /g, "-"))), n.appendChild(C)), r.truncate(t, C, null, T, 0 === v ? f : 0, g, function(t, e) {
                                                        return T.slice(0, e).join(" ").replace(/- /g, "-")
                                                    }), f = t.actualWidth, v++
                                            }
                                            d++
                                        }
                                    }
                                }), s = s || n.childNodes.length
                            }), x && e && t.attr("title", M(t.textStr, ["&lt;", "&gt;"])), f && f.removeChild(n), v && t.applyTextOutline && t.applyTextOutline(v)) : n.appendChild(u.createTextNode(M(h)))
                        }
                    },
                    getContrast: function(t) {
                        return (t = a(t).rgba)[0] *= 1, t[1] *= 1.2, t[2] *= .5, 459 < t[0] + t[1] + t[2] ? "#000000" : "#FFFFFF"
                    },
                    button: function(t, e, i, n, o, r, a, l, h, c) {
                        var d, p, u, g, m = this.label(t, e, i, h, null, null, c, null, "button"),
                            v = 0,
                            x = this.styledMode;
                        (m.attr(M({
                            padding: 8,
                            r: 2
                        }, o)), x) || (o = M({
                            fill: "#f7f7f7",
                            stroke: "#cccccc",
                            "stroke-width": 1,
                            style: {
                                color: "#333333",
                                cursor: "pointer",
                                fontWeight: "normal"
                            }
                        }, o), d = o.style, delete o.style, r = M(o, {
                            fill: "#e6e6e6"
                        }, r), p = r.style, delete r.style, a = M(o, {
                            fill: "#e6ebf5",
                            style: {
                                color: "#000000",
                                fontWeight: "bold"
                            }
                        }, a), u = a.style, delete a.style, l = M(o, {
                            style: {
                                color: "#cccccc"
                            }
                        }, l), g = l.style, delete l.style);
                        return s(m.element, y ? "mouseover" : "mouseenter", function() {
                            3 !== v && m.setState(1)
                        }), s(m.element, y ? "mouseout" : "mouseleave", function() {
                            3 !== v && m.setState(v)
                        }), m.setState = function(t) {
                            1 !== t && (m.state = v = t), m.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][t || 0]), x || m.attr([o, r, a, l][t || 0]).css([d, p, u, g][t || 0])
                        }, x || m.attr(o).css(f({
                            cursor: "default"
                        }, d)), m.on("click", function(t) {
                            3 !== v && n.call(m, t)
                        })
                    },
                    crispLine: function(t, e) {
                        return t[1] === t[4] && (t[1] = t[4] = Math.round(t[1]) - e % 2 / 2), t[2] === t[5] && (t[2] = t[5] = Math.round(t[2]) + e % 2 / 2), t
                    },
                    path: function(t) {
                        var e = this.styledMode ? {} : {
                            fill: "none"
                        };
                        return v(t) ? e.d = t : b(t) && f(e, t), this.createElement("path").attr(e)
                    },
                    circle: function(t, e, i) {
                        return t = b(t) ? t : void 0 === t ? {} : {
                            x: t,
                            y: e,
                            r: i
                        }, (e = this.createElement("circle")).xSetter = e.ySetter = function(t, e, i) {
                            i.setAttribute("c" + e, t)
                        }, e.attr(t)
                    },
                    arc: function(t, e, i, s, n, o) {
                        return b(t) ? (e = (s = t).y, i = s.r, t = s.x) : s = {
                            innerR: s,
                            start: n,
                            end: o
                        }, (t = this.symbol("arc", t, e, i, i, s)).r = i, t
                    },
                    rect: function(t, e, i, s, n, r) {
                        n = b(t) ? t.r : n;
                        var a = this.createElement("rect");
                        return t = b(t) ? t : void 0 === t ? {} : {
                            x: t,
                            y: e,
                            width: Math.max(i, 0),
                            height: Math.max(s, 0)
                        }, this.styledMode || (void 0 !== r && (t.strokeWidth = r, t = a.crisp(t)), t.fill = "none"), n && (t.r = n), a.rSetter = function(t, e, i) {
                            a.r = t, o(i, {
                                rx: t,
                                ry: t
                            })
                        }, a.rGetter = function() {
                            return a.r
                        }, a.attr(t)
                    },
                    setSize: function(t, e, i) {
                        var s = this.alignedObjects,
                            n = s.length;
                        for (this.width = t, this.height = e, this.boxWrapper.animate({
                                width: t,
                                height: e
                            }, {
                                step: function() {
                                    this.attr({
                                        viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
                                    })
                                },
                                duration: T(i, !0) ? void 0 : 0
                            }); n--;) s[n].align()
                    },
                    g: function(t) {
                        var e = this.createElement("g");
                        return t ? e.attr({
                            class: "highcharts-" + t
                        }) : e
                    },
                    image: function(t, e, i, n, o, r) {
                        var a, l = {
                                preserveAspectRatio: "none"
                            },
                            h = function(t, e) {
                                t.setAttributeNS ? t.setAttributeNS("http://www.w3.org/1999/xlink", "href", e) : t.setAttribute("hc-svg-href", e)
                            },
                            c = function(e) {
                                h(a.element, t), r.call(a, e)
                            };
                        return 1 < arguments.length && f(l, {
                            x: e,
                            y: i,
                            width: n,
                            height: o
                        }), a = this.createElement("image").attr(l), r ? (h(a.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), l = new I.Image, s(l, "load", c), l.src = t, l.complete && c({})) : h(a.element, t), a
                    },
                    symbol: function(t, e, i, s, n, o) {
                        var a, d, p, g = this,
                            m = /^url\((.*?)\)$/,
                            v = m.test(t),
                            x = !v && (this.symbols[t] ? t : "circle"),
                            y = x && this.symbols[x],
                            b = c(e) && y && y.call(this.symbols, Math.round(e), Math.round(i), s, n, o);
                        return y ? (a = this.path(b), g.styledMode || a.attr("fill", "none"), f(a, {
                            symbolName: x,
                            x: e,
                            y: i,
                            width: s,
                            height: n
                        }), o && f(a, o)) : v && (d = t.match(m)[1], (a = this.image(d)).imgwidth = T(D[d] && D[d].width, o && o.width), a.imgheight = T(D[d] && D[d].height, o && o.height), p = function() {
                            a.attr({
                                width: a.width,
                                height: a.height
                            })
                        }, ["width", "height"].forEach(function(t) {
                            a[t + "Setter"] = function(t, e) {
                                var i = {},
                                    s = this["img" + e],
                                    n = "width" === e ? "translateX" : "translateY";
                                this[e] = t, c(s) && (o && "within" === o.backgroundSize && this.width && this.height && (s = Math.round(s * Math.min(this.width / this.imgwidth, this.height / this.imgheight))), this.element && this.element.setAttribute(e, s), this.alignByTranslate || (i[n] = ((this[e] || 0) - s) / 2, this.attr(i)))
                            }
                        }), c(e) && a.attr({
                            x: e,
                            y: i
                        }), a.isImg = !0, c(a.imgwidth) && c(a.imgheight) ? p() : (a.attr({
                            width: 0,
                            height: 0
                        }), h("img", {
                            onload: function() {
                                var t = r[g.chartIndex];
                                0 === this.width && (l(this, {
                                    position: "absolute",
                                    top: "-999em"
                                }), u.body.appendChild(this)), D[d] = {
                                    width: this.width,
                                    height: this.height
                                }, a.imgwidth = this.width, a.imgheight = this.height, a.element && p(), this.parentNode && this.parentNode.removeChild(this), g.imgCount--, !g.imgCount && t && t.onload && t.onload()
                            },
                            src: d
                        }), this.imgCount++)), a
                    },
                    symbols: {
                        circle: function(t, e, i, s) {
                            return this.arc(t + i / 2, e + s / 2, i / 2, s / 2, {
                                start: .5 * Math.PI,
                                end: 2.5 * Math.PI,
                                open: !1
                            })
                        },
                        square: function(t, e, i, s) {
                            return ["M", t, e, "L", t + i, e, t + i, e + s, t, e + s, "Z"]
                        },
                        triangle: function(t, e, i, s) {
                            return ["M", t + i / 2, e, "L", t + i, e + s, t, e + s, "Z"]
                        },
                        "triangle-down": function(t, e, i, s) {
                            return ["M", t, e, "L", t + i, e, t + i / 2, e + s, "Z"]
                        },
                        diamond: function(t, e, i, s) {
                            return ["M", t + i / 2, e, "L", t + i, e + s / 2, t + i / 2, e + s, t, e + s / 2, "Z"]
                        },
                        arc: function(t, e, i, s, n) {
                            var o = n.start,
                                r = n.r || i,
                                a = n.r || s || i,
                                l = n.end - .001;
                            i = n.innerR, s = T(n.open, .001 > Math.abs(n.end - n.start - 2 * Math.PI));
                            var h = Math.cos(o),
                                d = Math.sin(o),
                                p = Math.cos(l);
                            l = Math.sin(l);
                            return n = ["M", t + r * h, e + a * d, "A", r, a, 0, o = .001 > n.end - o - Math.PI ? 0 : 1, T(n.clockwise, 1), t + r * p, e + a * l], c(i) && n.push(s ? "M" : "L", t + i * p, e + i * l, "A", i, i, 0, o, 0, t + i * h, e + i * d), n.push(s ? "" : "Z"), n
                        },
                        callout: function(t, e, i, s, n) {
                            var o, r = Math.min(n && n.r || 0, i, s),
                                a = r + 6,
                                l = n && n.anchorX;
                            return n = n && n.anchorY, o = ["M", t + r, e, "L", t + i - r, e, "C", t + i, e, t + i, e, t + i, e + r, "L", t + i, e + s - r, "C", t + i, e + s, t + i, e + s, t + i - r, e + s, "L", t + r, e + s, "C", t, e + s, t, e + s, t, e + s - r, "L", t, e + r, "C", t, e, t, e, t + r, e], l && l > i ? n > e + a && n < e + s - a ? o.splice(13, 3, "L", t + i, n - 6, t + i + 6, n, t + i, n + 6, t + i, e + s - r) : o.splice(13, 3, "L", t + i, s / 2, l, n, t + i, s / 2, t + i, e + s - r) : l && 0 > l ? n > e + a && n < e + s - a ? o.splice(33, 3, "L", t, n + 6, t - 6, n, t, n - 6, t, e + r) : o.splice(33, 3, "L", t, s / 2, l, n, t, s / 2, t, e + r) : n && n > s && l > t + a && l < t + i - a ? o.splice(23, 3, "L", l + 6, e + s, l, e + s + 6, l - 6, e + s, t + r, e + s) : n && 0 > n && l > t + a && l < t + i - a && o.splice(3, 3, "L", l - 6, e, l, e - 6, l + 6, e, i - r, e), o
                        }
                    },
                    clipRect: function(e, i, s, n) {
                        var o = t.uniqueKey() + "-",
                            r = this.createElement("clipPath").attr({
                                id: o
                            }).add(this.defs);
                        return (e = this.rect(e, i, s, n, 0).add(r)).id = o, e.clipPath = r, e.count = 0, e
                    },
                    text: function(t, e, i, s) {
                        var n = {};
                        return !s || !this.allowHTML && this.forExport ? (n.x = Math.round(e || 0), i && (n.y = Math.round(i)), c(t) && (n.text = t), t = this.createElement("text").attr(n), s || (t.xSetter = function(t, e, i) {
                            var s, n, o = i.getElementsByTagName("tspan"),
                                r = i.getAttribute(e);
                            for (n = 0; n < o.length; n++)(s = o[n]).getAttribute(e) === r && s.setAttribute(e, t);
                            i.setAttribute(e, t)
                        }), t) : this.html(t, e, i)
                    },
                    fontMetrics: function(t, i) {
                        return t = !this.styledMode && /px/.test(t) || !I.getComputedStyle ? t || i && i.style && i.style.fontSize || this.style && this.style.fontSize : i && e.prototype.getStyle.call(i, "font-size"), {
                            h: i = 24 > (t = /px/.test(t) ? A(t) : 12) ? t + 3 : Math.round(1.2 * t),
                            b: Math.round(.8 * i),
                            f: t
                        }
                    },
                    rotCorr: function(t, e, i) {
                        var s = t;
                        return e && i && (s = Math.max(s * Math.cos(e * d), 4)), {
                            x: -t / 3 * Math.sin(e * d),
                            y: s
                        }
                    },
                    label: function(i, s, n, o, r, a, l, h, d) {
                        var p, u, g, m, v, x, y, b, k, w, S, C, T = this,
                            A = T.styledMode,
                            P = T.g("button" !== d && "label"),
                            E = P.text = T.text("", 0, 0, l).attr({
                                zIndex: 1
                            }),
                            _ = 0,
                            O = 3,
                            D = 0,
                            I = {},
                            z = /^url\((.*?)\)$/.test(o),
                            N = A || z,
                            B = function() {
                                return A ? p.strokeWidth() % 2 / 2 : (b ? parseInt(b, 10) : 0) % 2 / 2
                            };
                        d && P.addClass("highcharts-" + d), w = function() {
                            var t = E.element.style,
                                e = {};
                            u = (void 0 === g || void 0 === m || y) && c(E.textStr) && E.getBBox(), P.width = (g || u.width || 0) + 2 * O + D, P.height = (m || u.height || 0) + 2 * O, k = O + Math.min(T.fontMetrics(t && t.fontSize, E).b, u ? u.height : 1 / 0), N && (p || (P.box = p = T.symbols[o] || z ? T.symbol(o) : T.rect(), p.addClass(("button" === d ? "" : "highcharts-label-box") + (d ? " highcharts-" + d + "-box" : "")), p.add(P), t = B(), e.x = t, e.y = (h ? -k : 0) + t), e.width = Math.round(P.width), e.height = Math.round(P.height), p.attr(f(e, I)), I = {})
                        }, S = function() {
                            var t, e = D + O;
                            t = h ? 0 : k, c(g) && u && ("center" === y || "right" === y) && (e += {
                                center: .5,
                                right: 1
                            }[y] * (g - u.width)), e === E.x && t === E.y || (E.attr("x", e), E.hasBoxWidthChanged && (u = E.getBBox(!0), w()), void 0 !== t && E.attr("y", t)), E.x = e, E.y = t
                        }, C = function(t, e) {
                            p ? p.attr(t, e) : I[t] = e
                        }, P.onAdd = function() {
                            E.add(P), P.attr({
                                text: i || 0 === i ? i : "",
                                x: s,
                                y: n
                            }), p && c(r) && P.attr({
                                anchorX: r,
                                anchorY: a
                            })
                        }, P.widthSetter = function(e) {
                            g = t.isNumber(e) ? e : null
                        }, P.heightSetter = function(t) {
                            m = t
                        }, P["text-alignSetter"] = function(t) {
                            y = t
                        }, P.paddingSetter = function(t) {
                            c(t) && t !== O && (O = P.padding = t, S())
                        }, P.paddingLeftSetter = function(t) {
                            c(t) && t !== D && (D = t, S())
                        }, P.alignSetter = function(t) {
                            (t = {
                                left: 0,
                                center: .5,
                                right: 1
                            }[t]) !== _ && (_ = t, u && P.attr({
                                x: v
                            }))
                        }, P.textSetter = function(t) {
                            void 0 !== t && E.attr({
                                text: t
                            }), w(), S()
                        }, P["stroke-widthSetter"] = function(t, e) {
                            t && (N = !0), b = this["stroke-width"] = t, C(e, t)
                        }, A ? P.rSetter = function(t, e) {
                            C(e, t)
                        } : P.strokeSetter = P.fillSetter = P.rSetter = function(t, e) {
                            "r" !== e && ("fill" === e && t && (N = !0), P[e] = t), C(e, t)
                        }, P.anchorXSetter = function(t, e) {
                            r = P.anchorX = t, C(e, Math.round(t) - B() - v)
                        }, P.anchorYSetter = function(t, e) {
                            a = P.anchorY = t, C(e, t - x)
                        }, P.xSetter = function(t) {
                            P.x = t, _ && (t -= _ * ((g || u.width) + 2 * O), P["forceAnimate:x"] = !0), v = Math.round(t), P.attr("translateX", v)
                        }, P.ySetter = function(t) {
                            x = P.y = Math.round(t), P.attr("translateY", x)
                        };
                        var R = P.css;
                        return l = {
                            css: function(t) {
                                if (t) {
                                    var e = {};
                                    t = M(t), P.textProps.forEach(function(i) {
                                        void 0 !== t[i] && (e[i] = t[i], delete t[i])
                                    }), E.css(e), "width" in e && w(), "fontSize" in e && (w(), S())
                                }
                                return R.call(P, t)
                            },
                            getBBox: function() {
                                return {
                                    width: u.width + 2 * O,
                                    height: u.height + 2 * O,
                                    x: u.x - O,
                                    y: u.y - O
                                }
                            },
                            destroy: function() {
                                L(P.element, "mouseenter"), L(P.element, "mouseleave"), E && (E = E.destroy()), p && (p = p.destroy()), e.prototype.destroy.call(P), P = T = w = S = C = null
                            }
                        }, A || (l.shadow = function(t) {
                            return t && (w(), p && p.shadow(t)), P
                        }), f(P, l)
                    }
                }), t.Renderer = i
            }), e(i, "parts/Html.js", [i["parts/Globals.js"]], function(t) {
                var e = t.attr,
                    i = t.createElement,
                    s = t.css,
                    n = t.defined,
                    o = t.extend,
                    r = t.isFirefox,
                    a = t.isMS,
                    l = t.isWebKit,
                    h = t.pick,
                    c = t.pInt,
                    d = t.SVGElement,
                    p = t.SVGRenderer,
                    u = t.win;
                o(d.prototype, {
                    htmlCss: function(t) {
                        var e, i = "SPAN" === this.element.tagName && t && "width" in t,
                            n = h(i && t.width, void 0);
                        return i && (delete t.width, this.textWidth = n, e = !0), t && "ellipsis" === t.textOverflow && (t.whiteSpace = "nowrap", t.overflow = "hidden"), this.styles = o(this.styles, t), s(this.element, t), e && this.htmlUpdateTransform(), this
                    },
                    htmlGetBBox: function() {
                        var t = this.element;
                        return {
                            x: t.offsetLeft,
                            y: t.offsetTop,
                            width: t.offsetWidth,
                            height: t.offsetHeight
                        }
                    },
                    htmlUpdateTransform: function() {
                        if (this.added) {
                            var t = this.renderer,
                                e = this.element,
                                i = this.translateX || 0,
                                o = this.translateY || 0,
                                r = this.x || 0,
                                a = this.y || 0,
                                l = this.textAlign || "left",
                                h = {
                                    left: 0,
                                    center: .5,
                                    right: 1
                                }[l],
                                d = (u = this.styles) && u.whiteSpace;
                            if (s(e, {
                                    marginLeft: i,
                                    marginTop: o
                                }), !t.styledMode && this.shadows && this.shadows.forEach(function(t) {
                                    s(t, {
                                        marginLeft: i + 1,
                                        marginTop: o + 1
                                    })
                                }), this.inverted && [].forEach.call(e.childNodes, function(i) {
                                    t.invertChild(i, e)
                                }), "SPAN" === e.tagName) {
                                var p, u = this.rotation,
                                    f = this.textWidth && c(this.textWidth),
                                    g = [u, l, e.innerHTML, this.textWidth, this.textAlign].join();
                                (p = f !== this.oldTextWidth) && !(p = f > this.oldTextWidth) && ((p = this.textPxLength) || (s(e, {
                                    width: "",
                                    whiteSpace: d || "nowrap"
                                }), p = e.offsetWidth), p = p > f), p && (/[ \-]/.test(e.textContent || e.innerText) || "ellipsis" === e.style.textOverflow) ? (s(e, {
                                    width: f + "px",
                                    display: "block",
                                    whiteSpace: d || "normal"
                                }), this.oldTextWidth = f, this.hasBoxWidthChanged = !0) : this.hasBoxWidthChanged = !1, g !== this.cTT && (d = t.fontMetrics(e.style.fontSize, e).b, !n(u) || u === (this.oldRotation || 0) && l === this.oldAlign || this.setSpanRotation(u, h, d), this.getSpanCorrection(!n(u) && this.textPxLength || e.offsetWidth, d, h, u, l)), s(e, {
                                    left: r + (this.xCorr || 0) + "px",
                                    top: a + (this.yCorr || 0) + "px"
                                }), this.cTT = g, this.oldRotation = u, this.oldAlign = l
                            }
                        } else this.alignOnAdd = !0
                    },
                    setSpanRotation: function(t, e, i) {
                        var n = {},
                            o = this.renderer.getTransformKey();
                        n[o] = n.transform = "rotate(" + t + "deg)", n[o + (r ? "Origin" : "-origin")] = n.transformOrigin = 100 * e + "% " + i + "px", s(this.element, n)
                    },
                    getSpanCorrection: function(t, e, i) {
                        this.xCorr = -t * i, this.yCorr = -e
                    }
                }), o(p.prototype, {
                    getTransformKey: function() {
                        return a && !/Edge/.test(u.navigator.userAgent) ? "-ms-transform" : l ? "-webkit-transform" : r ? "MozTransform" : u.opera ? "-o-transform" : ""
                    },
                    html: function(s, n, r) {
                        var a = this.createElement("span"),
                            l = a.element,
                            c = a.renderer,
                            p = c.isSVG,
                            u = function(t, e) {
                                ["opacity", "visibility"].forEach(function(i) {
                                    t[i + "Setter"] = function(s, n, o) {
                                        var r = t.div ? t.div.style : e;
                                        d.prototype[i + "Setter"].call(this, s, n, o), r && (r[n] = s)
                                    }
                                }), t.addedSetters = !0
                            },
                            f = (f = t.charts[c.chartIndex]) && f.styledMode;
                        return a.textSetter = function(t) {
                            t !== l.innerHTML && (delete this.bBox, delete this.oldTextWidth), this.textStr = t, l.innerHTML = h(t, ""), a.doTransform = !0
                        }, p && u(a, a.element.style), a.xSetter = a.ySetter = a.alignSetter = a.rotationSetter = function(t, e) {
                            "align" === e && (e = "textAlign"), a[e] = t, a.doTransform = !0
                        }, a.afterSetters = function() {
                            this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1)
                        }, a.attr({
                            text: s,
                            x: Math.round(n),
                            y: Math.round(r)
                        }).css({
                            position: "absolute"
                        }), f || a.css({
                            fontFamily: this.style.fontFamily,
                            fontSize: this.style.fontSize
                        }), l.style.whiteSpace = "nowrap", a.css = a.htmlCss, p && (a.add = function(t) {
                            var s, n = c.box.parentNode,
                                r = [];
                            if (this.parentGroup = t) {
                                if (!(s = t.div)) {
                                    for (; t;) r.push(t), t = t.parentGroup;
                                    r.reverse().forEach(function(t) {
                                        function l(e, i) {
                                            t[i] = e, "translateX" === i ? h.left = e + "px" : h.top = e + "px", t.doTransform = !0
                                        }
                                        var h, c = e(t.element, "class");
                                        c && (c = {
                                            className: c
                                        }), s = t.div = t.div || i("div", c, {
                                            position: "absolute",
                                            left: (t.translateX || 0) + "px",
                                            top: (t.translateY || 0) + "px",
                                            display: t.display,
                                            opacity: t.opacity,
                                            pointerEvents: t.styles && t.styles.pointerEvents
                                        }, s || n), h = s.style, o(t, {
                                            classSetter: function(t) {
                                                return function(e) {
                                                    this.element.setAttribute("class", e), t.className = e
                                                }
                                            }(s),
                                            on: function() {
                                                return r[0].div && a.on.apply({
                                                    element: r[0].div
                                                }, arguments), t
                                            },
                                            translateXSetter: l,
                                            translateYSetter: l
                                        }), t.addedSetters || u(t)
                                    })
                                }
                            } else s = n;
                            return s.appendChild(l), a.added = !0, a.alignOnAdd && a.htmlUpdateTransform(), a
                        }), a
                    }
                })
            }), e(i, "parts/Time.js", [i["parts/Globals.js"]], function(t) {
                var e = t.defined,
                    i = t.extend,
                    s = t.merge,
                    n = t.pick,
                    o = t.timeUnits,
                    r = t.win;
                t.Time = function(t) {
                    this.update(t, !1)
                }, t.Time.prototype = {
                    defaultOptions: {},
                    update: function(t) {
                        var e = n(t && t.useUTC, !0),
                            i = this;
                        this.options = t = s(!0, this.options || {}, t), this.Date = t.Date || r.Date || Date, this.timezoneOffset = (this.useUTC = e) && t.timezoneOffset, this.getTimezoneOffset = this.timezoneOffsetFunction(), (this.variableTimezone = !(e && !t.getTimezoneOffset && !t.timezone)) || this.timezoneOffset ? (this.get = function(t, e) {
                            var s = e.getTime(),
                                n = s - i.getTimezoneOffset(e);
                            return e.setTime(n), t = e["getUTC" + t](), e.setTime(s), t
                        }, this.set = function(t, e, s) {
                            var n;
                            "Milliseconds" === t || "Seconds" === t || "Minutes" === t && 0 == e.getTimezoneOffset() % 60 ? e["set" + t](s) : (n = i.getTimezoneOffset(e), n = e.getTime() - n, e.setTime(n), e["setUTC" + t](s), t = i.getTimezoneOffset(e), n = e.getTime() + t, e.setTime(n))
                        }) : e ? (this.get = function(t, e) {
                            return e["getUTC" + t]()
                        }, this.set = function(t, e, i) {
                            return e["setUTC" + t](i)
                        }) : (this.get = function(t, e) {
                            return e["get" + t]()
                        }, this.set = function(t, e, i) {
                            return e["set" + t](i)
                        })
                    },
                    makeTime: function(e, i, s, o, r, a) {
                        var l, h, c;
                        return this.useUTC ? (l = this.Date.UTC.apply(0, arguments), l += h = this.getTimezoneOffset(l), h !== (c = this.getTimezoneOffset(l)) ? l += c - h : h - 36e5 !== this.getTimezoneOffset(l - 36e5) || t.isSafari || (l -= 36e5)) : l = new this.Date(e, i, n(s, 1), n(o, 0), n(r, 0), n(a, 0)).getTime(), l
                    },
                    timezoneOffsetFunction: function() {
                        var e = this,
                            i = this.options,
                            s = r.moment;
                        if (!this.useUTC) return function(t) {
                            return 6e4 * new Date(t).getTimezoneOffset()
                        };
                        if (i.timezone) {
                            if (s) return function(t) {
                                return 6e4 * -s.tz(t, i.timezone).utcOffset()
                            };
                            t.error(25)
                        }
                        return this.useUTC && i.getTimezoneOffset ? function(t) {
                            return 6e4 * i.getTimezoneOffset(t)
                        } : function() {
                            return 6e4 * (e.timezoneOffset || 0)
                        }
                    },
                    dateFormat: function(e, i, s) {
                        if (!t.defined(i) || isNaN(i)) return t.defaultOptions.lang.invalidDate || "";
                        e = t.pick(e, "%Y-%m-%d %H:%M:%S");
                        var n = this,
                            o = new this.Date(i),
                            r = this.get("Hours", o),
                            a = this.get("Day", o),
                            l = this.get("Date", o),
                            h = this.get("Month", o),
                            c = this.get("FullYear", o),
                            d = t.defaultOptions.lang,
                            p = d.weekdays,
                            u = d.shortWeekdays,
                            f = t.pad;
                        o = t.extend({
                            a: u ? u[a] : p[a].substr(0, 3),
                            A: p[a],
                            d: f(l),
                            e: f(l, 2, " "),
                            w: a,
                            b: d.shortMonths[h],
                            B: d.months[h],
                            m: f(h + 1),
                            o: h + 1,
                            y: c.toString().substr(2, 2),
                            Y: c,
                            H: f(r),
                            k: r,
                            I: f(r % 12 || 12),
                            l: r % 12 || 12,
                            M: f(n.get("Minutes", o)),
                            p: 12 > r ? "AM" : "PM",
                            P: 12 > r ? "am" : "pm",
                            S: f(o.getSeconds()),
                            L: f(Math.floor(i % 1e3), 3)
                        }, t.dateFormats);
                        return t.objectEach(o, function(t, s) {
                            for (; - 1 !== e.indexOf("%" + s);) e = e.replace("%" + s, "function" == typeof t ? t.call(n, i) : t)
                        }), s ? e.substr(0, 1).toUpperCase() + e.substr(1) : e
                    },
                    resolveDTLFormat: function(e) {
                        return t.isObject(e, !0) ? e : {
                            main: (e = t.splat(e))[0],
                            from: e[1],
                            to: e[2]
                        }
                    },
                    getTimeTicks: function(t, s, r, a) {
                        var l, h, c = this,
                            d = [],
                            p = {};
                        l = new c.Date(s);
                        var u, f = t.unitRange,
                            g = t.count || 1;
                        if (a = n(a, 1), e(s)) {
                            c.set("Milliseconds", l, f >= o.second ? 0 : g * Math.floor(c.get("Milliseconds", l) / g)), f >= o.second && c.set("Seconds", l, f >= o.minute ? 0 : g * Math.floor(c.get("Seconds", l) / g)), f >= o.minute && c.set("Minutes", l, f >= o.hour ? 0 : g * Math.floor(c.get("Minutes", l) / g)), f >= o.hour && c.set("Hours", l, f >= o.day ? 0 : g * Math.floor(c.get("Hours", l) / g)), f >= o.day && c.set("Date", l, f >= o.month ? 1 : Math.max(1, g * Math.floor(c.get("Date", l) / g))), f >= o.month && (c.set("Month", l, f >= o.year ? 0 : g * Math.floor(c.get("Month", l) / g)), h = c.get("FullYear", l)), f >= o.year && c.set("FullYear", l, h - h % g), f === o.week && (h = c.get("Day", l), c.set("Date", l, c.get("Date", l) - h + a + (h < a ? -7 : 0))), h = c.get("FullYear", l), a = c.get("Month", l);
                            var m = c.get("Date", l),
                                v = c.get("Hours", l);
                            for (s = l.getTime(), c.variableTimezone && (u = r - s > 4 * o.month || c.getTimezoneOffset(s) !== c.getTimezoneOffset(r)), s = l.getTime(), l = 1; s < r;) d.push(s), s = f === o.year ? c.makeTime(h + l * g, 0) : f === o.month ? c.makeTime(h, a + l * g) : !u || f !== o.day && f !== o.week ? u && f === o.hour && 1 < g ? c.makeTime(h, a, m, v + l * g) : s + f * g : c.makeTime(h, a, m + l * g * (f === o.day ? 1 : 7)), l++;
                            d.push(s), f <= o.hour && 1e4 > d.length && d.forEach(function(t) {
                                0 == t % 18e5 && "000000000" === c.dateFormat("%H%M%S%L", t) && (p[t] = "day")
                            })
                        }
                        return d.info = i(t, {
                            higherRanks: p,
                            totalRange: f * g
                        }), d
                    }
                }
            }), e(i, "parts/Options.js", [i["parts/Globals.js"]], function(t) {
                var e = t.color,
                    i = t.merge;
                t.defaultOptions = {
                    colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
                    symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
                    lang: {
                        loading: "Loading...",
                        months: "January February March April May June July August September October November December".split(" "),
                        shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                        weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                        decimalPoint: ".",
                        numericSymbols: "kMGTPE".split(""),
                        resetZoom: "Reset zoom",
                        resetZoomTitle: "Reset zoom level 1:1",
                        thousandsSep: " "
                    },
                    global: {},
                    time: t.Time.prototype.defaultOptions,
                    chart: {
                        styledMode: !1,
                        borderRadius: 0,
                        colorCount: 10,
                        defaultSeriesType: "line",
                        ignoreHiddenSeries: !0,
                        spacing: [10, 10, 15, 10],
                        resetZoomButton: {
                            theme: {
                                zIndex: 6
                            },
                            position: {
                                align: "right",
                                x: -10,
                                y: 10
                            }
                        },
                        width: null,
                        height: null,
                        borderColor: "#335cad",
                        backgroundColor: "#ffffff",
                        plotBorderColor: "#cccccc"
                    },
                    title: {
                        text: "Chart title",
                        align: "center",
                        margin: 15,
                        widthAdjust: -44
                    },
                    subtitle: {
                        text: "",
                        align: "center",
                        widthAdjust: -44
                    },
                    plotOptions: {},
                    labels: {
                        style: {
                            position: "absolute",
                            color: "#333333"
                        }
                    },
                    legend: {
                        enabled: !0,
                        align: "center",
                        alignColumns: !0,
                        layout: "horizontal",
                        labelFormatter: function() {
                            return this.name
                        },
                        borderColor: "#999999",
                        borderRadius: 0,
                        navigation: {
                            activeColor: "#003399",
                            inactiveColor: "#cccccc"
                        },
                        itemStyle: {
                            color: "#333333",
                            cursor: "pointer",
                            fontSize: "12px",
                            fontWeight: "bold",
                            textOverflow: "ellipsis"
                        },
                        itemHoverStyle: {
                            color: "#000000"
                        },
                        itemHiddenStyle: {
                            color: "#cccccc"
                        },
                        shadow: !1,
                        itemCheckboxStyle: {
                            position: "absolute",
                            width: "13px",
                            height: "13px"
                        },
                        squareSymbol: !0,
                        symbolPadding: 5,
                        verticalAlign: "bottom",
                        x: 0,
                        y: 0,
                        title: {
                            style: {
                                fontWeight: "bold"
                            }
                        }
                    },
                    loading: {
                        labelStyle: {
                            fontWeight: "bold",
                            position: "relative",
                            top: "45%"
                        },
                        style: {
                            position: "absolute",
                            backgroundColor: "#ffffff",
                            opacity: .5,
                            textAlign: "center"
                        }
                    },
                    tooltip: {
                        enabled: !0,
                        animation: t.svg,
                        borderRadius: 3,
                        dateTimeLabelFormats: {
                            millisecond: "%A, %b %e, %H:%M:%S.%L",
                            second: "%A, %b %e, %H:%M:%S",
                            minute: "%A, %b %e, %H:%M",
                            hour: "%A, %b %e, %H:%M",
                            day: "%A, %b %e, %Y",
                            week: "Week from %A, %b %e, %Y",
                            month: "%B %Y",
                            year: "%Y"
                        },
                        footerFormat: "",
                        padding: 8,
                        snap: t.isTouchDevice ? 25 : 10,
                        headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
                        pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
                        backgroundColor: e("#f7f7f7").setOpacity(.85).get(),
                        borderWidth: 1,
                        shadow: !0,
                        style: {
                            color: "#333333",
                            cursor: "default",
                            fontSize: "12px",
                            pointerEvents: "none",
                            whiteSpace: "nowrap"
                        }
                    },
                    credits: {
                        enabled: !0,
                        href: "https://www.highcharts.com?credits",
                        position: {
                            align: "right",
                            x: -10,
                            verticalAlign: "bottom",
                            y: -5
                        },
                        style: {
                            cursor: "pointer",
                            color: "#999999",
                            fontSize: "9px"
                        },
                        text: "Highcharts.com"
                    }
                }, t.setOptions = function(e) {
                    return t.defaultOptions = i(!0, t.defaultOptions, e), t.time.update(i(t.defaultOptions.global, t.defaultOptions.time), !1), t.defaultOptions
                }, t.getOptions = function() {
                    return t.defaultOptions
                }, t.defaultPlotOptions = t.defaultOptions.plotOptions, t.time = new t.Time(i(t.defaultOptions.global, t.defaultOptions.time)), t.dateFormat = function(e, i, s) {
                    return t.time.dateFormat(e, i, s)
                }
            }), e(i, "parts/Tick.js", [i["parts/Globals.js"]], function(t) {
                var e = t.correctFloat,
                    i = t.defined,
                    s = t.destroyObjectProperties,
                    n = t.fireEvent,
                    o = t.isNumber,
                    r = t.merge,
                    a = t.pick,
                    l = t.deg2rad;
                t.Tick = function(t, e, i, s, n) {
                    this.axis = t, this.pos = e, this.type = i || "", this.isNewLabel = this.isNew = !0, this.parameters = n || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, i || s || this.addLabel()
                }, t.Tick.prototype = {
                    addLabel: function() {
                        var s, n, o, l, h = this,
                            c = h.axis,
                            d = c.options,
                            p = c.chart,
                            u = c.categories,
                            f = c.names,
                            g = h.pos,
                            m = a(h.options && h.options.labels, d.labels),
                            v = g === (b = c.tickPositions)[0],
                            x = g === b[b.length - 1],
                            y = (u = this.parameters.category || (u ? a(u[g], f[g], g) : g), h.label),
                            b = b.info;
                        c.isDatetimeAxis && b && (s = (n = p.time.resolveDTLFormat(d.dateTimeLabelFormats[!d.grid && b.higherRanks[g] || b.unitName])).main), h.isFirst = v, h.isLast = x, h.formatCtx = {
                            axis: c,
                            chart: p,
                            isFirst: v,
                            isLast: x,
                            dateTimeLabelFormat: s,
                            tickPositionInfo: b,
                            value: c.isLog ? e(c.lin2log(u)) : u,
                            pos: g
                        }, d = c.labelFormatter.call(h.formatCtx, this.formatCtx), (l = n && n.list) && (h.shortenLabel = function() {
                            for (o = 0; o < l.length; o++)
                                if (y.attr({
                                        text: c.labelFormatter.call(t.extend(h.formatCtx, {
                                            dateTimeLabelFormat: l[o]
                                        }))
                                    }), y.getBBox().width < c.getSlotWidth(h) - 2 * a(m.padding, 5)) return;
                            y.attr({
                                text: ""
                            })
                        }), i(y) ? y && y.textStr !== d && (!y.textWidth || m.style && m.style.width || y.styles.width || y.css({
                            width: null
                        }), y.attr({
                            text: d
                        })) : ((h.label = y = i(d) && m.enabled ? p.renderer.text(d, 0, 0, m.useHTML).add(c.labelGroup) : null) && (p.styledMode || y.css(r(m.style)), y.textPxLength = y.getBBox().width), h.rotation = 0)
                    },
                    getLabelSize: function() {
                        return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
                    },
                    handleOverflow: function(t) {
                        var e, i = this.axis,
                            s = i.options.labels,
                            n = t.x,
                            o = i.chart.chartWidth,
                            r = i.chart.spacing,
                            h = a(i.labelLeft, Math.min(i.pos, r[3])),
                            c = (r = a(i.labelRight, Math.max(i.isRadial ? 0 : i.pos + i.len, o - r[1])), this.label),
                            d = this.rotation,
                            p = {
                                left: 0,
                                center: .5,
                                right: 1
                            }[i.labelAlign || c.attr("align")],
                            u = c.getBBox().width,
                            f = i.getSlotWidth(this),
                            g = f,
                            m = 1,
                            v = {};
                        d || "justify" !== a(s.overflow, "justify") ? 0 > d && n - p * u < h ? e = Math.round(n / Math.cos(d * l) - h) : 0 < d && n + p * u > r && (e = Math.round((o - n) / Math.cos(d * l))) : (o = n + (1 - p) * u, n - p * u < h ? g = t.x + g * (1 - p) - h : o > r && (g = r - t.x + g * p, m = -1), (g = Math.min(f, g)) < f && "center" === i.labelAlign && (t.x += m * (f - g - p * (f - Math.min(u, g)))), (u > g || i.autoRotation && (c.styles || {}).width) && (e = g)), e && (this.shortenLabel ? this.shortenLabel() : (v.width = Math.floor(e), (s.style || {}).textOverflow || (v.textOverflow = "ellipsis"), c.css(v)))
                    },
                    getPosition: function(e, i, s, o) {
                        var r = this.axis,
                            a = r.chart,
                            l = o && a.oldChartHeight || a.chartHeight;
                        return e = {
                            x: e ? t.correctFloat(r.translate(i + s, null, null, o) + r.transB) : r.left + r.offset + (r.opposite ? (o && a.oldChartWidth || a.chartWidth) - r.right - r.left : 0),
                            y: e ? l - r.bottom + r.offset - (r.opposite ? r.height : 0) : t.correctFloat(l - r.translate(i + s, null, null, o) - r.transB)
                        }, n(this, "afterGetPosition", {
                            pos: e
                        }), e
                    },
                    getLabelPosition: function(t, e, s, o, r, a, h, c) {
                        var d = this.axis,
                            p = d.transA,
                            u = d.reversed,
                            f = d.staggerLines,
                            g = d.tickRotCorr || {
                                x: 0,
                                y: 0
                            },
                            m = r.y,
                            v = o || d.reserveSpaceDefault ? 0 : -d.labelOffset * ("center" === d.labelAlign ? .5 : 1),
                            x = {};
                        return i(m) || (m = 0 === d.side ? s.rotation ? -8 : -s.getBBox().height : 2 === d.side ? g.y + 8 : Math.cos(s.rotation * l) * (g.y - s.getBBox(!1, 0).height / 2)), t = t + r.x + v + g.x - (a && o ? a * p * (u ? -1 : 1) : 0), e = e + m - (a && !o ? a * p * (u ? 1 : -1) : 0), f && (s = h / (c || 1) % f, d.opposite && (s = f - s - 1), e += d.labelOffset / f * s), x.x = t, x.y = Math.round(e), n(this, "afterGetLabelPosition", {
                            pos: x,
                            tickmarkOffset: a,
                            index: h
                        }), x
                    },
                    getMarkPath: function(t, e, i, s, n, o) {
                        return o.crispLine(["M", t, e, "L", t + (n ? 0 : -i), e + (n ? i : 0)], s)
                    },
                    renderGridLine: function(t, e, i) {
                        var s = this.axis,
                            n = s.options,
                            o = this.gridLine,
                            r = {},
                            l = this.pos,
                            h = this.type,
                            c = a(this.tickmarkOffset, s.tickmarkOffset),
                            d = s.chart.renderer,
                            p = h ? h + "Grid" : "grid",
                            u = n[p + "LineWidth"],
                            f = n[p + "LineColor"];
                        n = n[p + "LineDashStyle"];
                        o || (s.chart.styledMode || (r.stroke = f, r["stroke-width"] = u, n && (r.dashstyle = n)), h || (r.zIndex = 1), t && (e = 0), this.gridLine = o = d.path().attr(r).addClass("highcharts-" + (h ? h + "-" : "") + "grid-line").add(s.gridGroup)), o && (i = s.getPlotLinePath(l + c, o.strokeWidth() * i, t, "pass")) && o[t || this.isNew ? "attr" : "animate"]({
                            d: i,
                            opacity: e
                        })
                    },
                    renderMark: function(t, e, i) {
                        var s = this.axis,
                            n = s.options,
                            o = s.chart.renderer,
                            r = this.type,
                            l = r ? r + "Tick" : "tick",
                            h = s.tickSize(l),
                            c = this.mark,
                            d = !c,
                            p = t.x;
                        t = t.y;
                        var u = a(n[l + "Width"], !r && s.isXAxis ? 1 : 0);
                        n = n[l + "Color"];
                        h && (s.opposite && (h[0] = -h[0]), d && (this.mark = c = o.path().addClass("highcharts-" + (r ? r + "-" : "") + "tick").add(s.axisGroup), s.chart.styledMode || c.attr({
                            stroke: n,
                            "stroke-width": u
                        })), c[d ? "attr" : "animate"]({
                            d: this.getMarkPath(p, t, h[0], c.strokeWidth() * i, s.horiz, o),
                            opacity: e
                        }))
                    },
                    renderLabel: function(t, e, i, s) {
                        var n = (d = this.axis).horiz,
                            r = d.options,
                            l = this.label,
                            h = r.labels,
                            c = h.step,
                            d = a(this.tickmarkOffset, d.tickmarkOffset),
                            p = !0,
                            u = t.x;
                        t = t.y, l && o(u) && (l.xy = t = this.getLabelPosition(u, t, l, n, h, d, s, c), this.isFirst && !this.isLast && !a(r.showFirstLabel, 1) || this.isLast && !this.isFirst && !a(r.showLastLabel, 1) ? p = !1 : !n || h.step || h.rotation || e || 0 === i || this.handleOverflow(t), c && s % c && (p = !1), p && o(t.y) ? (t.opacity = i, l[this.isNewLabel ? "attr" : "animate"](t), this.isNewLabel = !1) : (l.attr("y", -9999), this.isNewLabel = !0))
                    },
                    render: function(e, i, s) {
                        var n = (h = this.axis).horiz,
                            o = this.pos,
                            r = a(this.tickmarkOffset, h.tickmarkOffset),
                            l = (r = (o = this.getPosition(n, o, r, i)).x, o.y),
                            h = n && r === h.pos + h.len || !n && l === h.pos ? -1 : 1;
                        s = a(s, 1), this.isActive = !0, this.renderGridLine(i, s, h), this.renderMark(o, s, h), this.renderLabel(o, i, s, e), this.isNew = !1, t.fireEvent(this, "afterRender")
                    },
                    destroy: function() {
                        s(this, this.axis)
                    }
                }
            }), e(i, "parts/Axis.js", [i["parts/Globals.js"]], function(t) {
                var e = t.addEvent,
                    i = t.animObject,
                    s = t.arrayMax,
                    n = t.arrayMin,
                    o = t.color,
                    r = t.correctFloat,
                    a = t.defaultOptions,
                    l = t.defined,
                    h = t.deg2rad,
                    c = t.destroyObjectProperties,
                    d = t.extend,
                    p = t.fireEvent,
                    u = t.format,
                    f = t.getMagnitude,
                    g = t.isArray,
                    m = t.isNumber,
                    v = t.isString,
                    x = t.merge,
                    y = t.normalizeTickInterval,
                    b = t.objectEach,
                    k = t.pick,
                    w = t.removeEvent,
                    M = t.seriesTypes,
                    S = t.splat,
                    C = t.syncTimeout,
                    T = t.Tick,
                    A = function() {
                        this.init.apply(this, arguments)
                    };
                return t.extend(A.prototype, {
                    defaultOptions: {
                        dateTimeLabelFormats: {
                            millisecond: {
                                main: "%H:%M:%S.%L",
                                range: !1
                            },
                            second: {
                                main: "%H:%M:%S",
                                range: !1
                            },
                            minute: {
                                main: "%H:%M",
                                range: !1
                            },
                            hour: {
                                main: "%H:%M",
                                range: !1
                            },
                            day: {
                                main: "%e. %b"
                            },
                            week: {
                                main: "%e. %b"
                            },
                            month: {
                                main: "%b '%y"
                            },
                            year: {
                                main: "%Y"
                            }
                        },
                        endOnTick: !1,
                        labels: {
                            enabled: !0,
                            indentation: 10,
                            x: 0,
                            style: {
                                color: "#666666",
                                cursor: "default",
                                fontSize: "11px"
                            }
                        },
                        maxPadding: .01,
                        minorTickLength: 2,
                        minorTickPosition: "outside",
                        minPadding: .01,
                        showEmpty: !0,
                        startOfWeek: 1,
                        startOnTick: !1,
                        tickLength: 10,
                        tickPixelInterval: 100,
                        tickmarkPlacement: "between",
                        tickPosition: "outside",
                        title: {
                            align: "middle",
                            style: {
                                color: "#666666"
                            }
                        },
                        type: "linear",
                        minorGridLineColor: "#f2f2f2",
                        minorGridLineWidth: 1,
                        minorTickColor: "#999999",
                        lineColor: "#ccd6eb",
                        lineWidth: 1,
                        gridLineColor: "#e6e6e6",
                        tickColor: "#ccd6eb"
                    },
                    defaultYAxisOptions: {
                        endOnTick: !0,
                        maxPadding: .05,
                        minPadding: .05,
                        tickPixelInterval: 72,
                        showLastLabel: !0,
                        labels: {
                            x: -8
                        },
                        startOnTick: !0,
                        title: {
                            rotation: 270,
                            text: "Values"
                        },
                        stackLabels: {
                            allowOverlap: !1,
                            enabled: !1,
                            formatter: function() {
                                return t.numberFormat(this.total, -1)
                            },
                            style: {
                                color: "#000000",
                                fontSize: "11px",
                                fontWeight: "bold",
                                textOutline: "1px contrast"
                            }
                        },
                        gridLineWidth: 1,
                        lineWidth: 0
                    },
                    defaultLeftAxisOptions: {
                        labels: {
                            x: -15
                        },
                        title: {
                            rotation: 270
                        }
                    },
                    defaultRightAxisOptions: {
                        labels: {
                            x: 15
                        },
                        title: {
                            rotation: 90
                        }
                    },
                    defaultBottomAxisOptions: {
                        labels: {
                            autoRotation: [-45],
                            x: 0
                        },
                        margin: 15,
                        title: {
                            rotation: 0
                        }
                    },
                    defaultTopAxisOptions: {
                        labels: {
                            autoRotation: [-45],
                            x: 0
                        },
                        margin: 15,
                        title: {
                            rotation: 0
                        }
                    },
                    init: function(t, i) {
                        var s = i.isX,
                            n = this;
                        n.chart = t, n.horiz = t.inverted && !n.isZAxis ? !s : s, n.isXAxis = s, n.coll = n.coll || (s ? "xAxis" : "yAxis"), p(this, "init", {
                            userOptions: i
                        }), n.opposite = i.opposite, n.side = i.side || (n.horiz ? n.opposite ? 0 : 2 : n.opposite ? 1 : 3), n.setOptions(i);
                        var o = this.options,
                            r = o.type;
                        n.labelFormatter = o.labels.formatter || n.defaultLabelFormatter, n.userOptions = i, n.minPixelPadding = 0, n.reversed = o.reversed, n.visible = !1 !== o.visible, n.zoomEnabled = !1 !== o.zoomEnabled, n.hasNames = "category" === r || !0 === o.categories, n.categories = o.categories || n.hasNames, n.names || (n.names = [], n.names.keys = {}), n.plotLinesAndBandsGroups = {}, n.isLog = "logarithmic" === r, n.isDatetimeAxis = "datetime" === r, n.positiveValuesOnly = n.isLog && !n.allowNegativeLog, n.isLinked = l(o.linkedTo), n.ticks = {}, n.labelEdge = [], n.minorTicks = {}, n.plotLinesAndBands = [], n.alternateBands = {}, n.len = 0, n.minRange = n.userMinRange = o.minRange || o.maxZoom, n.range = o.range, n.offset = o.offset || 0, n.stacks = {}, n.oldStacks = {}, n.stacksTouched = 0, n.max = null, n.min = null, n.crosshair = k(o.crosshair, S(t.options.tooltip.crosshairs)[s ? 0 : 1], !1), i = n.options.events, -1 === t.axes.indexOf(n) && (s ? t.axes.splice(t.xAxis.length, 0, n) : t.axes.push(n), t[n.coll].push(n)), n.series = n.series || [], t.inverted && !n.isZAxis && s && void 0 === n.reversed && (n.reversed = !0), b(i, function(t, i) {
                            e(n, i, t)
                        }), n.lin2log = o.linearToLogConverter || n.lin2log, n.isLog && (n.val2lin = n.log2lin, n.lin2val = n.lin2log), p(this, "afterInit")
                    },
                    setOptions: function(t) {
                        this.options = x(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], x(a[this.coll], t)), p(this, "afterSetOptions", {
                            userOptions: t
                        })
                    },
                    defaultLabelFormatter: function() {
                        var e, i = this.axis,
                            s = this.value,
                            n = i.chart.time,
                            o = i.categories,
                            r = this.dateTimeLabelFormat,
                            l = (h = a.lang).numericSymbols,
                            h = h.numericSymbolMagnitude || 1e3,
                            c = l && l.length,
                            d = i.options.labels.format;
                        i = i.isLog ? Math.abs(s) : i.tickInterval;
                        if (d) e = u(d, this, n);
                        else if (o) e = s;
                        else if (r) e = n.dateFormat(r, s);
                        else if (c && 1e3 <= i)
                            for (; c-- && void 0 === e;) i >= (n = Math.pow(h, c + 1)) && 0 == 10 * s % n && null !== l[c] && 0 !== s && (e = t.numberFormat(s / n, -1) + l[c]);
                        return void 0 === e && (e = 1e4 <= Math.abs(s) ? t.numberFormat(s, -1) : t.numberFormat(s, -1, void 0, "")), e
                    },
                    getSeriesExtremes: function() {
                        var t, e = this,
                            i = e.chart;
                        p(this, "getSeriesExtremes", null, function() {
                            e.hasVisibleSeries = !1, e.dataMin = e.dataMax = e.threshold = null, e.softThreshold = !e.isXAxis, e.buildStacks && e.buildStacks(), e.series.forEach(function(s) {
                                if (s.visible || !i.options.chart.ignoreHiddenSeries) {
                                    var n, o, r = s.options,
                                        a = r.threshold;
                                    e.hasVisibleSeries = !0, e.positiveValuesOnly && 0 >= a && (a = null), e.isXAxis ? (r = s.xData).length && (n = (t = s.getXExtremes(r)).min, o = t.max, m(n) || n instanceof Date || (r = r.filter(m), n = (t = s.getXExtremes(r)).min, o = t.max), r.length && (e.dataMin = Math.min(k(e.dataMin, n), n), e.dataMax = Math.max(k(e.dataMax, o), o))) : (s.getExtremes(), o = s.dataMax, n = s.dataMin, l(n) && l(o) && (e.dataMin = Math.min(k(e.dataMin, n), n), e.dataMax = Math.max(k(e.dataMax, o), o)), l(a) && (e.threshold = a), (!r.softThreshold || e.positiveValuesOnly) && (e.softThreshold = !1))
                                }
                            })
                        }), p(this, "afterGetSeriesExtremes")
                    },
                    translate: function(t, e, i, s, n, o) {
                        var r = this.linkedParent || this,
                            a = 1,
                            l = 0,
                            h = s ? r.oldTransA : r.transA;
                        s = s ? r.oldMin : r.min;
                        var c = r.minPixelPadding;
                        return n = (r.isOrdinal || r.isBroken || r.isLog && n) && r.lin2val, h || (h = r.transA), i && (a *= -1, l = r.len), r.reversed && (l -= (a *= -1) * (r.sector || r.len)), e ? (t = (t * a + l - c) / h + s, n && (t = r.lin2val(t))) : (n && (t = r.val2lin(t)), t = m(s) ? a * (t - s) * h + l + a * c + (m(o) ? h * o : 0) : void 0), t
                    },
                    toPixels: function(t, e) {
                        return this.translate(t, !1, !this.horiz, null, !0) + (e ? 0 : this.pos)
                    },
                    toValue: function(t, e) {
                        return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, null, !0)
                    },
                    getPlotLinePath: function(t, e, i, s, n) {
                        var o, r, a, l, h, c, d = this,
                            u = d.chart,
                            f = d.left,
                            g = d.top,
                            v = i && u.oldChartHeight || u.chartHeight,
                            x = i && u.oldChartWidth || u.chartWidth,
                            y = d.transB,
                            b = function(t, e, i) {
                                return ("pass" !== s && t < e || t > i) && (s ? t = Math.min(Math.max(e, t), i) : h = !0), t
                            };
                        return p(this, "getPlotLinePath", c = {
                            value: t,
                            lineWidth: e,
                            old: i,
                            force: s,
                            translatedValue: n
                        }, function(c) {
                            n = k(n, d.translate(t, null, null, i)), n = Math.min(Math.max(-1e5, n), 1e5), o = a = Math.round(n + y), r = l = Math.round(v - n - y), m(n) ? d.horiz ? (r = g, l = v - d.bottom, o = a = b(o, f, f + d.width)) : (o = f, a = x - d.right, r = l = b(r, g, g + d.height)) : (h = !0, s = !1), c.path = h && !s ? null : u.renderer.crispLine(["M", o, r, "L", a, l], e || 1)
                        }), c.path
                    },
                    getLinearTickPositions: function(t, e, i) {
                        var s, n = r(Math.floor(e / t) * t);
                        i = r(Math.ceil(i / t) * t);
                        var o, a = [];
                        if (r(n + t) === n && (o = 20), this.single) return [e];
                        for (e = n; e <= i && (a.push(e), (e = r(e + t, o)) !== s);) s = e;
                        return a
                    },
                    getMinorTickInterval: function() {
                        var t = this.options;
                        return !0 === t.minorTicks ? k(t.minorTickInterval, "auto") : !1 === t.minorTicks ? null : t.minorTickInterval
                    },
                    getMinorTickPositions: function() {
                        var t = this,
                            e = t.options,
                            i = t.tickPositions,
                            s = t.minorTickInterval,
                            n = [],
                            o = t.pointRangePadding || 0,
                            r = t.min - o,
                            a = (o = t.max + o) - r;
                        if (a && a / s < t.len / 3)
                            if (t.isLog) this.paddedTicks.forEach(function(e, i, o) {
                                i && n.push.apply(n, t.getLogTickPositions(s, o[i - 1], o[i], !0))
                            });
                            else if (t.isDatetimeAxis && "auto" === this.getMinorTickInterval()) n = n.concat(t.getTimeTicks(t.normalizeTimeTickInterval(s), r, o, e.startOfWeek));
                        else
                            for (e = r + (i[0] - r) % s; e <= o && e !== n[0]; e += s) n.push(e);
                        return 0 !== n.length && t.trimTicks(n), n
                    },
                    adjustForMinRange: function() {
                        var t, e, i, o, r, a, h, c = this.options,
                            d = this.min,
                            p = this.max;
                        this.isXAxis && void 0 === this.minRange && !this.isLog && (l(c.min) || l(c.max) ? this.minRange = null : (this.series.forEach(function(t) {
                            for (a = t.xData, o = t.xIncrement ? 1 : a.length - 1; 0 < o; o--) r = a[o] - a[o - 1], (void 0 === i || r < i) && (i = r)
                        }), this.minRange = Math.min(5 * i, this.dataMax - this.dataMin))), p - d < this.minRange && (e = this.dataMax - this.dataMin >= this.minRange, t = [d - (t = ((h = this.minRange) - p + d) / 2), k(c.min, d - t)], e && (t[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin), p = [(d = s(t)) + h, k(c.max, d + h)], e && (p[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax), (p = n(p)) - d < h && (t[0] = p - h, t[1] = k(c.min, p - h), d = s(t))), this.min = d, this.max = p
                    },
                    getClosest: function() {
                        var t;
                        return this.categories ? t = 1 : this.series.forEach(function(e) {
                            var i = e.closestPointRange,
                                s = e.visible || !e.chart.options.chart.ignoreHiddenSeries;
                            !e.noSharedTooltip && l(i) && s && (t = l(t) ? Math.min(t, i) : i)
                        }), t
                    },
                    nameToX: function(t) {
                        var e, i = g(this.categories),
                            s = i ? this.categories : this.names,
                            n = t.options.x;
                        return t.series.requireSorting = !1, l(n) || (n = !1 === this.options.uniqueNames ? t.series.autoIncrement() : i ? s.indexOf(t.name) : k(s.keys[t.name], -1)), -1 === n ? i || (e = s.length) : e = n, void 0 !== e && (this.names[e] = t.name, this.names.keys[t.name] = e), e
                    },
                    updateNames: function() {
                        var t = this,
                            e = this.names;
                        0 < e.length && (Object.keys(e.keys).forEach(function(t) {
                            delete e.keys[t]
                        }), e.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function(e) {
                            e.xIncrement = null, e.points && !e.isDirtyData || (t.max = Math.max(t.max, e.xData.length - 1), e.processData(), e.generatePoints()), e.data.forEach(function(i, s) {
                                var n;
                                i && i.options && void 0 !== i.name && (void 0 !== (n = t.nameToX(i)) && n !== i.x && (i.x = n, e.xData[s] = n))
                            })
                        }))
                    },
                    setAxisTranslation: function(t) {
                        var e, i = this,
                            s = i.max - i.min,
                            n = i.axisPointRange || 0,
                            o = 0,
                            r = 0,
                            a = i.linkedParent,
                            l = !!i.categories,
                            h = i.transA,
                            c = i.isXAxis;
                        (c || l || n) && (e = i.getClosest(), a ? (o = a.minPointOffset, r = a.pointRangePadding) : i.series.forEach(function(t) {
                            var s = l ? 1 : c ? k(t.options.pointRange, e, 0) : i.axisPointRange || 0,
                                a = t.options.pointPlacement;
                            n = Math.max(n, s), i.single && !l || (t = M.xrange && t instanceof M.xrange ? !c : c, o = Math.max(o, t && v(a) ? 0 : s / 2), r = Math.max(r, t && "on" === a ? 0 : s))
                        }), a = i.ordinalSlope && e ? i.ordinalSlope / e : 1, i.minPointOffset = o *= a, i.pointRangePadding = r *= a, i.pointRange = Math.min(n, s), c && (i.closestPointRange = e)), t && (i.oldTransA = h), i.translationSlope = i.transA = h = i.staticScale || i.len / (s + r || 1), i.transB = i.horiz ? i.left : i.bottom, i.minPixelPadding = h * o, p(this, "afterSetAxisTranslation")
                    },
                    minFromRange: function() {
                        return this.max - this.range
                    },
                    setTickInterval: function(e) {
                        var i, s, n, o, a = this,
                            h = a.chart,
                            c = a.options,
                            d = a.isLog,
                            u = a.isDatetimeAxis,
                            g = a.isXAxis,
                            v = a.isLinked,
                            x = c.maxPadding,
                            b = c.minPadding,
                            w = c.tickInterval,
                            M = c.tickPixelInterval,
                            S = a.categories,
                            C = m(a.threshold) ? a.threshold : null,
                            T = a.softThreshold;
                        u || S || v || this.getTickAmount(), n = k(a.userMin, c.min), o = k(a.userMax, c.max), v ? (a.linkedParent = h[a.coll][c.linkedTo], i = a.linkedParent.getExtremes(), a.min = k(i.min, i.dataMin), a.max = k(i.max, i.dataMax), c.type !== a.linkedParent.options.type && t.error(11, 1, h)) : (!T && l(C) && (a.dataMin >= C ? (i = C, b = 0) : a.dataMax <= C && (s = C, x = 0)), a.min = k(n, i, a.dataMin), a.max = k(o, s, a.dataMax)), d && (a.positiveValuesOnly && !e && 0 >= Math.min(a.min, k(a.dataMin, a.min)) && t.error(10, 1, h), a.min = r(a.log2lin(a.min), 15), a.max = r(a.log2lin(a.max), 15)), a.range && l(a.max) && (a.userMin = a.min = n = Math.max(a.dataMin, a.minFromRange()), a.userMax = o = a.max, a.range = null), p(a, "foundExtremes"), a.beforePadding && a.beforePadding(), a.adjustForMinRange(), !(S || a.axisPointRange || a.usePercentage || v) && l(a.min) && l(a.max) && (h = a.max - a.min) && (!l(n) && b && (a.min -= h * b), !l(o) && x && (a.max += h * x)), m(c.softMin) && !m(a.userMin) && c.softMin < a.min && (a.min = n = c.softMin), m(c.softMax) && !m(a.userMax) && c.softMax > a.max && (a.max = o = c.softMax), m(c.floor) && (a.min = Math.min(Math.max(a.min, c.floor), Number.MAX_VALUE)), m(c.ceiling) && (a.max = Math.max(Math.min(a.max, c.ceiling), k(a.userMax, -Number.MAX_VALUE))), T && l(a.dataMin) && (C = C || 0, !l(n) && a.min < C && a.dataMin >= C ? a.min = a.options.minRange ? Math.min(C, a.max - a.minRange) : C : !l(o) && a.max > C && a.dataMax <= C && (a.max = a.options.minRange ? Math.max(C, a.min + a.minRange) : C)), a.tickInterval = a.min === a.max || void 0 === a.min || void 0 === a.max ? 1 : v && !w && M === a.linkedParent.options.tickPixelInterval ? w = a.linkedParent.tickInterval : k(w, this.tickAmount ? (a.max - a.min) / Math.max(this.tickAmount - 1, 1) : void 0, S ? 1 : (a.max - a.min) * M / Math.max(a.len, M)), g && !e && a.series.forEach(function(t) {
                            t.processData(a.min !== a.oldMin || a.max !== a.oldMax)
                        }), a.setAxisTranslation(!0), a.beforeSetTickPositions && a.beforeSetTickPositions(), a.postProcessTickInterval && (a.tickInterval = a.postProcessTickInterval(a.tickInterval)), a.pointRange && !w && (a.tickInterval = Math.max(a.pointRange, a.tickInterval)), e = k(c.minTickInterval, a.isDatetimeAxis && a.closestPointRange), !w && a.tickInterval < e && (a.tickInterval = e), u || d || w || (a.tickInterval = y(a.tickInterval, null, f(a.tickInterval), k(c.allowDecimals, !(.5 < a.tickInterval && 5 > a.tickInterval && 1e3 < a.max && 9999 > a.max)), !!this.tickAmount)), this.tickAmount || (a.tickInterval = a.unsquish()), this.setTickPositions()
                    },
                    setTickPositions: function() {
                        var e, i = this.options,
                            s = i.tickPositions;
                        e = this.getMinorTickInterval();
                        var n = i.tickPositioner,
                            o = i.startOnTick,
                            r = i.endOnTick;
                        this.tickmarkOffset = this.categories && "between" === i.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0, this.minorTickInterval = "auto" === e && this.tickInterval ? this.tickInterval / 5 : e, this.single = this.min === this.max && l(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== i.allowDecimals), this.tickPositions = e = s && s.slice(), !e && (!this.ordinalPositions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200) ? (e = [this.min, this.max], t.error(19, !1, this.chart)) : e = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, i.units), this.min, this.max, i.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), e.length > this.len && ((e = [e[0], e.pop()])[0] === e[1] && (e.length = 1)), this.tickPositions = e, n && (n = n.apply(this, [this.min, this.max]))) && (this.tickPositions = e = n), this.paddedTicks = e.slice(0), this.trimTicks(e, o, r), this.isLinked || (this.single && 2 > e.length && !this.categories && (this.min -= .5, this.max += .5), s || n || this.adjustTickAmount()), p(this, "afterSetTickPositions")
                    },
                    trimTicks: function(t, e, i) {
                        var s = t[0],
                            n = t[t.length - 1],
                            o = this.minPointOffset || 0;
                        if (p(this, "trimTicks"), !this.isLinked) {
                            if (e && -1 / 0 !== s) this.min = s;
                            else
                                for (; this.min - o > t[0];) t.shift();
                            if (i) this.max = n;
                            else
                                for (; this.max + o < t[t.length - 1];) t.pop();
                            0 === t.length && l(s) && !this.options.tickPositions && t.push((n + s) / 2)
                        }
                    },
                    alignToOthers: function() {
                        var t, e = {},
                            i = this.options;
                        return !1 === this.chart.options.chart.alignTicks || !1 === i.alignTicks || !1 === i.startOnTick || !1 === i.endOnTick || this.isLog || this.chart[this.coll].forEach(function(i) {
                            var s = i.options;
                            s = [i.horiz ? s.left : s.top, s.width, s.height, s.pane].join();
                            i.series.length && (e[s] ? t = !0 : e[s] = 1)
                        }), t
                    },
                    getTickAmount: function() {
                        var t = this.options,
                            e = t.tickAmount,
                            i = t.tickPixelInterval;
                        !l(t.tickInterval) && this.len < i && !this.isRadial && !this.isLog && t.startOnTick && t.endOnTick && (e = 2), !e && this.alignToOthers() && (e = Math.ceil(this.len / i) + 1), 4 > e && (this.finalTickAmt = e, e = 5), this.tickAmount = e
                    },
                    adjustTickAmount: function() {
                        var t, e = this.options,
                            i = this.tickInterval,
                            s = this.tickPositions,
                            n = this.tickAmount,
                            o = this.finalTickAmt,
                            a = s && s.length,
                            h = k(this.threshold, this.softThreshold ? 0 : null);
                        if (this.hasData()) {
                            if (a < n) {
                                for (t = this.min; s.length < n;) s.length % 2 || t === h ? s.push(r(s[s.length - 1] + i)) : s.unshift(r(s[0] - i));
                                this.transA *= (a - 1) / (n - 1), this.min = e.startOnTick ? s[0] : Math.min(this.min, s[0]), this.max = e.endOnTick ? s[s.length - 1] : Math.max(this.max, s[s.length - 1])
                            } else a > n && (this.tickInterval *= 2, this.setTickPositions());
                            if (l(o)) {
                                for (i = e = s.length; i--;)(3 === o && 1 == i % 2 || 2 >= o && 0 < i && i < e - 1) && s.splice(i, 1);
                                this.finalTickAmt = void 0
                            }
                        }
                    },
                    setScale: function() {
                        var t, e = this.series.some(function(t) {
                            return t.isDirtyData || t.isDirty || t.xAxis.isDirty
                        });
                        this.oldMin = this.min, this.oldMax = this.max, this.oldAxisLength = this.len, this.setAxisSize(), (t = this.len !== this.oldAxisLength) || e || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = t || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks(), p(this, "afterSetScale")
                    },
                    setExtremes: function(t, e, i, s, n) {
                        var o = this,
                            r = o.chart;
                        i = k(i, !0), o.series.forEach(function(t) {
                            delete t.kdTree
                        }), n = d(n, {
                            min: t,
                            max: e
                        }), p(o, "setExtremes", n, function() {
                            o.userMin = t, o.userMax = e, o.eventArgs = n, i && r.redraw(s)
                        })
                    },
                    zoom: function(t, e) {
                        var i = this.dataMin,
                            s = this.dataMax,
                            n = this.options,
                            o = Math.min(i, k(n.min, i)),
                            r = Math.max(s, k(n.max, s));
                        return p(this, "zoom", t = {
                            newMin: t,
                            newMax: e
                        }, function(t) {
                            var e = t.newMin,
                                n = t.newMax;
                            e === this.min && n === this.max || (this.allowZoomOutside || (l(i) && (e < o && (e = o), e > r && (e = r)), l(s) && (n < o && (n = o), n > r && (n = r))), this.displayBtn = void 0 !== e || void 0 !== n, this.setExtremes(e, n, !1, void 0, {
                                trigger: "zoom"
                            })), t.zoomed = !0
                        }), t.zoomed
                    },
                    setAxisSize: function() {
                        var e = this.chart,
                            i = (a = this.options).offsets || [0, 0, 0, 0],
                            s = this.horiz,
                            n = this.width = Math.round(t.relativeLength(k(a.width, e.plotWidth - i[3] + i[1]), e.plotWidth)),
                            o = this.height = Math.round(t.relativeLength(k(a.height, e.plotHeight - i[0] + i[2]), e.plotHeight)),
                            r = this.top = Math.round(t.relativeLength(k(a.top, e.plotTop + i[0]), e.plotHeight, e.plotTop)),
                            a = this.left = Math.round(t.relativeLength(k(a.left, e.plotLeft + i[3]), e.plotWidth, e.plotLeft));
                        this.bottom = e.chartHeight - o - r, this.right = e.chartWidth - n - a, this.len = Math.max(s ? n : o, 0), this.pos = s ? a : r
                    },
                    getExtremes: function() {
                        var t = this.isLog;
                        return {
                            min: t ? r(this.lin2log(this.min)) : this.min,
                            max: t ? r(this.lin2log(this.max)) : this.max,
                            dataMin: this.dataMin,
                            dataMax: this.dataMax,
                            userMin: this.userMin,
                            userMax: this.userMax
                        }
                    },
                    getThreshold: function(t) {
                        var e = (i = this.isLog) ? this.lin2log(this.min) : this.min,
                            i = i ? this.lin2log(this.max) : this.max;
                        return null === t || -1 / 0 === t ? t = e : 1 / 0 === t ? t = i : e > t ? t = e : i < t && (t = i), this.translate(t, 0, 1, 0, 1)
                    },
                    autoLabelAlign: function(t) {
                        var e = (k(t, 0) - 90 * this.side + 720) % 360;
                        return p(this, "autoLabelAlign", t = {
                            align: "center"
                        }, function(t) {
                            15 < e && 165 > e ? t.align = "right" : 195 < e && 345 > e && (t.align = "left")
                        }), t.align
                    },
                    tickSize: function(t) {
                        var e, i = this.options,
                            s = i[t + "Length"],
                            n = k(i[t + "Width"], "tick" === t && this.isXAxis && !this.categories ? 1 : 0);
                        return n && s && ("inside" === i[t + "Position"] && (s = -s), e = [s, n]), p(this, "afterTickSize", t = {
                            tickSize: e
                        }), t.tickSize
                    },
                    labelMetrics: function() {
                        var t = this.tickPositions && this.tickPositions[0] || 0;
                        return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[t] && this.ticks[t].label)
                    },
                    unsquish: function() {
                        var t, e, i, s = this.options.labels,
                            n = this.horiz,
                            o = this.tickInterval,
                            a = o,
                            c = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / o),
                            d = s.rotation,
                            p = this.labelMetrics(),
                            u = Number.MAX_VALUE,
                            f = this.max - this.min,
                            g = function(t) {
                                var e;
                                return (e = 1 < (e = t / (c || 1)) ? Math.ceil(e) : 1) * o > f && 1 / 0 !== t && 1 / 0 !== c && (e = Math.ceil(f / o)), r(e * o)
                            };
                        return n ? (i = !s.staggerLines && !s.step && (l(d) ? [d] : c < k(s.autoRotationLimit, 80) && s.autoRotation)) && i.forEach(function(i) {
                            var s;
                            (i === d || i && -90 <= i && 90 >= i) && ((s = (e = g(Math.abs(p.h / Math.sin(h * i)))) + Math.abs(i / 360)) < u && (u = s, t = i, a = e))
                        }) : s.step || (a = g(p.h)), this.autoRotation = i, this.labelRotation = k(t, d), a
                    },
                    getSlotWidth: function(t) {
                        var e = this.chart,
                            i = this.horiz,
                            s = this.options.labels,
                            n = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
                            o = e.margin[3];
                        return t && t.slotWidth || i && 2 > (s.step || 0) && !s.rotation && (this.staggerLines || 1) * this.len / n || !i && (s.style && parseInt(s.style.width, 10) || o && o - e.spacing[3] || .33 * e.chartWidth)
                    },
                    renderUnsquish: function() {
                        var t, e, i, s = this.chart,
                            n = s.renderer,
                            o = this.tickPositions,
                            r = this.ticks,
                            a = this.options.labels,
                            l = a && a.style || {},
                            h = this.horiz,
                            c = this.getSlotWidth(),
                            d = Math.max(1, Math.round(c - 2 * (a.padding || 5))),
                            p = {},
                            u = this.labelMetrics(),
                            f = a.style && a.style.textOverflow,
                            g = 0;
                        if (v(a.rotation) || (p.rotation = a.rotation || 0), o.forEach(function(t) {
                                (t = r[t]) && t.label && t.label.textPxLength > g && (g = t.label.textPxLength)
                            }), this.maxLabelLength = g, this.autoRotation) g > d && g > u.h ? p.rotation = this.labelRotation : this.labelRotation = 0;
                        else if (c && (t = d, !f))
                            for (e = "clip", d = o.length; !h && d--;) i = o[d], (i = r[i].label) && (i.styles && "ellipsis" === i.styles.textOverflow ? i.css({
                                textOverflow: "clip"
                            }) : i.textPxLength > c && i.css({
                                width: c + "px"
                            }), i.getBBox().height > this.len / o.length - (u.h - u.f) && (i.specificTextOverflow = "ellipsis"));
                        p.rotation && (t = g > .5 * s.chartHeight ? .33 * s.chartHeight : g, f || (e = "ellipsis")), (this.labelAlign = a.align || this.autoLabelAlign(this.labelRotation)) && (p.align = this.labelAlign), o.forEach(function(i) {
                            var s = (i = r[i]) && i.label,
                                n = l.width,
                                o = {};
                            s && (s.attr(p), i.shortenLabel ? i.shortenLabel() : t && !n && "nowrap" !== l.whiteSpace && (t < s.textPxLength || "SPAN" === s.element.tagName) ? (o.width = t, f || (o.textOverflow = s.specificTextOverflow || e), s.css(o)) : s.styles && s.styles.width && !o.width && !n && s.css({
                                width: null
                            }), delete s.specificTextOverflow, i.rotation = p.rotation)
                        }, this), this.tickRotCorr = n.rotCorr(u.b, this.labelRotation || 0, 0 !== this.side)
                    },
                    hasData: function() {
                        return this.series.some(function(t) {
                            return t.hasData()
                        }) || this.options.showEmpty && l(this.min) && l(this.max)
                    },
                    addTitle: function(t) {
                        var e, i = this.chart.renderer,
                            s = this.horiz,
                            n = this.opposite,
                            o = this.options.title,
                            r = this.chart.styledMode;
                        this.axisTitle || ((e = o.textAlign) || (e = (s ? {
                            low: "left",
                            middle: "center",
                            high: "right"
                        } : {
                            low: n ? "right" : "left",
                            middle: "center",
                            high: n ? "left" : "right"
                        })[o.align]), this.axisTitle = i.text(o.text, 0, 0, o.useHTML).attr({
                            zIndex: 7,
                            rotation: o.rotation || 0,
                            align: e
                        }).addClass("highcharts-axis-title"), r || this.axisTitle.css(x(o.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0), r || o.style.width || this.isRadial || this.axisTitle.css({
                            width: this.len
                        }), this.axisTitle[t ? "show" : "hide"](!0)
                    },
                    generateTick: function(t) {
                        var e = this.ticks;
                        e[t] ? e[t].addLabel() : e[t] = new T(this, t)
                    },
                    getOffset: function() {
                        var t, e, i, s = this,
                            n = (y = s.chart).renderer,
                            o = s.options,
                            r = s.tickPositions,
                            a = s.ticks,
                            h = s.horiz,
                            c = s.side,
                            d = y.inverted && !s.isZAxis ? [1, 0, 3, 2][c] : c,
                            u = 0,
                            f = 0,
                            g = o.title,
                            m = o.labels,
                            v = 0,
                            x = y.axisOffset,
                            y = y.clipOffset,
                            w = [-1, 1, 1, -1][c],
                            M = o.className,
                            S = s.axisParent;
                        t = s.hasData(), s.showAxis = e = t || k(o.showEmpty, !0), s.staggerLines = s.horiz && m.staggerLines, s.axisGroup || (s.gridGroup = n.g("grid").attr({
                            zIndex: o.gridZIndex || 1
                        }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (M || "")).add(S), s.axisGroup = n.g("axis").attr({
                            zIndex: o.zIndex || 2
                        }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (M || "")).add(S), s.labelGroup = n.g("axis-labels").attr({
                            zIndex: m.zIndex || 7
                        }).addClass("highcharts-" + s.coll.toLowerCase() + "-labels " + (M || "")).add(S)), t || s.isLinked ? (r.forEach(function(t, e) {
                            s.generateTick(t, e)
                        }), s.renderUnsquish(), s.reserveSpaceDefault = 0 === c || 2 === c || {
                            1: "left",
                            3: "right"
                        }[c] === s.labelAlign, k(m.reserveSpace, "center" === s.labelAlign || null, s.reserveSpaceDefault) && r.forEach(function(t) {
                            v = Math.max(a[t].getLabelSize(), v)
                        }), s.staggerLines && (v *= s.staggerLines), s.labelOffset = v * (s.opposite ? -1 : 1)) : b(a, function(t, e) {
                            t.destroy(), delete a[e]
                        }), g && g.text && !1 !== g.enabled && (s.addTitle(e), e && !1 !== g.reserveSpace && (s.titleOffset = u = s.axisTitle.getBBox()[h ? "height" : "width"], i = g.offset, f = l(i) ? 0 : k(g.margin, h ? 5 : 10))), s.renderLine(), s.offset = w * k(o.offset, x[c] ? x[c] + (o.margin || 0) : 0), s.tickRotCorr = s.tickRotCorr || {
                            x: 0,
                            y: 0
                        }, n = 0 === c ? -s.labelMetrics().h : 2 === c ? s.tickRotCorr.y : 0, f = Math.abs(v) + f, v && (f = f - n + w * (h ? k(m.y, s.tickRotCorr.y + 8 * w) : m.x)), s.axisTitleMargin = k(i, f), s.getMaxLabelDimensions && (s.maxLabelDimensions = s.getMaxLabelDimensions(a, r)), h = this.tickSize("tick"), x[c] = Math.max(x[c], s.axisTitleMargin + u + w * s.offset, f, r && r.length && h ? h[0] + w * s.offset : 0), o = o.offset ? 0 : 2 * Math.floor(s.axisLine.strokeWidth() / 2), y[d] = Math.max(y[d], o), p(this, "afterGetOffset")
                    },
                    getLinePath: function(t) {
                        var e = this.chart,
                            i = this.opposite,
                            s = this.offset,
                            n = this.horiz,
                            o = this.left + (i ? this.width : 0) + s;
                        s = e.chartHeight - this.bottom - (i ? this.height : 0) + s;
                        return i && (t *= -1), e.renderer.crispLine(["M", n ? this.left : o, n ? s : this.top, "L", n ? e.chartWidth - this.right : o, n ? s : e.chartHeight - this.bottom], t)
                    },
                    renderLine: function() {
                        this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({
                            stroke: this.options.lineColor,
                            "stroke-width": this.options.lineWidth,
                            zIndex: 7
                        }))
                    },
                    getTitlePosition: function() {
                        var t = this.horiz,
                            e = this.left,
                            i = this.top,
                            s = this.len,
                            n = this.options.title,
                            o = t ? e : i,
                            r = this.opposite,
                            a = this.offset,
                            l = n.x || 0,
                            h = n.y || 0,
                            c = this.axisTitle,
                            d = this.chart.renderer.fontMetrics(n.style && n.style.fontSize, c);
                        c = Math.max(c.getBBox(null, 0).height - d.h - 1, 0), s = {
                            low: o + (t ? 0 : s),
                            middle: o + s / 2,
                            high: o + (t ? s : 0)
                        }[n.align], e = (t ? i + this.height : e) + (t ? 1 : -1) * (r ? -1 : 1) * this.axisTitleMargin + [-c, c, d.f, -c][this.side], t = {
                            x: t ? s + l : e + (r ? this.width : 0) + a + l,
                            y: t ? e + h - (r ? this.height : 0) + a : s + h
                        };
                        return p(this, "afterGetTitlePosition", {
                            titlePosition: t
                        }), t
                    },
                    renderMinorTick: function(t) {
                        var e = this.chart.hasRendered && m(this.oldMin),
                            i = this.minorTicks;
                        i[t] || (i[t] = new T(this, t, "minor")), e && i[t].isNew && i[t].render(null, !0), i[t].render(null, !1, 1)
                    },
                    renderTick: function(t, e) {
                        var i = this.isLinked,
                            s = this.ticks,
                            n = this.chart.hasRendered && m(this.oldMin);
                        (!i || t >= this.min && t <= this.max) && (s[t] || (s[t] = new T(this, t)), n && s[t].isNew && s[t].render(e, !0, -1), s[t].render(e))
                    },
                    render: function() {
                        var e, s, n = this,
                            o = n.chart,
                            r = n.options,
                            a = n.isLog,
                            l = n.isLinked,
                            h = n.tickPositions,
                            c = n.axisTitle,
                            d = n.ticks,
                            u = n.minorTicks,
                            f = n.alternateBands,
                            g = r.stackLabels,
                            v = r.alternateGridColor,
                            x = n.tickmarkOffset,
                            y = n.axisLine,
                            k = n.showAxis,
                            w = i(o.renderer.globalAnimation);
                        n.labelEdge.length = 0, n.overlap = !1, [d, u, f].forEach(function(t) {
                            b(t, function(t) {
                                t.isActive = !1
                            })
                        }), (n.hasData() || l) && (n.minorTickInterval && !n.categories && n.getMinorTickPositions().forEach(function(t) {
                            n.renderMinorTick(t)
                        }), h.length && (h.forEach(function(t, e) {
                            n.renderTick(t, e)
                        }), x && (0 === n.min || n.single) && (d[-1] || (d[-1] = new T(n, -1, null, !0)), d[-1].render(-1))), v && h.forEach(function(i, r) {
                            s = void 0 !== h[r + 1] ? h[r + 1] + x : n.max - x, 0 == r % 2 && i < n.max && s <= n.max + (o.polar ? -x : x) && (f[i] || (f[i] = new t.PlotLineOrBand(n)), e = i + x, f[i].options = {
                                from: a ? n.lin2log(e) : e,
                                to: a ? n.lin2log(s) : s,
                                color: v
                            }, f[i].render(), f[i].isActive = !0)
                        }), n._addedPlotLB || ((r.plotLines || []).concat(r.plotBands || []).forEach(function(t) {
                            n.addPlotBandOrLine(t)
                        }), n._addedPlotLB = !0)), [d, u, f].forEach(function(t) {
                            var e, i = [],
                                s = w.duration;
                            b(t, function(t, e) {
                                t.isActive || (t.render(e, !1, 0), t.isActive = !1, i.push(e))
                            }), C(function() {
                                for (e = i.length; e--;) t[i[e]] && !t[i[e]].isActive && (t[i[e]].destroy(), delete t[i[e]])
                            }, t !== f && o.hasRendered && s ? s : 0)
                        }), y && (y[y.isPlaced ? "animate" : "attr"]({
                            d: this.getLinePath(y.strokeWidth())
                        }), y.isPlaced = !0, y[k ? "show" : "hide"](!0)), c && k && (r = n.getTitlePosition(), m(r.y) ? (c[c.isNew ? "attr" : "animate"](r), c.isNew = !1) : (c.attr("y", -9999), c.isNew = !0)), g && g.enabled && n.renderStackTotals(), n.isDirty = !1, p(this, "afterRender")
                    },
                    redraw: function() {
                        this.visible && (this.render(), this.plotLinesAndBands.forEach(function(t) {
                            t.render()
                        })), this.series.forEach(function(t) {
                            t.isDirty = !0
                        })
                    },
                    keepProps: "extKey hcEvents names series userMax userMin".split(" "),
                    destroy: function(t) {
                        var e, i = this,
                            s = i.stacks,
                            n = i.plotLinesAndBands;
                        if (p(this, "destroy", {
                                keepEvents: t
                            }), t || w(i), b(s, function(t, e) {
                                c(t), s[e] = null
                            }), [i.ticks, i.minorTicks, i.alternateBands].forEach(function(t) {
                                c(t)
                            }), n)
                            for (t = n.length; t--;) n[t].destroy();
                        for (e in "stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(t) {
                                i[t] && (i[t] = i[t].destroy())
                            }), i.plotLinesAndBandsGroups) i.plotLinesAndBandsGroups[e] = i.plotLinesAndBandsGroups[e].destroy();
                        b(i, function(t, e) {
                            -1 === i.keepProps.indexOf(e) && delete i[e]
                        })
                    },
                    drawCrosshair: function(t, e) {
                        var i, s, n = this.crosshair,
                            r = k(n.snap, !0),
                            a = this.cross;
                        if (p(this, "drawCrosshair", {
                                e: t,
                                point: e
                            }), t || (t = this.cross && this.cross.e), this.crosshair && !1 !== (l(e) || !r)) {
                            if (r ? l(e) && (s = k(e.crosshairPos, this.isXAxis ? e.plotX : this.len - e.plotY)) : s = t && (this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos), l(s) && (i = this.getPlotLinePath(e && (this.isXAxis ? e.x : k(e.stackY, e.y)), null, null, null, s) || null), !l(i)) return void this.hideCrosshair();
                            r = this.categories && !this.isRadial, a || (this.cross = a = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (r ? "category " : "thin ") + n.className).attr({
                                zIndex: k(n.zIndex, 2)
                            }).add(), this.chart.styledMode || (a.attr({
                                stroke: n.color || (r ? o("#ccd6eb").setOpacity(.25).get() : "#cccccc"),
                                "stroke-width": k(n.width, 1)
                            }).css({
                                "pointer-events": "none"
                            }), n.dashStyle && a.attr({
                                dashstyle: n.dashStyle
                            }))), a.show().attr({
                                d: i
                            }), r && !n.width && a.attr({
                                "stroke-width": this.transA
                            }), this.cross.e = t
                        } else this.hideCrosshair();
                        p(this, "afterDrawCrosshair", {
                            e: t,
                            point: e
                        })
                    },
                    hideCrosshair: function() {
                        this.cross && this.cross.hide(), p(this, "afterHideCrosshair")
                    }
                }), t.Axis = A
            }), e(i, "parts/DateTimeAxis.js", [i["parts/Globals.js"]], function(t) {
                var e = t.Axis,
                    i = t.getMagnitude,
                    s = t.normalizeTickInterval,
                    n = t.timeUnits;
                e.prototype.getTimeTicks = function() {
                    return this.chart.time.getTimeTicks.apply(this.chart.time, arguments)
                }, e.prototype.normalizeTimeTickInterval = function(t, e) {
                    var o = e || [
                        ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                        ["second", [1, 2, 5, 10, 15, 30]],
                        ["minute", [1, 2, 5, 10, 15, 30]],
                        ["hour", [1, 2, 3, 4, 6, 8, 12]],
                        ["day", [1, 2]],
                        ["week", [1, 2]],
                        ["month", [1, 2, 3, 4, 6]],
                        ["year", null]
                    ];
                    e = o[o.length - 1];
                    var r, a = n[e[0]],
                        l = e[1];
                    for (r = 0; r < o.length && (e = o[r], a = n[e[0]], l = e[1], !(o[r + 1] && t <= (a * l[l.length - 1] + n[o[r + 1][0]]) / 2)); r++);
                    return a === n.year && t < 5 * a && (l = [1, 2, 5]), {
                        unitRange: a,
                        count: t = s(t / a, l, "year" === e[0] ? Math.max(i(t / a), 1) : 1),
                        unitName: e[0]
                    }
                }
            }), e(i, "parts/LogarithmicAxis.js", [i["parts/Globals.js"]], function(t) {
                var e = t.Axis,
                    i = t.getMagnitude,
                    s = t.normalizeTickInterval,
                    n = t.pick;
                e.prototype.getLogTickPositions = function(t, e, o, r) {
                    var a = this.options,
                        l = this.len,
                        h = [];
                    if (r || (this._minorAutoInterval = null), .5 <= t) t = Math.round(t), h = this.getLinearTickPositions(t, e, o);
                    else if (.08 <= t) {
                        var c, d, p, u, f;
                        for (l = Math.floor(e), a = .3 < t ? [1, 2, 4] : .15 < t ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; l < o + 1 && !f; l++)
                            for (d = a.length, c = 0; c < d && !f; c++)(p = this.log2lin(this.lin2log(l) * a[c])) > e && (!r || u <= o) && void 0 !== u && h.push(u), u > o && (f = !0), u = p
                    } else e = this.lin2log(e), o = this.lin2log(o), t = r ? this.getMinorTickInterval() : a.tickInterval, t = n("auto" === t ? null : t, this._minorAutoInterval, a.tickPixelInterval / (r ? 5 : 1) * (o - e) / ((r ? l / this.tickPositions.length : l) || 1)), t = s(t, null, i(t)), h = this.getLinearTickPositions(t, e, o).map(this.log2lin), r || (this._minorAutoInterval = t / 5);
                    return r || (this.tickInterval = t), h
                }, e.prototype.log2lin = function(t) {
                    return Math.log(t) / Math.LN10
                }, e.prototype.lin2log = function(t) {
                    return Math.pow(10, t)
                }
            }), e(i, "parts/PlotLineOrBand.js", [i["parts/Globals.js"], i["parts/Axis.js"]], function(t, e) {
                var i = t.arrayMax,
                    s = t.arrayMin,
                    n = t.defined,
                    o = t.destroyObjectProperties,
                    r = t.erase,
                    a = t.merge,
                    l = t.pick;
                t.PlotLineOrBand = function(t, e) {
                    this.axis = t, e && (this.options = e, this.id = e.id)
                }, t.PlotLineOrBand.prototype = {
                    render: function() {
                        t.fireEvent(this, "render");
                        var e = this,
                            i = e.axis,
                            s = i.horiz,
                            o = e.options,
                            r = o.label,
                            h = e.label,
                            c = o.to,
                            d = o.from,
                            p = o.value,
                            u = n(d) && n(c),
                            f = n(p),
                            g = e.svgElem,
                            m = !g,
                            v = [],
                            x = o.color,
                            y = l(o.zIndex, 0),
                            b = o.events,
                            k = (v = {
                                class: "highcharts-plot-" + (u ? "band " : "line ") + (o.className || "")
                            }, {}),
                            w = i.chart.renderer,
                            M = u ? "bands" : "lines";
                        if (i.isLog && (d = i.log2lin(d), c = i.log2lin(c), p = i.log2lin(p)), i.chart.styledMode || (f ? (v.stroke = x, v["stroke-width"] = o.width, o.dashStyle && (v.dashstyle = o.dashStyle)) : u && (x && (v.fill = x), o.borderWidth && (v.stroke = o.borderColor, v["stroke-width"] = o.borderWidth))), k.zIndex = y, M += "-" + y, (x = i.plotLinesAndBandsGroups[M]) || (i.plotLinesAndBandsGroups[M] = x = w.g("plot-" + M).attr(k).add()), m && (e.svgElem = g = w.path().attr(v).add(x)), f) v = i.getPlotLinePath(p, g.strokeWidth());
                        else {
                            if (!u) return;
                            v = i.getPlotBandPath(d, c, o)
                        }
                        return (m || !g.d) && v && v.length ? (g.attr({
                            d: v
                        }), b && t.objectEach(b, function(t, i) {
                            g.on(i, function(t) {
                                b[i].apply(e, [t])
                            })
                        })) : g && (v ? (g.show(!0), g.animate({
                            d: v
                        })) : g.d && (g.hide(), h && (e.label = h = h.destroy()))), r && n(r.text) && v && v.length && 0 < i.width && 0 < i.height && !v.isFlat ? (r = a({
                            align: s && u && "center",
                            x: s ? !u && 4 : 10,
                            verticalAlign: !s && u && "middle",
                            y: s ? u ? 16 : 10 : u ? 6 : -4,
                            rotation: s && !u && 90
                        }, r), this.renderLabel(r, v, u, y)) : h && h.hide(), e
                    },
                    renderLabel: function(t, e, n, o) {
                        var r = this.label,
                            a = this.axis.chart.renderer;
                        r || ((r = {
                            align: t.textAlign || t.align,
                            rotation: t.rotation,
                            class: "highcharts-plot-" + (n ? "band" : "line") + "-label " + (t.className || "")
                        }).zIndex = o, this.label = r = a.text(t.text, 0, 0, t.useHTML).attr(r).add(), this.axis.chart.styledMode || r.css(t.style)), o = e.xBounds || [e[1], e[4], n ? e[6] : e[1]], e = e.yBounds || [e[2], e[5], n ? e[7] : e[2]], n = s(o), a = s(e), r.align(t, !1, {
                            x: n,
                            y: a,
                            width: i(o) - n,
                            height: i(e) - a
                        }), r.show(!0)
                    },
                    destroy: function() {
                        r(this.axis.plotLinesAndBands, this), delete this.axis, o(this)
                    }
                }, t.extend(e.prototype, {
                    getPlotBandPath: function(t, e) {
                        var i, s = this.getPlotLinePath(e, null, null, !0),
                            n = this.getPlotLinePath(t, null, null, !0),
                            o = [],
                            r = this.horiz,
                            a = 1;
                        if (t = t < this.min && e < this.min || t > this.max && e > this.max, n && s)
                            for (t && (i = n.toString() === s.toString(), a = 0), t = 0; t < n.length; t += 6) r && s[t + 1] === n[t + 1] ? (s[t + 1] += a, s[t + 4] += a) : r || s[t + 2] !== n[t + 2] || (s[t + 2] += a, s[t + 5] += a), o.push("M", n[t + 1], n[t + 2], "L", n[t + 4], n[t + 5], s[t + 4], s[t + 5], s[t + 1], s[t + 2], "z"), o.isFlat = i;
                        return o
                    },
                    addPlotBand: function(t) {
                        return this.addPlotBandOrLine(t, "plotBands")
                    },
                    addPlotLine: function(t) {
                        return this.addPlotBandOrLine(t, "plotLines")
                    },
                    addPlotBandOrLine: function(e, i) {
                        var s = new t.PlotLineOrBand(this, e).render(),
                            n = this.userOptions;
                        return s && (i && (n[i] = n[i] || [], n[i].push(e)), this.plotLinesAndBands.push(s)), s
                    },
                    removePlotBandOrLine: function(t) {
                        for (var e = this.plotLinesAndBands, i = this.options, s = this.userOptions, n = e.length; n--;) e[n].id === t && e[n].destroy();
                        [i.plotLines || [], s.plotLines || [], i.plotBands || [], s.plotBands || []].forEach(function(e) {
                            for (n = e.length; n--;) e[n].id === t && r(e, e[n])
                        })
                    },
                    removePlotBand: function(t) {
                        this.removePlotBandOrLine(t)
                    },
                    removePlotLine: function(t) {
                        this.removePlotBandOrLine(t)
                    }
                })
            }), e(i, "parts/Tooltip.js", [i["parts/Globals.js"]], function(t) {
                var e = t.doc,
                    i = t.extend,
                    s = t.format,
                    n = t.isNumber,
                    o = t.merge,
                    r = t.pick,
                    a = t.splat,
                    l = t.syncTimeout,
                    h = t.timeUnits;
                t.Tooltip = function() {
                    this.init.apply(this, arguments)
                }, t.Tooltip.prototype = {
                    init: function(t, e) {
                        this.chart = t, this.options = e, this.crosshairs = [], this.now = {
                            x: 0,
                            y: 0
                        }, this.isHidden = !0, this.split = e.split && !t.inverted, this.shared = e.shared || this.split, this.outside = e.outside && !this.split
                    },
                    cleanSplit: function(t) {
                        this.chart.series.forEach(function(e) {
                            var i = e && e.tt;
                            i && (!i.isActive || t ? e.tt = i.destroy() : i.isActive = !1)
                        })
                    },
                    applyFilter: function() {
                        var t = this.chart;
                        t.renderer.definition({
                            tagName: "filter",
                            id: "drop-shadow-" + t.index,
                            opacity: .5,
                            children: [{
                                tagName: "feGaussianBlur",
                                in: "SourceAlpha",
                                stdDeviation: 1
                            }, {
                                tagName: "feOffset",
                                dx: 1,
                                dy: 1
                            }, {
                                tagName: "feComponentTransfer",
                                children: [{
                                    tagName: "feFuncA",
                                    type: "linear",
                                    slope: .3
                                }]
                            }, {
                                tagName: "feMerge",
                                children: [{
                                    tagName: "feMergeNode"
                                }, {
                                    tagName: "feMergeNode",
                                    in: "SourceGraphic"
                                }]
                            }]
                        }), t.renderer.definition({
                            tagName: "style",
                            textContent: ".highcharts-tooltip-" + t.index + "{filter:url(#drop-shadow-" + t.index + ")}"
                        })
                    },
                    getLabel: function() {
                        var e, i, s = this,
                            n = this.chart.renderer,
                            o = this.chart.styledMode,
                            r = this.options;
                        return this.label || (this.outside && (this.container = e = t.doc.createElement("div"), e.className = "highcharts-tooltip-container", t.css(e, {
                            position: "absolute",
                            top: "1px",
                            pointerEvents: r.style && r.style.pointerEvents
                        }), t.doc.body.appendChild(e), this.renderer = n = new t.Renderer(e, 0, 0)), this.split ? this.label = n.g("tooltip") : (this.label = n.label("", 0, 0, r.shape || "callout", null, null, r.useHTML, null, "tooltip").attr({
                            padding: r.padding,
                            r: r.borderRadius
                        }), o || this.label.attr({
                            fill: r.backgroundColor,
                            "stroke-width": r.borderWidth
                        }).css(r.style).shadow(r.shadow)), o && (this.applyFilter(), this.label.addClass("highcharts-tooltip-" + this.chart.index)), this.outside && (i = {
                            x: this.label.xSetter,
                            y: this.label.ySetter
                        }, this.label.xSetter = function(t, n) {
                            i[n].call(this.label, s.distance), e.style.left = t + "px"
                        }, this.label.ySetter = function(t, n) {
                            i[n].call(this.label, s.distance), e.style.top = t + "px"
                        }), this.label.attr({
                            zIndex: 8
                        }).add()), this.label
                    },
                    update: function(t) {
                        this.destroy(), o(!0, this.chart.options.tooltip.userOptions, t), this.init(this.chart, o(!0, this.options, t))
                    },
                    destroy: function() {
                        this.label && (this.label = this.label.destroy()), this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy()), this.renderer && (this.renderer = this.renderer.destroy(), t.discardElement(this.container)), t.clearTimeout(this.hideTimer), t.clearTimeout(this.tooltipTimeout)
                    },
                    move: function(e, s, n, o) {
                        var r = this,
                            a = r.now,
                            l = !1 !== r.options.animation && !r.isHidden && (1 < Math.abs(e - a.x) || 1 < Math.abs(s - a.y)),
                            h = r.followPointer || 1 < r.len;
                        i(a, {
                            x: l ? (2 * a.x + e) / 3 : e,
                            y: l ? (a.y + s) / 2 : s,
                            anchorX: h ? void 0 : l ? (2 * a.anchorX + n) / 3 : n,
                            anchorY: h ? void 0 : l ? (a.anchorY + o) / 2 : o
                        }), r.getLabel().attr(a), l && (t.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                            r && r.move(e, s, n, o)
                        }, 32))
                    },
                    hide: function(e) {
                        var i = this;
                        t.clearTimeout(this.hideTimer), e = r(e, this.options.hideDelay, 500), this.isHidden || (this.hideTimer = l(function() {
                            i.getLabel()[e ? "fadeOut" : "hide"](), i.isHidden = !0
                        }, e))
                    },
                    getAnchor: function(t, e) {
                        var i, s, n = this.chart,
                            o = n.pointer,
                            r = n.inverted,
                            l = n.plotTop,
                            h = n.plotLeft,
                            c = 0,
                            d = 0;
                        return t = a(t), this.followPointer && e ? (void 0 === e.chartX && (e = o.normalize(e)), t = [e.chartX - n.plotLeft, e.chartY - l]) : t[0].tooltipPos ? t = t[0].tooltipPos : (t.forEach(function(t) {
                            i = t.series.yAxis, s = t.series.xAxis, c += t.plotX + (!r && s ? s.left - h : 0), d += (t.plotLow ? (t.plotLow + t.plotHigh) / 2 : t.plotY) + (!r && i ? i.top - l : 0)
                        }), c /= t.length, d /= t.length, t = [r ? n.plotWidth - d : c, this.shared && !r && 1 < t.length && e ? e.chartY - l : r ? n.plotHeight - c : d]), t.map(Math.round)
                    },
                    getPosition: function(t, i, s) {
                        var n, o = this.chart,
                            a = this.distance,
                            l = {},
                            h = o.inverted && s.h || 0,
                            c = this.outside,
                            d = c ? e.documentElement.clientWidth - 2 * a : o.chartWidth,
                            p = c ? Math.max(e.body.scrollHeight, e.documentElement.scrollHeight, e.body.offsetHeight, e.documentElement.offsetHeight, e.documentElement.clientHeight) : o.chartHeight,
                            u = o.pointer.chartPosition,
                            f = ["y", p, i, (c ? u.top - a : 0) + s.plotY + o.plotTop, c ? 0 : o.plotTop, c ? p : o.plotTop + o.plotHeight],
                            g = ["x", d, t, (c ? u.left - a : 0) + s.plotX + o.plotLeft, c ? 0 : o.plotLeft, c ? d : o.plotLeft + o.plotWidth],
                            m = !this.followPointer && r(s.ttBelow, !o.inverted == !!s.negative),
                            v = function(t) {
                                var e = f;
                                f = g, g = e, n = t
                            },
                            x = function() {
                                !1 !== function(t, e, i, s, n, o) {
                                    var r = i < s - a,
                                        c = s + a + i < e,
                                        d = s - a - i;
                                    if (s += a, m && c) l[t] = s;
                                    else if (!m && r) l[t] = d;
                                    else if (r) l[t] = Math.min(o - i, 0 > d - h ? d : d - h);
                                    else {
                                        if (!c) return !1;
                                        l[t] = Math.max(n, s + h + i > e ? s : s + h)
                                    }
                                }.apply(0, f) ? !1 !== function(t, e, i, s) {
                                    var n;
                                    return s < a || s > e - a ? n = !1 : l[t] = s < i / 2 ? 1 : s > e - i / 2 ? e - i - 2 : s - i / 2, n
                                }.apply(0, g) || n || (v(!0), x()) : n ? l.x = l.y = 0 : (v(!0), x())
                            };
                        return (o.inverted || 1 < this.len) && v(), x(), l
                    },
                    defaultFormatter: function(t) {
                        var e, i = this.points || a(this);
                        return (e = (e = [t.tooltipFooterHeaderFormatter(i[0])]).concat(t.bodyFormatter(i))).push(t.tooltipFooterHeaderFormatter(i[0], !0)), e
                    },
                    refresh: function(e, i) {
                        var s, n, o, l = this.chart,
                            h = this.options,
                            c = e,
                            d = {},
                            p = [];
                        o = h.formatter || this.defaultFormatter;
                        d = this.shared;
                        var u = l.styledMode,
                            f = [];
                        h.enabled && (t.clearTimeout(this.hideTimer), this.followPointer = a(c)[0].series.tooltipOptions.followPointer, i = (n = this.getAnchor(c, i))[0], s = n[1], !d || c.series && c.series.noSharedTooltip ? d = c.getLabelConfig() : (f = l.pointer.getActiveSeries(c), l.series.forEach(function(t) {
                            (t.options.inactiveOtherPoints || -1 === f.indexOf(t)) && t.setState("inactive", !0)
                        }), c.forEach(function(t) {
                            t.setState("hover"), p.push(t.getLabelConfig())
                        }), (d = {
                            x: c[0].category,
                            y: c[0].y
                        }).points = p, c = c[0]), this.len = p.length, o = o.call(d, this), d = c.series, this.distance = r(d.tooltipOptions.distance, 16), !1 === o ? this.hide() : (l = this.getLabel(), this.isHidden && l.attr({
                            opacity: 1
                        }).show(), this.split ? this.renderSplit(o, a(e)) : (h.style.width && !u || l.css({
                            width: this.chart.spacingBox.width
                        }), l.attr({
                            text: o && o.join ? o.join("") : o
                        }), l.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + r(c.colorIndex, d.colorIndex)), u || l.attr({
                            stroke: h.borderColor || c.color || d.color || "#666666"
                        }), this.updatePosition({
                            plotX: i,
                            plotY: s,
                            negative: c.negative,
                            ttBelow: c.ttBelow,
                            h: n[2] || 0
                        })), this.isHidden = !1), t.fireEvent(this, "refresh"))
                    },
                    renderSplit: function(e, i) {
                        var s, n = this,
                            o = [],
                            a = this.chart,
                            l = a.renderer,
                            h = !0,
                            c = this.options,
                            d = 0,
                            p = this.getLabel(),
                            u = a.plotTop;
                        t.isString(e) && (e = [!1, e]), e.slice(0, i.length + 1).forEach(function(t, e) {
                            if (!1 !== t && "" !== t) {
                                var f = (e = i[e - 1] || {
                                        isHeader: !0,
                                        plotX: i[0].plotX,
                                        plotY: a.plotHeight
                                    }).series || n,
                                    g = f.tt,
                                    m = e.series || {},
                                    v = "highcharts-color-" + r(e.colorIndex, m.colorIndex, "none");
                                g || (g = {
                                    padding: c.padding,
                                    r: c.borderRadius
                                }, a.styledMode || (g.fill = c.backgroundColor, g.stroke = c.borderColor || e.color || m.color || "#333333", g["stroke-width"] = c.borderWidth), f.tt = g = l.label(null, null, null, (e.isHeader ? c.headerShape : c.shape) || "callout", null, null, c.useHTML).addClass("highcharts-tooltip-box " + v).attr(g).add(p)), g.isActive = !0, g.attr({
                                    text: t
                                }), a.styledMode || g.css(c.style).shadow(c.shadow), m = (t = g.getBBox()).width + g.strokeWidth(), e.isHeader ? (d = t.height, a.xAxis[0].opposite && (s = !0, u -= d), m = Math.max(0, Math.min(e.plotX + a.plotLeft - m / 2, a.chartWidth + (a.scrollablePixels ? a.scrollablePixels - a.marginRight : 0) - m))) : m = e.plotX + a.plotLeft - r(c.distance, 16) - m, 0 > m && (h = !1), t = (e.series && e.series.yAxis && e.series.yAxis.pos) + (e.plotY || 0), t -= u, e.isHeader && (t = s ? -d : a.plotHeight + d), o.push({
                                    target: t,
                                    rank: e.isHeader ? 1 : 0,
                                    size: f.tt.getBBox().height + 1,
                                    point: e,
                                    x: m,
                                    tt: g
                                })
                            }
                        }), this.cleanSplit(), c.positioner && o.forEach(function(t) {
                            var e = c.positioner.call(n, t.tt.getBBox().width, t.size, t.point);
                            t.x = e.x, t.align = 0, t.target = e.y, t.rank = r(e.rank, t.rank)
                        }), t.distribute(o, a.plotHeight + d), o.forEach(function(t) {
                            var e = t.point,
                                i = e.series;
                            t.tt.attr({
                                visibility: void 0 === t.pos ? "hidden" : "inherit",
                                x: h || e.isHeader || c.positioner ? t.x : e.plotX + a.plotLeft + n.distance,
                                y: t.pos + u,
                                anchorX: e.isHeader ? e.plotX + a.plotLeft : e.plotX + i.xAxis.pos,
                                anchorY: e.isHeader ? a.plotTop + a.plotHeight / 2 : e.plotY + i.yAxis.pos
                            })
                        })
                    },
                    updatePosition: function(t) {
                        var e, i = this.chart,
                            s = this.getLabel(),
                            n = (this.options.positioner || this.getPosition).call(this, s.width, s.height, t),
                            o = t.plotX + i.plotLeft;
                        t = t.plotY + i.plotTop, this.outside && (e = (this.options.borderWidth || 0) + 2 * this.distance, this.renderer.setSize(s.width + e, s.height + e, !1), o += i.pointer.chartPosition.left - n.x, t += i.pointer.chartPosition.top - n.y), this.move(Math.round(n.x), Math.round(n.y || 0), o, t)
                    },
                    getDateFormat: function(t, e, i, s) {
                        var n, o, r = this.chart.time,
                            a = r.dateFormat("%m-%d %H:%M:%S.%L", e),
                            l = {
                                millisecond: 15,
                                second: 12,
                                minute: 9,
                                hour: 6,
                                day: 3
                            },
                            c = "millisecond";
                        for (o in h) {
                            if (t === h.week && +r.dateFormat("%w", e) === i && "00:00:00.000" === a.substr(6)) {
                                o = "week";
                                break
                            }
                            if (h[o] > t) {
                                o = c;
                                break
                            }
                            if (l[o] && a.substr(l[o]) !== "01-01 00:00:00.000".substr(l[o])) break;
                            "week" !== o && (c = o)
                        }
                        return o && (n = r.resolveDTLFormat(s[o]).main), n
                    },
                    getXDateFormat: function(t, e, i) {
                        e = e.dateTimeLabelFormats;
                        var s = i && i.closestPointRange;
                        return (s ? this.getDateFormat(s, t.x, i.options.startOfWeek, e) : e.day) || e.year
                    },
                    tooltipFooterHeaderFormatter: function(e, i) {
                        var o = i ? "footer" : "header",
                            r = e.series,
                            a = r.tooltipOptions,
                            l = a.xDateFormat,
                            h = r.xAxis,
                            c = h && "datetime" === h.options.type && n(e.key),
                            d = a[o + "Format"];
                        return i = {
                            isFooter: i,
                            labelConfig: e
                        }, t.fireEvent(this, "headerFormatter", i, function(t) {
                            c && !l && (l = this.getXDateFormat(e, a, h)), c && l && (e.point && e.point.tooltipDateKeys || ["key"]).forEach(function(t) {
                                d = d.replace("{point." + t + "}", "{point." + t + ":" + l + "}")
                            }), r.chart.styledMode && (d = this.styledModeFormat(d)), t.text = s(d, {
                                point: e,
                                series: r
                            }, this.chart.time)
                        }), i.text
                    },
                    bodyFormatter: function(t) {
                        return t.map(function(t) {
                            var e = t.series.tooltipOptions;
                            return (e[(t.point.formatPrefix || "point") + "Formatter"] || t.point.tooltipFormatter).call(t.point, e[(t.point.formatPrefix || "point") + "Format"] || "")
                        })
                    },
                    styledModeFormat: function(t) {
                        return t.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"')
                    }
                }
            }), e(i, "parts/Pointer.js", [i["parts/Globals.js"]], function(t) {
                var e = t.addEvent,
                    i = t.attr,
                    s = t.charts,
                    n = t.color,
                    o = t.css,
                    r = t.defined,
                    a = t.extend,
                    l = t.find,
                    h = t.fireEvent,
                    c = t.isNumber,
                    d = t.isObject,
                    p = t.offset,
                    u = t.pick,
                    f = t.splat,
                    g = t.Tooltip;
                t.Pointer = function(t, e) {
                    this.init(t, e)
                }, t.Pointer.prototype = {
                    init: function(t, e) {
                        this.options = e, this.chart = t, this.runChartClick = e.chart.events && !!e.chart.events.click, this.pinchDown = [], this.lastValidTouch = {}, g && (t.tooltip = new g(t, e.tooltip), this.followTouchMove = u(e.tooltip.followTouchMove, !0)), this.setDOMEvents()
                    },
                    zoomOption: function(t) {
                        var e = (s = this.chart).options.chart,
                            i = e.zoomType || "",
                            s = s.inverted;
                        /touch/.test(t.type) && (i = u(e.pinchType, i)), this.zoomX = t = /x/.test(i), this.zoomY = i = /y/.test(i), this.zoomHor = t && !s || i && s, this.zoomVert = i && !s || t && s, this.hasZoom = t || i
                    },
                    normalize: function(t, e) {
                        var i;
                        return i = t.touches ? t.touches.length ? t.touches.item(0) : t.changedTouches[0] : t, e || (this.chartPosition = e = p(this.chart.container)), a(t, {
                            chartX: Math.round(i.pageX - e.left),
                            chartY: Math.round(i.pageY - e.top)
                        })
                    },
                    getCoordinates: function(t) {
                        var e = {
                            xAxis: [],
                            yAxis: []
                        };
                        return this.chart.axes.forEach(function(i) {
                            e[i.isXAxis ? "xAxis" : "yAxis"].push({
                                axis: i,
                                value: i.toValue(t[i.horiz ? "chartX" : "chartY"])
                            })
                        }), e
                    },
                    findNearestKDPoint: function(t, e, i) {
                        var s;
                        return t.forEach(function(t) {
                            var n = !(t.noSharedTooltip && e) && 0 > t.options.findNearestPointBy.indexOf("y");
                            if (t = t.searchPoint(i, n), (n = d(t, !0)) && !(n = !d(s, !0))) {
                                n = s.distX - t.distX;
                                var o = s.dist - t.dist,
                                    r = (t.series.group && t.series.group.zIndex) - (s.series.group && s.series.group.zIndex);
                                n = 0 < (0 !== n && e ? n : 0 !== o ? o : 0 !== r ? r : s.series.index > t.series.index ? -1 : 1)
                            }
                            n && (s = t)
                        }), s
                    },
                    getPointFromEvent: function(t) {
                        t = t.target;
                        for (var e; t && !e;) e = t.point, t = t.parentNode;
                        return e
                    },
                    getChartCoordinatesFromPoint: function(t, e) {
                        var i = (s = t.series).xAxis,
                            s = s.yAxis,
                            n = u(t.clientX, t.plotX),
                            o = t.shapeArgs;
                        return i && s ? e ? {
                            chartX: i.len + i.pos - n,
                            chartY: s.len + s.pos - t.plotY
                        } : {
                            chartX: n + i.pos,
                            chartY: t.plotY + s.pos
                        } : o && o.x && o.y ? {
                            chartX: o.x,
                            chartY: o.y
                        } : void 0
                    },
                    getHoverData: function(t, e, i, s, n, o) {
                        var r, a = [];
                        s = !(!s || !t);
                        var h = e && !e.stickyTracking ? [e] : i.filter(function(t) {
                            return t.visible && !(!n && t.directTouch) && u(t.options.enableMouseTracking, !0) && t.stickyTracking
                        });
                        return e = (r = s ? t : this.findNearestKDPoint(h, n, o)) && r.series, r && (n && !e.noSharedTooltip ? (h = i.filter(function(t) {
                            return t.visible && !(!n && t.directTouch) && u(t.options.enableMouseTracking, !0) && !t.noSharedTooltip
                        })).forEach(function(t) {
                            var e = l(t.points, function(t) {
                                return t.x === r.x && !t.isNull
                            });
                            d(e) && (t.chart.isBoosting && (e = t.getPoint(e)), a.push(e))
                        }) : a.push(r)), {
                            hoverPoint: r,
                            hoverSeries: e,
                            hoverPoints: a
                        }
                    },
                    runPointActions: function(i, n) {
                        var o, r = this.chart,
                            a = r.tooltip && r.tooltip.options.enabled ? r.tooltip : void 0,
                            l = !!a && a.shared,
                            h = (d = n || r.hoverPoint) && d.series || r.hoverSeries,
                            c = [],
                            d = (h = this.getHoverData(d, h, r.series, "touchmove" !== i.type && (!!n || h && h.directTouch && this.isDirectTouch), l, i)).hoverPoint;
                        if (o = h.hoverPoints, n = (h = h.hoverSeries) && h.tooltipOptions.followPointer, l = l && h && !h.noSharedTooltip, d && (d !== r.hoverPoint || a && a.isHidden)) {
                            if ((r.hoverPoints || []).forEach(function(t) {
                                    -1 === o.indexOf(t) && t.setState()
                                }), r.hoverSeries !== h && h.onMouseOver(), c = this.getActiveSeries(o), r.series.forEach(function(t) {
                                    (t.options.inactiveOtherPoints || -1 === c.indexOf(t)) && t.setState("inactive", !0)
                                }), (o || []).forEach(function(t) {
                                    t.setState("hover")
                                }), r.hoverPoint && r.hoverPoint.firePointEvent("mouseOut"), !d.series) return;
                            d.firePointEvent("mouseOver"), r.hoverPoints = o, r.hoverPoint = d, a && a.refresh(l ? o : d, i)
                        } else n && a && !a.isHidden && (d = a.getAnchor([{}], i), a.updatePosition({
                            plotX: d[0],
                            plotY: d[1]
                        }));
                        this.unDocMouseMove || (this.unDocMouseMove = e(r.container.ownerDocument, "mousemove", function(e) {
                            var i = s[t.hoverChartIndex];
                            i && i.pointer.onDocumentMouseMove(e)
                        })), r.axes.forEach(function(e) {
                            var s = u(e.crosshair.snap, !0),
                                n = s ? t.find(o, function(t) {
                                    return t.series[e.coll] === e
                                }) : void 0;
                            n || !s ? e.drawCrosshair(i, n) : e.hideCrosshair()
                        })
                    },
                    getActiveSeries: function(t) {
                        var e, i = [];
                        return (t || []).forEach(function(t) {
                            e = t.series, i.push(e), e.linkedParent && i.push(e.linkedParent), e.linkedSeries && (i = i.concat(e.linkedSeries)), e.navigatorSeries && i.push(e.navigatorSeries)
                        }), i
                    },
                    reset: function(t, e) {
                        var i = this.chart,
                            s = i.hoverSeries,
                            n = i.hoverPoint,
                            o = i.hoverPoints,
                            r = i.tooltip,
                            a = r && r.shared ? o : n;
                        t && a && f(a).forEach(function(e) {
                            e.series.isCartesian && void 0 === e.plotX && (t = !1)
                        }), t ? r && a && f(a).length && (r.refresh(a), r.shared && o ? o.forEach(function(t) {
                            t.setState(t.state, !0), t.series.isCartesian && (t.series.xAxis.crosshair && t.series.xAxis.drawCrosshair(null, t), t.series.yAxis.crosshair && t.series.yAxis.drawCrosshair(null, t))
                        }) : n && (n.setState(n.state, !0), i.axes.forEach(function(t) {
                            t.crosshair && t.drawCrosshair(null, n)
                        }))) : (n && n.onMouseOut(), o && o.forEach(function(t) {
                            t.setState()
                        }), s && s.onMouseOut(), r && r.hide(e), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), i.axes.forEach(function(t) {
                            t.hideCrosshair()
                        }), this.hoverX = i.hoverPoints = i.hoverPoint = null)
                    },
                    scaleGroups: function(t, e) {
                        var i, s = this.chart;
                        s.series.forEach(function(n) {
                            i = t || n.getPlotBox(), n.xAxis && n.xAxis.zoomEnabled && n.group && (n.group.attr(i), n.markerGroup && (n.markerGroup.attr(i), n.markerGroup.clip(e ? s.clipRect : null)), n.dataLabelsGroup && n.dataLabelsGroup.attr(i))
                        }), s.clipRect.attr(e || s.clipBox)
                    },
                    dragStart: function(t) {
                        var e = this.chart;
                        e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = this.mouseDownX = t.chartX, e.mouseDownY = this.mouseDownY = t.chartY
                    },
                    drag: function(t) {
                        var e, i = this.chart,
                            s = i.options.chart,
                            o = t.chartX,
                            r = t.chartY,
                            a = this.zoomHor,
                            l = this.zoomVert,
                            h = i.plotLeft,
                            c = i.plotTop,
                            d = i.plotWidth,
                            p = i.plotHeight,
                            u = this.selectionMarker,
                            f = this.mouseDownX,
                            g = this.mouseDownY,
                            m = s.panKey && t[s.panKey + "Key"];
                        u && u.touch || (o < h ? o = h : o > h + d && (o = h + d), r < c ? r = c : r > c + p && (r = c + p), this.hasDragged = Math.sqrt(Math.pow(f - o, 2) + Math.pow(g - r, 2)), 10 < this.hasDragged && (e = i.isInsidePlot(f - h, g - c), i.hasCartesianSeries && (this.zoomX || this.zoomY) && e && !m && !u && (this.selectionMarker = u = i.renderer.rect(h, c, a ? 1 : d, l ? 1 : p, 0).attr({
                            class: "highcharts-selection-marker",
                            zIndex: 7
                        }).add(), i.styledMode || u.attr({
                            fill: s.selectionMarkerFill || n("#335cad").setOpacity(.25).get()
                        })), u && a && (o -= f, u.attr({
                            width: Math.abs(o),
                            x: (0 < o ? 0 : o) + f
                        })), u && l && (o = r - g, u.attr({
                            height: Math.abs(o),
                            y: (0 < o ? 0 : o) + g
                        })), e && !u && s.panning && i.pan(t, s.panning)))
                    },
                    drop: function(t) {
                        var e = this,
                            i = this.chart,
                            s = this.hasPinched;
                        if (this.selectionMarker) {
                            var n, l = {
                                    originalEvent: t,
                                    xAxis: [],
                                    yAxis: []
                                },
                                d = this.selectionMarker,
                                p = d.attr ? d.attr("x") : d.x,
                                u = d.attr ? d.attr("y") : d.y,
                                f = d.attr ? d.attr("width") : d.width,
                                g = d.attr ? d.attr("height") : d.height;
                            (this.hasDragged || s) && (i.axes.forEach(function(i) {
                                if (i.zoomEnabled && r(i.min) && (s || e[{
                                        xAxis: "zoomX",
                                        yAxis: "zoomY"
                                    }[i.coll]])) {
                                    var o = i.horiz,
                                        a = "touchend" === t.type ? i.minPixelPadding : 0,
                                        h = i.toValue((o ? p : u) + a);
                                    o = i.toValue((o ? p + f : u + g) - a);
                                    l[i.coll].push({
                                        axis: i,
                                        min: Math.min(h, o),
                                        max: Math.max(h, o)
                                    }), n = !0
                                }
                            }), n && h(i, "selection", l, function(t) {
                                i.zoom(a(t, s ? {
                                    animation: !1
                                } : null))
                            })), c(i.index) && (this.selectionMarker = this.selectionMarker.destroy()), s && this.scaleGroups()
                        }
                        i && c(i.index) && (o(i.container, {
                            cursor: i._cursor
                        }), i.cancelClick = 10 < this.hasDragged, i.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
                    },
                    onContainerMouseDown: function(t) {
                        2 !== (t = this.normalize(t)).button && (this.zoomOption(t), t.preventDefault && t.preventDefault(), this.dragStart(t))
                    },
                    onDocumentMouseUp: function(e) {
                        s[t.hoverChartIndex] && s[t.hoverChartIndex].pointer.drop(e)
                    },
                    onDocumentMouseMove: function(t) {
                        var e = this.chart,
                            i = this.chartPosition;
                        t = this.normalize(t, i), !i || this.inClass(t.target, "highcharts-tracker") || e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) || this.reset()
                    },
                    onContainerMouseLeave: function(e) {
                        var i = s[t.hoverChartIndex];
                        i && (e.relatedTarget || e.toElement) && (i.pointer.reset(), i.pointer.chartPosition = null)
                    },
                    onContainerMouseMove: function(e) {
                        var i = this.chart;
                        r(t.hoverChartIndex) && s[t.hoverChartIndex] && s[t.hoverChartIndex].mouseIsDown || (t.hoverChartIndex = i.index), (e = this.normalize(e)).preventDefault || (e.returnValue = !1), "mousedown" === i.mouseIsDown && this.drag(e), !this.inClass(e.target, "highcharts-tracker") && !i.isInsidePlot(e.chartX - i.plotLeft, e.chartY - i.plotTop) || i.openMenu || this.runPointActions(e)
                    },
                    inClass: function(t, e) {
                        for (var s; t;) {
                            if (s = i(t, "class")) {
                                if (-1 !== s.indexOf(e)) return !0;
                                if (-1 !== s.indexOf("highcharts-container")) return !1
                            }
                            t = t.parentNode
                        }
                    },
                    onTrackerMouseOut: function(t) {
                        var e = this.chart.hoverSeries;
                        t = t.relatedTarget || t.toElement, this.isDirectTouch = !1, !e || !t || e.stickyTracking || this.inClass(t, "highcharts-tooltip") || this.inClass(t, "highcharts-series-" + e.index) && this.inClass(t, "highcharts-tracker") || e.onMouseOut()
                    },
                    onContainerClick: function(t) {
                        var e = this.chart,
                            i = e.hoverPoint,
                            s = e.plotLeft,
                            n = e.plotTop;
                        t = this.normalize(t), e.cancelClick || (i && this.inClass(t.target, "highcharts-tracker") ? (h(i.series, "click", a(t, {
                            point: i
                        })), e.hoverPoint && i.firePointEvent("click", t)) : (a(t, this.getCoordinates(t)), e.isInsidePlot(t.chartX - s, t.chartY - n) && h(e, "click", t)))
                    },
                    setDOMEvents: function() {
                        var i = this,
                            s = i.chart.container,
                            n = s.ownerDocument;
                        s.onmousedown = function(t) {
                            i.onContainerMouseDown(t)
                        }, s.onmousemove = function(t) {
                            i.onContainerMouseMove(t)
                        }, s.onclick = function(t) {
                            i.onContainerClick(t)
                        }, this.unbindContainerMouseLeave = e(s, "mouseleave", i.onContainerMouseLeave), t.unbindDocumentMouseUp || (t.unbindDocumentMouseUp = e(n, "mouseup", i.onDocumentMouseUp)), t.hasTouch && (s.ontouchstart = function(t) {
                            i.onContainerTouchStart(t)
                        }, s.ontouchmove = function(t) {
                            i.onContainerTouchMove(t)
                        }, t.unbindDocumentTouchEnd || (t.unbindDocumentTouchEnd = e(n, "touchend", i.onDocumentTouchEnd)))
                    },
                    destroy: function() {
                        var e = this;
                        e.unDocMouseMove && e.unDocMouseMove(), this.unbindContainerMouseLeave(), t.chartCount || (t.unbindDocumentMouseUp && (t.unbindDocumentMouseUp = t.unbindDocumentMouseUp()), t.unbindDocumentTouchEnd && (t.unbindDocumentTouchEnd = t.unbindDocumentTouchEnd())), clearInterval(e.tooltipTimeout), t.objectEach(e, function(t, i) {
                            e[i] = null
                        })
                    }
                }
            }), e(i, "parts/TouchPointer.js", [i["parts/Globals.js"]], function(t) {
                var e = t.charts,
                    i = t.extend,
                    s = t.noop,
                    n = t.pick;
                i(t.Pointer.prototype, {
                    pinchTranslate: function(t, e, i, s, n, o) {
                        this.zoomHor && this.pinchTranslateDirection(!0, t, e, i, s, n, o), this.zoomVert && this.pinchTranslateDirection(!1, t, e, i, s, n, o)
                    },
                    pinchTranslateDirection: function(t, e, i, s, n, o, r, a) {
                        var l, h, c, d = this.chart,
                            p = t ? "x" : "y",
                            u = t ? "X" : "Y",
                            f = "chart" + u,
                            g = t ? "width" : "height",
                            m = d["plot" + (t ? "Left" : "Top")],
                            v = a || 1,
                            x = d.inverted,
                            y = d.bounds[t ? "h" : "v"],
                            b = 1 === e.length,
                            k = e[0][f],
                            w = i[0][f],
                            M = !b && e[1][f],
                            S = !b && i[1][f];
                        (i = function() {
                            !b && 20 < Math.abs(k - M) && (v = a || Math.abs(w - S) / Math.abs(k - M)), h = (m - w) / v + k, l = d["plot" + (t ? "Width" : "Height")] / v
                        })(), (e = h) < y.min ? (e = y.min, c = !0) : e + l > y.max && (e = y.max - l, c = !0), c ? (w -= .8 * (w - r[p][0]), b || (S -= .8 * (S - r[p][1])), i()) : r[p] = [w, S], x || (o[p] = h - m, o[g] = l), o = x ? 1 / v : v, n[g] = l, n[p] = e, s[x ? t ? "scaleY" : "scaleX" : "scale" + u] = v, s["translate" + u] = o * m + (w - o * k)
                    },
                    pinch: function(t) {
                        var e = this,
                            o = e.chart,
                            r = e.pinchDown,
                            a = t.touches,
                            l = a.length,
                            h = e.lastValidTouch,
                            c = e.hasZoom,
                            d = e.selectionMarker,
                            p = {},
                            u = 1 === l && (e.inClass(t.target, "highcharts-tracker") && o.runTrackerClick || e.runChartClick),
                            f = {};
                        1 < l && (e.initiated = !0), c && e.initiated && !u && t.preventDefault(), [].map.call(a, function(t) {
                            return e.normalize(t)
                        }), "touchstart" === t.type ? ([].forEach.call(a, function(t, e) {
                            r[e] = {
                                chartX: t.chartX,
                                chartY: t.chartY
                            }
                        }), h.x = [r[0].chartX, r[1] && r[1].chartX], h.y = [r[0].chartY, r[1] && r[1].chartY], o.axes.forEach(function(t) {
                            if (t.zoomEnabled) {
                                var e = o.bounds[t.horiz ? "h" : "v"],
                                    i = t.minPixelPadding,
                                    s = t.toPixels(n(t.options.min, t.dataMin)),
                                    r = t.toPixels(n(t.options.max, t.dataMax)),
                                    a = Math.max(s, r);
                                e.min = Math.min(t.pos, Math.min(s, r) - i), e.max = Math.max(t.pos + t.len, a + i)
                            }
                        }), e.res = !0) : e.followTouchMove && 1 === l ? this.runPointActions(e.normalize(t)) : r.length && (d || (e.selectionMarker = d = i({
                            destroy: s,
                            touch: !0
                        }, o.plotBox)), e.pinchTranslate(r, a, p, d, f, h), e.hasPinched = c, e.scaleGroups(p, f), e.res && (e.res = !1, this.reset(!1, 0)))
                    },
                    touch: function(e, i) {
                        var s, o = this.chart;
                        o.index !== t.hoverChartIndex && this.onContainerMouseLeave({
                            relatedTarget: !0
                        }), t.hoverChartIndex = o.index, 1 === e.touches.length ? (e = this.normalize(e), o.isInsidePlot(e.chartX - o.plotLeft, e.chartY - o.plotTop) && !o.openMenu ? (i && this.runPointActions(e), "touchmove" === e.type && (s = !!(i = this.pinchDown)[0] && 4 <= Math.sqrt(Math.pow(i[0].chartX - e.chartX, 2) + Math.pow(i[0].chartY - e.chartY, 2))), n(s, !0) && this.pinch(e)) : i && this.reset()) : 2 === e.touches.length && this.pinch(e)
                    },
                    onContainerTouchStart: function(t) {
                        this.zoomOption(t), this.touch(t, !0)
                    },
                    onContainerTouchMove: function(t) {
                        this.touch(t)
                    },
                    onDocumentTouchEnd: function(i) {
                        e[t.hoverChartIndex] && e[t.hoverChartIndex].pointer.drop(i)
                    }
                })
            }), e(i, "parts/MSPointer.js", [i["parts/Globals.js"]], function(t) {
                var e = t.addEvent,
                    i = t.charts,
                    s = t.css,
                    n = t.doc,
                    o = t.extend,
                    r = t.noop,
                    a = t.Pointer,
                    l = t.removeEvent,
                    h = t.win,
                    c = t.wrap;
                if (!t.hasTouch && (h.PointerEvent || h.MSPointerEvent)) {
                    var d = {},
                        p = !!h.PointerEvent,
                        u = function(e, s, n, o) {
                            "touch" !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_TOUCH || !i[t.hoverChartIndex] || (o(e), (o = i[t.hoverChartIndex].pointer)[s]({
                                type: n,
                                target: e.currentTarget,
                                preventDefault: r,
                                touches: function() {
                                    var e = [];
                                    return e.item = function(t) {
                                        return this[t]
                                    }, t.objectEach(d, function(t) {
                                        e.push({
                                            pageX: t.pageX,
                                            pageY: t.pageY,
                                            target: t.target
                                        })
                                    }), e
                                }()
                            }))
                        };
                    o(a.prototype, {
                        onContainerPointerDown: function(t) {
                            u(t, "onContainerTouchStart", "touchstart", function(t) {
                                d[t.pointerId] = {
                                    pageX: t.pageX,
                                    pageY: t.pageY,
                                    target: t.currentTarget
                                }
                            })
                        },
                        onContainerPointerMove: function(t) {
                            u(t, "onContainerTouchMove", "touchmove", function(t) {
                                d[t.pointerId] = {
                                    pageX: t.pageX,
                                    pageY: t.pageY
                                }, d[t.pointerId].target || (d[t.pointerId].target = t.currentTarget)
                            })
                        },
                        onDocumentPointerUp: function(t) {
                            u(t, "onDocumentTouchEnd", "touchend", function(t) {
                                delete d[t.pointerId]
                            })
                        },
                        batchMSEvents: function(t) {
                            t(this.chart.container, p ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown), t(this.chart.container, p ? "pointermove" : "MSPointerMove", this.onContainerPointerMove), t(n, p ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
                        }
                    }), c(a.prototype, "init", function(t, e, i) {
                        t.call(this, e, i), this.hasZoom && s(e.container, {
                            "-ms-touch-action": "none",
                            "touch-action": "none"
                        })
                    }), c(a.prototype, "setDOMEvents", function(t) {
                        t.apply(this), (this.hasZoom || this.followTouchMove) && this.batchMSEvents(e)
                    }), c(a.prototype, "destroy", function(t) {
                        this.batchMSEvents(l), t.call(this)
                    })
                }
            }), e(i, "parts/Legend.js", [i["parts/Globals.js"]], function(t) {
                var e = t.addEvent,
                    i = t.css,
                    s = t.discardElement,
                    n = t.defined,
                    o = t.fireEvent,
                    r = t.isFirefox,
                    a = t.marginNames,
                    l = t.merge,
                    h = t.pick,
                    c = t.setAnimation,
                    d = t.stableSort,
                    p = t.win,
                    u = t.wrap;
                t.Legend = function(t, e) {
                    this.init(t, e)
                }, t.Legend.prototype = {
                    init: function(t, i) {
                        this.chart = t, this.setOptions(i), i.enabled && (this.render(), e(this.chart, "endResize", function() {
                            this.legend.positionCheckboxes()
                        }), this.proximate ? this.unchartrender = e(this.chart, "render", function() {
                            this.legend.proximatePositions(), this.legend.positionItems()
                        }) : this.unchartrender && this.unchartrender())
                    },
                    setOptions: function(t) {
                        var e = h(t.padding, 8);
                        this.options = t, this.chart.styledMode || (this.itemStyle = t.itemStyle, this.itemHiddenStyle = l(this.itemStyle, t.itemHiddenStyle)), this.itemMarginTop = t.itemMarginTop || 0, this.padding = e, this.initialItemY = e - 5, this.symbolWidth = h(t.symbolWidth, 16), this.pages = [], this.proximate = "proximate" === t.layout && !this.chart.inverted
                    },
                    update: function(t, e) {
                        var i = this.chart;
                        this.setOptions(l(!0, this.options, t)), this.destroy(), i.isDirtyLegend = i.isDirtyBox = !0, h(e, !0) && i.redraw(), o(this, "afterUpdate")
                    },
                    colorizeItem: function(t, e) {
                        if (t.legendGroup[e ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
                            var i = this.options,
                                s = t.legendItem,
                                n = t.legendLine,
                                r = t.legendSymbol,
                                a = this.itemHiddenStyle.color,
                                l = (i = e ? i.itemStyle.color : a, e && t.color || a),
                                h = t.options && t.options.marker,
                                c = {
                                    fill: l
                                };
                            s && s.css({
                                fill: i,
                                color: i
                            }), n && n.attr({
                                stroke: l
                            }), r && (h && r.isMarker && (c = t.pointAttribs(), e || (c.stroke = c.fill = a)), r.attr(c))
                        }
                        o(this, "afterColorizeItem", {
                            item: t,
                            visible: e
                        })
                    },
                    positionItems: function() {
                        this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes()
                    },
                    positionItem: function(t) {
                        var e = (i = this.options).symbolPadding,
                            i = !i.rtl,
                            s = (o = t._legendItemPos)[0],
                            o = o[1],
                            r = t.checkbox;
                        (t = t.legendGroup) && t.element && t[n(t.translateY) ? "animate" : "attr"]({
                            translateX: i ? s : this.legendWidth - s - 2 * e - 4,
                            translateY: o
                        }), r && (r.x = s, r.y = o)
                    },
                    destroyItem: function(t) {
                        var e = t.checkbox;
                        ["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(function(e) {
                            t[e] && (t[e] = t[e].destroy())
                        }), e && s(t.checkbox)
                    },
                    destroy: function() {
                        function t(t) {
                            this[t] && (this[t] = this[t].destroy())
                        }
                        this.getAllItems().forEach(function(e) {
                            ["legendItem", "legendGroup"].forEach(t, e)
                        }), "clipRect up down pager nav box title group".split(" ").forEach(t, this), this.display = null
                    },
                    positionCheckboxes: function() {
                        var t, e = this.group && this.group.alignAttr,
                            s = this.clipHeight || this.legendHeight,
                            n = this.titleHeight;
                        e && (t = e.translateY, this.allItems.forEach(function(o) {
                            var r, a = o.checkbox;
                            a && (r = t + n + a.y + (this.scrollOffset || 0) + 3, i(a, {
                                left: e.translateX + o.checkboxOffset + a.x - 20 + "px",
                                top: r + "px",
                                display: this.proximate || r > t - 6 && r < t + s - 6 ? "" : "none"
                            }))
                        }, this))
                    },
                    renderTitle: function() {
                        var t = this.options,
                            e = this.padding,
                            i = t.title,
                            s = 0;
                        i.text && (this.title || (this.title = this.chart.renderer.label(i.text, e - 3, e - 4, null, null, null, t.useHTML, null, "legend-title").attr({
                            zIndex: 1
                        }), this.chart.styledMode || this.title.css(i.style), this.title.add(this.group)), i.width || this.title.css({
                            width: this.maxLegendWidth + "px"
                        }), s = (t = this.title.getBBox()).height, this.offsetWidth = t.width, this.contentGroup.attr({
                            translateY: s
                        })), this.titleHeight = s
                    },
                    setText: function(e) {
                        var i = this.options;
                        e.legendItem.attr({
                            text: i.labelFormat ? t.format(i.labelFormat, e, this.chart.time) : i.labelFormatter.call(e)
                        })
                    },
                    renderItem: function(t) {
                        var e = this.chart,
                            i = e.renderer,
                            s = this.options,
                            n = this.symbolWidth,
                            o = s.symbolPadding,
                            r = this.itemStyle,
                            a = this.itemHiddenStyle,
                            c = "horizontal" === s.layout ? h(s.itemDistance, 20) : 0,
                            d = !s.rtl,
                            p = t.legendItem,
                            u = !t.series,
                            f = !u && t.series.drawLegendSymbol ? t.series : t,
                            g = f.options,
                            m = (c = n + o + c + ((g = this.createCheckboxForItem && g && g.showCheckbox) ? 20 : 0), s.useHTML),
                            v = t.options.className;
                        p || (t.legendGroup = i.g("legend-item").addClass("highcharts-" + f.type + "-series highcharts-color-" + t.colorIndex + (v ? " " + v : "") + (u ? " highcharts-series-" + t.index : "")).attr({
                            zIndex: 1
                        }).add(this.scrollGroup), t.legendItem = p = i.text("", d ? n + o : -o, this.baseline || 0, m), e.styledMode || p.css(l(t.visible ? r : a)), p.attr({
                            align: d ? "left" : "right",
                            zIndex: 2
                        }).add(t.legendGroup), this.baseline || (this.fontMetrics = i.fontMetrics(e.styledMode ? 12 : r.fontSize, p), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, p.attr("y", this.baseline)), this.symbolHeight = s.symbolHeight || this.fontMetrics.f, f.drawLegendSymbol(this, t), this.setItemEvents && this.setItemEvents(t, p, m)), g && !t.checkbox && this.createCheckboxForItem(t), this.colorizeItem(t, t.visible), !e.styledMode && r.width || p.css({
                            width: (s.itemWidth || this.widthOption || e.spacingBox.width) - c
                        }), this.setText(t), e = p.getBBox(), t.itemWidth = t.checkboxOffset = s.itemWidth || t.legendItemWidth || e.width + c, this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth), this.totalItemWidth += t.itemWidth, this.itemHeight = t.itemHeight = Math.round(t.legendItemHeight || e.height || this.symbolHeight)
                    },
                    layoutItem: function(t) {
                        var e = this.options,
                            i = this.padding,
                            s = "horizontal" === e.layout,
                            n = t.itemHeight,
                            o = e.itemMarginBottom || 0,
                            r = this.itemMarginTop,
                            a = s ? h(e.itemDistance, 20) : 0,
                            l = this.maxLegendWidth;
                        e = e.alignColumns && this.totalItemWidth > l ? this.maxItemWidth : t.itemWidth;
                        s && this.itemX - i + e > l && (this.itemX = i, this.lastLineHeight && (this.itemY += r + this.lastLineHeight + o), this.lastLineHeight = 0), this.lastItemY = r + this.itemY + o, this.lastLineHeight = Math.max(n, this.lastLineHeight), t._legendItemPos = [this.itemX, this.itemY], s ? this.itemX += e : (this.itemY += r + n + o, this.lastLineHeight = n), this.offsetWidth = this.widthOption || Math.max((s ? this.itemX - i - (t.checkbox ? 0 : a) : e) + i, this.offsetWidth)
                    },
                    getAllItems: function() {
                        var t = [];
                        return this.chart.series.forEach(function(e) {
                            var i = e && e.options;
                            e && h(i.showInLegend, !n(i.linkedTo) && void 0, !0) && (t = t.concat(e.legendItems || ("point" === i.legendType ? e.data : e)))
                        }), o(this, "afterGetAllItems", {
                            allItems: t
                        }), t
                    },
                    getAlignment: function() {
                        var t = this.options;
                        return this.proximate ? t.align.charAt(0) + "tv" : t.floating ? "" : t.align.charAt(0) + t.verticalAlign.charAt(0) + t.layout.charAt(0)
                    },
                    adjustMargins: function(t, e) {
                        var i = this.chart,
                            s = this.options,
                            o = this.getAlignment(),
                            r = void 0 !== i.options.title.margin ? i.titleOffset + i.options.title.margin : 0;
                        o && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function(l, c) {
                            l.test(o) && !n(t[c]) && (i[a[c]] = Math.max(i[a[c]], i.legend[(c + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][c] * s[c % 2 ? "x" : "y"] + h(s.margin, 12) + e[c] + (0 === c && (0 === i.titleOffset ? 0 : r))))
                        })
                    },
                    proximatePositions: function() {
                        var e = this.chart,
                            i = [],
                            s = "left" === this.options.align;
                        this.allItems.forEach(function(n) {
                            var o, r, a;
                            r = s, n.yAxis && n.points && (n.xAxis.options.reversed && (r = !r), o = t.find(r ? n.points : n.points.slice(0).reverse(), function(e) {
                                return t.isNumber(e.plotY)
                            }), r = n.legendGroup.getBBox().height, a = n.yAxis.top - e.plotTop, n.visible ? (o = o ? o.plotY : n.yAxis.height, o += a - .3 * r) : o = a + n.yAxis.height, i.push({
                                target: o,
                                size: r,
                                item: n
                            }))
                        }, this), t.distribute(i, e.plotHeight), i.forEach(function(t) {
                            t.item._legendItemPos[1] = e.plotTop - e.spacing[0] + t.pos
                        })
                    },
                    render: function() {
                        var e, i, s, n = this.chart,
                            r = n.renderer,
                            a = this.group,
                            h = this.box,
                            c = this.options,
                            p = this.padding;
                        this.itemX = p, this.itemY = this.initialItemY, this.lastItemY = this.offsetWidth = 0, this.widthOption = t.relativeLength(c.width, n.spacingBox.width - p), e = n.spacingBox.width - 2 * p - c.x, -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (e /= 2), this.maxLegendWidth = this.widthOption || e, a || (this.group = a = r.g("legend").attr({
                            zIndex: 7
                        }).add(), this.contentGroup = r.g().attr({
                            zIndex: 1
                        }).add(a), this.scrollGroup = r.g().add(this.contentGroup)), this.renderTitle(), e = this.getAllItems(), d(e, function(t, e) {
                            return (t.options && t.options.legendIndex || 0) - (e.options && e.options.legendIndex || 0)
                        }), c.reversed && e.reverse(), this.allItems = e, this.display = i = !!e.length, this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0, e.forEach(this.renderItem, this), e.forEach(this.layoutItem, this), e = (this.widthOption || this.offsetWidth) + p, s = this.lastItemY + this.lastLineHeight + this.titleHeight, s = this.handleOverflow(s), s += p, h || (this.box = h = r.rect().addClass("highcharts-legend-box").attr({
                            r: c.borderRadius
                        }).add(a), h.isNew = !0), n.styledMode || h.attr({
                            stroke: c.borderColor,
                            "stroke-width": c.borderWidth || 0,
                            fill: c.backgroundColor || "none"
                        }).shadow(c.shadow), 0 < e && 0 < s && (h[h.isNew ? "attr" : "animate"](h.crisp.call({}, {
                            x: 0,
                            y: 0,
                            width: e,
                            height: s
                        }, h.strokeWidth())), h.isNew = !1), h[i ? "show" : "hide"](), n.styledMode && "none" === a.getStyle("display") && (e = s = 0), this.legendWidth = e, this.legendHeight = s, i && (r = n.spacingBox, /(lth|ct|rth)/.test(this.getAlignment()) && (h = r.y + n.titleOffset, r = l(r, {
                            y: 0 < n.titleOffset ? h += n.options.title.margin : h
                        })), a.align(l(c, {
                            width: e,
                            height: s,
                            verticalAlign: this.proximate ? "top" : c.verticalAlign
                        }), !0, r)), this.proximate || this.positionItems(), o(this, "afterRender")
                    },
                    handleOverflow: function(t) {
                        var e, i, s = this,
                            n = this.chart,
                            o = n.renderer,
                            r = this.options,
                            a = r.y,
                            l = this.padding,
                            c = (a = n.spacingBox.height + ("top" === r.verticalAlign ? -a : a) - l, r.maxHeight),
                            d = this.clipRect,
                            p = r.navigation,
                            u = h(p.animation, !0),
                            f = p.arrowSize || 12,
                            g = this.nav,
                            m = this.pages,
                            v = this.allItems,
                            x = function(t) {
                                "number" == typeof t ? d.attr({
                                    height: t
                                }) : d && (s.clipRect = d.destroy(), s.contentGroup.clip()), s.contentGroup.div && (s.contentGroup.div.style.clip = t ? "rect(" + l + "px,9999px," + (l + t) + "px,0)" : "auto")
                            },
                            y = function(t) {
                                return s[t] = o.circle(0, 0, 1.3 * f).translate(f / 2, f / 2).add(g), n.styledMode || s[t].attr("fill", "rgba(0,0,0,0.0001)"), s[t]
                            };
                        return "horizontal" !== r.layout || "middle" === r.verticalAlign || r.floating || (a /= 2), c && (a = Math.min(a, c)), m.length = 0, t > a && !1 !== p.enabled ? (this.clipHeight = e = Math.max(a - 20 - this.titleHeight - l, 0), this.currentPage = h(this.currentPage, 1), this.fullHeight = t, v.forEach(function(t, s) {
                            var n = t._legendItemPos[1],
                                o = Math.round(t.legendItem.getBBox().height),
                                r = m.length;
                            (!r || n - m[r - 1] > e && (i || n) !== m[r - 1]) && (m.push(i || n), r++), t.pageIx = r - 1, i && (v[s - 1].pageIx = r - 1), s === v.length - 1 && n + o - m[r - 1] > e && n !== i && (m.push(n), t.pageIx = r), n !== i && (i = n)
                        }), d || (d = s.clipRect = o.clipRect(0, l, 9999, 0), s.contentGroup.clip(d)), x(e), g || (this.nav = g = o.g().attr({
                            zIndex: 1
                        }).add(this.group), this.up = o.symbol("triangle", 0, 0, f, f).add(g), y("upTracker").on("click", function() {
                            s.scroll(-1, u)
                        }), this.pager = o.text("", 15, 10).addClass("highcharts-legend-navigation"), n.styledMode || this.pager.css(p.style), this.pager.add(g), this.down = o.symbol("triangle-down", 0, 0, f, f).add(g), y("downTracker").on("click", function() {
                            s.scroll(1, u)
                        })), s.scroll(0), t = a) : g && (x(), this.nav = g.destroy(), this.scrollGroup.attr({
                            translateY: 1
                        }), this.clipHeight = 0), t
                    },
                    scroll: function(t, e) {
                        var i = this.pages,
                            s = i.length,
                            n = this.currentPage + t;
                        t = this.clipHeight;
                        var o = this.options.navigation,
                            r = this.pager,
                            a = this.padding;
                        n > s && (n = s), 0 < n && (void 0 !== e && c(e, this.chart), this.nav.attr({
                            translateX: a,
                            translateY: t + this.padding + 7 + this.titleHeight,
                            visibility: "visible"
                        }), [this.up, this.upTracker].forEach(function(t) {
                            t.attr({
                                class: 1 === n ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                            })
                        }), r.attr({
                            text: n + "/" + s
                        }), [this.down, this.downTracker].forEach(function(t) {
                            t.attr({
                                x: 18 + this.pager.getBBox().width,
                                class: n === s ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                            })
                        }, this), this.chart.styledMode || (this.up.attr({
                            fill: 1 === n ? o.inactiveColor : o.activeColor
                        }), this.upTracker.css({
                            cursor: 1 === n ? "default" : "pointer"
                        }), this.down.attr({
                            fill: n === s ? o.inactiveColor : o.activeColor
                        }), this.downTracker.css({
                            cursor: n === s ? "default" : "pointer"
                        })), this.scrollOffset = -i[n - 1] + this.initialItemY, this.scrollGroup.animate({
                            translateY: this.scrollOffset
                        }), this.currentPage = n, this.positionCheckboxes())
                    }
                }, t.LegendSymbolMixin = {
                    drawRectangle: function(t, e) {
                        var i = t.symbolHeight,
                            s = t.options.squareSymbol;
                        e.legendSymbol = this.chart.renderer.rect(s ? (t.symbolWidth - i) / 2 : 0, t.baseline - i + 1, s ? i : t.symbolWidth, i, h(t.options.symbolRadius, i / 2)).addClass("highcharts-point").attr({
                            zIndex: 3
                        }).add(e.legendGroup)
                    },
                    drawLineMarker: function(t) {
                        var e = this.options,
                            i = e.marker,
                            s = t.symbolWidth,
                            n = t.symbolHeight,
                            o = n / 2,
                            r = this.chart.renderer,
                            a = this.legendGroup;
                        t = t.baseline - Math.round(.3 * t.fontMetrics.b);
                        var c = {};
                        this.chart.styledMode || (c = {
                            "stroke-width": e.lineWidth || 0
                        }, e.dashStyle && (c.dashstyle = e.dashStyle)), this.legendLine = r.path(["M", 0, t, "L", s, t]).addClass("highcharts-graph").attr(c).add(a), i && !1 !== i.enabled && s && (e = Math.min(h(i.radius, o), o), 0 === this.symbol.indexOf("url") && (i = l(i, {
                            width: n,
                            height: n
                        }), e = 0), this.legendSymbol = i = r.symbol(this.symbol, s / 2 - e, t - e, 2 * e, 2 * e, i).addClass("highcharts-point").add(a), i.isMarker = !0)
                    }
                }, (/Trident\/7\.0/.test(p.navigator && p.navigator.userAgent) || r) && u(t.Legend.prototype, "positionItem", function(t, e) {
                    var i = this,
                        s = function() {
                            e._legendItemPos && t.call(i, e)
                        };
                    s(), i.bubbleLegend || setTimeout(s)
                })
            }), e(i, "parts/Chart.js", [i["parts/Globals.js"]], function(t) {
                var e = t.addEvent,
                    i = t.animate,
                    s = t.animObject,
                    n = t.attr,
                    o = t.doc,
                    r = t.Axis,
                    a = t.createElement,
                    l = t.defaultOptions,
                    h = t.discardElement,
                    c = t.charts,
                    d = t.css,
                    p = t.defined,
                    u = t.extend,
                    f = t.find,
                    g = t.fireEvent,
                    m = t.isNumber,
                    v = t.isObject,
                    x = t.isString,
                    y = t.Legend,
                    b = t.marginNames,
                    k = t.merge,
                    w = t.objectEach,
                    M = t.Pointer,
                    S = t.pick,
                    C = t.pInt,
                    T = t.removeEvent,
                    A = t.seriesTypes,
                    L = t.splat,
                    P = t.syncTimeout,
                    E = t.win,
                    _ = t.Chart = function() {
                        this.getArgs.apply(this, arguments)
                    };
                t.chart = function(t, e, i) {
                    return new _(t, e, i)
                }, u(_.prototype, {
                    callbacks: [],
                    getArgs: function() {
                        var t = [].slice.call(arguments);
                        (x(t[0]) || t[0].nodeName) && (this.renderTo = t.shift()), this.init(t[0], t[1])
                    },
                    init: function(i, s) {
                        var n, o = i.series,
                            r = i.plotOptions || {};
                        g(this, "init", {
                            args: arguments
                        }, function() {
                            i.series = null, n = k(l, i), w(n.plotOptions, function(t, e) {
                                v(t) && (t.tooltip = r[e] && k(r[e].tooltip) || void 0)
                            }), n.tooltip.userOptions = i.chart && i.chart.forExport && i.tooltip.userOptions || i.tooltip, n.series = i.series = o, this.userOptions = i;
                            var a = n.chart,
                                h = a.events;
                            this.margin = [], this.spacing = [], this.bounds = {
                                h: {},
                                v: {}
                            }, this.labelCollectors = [], this.callback = s, this.isResizing = 0, this.options = n, this.axes = [], this.series = [], this.time = i.time && Object.keys(i.time).length ? new t.Time(i.time) : t.time, this.styledMode = a.styledMode, this.hasCartesianSeries = a.showAxes;
                            var d = this;
                            d.index = c.length, c.push(d), t.chartCount++, h && w(h, function(t, i) {
                                e(d, i, t)
                            }), d.xAxis = [], d.yAxis = [], d.pointCount = d.colorCounter = d.symbolCounter = 0, g(d, "afterInit"), d.firstRender()
                        })
                    },
                    initSeries: function(e) {
                        var i = this.options.chart;
                        return (i = A[e.type || i.type || i.defaultSeriesType]) || t.error(17, !0, this), (i = new i).init(this, e), i
                    },
                    orderSeries: function(t) {
                        var e = this.series;
                        for (t = t || 0; t < e.length; t++) e[t] && (e[t].index = t, e[t].name = e[t].getName())
                    },
                    isInsidePlot: function(t, e, i) {
                        var s = i ? e : t;
                        return t = i ? t : e, 0 <= s && s <= this.plotWidth && 0 <= t && t <= this.plotHeight
                    },
                    redraw: function(e) {
                        g(this, "beforeRedraw");
                        var i, s, n, o = this.axes,
                            r = this.series,
                            a = this.pointer,
                            l = this.legend,
                            h = this.userOptions.legend,
                            c = this.isDirtyLegend,
                            d = this.hasCartesianSeries,
                            p = this.isDirtyBox,
                            f = this.renderer,
                            m = f.isHidden(),
                            v = [];
                        for (this.setResponsive && this.setResponsive(!1), t.setAnimation(e, this), m && this.temporaryDisplay(), this.layOutTitles(), e = r.length; e--;)
                            if ((n = r[e]).options.stacking && (i = !0, n.isDirty)) {
                                s = !0;
                                break
                            }
                        if (s)
                            for (e = r.length; e--;)(n = r[e]).options.stacking && (n.isDirty = !0);
                        r.forEach(function(t) {
                            t.isDirty && ("point" === t.options.legendType ? (t.updateTotals && t.updateTotals(), c = !0) : h && (h.labelFormatter || h.labelFormat) && (c = !0)), t.isDirtyData && g(t, "updatedData")
                        }), c && l && l.options.enabled && (l.render(), this.isDirtyLegend = !1), i && this.getStacks(), d && o.forEach(function(t) {
                            t.updateNames(), t.setScale()
                        }), this.getMargins(), d && (o.forEach(function(t) {
                            t.isDirty && (p = !0)
                        }), o.forEach(function(t) {
                            var e = t.min + "," + t.max;
                            t.extKey !== e && (t.extKey = e, v.push(function() {
                                g(t, "afterSetExtremes", u(t.eventArgs, t.getExtremes())), delete t.eventArgs
                            })), (p || i) && t.redraw()
                        })), p && this.drawChartBox(), g(this, "predraw"), r.forEach(function(t) {
                            (p || t.isDirty) && t.visible && t.redraw(), t.isDirtyData = !1
                        }), a && a.reset(!0), f.draw(), g(this, "redraw"), g(this, "render"), m && this.temporaryDisplay(!0), v.forEach(function(t) {
                            t.call()
                        })
                    },
                    get: function(t) {
                        function e(e) {
                            return e.id === t || e.options && e.options.id === t
                        }
                        var i, s, n = this.series;
                        for (i = f(this.axes, e) || f(this.series, e), s = 0; !i && s < n.length; s++) i = f(n[s].points || [], e);
                        return i
                    },
                    getAxes: function() {
                        var t = this,
                            e = (i = this.options).xAxis = L(i.xAxis || {}),
                            i = i.yAxis = L(i.yAxis || {});
                        g(this, "getAxes"), e.forEach(function(t, e) {
                            t.index = e, t.isX = !0
                        }), i.forEach(function(t, e) {
                            t.index = e
                        }), e.concat(i).forEach(function(e) {
                            new r(t, e)
                        }), g(this, "afterGetAxes")
                    },
                    getSelectedPoints: function() {
                        var t = [];
                        return this.series.forEach(function(e) {
                            t = t.concat((e[e.hasGroupedData ? "points" : "data"] || []).filter(function(t) {
                                return t.selected
                            }))
                        }), t
                    },
                    getSelectedSeries: function() {
                        return this.series.filter(function(t) {
                            return t.selected
                        })
                    },
                    setTitle: function(t, e, i) {
                        var s = this,
                            n = s.options,
                            o = s.styledMode;
                        [
                            ["title", t, n.title = k(!o && {
                                style: {
                                    color: "#333333",
                                    fontSize: n.isStock ? "16px" : "18px"
                                }
                            }, n.title, t)],
                            ["subtitle", e, n = n.subtitle = k(!o && {
                                style: {
                                    color: "#666666"
                                }
                            }, n.subtitle, e)]
                        ].forEach(function(t, e) {
                            var i = t[0],
                                n = s[i],
                                r = t[1];
                            t = t[2], n && r && (s[i] = n = n.destroy()), t && !n && (s[i] = s.renderer.text(t.text, 0, 0, t.useHTML).attr({
                                align: t.align,
                                class: "highcharts-" + i,
                                zIndex: t.zIndex || 4
                            }).add(), s[i].update = function(t) {
                                s.setTitle(!e && t, e && t)
                            }, o || s[i].css(t.style))
                        }), s.layOutTitles(i)
                    },
                    layOutTitles: function(t) {
                        var e, i = 0,
                            s = this.renderer,
                            n = this.spacingBox;
                        ["title", "subtitle"].forEach(function(t) {
                            var e, o = this[t],
                                r = this.options[t];
                            t = "title" === t ? -3 : r.verticalAlign ? 0 : i + 2, o && (this.styledMode || (e = r.style.fontSize), e = s.fontMetrics(e, o).b, o.css({
                                width: (r.width || n.width + r.widthAdjust) + "px"
                            }).align(u({
                                y: t + e
                            }, r), !1, "spacingBox"), r.floating || r.verticalAlign || (i = Math.ceil(i + o.getBBox(r.useHTML).height)))
                        }, this), e = this.titleOffset !== i, this.titleOffset = i, !this.isDirtyBox && e && (this.isDirtyBox = this.isDirtyLegend = e, this.hasRendered && S(t, !0) && this.isDirtyBox && this.redraw())
                    },
                    getChartSize: function() {
                        var e = (i = this.options.chart).width,
                            i = i.height,
                            s = this.renderTo;
                        p(e) || (this.containerWidth = t.getStyle(s, "width")), p(i) || (this.containerHeight = t.getStyle(s, "height")), this.chartWidth = Math.max(0, e || this.containerWidth || 600), this.chartHeight = Math.max(0, t.relativeLength(i, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400))
                    },
                    temporaryDisplay: function(e) {
                        var i = this.renderTo;
                        if (e)
                            for (; i && i.style;) i.hcOrigStyle && (t.css(i, i.hcOrigStyle), delete i.hcOrigStyle), i.hcOrigDetached && (o.body.removeChild(i), i.hcOrigDetached = !1), i = i.parentNode;
                        else
                            for (; i && i.style && (o.body.contains(i) || i.parentNode || (i.hcOrigDetached = !0, o.body.appendChild(i)), ("none" === t.getStyle(i, "display", !1) || i.hcOricDetached) && (i.hcOrigStyle = {
                                    display: i.style.display,
                                    height: i.style.height,
                                    overflow: i.style.overflow
                                }, e = {
                                    display: "block",
                                    overflow: "hidden"
                                }, i !== this.renderTo && (e.height = 0), t.css(i, e), i.offsetWidth || i.style.setProperty("display", "block", "important")), (i = i.parentNode) !== o.body););
                    },
                    setClassName: function(t) {
                        this.container.className = "highcharts-container " + (t || "")
                    },
                    getContainer: function() {
                        var e, i, s, r = this.options,
                            l = r.chart;
                        e = this.renderTo;
                        var h, p, f = t.uniqueKey();
                        if (e || (this.renderTo = e = l.renderTo), x(e) && (this.renderTo = e = o.getElementById(e)), e || t.error(13, !0, this), i = C(n(e, "data-highcharts-chart")), m(i) && c[i] && c[i].hasRendered && c[i].destroy(), n(e, "data-highcharts-chart", this.index), e.innerHTML = "", l.skipClone || e.offsetWidth || this.temporaryDisplay(), this.getChartSize(), i = this.chartWidth, s = this.chartHeight, d(e, {
                                overflow: "hidden"
                            }), this.styledMode || (h = u({
                                position: "relative",
                                overflow: "hidden",
                                width: i + "px",
                                height: s + "px",
                                textAlign: "left",
                                lineHeight: "normal",
                                zIndex: 0,
                                "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
                            }, l.style)), this.container = e = a("div", {
                                id: f
                            }, h, e), this._cursor = e.style.cursor, this.renderer = new(t[l.renderer] || t.Renderer)(e, i, s, null, l.forExport, r.exporting && r.exporting.allowHTML, this.styledMode), this.setClassName(l.className), this.styledMode)
                            for (p in r.defs) this.renderer.definition(r.defs[p]);
                        else this.renderer.setStyle(l.style);
                        this.renderer.chartIndex = this.index, g(this, "afterGetContainer")
                    },
                    getMargins: function(t) {
                        var e = this.spacing,
                            i = this.margin,
                            s = this.titleOffset;
                        this.resetMargins(), s && !p(i[0]) && (this.plotTop = Math.max(this.plotTop, s + this.options.title.margin + e[0])), this.legend && this.legend.display && this.legend.adjustMargins(i, e), g(this, "getMargins"), t || this.getAxisMargins()
                    },
                    getAxisMargins: function() {
                        var t = this,
                            e = t.axisOffset = [0, 0, 0, 0],
                            i = t.margin;
                        t.hasCartesianSeries && t.axes.forEach(function(t) {
                            t.visible && t.getOffset()
                        }), b.forEach(function(s, n) {
                            p(i[n]) || (t[s] += e[n])
                        }), t.setChartSize()
                    },
                    reflow: function(e) {
                        var i = this,
                            s = i.options.chart,
                            n = i.renderTo,
                            r = p(s.width) && p(s.height),
                            a = s.width || t.getStyle(n, "width");
                        s = s.height || t.getStyle(n, "height"), n = e ? e.target : E;
                        r || i.isPrinting || !a || !s || n !== E && n !== o || (a === i.containerWidth && s === i.containerHeight || (t.clearTimeout(i.reflowTimeout), i.reflowTimeout = P(function() {
                            i.container && i.setSize(void 0, void 0, !1)
                        }, e ? 100 : 0)), i.containerWidth = a, i.containerHeight = s)
                    },
                    setReflow: function(t) {
                        var i = this;
                        !1 === t || this.unbindReflow ? !1 === t && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = e(E, "resize", function(t) {
                            i.reflow(t)
                        }), e(this, "destroy", this.unbindReflow))
                    },
                    setSize: function(e, n, o) {
                        var r, a = this,
                            l = a.renderer;
                        a.isResizing += 1, t.setAnimation(o, a), a.oldChartHeight = a.chartHeight, a.oldChartWidth = a.chartWidth, void 0 !== e && (a.options.chart.width = e), void 0 !== n && (a.options.chart.height = n), a.getChartSize(), a.styledMode || ((r = l.globalAnimation) ? i : d)(a.container, {
                            width: a.chartWidth + "px",
                            height: a.chartHeight + "px"
                        }, r), a.setChartSize(!0), l.setSize(a.chartWidth, a.chartHeight, o), a.axes.forEach(function(t) {
                            t.isDirty = !0, t.setScale()
                        }), a.isDirtyLegend = !0, a.isDirtyBox = !0, a.layOutTitles(), a.getMargins(), a.redraw(o), a.oldChartHeight = null, g(a, "resize"), P(function() {
                            a && g(a, "endResize", null, function() {
                                --a.isResizing
                            })
                        }, s(r).duration)
                    },
                    setChartSize: function(t) {
                        var e, i, s, n, o = this.inverted,
                            r = this.renderer,
                            a = this.chartWidth,
                            l = this.chartHeight,
                            h = this.options.chart,
                            c = this.spacing,
                            d = this.clipOffset;
                        this.plotLeft = e = Math.round(this.plotLeft), this.plotTop = i = Math.round(this.plotTop), this.plotWidth = s = Math.max(0, Math.round(a - e - this.marginRight)), this.plotHeight = n = Math.max(0, Math.round(l - i - this.marginBottom)), this.plotSizeX = o ? n : s, this.plotSizeY = o ? s : n, this.plotBorderWidth = h.plotBorderWidth || 0, this.spacingBox = r.spacingBox = {
                            x: c[3],
                            y: c[0],
                            width: a - c[3] - c[1],
                            height: l - c[0] - c[2]
                        }, this.plotBox = r.plotBox = {
                            x: e,
                            y: i,
                            width: s,
                            height: n
                        }, a = 2 * Math.floor(this.plotBorderWidth / 2), o = Math.ceil(Math.max(a, d[3]) / 2), r = Math.ceil(Math.max(a, d[0]) / 2), this.clipBox = {
                            x: o,
                            y: r,
                            width: Math.floor(this.plotSizeX - Math.max(a, d[1]) / 2 - o),
                            height: Math.max(0, Math.floor(this.plotSizeY - Math.max(a, d[2]) / 2 - r))
                        }, t || this.axes.forEach(function(t) {
                            t.setAxisSize(), t.setAxisTranslation()
                        }), g(this, "afterSetChartSize", {
                            skipAxes: t
                        })
                    },
                    resetMargins: function() {
                        g(this, "resetMargins");
                        var t = this,
                            e = t.options.chart;
                        ["margin", "spacing"].forEach(function(i) {
                            var s = e[i],
                                n = v(s) ? s : [s, s, s, s];
                            ["Top", "Right", "Bottom", "Left"].forEach(function(s, o) {
                                t[i][o] = S(e[i + s], n[o])
                            })
                        }), b.forEach(function(e, i) {
                            t[e] = S(t.margin[i], t.spacing[i])
                        }), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [0, 0, 0, 0]
                    },
                    drawChartBox: function() {
                        var t, e, i = this.options.chart,
                            s = this.renderer,
                            n = this.chartWidth,
                            o = this.chartHeight,
                            r = this.chartBackground,
                            a = this.plotBackground,
                            l = this.plotBorder,
                            h = this.styledMode,
                            c = this.plotBGImage,
                            d = i.backgroundColor,
                            p = i.plotBackgroundColor,
                            u = i.plotBackgroundImage,
                            f = this.plotLeft,
                            m = this.plotTop,
                            v = this.plotWidth,
                            x = this.plotHeight,
                            y = this.plotBox,
                            b = this.clipRect,
                            k = this.clipBox,
                            w = "animate";
                        r || (this.chartBackground = r = s.rect().addClass("highcharts-background").add(), w = "attr"), h ? t = e = r.strokeWidth() : (e = (t = i.borderWidth || 0) + (i.shadow ? 8 : 0), d = {
                            fill: d || "none"
                        }, (t || r["stroke-width"]) && (d.stroke = i.borderColor, d["stroke-width"] = t), r.attr(d).shadow(i.shadow)), r[w]({
                            x: e / 2,
                            y: e / 2,
                            width: n - e - t % 2,
                            height: o - e - t % 2,
                            r: i.borderRadius
                        }), w = "animate", a || (w = "attr", this.plotBackground = a = s.rect().addClass("highcharts-plot-background").add()), a[w](y), h || (a.attr({
                            fill: p || "none"
                        }).shadow(i.plotShadow), u && (c ? c.animate(y) : this.plotBGImage = s.image(u, f, m, v, x).add())), b ? b.animate({
                            width: k.width,
                            height: k.height
                        }) : this.clipRect = s.clipRect(k), w = "animate", l || (w = "attr", this.plotBorder = l = s.rect().addClass("highcharts-plot-border").attr({
                            zIndex: 1
                        }).add()), h || l.attr({
                            stroke: i.plotBorderColor,
                            "stroke-width": i.plotBorderWidth || 0,
                            fill: "none"
                        }), l[w](l.crisp({
                            x: f,
                            y: m,
                            width: v,
                            height: x
                        }, -l.strokeWidth())), this.isDirtyBox = !1, g(this, "afterDrawChartBox")
                    },
                    propFromSeries: function() {
                        var t, e, i, s = this,
                            n = s.options.chart,
                            o = s.options.series;
                        ["inverted", "angular", "polar"].forEach(function(r) {
                            for (t = A[n.type || n.defaultSeriesType], i = n[r] || t && t.prototype[r], e = o && o.length; !i && e--;)(t = A[o[e].type]) && t.prototype[r] && (i = !0);
                            s[r] = i
                        })
                    },
                    linkSeries: function() {
                        var t = this,
                            e = t.series;
                        e.forEach(function(t) {
                            t.linkedSeries.length = 0
                        }), e.forEach(function(e) {
                            var i = e.options.linkedTo;
                            x(i) && (i = ":previous" === i ? t.series[e.index - 1] : t.get(i)) && i.linkedParent !== e && (i.linkedSeries.push(e), e.linkedParent = i, e.visible = S(e.options.visible, i.options.visible, e.visible))
                        }), g(this, "afterLinkSeries")
                    },
                    renderSeries: function() {
                        this.series.forEach(function(t) {
                            t.translate(), t.render()
                        })
                    },
                    renderLabels: function() {
                        var t = this,
                            e = t.options.labels;
                        e.items && e.items.forEach(function(i) {
                            var s = u(e.style, i.style),
                                n = C(s.left) + t.plotLeft,
                                o = C(s.top) + t.plotTop + 12;
                            delete s.left, delete s.top, t.renderer.text(i.html, n, o).attr({
                                zIndex: 2
                            }).css(s).add()
                        })
                    },
                    render: function() {
                        var t, e, i, s = this.axes,
                            n = this.renderer,
                            o = this.options,
                            r = 0;
                        this.setTitle(), this.legend = new y(this, o.legend), this.getStacks && this.getStacks(), this.getMargins(!0), this.setChartSize(), o = this.plotWidth, s.some(function(t) {
                            if (t.horiz && t.visible && t.options.labels.enabled && t.series.length) return r = 21, !0
                        }), t = this.plotHeight = Math.max(this.plotHeight - r, 0), s.forEach(function(t) {
                            t.setScale()
                        }), this.getAxisMargins(), e = 1.1 < o / this.plotWidth, i = 1.05 < t / this.plotHeight, (e || i) && (s.forEach(function(t) {
                            (t.horiz && e || !t.horiz && i) && t.setTickInterval(!0)
                        }), this.getMargins()), this.drawChartBox(), this.hasCartesianSeries && s.forEach(function(t) {
                            t.visible && t.render()
                        }), this.seriesGroup || (this.seriesGroup = n.g("series-group").attr({
                            zIndex: 3
                        }).add()), this.renderSeries(), this.renderLabels(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = !0
                    },
                    addCredits: function(t) {
                        var e = this;
                        (t = k(!0, this.options.credits, t)).enabled && !this.credits && (this.credits = this.renderer.text(t.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
                            t.href && (E.location.href = t.href)
                        }).attr({
                            align: t.position.align,
                            zIndex: 8
                        }), e.styledMode || this.credits.css(t.style), this.credits.add().align(t.position), this.credits.update = function(t) {
                            e.credits = e.credits.destroy(), e.addCredits(t)
                        })
                    },
                    destroy: function() {
                        var e, i = this,
                            s = i.axes,
                            n = i.series,
                            o = i.container,
                            r = o && o.parentNode;
                        for (g(i, "destroy"), i.renderer.forExport ? t.erase(c, i) : c[i.index] = void 0, t.chartCount--, i.renderTo.removeAttribute("data-highcharts-chart"), T(i), e = s.length; e--;) s[e] = s[e].destroy();
                        for (this.scroller && this.scroller.destroy && this.scroller.destroy(), e = n.length; e--;) n[e] = n[e].destroy();
                        "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(t) {
                            var e = i[t];
                            e && e.destroy && (i[t] = e.destroy())
                        }), o && (o.innerHTML = "", T(o), r && h(o)), w(i, function(t, e) {
                            delete i[e]
                        })
                    },
                    firstRender: function() {
                        var e = this,
                            i = e.options;
                        e.isReadyToRender && !e.isReadyToRender() || (e.getContainer(), e.resetMargins(), e.setChartSize(), e.propFromSeries(), e.getAxes(), (t.isArray(i.series) ? i.series : []).forEach(function(t) {
                            e.initSeries(t)
                        }), e.linkSeries(), g(e, "beforeRender"), M && (e.pointer = new M(e, i)), e.render(), !e.renderer.imgCount && e.onload && e.onload(), e.temporaryDisplay(!0))
                    },
                    onload: function() {
                        [this.callback].concat(this.callbacks).forEach(function(t) {
                            t && void 0 !== this.index && t.apply(this, [this])
                        }, this), g(this, "load"), g(this, "render"), p(this.index) && this.setReflow(this.options.chart.reflow), this.onload = null
                    }
                })
            }), e(i, "parts/ScrollablePlotArea.js", [i["parts/Globals.js"]], function(t) {
                var e = t.addEvent,
                    i = t.Chart;
                e(i, "afterSetChartSize", function(e) {
                    var i = this.options.chart.scrollablePlotArea;
                    (i = i && i.minWidth) && !this.renderer.forExport && (this.scrollablePixels = i = Math.max(0, i - this.chartWidth)) && (this.plotWidth += i, this.clipBox.width += i, e.skipAxes || this.axes.forEach(function(e) {
                        1 === e.side ? e.getPlotLinePath = function() {
                            var i, s = this.right;
                            return this.right = s - e.chart.scrollablePixels, i = t.Axis.prototype.getPlotLinePath.apply(this, arguments), this.right = s, i
                        } : (e.setAxisSize(), e.setAxisTranslation())
                    }))
                }), e(i, "render", function() {
                    this.scrollablePixels ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed()
                }), i.prototype.setUpScrolling = function() {
                    this.scrollingContainer = t.createElement("div", {
                        className: "highcharts-scrolling"
                    }, {
                        overflowX: "auto",
                        WebkitOverflowScrolling: "touch"
                    }, this.renderTo), this.innerContainer = t.createElement("div", {
                        className: "highcharts-inner-container"
                    }, null, this.scrollingContainer), this.innerContainer.appendChild(this.container), this.setUpScrolling = null
                }, i.prototype.moveFixedElements = function() {
                    var t = this.container,
                        e = this.fixedRenderer;
                    [this.inverted ? ".highcharts-xaxis" : ".highcharts-yaxis", this.inverted ? ".highcharts-xaxis-labels" : ".highcharts-yaxis-labels", ".highcharts-contextbutton", ".highcharts-credits", ".highcharts-legend", ".highcharts-reset-zoom", ".highcharts-subtitle", ".highcharts-title", ".highcharts-legend-checkbox"].forEach(function(i) {
                        [].forEach.call(t.querySelectorAll(i), function(t) {
                            (t.namespaceURI === e.SVG_NS ? e.box : e.box.parentNode).appendChild(t), t.style.pointerEvents = "auto"
                        })
                    })
                }, i.prototype.applyFixed = function() {
                    var i, s = !this.fixedDiv,
                        n = this.options.chart.scrollablePlotArea;
                    s && (this.fixedDiv = t.createElement("div", {
                        className: "highcharts-fixed"
                    }, {
                        position: "absolute",
                        overflow: "hidden",
                        pointerEvents: "none",
                        zIndex: 2
                    }, null, !0), this.renderTo.insertBefore(this.fixedDiv, this.renderTo.firstChild), this.renderTo.style.overflow = "visible", this.fixedRenderer = i = new t.Renderer(this.fixedDiv, 0, 0), this.scrollableMask = i.path().attr({
                        fill: t.color(this.options.chart.backgroundColor || "#fff").setOpacity(t.pick(n.opacity, .85)).get(),
                        zIndex: -1
                    }).addClass("highcharts-scrollable-mask").add(), this.moveFixedElements(), e(this, "afterShowResetZoom", this.moveFixedElements)), this.fixedRenderer.setSize(this.chartWidth, this.chartHeight), i = this.chartWidth + this.scrollablePixels, t.stop(this.container), this.container.style.width = i + "px", this.renderer.boxWrapper.attr({
                        width: i,
                        height: this.chartHeight,
                        viewBox: [0, 0, i, this.chartHeight].join(" ")
                    }), this.chartBackground.attr({
                        width: i
                    }), s && n.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixels * n.scrollPositionX), n = this.axisOffset, s = this.plotTop - n[0] - 1, n = this.plotTop + this.plotHeight + n[2], i = this.plotLeft + this.plotWidth - this.scrollablePixels, this.scrollableMask.attr({
                        d: this.scrollablePixels ? ["M", 0, s, "L", this.plotLeft - 1, s, "L", this.plotLeft - 1, n, "L", 0, n, "Z", "M", i, s, "L", this.chartWidth, s, "L", this.chartWidth, n, "L", i, n, "Z"] : ["M", 0, 0]
                    })
                }
            }), e(i, "parts/Point.js", [i["parts/Globals.js"]], function(t) {
                var e, i = t.extend,
                    s = t.erase,
                    n = t.fireEvent,
                    o = t.format,
                    r = t.isArray,
                    a = t.isNumber,
                    l = t.pick,
                    h = t.uniqueKey,
                    c = t.defined,
                    d = t.removeEvent;
                t.Point = e = function() {}, t.Point.prototype = {
                    init: function(t, e, i) {
                        return this.series = t, this.applyOptions(e, i), this.id = c(this.id) ? this.id : h(), this.resolveColor(), t.chart.pointCount++, n(this, "afterInit"), this
                    },
                    resolveColor: function() {
                        var t, e = this.series;
                        t = e.chart.options.chart.colorCount;
                        var i = e.chart.styledMode;
                        i || this.options.color || (this.color = e.color), e.options.colorByPoint ? (i || (t = e.options.colors || e.chart.options.colors, this.color = this.color || t[e.colorCounter], t = t.length), i = e.colorCounter, e.colorCounter++, e.colorCounter === t && (e.colorCounter = 0)) : i = e.colorIndex, this.colorIndex = l(this.colorIndex, i)
                    },
                    applyOptions: function(t, s) {
                        var n = this.series,
                            o = n.options.pointValKey || n.pointValKey;
                        return t = e.prototype.optionsToObject.call(this, t), i(this, t), this.options = this.options ? i(this.options, t) : t, t.group && delete this.group, t.dataLabels && delete this.dataLabels, o && (this.y = this[o]), (this.isNull = l(this.isValid && !this.isValid(), null === this.x || !a(this.y, !0))) && (this.formatPrefix = "null"), this.selected && (this.state = "select"), "name" in this && void 0 === s && n.xAxis && n.xAxis.hasNames && (this.x = n.xAxis.nameToX(this)), void 0 === this.x && n && (this.x = void 0 === s ? n.autoIncrement(this) : s), this
                    },
                    setNestedProperty: function(e, i, s) {
                        return s.split(".").reduce(function(e, s, n, o) {
                            return e[s] = o.length - 1 === n ? i : t.isObject(e[s], !0) ? e[s] : {}, e[s]
                        }, e), e
                    },
                    optionsToObject: function(e) {
                        var i = {},
                            s = this.series,
                            n = s.options.keys,
                            o = n || s.pointArrayMap || ["y"],
                            l = o.length,
                            h = 0,
                            c = 0;
                        if (a(e) || null === e) i[o[0]] = e;
                        else if (r(e))
                            for (!n && e.length > l && ("string" === (s = typeof e[0]) ? i.name = e[0] : "number" === s && (i.x = e[0]), h++); c < l;) n && void 0 === e[h] || (0 < o[c].indexOf(".") ? t.Point.prototype.setNestedProperty(i, e[h], o[c]) : i[o[c]] = e[h]), h++, c++;
                        else "object" == typeof e && (i = e, e.dataLabels && (s._hasPointLabels = !0), e.marker && (s._hasPointMarkers = !0));
                        return i
                    },
                    getClassName: function() {
                        return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
                    },
                    getZone: function() {
                        var t, e = (i = this.series).zones,
                            i = i.zoneAxis || "y",
                            s = 0;
                        for (t = e[s]; this[i] >= t.value;) t = e[++s];
                        return this.nonZonedColor || (this.nonZonedColor = this.color), this.color = t && t.color && !this.options.color ? t.color : this.nonZonedColor, t
                    },
                    destroy: function() {
                        var t, e = this.series.chart,
                            i = e.hoverPoints;
                        for (t in e.pointCount--, i && (this.setState(), s(i, this), i.length || (e.hoverPoints = null)), this === e.hoverPoint && this.onMouseOut(), (this.graphic || this.dataLabel || this.dataLabels) && (d(this), this.destroyElements()), this.legendItem && e.legend.destroyItem(this), this) this[t] = null
                    },
                    destroyElements: function(t) {
                        var e, i, s = this,
                            n = [];
                        for ((t = t || {
                                graphic: 1,
                                dataLabel: 1
                            }).graphic && n.push("graphic", "shadowGroup"), t.dataLabel && n.push("dataLabel", "dataLabelUpper", "connector"), i = n.length; i--;) e = n[i], s[e] && (s[e] = s[e].destroy());
                        ["dataLabel", "connector"].forEach(function(e) {
                            var i = e + "s";
                            t[e] && s[i] && (s[i].forEach(function(t) {
                                t.element && t.destroy()
                            }), delete s[i])
                        })
                    },
                    getLabelConfig: function() {
                        return {
                            x: this.category,
                            y: this.y,
                            color: this.color,
                            colorIndex: this.colorIndex,
                            key: this.name || this.category,
                            series: this.series,
                            point: this,
                            percentage: this.percentage,
                            total: this.total || this.stackTotal
                        }
                    },
                    tooltipFormatter: function(t) {
                        var e = this.series,
                            i = e.tooltipOptions,
                            s = l(i.valueDecimals, ""),
                            n = i.valuePrefix || "",
                            r = i.valueSuffix || "";
                        return e.chart.styledMode && (t = e.chart.tooltip.styledModeFormat(t)), (e.pointArrayMap || ["y"]).forEach(function(e) {
                            e = "{point." + e, (n || r) && (t = t.replace(RegExp(e + "}", "g"), n + e + "}" + r)), t = t.replace(RegExp(e + "}", "g"), e + ":,." + s + "f}")
                        }), o(t, {
                            point: this,
                            series: this.series
                        }, e.chart.time)
                    },
                    firePointEvent: function(t, e, i) {
                        var s = this,
                            o = this.series.options;
                        (o.point.events[t] || s.options && s.options.events && s.options.events[t]) && this.importEvents(), "click" === t && o.allowPointSelect && (i = function(t) {
                            s.select && s.select(null, t.ctrlKey || t.metaKey || t.shiftKey)
                        }), n(this, t, e, i)
                    },
                    visible: !0
                }
            }), e(i, "parts/Series.js", [i["parts/Globals.js"]], function(t) {
                var e = t.addEvent,
                    i = t.animObject,
                    s = t.arrayMax,
                    n = t.arrayMin,
                    o = t.correctFloat,
                    r = t.defaultOptions,
                    a = t.defaultPlotOptions,
                    l = t.defined,
                    h = t.erase,
                    c = t.extend,
                    d = t.fireEvent,
                    p = t.isArray,
                    u = t.isNumber,
                    f = t.isString,
                    g = t.merge,
                    m = t.objectEach,
                    v = t.pick,
                    x = t.removeEvent,
                    y = t.splat,
                    b = t.SVGElement,
                    k = t.syncTimeout,
                    w = t.win;
                t.Series = t.seriesType("line", null, {
                    lineWidth: 2,
                    allowPointSelect: !1,
                    showCheckbox: !1,
                    animation: {
                        duration: 1e3
                    },
                    events: {},
                    marker: {
                        lineWidth: 0,
                        lineColor: "#ffffff",
                        enabledThreshold: 2,
                        radius: 4,
                        states: {
                            normal: {
                                animation: !0
                            },
                            hover: {
                                animation: {
                                    duration: 50
                                },
                                enabled: !0,
                                radiusPlus: 2,
                                lineWidthPlus: 1
                            },
                            select: {
                                fillColor: "#cccccc",
                                lineColor: "#000000",
                                lineWidth: 2
                            }
                        }
                    },
                    point: {
                        events: {}
                    },
                    dataLabels: {
                        align: "center",
                        formatter: function() {
                            return null === this.y ? "" : t.numberFormat(this.y, -1)
                        },
                        padding: 5,
                        style: {
                            fontSize: "11px",
                            fontWeight: "bold",
                            color: "contrast",
                            textOutline: "1px contrast"
                        },
                        verticalAlign: "bottom",
                        x: 0,
                        y: 0
                    },
                    cropThreshold: 300,
                    opacity: 1,
                    pointRange: 0,
                    softThreshold: !0,
                    states: {
                        normal: {
                            animation: !0
                        },
                        hover: {
                            animation: {
                                duration: 50
                            },
                            lineWidthPlus: 1,
                            marker: {},
                            halo: {
                                size: 10,
                                opacity: .25
                            }
                        },
                        select: {
                            animation: {
                                duration: 0
                            }
                        },
                        inactive: {
                            animation: {
                                duration: 50
                            },
                            opacity: .2
                        }
                    },
                    stickyTracking: !0,
                    turboThreshold: 1e3,
                    findNearestPointBy: "x"
                }, {
                    isCartesian: !0,
                    pointClass: t.Point,
                    sorted: !0,
                    requireSorting: !0,
                    directTouch: !1,
                    axisTypes: ["xAxis", "yAxis"],
                    colorCounter: 0,
                    parallelArrays: ["x", "y"],
                    coll: "series",
                    cropShoulder: 1,
                    init: function(t, i) {
                        d(this, "init", {
                            options: i
                        });
                        var s, n, o = this,
                            r = t.series;
                        o.chart = t, o.options = i = o.setOptions(i), o.linkedSeries = [], o.bindAxes(), c(o, {
                            name: i.name,
                            state: "",
                            visible: !1 !== i.visible,
                            selected: !0 === i.selected
                        }), s = i.events, m(s, function(t, i) {
                            o.hcEvents && o.hcEvents[i] && -1 !== o.hcEvents[i].indexOf(t) || e(o, i, t)
                        }), (s && s.click || i.point && i.point.events && i.point.events.click || i.allowPointSelect) && (t.runTrackerClick = !0), o.getColor(), o.getSymbol(), o.parallelArrays.forEach(function(t) {
                            o[t + "Data"] || (o[t + "Data"] = [])
                        }), o.points || o.setData(i.data, !1), o.isCartesian && (t.hasCartesianSeries = !0), r.length && (n = r[r.length - 1]), o._i = v(n && n._i, -1) + 1, t.orderSeries(this.insert(r)), d(this, "afterInit")
                    },
                    insert: function(t) {
                        var e, i = this.options.index;
                        if (u(i)) {
                            for (e = t.length; e--;)
                                if (i >= v(t[e].options.index, t[e]._i)) {
                                    t.splice(e + 1, 0, this);
                                    break
                                } - 1 === e && t.unshift(this), e += 1
                        } else t.push(this);
                        return v(e, t.length - 1)
                    },
                    bindAxes: function() {
                        var e, i = this,
                            s = i.options,
                            n = i.chart;
                        d(this, "bindAxes", null, function() {
                            (i.axisTypes || []).forEach(function(o) {
                                n[o].forEach(function(t) {
                                    e = t.options, (s[o] === e.index || void 0 !== s[o] && s[o] === e.id || void 0 === s[o] && 0 === e.index) && (i.insert(t.series), i[o] = t, t.isDirty = !0)
                                }), i[o] || i.optionalAxis === o || t.error(18, !0, n)
                            })
                        })
                    },
                    updateParallelArrays: function(t, e) {
                        var i = t.series,
                            s = arguments,
                            n = u(e) ? function(s) {
                                var n = "y" === s && i.toYData ? i.toYData(t) : t[s];
                                i[s + "Data"][e] = n
                            } : function(t) {
                                Array.prototype[e].apply(i[t + "Data"], Array.prototype.slice.call(s, 2))
                            };
                        i.parallelArrays.forEach(n)
                    },
                    hasData: function() {
                        return this.visible && void 0 !== this.dataMax && void 0 !== this.dataMin || this.visible && this.yData && 0 < this.yData.length
                    },
                    autoIncrement: function() {
                        var t, e = this.options,
                            i = this.xIncrement,
                            s = e.pointIntervalUnit,
                            n = this.chart.time;
                        i = v(i, e.pointStart, 0);
                        return this.pointInterval = t = v(this.pointInterval, e.pointInterval, 1), s && (e = new n.Date(i), "day" === s ? n.set("Date", e, n.get("Date", e) + t) : "month" === s ? n.set("Month", e, n.get("Month", e) + t) : "year" === s && n.set("FullYear", e, n.get("FullYear", e) + t), t = e.getTime() - i), this.xIncrement = i + t, i
                    },
                    setOptions: function(t) {
                        var e = this.chart,
                            i = e.options,
                            s = i.plotOptions,
                            n = (e.userOptions || {}).plotOptions || {},
                            o = s[this.type],
                            a = g(t);
                        return t = e.styledMode, d(this, "setOptions", {
                            userOptions: a
                        }), this.userOptions = a, e = g(o, s.series, a), this.tooltipOptions = g(r.tooltip, r.plotOptions.series && r.plotOptions.series.tooltip, r.plotOptions[this.type].tooltip, i.tooltip.userOptions, s.series && s.series.tooltip, s[this.type].tooltip, a.tooltip), this.stickyTracking = v(a.stickyTracking, n[this.type] && n[this.type].stickyTracking, n.series && n.series.stickyTracking, !(!this.tooltipOptions.shared || this.noSharedTooltip) || e.stickyTracking), null === o.marker && delete e.marker, this.zoneAxis = e.zoneAxis, i = this.zones = (e.zones || []).slice(), !e.negativeColor && !e.negativeFillColor || e.zones || (s = {
                            value: e[this.zoneAxis + "Threshold"] || e.threshold || 0,
                            className: "highcharts-negative"
                        }, t || (s.color = e.negativeColor, s.fillColor = e.negativeFillColor), i.push(s)), i.length && l(i[i.length - 1].value) && i.push(t ? {} : {
                            color: this.color,
                            fillColor: this.fillColor
                        }), d(this, "afterSetOptions", {
                            options: e
                        }), e
                    },
                    getName: function() {
                        return v(this.options.name, "Series " + (this.index + 1))
                    },
                    getCyclic: function(t, e, i) {
                        var s, n = this.chart,
                            o = this.userOptions,
                            r = t + "Index",
                            a = t + "Counter",
                            h = i ? i.length : v(n.options.chart[t + "Count"], n[t + "Count"]);
                        e || (s = v(o[r], o["_" + r]), l(s) || (n.series.length || (n[a] = 0), o["_" + r] = s = n[a] % h, n[a] += 1), i && (e = i[s])), void 0 !== s && (this[r] = s), this[t] = e
                    },
                    getColor: function() {
                        this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || a[this.type].color, this.chart.options.colors)
                    },
                    getSymbol: function() {
                        this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols)
                    },
                    findPointIndex: function(t, e) {
                        var i = t.id;
                        t = t.x;
                        var s, n, o = this.points;
                        return i && (void 0 !== (n = (i = this.chart.get(i)) && i.index) && (s = !0)), void 0 === n && u(t) && (n = this.xData.indexOf(t, e)), -1 !== n && void 0 !== n && this.cropped && (n = n >= this.cropStart ? n - this.cropStart : n), !s && o[n] && o[n].touched && (n = void 0), n
                    },
                    drawLegendSymbol: t.LegendSymbolMixin.drawLineMarker,
                    updateData: function(e) {
                        var i, s, n, o = this.options,
                            r = this.points,
                            a = [],
                            l = this.requireSorting,
                            h = e.length === r.length,
                            c = !0;
                        if (this.xIncrement = null, e.forEach(function(e, s) {
                                var c, d = t.defined(e) && this.pointClass.prototype.optionsToObject.call({
                                    series: this
                                }, e) || {};
                                c = d.x, (d.id || u(c)) && (-1 === (c = this.findPointIndex(d, n)) || void 0 === c ? a.push(e) : r[c] && e !== o.data[c] ? (r[c].update(e, !1, null, !1), r[c].touched = !0, l && (n = c + 1)) : r[c] && (r[c].touched = !0), (!h || s !== c || this.hasDerivedData) && (i = !0))
                            }, this), i)
                            for (e = r.length; e--;)(s = r[e]) && !s.touched && s.remove(!1);
                        else h ? e.forEach(function(t, e) {
                            r[e].update && t !== r[e].y && r[e].update(t, !1, null, !1)
                        }) : c = !1;
                        return r.forEach(function(t) {
                            t && (t.touched = !1)
                        }), !!c && (a.forEach(function(t) {
                            this.addPoint(t, !1, null, null, !1)
                        }, this), !0)
                    },
                    setData: function(e, i, s, n) {
                        var o, r, a = this,
                            l = a.points,
                            h = l && l.length || 0,
                            c = a.options,
                            d = a.chart,
                            g = null,
                            m = a.xAxis,
                            x = c.turboThreshold,
                            y = this.xData,
                            b = this.yData,
                            k = (o = a.pointArrayMap) && o.length,
                            w = c.keys,
                            M = 0,
                            S = 1;
                        if (o = (e = e || []).length, i = v(i, !0), !1 !== n && o && h && !a.cropped && !a.hasGroupedData && a.visible && !a.isSeriesBoosting && (r = this.updateData(e)), !r) {
                            if (a.xIncrement = null, a.colorCounter = 0, this.parallelArrays.forEach(function(t) {
                                    a[t + "Data"].length = 0
                                }), x && o > x) {
                                for (s = 0; null === g && s < o;) g = e[s], s++;
                                if (u(g))
                                    for (s = 0; s < o; s++) y[s] = this.autoIncrement(), b[s] = e[s];
                                else if (p(g))
                                    if (k)
                                        for (s = 0; s < o; s++) g = e[s], y[s] = g[0], b[s] = g.slice(1, k + 1);
                                    else
                                        for (w && (M = w.indexOf("x"), S = w.indexOf("y"), M = 0 <= M ? M : 0, S = 0 <= S ? S : 1), s = 0; s < o; s++) g = e[s], y[s] = g[M], b[s] = g[S];
                                else t.error(12, !1, d)
                            } else
                                for (s = 0; s < o; s++) void 0 !== e[s] && (g = {
                                    series: a
                                }, a.pointClass.prototype.applyOptions.apply(g, [e[s]]), a.updateParallelArrays(g, s));
                            for (b && f(b[0]) && t.error(14, !0, d), a.data = [], a.options.data = a.userOptions.data = e, s = h; s--;) l[s] && l[s].destroy && l[s].destroy();
                            m && (m.minRange = m.userMinRange), a.isDirty = d.isDirtyBox = !0, a.isDirtyData = !!l, s = !1
                        }
                        "point" === c.legendType && (this.processData(), this.generatePoints()), i && d.redraw(s)
                    },
                    processData: function(e) {
                        var i, s = this.xData,
                            n = this.yData,
                            o = s.length;
                        i = 0;
                        var r, a, l, h = this.xAxis;
                        l = (f = this.options).cropThreshold;
                        var c, d, p = this.getExtremesFromAll || f.getExtremesFromAll,
                            u = this.isCartesian,
                            f = h && h.val2lin,
                            g = h && h.isLog,
                            m = this.requireSorting;
                        if (u && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !e) return !1;
                        for (h && (c = (e = h.getExtremes()).min, d = e.max), u && this.sorted && !p && (!l || o > l || this.forceCrop) && (s[o - 1] < c || s[0] > d ? (s = [], n = []) : this.yData && (s[0] < c || s[o - 1] > d) && (s = (i = this.cropData(this.xData, this.yData, c, d)).xData, n = i.yData, i = i.start, r = !0)), l = s.length || 1; --l;) 0 < (o = g ? f(s[l]) - f(s[l - 1]) : s[l] - s[l - 1]) && (void 0 === a || o < a) ? a = o : 0 > o && m && (t.error(15, !1, this.chart), m = !1);
                        this.cropped = r, this.cropStart = i, this.processedXData = s, this.processedYData = n, this.closestPointRange = a
                    },
                    cropData: function(t, e, i, s, n) {
                        var o, r = t.length,
                            a = 0,
                            l = r;
                        for (n = v(n, this.cropShoulder), o = 0; o < r; o++)
                            if (t[o] >= i) {
                                a = Math.max(0, o - n);
                                break
                            }
                        for (i = o; i < r; i++)
                            if (t[i] > s) {
                                l = i + n;
                                break
                            }
                        return {
                            xData: t.slice(a, l),
                            yData: e.slice(a, l),
                            start: a,
                            end: l
                        }
                    },
                    generatePoints: function() {
                        var t, e, i, s, n = (f = this.options).data,
                            o = this.data,
                            r = this.processedXData,
                            a = this.processedYData,
                            l = this.pointClass,
                            h = r.length,
                            p = this.cropStart || 0,
                            u = this.hasGroupedData,
                            f = f.keys,
                            g = [];
                        for (o || u || ((o = []).length = n.length, o = this.data = o), f && u && (this.options.keys = !1), s = 0; s < h; s++) e = p + s, u ? ((i = (new l).init(this, [r[s]].concat(y(a[s])))).dataGroup = this.groupMap[s], i.dataGroup.options && (i.options = i.dataGroup.options, c(i, i.dataGroup.options), delete i.dataLabels)) : (i = o[e]) || void 0 === n[e] || (o[e] = i = (new l).init(this, n[e], r[s])), i && (i.index = e, g[s] = i);
                        if (this.options.keys = f, o && (h !== (t = o.length) || u))
                            for (s = 0; s < t; s++) s !== p || u || (s += h), o[s] && (o[s].destroyElements(), o[s].plotX = void 0);
                        this.data = o, this.points = g, d(this, "afterGeneratePoints")
                    },
                    getXExtremes: function(t) {
                        return {
                            min: n(t),
                            max: s(t)
                        }
                    },
                    getExtremes: function(t) {
                        var e, i, o, r, a, l = this.yAxis,
                            h = this.processedXData,
                            c = [],
                            f = 0,
                            g = (e = this.xAxis.getExtremes()).min,
                            m = e.max,
                            v = this.requireSorting ? this.cropShoulder : 0;
                        for (e = (t = t || this.stackedYData || this.processedYData || []).length, a = 0; a < e; a++)
                            if (o = h[a], r = t[a], i = (u(r, !0) || p(r)) && (!l.positiveValuesOnly || r.length || 0 < r), o = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (h[a + v] || o) >= g && (h[a - v] || o) <= m, i && o)
                                if (i = r.length)
                                    for (; i--;) "number" == typeof r[i] && (c[f++] = r[i]);
                                else c[f++] = r;
                        this.dataMin = n(c), this.dataMax = s(c), d(this, "afterGetExtremes")
                    },
                    translate: function() {
                        this.processedXData || this.processData(), this.generatePoints();
                        var t, e, i, s, n, r = this.options,
                            a = r.stacking,
                            h = this.xAxis,
                            c = h.categories,
                            f = this.yAxis,
                            g = this.points,
                            m = g.length,
                            x = !!this.modifyValue,
                            y = this.pointPlacementToXValue(),
                            b = u(y),
                            k = r.threshold,
                            w = r.startFromThreshold ? k : 0,
                            M = this.zoneAxis || "y",
                            S = Number.MAX_VALUE;
                        for (t = 0; t < m; t++) {
                            var C = g[t],
                                T = C.x;
                            i = C.y;
                            var A, L, P = C.low,
                                E = a && f.stacks[(this.negStacks && i < (w ? 0 : k) ? "-" : "") + this.stackKey];
                            f.positiveValuesOnly && null !== i && 0 >= i && (C.isNull = !0), C.plotX = e = o(Math.min(Math.max(-1e5, h.translate(T, 0, 0, 0, 1, y, "flags" === this.type)), 1e5)), a && this.visible && !C.isNull && E && E[T] && (n = this.getStackIndicator(n, T, this.index), L = (A = E[T]).points[n.key]), p(L) && (P = L[0], i = L[1], P === w && n.key === E[T].base && (P = v(u(k) && k, f.min)), f.positiveValuesOnly && 0 >= P && (P = null), C.total = C.stackTotal = A.total, C.percentage = A.total && C.y / A.total * 100, C.stackY = i, A.setOffset(this.pointXOffset || 0, this.barW || 0)), C.yBottom = l(P) ? Math.min(Math.max(-1e5, f.translate(P, 0, 1, 0, 1)), 1e5) : null, x && (i = this.modifyValue(i, C)), C.plotY = i = "number" == typeof i && 1 / 0 !== i ? Math.min(Math.max(-1e5, f.translate(i, 0, 1, 0, 1)), 1e5) : void 0, C.isInside = void 0 !== i && 0 <= i && i <= f.len && 0 <= e && e <= h.len, C.clientX = b ? o(h.translate(T, 0, 0, 0, 1, y)) : e, C.negative = C[M] < (r[M + "Threshold"] || k || 0), C.category = c && void 0 !== c[C.x] ? c[C.x] : C.x, C.isNull || (void 0 !== s && (S = Math.min(S, Math.abs(e - s))), s = e), C.zone = this.zones.length && C.getZone()
                        }
                        this.closestPointRangePx = S, d(this, "afterTranslate")
                    },
                    getValidPoints: function(t, e, i) {
                        var s = this.chart;
                        return (t || this.points || []).filter(function(t) {
                            return !(e && !s.isInsidePlot(t.plotX, t.plotY, s.inverted)) && (i || !t.isNull)
                        })
                    },
                    setClip: function(t) {
                        var e = this.chart,
                            i = this.options,
                            s = e.renderer,
                            n = e.inverted,
                            o = this.clipBox,
                            r = o || e.clipBox,
                            a = this.sharedClipKey || ["_sharedClip", t && t.duration, t && t.easing, r.height, i.xAxis, i.yAxis].join(),
                            l = e[a],
                            h = e[a + "m"];
                        l || (t && (r.width = 0, n && (r.x = e.plotSizeX), e[a + "m"] = h = s.clipRect(n ? e.plotSizeX + 99 : -99, n ? -e.plotLeft : -e.plotTop, 99, n ? e.chartWidth : e.chartHeight)), e[a] = l = s.clipRect(r), l.count = {
                            length: 0
                        }), t && !l.count[this.index] && (l.count[this.index] = !0, l.count.length += 1), !1 !== i.clip && (this.group.clip(t || o ? l : e.clipRect), this.markerGroup.clip(h), this.sharedClipKey = a), t || (l.count[this.index] && (delete l.count[this.index], --l.count.length), 0 === l.count.length && a && e[a] && (o || (e[a] = e[a].destroy()), e[a + "m"] && (e[a + "m"] = e[a + "m"].destroy())))
                    },
                    animate: function(t) {
                        var e, s = this.chart,
                            n = i(this.options.animation);
                        t ? this.setClip(n) : ((t = s[e = this.sharedClipKey]) && t.animate({
                            width: s.plotSizeX,
                            x: 0
                        }, n), s[e + "m"] && s[e + "m"].animate({
                            width: s.plotSizeX + 99,
                            x: s.inverted ? 0 : -99
                        }, n), this.animate = null)
                    },
                    afterAnimate: function() {
                        this.setClip(), d(this, "afterAnimate"), this.finishedAnimating = !0
                    },
                    drawPoints: function() {
                        var t, e, i, s, n, o, r, a, l = this.points,
                            h = this.chart,
                            c = this.options.marker,
                            d = this[this.specialGroup] || this.markerGroup;
                        t = this.xAxis;
                        var p, u = v(c.enabled, !(t && !t.isRadial) || null, this.closestPointRangePx >= c.enabledThreshold * c.radius);
                        if (!1 !== c.enabled || this._hasPointMarkers)
                            for (t = 0; t < l.length; t++) n = (s = (e = l[t]).graphic) ? "animate" : "attr", o = e.marker || {}, r = !!e.marker, i = u && void 0 === o.enabled || o.enabled, a = !1 !== e.isInside, i && !e.isNull ? (i = v(o.symbol, this.symbol), p = this.markerAttribs(e, e.selected && "select"), s ? s[a ? "show" : "hide"](!0).animate(p) : a && (0 < p.width || e.hasImage) && (e.graphic = s = h.renderer.symbol(i, p.x, p.y, p.width, p.height, r ? o : c).add(d)), s && !h.styledMode && s[n](this.pointAttribs(e, e.selected && "select")), s && s.addClass(e.getClassName(), !0)) : s && (e.graphic = s.destroy())
                    },
                    markerAttribs: function(t, e) {
                        var i = this.options.marker,
                            s = t.marker || {},
                            n = s.symbol || i.symbol,
                            o = v(s.radius, i.radius);
                        return e && (i = i.states[e], e = s.states && s.states[e], o = v(e && e.radius, i && i.radius, o + (i && i.radiusPlus || 0))), t.hasImage = n && 0 === n.indexOf("url"), t.hasImage && (o = 0), t = {
                            x: Math.floor(t.plotX) - o,
                            y: t.plotY - o
                        }, o && (t.width = t.height = 2 * o), t
                    },
                    pointAttribs: function(t, e) {
                        var i = this.options.marker,
                            s = (a = t && t.options) && a.marker || {},
                            n = this.color,
                            o = a && a.color,
                            r = t && t.color,
                            a = v(s.lineWidth, i.lineWidth),
                            l = t && t.zone && t.zone.color;
                        return t = 1, n = o || l || r || n, o = s.fillColor || i.fillColor || n, n = s.lineColor || i.lineColor || n, e && (i = i.states[e], e = s.states && s.states[e] || {}, a = v(e.lineWidth, i.lineWidth, a + v(e.lineWidthPlus, i.lineWidthPlus, 0)), o = e.fillColor || i.fillColor || o, n = e.lineColor || i.lineColor || n, t = v(e.opacity, i.opacity, t)), {
                            stroke: n,
                            "stroke-width": a,
                            fill: o,
                            opacity: t
                        }
                    },
                    destroy: function(e) {
                        var i, s, n, o = this,
                            r = o.chart,
                            a = /AppleWebKit\/533/.test(w.navigator.userAgent),
                            l = o.data || [];
                        for (d(o, "destroy"), e || x(o), (o.axisTypes || []).forEach(function(t) {
                                (n = o[t]) && n.series && (h(n.series, o), n.isDirty = n.forceRedraw = !0)
                            }), o.legendItem && o.chart.legend.destroyItem(o), i = l.length; i--;)(s = l[i]) && s.destroy && s.destroy();
                        o.points = null, t.clearTimeout(o.animationTimeout), m(o, function(t, e) {
                            t instanceof b && !t.survive && t[a && "group" === e ? "hide" : "destroy"]()
                        }), r.hoverSeries === o && (r.hoverSeries = null), h(r.series, o), r.orderSeries(), m(o, function(t, i) {
                            e && "hcEvents" === i || delete o[i]
                        })
                    },
                    getGraphPath: function(t, e, i) {
                        var s, n, o = this,
                            r = o.options,
                            a = r.step,
                            h = [],
                            c = [];
                        return (s = (t = t || o.points).reversed) && t.reverse(), (a = {
                            right: 1,
                            center: 2
                        }[a] || a && 3) && s && (a = 4 - a), !r.connectNulls || e || i || (t = this.getValidPoints(t)), t.forEach(function(s, d) {
                            var p = s.plotX,
                                u = s.plotY,
                                f = t[d - 1];
                            (s.leftCliff || f && f.rightCliff) && !i && (n = !0), s.isNull && !l(e) && 0 < d ? n = !r.connectNulls : s.isNull && !e ? n = !0 : (0 === d || n ? d = ["M", s.plotX, s.plotY] : o.getPointSpline ? d = o.getPointSpline(t, s, d) : a ? (d = 1 === a ? ["L", f.plotX, u] : 2 === a ? ["L", (f.plotX + p) / 2, f.plotY, "L", (f.plotX + p) / 2, u] : ["L", p, f.plotY]).push("L", p, u) : d = ["L", p, u], c.push(s.x), a && (c.push(s.x), 2 === a && c.push(s.x)), h.push.apply(h, d), n = !1)
                        }), h.xMap = c, o.graphPath = h
                    },
                    drawGraph: function() {
                        var t = this,
                            e = this.options,
                            i = (this.gappedPath || this.getGraphPath).call(this),
                            s = this.chart.styledMode,
                            n = [
                                ["graph", "highcharts-graph"]
                            ];
                        s || n[0].push(e.lineColor || this.color || "#cccccc", e.dashStyle), (n = t.getZonesGraphs(n)).forEach(function(n, o) {
                            var r = n[0],
                                a = t[r],
                                l = a ? "animate" : "attr";
                            a ? (a.endX = t.preventGraphAnimation ? null : i.xMap, a.animate({
                                d: i
                            })) : i.length && (t[r] = a = t.chart.renderer.path(i).addClass(n[1]).attr({
                                zIndex: 1
                            }).add(t.group)), a && !s && (r = {
                                stroke: n[2],
                                "stroke-width": e.lineWidth,
                                fill: t.fillGraph && t.color || "none"
                            }, n[3] ? r.dashstyle = n[3] : "square" !== e.linecap && (r["stroke-linecap"] = r["stroke-linejoin"] = "round"), a[l](r).shadow(2 > o && e.shadow)), a && (a.startX = i.xMap, a.isArea = i.isArea)
                        })
                    },
                    getZonesGraphs: function(t) {
                        return this.zones.forEach(function(e, i) {
                            i = ["zone-graph-" + i, "highcharts-graph highcharts-zone-graph-" + i + " " + (e.className || "")], this.chart.styledMode || i.push(e.color || this.color, e.dashStyle || this.options.dashStyle), t.push(i)
                        }, this), t
                    },
                    applyZones: function() {
                        var t, e, i, s, n, o, r, a, l, h = this,
                            c = this.chart,
                            d = c.renderer,
                            p = this.zones,
                            u = this.clips || [],
                            f = this.graph,
                            g = this.area,
                            m = Math.max(c.chartWidth, c.chartHeight),
                            x = this[(this.zoneAxis || "y") + "Axis"],
                            y = c.inverted,
                            b = !1;
                        p.length && (f || g) && x && void 0 !== x.min && (n = x.reversed, o = x.horiz, f && !this.showLine && f.hide(), g && g.hide(), s = x.getExtremes(), p.forEach(function(p, k) {
                            t = n ? o ? c.plotWidth : 0 : o ? 0 : x.toPixels(s.min) || 0, t = Math.min(Math.max(v(e, t), 0), m), e = Math.min(Math.max(Math.round(x.toPixels(v(p.value, s.max), !0) || 0), 0), m), b && (t = e = x.toPixels(s.max)), r = Math.abs(t - e), a = Math.min(t, e), l = Math.max(t, e), x.isXAxis ? (i = {
                                x: y ? l : a,
                                y: 0,
                                width: r,
                                height: m
                            }, o || (i.x = c.plotHeight - i.x)) : (i = {
                                x: 0,
                                y: y ? l : a,
                                width: m,
                                height: r
                            }, o && (i.y = c.plotWidth - i.y)), y && d.isVML && (i = x.isXAxis ? {
                                x: 0,
                                y: n ? a : l,
                                height: i.width,
                                width: c.chartWidth
                            } : {
                                x: i.y - c.plotLeft - c.spacingBox.x,
                                y: 0,
                                width: i.height,
                                height: c.chartHeight
                            }), u[k] ? u[k].animate(i) : (u[k] = d.clipRect(i), f && h["zone-graph-" + k].clip(u[k]), g && h["zone-area-" + k].clip(u[k])), b = p.value > s.max, h.resetZones && 0 === e && (e = void 0)
                        }), this.clips = u)
                    },
                    invertGroups: function(t) {
                        function i() {
                            ["group", "markerGroup"].forEach(function(e) {
                                n[e] && (o.renderer.isVML && n[e].attr({
                                    width: n.yAxis.len,
                                    height: n.xAxis.len
                                }), n[e].width = n.yAxis.len, n[e].height = n.xAxis.len, n[e].invert(t))
                            })
                        }
                        var s, n = this,
                            o = n.chart;
                        n.xAxis && (s = e(o, "resize", i), e(n, "destroy", s), i(), n.invertGroups = i)
                    },
                    plotGroup: function(t, e, i, s, n) {
                        var o = this[t],
                            r = !o;
                        return r && (this[t] = o = this.chart.renderer.g().attr({
                            zIndex: s || .1
                        }).add(n)), o.addClass("highcharts-" + e + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (l(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (o.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), o.attr({
                            visibility: i
                        })[r ? "attr" : "animate"](this.getPlotBox()), o
                    },
                    getPlotBox: function() {
                        var t = this.chart,
                            e = this.xAxis,
                            i = this.yAxis;
                        return t.inverted && (e = i, i = this.xAxis), {
                            translateX: e ? e.left : t.plotLeft,
                            translateY: i ? i.top : t.plotTop,
                            scaleX: 1,
                            scaleY: 1
                        }
                    },
                    render: function() {
                        var t, e = this,
                            s = e.chart,
                            n = e.options,
                            o = !!e.animate && s.renderer.isSVG && i(n.animation).duration,
                            r = e.visible ? "inherit" : "hidden",
                            a = n.zIndex,
                            l = e.hasRendered,
                            h = s.seriesGroup,
                            c = s.inverted;
                        d(this, "render"), t = e.plotGroup("group", "series", r, a, h), e.markerGroup = e.plotGroup("markerGroup", "markers", r, a, h), o && e.animate(!0), t.inverted = !(!e.isCartesian && !e.invertable) && c, e.drawGraph && (e.drawGraph(), e.applyZones()), e.visible && e.drawPoints(), e.drawDataLabels && e.drawDataLabels(), e.redrawPoints && e.redrawPoints(), e.drawTracker && !1 !== e.options.enableMouseTracking && e.drawTracker(), e.invertGroups(c), !1 === n.clip || e.sharedClipKey || l || t.clip(s.clipRect), o && e.animate(), l || (e.animationTimeout = k(function() {
                            e.afterAnimate()
                        }, o)), e.isDirty = !1, e.hasRendered = !0, d(e, "afterRender")
                    },
                    redraw: function() {
                        var t = this.chart,
                            e = this.isDirty || this.isDirtyData,
                            i = this.group,
                            s = this.xAxis,
                            n = this.yAxis;
                        i && (t.inverted && i.attr({
                            width: t.plotWidth,
                            height: t.plotHeight
                        }), i.animate({
                            translateX: v(s && s.left, t.plotLeft),
                            translateY: v(n && n.top, t.plotTop)
                        })), this.translate(), this.render(), e && delete this.kdTree
                    },
                    kdAxisArray: ["clientX", "plotY"],
                    searchPoint: function(t, e) {
                        var i = this.xAxis,
                            s = this.yAxis,
                            n = this.chart.inverted;
                        return this.searchKDTree({
                            clientX: n ? i.len - t.chartY + i.pos : t.chartX - i.pos,
                            plotY: n ? s.len - t.chartX + s.pos : t.chartY - s.pos
                        }, e, t)
                    },
                    buildKDTree: function(t) {
                        this.buildingKdTree = !0;
                        var e = this,
                            i = -1 < e.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                        delete e.kdTree, k(function() {
                            e.kdTree = function t(i, s, n) {
                                var o, r;
                                if (r = i && i.length) return o = e.kdAxisArray[s % n], i.sort(function(t, e) {
                                    return t[o] - e[o]
                                }), {
                                    point: i[r = Math.floor(r / 2)],
                                    left: t(i.slice(0, r), s + 1, n),
                                    right: t(i.slice(r + 1), s + 1, n)
                                }
                            }(e.getValidPoints(null, !e.directTouch), i, i), e.buildingKdTree = !1
                        }, e.options.kdNow || t && "touchstart" === t.type ? 0 : 1)
                    },
                    searchKDTree: function(t, e, i) {
                        var s = this,
                            n = this.kdAxisArray[0],
                            o = this.kdAxisArray[1],
                            r = e ? "distX" : "dist";
                        if (e = -1 < s.options.findNearestPointBy.indexOf("y") ? 2 : 1, this.kdTree || this.buildingKdTree || this.buildKDTree(i), this.kdTree) return function t(e, i, a, h) {
                            var c, d, p = i.point,
                                u = s.kdAxisArray[a % h],
                                f = p;
                            return d = l(e[n]) && l(p[n]) ? Math.pow(e[n] - p[n], 2) : null, c = l(e[o]) && l(p[o]) ? Math.pow(e[o] - p[o], 2) : null, c = (d || 0) + (c || 0), p.dist = l(c) ? Math.sqrt(c) : Number.MAX_VALUE, p.distX = l(d) ? Math.sqrt(d) : Number.MAX_VALUE, c = 0 > (u = e[u] - p[u]) ? "left" : "right", d = 0 > u ? "right" : "left", i[c] && (f = (c = t(e, i[c], a + 1, h))[r] < f[r] ? c : p), i[d] && Math.sqrt(u * u) < f[r] && (f = (e = t(e, i[d], a + 1, h))[r] < f[r] ? e : f), f
                        }(t, this.kdTree, e, e)
                    },
                    pointPlacementToXValue: function() {
                        var t = this.options.pointPlacement;
                        return "between" === t && (t = .5), u(t) && (t *= v(this.options.pointRange || this.xAxis.pointRange)), t
                    }
                })
            }), e(i, "parts/Stacking.js", [i["parts/Globals.js"]], function(t) {
                var e = t.Axis,
                    i = t.Chart,
                    s = t.correctFloat,
                    n = t.defined,
                    o = t.destroyObjectProperties,
                    r = t.format,
                    a = t.objectEach,
                    l = t.pick,
                    h = t.Series;
                t.StackItem = function(t, e, i, s, n) {
                    var o = t.chart.inverted;
                    this.axis = t, this.isNegative = i, this.options = e, this.x = s, this.total = null, this.points = {}, this.stack = n, this.rightCliff = this.leftCliff = 0, this.alignOptions = {
                        align: e.align || (o ? i ? "left" : "right" : "center"),
                        verticalAlign: e.verticalAlign || (o ? "middle" : i ? "bottom" : "top"),
                        y: l(e.y, o ? 4 : i ? 14 : -6),
                        x: l(e.x, o ? i ? -6 : 6 : 0)
                    }, this.textAlign = e.textAlign || (o ? i ? "right" : "left" : "center")
                }, t.StackItem.prototype = {
                    destroy: function() {
                        o(this, this.axis)
                    },
                    render: function(t) {
                        var e = this.axis.chart,
                            i = this.options,
                            s = (s = i.format) ? r(s, this, e.time) : i.formatter.call(this);
                        this.label ? this.label.attr({
                            text: s,
                            visibility: "hidden"
                        }) : this.label = e.renderer.text(s, null, null, i.useHTML).css(i.style).attr({
                            align: this.textAlign,
                            rotation: i.rotation,
                            visibility: "hidden"
                        }).add(t), this.label.labelrank = e.plotHeight
                    },
                    setOffset: function(t, e) {
                        var i = this.axis,
                            s = i.chart,
                            o = i.translate(i.usePercentage ? 100 : this.total, 0, 0, 0, 1),
                            r = i.translate(0);
                        r = n(o) && Math.abs(o - r);
                        t = s.xAxis[0].translate(this.x) + t, i = n(o) && this.getStackBox(s, this, t, o, e, r, i), (e = this.label) && i && (e.align(this.alignOptions, null, i), i = e.alignAttr, e[!1 === this.options.crop || s.isInsidePlot(i.x, i.y) ? "show" : "hide"](!0))
                    },
                    getStackBox: function(t, e, i, s, n, o, r) {
                        var a = e.axis.reversed,
                            l = t.inverted;
                        return t = r.height + r.pos - (l ? t.plotLeft : t.plotTop), e = e.isNegative && !a || !e.isNegative && a, {
                            x: l ? e ? s : s - o : i,
                            y: l ? t - i - n : e ? t - s - o : t - s,
                            width: l ? o : n,
                            height: l ? n : o
                        }
                    }
                }, i.prototype.getStacks = function() {
                    var t = this;
                    t.yAxis.forEach(function(t) {
                        t.stacks && t.hasVisibleSeries && (t.oldStacks = t.stacks)
                    }), t.series.forEach(function(e) {
                        !e.options.stacking || !0 !== e.visible && !1 !== t.options.chart.ignoreHiddenSeries || (e.stackKey = e.type + l(e.options.stack, ""))
                    })
                }, e.prototype.buildStacks = function() {
                    var t, e = this.series,
                        i = l(this.options.reversedStacks, !0),
                        s = e.length;
                    if (!this.isXAxis) {
                        for (this.usePercentage = !1, t = s; t--;) e[i ? t : s - t - 1].setStackedPoints();
                        for (t = 0; t < s; t++) e[t].modifyStacks()
                    }
                }, e.prototype.renderStackTotals = function() {
                    var t = this.chart,
                        e = t.renderer,
                        i = this.stacks,
                        s = this.stackTotalGroup;
                    s || (this.stackTotalGroup = s = e.g("stack-labels").attr({
                        visibility: "visible",
                        zIndex: 6
                    }).add()), s.translate(t.plotLeft, t.plotTop), a(i, function(t) {
                        a(t, function(t) {
                            t.render(s)
                        })
                    })
                }, e.prototype.resetStacks = function() {
                    var t = this,
                        e = t.stacks;
                    t.isXAxis || a(e, function(e) {
                        a(e, function(i, s) {
                            i.touched < t.stacksTouched ? (i.destroy(), delete e[s]) : (i.total = null, i.cumulative = null)
                        })
                    })
                }, e.prototype.cleanStacks = function() {
                    var t;
                    this.isXAxis || (this.oldStacks && (t = this.stacks = this.oldStacks), a(t, function(t) {
                        a(t, function(t) {
                            t.cumulative = t.total
                        })
                    }))
                }, h.prototype.setStackedPoints = function() {
                    if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
                        var e, i, o, r, a, h, c, d = this.processedXData,
                            p = this.processedYData,
                            u = [],
                            f = p.length,
                            g = (x = this.options).threshold,
                            m = l(x.startFromThreshold && g, 0),
                            v = x.stack,
                            x = x.stacking,
                            y = this.stackKey,
                            b = "-" + y,
                            k = this.negStacks,
                            w = this.yAxis,
                            M = w.stacks,
                            S = w.oldStacks;
                        for (w.stacksTouched += 1, a = 0; a < f; a++) h = d[a], c = p[a], r = (e = this.getStackIndicator(e, h, this.index)).key, M[o = (i = k && c < (m ? 0 : g)) ? b : y] || (M[o] = {}), M[o][h] || (S[o] && S[o][h] ? (M[o][h] = S[o][h], M[o][h].total = null) : M[o][h] = new t.StackItem(w, w.options.stackLabels, i, h, v)), o = M[o][h], null !== c ? (o.points[r] = o.points[this.index] = [l(o.cumulative, m)], n(o.cumulative) || (o.base = r), o.touched = w.stacksTouched, 0 < e.index && !1 === this.singleStacks && (o.points[r][0] = o.points[this.index + "," + h + ",0"][0])) : o.points[r] = o.points[this.index] = null, "percent" === x ? (i = i ? y : b, k && M[i] && M[i][h] ? (i = M[i][h], o.total = i.total = Math.max(i.total, o.total) + Math.abs(c) || 0) : o.total = s(o.total + (Math.abs(c) || 0))) : o.total = s(o.total + (c || 0)), o.cumulative = l(o.cumulative, m) + (c || 0), null !== c && (o.points[r].push(o.cumulative), u[a] = o.cumulative);
                        "percent" === x && (w.usePercentage = !0), this.stackedYData = u, w.oldStacks = {}
                    }
                }, h.prototype.modifyStacks = function() {
                    var t, e = this,
                        i = e.stackKey,
                        s = e.yAxis.stacks,
                        n = e.processedXData,
                        o = e.options.stacking;
                    e[o + "Stacker"] && [i, "-" + i].forEach(function(i) {
                        for (var r, a, l = n.length; l--;) r = n[l], t = e.getStackIndicator(t, r, e.index, i), (a = (r = s[i] && s[i][r]) && r.points[t.key]) && e[o + "Stacker"](a, r, l)
                    })
                }, h.prototype.percentStacker = function(t, e, i) {
                    e = e.total ? 100 / e.total : 0, t[0] = s(t[0] * e), t[1] = s(t[1] * e), this.stackedYData[i] = t[1]
                }, h.prototype.getStackIndicator = function(t, e, i, s) {
                    return !n(t) || t.x !== e || s && t.key !== s ? t = {
                        x: e,
                        index: 0,
                        key: s
                    } : t.index++, t.key = [i, e, t.index].join(), t
                }
            }), e(i, "parts/Dynamics.js", [i["parts/Globals.js"]], function(t) {
                var e = t.addEvent,
                    i = t.animate,
                    s = t.Axis,
                    n = t.Chart,
                    o = t.createElement,
                    r = t.css,
                    a = t.defined,
                    l = t.erase,
                    h = t.extend,
                    c = t.fireEvent,
                    d = t.isNumber,
                    p = t.isObject,
                    u = t.isArray,
                    f = t.merge,
                    g = t.objectEach,
                    m = t.pick,
                    v = t.Point,
                    x = t.Series,
                    y = t.seriesTypes,
                    b = t.setAnimation,
                    k = t.splat;
                t.cleanRecursively = function(e, i) {
                    var s = {};
                    return g(e, function(n, o) {
                        p(e[o], !0) && i[o] ? (n = t.cleanRecursively(e[o], i[o]), Object.keys(n).length && (s[o] = n)) : (p(e[o]) || e[o] !== i[o]) && (s[o] = e[o])
                    }), s
                }, h(n.prototype, {
                    addSeries: function(t, e, i) {
                        var s, n = this;
                        return t && (e = m(e, !0), c(n, "addSeries", {
                            options: t
                        }, function() {
                            s = n.initSeries(t), n.isDirtyLegend = !0, n.linkSeries(), c(n, "afterAddSeries", {
                                series: s
                            }), e && n.redraw(i)
                        })), s
                    },
                    addAxis: function(t, e, i, n) {
                        var o = e ? "xAxis" : "yAxis",
                            r = this.options;
                        return t = f(t, {
                            index: this[o].length,
                            isX: e
                        }), e = new s(this, t), r[o] = k(r[o] || {}), r[o].push(t), m(i, !0) && this.redraw(n), e
                    },
                    showLoading: function(t) {
                        var s = this,
                            n = s.options,
                            a = s.loadingDiv,
                            l = n.loading,
                            c = function() {
                                a && r(a, {
                                    left: s.plotLeft + "px",
                                    top: s.plotTop + "px",
                                    width: s.plotWidth + "px",
                                    height: s.plotHeight + "px"
                                })
                            };
                        a || (s.loadingDiv = a = o("div", {
                            className: "highcharts-loading highcharts-loading-hidden"
                        }, null, s.container), s.loadingSpan = o("span", {
                            className: "highcharts-loading-inner"
                        }, null, a), e(s, "redraw", c)), a.className = "highcharts-loading", s.loadingSpan.innerHTML = t || n.lang.loading, s.styledMode || (r(a, h(l.style, {
                            zIndex: 10
                        })), r(s.loadingSpan, l.labelStyle), s.loadingShown || (r(a, {
                            opacity: 0,
                            display: ""
                        }), i(a, {
                            opacity: l.style.opacity || .5
                        }, {
                            duration: l.showDuration || 0
                        }))), s.loadingShown = !0, c()
                    },
                    hideLoading: function() {
                        var t = this.options,
                            e = this.loadingDiv;
                        e && (e.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || i(e, {
                            opacity: 0
                        }, {
                            duration: t.loading.hideDuration || 100,
                            complete: function() {
                                r(e, {
                                    display: "none"
                                })
                            }
                        })), this.loadingShown = !1
                    },
                    propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
                    propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
                    propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),
                    collectionsWithUpdate: "xAxis yAxis zAxis series colorAxis pane".split(" "),
                    update: function(e, i, s, n) {
                        var o, r, l, h, p = this,
                            u = {
                                credits: "addCredits",
                                title: "setTitle",
                                subtitle: "setSubtitle"
                            },
                            v = [];
                        c(p, "update", {
                            options: e
                        }), e.isResponsiveOptions || p.setResponsive(!1, !0), (o = (e = t.cleanRecursively(e, p.options)).chart) && (f(!0, p.options.chart, o), "className" in o && p.setClassName(o.className), "reflow" in o && p.setReflow(o.reflow), ("inverted" in o || "polar" in o || "type" in o) && (p.propFromSeries(), r = !0), "alignTicks" in o && (r = !0), g(o, function(t, e) {
                            -1 !== p.propsRequireUpdateSeries.indexOf("chart." + e) && (l = !0), -1 !== p.propsRequireDirtyBox.indexOf(e) && (p.isDirtyBox = !0), -1 !== p.propsRequireReflow.indexOf(e) && (h = !0)
                        }), !p.styledMode && "style" in o && p.renderer.setStyle(o.style)), !p.styledMode && e.colors && (this.options.colors = e.colors), e.plotOptions && f(!0, this.options.plotOptions, e.plotOptions), g(e, function(t, e) {
                            p[e] && "function" == typeof p[e].update ? p[e].update(t, !1) : "function" == typeof p[u[e]] && p[u[e]](t), "chart" !== e && -1 !== p.propsRequireUpdateSeries.indexOf(e) && (l = !0)
                        }), this.collectionsWithUpdate.forEach(function(t) {
                            var i;
                            e[t] && ("series" === t && (i = [], p[t].forEach(function(t, e) {
                                t.options.isInternal || i.push(m(t.options.index, e))
                            })), k(e[t]).forEach(function(e, n) {
                                (n = a(e.id) && p.get(e.id) || p[t][i ? i[n] : n]) && n.coll === t && (n.update(e, !1), s && (n.touched = !0)), !n && s && ("series" === t ? p.addSeries(e, !1).touched = !0 : "xAxis" !== t && "yAxis" !== t || (p.addAxis(e, "xAxis" === t, !1).touched = !0))
                            }), s && p[t].forEach(function(t) {
                                t.touched || t.options.isInternal ? delete t.touched : v.push(t)
                            }))
                        }), v.forEach(function(t) {
                            t.remove && t.remove(!1)
                        }), r && p.axes.forEach(function(t) {
                            t.update({}, !1)
                        }), l && p.series.forEach(function(t) {
                            t.update({}, !1)
                        }), e.loading && f(!0, p.options.loading, e.loading), r = o && o.width, o = o && o.height, t.isString(o) && (o = t.relativeLength(o, r || p.chartWidth)), h || d(r) && r !== p.chartWidth || d(o) && o !== p.chartHeight ? p.setSize(r, o, n) : m(i, !0) && p.redraw(n), c(p, "afterUpdate", {
                            options: e,
                            redraw: i,
                            animation: n
                        })
                    },
                    setSubtitle: function(t) {
                        this.setTitle(void 0, t)
                    }
                }), h(v.prototype, {
                    update: function(t, e, i, s) {
                        function n() {
                            r.applyOptions(t), null === r.y && l && (r.graphic = l.destroy()), p(t, !0) && (l && l.element && t && t.marker && void 0 !== t.marker.symbol && (r.graphic = l.destroy()), t && t.dataLabels && r.dataLabel && (r.dataLabel = r.dataLabel.destroy()), r.connector && (r.connector = r.connector.destroy())), o = r.index, a.updateParallelArrays(r, o), c.data[o] = p(c.data[o], !0) || p(t, !0) ? r.options : m(t, c.data[o]), a.isDirty = a.isDirtyData = !0, !a.fixedBox && a.hasCartesianSeries && (h.isDirtyBox = !0), "point" === c.legendType && (h.isDirtyLegend = !0), e && h.redraw(i)
                        }
                        var o, r = this,
                            a = r.series,
                            l = r.graphic,
                            h = a.chart,
                            c = a.options;
                        e = m(e, !0), !1 === s ? n() : r.firePointEvent("update", {
                            options: t
                        }, n)
                    },
                    remove: function(t, e) {
                        this.series.removePoint(this.series.data.indexOf(this), t, e)
                    }
                }), h(x.prototype, {
                    addPoint: function(t, e, i, s, n) {
                        var o, r, a, l, h = this.options,
                            d = this.data,
                            p = this.chart,
                            u = (u = this.xAxis) && u.hasNames && u.names,
                            f = h.data,
                            g = this.xData;
                        if (e = m(e, !0), o = {
                                series: this
                            }, this.pointClass.prototype.applyOptions.apply(o, [t]), l = o.x, a = g.length, this.requireSorting && l < g[a - 1])
                            for (r = !0; a && g[a - 1] > l;) a--;
                        this.updateParallelArrays(o, "splice", a, 0, 0), this.updateParallelArrays(o, a), u && o.name && (u[l] = o.name), f.splice(a, 0, t), r && (this.data.splice(a, 0, null), this.processData()), "point" === h.legendType && this.generatePoints(), i && (d[0] && d[0].remove ? d[0].remove(!1) : (d.shift(), this.updateParallelArrays(o, "shift"), f.shift())), !1 !== n && c(this, "addPoint", {
                            point: o
                        }), this.isDirtyData = this.isDirty = !0, e && p.redraw(s)
                    },
                    removePoint: function(t, e, i) {
                        var s = this,
                            n = s.data,
                            o = n[t],
                            r = s.points,
                            a = s.chart,
                            l = function() {
                                r && r.length === n.length && r.splice(t, 1), n.splice(t, 1), s.options.data.splice(t, 1), s.updateParallelArrays(o || {
                                    series: s
                                }, "splice", t, 1), o && o.destroy(), s.isDirty = !0, s.isDirtyData = !0, e && a.redraw()
                            };
                        b(i, a), e = m(e, !0), o ? o.firePointEvent("remove", null, l) : l()
                    },
                    remove: function(t, e, i, s) {
                        function n() {
                            o.destroy(s), o.remove = null, r.isDirtyLegend = r.isDirtyBox = !0, r.linkSeries(), m(t, !0) && r.redraw(e)
                        }
                        var o = this,
                            r = o.chart;
                        !1 !== i ? c(o, "remove", null, n) : n()
                    },
                    update: function(e, i) {
                        e = t.cleanRecursively(e, this.userOptions), c(this, "update", {
                            options: e
                        });
                        var s, n, o = this,
                            r = o.chart,
                            a = o.userOptions,
                            l = o.initialType || o.type,
                            d = e.type || a.type || r.options.chart.type,
                            p = !(this.hasDerivedData || e.dataGrouping || d && d !== this.type || void 0 !== e.pointStart || e.pointInterval || e.pointIntervalUnit || e.keys),
                            u = y[l].prototype,
                            g = ["group", "markerGroup", "dataLabelsGroup"],
                            v = ["navigatorSeries", "baseSeries"],
                            x = o.finishedAnimating && {
                                animation: !1
                            },
                            b = {};
                        for (n in p && (v.push("data", "isDirtyData", "points", "processedXData", "processedYData", "xIncrement"), !1 !== e.visible && v.push("area", "graph"), o.parallelArrays.forEach(function(t) {
                                v.push(t + "Data")
                            }), e.data && this.setData(e.data, !1)), e = f(a, x, {
                                index: void 0 === a.index ? o.index : a.index,
                                pointStart: m(a.pointStart, o.xData[0])
                            }, !p && {
                                data: o.options.data
                            }, e), (v = g.concat(v)).forEach(function(t) {
                                v[t] = o[t], delete o[t]
                            }), o.remove(!1, null, !1, !0), u) o[n] = void 0;
                        y[d || l] ? h(o, y[d || l].prototype) : t.error(17, !0, r), v.forEach(function(t) {
                            o[t] = v[t]
                        }), o.init(r, e), p && this.points && (!1 === (s = o.options).visible ? (b.graphic = 1, b.dataLabel = 1) : (s.marker && !1 === s.marker.enabled && (b.graphic = 1), s.dataLabels && !1 === s.dataLabels.enabled && (b.dataLabel = 1)), this.points.forEach(function(t) {
                            t && t.series && (t.resolveColor(), Object.keys(b).length && t.destroyElements(b), !1 === s.showInLegend && t.legendItem && r.legend.destroyItem(t))
                        }, this)), e.zIndex !== a.zIndex && g.forEach(function(t) {
                            o[t] && o[t].attr({
                                zIndex: e.zIndex
                            })
                        }), o.initialType = l, r.linkSeries(), c(this, "afterUpdate"), m(i, !0) && r.redraw(!!p && void 0)
                    },
                    setName: function(t) {
                        this.name = this.options.name = this.userOptions.name = t, this.chart.isDirtyLegend = !0
                    }
                }), h(s.prototype, {
                    update: function(t, e) {
                        var i = this.chart,
                            s = t && t.events || {};
                        t = f(this.userOptions, t), i.options[this.coll].indexOf && (i.options[this.coll][i.options[this.coll].indexOf(this.userOptions)] = t), g(i.options[this.coll].events, function(t, e) {
                            void 0 === s[e] && (s[e] = void 0)
                        }), this.destroy(!0), this.init(i, h(t, {
                            events: s
                        })), i.isDirtyBox = !0, m(e, !0) && i.redraw()
                    },
                    remove: function(t) {
                        for (var e = this.chart, i = this.coll, s = this.series, n = s.length; n--;) s[n] && s[n].remove(!1);
                        l(e.axes, this), l(e[i], this), u(e.options[i]) ? e.options[i].splice(this.options.index, 1) : delete e.options[i], e[i].forEach(function(t, e) {
                            t.options.index = t.userOptions.index = e
                        }), this.destroy(), e.isDirtyBox = !0, m(t, !0) && e.redraw()
                    },
                    setTitle: function(t, e) {
                        this.update({
                            title: t
                        }, e)
                    },
                    setCategories: function(t, e) {
                        this.update({
                            categories: t
                        }, e)
                    }
                })
            }), e(i, "parts/AreaSeries.js", [i["parts/Globals.js"]], function(t) {
                var e = t.color,
                    i = t.pick,
                    s = t.Series;
                (0, t.seriesType)("area", "line", {
                    softThreshold: !1,
                    threshold: 0
                }, {
                    singleStacks: !1,
                    getStackPoints: function(e) {
                        var s, n, o = [],
                            r = [],
                            a = this.xAxis,
                            l = this.yAxis,
                            h = l.stacks[this.stackKey],
                            c = {},
                            d = this.index,
                            p = l.series,
                            u = p.length,
                            f = i(l.options.reversedStacks, !0) ? 1 : -1;
                        if (e = e || this.points, this.options.stacking) {
                            for (n = 0; n < e.length; n++) e[n].leftNull = e[n].rightNull = null, c[e[n].x] = e[n];
                            t.objectEach(h, function(t, e) {
                                null !== t.total && r.push(e)
                            }), r.sort(function(t, e) {
                                return t - e
                            }), s = p.map(function(t) {
                                return t.visible
                            }), r.forEach(function(t, e) {
                                var i, p, g = 0;
                                if (c[t] && !c[t].isNull) o.push(c[t]), [-1, 1].forEach(function(o) {
                                    var a = 1 === o ? "rightNull" : "leftNull",
                                        l = 0,
                                        g = h[r[e + o]];
                                    if (g)
                                        for (n = d; 0 <= n && n < u;)(i = g.points[n]) || (n === d ? c[t][a] = !0 : s[n] && (p = h[t].points[n]) && (l -= p[1] - p[0])), n += f;
                                    c[t][1 === o ? "rightCliff" : "leftCliff"] = l
                                });
                                else {
                                    for (n = d; 0 <= n && n < u;) {
                                        if (i = h[t].points[n]) {
                                            g = i[1];
                                            break
                                        }
                                        n += f
                                    }
                                    g = l.translate(g, 0, 1, 0, 1), o.push({
                                        isNull: !0,
                                        plotX: a.translate(t, 0, 0, 0, 1),
                                        x: t,
                                        plotY: g,
                                        yBottom: g
                                    })
                                }
                            })
                        }
                        return o
                    },
                    getGraphPath: function(t) {
                        var e, n, o, r, a = s.prototype.getGraphPath,
                            l = (m = this.options).stacking,
                            h = this.yAxis,
                            c = [],
                            d = [],
                            p = this.index,
                            u = h.stacks[this.stackKey],
                            f = m.threshold,
                            g = h.getThreshold(m.threshold),
                            m = m.connectNulls || "percent" === l,
                            v = function(e, i, s) {
                                var n = t[e];
                                e = l && u[n.x].points[p];
                                var r = n[s + "Null"] || 0;
                                s = n[s + "Cliff"] || 0;
                                var a, m;
                                n = !0;
                                s || r ? (a = (r ? e[0] : e[1]) + s, m = e[0] + s, n = !!r) : !l && t[i] && t[i].isNull && (a = m = f), void 0 !== a && (d.push({
                                    plotX: o,
                                    plotY: null === a ? g : h.getThreshold(a),
                                    isNull: n,
                                    isCliff: !0
                                }), c.push({
                                    plotX: o,
                                    plotY: null === m ? g : h.getThreshold(m),
                                    doCurve: !1
                                }))
                            };
                        for (t = t || this.points, l && (t = this.getStackPoints(t)), e = 0; e < t.length; e++) n = t[e].isNull, o = i(t[e].rectPlotX, t[e].plotX), r = i(t[e].yBottom, g), (!n || m) && (m || v(e, e - 1, "left"), n && !l && m || (d.push(t[e]), c.push({
                            x: e,
                            plotX: o,
                            plotY: r
                        })), m || v(e, e + 1, "right"));
                        return e = a.call(this, d, !0, !0), c.reversed = !0, (n = a.call(this, c, !0, !0)).length && (n[0] = "L"), n = e.concat(n), a = a.call(this, d, !1, m), n.xMap = e.xMap, this.areaPath = n, a
                    },
                    drawGraph: function() {
                        this.areaPath = [], s.prototype.drawGraph.apply(this);
                        var t = this,
                            n = this.areaPath,
                            o = this.options,
                            r = [
                                ["area", "highcharts-area", this.color, o.fillColor]
                            ];
                        this.zones.forEach(function(e, i) {
                            r.push(["zone-area-" + i, "highcharts-area highcharts-zone-area-" + i + " " + e.className, e.color || t.color, e.fillColor || o.fillColor])
                        }), r.forEach(function(s) {
                            var r = s[0],
                                a = t[r],
                                l = a ? "animate" : "attr",
                                h = {};
                            a ? (a.endX = t.preventGraphAnimation ? null : n.xMap, a.animate({
                                d: n
                            })) : (h.zIndex = 0, (a = t[r] = t.chart.renderer.path(n).addClass(s[1]).add(t.group)).isArea = !0), t.chart.styledMode || (h.fill = i(s[3], e(s[2]).setOpacity(i(o.fillOpacity, .75)).get())), a[l](h), a.startX = n.xMap, a.shiftUnit = o.step ? 2 : 1
                        })
                    },
                    drawLegendSymbol: t.LegendSymbolMixin.drawRectangle
                })
            }), e(i, "parts/SplineSeries.js", [i["parts/Globals.js"]], function(t) {
                var e = t.pick;
                (t = t.seriesType)("spline", "line", {}, {
                    getPointSpline: function(t, i, s) {
                        var n, o, r, a, l = i.plotX,
                            h = i.plotY,
                            c = t[s - 1];
                        if (s = t[s + 1], c && !c.isNull && !1 !== c.doCurve && !i.isCliff && s && !s.isNull && !1 !== s.doCurve && !i.isCliff) {
                            t = c.plotY, r = s.plotX;
                            var d = 0;
                            o = (1.5 * h + t) / 2.5, a = (1.5 * h + (s = s.plotY)) / 2.5, (r = (1.5 * l + r) / 2.5) !== (n = (1.5 * l + c.plotX) / 2.5) && (d = (a - o) * (r - l) / (r - n) + h - a), a += d, (o += d) > t && o > h ? a = 2 * h - (o = Math.max(t, h)) : o < t && o < h && (a = 2 * h - (o = Math.min(t, h))), a > s && a > h ? o = 2 * h - (a = Math.max(s, h)) : a < s && a < h && (o = 2 * h - (a = Math.min(s, h))), i.rightContX = r, i.rightContY = a
                        }
                        return i = ["C", e(c.rightContX, c.plotX), e(c.rightContY, c.plotY), e(n, l), e(o, h), l, h], c.rightContX = c.rightContY = null, i
                    }
                })
            }), e(i, "parts/AreaSplineSeries.js", [i["parts/Globals.js"]], function(t) {
                var e = t.seriesTypes.area.prototype;
                (0, t.seriesType)("areaspline", "spline", t.defaultPlotOptions.area, {
                    getStackPoints: e.getStackPoints,
                    getGraphPath: e.getGraphPath,
                    drawGraph: e.drawGraph,
                    drawLegendSymbol: t.LegendSymbolMixin.drawRectangle
                })
            }), e(i, "parts/ColumnSeries.js", [i["parts/Globals.js"]], function(t) {
                var e = t.animObject,
                    i = t.color,
                    s = t.extend,
                    n = t.defined,
                    o = t.isNumber,
                    r = t.merge,
                    a = t.pick,
                    l = t.Series,
                    h = t.seriesType,
                    c = t.svg;
                h("column", "line", {
                    borderRadius: 0,
                    crisp: !0,
                    groupPadding: .2,
                    marker: null,
                    pointPadding: .1,
                    minPointLength: 0,
                    cropThreshold: 50,
                    pointRange: null,
                    states: {
                        hover: {
                            halo: !1,
                            brightness: .1
                        },
                        select: {
                            color: "#cccccc",
                            borderColor: "#000000"
                        }
                    },
                    dataLabels: {
                        align: null,
                        verticalAlign: null,
                        y: null
                    },
                    softThreshold: !1,
                    startFromThreshold: !0,
                    stickyTracking: !1,
                    tooltip: {
                        distance: 6
                    },
                    threshold: 0,
                    borderColor: "#ffffff"
                }, {
                    cropShoulder: 0,
                    directTouch: !0,
                    trackerGroups: ["group", "dataLabelsGroup"],
                    negStacks: !0,
                    init: function() {
                        l.prototype.init.apply(this, arguments);
                        var t = this,
                            e = t.chart;
                        e.hasRendered && e.series.forEach(function(e) {
                            e.type === t.type && (e.isDirty = !0)
                        })
                    },
                    getColumnMetrics: function() {
                        var t, e = this,
                            i = e.options,
                            s = e.xAxis,
                            n = e.yAxis,
                            o = s.options.reversedStacks,
                            r = (o = s.reversed && !o || !s.reversed && o, {}),
                            l = 0;
                        !1 === i.grouping ? l = 1 : e.chart.series.forEach(function(i) {
                            var s, o = i.options,
                                a = i.yAxis;
                            i.type !== e.type || !i.visible && e.chart.options.chart.ignoreHiddenSeries || n.len !== a.len || n.pos !== a.pos || (o.stacking ? (t = i.stackKey, void 0 === r[t] && (r[t] = l++), s = r[t]) : !1 !== o.grouping && (s = l++), i.columnIndex = s)
                        });
                        var h = Math.min(Math.abs(s.transA) * (s.ordinalSlope || i.pointRange || s.closestPointRange || s.tickInterval || 1), s.len),
                            c = h * i.groupPadding,
                            d = (h - 2 * c) / (l || 1);
                        i = Math.min(i.maxPointWidth || s.len, a(i.pointWidth, d * (1 - 2 * i.pointPadding)));
                        return e.columnMetrics = {
                            width: i,
                            offset: (d - i) / 2 + (c + ((e.columnIndex || 0) + (o ? 1 : 0)) * d - h / 2) * (o ? -1 : 1)
                        }, e.columnMetrics
                    },
                    crispCol: function(t, e, i, s) {
                        var n = this.chart,
                            o = -((r = this.borderWidth) % 2 ? .5 : 0),
                            r = r % 2 ? .5 : 1;
                        return n.inverted && n.renderer.isVML && (r += 1), this.options.crisp && (i = Math.round(t + i) + o, i -= t = Math.round(t) + o), s = Math.round(e + s) + r, o = .5 >= Math.abs(e) && .5 < s, s -= e = Math.round(e) + r, o && s && (--e, s += 1), {
                            x: t,
                            y: e,
                            width: i,
                            height: s
                        }
                    },
                    translate: function() {
                        var t = this,
                            e = t.chart,
                            i = t.options,
                            s = t.dense = 2 > t.closestPointRange * t.xAxis.transA,
                            o = (s = t.borderWidth = a(i.borderWidth, s ? 0 : 1), t.yAxis),
                            r = i.threshold,
                            h = t.translatedThreshold = o.getThreshold(r),
                            c = a(i.minPointLength, 5),
                            d = t.getColumnMetrics(),
                            p = d.width,
                            u = t.barW = Math.max(p, 1 + 2 * s),
                            f = t.pointXOffset = d.offset;
                        e.inverted && (h -= .5), i.pointPadding && (u = Math.ceil(u)), l.prototype.translate.apply(t), t.points.forEach(function(i) {
                            var s, l = a(i.yBottom, h),
                                d = 999 + Math.abs(l),
                                g = p,
                                m = (d = Math.min(Math.max(-d, i.plotY), o.len + d), i.plotX + f),
                                v = u,
                                x = Math.min(d, l),
                                y = Math.max(d, l) - x;
                            c && Math.abs(y) < c && (y = c, s = !o.reversed && !i.negative || o.reversed && i.negative, i.y === r && t.dataMax <= r && o.min < r && (s = !s), x = Math.abs(x - h) > c ? l - c : h - (s ? c : 0)), n(i.options.pointWidth) && (g = v = Math.ceil(i.options.pointWidth), m -= Math.round((g - p) / 2)), i.barX = m, i.pointWidth = g, i.tooltipPos = e.inverted ? [o.len + o.pos - e.plotLeft - d, t.xAxis.len - m - v / 2, y] : [m + v / 2, d + o.pos - e.plotTop, y], i.shapeType = t.pointClass.prototype.shapeType || "rect", i.shapeArgs = t.crispCol.apply(t, i.isNull ? [m, h, v, 0] : [m, x, v, y])
                        })
                    },
                    getSymbol: t.noop,
                    drawLegendSymbol: t.LegendSymbolMixin.drawRectangle,
                    drawGraph: function() {
                        this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data")
                    },
                    pointAttribs: function(t, e) {
                        var s, n = this.options;
                        s = (p = this.pointAttrToOptions || {}).stroke || "borderColor";
                        var o, l = p["stroke-width"] || "borderWidth",
                            h = t && t.color || this.color,
                            c = t && t[s] || n[s] || this.color || h,
                            d = t && t[l] || n[l] || this[l] || 0,
                            p = t && t.dashStyle || n.dashStyle,
                            u = a(n.opacity, 1);
                        return t && this.zones.length && (o = t.getZone(), h = t.options.color || o && o.color || this.color, o && (c = o.borderColor || c, p = o.dashStyle || p, d = o.borderWidth || d)), e && (e = (t = r(n.states[e], t.options.states && t.options.states[e] || {})).brightness, h = t.color || void 0 !== e && i(h).brighten(t.brightness).get() || h, c = t[s] || c, d = t[l] || d, p = t.dashStyle || p, u = a(t.opacity, u)), s = {
                            fill: h,
                            stroke: c,
                            "stroke-width": d,
                            opacity: u
                        }, p && (s.dashstyle = p), s
                    },
                    drawPoints: function() {
                        var t, e = this,
                            i = this.chart,
                            s = e.options,
                            n = i.renderer,
                            a = s.animationLimit || 250;
                        e.points.forEach(function(l) {
                            var h = l.graphic,
                                c = h && i.pointCount < a ? "animate" : "attr";
                            o(l.plotY) && null !== l.y ? (t = l.shapeArgs, h && h.element.nodeName !== l.shapeType && (h = h.destroy()), h ? h[c](r(t)) : l.graphic = h = n[l.shapeType](t).add(l.group || e.group), s.borderRadius && h[c]({
                                r: s.borderRadius
                            }), i.styledMode || h[c](e.pointAttribs(l, l.selected && "select")).shadow(!1 !== l.allowShadow && s.shadow, null, s.stacking && !s.borderRadius), h.addClass(l.getClassName(), !0)) : h && (l.graphic = h.destroy())
                        })
                    },
                    animate: function(t) {
                        var i, n = this,
                            o = this.yAxis,
                            r = n.options,
                            a = this.chart.inverted,
                            l = {},
                            h = a ? "translateX" : "translateY";
                        c && (t ? (l.scaleY = .001, t = Math.min(o.pos + o.len, Math.max(o.pos, o.toPixels(r.threshold))), a ? l.translateX = t - o.len : l.translateY = t, n.clipBox && n.setClip(), n.group.attr(l)) : (i = n.group.attr(h), n.group.animate({
                            scaleY: 1
                        }, s(e(n.options.animation), {
                            step: function(t, e) {
                                l[h] = i + e.pos * (o.pos - i), n.group.attr(l)
                            }
                        })), n.animate = null))
                    },
                    remove: function() {
                        var t = this,
                            e = t.chart;
                        e.hasRendered && e.series.forEach(function(e) {
                            e.type === t.type && (e.isDirty = !0)
                        }), l.prototype.remove.apply(t, arguments)
                    }
                })
            }), e(i, "parts/BarSeries.js", [i["parts/Globals.js"]], function(t) {
                (t = t.seriesType)("bar", "column", null, {
                    inverted: !0
                })
            }), e(i, "parts/ScatterSeries.js", [i["parts/Globals.js"]], function(t) {
                var e = t.Series;
                (0, t.seriesType)("scatter", "line", {
                    lineWidth: 0,
                    findNearestPointBy: "xy",
                    jitter: {
                        x: 0,
                        y: 0
                    },
                    marker: {
                        enabled: !0
                    },
                    tooltip: {
                        headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 10px"> {series.name}</span><br/>',
                        pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
                    }
                }, {
                    sorted: !1,
                    requireSorting: !1,
                    noSharedTooltip: !0,
                    trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
                    takeOrdinalPosition: !1,
                    drawGraph: function() {
                        this.options.lineWidth && e.prototype.drawGraph.call(this)
                    },
                    applyJitter: function() {
                        var t = this,
                            e = this.options.jitter,
                            i = this.points.length;
                        e && this.points.forEach(function(s, n) {
                            ["x", "y"].forEach(function(o, r) {
                                var a, l, h, c = "plot" + o.toUpperCase();
                                e[o] && !s.isNull && (a = t[o + "Axis"], h = e[o] * a.transA, a && !a.isLog && (l = Math.max(0, s[c] - h), a = Math.min(a.len, s[c] + h), r = 1e4 * Math.sin(n + r * i), s[c] = l + (a - l) * (r - Math.floor(r)), "x" === o && (s.clientX = s.plotX)))
                            })
                        })
                    }
                }), t.addEvent(e, "afterTranslate", function() {
                    this.applyJitter && this.applyJitter()
                })
            }), e(i, "mixins/centered-series.js", [i["parts/Globals.js"]], function(t) {
                var e = t.deg2rad,
                    i = t.isNumber,
                    s = t.pick,
                    n = t.relativeLength;
                t.CenteredSeriesMixin = {
                    getCenter: function() {
                        var t, e, i = this.options,
                            o = this.chart,
                            r = 2 * (i.slicedOffset || 0),
                            a = o.plotWidth - 2 * r,
                            l = (o = o.plotHeight - 2 * r, i.center),
                            h = (l = [s(l[0], "50%"), s(l[1], "50%"), i.size || "100%", i.innerSize || 0], Math.min(a, o));
                        for (t = 0; 4 > t; ++t) e = l[t], i = 2 > t || 2 === t && /%$/.test(e), l[t] = n(e, [a, o, h, l[2]][t]) + (i ? r : 0);
                        return l[3] > l[2] && (l[3] = l[2]), l
                    },
                    getStartAndEndRadians: function(t, s) {
                        return t = i(t) ? t : 0, s = i(s) && s > t && 360 > s - t ? s : t + 360, {
                            start: e * (t + -90),
                            end: e * (s + -90)
                        }
                    }
                }
            }), e(i, "parts/PieSeries.js", [i["parts/Globals.js"]], function(t) {
                var e = t.addEvent,
                    i = t.CenteredSeriesMixin,
                    s = t.defined,
                    n = i.getStartAndEndRadians,
                    o = t.merge,
                    r = t.noop,
                    a = t.pick,
                    l = t.Point,
                    h = t.Series,
                    c = t.seriesType,
                    d = t.setAnimation;
                c("pie", "line", {
                    center: [null, null],
                    clip: !1,
                    colorByPoint: !0,
                    dataLabels: {
                        allowOverlap: !0,
                        connectorPadding: 5,
                        distance: 30,
                        enabled: !0,
                        formatter: function() {
                            return this.point.isNull ? void 0 : this.point.name
                        },
                        softConnector: !0,
                        x: 0,
                        connectorShape: "fixedOffset",
                        crookDistance: "70%"
                    },
                    ignoreHiddenPoint: !0,
                    inactiveOtherPoints: !0,
                    legendType: "point",
                    marker: null,
                    size: null,
                    showInLegend: !1,
                    slicedOffset: 10,
                    stickyTracking: !1,
                    tooltip: {
                        followPointer: !0
                    },
                    borderColor: "#ffffff",
                    borderWidth: 1,
                    states: {
                        hover: {
                            brightness: .1
                        }
                    }
                }, {
                    isCartesian: !1,
                    requireSorting: !1,
                    directTouch: !0,
                    noSharedTooltip: !0,
                    trackerGroups: ["group", "dataLabelsGroup"],
                    axisTypes: [],
                    pointAttribs: t.seriesTypes.column.prototype.pointAttribs,
                    animate: function(t) {
                        var e = this,
                            i = e.points,
                            s = e.startAngleRad;
                        t || (i.forEach(function(t) {
                            var i = t.graphic,
                                n = t.shapeArgs;
                            i && (i.attr({
                                r: t.startR || e.center[3] / 2,
                                start: s,
                                end: s
                            }), i.animate({
                                r: n.r,
                                start: n.start,
                                end: n.end
                            }, e.options.animation))
                        }), e.animate = null)
                    },
                    hasData: function() {
                        return !!this.processedXData.length
                    },
                    updateTotals: function() {
                        var t, e, i = 0,
                            s = this.points,
                            n = s.length,
                            o = this.options.ignoreHiddenPoint;
                        for (t = 0; t < n; t++) e = s[t], i += o && !e.visible ? 0 : e.isNull ? 0 : e.y;
                        for (this.total = i, t = 0; t < n; t++)(e = s[t]).percentage = 0 < i && (e.visible || !o) ? e.y / i * 100 : 0, e.total = i
                    },
                    generatePoints: function() {
                        h.prototype.generatePoints.call(this), this.updateTotals()
                    },
                    getX: function(t, e, i) {
                        var s = this.center,
                            n = this.radii ? this.radii[i.index] : s[2] / 2;
                        return s[0] + (e ? -1 : 1) * Math.cos(Math.asin(Math.max(Math.min((t - s[1]) / (n + i.labelDistance), 1), -1))) * (n + i.labelDistance) + (0 < i.labelDistance ? (e ? -1 : 1) * this.options.dataLabels.padding : 0)
                    },
                    translate: function(t) {
                        this.generatePoints();
                        var e, i, s, o, r, l, h = 0,
                            c = (m = this.options).slicedOffset,
                            d = c + (m.borderWidth || 0),
                            p = n(m.startAngle, m.endAngle),
                            u = this.startAngleRad = p.start,
                            f = (p = (this.endAngleRad = p.end) - u, this.points),
                            g = m.dataLabels.distance,
                            m = m.ignoreHiddenPoint,
                            v = f.length;
                        for (t || (this.center = t = this.getCenter()), r = 0; r < v; r++)(l = f[r]).labelDistance = a(l.options.dataLabels && l.options.dataLabels.distance, g), this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, l.labelDistance), e = u + h * p, m && !l.visible || (h += l.percentage / 100), i = u + h * p, l.shapeType = "arc", l.shapeArgs = {
                            x: t[0],
                            y: t[1],
                            r: t[2] / 2,
                            innerR: t[3] / 2,
                            start: Math.round(1e3 * e) / 1e3,
                            end: Math.round(1e3 * i) / 1e3
                        }, (i = (i + e) / 2) > 1.5 * Math.PI ? i -= 2 * Math.PI : i < -Math.PI / 2 && (i += 2 * Math.PI), l.slicedTranslation = {
                            translateX: Math.round(Math.cos(i) * c),
                            translateY: Math.round(Math.sin(i) * c)
                        }, s = Math.cos(i) * t[2] / 2, o = Math.sin(i) * t[2] / 2, l.tooltipPos = [t[0] + .7 * s, t[1] + .7 * o], l.half = i < -Math.PI / 2 || i > Math.PI / 2 ? 1 : 0, l.angle = i, e = Math.min(d, l.labelDistance / 5), l.labelPosition = {
                            natural: {
                                x: t[0] + s + Math.cos(i) * l.labelDistance,
                                y: t[1] + o + Math.sin(i) * l.labelDistance
                            },
                            final: {},
                            alignment: 0 > l.labelDistance ? "center" : l.half ? "right" : "left",
                            connectorPosition: {
                                breakAt: {
                                    x: t[0] + s + Math.cos(i) * e,
                                    y: t[1] + o + Math.sin(i) * e
                                },
                                touchingSliceAt: {
                                    x: t[0] + s,
                                    y: t[1] + o
                                }
                            }
                        }
                    },
                    drawGraph: null,
                    redrawPoints: function() {
                        var t, e, i, s, n = this,
                            r = n.chart,
                            a = r.renderer,
                            l = n.options.shadow;
                        !l || n.shadowGroup || r.styledMode || (n.shadowGroup = a.g("shadow").attr({
                            zIndex: -1
                        }).add(n.group)), n.points.forEach(function(h) {
                            var c = {};
                            if (e = h.graphic, !h.isNull && e) {
                                if (s = h.shapeArgs, t = h.getTranslate(), !r.styledMode) {
                                    var d = h.shadowGroup;
                                    l && !d && (d = h.shadowGroup = a.g("shadow").add(n.shadowGroup)), d && d.attr(t), i = n.pointAttribs(h, h.selected && "select")
                                }
                                h.delayedRendering ? (e.setRadialReference(n.center).attr(s).attr(t), r.styledMode || e.attr(i).attr({
                                    "stroke-linejoin": "round"
                                }).shadow(l, d), h.delayRendering = !1) : (e.setRadialReference(n.center), r.styledMode || o(!0, c, i), o(!0, c, s, t), e.animate(c)), e.attr({
                                    visibility: h.visible ? "inherit" : "hidden"
                                }), e.addClass(h.getClassName())
                            } else e && (h.graphic = e.destroy())
                        })
                    },
                    drawPoints: function() {
                        var t = this.chart.renderer;
                        this.points.forEach(function(e) {
                            e.graphic || (e.graphic = t[e.shapeType](e.shapeArgs).add(e.series.group), e.delayedRendering = !0)
                        })
                    },
                    searchPoint: r,
                    sortByAngle: function(t, e) {
                        t.sort(function(t, i) {
                            return void 0 !== t.angle && (i.angle - t.angle) * e
                        })
                    },
                    drawLegendSymbol: t.LegendSymbolMixin.drawRectangle,
                    getCenter: i.getCenter,
                    getSymbol: r
                }, {
                    init: function() {
                        l.prototype.init.apply(this, arguments);
                        var t, i = this;
                        return i.name = a(i.name, "Slice"), e(i, "select", t = function(t) {
                            i.slice("select" === t.type)
                        }), e(i, "unselect", t), i
                    },
                    isValid: function() {
                        return t.isNumber(this.y, !0) && 0 <= this.y
                    },
                    setVisible: function(t, e) {
                        var i = this,
                            s = i.series,
                            n = s.chart,
                            o = s.options.ignoreHiddenPoint;
                        e = a(e, o), t !== i.visible && (i.visible = i.options.visible = t = void 0 === t ? !i.visible : t, s.options.data[s.data.indexOf(i)] = i.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function(e) {
                            i[e] && i[e][t ? "show" : "hide"](!0)
                        }), i.legendItem && n.legend.colorizeItem(i, t), t || "hover" !== i.state || i.setState(""), o && (s.isDirty = !0), e && n.redraw())
                    },
                    slice: function(t, e, i) {
                        var n = this.series;
                        d(i, n.chart), a(e, !0), this.sliced = this.options.sliced = s(t) ? t : !this.sliced, n.options.data[n.data.indexOf(this)] = this.options, this.graphic.animate(this.getTranslate()), this.shadowGroup && this.shadowGroup.animate(this.getTranslate())
                    },
                    getTranslate: function() {
                        return this.sliced ? this.slicedTranslation : {
                            translateX: 0,
                            translateY: 0
                        }
                    },
                    haloPath: function(t) {
                        var e = this.shapeArgs;
                        return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + t, e.r + t, {
                            innerR: this.shapeArgs.r - 1,
                            start: e.start,
                            end: e.end
                        })
                    },
                    connectorShapes: {
                        fixedOffset: function(t, e, i) {
                            var s = e.breakAt;
                            return e = e.touchingSliceAt, ["M", t.x, t.y].concat(i.softConnector ? ["C", t.x + ("left" === t.alignment ? -5 : 5), t.y, 2 * s.x - e.x, 2 * s.y - e.y, s.x, s.y] : ["L", s.x, s.y]).concat(["L", e.x, e.y])
                        },
                        straight: function(t, e) {
                            return e = e.touchingSliceAt, ["M", t.x, t.y, "L", e.x, e.y]
                        },
                        crookedLine: function(e, i, s) {
                            i = i.touchingSliceAt;
                            var n = (a = this.series).center[0],
                                o = a.chart.plotWidth,
                                r = a.chart.plotLeft,
                                a = e.alignment,
                                l = this.shapeArgs.r;
                            return s = t.relativeLength(s.crookDistance, 1), n = ["L", s = "left" === a ? n + l + (o + r - n - l) * (1 - s) : r + (n - l) * s, e.y], ("left" === a ? s > e.x || s < i.x : s < e.x || s > i.x) && (n = []), ["M", e.x, e.y].concat(n).concat(["L", i.x, i.y])
                        }
                    },
                    getConnectorPath: function() {
                        var t = this.labelPosition,
                            e = this.series.options.dataLabels,
                            i = e.connectorShape,
                            s = this.connectorShapes;
                        return s[i] && (i = s[i]), i.call(this, {
                            x: t.final.x,
                            y: t.final.y,
                            alignment: t.alignment
                        }, t.connectorPosition, e)
                    }
                })
            }), e(i, "parts/DataLabels.js", [i["parts/Globals.js"]], function(t) {
                var e = t.arrayMax,
                    i = t.defined,
                    s = t.extend,
                    n = t.format,
                    o = t.merge,
                    r = t.noop,
                    a = t.pick,
                    l = t.relativeLength,
                    h = t.Series,
                    c = t.seriesTypes,
                    d = t.stableSort,
                    p = t.isArray,
                    u = t.splat;
                t.distribute = function(e, i, s) {
                    function n(t, e) {
                        return t.target - e.target
                    }
                    var o, r, l = !0,
                        h = e,
                        c = [];
                    r = 0;
                    var p = h.reducedLen || i;
                    for (o = e.length; o--;) r += e[o].size;
                    if (r > p) {
                        for (d(e, function(t, e) {
                                return (e.rank || 0) - (t.rank || 0)
                            }), r = o = 0; r <= p;) r += e[o].size, o++;
                        c = e.splice(o - 1, e.length)
                    }
                    for (d(e, n), e = e.map(function(t) {
                            return {
                                size: t.size,
                                targets: [t.target],
                                align: a(t.align, .5)
                            }
                        }); l;) {
                        for (o = e.length; o--;) l = e[o], r = (Math.min.apply(0, l.targets) + Math.max.apply(0, l.targets)) / 2, l.pos = Math.min(Math.max(0, r - l.size * l.align), i - l.size);
                        for (o = e.length, l = !1; o--;) 0 < o && e[o - 1].pos + e[o - 1].size > e[o].pos && (e[o - 1].size += e[o].size, e[o - 1].targets = e[o - 1].targets.concat(e[o].targets), e[o - 1].align = .5, e[o - 1].pos + e[o - 1].size > i && (e[o - 1].pos = i - e[o - 1].size), e.splice(o, 1), l = !0)
                    }
                    h.push.apply(h, c), o = 0, e.some(function(e) {
                        var n = 0;
                        if (e.targets.some(function() {
                                if (h[o].pos = e.pos + n, Math.abs(h[o].pos - h[o].target) > s) return h.slice(0, o + 1).forEach(function(t) {
                                    delete t.pos
                                }), h.reducedLen = (h.reducedLen || i) - .1 * i, h.reducedLen > .1 * i && t.distribute(h, i, s), !0;
                                n += h[o].size, o++
                            })) return !0
                    }), d(h, n)
                }, h.prototype.drawDataLabels = function() {
                    function e(t, e) {
                        var i, s = [];
                        if (p(t) && !p(e)) s = t.map(function(t) {
                            return o(t, e)
                        });
                        else if (p(e) && !p(t)) s = e.map(function(e) {
                            return o(t, e)
                        });
                        else if (p(t) || p(e))
                            for (i = Math.max(t.length, e.length); i--;) s[i] = o(t[i], e[i]);
                        else s = o(t, e);
                        return s
                    }
                    var s, r = this,
                        l = r.chart,
                        h = r.options,
                        c = h.dataLabels,
                        d = r.points,
                        f = r.hasRendered || 0,
                        g = t.animObject(h.animation).duration,
                        m = Math.min(g, 200),
                        v = a(c.defer, 0 < m),
                        x = l.renderer;
                    c = e(e(l.options.plotOptions && l.options.plotOptions.series && l.options.plotOptions.series.dataLabels, l.options.plotOptions && l.options.plotOptions[r.type] && l.options.plotOptions[r.type].dataLabels), c);
                    t.fireEvent(this, "drawDataLabels"), (p(c) || c.enabled || r._hasPointLabels) && (s = r.plotGroup("dataLabelsGroup", "data-labels", v && !f ? "hidden" : "inherit", c.zIndex || 6), v && (s.attr({
                        opacity: +f
                    }), f || setTimeout(function() {
                        var t = r.dataLabelsGroup;
                        t && (r.visible && s.show(!0), t[h.animation ? "animate" : "attr"]({
                            opacity: 1
                        }, {
                            duration: m
                        }))
                    }, g - m)), d.forEach(function(o) {
                        u(e(c, o.dlOptions || o.options && o.options.dataLabels)).forEach(function(e, c) {
                            var d, p, u, f, g = e.enabled && (!o.isNull || o.dataLabelOnNull) && function(t, e) {
                                    var i = e.filter;
                                    return !i || (e = i.operator, t = t[i.property], i = i.value, ">" === e && t > i || "<" === e && t < i || ">=" === e && t >= i || "<=" === e && t <= i || "==" === e && t == i || "===" === e && t === i)
                                }(o, e),
                                m = o.dataLabels ? o.dataLabels[c] : o.dataLabel,
                                v = o.connectors ? o.connectors[c] : o.connector,
                                y = !m;
                            g && (d = o.getLabelConfig(), p = a(e[o.formatPrefix + "Format"], e.format), d = i(p) ? n(p, d, l.time) : (e[o.formatPrefix + "Formatter"] || e.formatter).call(d, e), p = e.style, u = e.rotation, l.styledMode || (p.color = a(e.color, p.color, r.color, "#000000"), "contrast" === p.color && (o.contrastColor = x.getContrast(o.color || r.color), p.color = e.inside || 0 > a(e.distance, o.labelDistance) || h.stacking ? o.contrastColor : "#000000"), h.cursor && (p.cursor = h.cursor)), f = {
                                r: e.borderRadius || 0,
                                rotation: u,
                                padding: e.padding,
                                zIndex: 1
                            }, l.styledMode || (f.fill = e.backgroundColor, f.stroke = e.borderColor, f["stroke-width"] = e.borderWidth), t.objectEach(f, function(t, e) {
                                void 0 === t && delete f[e]
                            })), !m || g && i(d) ? g && i(d) && (m ? f.text = d : (o.dataLabels = o.dataLabels || [], m = o.dataLabels[c] = u ? x.text(d, 0, -9999).addClass("highcharts-data-label") : x.label(d, 0, -9999, e.shape, null, null, e.useHTML, null, "data-label"), c || (o.dataLabel = m), m.addClass(" highcharts-data-label-color-" + o.colorIndex + " " + (e.className || "") + (e.useHTML ? " highcharts-tracker" : ""))), m.options = e, m.attr(f), l.styledMode || m.css(p).shadow(e.shadow), m.added || m.add(s), e.textPath && m.setTextPath(o.getDataLabelPath && o.getDataLabelPath(m) || o.graphic, e.textPath), r.alignDataLabel(o, m, e, null, y)) : (o.dataLabel = o.dataLabel && o.dataLabel.destroy(), o.dataLabels && (1 === o.dataLabels.length ? delete o.dataLabels : delete o.dataLabels[c]), c || delete o.dataLabel, v && (o.connector = o.connector.destroy(), o.connectors && (1 === o.connectors.length ? delete o.connectors : delete o.connectors[c])))
                        })
                    })), t.fireEvent(this, "afterDrawDataLabels")
                }, h.prototype.alignDataLabel = function(t, e, i, n, o) {
                    var r, l = this.chart,
                        h = this.isCartesian && l.inverted,
                        c = a(t.dlBox && t.dlBox.centerX, t.plotX, -9999),
                        d = a(t.plotY, -9999),
                        p = e.getBBox(),
                        u = i.rotation,
                        f = i.align,
                        g = this.visible && (t.series.forceDL || l.isInsidePlot(c, Math.round(d), h) || n && l.isInsidePlot(c, h ? n.x + 1 : n.y + n.height - 1, h)),
                        m = "justify" === a(i.overflow, "justify");
                    g && (r = l.renderer.fontMetrics(l.styledMode ? void 0 : i.style.fontSize, e).b, n = s({
                        x: h ? this.yAxis.len - d : c,
                        y: Math.round(h ? this.xAxis.len - c : d),
                        width: 0,
                        height: 0
                    }, n), s(i, {
                        width: p.width,
                        height: p.height
                    }), u ? (m = !1, c = l.renderer.rotCorr(r, u), c = {
                        x: n.x + i.x + n.width / 2 + c.x,
                        y: n.y + i.y + {
                            top: 0,
                            middle: .5,
                            bottom: 1
                        }[i.verticalAlign] * n.height
                    }, e[o ? "attr" : "animate"](c).attr({
                        align: f
                    }), d = 180 < (d = (u + 720) % 360) && 360 > d, "left" === f ? c.y -= d ? p.height : 0 : "center" === f ? (c.x -= p.width / 2, c.y -= p.height / 2) : "right" === f && (c.x -= p.width, c.y -= d ? 0 : p.height), e.placed = !0, e.alignAttr = c) : (e.align(i, null, n), c = e.alignAttr), m && 0 <= n.height ? t.isLabelJustified = this.justifyDataLabel(e, i, c, p, n, o) : a(i.crop, !0) && (g = l.isInsidePlot(c.x, c.y) && l.isInsidePlot(c.x + p.width, c.y + p.height)), i.shape && !u) && e[o ? "attr" : "animate"]({
                        anchorX: h ? l.plotWidth - t.plotY : t.plotX,
                        anchorY: h ? l.plotHeight - t.plotX : t.plotY
                    }), g || (e.attr({
                        y: -9999
                    }), e.placed = !1)
                }, h.prototype.justifyDataLabel = function(t, e, i, s, n, o) {
                    var r, a, l = this.chart,
                        h = e.align,
                        c = e.verticalAlign,
                        d = t.box ? 0 : t.padding || 0;
                    return 0 > (r = i.x + d) && ("right" === h ? e.align = "left" : e.x = -r, a = !0), (r = i.x + s.width - d) > l.plotWidth && ("left" === h ? e.align = "right" : e.x = l.plotWidth - r, a = !0), 0 > (r = i.y + d) && ("bottom" === c ? e.verticalAlign = "top" : e.y = -r, a = !0), (r = i.y + s.height - d) > l.plotHeight && ("top" === c ? e.verticalAlign = "bottom" : e.y = l.plotHeight - r, a = !0), a && (t.placed = !o, t.align(e, null, n)), a
                }, c.pie && (c.pie.prototype.dataLabelPositioners = {
                    radialDistributionY: function(t) {
                        return t.top + t.distributeBox.pos
                    },
                    radialDistributionX: function(t, e, i, s) {
                        return t.getX(i < e.top + 2 || i > e.bottom - 2 ? s : i, e.half, e)
                    },
                    justify: function(t, e, i) {
                        return i[0] + (t.half ? -1 : 1) * (e + t.labelDistance)
                    },
                    alignToPlotEdges: function(t, e, i, s) {
                        return t = t.getBBox().width, e ? t + s : i - t - s
                    },
                    alignToConnectors: function(t, e, i, s) {
                        var n, o = 0;
                        return t.forEach(function(t) {
                            (n = t.dataLabel.getBBox().width) > o && (o = n)
                        }), e ? o + s : i - o - s
                    }
                }, c.pie.prototype.drawDataLabels = function() {
                    var s, n, r, l, c, d, p, u, f, g, m, v, x = this,
                        y = x.data,
                        b = x.chart,
                        k = x.options.dataLabels,
                        w = k.connectorPadding,
                        M = b.plotWidth,
                        S = b.plotHeight,
                        C = b.plotLeft,
                        T = Math.round(b.chartWidth / 3),
                        A = x.center,
                        L = A[2] / 2,
                        P = A[1],
                        E = [
                            [],
                            []
                        ],
                        _ = [0, 0, 0, 0],
                        O = x.dataLabelPositioners;
                    x.visible && (k.enabled || x._hasPointLabels) && (y.forEach(function(t) {
                        t.dataLabel && t.visible && t.dataLabel.shortened && (t.dataLabel.attr({
                            width: "auto"
                        }).css({
                            width: "auto",
                            textOverflow: "clip"
                        }), t.dataLabel.shortened = !1)
                    }), h.prototype.drawDataLabels.apply(x), y.forEach(function(t) {
                        t.dataLabel && (t.visible ? (E[t.half].push(t), t.dataLabel._pos = null, !i(k.style.width) && !i(t.options.dataLabels && t.options.dataLabels.style && t.options.dataLabels.style.width) && t.dataLabel.getBBox().width > T && (t.dataLabel.css({
                            width: .7 * T
                        }), t.dataLabel.shortened = !0)) : (t.dataLabel = t.dataLabel.destroy(), t.dataLabels && 1 === t.dataLabels.length && delete t.dataLabels))
                    }), E.forEach(function(e, n) {
                        var o, r, h, v = e.length,
                            y = [];
                        if (v)
                            for (x.sortByAngle(e, n - .5), 0 < x.maxLabelDistance && (o = Math.max(0, P - L - x.maxLabelDistance), r = Math.min(P + L + x.maxLabelDistance, b.plotHeight), e.forEach(function(t) {
                                    0 < t.labelDistance && t.dataLabel && (t.top = Math.max(0, P - L - t.labelDistance), t.bottom = Math.min(P + L + t.labelDistance, b.plotHeight), h = t.dataLabel.getBBox().height || 21, t.distributeBox = {
                                        target: t.labelPosition.natural.y - t.top + h / 2,
                                        size: h,
                                        rank: t.y
                                    }, y.push(t.distributeBox))
                                }), o = r + h - o, t.distribute(y, o, o / 5)), m = 0; m < v; m++) {
                                if (s = e[m], d = s.labelPosition, l = s.dataLabel, g = !1 === s.visible ? "hidden" : "inherit", f = o = d.natural.y, y && i(s.distributeBox) && (void 0 === s.distributeBox.pos ? g = "hidden" : (p = s.distributeBox.size, f = O.radialDistributionY(s))), delete s.positionIndex, k.justify) u = O.justify(s, L, A);
                                else switch (k.alignTo) {
                                    case "connectors":
                                        u = O.alignToConnectors(e, n, M, C);
                                        break;
                                    case "plotEdges":
                                        u = O.alignToPlotEdges(l, n, M, C);
                                        break;
                                    default:
                                        u = O.radialDistributionX(x, s, f, o)
                                }
                                l._attr = {
                                    visibility: g,
                                    align: d.alignment
                                }, l._pos = {
                                    x: u + k.x + ({
                                        left: w,
                                        right: -w
                                    }[d.alignment] || 0),
                                    y: f + k.y - 10
                                }, d.final.x = u, d.final.y = f, a(k.crop, !0) && (c = l.getBBox().width, o = null, u - c < w && 1 === n ? (o = Math.round(c - u + w), _[3] = Math.max(o, _[3])) : u + c > M - w && 0 === n && (o = Math.round(u + c - M + w), _[1] = Math.max(o, _[1])), 0 > f - p / 2 ? _[0] = Math.max(Math.round(p / 2 - f), _[0]) : f + p / 2 > S && (_[2] = Math.max(Math.round(f + p / 2 - S), _[2])), l.sideOverflow = o)
                            }
                    }), 0 === e(_) || this.verifyDataLabelOverflow(_)) && (this.placeDataLabels(), this.points.forEach(function(t) {
                        var e;
                        (v = o(k, t.options.dataLabels), n = a(v.connectorWidth, 1)) && (r = t.connector, (l = t.dataLabel) && l._pos && t.visible && 0 < t.labelDistance ? (g = l._attr.visibility, (e = !r) && (t.connector = r = b.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + t.colorIndex + (t.className ? " " + t.className : "")).add(x.dataLabelsGroup), b.styledMode || r.attr({
                            "stroke-width": n,
                            stroke: v.connectorColor || t.color || "#666666"
                        })), r[e ? "attr" : "animate"]({
                            d: t.getConnectorPath()
                        }), r.attr("visibility", g)) : r && (t.connector = r.destroy()))
                    }))
                }, c.pie.prototype.placeDataLabels = function() {
                    this.points.forEach(function(t) {
                        var e, i = t.dataLabel;
                        i && t.visible && ((e = i._pos) ? (i.sideOverflow && (i._attr.width = Math.max(i.getBBox().width - i.sideOverflow, 0), i.css({
                            width: i._attr.width + "px",
                            textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis"
                        }), i.shortened = !0), i.attr(i._attr), i[i.moved ? "animate" : "attr"](e), i.moved = !0) : i && i.attr({
                            y: -9999
                        })), delete t.distributeBox
                    }, this)
                }, c.pie.prototype.alignDataLabel = r, c.pie.prototype.verifyDataLabelOverflow = function(t) {
                    var e, i = this.center,
                        s = this.options,
                        n = s.center,
                        o = s.minSize || 80,
                        r = null !== s.size;
                    return r || (null !== n[0] ? e = Math.max(i[2] - Math.max(t[1], t[3]), o) : (e = Math.max(i[2] - t[1] - t[3], o), i[0] += (t[3] - t[1]) / 2), null !== n[1] ? e = Math.max(Math.min(e, i[2] - Math.max(t[0], t[2])), o) : (e = Math.max(Math.min(e, i[2] - t[0] - t[2]), o), i[1] += (t[0] - t[2]) / 2), e < i[2] ? (i[2] = e, i[3] = Math.min(l(s.innerSize || 0, e), e), this.translate(i), this.drawDataLabels && this.drawDataLabels()) : r = !0), r
                }), c.column && (c.column.prototype.alignDataLabel = function(t, e, i, s, n) {
                    var r = this.chart.inverted,
                        l = t.series,
                        c = t.dlBox || t.shapeArgs,
                        d = a(t.below, t.plotY > a(this.translatedThreshold, l.yAxis.len)),
                        p = a(i.inside, !!this.options.stacking);
                    c && (0 > (s = o(c)).y && (s.height += s.y, s.y = 0), 0 < (c = s.y + s.height - l.yAxis.len) && (s.height -= c), r && (s = {
                        x: l.yAxis.len - s.y - s.height,
                        y: l.xAxis.len - s.x - s.width,
                        width: s.height,
                        height: s.width
                    }), p || (r ? (s.x += d ? 0 : s.width, s.width = 0) : (s.y += d ? s.height : 0, s.height = 0))), i.align = a(i.align, !r || p ? "center" : d ? "right" : "left"), i.verticalAlign = a(i.verticalAlign, r || p ? "middle" : d ? "top" : "bottom"), h.prototype.alignDataLabel.call(this, t, e, i, s, n), t.isLabelJustified && t.contrastColor && e.css({
                        color: t.contrastColor
                    })
                })
            }), e(i, "modules/overlapping-datalabels.src.js", [i["parts/Globals.js"]], function(t) {
                var e = t.Chart,
                    i = t.isArray,
                    s = t.objectEach,
                    n = t.pick,
                    o = t.addEvent,
                    r = t.fireEvent;
                o(e, "render", function() {
                    var t = [];
                    (this.labelCollectors || []).forEach(function(e) {
                        t = t.concat(e())
                    }), (this.yAxis || []).forEach(function(e) {
                        e.options.stackLabels && !e.options.stackLabels.allowOverlap && s(e.stacks, function(e) {
                            s(e, function(e) {
                                t.push(e.label)
                            })
                        })
                    }), (this.series || []).forEach(function(e) {
                        var s = e.options.dataLabels;
                        e.visible && (!1 !== s.enabled || e._hasPointLabels) && e.points.forEach(function(e) {
                            e.visible && (i(e.dataLabels) ? e.dataLabels : e.dataLabel ? [e.dataLabel] : []).forEach(function(i) {
                                var s = i.options;
                                i.labelrank = n(s.labelrank, e.labelrank, e.shapeArgs && e.shapeArgs.height), s.allowOverlap || t.push(i)
                            })
                        })
                    }), this.hideOverlappingLabels(t)
                }), e.prototype.hideOverlappingLabels = function(t) {
                    var e, i, s, n, o, a, l = this,
                        h = t.length,
                        c = l.renderer,
                        d = function(t, e, i, s, n, o, r, a) {
                            return !(n > t + i || n + r < t || o > e + s || o + a < e)
                        };
                    for (s = function(t) {
                            var e, i, s, n = t.box ? 0 : t.padding || 0;
                            if (s = 0, t && (!t.alignAttr || t.placed)) return e = t.alignAttr || {
                                x: t.attr("x"),
                                y: t.attr("y")
                            }, i = t.parentGroup, t.width || (s = t.getBBox(), t.width = s.width, t.height = s.height, s = c.fontMetrics(null, t.element).h), {
                                x: e.x + (i.translateX || 0) + n,
                                y: e.y + (i.translateY || 0) + n - s,
                                width: t.width - 2 * n,
                                height: t.height - 2 * n
                            }
                        }, i = 0; i < h; i++)(e = t[i]) && (e.oldOpacity = e.opacity, e.newOpacity = 1, e.absoluteBox = s(e));
                    for (t.sort(function(t, e) {
                            return (e.labelrank || 0) - (t.labelrank || 0)
                        }), i = 0; i < h; i++)
                        for (a = (s = t[i]) && s.absoluteBox, e = i + 1; e < h; ++e) o = (n = t[e]) && n.absoluteBox, a && o && s !== n && 0 !== s.newOpacity && 0 !== n.newOpacity && (o = d(a.x, a.y, a.width, a.height, o.x, o.y, o.width, o.height)) && ((s.labelrank < n.labelrank ? s : n).newOpacity = 0);
                    t.forEach(function(t) {
                        var e, i;
                        t && (i = t.newOpacity, t.oldOpacity !== i && (t.alignAttr && t.placed ? (i ? t.show(!0) : e = function() {
                            t.hide()
                        }, t.alignAttr.opacity = i, t[t.isOld ? "animate" : "attr"](t.alignAttr, null, e), r(l, "afterHideOverlappingLabels")) : t.attr({
                            opacity: i
                        })), t.isOld = !0)
                    })
                }
            }), e(i, "parts/Interaction.js", [i["parts/Globals.js"]], function(t) {
                var e, i = t.addEvent,
                    s = t.Chart,
                    n = t.createElement,
                    o = t.css,
                    r = t.defaultOptions,
                    a = t.defaultPlotOptions,
                    l = t.extend,
                    h = t.fireEvent,
                    c = t.hasTouch,
                    d = t.isObject,
                    p = t.Legend,
                    u = t.merge,
                    f = t.pick,
                    g = t.Point,
                    m = t.Series,
                    v = t.seriesTypes,
                    x = t.svg;
                e = t.TrackerMixin = {
                    drawTrackerPoint: function() {
                        var t = this,
                            e = t.chart,
                            i = e.pointer,
                            s = function(t) {
                                var e = i.getPointFromEvent(t);
                                void 0 !== e && (i.isDirectTouch = !0, e.onMouseOver(t))
                            };
                        t.points.forEach(function(t) {
                            t.graphic && (t.graphic.element.point = t), t.dataLabel && (t.dataLabel.div ? t.dataLabel.div.point = t : t.dataLabel.element.point = t)
                        }), t._hasTracking || (t.trackerGroups.forEach(function(n) {
                            t[n] && (t[n].addClass("highcharts-tracker").on("mouseover", s).on("mouseout", function(t) {
                                i.onTrackerMouseOut(t)
                            }), c && t[n].on("touchstart", s), !e.styledMode && t.options.cursor && t[n].css(o).css({
                                cursor: t.options.cursor
                            }))
                        }), t._hasTracking = !0), h(this, "afterDrawTracker")
                    },
                    drawTrackerGraph: function() {
                        var t, e = this,
                            i = e.options,
                            s = i.trackByArea,
                            n = [].concat(s ? e.areaPath : e.graphPath),
                            o = n.length,
                            r = e.chart,
                            a = r.pointer,
                            l = r.renderer,
                            d = r.options.tooltip.snap,
                            p = e.tracker,
                            u = function() {
                                r.hoverSeries !== e && e.onMouseOver()
                            },
                            f = "rgba(192,192,192," + (x ? 1e-4 : .002) + ")";
                        if (o && !s)
                            for (t = o + 1; t--;) "M" === n[t] && n.splice(t + 1, 0, n[t + 1] - d, n[t + 2], "L"), (t && "M" === n[t] || t === o) && n.splice(t, 0, "L", n[t - 2] + d, n[t - 1]);
                        p ? p.attr({
                            d: n
                        }) : e.graph && (e.tracker = l.path(n).attr({
                            visibility: e.visible ? "visible" : "hidden",
                            zIndex: 2
                        }).addClass(s ? "highcharts-tracker-area" : "highcharts-tracker-line").add(e.group), r.styledMode || e.tracker.attr({
                            "stroke-linejoin": "round",
                            stroke: f,
                            fill: s ? f : "none",
                            "stroke-width": e.graph.strokeWidth() + (s ? 0 : 2 * d)
                        }), [e.tracker, e.markerGroup].forEach(function(t) {
                            t.addClass("highcharts-tracker").on("mouseover", u).on("mouseout", function(t) {
                                a.onTrackerMouseOut(t)
                            }), i.cursor && !r.styledMode && t.css({
                                cursor: i.cursor
                            }), c && t.on("touchstart", u)
                        })), h(this, "afterDrawTracker")
                    }
                }, v.column && (v.column.prototype.drawTracker = e.drawTrackerPoint), v.pie && (v.pie.prototype.drawTracker = e.drawTrackerPoint), v.scatter && (v.scatter.prototype.drawTracker = e.drawTrackerPoint), l(p.prototype, {
                    setItemEvents: function(t, e, i) {
                        var s = this,
                            n = s.chart.renderer.boxWrapper,
                            o = t instanceof g,
                            r = "highcharts-legend-" + (o ? "point" : "series") + "-active",
                            a = s.chart.styledMode;
                        (i ? e : t.legendGroup).on("mouseover", function() {
                            s.allItems.forEach(function(e) {
                                t !== e && e.setState("inactive", !o)
                            }), t.setState("hover"), t.visible && n.addClass(r), a || e.css(s.options.itemHoverStyle)
                        }).on("mouseout", function() {
                            s.styledMode || e.css(u(t.visible ? s.itemStyle : s.itemHiddenStyle)), s.allItems.forEach(function(e) {
                                t !== e && e.setState("", !o)
                            }), n.removeClass(r), t.setState()
                        }).on("click", function(e) {
                            var i = function() {
                                t.setVisible && t.setVisible()
                            };
                            n.removeClass(r), e = {
                                browserEvent: e
                            }, t.firePointEvent ? t.firePointEvent("legendItemClick", e, i) : h(t, "legendItemClick", e, i)
                        })
                    },
                    createCheckboxForItem: function(t) {
                        t.checkbox = n("input", {
                            type: "checkbox",
                            className: "highcharts-legend-checkbox",
                            checked: t.selected,
                            defaultChecked: t.selected
                        }, this.options.itemCheckboxStyle, this.chart.container), i(t.checkbox, "click", function(e) {
                            h(t.series || t, "checkboxClick", {
                                checked: e.target.checked,
                                item: t
                            }, function() {
                                t.select()
                            })
                        })
                    }
                }), l(s.prototype, {
                    showResetZoom: function() {
                        function t() {
                            e.zoomOut()
                        }
                        var e = this,
                            i = r.lang,
                            s = e.options.chart.resetZoomButton,
                            n = s.theme,
                            o = n.states,
                            a = "chart" === s.relativeTo || "spaceBox" === s.relativeTo ? null : "plotBox";
                        h(this, "beforeShowResetZoom", null, function() {
                            e.resetZoomButton = e.renderer.button(i.resetZoom, null, null, t, n, o && o.hover).attr({
                                align: s.position.align,
                                title: i.resetZoomTitle
                            }).addClass("highcharts-reset-zoom").add().align(s.position, !1, a)
                        }), h(this, "afterShowResetZoom")
                    },
                    zoomOut: function() {
                        h(this, "selection", {
                            resetSelection: !0
                        }, this.zoom)
                    },
                    zoom: function(e) {
                        var i, s, n = this,
                            o = n.pointer,
                            r = !1,
                            a = n.inverted ? o.mouseDownX : o.mouseDownY;
                        !e || e.resetSelection ? (n.axes.forEach(function(t) {
                            i = t.zoom()
                        }), o.initiated = !1) : e.xAxis.concat(e.yAxis).forEach(function(e) {
                            var s = e.axis,
                                l = n.inverted ? s.left : s.top,
                                h = n.inverted ? l + s.width : l + s.height,
                                c = s.isXAxis,
                                d = !1;
                            (!c && a >= l && a <= h || c || !t.defined(a)) && (d = !0), o[c ? "zoomX" : "zoomY"] && d && (i = s.zoom(e.min, e.max), s.displayBtn && (r = !0))
                        }), s = n.resetZoomButton, r && !s ? n.showResetZoom() : !r && d(s) && (n.resetZoomButton = s.destroy()), i && n.redraw(f(n.options.chart.animation, e && e.animation, 100 > n.pointCount))
                    },
                    pan: function(t, e) {
                        var i, s = this,
                            n = s.hoverPoints;
                        h(this, "pan", {
                            originalEvent: t
                        }, function() {
                            n && n.forEach(function(t) {
                                t.setState()
                            }), ("xy" === e ? [1, 0] : [1]).forEach(function(e) {
                                var n, o = (e = s[e ? "xAxis" : "yAxis"][0]).horiz,
                                    r = t[o ? "chartX" : "chartY"],
                                    a = s[o = o ? "mouseDownX" : "mouseDownY"],
                                    l = (e.pointRange || 0) / 2,
                                    h = e.reversed && !s.inverted || !e.reversed && s.inverted ? -1 : 1,
                                    c = e.getExtremes(),
                                    d = e.toValue(a - r, !0) + l * h;
                                a = (n = (h = e.toValue(a + e.len - r, !0) - l * h) < d) ? h : d, d = n ? d : h, h = Math.min(c.dataMin, l ? c.min : e.toValue(e.toPixels(c.min) - e.minPixelPadding)), l = Math.max(c.dataMax, l ? c.max : e.toValue(e.toPixels(c.max) + e.minPixelPadding));
                                0 < (n = h - a) && (d += n, a = h), 0 < (n = d - l) && (d = l, a -= n), e.series.length && a !== c.min && d !== c.max && (e.setExtremes(a, d, !1, !1, {
                                    trigger: "pan"
                                }), i = !0), s[o] = r
                            }), i && s.redraw(!1), o(s.container, {
                                cursor: "move"
                            })
                        })
                    }
                }), l(g.prototype, {
                    select: function(t, e) {
                        var i = this,
                            s = i.series,
                            n = s.chart;
                        t = f(t, !i.selected), i.firePointEvent(t ? "select" : "unselect", {
                            accumulate: e
                        }, function() {
                            i.selected = i.options.selected = t, s.options.data[s.data.indexOf(i)] = i.options, i.setState(t && "select"), e || n.getSelectedPoints().forEach(function(t) {
                                var e = t.series;
                                t.selected && t !== i && (t.selected = t.options.selected = !1, e.options.data[e.data.indexOf(t)] = t.options, t.setState(n.hoverPoints && e.options.inactiveOtherPoints ? "inactive" : ""), t.firePointEvent("unselect"))
                            })
                        })
                    },
                    onMouseOver: function(t) {
                        var e = this.series.chart,
                            i = e.pointer;
                        t = t ? i.normalize(t) : i.getChartCoordinatesFromPoint(this, e.inverted), i.runPointActions(t, this)
                    },
                    onMouseOut: function() {
                        var t = this.series.chart;
                        this.firePointEvent("mouseOut"), this.series.options.inactiveOtherPoints || (t.hoverPoints || []).forEach(function(t) {
                            t.setState()
                        }), t.hoverPoints = t.hoverPoint = null
                    },
                    importEvents: function() {
                        if (!this.hasImportedEvents) {
                            var e = this,
                                s = u(e.series.options.point, e.options).events;
                            e.events = s, t.objectEach(s, function(t, s) {
                                i(e, s, t)
                            }), this.hasImportedEvents = !0
                        }
                    },
                    setState: function(t, e) {
                        var i, s, n, o = Math.floor(this.plotX),
                            r = this.plotY,
                            c = this.series,
                            d = this.state,
                            p = c.options.states[t || "normal"] || {},
                            u = a[c.type].marker && c.options.marker,
                            g = u && !1 === u.enabled,
                            m = u && u.states && u.states[t || "normal"] || {},
                            v = !1 === m.enabled,
                            x = c.stateMarkerGraphic,
                            y = this.marker || {},
                            b = c.chart,
                            k = c.halo,
                            w = u && c.markerAttribs;
                        (t = t || "") === this.state && !e || this.selected && "select" !== t || !1 === p.enabled || t && (v || g && !1 === m.enabled) || t && y.states && y.states[t] && !1 === y.states[t].enabled || (this.state = t, w && (i = c.markerAttribs(this, t)), this.graphic ? (d && this.graphic.removeClass("highcharts-point-" + d), t && this.graphic.addClass("highcharts-point-" + t), b.styledMode || (s = c.pointAttribs(this, t), n = f(b.options.chart.animation, p.animation), c.options.inactiveOtherPoints && ((this.dataLabels || []).forEach(function(t) {
                            t && t.animate({
                                opacity: s.opacity
                            }, n)
                        }), this.connector && this.connector.animate({
                            opacity: s.opacity
                        }, n)), this.graphic.animate(s, n)), i && this.graphic.animate(i, f(b.options.chart.animation, m.animation, u.animation)), x && x.hide()) : (t && m && (d = y.symbol || c.symbol, x && x.currentSymbol !== d && (x = x.destroy()), x ? x[e ? "animate" : "attr"]({
                            x: i.x,
                            y: i.y
                        }) : d && (c.stateMarkerGraphic = x = b.renderer.symbol(d, i.x, i.y, i.width, i.height).add(c.markerGroup), x.currentSymbol = d), !b.styledMode && x && x.attr(c.pointAttribs(this, t))), x && (x[t && b.isInsidePlot(o, r, b.inverted) ? "show" : "hide"](), x.element.point = this)), (t = p.halo) && t.size ? (k || (c.halo = k = b.renderer.path().add((this.graphic || x).parentGroup)), k.show()[e ? "animate" : "attr"]({
                            d: this.haloPath(t.size)
                        }), k.attr({
                            class: "highcharts-halo highcharts-color-" + f(this.colorIndex, c.colorIndex) + (this.className ? " " + this.className : ""),
                            zIndex: -1
                        }), k.point = this, b.styledMode || k.attr(l({
                            fill: this.color || c.color,
                            "fill-opacity": t.opacity
                        }, t.attributes))) : k && k.point && k.point.haloPath && k.animate({
                            d: k.point.haloPath(0)
                        }, null, k.hide), h(this, "afterSetState"))
                    },
                    haloPath: function(t) {
                        return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - t, this.plotY - t, 2 * t, 2 * t)
                    }
                }), l(m.prototype, {
                    onMouseOver: function() {
                        var t = this.chart,
                            e = t.hoverSeries;
                        e && e !== this && e.onMouseOut(), this.options.events.mouseOver && h(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this
                    },
                    onMouseOut: function() {
                        var t = this.options,
                            e = this.chart,
                            i = e.tooltip,
                            s = e.hoverPoint;
                        e.hoverSeries = null, s && s.onMouseOut(), this && t.events.mouseOut && h(this, "mouseOut"), !i || this.stickyTracking || i.shared && !this.noSharedTooltip || i.hide(), e.series.forEach(function(t) {
                            t.setState("", !0)
                        })
                    },
                    setState: function(t, e) {
                        var i = this,
                            s = i.options,
                            n = i.graph,
                            o = s.inactiveOtherPoints,
                            r = s.states,
                            a = s.lineWidth,
                            l = s.opacity,
                            h = f(r[t || "normal"] && r[t || "normal"].animation, i.chart.options.chart.animation);
                        s = 0;
                        if (t = t || "", i.state !== t && ([i.group, i.markerGroup, i.dataLabelsGroup].forEach(function(e) {
                                e && (i.state && e.removeClass("highcharts-series-" + i.state), t && e.addClass("highcharts-series-" + t))
                            }), i.state = t, !i.chart.styledMode)) {
                            if (r[t] && !1 === r[t].enabled) return;
                            if (t && (a = r[t].lineWidth || a + (r[t].lineWidthPlus || 0), l = f(r[t].opacity, l)), n && !n.dashstyle)
                                for (r = {
                                        "stroke-width": a
                                    }, n.animate(r, h); i["zone-graph-" + s];) i["zone-graph-" + s].attr(r), s += 1;
                            o || [i.group, i.markerGroup, i.dataLabelsGroup, i.labelBySeries].forEach(function(t) {
                                t && t.animate({
                                    opacity: l
                                }, h)
                            })
                        }
                        e && o && i.points && i.points.forEach(function(e) {
                            e.setState && e.setState(t)
                        })
                    },
                    setVisible: function(t, e) {
                        var i, s = this,
                            n = s.chart,
                            o = s.legendItem,
                            r = n.options.chart.ignoreHiddenSeries,
                            a = s.visible;
                        i = (s.visible = t = s.options.visible = s.userOptions.visible = void 0 === t ? !a : t) ? "show" : "hide", ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function(t) {
                            s[t] && s[t][i]()
                        }), n.hoverSeries !== s && (n.hoverPoint && n.hoverPoint.series) !== s || s.onMouseOut(), o && n.legend.colorizeItem(s, t), s.isDirty = !0, s.options.stacking && n.series.forEach(function(t) {
                            t.options.stacking && t.visible && (t.isDirty = !0)
                        }), s.linkedSeries.forEach(function(e) {
                            e.setVisible(t, !1)
                        }), r && (n.isDirtyBox = !0), h(s, i), !1 !== e && n.redraw()
                    },
                    show: function() {
                        this.setVisible(!0)
                    },
                    hide: function() {
                        this.setVisible(!1)
                    },
                    select: function(t) {
                        this.selected = t = this.options.selected = void 0 === t ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), h(this, t ? "select" : "unselect")
                    },
                    drawTracker: e.drawTrackerGraph
                })
            }), e(i, "parts/Responsive.js", [i["parts/Globals.js"]], function(t) {
                var e = t.Chart,
                    i = t.isArray,
                    s = t.isObject,
                    n = t.pick,
                    o = t.splat;
                e.prototype.setResponsive = function(e, i) {
                    var s = this.options.responsive,
                        n = [],
                        o = this.currentResponsive;
                    !i && s && s.rules && s.rules.forEach(function(i) {
                        void 0 === i._id && (i._id = t.uniqueKey()), this.matchResponsiveRule(i, n, e)
                    }, this), (i = t.merge.apply(0, n.map(function(e) {
                        return t.find(s.rules, function(t) {
                            return t._id === e
                        }).chartOptions
                    }))).isResponsiveOptions = !0, (n = n.toString() || void 0) !== (o && o.ruleIds) && (o && this.update(o.undoOptions, e), n ? ((o = this.currentOptions(i)).isResponsiveOptions = !0, this.currentResponsive = {
                        ruleIds: n,
                        mergedOptions: i,
                        undoOptions: o
                    }, this.update(i, e)) : this.currentResponsive = void 0)
                }, e.prototype.matchResponsiveRule = function(t, e) {
                    var i = t.condition;
                    (i.callback || function() {
                        return this.chartWidth <= n(i.maxWidth, Number.MAX_VALUE) && this.chartHeight <= n(i.maxHeight, Number.MAX_VALUE) && this.chartWidth >= n(i.minWidth, 0) && this.chartHeight >= n(i.minHeight, 0)
                    }).call(this) && e.push(t._id)
                }, e.prototype.currentOptions = function(e) {
                    var r = {};
                    return function e(r, a, l, h) {
                        var c;
                        t.objectEach(r, function(t, r) {
                            if (!h && -1 < ["series", "xAxis", "yAxis"].indexOf(r))
                                for (t = o(t), l[r] = [], c = 0; c < t.length; c++) a[r][c] && (l[r][c] = {}, e(t[c], a[r][c], l[r][c], h + 1));
                            else s(t) ? (l[r] = i(t) ? [] : {}, e(t, a[r] || {}, l[r], h + 1)) : l[r] = n(a[r], null)
                        })
                    }(e, this.options, r, 0), r
                }
            }), e(i, "masters/highcharts.src.js", [i["parts/Globals.js"]], function(t) {
                return t
            }), i["masters/highcharts.src.js"]._modules = i, i["masters/highcharts.src.js"]
        }, "object" == typeof t && t.exports ? (o.default = o, t.exports = n.document ? o(n) : o) : void 0 === (s = function() {
            return o(n)
        }.call(e, i, e, t)) || (t.exports = s)
    },
    "6GGM": function(t, e, i) {
        t.exports = i.p + "static/img/index-market-empty.b1e123f.svg"
    },
    "8C33": function(t, e, i) {
        t.exports = i.p + "static/img/noticemodalZh.3ca681d.png"
    },
    "8gQP": function(t, e) {},
    "9gmj": function(t, e, i) {
        "use strict";
        var s = {
                name: "RadioGroup",
                props: {
                    className: {
                        required: !1,
                        type: String,
                        default: ""
                    },
                    value: {
                        type: String,
                        default: ""
                    },
                    name: {
                        required: !0,
                        type: String
                    },
                    list: {
                        required: !0,
                        type: Array
                    }
                },
                data: function() {
                    return {}
                },
                methods: {
                    change: function(t) {
                        this.$emit("input", t.target.value)
                    }
                },
                computed: {
                    radioArr: function() {
                        var t = this;
                        return this.list.map(function(e) {
                            return e.value === t.value ? e.checked = !0 : e.checked = !1, e
                        })
                    }
                }
            },
            n = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("ul", {
                        staticClass: "text-subtitle",
                        class: "ht-radio-group " + (t.className || "")
                    }, t._l(t.radioArr, function(e) {
                        return i("li", {
                            key: e.value
                        }, [i("input", {
                            attrs: {
                                type: "radio",
                                name: t.name,
                                id: t.name + "_" + e.value
                            },
                            domProps: {
                                checked: e.checked,
                                value: e.value
                            },
                            on: {
                                change: t.change
                            }
                        }), t._v(" "), i("label", {
                            attrs: {
                                for: t.name + "_" + e.value
                            }
                        }, [e.favor ? i("i", {
                            class: e.checked ? "icon-favor-on text-favor" : "icon-favor-off"
                        }) : t._e(), t._v("\n                " + t._s(e.label) + "\n            ")])])
                    }))
                },
                staticRenderFns: []
            };
        var o = i("VU/8")(s, n, !1, function(t) {
            i("whYc")
        }, null, null);
        e.a = o.exports
    },
    B2Zc: function(t, e) {},
    Bbop: function(t, e, i) {
        t.exports = i.p + "static/img/iso-icon-2.3e285d1.svg"
    },
    EzK7: function(t, e, i) {
        t.exports = i.p + "static/img/noticemodal.98f9d37.png"
    },
    JPXT: function(t, e, i) {
        t.exports = i.p + "static/img/iso-icon-1.697bdb3.svg"
    },
    MJuU: function(t, e) {},
    MNPs: function(t, e) {},
    T183: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAYAAAARIY8tAAAAAXNSR0IArs4c6QAAAMlJREFUSA3tlMENwjAMRb+rqtmJRIIjEzAJA9ADNyZhCpBSpugi6aEmVoVULsZSG061FDWSnfcduw55768AnwE0ea1pA0A38n6XMnVt+CfRoSoIF5FGBIpabaUT4QlUjyl+PDBjbzlrFhB4jPEi0BBC/o4mgeIl2gSkJaptJVLLI055i/hnlASWHrRpcm3DNU/Y3GSiqu26F8mS/Ryi7c0CGkTzFRcwN1nLUvMVv8FfBHrtigt9fe0cjinRKf97biHs6zgzJ+f4/gauvy2vPuhlyAAAAABJRU5ErkJggg=="
    },
    WJmn: function(t, e, i) {
        t.exports = i.p + "static/img/iso-icon-3.309481b.png"
    },
    XGnK: function(t, e, i) {
        t.exports = i.p + "static/img/noticemodalEn.a310db4.png"
    },
    XxH0: function(t, e) {},
    grfs: function(t, e) {},
    jw3l: function(t, e) {},
    p2UN: function(t, e) {},
    qIt4: function(t, e) {},
    sr0O: function(t, e) {},
    whYc: function(t, e) {},
    yP92: function(t, e) {},
    ygAC: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAKCAYAAACXDi8zAAAAAXNSR0IArs4c6QAAAC5JREFUCB1juHPzyn8QZkADTGh8TC66Tpw6GNH1wuzDqQOugWg7GNBVwozAaQcAc2sf1LFi8YMAAAAASUVORK5CYII="
    }
});