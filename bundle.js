/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* styles.css */\r\nbody {\r\n  font-family: Arial, sans-serif;\r\n  margin: 0;\r\n  padding: 20px;\r\n  height: 100vh;\r\n}\r\n\r\n.dropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.dropdowndiv {\r\n  margin: 40px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.dropdown-button {\r\n  background-color: #3498db;\r\n  color: white;\r\n  padding: 10px 20px;\r\n  font-size: 16px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.dropdown-button:hover {\r\n  background-color: #2980b9;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f1f1f1;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\n.dropdown-content a:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n.show {\r\n  display: block;\r\n}\r\n\r\n/*carousel*/\r\n/* styles.css */\r\nbody {\r\n  margin: 0;\r\n  font-family: Arial, sans-serif;\r\n}\r\n\r\n.carousel-container {\r\n  position: relative;\r\n  max-width: 500px;\r\n  margin: auto;\r\n  overflow: hidden;\r\n}\r\n\r\n.carousel {\r\n  display: flex;\r\n  transition: transform 0.5s ease;\r\n}\r\n\r\n.carousel-slide {\r\n  min-width: 100%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.carousel-slide img {\r\n  width: 100%;\r\n  display: block;\r\n}\r\n\r\n.arrow {\r\n  position: absolute;\r\n  top: 50%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  color: white;\r\n  border: none;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  z-index: 1;\r\n}\r\n\r\n.prev {\r\n  left: 10px;\r\n}\r\n\r\n.next {\r\n  right: 10px;\r\n}\r\n\r\n.nav-dots {\r\n  text-align: center;\r\n  position: absolute;\r\n  bottom: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.nav-dots span {\r\n  display: inline-block;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: 0 5px;\r\n  background-color: #bbb;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-dots .active {\r\n  background-color: #717171;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dropdown-and-carousel/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://dropdown-and-carousel/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dropdown-and-carousel/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://dropdown-and-carousel/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://dropdown-and-carousel/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://dropdown-and-carousel/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://dropdown-and-carousel/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://dropdown-and-carousel/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://dropdown-and-carousel/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://dropdown-and-carousel/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _images_Extremely_Peaceful_Sticker_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Extremely_Peaceful_Sticker.webp */ \"./src/images/Extremely_Peaceful_Sticker.webp\");\n/* harmony import */ var _images_Gaytheon_Long_Sticker_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/Gaytheon_Long_Sticker.webp */ \"./src/images/Gaytheon_Long_Sticker.webp\");\n/* harmony import */ var _images_Home_of_Challenge_Pissing_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/Home_of_Challenge_Pissing.webp */ \"./src/images/Home_of_Challenge_Pissing.webp\");\n/* harmony import */ var _images_express_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/express.png */ \"./src/images/express.png\");\n/* harmony import */ var _images_North_Hollywood_Sticker_MU_1_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/North_Hollywood_Sticker_MU_1.webp */ \"./src/images/North_Hollywood_Sticker_MU_1.webp\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst main = {\r\n  init: function () {\r\n    console.log(\"Webpack is bundling CSS\");\r\n    this.appendContent();\r\n  },\r\n  appendContent: function () {\r\n    const upperDiv = document.createElement(\"div\");\r\n    upperDiv.className = \"dropdowndiv\";\r\n\r\n    const lowerDiv = document.createElement(\"div\");\r\n    lowerDiv.className = \"carousel\";\r\n\r\n    document.body.appendChild(upperDiv);\r\n    document.body.appendChild(lowerDiv);\r\n\r\n    this.appendDropdown();\r\n    this.initDropdown();\r\n    this.appendCarousel();\r\n  },\r\n  appendDropdown: function () {\r\n    console.log(\"appending dropdown menu\");\r\n    const dropdownDiv = document.createElement(\"div\");\r\n    dropdownDiv.className = \"dropdown\";\r\n\r\n    const dropdownButton = document.createElement(\"button\");\r\n    dropdownButton.className = \"dropdown-button\";\r\n    dropdownButton.textContent = \"Menu\";\r\n\r\n    const dropdownContentDiv = document.createElement(\"div\");\r\n    dropdownContentDiv.className = \"dropdown-content\";\r\n\r\n    const option1 = document.createElement(\"a\");\r\n    option1.href = \"#\";\r\n    option1.textContent = \"Option 1\";\r\n\r\n    const option2 = document.createElement(\"a\");\r\n    option2.href = \"#\";\r\n    option2.textContent = \"Option 2\";\r\n\r\n    const option3 = document.createElement(\"a\");\r\n    option3.href = \"#\";\r\n    option3.textContent = \"Option 3\";\r\n\r\n    dropdownContentDiv.appendChild(option1);\r\n    dropdownContentDiv.appendChild(option2);\r\n    dropdownContentDiv.appendChild(option3);\r\n\r\n    dropdownDiv.appendChild(dropdownButton);\r\n    dropdownDiv.appendChild(dropdownContentDiv);\r\n\r\n    const lowerdiv = document.querySelector(\".dropdowndiv\");\r\n    lowerdiv.appendChild(dropdownDiv);\r\n  },\r\n  appendCarousel: function () {\r\n    const container = document.querySelector(\".carousel\");\r\n    const carouselContainer = document.createElement(\"div\");\r\n    carouselContainer.className = \"carousel-container\";\r\n\r\n    const carousel = document.createElement(\"div\");\r\n    carousel.className = \"carousel\";\r\n\r\n    const images = [\r\n      {\r\n        src: _images_Extremely_Peaceful_Sticker_webp__WEBPACK_IMPORTED_MODULE_1__,\r\n        alt: \"Extremely Peaceful\",\r\n      },\r\n      { src: _images_Gaytheon_Long_Sticker_webp__WEBPACK_IMPORTED_MODULE_2__, alt: \"Gaytheon\" },\r\n      { src: _images_express_png__WEBPACK_IMPORTED_MODULE_4__, alt: \"Image 3\" },\r\n      { src: _images_Home_of_Challenge_Pissing_webp__WEBPACK_IMPORTED_MODULE_3__, alt: \"Pee\" },\r\n      { src: _images_North_Hollywood_Sticker_MU_1_webp__WEBPACK_IMPORTED_MODULE_5__, alt: \"Hollywood\" },\r\n    ];\r\n\r\n    // Create slides and add them to the carousel\r\n    images.forEach((image) => {\r\n      const slide = document.createElement(\"div\");\r\n      slide.className = \"carousel-slide\";\r\n      const img = document.createElement(\"img\");\r\n      img.src = image.src;\r\n      img.alt = image.alt;\r\n      slide.appendChild(img);\r\n      carousel.appendChild(slide);\r\n    });\r\n\r\n    // Create previous and next buttons\r\n    const prevButton = document.createElement(\"button\");\r\n    prevButton.className = \"arrow prev\";\r\n    prevButton.innerHTML = \"&#10094;\"; // Left arrow\r\n    const nextButton = document.createElement(\"button\");\r\n    nextButton.className = \"arrow next\";\r\n    nextButton.innerHTML = \"&#10095;\"; // Right arrow\r\n\r\n    // Create navigation dots container\r\n    const navDots = document.createElement(\"div\");\r\n    navDots.className = \"nav-dots\";\r\n\r\n    // Append elements to the container\r\n    carouselContainer.appendChild(carousel);\r\n    carouselContainer.appendChild(prevButton);\r\n    carouselContainer.appendChild(nextButton);\r\n    carouselContainer.appendChild(navDots);\r\n    document.body.appendChild(carouselContainer);\r\n\r\n    // Initialize the carousel\r\n    let currentSlide = 0;\r\n    const totalSlides = images.length;\r\n    const slideInterval = 3000; // 5 seconds\r\n\r\n    const showSlide = (index) => {\r\n      if (index >= totalSlides) currentSlide = 0;\r\n      else if (index < 0) currentSlide = totalSlides - 1;\r\n      else currentSlide = index;\r\n\r\n      const offset = -currentSlide * 100;\r\n      carousel.style.transform = `translateX(${offset}%)`;\r\n\r\n      updateDots();\r\n    };\r\n\r\n    const updateDots = () => {\r\n      const dots = navDots.querySelectorAll(\"span\");\r\n      dots.forEach((dot, index) => {\r\n        dot.className = index === currentSlide ? \"active\" : \"\";\r\n      });\r\n    };\r\n\r\n    const createDots = () => {\r\n      for (let i = 0; i < totalSlides; i++) {\r\n        const dot = document.createElement(\"span\");\r\n        dot.addEventListener(\"click\", () => showSlide(i));\r\n        navDots.appendChild(dot);\r\n      }\r\n      updateDots();\r\n    };\r\n\r\n    nextButton.addEventListener(\"click\", () => {\r\n      showSlide(currentSlide + 1);\r\n    });\r\n\r\n    prevButton.addEventListener(\"click\", () => {\r\n      showSlide(currentSlide - 1);\r\n    });\r\n\r\n    createDots();\r\n    showSlide(currentSlide);\r\n\r\n    setInterval(() => {\r\n      showSlide(currentSlide + 1);\r\n    }, slideInterval);\r\n  },\r\n  initDropdown: function () {\r\n    console.log(\"initializing dropdown script\");\r\n    document.addEventListener(\"DOMContentLoaded\", function () {\r\n      const dropdownButton = document.querySelector(\".dropdown-button\");\r\n      const dropdownContent = document.querySelector(\".dropdown-content\");\r\n\r\n      dropdownButton.addEventListener(\"click\", function () {\r\n        dropdownContent.classList.toggle(\"show\");\r\n      });\r\n\r\n      window.addEventListener(\"click\", function (event) {\r\n        if (!dropdownButton.contains(event.target)) {\r\n          dropdownContent.classList.remove(\"show\");\r\n        }\r\n      });\r\n    });\r\n  },\r\n};\r\n\r\nmain.init();\r\n\n\n//# sourceURL=webpack://dropdown-and-carousel/./src/index.js?");

/***/ }),

/***/ "./src/images/Extremely_Peaceful_Sticker.webp":
/*!****************************************************!*\
  !*** ./src/images/Extremely_Peaceful_Sticker.webp ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Extremely_Peaceful_Sticker5d16babfc6a0b8abbaef.webp\";\n\n//# sourceURL=webpack://dropdown-and-carousel/./src/images/Extremely_Peaceful_Sticker.webp?");

/***/ }),

/***/ "./src/images/Gaytheon_Long_Sticker.webp":
/*!***********************************************!*\
  !*** ./src/images/Gaytheon_Long_Sticker.webp ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Gaytheon_Long_Stickerc0b97228ab7ae3891b3f.webp\";\n\n//# sourceURL=webpack://dropdown-and-carousel/./src/images/Gaytheon_Long_Sticker.webp?");

/***/ }),

/***/ "./src/images/Home_of_Challenge_Pissing.webp":
/*!***************************************************!*\
  !*** ./src/images/Home_of_Challenge_Pissing.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Home_of_Challenge_Pissing590ec5270b2b366a4ac0.webp\";\n\n//# sourceURL=webpack://dropdown-and-carousel/./src/images/Home_of_Challenge_Pissing.webp?");

/***/ }),

/***/ "./src/images/North_Hollywood_Sticker_MU_1.webp":
/*!******************************************************!*\
  !*** ./src/images/North_Hollywood_Sticker_MU_1.webp ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/North_Hollywood_Sticker_MU_1535f84a91c876da28959.webp\";\n\n//# sourceURL=webpack://dropdown-and-carousel/./src/images/North_Hollywood_Sticker_MU_1.webp?");

/***/ }),

/***/ "./src/images/express.png":
/*!********************************!*\
  !*** ./src/images/express.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/express0725983d33672f0c9dd2.png\";\n\n//# sourceURL=webpack://dropdown-and-carousel/./src/images/express.png?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;