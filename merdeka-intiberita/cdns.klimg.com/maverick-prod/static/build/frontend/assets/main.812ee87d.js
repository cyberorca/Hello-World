document.querySelector("[data-header]");
let G = document.querySelectorAll("[data-section]");
const $ = document.querySelector("[data-indicator]")
  , X = document.querySelector("[data-scroller]");
let D = 0
  , ut = 0
  , yi = {
    root: X,
    rootMargin: "-12% 0px -88% 0px"
}
  , he = [];
const ue = document.querySelectorAll(".swiper--ads");
if (ue)
    for (var k = 0; k < ue.length; k++)
        ue[k].classList.add("swiperAds" + k),
        he[k] = new Swiper(".swiperAds" + k,{
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
const hi = ()=>{
    X.scrollTop > ut ? D % 5 === 0 && $.scrollBy({
        top: $.clientHeight,
        behavior: "smooth"
    }) : (D + 1) % 5 === 0 && $.scrollBy({
        top: -$.clientHeight,
        behavior: "smooth"
    }),
    ut = X.scrollTop + X.clientHeight / 3
}
  , wi = ()=>{
    $.innerHTML = "";
    for (var n = 0; n < G.length; n++) {
        var t = document.createElement("span");
        t.classList.add("snap-always", "shrink-0", "indicator-bullet"),
        n === D && t.classList.add("indicator-bullet-active"),
        $.appendChild(t)
    }
}
;
var ft = document.querySelector("[data-anchor]"), On, Rn, Pn;
ft && document.querySelector(".overlay-infoSwipe") && ((Rn = (On = window == null ? void 0 : window.kly) == null ? void 0 : On.gtm) == null ? void 0 : Rn.articleId) && ((Pn = window.kly) == null ? void 0 : Pn.pageType) == "InformationPage" && ft.dataset.anchor == "false" && document.querySelector(".overlay-infoSwipe").classList.remove("hidden");
var Ke = document.querySelector(".btn--readarticle");
Ke && (document.body.classList.add("expand"),
Ke.addEventListener("click", function(n) {
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
var we = document.querySelector(".btn--page-next")
  , re = document.querySelector(".btn--page-prev");
we && we.addEventListener("click", function(n) {
    document.querySelector("section.is-visible").nextElementSibling.scrollIntoView({
        block: "start"
    }),
    n.preventDefault()
});
re && re.addEventListener("click", function(n) {
    document.querySelector("section.is-visible").previousElementSibling.scrollIntoView({
        block: "end"
    }),
    n.preventDefault()
});
const mt = document.querySelectorAll(".tap-descHide");
mt && mt.forEach(function(n) {
    n.addEventListener("click", t=>{
        n.closest(".section").classList.toggle("hideDesc")
    }
    )
});
var pt = document.querySelector(".btn--showScroll");
pt && pt.addEventListener("click", function(n) {
    this.parentNode.classList.add("hidden"),
    this.parentNode.classList.contains("hidden") && this.closest(".section").classList.add("section--scroll"),
    n.preventDefault()
});
var Ce = document.querySelector(".box--tag .box-main.overflow-hidden");
Ce && Ce.scrollHeight > Ce.clientHeight && document.querySelector(".box--tag .btn--showScroll").classList.remove("hidden");
var Ie = document.querySelector(".snap-x.overflow-x-auto");
if (Ie) {
    var yt = Ie.querySelector(".active");
    yt && (Ie.scrollLeft += yt.offsetLeft)
}
var ht = document.querySelectorAll('.rate input[type="radio"]');
ht && ht.forEach(function(n) {
    n.addEventListener("change", t=>{
        var i = t.target.checked
          , o = document.querySelector(".btn--rate");
        i && (o.classList.remove("disabled"),
        o.addEventListener("click", function(a) {
            a.target.parentNode.classList.add("opacity-0"),
            a.target.parentNode.previousElementSibling.classList.remove("opacity-0"),
            a.preventDefault()
        }))
    }
    )
});
var wt = document.querySelector(".wimvk--fyp-close");
wt && wt.addEventListener("click", function() {
    this.closest(".wimvk").classList.add("hidden")
});
var oe = document.querySelector(".wimvk--fyp-inner-dynamic")
  , gt = !1
  , gi = document.querySelector(".wimvk--fyp-inner-dynamic-close");
oe && (oe.querySelector(".wimvk--fyp-inner-dynamic-notice-click").addEventListener("click", function() {
    oe.classList.add("active")
}),
gi.addEventListener("click", function() {
    oe.classList.remove("active")
}));
var Ge;
function vi(n, t) {
    function i(a) {
        var r = a.querySelector("video");
        if (r)
            for (var s in r.children) {
                var l = r.children[s];
                typeof l.tagName == "string" && l.tagName === "SOURCE" && !l.src && !r.poster && (l.src = l.dataset.src,
                r.poster = r.dataset.poster,
                r.load(),
                r.onload = function() {
                    r.play()
                }
                )
            }
    }
    function o(a) {
        a == null || a.forEach(function(r) {
            r.pause(),
            r.classList.remove("pause");
            for (var s in r.children) {
                var l = r.children[s];
                l.src && l.dataset.src && r.poster && (l.removeAttribute("src"),
                r.removeAttribute("poster"))
            }
            r.currentTime = 0
        })
    }
    Ge = setInterval(function() {
        {
            var a = t.target.querySelector(".suggest-list-item.active");
            a.classList.remove("active"),
            o(a.parentElement.querySelectorAll("video")),
            a.nextElementSibling ? a && (a.nextElementSibling.classList.add("active"),
            i(a.nextElementSibling)) : a && (a.parentElement.firstElementChild.classList.add("active"),
            document.querySelector("section.is-visible").nextElementSibling.scrollIntoView(),
            clearInterval(Ge))
        }
    }, n)
}
const bi = {
    root: document.querySelector("section.is-visible .suggest-list--feed"),
    rootMargin: "0px",
    threshold: .75
}
  , Si = new IntersectionObserver(n=>{
    n.forEach(t=>{
        t.isIntersecting ? t.target.classList.add("active") : t.target.classList.remove("active")
    }
    )
}
,bi);
window.io = new IntersectionObserver(n=>{
    n.forEach(t=>{
        var g, b, E, _, v, A, L, T, O, P, R;
        const i = t.target.dataset.sid
          , o = t.target.dataset.theme
          , a = t.target.dataset.sound;
        if ((g = window.kly) != null && g.debug && console.log("isIntersecting", t.isIntersecting, t.target.dataset.list),
        t.isIntersecting) {
            document.body.setAttribute("data-theme", o),
            document.body.setAttribute("data-sound", a),
            t.target.classList.add("is-visible"),
            D = Vn[i],
            wi(),
            hi();
            for (var r = 0; r < ue.length; r++)
                t.target.querySelector(".swiperAds" + r) && he[r].autoplay.start();
            typeof MaverickLabVisibleSection == "function" && ((b = window.kly) != null && b.debug && console.log("IntersectionObserver UI"),
            MaverickLabVisibleSection(t, io, D));
            var c = (E = document.querySelectorAll(".section[data-sid]")) == null ? void 0 : E.length;
            re && (D == 0 || ((_ = document.querySelector("[data-section=mobile-billboard].is-visible")) == null ? void 0 : _.getBoundingClientRect().top) + X.scrollTop == 0 ? re.classList.add("disabled") : (re.classList.remove("disabled"),
            we.classList.remove("disabled"),
            D + 1 == c && we.classList.add("disabled"))),
            ki(t);
            var s = document.querySelectorAll(".overlay-infopage")
              , l = D + 1
              , d = document.querySelectorAll('.section:is([data-page="0"]):not([data-section="content-break"]')
              , c = parseInt(((A = (v = window == null ? void 0 : window.kly) == null ? void 0 : v.gtm) == null ? void 0 : A.totalFeedItem) - d.length || 0) + (((L = window == null ? void 0 : window.kly) == null ? void 0 : L.pageType) == "QuranPage" ? 0 : 1)
              , u = document.querySelector(".overlay-pagination");
            u && c > 1 && l <= c && (l = l.toString(),
            endPage = c.toString(),
            u.innerHTML = l + "/" + endPage),
            s && (((T = window == null ? void 0 : window.kly) == null ? void 0 : T.pageType) == "InformationPage" || ((O = window == null ? void 0 : window.kly) == null ? void 0 : O.pageType) == "QuranPage") && s.forEach(function(N) {
                l > c || t.target.dataset.page == "0" || o == "ads" || o == "insertion" ? N.classList.add("hidden") : N.classList.remove("hidden")
            });
            var p = document.querySelector(".wimvk--fyp-postcredit");
            p && (l >= 6 && l <= 8 && ((window == null ? void 0 : window.mavPopUpChannel) || null) ? (p.classList.add("active"),
            gt || (gt = !0,
            setTimeout(function() {
                oe.classList.add("active")
            }, 1e3)),
            document.dispatchEvent(new CustomEvent("maverick:contentBreakPopup",{
                detail: {
                    state: "open",
                    section: t.target
                }
            }))) : p.classList.remove("active"));
            var w = t.target.querySelector(".wimvk--fyp-legacy")
              , y = document.querySelector(".wimvk--fyp-legacy");
            w ? Ke.parentNode.classList.contains("hidden") && y.classList.add("active") : y && y.classList.remove("active");
            var m = document.querySelectorAll(".section[data-theme=dt-information]");
            if (m)
                for (var r = 20; r < m.length; r++)
                    m.length > 20 && m[r].classList.add("hideNumber");
            const x = document.querySelector(".overlay-swipeup");
            x && (D != 0 ? x.classList.add("current") : x.classList.remove("current"));
            const C = document.querySelector(".header-tagline:not(.hidden)");
            C && (D != 1 ? C.style.display = "none" : C.style.display = "");
            const M = t.target.querySelector(".dots-btn.active");
            M && M.click();
            var h = t.target.querySelector("img[loading]");
            h && setTimeout(function() {
                h.setAttribute("loading", "")
            }, 100),
            t.target.dataset.section == "content-break" && setTimeout(()=>{
                var N;
                (N = t.target.querySelector(".section-body")) == null || N.classList.add("unminify")
            }
            , 2e3),
            t.target.querySelector(".suggest-list--video") && vi(5e3, t);
            const dt = t.target.querySelectorAll(".suggest-list--feed > div");
            dt && dt.forEach(N=>{
                Si.observe(N)
            }
            );
            const Te = document.querySelector(".overlay-ais");
            Te && (o == "dt-information" && t.target.dataset.section == "ais" ? Te.classList.remove("hidden") : Te.classList.add("hidden"));
            const xe = document.querySelector(".title-lcp");
            xe && (t.target.dataset.section == "mobile-billboard" ? xe.style.opacity = "1" : xe.style.opacity = "0"),
            t.target.dataset.section == "ais" && typeof Swiper < "u" && setTimeout(()=>{
                document.querySelectorAll(".swiper-pagination-tooltip").forEach(function(N) {
                    N.style.opacity = "0"
                })
            }
            , 5e3)
        } else
            t.target.classList.remove("is-visible"),
            he.forEach(function(M) {
                M.slideToLoop(0, 0),
                M.autoplay.stop()
            }),
            typeof MaverickLabInVisibleSection == "function" && MaverickLabInVisibleSection(t, io, D),
            Ei(t),
            t.target.querySelector(".tap-descHide") && t.target.classList.remove("hideDesc"),
            t.target.querySelector(".suggest-list--video") && ((P = t.target.querySelector(".suggest-list-item.active:not(:first-child)")) == null || P.classList.remove("active"),
            (R = t.target.querySelector(".suggest-list-item")) == null || R.parentElement.firstElementChild.classList.add("active"),
            clearInterval(Ge))
    }
    )
}
,yi);
document.querySelector(".overlay-swipeup .viewers-avatar") && (document.querySelectorAll(".viewers-avatar li").forEach(function(n) {
    var t = ["#FFD1DC", "#FFA07A", "#FFB6C1", "#87CEFA", "#98FB98", "#F08080", "#D8BFD8", "#DDA0DD", "#FF6347", "#FFA500", "#00FA9A", "#00CED1", "#20B2AA", "#87CEEB", "#9370DB", "#7B68EE", "#48D1CC", "#40E0D0", "#00BFFF", "#00CED1", "#AFEEEE", "#98FB98", "#DDA0DD", "#87CEEB", "#FFD700"]
      , i = t[Math.floor(Math.random() * t.length)];
    n.style.backgroundColor = i
}),
getComputedStyle(document.querySelector(".viewers-avatar")).getPropertyValue("--userDuration"));
var Vn = {}
  , vt = document.querySelector(".backtop");
vt !== null && vt.addEventListener("click", function(n) {
    G[0].scrollIntoView(),
    n.preventDefault()
});
function Wn() {
    for (var n = document.querySelectorAll('.section:not([data-theme="ads"],[data-theme="insertion"],[data-page="0"])'), t = 0; t < n.length; t++) {
        var i = (Math.random() + 1).toString(36).substring(7);
        n[t].dataset.sid = i,
        Vn[n[t].dataset.sid] = t
    }
    for (var t = 0; t < G.length; t++)
        window.io && window.io.unobserve && window.io.unobserve(G[t]),
        window.io && window.io.observe && window.io.observe(G[t])
}
function ki(n) {
    const t = n.target.querySelector("video");
    if (t) {
        for (var i in t.children) {
            var o = t.children[i];
            typeof o.tagName == "string" && o.tagName === "SOURCE" && (o.src || (o.src = o.dataset.src),
            o.src && (t.load(),
            setTimeout(function() {
                t.videoHeight < t.videoWidth && (t.classList.replace("object-cover", "object-contain"),
                t.style.backgroundImage = "")
            }, 1e3),
            t.onloadstart = function() {
                t.play(),
                t.classList.remove("blur-lg")
            }
            ))
        }
        t.duration % 60,
        t.addEventListener("loadedmetadata", ()=>{
            var s, l;
            document.dispatchEvent(new CustomEvent("maverick:video_event",{
                detail: {
                    type: "start",
                    video: t,
                    sectionId: (l = (s = t.closest("section")) == null ? void 0 : s.dataset) == null ? void 0 : l.sid,
                    provider: "selfplayer"
                }
            }))
        }
        ),
        t.addEventListener("timeupdate", ()=>{
            var s, l;
            document.dispatchEvent(new CustomEvent("maverick:video_event",{
                detail: {
                    type: "update",
                    video: t,
                    sectionId: (l = (s = t.closest("section")) == null ? void 0 : s.dataset) == null ? void 0 : l.sid,
                    provider: "selfplayer"
                }
            }))
        }
        ),
        t.addEventListener("pause", ()=>{
            var s, l;
            document.dispatchEvent(new CustomEvent("maverick:video_event",{
                detail: {
                    type: "pause",
                    video: t,
                    sectionId: (l = (s = t.closest("section")) == null ? void 0 : s.dataset) == null ? void 0 : l.sid,
                    provider: "selfplayer"
                }
            }))
        }
        ),
        t.addEventListener("play", ()=>{
            var s, l;
            t.currentTime > 0 && document.dispatchEvent(new CustomEvent("maverick:video_event",{
                detail: {
                    type: "resume",
                    video: t,
                    sectionId: (l = (s = t.closest("section")) == null ? void 0 : s.dataset) == null ? void 0 : l.sid,
                    provider: "selfplayer"
                }
            }))
        }
        )
    }
    function a() {
        var s = n.target.querySelector("iframe")
          , l = n.target.querySelector('iframe[src^="https://www.vidio.com/embed/"]')
          , d = n.target.querySelector('iframe[src^="https://www.youtube.com/embed/"]');
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
                var p = n.target.querySelector(".embed-yt");
                d.src += (d.src.includes("?") ? "&" : "?") + "enablejsapi=1",
                document.querySelector(".muted") || (d.src += "&mute=1"),
                p && (d.src += "&controls=0"),
                c()
            }
        else {
            if (l && document.querySelector(".muted")) {
                var w = l.src.replace("mute=true", "mute=false");
                l.src = w
            }
            u()
        }
    }
    var r = n.target.querySelector("iframe");
    r && (r.getAttribute("data-src") && (r.src || r.setAttribute("src", r.getAttribute("data-src"))),
    a())
}
function Ei(n) {
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
function zn() {
    let n = document.querySelectorAll(".btn--unmute")
      , t = document.querySelectorAll("video")
      , i = document.querySelectorAll("iframe");
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
Wn();
zn();
function Jn(n) {
    const t = document.querySelectorAll("time");
    t && t.forEach(function(i) {
        i.getAttribute("datetime")
    })
}
Jn();
document.addEventListener("maverick:locale", function(n) {
    Jn(n.detail)
}, !1);
document.addEventListener("maverick:reinit", function() {
    G = document.querySelectorAll("[data-section]"),
    Wn(),
    zn()
}, !1);
let ae = document.querySelector(".switchTheme-click")
  , bt = document.querySelectorAll(".switchTheme-option li a")
  , St = new Date().getHours();
if (ae) {
    ae.addEventListener("click", n=>{
        n.currentTarget.classList.toggle("is-active"),
        n.currentTarget.classList.contains("is-active") ? document.querySelector(".switchTheme-option").classList.add("open") : document.querySelector(".switchTheme-option").classList.remove("open"),
        n.preventDefault()
    }
    );
    for (var k = 0; k < bt.length; k++)
        bt[k].addEventListener("click", function(t) {
            let i = this.dataset.value
              , o = this.querySelector(".icon-theme").innerHTML;
            document.documentElement.setAttribute("theme", i),
            document.querySelector(".switchTheme-option li.active").classList.remove("active"),
            this.parentNode.classList.add("active"),
            ae.innerHTML = o,
            i === "darkmode" ? document.documentElement.classList.add("dark") : i === "lightmode" ? document.documentElement.classList.remove("dark") : (document.documentElement.classList.remove("dark"),
            (St >= 24 || St < 5) && document.documentElement.classList.add("dark"));
            var a = document.documentElement.getAttribute("theme");
            localStorage.setItem("mode", a),
            t.preventDefault()
        });
    var kt = localStorage.getItem("mode");
    kt === "darkmode" ? document.querySelector("[data-value=darkmode]").click() : kt === "lightmode" ? document.querySelector("[data-value=lightmode]").click() : document.querySelector("[data-value=automode]").click()
}
window.addEventListener("click", function(n) {
    ae.contains(n.target) || (ae.classList.remove("is-active"),
    document.querySelector(".switchTheme-option").classList.remove("open"))
});
const Li = document.querySelectorAll("[data-toggle]")
  , _i = document.querySelectorAll("[data-toggle-close]");
Li.forEach(function(n, t) {
    n.addEventListener("click", function(i) {
        const o = this.getAttribute("data-toggle");
        if (this.classList.toggle("is-active"),
        this.classList.contains("is-active") ? (document.body.classList.add("overflow-hidden"),
        document.querySelector('[data-toggle-open="' + o + '"]').classList.add("open")) : (document.body.classList.remove("overflow-hidden"),
        document.querySelector('[data-toggle-open="' + o + '"]').classList.remove("open")),
        document.querySelector('[data-toggle-open="' + o + '"]').hasAttribute("data-timer")) {
            const a = parseInt(document.querySelector('[data-toggle-open="' + o + '"]').getAttribute("data-timer"), 10);
            setTimeout(()=>{
                document.body.classList.remove("overflow-hidden"),
                document.querySelector('[data-toggle-open="' + o + '"]').classList.remove("open"),
                this.classList.remove("is-active")
            }
            , a)
        }
        i.preventDefault()
    })
});
_i.forEach(function(n, t) {
    n.addEventListener("click", function(i) {
        document.body.classList.remove("overflow-hidden"),
        document.querySelector("[data-toggle].is-active").classList.remove("is-active"),
        document.querySelector("[data-toggle-open].open").classList.remove("open"),
        i.preventDefault()
    })
});
navigator.userAgent.match("CriOS") && document.body.addEventListener("touchstart", t=>{
    t.preventDefault()
}
);
const qi = document.querySelectorAll("[data-submenu]");
qi.forEach(function(n, t) {
    n.addEventListener("click", function(i) {
        const o = this.getAttribute("data-submenu")
          , a = document.querySelector('[data-submenu-open="' + o + '"]');
        this.classList.toggle("is-active"),
        this.classList.contains("is-active") ? a.classList.add("open") : a.classList.remove("open"),
        i.preventDefault()
    })
});
const Et = document.querySelectorAll(".line-clamp-str");
Et && Et.forEach(function(n) {
    for (var t = n.querySelectorAll(".line-clamp-str p:last-child"), i = 0; i < t.length; i++) {
        let r = t[0].nextElementSibling;
        for (; r; )
            r.classList.add("more-text", "hidden"),
            r = r.nextElementSibling;
        const l = t[0].innerHTML.length;
        var o = 134;
        l > o && (t[i].parentNode.style.paddingBottom = "2rem",
        t[i].classList.add("line-clamp-str-body"),
        t[i].parentNode.innerHTML += "<span class='dots-btn absolute bottom-0 inset-x-0 vh-text-sm font-semibold font-primary-1 block cursor-pointer pointer-events-auto'>More</span>")
    }
    n.querySelector(".line-clamp-str-body") && n.querySelector(".line-clamp-str-body").addEventListener("scroll", r=>{
        const s = r.currentTarget;
        s.scrollTop > 0 ? (s.classList.add("is-top-overflowing"),
        s.classList.add("is-bottom-overflowing"),
        s.scrollTop + s.clientHeight === s.scrollHeight && s.classList.remove("is-bottom-overflowing")) : s.classList.remove("is-top-overflowing")
    }
    );
    var a = n.querySelector(".dots-btn");
    a && a.addEventListener("click", r=>{
        var s = r.currentTarget
          , l = s.parentNode
          , d = l.querySelector(".line-clamp-str-body");
        s.classList.toggle("active"),
        d.scrollTo(0, 0),
        s.classList.contains("active") ? (s.innerHTML = "Less",
        l.classList.add("open"),
        d.scrollHeight > 16 * 12 && d.classList.add("is-bottom-overflowing")) : (s.innerHTML = "More",
        l.classList.remove("open"),
        targetMoretext.forEach(function(c) {
            c.classList.add("hidden")
        }))
    }
    )
});
const Lt = document.querySelectorAll("[data-popup]")
  , _t = document.querySelectorAll("[data-scroller-ads]")
  , qt = document.querySelectorAll("[data-section-ads]");
let At = []
  , Tt = [];
for (var k = 0; k < _t.length; k++) {
    At[k] = {
        root: _t[k],
        rootMargin: "-12% 0px -88% 0px"
    },
    Tt[k] = new IntersectionObserver(t=>{
        t.forEach(i=>{
            i.isIntersecting ? i.target.classList.add("is-visible") : i.target.classList.remove("is-visible")
        }
        )
    }
    ,At[k]);
    for (var Oe = 0; Oe < qt.length; Oe++)
        Tt[k].observe(qt[Oe])
}
for (var k = 0; k < Lt.length; k++)
    Lt[k].addEventListener("click", function(t) {
        const i = this.getAttribute("data-popup");
        document.querySelector("[data-scroller]").style.overflow = "hidden",
        document.querySelector("[data-popup-open=" + i + "]").classList.add("open"),
        document.querySelector("[data-popup-open=" + i + "] [data-section-ads]:first-child").scrollIntoView(),
        document.querySelector("[data-popup-open=" + i + "] [data-section-ads]:first-child").classList.add("is-visible")
    });
const xt = document.querySelectorAll("[data-popup-close]");
for (var k = 0; k < xt.length; k++)
    xt[k].addEventListener("click", function(t) {
        const i = this.getAttribute("data-popup-close");
        document.querySelector("[data-scroller]").style.overflow = "",
        document.querySelector("[data-popup-open=" + i + "]").classList.remove("open"),
        document.querySelector("[data-popup-open=" + i + "] [data-section-ads]:first-child").scrollIntoView(),
        document.querySelector("[data-popup-open=" + i + "] [data-section-ads].is-visible").classList.remove("is-visible")
    });
function $n() {
    var n = !1;
    new Swiper('.section[data-section="ais"] .swiper',{
        pagination: {
            el: ".swiper-pagination",
            clickable: !0,
            renderBullet: function(t, i) {
                return '<span class="' + i + '">' + (t + 1) + "</span>"
            }
        },
        on: {
            init: function(t) {
                document.dispatchEvent(new CustomEvent("maverick:ais.event",{
                    detail: {
                        state: "init",
                        element: t
                    }
                })),
                n = !0
            },
            slideChange: function(t) {
                n && (t.pagination.render(),
                t.pagination.update(),
                document.dispatchEvent(new CustomEvent("maverick:ais.event",{
                    detail: {
                        state: "slideChange",
                        element: t
                    }
                })))
            }
        }
    })
}
const Ai = new Event("build");
var Ct = !1;
document.addEventListener("build", ()=>{
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
        document.head.insertBefore(t, document.head.querySelectorAll("style")[0])
    }
    setTimeout(()=>{
        if (typeof Swiper < "u" && !Ct) {
            if (document.querySelector('.section[data-theme="postcredit"] .swiper')) {
                const n = new Swiper('.section[data-theme="postcredit"] .swiper',{
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
                    document.dispatchEvent(new CustomEvent("maverick:postcredit.event",{
                        detail: {
                            state: "slideChange",
                            element: t
                        }
                    }))
                })
            }
            document.querySelector('.section[data-section="ais"] .swiper') && $n(),
            Ct = !0
        }
    }
    , 1e3)
}
, !1);
window.addEventListener("load", function() {
    document.dispatchEvent(Ai)
});
document.addEventListener("maverick:reinit", function() {
    $n()
});
const It = document.querySelectorAll(".btn--share")
  , Xe = document.querySelector(".shareModal")
  , Ot = document.querySelector(".shareModal-close")
  , z = document.querySelector(".shareModal-tooltip");
var Rt = !1;
if (It) {
    var J;
    It.forEach(function(n) {
        var o, a, r;
        n.addEventListener("click", s=>{
            var w, y, m, h, g, b, E, _;
            if (J = document.body.getAttribute("data-theme"),
            (((w = window == null ? void 0 : window.kly) == null ? void 0 : w.pageType) || null) == "ReadPage") {
                let v = document.title
                  , A = document.querySelector('meta[name="description"]').content
                  , L = window.location.href;
                if (((m = (y = window == null ? void 0 : window.kly) == null ? void 0 : y.gtm) == null ? void 0 : m.pageType) == "ReadPage",
                J == "dt-headline" || J == "dt-parablock" || J == "postcredit")
                    v = ((g = (h = window == null ? void 0 : window.kly) == null ? void 0 : h.gtm) == null ? void 0 : g.articleTitle) || document.querySelector("title").text,
                    A = document.querySelector('meta[name="description"]').content,
                    L = window.location.href;
                else {
                    let O = document.querySelector("section.is-visible");
                    v = ((b = O.querySelector(".article-title")) == null ? void 0 : b.textContent.trim()) || document.title,
                    A = (E = O.querySelector(".article-paragraph")) == null ? void 0 : E.textContent.trim(),
                    L = ((_ = O.querySelector("a")) == null ? void 0 : _.getAttribute("href")) || window.location.href
                }
                L = L.indexOf(window.location.origin) == -1 ? window.location.origin + L : L;
                let T = {
                    title: v,
                    text: A,
                    url: L
                };
                navigator.share(T)
            } else {
                var l = document.querySelector("section.is-visible picture img");
                if (l) {
                    var d = l.getAttribute("src")
                      , c = l.src.replace("mav-prod-resized/480x/ori", "maverick-prod");
                    l.setAttribute("src", c),
                    l.setAttribute("data-origin", d),
                    l.previousElementSibling.setAttribute("srcset", c),
                    setTimeout(function() {
                        l.setAttribute("src", d),
                        l.setAttribute("data-origin", c),
                        l.previousElementSibling.setAttribute("srcset", d)
                    }, 2e3)
                }
                if (Xe.classList.add("is-open"),
                !Rt) {
                    Rt = !0,
                    Xe.classList.remove("hidden");
                    let v = document.createElement("script");
                    v.src = "https://cdns.klimg.com/maverick-prod/static/build/frontend/assets/html2canvas.js",
                    v.setAttribute("defer", ""),
                    document.body.append(v)
                }
                setTimeout(()=>{
                    var v = new Swiper(".shareModal .swiper",{
                        spaceBetween: 16,
                        pagination: {
                            el: ".swiper-pagination",
                            type: "bullets"
                        }
                    }).on("slideChange", function() {
                        v.pagination.render(),
                        v.pagination.update()
                    });
                    v.update()
                }
                , 1e3);
                var u = document.querySelector("section.is-visible");
                J != "dt-information" && (u = document.querySelector('section[data-section="mobile-billboard"] + section'));
                var p = document.querySelectorAll(".shareOutput");
                p.forEach(function(v) {
                    var A, L, T, O, P, R, x;
                    v.classList.contains("--current") ? setTimeout(()=>{
                        html2canvas(document.querySelector("section.is-visible"), {
                            useCORS: !0,
                            allowTaint: !0,
                            backgroundColor: "transparent",
                            imageTimeout: 0,
                            ignoreElements: function(C) {
                                return C.tagName === "A" && C.host !== window.location.host || C.getAttribute("loading") === "lazy"
                            }
                        }).then(C=>(document.querySelector(".shareOutput.--current").appendChild(C),
                        C.style.width = "100%",
                        C.style.height = "100%",
                        C))
                    }
                    , 1500) : (v.style.backgroundImage = "url(" + ((A = u.querySelector(".article-asset img")) == null ? void 0 : A.src) + ")",
                    (u.querySelector(".article-desc h4") || u.querySelector(".article-title")) && (v.querySelector(".shareOutput-title").innerHTML = ((L = u.querySelector(".article-desc h4")) == null ? void 0 : L.textContent) || ((T = u.querySelector(".article-title")) == null ? void 0 : T.textContent) || u.querySelector(".cl-payload").dataset.title),
                    u.querySelector(".article-desc .article-paragraph") ? (v.querySelector(".shareOutput-desc").innerHTML = (O = u.querySelector(".article-desc .article-paragraph")) == null ? void 0 : O.textContent,
                    v.querySelector(".shareOutput-desc").style.display = "") : (v.querySelector(".shareOutput-desc").innerHTML = "",
                    v.querySelector(".shareOutput-desc").style.display = "none"),
                    u.querySelector(".article-desc .article-tag a") ? (v.querySelector(".shareOutput-tag").innerHTML = (P = u.querySelector(".article-desc .article-tag a")) == null ? void 0 : P.textContent,
                    v.querySelector(".shareOutput-tag").style.display = "") : (v.querySelector(".shareOutput-tag").innerHTML = "",
                    v.querySelector(".shareOutput-tag").style.display = "none"),
                    v.classList.contains("--first") && (v.querySelector(".shareOutput-logo img").src = document.querySelector(".header-body-logo-link-icon .icon-lg").src),
                    v.classList.contains("--fifth") && (v.querySelector(".shareOutput-logo img").src = ((R = document.querySelector('link[rel="shortcut icon"]')) == null ? void 0 : R.href) || ((x = document.querySelector('link[rel="icon"]')) == null ? void 0 : x.href)))
                }),
                (document.body.dataset.theme == "media1" && (!u.querySelector(".article-desc h4") || !u.querySelector(".article-title")) || !u.querySelector(".article-desc h4") && !u.querySelector(".article-title")) && document.querySelector(".shareModal .swiper").classList.add("--video")
            }
        }
        ),
        document.querySelector(".shareModal-footer-btn.--copy") && document.querySelector(".shareModal-footer-btn.--copy").addEventListener("click", function() {
            var d;
            let s;
            if (s = ((d = document.querySelector("section.is-visible").querySelector("a.btn")) == null ? void 0 : d.getAttribute("href")) || window.location.href,
            s = s.indexOf(window.location.origin) == -1 ? window.location.origin + s : s,
            z.classList.add("active"),
            z.innerHTML = "Link Copied!",
            setTimeout(()=>{
                z.classList.remove("active")
            }
            , 2e3),
            window.isSecureContext)
                navigator.clipboard.writeText(s);
            else {
                const c = document.createElement("textarea");
                c.value = s,
                this.appendChild(c),
                c.select(),
                c.setSelectionRange(0, 99999),
                document.execCommand("copy"),
                this.removeChild(c)
            }
        }),
        document.querySelector(".shareModal-footer-btn.--download") && document.querySelector(".shareModal-footer-btn.--download").addEventListener("click", function() {
            z.classList.add("active"),
            z.innerHTML = "Image Saved!",
            setTimeout(()=>{
                z.classList.remove("active")
            }
            , 2e3);
            var s = document.querySelector(".swiper-slide-active .shareOutput");
            html2canvas(s, {
                scale: 3,
                useCORS: !0,
                allowTaint: !0,
                imageTimeout: 0,
                windowWidth: 720,
                windowHeight: 1280
            }).then(l=>(l.style.display = "none",
            document.body.appendChild(l),
            l)).then(l=>{
                const d = l.toDataURL("image/png")
                  , c = document.createElement("a");
                c.setAttribute("download", "kly-share.png"),
                c.setAttribute("href", d),
                c.click(),
                l.remove()
            }
            )
        }),
        navigator.userAgent.match("CriOS") ? document.querySelector(".shareModal-footer-btn.--share button").classList.remove("hidden") : (o = document.querySelector(".shareModal-footer-btn.--share select")) == null || o.classList.remove("hidden");
        async function t() {
            const l = (await html2canvas(document.querySelector(".swiper-slide-active .shareOutput"), {
                scale: 3,
                useCORS: !0,
                allowTaint: !0,
                imageTimeout: 0,
                windowWidth: 720,
                windowHeight: 1280
            })).toDataURL()
              , c = await (await fetch(l)).blob();
            var p = {
                files: [new File([c],"image.png",{
                    type: c.type,
                    lastModified: new Date().getTime()
                })]
            };
            navigator.share && navigator.share(p).then(()=>{
                console.log("Shared successfully")
            }
            )
        }
        function i() {
            var u, p, w, y, m, h;
            let s = ((u = document.querySelector(".swiper-slide-active .shareOutput .shareOutput-title")) == null ? void 0 : u.textContent.trim()) || document.title
              , l = (p = document.querySelector('meta[name="description"]')) == null ? void 0 : p.content
              , d = window.location.href;
            if (J == "dt-information") {
                let g = document.querySelector("section.is-visible");
                s = ((w = g.querySelector("h4")) == null ? void 0 : w.textContent.trim()) || document.title,
                l = ((y = g.querySelector(".article-paragraph")) == null ? void 0 : y.textContent.trim()) || ((m = document.querySelector('meta[name="description"]')) == null ? void 0 : m.content),
                d = ((h = g.querySelector("a")) == null ? void 0 : h.getAttribute("href")) || window.location.href
            }
            d = d.indexOf(window.location.origin) == -1 ? window.location.origin + d : d;
            const c = {
                title: s,
                text: l,
                url: d
            };
            navigator.share && navigator.share(c).then(()=>{
                console.log("Shared successfully")
            }
            )
        }
        (a = document.querySelector(".shareModal-footer-btn.--share select")) == null || a.addEventListener("change", function() {
            var s = this.options[this.selectedIndex].value;
            s === "image" ? (async()=>await t())() : i()
        }),
        (r = document.querySelector(".shareModal-footer-btn.--share button")) == null || r.addEventListener("click", function(s) {
            i()
        })
    })
}
Ot && Ot.addEventListener("click", n=>{
    document.querySelector(".shareOutput.--current canvas") && document.querySelector(".shareOutput.--current canvas").remove(),
    document.querySelector(".shareModal .swiper").classList.contains("--video") && document.querySelector(".shareModal .swiper").classList.remove("--video"),
    Xe.classList.remove("is-open")
}
);
var Pt = document.querySelector(".shareModal-link-copy")
  , Re = document.querySelector(".shareModal-link-url");
Pt && Pt.addEventListener("click", function(n) {
    Re.select(),
    Re.setSelectionRange(0, 99999),
    navigator.clipboard.writeText(Re.value)
});
var Mt = document.querySelector(".btn--collapse");
Mt && Mt.addEventListener("click", function(n) {
    this.classList.toggle("collapsed"),
    this.classList.contains("collapsed") ? document.querySelector(".box--collapse").classList.add("open") : document.querySelector(".box--collapse").classList.remove("open"),
    n.preventDefault()
});
var Dt = document.querySelectorAll(".btn--copy");
Dt && Dt.forEach(function(n) {
    n.addEventListener("click", function(t) {
        var i = this.parentNode.parentNode
          , o = i.querySelector(".ayat-arabic-text")
          , a = i.querySelector(".ayat-translate");
        this.classList.add("copied"),
        setTimeout(()=>{
            this.classList.remove("copied")
        }
        , 2e3);
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
var Mn;
(Mn = document.querySelectorAll("video")) == null || Mn.forEach(n=>{
    var t = n.parentNode;
    t.querySelector(".video-play") && t.querySelector(".video-play").addEventListener("click", function(i) {
        n.paused ? (n.play(),
        n.classList.remove("pause")) : (n.pause(),
        n.classList.add("pause"))
    })
}
);
var Pe = document.querySelector(".overlay-infoTools"), Bt = parseInt(localStorage.getItem("mav_info_tools") || 0), Dn;
Pe && ((Dn = window == null ? void 0 : window.kly) == null ? void 0 : Dn.pageType) == "HomePage" && Bt < (window.mavMaxInfoTool || 3) && (localStorage.setItem("mav_info_tools", Bt + 1),
Pe.classList.remove("hidden"),
X.addEventListener("scroll", function() {
    Pe.style = "--delay: 1000ms"
}));
var Me = document.querySelector(".btn--returnpage"), Bn;
Me && ((document == null ? void 0 : document.referrer.indexOf((Bn = document.location) == null ? void 0 : Bn.host)) > 0 ? Me.classList.remove("disabled") : Me.classList.add("disabled"));
var Nn;
(Nn = document.querySelectorAll(".nav-item a:not([data-submenu])")) == null || Nn.forEach(n=>{
    n.addEventListener("click", function() {
        var t = document.querySelector('[data-toggle-open="menu"]');
        t != null && t.classList.contains("open") && document.querySelector('[data-toggle-close="menu"]').click()
    })
}
);
var Nt = document.querySelectorAll(".dt-postcredit-rep-all-list li");
if (Nt) {
    var De = []
      , Be = document.querySelector(".dt-postcredit-rep-more-abjad");
    Be && (Be.closest(".dt--postcredit-rep").classList.remove("hidden"),
    Nt.forEach(n=>{
        De.push(n.innerHTML)
    }
    ),
    De.forEach(n=>{
        var t = document.createElement("li")
          , i = document.createElement("span");
        if (Be.appendChild(t),
        t.appendChild(i),
        t.setAttribute("class", " flex space-x-2 items-center"),
        i.setAttribute("class", "abjad vh-text-xl flex items-center justify-center rounded-full border w-10 h-10"),
        i.innerHTML = n[0],
        De.length == 1) {
            var o = document.createElement("span");
            t.appendChild(o),
            o.setAttribute("class", "abjad-name font-semibold"),
            o.innerHTML = n,
            document.querySelector(".dt-postcredit-rep-more-btn").classList.add("hidden")
        }
    }
    ))
}
if (document.querySelector(".box--collapse-form-input")) {
    let n = function() {
        var t = document.querySelector(".box--collapse-form-input"), i = t.value.toUpperCase(), o = document.querySelector(".box--category-list"), a = o.querySelectorAll("li"), r, s;
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
var Ne = document.querySelector(".box-list--related");
if (Ne) {
    var Ti = Ne.children.length;
    Ti > 8 && Ne.parentNode.classList.add("active")
}
var de = document.querySelectorAll(".image-copyright");
de && (de == null || de.forEach(n=>{
    n.getAttribute("data-copyright").trim() == "" && n.remove(),
    n.addEventListener("click", t=>{
        t.target.classList.toggle("expand"),
        t.target.classList.contains("expand") && setTimeout(()=>{
            t.target.classList.remove("expand")
        }
        , "5000")
    }
    )
}
));
window.MavInitSections = ()=>{
    var c, u, p, w, y, m;
    var n = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      , t = document.querySelectorAll("section[data-section]:not([data-theme=ads])")
      , i = document.querySelector("section[data-section]:not([data-theme=ads]) .dt-infoSwipe")
      , o = parseInt(((u = (c = window == null ? void 0 : window.kly) == null ? void 0 : c.gtm) == null ? void 0 : u.totalFeedItem) || 0);
    i && (o = i.closest("section").dataset.list);
    var a = document.querySelectorAll('[data-section="content-break"]:not([data-sid])');
    if (a)
        for (var r = 0; r < a.length; r++) {
            var s = (Math.random() + 1).toString(36).substring(7);
            a[r].dataset.sid = s,
            (p = window.kly) != null && p.debug && console.log("setContentBreak sID:" + s)
        }
    if (t.length)
        for (var r = 0; r < t.length; r++) {
            if (r == t.length - 3 && window.io && window.io.unobserve && window.io.unobserve(t[r]),
            t[r].querySelectorAll("ins").length) {
                if (t[r].hasAttribute("data-ads-section-index") || (t[r].querySelectorAll("ins")[0].dataset.position = r + 1),
                !t[r].querySelectorAll("ins")[0].hasAttribute("data-position") && !t[r].hasAttribute("data-ads-section-index") && (t[r].dataset.theme == "mediaEmbed1" || t[r].dataset.theme == "media1")) {
                    let g = t[r].querySelector('iframe[src^="https://www.youtube.com/embed/"]');
                    if (g) {
                        g.classList.add("video-absolute");
                        let b = new URL(g.getAttribute("src"));
                        b.searchParams.set("enablejsapi", 1),
                        b.searchParams.set("controls", 0),
                        b.searchParams.set("mute", 1),
                        g.setAttribute("src", b),
                        g.setAttribute("allow", "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share")
                    }
                }
                if (!((w = t[r].dataset) != null && w.insType) && ((m = (y = window == null ? void 0 : window.kly) == null ? void 0 : y.gtm) == null ? void 0 : m.articleId)) {
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
}
;
window.MavRemoveAnimateInIOS = ()=>{
    navigator.userAgent.match("CriOS") && document.body.addEventListener("touchstart", t=>{
        e.preventDefault()
    }
    )
}
;
window.MavRemoveInfoSwipe = ()=>{
    var n, t, i;
    ((t = (n = window == null ? void 0 : window.kly) == null ? void 0 : n.gtm) == null ? void 0 : t.articleId) && ((i = window.kly) == null ? void 0 : i.pageType) != "InformationPage" && document.querySelector(".overlay-infoSwipe") && (document.querySelector(".overlay-infoSwipe").style.display = "none")
}
;
window.MavVideoSections = ()=>{
    document.querySelector(".main-body") && document.querySelector(".main-body").addEventListener("scroll", n=>{
        var t = document.querySelector("section.is-visible");
        if (t && t.querySelector(".muted")) {
            var i = t.querySelector(".unmuted");
            i && i.click()
        }
    }
    )
}
;
window.MavOnScreenView = n=>{
    var i;
    var t = n;
    t && t.querySelector(".instagram-media") && (i = window == null ? void 0 : window.instgrm) != null && i.Embeds && window.instgrm.Embeds.process()
}
;
window.MavButtonWAChannel = ()=>{
    var n = document.querySelector(".btn--followChannel");
    if (n) {
        var t = n.getAttribute("href");
        t && t != "#" && n.classList.remove("hidden")
    }
}
;
MavInitSections();
MavVideoSections();
MavRemoveInfoSwipe();
MavButtonWAChannel();
function Kn(n, t) {
    return function() {
        return n.apply(t, arguments)
    }
}
const {toString: Gn} = Object.prototype
  , {getPrototypeOf: nt} = Object
  , it = (n=>t=>{
    const i = Gn.call(t);
    return n[i] || (n[i] = i.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , H = n=>(n = n.toLowerCase(),
t=>it(t) === n)
  , ke = n=>t=>typeof t === n
  , {isArray: ee} = Array
  , se = ke("undefined");
function xi(n) {
    return n !== null && !se(n) && n.constructor !== null && !se(n.constructor) && W(n.constructor.isBuffer) && n.constructor.isBuffer(n)
}
const Xn = H("ArrayBuffer");
function Ci(n) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(n) : t = n && n.buffer && Xn(n.buffer),
    t
}
const Ii = ke("string")
  , W = ke("function")
  , Yn = ke("number")
  , ot = n=>n !== null && typeof n == "object"
  , Oi = n=>n === !0 || n === !1
  , fe = n=>{
    if (it(n) !== "object")
        return !1;
    const t = nt(n);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n)
}
  , Ri = H("Date")
  , Pi = H("File")
  , Mi = H("Blob")
  , Di = H("FileList")
  , Bi = n=>ot(n) && W(n.pipe)
  , Ni = n=>{
    const t = "[object FormData]";
    return n && (typeof FormData == "function" && n instanceof FormData || Gn.call(n) === t || W(n.toString) && n.toString() === t)
}
  , Fi = H("URLSearchParams")
  , Hi = n=>n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function le(n, t, {allOwnKeys: i=!1}={}) {
    if (n === null || typeof n > "u")
        return;
    let o, a;
    if (typeof n != "object" && (n = [n]),
    ee(n))
        for (o = 0,
        a = n.length; o < a; o++)
            t.call(null, n[o], o, n);
    else {
        const r = i ? Object.getOwnPropertyNames(n) : Object.keys(n)
          , s = r.length;
        let l;
        for (o = 0; o < s; o++)
            l = r[o],
            t.call(null, n[l], l, n)
    }
}
function Qn(n, t) {
    t = t.toLowerCase();
    const i = Object.keys(n);
    let o = i.length, a;
    for (; o-- > 0; )
        if (a = i[o],
        t === a.toLowerCase())
            return a;
    return null
}
const Zn = (()=>typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)()
  , ei = n=>!se(n) && n !== Zn;
function Ye() {
    const {caseless: n} = ei(this) && this || {}
      , t = {}
      , i = (o,a)=>{
        const r = n && Qn(t, a) || a;
        fe(t[r]) && fe(o) ? t[r] = Ye(t[r], o) : fe(o) ? t[r] = Ye({}, o) : ee(o) ? t[r] = o.slice() : t[r] = o
    }
    ;
    for (let o = 0, a = arguments.length; o < a; o++)
        arguments[o] && le(arguments[o], i);
    return t
}
const Ui = (n,t,i,{allOwnKeys: o}={})=>(le(t, (a,r)=>{
    i && W(a) ? n[r] = Kn(a, i) : n[r] = a
}
, {
    allOwnKeys: o
}),
n)
  , ji = n=>(n.charCodeAt(0) === 65279 && (n = n.slice(1)),
n)
  , Vi = (n,t,i,o)=>{
    n.prototype = Object.create(t.prototype, o),
    n.prototype.constructor = n,
    Object.defineProperty(n, "super", {
        value: t.prototype
    }),
    i && Object.assign(n.prototype, i)
}
  , Wi = (n,t,i,o)=>{
    let a, r, s;
    const l = {};
    if (t = t || {},
    n == null)
        return t;
    do {
        for (a = Object.getOwnPropertyNames(n),
        r = a.length; r-- > 0; )
            s = a[r],
            (!o || o(s, n, t)) && !l[s] && (t[s] = n[s],
            l[s] = !0);
        n = i !== !1 && nt(n)
    } while (n && (!i || i(n, t)) && n !== Object.prototype);
    return t
}
  , zi = (n,t,i)=>{
    n = String(n),
    (i === void 0 || i > n.length) && (i = n.length),
    i -= t.length;
    const o = n.indexOf(t, i);
    return o !== -1 && o === i
}
  , Ji = n=>{
    if (!n)
        return null;
    if (ee(n))
        return n;
    let t = n.length;
    if (!Yn(t))
        return null;
    const i = new Array(t);
    for (; t-- > 0; )
        i[t] = n[t];
    return i
}
  , $i = (n=>t=>n && t instanceof n)(typeof Uint8Array < "u" && nt(Uint8Array))
  , Ki = (n,t)=>{
    const o = (n && n[Symbol.iterator]).call(n);
    let a;
    for (; (a = o.next()) && !a.done; ) {
        const r = a.value;
        t.call(n, r[0], r[1])
    }
}
  , Gi = (n,t)=>{
    let i;
    const o = [];
    for (; (i = n.exec(t)) !== null; )
        o.push(i);
    return o
}
  , Xi = H("HTMLFormElement")
  , Yi = n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(i, o, a) {
    return o.toUpperCase() + a
})
  , Ft = (({hasOwnProperty: n})=>(t,i)=>n.call(t, i))(Object.prototype)
  , Qi = H("RegExp")
  , ti = (n,t)=>{
    const i = Object.getOwnPropertyDescriptors(n)
      , o = {};
    le(i, (a,r)=>{
        t(a, r, n) !== !1 && (o[r] = a)
    }
    ),
    Object.defineProperties(n, o)
}
  , Zi = n=>{
    ti(n, (t,i)=>{
        if (W(n) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
            return !1;
        const o = n[i];
        if (!!W(o)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = ()=>{
                throw Error("Can not rewrite read-only method '" + i + "'")
            }
            )
        }
    }
    )
}
  , eo = (n,t)=>{
    const i = {}
      , o = a=>{
        a.forEach(r=>{
            i[r] = !0
        }
        )
    }
    ;
    return ee(n) ? o(n) : o(String(n).split(t)),
    i
}
  , to = ()=>{}
  , no = (n,t)=>(n = +n,
Number.isFinite(n) ? n : t)
  , Fe = "abcdefghijklmnopqrstuvwxyz"
  , Ht = "0123456789"
  , ni = {
    DIGIT: Ht,
    ALPHA: Fe,
    ALPHA_DIGIT: Fe + Fe.toUpperCase() + Ht
}
  , oo = (n=16,t=ni.ALPHA_DIGIT)=>{
    let i = "";
    const {length: o} = t;
    for (; n--; )
        i += t[Math.random() * o | 0];
    return i
}
;
function ro(n) {
    return !!(n && W(n.append) && n[Symbol.toStringTag] === "FormData" && n[Symbol.iterator])
}
const ao = n=>{
    const t = new Array(10)
      , i = (o,a)=>{
        if (ot(o)) {
            if (t.indexOf(o) >= 0)
                return;
            if (!("toJSON"in o)) {
                t[a] = o;
                const r = ee(o) ? [] : {};
                return le(o, (s,l)=>{
                    const d = i(s, a + 1);
                    !se(d) && (r[l] = d)
                }
                ),
                t[a] = void 0,
                r
            }
        }
        return o
    }
    ;
    return i(n, 0)
}
  , f = {
    isArray: ee,
    isArrayBuffer: Xn,
    isBuffer: xi,
    isFormData: Ni,
    isArrayBufferView: Ci,
    isString: Ii,
    isNumber: Yn,
    isBoolean: Oi,
    isObject: ot,
    isPlainObject: fe,
    isUndefined: se,
    isDate: Ri,
    isFile: Pi,
    isBlob: Mi,
    isRegExp: Qi,
    isFunction: W,
    isStream: Bi,
    isURLSearchParams: Fi,
    isTypedArray: $i,
    isFileList: Di,
    forEach: le,
    merge: Ye,
    extend: Ui,
    trim: Hi,
    stripBOM: ji,
    inherits: Vi,
    toFlatObject: Wi,
    kindOf: it,
    kindOfTest: H,
    endsWith: zi,
    toArray: Ji,
    forEachEntry: Ki,
    matchAll: Gi,
    isHTMLForm: Xi,
    hasOwnProperty: Ft,
    hasOwnProp: Ft,
    reduceDescriptors: ti,
    freezeMethods: Zi,
    toObjectSet: eo,
    toCamelCase: Yi,
    noop: to,
    toFiniteNumber: no,
    findKey: Qn,
    global: Zn,
    isContextDefined: ei,
    ALPHABET: ni,
    generateString: oo,
    isSpecCompliantForm: ro,
    toJSONObject: ao
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
const ii = S.prototype
  , oi = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(n=>{
    oi[n] = {
        value: n
    }
}
);
Object.defineProperties(S, oi);
Object.defineProperty(ii, "isAxiosError", {
    value: !0
});
S.from = (n,t,i,o,a,r)=>{
    const s = Object.create(ii);
    return f.toFlatObject(n, s, function(d) {
        return d !== Error.prototype
    }, l=>l !== "isAxiosError"),
    S.call(s, n.message, t, i, o, a),
    s.cause = n,
    s.name = n.name,
    r && Object.assign(s, r),
    s
}
;
const so = null;
function Qe(n) {
    return f.isPlainObject(n) || f.isArray(n)
}
function ri(n) {
    return f.endsWith(n, "[]") ? n.slice(0, -2) : n
}
function Ut(n, t, i) {
    return n ? n.concat(t).map(function(a, r) {
        return a = ri(a),
        !i && r ? "[" + a + "]" : a
    }).join(i ? "." : "") : t
}
function lo(n) {
    return f.isArray(n) && !n.some(Qe)
}
const co = f.toFlatObject(f, {}, null, function(t) {
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
    }, !1, function(h, g) {
        return !f.isUndefined(g[h])
    });
    const o = i.metaTokens
      , a = i.visitor || u
      , r = i.dots
      , s = i.indexes
      , d = (i.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(t);
    if (!f.isFunction(a))
        throw new TypeError("visitor must be a function");
    function c(m) {
        if (m === null)
            return "";
        if (f.isDate(m))
            return m.toISOString();
        if (!d && f.isBlob(m))
            throw new S("Blob is not supported. Use a Buffer instead.");
        return f.isArrayBuffer(m) || f.isTypedArray(m) ? d && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m
    }
    function u(m, h, g) {
        let b = m;
        if (m && !g && typeof m == "object") {
            if (f.endsWith(h, "{}"))
                h = o ? h : h.slice(0, -2),
                m = JSON.stringify(m);
            else if (f.isArray(m) && lo(m) || (f.isFileList(m) || f.endsWith(h, "[]")) && (b = f.toArray(m)))
                return h = ri(h),
                b.forEach(function(_, v) {
                    !(f.isUndefined(_) || _ === null) && t.append(s === !0 ? Ut([h], v, r) : s === null ? h : h + "[]", c(_))
                }),
                !1
        }
        return Qe(m) ? !0 : (t.append(Ut(g, h, r), c(m)),
        !1)
    }
    const p = []
      , w = Object.assign(co, {
        defaultVisitor: u,
        convertValue: c,
        isVisitable: Qe
    });
    function y(m, h) {
        if (!f.isUndefined(m)) {
            if (p.indexOf(m) !== -1)
                throw Error("Circular reference detected in " + h.join("."));
            p.push(m),
            f.forEach(m, function(b, E) {
                (!(f.isUndefined(b) || b === null) && a.call(t, b, f.isString(E) ? E.trim() : E, h, w)) === !0 && y(b, h ? h.concat(E) : [E])
            }),
            p.pop()
        }
    }
    if (!f.isObject(n))
        throw new TypeError("data must be an object");
    return y(n),
    t
}
function jt(n) {
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
function rt(n, t) {
    this._pairs = [],
    n && Ee(n, this, t)
}
const ai = rt.prototype;
ai.append = function(t, i) {
    this._pairs.push([t, i])
}
;
ai.toString = function(t) {
    const i = t ? function(o) {
        return t.call(this, o, jt)
    }
    : jt;
    return this._pairs.map(function(a) {
        return i(a[0]) + "=" + i(a[1])
    }, "").join("&")
}
;
function uo(n) {
    return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function si(n, t, i) {
    if (!t)
        return n;
    const o = i && i.encode || uo
      , a = i && i.serialize;
    let r;
    if (a ? r = a(t, i) : r = f.isURLSearchParams(t) ? t.toString() : new rt(t,i).toString(o),
    r) {
        const s = n.indexOf("#");
        s !== -1 && (n = n.slice(0, s)),
        n += (n.indexOf("?") === -1 ? "?" : "&") + r
    }
    return n
}
class fo {
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
const Vt = fo
  , li = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , mo = typeof URLSearchParams < "u" ? URLSearchParams : rt
  , po = typeof FormData < "u" ? FormData : null
  , yo = typeof Blob < "u" ? Blob : null
  , ho = (()=>{
    let n;
    return typeof navigator < "u" && ((n = navigator.product) === "ReactNative" || n === "NativeScript" || n === "NS") ? !1 : typeof window < "u" && typeof document < "u"
}
)()
  , wo = (()=>typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")()
  , B = {
    isBrowser: !0,
    classes: {
        URLSearchParams: mo,
        FormData: po,
        Blob: yo
    },
    isStandardBrowserEnv: ho,
    isStandardBrowserWebWorkerEnv: wo,
    protocols: ["http", "https", "file", "blob", "url", "data"]
};
function go(n, t) {
    return Ee(n, new B.classes.URLSearchParams, Object.assign({
        visitor: function(i, o, a, r) {
            return B.isNode && f.isBuffer(i) ? (this.append(o, i.toString("base64")),
            !1) : r.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function vo(n) {
    return f.matchAll(/\w+|\[(\w*)]/g, n).map(t=>t[0] === "[]" ? "" : t[1] || t[0])
}
function bo(n) {
    const t = {}
      , i = Object.keys(n);
    let o;
    const a = i.length;
    let r;
    for (o = 0; o < a; o++)
        r = i[o],
        t[r] = n[r];
    return t
}
function ci(n) {
    function t(i, o, a, r) {
        let s = i[r++];
        const l = Number.isFinite(+s)
          , d = r >= i.length;
        return s = !s && f.isArray(a) ? a.length : s,
        d ? (f.hasOwnProp(a, s) ? a[s] = [a[s], o] : a[s] = o,
        !l) : ((!a[s] || !f.isObject(a[s])) && (a[s] = []),
        t(i, o, a[s], r) && f.isArray(a[s]) && (a[s] = bo(a[s])),
        !l)
    }
    if (f.isFormData(n) && f.isFunction(n.entries)) {
        const i = {};
        return f.forEachEntry(n, (o,a)=>{
            t(vo(o), a, i, 0)
        }
        ),
        i
    }
    return null
}
const So = {
    "Content-Type": void 0
};
function ko(n, t, i) {
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
    transitional: li,
    adapter: ["xhr", "http"],
    transformRequest: [function(t, i) {
        const o = i.getContentType() || ""
          , a = o.indexOf("application/json") > -1
          , r = f.isObject(t);
        if (r && f.isHTMLForm(t) && (t = new FormData(t)),
        f.isFormData(t))
            return a && a ? JSON.stringify(ci(t)) : t;
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
                return go(t, this.formSerializer).toString();
            if ((l = f.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
                const d = this.env && this.env.FormData;
                return Ee(l ? {
                    "files[]": t
                } : t, d && new d, this.formSerializer)
            }
        }
        return r || a ? (i.setContentType("application/json", !1),
        ko(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const i = this.transitional || Le.transitional
          , o = i && i.forcedJSONParsing
          , a = this.responseType === "json";
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
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: B.classes.FormData,
        Blob: B.classes.Blob
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
    Le.headers[t] = f.merge(So)
});
const at = Le
  , Eo = f.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , Lo = n=>{
    const t = {};
    let i, o, a;
    return n && n.split(`
`).forEach(function(s) {
        a = s.indexOf(":"),
        i = s.substring(0, a).trim().toLowerCase(),
        o = s.substring(a + 1).trim(),
        !(!i || t[i] && Eo[i]) && (i === "set-cookie" ? t[i] ? t[i].push(o) : t[i] = [o] : t[i] = t[i] ? t[i] + ", " + o : o)
    }),
    t
}
  , Wt = Symbol("internals");
function te(n) {
    return n && String(n).trim().toLowerCase()
}
function me(n) {
    return n === !1 || n == null ? n : f.isArray(n) ? n.map(me) : String(n)
}
function _o(n) {
    const t = Object.create(null)
      , i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let o;
    for (; o = i.exec(n); )
        t[o[1]] = o[2];
    return t
}
function qo(n) {
    return /^[-_a-zA-Z]+$/.test(n.trim())
}
function He(n, t, i, o, a) {
    if (f.isFunction(o))
        return o.call(this, t, i);
    if (a && (t = i),
    !!f.isString(t)) {
        if (f.isString(o))
            return t.indexOf(o) !== -1;
        if (f.isRegExp(o))
            return o.test(t)
    }
}
function Ao(n) {
    return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t,i,o)=>i.toUpperCase() + o)
}
function To(n, t) {
    const i = f.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(o=>{
        Object.defineProperty(n, o + i, {
            value: function(a, r, s) {
                return this[o].call(this, t, a, r, s)
            },
            configurable: !0
        })
    }
    )
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
            const p = f.findKey(a, u);
            (!p || a[p] === void 0 || c === !0 || c === void 0 && a[p] !== !1) && (a[p || d] = me(l))
        }
        const s = (l,d)=>f.forEach(l, (c,u)=>r(c, u, d));
        return f.isPlainObject(t) || t instanceof this.constructor ? s(t, i) : f.isString(t) && (t = t.trim()) && !qo(t) ? s(Lo(t), i) : t != null && r(i, t, o),
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
                    return _o(a);
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
            return !!(o && this[o] !== void 0 && (!i || He(this, this[o], o, i)))
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
                l && (!i || He(o, o[l], l, i)) && (delete o[l],
                a = !0)
            }
        }
        return f.isArray(t) ? t.forEach(r) : r(t),
        a
    }
    clear(t) {
        const i = Object.keys(this);
        let o = i.length
          , a = !1;
        for (; o--; ) {
            const r = i[o];
            (!t || He(this, this[r], r, t, !0)) && (delete this[r],
            a = !0)
        }
        return a
    }
    normalize(t) {
        const i = this
          , o = {};
        return f.forEach(this, (a,r)=>{
            const s = f.findKey(o, r);
            if (s) {
                i[s] = me(a),
                delete i[r];
                return
            }
            const l = t ? Ao(r) : String(r).trim();
            l !== r && delete i[r],
            i[l] = me(a),
            o[l] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const i = Object.create(null);
        return f.forEach(this, (o,a)=>{
            o != null && o !== !1 && (i[a] = t && f.isArray(o) ? o.join(", ") : o)
        }
        ),
        i
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t,i])=>t + ": " + i).join(`
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
        return i.forEach(a=>o.set(a)),
        o
    }
    static accessor(t) {
        const o = (this[Wt] = this[Wt] = {
            accessors: {}
        }).accessors
          , a = this.prototype;
        function r(s) {
            const l = te(s);
            o[l] || (To(a, s),
            o[l] = !0)
        }
        return f.isArray(t) ? t.forEach(r) : r(t),
        this
    }
}
_e.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
f.freezeMethods(_e.prototype);
f.freezeMethods(_e);
const F = _e;
function Ue(n, t) {
    const i = this || at
      , o = t || i
      , a = F.from(o.headers);
    let r = o.data;
    return f.forEach(n, function(l) {
        r = l.call(i, r, a.normalize(), t ? t.status : void 0)
    }),
    a.normalize(),
    r
}
function di(n) {
    return !!(n && n.__CANCEL__)
}
function ce(n, t, i) {
    S.call(this, n == null ? "canceled" : n, S.ERR_CANCELED, t, i),
    this.name = "CanceledError"
}
f.inherits(ce, S, {
    __CANCEL__: !0
});
function xo(n, t, i) {
    const o = i.config.validateStatus;
    !i.status || !o || o(i.status) ? n(i) : t(new S("Request failed with status code " + i.status,[S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4],i.config,i.request,i))
}
const Co = B.isStandardBrowserEnv ? function() {
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
function Io(n) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)
}
function Oo(n, t) {
    return t ? n.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : n
}
function ui(n, t) {
    return n && !Io(t) ? Oo(n, t) : t
}
const Ro = B.isStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent)
      , i = document.createElement("a");
    let o;
    function a(r) {
        let s = r;
        return t && (i.setAttribute("href", s),
        s = i.href),
        i.setAttribute("href", s),
        {
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
function Po(n) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
    return t && t[1] || ""
}
function Mo(n, t) {
    n = n || 10;
    const i = new Array(n)
      , o = new Array(n);
    let a = 0, r = 0, s;
    return t = t !== void 0 ? t : 1e3,
    function(d) {
        const c = Date.now()
          , u = o[r];
        s || (s = c),
        i[a] = d,
        o[a] = c;
        let p = r
          , w = 0;
        for (; p !== a; )
            w += i[p++],
            p = p % n;
        if (a = (a + 1) % n,
        a === r && (r = (r + 1) % n),
        c - s < t)
            return;
        const y = u && c - u;
        return y ? Math.round(w * 1e3 / y) : void 0
    }
}
function zt(n, t) {
    let i = 0;
    const o = Mo(50, 250);
    return a=>{
        const r = a.loaded
          , s = a.lengthComputable ? a.total : void 0
          , l = r - i
          , d = o(l)
          , c = r <= s;
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
const Do = typeof XMLHttpRequest < "u"
  , Bo = Do && function(n) {
    return new Promise(function(i, o) {
        let a = n.data;
        const r = F.from(n.headers).normalize()
          , s = n.responseType;
        let l;
        function d() {
            n.cancelToken && n.cancelToken.unsubscribe(l),
            n.signal && n.signal.removeEventListener("abort", l)
        }
        f.isFormData(a) && (B.isStandardBrowserEnv || B.isStandardBrowserWebWorkerEnv) && r.setContentType(!1);
        let c = new XMLHttpRequest;
        if (n.auth) {
            const y = n.auth.username || ""
              , m = n.auth.password ? unescape(encodeURIComponent(n.auth.password)) : "";
            r.set("Authorization", "Basic " + btoa(y + ":" + m))
        }
        const u = ui(n.baseURL, n.url);
        c.open(n.method.toUpperCase(), si(u, n.params, n.paramsSerializer), !0),
        c.timeout = n.timeout;
        function p() {
            if (!c)
                return;
            const y = F.from("getAllResponseHeaders"in c && c.getAllResponseHeaders())
              , h = {
                data: !s || s === "text" || s === "json" ? c.responseText : c.response,
                status: c.status,
                statusText: c.statusText,
                headers: y,
                config: n,
                request: c
            };
            xo(function(b) {
                i(b),
                d()
            }, function(b) {
                o(b),
                d()
            }, h),
            c = null
        }
        if ("onloadend"in c ? c.onloadend = p : c.onreadystatechange = function() {
            !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(p)
        }
        ,
        c.onabort = function() {
            !c || (o(new S("Request aborted",S.ECONNABORTED,n,c)),
            c = null)
        }
        ,
        c.onerror = function() {
            o(new S("Network Error",S.ERR_NETWORK,n,c)),
            c = null
        }
        ,
        c.ontimeout = function() {
            let m = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
            const h = n.transitional || li;
            n.timeoutErrorMessage && (m = n.timeoutErrorMessage),
            o(new S(m,h.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,n,c)),
            c = null
        }
        ,
        B.isStandardBrowserEnv) {
            const y = (n.withCredentials || Ro(u)) && n.xsrfCookieName && Co.read(n.xsrfCookieName);
            y && r.set(n.xsrfHeaderName, y)
        }
        a === void 0 && r.setContentType(null),
        "setRequestHeader"in c && f.forEach(r.toJSON(), function(m, h) {
            c.setRequestHeader(h, m)
        }),
        f.isUndefined(n.withCredentials) || (c.withCredentials = !!n.withCredentials),
        s && s !== "json" && (c.responseType = n.responseType),
        typeof n.onDownloadProgress == "function" && c.addEventListener("progress", zt(n.onDownloadProgress, !0)),
        typeof n.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", zt(n.onUploadProgress)),
        (n.cancelToken || n.signal) && (l = y=>{
            !c || (o(!y || y.type ? new ce(null,n,c) : y),
            c.abort(),
            c = null)
        }
        ,
        n.cancelToken && n.cancelToken.subscribe(l),
        n.signal && (n.signal.aborted ? l() : n.signal.addEventListener("abort", l)));
        const w = Po(u);
        if (w && B.protocols.indexOf(w) === -1) {
            o(new S("Unsupported protocol " + w + ":",S.ERR_BAD_REQUEST,n));
            return
        }
        c.send(a || null)
    }
    )
}
  , pe = {
    http: so,
    xhr: Bo
};
f.forEach(pe, (n,t)=>{
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
}
);
const No = {
    getAdapter: n=>{
        n = f.isArray(n) ? n : [n];
        const {length: t} = n;
        let i, o;
        for (let a = 0; a < t && (i = n[a],
        !(o = f.isString(i) ? pe[i.toLowerCase()] : i)); a++)
            ;
        if (!o)
            throw o === !1 ? new S(`Adapter ${i} is not supported by the environment`,"ERR_NOT_SUPPORT") : new Error(f.hasOwnProp(pe, i) ? `Adapter '${i}' is not available in the build` : `Unknown adapter '${i}'`);
        if (!f.isFunction(o))
            throw new TypeError("adapter is not a function");
        return o
    }
    ,
    adapters: pe
};
function je(n) {
    if (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
        throw new ce(null,n)
}
function Jt(n) {
    return je(n),
    n.headers = F.from(n.headers),
    n.data = Ue.call(n, n.transformRequest),
    ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1),
    No.getAdapter(n.adapter || at.adapter)(n).then(function(o) {
        return je(n),
        o.data = Ue.call(n, n.transformResponse, o),
        o.headers = F.from(o.headers),
        o
    }, function(o) {
        return di(o) || (je(n),
        o && o.response && (o.response.data = Ue.call(n, n.transformResponse, o.response),
        o.response.headers = F.from(o.response.headers))),
        Promise.reject(o)
    })
}
const $t = n=>n instanceof F ? n.toJSON() : n;
function Z(n, t) {
    t = t || {};
    const i = {};
    function o(c, u, p) {
        return f.isPlainObject(c) && f.isPlainObject(u) ? f.merge.call({
            caseless: p
        }, c, u) : f.isPlainObject(u) ? f.merge({}, u) : f.isArray(u) ? u.slice() : u
    }
    function a(c, u, p) {
        if (f.isUndefined(u)) {
            if (!f.isUndefined(c))
                return o(void 0, c, p)
        } else
            return o(c, u, p)
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
    function l(c, u, p) {
        if (p in t)
            return o(c, u);
        if (p in n)
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
        headers: (c,u)=>a($t(c), $t(u), !0)
    };
    return f.forEach(Object.keys(n).concat(Object.keys(t)), function(u) {
        const p = d[u] || a
          , w = p(n[u], t[u], u);
        f.isUndefined(w) && p !== l || (i[u] = w)
    }),
    i
}
const fi = "1.3.4"
  , st = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n,t)=>{
    st[n] = function(o) {
        return typeof o === n || "a" + (t < 1 ? "n " : " ") + n
    }
}
);
const Kt = {};
st.transitional = function(t, i, o) {
    function a(r, s) {
        return "[Axios v" + fi + "] Transitional option '" + r + "'" + s + (o ? ". " + o : "")
    }
    return (r,s,l)=>{
        if (t === !1)
            throw new S(a(s, " has been removed" + (i ? " in " + i : "")),S.ERR_DEPRECATED);
        return i && !Kt[s] && (Kt[s] = !0,
        console.warn(a(s, " has been deprecated since v" + i + " and will be removed in the near future"))),
        t ? t(r, s, l) : !0
    }
}
;
function Fo(n, t, i) {
    if (typeof n != "object")
        throw new S("options must be an object",S.ERR_BAD_OPTION_VALUE);
    const o = Object.keys(n);
    let a = o.length;
    for (; a-- > 0; ) {
        const r = o[a]
          , s = t[r];
        if (s) {
            const l = n[r]
              , d = l === void 0 || s(l, r, n);
            if (d !== !0)
                throw new S("option " + r + " must be " + d,S.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (i !== !0)
            throw new S("Unknown option " + r,S.ERR_BAD_OPTION)
    }
}
const Ze = {
    assertOptions: Fo,
    validators: st
}
  , U = Ze.validators;
class ge {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new Vt,
            response: new Vt
        }
    }
    request(t, i) {
        typeof t == "string" ? (i = i || {},
        i.url = t) : i = t || {},
        i = Z(this.defaults, i);
        const {transitional: o, paramsSerializer: a, headers: r} = i;
        o !== void 0 && Ze.assertOptions(o, {
            silentJSONParsing: U.transitional(U.boolean),
            forcedJSONParsing: U.transitional(U.boolean),
            clarifyTimeoutError: U.transitional(U.boolean)
        }, !1),
        a !== void 0 && Ze.assertOptions(a, {
            encode: U.function,
            serialize: U.function
        }, !0),
        i.method = (i.method || this.defaults.method || "get").toLowerCase();
        let s;
        s = r && f.merge(r.common, r[i.method]),
        s && f.forEach(["delete", "get", "head", "post", "put", "patch", "common"], m=>{
            delete r[m]
        }
        ),
        i.headers = F.concat(s, r);
        const l = [];
        let d = !0;
        this.interceptors.request.forEach(function(h) {
            typeof h.runWhen == "function" && h.runWhen(i) === !1 || (d = d && h.synchronous,
            l.unshift(h.fulfilled, h.rejected))
        });
        const c = [];
        this.interceptors.response.forEach(function(h) {
            c.push(h.fulfilled, h.rejected)
        });
        let u, p = 0, w;
        if (!d) {
            const m = [Jt.bind(this), void 0];
            for (m.unshift.apply(m, l),
            m.push.apply(m, c),
            w = m.length,
            u = Promise.resolve(i); p < w; )
                u = u.then(m[p++], m[p++]);
            return u
        }
        w = l.length;
        let y = i;
        for (p = 0; p < w; ) {
            const m = l[p++]
              , h = l[p++];
            try {
                y = m(y)
            } catch (g) {
                h.call(this, g);
                break
            }
        }
        try {
            u = Jt.call(this, y)
        } catch (m) {
            return Promise.reject(m)
        }
        for (p = 0,
        w = c.length; p < w; )
            u = u.then(c[p++], c[p++]);
        return u
    }
    getUri(t) {
        t = Z(this.defaults, t);
        const i = ui(t.baseURL, t.url);
        return si(i, t.params, t.paramsSerializer)
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
const ye = ge;
class lt {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let i;
        this.promise = new Promise(function(r) {
            i = r
        }
        );
        const o = this;
        this.promise.then(a=>{
            if (!o._listeners)
                return;
            let r = o._listeners.length;
            for (; r-- > 0; )
                o._listeners[r](a);
            o._listeners = null
        }
        ),
        this.promise.then = a=>{
            let r;
            const s = new Promise(l=>{
                o.subscribe(l),
                r = l
            }
            ).then(a);
            return s.cancel = function() {
                o.unsubscribe(r)
            }
            ,
            s
        }
        ,
        t(function(r, s, l) {
            o.reason || (o.reason = new ce(r,s,l),
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
            token: new lt(function(a) {
                t = a
            }
            ),
            cancel: t
        }
    }
}
const Ho = lt;
function Uo(n) {
    return function(i) {
        return n.apply(null, i)
    }
}
function jo(n) {
    return f.isObject(n) && n.isAxiosError === !0
}
const et = {
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
Object.entries(et).forEach(([n,t])=>{
    et[t] = n
}
);
const Vo = et;
function mi(n) {
    const t = new ye(n)
      , i = Kn(ye.prototype.request, t);
    return f.extend(i, ye.prototype, t, {
        allOwnKeys: !0
    }),
    f.extend(i, t, null, {
        allOwnKeys: !0
    }),
    i.create = function(a) {
        return mi(Z(n, a))
    }
    ,
    i
}
const I = mi(at);
I.Axios = ye;
I.CanceledError = ce;
I.CancelToken = Ho;
I.isCancel = di;
I.VERSION = fi;
I.toFormData = Ee;
I.AxiosError = S;
I.Cancel = I.CanceledError;
I.all = function(t) {
    return Promise.all(t)
}
;
I.spread = Uo;
I.isAxiosError = jo;
I.mergeConfig = Z;
I.AxiosHeaders = F;
I.formToJSON = n=>ci(f.isHTMLForm(n) ? new FormData(n) : n);
I.HttpStatusCode = Vo;
I.default = I;
const tt = I;
var V = 1;
window.MavNextPage = n=>{
    if (n.classList.contains("paginate")) {
        V++;
        var t = window.kly.nextPagingPath.replace("{{n}}", V);
        MavGetNews(t),
        n.classList.remove("paginate")
    }
}
;
window.MavNextPageV2 = n=>{
    var i;
    if (n.classList.contains("paginate")) {
        V == 1 && (window.kly.nextPagingURL.indexOf("{{n}}") < 0 && (window.kly.nextPagingURL += "{{n}}"),
        (i = window == null ? void 0 : window.kly) != null && i.currentPageNumber && (V = window.kly.currentPageNumber)),
        V++;
        var t = window.kly.nextPagingURL;
        t = t.replace("{{n}}", V),
        MavGetNewsV2(t),
        n.classList.remove("paginate")
    }
}
;
window.MavGetNews = n=>{
    var i, o, a, r;
    if ((i = window.kly) == null ? void 0 : i.nextPagingPath) {
        if ((((o = window.kly) == null ? void 0 : o.nextPagingMethod) || "get").toLowerCase() == "post")
            var t = tt.post(n, (r = (a = window.kly) == null ? void 0 : a.nextPagingParams) != null ? r : null, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            });
        else
            var t = tt.get(n, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            });
        t.then(function(s) {
            var u, p;
            if (s.status == 200 && !s.data.empty) {
                var l = document.querySelectorAll("section[data-section]:not([data-theme=ads])").length;
                if (/^\s*(\{|\[)/.test(s.data)) {
                    var d = ((u = s.data) == null ? void 0 : u.html) || "";
                    window.kly.nextPagingPath = ((p = s == null ? void 0 : s.data) == null ? void 0 : p.next_url) || null
                } else
                    var d = s.data;
                (window == null ? void 0 : window.mavEarlyPaging) && document.getElementById("mvk-feed-early-ajax") ? (document.getElementById("mvk-feed-early-ajax").insertAdjacentHTML("beforebegin", d),
                document.getElementById("mvk-feed-early-ajax").remove()) : document.getElementById("feed-paging").insertAdjacentHTML("beforebegin", d);
                var c = document.querySelectorAll("section[data-section]:not([data-theme=ads])")[l];
                MavInitSections(),
                MavTrackerPageView(c),
                MavRemoveAnimateInIOS(),
                document.dispatchEvent(new CustomEvent("maverick:reinit",{
                    detail: {
                        page: V
                    }
                }))
            }
        }).catch(function(s) {
            console.log(s)
        })
    }
}
;
window.MavGetNewsV2 = n=>{
    var i, o, a;
    if ((i = window.kly) == null ? void 0 : i.nextPagingURL) {
        var t = tt.post(n, JSON.stringify({
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
                document.dispatchEvent(new CustomEvent("maverick:reinit",{
                    detail: {
                        page: V
                    }
                }))
            }
        }).catch(function(r) {
            console.log(r)
        })
    }
}
;
var Fn, Hn;
if ((window == null ? void 0 : window.mavEarlyPaging) && document.getElementById("mvk-feed-early-ajax") && ((Fn = window == null ? void 0 : window.kly) == null ? void 0 : Fn.pageType) == "ReadPage" && ((Hn = window == null ? void 0 : window.kly) == null ? void 0 : Hn.nextPagingPath)) {
    var Wo = window.kly.nextPagingPath;
    MavGetNews(Wo)
}
window.kly = window.kly || [];
window.io = window.io || io || null;
var Gt = null;
window.MaverickLabInVisibleSection = (n,t)=>{
    typeof MavCustomInVisibleSection == "function" && MavCustomInVisibleSection(n.target, t)
}
;
window.MaverickLabVisibleSection = (n,t,i)=>{
    var o, a, r, s, l, d, c, u;
    Gt != (((o = n.target.dataset) == null ? void 0 : o.sid) || "") && ((a = window.kly) != null && a.debug && console.log("MaverickLabVisibleSection:" + i),
    MavTrackerScreenView(n.target),
    MavOnScreenView(n.target),
    MavRemoveAnimateInIOS(),
    typeof MavMakingAdsRequest == "function" && MavMakingAdsRequest(n.target, t),
    typeof MavCustomVisibleSection == "function" && MavCustomVisibleSection(n.target, t, i),
    typeof ((r = window.kly) == null ? void 0 : r.nextPagingParams) < "u",
    (s = window.kly) == null || s.nextPagingURL,
    ((l = window.kly) == null ? void 0 : l.nextPagingParams) ? MavNextPageV2(n.target) : (typeof ((d = window.kly) == null ? void 0 : d.nextPagingPath) < "u",
    (c = window.kly) != null && c.nextPagingPath && MavNextPage(n.target)),
    document.dispatchEvent(new CustomEvent("maverick:visible_section",{
        detail: {
            section: n.target
        }
    })),
    MavEndOfContentEventInformation(n.target),
    Gt = ((u = n.target.dataset) == null ? void 0 : u.sid) || "")
}
;
let Xt = !1
  , Yt = !1;
window.MavEndOfContentEventInformation = n=>{
    var t, i, o, a, r, s, l, d, c, u, p, w, y;
    ((t = window == null ? void 0 : window.kly) == null ? void 0 : t.pageType) == "InformationPage" && ((o = (i = window.kly) == null ? void 0 : i.gtm) == null ? void 0 : o.totalFeedItem) && (Yt || parseInt((a = n == null ? void 0 : n.dataset) == null ? void 0 : a.list) == 3 && (document.dispatchEvent(new CustomEvent("maverick:opened_content",{
        detail: {
            id: (s = (r = window == null ? void 0 : window.kly) == null ? void 0 : r.gtm) == null ? void 0 : s.articleId,
            number: parseInt((l = n == null ? void 0 : n.dataset) == null ? void 0 : l.list),
            type: "InformationPage",
            section: n
        }
    })),
    Yt = !0),
    Xt || parseInt((d = n == null ? void 0 : n.dataset) == null ? void 0 : d.list) == parseInt((u = (c = window.kly) == null ? void 0 : c.gtm) == null ? void 0 : u.totalFeedItem) && (document.dispatchEvent(new CustomEvent("maverick:end_of_content",{
        detail: {
            id: (w = (p = window == null ? void 0 : window.kly) == null ? void 0 : p.gtm) == null ? void 0 : w.articleId,
            number: parseInt((y = n == null ? void 0 : n.dataset) == null ? void 0 : y.list),
            type: "InformationPage",
            section: n
        }
    })),
    Xt = !0))
}
;
window.dataLayer = window.dataLayer || [];
let ct = new Date, Y, ve;
window.addEventListener("message", ({data: n})=>{
    if (document.querySelectorAll("section.is-visible ins").length > 0) {
        let t, i = document.querySelectorAll("section.is-visible ins")[0].dataset;
        n.event === "vidio.playback.ready" && (Y = new Date,
        t = Y - ct,
        be("video_player_ready", "vidio_player", i, t)),
        n.event === "vidio.playback.playing" && (ve = new Date,
        t = ve - Y,
        be("video_playback_playing", "vidio_player", i, t))
    }
}
);
var j = 1
  , Q = null;
window.MavTrackerScreenView = (n,t)=>{
    var a, r, s, l, d, c, u, p, w, y, m, h, g, b, E, _, v, A, L, T, O, P;
    if (ct = new Date,
    ((a = n.dataset) == null ? void 0 : a.theme) != "ads" && n.querySelectorAll("ins").length && n.classList.contains("is-visible")) {
        var i = n.querySelectorAll("ins")[0].dataset
          , o = n == null ? void 0 : n.dataset;
        if (((r = window == null ? void 0 : window.kly) == null ? void 0 : r.pageType) == "InformationPage" || ((s = window == null ? void 0 : window.kly) == null ? void 0 : s.pageType) == "QuranPage") {
            let x = new URL(window.location.href);
            x.searchParams.delete("screen"),
            x = x + (x.href.indexOf("?") > 0 || x.hostname.indexOf("?") > 0 ? "&" : "?") + "screen=" + (i.position || 0),
            window.history.replaceState((i == null ? void 0 : i.id) || 0, i.title || "untitled", x)
        }
        (l = window.kly) != null && l.debug && console.log("MavTrackerScreenView:" + j + ", lastSent:" + Q + ", position: " + (i == null ? void 0 : i.position));
        let R = null;
        (o == null ? void 0 : o.section) == "ais" && (document.title = i.title,
        window.history.replaceState((i == null ? void 0 : i.id) || 0, i.title || "untitled", i.aisUrl),
        R = "AISPage",
        t = "feedAIS"),
        Q != (i == null ? void 0 : i.position) && (window.dataLayer.push({
            event: "screen_view",
            virtual_screenview_path: window.location.href.split(window.location.hostname)[1],
            articleId: (i == null ? void 0 : i.id) || 0,
            contentTitle: i.title || "untitled",
            type: t || (i == null ? void 0 : i.sectionType) || (o == null ? void 0 : o.insType) || ((d = kly == null ? void 0 : kly.gtm) == null ? void 0 : d.type) || "feed",
            channel: ((c = kly == null ? void 0 : kly.gtm) == null ? void 0 : c.subCategory) || "unset",
            category: R || ((u = kly == null ? void 0 : kly.gtm) == null ? void 0 : u.category) || "feed",
            subCategory: (i == null ? void 0 : i.category) || "",
            pageType: R || ((p = window.kly) == null ? void 0 : p.pageType) || "",
            authors: (i == null ? void 0 : i.authors) || "unset",
            editors: (i == null ? void 0 : i.authors) || "unset",
            reporters: (i == null ? void 0 : i.reporters) || "unset",
            publicationDate: (i == null ? void 0 : i.publishedDate) || "",
            publicationTime: (i == null ? void 0 : i.publishedTime) || "",
            templateId: (o == null ? void 0 : o.templateId) || "",
            templateName: o == null ? void 0 : o.template,
            position: (i == null ? void 0 : i.position) || 0,
            keyword: ((y = (w = window.kly) == null ? void 0 : w.gtm) == null ? void 0 : y.keyword) || "",
            tag: (i == null ? void 0 : i.tagNames) || ((h = (m = window.kly) == null ? void 0 : m.gtm) == null ? void 0 : h.tag) || "",
            totalFeedItem: ((b = (g = window.kly) == null ? void 0 : g.gtm) == null ? void 0 : b.totalFeedItem) || 0,
            scroll_step: j || 0,
            isSEO: (i == null ? void 0 : i.identify) == "timeless" ? !0 : ((_ = (E = window.kly) == null ? void 0 : E.gtm) == null ? void 0 : _.isSEO) || !1,
            content_ai: ((A = (v = window.kly) == null ? void 0 : v.gtm) == null ? void 0 : A.content_ai) || 0,
            related_system: ((L = window == null ? void 0 : window.kly) == null ? void 0 : L.related_system) || "unset",
            interactionType: "scroll"
        }),
        j++,
        Q = (i == null ? void 0 : i.position) || 0)
    } else if (((T = n.dataset) == null ? void 0 : T.theme) == "ads") {
        var o = n == null ? void 0 : n.dataset;
        (O = window.kly) != null && O.debug && console.log("MavTrackerAdsView:" + j),
        window.dataLayer.push({
            event: "ads_view",
            type: "ads",
            pageType: ((P = window.kly) == null ? void 0 : P.pageType) || "",
            position: (o == null ? void 0 : o.adsPosition) || 0,
            scroll_step: j || 0
        }),
        j++
    }
}
;
var Qt = []
  , Ve = [];
document.addEventListener("maverick:ais.event", function(n) {
    var i, o, a, r, s, l, d, c, u, p;
    if (n.detail.state == "slideChange") {
        var t = (i = document.querySelector("section.is-visible")) == null ? void 0 : i.dataset;
        Ve[t == null ? void 0 : t.list] = (o = Ve[t == null ? void 0 : t.list]) != null ? o : 1,
        Ve[t == null ? void 0 : t.list] += 1,
        q("detail_AIS", null, ((r = (a = n == null ? void 0 : n.detail) == null ? void 0 : a.element) == null ? void 0 : r.activeIndex) + 1),
        (d = (l = (s = n == null ? void 0 : n.detail) == null ? void 0 : s.element) == null ? void 0 : l.isEnd) != null && d && ((c = Qt[t == null ? void 0 : t.list]) != null && c || (q("completion_reading", null, ((p = (u = n == null ? void 0 : n.detail) == null ? void 0 : u.element) == null ? void 0 : p.activeIndex) + 1),
        Qt[(t == null ? void 0 : t.list) || 0] = !0))
    }
});
window.MavTrackerPageView = n=>{
    var o, a, r;
    if (n && n.querySelectorAll("ins").length) {
        var t = n.querySelectorAll("ins")[0].dataset
          , i = n == null ? void 0 : n.dataset;
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
}
;
let pi = !1
  , We = document.querySelector(".btn--readarticle");
We && (We.offsetTop,
We.addEventListener("click", n=>{
    var i, o, a, r, s, l, d, c, u, p, w, y, m, h, g, b, E;
    var t = n.target.closest("section").dataset;
    t != null && t.templateId && (window.dataLayer.push({
        event: "click",
        feature_name: "read_more",
        feature_location: "bottom-center",
        feature_position: (t == null ? void 0 : t.list) || 0,
        articleId: ((o = (i = window.kly) == null ? void 0 : i.article) == null ? void 0 : o.id) || ((r = (a = window.kly) == null ? void 0 : a.gtm) == null ? void 0 : r.articleId) || 0,
        articleTitle: ((l = (s = window.kly) == null ? void 0 : s.article) == null ? void 0 : l.title) || ((c = (d = window.kly) == null ? void 0 : d.gtm) == null ? void 0 : c.articleTitle) || "untitled",
        type: ((u = kly == null ? void 0 : kly.gtm) == null ? void 0 : u.type) || "feed",
        authors: ((w = (p = window.kly.gtm) == null ? void 0 : p.authors) == null ? void 0 : w.names) || "unset",
        editors: ((m = (y = window.kly.gtm) == null ? void 0 : y.authors) == null ? void 0 : m.names) || "unset",
        publicationDate: ((h = window.kly.gtm) == null ? void 0 : h.publicationDate) || "",
        publicationTime: ((g = window.kly.gtm) == null ? void 0 : g.publicationTime) || "",
        template_id: (t == null ? void 0 : t.templateId) || 0,
        template_name: (t == null ? void 0 : t.template) || 0
    }),
    pi = !0,
    document.dispatchEvent(new CustomEvent("maverick:opened_content",{
        detail: {
            id: (E = (b = window == null ? void 0 : window.kly) == null ? void 0 : b.gtm) == null ? void 0 : E.articleId,
            number: parseInt((t == null ? void 0 : t.list) || 0),
            type: "ReadPage",
            section: t
        }
    })))
}
));
let Zt = document.querySelector(".btn--skiparticle");
Zt && Zt.addEventListener("click", ()=>{
    var t, i, o, a, r, s, l, d, c, u, p, w, y, m, h;
    var n = document.querySelector("section.is-visible").dataset;
    n != null && n.templateId && window.dataLayer.push({
        event: "click",
        feature_name: "close_read_more",
        feature_location: "bottom-right",
        feature_position: (n == null ? void 0 : n.list) || 0,
        articleId: ((i = (t = window.kly) == null ? void 0 : t.article) == null ? void 0 : i.id) || ((a = (o = window.kly) == null ? void 0 : o.gtm) == null ? void 0 : a.articleId) || 0,
        articleTitle: ((s = (r = window.kly) == null ? void 0 : r.article) == null ? void 0 : s.title) || ((d = (l = window.kly) == null ? void 0 : l.gtm) == null ? void 0 : d.articleTitle) || "untitled",
        type: ((c = kly == null ? void 0 : kly.gtm) == null ? void 0 : c.type) || "feed",
        authors: ((p = (u = window.kly.gtm) == null ? void 0 : u.authors) == null ? void 0 : p.names) || "unset",
        editors: ((y = (w = window.kly.gtm) == null ? void 0 : w.authors) == null ? void 0 : y.names) || "unset",
        publicationDate: ((m = window.kly.gtm) == null ? void 0 : m.publicationDate) || "",
        publicationTime: ((h = window.kly.gtm) == null ? void 0 : h.publicationTime) || "",
        template_id: (n == null ? void 0 : n.templateId) || 0,
        template_name: (n == null ? void 0 : n.template) || 0
    })
}
);
let en = document.querySelector(".btn--followChannel");
en && en.addEventListener("click", ()=>{
    var n = document.querySelector("section.is-visible").dataset;
    n != null && n.templateId && window.dataLayer.push({
        event: "click",
        feature_name: "wa_channel",
        feature_location: "top",
        feature_position: (n == null ? void 0 : n.list) || 0
    })
}
);
let tn = document.querySelector(".btn--share");
tn && tn.addEventListener("click", ()=>{
    q("share")
}
);
let nn = document.querySelectorAll(".box-list--topic a");
nn && nn.forEach(function(n, t) {
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
let on = document.querySelector(".header-stickyBottom .btn--home");
on && on.addEventListener("click", ()=>{
    q("icon_home")
}
);
let rn = document.querySelector(".header-stickyBottom .btn--video");
rn && rn.addEventListener("click", ()=>{
    q("icon_video")
}
);
let an = document.querySelector(".header-stickyBottom  .btn--summary");
an && an.addEventListener("click", ()=>{
    q("inti_berita")
}
);
let sn = document.querySelector(".header-stickyBottom .btn--menu");
sn && sn.addEventListener("click", ()=>{
    q("main_menu")
}
);
let ln = document.querySelector(".header-sticky .btn--summary");
ln && ln.addEventListener("click", ()=>{
    q("inti_berita")
}
);
let cn = document.querySelector(".header-sticky .btn--menu");
cn && cn.addEventListener("click", ()=>{
    q("main_menu")
}
);
let K = document.querySelector(".wimvk--fyp-inner-dynamic-expanded-click");
K && K.addEventListener("click", ()=>{
    var n;
    q("content_break", "InformationPage", null, {
        type: "content_break_PopupChannelPage",
        feature_link: K.getAttribute("href"),
        feature_caption: (n = K.querySelector(".label-caption")) == null ? void 0 : n.textContent
    })
}
);
let dn = document.querySelector(".wimvk--fyp-inner-dynamic-close");
dn && dn.addEventListener("click", ()=>{
    var n;
    q("content_break", "InformationPage", null, {
        type: "content_break_PopupChannelPage_close",
        feature_link: K.getAttribute("href"),
        feature_caption: (n = K.querySelector(".label-caption")) == null ? void 0 : n.textContent
    })
}
);
document.addEventListener("maverick:contentBreakPopup", function(n) {
    var o, a, r, s, l, d, c, u, p, w, y, m, h, g, b, E, _, v, A, L, T;
    if ((o = window.kly) != null && o.debug && console.log("init tracker contentBreakPopup"),
    ((a = n.detail) == null ? void 0 : a.state) == "open") {
        (r = window.kly) != null && r.debug && console.log("view_content_break_PopupChannelPage");
        var t = (s = n.detail) == null ? void 0 : s.section.querySelectorAll("ins")[0].dataset
          , i = (d = (l = n.detail) == null ? void 0 : l.section) == null ? void 0 : d.dataset;
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
            category: ((p = kly == null ? void 0 : kly.gtm) == null ? void 0 : p.category) || "feed",
            subCategory: (t == null ? void 0 : t.category) || "",
            pageType: ((w = window.kly) == null ? void 0 : w.pageType) || "",
            authors: (t == null ? void 0 : t.authors) || "unset",
            editors: (t == null ? void 0 : t.authors) || "unset",
            reporters: (t == null ? void 0 : t.reporters) || "unset",
            publicationDate: (t == null ? void 0 : t.publishedDate) || "",
            publicationTime: (t == null ? void 0 : t.publishedTime) || "",
            templateId: (i == null ? void 0 : i.templateId) || "",
            templateName: i == null ? void 0 : i.template,
            position: (t == null ? void 0 : t.position) || 0,
            keyword: ((m = (y = window.kly) == null ? void 0 : y.gtm) == null ? void 0 : m.keyword) || "",
            tag: (t == null ? void 0 : t.tagNames) || ((g = (h = window.kly) == null ? void 0 : h.gtm) == null ? void 0 : g.tag) || "",
            totalFeedItem: ((E = (b = window.kly) == null ? void 0 : b.gtm) == null ? void 0 : E.totalFeedItem) || 0,
            scroll_step: j || 0,
            isSEO: (t == null ? void 0 : t.identify) == "timeless" ? !0 : ((v = (_ = window.kly) == null ? void 0 : _.gtm) == null ? void 0 : v.isSEO) || !1,
            content_ai: ((L = (A = window.kly) == null ? void 0 : A.gtm) == null ? void 0 : L.content_ai) || 0,
            related_system: ((T = window == null ? void 0 : window.kly) == null ? void 0 : T.related_system) || "unset"
        })
    }
});
let un = document.querySelector(".btn--returnpage");
un && un.addEventListener("click", ()=>{
    q("icon_back")
}
);
let fn = document.querySelector(".wimvk--fyp-next");
fn && fn.addEventListener("click", ()=>{
    var n;
    q("for_you_skip", ((n = window == null ? void 0 : window.kly) == null ? void 0 : n.pageType) || "unset", "button_skip")
}
);
let mn = document.querySelector(".wimvk--fyp-close");
mn && mn.addEventListener("click", ()=>{
    var n;
    q("for_you_skip", ((n = window == null ? void 0 : window.kly) == null ? void 0 : n.pageType) || "unset", "icon_close")
}
);
let pn = document.querySelector(".wimvk--fyp-link");
pn && pn.addEventListener("click", ()=>{
    var n;
    q("for_you_cta", ((n = window == null ? void 0 : window.kly) == null ? void 0 : n.pageType) || "unset", "button_cta")
}
);
let yn = document.querySelector(".header-sticky .btn--home");
yn && yn.addEventListener("click", ()=>{
    q("icon_home")
}
);
let hn = document.querySelector(".btn--page-prev");
hn && hn.addEventListener("click", ()=>{
    q("icon_arrow_up")
}
);
let wn = document.querySelector(".btn--page-next");
wn && wn.addEventListener("click", ()=>{
    q("icon_arrow_down")
}
);
let gn = document.querySelector(".btn--infoScrollarticle");
gn && gn.addEventListener("click", ()=>{
    var t, i, o, a, r, s, l, d, c, u, p, w, y, m, h;
    var n = document.querySelector("section.is-visible").dataset;
    n != null && n.templateId && window.dataLayer.push({
        event: "click",
        feature_name: "icon_arrow_down",
        feature_location: "feed",
        feature_position: (n == null ? void 0 : n.list) || 0,
        articleId: ((i = (t = window.kly) == null ? void 0 : t.article) == null ? void 0 : i.id) || ((a = (o = window.kly) == null ? void 0 : o.gtm) == null ? void 0 : a.articleId) || 0,
        articleTitle: ((s = (r = window.kly) == null ? void 0 : r.article) == null ? void 0 : s.title) || ((d = (l = window.kly) == null ? void 0 : l.gtm) == null ? void 0 : d.articleTitle) || "untitled",
        type: ((c = kly == null ? void 0 : kly.gtm) == null ? void 0 : c.type) || "feed",
        authors: ((p = (u = window.kly.gtm) == null ? void 0 : u.authors) == null ? void 0 : p.names) || "unset",
        editors: ((y = (w = window.kly.gtm) == null ? void 0 : w.authors) == null ? void 0 : y.names) || "unset",
        publicationDate: ((m = window.kly.gtm) == null ? void 0 : m.publicationDate) || "",
        publicationTime: ((h = window.kly.gtm) == null ? void 0 : h.publicationTime) || "",
        template_id: (n == null ? void 0 : n.templateId) || 0,
        template_name: (n == null ? void 0 : n.template) || 0
    })
}
);
document.addEventListener("click", n=>{
    var a, r;
    let t = n.target.closest("section")
      , i = (r = (a = t == null ? void 0 : t.dataset) == null ? void 0 : a.section) != null ? r : null;
    if (n.target.classList.contains("btn--link"))
        q("select_item");
    else if (i == "ais") {
        let s = n.target.closest("section").querySelector(".swiper-slide-active");
        for (var o = 1; (s = s.previousElementSibling) != null; )
            ++o;
        index = o,
        q("detail_AIS", null, index)
    } else
        n.target.closest('section[data-tracking="mav-click"]') && q("select_item")
}
);
let vn = document.querySelectorAll(".header-menu-body ul>.nav-item>a");
vn && vn.forEach(function(n, t) {
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
let bn = document.querySelectorAll(".main-aside .box-list--related > .box-list-item > a");
bn && bn.forEach(function(n, t) {
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
let Sn = document.querySelectorAll(".main-aside .box-list--popular > .box-list-item > a");
Sn && Sn.forEach(function(n, t) {
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
let zo = document.querySelectorAll("div.box[data-location]");
zo && document.addEventListener("click", n=>{
    var i, o, a, r, s, l, d, c, u, p, w, y, m;
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
        editors: ((p = (u = window.kly.gtm) == null ? void 0 : u.authors) == null ? void 0 : p.names) || "unset",
        reporters: ((w = window.kly.gtm) == null ? void 0 : w.reporters) || "unset",
        publicationDate: ((y = window.kly.gtm) == null ? void 0 : y.publicationDate) || "unset",
        publicationTime: ((m = window.kly.gtm) == null ? void 0 : m.publicationTime) || "unset",
        feature_link: n.target.getAttribute("href"),
        feature_caption: n.target.textContent,
        template_id: (t == null ? void 0 : t.templateId) || 0,
        template_name: (t == null ? void 0 : t.template) || 0
    })
}
);
let Jo = document.querySelectorAll("section[data-section=content-break]");
Jo && document.addEventListener("click", n=>{
    var l, d, c, u, p, w, y, m, h, g, b, E, _, v, A, L, T, O, P, R, x, C, M;
    if (n.target.closest("section[data-section=content-break] .suggest-list-item")) {
        var t = (l = document.querySelector("section.is-visible")) == null ? void 0 : l.dataset
          , i = document.querySelector("section.is-visible").querySelectorAll("ins")[0].dataset
          , o = n.target.closest(".suggest-list-item")
          , a = o.querySelector("a")
          , r = null
          , s = null;
        a && a.getAttribute("aria-label") && !((c = (d = window.kly) == null ? void 0 : d.gtm) == null ? void 0 : c.articleId) && (r = qe(a.getAttribute("href")),
        s = a.getAttribute("aria-label")),
        window.dataLayer.push({
            event: "click",
            feature_name: "content_break",
            feature_location: ((p = (u = window.kly) == null ? void 0 : u.gtm) == null ? void 0 : p.articleId) ? "content-break-4" : ((w = kly == null ? void 0 : kly.gtm) == null ? void 0 : w.category) || "unset",
            feature_position: (i == null ? void 0 : i.position) || 0,
            articleID: r || ((m = (y = window.kly) == null ? void 0 : y.gtm) == null ? void 0 : m.articleId) || "unset",
            articleTitle: s || ((g = (h = window.kly) == null ? void 0 : h.gtm) == null ? void 0 : g.articleTitle) || ((b = a == null ? void 0 : a.querySelector(".article-title")) == null ? void 0 : b.textContent) || "unset",
            channel: ((_ = (E = window.kly) == null ? void 0 : E.gtm) == null ? void 0 : _.subCategory) || "unset",
            authors: (i == null ? void 0 : i.authors) || ((A = (v = window.kly.gtm) == null ? void 0 : v.authors) == null ? void 0 : A.names) || "unset",
            editors: (i == null ? void 0 : i.authors) || ((T = (L = window.kly.gtm) == null ? void 0 : L.authors) == null ? void 0 : T.names) || "unset",
            reporters: (i == null ? void 0 : i.reporters) || ((O = window.kly.gtm) == null ? void 0 : O.reporters) || "unset",
            publicationDate: (i == null ? void 0 : i.publishedDate) || ((P = window.kly.gtm) == null ? void 0 : P.publicationDate) || "unset",
            publicationTime: (i == null ? void 0 : i.publishedTime) || ((R = window.kly.gtm) == null ? void 0 : R.publicationTime) || "unset",
            feature_link: (a == null ? void 0 : a.getAttribute("href")) || "#",
            feature_caption: (a == null ? void 0 : a.getAttribute("aria-label")) || ((x = a == null ? void 0 : a.querySelector(".article-title")) == null ? void 0 : x.textContent) || "unset",
            subCategory: ((M = (C = window == null ? void 0 : window.kly) == null ? void 0 : C.gtm) == null ? void 0 : M.subCategory) || "unset",
            template_id: (t == null ? void 0 : t.templateId) || 0,
            template_name: (t == null ? void 0 : t.template) || 0
        })
    }
}
);
let kn = document.querySelectorAll(".switchTheme-option > .switchTheme-option-item");
kn && kn.forEach(function(n, t) {
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
let En = document.querySelector(".header-menu-foot .form-search");
En && En.addEventListener("submit", function(n) {
    var t = n.target.querySelector('input[name="q"]').value;
    t = t.trim(),
    window.dataLayer.push({
        event: "click",
        feature_name: "search_bar",
        feature_location: "left_sidebar",
        feature_position: t
    })
});
let ze = document.querySelector(".section--dtparablock .section-body")
  , Ln = !1;
var Un, jn;
ze && ((jn = (Un = window.kly) == null ? void 0 : Un.gtm) == null ? void 0 : jn.articleId) && document.querySelector(".main-body").addEventListener("scroll", n=>{
    var i, o, a, r, s, l, d, c, u, p, w, y, m, h, g, b, E, _, v, A, L, T;
    if (pi && ze.getBoundingClientRect().top <= (ze.clientHeight - screen.height) * -1) {
        var t = document.querySelector("section.is-visible").dataset;
        Ln || (window.dataLayer.push({
            event: "click",
            feature_name: "completion_reading",
            feature_location: "detail-article",
            feature_position: (t == null ? void 0 : t.list) || 0,
            articleId: ((o = (i = window.kly) == null ? void 0 : i.article) == null ? void 0 : o.id) || ((r = (a = window.kly) == null ? void 0 : a.gtm) == null ? void 0 : r.articleId) || 0,
            contentTitle: ((l = (s = window.kly) == null ? void 0 : s.article) == null ? void 0 : l.title) || ((c = (d = window.kly) == null ? void 0 : d.gtm) == null ? void 0 : c.articleTitle) || "untitled",
            type: ((u = kly == null ? void 0 : kly.gtm) == null ? void 0 : u.type) || "feed",
            authors: ((w = (p = window.kly.gtm) == null ? void 0 : p.authors) == null ? void 0 : w.names) || "unset",
            editors: ((m = (y = window.kly.gtm) == null ? void 0 : y.authors) == null ? void 0 : m.names) || "unset",
            publicationDate: ((h = window.kly.gtm) == null ? void 0 : h.publicationDate) || "",
            publicationTime: ((g = window.kly.gtm) == null ? void 0 : g.publicationTime) || "",
            template_id: (t == null ? void 0 : t.templateId) || 0,
            template_name: (t == null ? void 0 : t.template) || 0,
            subCategory: (b = window.kly.gtm) == null ? void 0 : b.subCategory,
            category: (E = window.kly.gtm) == null ? void 0 : E.category,
            pageType: (_ = window.kly) == null ? void 0 : _.pageType,
            content_ai: ((A = (v = window.kly) == null ? void 0 : v.gtm) == null ? void 0 : A.content_ai) || 0
        }),
        document.dispatchEvent(new CustomEvent("maverick:end_of_content",{
            detail: {
                id: (T = (L = window == null ? void 0 : window.kly) == null ? void 0 : L.gtm) == null ? void 0 : T.articleId,
                number: parseInt((t == null ? void 0 : t.list) || 0),
                type: "ReadPage",
                section: t
            }
        })),
        Ln = !0)
    }
}
);
var _n = !1;
document.addEventListener("maverick:visible_section", n=>{
    var i, o, a, r, s, l, d, c, u, p, w, y, m, h, g, b, E, _, v, A, L, T, O, P, R, x, C, M, Ae;
    if ((o = (i = window.kly) == null ? void 0 : i.gtm) != null && o.articleId && ((r = (a = window.kly) == null ? void 0 : a.gtm) == null ? void 0 : r.type) == "feedInformation" && !_n && parseInt(((d = (l = (s = n == null ? void 0 : n.detail) == null ? void 0 : s.section) == null ? void 0 : l.dataset) == null ? void 0 : d.list) || 0) >= parseInt(((u = (c = window == null ? void 0 : window.kly) == null ? void 0 : c.gtm) == null ? void 0 : u.totalFeedItem) || 0)) {
        var t = n.detail.section.dataset;
        window.dataLayer.push({
            event: "click",
            feature_name: "completion_reading",
            feature_location: "detail-article",
            feature_position: (t == null ? void 0 : t.list) || 0,
            articleId: ((w = (p = window.kly) == null ? void 0 : p.article) == null ? void 0 : w.id) || ((m = (y = window.kly) == null ? void 0 : y.gtm) == null ? void 0 : m.articleId) || 0,
            contentTitle: ((g = (h = window.kly) == null ? void 0 : h.article) == null ? void 0 : g.title) || ((E = (b = window.kly) == null ? void 0 : b.gtm) == null ? void 0 : E.articleTitle) || "untitled",
            type: ((_ = kly == null ? void 0 : kly.gtm) == null ? void 0 : _.type) || "feed",
            authors: ((A = (v = window.kly.gtm) == null ? void 0 : v.authors) == null ? void 0 : A.names) || "unset",
            editors: ((T = (L = window.kly.gtm) == null ? void 0 : L.authors) == null ? void 0 : T.names) || "unset",
            publicationDate: ((O = window.kly.gtm) == null ? void 0 : O.publicationDate) || "",
            publicationTime: ((P = window.kly.gtm) == null ? void 0 : P.publicationTime) || "",
            template_id: (t == null ? void 0 : t.templateId) || 0,
            template_name: (t == null ? void 0 : t.template) || 0,
            subCategory: (R = window.kly.gtm) == null ? void 0 : R.subCategory,
            category: (x = window.kly.gtm) == null ? void 0 : x.category,
            pageType: (C = window.kly) == null ? void 0 : C.pageType,
            content_ai: ((Ae = (M = window.kly) == null ? void 0 : M.gtm) == null ? void 0 : Ae.content_ai) || 0
        }),
        _n = !0
    }
}
);
let qn = document.querySelectorAll('[data-template="info-reco-2row-v1.2"] .box-list-item .item');
qn && qn.forEach(function(n) {
    n.addEventListener("click", t=>{
        var o, a, r, s, l, d, c, u, p, w, y, m, h, g, b;
        var i = document.querySelector("section.is-visible").dataset;
        window.dataLayer.push({
            event: "click",
            feature_name: "related_news_end_of_content",
            feature_location: "detail-article",
            feature_position: (i == null ? void 0 : i.list) || 0,
            articleId: ((a = (o = window.kly) == null ? void 0 : o.article) == null ? void 0 : a.id) || ((s = (r = window.kly) == null ? void 0 : r.gtm) == null ? void 0 : s.articleId) || 0,
            articleTitle: ((d = (l = window.kly) == null ? void 0 : l.article) == null ? void 0 : d.title) || ((u = (c = window.kly) == null ? void 0 : c.gtm) == null ? void 0 : u.articleTitle) || "untitled",
            type: ((p = kly == null ? void 0 : kly.gtm) == null ? void 0 : p.type) || "feed",
            authors: ((y = (w = window.kly.gtm) == null ? void 0 : w.authors) == null ? void 0 : y.names) || "unset",
            editors: ((h = (m = window.kly.gtm) == null ? void 0 : m.authors) == null ? void 0 : h.names) || "unset",
            publicationDate: ((g = window.kly.gtm) == null ? void 0 : g.publicationDate) || "",
            publicationTime: ((b = window.kly.gtm) == null ? void 0 : b.publicationTime) || "",
            template_id: (i == null ? void 0 : i.templateId) || 0,
            template_name: (i == null ? void 0 : i.template) || 0
        })
    }
    )
});
function q(n, t, i, o, a) {
    var u, p, w, y, m, h;
    var r = document.querySelector("section.is-visible").dataset;
    if (r != null && r.templateId) {
        var s = document.querySelector("section.is-visible").querySelectorAll("ins")[0].dataset
          , l = {
            event: "click",
            feature_name: n,
            feature_location: t || "feed",
            feature_position: i || (r == null ? void 0 : r.list) || 0,
            articleId: (s == null ? void 0 : s.id) || 0,
            articleTitle: s.title || "untitled",
            type: (s == null ? void 0 : s.sectionType) || (r == null ? void 0 : r.insType) || ((u = kly == null ? void 0 : kly.gtm) == null ? void 0 : u.type) || "feed",
            channel: ((p = kly == null ? void 0 : kly.gtm) == null ? void 0 : p.subCategory) || "unset",
            authors: (s == null ? void 0 : s.authors) || "unset",
            editors: (s == null ? void 0 : s.authors) || "unset",
            reporters: (s == null ? void 0 : s.reporters) || "unset",
            publicationDate: (s == null ? void 0 : s.publishedDate) || "",
            publicationTime: (s == null ? void 0 : s.publishedTime) || "",
            template_id: (r == null ? void 0 : r.templateId) || 0,
            template_name: (r == null ? void 0 : r.template) || 0,
            content_ai: ((y = (w = window.kly) == null ? void 0 : w.gtm) == null ? void 0 : y.content_ai) || 0,
            subCategory: ((h = (m = window.kly) == null ? void 0 : m.gtm) == null ? void 0 : h.subCategory) || "unset"
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
var Je = 0
  , $e = ""
  , An = ""
  , Tn = "";
document.addEventListener("maverick:video_event", n=>{
    var s, l, d, c, u, p, w, y;
    var t = document.querySelector('[data-sid="' + ((s = n.detail) == null ? void 0 : s.sectionId) + '"]');
    if (t) {
        var i = (l = n.detail) == null ? void 0 : l.video
          , o = (i == null ? void 0 : i.duration) % 60
          , a = i.currentTime ? Math.round(i.currentTime / o * 100) / 100 : 0;
        if (((d = n.detail) == null ? void 0 : d.type) == "start") {
            if (Tn != i.querySelector("source").src) {
                Tn = i.querySelector("source").src;
                var r = t.querySelectorAll("ins")[0].dataset;
                ve = new Date;
                let m = ve - Y;
                i.querySelector("source").src.includes("klytv-cdn") && be("video_playback_playing", "kly_video_player", r, m)
            }
            ne("kly_video_player", "video_start", t, i, a)
        } else if (((c = n.detail) == null ? void 0 : c.type) == "pause")
            ne("kly_video_player", "video_pause", t, i, a);
        else if (((u = n.detail) == null ? void 0 : u.type) == "resume" && a > 0)
            ne("kly_video_player", "video_continue", t, i, a);
        else if (((p = n.detail) == null ? void 0 : p.type) == "update") {
            if ([.25, .5, .75].includes(a) && Je != a)
                ne("kly_video_player", "video_progress", t, i, a),
                Je = a,
                $e = "";
            else if (a > .9 && $e != ((w = n.detail) == null ? void 0 : w.sectionId))
                ne("kly_video_player", "video_complete", t, i, a),
                Je = 0,
                $e = (y = n.detail) == null ? void 0 : y.sectionId;
            else if (a == 0 && i.querySelector("source").src != "" && An != i.querySelector("source").src) {
                An = i.querySelector("source").src;
                let m = t.querySelectorAll("ins")[0].dataset;
                Y = new Date;
                let h = Y - ct;
                i.querySelector("source").src.includes("klytv-cdn") && be("video_player_ready", "kly_video_player", m, h)
            }
        }
    }
}
);
var Q = null
  , ie = null;
document.addEventListener("maverick:postcredit.event", function(n) {
    var o, a, r, s, l, d, c, u, p, w, y, m, h, g;
    if (n.detail.state == "slideChange") {
        var t = document.querySelector("section.is-visible").dataset
          , i = document.querySelector("section.is-visible").querySelectorAll("ins")[0].dataset;
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
                totalFeedItem: ((p = (u = window.kly) == null ? void 0 : u.gtm) == null ? void 0 : p.totalFeedItem) || 0,
                scroll_step: j - 1 || 0,
                isSEO: (i == null ? void 0 : i.identify) == "timeless" ? !0 : ((y = (w = window.kly) == null ? void 0 : w.gtm) == null ? void 0 : y.isSEO) || !1,
                content_ai: ((h = (m = window.kly) == null ? void 0 : m.gtm) == null ? void 0 : h.content_ai) || 0,
                related_system: ((g = window == null ? void 0 : window.kly) == null ? void 0 : g.related_system) || "unset",
                interactionType: "swipe"
            }),
            Q = n.detail.element.realIndex
        }
    }
});
document.querySelector(".dt--postcredit") && document.querySelector(".dt--postcredit").addEventListener("click", n=>{
    if (n.target.closest(".swiper-pagination-bullet")) {
        var t = parseInt(n.target.textContent)
          , i = document.querySelectorAll(".swiper-wrapper .swiper-slide")[t - 1]
          , o = i.dataset;
        o != null && o.featuredPosition && q("post_credit_pagination", "end_of_content", o == null ? void 0 : o.featuredPosition, {
            feature_caption: t
        }, ["event", "feature_name", "feature_location", "feature_position", "feature_caption"])
    }
}
);
let xn = document.querySelectorAll('.dt--postcredit [data-featured-position="popular_article"] .box-list--trending .box-list-item');
xn && xn.forEach(function(n, t) {
    n.querySelector("a").addEventListener("click", function(i) {
        q("popular_article", "end_of_content", t + 1, {
            feature_link: n.querySelector("a").getAttribute("href"),
            feature_caption: i.target.textContent,
            articleId: qe(n.querySelector("a").getAttribute("href"))
        }, ["event", "feature_name", "feature_location", "feature_position", "feature_link", "feature_caption", "articleId"])
    })
});
let Cn = document.querySelectorAll('.dt--postcredit [data-featured-position="newest_article"] .box-list--topic .box-list-item');
Cn && Cn.forEach(function(n, t) {
    n.querySelector("a").setAttribute("data-untracker", "1"),
    n.querySelector("a").addEventListener("click", function(i) {
        q("newest_article", "end_of_content", t + 1, {
            feature_link: n.querySelector("a").getAttribute("href"),
            feature_caption: i.target.textContent,
            articleId: qe(n.querySelector("a").getAttribute("href"))
        }, ["event", "feature_name", "feature_location", "feature_position", "feature_link", "feature_caption", "articleId"])
    })
});
let In = document.querySelectorAll('.dt--postcredit [data-featured-position="related_topic"] .box-list--related .box-list-item');
In && In.forEach(function(n, t) {
    n.querySelector("a").addEventListener("click", function(i) {
        q("related_topic", "end_of_content", t + 1 + ":" + i.target.textContent, {
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
window.MavIsInViewport = n=>{
    const t = n.getBoundingClientRect();
    return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
}
;
window.formatCash = n=>{
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
}
;
const $o = "maverick_completed_information"
  , Ko = "maverick_completed_legacy"
  , Go = "maverick_opened_information"
  , Xo = "maverick_opened_legacy";
document.addEventListener("maverick:end_of_content", function(n) {
    var t, i;
    ((t = n == null ? void 0 : n.detail) == null ? void 0 : t.id) && ((i = n == null ? void 0 : n.detail) == null ? void 0 : i.type) && (n.detail.type == "InformationPage" ? Se($o, n.detail.id) : n.detail.type == "ReadPage" && Se(Ko, n.detail.id))
});
document.addEventListener("maverick:opened_content", function(n) {
    var t, i;
    ((t = n == null ? void 0 : n.detail) == null ? void 0 : t.id) && ((i = n == null ? void 0 : n.detail) == null ? void 0 : i.type) && (n.detail.type == "InformationPage" ? Se(Go, n.detail.id) : n.detail.type == "ReadPage" && Se(Xo, n.detail.id))
});
function Se(n, t) {
    var i = window.mavMaxStrgItem || "*"
      , o = localStorage.getItem(n);
    o = o ? o.split(",").reverse() : [],
    o.push(t),
    o = o.filter(Yo),
    i != "*" && (o = o.slice(i * -1)),
    localStorage.setItem(n, o.reverse().join(","))
}
function Yo(n, t, i) {
    return i.indexOf(n) === t
}
