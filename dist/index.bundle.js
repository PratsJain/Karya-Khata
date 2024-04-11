/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/font.ttf */ "./src/assets/font.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'neon';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
}
:root {
    --font-size-1: 20px;
    --font-size-2: 18px;
    --font-size-3: 15px;
    --sidebar-bkc: #082f49;
    --container-level-padding: 20px;
    --backdrop-col: black;
    --button-border-radius: 30px;
    --input-border-radius: 30px;
    --card-border-radius: 25px;
    --box-shadow-col: rgba(0, 0, 0, 0.2);
    --card-shadow: 2px 2px 10px 0px var(--box-shadow-col);
    --font-color: black;
    --sidebar-font-color: white;
    color: var(--font-color);
    --peach-col-1: #fff1f2;
    --peach-col-2: #ffe4e6;
    --peach-col-3: #fecdd3;
    --peach-col-4: #fda4af;
    --peach-col-5: #fb7185;
    --peach-col-6: #f43f5e;
    --peach-col-7: #e11d48;
    --peach-col-8: #be123c; 
    --bkg-color: white;
    --board-bkc: var(--peach-col-1);
    --icon-filter: invert(0);
}

* {
    margin: 0;
    padding: 0;
}

body {
    background-color: var(--bkg-color);
    height: 100vh;
    font-family: 'neon', Roboto, Oxygen, Ubuntu, sans-serif, sans-serif, sans-serif;
    box-sizing: border-box;
    font-size: var(--font-size-3);
}



.backdrop {
    pointer-events: none;
    position: fixed;
    inset: 0;
    background: var(--backdrop-col);
    opacity: 0%;
    display: none;
    transition: opacity 300ms, display 300ms allow-discrete;
    transition-delay: 100ms;
}

.popup-modal {
    padding: var(--container-level-padding);
    background-color: var(--bkg-color);
    /* border: 1px solid black; */
    box-shadow: var(--card-shadow);
    border-radius: var(--card-border-radius);
    position: fixed;
    top: 50%;
    left: 50%;
    transform-origin: center;
    transform: translate(-50%, -150%);
    font-size: var(--font-size-3);
    pointer-events: none;
    opacity: 0%; 
    transition: transform 300ms, opacity 300ms, display 300ms allow-discrete;
    transition-timing-function: ease; 
    transition-delay: 100ms;
}

.login-form-container {
    width: 300px;
}


.login-form-container label,
.login-form-container input {
    display: block;
    width: 100%;
    height: 25px;
}

.login-form-container label {
    font-weight: 200;
    height: auto;
    margin-top: 10px;
    padding-left: 5px;
}

.login-form-container input {
    font-size: var(--font-size-3);
    appearance: none;
    border: 1px solid silver;
    border-radius: var(--input-border-radius);
    padding-left: 10px;
}

.login-form-container input:hover {
    background-color: aliceblue;
}

.login-form-container input:focus {
    background-color: var(--bkg-color);
    outline: none;
    
}

button {
    appearance: none;
    font: inherit;
    width: 100%;
    height: 2rem;
    margin-top: 20px;
    border-radius: var(--button-border-radius);
    background-color: var(--sidebar-bkc);
    color: white;
    outline: none;
    box-shadow: none;
}

button:hover {
    cursor: pointer;
}


.theme {
    width: 50px;
    height: 50px;
    border-radius: 40px;
    background-color: var(--bkg-color);
    position: fixed;
    /* top: var(--container-level-padding); */
    right: var(--container-level-padding);
    border: none;
    box-shadow: var(--card-shadow);
    display: flex;
    align-items: center;
    justify-content: center;
}

.theme-icon {
    height: 30px;
    width: 30px;
    filter: var(--icon-filter);
}
.backdrop.show {
    opacity: 30%;
    display: block;
    pointer-events: all;
}

.popup-modal.show {
    opacity: 100%;
    display: block;
    pointer-events: all;
    transform: translate(-50%, -50%);
  }

  @starting-style {
    .popup-modal.show {
        opacity: 0%;
        transform: translate(-50%, -150%);
    }
    .backdrop.show {
        opacity: 0%;
    }
  }

  .container {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 5fr;
}

.sidebar {
    background-color: var(--sidebar-bkc);
    color: var(--sidebar-font-color);
    padding: var(--container-level-padding);
    display: flex;
    flex-direction: column;
    gap: 30px;
    /* align-items: center; */
}


.user-image {
    height: 40px;
    width: 40px;
}

.name-card {
    display: flex;
    cursor: pointer;
    gap: 20px;
    align-items: center;
    padding: 10px;
    font-size: var(--font-size-2);
    border: 2px solid var(--peach-col-4);
    border-radius: 40px;
}

.name-card:hover {
    border: 2px solid var(--peach-col-5);
    color: var(--peach-col-5);
}


.sidebar-anim {
    animation: sidebar_items 500ms ease-out 100ms 1;

}

@keyframes sidebar_items {
    0% {
        transform: translateX(-100px);
    }
    100% {
        transform: translateX(0);
    }
}

.topdown-animation {
    animation: topdowntrans 500ms ease-in-out 100ms 1;
}

@keyframes topdowntrans {
    0% {
        transform: translateY(-100px);
    }
    100% {
        transform: translateY(0);
    }
}

.create-pro {
    width: 80%;
    padding: 20px;
    box-sizing: border-box;
    font-size: var(--font-size-2);
    border-radius: var(--button-border-radius);
    border: 2px solid var(--peach-col-3);
    color: var(--peach-col-3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.create-pro:hover {
    border: 2px solid var(--peach-col-5);
    color: var(--peach-col-5);
}
.user-projects {
    display: grid;
    grid-template-columns: 30px auto;
    grid-template-rows: repeat(auto-fill, 30px);
    padding-left: 10px;
    font-size: var(--font-size-2);
    gap: 10px;
}

.sidebar-widget {
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: subgrid;
    align-items:center;
    transition: transform 300ms ease-in-out;
}

.sidebar-widget:hover {
    color: var(--peach-col-5);
    cursor: pointer;
    transform: translateX(10px);
}
.icon {
    height: 30px;
    width: 30px;
    filter: invert(1);
}
.mainboard {
    padding: var(--container-level-padding);
    background-color: var(--board-bkc);
    display: grid;
    grid-template-rows: 60px auto;
    padding: 20px;
    gap: 60px;
    /* background-color: rgb(28, 28, 28); */
}

.header {
    justify-self: start;
    align-self: start;
    /* margin-top: 20px; */
    padding: var(--container-level-padding);
    font-size: var(--font-size-1);
    background-color: var(--bkg-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    box-shadow: var(--card-shadow);
}

.content {
    display: grid;
    grid-auto-columns: minmax(350px, 1fr);
    grid-template-rows: 350px;
    grid-auto-flow: column;
    gap: 25px;
    overflow-x: auto;
}

.item {
    background-color: black;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'neon';\n    src: url('./assets/font.ttf') format('truetype');\n}\n:root {\n    --font-size-1: 20px;\n    --font-size-2: 18px;\n    --font-size-3: 15px;\n    --sidebar-bkc: #082f49;\n    --container-level-padding: 20px;\n    --backdrop-col: black;\n    --button-border-radius: 30px;\n    --input-border-radius: 30px;\n    --card-border-radius: 25px;\n    --box-shadow-col: rgba(0, 0, 0, 0.2);\n    --card-shadow: 2px 2px 10px 0px var(--box-shadow-col);\n    --font-color: black;\n    --sidebar-font-color: white;\n    color: var(--font-color);\n    --peach-col-1: #fff1f2;\n    --peach-col-2: #ffe4e6;\n    --peach-col-3: #fecdd3;\n    --peach-col-4: #fda4af;\n    --peach-col-5: #fb7185;\n    --peach-col-6: #f43f5e;\n    --peach-col-7: #e11d48;\n    --peach-col-8: #be123c; \n    --bkg-color: white;\n    --board-bkc: var(--peach-col-1);\n    --icon-filter: invert(0);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-color: var(--bkg-color);\n    height: 100vh;\n    font-family: 'neon', Roboto, Oxygen, Ubuntu, sans-serif, sans-serif, sans-serif;\n    box-sizing: border-box;\n    font-size: var(--font-size-3);\n}\n\n\n\n.backdrop {\n    pointer-events: none;\n    position: fixed;\n    inset: 0;\n    background: var(--backdrop-col);\n    opacity: 0%;\n    display: none;\n    transition: opacity 300ms, display 300ms allow-discrete;\n    transition-delay: 100ms;\n}\n\n.popup-modal {\n    padding: var(--container-level-padding);\n    background-color: var(--bkg-color);\n    /* border: 1px solid black; */\n    box-shadow: var(--card-shadow);\n    border-radius: var(--card-border-radius);\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform-origin: center;\n    transform: translate(-50%, -150%);\n    font-size: var(--font-size-3);\n    pointer-events: none;\n    opacity: 0%; \n    transition: transform 300ms, opacity 300ms, display 300ms allow-discrete;\n    transition-timing-function: ease; \n    transition-delay: 100ms;\n}\n\n.login-form-container {\n    width: 300px;\n}\n\n\n.login-form-container label,\n.login-form-container input {\n    display: block;\n    width: 100%;\n    height: 25px;\n}\n\n.login-form-container label {\n    font-weight: 200;\n    height: auto;\n    margin-top: 10px;\n    padding-left: 5px;\n}\n\n.login-form-container input {\n    font-size: var(--font-size-3);\n    appearance: none;\n    border: 1px solid silver;\n    border-radius: var(--input-border-radius);\n    padding-left: 10px;\n}\n\n.login-form-container input:hover {\n    background-color: aliceblue;\n}\n\n.login-form-container input:focus {\n    background-color: var(--bkg-color);\n    outline: none;\n    \n}\n\nbutton {\n    appearance: none;\n    font: inherit;\n    width: 100%;\n    height: 2rem;\n    margin-top: 20px;\n    border-radius: var(--button-border-radius);\n    background-color: var(--sidebar-bkc);\n    color: white;\n    outline: none;\n    box-shadow: none;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n\n.theme {\n    width: 50px;\n    height: 50px;\n    border-radius: 40px;\n    background-color: var(--bkg-color);\n    position: fixed;\n    /* top: var(--container-level-padding); */\n    right: var(--container-level-padding);\n    border: none;\n    box-shadow: var(--card-shadow);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.theme-icon {\n    height: 30px;\n    width: 30px;\n    filter: var(--icon-filter);\n}\n.backdrop.show {\n    opacity: 30%;\n    display: block;\n    pointer-events: all;\n}\n\n.popup-modal.show {\n    opacity: 100%;\n    display: block;\n    pointer-events: all;\n    transform: translate(-50%, -50%);\n  }\n\n  @starting-style {\n    .popup-modal.show {\n        opacity: 0%;\n        transform: translate(-50%, -150%);\n    }\n    .backdrop.show {\n        opacity: 0%;\n    }\n  }\n\n  .container {\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n}\n\n.sidebar {\n    background-color: var(--sidebar-bkc);\n    color: var(--sidebar-font-color);\n    padding: var(--container-level-padding);\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    /* align-items: center; */\n}\n\n\n.user-image {\n    height: 40px;\n    width: 40px;\n}\n\n.name-card {\n    display: flex;\n    cursor: pointer;\n    gap: 20px;\n    align-items: center;\n    padding: 10px;\n    font-size: var(--font-size-2);\n    border: 2px solid var(--peach-col-4);\n    border-radius: 40px;\n}\n\n.name-card:hover {\n    border: 2px solid var(--peach-col-5);\n    color: var(--peach-col-5);\n}\n\n\n.sidebar-anim {\n    animation: sidebar_items 500ms ease-out 100ms 1;\n\n}\n\n@keyframes sidebar_items {\n    0% {\n        transform: translateX(-100px);\n    }\n    100% {\n        transform: translateX(0);\n    }\n}\n\n.topdown-animation {\n    animation: topdowntrans 500ms ease-in-out 100ms 1;\n}\n\n@keyframes topdowntrans {\n    0% {\n        transform: translateY(-100px);\n    }\n    100% {\n        transform: translateY(0);\n    }\n}\n\n.create-pro {\n    width: 80%;\n    padding: 20px;\n    box-sizing: border-box;\n    font-size: var(--font-size-2);\n    border-radius: var(--button-border-radius);\n    border: 2px solid var(--peach-col-3);\n    color: var(--peach-col-3);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.create-pro:hover {\n    border: 2px solid var(--peach-col-5);\n    color: var(--peach-col-5);\n}\n.user-projects {\n    display: grid;\n    grid-template-columns: 30px auto;\n    grid-template-rows: repeat(auto-fill, 30px);\n    padding-left: 10px;\n    font-size: var(--font-size-2);\n    gap: 10px;\n}\n\n.sidebar-widget {\n    grid-column: 1 / 3;\n    display: grid;\n    grid-template-columns: subgrid;\n    align-items:center;\n    transition: transform 300ms ease-in-out;\n}\n\n.sidebar-widget:hover {\n    color: var(--peach-col-5);\n    cursor: pointer;\n    transform: translateX(10px);\n}\n.icon {\n    height: 30px;\n    width: 30px;\n    filter: invert(1);\n}\n.mainboard {\n    padding: var(--container-level-padding);\n    background-color: var(--board-bkc);\n    display: grid;\n    grid-template-rows: 60px auto;\n    padding: 20px;\n    gap: 60px;\n    /* background-color: rgb(28, 28, 28); */\n}\n\n.header {\n    justify-self: start;\n    align-self: start;\n    /* margin-top: 20px; */\n    padding: var(--container-level-padding);\n    font-size: var(--font-size-1);\n    background-color: var(--bkg-color);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 40px;\n    box-shadow: var(--card-shadow);\n}\n\n.content {\n    display: grid;\n    grid-auto-columns: minmax(350px, 1fr);\n    grid-template-rows: 350px;\n    grid-auto-flow: column;\n    gap: 25px;\n    overflow-x: auto;\n}\n\n.item {\n    background-color: black;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "NIL", ({
  enumerable: true,
  get: function get() {
    return _nil.default;
  }
}));
Object.defineProperty(exports, "parse", ({
  enumerable: true,
  get: function get() {
    return _parse.default;
  }
}));
Object.defineProperty(exports, "stringify", ({
  enumerable: true,
  get: function get() {
    return _stringify.default;
  }
}));
Object.defineProperty(exports, "v1", ({
  enumerable: true,
  get: function get() {
    return _v.default;
  }
}));
Object.defineProperty(exports, "v3", ({
  enumerable: true,
  get: function get() {
    return _v2.default;
  }
}));
Object.defineProperty(exports, "v4", ({
  enumerable: true,
  get: function get() {
    return _v3.default;
  }
}));
Object.defineProperty(exports, "v5", ({
  enumerable: true,
  get: function get() {
    return _v4.default;
  }
}));
Object.defineProperty(exports, "validate", ({
  enumerable: true,
  get: function get() {
    return _validate.default;
  }
}));
Object.defineProperty(exports, "version", ({
  enumerable: true,
  get: function get() {
    return _version.default;
  }
}));

var _v = _interopRequireDefault(__webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/commonjs-browser/v1.js"));

var _v2 = _interopRequireDefault(__webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/commonjs-browser/v3.js"));

var _v3 = _interopRequireDefault(__webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/commonjs-browser/v4.js"));

var _v4 = _interopRequireDefault(__webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/commonjs-browser/v5.js"));

var _nil = _interopRequireDefault(__webpack_require__(/*! ./nil.js */ "./node_modules/uuid/dist/commonjs-browser/nil.js"));

var _version = _interopRequireDefault(__webpack_require__(/*! ./version.js */ "./node_modules/uuid/dist/commonjs-browser/version.js"));

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/commonjs-browser/validate.js"));

var _stringify = _interopRequireDefault(__webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js"));

var _parse = _interopRequireDefault(__webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/commonjs-browser/parse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/md5.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/md5.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = '0123456789abcdef';

  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 0xff;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;

  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));

  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  const lsw = (x & 0xffff) + (y & 0xffff);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

var _default = md5;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/native.js":
/*!***********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/native.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var _default = {
  randomUUID
};
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/nil.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/nil.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/parse.js":
/*!**********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/parse.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/commonjs-browser/validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

var _default = parse;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/regex.js":
/*!**********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/regex.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/rng.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/rng.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);

function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/sha1.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/sha1.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);

  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);

    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }

    M[i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);

    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }

    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];

    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

var _default = sha1;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/stringify.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.unsafeStringify = unsafeStringify;

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/commonjs-browser/validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default = stringify;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v1.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v1.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _rng = _interopRequireDefault(__webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/commonjs-browser/rng.js"));

var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify.unsafeStringify)(b);
}

var _default = v1;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v3.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v3.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/commonjs-browser/v35.js"));

var _md = _interopRequireDefault(__webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/commonjs-browser/md5.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = v3;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v35.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v35.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.URL = exports.DNS = void 0;
exports["default"] = v35;

var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");

var _parse = _interopRequireDefault(__webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/commonjs-browser/parse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.DNS = DNS;
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.URL = URL;

function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify.unsafeStringify)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v4.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v4.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _native = _interopRequireDefault(__webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/commonjs-browser/native.js"));

var _rng = _interopRequireDefault(__webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/commonjs-browser/rng.js"));

var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  if (_native.default.randomUUID && !buf && !options) {
    return _native.default.randomUUID();
  }

  options = options || {};

  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.unsafeStringify)(rnds);
}

var _default = v4;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v5.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v5.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/commonjs-browser/v35.js"));

var _sha = _interopRequireDefault(__webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/commonjs-browser/sha1.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = v5;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/validate.js":
/*!*************************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/validate.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regex = _interopRequireDefault(__webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/commonjs-browser/regex.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default = validate;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/version.js":
/*!************************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/version.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/commonjs-browser/validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.slice(14, 15), 16);
}

var _default = version;
exports["default"] = _default;

/***/ }),

/***/ "./src/backend.js":
/*!************************!*\
  !*** ./src/backend.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ backendUser)
/* harmony export */ });
const { v4: uuidv4 } = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/commonjs-browser/index.js");

function getPriCol(pr) {
    const mapping = ["red", "orange", "yellow", "blue", "aqua"];
    return mapping[pr - 1];
}


function toDo(Title, Desc, DueDate, Priority, Notes, Status = false) {
    let id = uuidv4();
    let title = Title, desc = Desc, dueDate = DueDate, priority = Priority, notes = Notes, isDone = Status;
    const setTitle = (tl) => { title = tl };
    const getTitle = () => title;
    const setDesc = (descp) => { desc = descp };
    const getDesc = () => desc;
    const setdueDate = (date) => { dueDate = date };
    const getdueDate = () => dueDate;
    const setPrior = (prior) => { priority };
    const getPrior = () => priority;
    const setNotes = (note) => { notes = note };
    const getNotes = () => notes;
    const setStatus = (status) => { isDone = status };
    const getStatus = () => isDone;
    const getId = () => id;
    const getPriorCol = () => {
        return getPriCol(priority);
    };

    const loadData = (obj) => {
        const obj2 = JSON.parse(obj);
        id = obj2.id;
        title = obj2.title;
        desc = obj2.desc;
        dueDate = obj2.dueDate;
        priority = obj2.priority;
        notes = obj2.notes;
        isDone = obj2.isDone;
    };
    const getData = () => {
        return { id, title, desc, dueDate, priority, notes, isDone };
    };
    const stringify = () => {
        return JSON.stringify(getData());
    };

    return { loadData, setDesc, setNotes, setPrior, setStatus, setTitle, setdueDate, getdueDate, getDesc, getId, getNotes, getStatus, getTitle, getPrior, getPriorCol, stringify };
}

function project(Title) {
    let title = Title;
    let id = uuidv4();
    const toDos = {};
    const getId = () => id;
    const getTitle = () => title;
    const setTitle = (heading) => { title = heading };
    const addToDo = (heading, desc, notes, duedate, prior, status) => {
        const todo_item = toDo(heading, desc, duedate, prior, notes, status);
        toDos[todo_item.getId()] = todo_item;
        return todo_item.getId();
    };
    const removeToDo = (todoId) => {
        if (toDos.hasOwnProperty(todoId)) {
            delete toDos[todoId];
        }
    };

    const loadData = (obj) => {
        const obj2 = JSON.parse(obj);
        title = obj2.title;
        id = obj2.id;
        for (let todo_item of obj2.toDos2) {
            const todoItem = toDo("", "", "", -1, "");
            todoItem.loadData(todo_item);
            toDos[todoItem.getId()] = todoItem;
        }
    };
    const updateTodo = (todoId, heading, desc, notes, duedate, prior, status) => {
        if (toDos.hasOwnProperty(todoId)) {
            toDos[todoId].setDesc(desc);
            toDos[todoId].setNotes(notes);
            toDos[todoId].setTitle(heading);
            toDos[todoId].setdueDate(duedate);
            toDos[todoId].setPrior(prior);
            toDos[todoId].setStatus(status);
        }
    };
    const toggleStatus = (todoId, status) => {
        if (toDos.hasOwnProperty(todoId)) {
            toDos[todoId].setStatus(status);
        };
    }
    const getTodo = (todoId) => {
        if (toDos.hasOwnProperty(todoId)) {
            const { getdueDate, getDesc, getId, getNotes, getStatus, getTitle, getPrior, getPriorCol, stringify } = toDos[todoId];
            return { getdueDate, getDesc, getId, getNotes, getStatus, getTitle, getPrior, getPriorCol, stringify };
        }
    };

    const getTodoAll = () => {
        const res = [];
        for (let key in toDos) {
            if (toDos.hasOwnProperty(key)) {
                let { getdueDate, getDesc, getId, getNotes, getStatus, getTitle, getPrior, getPriorCol, stringify } = toDos[key];
                res.push({ getdueDate, getDesc, getId, getNotes, getStatus, getTitle, getPrior, getPriorCol, stringify });
            }
        }
        return res;
    };

    const getData = () => {
        const toDos2 = [];
        for (let key in toDos) {
            if (toDos.hasOwnProperty(key)) {
                toDos2.push(toDos[key].stringify());
            }
        }
        return { id, title, toDos2 };
    };
    const stringify = () => {
        return JSON.stringify(getData());
    };

    return { loadData, getTitle, getId, getTodo, getTodoAll, stringify, updateTodo, removeToDo, addToDo, toggleStatus, setTitle };
}


function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}



function backendUser() {
    let name;
    const projects = {};
    let isData = false;
    // const loadData = () => {
    //     if (storageAvailable('localStorage') && localStorage.getItem("user")) {
    //         isData = true;
    //         const stor = JSON.parse(localStorage.getItem("user"));
    //         name = stor['name'];
    //         for (let pro of stor['pro2']) {
    //             const proj = project("");
    //             proj.loadData(pro);
    //             projects[proj.getId()] = proj;
    //             // console.log(JSON.parse(pro)['title']);
    //         }
    //         console.log("Data found: \n", stor === stringify());
    //     }
    // };
    // loadData();

    const getData = () => {
        const pro2 = [];
        for (let key in projects) {
            if (projects.hasOwnProperty(key)) {
                pro2.push(projects[key].stringify());
            }
        }
        return { name, pro2 };
    };

    const stringify = () => {
        return JSON.stringify(getData());
    };

    const saveData = () => {
        localStorage.setItem("user", stringify());
    };

    const setName = (Name) => {
        name = Name;
        saveData();
    };

    const getName = () => name;
    const getisData = () => isData;
    const addProject = (Title) => {
        const p1 = project(Title);
        projects[p1.getId()] = p1;
        saveData();
        return p1.getId();
    };
    const updateProject = (Title, pID) => {
        if (projects.hasOwnProperty(pID)) {
            projects[pID].setTitle(Title);
            saveData();
        }
    }

    const removeProject = (pID) => {
        if (projects.hasOwnProperty(pID)) {
            delete projects[pID];
            saveData();
        }
    };

    const getProject = (pID) => {
        if (projects.hasOwnProperty(pID)) {
            const { getTitle, getId, getTodo, getTodoAll } = projects[pID];
            return { getTitle, getId, getTodo, getTodoAll };
        }
    };

    const getProjectAll = () => {
        const res = [];
        for (let key in projects) {
            if (projects.hasOwnProperty(key)) {
                let { getTitle, getId, getTodo, getTodoAll } = projects[key];
                res.push({ getTitle, getId, getTodo, getTodoAll });
            }
        }
        return res;
    };

    const addTodo = (pID, heading, desc, notes, duedate, prior, status = false) => {
        if (projects.hasOwnProperty(pID)) {
            const tID = projects[pID].addToDo(heading, desc, notes, duedate, prior, status);
            saveData();
            return tID;
        }
    };

    const updateTodo = (pID, todoId, heading, desc, notes, duedate, prior, status = false) => {
        if (projects.hasOwnProperty(pID)) {
            projects[pID].updateTodo(todoId, heading, desc, notes, duedate, prior, status);
            saveData();
        }
    };

    const toggleTodo = (pID, todoId, status) => {
        if (projects.hasOwnProperty(pID)) {
            projects[pID].toggleStatus(todoId, status);
            saveData();
        }
    };

    const remTodo = (pID, todoId) => {
        if (projects.hasOwnProperty(pID)) {
            projects[pID].removeToDo(todoId);
            saveData();
        }
    };

    const loadData = () => {
        if (storageAvailable('localStorage') && localStorage.getItem("user")) {
            isData = true;
            const stor = JSON.parse(localStorage.getItem("user"));
            name = stor['name'];
            for (let pro of stor['pro2']) {
                const proj = project("");
                proj.loadData(pro);
                projects[proj.getId()] = proj;
            }
            console.log("Data found in localStorage!!");
        }
    };
    loadData();
    return { setName, getName, getisData, addProject, removeProject, updateProject, getProject, getProjectAll, addTodo, updateTodo, toggleTodo, remTodo, stringify };
}



/***/ }),

/***/ "./src/frontend.js":
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ frontend)
/* harmony export */ });
/* harmony import */ var _assets_home_minus_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/home-minus-outline.svg */ "./src/assets/home-minus-outline.svg");
/* harmony import */ var _assets_note_edit_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/note-edit-outline.svg */ "./src/assets/note-edit-outline.svg");
/* harmony import */ var _assets_sun_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/sun.png */ "./src/assets/sun.png");
/* harmony import */ var _assets_moon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/moon.png */ "./src/assets/moon.png");
/* harmony import */ var _assets_man_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/man.png */ "./src/assets/man.png");








function frontend() {

    document.querySelector(".backdrop").addEventListener("click", () => {
        document.querySelector('.backdrop').classList.toggle("show");
        document.querySelector('.popup-modal').classList.toggle("show");
    });

    document.querySelector('.theme').addEventListener("click", () => {
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon.src === _assets_moon_png__WEBPACK_IMPORTED_MODULE_3__) {
            themeIcon.src = _assets_sun_png__WEBPACK_IMPORTED_MODULE_2__;
        }
        else {
            themeIcon.src = _assets_moon_png__WEBPACK_IMPORTED_MODULE_3__;
        }
    });

    const fav_icon = (img) => {
        const favicon = document.createElement('link');

        favicon.rel = 'icon';
        favicon.type = 'image/png';
        favicon.href = img;
        const existingFavicon = document.querySelector('link[rel="icon"]');
        if (existingFavicon) {
            document.head.removeChild(existingFavicon);
        }
        document.head.appendChild(favicon);
        const themeIcon = new Image();
        themeIcon.src = _assets_moon_png__WEBPACK_IMPORTED_MODULE_3__;
        themeIcon.classList.add('theme-icon');
        const themeButton = document.querySelector('.theme');
        themeButton.appendChild(themeIcon);

    };

    const loginForm = () => {
        document.querySelector('.backdrop').classList.toggle("show");
        document.querySelector('.popup-modal').classList.toggle("show");
    };
    const updateName = (uname) => {
        try {
            document.querySelector(".user-name").textContent = uname;
            const ncard = document.querySelector(".name-card.sidebar-anim");
            ncard.classList.toggle('.sidebar-anim');
            // ncard.classList.add('.sidebar-anim');
            // ncard.style.display = 'none';
            // ncard.style.display = 'flex';
        }
        catch (error) {
            console.log("No such element");
        }
    };

    const renderProjectName = (pname, cls, pid = null, icon = null) => {
        const sidebar = document.querySelector(".sidebar");
        const pro_items = document.querySelector('.user-projects');
        const swidget = document.createElement("div");
        swidget.classList.add("sidebar-widget");
        swidget.classList.add(cls);
        swidget.classList.add("sidebar-anim");
        if (pid) {
            swidget.setAttribute("proID", pid);
        }
        if (icon) {
            const widicon = new Image();
            widicon.src = icon;
            widicon.classList.add("icon");
            swidget.appendChild(widicon);
        }
        const widContent = document.createElement("p");
        widContent.textContent = pname;
        swidget.appendChild(widContent);
        pro_items.appendChild(swidget);
    };
    const renderSidebar = (user) => {
        const uname = user.getName();
        const ncard = document.createElement("div");
        ncard.classList.add("name-card");
        ncard.classList.add("sidebar-anim");
        const propic = new Image();
        propic.src = _assets_man_png__WEBPACK_IMPORTED_MODULE_4__;
        propic.classList.add("user-image");
        const nameDiv = document.createElement("p");
        nameDiv.classList.add("user-name");
        nameDiv.textContent = uname;
        ncard.appendChild(propic);
        ncard.appendChild(nameDiv);
        ncard.addEventListener('click', loginForm);
        const sidebar = document.querySelector(".sidebar");
        sidebar.appendChild(ncard);
        const createPro = document.createElement("button");
        createPro.classList.add("create-pro");
        createPro.classList.add("sidebar-anim");
        createPro.textContent = "New Project";
        sidebar.appendChild(createPro);
        const pro_items = document.createElement("div");
        pro_items.classList.add("user-projects");
        sidebar.appendChild(pro_items);
        renderProjectName("Home", "home-tile", null, _assets_home_minus_outline_svg__WEBPACK_IMPORTED_MODULE_0__);
        renderProjectName("All Projects", "all-projects-tile", null, _assets_note_edit_outline_svg__WEBPACK_IMPORTED_MODULE_1__);
        for (let project of user.getProjectAll()) {
            renderProjectName(project.getTitle(), "project-tile", project.getId(), _assets_note_edit_outline_svg__WEBPACK_IMPORTED_MODULE_1__);
        }
    };
    return { fav_icon, loginForm, renderSidebar, updateName };
}

/***/ }),

/***/ "./src/assets/fav.png":
/*!****************************!*\
  !*** ./src/assets/fav.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62cf99ccd2c8e5a25d34.png";

/***/ }),

/***/ "./src/assets/font.ttf":
/*!*****************************!*\
  !*** ./src/assets/font.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a97634d0d51330cd1691.ttf";

/***/ }),

/***/ "./src/assets/home-minus-outline.svg":
/*!*******************************************!*\
  !*** ./src/assets/home-minus-outline.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef8e3a2e0c7275ede1c4.svg";

/***/ }),

/***/ "./src/assets/man.png":
/*!****************************!*\
  !*** ./src/assets/man.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5249616fc25d76696c3f.png";

/***/ }),

/***/ "./src/assets/moon.png":
/*!*****************************!*\
  !*** ./src/assets/moon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cfa37b178f3890f6d652.png";

/***/ }),

/***/ "./src/assets/note-edit-outline.svg":
/*!******************************************!*\
  !*** ./src/assets/note-edit-outline.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c846b91bc57c7f0f2387.svg";

/***/ }),

/***/ "./src/assets/sun.png":
/*!****************************!*\
  !*** ./src/assets/sun.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f8d9ed0fa01f7d9346c.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _backend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backend.js */ "./src/backend.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_fav_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/fav.png */ "./src/assets/fav.png");
/* harmony import */ var _frontend_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frontend.js */ "./src/frontend.js");





const app = (function ScreenController() {
    const front = (0,_frontend_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    front.fav_icon(_assets_fav_png__WEBPACK_IMPORTED_MODULE_2__);
    const user = (0,_backend_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    if (!user.getisData()) {
        front.loginForm();
    }
    document.querySelector(".login-form-container").addEventListener("submit", (event) => {
        event.preventDefault();
        const fname = document.querySelector("#fname").value;
        const lname = document.querySelector("#lname").value;
        const userName = fname + " " + lname;
        user.setName(userName);
        document.querySelector('.backdrop').classList.toggle("show");
        document.querySelector('.popup-modal').classList.toggle("show");
        front.updateName(userName);
    });
    front.renderSidebar(user);
})();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsK0dBQW9DO0FBQ2hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxTQUFTLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFFBQVEsTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZ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O1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FnQztBQUNYO0FBQ2M7QUFDRTs7QUFFckM7QUFDQSxrQkFBa0Isd0RBQVE7QUFDMUIsbUJBQW1CLDRDQUFHO0FBQ3RCLGlCQUFpQix1REFBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2FyeWEta2hhdGEvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2thcnlhLWtoYXRhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rYXJ5YS1raGF0YS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8va2FyeWEta2hhdGEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rYXJ5YS1raGF0YS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9rYXJ5YS1raGF0YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rYXJ5YS1raGF0YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va2FyeWEta2hhdGEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va2FyeWEta2hhdGEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va2FyeWEta2hhdGEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rYXJ5YS1raGF0YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2thcnlhLWtoYXRhLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovL2thcnlhLWtoYXRhLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly9rYXJ5YS1raGF0YS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8va2FyeWEta2hhdGEvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbmlsLmpzIiwid2VicGFjazovL2thcnlhLWtoYXRhLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3BhcnNlLmpzIiwid2VicGFjazovL2thcnlhLWtoYXRhLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2thcnlhLWtoYXRhLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9rYXJ5YS1raGF0YS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9zaGExLmpzIiwid2VicGFjazovL2thcnlhLWtoYXRhLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9rYXJ5YS1raGF0YS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92MS5qcyIsIndlYnBhY2s6Ly9rYXJ5YS1raGF0YS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92My5qcyIsIndlYnBhY2s6Ly9rYXJ5YS1raGF0YS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92MzUuanMiLCJ3ZWJwYWNrOi8va2FyeWEta2hhdGEvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8va2FyeWEta2hhdGEvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjUuanMiLCJ3ZWJwYWNrOi8va2FyeWEta2hhdGEvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8va2FyeWEta2hhdGEvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9rYXJ5YS1raGF0YS8uL3NyYy9iYWNrZW5kLmpzIiwid2VicGFjazovL2thcnlhLWtoYXRhLy4vc3JjL2Zyb250ZW5kLmpzIiwid2VicGFjazovL2thcnlhLWtoYXRhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2thcnlhLWtoYXRhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2thcnlhLWtoYXRhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rYXJ5YS1raGF0YS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2thcnlhLWtoYXRhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va2FyeWEta2hhdGEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rYXJ5YS1raGF0YS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9rYXJ5YS1raGF0YS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9rYXJ5YS1raGF0YS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8va2FyeWEta2hhdGEvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ25lb24nO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbjpyb290IHtcbiAgICAtLWZvbnQtc2l6ZS0xOiAyMHB4O1xuICAgIC0tZm9udC1zaXplLTI6IDE4cHg7XG4gICAgLS1mb250LXNpemUtMzogMTVweDtcbiAgICAtLXNpZGViYXItYmtjOiAjMDgyZjQ5O1xuICAgIC0tY29udGFpbmVyLWxldmVsLXBhZGRpbmc6IDIwcHg7XG4gICAgLS1iYWNrZHJvcC1jb2w6IGJsYWNrO1xuICAgIC0tYnV0dG9uLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgLS1pbnB1dC1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIC0tY2FyZC1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIC0tYm94LXNoYWRvdy1jb2w6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAtLWNhcmQtc2hhZG93OiAycHggMnB4IDEwcHggMHB4IHZhcigtLWJveC1zaGFkb3ctY29sKTtcbiAgICAtLWZvbnQtY29sb3I6IGJsYWNrO1xuICAgIC0tc2lkZWJhci1mb250LWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgLS1wZWFjaC1jb2wtMTogI2ZmZjFmMjtcbiAgICAtLXBlYWNoLWNvbC0yOiAjZmZlNGU2O1xuICAgIC0tcGVhY2gtY29sLTM6ICNmZWNkZDM7XG4gICAgLS1wZWFjaC1jb2wtNDogI2ZkYTRhZjtcbiAgICAtLXBlYWNoLWNvbC01OiAjZmI3MTg1O1xuICAgIC0tcGVhY2gtY29sLTY6ICNmNDNmNWU7XG4gICAgLS1wZWFjaC1jb2wtNzogI2UxMWQ0ODtcbiAgICAtLXBlYWNoLWNvbC04OiAjYmUxMjNjOyBcbiAgICAtLWJrZy1jb2xvcjogd2hpdGU7XG4gICAgLS1ib2FyZC1ia2M6IHZhcigtLXBlYWNoLWNvbC0xKTtcbiAgICAtLWljb24tZmlsdGVyOiBpbnZlcnQoMCk7XG59XG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ia2ctY29sb3IpO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZm9udC1mYW1pbHk6ICduZW9uJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgc2Fucy1zZXJpZiwgc2Fucy1zZXJpZiwgc2Fucy1zZXJpZjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTMpO1xufVxuXG5cblxuLmJhY2tkcm9wIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaW5zZXQ6IDA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2Ryb3AtY29sKTtcbiAgICBvcGFjaXR5OiAwJTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMsIGRpc3BsYXkgMzAwbXMgYWxsb3ctZGlzY3JldGU7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMTAwbXM7XG59XG5cbi5wb3B1cC1tb2RhbCB7XG4gICAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyLWxldmVsLXBhZGRpbmcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJrZy1jb2xvcik7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXG4gICAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhcmQtYm9yZGVyLXJhZGl1cyk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTE1MCUpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTMpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIG9wYWNpdHk6IDAlOyBcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMsIG9wYWNpdHkgMzAwbXMsIGRpc3BsYXkgMzAwbXMgYWxsb3ctZGlzY3JldGU7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7IFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDEwMG1zO1xufVxuXG4ubG9naW4tZm9ybS1jb250YWluZXIge1xuICAgIHdpZHRoOiAzMDBweDtcbn1cblxuXG4ubG9naW4tZm9ybS1jb250YWluZXIgbGFiZWwsXG4ubG9naW4tZm9ybS1jb250YWluZXIgaW5wdXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuLmxvZ2luLWZvcm0tY29udGFpbmVyIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4ubG9naW4tZm9ybS1jb250YWluZXIgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTMpO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWlucHV0LWJvcmRlci1yYWRpdXMpO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmxvZ2luLWZvcm0tY29udGFpbmVyIGlucHV0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG59XG5cbi5sb2dpbi1mb3JtLWNvbnRhaW5lciBpbnB1dDpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmtnLWNvbG9yKTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIFxufVxuXG5idXR0b24ge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1idXR0b24tYm9yZGVyLXJhZGl1cyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ia2MpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi50aGVtZSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmtnLWNvbG9yKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLyogdG9wOiB2YXIoLS1jb250YWluZXItbGV2ZWwtcGFkZGluZyk7ICovXG4gICAgcmlnaHQ6IHZhcigtLWNvbnRhaW5lci1sZXZlbC1wYWRkaW5nKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRoZW1lLWljb24ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBmaWx0ZXI6IHZhcigtLWljb24tZmlsdGVyKTtcbn1cbi5iYWNrZHJvcC5zaG93IHtcbiAgICBvcGFjaXR5OiAzMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLnBvcHVwLW1vZGFsLnNob3cge1xuICAgIG9wYWNpdHk6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuXG4gIEBzdGFydGluZy1zdHlsZSB7XG4gICAgLnBvcHVwLW1vZGFsLnNob3cge1xuICAgICAgICBvcGFjaXR5OiAwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTE1MCUpO1xuICAgIH1cbiAgICAuYmFja2Ryb3Auc2hvdyB7XG4gICAgICAgIG9wYWNpdHk6IDAlO1xuICAgIH1cbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcbn1cblxuLnNpZGViYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmtjKTtcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1mb250LWNvbG9yKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXItbGV2ZWwtcGFkZGluZyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMzBweDtcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xufVxuXG5cbi51c2VyLWltYWdlIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG59XG5cbi5uYW1lLWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGdhcDogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtMik7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcGVhY2gtY29sLTQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59XG5cbi5uYW1lLWNhcmQ6aG92ZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXBlYWNoLWNvbC01KTtcbiAgICBjb2xvcjogdmFyKC0tcGVhY2gtY29sLTUpO1xufVxuXG5cbi5zaWRlYmFyLWFuaW0ge1xuICAgIGFuaW1hdGlvbjogc2lkZWJhcl9pdGVtcyA1MDBtcyBlYXNlLW91dCAxMDBtcyAxO1xuXG59XG5cbkBrZXlmcmFtZXMgc2lkZWJhcl9pdGVtcyB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG59XG5cbi50b3Bkb3duLWFuaW1hdGlvbiB7XG4gICAgYW5pbWF0aW9uOiB0b3Bkb3dudHJhbnMgNTAwbXMgZWFzZS1pbi1vdXQgMTAwbXMgMTtcbn1cblxuQGtleWZyYW1lcyB0b3Bkb3dudHJhbnMge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufVxuXG4uY3JlYXRlLXBybyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtMik7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnV0dG9uLWJvcmRlci1yYWRpdXMpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXBlYWNoLWNvbC0zKTtcbiAgICBjb2xvcjogdmFyKC0tcGVhY2gtY29sLTMpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNyZWF0ZS1wcm86aG92ZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXBlYWNoLWNvbC01KTtcbiAgICBjb2xvcjogdmFyKC0tcGVhY2gtY29sLTUpO1xufVxuLnVzZXItcHJvamVjdHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCAzMHB4KTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtMik7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uc2lkZWJhci13aWRnZXQge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogc3ViZ3JpZDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4uc2lkZWJhci13aWRnZXQ6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1wZWFjaC1jb2wtNSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbn1cbi5pY29uIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XG59XG4ubWFpbmJvYXJkIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXItbGV2ZWwtcGFkZGluZyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmtjKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZ2FwOiA2MHB4O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgMjgsIDI4KTsgKi9cbn1cblxuLmhlYWRlciB7XG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICAvKiBtYXJnaW4tdG9wOiAyMHB4OyAqL1xuICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lci1sZXZlbC1wYWRkaW5nKTtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0xKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ia2ctY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IG1pbm1heCgzNTBweCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1MHB4O1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgZ2FwOiAyNXB4O1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsK0RBQWdEO0FBQ3BEO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixvQ0FBb0M7SUFDcEMscURBQXFEO0lBQ3JELG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYiwrRUFBK0U7SUFDL0Usc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQzs7OztBQUlBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixRQUFRO0lBQ1IsK0JBQStCO0lBQy9CLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdURBQXVEO0lBQ3ZELHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxrQ0FBa0M7SUFDbEMsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5Qix3Q0FBd0M7SUFDeEMsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLGlDQUFpQztJQUNqQyw2QkFBNkI7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QVM7SUFDVCx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix1Q0FBdUM7SUFDdkMsNkJBQTZCO0lBQzdCLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbmVvbic7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuOnJvb3Qge1xcbiAgICAtLWZvbnQtc2l6ZS0xOiAyMHB4O1xcbiAgICAtLWZvbnQtc2l6ZS0yOiAxOHB4O1xcbiAgICAtLWZvbnQtc2l6ZS0zOiAxNXB4O1xcbiAgICAtLXNpZGViYXItYmtjOiAjMDgyZjQ5O1xcbiAgICAtLWNvbnRhaW5lci1sZXZlbC1wYWRkaW5nOiAyMHB4O1xcbiAgICAtLWJhY2tkcm9wLWNvbDogYmxhY2s7XFxuICAgIC0tYnV0dG9uLWJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIC0taW5wdXQtYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgLS1jYXJkLWJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIC0tYm94LXNoYWRvdy1jb2w6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgLS1jYXJkLXNoYWRvdzogMnB4IDJweCAxMHB4IDBweCB2YXIoLS1ib3gtc2hhZG93LWNvbCk7XFxuICAgIC0tZm9udC1jb2xvcjogYmxhY2s7XFxuICAgIC0tc2lkZWJhci1mb250LWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICAtLXBlYWNoLWNvbC0xOiAjZmZmMWYyO1xcbiAgICAtLXBlYWNoLWNvbC0yOiAjZmZlNGU2O1xcbiAgICAtLXBlYWNoLWNvbC0zOiAjZmVjZGQzO1xcbiAgICAtLXBlYWNoLWNvbC00OiAjZmRhNGFmO1xcbiAgICAtLXBlYWNoLWNvbC01OiAjZmI3MTg1O1xcbiAgICAtLXBlYWNoLWNvbC02OiAjZjQzZjVlO1xcbiAgICAtLXBlYWNoLWNvbC03OiAjZTExZDQ4O1xcbiAgICAtLXBlYWNoLWNvbC04OiAjYmUxMjNjOyBcXG4gICAgLS1ia2ctY29sb3I6IHdoaXRlO1xcbiAgICAtLWJvYXJkLWJrYzogdmFyKC0tcGVhY2gtY29sLTEpO1xcbiAgICAtLWljb24tZmlsdGVyOiBpbnZlcnQoMCk7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ia2ctY29sb3IpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogJ25lb24nLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBzYW5zLXNlcmlmLCBzYW5zLXNlcmlmLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0zKTtcXG59XFxuXFxuXFxuXFxuLmJhY2tkcm9wIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaW5zZXQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tkcm9wLWNvbCk7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zLCBkaXNwbGF5IDMwMG1zIGFsbG93LWRpc2NyZXRlO1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxMDBtcztcXG59XFxuXFxuLnBvcHVwLW1vZGFsIHtcXG4gICAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyLWxldmVsLXBhZGRpbmcpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ia2ctY29sb3IpO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXG4gICAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jYXJkLWJvcmRlci1yYWRpdXMpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTE1MCUpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0zKTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDAlOyBcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zLCBvcGFjaXR5IDMwMG1zLCBkaXNwbGF5IDMwMG1zIGFsbG93LWRpc2NyZXRlO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTsgXFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDEwMG1zO1xcbn1cXG5cXG4ubG9naW4tZm9ybS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcblxcbi5sb2dpbi1mb3JtLWNvbnRhaW5lciBsYWJlbCxcXG4ubG9naW4tZm9ybS1jb250YWluZXIgaW5wdXQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLmxvZ2luLWZvcm0tY29udGFpbmVyIGxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuLmxvZ2luLWZvcm0tY29udGFpbmVyIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtMyk7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNpbHZlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW5wdXQtYm9yZGVyLXJhZGl1cyk7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLmxvZ2luLWZvcm0tY29udGFpbmVyIGlucHV0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbn1cXG5cXG4ubG9naW4tZm9ybS1jb250YWluZXIgaW5wdXQ6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ia2ctY29sb3IpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnV0dG9uLWJvcmRlci1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJrYyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4udGhlbWUge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ia2ctY29sb3IpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIC8qIHRvcDogdmFyKC0tY29udGFpbmVyLWxldmVsLXBhZGRpbmcpOyAqL1xcbiAgICByaWdodDogdmFyKC0tY29udGFpbmVyLWxldmVsLXBhZGRpbmcpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50aGVtZS1pY29uIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgZmlsdGVyOiB2YXIoLS1pY29uLWZpbHRlcik7XFxufVxcbi5iYWNrZHJvcC5zaG93IHtcXG4gICAgb3BhY2l0eTogMzAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLnBvcHVwLW1vZGFsLnNob3cge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB9XFxuXFxuICBAc3RhcnRpbmctc3R5bGUge1xcbiAgICAucG9wdXAtbW9kYWwuc2hvdyB7XFxuICAgICAgICBvcGFjaXR5OiAwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xNTAlKTtcXG4gICAgfVxcbiAgICAuYmFja2Ryb3Auc2hvdyB7XFxuICAgICAgICBvcGFjaXR5OiAwJTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmtjKTtcXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXItZm9udC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lci1sZXZlbC1wYWRkaW5nKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG5cXG4udXNlci1pbWFnZSB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi5uYW1lLWNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtMik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXBlYWNoLWNvbC00KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG59XFxuXFxuLm5hbWUtY2FyZDpob3ZlciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXBlYWNoLWNvbC01KTtcXG4gICAgY29sb3I6IHZhcigtLXBlYWNoLWNvbC01KTtcXG59XFxuXFxuXFxuLnNpZGViYXItYW5pbSB7XFxuICAgIGFuaW1hdGlvbjogc2lkZWJhcl9pdGVtcyA1MDBtcyBlYXNlLW91dCAxMDBtcyAxO1xcblxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNpZGViYXJfaXRlbXMge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgfVxcbn1cXG5cXG4udG9wZG93bi1hbmltYXRpb24ge1xcbiAgICBhbmltYXRpb246IHRvcGRvd250cmFucyA1MDBtcyBlYXNlLWluLW91dCAxMDBtcyAxO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRvcGRvd250cmFucyB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB9XFxufVxcblxcbi5jcmVhdGUtcHJvIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJ1dHRvbi1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcGVhY2gtY29sLTMpO1xcbiAgICBjb2xvcjogdmFyKC0tcGVhY2gtY29sLTMpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNyZWF0ZS1wcm86aG92ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wZWFjaC1jb2wtNSk7XFxuICAgIGNvbG9yOiB2YXIoLS1wZWFjaC1jb2wtNSk7XFxufVxcbi51c2VyLXByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgMzBweCk7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtMik7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNpZGViYXItd2lkZ2V0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHN1YmdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2lkZWJhci13aWRnZXQ6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tcGVhY2gtY29sLTUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXG59XFxuLmljb24ge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuLm1haW5ib2FyZCB7XFxuICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lci1sZXZlbC1wYWRkaW5nKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmtjKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogNjBweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAyOCwgMjgpOyAqL1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIC8qIG1hcmdpbi10b3A6IDIwcHg7ICovXFxuICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lci1sZXZlbC1wYWRkaW5nKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtMSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJrZy1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IG1pbm1heCgzNTBweCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzNTBweDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcbn1cXG5cXG4uaXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTklMXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9uaWwuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwYXJzZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcGFyc2UuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzdHJpbmdpZnlcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYxXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3YyLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3YzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3Y0LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmFsaWRhdGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3ZhbGlkYXRlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmVyc2lvblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdmVyc2lvbi5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MS5qc1wiKSk7XG5cbnZhciBfdjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YzLmpzXCIpKTtcblxudmFyIF92MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjQuanNcIikpO1xuXG52YXIgX3Y0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92NS5qc1wiKSk7XG5cbnZhciBfbmlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9uaWwuanNcIikpO1xuXG52YXIgX3ZlcnNpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZlcnNpb24uanNcIikpO1xuXG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5cbnZhciBfc3RyaW5naWZ5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIikpO1xuXG52YXIgX3BhcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbi8qXG4gKiBCcm93c2VyLWNvbXBhdGlibGUgSmF2YVNjcmlwdCBNRDVcbiAqXG4gKiBNb2RpZmljYXRpb24gb2YgSmF2YVNjcmlwdCBNRDVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTUQ1XG4gKlxuICogQ29weXJpZ2h0IDIwMTEsIFNlYmFzdGlhbiBUc2NoYW5cbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICpcbiAqIEJhc2VkIG9uXG4gKiBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFJTQSBEYXRhIFNlY3VyaXR5LCBJbmMuIE1ENSBNZXNzYWdlXG4gKiBEaWdlc3QgQWxnb3JpdGhtLCBhcyBkZWZpbmVkIGluIFJGQyAxMzIxLlxuICogVmVyc2lvbiAyLjIgQ29weXJpZ2h0IChDKSBQYXVsIEpvaG5zdG9uIDE5OTkgLSAyMDA5XG4gKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG4gKiBEaXN0cmlidXRlZCB1bmRlciB0aGUgQlNEIExpY2Vuc2VcbiAqIFNlZSBodHRwOi8vcGFqaG9tZS5vcmcudWsvY3J5cHQvbWQ1IGZvciBtb3JlIGluZm8uXG4gKi9cbmZ1bmN0aW9uIG1kNShieXRlcykge1xuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShtc2cubGVuZ3RoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlc1tpXSA9IG1zZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZDVUb0hleEVuY29kZWRBcnJheSh3b3Jkc1RvTWQ1KGJ5dGVzVG9Xb3JkcyhieXRlcyksIGJ5dGVzLmxlbmd0aCAqIDgpKTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMgdG8gYW4gYXJyYXkgb2YgYnl0ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNVRvSGV4RW5jb2RlZEFycmF5KGlucHV0KSB7XG4gIGNvbnN0IG91dHB1dCA9IFtdO1xuICBjb25zdCBsZW5ndGgzMiA9IGlucHV0Lmxlbmd0aCAqIDMyO1xuICBjb25zdCBoZXhUYWIgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGgzMjsgaSArPSA4KSB7XG4gICAgY29uc3QgeCA9IGlucHV0W2kgPj4gNV0gPj4+IGkgJSAzMiAmIDB4ZmY7XG4gICAgY29uc3QgaGV4ID0gcGFyc2VJbnQoaGV4VGFiLmNoYXJBdCh4ID4+PiA0ICYgMHgwZikgKyBoZXhUYWIuY2hhckF0KHggJiAweDBmKSwgMTYpO1xuICAgIG91dHB1dC5wdXNoKGhleCk7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLyoqXG4gKiBDYWxjdWxhdGUgb3V0cHV0IGxlbmd0aCB3aXRoIHBhZGRpbmcgYW5kIGJpdCBsZW5ndGhcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldE91dHB1dExlbmd0aChpbnB1dExlbmd0aDgpIHtcbiAgcmV0dXJuIChpbnB1dExlbmd0aDggKyA2NCA+Pj4gOSA8PCA0KSArIDE0ICsgMTtcbn1cbi8qXG4gKiBDYWxjdWxhdGUgdGhlIE1ENSBvZiBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzLCBhbmQgYSBiaXQgbGVuZ3RoLlxuICovXG5cblxuZnVuY3Rpb24gd29yZHNUb01kNSh4LCBsZW4pIHtcbiAgLyogYXBwZW5kIHBhZGRpbmcgKi9cbiAgeFtsZW4gPj4gNV0gfD0gMHg4MCA8PCBsZW4gJSAzMjtcbiAgeFtnZXRPdXRwdXRMZW5ndGgobGVuKSAtIDFdID0gbGVuO1xuICBsZXQgYSA9IDE3MzI1ODQxOTM7XG4gIGxldCBiID0gLTI3MTczMzg3OTtcbiAgbGV0IGMgPSAtMTczMjU4NDE5NDtcbiAgbGV0IGQgPSAyNzE3MzM4Nzg7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNikge1xuICAgIGNvbnN0IG9sZGEgPSBhO1xuICAgIGNvbnN0IG9sZGIgPSBiO1xuICAgIGNvbnN0IG9sZGMgPSBjO1xuICAgIGNvbnN0IG9sZGQgPSBkO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4Mik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2Mik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcbiAgICBhID0gc2FmZUFkZChhLCBvbGRhKTtcbiAgICBiID0gc2FmZUFkZChiLCBvbGRiKTtcbiAgICBjID0gc2FmZUFkZChjLCBvbGRjKTtcbiAgICBkID0gc2FmZUFkZChkLCBvbGRkKTtcbiAgfVxuXG4gIHJldHVybiBbYSwgYiwgYywgZF07XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBieXRlcyB0byBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzXG4gKiBDaGFyYWN0ZXJzID4yNTUgaGF2ZSB0aGVpciBoaWdoLWJ5dGUgc2lsZW50bHkgaWdub3JlZC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJ5dGVzVG9Xb3JkcyhpbnB1dCkge1xuICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgbGVuZ3RoOCA9IGlucHV0Lmxlbmd0aCAqIDg7XG4gIGNvbnN0IG91dHB1dCA9IG5ldyBVaW50MzJBcnJheShnZXRPdXRwdXRMZW5ndGgobGVuZ3RoOCkpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoODsgaSArPSA4KSB7XG4gICAgb3V0cHV0W2kgPj4gNV0gfD0gKGlucHV0W2kgLyA4XSAmIDB4ZmYpIDw8IGkgJSAzMjtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKlxuICogQWRkIGludGVnZXJzLCB3cmFwcGluZyBhdCAyXjMyLiBUaGlzIHVzZXMgMTYtYml0IG9wZXJhdGlvbnMgaW50ZXJuYWxseVxuICogdG8gd29yayBhcm91bmQgYnVncyBpbiBzb21lIEpTIGludGVycHJldGVycy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHNhZmVBZGQoeCwgeSkge1xuICBjb25zdCBsc3cgPSAoeCAmIDB4ZmZmZikgKyAoeSAmIDB4ZmZmZik7XG4gIGNvbnN0IG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICByZXR1cm4gbXN3IDw8IDE2IHwgbHN3ICYgMHhmZmZmO1xufVxuLypcbiAqIEJpdHdpc2Ugcm90YXRlIGEgMzItYml0IG51bWJlciB0byB0aGUgbGVmdC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJpdFJvdGF0ZUxlZnQobnVtLCBjbnQpIHtcbiAgcmV0dXJuIG51bSA8PCBjbnQgfCBudW0gPj4+IDMyIC0gY250O1xufVxuLypcbiAqIFRoZXNlIGZ1bmN0aW9ucyBpbXBsZW1lbnQgdGhlIGZvdXIgYmFzaWMgb3BlcmF0aW9ucyB0aGUgYWxnb3JpdGhtIHVzZXMuXG4gKi9cblxuXG5mdW5jdGlvbiBtZDVjbW4ocSwgYSwgYiwgeCwgcywgdCkge1xuICByZXR1cm4gc2FmZUFkZChiaXRSb3RhdGVMZWZ0KHNhZmVBZGQoc2FmZUFkZChhLCBxKSwgc2FmZUFkZCh4LCB0KSksIHMpLCBiKTtcbn1cblxuZnVuY3Rpb24gbWQ1ZmYoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBjIHwgfmIgJiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1Z2coYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBkIHwgYyAmIH5kLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aGgoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWlpKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihjIF4gKGIgfCB+ZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBtZDU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbmNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG52YXIgX2RlZmF1bHQgPSB7XG4gIHJhbmRvbVVVSURcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9ICcwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAnO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gcGFyc2UodXVpZCkge1xuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgbGV0IHY7XG4gIGNvbnN0IGFyciA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gUGFyc2UgIyMjIyMjIyMtLi4uLi0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzBdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDAsIDgpLCAxNikpID4+PiAyNDtcbiAgYXJyWzFdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMl0gPSB2ID4+PiA4ICYgMHhmZjtcbiAgYXJyWzNdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLSMjIyMtLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls0XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSg5LCAxMyksIDE2KSkgPj4+IDg7XG4gIGFycls1XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLSMjIyMtLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbNl0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE4KSwgMTYpKSA+Pj4gODtcbiAgYXJyWzddID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0jIyMjLS4uLi4uLi4uLi4uLlxuXG4gIGFycls4XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxOSwgMjMpLCAxNikpID4+PiA4O1xuICBhcnJbOV0gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLS4uLi4tIyMjIyMjIyMjIyMjXG4gIC8vIChVc2UgXCIvXCIgdG8gYXZvaWQgMzItYml0IHRydW5jYXRpb24gd2hlbiBiaXQtc2hpZnRpbmcgaGlnaC1vcmRlciBieXRlcylcblxuICBhcnJbMTBdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDI0LCAzNiksIDE2KSkgLyAweDEwMDAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzExXSA9IHYgLyAweDEwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMl0gPSB2ID4+PiAyNCAmIDB4ZmY7XG4gIGFyclsxM10gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsxNF0gPSB2ID4+PiA4ICYgMHhmZjtcbiAgYXJyWzE1XSA9IHYgJiAweGZmO1xuICByZXR1cm4gYXJyO1xufVxuXG52YXIgX2RlZmF1bHQgPSBwYXJzZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0gL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBybmc7XG4vLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcblxuZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbi8vIEFkYXB0ZWQgZnJvbSBDaHJpcyBWZW5lc3MnIFNIQTEgY29kZSBhdFxuLy8gaHR0cDovL3d3dy5tb3ZhYmxlLXR5cGUuY28udWsvc2NyaXB0cy9zaGExLmh0bWxcbmZ1bmN0aW9uIGYocywgeCwgeSwgeikge1xuICBzd2l0Y2ggKHMpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4geCAmIHkgXiB+eCAmIHo7XG5cbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHggJiB5IF4geCAmIHogXiB5ICYgejtcblxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gIH1cbn1cblxuZnVuY3Rpb24gUk9UTCh4LCBuKSB7XG4gIHJldHVybiB4IDw8IG4gfCB4ID4+PiAzMiAtIG47XG59XG5cbmZ1bmN0aW9uIHNoYTEoYnl0ZXMpIHtcbiAgY29uc3QgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgY29uc3QgSCA9IFsweDY3NDUyMzAxLCAweGVmY2RhYjg5LCAweDk4YmFkY2ZlLCAweDEwMzI1NDc2LCAweGMzZDJlMWYwXTtcblxuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlcy5wdXNoKG1zZy5jaGFyQ29kZUF0KGkpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoYnl0ZXMpKSB7XG4gICAgLy8gQ29udmVydCBBcnJheS1saWtlIHRvIEFycmF5XG4gICAgYnl0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChieXRlcyk7XG4gIH1cblxuICBieXRlcy5wdXNoKDB4ODApO1xuICBjb25zdCBsID0gYnl0ZXMubGVuZ3RoIC8gNCArIDI7XG4gIGNvbnN0IE4gPSBNYXRoLmNlaWwobCAvIDE2KTtcbiAgY29uc3QgTSA9IG5ldyBBcnJheShOKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IE47ICsraSkge1xuICAgIGNvbnN0IGFyciA9IG5ldyBVaW50MzJBcnJheSgxNik7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgIGFycltqXSA9IGJ5dGVzW2kgKiA2NCArIGogKiA0XSA8PCAyNCB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMV0gPDwgMTYgfCBieXRlc1tpICogNjQgKyBqICogNCArIDJdIDw8IDggfCBieXRlc1tpICogNjQgKyBqICogNCArIDNdO1xuICAgIH1cblxuICAgIE1baV0gPSBhcnI7XG4gIH1cblxuICBNW04gLSAxXVsxNF0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4IC8gTWF0aC5wb3coMiwgMzIpO1xuICBNW04gLSAxXVsxNF0gPSBNYXRoLmZsb29yKE1bTiAtIDFdWzE0XSk7XG4gIE1bTiAtIDFdWzE1XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggJiAweGZmZmZmZmZmO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgY29uc3QgVyA9IG5ldyBVaW50MzJBcnJheSg4MCk7XG5cbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDE2OyArK3QpIHtcbiAgICAgIFdbdF0gPSBNW2ldW3RdO1xuICAgIH1cblxuICAgIGZvciAobGV0IHQgPSAxNjsgdCA8IDgwOyArK3QpIHtcbiAgICAgIFdbdF0gPSBST1RMKFdbdCAtIDNdIF4gV1t0IC0gOF0gXiBXW3QgLSAxNF0gXiBXW3QgLSAxNl0sIDEpO1xuICAgIH1cblxuICAgIGxldCBhID0gSFswXTtcbiAgICBsZXQgYiA9IEhbMV07XG4gICAgbGV0IGMgPSBIWzJdO1xuICAgIGxldCBkID0gSFszXTtcbiAgICBsZXQgZSA9IEhbNF07XG5cbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDgwOyArK3QpIHtcbiAgICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKHQgLyAyMCk7XG4gICAgICBjb25zdCBUID0gUk9UTChhLCA1KSArIGYocywgYiwgYywgZCkgKyBlICsgS1tzXSArIFdbdF0gPj4+IDA7XG4gICAgICBlID0gZDtcbiAgICAgIGQgPSBjO1xuICAgICAgYyA9IFJPVEwoYiwgMzApID4+PiAwO1xuICAgICAgYiA9IGE7XG4gICAgICBhID0gVDtcbiAgICB9XG5cbiAgICBIWzBdID0gSFswXSArIGEgPj4+IDA7XG4gICAgSFsxXSA9IEhbMV0gKyBiID4+PiAwO1xuICAgIEhbMl0gPSBIWzJdICsgYyA+Pj4gMDtcbiAgICBIWzNdID0gSFszXSArIGQgPj4+IDA7XG4gICAgSFs0XSA9IEhbNF0gKyBlID4+PiAwO1xuICB9XG5cbiAgcmV0dXJuIFtIWzBdID4+IDI0ICYgMHhmZiwgSFswXSA+PiAxNiAmIDB4ZmYsIEhbMF0gPj4gOCAmIDB4ZmYsIEhbMF0gJiAweGZmLCBIWzFdID4+IDI0ICYgMHhmZiwgSFsxXSA+PiAxNiAmIDB4ZmYsIEhbMV0gPj4gOCAmIDB4ZmYsIEhbMV0gJiAweGZmLCBIWzJdID4+IDI0ICYgMHhmZiwgSFsyXSA+PiAxNiAmIDB4ZmYsIEhbMl0gPj4gOCAmIDB4ZmYsIEhbMl0gJiAweGZmLCBIWzNdID4+IDI0ICYgMHhmZiwgSFszXSA+PiAxNiAmIDB4ZmYsIEhbM10gPj4gOCAmIDB4ZmYsIEhbM10gJiAweGZmLCBIWzRdID4+IDI0ICYgMHhmZiwgSFs0XSA+PiAxNiAmIDB4ZmYsIEhbNF0gPj4gOCAmIDB4ZmYsIEhbNF0gJiAweGZmXTtcbn1cblxudmFyIF9kZWZhdWx0ID0gc2hhMTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuZXhwb3J0cy51bnNhZmVTdHJpbmdpZnkgPSB1bnNhZmVTdHJpbmdpZnk7XG5cbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5mdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV07XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbnZhciBfZGVmYXVsdCA9IHN0cmluZ2lmeTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JuZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm5nLmpzXCIpKTtcblxudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcbmxldCBfbm9kZUlkO1xuXG5sZXQgX2Nsb2Nrc2VxOyAvLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcblxuXG5sZXQgX2xhc3RNU2VjcyA9IDA7XG5sZXQgX2xhc3ROU2VjcyA9IDA7IC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQgZm9yIEFQSSBkZXRhaWxzXG5cbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGxldCBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICBjb25zdCBiID0gYnVmIHx8IG5ldyBBcnJheSgxNik7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsZXQgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICBsZXQgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxOyAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcblxuICBpZiAobm9kZSA9PSBudWxsIHx8IGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICBjb25zdCBzZWVkQnl0ZXMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgX3JuZy5kZWZhdWx0KSgpO1xuXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtzZWVkQnl0ZXNbMF0gfCAweDAxLCBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XV07XG4gICAgfVxuXG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9IC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuXG5cbiAgbGV0IG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IERhdGUubm93KCk7IC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcblxuICBsZXQgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7IC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcblxuICBjb25zdCBkdCA9IG1zZWNzIC0gX2xhc3RNU2VjcyArIChuc2VjcyAtIF9sYXN0TlNlY3MpIC8gMTAwMDA7IC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9IC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcblxuXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9IC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcblxuXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInV1aWQudjEoKTogQ2FuJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjXCIpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxOyAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcblxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDsgLy8gYHRpbWVfbG93YFxuXG4gIGNvbnN0IHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjsgLy8gYHRpbWVfbWlkYFxuXG4gIGNvbnN0IHRtaCA9IG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjsgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcblxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG5cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7IC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDsgLy8gYGNsb2NrX3NlcV9sb3dgXG5cbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmOyAvLyBgbm9kZWBcblxuICBmb3IgKGxldCBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgfHwgKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShiKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdjE7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MzUuanNcIikpO1xuXG52YXIgX21kID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tZDUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCB2MyA9ICgwLCBfdi5kZWZhdWx0KSgndjMnLCAweDMwLCBfbWQuZGVmYXVsdCk7XG52YXIgX2RlZmF1bHQgPSB2MztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5VUkwgPSBleHBvcnRzLkROUyA9IHZvaWQgMDtcbmV4cG9ydHMuZGVmYXVsdCA9IHYzNTtcblxudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5cbnZhciBfcGFyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHIpIHtcbiAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpOyAvLyBVVEY4IGVzY2FwZVxuXG4gIGNvbnN0IGJ5dGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuXG4gIHJldHVybiBieXRlcztcbn1cblxuY29uc3QgRE5TID0gJzZiYTdiODEwLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnRzLkROUyA9IEROUztcbmNvbnN0IFVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0cy5VUkwgPSBVUkw7XG5cbmZ1bmN0aW9uIHYzNShuYW1lLCB2ZXJzaW9uLCBoYXNoZnVuYykge1xuICBmdW5jdGlvbiBnZW5lcmF0ZVVVSUQodmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICB2YXIgX25hbWVzcGFjZTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IHN0cmluZ1RvQnl0ZXModmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJykge1xuICAgICAgbmFtZXNwYWNlID0gKDAsIF9wYXJzZS5kZWZhdWx0KShuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGlmICgoKF9uYW1lc3BhY2UgPSBuYW1lc3BhY2UpID09PSBudWxsIHx8IF9uYW1lc3BhY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9uYW1lc3BhY2UubGVuZ3RoKSAhPT0gMTYpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH0gLy8gQ29tcHV0ZSBoYXNoIG9mIG5hbWVzcGFjZSBhbmQgdmFsdWUsIFBlciA0LjNcbiAgICAvLyBGdXR1cmU6IFVzZSBzcHJlYWQgc3ludGF4IHdoZW4gc3VwcG9ydGVkIG9uIGFsbCBwbGF0Zm9ybXMsIGUuZy4gYGJ5dGVzID1cbiAgICAvLyBoYXNoZnVuYyhbLi4ubmFtZXNwYWNlLCAuLi4gdmFsdWVdKWBcblxuXG4gICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTYgKyB2YWx1ZS5sZW5ndGgpO1xuICAgIGJ5dGVzLnNldChuYW1lc3BhY2UpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZSwgbmFtZXNwYWNlLmxlbmd0aCk7XG4gICAgYnl0ZXMgPSBoYXNoZnVuYyhieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDB4MGYgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiAweDNmIHwgMHg4MDtcblxuICAgIGlmIChidWYpIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBidWY7XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xuICB9IC8vIEZ1bmN0aW9uI25hbWUgaXMgbm90IHNldHRhYmxlIG9uIHNvbWUgcGxhdGZvcm1zICgjMjcwKVxuXG5cbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZVVVSUQubmFtZSA9IG5hbWU7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICB9IGNhdGNoIChlcnIpIHt9IC8vIEZvciBDb21tb25KUyBkZWZhdWx0IGV4cG9ydCBzdXBwb3J0XG5cblxuICBnZW5lcmF0ZVVVSUQuRE5TID0gRE5TO1xuICBnZW5lcmF0ZVVVSUQuVVJMID0gVVJMO1xuICByZXR1cm4gZ2VuZXJhdGVVVUlEO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX25hdGl2ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbmF0aXZlLmpzXCIpKTtcblxudmFyIF9ybmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JuZy5qc1wiKSk7XG5cbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAoX25hdGl2ZS5kZWZhdWx0LnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBfbmF0aXZlLmRlZmF1bHQucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nLmRlZmF1bHQpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkocm5kcyk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHY0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfdiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjM1LmpzXCIpKTtcblxudmFyIF9zaGEgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NoYTEuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCB2NSA9ICgwLCBfdi5kZWZhdWx0KSgndjUnLCAweDUwLCBfc2hhLmRlZmF1bHQpO1xudmFyIF9kZWZhdWx0ID0gdjU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9yZWdleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVnZXguanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgX3JlZ2V4LmRlZmF1bHQudGVzdCh1dWlkKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdmFsaWRhdGU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2ZXJzaW9uKHV1aWQpIHtcbiAgaWYgKCEoMCwgX3ZhbGlkYXRlLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxNSksIDE2KTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdmVyc2lvbjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsImNvbnN0IHsgdjQ6IHV1aWR2NCB9ID0gcmVxdWlyZSgndXVpZCcpO1xuXG5mdW5jdGlvbiBnZXRQcmlDb2wocHIpIHtcbiAgICBjb25zdCBtYXBwaW5nID0gW1wicmVkXCIsIFwib3JhbmdlXCIsIFwieWVsbG93XCIsIFwiYmx1ZVwiLCBcImFxdWFcIl07XG4gICAgcmV0dXJuIG1hcHBpbmdbcHIgLSAxXTtcbn1cblxuXG5mdW5jdGlvbiB0b0RvKFRpdGxlLCBEZXNjLCBEdWVEYXRlLCBQcmlvcml0eSwgTm90ZXMsIFN0YXR1cyA9IGZhbHNlKSB7XG4gICAgbGV0IGlkID0gdXVpZHY0KCk7XG4gICAgbGV0IHRpdGxlID0gVGl0bGUsIGRlc2MgPSBEZXNjLCBkdWVEYXRlID0gRHVlRGF0ZSwgcHJpb3JpdHkgPSBQcmlvcml0eSwgbm90ZXMgPSBOb3RlcywgaXNEb25lID0gU3RhdHVzO1xuICAgIGNvbnN0IHNldFRpdGxlID0gKHRsKSA9PiB7IHRpdGxlID0gdGwgfTtcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICAgIGNvbnN0IHNldERlc2MgPSAoZGVzY3ApID0+IHsgZGVzYyA9IGRlc2NwIH07XG4gICAgY29uc3QgZ2V0RGVzYyA9ICgpID0+IGRlc2M7XG4gICAgY29uc3Qgc2V0ZHVlRGF0ZSA9IChkYXRlKSA9PiB7IGR1ZURhdGUgPSBkYXRlIH07XG4gICAgY29uc3QgZ2V0ZHVlRGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gICAgY29uc3Qgc2V0UHJpb3IgPSAocHJpb3IpID0+IHsgcHJpb3JpdHkgfTtcbiAgICBjb25zdCBnZXRQcmlvciA9ICgpID0+IHByaW9yaXR5O1xuICAgIGNvbnN0IHNldE5vdGVzID0gKG5vdGUpID0+IHsgbm90ZXMgPSBub3RlIH07XG4gICAgY29uc3QgZ2V0Tm90ZXMgPSAoKSA9PiBub3RlcztcbiAgICBjb25zdCBzZXRTdGF0dXMgPSAoc3RhdHVzKSA9PiB7IGlzRG9uZSA9IHN0YXR1cyB9O1xuICAgIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IGlzRG9uZTtcbiAgICBjb25zdCBnZXRJZCA9ICgpID0+IGlkO1xuICAgIGNvbnN0IGdldFByaW9yQ29sID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0UHJpQ29sKHByaW9yaXR5KTtcbiAgICB9O1xuXG4gICAgY29uc3QgbG9hZERhdGEgPSAob2JqKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iajIgPSBKU09OLnBhcnNlKG9iaik7XG4gICAgICAgIGlkID0gb2JqMi5pZDtcbiAgICAgICAgdGl0bGUgPSBvYmoyLnRpdGxlO1xuICAgICAgICBkZXNjID0gb2JqMi5kZXNjO1xuICAgICAgICBkdWVEYXRlID0gb2JqMi5kdWVEYXRlO1xuICAgICAgICBwcmlvcml0eSA9IG9iajIucHJpb3JpdHk7XG4gICAgICAgIG5vdGVzID0gb2JqMi5ub3RlcztcbiAgICAgICAgaXNEb25lID0gb2JqMi5pc0RvbmU7XG4gICAgfTtcbiAgICBjb25zdCBnZXREYXRhID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4geyBpZCwgdGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgaXNEb25lIH07XG4gICAgfTtcbiAgICBjb25zdCBzdHJpbmdpZnkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShnZXREYXRhKCkpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBsb2FkRGF0YSwgc2V0RGVzYywgc2V0Tm90ZXMsIHNldFByaW9yLCBzZXRTdGF0dXMsIHNldFRpdGxlLCBzZXRkdWVEYXRlLCBnZXRkdWVEYXRlLCBnZXREZXNjLCBnZXRJZCwgZ2V0Tm90ZXMsIGdldFN0YXR1cywgZ2V0VGl0bGUsIGdldFByaW9yLCBnZXRQcmlvckNvbCwgc3RyaW5naWZ5IH07XG59XG5cbmZ1bmN0aW9uIHByb2plY3QoVGl0bGUpIHtcbiAgICBsZXQgdGl0bGUgPSBUaXRsZTtcbiAgICBsZXQgaWQgPSB1dWlkdjQoKTtcbiAgICBjb25zdCB0b0RvcyA9IHt9O1xuICAgIGNvbnN0IGdldElkID0gKCkgPT4gaWQ7XG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgICBjb25zdCBzZXRUaXRsZSA9IChoZWFkaW5nKSA9PiB7IHRpdGxlID0gaGVhZGluZyB9O1xuICAgIGNvbnN0IGFkZFRvRG8gPSAoaGVhZGluZywgZGVzYywgbm90ZXMsIGR1ZWRhdGUsIHByaW9yLCBzdGF0dXMpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb19pdGVtID0gdG9EbyhoZWFkaW5nLCBkZXNjLCBkdWVkYXRlLCBwcmlvciwgbm90ZXMsIHN0YXR1cyk7XG4gICAgICAgIHRvRG9zW3RvZG9faXRlbS5nZXRJZCgpXSA9IHRvZG9faXRlbTtcbiAgICAgICAgcmV0dXJuIHRvZG9faXRlbS5nZXRJZCgpO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlVG9EbyA9ICh0b2RvSWQpID0+IHtcbiAgICAgICAgaWYgKHRvRG9zLmhhc093blByb3BlcnR5KHRvZG9JZCkpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0b0Rvc1t0b2RvSWRdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGxvYWREYXRhID0gKG9iaikgPT4ge1xuICAgICAgICBjb25zdCBvYmoyID0gSlNPTi5wYXJzZShvYmopO1xuICAgICAgICB0aXRsZSA9IG9iajIudGl0bGU7XG4gICAgICAgIGlkID0gb2JqMi5pZDtcbiAgICAgICAgZm9yIChsZXQgdG9kb19pdGVtIG9mIG9iajIudG9Eb3MyKSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvSXRlbSA9IHRvRG8oXCJcIiwgXCJcIiwgXCJcIiwgLTEsIFwiXCIpO1xuICAgICAgICAgICAgdG9kb0l0ZW0ubG9hZERhdGEodG9kb19pdGVtKTtcbiAgICAgICAgICAgIHRvRG9zW3RvZG9JdGVtLmdldElkKCldID0gdG9kb0l0ZW07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHVwZGF0ZVRvZG8gPSAodG9kb0lkLCBoZWFkaW5nLCBkZXNjLCBub3RlcywgZHVlZGF0ZSwgcHJpb3IsIHN0YXR1cykgPT4ge1xuICAgICAgICBpZiAodG9Eb3MuaGFzT3duUHJvcGVydHkodG9kb0lkKSkge1xuICAgICAgICAgICAgdG9Eb3NbdG9kb0lkXS5zZXREZXNjKGRlc2MpO1xuICAgICAgICAgICAgdG9Eb3NbdG9kb0lkXS5zZXROb3Rlcyhub3Rlcyk7XG4gICAgICAgICAgICB0b0Rvc1t0b2RvSWRdLnNldFRpdGxlKGhlYWRpbmcpO1xuICAgICAgICAgICAgdG9Eb3NbdG9kb0lkXS5zZXRkdWVEYXRlKGR1ZWRhdGUpO1xuICAgICAgICAgICAgdG9Eb3NbdG9kb0lkXS5zZXRQcmlvcihwcmlvcik7XG4gICAgICAgICAgICB0b0Rvc1t0b2RvSWRdLnNldFN0YXR1cyhzdGF0dXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCB0b2dnbGVTdGF0dXMgPSAodG9kb0lkLCBzdGF0dXMpID0+IHtcbiAgICAgICAgaWYgKHRvRG9zLmhhc093blByb3BlcnR5KHRvZG9JZCkpIHtcbiAgICAgICAgICAgIHRvRG9zW3RvZG9JZF0uc2V0U3RhdHVzKHN0YXR1cyk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGdldFRvZG8gPSAodG9kb0lkKSA9PiB7XG4gICAgICAgIGlmICh0b0Rvcy5oYXNPd25Qcm9wZXJ0eSh0b2RvSWQpKSB7XG4gICAgICAgICAgICBjb25zdCB7IGdldGR1ZURhdGUsIGdldERlc2MsIGdldElkLCBnZXROb3RlcywgZ2V0U3RhdHVzLCBnZXRUaXRsZSwgZ2V0UHJpb3IsIGdldFByaW9yQ29sLCBzdHJpbmdpZnkgfSA9IHRvRG9zW3RvZG9JZF07XG4gICAgICAgICAgICByZXR1cm4geyBnZXRkdWVEYXRlLCBnZXREZXNjLCBnZXRJZCwgZ2V0Tm90ZXMsIGdldFN0YXR1cywgZ2V0VGl0bGUsIGdldFByaW9yLCBnZXRQcmlvckNvbCwgc3RyaW5naWZ5IH07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VG9kb0FsbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gW107XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0b0Rvcykge1xuICAgICAgICAgICAgaWYgKHRvRG9zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgeyBnZXRkdWVEYXRlLCBnZXREZXNjLCBnZXRJZCwgZ2V0Tm90ZXMsIGdldFN0YXR1cywgZ2V0VGl0bGUsIGdldFByaW9yLCBnZXRQcmlvckNvbCwgc3RyaW5naWZ5IH0gPSB0b0Rvc1trZXldO1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoKHsgZ2V0ZHVlRGF0ZSwgZ2V0RGVzYywgZ2V0SWQsIGdldE5vdGVzLCBnZXRTdGF0dXMsIGdldFRpdGxlLCBnZXRQcmlvciwgZ2V0UHJpb3JDb2wsIHN0cmluZ2lmeSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXREYXRhID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0RvczIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRvRG9zKSB7XG4gICAgICAgICAgICBpZiAodG9Eb3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRvRG9zMi5wdXNoKHRvRG9zW2tleV0uc3RyaW5naWZ5KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGlkLCB0aXRsZSwgdG9Eb3MyIH07XG4gICAgfTtcbiAgICBjb25zdCBzdHJpbmdpZnkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShnZXREYXRhKCkpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBsb2FkRGF0YSwgZ2V0VGl0bGUsIGdldElkLCBnZXRUb2RvLCBnZXRUb2RvQWxsLCBzdHJpbmdpZnksIHVwZGF0ZVRvZG8sIHJlbW92ZVRvRG8sIGFkZFRvRG8sIHRvZ2dsZVN0YXR1cywgc2V0VGl0bGUgfTtcbn1cblxuXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICBsZXQgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgIHN0b3JhZ2UgJiZcbiAgICAgICAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFja2VuZFVzZXIoKSB7XG4gICAgbGV0IG5hbWU7XG4gICAgY29uc3QgcHJvamVjdHMgPSB7fTtcbiAgICBsZXQgaXNEYXRhID0gZmFsc2U7XG4gICAgLy8gY29uc3QgbG9hZERhdGEgPSAoKSA9PiB7XG4gICAgLy8gICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpIHtcbiAgICAvLyAgICAgICAgIGlzRGF0YSA9IHRydWU7XG4gICAgLy8gICAgICAgICBjb25zdCBzdG9yID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuICAgIC8vICAgICAgICAgbmFtZSA9IHN0b3JbJ25hbWUnXTtcbiAgICAvLyAgICAgICAgIGZvciAobGV0IHBybyBvZiBzdG9yWydwcm8yJ10pIHtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBwcm9qID0gcHJvamVjdChcIlwiKTtcbiAgICAvLyAgICAgICAgICAgICBwcm9qLmxvYWREYXRhKHBybyk7XG4gICAgLy8gICAgICAgICAgICAgcHJvamVjdHNbcHJvai5nZXRJZCgpXSA9IHByb2o7XG4gICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShwcm8pWyd0aXRsZSddKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YSBmb3VuZDogXFxuXCIsIHN0b3IgPT09IHN0cmluZ2lmeSgpKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH07XG4gICAgLy8gbG9hZERhdGEoKTtcblxuICAgIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBybzIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHByb2plY3RzKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHBybzIucHVzaChwcm9qZWN0c1trZXldLnN0cmluZ2lmeSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBuYW1lLCBwcm8yIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHN0cmluZ2lmeSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGdldERhdGEoKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNhdmVEYXRhID0gKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgc3RyaW5naWZ5KCkpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXROYW1lID0gKE5hbWUpID0+IHtcbiAgICAgICAgbmFtZSA9IE5hbWU7XG4gICAgICAgIHNhdmVEYXRhKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuICAgIGNvbnN0IGdldGlzRGF0YSA9ICgpID0+IGlzRGF0YTtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKFRpdGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHAxID0gcHJvamVjdChUaXRsZSk7XG4gICAgICAgIHByb2plY3RzW3AxLmdldElkKCldID0gcDE7XG4gICAgICAgIHNhdmVEYXRhKCk7XG4gICAgICAgIHJldHVybiBwMS5nZXRJZCgpO1xuICAgIH07XG4gICAgY29uc3QgdXBkYXRlUHJvamVjdCA9IChUaXRsZSwgcElEKSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0cy5oYXNPd25Qcm9wZXJ0eShwSUQpKSB7XG4gICAgICAgICAgICBwcm9qZWN0c1twSURdLnNldFRpdGxlKFRpdGxlKTtcbiAgICAgICAgICAgIHNhdmVEYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHBJRCkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdHMuaGFzT3duUHJvcGVydHkocElEKSkge1xuICAgICAgICAgICAgZGVsZXRlIHByb2plY3RzW3BJRF07XG4gICAgICAgICAgICBzYXZlRGF0YSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFByb2plY3QgPSAocElEKSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0cy5oYXNPd25Qcm9wZXJ0eShwSUQpKSB7XG4gICAgICAgICAgICBjb25zdCB7IGdldFRpdGxlLCBnZXRJZCwgZ2V0VG9kbywgZ2V0VG9kb0FsbCB9ID0gcHJvamVjdHNbcElEXTtcbiAgICAgICAgICAgIHJldHVybiB7IGdldFRpdGxlLCBnZXRJZCwgZ2V0VG9kbywgZ2V0VG9kb0FsbCB9O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFByb2plY3RBbGwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcHJvamVjdHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHsgZ2V0VGl0bGUsIGdldElkLCBnZXRUb2RvLCBnZXRUb2RvQWxsIH0gPSBwcm9qZWN0c1trZXldO1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoKHsgZ2V0VGl0bGUsIGdldElkLCBnZXRUb2RvLCBnZXRUb2RvQWxsIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFRvZG8gPSAocElELCBoZWFkaW5nLCBkZXNjLCBub3RlcywgZHVlZGF0ZSwgcHJpb3IsIHN0YXR1cyA9IGZhbHNlKSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0cy5oYXNPd25Qcm9wZXJ0eShwSUQpKSB7XG4gICAgICAgICAgICBjb25zdCB0SUQgPSBwcm9qZWN0c1twSURdLmFkZFRvRG8oaGVhZGluZywgZGVzYywgbm90ZXMsIGR1ZWRhdGUsIHByaW9yLCBzdGF0dXMpO1xuICAgICAgICAgICAgc2F2ZURhdGEoKTtcbiAgICAgICAgICAgIHJldHVybiB0SUQ7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlVG9kbyA9IChwSUQsIHRvZG9JZCwgaGVhZGluZywgZGVzYywgbm90ZXMsIGR1ZWRhdGUsIHByaW9yLCBzdGF0dXMgPSBmYWxzZSkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdHMuaGFzT3duUHJvcGVydHkocElEKSkge1xuICAgICAgICAgICAgcHJvamVjdHNbcElEXS51cGRhdGVUb2RvKHRvZG9JZCwgaGVhZGluZywgZGVzYywgbm90ZXMsIGR1ZWRhdGUsIHByaW9yLCBzdGF0dXMpO1xuICAgICAgICAgICAgc2F2ZURhdGEoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVUb2RvID0gKHBJRCwgdG9kb0lkLCBzdGF0dXMpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3RzLmhhc093blByb3BlcnR5KHBJRCkpIHtcbiAgICAgICAgICAgIHByb2plY3RzW3BJRF0udG9nZ2xlU3RhdHVzKHRvZG9JZCwgc3RhdHVzKTtcbiAgICAgICAgICAgIHNhdmVEYXRhKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmVtVG9kbyA9IChwSUQsIHRvZG9JZCkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdHMuaGFzT3duUHJvcGVydHkocElEKSkge1xuICAgICAgICAgICAgcHJvamVjdHNbcElEXS5yZW1vdmVUb0RvKHRvZG9JZCk7XG4gICAgICAgICAgICBzYXZlRGF0YSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGxvYWREYXRhID0gKCkgPT4ge1xuICAgICAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSB7XG4gICAgICAgICAgICBpc0RhdGEgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3Qgc3RvciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbiAgICAgICAgICAgIG5hbWUgPSBzdG9yWyduYW1lJ107XG4gICAgICAgICAgICBmb3IgKGxldCBwcm8gb2Ygc3RvclsncHJvMiddKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvaiA9IHByb2plY3QoXCJcIik7XG4gICAgICAgICAgICAgICAgcHJvai5sb2FkRGF0YShwcm8pO1xuICAgICAgICAgICAgICAgIHByb2plY3RzW3Byb2ouZ2V0SWQoKV0gPSBwcm9qO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRhIGZvdW5kIGluIGxvY2FsU3RvcmFnZSEhXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBsb2FkRGF0YSgpO1xuICAgIHJldHVybiB7IHNldE5hbWUsIGdldE5hbWUsIGdldGlzRGF0YSwgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgdXBkYXRlUHJvamVjdCwgZ2V0UHJvamVjdCwgZ2V0UHJvamVjdEFsbCwgYWRkVG9kbywgdXBkYXRlVG9kbywgdG9nZ2xlVG9kbywgcmVtVG9kbywgc3RyaW5naWZ5IH07XG59XG5cbiIsImltcG9ydCBob21lSWNvbiBmcm9tICcuL2Fzc2V0cy9ob21lLW1pbnVzLW91dGxpbmUuc3ZnJztcbmltcG9ydCBwcm9qZWN0SWNvbiBmcm9tICcuL2Fzc2V0cy9ub3RlLWVkaXQtb3V0bGluZS5zdmcnO1xuaW1wb3J0IHN1bkljb24gZnJvbSAnLi9hc3NldHMvc3VuLnBuZyc7XG5pbXBvcnQgbW9vbmljb24gZnJvbSAnLi9hc3NldHMvbW9vbi5wbmcnO1xuaW1wb3J0IG1hbiBmcm9tICcuL2Fzc2V0cy9tYW4ucG5nJztcbmltcG9ydCB7IGVsIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmcm9udGVuZCgpIHtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFja2Ryb3BcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJykuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1tb2RhbCcpLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZW1lJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGhlbWVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZW1lLWljb24nKTtcbiAgICAgICAgaWYgKHRoZW1lSWNvbi5zcmMgPT09IG1vb25pY29uKSB7XG4gICAgICAgICAgICB0aGVtZUljb24uc3JjID0gc3VuSWNvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoZW1lSWNvbi5zcmMgPSBtb29uaWNvbjtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZmF2X2ljb24gPSAoaW1nKSA9PiB7XG4gICAgICAgIGNvbnN0IGZhdmljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5cbiAgICAgICAgZmF2aWNvbi5yZWwgPSAnaWNvbic7XG4gICAgICAgIGZhdmljb24udHlwZSA9ICdpbWFnZS9wbmcnO1xuICAgICAgICBmYXZpY29uLmhyZWYgPSBpbWc7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRmF2aWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPVwiaWNvblwiXScpO1xuICAgICAgICBpZiAoZXhpc3RpbmdGYXZpY29uKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKGV4aXN0aW5nRmF2aWNvbik7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChmYXZpY29uKTtcbiAgICAgICAgY29uc3QgdGhlbWVJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoZW1lSWNvbi5zcmMgPSBtb29uaWNvbjtcbiAgICAgICAgdGhlbWVJY29uLmNsYXNzTGlzdC5hZGQoJ3RoZW1lLWljb24nKTtcbiAgICAgICAgY29uc3QgdGhlbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWUnKTtcbiAgICAgICAgdGhlbWVCdXR0b24uYXBwZW5kQ2hpbGQodGhlbWVJY29uKTtcblxuICAgIH07XG5cbiAgICBjb25zdCBsb2dpbkZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZHJvcCcpLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtbW9kYWwnKS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICB9O1xuICAgIGNvbnN0IHVwZGF0ZU5hbWUgPSAodW5hbWUpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlci1uYW1lXCIpLnRleHRDb250ZW50ID0gdW5hbWU7XG4gICAgICAgICAgICBjb25zdCBuY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZS1jYXJkLnNpZGViYXItYW5pbVwiKTtcbiAgICAgICAgICAgIG5jYXJkLmNsYXNzTGlzdC50b2dnbGUoJy5zaWRlYmFyLWFuaW0nKTtcbiAgICAgICAgICAgIC8vIG5jYXJkLmNsYXNzTGlzdC5hZGQoJy5zaWRlYmFyLWFuaW0nKTtcbiAgICAgICAgICAgIC8vIG5jYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAvLyBuY2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBzdWNoIGVsZW1lbnRcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyUHJvamVjdE5hbWUgPSAocG5hbWUsIGNscywgcGlkID0gbnVsbCwgaWNvbiA9IG51bGwpID0+IHtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcbiAgICAgICAgY29uc3QgcHJvX2l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItcHJvamVjdHMnKTtcbiAgICAgICAgY29uc3Qgc3dpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHN3aWRnZXQuY2xhc3NMaXN0LmFkZChcInNpZGViYXItd2lkZ2V0XCIpO1xuICAgICAgICBzd2lkZ2V0LmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICAgICAgc3dpZGdldC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1hbmltXCIpO1xuICAgICAgICBpZiAocGlkKSB7XG4gICAgICAgICAgICBzd2lkZ2V0LnNldEF0dHJpYnV0ZShcInByb0lEXCIsIHBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGljb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHdpZGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHdpZGljb24uc3JjID0gaWNvbjtcbiAgICAgICAgICAgIHdpZGljb24uY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gICAgICAgICAgICBzd2lkZ2V0LmFwcGVuZENoaWxkKHdpZGljb24pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdpZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgd2lkQ29udGVudC50ZXh0Q29udGVudCA9IHBuYW1lO1xuICAgICAgICBzd2lkZ2V0LmFwcGVuZENoaWxkKHdpZENvbnRlbnQpO1xuICAgICAgICBwcm9faXRlbXMuYXBwZW5kQ2hpbGQoc3dpZGdldCk7XG4gICAgfTtcbiAgICBjb25zdCByZW5kZXJTaWRlYmFyID0gKHVzZXIpID0+IHtcbiAgICAgICAgY29uc3QgdW5hbWUgPSB1c2VyLmdldE5hbWUoKTtcbiAgICAgICAgY29uc3QgbmNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuY2FyZC5jbGFzc0xpc3QuYWRkKFwibmFtZS1jYXJkXCIpO1xuICAgICAgICBuY2FyZC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1hbmltXCIpO1xuICAgICAgICBjb25zdCBwcm9waWMgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcHJvcGljLnNyYyA9IG1hbjtcbiAgICAgICAgcHJvcGljLmNsYXNzTGlzdC5hZGQoXCJ1c2VyLWltYWdlXCIpO1xuICAgICAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIG5hbWVEaXYuY2xhc3NMaXN0LmFkZChcInVzZXItbmFtZVwiKTtcbiAgICAgICAgbmFtZURpdi50ZXh0Q29udGVudCA9IHVuYW1lO1xuICAgICAgICBuY2FyZC5hcHBlbmRDaGlsZChwcm9waWMpO1xuICAgICAgICBuY2FyZC5hcHBlbmRDaGlsZChuYW1lRGl2KTtcbiAgICAgICAgbmNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2dpbkZvcm0pO1xuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG5jYXJkKTtcbiAgICAgICAgY29uc3QgY3JlYXRlUHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY3JlYXRlUHJvLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGUtcHJvXCIpO1xuICAgICAgICBjcmVhdGVQcm8uY2xhc3NMaXN0LmFkZChcInNpZGViYXItYW5pbVwiKTtcbiAgICAgICAgY3JlYXRlUHJvLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiO1xuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGNyZWF0ZVBybyk7XG4gICAgICAgIGNvbnN0IHByb19pdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb19pdGVtcy5jbGFzc0xpc3QuYWRkKFwidXNlci1wcm9qZWN0c1wiKTtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9faXRlbXMpO1xuICAgICAgICByZW5kZXJQcm9qZWN0TmFtZShcIkhvbWVcIiwgXCJob21lLXRpbGVcIiwgbnVsbCwgaG9tZUljb24pO1xuICAgICAgICByZW5kZXJQcm9qZWN0TmFtZShcIkFsbCBQcm9qZWN0c1wiLCBcImFsbC1wcm9qZWN0cy10aWxlXCIsIG51bGwsIHByb2plY3RJY29uKTtcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiB1c2VyLmdldFByb2plY3RBbGwoKSkge1xuICAgICAgICAgICAgcmVuZGVyUHJvamVjdE5hbWUocHJvamVjdC5nZXRUaXRsZSgpLCBcInByb2plY3QtdGlsZVwiLCBwcm9qZWN0LmdldElkKCksIHByb2plY3RJY29uKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHsgZmF2X2ljb24sIGxvZ2luRm9ybSwgcmVuZGVyU2lkZWJhciwgdXBkYXRlTmFtZSB9O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFVzZXIgZnJvbSAnLi9iYWNrZW5kLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGZhdiBmcm9tICcuL2Fzc2V0cy9mYXYucG5nJztcbmltcG9ydCBmcm9udGVuZCBmcm9tICcuL2Zyb250ZW5kLmpzJztcblxuY29uc3QgYXBwID0gKGZ1bmN0aW9uIFNjcmVlbkNvbnRyb2xsZXIoKSB7XG4gICAgY29uc3QgZnJvbnQgPSBmcm9udGVuZCgpO1xuICAgIGZyb250LmZhdl9pY29uKGZhdik7XG4gICAgY29uc3QgdXNlciA9IFVzZXIoKTtcbiAgICBpZiAoIXVzZXIuZ2V0aXNEYXRhKCkpIHtcbiAgICAgICAgZnJvbnQubG9naW5Gb3JtKCk7XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4tZm9ybS1jb250YWluZXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZuYW1lXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBsbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG5hbWVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHVzZXJOYW1lID0gZm5hbWUgKyBcIiBcIiArIGxuYW1lO1xuICAgICAgICB1c2VyLnNldE5hbWUodXNlck5hbWUpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLW1vZGFsJykuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gICAgICAgIGZyb250LnVwZGF0ZU5hbWUodXNlck5hbWUpO1xuICAgIH0pO1xuICAgIGZyb250LnJlbmRlclNpZGViYXIodXNlcik7XG59KSgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=