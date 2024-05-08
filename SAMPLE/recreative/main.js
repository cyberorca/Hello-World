'use strict';
(function(h, x, n) {
    function Z() {
        aa();
        O && (h.addEventListener("scroll", F),
            h.addEventListener("resize", F));
        h.addEventListener("message", function(a) {
            try {
                var b = a.data,
                    d = b.act;
                if ("init" == d)
                    P = a.source,
                    ba(b);
                else if ("height" == d)
                    r.forEach(function(c) {
                        c.wnd == a.source && (p(c.iframe, "height", b.height + "px"),
                            w(c))
                    });
                else if ("fixed" == d)
                    r.forEach(function(c) {
                        c.wnd == a.source && (p(c.target, "width", b.width + "px"),
                            p(c.target, "height", b.height + "px"),
                            w(c))
                    });
                else if ("style" == d)
                    r.forEach(function(c) {
                        if (c.wnd == a.source) {
                            for (var f in b.style)
                                p(c.target, f, b.style[f]);
                            b.ex && (f = x.createElement("script"),
                                f.text = b.ex,
                                c.target.appendChild(f));
                            w(c)
                        }
                    });
                else if ("catfish" == d)
                    r.forEach(function(c) {
                        if (c.wnd == a.source) {
                            var f = c.iframe,
                                q = f.insertAdjacentHTML,
                                g = b.x;
                            g = g || 1;
                            var l = 28 * g,
                                m = 13 * g;
                            q.call(f, "afterend", "<a href='#' data-i='z' style=\"position: absolute; width: " + l + "px; height: " + l + "px; top: -" + l + "px; right: 0;background-image: url(&quot;data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='13' viewBox='341 8 13 13' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%234F4F4F' d='M354 9.31L352.69 8l-5.19 5.19L342.31 8 341 9.31l5.19 5.19-5.19 5.19 1.31 1.31 5.19-5.19 5.19 5.19 1.31-1.31-5.19-5.19z' fill-rule='evenodd'/%3E%3C/svg%3E&quot;);background-size: " + m + "px " + m + "px; background-position: " + 9 * g + 'px; background-color: #fff; background-repeat: no-repeat; box-shadow: 0 -1px 1px 0 rgba(0,0,0,0.2); border: none; border-radius: 12px 0 0 0;"onclick="parentElement.style.width=0;parentElement.style.overflow=\'hidden\';return false"><div style="position: absolute; top: -20px; right: 0; left: -20px; bottom: 0;"></div></a>');
                            c.target.style.cssText = "position:fixed !important;right:0 !important;bottom:0 !important;left:0 !important;text-align: center;z-index: 2147483647;box-sizing: border-box;opacity: 1 !important;background-image: none !important;background-color: #fff;box-shadow: 0 0 5px 0 rgba(0,0,0,0.2) !important;margin-bottom: 0 !important;line-height: 0 !important;";
                            w(c)
                        }
                    });
                else if ("dummy" == d)
                    r.forEach(function(c) {
                        if (c.wnd == a.source) {
                            p(c.iframe, "display", "none");
                            c.iframe.insertAdjacentHTML("afterend", "<div id='bn_" + c.id + "'></div>");
                            var f = x.createElement("script");
                            f.text = b.dummy;
                            c.target.appendChild(f)
                        }
                    });
                else if ("bdload" == d)
                    "end" == b.sub && (t = b.cache,
                        Q(),
                        ca(b.cs),
                        G(a.source)),
                    "beg" == b.sub && (u.push({
                            src: a.source,
                            ms: b.ms
                        }),
                        G());
                else if ("bimp" == d) {
                    var e = b.tzd + b.sid;
                    A[e] = A[e] || 0;
                    A[e]++;
                    a.source.postMessage({
                        act: "bimp",
                        bimp: b.bimp + ":" + A[e]
                    }, n)
                } else
                    "cache" == d && (t = b.cache,
                        Q() && (H++,
                            r.forEach(function(c) {
                                c.wnd != a.source && c.wnd.postMessage({
                                    act: "cache",
                                    cache: t,
                                    cs: I()
                                }, n)
                            })))
            } catch (c) {
                da(c.name + ": " + c.message + "\n" + (c.stack ? c.stack.replace(c.name + ": " + c.message + "\n", "") : ""))
            }
        }, !0);
        ea();
        return {}
    }

    function aa() {
        var a = x,
            b = h;
        try {
            for (; b != b.parent;)
                b = b.parent,
                a = b.document
        } catch (d) {}
        b = a.createElement("link");
        b.rel = "preconnect";
        b.href = n;
        a.head ? a.head.appendChild(b) : a.body.appendChild(b)
    }

    function G(a) {
        if (a) {
            var b = [];
            u.forEach(function(e) {
                e.src != a && b.push(e)
            });
            u = b;
            if (u.length) {
                var d = u[0];
                d.src.postMessage({
                    act: "bdload",
                    ms: d.ms,
                    cache: t || J,
                    cs: I()
                }, n)
            }
        } else
            u.length && !u.some(e => e.beg) && (d = u[0],
                d.beg = !0,
                d.src.postMessage({
                    act: "bdload",
                    ms: d.ms,
                    cache: t || J,
                    cs: I(),
                    gdpr: B,
                    tcp: y,
                    tcd: k,
                    vnd: K,
                    tms: L
                }, n))
    }

    function ea() {
        var a = 0,
            b = setInterval(() => {
                if ((M = fa()) || !M && 100 < a)
                    M || z(),
                    clearInterval(b);
                a++
            }, 100)
    }

    function fa() {
        C || function() {
            let d = window,
                e;
            const c = {};
            for (; d;) {
                try {
                    if (d.frames.__tcfapiLocator) {
                        e = d;
                        break
                    }
                } catch (f) {}
                if (d === h.top)
                    break;
                d = d.parent
            }
            e && (h.__tcfapi = function(f, q, g, l) {
                    if (e) {
                        const m = Math.random() + "";
                        f = {
                            __tcfapiCall: {
                                command: f,
                                parameter: l,
                                version: q,
                                callId: m
                            }
                        };
                        c[m] = g;
                        e.postMessage(f, "*")
                    } else
                        g({
                            msg: "CMP not found"
                        }, !1)
                },
                h.addEventListener("message", function(f) {
                    let q = {};
                    try {
                        q = "string" === typeof f.data ? JSON.parse(f.data) : f.data
                    } catch (g) {}
                    (f = q.__tcfapiReturn) && "function" === typeof c[f.callId] && (c[f.callId](f.returnValue, f.success),
                        c[f.callId] = null)
                }, !1))
        }();
        try {
            var a = top.__tcfapi || h.__tcfapi,
                b = typeof a
        } catch (d) {}
        return "function" == b ? (a("ping", 2, d => {
            y = d;
            "loaded" == y.cmpStatus ? (B = y.gdprApplies) ? a("addEventListener", 2, (e, c) => {
                k = e;
                B = k.gdprApplies;
                c || z();
                if (k && k.gdprApplies && "loaded" == k.cmpStatus && ("tcloaded" == k.eventStatus || "useractioncomplete" == k.eventStatus)) {
                    k.vendor && (K = (k.vendor.consents[1038] || k.vendor.legitimateInterests[1038] ? "1" : "0") + (k.vendor.consents[358] || k.vendor.legitimateInterests[358] ? "1" : "0"));
                    for (var f in k.purpose.consents)
                    ;
                    z();
                    a("removeEventListener", 2, q => {}, k.listenerId)
                }
            }) : z() : z()
        }), !0) : !1
    }

    function z() {
        L = (new Date).getTime();
        G();
        r.forEach(function(a) {
            a.wnd && a.wnd.postMessage({
                act: "tcf",
                gdpr: B,
                tcp: y,
                tcd: k,
                vnd: K,
                tms: L
            }, n)
        })
    }

    function I() {
        return R + ";" + S + ";" + T + ";" + U + ";" + H + ";" + V + ";" + W
    }

    function ca(a) {
        a && ([R = 0, S = 0, T = 0, U = 0, H = 0, V = 0, W = 0] = a.split(";"))
    }

    function Q() {
        var a = N.getItem("rc_cache");
        if (a != t)
            return N.setItem("rc_cache", t),
                a
    }

    function ba(a) {
        var b = x.createElement("iframe");
        try {
            var d = h.parent.document.getElementById("bn_" + a.rnd)
        } catch (e) {
            d = x.getElementById("bn_" + a.rnd)
        }
        a.iframe = b;
        a.target = d;
        a.ref = C || a.ref || "" + h.location;
        r.push(a);
        b.addEventListener("load", function(e) {
            e = b.contentWindow;
            a.wnd = e;
            X++;
            e.postMessage({
                act: "init",
                width: d.clientWidth,
                vw: P.innerWidth,
                id: a.id,
                ref: a.ref,
                rc_cache: t || J,
                ms: a.ms,
                cnt: X,
                redir: a.redir
            }, n);
            a.target.setAttribute("data-w", a.target.clientWidth);
            p(a.target, "display", "block");
            p(a.target, "line-height", 0)
        });
        b.scrolling = "no";
        b.allow = "autoplay";
        p(b, "border", 0);
        p(b, "width", "100%");
        p(b, "height", 0);
        p(b, "margin", 0);
        p(b, "padding", 0);
        b.src = n + "/static/iframe.htm";
        b.title = a.id;
        d.appendChild(b)
    }

    function F() {
        r.forEach(function(a) {
            if (a.wnd) {
                var b = a.iframe;
                var d = b.ownerDocument;
                var e = d.defaultView || d.parentWindow;
                var c = d.doctype ? d.documentElement : d.body;
                d = c.clientWidth || e.innerWidth;
                var f = c.clientHeight || e.innerHeight;
                var q = e.pageXOffset || c.scrollLeft;
                e = e.pageYOffset || c.scrollTop;
                var g = b;
                c = g.ownerDocument;
                var l = c.defaultView || c.parentWindow;
                var m = 0,
                    v = 0;
                c = g.clientWidth;
                var Y = g.clientHeight;
                if ("function" == typeof g.getBoundingClientRect)
                    g = g.getBoundingClientRect(),
                    m = g.left + l.pageXOffset,
                    v = g.top + l.pageYOffset;
                else
                    for (; g;)
                        m += parseFloat(g.offsetLeft),
                        v += parseFloat(g.offsetTop),
                        g = g.offsetParent;
                g = m;
                l = v;
                var D = v = m = 0,
                    E = 0;
                l + Y > e && e + f > l && (m = l > e ? 0 : e - l,
                    v = Math.min(l + Y, e + f) - Math.max(l, e),
                    D = g > q ? 0 : q - g,
                    E = Math.min(g + c, q + d) - Math.max(g, q));
                if (b.getAttribute("data-vw") != E || b.getAttribute("data-vh") != v || b.getAttribute("data-vx") != D || b.getAttribute("data-vy") != m)
                    b.setAttribute("data-vw", E),
                    b.setAttribute("data-vh", v),
                    b.setAttribute("data-vx", D),
                    b.setAttribute("data-vy", m),
                    a.wnd.postMessage({
                        act: "visible",
                        visible: {
                            w: E,
                            h: v,
                            x: D,
                            y: m
                        }
                    }, n)
            }
        })
    }

    function w(a) {
        a ? a.wnd && a.iframe.getAttribute("data-w") != a.iframe.clientWidth && (a.wnd.postMessage({
                act: "width",
                width: a.iframe.clientWidth
            }, n),
            a.iframe.setAttribute("data-w", a.iframe.clientWidth)) : r.forEach(function(b) {
            w(b)
        })
    }

    function p(a, b, d) {
        a && a.style.setProperty(b, d, "important")
    }

    function da(a) {
        console.error(a);
        (new Image).src = n + "/err/?ver=240405-0347&text=" + encodeURIComponent(a)
    }
    var P, r = [],
        u = [],
        C = 0;
    n.match(/^(https?:)/);
    var O = !("IntersectionObserver" in h),
        t = "",
        N = h.localStorage,
        T, U, V, H, W, R, S, A = {},
        X = 0,
        M, B, y, k, K, L;
    if (!(C = h === top ? 1 : 0))
        try {
            C = "" + h.top.location
        } catch (a) {}
    var J = N.getItem("rc_cache");
    h.rcMain = h.rcMain || Z()
})(window, document, "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x6f\x2e\x72\x63\x76\x6c\x69\x6e\x6b\x2e\x63\x6f\x6d");