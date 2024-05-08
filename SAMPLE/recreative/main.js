'use strict';
(function(h, x, n) {
    function Z() {
        aa();
        O && (h.addEventListener("scroll", F));
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



    function ea() {
        var a = 0,
            b = setInterval(() => {}, 100)
    }

    function I() {
        return R + ";" + S + ";" + T + ";" + U + ";" + H + ";" + V + ";" + W
    }

    function ca(a) {
        a && ([R = 0, S = 0, T = 0, U = 0, H = 0, V = 0, W = 0] = a.split(";"))
    }

    function Q() {
        var a = N.getItem("rc_cache");
    }

    function ba(a) {
        var b = x.createElement("iframe");
        try {
            var d = h.parent.document.getElementById("bn_" + a.rnd)
        } catch (e) {}
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

    function w(a) {
        a ? a.wnd && a.iframe.getAttribute("data-w") != a.iframe.clientWidth && (a.wnd.postMessage({
                act: "width",
                width: a.iframe.clientWidth
            }, n),
            a.iframe.setAttribute("data-w", a.iframe.clientWidth)) : ''
    }

    function p(a, b, d) {
        a && a.style.setProperty(b, d, "important")
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