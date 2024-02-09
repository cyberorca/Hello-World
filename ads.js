window.frameElement.style.display = 'none';

var _pageCat = parent.kly.gtm.category.toLowerCase(),
    _pageType = parent.kly.gtm.type.toLowerCase(),
    _landingPage = "https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsvxdSOhmX3eEJwIVdg8qgoE69zIbX9Ir9KgKcSoGbezMhrOZIcALPOuY5NVo-GBHuWTuoDIIBoToXDVHasiEkLJ3iTkrlmR3SrY3fJgzGPfdwKh1UL9NAurv4pltWVr_vWh2L6InZHhCF2SAp0SZFyVLTFP99XeNnKAn7JBxkEV2q_fLYUgmfvaUOr7wLv_QrjwKaik5fFkTp3bpF95TXOOMThH&sig=Cg0ArKJSzKx2ipFnOtydEAE&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://www.merdeka.com/gaya/3-fun-facts-seputar-black-clover-m-game-rpg-terbaru-yang-dirilis-oleh-garena-65534-mvk.html",
    _img = "https://tpc.googlesyndication.com/simgad/8290592194468659981?",
    _title = "3 Fun Facts Seputar Black Clover M, Game RPG Terbaru yang Dirilis Oleh Garena",
    _desc = "3 Fun Facts Seputar Black Clover M, Game RPG Terbaru yang Dirilis Oleh Garena",
    _tag = "Lifestyle",
    _advPosition = "1",
    _target,
    _customTarget,
    _getIndexCustomTarget;

_initialCheck();

function _initialCheck() {
    if (_pageCat == "article" && _pageType == "feedinformation") {
        _customTarget = parent.document.querySelectorAll("section[data-theme]:not([data-theme='ads']");
        _customTarget.forEach((element, index) => {
            if (_customTarget[index].getAttribute('data-theme') == "postcredit") {
                _getIndexCustomTarget = index;
                _target = _customTarget[_getIndexCustomTarget + (parseInt(_advPosition) * 3)];
            }
        });
    } else if (_pageCat == "article" && _pageType == "feedphoto") {
        _customTarget = parent.document.querySelectorAll("section[data-template-id='66']")[parent.document.querySelectorAll("section[data-template-id='66']").length - 1],
            _getIndexCustomTarget = Array.from(_customTarget.parentNode.children).indexOf(_customTarget),
            _target = parent.document.querySelectorAll("section")[_getIndexCustomTarget + (parseInt(_advPosition) * 3) + parseInt(_advPosition)];
    } else {
        _target = parent.document.querySelectorAll("section[data-theme]:not([data-theme='ads']")[(parseInt(_advPosition) * 3) - 1];
    }

    _target && _target.setAttribute("data-section", "Advertorial-" + _advPosition);

    _injectAds();
}

function _injectAds() {
    var _titleTarget = _target.getAttribute("data-template-id") == "72" ? ".article-title a" : ".article-title a";
    var _btnTarget = _target.getAttribute("data-template-id") == "72" ? ".article-desc a.btn" : ".article-footer a.btn";

    const _articleTagA = _target.querySelector(".article-tag a");
    const _titleTargetEl = _target.querySelector(_titleTarget);
    const _articlePar = _target.querySelector(".article-paragraph");
    const _articleAssetA = _target.querySelector(".article-asset a");
    const _articleAssetImg = _target.querySelector(".article-asset img");
    const _articleSourceJpeg = _target.querySelector(".article-asset source[type='image/jpeg']");
    const _articleSourceWebp = _target.querySelector(".article-asset source[type='image/webp']");

    // tag replace
    _articleTagA.textContent = _tag == "" ? "Advertorial" : _tag;
    _articleTagA.href = _landingPage;
    _articleTagA.setAttribute("target", "_blank");

    // title replace
    _titleTargetEl.setAttribute("href", _landingPage);
    _titleTargetEl.setAttribute("target", "_blank");
    _titleTargetEl.setAttribute("aria-label", _title);
    _titleTargetEl.textContent = _title;

    // desc replace
    _articlePar.textContent = _desc;

    // img replace
    _articleAssetA.setAttribute("href", _landingPage);
    _articleAssetA.setAttribute("target", "_blank");
    _articleAssetA.setAttribute("aria-label", _title);
    _articleAssetImg.setAttribute("alt", _title);
    _articleAssetImg.setAttribute("src", _img);
    _articleSourceJpeg.setAttribute("srcset", _img);
    _articleSourceWebp && _articleSourceWebp.setAttribute("srcset", _img);

    // btn replace
    _target.querySelector(_btnTarget).setAttribute("href", _landingPage);
    _target.querySelector(_btnTarget).setAttribute("target", "_blank");

    // ins replace
    _target.querySelector("ins").setAttribute("data-title", _title);
}