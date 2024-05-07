window.frameElement.parentElement.parentElement.style.display = "none";

let klyAds = parent.kmklabs || parent.kly,
    site = klyAds.site.toLowerCase(),
    platform = klyAds.platform.toLowerCase(),
    mgidSource = `<div id="bn_3c37adefcb"></div><scr` + `ipt>"use strict";!function(e,t,n){function o(){(f=f||t.getElementById("bn_"+n))?(f.innerHTML="",f.id="bn_"+p,r={act:"init",id:n,rnd:p,ms:g},(i=t.getElementById("rcMain"))?s=i.contentWindow:function(){try{(i=t.createElement("iframe")).style.setProperty("display","none","important"),i.id="rcMain",t.body.insertBefore(i,t.body.children[0]),s=i.contentWindow,(d=s.document).open(),d.close(),l=d.body,Object.defineProperty(s,"rcBuf",{enumerable:!1,configurable:!1,writable:!1,value:[]}),function(n,o,c,r){var i=0;!function e(){var t=o.createElement("script");t.type="text/javascript",t.src=n,t.onerror=function(){++i<5?setTimeout(e,10):a(i+"!"+n)},t.onload=function(){r&&r(),i&&a(i+"!"+n)},c.appendChild(t)}()}("https://go.rcvlink.com/static/main.js",d,l,function(){for(var e;s.rcBuf&&(e=s.rcBuf.shift());)s.postMessage(e,u)})}catch(e){c(e)}}(),s.rcMain?s.postMessage(r,u):s.rcBuf.push(r)):a("!bn")}function c(e){a(e.name+": "+e.message+"\t"+(e.stack?e.stack.replace(e.name+": "+e.message,""):""))}function a(e){console.error(e),(new Image).src="https://go.rcvlinks.com/err/?code="+n+"&ms="+((new Date).getTime()-g)+"&ver="+m+"&text="+encodeURIComponent(e)}try{var r,i,s,d,l,m="231101-0007",u=location.origin||location.protocol+"//"+location.hostname+(location.port?":"+location.port:""),f=t.getElementById("bn_"+n),p=Math.random().toString(36).substring(2,15),g=(new Date).getTime();0 in e;f?o():"loading"==t.readyState?t.addEventListener("DOMContentLoaded",o):a("!bn")}catch(e){c(e)}}(window,document,"3c37adefcb");</scr` + `ipt>`,
    mgidIdMatch = mgidSource.match(/<div id="([^"]+)">/),
    mgidSrcMatch = mgidSource.match(/<script>(.*)<\/script>/);
MGIDId = mgidIdMatch ? mgidIdMatch[1] : null,
    MGIDSrc = mgidSrcMatch ? mgidSrcMatch[1] : null,
    MGIDDiv = document.createElement("div"),
    MGIDScript = document.createElement("script"),
    MGIDImpression = "https://cdns.klimg.com/d.kapanlaginetwork.com/banner/asset/img/pixel.png";

let config = {
    "mobile": {
        "liputan6": {
            "targetedEl": '#div-gpt-ad-liputan6-mgid-underarticle',
            "targetedPosition": "beforeend"
        },
        "kapanlagi": {
            "targetedEl": '#div-gpt-ad-kapanlagi-mgid-underarticle',
            "targetedPosition": "beforeend"
        },
        "fimela": {
            "targetedEl": '#div-gpt-ad-fimela-mgid-underarticle',
            "targetedPosition": "beforeend"
        },
        "bola.com": {
            "targetedEl": '#div-gpt-ad-bolacom-mgid-underarticle',
            "targetedPosition": "beforeend"
        },
        "bola": {
            "targetedEl": '#div-gpt-ad-bola-mgid-underarticle',
            "targetedPosition": "beforeend"
        }
    },
    "desktop": {
        "liputan6": {
            "targetedEl": '#div-gpt-ad-liputan6-mgid-underarticle',
            "targetedPosition": "beforeend"
        },
        "kapanlagi": {
            "targetedEl": '#div-gpt-ad-kapanlagi-mgid-underarticle',
            "targetedPosition": "beforeend"
        },
        "fimela": {
            "targetedEl": '#div-gpt-ad-fimela-mgid-underarticle',
            "targetedPosition": "beforeend"
        },
        "bola.com": {
            "targetedEl": '#div-gpt-ad-bolacom-mgid-underarticle',
            "targetedPosition": "beforeend"
        },
        "bola": {
            "targetedEl": '#div-gpt-ad-bola-mgid-underarticle',
            "targetedPosition": "beforeend"
        }
    }
}

let targetedEl = config[platform][site].targetedEl,
    targetedPosition = config[platform][site].targetedPosition;

MGIDDiv.id = MGIDId;
MGIDScript.innerText = MGIDSrc;
MGIDScript.setAttribute("async", "true");

window.addEventListener('load', function() {
    parent.document.querySelector(targetedEl).insertAdjacentElement(targetedPosition, MGIDDiv);
    parent.document.querySelector(targetedEl).insertAdjacentElement(targetedPosition, MGIDScript);

    if (platform == "mobile" && site == "bola") {
        MGIDDivTweak();
    }

    impressionTracker();

    tweakStyle()
});

function MGIDDivTweak() {
    let MGIDDivNum = 0;
    let MGIDDivCheck = setInterval(() => {
        if (parent.document.querySelector('[id^="' + MGIDId + '_"]')) {
            parent.document.querySelector('[id^="' + MGIDId + '_"]').style.padding = "15px";
            clearInterval(MGIDDivCheck);
        } else {
            if (MGIDDivNum == 100) {
                clearInterval(MGIDDivCheck);
            }
        }
        MGIDDivNum++;
    }, 100);
}

function impressionTracker() {
    var img = document.createElement("img");
    img.setAttribute("src", MGIDImpression);
    img.setAttribute("style", "display:none; visibility:hidden;");
    parent.document.querySelector("body").appendChild(img);
}

function tweakStyle() {
    if (site != "bola.com") {
        return;
    }
    var tweakStyle_ = document.createElement("style")
    tweakStyle_.textContent = `div#div-gpt-ad-mgid-underarticle-placeholder { width: 100% !important; margin: 0px; }`
    window.frameElement.parentElement.appendChild(tweakStyle_)
}