document.querySelector("[data-header]");
let W = document.querySelectorAll("[data-section]");
const K = document.querySelector("[data-indicator]"),
    re = document.querySelector("[data-scroller]");
let P = 0,
    at = 0,
    oi = {
        root: re,
        rootMargin: "-12% 0px -88% 0px"
    },
    he = [];
const fe = document.querySelectorAll(".swiper--ads");
if (fe)
    for (var k = 0; k < fe.length; k++)
        fe[k].classList.add("swiperAds" + k),
        he[k] = new Swiper(".swiperAds" + k, {
            autoplay: {
                delay: 3e3,
                stopOnLastSlide: !0,
                disableOnInteraction: !1
            },
            pagination: {
                el: ".swiper-pagination"
            }
        }),
        he[k].autoplay.stop();
const ri = () => {
        re.scrollTop > at ? P % 5 === 0 && K.scrollBy({
                top: K.clientHeight,
                behavior: "smooth"
            }) : (P + 1) % 5 === 0 && K.scrollBy({
                top: -K.clientHeight,
                behavior: "smooth"
            }),
            at = re.scrollTop + re.clientHeight / 3
    },
    ai = () => {
        K.innerHTML = "";
        for (var n = 0; n < W.length; n++) {
            var t = document.createElement("span");
            t.classList.add("snap-always", "shrink-0", "indicator-bullet"),
                n === P && t.classList.add("indicator-bullet-active"),
                K.appendChild(t)
        }
    };
var st = document.querySelector("[data-anchor]"),
    bn, Sn, kn;
st && document.querySelector(".overlay-infoSwipe") && ((Sn = (bn = window == null ? void 0 : window.kly) == null ? void 0 : bn.gtm) == null ? void 0 : Sn.articleId) && ((kn = window.kly) == null ? void 0 : kn.pageType) == "InformationPage" && st.dataset.anchor == "false" && document.querySelector(".overlay-infoSwipe").classList.remove("hidden");
var We = document.querySelector(".btn--readarticle");
We && (document.body.classList.add("expand"),
    We.addEventListener("click", function(n) {
        if (this.parentNode.classList.toggle("hidden"),
            this.parentNode.classList.contains("hidden")) {
            this.closest("body").classList.remove("expand");
            var t = document.querySelector(".dt-infoSwipe");
            t.classList.remove("snap-end"),
                setTimeout(function() {
                    t.classList.add("snap-end")
                }, 100);
            var i = document.querySelector(".wimvk--fyp-legacy");
            i && (window == null ? void 0 : window.mavFypWidget) && i.classList.add("active")
        } else
            this.closest("body").classList.add("expand");
        n.preventDefault()
    }));
var G = document.querySelector(".btn--page-next"),
    ae = document.querySelector(".btn--page-prev");
G && G.addEventListener("click", function(n) {
    document.querySelector("section.is-visible").nextElementSibling.scrollIntoView(),
        n.preventDefault()
});
ae && ae.addEventListener("click", function(n) {
    document.querySelector("section.is-visible").previousElementSibling.scrollIntoView(),
        n.preventDefault()
});
const lt = document.querySelectorAll(".tap-descHide");
lt && lt.forEach(function(n) {
    n.addEventListener("click", t => {
        n.closest(".section").classList.toggle("hideDesc")
    })
});
var ct = document.querySelector(".btn--showScroll");
ct && ct.addEventListener("click", function(n) {
    this.parentNode.classList.add("hidden"),
        this.parentNode.classList.contains("hidden") && this.closest(".section").classList.add("section--scroll"),
        n.preventDefault()
});
var Ae = document.querySelector(".box--tag .box-main.overflow-hidden");
Ae && Ae.scrollHeight > Ae.clientHeight && document.querySelector(".box--tag .btn--showScroll").classList.remove("hidden");
var Te = document.querySelector(".snap-x.overflow-x-auto");
if (Te) {
    var dt = Te.querySelector(".active");
    dt && (Te.scrollLeft += dt.offsetLeft)
}
var ut = document.querySelectorAll('.rate input[type="radio"]');
ut && ut.forEach(function(n) {
    n.addEventListener("change", t => {
        var i = t.target.checked,
            o = document.querySelector(".btn--rate");
        i && (o.classList.remove("disabled"),
            o.addEventListener("click", function(a) {
                a.target.parentNode.classList.add("opacity-0"),
                    a.target.parentNode.previousElementSibling.classList.remove("opacity-0"),
                    a.preventDefault()
            }))
    })
});
var ft = document.querySelector(".wimvk--fyp-close");
ft && ft.addEventListener("click", function() {
    this.closest(".wimvk").classList.add("hidden")
});
var oe = document.querySelector(".wimvk--fyp-inner-dynamic"),
    pt = !1,
    si = document.querySelector(".wimvk--fyp-inner-dynamic-close");
oe && (oe.querySelector(".wimvk--fyp-inner-dynamic-notice-click").addEventListener("click", function() {
        oe.classList.add("active")
    }),
    si.addEventListener("click", function() {
        oe.classList.remove("active")
    }));
var ze;

function li(n, t) {
    function i(a) {
        var r = a.querySelector("video");
        if (r)
            for (var s in r.children) {
                var l = r.children[s];
                typeof l.tagName == "string" && l.tagName === "SOURCE" && (l.src || (l.src = l.dataset.src,
                    r.load(),
                    r.onload = function() {
                        r.play()
                    }
                ))
            }
    }

    function o(a) {
        a == null || a.forEach(function(r) {
            r.pause(),
                r.classList.remove("pause");
            for (var s in r.children) {
                var l = r.children[s];
                l.src && l.dataset.src && l.removeAttribute("src")
            }
            r.currentTime = 0
        })
    }
    ze = setInterval(function() {
        {
            var a = t.target.querySelector(".suggest-list-item.active");
            a.classList.remove("active"),
                o(a.parentElement.querySelectorAll("video")),
                a.nextElementSibling ? a && (a.nextElementSibling.classList.add("active"),
                    i(a.nextElementSibling)) : a && (a.parentElement.firstElementChild.classList.add("active"),
                    document.querySelector("section.is-visible").nextElementSibling.scrollIntoView(),
                    clearInterval(ze))
        }
    }, n)
}
const ci = {
        root: document.querySelector("section.is-visible .suggest-list--feed"),
        rootMargin: "0px",
        threshold: .75
    },
    di = new IntersectionObserver(n => {
        n.forEach(t => {
            t.isIntersecting ? t.target.classList.add("active") : t.target.classList.remove("active")
        })
    }, ci);
window.io = new IntersectionObserver(n => {
    n.forEach(t => {
        var g, v, b, E, L, _, q, A, T;
        const i = t.target.dataset.sid,
            o = t.target.dataset.theme,
            a = t.target.dataset.sound;
        if ((g = window.kly) != null && g.debug && console.log("isIntersecting", t.isIntersecting, t.target.dataset.list),
            t.isIntersecting) {
            document.body.setAttribute("data-theme", o),
                document.body.setAttribute("data-sound", a),
                t.target.classList.add("is-visible"),
                P = Pn[i],
                ai(),
                ri();
            for (var r = 0; r < fe.length; r++)
                t.target.querySelector(".swiperAds" + r) && he[r].autoplay.start();
            typeof MaverickLabVisibleSection == "function" && ((v = window.kly) != null && v.debug && console.log("IntersectionObserver UI"),
                MaverickLabVisibleSection(t, io, P));
            var c = W.length;
            ae && (P == 0 ? (ae.classList.add("disabled"),
                    G.classList.remove("disabled"),
                    c == 1 && G.classList.add("disabled")) : (ae.classList.remove("disabled"),
                    G.classList.remove("disabled"),
                    P + 1 == c && G.classList.add("disabled"))),
                ui(t);
            var s = document.querySelectorAll(".overlay-infopage"),
                l = P + 1,
                d = document.querySelectorAll('.section:is([data-page="0"]):not([data-section="content-break"]'),
                c = parseInt(((E = (b = window == null ? void 0 : window.kly) == null ? void 0 : b.gtm) == null ? void 0 : E.totalFeedItem) - d.length || 0) + (((L = window == null ? void 0 : window.kly) == null ? void 0 : L.pageType) == "QuranPage" ? 0 : 1),
                u = document.querySelector(".overlay-pagination");
            u && c > 1 && l <= c && (l = l.toString(),
                    endPage = c.toString(),
                    u.innerHTML = l + "/" + endPage),
                s && (((_ = window == null ? void 0 : window.kly) == null ? void 0 : _.pageType) == "InformationPage" || ((q = window == null ? void 0 : window.kly) == null ? void 0 : q.pageType) == "QuranPage") && s.forEach(function(M) {
                    l > c || t.target.dataset.page == "0" || o == "ads" || o == "insertion" ? M.classList.add("hidden") : M.classList.remove("hidden")
                });
            var m = document.querySelector(".wimvk--fyp-postcredit");
            m && (l >= 6 && l <= 8 && ((window == null ? void 0 : window.mavPopUpChannel) || null) ? (m.classList.add("active"),
                pt || (pt = !0,
                    setTimeout(function() {
                        oe.classList.add("active")
                    }, 1e3)),
                document.dispatchEvent(new CustomEvent("maverick:contentBreakPopup", {
                    detail: {
                        state: "open",
                        section: t.target
                    }
                }))) : m.classList.remove("active"));
            var h = t.target.querySelector(".wimvk--fyp-legacy"),
                y = document.querySelector(".wimvk--fyp-legacy");
            h ? We.parentNode.classList.contains("hidden") && y.classList.add("active") : y && y.classList.remove("active");
            var p = document.querySelectorAll(".section[data-theme=dt-information]");
            if (p)
                for (var r = 20; r < p.length; r++)
                    p.length > 20 && p[r].classList.add("hideNumber");
            const O = document.querySelector(".overlay-swipeup");
            O && (P != 0 ? O.classList.add("current") : O.classList.remove("current"));
            const C = document.querySelector(".header-tagline:not(.hidden)");
            C && (P != 1 ? C.style.display = "none" : C.style.display = "");
            const R = t.target.querySelector(".dots-btn.active");
            R && R.click();
            var w = t.target.querySelector("img[loading]");
            w && setTimeout(function() {
                    w.setAttribute("loading", "")
                }, 100),
                t.target.dataset.section == "content-break" && setTimeout(() => {
                    var M;
                    (M = t.target.querySelector(".section-body")) == null || M.classList.add("unminify")
                }, 2e3),
                t.target.querySelector(".suggest-list--video") && li(5e3, t);
            const F = t.target.querySelectorAll(".suggest-list--feed > div");
            F && F.forEach(M => {
                di.observe(M)
            })
        } else
            t.target.classList.remove("is-visible"),
            he.forEach(function(R) {
                R.slideToLoop(0, 0),
                    R.autoplay.stop()
            }),
            typeof MaverickLabInVisibleSection == "function" && MaverickLabInVisibleSection(t, io, P),
            fi(t),
            t.target.querySelector(".tap-descHide") && t.target.classList.remove("hideDesc"),
            t.target.querySelector(".suggest-list--video") && ((A = t.target.querySelector(".suggest-list-item.active:not(:first-child)")) == null || A.classList.remove("active"),
                (T = t.target.querySelector(".suggest-list-item")) == null || T.parentElement.firstElementChild.classList.add("active"),
                clearInterval(ze))
    })
}, oi);
document.querySelector(".overlay-swipeup .viewers-avatar") && (document.querySelectorAll(".viewers-avatar li").forEach(function(n) {
        var t = ["#FFD1DC", "#FFA07A", "#FFB6C1", "#87CEFA", "#98FB98", "#F08080", "#D8BFD8", "#DDA0DD", "#FF6347", "#FFA500", "#00FA9A", "#00CED1", "#20B2AA", "#87CEEB", "#9370DB", "#7B68EE", "#48D1CC", "#40E0D0", "#00BFFF", "#00CED1", "#AFEEEE", "#98FB98", "#DDA0DD", "#87CEEB", "#FFD700"],
            i = t[Math.floor(Math.random() * t.length)];
        n.style.backgroundColor = i
    }),
    getComputedStyle(document.querySelector(".viewers-avatar")).getPropertyValue("--userDuration"));
var Pn = {},
    mt = document.querySelector(".backtop");
mt !== null && mt.addEventListener("click", function(n) {
    W[0].scrollIntoView(),
        n.preventDefault()
});

function Mn() {
    for (var n = document.querySelectorAll('.section:not([data-theme="ads"],[data-theme="insertion"],[data-page="0"])'), t = 0; t < n.length; t++) {
        var i = (Math.random() + 1).toString(36).substring(7);
        n[t].dataset.sid = i,
            Pn[n[t].dataset.sid] = t
    }
    for (var t = 0; t < W.length; t++)
        window.io && window.io.unobserve && window.io.unobserve(W[t]),
        window.io && window.io.observe && window.io.observe(W[t])
}

function ui(n) {
    const t = n.target.querySelector("video");
    if (t) {
        for (var i in t.children) {
            var o = t.children[i];
            typeof o.tagName == "string" && o.tagName === "SOURCE" && (o.src || (o.src = o.dataset.src,
                    setTimeout(function() {
                        t.videoHeight < t.videoWidth && (t.classList.replace("object-cover", "object-contain"),
                            t.style.backgroundImage = "")
                    }, 1e3)),
                o.src && (t.load(),
                    t.onloadstart = function() {
                        t.play(),
                            t.classList.remove("blur-lg")
                    }
                ))
        }
        t.duration % 60,
            t.addEventListener("loadedmetadata", () => {
                var s, l;
                document.dispatchEvent(new CustomEvent("maverick:video_event", {
                    detail: {
                        type: "start",
                        video: t,
                        sectionId: (l = (s = t.closest("section")) == null ? void 0 : s.dataset) == null ? void 0 : l.sid,
                        provider: "selfplayer"
                    }
                }))
            }),
            t.addEventListener("timeupdate", () => {
                var s, l;
                document.dispatchEvent(new CustomEvent("maverick:video_event", {
                    detail: {
                        type: "update",
                        video: t,
                        sectionId: (l = (s = t.closest("section")) == null ? void 0 : s.dataset) == null ? void 0 : l.sid,
                        provider: "selfplayer"
                    }
                }))
            }),
            t.addEventListener("pause", () => {
                var s, l;
                document.dispatchEvent(new CustomEvent("maverick:video_event", {
                    detail: {
                        type: "pause",
                        video: t,
                        sectionId: (l = (s = t.closest("section")) == null ? void 0 : s.dataset) == null ? void 0 : l.sid,
                        provider: "selfplayer"
                    }
                }))
            }),
            t.addEventListener("play", () => {
                var s, l;
                t.currentTime > 0 && document.dispatchEvent(new CustomEvent("maverick:video_event", {
                    detail: {
                        type: "resume",
                        video: t,
                        sectionId: (l = (s = t.closest("section")) == null ? void 0 : s.dataset) == null ? void 0 : l.sid,
                        provider: "selfplayer"
                    }
                }))
            })
    }

    function a() {
        var s = n.target.querySelector("iframe"),
            l = n.target.querySelector('iframe[src^="https://www.vidio.com/embed/"]'),
            d = n.target.querySelector('iframe[src^="https://www.youtube.com/embed/"]');

        function c() {
            setTimeout(function() {
                d.addEventListener("load", c),
                    d.contentWindow.postMessage('{"event":"command", "func":"playVideo", "args":""}', "*")
            }, 300)
        }

        function u() {
            setTimeout(function() {
                s.addEventListener("load", u),
                    s.contentWindow.postMessage("ads.play", "*"),
                    s.contentWindow.postMessage("vidio.playback.play", "*"),
                    s.contentWindow.postMessage("enamplus.playback.play", "*")
            }, 300)
        }
        if (d)
            if (d.src.includes("enablejsapi=1"))
                c();
            else {
                var m = n.target.querySelector(".embed-yt");
                d.src += (d.src.includes("?") ? "&" : "?") + "enablejsapi=1",
                    document.querySelector(".muted") || (d.src += "&mute=1"),
                    m && (d.src += "&controls=0"),
                    c()
            }
        else {
            if (l && document.querySelector(".muted")) {
                var h = l.src.replace("mute=true", "mute=false");
                l.src = h
            }
            u()
        }
    }
    var r = n.target.querySelector("iframe");
    r && (r.getAttribute("data-src") && (r.src || r.setAttribute("src", r.getAttribute("data-src"))),
        a())
}

function fi(n) {
    var t = document.querySelectorAll("iframe");
    t && t.forEach(function(o) {
        var a = n.target.querySelector('iframe[src^="https://www.youtube.com/embed/"]');
        a && a.src.includes("enablejsapi=1") && o.contentWindow.postMessage('{"event":"command", "func":"pauseVideo", "args":""}', "*"),
            o.contentWindow.postMessage("ads.pause", "*"),
            o.contentWindow.postMessage("vidio.playback.pause", "*"),
            o.contentWindow.postMessage("enamplus.playback.pause", "*")
    });
    var i = n.target.querySelectorAll("video");
    i && Array.prototype.forEach.call(i, function(o) {
        o.pause(),
            o.classList.remove("pause");
        for (var a in o.children) {
            var r = o.children[a];
            r.src && r.dataset.src && r.removeAttribute("src")
        }
        o.currentTime = 0
    })
}

function pi() {
    let n = document.querySelectorAll(".btn--unmute"),
        t = document.querySelectorAll("video"),
        i = document.querySelectorAll("iframe");
    n && n.forEach(function(o) {
        o.addEventListener("click", function(a) {
            this.closest("body").querySelectorAll(".btn--unmute").forEach(function(r) {
                    r.classList.toggle("muted")
                }),
                this.classList.contains("muted") ? (i.forEach(function(r) {
                        r.src.includes("enablejsapi=1") && r.contentWindow.postMessage('{"event":"command", "func":"unMute", "args":""}', "*"),
                            r.contentWindow.postMessage("ads.unMute", "*"),
                            r.contentWindow.postMessage("vidio.playback.unmute", "*"),
                            r.contentWindow.postMessage("enamplus.playback.unmute", "*")
                    }),
                    Array.prototype.forEach.call(t, function(r) {
                        r.muted = !1
                    })) : (i.forEach(function(r) {
                        r.src.includes("enablejsapi=1") && r.contentWindow.postMessage('{"event":"command", "func":"mute", "args":""}', "*"),
                            r.contentWindow.postMessage("ads.mute", "*"),
                            r.contentWindow.postMessage("vidio.playback.mute", "*"),
                            r.contentWindow.postMessage("enamplus.playback.mute", "*")
                    }),
                    Array.prototype.forEach.call(t, function(r) {
                        r.muted = !0
                    })),
                a.preventDefault()
        })
    })
}
Mn();
pi();

function Dn(n) {
    const t = document.querySelectorAll("time");
    t && t.forEach(function(i) {
        i.getAttribute("datetime")
    })
}
Dn();
document.addEventListener("maverick:locale", function(n) {
    Dn(n.detail)
}, !1);
document.addEventListener("maverick:reinit", function() {
    W = document.querySelectorAll("[data-section]"),
        Mn()
}, !1);
let se = document.querySelector(".switchTheme-click"),
    yt = document.querySelectorAll(".switchTheme-option li a"),
    wt = new Date().getHours();
if (se) {
    se.addEventListener("click", n => {
        n.currentTarget.classList.toggle("is-active"),
            n.currentTarget.classList.contains("is-active") ? document.querySelector(".switchTheme-option").classList.add("open") : document.querySelector(".switchTheme-option").classList.remove("open"),
            n.preventDefault()
    });
    for (var k = 0; k < yt.length; k++)
        yt[k].addEventListener("click", function(t) {
            let i = this.dataset.value,
                o = this.querySelector(".icon-theme").innerHTML;
            document.documentElement.setAttribute("theme", i),
                document.querySelector(".switchTheme-option li.active").classList.remove("active"),
                this.parentNode.classList.add("active"),
                se.innerHTML = o,
                i === "darkmode" ? document.documentElement.classList.add("dark") : i === "lightmode" ? document.documentElement.classList.remove("dark") : (document.documentElement.classList.remove("dark"),
                    (wt >= 24 || wt < 5) && document.documentElement.classList.add("dark"));
            var a = document.documentElement.getAttribute("theme");
            localStorage.setItem("mode", a),
                t.preventDefault()
        });
    var ht = localStorage.getItem("mode");
    ht === "darkmode" ? document.querySelector("[data-value=darkmode]").click() : ht === "lightmode" ? document.querySelector("[data-value=lightmode]").click() : document.querySelector("[data-value=automode]").click()
}
window.addEventListener("click", function(n) {
    se.contains(n.target) || (se.classList.remove("is-active"),
        document.querySelector(".switchTheme-option").classList.remove("open"))
});
const mi = document.querySelectorAll("[data-toggle]"),
    yi = document.querySelectorAll("[data-toggle-close]");
mi.forEach(function(n, t) {
    n.addEventListener("click", function(i) {
        const o = this.getAttribute("data-toggle");
        this.classList.toggle("is-active"),
            this.classList.contains("is-active") ? (document.body.classList.add("overflow-hidden"),
                document.querySelector('[data-toggle-open="' + o + '"]').classList.add("open")) : (document.body.classList.remove("overflow-hidden"),
                document.querySelector('[data-toggle-open="' + o + '"]').classList.remove("open")),
            i.preventDefault()
    })
});
yi.forEach(function(n, t) {
    n.addEventListener("click", function(i) {
        document.body.classList.remove("overflow-hidden"),
            document.querySelector("[data-toggle].is-active").classList.remove("is-active"),
            document.querySelector("[data-toggle-open].open").classList.remove("open"),
            i.preventDefault()
    })
});
navigator.userAgent.match("CriOS") && document.body.addEventListener("touchstart", t => {
    t.preventDefault()
});
const wi = document.querySelectorAll("[data-submenu]");
wi.forEach(function(n, t) {
    n.addEventListener("click", function(i) {
        const o = this.getAttribute("data-submenu"),
            a = document.querySelector('[data-submenu-open="' + o + '"]');
        this.classList.toggle("is-active"),
            this.classList.contains("is-active") ? a.classList.add("open") : a.classList.remove("open"),
            i.preventDefault()
    })
});
const gt = document.querySelectorAll(".line-clamp-str");
gt && gt.forEach(function(n) {
    for (var t = n.querySelectorAll(".line-clamp-str p:last-child"), i = 0; i < t.length; i++) {
        let r = t[0].nextElementSibling;
        for (; r;)
            r.classList.add("more-text", "hidden"),
            r = r.nextElementSibling;
        const l = t[0].innerHTML.length;
        var o = 134;
        l > o && (t[i].parentNode.style.paddingBottom = "2rem",
            t[i].classList.add("line-clamp-str-body"),
            t[i].parentNode.innerHTML += "<span class='dots-btn absolute bottom-0 inset-x-0 vh-text-sm font-semibold font-primary-1 block cursor-pointer pointer-events-auto'>More</span>")
    }
    n.querySelector(".line-clamp-str-body") && n.querySelector(".line-clamp-str-body").addEventListener("scroll", r => {
        const s = r.currentTarget;
        s.scrollTop > 0 ? (s.classList.add("is-top-overflowing"),
            s.classList.add("is-bottom-overflowing"),
            s.scrollTop + s.clientHeight === s.scrollHeight && s.classList.remove("is-bottom-overflowing")) : s.classList.remove("is-top-overflowing")
    });
    var a = n.querySelector(".dots-btn");
    a && a.addEventListener("click", r => {
        var s = r.currentTarget,
            l = s.parentNode,
            d = l.querySelector(".line-clamp-str-body");
        s.classList.toggle("active"),
            d.scrollTo(0, 0),
            s.classList.contains("active") ? (s.innerHTML = "Less",
                l.classList.add("open"),
                d.scrollHeight > 16 * 12 && d.classList.add("is-bottom-overflowing")) : (s.innerHTML = "More",
                l.classList.remove("open"),
                targetMoretext.forEach(function(c) {
                    c.classList.add("hidden")
                }))
    })
});
const vt = document.querySelectorAll("[data-popup]"),
    bt = document.querySelectorAll("[data-scroller-ads]"),
    St = document.querySelectorAll("[data-section-ads]");
let kt = [],
    Et = [];
for (var k = 0; k < bt.length; k++) {
    kt[k] = {
            root: bt[k],
            rootMargin: "-12% 0px -88% 0px"
        },
        Et[k] = new IntersectionObserver(t => {
            t.forEach(i => {
                i.isIntersecting ? i.target.classList.add("is-visible") : i.target.classList.remove("is-visible")
            })
        }, kt[k]);
    for (var xe = 0; xe < St.length; xe++)
        Et[k].observe(St[xe])
}
for (var k = 0; k < vt.length; k++)
    vt[k].addEventListener("click", function(t) {
        const i = this.getAttribute("data-popup");
        document.querySelector("[data-scroller]").style.overflow = "hidden",
            document.querySelector("[data-popup-open=" + i + "]").classList.add("open"),
            document.querySelector("[data-popup-open=" + i + "] [data-section-ads]:first-child").scrollIntoView(),
            document.querySelector("[data-popup-open=" + i + "] [data-section-ads]:first-child").classList.add("is-visible")
    });
const Lt = document.querySelectorAll("[data-popup-close]");
for (var k = 0; k < Lt.length; k++)
    Lt[k].addEventListener("click", function(t) {
        const i = this.getAttribute("data-popup-close");
        document.querySelector("[data-scroller]").style.overflow = "",
            document.querySelector("[data-popup-open=" + i + "]").classList.remove("open"),
            document.querySelector("[data-popup-open=" + i + "] [data-section-ads]:first-child").scrollIntoView(),
            document.querySelector("[data-popup-open=" + i + "] [data-section-ads].is-visible").classList.remove("is-visible")
    });
const hi = new Event("build");
var _t = !1;
document.addEventListener("build", () => {
    if (!document.querySelector("#swiper")) {
        let n = document.createElement("script");
        n.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
            n.id = "swiper",
            n.setAttribute("defer", ""),
            document.body.append(n);
        let t = document.createElement("link");
        t.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
            t.rel = "stylesheet",
            t.setAttribute("defer", ""),
            document.head.append(t)
    }
    typeof Swiper < "u" && !_t && document.querySelector(".dt--postcredit .swiper") && setTimeout(() => {
        const n = new Swiper(".dt--postcredit .swiper", {
            pagination: {
                el: ".swiper-pagination",
                clickable: !0,
                renderBullet: function(t, i) {
                    return '<span class="' + i + '">' + (t + 1) + "</span>"
                }
            }
        }).on("setTranslate", function(t, i) {
            document.querySelector(".dt--postcredit .swiper").style.backgroundPosition = i + "px"
        }).on("slideChange", function(t) {
            n.pagination.render(),
                n.pagination.update(),
                document.dispatchEvent(new CustomEvent("maverick:postcredit.event", {
                    detail: {
                        state: "slideChange",
                        element: t
                    }
                }))
        });
        _t = !0
    }, 500)
}, !1);
re.addEventListener("scroll", function() {
    document.dispatchEvent(hi)
});
const qt = document.querySelector(".btn--share"),
    Je = document.querySelector(".shareModal"),
    At = document.querySelector(".shareModal-close"),
    J = document.querySelector(".shareModal-tooltip");
var Tt = !1,
    En, Ln, _n;
if (qt) {
    let t = function() {
        var s, l, d, c, u, m;
        let i = ((s = document.querySelector(".swiper-slide-active .shareOutput .shareOutput-title")) == null ? void 0 : s.textContent.trim()) || document.title,
            o = (l = document.querySelector('meta[name="description"]')) == null ? void 0 : l.content,
            a = window.location.href;
        if ($ == "dt-information") {
            let h = document.querySelector("section.is-visible");
            i = ((d = h.querySelector("h4")) == null ? void 0 : d.textContent.trim()) || document.title,
                o = ((c = h.querySelector(".article-paragraph")) == null ? void 0 : c.textContent.trim()) || ((u = document.querySelector('meta[name="description"]')) == null ? void 0 : u.content),
                a = ((m = h.querySelector("a")) == null ? void 0 : m.getAttribute("href")) || window.location.href
        }
        a = a.indexOf(window.location.origin) == -1 ? window.location.origin + a : a;
        const r = {
            title: i,
            text: o,
            url: a
        };
        navigator.share && navigator.share(r).then(() => {
            console.log("Shared successfully")
        })
    };
    var onShareText = t,
        $;
    qt.addEventListener("click", i => {
            var d, c, u, m, h, y, p, w;
            if ($ = document.body.getAttribute("data-theme"),
                (((d = window == null ? void 0 : window.kly) == null ? void 0 : d.pageType) || null) == "ReadPage") {
                let g = document.title,
                    v = document.querySelector('meta[name="description"]').content,
                    b = window.location.href;
                if (((u = (c = window == null ? void 0 : window.kly) == null ? void 0 : c.gtm) == null ? void 0 : u.pageType) == "ReadPage",
                    $ == "dt-headline" || $ == "dt-parablock" || $ == "postcredit")
                    g = ((h = (m = window == null ? void 0 : window.kly) == null ? void 0 : m.gtm) == null ? void 0 : h.articleTitle) || document.querySelector("title").text,
                    v = document.querySelector('meta[name="description"]').content,
                    b = window.location.href;
                else {
                    let L = document.querySelector("section.is-visible");
                    g = ((y = L.querySelector(".article-title")) == null ? void 0 : y.textContent.trim()) || document.title,
                        v = (p = L.querySelector(".article-paragraph")) == null ? void 0 : p.textContent.trim(),
                        b = ((w = L.querySelector("a")) == null ? void 0 : w.getAttribute("href")) || window.location.href
                }
                b = b.indexOf(window.location.origin) == -1 ? window.location.origin + b : b;
                let E = {
                    title: g,
                    text: v,
                    url: b
                };
                navigator.share(E)
            } else {
                var o = document.querySelector("section.is-visible picture img");
                if (o) {
                    var a = o.getAttribute("src"),
                        r = o.src.replace("mav-prod-resized/480x/ori", "maverick-prod");
                    o.setAttribute("src", r),
                        o.setAttribute("data-origin", a),
                        o.previousElementSibling.setAttribute("srcset", r),
                        setTimeout(function() {
                            o.setAttribute("src", a),
                                o.setAttribute("data-origin", r),
                                o.previousElementSibling.setAttribute("srcset", a)
                        }, 2e3)
                }
                if (Je.classList.add("is-open"), !Tt) {
                    Tt = !0,
                        Je.classList.remove("hidden");
                    let g = document.createElement("script");
                    g.src = "https://cdns.klimg.com/maverick-prod/static/build/frontend/assets/html2canvas.js",
                        g.setAttribute("defer", ""),
                        document.body.append(g)
                }
                setTimeout(() => {
                    var g = new Swiper(".shareModal .swiper", {
                        spaceBetween: 16,
                        pagination: {
                            el: ".swiper-pagination",
                            type: "bullets"
                        }
                    }).on("slideChange", function() {
                        g.pagination.render(),
                            g.pagination.update()
                    });
                    g.update()
                }, 1e3);
                var s = document.querySelector("section.is-visible");
                $ != "dt-information" && (s = document.querySelector('section[data-section="mobile-billboard"] + section'));
                var l = document.querySelectorAll(".shareOutput");
                l.forEach(function(g) {
                        var v, b, E, L, _, q, A;
                        g.classList.contains("--current") ? setTimeout(() => {
                            html2canvas(document.querySelector("section.is-visible"), {
                                useCORS: !0,
                                allowTaint: !0,
                                backgroundColor: "transparent",
                                imageTimeout: 0,
                                ignoreElements: function(T) {
                                    return T.tagName === "A" && T.host !== window.location.host || T.getAttribute("loading") === "lazy"
                                }
                            }).then(T => (document.querySelector(".shareOutput.--current").appendChild(T),
                                T.style.width = "100%",
                                T.style.height = "100%",
                                T))
                        }, 1500) : (g.style.backgroundImage = "url(" + ((v = s.querySelector(".article-asset img")) == null ? void 0 : v.src) + ")",
                            (s.querySelector(".article-desc h4") || s.querySelector(".article-title")) && (g.querySelector(".shareOutput-title").innerHTML = ((b = s.querySelector(".article-desc h4")) == null ? void 0 : b.textContent) || ((E = s.querySelector(".article-title")) == null ? void 0 : E.textContent) || s.querySelector(".cl-payload").dataset.title),
                            s.querySelector(".article-desc .article-paragraph") ? (g.querySelector(".shareOutput-desc").innerHTML = (L = s.querySelector(".article-desc .article-paragraph")) == null ? void 0 : L.textContent,
                                g.querySelector(".shareOutput-desc").style.display = "") : (g.querySelector(".shareOutput-desc").innerHTML = "",
                                g.querySelector(".shareOutput-desc").style.display = "none"),
                            s.querySelector(".article-desc .article-tag a") ? (g.querySelector(".shareOutput-tag").innerHTML = (_ = s.querySelector(".article-desc .article-tag a")) == null ? void 0 : _.textContent,
                                g.querySelector(".shareOutput-tag").style.display = "") : (g.querySelector(".shareOutput-tag").innerHTML = "",
                                g.querySelector(".shareOutput-tag").style.display = "none"),
                            g.classList.contains("--first") && (g.querySelector(".shareOutput-logo img").src = document.querySelector(".header-body-logo-link-icon .icon-lg").src),
                            g.classList.contains("--fifth") && (g.querySelector(".shareOutput-logo img").src = ((q = document.querySelector('link[rel="shortcut icon"]')) == null ? void 0 : q.href) || ((A = document.querySelector('link[rel="icon"]')) == null ? void 0 : A.href)))
                    }),
                    (document.body.dataset.theme == "media1" && (!s.querySelector(".article-desc h4") || !s.querySelector(".article-title")) || !s.querySelector(".article-desc h4") && !s.querySelector(".article-title")) && document.querySelector(".shareModal .swiper").classList.add("--video")
            }
        }),
        document.querySelector(".shareModal-footer-btn.--copy") && document.querySelector(".shareModal-footer-btn.--copy").addEventListener("click", function() {
            var a;
            let i;
            if (i = ((a = document.querySelector("section.is-visible").querySelector("a.btn")) == null ? void 0 : a.getAttribute("href")) || window.location.href,
                i = i.indexOf(window.location.origin) == -1 ? window.location.origin + i : i,
                J.classList.add("active"),
                J.innerHTML = "Link Copied!",
                setTimeout(() => {
                    J.classList.remove("active")
                }, 2e3),
                window.isSecureContext)
                navigator.clipboard.writeText(i);
            else {
                const r = document.createElement("textarea");
                r.value = i,
                    this.appendChild(r),
                    r.select(),
                    r.setSelectionRange(0, 99999),
                    document.execCommand("copy"),
                    this.removeChild(r)
            }
        }),
        document.querySelector(".shareModal-footer-btn.--download") && document.querySelector(".shareModal-footer-btn.--download").addEventListener("click", function() {
            J.classList.add("active"),
                J.innerHTML = "Image Saved!",
                setTimeout(() => {
                    J.classList.remove("active")
                }, 2e3);
            var i = document.querySelector(".swiper-slide-active .shareOutput");
            html2canvas(i, {
                scale: 3,
                useCORS: !0,
                allowTaint: !0,
                imageTimeout: 0,
                windowWidth: 720,
                windowHeight: 1280
            }).then(o => (o.style.display = "none",
                document.body.appendChild(o),
                o)).then(o => {
                const a = o.toDataURL("image/png"),
                    r = document.createElement("a");
                r.setAttribute("download", "kly-share.png"),
                    r.setAttribute("href", a),
                    r.click(),
                    o.remove()
            })
        }),
        navigator.userAgent.match("CriOS") ? document.querySelector(".shareModal-footer-btn.--share button").classList.remove("hidden") : (En = document.querySelector(".shareModal-footer-btn.--share select")) == null || En.classList.remove("hidden");
    async function n() {
        const o = (await html2canvas(document.querySelector(".swiper-slide-active .shareOutput"), {
                scale: 3,
                useCORS: !0,
                allowTaint: !0,
                imageTimeout: 0,
                windowWidth: 720,
                windowHeight: 1280
            })).toDataURL(),
            r = await (await fetch(o)).blob();
        var l = {
            files: [new File([r], "image.png", {
                type: r.type,
                lastModified: new Date().getTime()
            })]
        };
        navigator.share && navigator.share(l).then(() => {
            console.log("Shared successfully")
        })
    }
    (Ln = document.querySelector(".shareModal-footer-btn.--share select")) == null || Ln.addEventListener("change", function() {
            var i = this.options[this.selectedIndex].value;
            i === "image" ? (async() => await n())() : t()
        }),
        (_n = document.querySelector(".shareModal-footer-btn.--share button")) == null || _n.addEventListener("click", function(i) {
            t()
        })
}
At && At.addEventListener("click", n => {
    document.querySelector(".shareOutput.--current canvas") && document.querySelector(".shareOutput.--current canvas").remove(),
        document.querySelector(".shareModal .swiper").classList.contains("--video") && document.querySelector(".shareModal .swiper").classList.remove("--video"),
        Je.classList.remove("is-open")
});
var xt = document.querySelector(".shareModal-link-copy"),
    Ce = document.querySelector(".shareModal-link-url");
xt && xt.addEventListener("click", function(n) {
    Ce.select(),
        Ce.setSelectionRange(0, 99999),
        navigator.clipboard.writeText(Ce.value)
});
var Ct = document.querySelector(".btn--collapse");
Ct && Ct.addEventListener("click", function(n) {
    this.classList.toggle("collapsed"),
        this.classList.contains("collapsed") ? document.querySelector(".box--collapse").classList.add("open") : document.querySelector(".box--collapse").classList.remove("open"),
        n.preventDefault()
});
var It = document.querySelectorAll(".btn--copy");
It && It.forEach(function(n) {
    n.addEventListener("click", function(t) {
        var i = this.parentNode.parentNode,
            o = i.querySelector(".ayat-arabic-text"),
            a = i.querySelector(".ayat-translate");
        this.classList.add("copied"),
            setTimeout(() => {
                this.classList.remove("copied")
            }, 2e3);
        const r = document.createElement("textarea");
        r.value = o.textContent + " " + a.textContent,
            o.appendChild(r),
            r.select(),
            r.setSelectionRange(0, 99999),
            document.execCommand("copy"),
            o.removeChild(r),
            t.preventDefault()
    })
});
var qn;
(qn = document.querySelectorAll("video")) == null || qn.forEach(n => {
    var t = n.parentNode;
    t.querySelector(".video-play") && t.querySelector(".video-play").addEventListener("click", function(i) {
        n.paused ? (n.play(),
            n.classList.remove("pause")) : (n.pause(),
            n.classList.add("pause"))
    })
});
var Ie = document.querySelector(".overlay-infoTools"),
    Ot = parseInt(localStorage.getItem("mav_info_tools") || 0),
    An;
Ie && ((An = window == null ? void 0 : window.kly) == null ? void 0 : An.pageType) == "HomePage" && Ot < (window.mavMaxInfoTool || 3) && (Ie.classList.remove("hidden"),
    localStorage.setItem("mav_info_tools", Ot + 1),
    Ie.addEventListener("click", function() {
        this.classList.add("hidden")
    }));
var Oe = document.querySelector(".btn--returnpage"),
    Tn;
Oe && ((document == null ? void 0 : document.referrer.indexOf((Tn = document.location) == null ? void 0 : Tn.host)) > 0 ? Oe.classList.remove("disabled") : Oe.classList.add("disabled"));
var xn;
(xn = document.querySelectorAll(".nav-item a:not([data-submenu])")) == null || xn.forEach(n => {
    n.addEventListener("click", function() {
        var t = document.querySelector('[data-toggle-open="menu"]');
        t != null && t.classList.contains("open") && document.querySelector('[data-toggle-close="menu"]').click()
    })
});
var Rt = document.querySelectorAll(".dt-postcredit-rep-all-list li");
if (Rt) {
    var Re = [],
        Pe = document.querySelector(".dt-postcredit-rep-more-abjad");
    Pe && (Pe.closest(".dt--postcredit-rep").classList.remove("hidden"),
        Rt.forEach(n => {
            Re.push(n.innerHTML)
        }),
        Re.forEach(n => {
            var t = document.createElement("li"),
                i = document.createElement("span");
            if (Pe.appendChild(t),
                t.appendChild(i),
                t.setAttribute("class", " flex space-x-2 items-center"),
                i.setAttribute("class", "abjad vh-text-xl flex items-center justify-center rounded-full border w-10 h-10"),
                i.innerHTML = n[0],
                Re.length == 1) {
                var o = document.createElement("span");
                t.appendChild(o),
                    o.setAttribute("class", "abjad-name font-semibold"),
                    o.innerHTML = n,
                    document.querySelector(".dt-postcredit-rep-more-btn").classList.add("hidden")
            }
        }))
}
if (document.querySelector(".box--collapse-form-input")) {
    let n = function() {
        var t = document.querySelector(".box--collapse-form-input"),
            i = t.value.toUpperCase(),
            o = document.querySelector(".box--category-list"),
            a = o.querySelectorAll("li"),
            r, s;
        for (k = 0; k < a.length; k++)
            r = a[k].getElementsByTagName("a")[0],
            s = r.textContent || r.innerText,
            s.toUpperCase().indexOf(i) > -1 ? a[k].style.display = "" : a[k].style.display = "none"
    };
    var searchSurat = n;
    document.querySelector(".box--collapse-form-input").addEventListener("keyup", n)
}
document.querySelector(".choose-select--surat") && document.querySelector(".choose-select--surat").addEventListener("change", function() {
    window.location.href = this.value
});
document.querySelector(".choose-select--ayat") && document.querySelector(".choose-select--ayat").addEventListener("change", function() {
    window.location.href = this.value
});
document.querySelector(".choose-select--nation") && document.querySelector(".choose-select--nation").addEventListener("change", function() {
    window.location.href = this.value
});
var Me = document.querySelector(".box-list--related");
if (Me) {
    var gi = Me.children.length;
    gi > 8 && Me.parentNode.classList.add("active")
}
var ue = document.querySelectorAll(".image-copyright");
ue && (ue == null || ue.forEach(n => {
    n.getAttribute("data-copyright").trim() == "" && n.remove(),
        n.addEventListener("click", t => {
            t.target.classList.toggle("expand"),
                t.target.classList.contains("expand") && setTimeout(() => {
                    t.target.classList.remove("expand")
                }, "5000")
        })
}));
window.MavInitSections = () => {
    var c, u, m, h, y, p;
    var n = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
        t = document.querySelectorAll("section[data-section]:not([data-theme=ads])"),
        i = document.querySelector("section[data-section]:not([data-theme=ads]) .dt-infoSwipe"),
        o = parseInt(((u = (c = window == null ? void 0 : window.kly) == null ? void 0 : c.gtm) == null ? void 0 : u.totalFeedItem) || 0);
    i && (o = i.closest("section").dataset.list);
    var a = document.querySelectorAll('[data-section="content-break"]:not([data-sid])');
    if (a)
        for (var r = 0; r < a.length; r++) {
            var s = (Math.random() + 1).toString(36).substring(7);
            a[r].dataset.sid = s,
                (m = window.kly) != null && m.debug && console.log("setContentBreak sID:" + s)
        }
    if (t.length)
        for (var r = 0; r < t.length; r++) {
            if (r == t.length - 3 && window.io && window.io.unobserve && window.io.unobserve(t[r]),
                t[r].querySelectorAll("ins").length) {
                if (t[r].hasAttribute("data-ads-section-index") || (t[r].querySelectorAll("ins")[0].dataset.position = r + 1), !t[r].querySelectorAll("ins")[0].hasAttribute("data-position") && !t[r].hasAttribute("data-ads-section-index") && (t[r].dataset.theme == "mediaEmbed1" || t[r].dataset.theme == "media1")) {
                    let g = t[r].querySelector('iframe[src^="https://www.youtube.com/embed/"]');
                    if (g) {
                        g.classList.add("video-absolute");
                        let v = new URL(g.getAttribute("src"));
                        v.searchParams.set("enablejsapi", 1),
                            v.searchParams.set("controls", 0),
                            v.searchParams.set("mute", 1),
                            g.setAttribute("src", v),
                            g.setAttribute("allow", "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share")
                    }
                }
                if (!((h = t[r].dataset) != null && h.insType) && ((p = (y = window == null ? void 0 : window.kly) == null ? void 0 : y.gtm) == null ? void 0 : p.articleId)) {
                    var l = null;
                    t[r].dataset.template.toLowerCase().substring(0, 5) == "news-" ? l = "insLegacy" : t[r].dataset.template.toLowerCase().substring(0, 17) == "info-media-video-" ? t[r].dataset.anchor == "true" && (l = "feedVideo") : t[r].dataset.template.toLowerCase().substring(0, 5) == "info-" && t[r].dataset.anchor == "true" && (l = "insInformation"),
                        r + 1 > o && l && (t[r].dataset.insType = l)
                }
            }
            window.io && window.io.observe && window.io.observe(t[r])
        }
    if (window != null && window.mavAjaxPaging) {
        var d = "feed-paging";
        (window == null ? void 0 : window.mavEarlyPaging) && document.getElementById("mvk-feed-early-ajax") && (d = "mvk-feed-early-ajax"),
            document.getElementById(d) && document.getElementById(d).previousElementSibling && document.getElementById(d).previousElementSibling.previousElementSibling && document.getElementById(d).previousElementSibling.previousElementSibling.previousElementSibling && document.getElementById(d).previousElementSibling.previousElementSibling.previousElementSibling.classList.add("paginate")
    }
    window != null && window.kly && (window.kly.platform = n ? "mobile" : "desktop")
};
window.MavRemoveAnimateInIOS = () => {
    navigator.userAgent.match("CriOS") && document.body.addEventListener("touchstart", t => {
        e.preventDefault()
    })
};
window.MavRemoveInfoSwipe = () => {
    var n, t, i;
    ((t = (n = window == null ? void 0 : window.kly) == null ? void 0 : n.gtm) == null ? void 0 : t.articleId) && ((i = window.kly) == null ? void 0 : i.pageType) != "InformationPage" && document.querySelector(".overlay-infoSwipe") && (document.querySelector(".overlay-infoSwipe").style.display = "none")
};
window.MavVideoSections = () => {
    document.querySelector(".main-body") && document.querySelector(".main-body").addEventListener("scroll", n => {
        var t = document.querySelector("section.is-visible");
        if (t && t.querySelector(".muted")) {
            var i = t.querySelector(".unmuted");
            i && i.click()
        }
    })
};
window.MavOnScreenView = n => {
    var i;
    var t = n;
    t && t.querySelector(".instagram-media") && (i = window == null ? void 0 : window.instgrm) != null && i.Embeds && window.instgrm.Embeds.process()
};
window.MavButtonWAChannel = () => {
    var n = document.querySelector(".btn--followChannel");
    if (n) {
        var t = n.getAttribute("href");
        t && t != "#" && n.classList.remove("hidden")
    }
};
MavInitSections();
MavVideoSections();
MavRemoveInfoSwipe();
MavButtonWAChannel();

function Nn(n, t) {
    return function() {
        return n.apply(t, arguments)
    }
}
const { toString: Bn } = Object.prototype, { getPrototypeOf: Qe } = Object, Ze = (n => t => {
    const i = Bn.call(t);
    return n[i] || (n[i] = i.slice(8, -1).toLowerCase())
})(Object.create(null)), B = n => (n = n.toLowerCase(),
    t => Ze(t) === n), ke = n => t => typeof t === n, { isArray: ee } = Array, le = ke("undefined");

function vi(n) {
    return n !== null && !le(n) && n.constructor !== null && !le(n.constructor) && V(n.constructor.isBuffer) && n.constructor.isBuffer(n)
}
const Fn = B("ArrayBuffer");

function bi(n) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(n) : t = n && n.buffer && Fn(n.buffer),
        t
}
const Si = ke("string"),
    V = ke("function"),
    Hn = ke("number"),
    et = n => n !== null && typeof n == "object",
    ki = n => n === !0 || n === !1,
    pe = n => {
        if (Ze(n) !== "object")
            return !1;
        const t = Qe(n);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n)
    },
    Ei = B("Date"),
    Li = B("File"),
    _i = B("Blob"),
    qi = B("FileList"),
    Ai = n => et(n) && V(n.pipe),
    Ti = n => {
        const t = "[object FormData]";
        return n && (typeof FormData == "function" && n instanceof FormData || Bn.call(n) === t || V(n.toString) && n.toString() === t)
    },
    xi = B("URLSearchParams"),
    Ci = n => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function ce(n, t, { allOwnKeys: i = !1 } = {}) {
    if (n === null || typeof n > "u")
        return;
    let o, a;
    if (typeof n != "object" && (n = [n]),
        ee(n))
        for (o = 0,
            a = n.length; o < a; o++)
            t.call(null, n[o], o, n);
    else {
        const r = i ? Object.getOwnPropertyNames(n) : Object.keys(n),
            s = r.length;
        let l;
        for (o = 0; o < s; o++)
            l = r[o],
            t.call(null, n[l], l, n)
    }
}

function Un(n, t) {
    t = t.toLowerCase();
    const i = Object.keys(n);
    let o = i.length,
        a;
    for (; o-- > 0;)
        if (a = i[o],
            t === a.toLowerCase())
            return a;
    return null
}
const jn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(),
    Vn = n => !le(n) && n !== jn;

function $e() {
    const { caseless: n } = Vn(this) && this || {}, t = {}, i = (o, a) => {
        const r = n && Un(t, a) || a;
        pe(t[r]) && pe(o) ? t[r] = $e(t[r], o) : pe(o) ? t[r] = $e({}, o) : ee(o) ? t[r] = o.slice() : t[r] = o
    };
    for (let o = 0, a = arguments.length; o < a; o++)
        arguments[o] && ce(arguments[o], i);
    return t
}
const Ii = (n, t, i, { allOwnKeys: o } = {}) => (ce(t, (a, r) => {
            i && V(a) ? n[r] = Nn(a, i) : n[r] = a
        }, {
            allOwnKeys: o
        }),
        n),
    Oi = n => (n.charCodeAt(0) === 65279 && (n = n.slice(1)),
        n),
    Ri = (n, t, i, o) => {
        n.prototype = Object.create(t.prototype, o),
            n.prototype.constructor = n,
            Object.defineProperty(n, "super", {
                value: t.prototype
            }),
            i && Object.assign(n.prototype, i)
    },
    Pi = (n, t, i, o) => {
        let a, r, s;
        const l = {};
        if (t = t || {},
            n == null)
            return t;
        do {
            for (a = Object.getOwnPropertyNames(n),
                r = a.length; r-- > 0;)
                s = a[r],
                (!o || o(s, n, t)) && !l[s] && (t[s] = n[s],
                    l[s] = !0);
            n = i !== !1 && Qe(n)
        } while (n && (!i || i(n, t)) && n !== Object.prototype);
        return t
    },
    Mi = (n, t, i) => {
        n = String(n),
            (i === void 0 || i > n.length) && (i = n.length),
            i -= t.length;
        const o = n.indexOf(t, i);
        return o !== -1 && o === i
    },
    Di = n => {
        if (!n)
            return null;
        if (ee(n))
            return n;
        let t = n.length;
        if (!Hn(t))
            return null;
        const i = new Array(t);
        for (; t-- > 0;)
            i[t] = n[t];
        return i
    },
    Ni = (n => t => n && t instanceof n)(typeof Uint8Array < "u" && Qe(Uint8Array)),
    Bi = (n, t) => {
        const o = (n && n[Symbol.iterator]).call(n);
        let a;
        for (;
            (a = o.next()) && !a.done;) {
            const r = a.value;
            t.call(n, r[0], r[1])
        }
    },
    Fi = (n, t) => {
        let i;
        const o = [];
        for (;
            (i = n.exec(t)) !== null;)
            o.push(i);
        return o
    },
    Hi = B("HTMLFormElement"),
    Ui = n => n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(i, o, a) {
        return o.toUpperCase() + a
    }),
    Pt = (({ hasOwnProperty: n }) => (t, i) => n.call(t, i))(Object.prototype),
    ji = B("RegExp"),
    Wn = (n, t) => {
        const i = Object.getOwnPropertyDescriptors(n),
            o = {};
        ce(i, (a, r) => {
                t(a, r, n) !== !1 && (o[r] = a)
            }),
            Object.defineProperties(n, o)
    },
    Vi = n => {
        Wn(n, (t, i) => {
            if (V(n) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
                return !1;
            const o = n[i];
            if (!!V(o)) {
                if (t.enumerable = !1,
                    "writable" in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + i + "'")
                })
            }
        })
    },
    Wi = (n, t) => {
        const i = {},
            o = a => {
                a.forEach(r => {
                    i[r] = !0
                })
            };
        return ee(n) ? o(n) : o(String(n).split(t)),
            i
    },
    zi = () => {},
    Ji = (n, t) => (n = +n,
        Number.isFinite(n) ? n : t),
    De = "abcdefghijklmnopqrstuvwxyz",
    Mt = "0123456789",
    zn = {
        DIGIT: Mt,
        ALPHA: De,
        ALPHA_DIGIT: De + De.toUpperCase() + Mt
    },
    $i = (n = 16, t = zn.ALPHA_DIGIT) => {
        let i = "";
        const { length: o } = t;
        for (; n--;)
            i += t[Math.random() * o | 0];
        return i
    };

function Ki(n) {
    return !!(n && V(n.append) && n[Symbol.toStringTag] === "FormData" && n[Symbol.iterator])
}
const Gi = n => {
        const t = new Array(10),
            i = (o, a) => {
                if (et(o)) {
                    if (t.indexOf(o) >= 0)
                        return;
                    if (!("toJSON" in o)) {
                        t[a] = o;
                        const r = ee(o) ? [] : {};
                        return ce(o, (s, l) => {
                                const d = i(s, a + 1);
                                !le(d) && (r[l] = d)
                            }),
                            t[a] = void 0,
                            r
                    }
                }
                return o
            };
        return i(n, 0)
    },
    f = {
        isArray: ee,
        isArrayBuffer: Fn,
        isBuffer: vi,
        isFormData: Ti,
        isArrayBufferView: bi,
        isString: Si,
        isNumber: Hn,
        isBoolean: ki,
        isObject: et,
        isPlainObject: pe,
        isUndefined: le,
        isDate: Ei,
        isFile: Li,
        isBlob: _i,
        isRegExp: ji,
        isFunction: V,
        isStream: Ai,
        isURLSearchParams: xi,
        isTypedArray: Ni,
        isFileList: qi,
        forEach: ce,
        merge: $e,
        extend: Ii,
        trim: Ci,
        stripBOM: Oi,
        inherits: Ri,
        toFlatObject: Pi,
        kindOf: Ze,
        kindOfTest: B,
        endsWith: Mi,
        toArray: Di,
        forEachEntry: Bi,
        matchAll: Fi,
        isHTMLForm: Hi,
        hasOwnProperty: Pt,
        hasOwnProp: Pt,
        reduceDescriptors: Wn,
        freezeMethods: Vi,
        toObjectSet: Wi,
        toCamelCase: Ui,
        noop: zi,
        toFiniteNumber: Ji,
        findKey: Un,
        global: jn,
        isContextDefined: Vn,
        ALPHABET: zn,
        generateString: $i,
        isSpecCompliantForm: Ki,
        toJSONObject: Gi
    };

function S(n, t, i, o, a) {
    Error.call(this),
        Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
        this.message = n,
        this.name = "AxiosError",
        t && (this.code = t),
        i && (this.config = i),
        o && (this.request = o),
        a && (this.response = a)
}
f.inherits(S, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: f.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const Jn = S.prototype,
    $n = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(n => {
    $n[n] = {
        value: n
    }
});
Object.defineProperties(S, $n);
Object.defineProperty(Jn, "isAxiosError", {
    value: !0
});
S.from = (n, t, i, o, a, r) => {
    const s = Object.create(Jn);
    return f.toFlatObject(n, s, function(d) {
            return d !== Error.prototype
        }, l => l !== "isAxiosError"),
        S.call(s, n.message, t, i, o, a),
        s.cause = n,
        s.name = n.name,
        r && Object.assign(s, r),
        s
};
const Xi = null;

function Ke(n) {
    return f.isPlainObject(n) || f.isArray(n)
}

function Kn(n) {
    return f.endsWith(n, "[]") ? n.slice(0, -2) : n
}

function Dt(n, t, i) {
    return n ? n.concat(t).map(function(a, r) {
        return a = Kn(a), !i && r ? "[" + a + "]" : a
    }).join(i ? "." : "") : t
}

function Yi(n) {
    return f.isArray(n) && !n.some(Ke)
}
const Qi = f.toFlatObject(f, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});

function Ee(n, t, i) {
    if (!f.isObject(n))
        throw new TypeError("target must be an object");
    t = t || new FormData,
        i = f.toFlatObject(i, {
            metaTokens: !0,
            dots: !1,
            indexes: !1
        }, !1, function(w, g) {
            return !f.isUndefined(g[w])
        });
    const o = i.metaTokens,
        a = i.visitor || u,
        r = i.dots,
        s = i.indexes,
        d = (i.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(t);
    if (!f.isFunction(a))
        throw new TypeError("visitor must be a function");

    function c(p) {
        if (p === null)
            return "";
        if (f.isDate(p))
            return p.toISOString();
        if (!d && f.isBlob(p))
            throw new S("Blob is not supported. Use a Buffer instead.");
        return f.isArrayBuffer(p) || f.isTypedArray(p) ? d && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p
    }

    function u(p, w, g) {
        let v = p;
        if (p && !g && typeof p == "object") {
            if (f.endsWith(w, "{}"))
                w = o ? w : w.slice(0, -2),
                p = JSON.stringify(p);
            else if (f.isArray(p) && Yi(p) || (f.isFileList(p) || f.endsWith(w, "[]")) && (v = f.toArray(p)))
                return w = Kn(w),
                    v.forEach(function(E, L) {
                        !(f.isUndefined(E) || E === null) && t.append(s === !0 ? Dt([w], L, r) : s === null ? w : w + "[]", c(E))
                    }), !1
        }
        return Ke(p) ? !0 : (t.append(Dt(g, w, r), c(p)), !1)
    }
    const m = [],
        h = Object.assign(Qi, {
            defaultVisitor: u,
            convertValue: c,
            isVisitable: Ke
        });

    function y(p, w) {
        if (!f.isUndefined(p)) {
            if (m.indexOf(p) !== -1)
                throw Error("Circular reference detected in " + w.join("."));
            m.push(p),
                f.forEach(p, function(v, b) {
                    (!(f.isUndefined(v) || v === null) && a.call(t, v, f.isString(b) ? b.trim() : b, w, h)) === !0 && y(v, w ? w.concat(b) : [b])
                }),
                m.pop()
        }
    }
    if (!f.isObject(n))
        throw new TypeError("data must be an object");
    return y(n),
        t
}

function Nt(n) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(o) {
        return t[o]
    })
}

function tt(n, t) {
    this._pairs = [],
        n && Ee(n, this, t)
}
const Gn = tt.prototype;
Gn.append = function(t, i) {
    this._pairs.push([t, i])
};
Gn.toString = function(t) {
    const i = t ? function(o) {
            return t.call(this, o, Nt)
        } :
        Nt;
    return this._pairs.map(function(a) {
        return i(a[0]) + "=" + i(a[1])
    }, "").join("&")
};

function Zi(n) {
    return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function Xn(n, t, i) {
    if (!t)
        return n;
    const o = i && i.encode || Zi,
        a = i && i.serialize;
    let r;
    if (a ? r = a(t, i) : r = f.isURLSearchParams(t) ? t.toString() : new tt(t, i).toString(o),
        r) {
        const s = n.indexOf("#");
        s !== -1 && (n = n.slice(0, s)),
            n += (n.indexOf("?") === -1 ? "?" : "&") + r
    }
    return n
}
class eo {
    constructor() {
        this.handlers = []
    }
    use(t, i, o) {
        return this.handlers.push({
                fulfilled: t,
                rejected: i,
                synchronous: o ? o.synchronous : !1,
                runWhen: o ? o.runWhen : null
            }),
            this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        f.forEach(this.handlers, function(o) {
            o !== null && t(o)
        })
    }
}
const Bt = eo,
    Yn = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    to = typeof URLSearchParams < "u" ? URLSearchParams : tt,
    no = typeof FormData < "u" ? FormData : null,
    oo = typeof Blob < "u" ? Blob : null,
    ro = (() => {
        let n;
        return typeof navigator < "u" && ((n = navigator.product) === "ReactNative" || n === "NativeScript" || n === "NS") ? !1 : typeof window < "u" && typeof document < "u"
    })(),
    ao = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
    D = {
        isBrowser: !0,
        classes: {
            URLSearchParams: to,
            FormData: no,
            Blob: oo
        },
        isStandardBrowserEnv: ro,
        isStandardBrowserWebWorkerEnv: ao,
        protocols: ["http", "https", "file", "blob", "url", "data"]
    };

function so(n, t) {
    return Ee(n, new D.classes.URLSearchParams, Object.assign({
        visitor: function(i, o, a, r) {
            return D.isNode && f.isBuffer(i) ? (this.append(o, i.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments)
        }
    }, t))
}

function lo(n) {
    return f.matchAll(/\w+|\[(\w*)]/g, n).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function co(n) {
    const t = {},
        i = Object.keys(n);
    let o;
    const a = i.length;
    let r;
    for (o = 0; o < a; o++)
        r = i[o],
        t[r] = n[r];
    return t
}

function Qn(n) {
    function t(i, o, a, r) {
        let s = i[r++];
        const l = Number.isFinite(+s),
            d = r >= i.length;
        return s = !s && f.isArray(a) ? a.length : s,
            d ? (f.hasOwnProp(a, s) ? a[s] = [a[s], o] : a[s] = o, !l) : ((!a[s] || !f.isObject(a[s])) && (a[s] = []),
                t(i, o, a[s], r) && f.isArray(a[s]) && (a[s] = co(a[s])), !l)
    }
    if (f.isFormData(n) && f.isFunction(n.entries)) {
        const i = {};
        return f.forEachEntry(n, (o, a) => {
                t(lo(o), a, i, 0)
            }),
            i
    }
    return null
}
const uo = {
    "Content-Type": void 0
};

function fo(n, t, i) {
    if (f.isString(n))
        try {
            return (t || JSON.parse)(n),
                f.trim(n)
        } catch (o) {
            if (o.name !== "SyntaxError")
                throw o
        }
    return (i || JSON.stringify)(n)
}
const Le = {
    transitional: Yn,
    adapter: ["xhr", "http"],
    transformRequest: [function(t, i) {
        const o = i.getContentType() || "",
            a = o.indexOf("application/json") > -1,
            r = f.isObject(t);
        if (r && f.isHTMLForm(t) && (t = new FormData(t)),
            f.isFormData(t))
            return a && a ? JSON.stringify(Qn(t)) : t;
        if (f.isArrayBuffer(t) || f.isBuffer(t) || f.isStream(t) || f.isFile(t) || f.isBlob(t))
            return t;
        if (f.isArrayBufferView(t))
            return t.buffer;
        if (f.isURLSearchParams(t))
            return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
                t.toString();
        let l;
        if (r) {
            if (o.indexOf("application/x-www-form-urlencoded") > -1)
                return so(t, this.formSerializer).toString();
            if ((l = f.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
                const d = this.env && this.env.FormData;
                return Ee(l ? {
                    "files[]": t
                } : t, d && new d, this.formSerializer)
            }
        }
        return r || a ? (i.setContentType("application/json", !1),
            fo(t)) : t
    }],
    transformResponse: [function(t) {
        const i = this.transitional || Le.transitional,
            o = i && i.forcedJSONParsing,
            a = this.responseType === "json";
        if (t && f.isString(t) && (o && !this.responseType || a)) {
            const s = !(i && i.silentJSONParsing) && a;
            try {
                return JSON.parse(t)
            } catch (l) {
                if (s)
                    throw l.name === "SyntaxError" ? S.from(l, S.ERR_BAD_RESPONSE, this, null, this.response) : l
            }
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: D.classes.FormData,
        Blob: D.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*"
        }
    }
};
f.forEach(["delete", "get", "head"], function(t) {
    Le.headers[t] = {}
});
f.forEach(["post", "put", "patch"], function(t) {
    Le.headers[t] = f.merge(uo)
});
const nt = Le,
    po = f.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    mo = n => {
        const t = {};
        let i, o, a;
        return n && n.split(`
`).forEach(function(s) {
                a = s.indexOf(":"),
                    i = s.substring(0, a).trim().toLowerCase(),
                    o = s.substring(a + 1).trim(), !(!i || t[i] && po[i]) && (i === "set-cookie" ? t[i] ? t[i].push(o) : t[i] = [o] : t[i] = t[i] ? t[i] + ", " + o : o)
            }),
            t
    },
    Ft = Symbol("internals");

function te(n) {
    return n && String(n).trim().toLowerCase()
}

function me(n) {
    return n === !1 || n == null ? n : f.isArray(n) ? n.map(me) : String(n)
}

function yo(n) {
    const t = Object.create(null),
        i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let o;
    for (; o = i.exec(n);)
        t[o[1]] = o[2];
    return t
}

function wo(n) {
    return /^[-_a-zA-Z]+$/.test(n.trim())
}

function Ne(n, t, i, o, a) {
    if (f.isFunction(o))
        return o.call(this, t, i);
    if (a && (t = i), !!f.isString(t)) {
        if (f.isString(o))
            return t.indexOf(o) !== -1;
        if (f.isRegExp(o))
            return o.test(t)
    }
}

function ho(n) {
    return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, i, o) => i.toUpperCase() + o)
}

function go(n, t) {
    const i = f.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(o => {
        Object.defineProperty(n, o + i, {
            value: function(a, r, s) {
                return this[o].call(this, t, a, r, s)
            },
            configurable: !0
        })
    })
}
class _e {
    constructor(t) {
        t && this.set(t)
    }
    set(t, i, o) {
        const a = this;

        function r(l, d, c) {
            const u = te(d);
            if (!u)
                throw new Error("header name must be a non-empty string");
            const m = f.findKey(a, u);
            (!m || a[m] === void 0 || c === !0 || c === void 0 && a[m] !== !1) && (a[m || d] = me(l))
        }
        const s = (l, d) => f.forEach(l, (c, u) => r(c, u, d));
        return f.isPlainObject(t) || t instanceof this.constructor ? s(t, i) : f.isString(t) && (t = t.trim()) && !wo(t) ? s(mo(t), i) : t != null && r(i, t, o),
            this
    }
    get(t, i) {
        if (t = te(t),
            t) {
            const o = f.findKey(this, t);
            if (o) {
                const a = this[o];
                if (!i)
                    return a;
                if (i === !0)
                    return yo(a);
                if (f.isFunction(i))
                    return i.call(this, a, o);
                if (f.isRegExp(i))
                    return i.exec(a);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, i) {
        if (t = te(t),
            t) {
            const o = f.findKey(this, t);
            return !!(o && this[o] !== void 0 && (!i || Ne(this, this[o], o, i)))
        }
        return !1
    }
    delete(t, i) {
        const o = this;
        let a = !1;

        function r(s) {
            if (s = te(s),
                s) {
                const l = f.findKey(o, s);
                l && (!i || Ne(o, o[l], l, i)) && (delete o[l],
                    a = !0)
            }
        }
        return f.isArray(t) ? t.forEach(r) : r(t),
            a
    }
    clear(t) {
        const i = Object.keys(this);
        let o = i.length,
            a = !1;
        for (; o--;) {
            const r = i[o];
            (!t || Ne(this, this[r], r, t, !0)) && (delete this[r],
                a = !0)
        }
        return a
    }
    normalize(t) {
        const i = this,
            o = {};
        return f.forEach(this, (a, r) => {
                const s = f.findKey(o, r);
                if (s) {
                    i[s] = me(a),
                        delete i[r];
                    return
                }
                const l = t ? ho(r) : String(r).trim();
                l !== r && delete i[r],
                    i[l] = me(a),
                    o[l] = !0
            }),
            this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
            const i = Object.create(null);
            return f.forEach(this, (o, a) => {
                    o != null && o !== !1 && (i[a] = t && f.isArray(o) ? o.join(", ") : o)
                }),
                i
        }
        [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]()
        }
    toString() {
        return Object.entries(this.toJSON()).map(([t, i]) => t + ": " + i).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...i) {
        const o = new this(t);
        return i.forEach(a => o.set(a)),
            o
    }
    static accessor(t) {
        const o = (this[Ft] = this[Ft] = {
                accessors: {}
            }).accessors,
            a = this.prototype;

        function r(s) {
            const l = te(s);
            o[l] || (go(a, s),
                o[l] = !0)
        }
        return f.isArray(t) ? t.forEach(r) : r(t),
            this
    }
}
_e.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
f.freezeMethods(_e.prototype);
f.freezeMethods(_e);
const N = _e;

function Be(n, t) {
    const i = this || nt,
        o = t || i,
        a = N.from(o.headers);
    let r = o.data;
    return f.forEach(n, function(l) {
            r = l.call(i, r, a.normalize(), t ? t.status : void 0)
        }),
        a.normalize(),
        r
}

function Zn(n) {
    return !!(n && n.__CANCEL__)
}

function de(n, t, i) {
    S.call(this, n == null ? "canceled" : n, S.ERR_CANCELED, t, i),
        this.name = "CanceledError"
}
f.inherits(de, S, {
    __CANCEL__: !0
});

function vo(n, t, i) {
    const o = i.config.validateStatus;
    !i.status || !o || o(i.status) ? n(i) : t(new S("Request failed with status code " + i.status, [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4], i.config, i.request, i))
}
const bo = D.isStandardBrowserEnv ? function() {
    return {
        write: function(i, o, a, r, s, l) {
            const d = [];
            d.push(i + "=" + encodeURIComponent(o)),
                f.isNumber(a) && d.push("expires=" + new Date(a).toGMTString()),
                f.isString(r) && d.push("path=" + r),
                f.isString(s) && d.push("domain=" + s),
                l === !0 && d.push("secure"),
                document.cookie = d.join("; ")
        },
        read: function(i) {
            const o = document.cookie.match(new RegExp("(^|;\\s*)(" + i + ")=([^;]*)"));
            return o ? decodeURIComponent(o[3]) : null
        },
        remove: function(i) {
            this.write(i, "", Date.now() - 864e5)
        }
    }
}() : function() {
    return {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}();

function So(n) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)
}

function ko(n, t) {
    return t ? n.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : n
}

function ei(n, t) {
    return n && !So(t) ? ko(n, t) : t
}
const Eo = D.isStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent),
        i = document.createElement("a");
    let o;

    function a(r) {
        let s = r;
        return t && (i.setAttribute("href", s),
                s = i.href),
            i.setAttribute("href", s), {
                href: i.href,
                protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                host: i.host,
                search: i.search ? i.search.replace(/^\?/, "") : "",
                hash: i.hash ? i.hash.replace(/^#/, "") : "",
                hostname: i.hostname,
                port: i.port,
                pathname: i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname
            }
    }
    return o = a(window.location.href),
        function(s) {
            const l = f.isString(s) ? a(s) : s;
            return l.protocol === o.protocol && l.host === o.host
        }
}() : function() {
    return function() {
        return !0
    }
}();

function Lo(n) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
    return t && t[1] || ""
}

function _o(n, t) {
    n = n || 10;
    const i = new Array(n),
        o = new Array(n);
    let a = 0,
        r = 0,
        s;
    return t = t !== void 0 ? t : 1e3,
        function(d) {
            const c = Date.now(),
                u = o[r];
            s || (s = c),
                i[a] = d,
                o[a] = c;
            let m = r,
                h = 0;
            for (; m !== a;)
                h += i[m++],
                m = m % n;
            if (a = (a + 1) % n,
                a === r && (r = (r + 1) % n),
                c - s < t)
                return;
            const y = u && c - u;
            return y ? Math.round(h * 1e3 / y) : void 0
        }
}

function Ht(n, t) {
    let i = 0;
    const o = _o(50, 250);
    return a => {
        const r = a.loaded,
            s = a.lengthComputable ? a.total : void 0,
            l = r - i,
            d = o(l),
            c = r <= s;
        i = r;
        const u = {
            loaded: r,
            total: s,
            progress: s ? r / s : void 0,
            bytes: l,
            rate: d || void 0,
            estimated: d && s && c ? (s - r) / d : void 0,
            event: a
        };
        u[t ? "download" : "upload"] = !0,
            n(u)
    }
}
const qo = typeof XMLHttpRequest < "u",
    Ao = qo && function(n) {
        return new Promise(function(i, o) {
            let a = n.data;
            const r = N.from(n.headers).normalize(),
                s = n.responseType;
            let l;

            function d() {
                n.cancelToken && n.cancelToken.unsubscribe(l),
                    n.signal && n.signal.removeEventListener("abort", l)
            }
            f.isFormData(a) && (D.isStandardBrowserEnv || D.isStandardBrowserWebWorkerEnv) && r.setContentType(!1);
            let c = new XMLHttpRequest;
            if (n.auth) {
                const y = n.auth.username || "",
                    p = n.auth.password ? unescape(encodeURIComponent(n.auth.password)) : "";
                r.set("Authorization", "Basic " + btoa(y + ":" + p))
            }
            const u = ei(n.baseURL, n.url);
            c.open(n.method.toUpperCase(), Xn(u, n.params, n.paramsSerializer), !0),
                c.timeout = n.timeout;

            function m() {
                if (!c)
                    return;
                const y = N.from("getAllResponseHeaders" in c && c.getAllResponseHeaders()),
                    w = {
                        data: !s || s === "text" || s === "json" ? c.responseText : c.response,
                        status: c.status,
                        statusText: c.statusText,
                        headers: y,
                        config: n,
                        request: c
                    };
                vo(function(v) {
                        i(v),
                            d()
                    }, function(v) {
                        o(v),
                            d()
                    }, w),
                    c = null
            }
            if ("onloadend" in c ? c.onloadend = m : c.onreadystatechange = function() {
                    !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(m)
                },
                c.onabort = function() {
                    !c || (o(new S("Request aborted", S.ECONNABORTED, n, c)),
                        c = null)
                },
                c.onerror = function() {
                    o(new S("Network Error", S.ERR_NETWORK, n, c)),
                        c = null
                },
                c.ontimeout = function() {
                    let p = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
                    const w = n.transitional || Yn;
                    n.timeoutErrorMessage && (p = n.timeoutErrorMessage),
                        o(new S(p, w.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED, n, c)),
                        c = null
                },
                D.isStandardBrowserEnv) {
                const y = (n.withCredentials || Eo(u)) && n.xsrfCookieName && bo.read(n.xsrfCookieName);
                y && r.set(n.xsrfHeaderName, y)
            }
            a === void 0 && r.setContentType(null),
                "setRequestHeader" in c && f.forEach(r.toJSON(), function(p, w) {
                    c.setRequestHeader(w, p)
                }),
                f.isUndefined(n.withCredentials) || (c.withCredentials = !!n.withCredentials),
                s && s !== "json" && (c.responseType = n.responseType),
                typeof n.onDownloadProgress == "function" && c.addEventListener("progress", Ht(n.onDownloadProgress, !0)),
                typeof n.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Ht(n.onUploadProgress)),
                (n.cancelToken || n.signal) && (l = y => {
                        !c || (o(!y || y.type ? new de(null, n, c) : y),
                            c.abort(),
                            c = null)
                    },
                    n.cancelToken && n.cancelToken.subscribe(l),
                    n.signal && (n.signal.aborted ? l() : n.signal.addEventListener("abort", l)));
            const h = Lo(u);
            if (h && D.protocols.indexOf(h) === -1) {
                o(new S("Unsupported protocol " + h + ":", S.ERR_BAD_REQUEST, n));
                return
            }
            c.send(a || null)
        })
    },
    ye = {
        http: Xi,
        xhr: Ao
    };
f.forEach(ye, (n, t) => {
    if (n) {
        try {
            Object.defineProperty(n, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(n, "adapterName", {
            value: t
        })
    }
});
const To = {
    getAdapter: n => {
        n = f.isArray(n) ? n : [n];
        const { length: t } = n;
        let i, o;
        for (let a = 0; a < t && (i = n[a], !(o = f.isString(i) ? ye[i.toLowerCase()] : i)); a++)
        ;
        if (!o)
            throw o === !1 ? new S(`Adapter ${i} is not supported by the environment`, "ERR_NOT_SUPPORT") : new Error(f.hasOwnProp(ye, i) ? `Adapter '${i}' is not available in the build` : `Unknown adapter '${i}'`);
        if (!f.isFunction(o))
            throw new TypeError("adapter is not a function");
        return o
    },
    adapters: ye
};

function Fe(n) {
    if (n.cancelToken && n.cancelToken.throwIfRequested(),
        n.signal && n.signal.aborted)
        throw new de(null, n)
}

function Ut(n) {
    return Fe(n),
        n.headers = N.from(n.headers),
        n.data = Be.call(n, n.transformRequest), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1),
        To.getAdapter(n.adapter || nt.adapter)(n).then(function(o) {
            return Fe(n),
                o.data = Be.call(n, n.transformResponse, o),
                o.headers = N.from(o.headers),
                o
        }, function(o) {
            return Zn(o) || (Fe(n),
                    o && o.response && (o.response.data = Be.call(n, n.transformResponse, o.response),
                        o.response.headers = N.from(o.response.headers))),
                Promise.reject(o)
        })
}
const jt = n => n instanceof N ? n.toJSON() : n;

function Z(n, t) {
    t = t || {};
    const i = {};

    function o(c, u, m) {
        return f.isPlainObject(c) && f.isPlainObject(u) ? f.merge.call({
            caseless: m
        }, c, u) : f.isPlainObject(u) ? f.merge({}, u) : f.isArray(u) ? u.slice() : u
    }

    function a(c, u, m) {
        if (f.isUndefined(u)) {
            if (!f.isUndefined(c))
                return o(void 0, c, m)
        } else
            return o(c, u, m)
    }

    function r(c, u) {
        if (!f.isUndefined(u))
            return o(void 0, u)
    }

    function s(c, u) {
        if (f.isUndefined(u)) {
            if (!f.isUndefined(c))
                return o(void 0, c)
        } else
            return o(void 0, u)
    }

    function l(c, u, m) {
        if (m in t)
            return o(c, u);
        if (m in n)
            return o(void 0, c)
    }
    const d = {
        url: r,
        method: r,
        data: r,
        baseURL: s,
        transformRequest: s,
        transformResponse: s,
        paramsSerializer: s,
        timeout: s,
        timeoutMessage: s,
        withCredentials: s,
        adapter: s,
        responseType: s,
        xsrfCookieName: s,
        xsrfHeaderName: s,
        onUploadProgress: s,
        onDownloadProgress: s,
        decompress: s,
        maxContentLength: s,
        maxBodyLength: s,
        beforeRedirect: s,
        transport: s,
        httpAgent: s,
        httpsAgent: s,
        cancelToken: s,
        socketPath: s,
        responseEncoding: s,
        validateStatus: l,
        headers: (c, u) => a(jt(c), jt(u), !0)
    };
    return f.forEach(Object.keys(n).concat(Object.keys(t)), function(u) {
            const m = d[u] || a,
                h = m(n[u], t[u], u);
            f.isUndefined(h) && m !== l || (i[u] = h)
        }),
        i
}
const ti = "1.3.4",
    it = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, t) => {
    it[n] = function(o) {
        return typeof o === n || "a" + (t < 1 ? "n " : " ") + n
    }
});
const Vt = {};
it.transitional = function(t, i, o) {
    function a(r, s) {
        return "[Axios v" + ti + "] Transitional option '" + r + "'" + s + (o ? ". " + o : "")
    }
    return (r, s, l) => {
        if (t === !1)
            throw new S(a(s, " has been removed" + (i ? " in " + i : "")), S.ERR_DEPRECATED);
        return i && !Vt[s] && (Vt[s] = !0,
                console.warn(a(s, " has been deprecated since v" + i + " and will be removed in the near future"))),
            t ? t(r, s, l) : !0
    }
};

function xo(n, t, i) {
    if (typeof n != "object")
        throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
    const o = Object.keys(n);
    let a = o.length;
    for (; a-- > 0;) {
        const r = o[a],
            s = t[r];
        if (s) {
            const l = n[r],
                d = l === void 0 || s(l, r, n);
            if (d !== !0)
                throw new S("option " + r + " must be " + d, S.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (i !== !0)
            throw new S("Unknown option " + r, S.ERR_BAD_OPTION)
    }
}
const Ge = {
        assertOptions: xo,
        validators: it
    },
    H = Ge.validators;
class ge {
    constructor(t) {
        this.defaults = t,
            this.interceptors = {
                request: new Bt,
                response: new Bt
            }
    }
    request(t, i) {
        typeof t == "string" ? (i = i || {},
                i.url = t) : i = t || {},
            i = Z(this.defaults, i);
        const { transitional: o, paramsSerializer: a, headers: r } = i;
        o !== void 0 && Ge.assertOptions(o, {
                silentJSONParsing: H.transitional(H.boolean),
                forcedJSONParsing: H.transitional(H.boolean),
                clarifyTimeoutError: H.transitional(H.boolean)
            }, !1),
            a !== void 0 && Ge.assertOptions(a, {
                encode: H.function,
                serialize: H.function
            }, !0),
            i.method = (i.method || this.defaults.method || "get").toLowerCase();
        let s;
        s = r && f.merge(r.common, r[i.method]),
            s && f.forEach(["delete", "get", "head", "post", "put", "patch", "common"], p => {
                delete r[p]
            }),
            i.headers = N.concat(s, r);
        const l = [];
        let d = !0;
        this.interceptors.request.forEach(function(w) {
            typeof w.runWhen == "function" && w.runWhen(i) === !1 || (d = d && w.synchronous,
                l.unshift(w.fulfilled, w.rejected))
        });
        const c = [];
        this.interceptors.response.forEach(function(w) {
            c.push(w.fulfilled, w.rejected)
        });
        let u, m = 0,
            h;
        if (!d) {
            const p = [Ut.bind(this), void 0];
            for (p.unshift.apply(p, l),
                p.push.apply(p, c),
                h = p.length,
                u = Promise.resolve(i); m < h;)
                u = u.then(p[m++], p[m++]);
            return u
        }
        h = l.length;
        let y = i;
        for (m = 0; m < h;) {
            const p = l[m++],
                w = l[m++];
            try {
                y = p(y)
            } catch (g) {
                w.call(this, g);
                break
            }
        }
        try {
            u = Ut.call(this, y)
        } catch (p) {
            return Promise.reject(p)
        }
        for (m = 0,
            h = c.length; m < h;)
            u = u.then(c[m++], c[m++]);
        return u
    }
    getUri(t) {
        t = Z(this.defaults, t);
        const i = ei(t.baseURL, t.url);
        return Xn(i, t.params, t.paramsSerializer)
    }
}
f.forEach(["delete", "get", "head", "options"], function(t) {
    ge.prototype[t] = function(i, o) {
        return this.request(Z(o || {}, {
            method: t,
            url: i,
            data: (o || {}).data
        }))
    }
});
f.forEach(["post", "put", "patch"], function(t) {
    function i(o) {
        return function(r, s, l) {
            return this.request(Z(l || {}, {
                method: t,
                headers: o ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: r,
                data: s
            }))
        }
    }
    ge.prototype[t] = i(),
        ge.prototype[t + "Form"] = i(!0)
});
const we = ge;
class ot {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let i;
        this.promise = new Promise(function(r) {
            i = r
        });
        const o = this;
        this.promise.then(a => {
                if (!o._listeners)
                    return;
                let r = o._listeners.length;
                for (; r-- > 0;)
                    o._listeners[r](a);
                o._listeners = null
            }),
            this.promise.then = a => {
                let r;
                const s = new Promise(l => {
                    o.subscribe(l),
                        r = l
                }).then(a);
                return s.cancel = function() {
                        o.unsubscribe(r)
                    },
                    s
            },
            t(function(r, s, l) {
                o.reason || (o.reason = new de(r, s, l),
                    i(o.reason))
            })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const i = this._listeners.indexOf(t);
        i !== -1 && this._listeners.splice(i, 1)
    }
    static source() {
        let t;
        return {
            token: new ot(function(a) {
                t = a
            }),
            cancel: t
        }
    }
}
const Co = ot;

function Io(n) {
    return function(i) {
        return n.apply(null, i)
    }
}

function Oo(n) {
    return f.isObject(n) && n.isAxiosError === !0
}
const Xe = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Xe).forEach(([n, t]) => {
    Xe[t] = n
});
const Ro = Xe;

function ni(n) {
    const t = new we(n),
        i = Nn(we.prototype.request, t);
    return f.extend(i, we.prototype, t, {
            allOwnKeys: !0
        }),
        f.extend(i, t, null, {
            allOwnKeys: !0
        }),
        i.create = function(a) {
            return ni(Z(n, a))
        },
        i
}
const x = ni(nt);
x.Axios = we;
x.CanceledError = de;
x.CancelToken = Co;
x.isCancel = Zn;
x.VERSION = ti;
x.toFormData = Ee;
x.AxiosError = S;
x.Cancel = x.CanceledError;
x.all = function(t) {
    return Promise.all(t)
};
x.spread = Io;
x.isAxiosError = Oo;
x.mergeConfig = Z;
x.AxiosHeaders = N;
x.formToJSON = n => Qn(f.isHTMLForm(n) ? new FormData(n) : n);
x.HttpStatusCode = Ro;
x.default = x;
const Ye = x;
var j = 1;
window.MavNextPage = n => {
    if (n.classList.contains("paginate")) {
        j++;
        var t = window.kly.nextPagingPath.replace("{{n}}", j);
        MavGetNews(t),
            n.classList.remove("paginate")
    }
};
window.MavNextPageV2 = n => {
    var i;
    if (n.classList.contains("paginate")) {
        j == 1 && (window.kly.nextPagingURL.indexOf("{{n}}") < 0 && (window.kly.nextPagingURL += "{{n}}"),
                (i = window == null ? void 0 : window.kly) != null && i.currentPageNumber && (j = window.kly.currentPageNumber)),
            j++;
        var t = window.kly.nextPagingURL;
        t = t.replace("{{n}}", j),
            MavGetNewsV2(t),
            n.classList.remove("paginate")
    }
};
window.MavGetNews = n => {
    var i, o, a, r;
    if ((i = window.kly) == null ? void 0 : i.nextPagingPath) {
        if ((((o = window.kly) == null ? void 0 : o.nextPagingMethod) || "get").toLowerCase() == "post")
            var t = Ye.post(n, (r = (a = window.kly) == null ? void 0 : a.nextPagingParams) != null ? r : null, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            });
        else
            var t = Ye.get(n, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            });
        t.then(function(s) {
            var u, m;
            if (s.status == 200 && !s.data.empty) {
                var l = document.querySelectorAll("section[data-section]:not([data-theme=ads])").length;
                if (/^\s*(\{|\[)/.test(s.data)) {
                    var d = ((u = s.data) == null ? void 0 : u.html) || "";
                    window.kly.nextPagingPath = ((m = s == null ? void 0 : s.data) == null ? void 0 : m.next_url) || null
                } else
                    var d = s.data;
                (window == null ? void 0 : window.mavEarlyPaging) && document.getElementById("mvk-feed-early-ajax") ? (document.getElementById("mvk-feed-early-ajax").insertAdjacentHTML("beforebegin", d),
                    document.getElementById("mvk-feed-early-ajax").remove()) : document.getElementById("feed-paging").insertAdjacentHTML("beforebegin", d);
                var c = document.querySelectorAll("section[data-section]:not([data-theme=ads])")[l];
                MavInitSections(),
                    MavTrackerPageView(c),
                    MavRemoveAnimateInIOS(),
                    document.dispatchEvent(new CustomEvent("maverick:reinit", {
                        detail: {
                            page: j
                        }
                    }))
            }
        }).catch(function(s) {
            console.log(s)
        })
    }
};
window.MavGetNewsV2 = n => {
    var i, o, a;
    if ((i = window.kly) == null ? void 0 : i.nextPagingURL) {
        var t = Ye.post(n, JSON.stringify({
            paging_params: (a = (o = window.kly) == null ? void 0 : o.nextPagingParams) != null ? a : null
        }), {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        });
        t.then(function(r) {
            var c, u;
            if (r.status == 200 && !r.data.empty) {
                var s = document.querySelectorAll("section[data-section]:not([data-theme=ads])").length;
                if (/^\s*(\{|\[)/.test(r.data)) {
                    var l = ((c = r.data) == null ? void 0 : c.html) || "";
                    (u = r.data) != null && u.next_params && (window.kly.nextPagingParams = r.data.next_params)
                } else
                    var l = r.data;
                document.getElementById("feed-paging").insertAdjacentHTML("beforebegin", l);
                var d = document.querySelectorAll("section[data-section]:not([data-theme=ads])")[s];
                MavInitSections(),
                    MavTrackerPageView(d),
                    MavRemoveAnimateInIOS(),
                    document.dispatchEvent(new CustomEvent("maverick:reinit", {
                        detail: {
                            page: j
                        }
                    }))
            }
        }).catch(function(r) {
            console.log(r)
        })
    }
};
var Cn, In;
if ((window == null ? void 0 : window.mavEarlyPaging) && document.getElementById("mvk-feed-early-ajax") && ((Cn = window == null ? void 0 : window.kly) == null ? void 0 : Cn.pageType) == "ReadPage" && ((In = window == null ? void 0 : window.kly) == null ? void 0 : In.nextPagingPath)) {
    var Po = window.kly.nextPagingPath;
    MavGetNews(Po)
}
window.kly = window.kly || [];
window.io = window.io || io || null;
var Wt = null;
window.MaverickLabInVisibleSection = (n, t) => {
    typeof MavCustomInVisibleSection == "function" && MavCustomInVisibleSection(n.target, t)
};
window.MaverickLabVisibleSection = (n, t, i) => {
    var o, a, r, s, l, d, c, u;
    Wt != (((o = n.target.dataset) == null ? void 0 : o.sid) || "") && ((a = window.kly) != null && a.debug && console.log("MaverickLabVisibleSection:" + i),
        MavTrackerScreenView(n.target),
        MavOnScreenView(n.target),
        MavRemoveAnimateInIOS(),
        typeof MavMakingAdsRequest == "function" && MavMakingAdsRequest(n.target, t),
        typeof MavCustomVisibleSection == "function" && MavCustomVisibleSection(n.target, t, i),
        typeof((r = window.kly) == null ? void 0 : r.nextPagingParams) < "u",
        (s = window.kly) == null || s.nextPagingURL,
        ((l = window.kly) == null ? void 0 : l.nextPagingParams) ? MavNextPageV2(n.target) : (typeof((d = window.kly) == null ? void 0 : d.nextPagingPath) < "u",
            (c = window.kly) != null && c.nextPagingPath && MavNextPage(n.target)),
        document.dispatchEvent(new CustomEvent("maverick:visible_section", {
            detail: {
                section: n.target
            }
        })),
        MavEndOfContentEventInformation(n.target),
        Wt = ((u = n.target.dataset) == null ? void 0 : u.sid) || "")
};
let zt = !1,
    Jt = !1;
window.MavEndOfContentEventInformation = n => {
    var t, i, o, a, r, s, l, d, c, u, m, h, y;
    ((t = window == null ? void 0 : window.kly) == null ? void 0 : t.pageType) == "InformationPage" && ((o = (i = window.kly) == null ? void 0 : i.gtm) == null ? void 0 : o.totalFeedItem) && (Jt || parseInt((a = n == null ? void 0 : n.dataset) == null ? void 0 : a.list) == 3 && (document.dispatchEvent(new CustomEvent("maverick:opened_content", {
                detail: {
                    id: (s = (r = window == null ? void 0 : window.kly) == null ? void 0 : r.gtm) == null ? void 0 : s.articleId,
                    number: parseInt((l = n == null ? void 0 : n.dataset) == null ? void 0 : l.list),
                    type: "InformationPage",
                    section: n
                }
            })),
            Jt = !0),
        zt || parseInt((d = n == null ? void 0 : n.dataset) == null ? void 0 : d.list) == parseInt((u = (c = window.kly) == null ? void 0 : c.gtm) == null ? void 0 : u.totalFeedItem) && (document.dispatchEvent(new CustomEvent("maverick:end_of_content", {
                detail: {
                    id: (h = (m = window == null ? void 0 : window.kly) == null ? void 0 : m.gtm) == null ? void 0 : h.articleId,
                    number: parseInt((y = n == null ? void 0 : n.dataset) == null ? void 0 : y.list),
                    type: "InformationPage",
                    section: n
                }
            })),
            zt = !0))
};
window.dataLayer = window.dataLayer || [];
let rt = new Date,
    Y, ve;
window.addEventListener("message", ({ data: n }) => {
    if (document.querySelectorAll("section.is-visible ins").length > 0) {
        let t, i = document.querySelectorAll("section.is-visible ins")[0].dataset;
        n.event === "vidio.playback.ready" && (Y = new Date,
                t = Y - rt,
                be("video_player_ready", "vidio_player", i, t)),
            n.event === "vidio.playback.playing" && (ve = new Date,
                t = ve - Y,
                be("video_playback_playing", "vidio_player", i, t))
    }
});
var U = 1,
    Q = null;
window.MavTrackerScreenView = (n, t) => {
    var a, r, s, l, d, c, u, m, h, y, p, w, g, v, b, E, L, _, q, A, T, O;
    if (rt = new Date,
        ((a = n.dataset) == null ? void 0 : a.theme) != "ads" && n.querySelectorAll("ins").length && n.classList.contains("is-visible")) {
        var i = n.querySelectorAll("ins")[0].dataset,
            o = n == null ? void 0 : n.dataset;
        if (((r = window == null ? void 0 : window.kly) == null ? void 0 : r.pageType) == "InformationPage" || ((s = window == null ? void 0 : window.kly) == null ? void 0 : s.pageType) == "QuranPage") {
            let C = new URL(window.location.href);
            C.searchParams.delete("screen"),
                C = C + (C.href.indexOf("?") > 0 || C.hostname.indexOf("?") > 0 ? "&" : "?") + "screen=" + (i.position || 0),
                window.history.replaceState((i == null ? void 0 : i.id) || 0, i.title || "untitled", C)
        }
        (l = window.kly) != null && l.debug && console.log("MavTrackerScreenView:" + U + ", lastSent:" + Q + ", position: " + (i == null ? void 0 : i.position)),
            Q != (i == null ? void 0 : i.position) && (window.dataLayer.push({
                    event: "screen_view",
                    virtual_screenview_path: window.location.href.split(window.location.hostname)[1],
                    articleId: (i == null ? void 0 : i.id) || 0,
                    contentTitle: i.title || "untitled",
                    type: t || (i == null ? void 0 : i.sectionType) || (o == null ? void 0 : o.insType) || ((d = kly == null ? void 0 : kly.gtm) == null ? void 0 : d.type) || "feed",
                    channel: ((c = kly == null ? void 0 : kly.gtm) == null ? void 0 : c.subCategory) || "unset",
                    category: ((u = kly == null ? void 0 : kly.gtm) == null ? void 0 : u.category) || "feed",
                    subCategory: (i == null ? void 0 : i.category) || "",
                    pageType: ((m = window.kly) == null ? void 0 : m.pageType) || "",
                    authors: (i == null ? void 0 : i.authors) || "unset",
                    editors: (i == null ? void 0 : i.authors) || "unset",
                    reporters: (i == null ? void 0 : i.reporters) || "unset",
                    publicationDate: (i == null ? void 0 : i.publishedDate) || "",
                    publicationTime: (i == null ? void 0 : i.publishedTime) || "",
                    templateId: (o == null ? void 0 : o.templateId) || "",
                    templateName: o == null ? void 0 : o.template,
                    position: (i == null ? void 0 : i.position) || 0,
                    keyword: ((y = (h = window.kly) == null ? void 0 : h.gtm) == null ? void 0 : y.keyword) || "",
                    tag: (i == null ? void 0 : i.tagNames) || ((w = (p = window.kly) == null ? void 0 : p.gtm) == null ? void 0 : w.tag) || "",
                    totalFeedItem: ((v = (g = window.kly) == null ? void 0 : g.gtm) == null ? void 0 : v.totalFeedItem) || 0,
                    scroll_step: U || 0,
                    isSEO: (i == null ? void 0 : i.identify) == "timeless" ? !0 : ((E = (b = window.kly) == null ? void 0 : b.gtm) == null ? void 0 : E.isSEO) || !1,
                    content_ai: ((_ = (L = window.kly) == null ? void 0 : L.gtm) == null ? void 0 : _.content_ai) || 0,
                    related_system: ((q = window == null ? void 0 : window.kly) == null ? void 0 : q.related_system) || "unset",
                    interactionType: "scroll"
                }),
                U++,
                Q = (i == null ? void 0 : i.position) || 0)
    } else if (((A = n.dataset) == null ? void 0 : A.theme) == "ads") {
        var o = n == null ? void 0 : n.dataset;
        (T = window.kly) != null && T.debug && console.log("MavTrackerAdsView:" + U),
            window.dataLayer.push({
                event: "ads_view",
                type: "ads",
                pageType: ((O = window.kly) == null ? void 0 : O.pageType) || "",
                position: (o == null ? void 0 : o.adsPosition) || 0,
                scroll_step: U || 0
            }),
            U++
    }
};
window.MavTrackerPageView = n => {
    var o, a, r;
    if (n && n.querySelectorAll("ins").length) {
        var t = n.querySelectorAll("ins")[0].dataset,
            i = n == null ? void 0 : n.dataset;
        i != null && i.templateId && window.dataLayer.push({
            event: "virtual_page_view",
            virtual_pageview_path: window.location.hostname + "/?screen=" + (t.position || 0),
            articleId: (t == null ? void 0 : t.id) || 0,
            contentTitle: (t == null ? void 0 : t.title) || "untitled",
            type: ((o = kly == null ? void 0 : kly.gtm) == null ? void 0 : o.type) || "feed",
            subCategory: (t == null ? void 0 : t.category) || "topik",
            authors: (t == null ? void 0 : t.authors) || "unset",
            editors: (t == null ? void 0 : t.authors) || "unset",
            reporters: (t == null ? void 0 : t.reporters) || "unset",
            publicationDate: (t == null ? void 0 : t.publishedDate) || "",
            publicationTime: (t == null ? void 0 : t.publishedTime) || "",
            templateId: (i == null ? void 0 : i.templateId) || "",
            templateName: i == null ? void 0 : i.template,
            position: (t == null ? void 0 : t.position) || 0,
            is_virtual: 1,
            content_ai: ((r = (a = window.kly) == null ? void 0 : a.gtm) == null ? void 0 : r.content_ai) || 0
        })
    }
};
let ii = !1,
    He = document.querySelector(".btn--readarticle");
He && (He.offsetTop,
    He.addEventListener("click", n => {
        var i, o, a, r, s, l, d, c, u, m, h, y, p, w, g, v, b;
        var t = n.target.closest("section").dataset;
        t != null && t.templateId && (window.dataLayer.push({
                event: "click",
                feature_name: "read_more",
                feature_location: "bottom-center",
                feature_position: (t == null ? void 0 : t.list) || 0,
                articleId: ((o = (i = window.kly) == null ? void 0 : i.article) == null ? void 0 : o.id) || ((r = (a = window.kly) == null ? void 0 : a.gtm) == null ? void 0 : r.articleId) || 0,
                articleTitle: ((l = (s = window.kly) == null ? void 0 : s.article) == null ? void 0 : l.title) || ((c = (d = window.kly) == null ? void 0 : d.gtm) == null ? void 0 : c.articleTitle) || "untitled",
                type: ((u = kly == null ? void 0 : kly.gtm) == null ? void 0 : u.type) || "feed",
                authors: ((h = (m = window.kly.gtm) == null ? void 0 : m.authors) == null ? void 0 : h.names) || "unset",
                editors: ((p = (y = window.kly.gtm) == null ? void 0 : y.authors) == null ? void 0 : p.names) || "unset",
                publicationDate: ((w = window.kly.gtm) == null ? void 0 : w.publicationDate) || "",
                publicationTime: ((g = window.kly.gtm) == null ? void 0 : g.publicationTime) || "",
                template_id: (t == null ? void 0 : t.templateId) || 0,
                template_name: (t == null ? void 0 : t.template) || 0
            }),
            ii = !0,
            document.dispatchEvent(new CustomEvent("maverick:opened_content", {
                detail: {
                    id: (b = (v = window == null ? void 0 : window.kly) == null ? void 0 : v.gtm) == null ? void 0 : b.articleId,
                    number: parseInt((t == null ? void 0 : t.list) || 0),
                    type: "ReadPage",
                    section: t
                }
            })))
    }));
let $t = document.querySelector(".btn--skiparticle");
$t && $t.addEventListener("click", () => {
    var t, i, o, a, r, s, l, d, c, u, m, h, y, p, w;
    var n = document.querySelector("section.is-visible").dataset;
    n != null && n.templateId && window.dataLayer.push({
        event: "click",
        feature_name: "close_read_more",
        feature_location: "bottom-right",
        feature_position: (n == null ? void 0 : n.list) || 0,
        articleId: ((i = (t = window.kly) == null ? void 0 : t.article) == null ? void 0 : i.id) || ((a = (o = window.kly) == null ? void 0 : o.gtm) == null ? void 0 : a.articleId) || 0,
        articleTitle: ((s = (r = window.kly) == null ? void 0 : r.article) == null ? void 0 : s.title) || ((d = (l = window.kly) == null ? void 0 : l.gtm) == null ? void 0 : d.articleTitle) || "untitled",
        type: ((c = kly == null ? void 0 : kly.gtm) == null ? void 0 : c.type) || "feed",
        authors: ((m = (u = window.kly.gtm) == null ? void 0 : u.authors) == null ? void 0 : m.names) || "unset",
        editors: ((y = (h = window.kly.gtm) == null ? void 0 : h.authors) == null ? void 0 : y.names) || "unset",
        publicationDate: ((p = window.kly.gtm) == null ? void 0 : p.publicationDate) || "",
        publicationTime: ((w = window.kly.gtm) == null ? void 0 : w.publicationTime) || "",
        template_id: (n == null ? void 0 : n.templateId) || 0,
        template_name: (n == null ? void 0 : n.template) || 0
    })
});
let Kt = document.querySelector(".btn--followChannel");
Kt && Kt.addEventListener("click", () => {
    var n = document.querySelector("section.is-visible").dataset;
    n != null && n.templateId && window.dataLayer.push({
        event: "click",
        feature_name: "wa_channel",
        feature_location: "top",
        feature_position: (n == null ? void 0 : n.list) || 0
    })
});
let Gt = document.querySelector(".btn--share");
Gt && Gt.addEventListener("click", () => {
    I("share")
});
let Xt = document.querySelectorAll(".box-list--topic a");
Xt && Xt.forEach(function(n, t) {
    n.addEventListener("click", function(i) {
        var a, r;
        var o = n.dataset;
        o != null && o.untracker || window.dataLayer.push({
            event: "click",
            feature_name: "popular_topic",
            feature_location: "insertion",
            feature_position: t + 1,
            feature_link: (a = n.href) != null ? a : null,
            feature_caption: (r = n.innerText) != null ? r : null
        })
    })
});
let X = document.querySelector(".wimvk--fyp-inner-dynamic-expanded-click");
X && X.addEventListener("click", () => {
    var n;
    I("content_break", "InformationPage", null, {
        type: "content_break_PopupChannelPage",
        feature_link: X.getAttribute("href"),
        feature_caption: (n = X.querySelector(".label-caption")) == null ? void 0 : n.textContent
    })
});
let Yt = document.querySelector(".wimvk--fyp-inner-dynamic-close");
Yt && Yt.addEventListener("click", () => {
    var n;
    I("content_break", "InformationPage", null, {
        type: "content_break_PopupChannelPage_close",
        feature_link: X.getAttribute("href"),
        feature_caption: (n = X.querySelector(".label-caption")) == null ? void 0 : n.textContent
    })
});
document.addEventListener("maverick:contentBreakPopup", function(n) {
    var o, a, r, s, l, d, c, u, m, h, y, p, w, g, v, b, E, L, _, q, A;
    if ((o = window.kly) != null && o.debug && console.log("init tracker contentBreakPopup"),
        ((a = n.detail) == null ? void 0 : a.state) == "open") {
        (r = window.kly) != null && r.debug && console.log("view_content_break_PopupChannelPage");
        var t = (s = n.detail) == null ? void 0 : s.section.querySelectorAll("ins")[0].dataset,
            i = (d = (l = n.detail) == null ? void 0 : l.section) == null ? void 0 : d.dataset;
        window.dataLayer.push({
            event: "feature_view",
            virtual_screenview_path: window.location.href.split(window.location.hostname)[1],
            articleId: (t == null ? void 0 : t.id) || 0,
            contentTitle: t.title || "untitled",
            feature_name: "content_break",
            feature_location: (c = window.kly) == null ? void 0 : c.pageType,
            feature_position: (t == null ? void 0 : t.position) || 0,
            type: "view_content_break_PopupChannelPage",
            channel: ((u = kly == null ? void 0 : kly.gtm) == null ? void 0 : u.subCategory) || "unset",
            category: ((m = kly == null ? void 0 : kly.gtm) == null ? void 0 : m.category) || "feed",
            subCategory: (t == null ? void 0 : t.category) || "",
            pageType: ((h = window.kly) == null ? void 0 : h.pageType) || "",
            authors: (t == null ? void 0 : t.authors) || "unset",
            editors: (t == null ? void 0 : t.authors) || "unset",
            reporters: (t == null ? void 0 : t.reporters) || "unset",
            publicationDate: (t == null ? void 0 : t.publishedDate) || "",
            publicationTime: (t == null ? void 0 : t.publishedTime) || "",
            templateId: (i == null ? void 0 : i.templateId) || "",
            templateName: i == null ? void 0 : i.template,
            position: (t == null ? void 0 : t.position) || 0,
            keyword: ((p = (y = window.kly) == null ? void 0 : y.gtm) == null ? void 0 : p.keyword) || "",
            tag: (t == null ? void 0 : t.tagNames) || ((g = (w = window.kly) == null ? void 0 : w.gtm) == null ? void 0 : g.tag) || "",
            totalFeedItem: ((b = (v = window.kly) == null ? void 0 : v.gtm) == null ? void 0 : b.totalFeedItem) || 0,
            scroll_step: U || 0,
            isSEO: (t == null ? void 0 : t.identify) == "timeless" ? !0 : ((L = (E = window.kly) == null ? void 0 : E.gtm) == null ? void 0 : L.isSEO) || !1,
            content_ai: ((q = (_ = window.kly) == null ? void 0 : _.gtm) == null ? void 0 : q.content_ai) || 0,
            related_system: ((A = window == null ? void 0 : window.kly) == null ? void 0 : A.related_system) || "unset"
        })
    }
});
let Qt = document.querySelector(".btn--returnpage");
Qt && Qt.addEventListener("click", () => {
    I("icon_back")
});
let Zt = document.querySelector(".wimvk--fyp-next");
Zt && Zt.addEventListener("click", () => {
    var n;
    I("for_you_skip", ((n = window == null ? void 0 : window.kly) == null ? void 0 : n.pageType) || "unset", "button_skip")
});
let en = document.querySelector(".wimvk--fyp-close");
en && en.addEventListener("click", () => {
    var n;
    I("for_you_skip", ((n = window == null ? void 0 : window.kly) == null ? void 0 : n.pageType) || "unset", "icon_close")
});
let tn = document.querySelector(".wimvk--fyp-link");
tn && tn.addEventListener("click", () => {
    var n;
    I("for_you_cta", ((n = window == null ? void 0 : window.kly) == null ? void 0 : n.pageType) || "unset", "button_cta")
});
let nn = document.querySelector(".btn--home");
nn && nn.addEventListener("click", () => {
    I("icon_home")
});
let on = document.querySelector(".btn--page-prev");
on && on.addEventListener("click", () => {
    I("icon_arrow_up")
});
let rn = document.querySelector(".btn--page-next");
rn && rn.addEventListener("click", () => {
    I("icon_arrow_down")
});
let an = document.querySelector(".btn--infoScrollarticle");
an && an.addEventListener("click", () => {
    var t, i, o, a, r, s, l, d, c, u, m, h, y, p, w;
    var n = document.querySelector("section.is-visible").dataset;
    n != null && n.templateId && window.dataLayer.push({
        event: "click",
        feature_name: "icon_arrow_down",
        feature_location: "feed",
        feature_position: (n == null ? void 0 : n.list) || 0,
        articleId: ((i = (t = window.kly) == null ? void 0 : t.article) == null ? void 0 : i.id) || ((a = (o = window.kly) == null ? void 0 : o.gtm) == null ? void 0 : a.articleId) || 0,
        articleTitle: ((s = (r = window.kly) == null ? void 0 : r.article) == null ? void 0 : s.title) || ((d = (l = window.kly) == null ? void 0 : l.gtm) == null ? void 0 : d.articleTitle) || "untitled",
        type: ((c = kly == null ? void 0 : kly.gtm) == null ? void 0 : c.type) || "feed",
        authors: ((m = (u = window.kly.gtm) == null ? void 0 : u.authors) == null ? void 0 : m.names) || "unset",
        editors: ((y = (h = window.kly.gtm) == null ? void 0 : h.authors) == null ? void 0 : y.names) || "unset",
        publicationDate: ((p = window.kly.gtm) == null ? void 0 : p.publicationDate) || "",
        publicationTime: ((w = window.kly.gtm) == null ? void 0 : w.publicationTime) || "",
        template_id: (n == null ? void 0 : n.templateId) || 0,
        template_name: (n == null ? void 0 : n.template) || 0
    })
});
document.addEventListener("click", n => {
    n.target.closest('section[data-tracking="mav-click"]') && I("select_item")
});
let sn = document.querySelectorAll(".header-menu-body ul>.nav-item>a");
sn && sn.forEach(function(n, t) {
    n.addEventListener("click", function(i) {
        var o = i.target.getAttribute("href");
        o = o && o.split("/").filter(function(a) {
                return a
            }).slice(-1)[0] || null,
            window.dataLayer.push({
                event: "click",
                feature_name: "main_menu",
                feature_location: "left_sidebar",
                feature_position: t + 1 + ":" + o + ":0"
            })
    })
});
let ln = document.querySelectorAll(".main-aside .box-list--related > .box-list-item > a");
ln && ln.forEach(function(n, t) {
    n.addEventListener("click", function(i) {
        var o = i.target.getAttribute("href");
        o = o && o.split("/").filter(function(a) {
                return a
            }).slice(-1)[0] || null,
            window.dataLayer.push({
                event: "click",
                feature_name: "popular_topic",
                feature_location: "right_sidebar",
                feature_position: t + 1 + ":" + o
            })
    })
});
let cn = document.querySelectorAll(".main-aside .box-list--popular > .box-list-item > a");
cn && cn.forEach(function(n, t) {
    n.addEventListener("click", function(i) {
        var o = qe(i.target.getAttribute("href"));
        window.dataLayer.push({
            event: "click",
            feature_name: "popular_article",
            feature_location: "right_sidebar",
            feature_position: t + 1,
            feature_link: i.target.getAttribute("href"),
            feature_caption: i.target.textContent,
            articleID: parseInt(o)
        })
    })
});
let Mo = document.querySelectorAll("div.box[data-location]");
Mo && document.addEventListener("click", n => {
    var i, o, a, r, s, l, d, c, u, m, h, y, p;
    var t = document.querySelector("section.is-visible").dataset;
    n.target.closest("div.box[data-location] .box-list--trending .box-list-item a") && window.dataLayer.push({
        event: "click",
        feature_name: "baca_juga",
        feature_location: n.target.closest("div.box[data-location]").dataset.location || "unset",
        feature_position: 1,
        articleID: ((o = (i = window.kly) == null ? void 0 : i.gtm) == null ? void 0 : o.articleId) || "unset",
        articleTitle: ((r = (a = window.kly) == null ? void 0 : a.gtm) == null ? void 0 : r.articleTitle) || "unset",
        channel: ((l = (s = window.kly) == null ? void 0 : s.gtm) == null ? void 0 : l.subCategory) || "unset",
        authors: ((c = (d = window.kly.gtm) == null ? void 0 : d.authors) == null ? void 0 : c.names) || "unset",
        editors: ((m = (u = window.kly.gtm) == null ? void 0 : u.authors) == null ? void 0 : m.names) || "unset",
        reporters: ((h = window.kly.gtm) == null ? void 0 : h.reporters) || "unset",
        publicationDate: ((y = window.kly.gtm) == null ? void 0 : y.publicationDate) || "unset",
        publicationTime: ((p = window.kly.gtm) == null ? void 0 : p.publicationTime) || "unset",
        feature_link: n.target.getAttribute("href"),
        feature_caption: n.target.textContent,
        template_id: (t == null ? void 0 : t.templateId) || 0,
        template_name: (t == null ? void 0 : t.template) || 0
    })
});
let Do = document.querySelectorAll("section[data-section=content-break]");
Do && document.addEventListener("click", n => {
    var l, d, c, u, m, h, y, p, w, g, v, b, E, L, _, q, A, T, O, C, R, z, F;
    if (n.target.closest("section[data-section=content-break] .suggest-list-item")) {
        var t = (l = document.querySelector("section.is-visible")) == null ? void 0 : l.dataset,
            i = document.querySelector("section.is-visible").querySelectorAll("ins")[0].dataset,
            o = n.target.closest(".suggest-list-item"),
            a = o.querySelector("a"),
            r = null,
            s = null;
        a && a.getAttribute("aria-label") && !((c = (d = window.kly) == null ? void 0 : d.gtm) == null ? void 0 : c.articleId) && (r = qe(a.getAttribute("href")),
                s = a.getAttribute("aria-label")),
            window.dataLayer.push({
                event: "click",
                feature_name: "content_break",
                feature_location: ((m = (u = window.kly) == null ? void 0 : u.gtm) == null ? void 0 : m.articleId) ? "content-break-4" : ((h = kly == null ? void 0 : kly.gtm) == null ? void 0 : h.category) || "unset",
                feature_position: (i == null ? void 0 : i.position) || 0,
                articleID: r || ((p = (y = window.kly) == null ? void 0 : y.gtm) == null ? void 0 : p.articleId) || "unset",
                articleTitle: s || ((g = (w = window.kly) == null ? void 0 : w.gtm) == null ? void 0 : g.articleTitle) || ((v = a == null ? void 0 : a.querySelector(".article-title")) == null ? void 0 : v.textContent) || "unset",
                channel: ((E = (b = window.kly) == null ? void 0 : b.gtm) == null ? void 0 : E.subCategory) || "unset",
                authors: (i == null ? void 0 : i.authors) || ((_ = (L = window.kly.gtm) == null ? void 0 : L.authors) == null ? void 0 : _.names) || "unset",
                editors: (i == null ? void 0 : i.authors) || ((A = (q = window.kly.gtm) == null ? void 0 : q.authors) == null ? void 0 : A.names) || "unset",
                reporters: (i == null ? void 0 : i.reporters) || ((T = window.kly.gtm) == null ? void 0 : T.reporters) || "unset",
                publicationDate: (i == null ? void 0 : i.publishedDate) || ((O = window.kly.gtm) == null ? void 0 : O.publicationDate) || "unset",
                publicationTime: (i == null ? void 0 : i.publishedTime) || ((C = window.kly.gtm) == null ? void 0 : C.publicationTime) || "unset",
                feature_link: (a == null ? void 0 : a.getAttribute("href")) || "#",
                feature_caption: (a == null ? void 0 : a.getAttribute("aria-label")) || ((R = a == null ? void 0 : a.querySelector(".article-title")) == null ? void 0 : R.textContent) || "unset",
                subCategory: ((F = (z = window == null ? void 0 : window.kly) == null ? void 0 : z.gtm) == null ? void 0 : F.subCategory) || "unset",
                template_id: (t == null ? void 0 : t.templateId) || 0,
                template_name: (t == null ? void 0 : t.template) || 0
            })
    }
});
let dn = document.querySelectorAll(".switchTheme-option > .switchTheme-option-item");
dn && dn.forEach(function(n, t) {
    n.querySelector("a").addEventListener("click", function(i) {
        var o = i.target.dataset.value;
        o = o.replace("mode", ""),
            window.dataLayer.push({
                event: "click",
                feature_name: "dark_mode",
                feature_location: "left_sidebar",
                feature_position: o + "-mode"
            })
    })
});
let un = document.querySelector(".header-menu-foot .form-search");
un && un.addEventListener("submit", function(n) {
    var t = n.target.querySelector('input[name="q"]').value;
    t = t.trim(),
        window.dataLayer.push({
            event: "click",
            feature_name: "search_bar",
            feature_location: "left_sidebar",
            feature_position: t
        })
});
let Ue = document.querySelector(".section--dtparablock .section-body"),
    fn = !1;
var On, Rn;
Ue && ((Rn = (On = window.kly) == null ? void 0 : On.gtm) == null ? void 0 : Rn.articleId) && document.querySelector(".main-body").addEventListener("scroll", n => {
    var i, o, a, r, s, l, d, c, u, m, h, y, p, w, g, v, b, E, L, _, q, A;
    if (ii && Ue.getBoundingClientRect().top <= (Ue.clientHeight - screen.height) * -1) {
        var t = document.querySelector("section.is-visible").dataset;
        fn || (window.dataLayer.push({
                event: "click",
                feature_name: "completion_reading",
                feature_location: "detail-article",
                feature_position: (t == null ? void 0 : t.list) || 0,
                articleId: ((o = (i = window.kly) == null ? void 0 : i.article) == null ? void 0 : o.id) || ((r = (a = window.kly) == null ? void 0 : a.gtm) == null ? void 0 : r.articleId) || 0,
                contentTitle: ((l = (s = window.kly) == null ? void 0 : s.article) == null ? void 0 : l.title) || ((c = (d = window.kly) == null ? void 0 : d.gtm) == null ? void 0 : c.articleTitle) || "untitled",
                type: ((u = kly == null ? void 0 : kly.gtm) == null ? void 0 : u.type) || "feed",
                authors: ((h = (m = window.kly.gtm) == null ? void 0 : m.authors) == null ? void 0 : h.names) || "unset",
                editors: ((p = (y = window.kly.gtm) == null ? void 0 : y.authors) == null ? void 0 : p.names) || "unset",
                publicationDate: ((w = window.kly.gtm) == null ? void 0 : w.publicationDate) || "",
                publicationTime: ((g = window.kly.gtm) == null ? void 0 : g.publicationTime) || "",
                template_id: (t == null ? void 0 : t.templateId) || 0,
                template_name: (t == null ? void 0 : t.template) || 0,
                subCategory: (v = window.kly.gtm) == null ? void 0 : v.subCategory,
                category: (b = window.kly.gtm) == null ? void 0 : b.category,
                pageType: (E = window.kly) == null ? void 0 : E.pageType,
                content_ai: ((_ = (L = window.kly) == null ? void 0 : L.gtm) == null ? void 0 : _.content_ai) || 0
            }),
            document.dispatchEvent(new CustomEvent("maverick:end_of_content", {
                detail: {
                    id: (A = (q = window == null ? void 0 : window.kly) == null ? void 0 : q.gtm) == null ? void 0 : A.articleId,
                    number: parseInt((t == null ? void 0 : t.list) || 0),
                    type: "ReadPage",
                    section: t
                }
            })),
            fn = !0)
    }
});
var pn = !1;
document.addEventListener("maverick:visible_section", n => {
    var i, o, a, r, s, l, d, c, u, m, h, y, p, w, g, v, b, E, L, _, q, A, T, O, C, R, z, F, M;
    if ((o = (i = window.kly) == null ? void 0 : i.gtm) != null && o.articleId && ((r = (a = window.kly) == null ? void 0 : a.gtm) == null ? void 0 : r.type) == "feedInformation" && !pn && parseInt(((d = (l = (s = n == null ? void 0 : n.detail) == null ? void 0 : s.section) == null ? void 0 : l.dataset) == null ? void 0 : d.list) || 0) >= parseInt(((u = (c = window == null ? void 0 : window.kly) == null ? void 0 : c.gtm) == null ? void 0 : u.totalFeedItem) || 0)) {
        var t = n.detail.section.dataset;
        window.dataLayer.push({
                event: "click",
                feature_name: "completion_reading",
                feature_location: "detail-article",
                feature_position: (t == null ? void 0 : t.list) || 0,
                articleId: ((h = (m = window.kly) == null ? void 0 : m.article) == null ? void 0 : h.id) || ((p = (y = window.kly) == null ? void 0 : y.gtm) == null ? void 0 : p.articleId) || 0,
                contentTitle: ((g = (w = window.kly) == null ? void 0 : w.article) == null ? void 0 : g.title) || ((b = (v = window.kly) == null ? void 0 : v.gtm) == null ? void 0 : b.articleTitle) || "untitled",
                type: ((E = kly == null ? void 0 : kly.gtm) == null ? void 0 : E.type) || "feed",
                authors: ((_ = (L = window.kly.gtm) == null ? void 0 : L.authors) == null ? void 0 : _.names) || "unset",
                editors: ((A = (q = window.kly.gtm) == null ? void 0 : q.authors) == null ? void 0 : A.names) || "unset",
                publicationDate: ((T = window.kly.gtm) == null ? void 0 : T.publicationDate) || "",
                publicationTime: ((O = window.kly.gtm) == null ? void 0 : O.publicationTime) || "",
                template_id: (t == null ? void 0 : t.templateId) || 0,
                template_name: (t == null ? void 0 : t.template) || 0,
                subCategory: (C = window.kly.gtm) == null ? void 0 : C.subCategory,
                category: (R = window.kly.gtm) == null ? void 0 : R.category,
                pageType: (z = window.kly) == null ? void 0 : z.pageType,
                content_ai: ((M = (F = window.kly) == null ? void 0 : F.gtm) == null ? void 0 : M.content_ai) || 0
            }),
            pn = !0
    }
});
let mn = document.querySelectorAll('[data-template="info-reco-2row-v1.2"] .box-list-item .item');
mn && mn.forEach(function(n) {
    n.addEventListener("click", t => {
        var o, a, r, s, l, d, c, u, m, h, y, p, w, g, v;
        var i = document.querySelector("section.is-visible").dataset;
        window.dataLayer.push({
            event: "click",
            feature_name: "related_news_end_of_content",
            feature_location: "detail-article",
            feature_position: (i == null ? void 0 : i.list) || 0,
            articleId: ((a = (o = window.kly) == null ? void 0 : o.article) == null ? void 0 : a.id) || ((s = (r = window.kly) == null ? void 0 : r.gtm) == null ? void 0 : s.articleId) || 0,
            articleTitle: ((d = (l = window.kly) == null ? void 0 : l.article) == null ? void 0 : d.title) || ((u = (c = window.kly) == null ? void 0 : c.gtm) == null ? void 0 : u.articleTitle) || "untitled",
            type: ((m = kly == null ? void 0 : kly.gtm) == null ? void 0 : m.type) || "feed",
            authors: ((y = (h = window.kly.gtm) == null ? void 0 : h.authors) == null ? void 0 : y.names) || "unset",
            editors: ((w = (p = window.kly.gtm) == null ? void 0 : p.authors) == null ? void 0 : w.names) || "unset",
            publicationDate: ((g = window.kly.gtm) == null ? void 0 : g.publicationDate) || "",
            publicationTime: ((v = window.kly.gtm) == null ? void 0 : v.publicationTime) || "",
            template_id: (i == null ? void 0 : i.templateId) || 0,
            template_name: (i == null ? void 0 : i.template) || 0
        })
    })
});

function I(n, t, i, o, a) {
    var u, m, h, y, p, w;
    var r = document.querySelector("section.is-visible").dataset;
    if (r != null && r.templateId) {
        var s = document.querySelector("section.is-visible").querySelectorAll("ins")[0].dataset,
            l = {
                event: "click",
                feature_name: n,
                feature_location: t || "feed",
                feature_position: i || (r == null ? void 0 : r.list) || 0,
                articleId: (s == null ? void 0 : s.id) || 0,
                articleTitle: s.title || "untitled",
                type: (s == null ? void 0 : s.sectionType) || (r == null ? void 0 : r.insType) || ((u = kly == null ? void 0 : kly.gtm) == null ? void 0 : u.type) || "feed",
                channel: ((m = kly == null ? void 0 : kly.gtm) == null ? void 0 : m.subCategory) || "unset",
                authors: (s == null ? void 0 : s.authors) || "unset",
                editors: (s == null ? void 0 : s.authors) || "unset",
                reporters: (s == null ? void 0 : s.reporters) || "unset",
                publicationDate: (s == null ? void 0 : s.publishedDate) || "",
                publicationTime: (s == null ? void 0 : s.publishedTime) || "",
                template_id: (r == null ? void 0 : r.templateId) || 0,
                template_name: (r == null ? void 0 : r.template) || 0,
                content_ai: ((y = (h = window.kly) == null ? void 0 : h.gtm) == null ? void 0 : y.content_ai) || 0,
                subCategory: ((w = (p = window.kly) == null ? void 0 : p.gtm) == null ? void 0 : w.subCategory) || "unset"
            };
        if (o && (l = {
                ...l,
                ...o
            }),
            a) {
            var d = l;
            l = {};
            for (var c in a)
                l[a[c]] = d[a[c]]
        }
        window.dataLayer.push(l)
    }
}

function be(n, t, i, o) {
    window.dataLayer.push({
        event: "video_player_debug",
        video_event_name: n,
        video_provider: t,
        video_id: (i == null ? void 0 : i.id) || 0,
        video_title: i.title || "untitled",
        video_latency_value: o
    })
}

function ne(n, t, i, o, a) {
    var s, l, d, c;
    if ((s = i == null ? void 0 : i.dataset) != null && s.templateId) {
        var r = i.querySelectorAll("ins")[0].dataset;
        window.dataLayer.push({
            event: n,
            video_event_name: t,
            video_current_time: Math.round(((o == null ? void 0 : o.currentTime) || 0) * 100) / 100,
            video_duration: Math.round(((o == null ? void 0 : o.duration) || 0) * 100) / 100,
            video_percent: a,
            video_provider: n,
            video_id: (r == null ? void 0 : r.id) || 0,
            video_title: r.title || "untitled",
            video_author: (r == null ? void 0 : r.authors) || "unset",
            video_sub_category: ((l = kly == null ? void 0 : kly.gtm) == null ? void 0 : l.subCategory) || "unset",
            video_tag: (r == null ? void 0 : r.tagNames) || ((c = (d = window.kly) == null ? void 0 : d.gtm) == null ? void 0 : c.tag) || ""
        })
    }
}
var je = 0,
    Ve = "",
    yn = "",
    wn = "";
document.addEventListener("maverick:video_event", n => {
    var s, l, d, c, u, m, h, y;
    var t = document.querySelector('[data-sid="' + ((s = n.detail) == null ? void 0 : s.sectionId) + '"]');
    if (t) {
        var i = (l = n.detail) == null ? void 0 : l.video,
            o = (i == null ? void 0 : i.duration) % 60,
            a = i.currentTime ? Math.round(i.currentTime / o * 100) / 100 : 0;
        if (((d = n.detail) == null ? void 0 : d.type) == "start") {
            if (wn != i.querySelector("source").src) {
                wn = i.querySelector("source").src;
                var r = t.querySelectorAll("ins")[0].dataset;
                ve = new Date;
                let p = ve - Y;
                i.querySelector("source").src.includes("klytv-cdn") && be("video_playback_playing", "kly_video_player", r, p)
            }
            ne("kly_video_player", "video_start", t, i, a)
        } else if (((c = n.detail) == null ? void 0 : c.type) == "pause")
            ne("kly_video_player", "video_pause", t, i, a);
        else if (((u = n.detail) == null ? void 0 : u.type) == "resume" && a > 0)
            ne("kly_video_player", "video_continue", t, i, a);
        else if (((m = n.detail) == null ? void 0 : m.type) == "update") {
            if ([.25, .5, .75].includes(a) && je != a)
                ne("kly_video_player", "video_progress", t, i, a),
                je = a,
                Ve = "";
            else if (a > .9 && Ve != ((h = n.detail) == null ? void 0 : h.sectionId))
                ne("kly_video_player", "video_complete", t, i, a),
                je = 0,
                Ve = (y = n.detail) == null ? void 0 : y.sectionId;
            else if (a == 0 && i.querySelector("source").src != "" && yn != i.querySelector("source").src) {
                yn = i.querySelector("source").src;
                let p = t.querySelectorAll("ins")[0].dataset;
                Y = new Date;
                let w = Y - rt;
                i.querySelector("source").src.includes("klytv-cdn") && be("video_player_ready", "kly_video_player", p, w)
            }
        }
    }
});
var Q = null,
    ie = null;
document.addEventListener("maverick:postcredit.event", function(n) {
    var o, a, r, s, l, d, c, u, m, h, y, p, w, g;
    if (n.detail.state == "slideChange") {
        var t = document.querySelector("section.is-visible").dataset,
            i = document.querySelector("section.is-visible").querySelectorAll("ins")[0].dataset;
        if (Q != n.detail.element.realIndex) {
            switch (n.detail.element.realIndex) {
                case 0:
                    ie = "postCredit";
                    break;
                case 1:
                    ie = "postCreditPopularArticle";
                    break;
                case 2:
                    ie = "postCreditNewestArticle";
                    break;
                case 3:
                    ie = "postCreditRelatedTopic";
                    break
            }
            window.dataLayer.push({
                    event: "screen_view",
                    virtual_screenview_path: window.location.href.split(window.location.hostname)[1],
                    articleId: (i == null ? void 0 : i.id) || 0,
                    contentTitle: i.title || "untitled",
                    type: ie,
                    channel: ((o = kly == null ? void 0 : kly.gtm) == null ? void 0 : o.subCategory) || "unset",
                    category: ((a = kly == null ? void 0 : kly.gtm) == null ? void 0 : a.category) || "feed",
                    subCategory: (i == null ? void 0 : i.category) || "",
                    pageType: ((r = window.kly) == null ? void 0 : r.pageType) || "",
                    authors: (i == null ? void 0 : i.authors) || "unset",
                    editors: (i == null ? void 0 : i.authors) || "unset",
                    reporters: (i == null ? void 0 : i.reporters) || "unset",
                    publicationDate: (i == null ? void 0 : i.publishedDate) || "",
                    publicationTime: (i == null ? void 0 : i.publishedTime) || "",
                    templateId: (t == null ? void 0 : t.templateId) || "",
                    templateName: t == null ? void 0 : t.template,
                    position: (i == null ? void 0 : i.position) || 0,
                    keyword: ((l = (s = window.kly) == null ? void 0 : s.gtm) == null ? void 0 : l.keyword) || "",
                    tag: (i == null ? void 0 : i.tagNames) || ((c = (d = window.kly) == null ? void 0 : d.gtm) == null ? void 0 : c.tag) || "",
                    totalFeedItem: ((m = (u = window.kly) == null ? void 0 : u.gtm) == null ? void 0 : m.totalFeedItem) || 0,
                    scroll_step: U - 1 || 0,
                    isSEO: (i == null ? void 0 : i.identify) == "timeless" ? !0 : ((y = (h = window.kly) == null ? void 0 : h.gtm) == null ? void 0 : y.isSEO) || !1,
                    content_ai: ((w = (p = window.kly) == null ? void 0 : p.gtm) == null ? void 0 : w.content_ai) || 0,
                    related_system: ((g = window == null ? void 0 : window.kly) == null ? void 0 : g.related_system) || "unset",
                    interactionType: "swipe"
                }),
                Q = n.detail.element.realIndex
        }
    }
});
document.querySelector(".dt--postcredit") && document.querySelector(".dt--postcredit").addEventListener("click", n => {
    if (n.target.closest(".swiper-pagination-bullet")) {
        var t = parseInt(n.target.textContent),
            i = document.querySelectorAll(".swiper-wrapper .swiper-slide")[t - 1],
            o = i.dataset;
        o != null && o.featuredPosition && I("post_credit_pagination", "end_of_content", o == null ? void 0 : o.featuredPosition, {
            feature_caption: t
        }, ["event", "feature_name", "feature_location", "feature_position", "feature_caption"])
    }
});
let hn = document.querySelectorAll('.dt--postcredit [data-featured-position="popular_article"] .box-list--trending .box-list-item');
hn && hn.forEach(function(n, t) {
    n.querySelector("a").addEventListener("click", function(i) {
        I("popular_article", "end_of_content", t + 1, {
            feature_link: n.querySelector("a").getAttribute("href"),
            feature_caption: i.target.textContent,
            articleId: qe(n.querySelector("a").getAttribute("href"))
        }, ["event", "feature_name", "feature_location", "feature_position", "feature_link", "feature_caption", "articleId"])
    })
});
let gn = document.querySelectorAll('.dt--postcredit [data-featured-position="newest_article"] .box-list--topic .box-list-item');
gn && gn.forEach(function(n, t) {
    n.querySelector("a").setAttribute("data-untracker", "1"),
        n.querySelector("a").addEventListener("click", function(i) {
            I("newest_article", "end_of_content", t + 1, {
                feature_link: n.querySelector("a").getAttribute("href"),
                feature_caption: i.target.textContent,
                articleId: qe(n.querySelector("a").getAttribute("href"))
            }, ["event", "feature_name", "feature_location", "feature_position", "feature_link", "feature_caption", "articleId"])
        })
});
let vn = document.querySelectorAll('.dt--postcredit [data-featured-position="related_topic"] .box-list--related .box-list-item');
vn && vn.forEach(function(n, t) {
    n.querySelector("a").addEventListener("click", function(i) {
        I("related_topic", "end_of_content", t + 1 + ":" + i.target.textContent, {
            feature_link: n.querySelector("a").getAttribute("href"),
            feature_caption: i.target.textContent
        }, ["event", "feature_name", "feature_location", "feature_position", "feature_link", "feature_caption"])
    })
});

function qe(n) {
    var t = n;
    return t = t && t.split("/").filter(function(i) {
            return i
        }).slice(-1)[0] || null,
        t.match(/(.*?)\-([0-9]*)\-mvk\./)[2] || 0
}
document.querySelector(".btn--share") && (navigator.canShare || document.querySelector(".btn--share").classList.add("hidden"));
window.MavIsInViewport = n => {
    const t = n.getBoundingClientRect();
    return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
};
window.formatCash = n => {
    if (n < 1e3)
        return n;
    if (n >= 1e3 && n < 1e6)
        return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9)
        return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12)
        return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12)
        return +(n / 1e12).toFixed(1) + "T"
};
const No = "maverick_completed_information",
    Bo = "maverick_completed_legacy",
    Fo = "maverick_opened_information",
    Ho = "maverick_opened_legacy";
document.addEventListener("maverick:end_of_content", function(n) {
    var t, i;
    ((t = n == null ? void 0 : n.detail) == null ? void 0 : t.id) && ((i = n == null ? void 0 : n.detail) == null ? void 0 : i.type) && (n.detail.type == "InformationPage" ? Se(No, n.detail.id) : n.detail.type == "ReadPage" && Se(Bo, n.detail.id))
});
document.addEventListener("maverick:opened_content", function(n) {
    var t, i;
    ((t = n == null ? void 0 : n.detail) == null ? void 0 : t.id) && ((i = n == null ? void 0 : n.detail) == null ? void 0 : i.type) && (n.detail.type == "InformationPage" ? Se(Fo, n.detail.id) : n.detail.type == "ReadPage" && Se(Ho, n.detail.id))
});

function Se(n, t) {
    var i = window.mavMaxStrgItem || "*",
        o = localStorage.getItem(n);
    o = o ? o.split(",").reverse() : [],
        o.push(t),
        o = o.filter(Uo),
        i != "*" && (o = o.slice(i * -1)),
        localStorage.setItem(n, o.reverse().join(","))
}

function Uo(n, t, i) {
    return i.indexOf(n) === t
}