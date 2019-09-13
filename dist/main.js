/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_landing_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/landing-page */ \"./src/pages/landing-page.js\");\n/* harmony import */ var _pages_contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/contact-page */ \"./src/pages/contact-page.js\");\n/* harmony import */ var _pages_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu-page */ \"./src/pages/menu-page.js\");\n\r\n\r\n\r\n\r\nconst content = document.getElementById('content');\r\nfunction clearContent() {\r\n  while(content.firstChild){\r\n    content.removeChild(content.firstChild);\r\n  }\r\n}\r\n\r\nconst landing_tab = document.getElementById('landing-tab');\r\nlanding_tab.addEventListener('click', () => {\r\n  clearContent();\r\n  Object(_pages_landing_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\r\nconst contact_tab = document.getElementById('contact-tab');\r\ncontact_tab.addEventListener('click', () => {\r\n  clearContent();\r\n  Object(_pages_contact_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\r\n\r\nconst menu_tab = document.getElementById('menu-tab');\r\nmenu_tab.addEventListener('click', () => {\r\n  clearContent();\r\n  Object(_pages_menu_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\r\nObject(_pages_landing_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/contact-page.js":
/*!***********************************!*\
  !*** ./src/pages/contact-page.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst contact_page = () => {\r\n  const content = document.getElementById(\"content\");\r\n  const fragment = document.createDocumentFragment();\r\n  \r\n  const h1 = document.createElement(\"h1\");\r\n  const h1_text = document.createTextNode(\"Contact Us\");\r\n  h1.appendChild(h1_text);\r\n  fragment.appendChild(h1);\r\n\r\n  const h2 = document.createElement(\"h2\");\r\n  const h2_text = document.createTextNode(\"Just come eat and you can contact us here.\");\r\n  h2.appendChild(h2_text);\r\n  fragment.appendChild(h2);\r\n\r\n  content.appendChild(fragment);\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact_page);\n\n//# sourceURL=webpack:///./src/pages/contact-page.js?");

/***/ }),

/***/ "./src/pages/landing-page.js":
/*!***********************************!*\
  !*** ./src/pages/landing-page.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst landing_page = () => {\r\n  const content = document.getElementById(\"content\");\r\n  const fragment = document.createDocumentFragment();\r\n  \r\n  const h1 = document.createElement(\"h1\");\r\n  const h1_text = document.createTextNode(\"Midge's Restaurant\");\r\n  h1.appendChild(h1_text);\r\n  fragment.appendChild(h1);\r\n\r\n  const img = document.createElement(\"img\");\r\n  img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg');\r\n  img.setAttribute('alt', 'Two red tomatoes side-by-side, the left one is halved.');\r\n  fragment.appendChild(img);\r\n\r\n  const p = document.createElement(\"p\");\r\n  const p_text = document.createTextNode(\"As you can see by the beautiful image of a beautiful ingredient, we take our food very seriously. We have received the highest praise from award-winning people. If you eat food, we'll serve you.\");\r\n  p.appendChild(p_text);\r\n  fragment.appendChild(p);\r\n\r\n  content.appendChild(fragment);\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (landing_page);\n\n//# sourceURL=webpack:///./src/pages/landing-page.js?");

/***/ }),

/***/ "./src/pages/menu-page.js":
/*!********************************!*\
  !*** ./src/pages/menu-page.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst menu_page = () => {\r\n  const content = document.getElementById(\"content\");\r\n  const fragment = document.createDocumentFragment();\r\n  \r\n  const h1 = document.createElement(\"h1\");\r\n  const h1_text = document.createTextNode(\"Midge's Menu\");\r\n  h1.appendChild(h1_text);\r\n  fragment.appendChild(h1);\r\n\r\n  const h2 = document.createElement(\"h2\");\r\n  const h2_text = document.createTextNode(\"$5 Tomato\");\r\n  h2.appendChild(h2_text);\r\n  fragment.appendChild(h2);\r\n\r\n  content.appendChild(fragment);\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu_page);\n\n//# sourceURL=webpack:///./src/pages/menu-page.js?");

/***/ })

/******/ });