"use strict";

function app() {
	this.init();
}

utils.addEvent(document, 'DOMContentLoaded', function() {
	window.appInst = new app();
});



app.prototype.init = function() {
	var self = this;
	self.rootElement = document.getElementById("app");

	function require(module) {
		return self[module + "Module"].call(self, Array.prototype.slice.call(arguments, 1));
	}

	self.consent = require("consent");
	self.localStorage = require("storage", "localStorage");
	self.sessionStorage = require("storage", "sessionStorage");
	self.navigation = require("navigation");
	self.user = require("user");

	return self;
};



app.prototype.storageModule = function(params) {
	var self = this,
		M;

	var activeStorageType;
	var STORAGE_TYPE_LOCALSTORAGE = "localStorage";
	var STORAGE_TYPE_SESSIONSTORAGE = "sessionStorage";
	var STORAGE_TYPE_FALLBACKSTORAGE = "fallbackStorage";

	// keep order of storages: best first, worst last
	var storageTypes = [
		STORAGE_TYPE_LOCALSTORAGE,
		STORAGE_TYPE_SESSIONSTORAGE
	];

	function module(){ // define private vars
	}

	var storagePrototype = module.prototype;

	storagePrototype.init = function(params) {
		setStorage(params[0]);
	};

	function setStorage(storageType) {
		var idx = utils.indexOf(storageTypes, storageType);
		var requiredStorageType;
		if (idx != -1) {
			requiredStorageType = storageTypes.splice(idx, 1);
		}
		if (requiredStorageType && testStorage(requiredStorageType)) {
			activeStorageType = requiredStorageType;
		} else {
			for (var curIdx = 0, len = storageTypes.length; curIdx < len; curIdx++) {
				var alternativeStorageType = storageTypes[curIdx];
				if (testStorage(alternativeStorageType)) {
					activeStorageType = alternativeStorageType;
					break;
				}
			}
		}
		if (!activeStorageType) {
			createFallbackStorage();
		}
	}

	function testStorage(storageType) {
		if (typeof window[storageType] == 'undefined') {
			return false;
		}
		var storage = window[storageType];
		try {
			storage.setItem('test', 1);
			storage.removeItem('test');
			return true;
		} catch (e) {
			return false;
		}
	}

	// Create a storage stub (same api like local-/sessionStorage)
	function createFallbackStorage() {
		activeStorageType = STORAGE_TYPE_FALLBACKSTORAGE;
		window[activeStorageType] = {
			data: {},
			getItem: function (key) {
				return this.data[key];
			},
			setItem: function (key, value) {
				this.data[key] = value;
			},
			removeItem: function () {
				try {
					delete this.data[key];
				} catch (e) {
				}
			},
			clear: function () {
				this.data = {};
			}
		};
	}

	storagePrototype.getStorageType = function() {
		return activeStorageType;
	};

	storagePrototype.isFallbackStorage = function() {
		return M.getStorageType() == STORAGE_TYPE_FALLBACKSTORAGE;
	};

	storagePrototype.getStorage = function() {
		return window[M.getStorageType()];
	};

	storagePrototype.getItem = function(key) {
		var value = M.getStorage().getItem(key);
		try {
			return JSON.parse(value+"");
		} catch (e) {
			return value;
		}
	};

	storagePrototype.setItem = function(key, value) {
		if (typeof value == "object") {
			value = JSON.stringify(value);
		}
		// type cast
		key+="";
		value+="";
		return M.getStorage().setItem(key, value);
	};

	storagePrototype.removeItem = function(key) {
		return M.getStorage().removeItem(key);
	};

	storagePrototype.clear = function() {
		return M.getStorage().clear();
	};

	M = new module();
	M.init(params);

	return M;
};



app.prototype.navigationModule = function() {
	var self = this,
		M;

	function module(){ // define private vars

	}

	var navigationPrototype = module.prototype;

	navigationPrototype.init = function() {
		// Skip language detection (and redirect) when hreflang is already set in storage
		if (!M.detectLanguageRedirect()) {
			var language = navigator.language ? navigator.language : "";
			M.languageRedirect(language);
		}

		if (document.querySelector){
			// querySelector* methods required
			M.initLanguageSwitch();
			M.nav = self.rootElement.querySelector('#navmain');
			// M.highlightActive();
		}
	};

	navigationPrototype.detectLanguageRedirect = function(){
		var qs = self.getUrlParams(),
			hl = self.sessionStorage.getItem("hl") || '';

		if (qs.hl) {
			hl = ''+qs.hl;
			self.sessionStorage.setItem("hl", hl);
		}

		return hl;
	};

	navigationPrototype.initLanguageSwitch = function() {
		var languageSwitch = document.querySelectorAll('[data-language-switch]');

		for (var i = 0, len=languageSwitch.length; i < len; ++i) {
			var currentNode = languageSwitch[i];

			if (currentNode.tagName == "SELECT") {
				currentNode.onchange = function() {
					M.languageRedirect(this.value);
				}
			} else { //if (currentNode.tagName == "A")
				currentNode.onclick = function() {
					M.languageRedirect(this.getAttribute('hreflang'))
				}
			}
		}
	};

	navigationPrototype.languageRedirect = function(hl) {
		var url = M.getAlternateurl("./hl.html"),
			qs = self.getUrlParams(url);

		if (!url) {
			return false;
		}

		url += qs[0] ? '&' : '/?';

		document.querySelector('body').style.opacity = '0.1';
		document.location.href = url + 'hl=' + hl;
	};

	navigationPrototype.getAlternateURL = function(hl) {
		var element;
		try {
			element = document.querySelector('link[hreflang^=' + hl + ']');
		} catch (e) {}

		return element ? element.getAttribute('href') : '';
	};

	navigationPrototype.highlightActive = function(){
		var navItems = M.nav.querySelectorAll('a');
		var href = '';
		var element;
		var path = window.location.pathname;

		if(window.highlightNavFromLocalStorage){
			path = self.sessionStorage.getItem("lastActivePath");
		}

		for (var i = 0, len=navItems.length; i < len; ++i) {
			element = navItems[i];
			href = element.getAttribute('href');

			if(path === href){
				if (element && element.classList) {
					element.classList.add('active');
				}
				self.sessionStorage.setItem("lastActivePath", path);
			}
		}
	};

	navigationPrototype.toggle = function() {
		M.nav.classList.toggle('open');
		self.rootElement.classList.toggle('show-offcanvas-nav');
	};

	navigationPrototype.open = function() {
		M.nav.classList.add('open');
		self.rootElement.classList.add('show-offcanvas-nav');
	};

	navigationPrototype.close = function() {
		M.nav.classList.remove('open');
		self.rootElement.classList.remove('show-offcanvas-nav');
	};

	//create new instance of Module
	M = new module();
	//initialize Module
	M.init();

	return M;
};

// get query params of the current url only
app.prototype.getUrlParams = function(a, b, c) {
	a = /[?&]?([^=]+)=([^&]*)/g, b = document.location && document.location.search ? document.location.search.split("+").join(" ") : "";
	for (var d = {}; c = a.exec(b);) d[decodeURIComponent(c[1])] = decodeURIComponent(c[2]);
	return d;
};

// get query params from any given query string
app.prototype.getQueryParams = function getQueryParams(qs) {
	qs = qs.split("+").join(" ");

	var params = {},
		tokens,
		re = /[?&]?([^=]+)=([^&]*)/g;

	while (tokens = re.exec(qs)){
		params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
	}

	return params;
};



app.prototype.userModule = function() {
	var self = this,
		M,
		currentUser = {
			"id": null
		};

	function module(){ // define private vars
	}

	var userPrototype = module.prototype;

	/**
	 * Set current user object
	 * If none exists, create a unique id for
	 */
	userPrototype.init = function() {
		var storage = self.localStorage;
		var userKey = "user";
		currentUser = storage.getItem(userKey);
		if (!currentUser || !currentUser.id) {
			currentUser = {
				"id": utils.getGUID()
			};
			storage.setItem(userKey, currentUser);
		}
	};

	userPrototype.getCurrentUser = function() {
		return currentUser;
	};

	//create new instance of Module
	M = new module();
	//initialize Module
	M.init();

	return M;
};



app.prototype.consentModule = function(){

    function module() { 
    }

    var modulePrototype = module.prototype;
    
    var CONSENT_STORAGE_KEY = "fa-games-consent-given";
    var CONSENT_FALLBACK_DELAY_MS = 1500;
    var googleConsentActive = false;

    modulePrototype.init = function() {

        // Check if consent is handled via Google privacy and messaging API
        window.googlefc = window.googlefc || {};
        window.googlefc.ccpa = window.googlefc.ccpa || {}
        window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];

        googlefc.callbackQueue.push({
            'CONSENT_API_READY': function() {
                googleConsentActive = true
            }
        }); 
        googlefc.callbackQueue.push({
            'CONSENT_DATA_READY': function() {
                // store custom consent flag to prevent fallback overlay from showing
                storeConsent();
            }
        });     
          
        // Setup custom consent overlay as fallback solution via timeout
        setTimeout(function() {
            if (googleConsentActive)
                return;
            if (document.readyState === "complete" || document.readyState === "interactive"
                    || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
                initConsentBox();
            } else {
                document.addEventListener("DOMContentLoaded", initConsentBox);
            }
        }, CONSENT_FALLBACK_DELAY_MS);
    }

    function initConsentBox() {

        if (hasStoredConsent())
            return;

        injectStyle();

        var consentBoxHolder = document.createElement("div");
        var consentBox = document.createElement("div");
        var consentBoxLogo = document.createElement("div");
        var consentMessage = document.createElement("p");
        var consentButton = document.createElement("button");
        var consentLinks = document.createElement("p");

        consentBoxHolder.classList.add("consent-box-holder");
        consentBox.classList.add("consent-box");
        consentBoxLogo.classList.add("consent-box-logo");
        consentMessage.classList.add("consent-box-message");
        consentButton.classList.add("consent-box-button");
        consentLinks.classList.add("consent-box-links");

        consentMessage.innerHTML = '<strong>Data Privacy Information:</strong> Our games store your highscores and game progress, track your gaming behaviour and display ads based on your interests. We save an anonymous cookie so we can recognize you. Click on the OK button if you agree and are at least 16 years of age.</p>';
        consentLinks.innerHTML = '<a href="https://famobi.com/vendors/" target="_blank" data-famobi-href="">Ad Vendors</a>&nbsp;<span>&amp;</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href="">Privacy Policy</a>';

        consentButton.type = "button";
        consentButton.innerHTML = "OK";
        consentButton.addEventListener("click", function(){
            consentBoxHolder.style.display = "none";
            maskPage(false);
            storeConsent();
        });

        consentBoxHolder.appendChild(consentBox);
        consentBox.appendChild(consentBoxLogo);
        consentBox.appendChild(consentMessage);
        consentBox.appendChild(consentButton);
        consentBox.appendChild(consentLinks);

        document.body.insertBefore(consentBoxHolder, document.body.firstChild);
        maskPage(true);
    };

    function injectStyle() {
        document.querySelector('head').innerHTML += `
                <style type="text/css">
                    .consent-box-holder {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: fixed;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        z-index: 100;
                    }
                    .consent-box {
                        background-color: white;
                        opacity: 1;
                        max-width: 30em;
                        border-radius: 1em;
                        box-shadow: 0px 1px 8px 0px rgba(0,0,0,0.35);
                        padding: 1em;
                        margin: 1em;
                        font-size: medium;
                        text-align: center;
                    }
                    .consent-box-message {
                        text-align: left;
                    }
                    .consent-box-button {
                        display: inline-block;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
                        text-decoration: none;
                        padding: 10px 20px;
                        border: 2px solid #8a8a8a;
                        border-radius: 10px;
                        font-weight: 400;
                        font-size: 120%;
                        white-space: nowrap;
                        border-color: #378E00;
                        background-color: #378E00;
                        color: #fff;
                    }
                    .consent-box-logo {
                        display: inline-block;
                        width: 7.5em;
                        height: 3em;
                        background: url("../../../../img.cdn.famobi.com/famobi_logos/FamobiLogo_Typo.svg") no-repeat 0 0;
                        background-size: auto 3em;
                        border: none;
                    }
                    div.app-container {
                        transition-property: opacity;
                        transition-duration: 1s;
                    }
                </style>;
            `
    }

    function maskPage(enabled) {
        try {
            document.querySelector("div.app-container").style.filter = enabled ? "blur(8px)" : "none";
            document.querySelector("div.app-container").style.opacity = enabled ? "0.6" : "1";
        } catch(e) {
            console.warn("cannot mask/unmask page", e);
        }
    }

    function storeConsent() {
        try {
            sessionStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(true));
        } catch(e) {
            console.log("could not store consent state in session storage");
        }
    }

    function hasStoredConsent() {
        var hasConsent = false;
        try {
            hasConsent = !!JSON.parse(sessionStorage.getItem(CONSENT_STORAGE_KEY));
        } catch(e) {
            console.log("could not retrieve consent state from session storage");
        }     
        return hasConsent;   
    }

    var M = new module();
    M.init();
    
    return M;
};