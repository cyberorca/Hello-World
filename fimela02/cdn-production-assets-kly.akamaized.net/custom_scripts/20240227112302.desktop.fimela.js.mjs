/*** START of [ADS] Additional javascript for banner ****/
var siteHeaderDiv = document.querySelector(".fimela--header"),
    dcContainer = document.querySelector('.container');

function gamTweakHeader() {
	siteHeaderDiv.classList.add("gam-tweak-header");
}

function gamTweakContainer(){
	dcContainer && (dcContainer.style.marginTop = '50px');
}
/*** END of [ADS] Additional javascript for banner ****/

/*** START of [#172810850] Pasang popup overlay di artikel sasa - Desktop ****/
$(document).ready(function() {
    
    function showPopup(showed = true) {
        var popupBanner = document.getElementById("popup_banner_sasa");
        var bgPopup = document.getElementById("background_overlay_popup2");

        var _display = "none";
        if(showed) {
            _display = "block";
        }
        
        popupBanner.style.display = _display;
        bgPopup.style.display = _display;

        if (_display == "block") {
            $('body').css('overflow', 'hidden');
        }else{
            $('body').css('overflow', 'auto');
        }
    }

    function timeConvert(n) {
        var date = new Date(); 
        var rhours2 = date.getHours();
        var rminutes2 = (date.getMinutes()<10?'0':'') + date.getMinutes();

        var startTime2 = rhours2+""+rminutes2;
    }   

    function showPopupSchedule(){
        var date = new Date(); 
        var rhours = date.getHours();
        var rminutes = (date.getMinutes()<10?'0':'') + date.getMinutes();
        startTime = rhours+""+rminutes;
        if(startTime >= 435 && startTime < 1748){ 
            showPopup();
            sasa.setEventGTMImpression();
        }
    }
    const cssSasa = {
        'style': `
            #billboard-ad{
                display: none !important; 
            }

            .popup_banner{
                position: fixed;
                z-index: 9999;
                width: 500px;
                height: 380px;
                left: 50%;
                top: 30vh;
                margin-left: -250px;
            }

            .close_trigger{
                position: absolute;
                width: 40px;
                height: 40px;
                right: 30px;
                top: 10px;
                background: transparent;
                border-radius: 50%;
                -webkit-appearance: none;
                padding: 0;
                border:none;
            }

            .popup_banner .images_content img,.close_trigger img{
                width: 100%;
            }

            #background_overlay_popup2{
                left: 0;
                top: 0;
                position: fixed;
                background: url("../../preview-kly.akamaized.net/fimela/widget/popup-sasa/full_bg.png") no-repeat center center fixed; 
                -webkit-background-size: cover;
                -moz-background-size: cover;
                -o-background-size: cover;
                background-size: cover;
                z-index: 999;
                width: 100%;
                height: 100%;
                display: none;
            }


            .button_action_popup{
                text-align: center;
                position: absolute;
                left: 0;
                bottom: 75px;
                width: 100%;
            }

            .orange_button,.grey_button{
                display: inline-block;
                font-size: 18px;
                color: #fff;
                -webkit-appearance: none;
                border-radius: 8px;
                text-align: center;
                width: 200px;
                height: 45px;
                border: none;
                margin: 0 10px;
            }

            .orange_button:hover,.grey_button:hover{
                opacity: 0.8;
            }

            .orange_button{
                background: transparent;
            }

            .grey_button{
                background: #444444;
            }

            .content_sasa_banner{
                position: fixed;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: 99999;
                display: none;
            }

            .top_sasa_banner{
                position: absolute;
                width: 100%;
                left: 0;
                top: 0;
            }

            .top_sasa_banner img{
                width: 100%;
            }
        `,

        'appendStyle': function () {
            const styleTag = document.createElement('style');
            styleTag.type = 'text/css';
            styleTag.appendChild(document.createTextNode(this.style));
            $('body').append(styleTag);
        },
    };

    const sasa = {
        appendToBody: function() {
            const sasa = `<div id="background_overlay_popup2"></div>
                          <div id="popup_banner_sasa" class="content_sasa_banner">
                            <div class="top_sasa_banner">
                              <img src="https://preview-kly.akamaized.net/fimela/widget/popup-sasa/sasa_top.jpg">
                            </div>
                            <div class="popup_banner">
                              <div style="position: relative;">
                                  <a href="https://fimela.com/" class="close_trigger sasa_close_button" id="trigger_play"></a>
                                  <div class="images_content">
                                      <img src="https://preview-kly.akamaized.net/fimela/widget/popup-sasa/popup-sasa-dekstop.png">
                                  </div>
                                  <div class="button_action_popup">
                                      <button class="orange_button sasa_next_button"></button>
                                  </div>
                              </div>
                            </div>
                          </div>`;

            $('body').append(sasa);
        },

        setEventGTMImpression: function() {           
            var data = {
                event: "impression",
                feature_name: "overlay-sasa",
                feature_location: "next-button",
                feature_position: "center",
                page_type: "article",
            };

            window.dataLayer.push(data);
        
            data2 = {
                event: "impression",
                feature_name: "overlay-sasa",
                feature_location: "close-button",
                feature_position: "center",
                page_type: "article",
            };

            window.dataLayer.push(data2);            
        }
    };

    $(document).on('click', '.sasa_next_button', function(){
        showPopup(false);
        $('#billboard-ad').attr('style', 'display: block !important');
        var data = {
            event: "click",
            feature_name: "overlay-sasa",
            feature_location: "next-button",
            feature_position: "center",
            page_type: "article",
        };

        var hasSendClickSasaNextButton = false;

        if(hasSendClickSasaNextButton === false) {
            window.dataLayer.push(data);
            hasSendClickSasaNextButton = true;   
        }        
    });

    $(document).on('click', '.sasa_close_button', function(){
        var data = {
            event: "click",
            feature_name: "overlay-sasa",
            feature_location: "close-button",
            feature_position: "center",
            page_type: "article",
        };

        var hasSendClickSasaCloseButton = false;

        if(hasSendClickSasaCloseButton === false) {
            window.dataLayer.push(data);
            hasSendClickSasaCloseButton = true;   
        }        
    });

    if (window.kmklabs.pageType === 'ReadPage') {
        var isTextArticle = window.kmklabs.article.type === 'TextTypeArticle';
        var isGodaanPuasaTag = window.kmklabs.gtm.tag.toLowerCase().includes('godaan puasa');
            
        if (isTextArticle && isGodaanPuasaTag) {            
            sasa.appendToBody();
            cssSasa.appendStyle();
            timeConvert();
            showPopupSchedule();            
        }
    }
});
/*** END of [#172810850] Pasang popup overlay di artikel sasa - Desktop ****/

/*** START of [add 153kitchen order link on end of page] ****/
if (kmklabs.pageType === 'ReadPage' && (kmklabs.article.id === 4608574)) {
  	$('div.article-content-body__item-content a[href="https://153kitchen.com/links/"]').remove();
                                                              
    $('div.article-content-body__item-content').last().append('<a href="https://153kitchen.com/links/" target="_blank" style="margin: 15px auto; display: block; width: 228px; height: 62px; background-image: url("../../preview-kly.akamaized.net/153kitchen/button_order-di-sini.png")"></a>');
}
/*** END of [add 153kitchen order link on end of page] ****/

/*** START of remove personality menu ****/
$('.fimela--header--menu__item__more_sub_menu .personality').parent().remove();
$('.fimela--header--menu__item .celebrity').parent().after('<li class="fimela--header--menu__item"><a class="ui--a entertainment fimela--header--menu__link" href="/entertainment" title="entertainment">entertainment</a></li>').remove();
/*** END of remove personality menu ****/

/*** START of [#180206464] product review - slot logo brand - Dekstop ****/
$(document).ready(function() {
  const pathname = window.location.pathname;
  const pageType = window.kmklabs.pageType;
  
  if(pathname === '/') {
    $(".review-homepage-section__title").after("<center><p style='font-size: 12px;font-family:Raleway;font-weight: 500; color: #848484; margin-bottom: 0px;'> supported by</p><img src='https://preview-kly.akamaized.net/fimela/product-review/brands/marina-logo.png' width='20%' style='margin-bottom:20px; margin-top:20px;  object-fit: cover; width: 140px; height: 70px;' /></center>");
  } else if (pageType === 'Review Page') {
    $(".review-breadcrumb").after("<center><p style='font-size: 12px;font-family:Raleway;font-weight: 500; color: #848484; margin-bottom: 0px;'> supported by</p><img src='https://preview-kly.akamaized.net/fimela/product-review/brands/marina-logo.png' width='20%' style='margin-bottom:0px; margin-top:10px; object-fit: cover; width: 140px; height: 70px;' /></center>");
  } else if(pathname === '/product-review') {
    $(".review-index__title").after("<center><p style='font-size: 12px;font-family:Raleway;font-weight: 500; color: #848484; margin-bottom: 0px;'> supported by</p><img src='https://preview-kly.akamaized.net/fimela/product-review/brands/marina-logo.png' width='20%' style='margin-bottom:7px; margin-top:10px; object-fit: cover; width: 140px; height: 70px;' /></center>");    
  }
});
/*** END of [#180206464] product review - slot logo brand - Dekstop ****/

/*** START of [#181847924] Google One Tap Sign-In ****/
window.onload = function() {
  if (window.gtm === undefined || (window.gtm !== undefined && window.gtm.data === undefined) || (window.gtm.data !== undefined && window.gtm.data.userId === undefined) && !isHasBeenPrompted()) {
  (function () {
        var s = window.document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
    	  s.defer = true;
        s.src = 'https://accounts.google.com/gsi/client';
        window.document.getElementsByTagName('head')[0].appendChild(s);
    })();

    var time = 0;
    var interval = setInterval(function() {
        if (time <= 5000 && window.google !== undefined) {
            google.accounts.id.initialize({
                client_id: "414618812007-4es080tfh5tdolngppqg7vemsv50b947.apps.googleusercontent.com",
                cancel_on_tap_outside: false,
                callback: handleCredentialResponse,
            });
            google.accounts.id.prompt();
            time += 200;
            clearInterval(interval);
            storeHasBeenPrompted();
        }
        if (time >= 5000) clearInterval(interval);
    }, 200);
  }
};


function handleCredentialResponse(response) {
    $.post('https://www.staging.fimela.com/auth/google/tapin', {
        id_token: response.credential,
        _token: getCsrf(),
        back_to: window.location.href
    }, function (data, status) {
        if (data.status === 'success') {
            data.redirect !== undefined ? window.location.replace(data.redirect) :
            window.location.reload();
        }
    });
}

function getCsrf() {
    xhttp = new XMLHttpRequest();
    xhttp.open('POST', 'https://www.staging.fimela.com/token', false);
    xhttp.send();
    return xhttp.responseText;
}

var keyCookiesTapIn = 'google_tap_signin_dialog_today';
function isHasBeenPrompted() {
    return _getCookie(keyCookiesTapIn);
}

function storeHasBeenPrompted() {
    _setCookie(keyCookiesTapIn, 1, _getMinutesToTomorrow()); // 1 days
}

// http://www.quirksmode.org/js/cookies.html
function _setCookie(name, value, ttl) {
  var expires = "";
  var cookieDomain = "";
  if (ttl) {
    var date = new Date();
    date.setTime(date.getTime() + (ttl * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  }
  cookieDomain = "; domain=" + window.location.hostname;
  document.cookie = name + "=" + escape(value) + expires + cookieDomain + "; path=/";
}

function _getCookie(name) {
  var i, c;
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (i = 0; i < ca.length; i++) {
    c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return unescape(c.substring(nameEQ.length, c.length));
    }
  }
  return null;
}

function _getMinutesToTomorrow() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let totalMinutesToday = (hour * 60 + minutes);
  let totalMinutesInADay = 1440;

  return totalMinutesInADay - totalMinutesToday;
}
/*** END of [#181847924] Google One Tap Sign-In ****/

/*** START of [#184435187] Gateway Fimela Event - Desktop ****/
$(function(){
    if (window.location.pathname === "/") {
        var inlineCSS  = document.createElement('style');
        inlineCSS.type = 'text/css';
        inlineCSS.appendChild(document.createTextNode(`.fimela-event{width: 100%;height: 378px;display: block;margin: 40px auto;background:linear-gradient(0deg, rgba(0, 0, 0, 70%), rgba(0, 0, 0, 70%)), url("../../event.fimela.com/assets/head_party.webp");background-repeat: no-repeat;background-size: cover;background-position: center}.fimela-event__wrapper{opacity: 0.95;width: 665px;height: 424px;padding: 54px 70px 30px;margin: 0 auto}.fimela-event__title{width: 443px;text-align: center;color: #ffffff;margin: 0 auto;font-family: 'Times New Roman';font-style: normal;font-weight: 700;font-size: 28px;line-height: 40px}.fimela-event__sub-title{color: #E20064}.fimela-event__logo{display: flex;margin: auto;width: 155.93px;margin-bottom: 40px;padding-top: 50px}.fimela-event__button{margin-top: 40px;text-align: center}`));
        document.querySelector('body').appendChild(inlineCSS);

        var fimelaEvent = `
            <div class="fimela-event">
                <img src="https://event.fimela.com/assets/logo.png" alt="logo" class="fimela-event__logo">
                <h6 class="fimela-event__title">
                    One Stop Solution for Any Kinds of Your Dream
                    <span class="fimela-event__sub-title">Events, Gathering, Party & Wedding</span>
                </h6>
                <div class="fimela-event__button">
                    <a href="https://event.fimela.com/">
                        <svg width="180" height="52" viewBox="0 0 180 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="7" y="1" width="172" height="44" stroke="white"/>
                            <path d="M26.0958 21.68C26.0958 21.168 26.1878 20.66 26.3718 20.156C26.5558 19.644 26.8238 19.188 27.1758 18.788C27.5358 18.38 27.9718 18.052 28.4838 17.804C28.9958 17.556 29.5758 17.432 30.2238 17.432C30.9998 17.432 31.6638 17.604 32.2158 17.948C32.7678 18.292 33.1838 18.74 33.4638 19.292L32.4078 20C32.2878 19.744 32.1438 19.528 31.9758 19.352C31.8078 19.176 31.6238 19.036 31.4238 18.932C31.2238 18.828 31.0158 18.756 30.7998 18.716C30.5838 18.668 30.3758 18.644 30.1758 18.644C29.7278 18.644 29.3358 18.736 28.9998 18.92C28.6638 19.096 28.3798 19.332 28.1478 19.628C27.9238 19.924 27.7518 20.256 27.6318 20.624C27.5198 20.992 27.4638 21.36 27.4638 21.728C27.4638 22.144 27.5318 22.54 27.6678 22.916C27.8038 23.292 27.9918 23.624 28.2318 23.912C28.4798 24.2 28.7718 24.432 29.1078 24.608C29.4438 24.776 29.8118 24.86 30.2118 24.86C30.4198 24.86 30.6318 24.836 30.8478 24.788C31.0718 24.732 31.2838 24.648 31.4838 24.536C31.6918 24.416 31.8798 24.268 32.0478 24.092C32.2238 23.916 32.3678 23.704 32.4798 23.456L33.5958 24.092C33.4598 24.412 33.2678 24.696 33.0198 24.944C32.7718 25.184 32.4918 25.388 32.1798 25.556C31.8678 25.724 31.5358 25.852 31.1838 25.94C30.8398 26.028 30.4998 26.072 30.1638 26.072C29.5638 26.072 29.0158 25.944 28.5198 25.688C28.0238 25.432 27.5958 25.1 27.2358 24.692C26.8758 24.276 26.5958 23.808 26.3958 23.288C26.1958 22.76 26.0958 22.224 26.0958 21.68ZM40.2989 26H38.9789V22.484C38.9789 21.908 38.8749 21.484 38.6669 21.212C38.4669 20.932 38.1749 20.792 37.7909 20.792C37.6069 20.792 37.4229 20.828 37.2389 20.9C37.0549 20.972 36.8789 21.076 36.7109 21.212C36.5509 21.34 36.4069 21.496 36.2789 21.68C36.1509 21.856 36.0549 22.052 35.9909 22.268V26H34.6709V17.24H35.9909V20.984C36.2309 20.552 36.5549 20.216 36.9629 19.976C37.3789 19.736 37.8309 19.616 38.3189 19.616C38.7109 19.616 39.0309 19.688 39.2789 19.832C39.5349 19.968 39.7389 20.152 39.8909 20.384C40.0429 20.616 40.1469 20.888 40.2029 21.2C40.2669 21.504 40.2989 21.828 40.2989 22.172V26ZM44.6751 26.12C44.1871 26.12 43.7431 26.036 43.3431 25.868C42.9431 25.692 42.5991 25.456 42.3111 25.16C42.0311 24.864 41.8111 24.52 41.6511 24.128C41.4991 23.736 41.4231 23.32 41.4231 22.88C41.4231 22.44 41.4991 22.024 41.6511 21.632C41.8111 21.232 42.0311 20.884 42.3111 20.588C42.5991 20.284 42.9431 20.048 43.3431 19.88C43.7431 19.704 44.1911 19.616 44.6871 19.616C45.1751 19.616 45.6151 19.704 46.0071 19.88C46.4071 20.056 46.7471 20.292 47.0271 20.588C47.3071 20.876 47.5191 21.216 47.6631 21.608C47.8151 21.992 47.8911 22.396 47.8911 22.82C47.8911 22.916 47.8871 23.008 47.8791 23.096C47.8711 23.176 47.8631 23.244 47.8551 23.3H42.8271C42.8511 23.58 42.9151 23.832 43.0191 24.056C43.1311 24.28 43.2711 24.476 43.4391 24.644C43.6151 24.804 43.8111 24.928 44.0271 25.016C44.2511 25.104 44.4831 25.148 44.7231 25.148C44.8991 25.148 45.0711 25.128 45.2391 25.088C45.4151 25.04 45.5751 24.976 45.7191 24.896C45.8631 24.808 45.9911 24.704 46.1031 24.584C46.2151 24.464 46.3031 24.332 46.3671 24.188L47.4951 24.512C47.2791 24.984 46.9191 25.372 46.4151 25.676C45.9191 25.972 45.3391 26.12 44.6751 26.12ZM46.5831 22.388C46.5591 22.124 46.4911 21.88 46.3791 21.656C46.2751 21.432 46.1391 21.244 45.9711 21.092C45.8031 20.932 45.6071 20.808 45.3831 20.72C45.1591 20.632 44.9231 20.588 44.6751 20.588C44.4271 20.588 44.1911 20.632 43.9671 20.72C43.7511 20.808 43.5591 20.932 43.3911 21.092C43.2231 21.244 43.0871 21.432 42.9831 21.656C42.8791 21.88 42.8151 22.124 42.7911 22.388H46.5831ZM48.5598 22.856C48.5598 22.416 48.6358 22 48.7878 21.608C48.9398 21.216 49.1558 20.872 49.4358 20.576C49.7238 20.28 50.0678 20.048 50.4678 19.88C50.8678 19.704 51.3158 19.616 51.8118 19.616C52.4598 19.616 53.0158 19.76 53.4798 20.048C53.9518 20.328 54.3038 20.704 54.5358 21.176L53.2518 21.584C53.0998 21.32 52.8958 21.116 52.6398 20.972C52.3838 20.82 52.0998 20.744 51.7878 20.744C51.5238 20.744 51.2758 20.796 51.0438 20.9C50.8198 21.004 50.6238 21.152 50.4558 21.344C50.2878 21.528 50.1558 21.748 50.0598 22.004C49.9638 22.26 49.9158 22.544 49.9158 22.856C49.9158 23.16 49.9638 23.444 50.0598 23.708C50.1638 23.964 50.2998 24.188 50.4678 24.38C50.6438 24.572 50.8438 24.724 51.0678 24.836C51.2998 24.94 51.5438 24.992 51.7998 24.992C51.9598 24.992 52.1198 24.972 52.2798 24.932C52.4398 24.884 52.5838 24.82 52.7118 24.74C52.8478 24.66 52.9638 24.568 53.0598 24.464C53.1638 24.36 53.2398 24.248 53.2878 24.128L54.5838 24.512C54.3758 24.984 54.0278 25.372 53.5398 25.676C53.0518 25.972 52.4758 26.12 51.8118 26.12C51.3238 26.12 50.8798 26.032 50.4798 25.856C50.0798 25.68 49.7358 25.444 49.4478 25.148C49.1678 24.844 48.9478 24.496 48.7878 24.104C48.6358 23.712 48.5598 23.296 48.5598 22.856ZM60.0389 26L58.0349 23.108L56.9909 24.092V26H55.6709V17.24H56.9909V22.796L59.8709 19.736H61.3109L58.8749 22.364L61.4429 26H60.0389ZM68.918 26.06C68.31 26.06 67.754 25.94 67.25 25.7C66.754 25.452 66.326 25.128 65.966 24.728C65.606 24.32 65.326 23.856 65.126 23.336C64.934 22.816 64.838 22.284 64.838 21.74C64.838 21.172 64.942 20.628 65.15 20.108C65.358 19.588 65.642 19.128 66.002 18.728C66.37 18.328 66.802 18.012 67.298 17.78C67.802 17.54 68.35 17.42 68.942 17.42C69.55 17.42 70.102 17.548 70.598 17.804C71.102 18.052 71.53 18.38 71.882 18.788C72.242 19.196 72.518 19.66 72.71 20.18C72.91 20.692 73.01 21.216 73.01 21.752C73.01 22.32 72.906 22.864 72.698 23.384C72.498 23.904 72.214 24.364 71.846 24.764C71.478 25.156 71.042 25.472 70.538 25.712C70.042 25.944 69.502 26.06 68.918 26.06ZM66.206 21.74C66.206 22.14 66.27 22.528 66.398 22.904C66.526 23.28 66.706 23.612 66.938 23.9C67.178 24.188 67.466 24.42 67.802 24.596C68.138 24.764 68.514 24.848 68.93 24.848C69.362 24.848 69.742 24.76 70.07 24.584C70.406 24.4 70.69 24.16 70.922 23.864C71.154 23.568 71.33 23.236 71.45 22.868C71.57 22.5 71.63 22.124 71.63 21.74C71.63 21.332 71.566 20.944 71.438 20.576C71.31 20.2 71.126 19.872 70.886 19.592C70.654 19.304 70.37 19.076 70.034 18.908C69.706 18.732 69.338 18.644 68.93 18.644C68.498 18.644 68.114 18.736 67.778 18.92C67.442 19.096 67.158 19.328 66.926 19.616C66.694 19.904 66.514 20.236 66.386 20.612C66.266 20.98 66.206 21.356 66.206 21.74ZM76.1654 26.12C75.5094 26.12 75.0134 25.908 74.6774 25.484C74.3414 25.052 74.1734 24.412 74.1734 23.564V19.724H75.4934V23.3C75.4934 24.428 75.8934 24.992 76.6934 24.992C77.0694 24.992 77.4254 24.876 77.7614 24.644C78.0974 24.412 78.3574 24.076 78.5414 23.636V19.724H79.8614V24.44C79.8614 24.592 79.8854 24.7 79.9334 24.764C79.9894 24.828 80.0854 24.864 80.2214 24.872V26C80.0854 26.024 79.9734 26.04 79.8854 26.048C79.7974 26.056 79.7134 26.06 79.6334 26.06C79.3934 26.06 79.1894 25.996 79.0214 25.868C78.8534 25.732 78.7654 25.56 78.7574 25.352L78.7334 24.728C78.4534 25.184 78.0894 25.532 77.6414 25.772C77.1934 26.004 76.7014 26.12 76.1654 26.12ZM85.0739 20.864C84.5619 20.88 84.1059 21 83.7059 21.224C83.3139 21.44 83.0339 21.752 82.8659 22.16V26H81.5459V19.724H82.7699V21.128C82.9859 20.696 83.2659 20.352 83.6099 20.096C83.9619 19.832 84.3379 19.688 84.7379 19.664C84.8179 19.664 84.8819 19.664 84.9299 19.664C84.9859 19.664 85.0339 19.668 85.0739 19.676V20.864ZM93.9141 19.484C93.8341 19.396 93.7181 19.304 93.5661 19.208C93.4141 19.104 93.2341 19.008 93.0261 18.92C92.8261 18.832 92.6021 18.76 92.3541 18.704C92.1141 18.648 91.8661 18.62 91.6101 18.62C91.0421 18.62 90.6221 18.724 90.3501 18.932C90.0861 19.14 89.9541 19.428 89.9541 19.796C89.9541 20.004 89.9941 20.176 90.0741 20.312C90.1621 20.44 90.2941 20.556 90.4701 20.66C90.6461 20.756 90.8661 20.844 91.1301 20.924C91.3941 20.996 91.7021 21.076 92.0541 21.164C92.4861 21.268 92.8741 21.384 93.2181 21.512C93.5701 21.64 93.8661 21.796 94.1061 21.98C94.3461 22.164 94.5301 22.392 94.6581 22.664C94.7941 22.928 94.8621 23.252 94.8621 23.636C94.8621 24.068 94.7781 24.44 94.6101 24.752C94.4501 25.064 94.2261 25.32 93.9381 25.52C93.6581 25.712 93.3301 25.856 92.9541 25.952C92.5781 26.04 92.1741 26.084 91.7421 26.084C91.0941 26.084 90.4661 25.988 89.8581 25.796C89.2581 25.596 88.7141 25.308 88.2261 24.932L88.8381 23.78C88.9421 23.884 89.0901 24 89.2821 24.128C89.4821 24.256 89.7101 24.376 89.9661 24.488C90.2301 24.592 90.5141 24.684 90.8181 24.764C91.1221 24.836 91.4381 24.872 91.7661 24.872C92.2941 24.872 92.7021 24.78 92.9901 24.596C93.2781 24.412 93.4221 24.14 93.4221 23.78C93.4221 23.564 93.3661 23.384 93.2541 23.24C93.1501 23.096 92.9981 22.972 92.7981 22.868C92.5981 22.756 92.3541 22.656 92.0661 22.568C91.7781 22.48 91.4501 22.388 91.0821 22.292C90.6581 22.18 90.2861 22.064 89.9661 21.944C89.6541 21.816 89.3941 21.664 89.1861 21.488C88.9781 21.312 88.8181 21.108 88.7061 20.876C88.6021 20.636 88.5501 20.348 88.5501 20.012C88.5501 19.596 88.6301 19.228 88.7901 18.908C88.9501 18.58 89.1661 18.308 89.4381 18.092C89.7181 17.868 90.0461 17.7 90.4221 17.588C90.7981 17.476 91.2061 17.42 91.6461 17.42C92.2221 17.42 92.7541 17.512 93.2421 17.696C93.7301 17.88 94.1581 18.108 94.5261 18.38L93.9141 19.484ZM98.886 26.12C98.398 26.12 97.954 26.036 97.554 25.868C97.154 25.692 96.81 25.456 96.522 25.16C96.242 24.864 96.022 24.52 95.862 24.128C95.71 23.736 95.634 23.32 95.634 22.88C95.634 22.44 95.71 22.024 95.862 21.632C96.022 21.232 96.242 20.884 96.522 20.588C96.81 20.284 97.154 20.048 97.554 19.88C97.954 19.704 98.402 19.616 98.898 19.616C99.386 19.616 99.826 19.704 100.218 19.88C100.618 20.056 100.958 20.292 101.238 20.588C101.518 20.876 101.73 21.216 101.874 21.608C102.026 21.992 102.102 22.396 102.102 22.82C102.102 22.916 102.098 23.008 102.09 23.096C102.082 23.176 102.074 23.244 102.066 23.3H97.038C97.062 23.58 97.126 23.832 97.23 24.056C97.342 24.28 97.482 24.476 97.65 24.644C97.826 24.804 98.022 24.928 98.238 25.016C98.462 25.104 98.694 25.148 98.934 25.148C99.11 25.148 99.282 25.128 99.45 25.088C99.626 25.04 99.786 24.976 99.93 24.896C100.074 24.808 100.202 24.704 100.314 24.584C100.426 24.464 100.514 24.332 100.578 24.188L101.706 24.512C101.49 24.984 101.13 25.372 100.626 25.676C100.13 25.972 99.55 26.12 98.886 26.12ZM100.794 22.388C100.77 22.124 100.702 21.88 100.59 21.656C100.486 21.432 100.35 21.244 100.182 21.092C100.014 20.932 99.818 20.808 99.594 20.72C99.37 20.632 99.134 20.588 98.886 20.588C98.638 20.588 98.402 20.632 98.178 20.72C97.962 20.808 97.77 20.932 97.602 21.092C97.434 21.244 97.298 21.432 97.194 21.656C97.09 21.88 97.026 22.124 97.002 22.388H100.794ZM106.707 20.864C106.195 20.88 105.739 21 105.339 21.224C104.947 21.44 104.667 21.752 104.499 22.16V26H103.179V19.724H104.403V21.128C104.619 20.696 104.899 20.352 105.243 20.096C105.595 19.832 105.971 19.688 106.371 19.664C106.451 19.664 106.515 19.664 106.563 19.664C106.619 19.664 106.667 19.668 106.707 19.676V20.864ZM109.431 26L107.031 19.724H108.387L110.187 24.884L111.999 19.724H113.247L110.847 26H109.431ZM114.183 26V19.724H115.503V26H114.183ZM114.183 18.692V17.24H115.503V18.692H114.183ZM116.681 22.856C116.681 22.416 116.757 22 116.909 21.608C117.061 21.216 117.277 20.872 117.557 20.576C117.845 20.28 118.189 20.048 118.589 19.88C118.989 19.704 119.437 19.616 119.933 19.616C120.581 19.616 121.137 19.76 121.601 20.048C122.073 20.328 122.425 20.704 122.657 21.176L121.373 21.584C121.221 21.32 121.017 21.116 120.761 20.972C120.505 20.82 120.221 20.744 119.909 20.744C119.645 20.744 119.397 20.796 119.165 20.9C118.941 21.004 118.745 21.152 118.577 21.344C118.409 21.528 118.277 21.748 118.181 22.004C118.085 22.26 118.037 22.544 118.037 22.856C118.037 23.16 118.085 23.444 118.181 23.708C118.285 23.964 118.421 24.188 118.589 24.38C118.765 24.572 118.965 24.724 119.189 24.836C119.421 24.94 119.665 24.992 119.921 24.992C120.081 24.992 120.241 24.972 120.401 24.932C120.561 24.884 120.705 24.82 120.833 24.74C120.969 24.66 121.085 24.568 121.181 24.464C121.285 24.36 121.361 24.248 121.409 24.128L122.705 24.512C122.497 24.984 122.149 25.372 121.661 25.676C121.173 25.972 120.597 26.12 119.933 26.12C119.445 26.12 119.001 26.032 118.601 25.856C118.201 25.68 117.857 25.444 117.569 25.148C117.289 24.844 117.069 24.496 116.909 24.104C116.757 23.712 116.681 23.296 116.681 22.856ZM126.577 26.12C126.089 26.12 125.645 26.036 125.245 25.868C124.845 25.692 124.501 25.456 124.213 25.16C123.933 24.864 123.713 24.52 123.553 24.128C123.401 23.736 123.325 23.32 123.325 22.88C123.325 22.44 123.401 22.024 123.553 21.632C123.713 21.232 123.933 20.884 124.213 20.588C124.501 20.284 124.845 20.048 125.245 19.88C125.645 19.704 126.093 19.616 126.589 19.616C127.077 19.616 127.517 19.704 127.909 19.88C128.309 20.056 128.649 20.292 128.929 20.588C129.209 20.876 129.421 21.216 129.565 21.608C129.717 21.992 129.793 22.396 129.793 22.82C129.793 22.916 129.789 23.008 129.781 23.096C129.773 23.176 129.765 23.244 129.757 23.3H124.729C124.753 23.58 124.817 23.832 124.921 24.056C125.033 24.28 125.173 24.476 125.341 24.644C125.517 24.804 125.713 24.928 125.929 25.016C126.153 25.104 126.385 25.148 126.625 25.148C126.801 25.148 126.973 25.128 127.141 25.088C127.317 25.04 127.477 24.976 127.621 24.896C127.765 24.808 127.893 24.704 128.005 24.584C128.117 24.464 128.205 24.332 128.269 24.188L129.397 24.512C129.181 24.984 128.821 25.372 128.317 25.676C127.821 25.972 127.241 26.12 126.577 26.12ZM128.485 22.388C128.461 22.124 128.393 21.88 128.281 21.656C128.177 21.432 128.041 21.244 127.873 21.092C127.705 20.932 127.509 20.808 127.285 20.72C127.061 20.632 126.825 20.588 126.577 20.588C126.329 20.588 126.093 20.632 125.869 20.72C125.653 20.808 125.461 20.932 125.293 21.092C125.125 21.244 124.989 21.432 124.885 21.656C124.781 21.88 124.717 22.124 124.693 22.388H128.485ZM140.999 17.48V26H139.643V22.244H135.347V26H134.003V17.48H135.347V21.044H139.643V17.48H140.999ZM145.515 26.12C145.027 26.12 144.583 26.036 144.183 25.868C143.783 25.692 143.439 25.456 143.151 25.16C142.871 24.864 142.651 24.52 142.491 24.128C142.339 23.736 142.263 23.32 142.263 22.88C142.263 22.44 142.339 22.024 142.491 21.632C142.651 21.232 142.871 20.884 143.151 20.588C143.439 20.284 143.783 20.048 144.183 19.88C144.583 19.704 145.031 19.616 145.527 19.616C146.015 19.616 146.455 19.704 146.847 19.88C147.247 20.056 147.587 20.292 147.867 20.588C148.147 20.876 148.359 21.216 148.503 21.608C148.655 21.992 148.731 22.396 148.731 22.82C148.731 22.916 148.727 23.008 148.719 23.096C148.711 23.176 148.703 23.244 148.695 23.3H143.667C143.691 23.58 143.755 23.832 143.859 24.056C143.971 24.28 144.111 24.476 144.279 24.644C144.455 24.804 144.651 24.928 144.867 25.016C145.091 25.104 145.323 25.148 145.563 25.148C145.739 25.148 145.911 25.128 146.079 25.088C146.255 25.04 146.415 24.976 146.559 24.896C146.703 24.808 146.831 24.704 146.943 24.584C147.055 24.464 147.143 24.332 147.207 24.188L148.335 24.512C148.119 24.984 147.759 25.372 147.255 25.676C146.759 25.972 146.179 26.12 145.515 26.12ZM147.423 22.388C147.399 22.124 147.331 21.88 147.219 21.656C147.115 21.432 146.979 21.244 146.811 21.092C146.643 20.932 146.447 20.808 146.223 20.72C145.999 20.632 145.763 20.588 145.515 20.588C145.267 20.588 145.031 20.632 144.807 20.72C144.591 20.808 144.399 20.932 144.231 21.092C144.063 21.244 143.927 21.432 143.823 21.656C143.719 21.88 143.655 22.124 143.631 22.388H147.423ZM153.336 20.864C152.824 20.88 152.368 21 151.968 21.224C151.576 21.44 151.296 21.752 151.128 22.16V26H149.808V19.724H151.032V21.128C151.248 20.696 151.528 20.352 151.872 20.096C152.224 19.832 152.6 19.688 153 19.664C153.08 19.664 153.144 19.664 153.192 19.664C153.248 19.664 153.296 19.668 153.336 19.676V20.864ZM156.824 26.12C156.336 26.12 155.892 26.036 155.492 25.868C155.092 25.692 154.748 25.456 154.46 25.16C154.18 24.864 153.96 24.52 153.8 24.128C153.648 23.736 153.572 23.32 153.572 22.88C153.572 22.44 153.648 22.024 153.8 21.632C153.96 21.232 154.18 20.884 154.46 20.588C154.748 20.284 155.092 20.048 155.492 19.88C155.892 19.704 156.34 19.616 156.836 19.616C157.324 19.616 157.764 19.704 158.156 19.88C158.556 20.056 158.896 20.292 159.176 20.588C159.456 20.876 159.668 21.216 159.812 21.608C159.964 21.992 160.04 22.396 160.04 22.82C160.04 22.916 160.036 23.008 160.028 23.096C160.02 23.176 160.012 23.244 160.004 23.3H154.976C155 23.58 155.064 23.832 155.168 24.056C155.28 24.28 155.42 24.476 155.588 24.644C155.764 24.804 155.96 24.928 156.176 25.016C156.4 25.104 156.632 25.148 156.872 25.148C157.048 25.148 157.22 25.128 157.388 25.088C157.564 25.04 157.724 24.976 157.868 24.896C158.012 24.808 158.14 24.704 158.252 24.584C158.364 24.464 158.452 24.332 158.516 24.188L159.644 24.512C159.428 24.984 159.068 25.372 158.564 25.676C158.068 25.972 157.488 26.12 156.824 26.12ZM158.732 22.388C158.708 22.124 158.64 21.88 158.528 21.656C158.424 21.432 158.288 21.244 158.12 21.092C157.952 20.932 157.756 20.808 157.532 20.72C157.308 20.632 157.072 20.588 156.824 20.588C156.576 20.588 156.34 20.632 156.116 20.72C155.9 20.808 155.708 20.932 155.54 21.092C155.372 21.244 155.236 21.432 155.132 21.656C155.028 21.88 154.964 22.124 154.94 22.388H158.732Z" fill="white"/>
                            <path d="M7.04762 6.89453H1V51.2437H174.36V45.1961" stroke="white"/>
                        </svg>
                    </a>
                </div>
            </div>
        `;
        $( fimelaEvent ).insertAfter( $('.content-promotion:eq(0)') );
    }
});
/*** END of [#184435187] Gateway Fimela Event - Desktop ****/

/*** START of [#180535384] menu bar tambah menu zodiak - Desktop ****/
var zodiakMenu = `<li class="fimela--header--menu__item"><a class="ui--a info fimela--header--menu__link" href="/zodiak" title="zodiak">zodiak</a></li>`;
var infoMenu = `<li class="fimela--header--menu__item__more_sub_menu"><a href="/info" class="Info fimela--header--menu__item__more_link_sub_menu" title="info">info</a></li>`;
$('.fimela--header--menu__item').eq(5).remove();
$('.fimela--header--menu__item').eq(4).after(zodiakMenu);
$('.fimela--header--menu__item__more_sub_menu').last().after(infoMenu);
/*** END of [#180535384] menu bar tambah menu zodiak - Desktop ****/

/*** START of [#181324478] FE Custom Page Widget Signature - Desktop ****/
$(document).ready(function () {
    (function () {
        const handler = {
            'iframe': function () {
                const iframe = `<iframe class="iframe-widget-fimela-signature" src="/pages/widget-signature" width="100%" height="320" style="border:none;" scrolling="no"></iframe>`
                return iframe;
            },
            'pasang': function () {
                const pageType = window.kmklabs.pageType;
                const channelId = window.kmklabs.category.id;
                const channelSlug = window.kmklabs.channel.full_slug;
                if(pageType === 'ChannelPage' && channelId === 841 && channelSlug === ''){
                    $('.fimela-signature').eq(0).empty();
                  	$('.fimela-signature').eq(0).append($(this.iframe()));
                }
            },
        }

        handler.pasang();
    })();
});
/*** END of [#181324478] FE Custom Page Widget Signature - Desktop ****/

/*** START of review core [desktop] ****/
//window.addEventListener('load', () => {
$(document).ready(function() {
if (window.location.pathname.startsWith('/review/add')) {
  setInterval(function(){
  	console.log('refresh recaptcha');
    onLoadRecaptchaCallback();
  }, 108000);
  
    async function setBrandList() {
        await $.getJSON('https://www.newshub.id/api/widget-json/127/&token=a34b2ef0831684c93fecdf5362de0531', function(data) {

            const formInput = {
                do: function () {
                    const dropdownElement = $('.review-form__form-subcategory');
                    const formSelectInput = $('.review-form__form-input--select');

                    $('.review-form__form-input--select').not('.review-form__form-input--select-brand').each(function () {
                        $(this).click(function () {
                            if ($(this).siblings(".review-form__form-subcategory").hasClass("hide")) {
                                $(this).siblings(".review-form__form-subcategory").removeClass("hide");
                                $(".review-form__form-subcategory").not($(this).siblings(".review-form__form-subcategory")).addClass("hide");
                                
                                $(this).siblings(".review-form__form-input--select__arrow").addClass("review-form__form-input--select__arrow--rotate");
                                $(".review-form__form-input--select__arrow").not($(this).siblings(".review-form__form-input--select__arrow")).removeClass("review-form__form-input--select__arrow--rotate");
                                
                                $(this).parents(".input-wrapper").addClass("input-wrapper--open");
                                $(".layout__content, .layout__nav-content").prepend('<div class="review-form-background"></div>');
                            } else {
                                $(this).siblings(".review-form__form-subcategory").addClass("hide");
                                $(this).siblings(".review-form__form-input--select__arrow").removeClass("review-form__form-input--select__arrow--rotate");
                                
                                $(this).parents(".input-wrapper").removeClass("input-wrapper--open");
                                $(".review-form-background").remove();
                            }
                        });

                        if ($(this).siblings(".review-form__form-subcategory").find(".review-form__form-subcategory__list-item.dropdown").length > 0) {
                            $('.review-form__form-subcategory__list-item.dropdown').each(function () {
                                $(this).click(function () {
                                    if ($(this).find(".review-form__form-subcategory__list-item-wrapper").hasClass("hide")) {
                                        $(this).find(".review-form__form-subcategory__list-item-wrapper").removeClass("hide");
                                        $(".review-form__form-subcategory__list-item-wrapper").not($(this).find(".review-form__form-subcategory__list-item-wrapper")).addClass("hide");
                                        
                                        $(this).find(".review-form__form-subcategory__list-item-head").addClass("review-form__form-subcategory__list-item-head--rotate");
                                        $(".review-form__form-subcategory__list-item-head").not($(this).find(".review-form__form-subcategory__list-item-head")).removeClass("review-form__form-subcategory__list-item-head--rotate");
                                    } else {
                                        
                                        $(this).find(".review-form__form-subcategory__list-item-wrapper").addClass("hide");
                                        $(this).find(".review-form__form-subcategory__list-item-head").removeClass("review-form__form-subcategory__list-item-head--rotate");
                                    }
                                })
                            });
                        }
                    });

                    if ($('.review-form__form-input--select-brand').attr('id') === 'input-brand') {
                        const getBrand = data.cols.brand;
                        localStorage.setItem("brand-name", JSON.stringify(getBrand));
                        const listBrand = JSON.parse(localStorage.getItem("brand-name"));

                        formInput.autocomplete(
                            document.querySelector("input[id='input-brand']"),
                            listBrand
                        );
                    }

                    this.handleInputSelected();
                    this.ratingInput();
                    this.uploadImage();
                    this.setIpAddressAndReferer();
                },

                setIpAddressAndReferer: function() {
                    $.get('https://api.ipify.org?format=json', function(data) {
                        if (data) {
                            $('input[name=ip_address]').val(data.ip);
                        }
                    });

                    $('input[name=referer]').val(window.location.href);
                },
                handleInputSelected: function () {
                    const dropdownOptions = document.querySelectorAll('.review-form__form-subcategory__list-item-child');
                    dropdownOptions.forEach(option => option.addEventListener('click', setOptionSelected));

                    function setOptionSelected(e) {
                        const id = e.target.id;
                        const newValue = e.target.textContent + ' ';
                        const titleElem = $(this).parents(".input-wrapper").children(".review-form__form-input");

                        titleElem.text(newValue);
                        titleElem.trigger('change');
                        titleElem.addClass("form-control--selected");

                        $(this).parents(".review-form__form-subcategory").addClass("hide");
                        $(".review-form__form-input--select__arrow").removeClass("review-form__form-input--select__arrow--rotate");

                        $(this).parents(".input-wrapper").removeClass("input-wrapper--open");
                        $(".review-form-background").remove();
                    }
                },

                autocomplete: function(input, listbrand) {
                    var currentFocus;

                    input.addEventListener("input", function(e) {
                        var brandListElement, brandItemElement, i, value = this.value;
                        let notFoundLength = 0;

                        closeAllLists();

                        if (!value) {
                        $('.review-form__form-subcategory--brand').addClass('hide');
                        return false;
                        }
                        
                        brandListElement = document.createElement("ul");
                        brandListElement.setAttribute("class", "review-form__form-subcategory__list-brand"); 
                        $(this).siblings('.review-form__form-subcategory').append(brandListElement);
                        
                        for (i = 0; i < listbrand.length; i++) {
                            var arrData = listbrand[i];

                            if (arrData.toUpperCase().indexOf(value.toUpperCase()) != -1) {
                                $('.review-form__form-subcategory--brand').removeClass('hide');

                                brandItemElement = document.createElement("li");
                                brandItemElement.setAttribute("class", "review-form__form-subcategory__list-item-child");
                                brandItemElement.innerHTML = arrData;
                                brandItemElement.innerHTML += "<input id='brand-input' type='hidden' value='" + arrData + "'>";

                                brandItemElement.addEventListener("click", function(e) {
                                    input.value = this.querySelector("#brand-input").value;
                                    $('.review-form__form-subcategory--brand').addClass('hide');
                                    closeAllLists();
                                });
                    
                                brandListElement.appendChild(brandItemElement);
                            } else {
                                notFoundLength += 1;
                            }
                        }

                        if (notFoundLength == listbrand.length) {
                            $('.review-form__form-subcategory--brand').addClass('hide');
                        } else {
                            $('.review-form__form-subcategory--brand').removeClass('hide');
                        }

                    });
                    function closeAllLists(elmnt) {
                        var brandItemElement = document.getElementsByClassName("review-form__form-subcategory__list-brand");
                        for (var i = 0; i < brandItemElement.length; i++) {
                            if (brandItemElement != brandItemElement[i] && brandItemElement != input) {
                                brandItemElement[i].parentNode.removeChild(brandItemElement[i]);
                            }
                        }
                    }
                
                    document.addEventListener("click", function(e) {
                        closeAllLists(e.target);
                    });

                    input.addEventListener('focus', function() {
                        $('#input-brand').parents(".input-wrapper").addClass("input-wrapper--open");
                        $(".layout__content, .layout__nav-content").prepend('<div class="review-form-background"></div>');
                    }, true);

                    input.addEventListener('blur', function() {
                        $('#input-brand').parents(".input-wrapper").removeClass("input-wrapper--open");
                        $(".review-form-background").remove();
                    }, true);
                },

                ratingInput: function () {
                    $('.review-form__form-input__rating-love li').on('click', function () {
                        const onLove = parseInt($(this).data('value'), 10); // The love currently selected
                        const loves = $(this).parent().children('li.review-form__form-input__rating-love__item');

                        $('#input-rating').val(onLove);

                        for (i = 0; i < loves.length; i++) {
                            $(loves[i]).removeClass('review-form__form-input__rating-love__item--selected');
                        }

                        for (i = 0; i < onLove; i++) {
                            $(loves[i]).addClass('review-form__form-input__rating-love__item--selected');
                        }

                    });
                },

                uploadImage: function() {
                    $('input[type=file]').change(function(e) {
                        if (this.files && this.files[0]) {
                            //check extension and size
                            var allowed_extensions = new Array("jpg","png","gif","jpeg");
                            var file_extension = this.files[0].name.split('.').pop().toLowerCase();

                            var valid = false;
                            for (var i = 0; i <= allowed_extensions.length; i++) {
                                if (allowed_extensions[i]==file_extension) {
                                    valid = true; // valid file extension
                                }
                            }

                            if (!valid) {
                                showPopUpNotification('Gambar tidak valid, ekstensi gambar harus (JPG | PNG | GIF)');
                                $('.message-box-review__content__text').css('width', '200px');
                            }

                            if (this.files[0].size >= 2000000) { //exceeded limit file size
                                showPopUpNotification('Ukuran gambar terlalu besar (maksimal 2 MB)');
                                valid = false;
                            } 

                            if (valid) {
                                formInput.readImage(this.files[0], this);
                                $('input[name="valid_image"]').val(1);
                            }
                        }
                    });
                },

                readImage: function(file, input) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        $(input).parent().css({'background-image': 'url("./e.target.result.xml")', 'background-size': 'contain'});
                    }
                    reader.readAsDataurl("./file.xml");
                }
            }

            formInput.do();
        });
    }
  
   	function showPopUpNotification(msg) {
        let msgBox = `<div class="message-box-review">
            <i class="message-box-review__icon message-box-review__icon-failed"></i>
            <h2 class="message-box-review__title message-box-review__title-failed">Ooops</h2>
            <div class="message-box-review__content">
                <p class="message-box-review__content__text">${msg}</p>
                <a class="message-box-review__content__link close-popup">Lanjutkan Input</a>
            </div>
        </div>`;

        $('form.review-form__form').before(msgBox);
        insertFormReviewBackground();
    }
  
  	function insertFormReviewBackground() {
        if ($('div.message-box-review').length > 0) {
            $(".layout__content, .layout__nav-content").prepend('<div class="review-form-background"></div>');
            $('.message-box-review').fadeIn(1000);
            $("body").css('overflow', 'hidden');
        }
    }

    insertFormReviewBackground();

    setBrandList();

    $(document).on('click', '.review-form-background', function() {
        $('.message-box-review').remove();
        $('.review-form-background').remove();
        $("body").css('overflow', 'auto');
    });

    $(document).on('click', 'a.close-popup', function() {
        $('.message-box-review').remove();
        $('.review-form-background').remove();
        $("body").css('overflow', 'auto');
    });

    $('form.review-form__form').on('submit', function(e) {
        $('input[name=age]').val($('#input-age').text());
        $('input[name=category]').val($('#input-category').text());
        $('input[name=skin_type]').val($('#input-skintype').text());
        $('input[name=skin_color]').val($('#input-skincolor').text());
        $('input[name=repeat_order]').val($('#input-repeatorder').text());

        let name = $('input[name=name]').val();
        let age = $('input[name=age]').val();
        let category = $('input[name=category]').val();
        let skin_type = $('input[name=skin_type]').val();
        let brand = $('input[name=brand]').val();
        let rating = $('input[name=rating]').val();
        let title = $('input[name=title]').val();
      	let content = tinyMCE.get("content-review").getBody().innerText.trim();
        let valid = $('input[name=valid_image]').val();
        let skin_color = $('input[name=skin_color]').val();
        let repeat_order = $('input[name=repeat_order]').val();

        //validasi
        if (name == "" || age == "Umur" || category == "Kategori Produk" || skin_type == "Tipe Kulit" || skin_color == "Warna Kulit" || repeat_order == "Beli Lagi?" || brand == "" || rating == null || title == "" || content == "") {
            showPopUpNotification('Semua Data Harus Diisi!');
            e.preventDefault();
            return;
        }

        if (valid == 0) {
            showPopUpNotification('Upload Minimal 1 Foto Produk !');
            e.preventDefault();
        }
      
      
      	if($('input[type="checkbox"]').prop("checked") == false){
        		showPopUpNotification('Anda Harus Mencentang Kolom Syarat & Ketentuan');
            e.preventDefault();
        }
    });
}
  });
/*** END of review core [desktop] ****/

/*** START of Add Style Marcom1 Banner [Temporary] ****/
$(document).ready(function() {
	if(window.kmklabs.pageType === "ReadPage") {
		$('#div-gpt-ad-fimela-marcomm1').css('margin-top', '20px');
	}	
});
/*** END of Add Style Marcom1 Banner [Temporary] ****/

/*** START of [GPT] INFEED SDK ****/
var infInitCfg = {
                publisherId : 4621805654,
                wrapperPage : 'https://www.fimela.com/infeed/',
                seoUrl : true,
                slots : ['inf-1', 'inf-2', 'inf-3','inf-4', 'inf-5', 'inf-6'],
                templateID : 125               
        };

  document.write('<scr' + 'ipt async="async" src="https://d.infeed.id/resources/js/v0.0.2/infeed-init.js"></scr' + 'ipt>');
/*** END of [GPT] INFEED SDK ****/

/*** START of [#171640559] Hide Content Promotion Beauty Journal by SOCIOLLA ****/
$(document).ready(function() {
	if (window.kmklabs.pageType === "ChannelPage") {
		const contentPromotionSTM = $(".fimela--articles--iridescent-list__wrapper__content--promotion .fimela--section-title__link");

		contentPromotionSTM.each(function() {
			if (this.text.toLowerCase() === "beauty journal by sociolla") {
				$(this).parents(".fimela--articles--iridescent-list__wrapper__content--promotion").hide();
			}
		});	
	}
});
/*** END of [#171640559] Hide Content Promotion Beauty Journal by SOCIOLLA ****/

/*** START of [#165673144] [Fimela] Pasang Content Buzzer desktop ****/
//window.addEventListener('DOMContentLoaded', function () {
$(document).ready(function() {
    (function () {
        const appendSpinder = {
            'do': function () {

                const rawHTML = `
                    <script src="https://www.newshub.id/sdk/v1.0.js#ramadan-berbagi" 
                        com-button-share=".read-page--social-share" 
                        com-announcement="after:.read-page--social-share" 
                        id="newshub-jssdk">
                    <\/script>
                    <style>
                      #frame_button_share{
                      	width: 300px !important;
												margin-top: 5px;
                      }
                    <\/style>
                    `;

                const body = document.querySelector('body');
                    $(body).prepend(rawHTML);
            }
        }
        
        if($(".fimela-tags--snippet__list").length > 0){
          const tag = $(".fimela-tags--snippet__list")[0].textContent.toLowerCase();
          if(tag.indexOf("ramadan 2019") > -1 && window.kmklabs.pageType === "ReadPage"){
              appendSpinder.do();
          }
        }
        
    })();
})
/*** END of [#165673144] [Fimela] Pasang Content Buzzer desktop ****/

/*** START of [#181505610] Pindah Posisi Video Boost - Desktop ****/
$(window).load(function() {
    if (window.kmklabs.pageType === 'ReadPage') {
        $('.read-page--boost-video').insertAfter($('.article-content-body__item-content').first());
    }
});
/*** END of [#181505610] Pindah Posisi Video Boost - Desktop ****/

