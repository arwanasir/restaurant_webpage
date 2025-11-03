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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\r\n    background-color: orange;\r\n}\r\nheader{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content:space-evenly;\r\n    margin: 0 80px;\r\n    background-color: chocolate;\r\n    height: 40px;\r\n    padding-top:20px\r\n    \r\n}\r\nbutton{\r\n    border:1px orange solid;\r\n    border-radius: 2px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-blend-mode:saturation;\r\n    background-color:rgb(239, 195, 92)\r\n}\r\nheader nav {\r\n    background-color: chocolate;\r\n    height: 40px;\r\n}\r\n\r\n#content{\r\n    width: 1000px;\r\n    height:600px;\r\n    border:1px rgb(214, 140, 1) solid;\r\n    margin:20px auto;\r\n    \r\n}\r\nbutton:active{\r\n    background-color: brown;\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n\r\n/* p{\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    font-size: larger;\r\n   \r\n}\r\n\r\nfooter{\r\n    height:50px;\r\n    width:100%;\r\n    background-color: chocolate;\r\n}\r\nfooter div{\r\n    background-color: chocolate;\r\n    text-align: center;\r\n    font-size: larger;\r\n    font-weight: bolder;\r\n    color: aliceblue;\r\n} */\r\n/* \r\ndiv{\r\n    border-radius: 5px;\r\n} */\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://new_rest/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://new_rest/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://new_rest/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://new_rest/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://new_rest/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://new_rest/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://new_rest/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://new_rest/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://new_rest/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadabout)\n/* harmony export */ });\nfunction loadabout(){\r\nconst cont = document.querySelector(\"#content\");\r\nconst nw = document.createElement(\"div\");\r\nnw.style.width = '990px';\r\nnw.style.height = '400';\r\nnw.style.padding = '10px';\r\nnw.style.backgroundColor = 'rgb(239, 195, 92)';\r\nconst head = document.createElement(\"h2\");\r\nhead.style.backgroundColor = 'rgb(239, 195, 92)';\r\nhead.textContent = \"About Us\";\r\nconst para1 = document.createElement(\"p\");\r\nconst para2 = document.createElement(\"p\");\r\npara1.style.backgroundColor = 'rgb(239, 195, 92)';\r\npara2.style.backgroundColor = 'rgb(239, 195, 92)';\r\npara1.innerHTML = \"Welcome To Our  Restaurant, a cozy place where food meets passion. Founded in 2020, our restaurant brings authentic flavors and heartwarming dishes made with love.\";\r\npara2.innerHTML = \"Our chefs carefully select fresh, local ingredients every day to make sure every bite feels like home.\"\r\nconst head1 = document.createElement(\"h3\");\r\nhead1.style.backgroundColor = 'rgb(239, 195, 92)';\r\nhead1.textContent = \"Our Missions\";\r\nconst para3 = document.createElement(\"p\");\r\npara3.style.backgroundColor = 'rgb(239, 195, 92)';\r\npara3.innerHTML = \"To create a dining experience that connects people through great taste, comfort, and unforgettable moments.\"\r\n\r\nconst quote = document.createElement('blockquote');\r\nquote.style.backgroundColor ='rgb(239, 195, 92)';\r\nquote.textContent = '\"Cooking is not just about flavor — it’s about feeling.\"';\r\nconst author = document.createElement('cite');\r\nauthor.style.backgroundColor = 'rgb(239, 195, 92)'\r\nauthor.textContent = '— Chef Meron, Head Chef at Aroma Delight';\r\nquote.appendChild(author);\r\nnw.append(head,para1,para2,head1,para3,quote);\r\ncont.appendChild(nw);\r\n}\n\n//# sourceURL=webpack://new_rest/./src/about.js?\n}");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadcontact)\n/* harmony export */ });\nfunction loadcontact(){\r\nconst pages  = document.querySelector(\"#content\");\r\nconst newd = document.createElement(\"div\");\r\nnewd.style.width = '900px';\r\nnewd.style.height = '500px';\r\nnewd.style.padding = '10px';\r\nnewd.style.backgroundColor = 'rgb(239, 195, 92)';\r\nconst head = document.createElement(\"h2\");\r\nhead.textContent = \"Contact Us\";\r\nhead.style.backgroundColor = 'rgb(239, 195, 92)';\r\nconst head2 = document.createElement(\"h3\");\r\nhead2.textContent = \"We’d love to hear from you!\";\r\nhead2.style.backgroundColor = 'rgb(239, 195, 92)';\r\nconst para = document.createElement(\"p\");\r\npara.style.backgroundColor = 'rgb(239, 195, 92)';\r\npara.innerHTML = 'Whether you want to book a table, ask about our menu, or share feedback — our team is always ready to help.'\r\n\r\nconst head3 = document.createElement(\"h2\");\r\nhead3.style.backgroundColor = 'rgb(239, 195, 92)';\r\nhead3.textContent = \"Address:\";\r\nconst para1 = document.createElement(\"p\");\r\npara1.style.backgroundColor = 'rgb(239, 195, 92)';\r\npara1.innerHTML ='Aroma Delight Restaurant B1 Street, New York, USA';\r\n\r\nconst para2 = document.createElement(\"h3\");\r\npara2.style.backgroundColor = 'rgb(239, 195, 92)';\r\npara2.innerHTML = 'Phone: +251 912 345 678';\r\n\r\nconst para3 = document.createElement(\"h3\");\r\npara3.style.backgroundColor = 'rgb(239, 195, 92)';\r\npara3.innerHTML = 'Email: info@aromadelight.com';\r\n\r\nconst head4 = document.createElement(\"h3\");\r\nhead4.style.backgroundColor = 'rgb(239, 195, 92)';\r\nhead4.textContent ='Opening Hours:';\r\nconst para4 = document.createElement(\"p\");\r\npara4.style.backgroundColor = 'rgb(239, 195, 92)';\r\npara4.innerHTML ='Monday – Friday: 9:00 AM – 10:00 PM';\r\n\r\nconst para5 = document.createElement(\"p\");\r\npara5.style.backgroundColor = 'rgb(239, 195, 92)';\r\npara5.innerHTML ='Saturday – Sunday: 11:00 AM – Midnight';\r\nconst para6 = document.createElement(\"h3\");\r\npara6.style.backgroundColor = 'rgb(239, 195, 92)';\r\npara6.textContent = 'Follow Us:';\r\nconst para7 = document.createElement(\"p\");\r\npara7.style.backgroundColor = 'rgb(239, 195, 92)';\r\npara7.innerHTML ='Instagram | Facebook | TikTok — @AromaDelight';\r\nnewd.append(head,head2,para,head3,para1,para2,para3,head4,para4,para5,para6,para7);\r\npages.appendChild(newd);\r\n}\n\n//# sourceURL=webpack://new_rest/./src/contact.js?\n}");

/***/ }),

/***/ "./src/images/bfls.jpeg":
/*!******************************!*\
  !*** ./src/images/bfls.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"a8ad7ac00e125b3bb4d0.jpeg\";\n\n//# sourceURL=webpack://new_rest/./src/images/bfls.jpeg?\n}");

/***/ }),

/***/ "./src/images/bge.jpeg":
/*!*****************************!*\
  !*** ./src/images/bge.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"7ab75689a6c648ee8abf.jpeg\";\n\n//# sourceURL=webpack://new_rest/./src/images/bge.jpeg?\n}");

/***/ }),

/***/ "./src/images/ddd.jpeg":
/*!*****************************!*\
  !*** ./src/images/ddd.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"7a390cde4f9cd5aa2b9b.jpeg\";\n\n//# sourceURL=webpack://new_rest/./src/images/ddd.jpeg?\n}");

/***/ }),

/***/ "./src/images/download (1).jpeg":
/*!**************************************!*\
  !*** ./src/images/download (1).jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"4a38bdd95283978eb7a5.jpeg\";\n\n//# sourceURL=webpack://new_rest/./src/images/download_(1).jpeg?\n}");

/***/ }),

/***/ "./src/images/download.jpeg":
/*!**********************************!*\
  !*** ./src/images/download.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"806638f68d1caba19049.jpeg\";\n\n//# sourceURL=webpack://new_rest/./src/images/download.jpeg?\n}");

/***/ }),

/***/ "./src/images/images (2).jpeg":
/*!************************************!*\
  !*** ./src/images/images (2).jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"b960890e93a60840d40d.jpeg\";\n\n//# sourceURL=webpack://new_rest/./src/images/images_(2).jpeg?\n}");

/***/ }),

/***/ "./src/images/immg.jpeg":
/*!******************************!*\
  !*** ./src/images/immg.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"dac90eae5ff53fbbdb37.jpeg\";\n\n//# sourceURL=webpack://new_rest/./src/images/immg.jpeg?\n}");

/***/ }),

/***/ "./src/images/last.jpeg":
/*!******************************!*\
  !*** ./src/images/last.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"12e4e829a1644fdaa3a8.jpeg\";\n\n//# sourceURL=webpack://new_rest/./src/images/last.jpeg?\n}");

/***/ }),

/***/ "./src/images/premium.jpeg":
/*!*********************************!*\
  !*** ./src/images/premium.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"71c9735a950e05b2d47b.jpeg\";\n\n//# sourceURL=webpack://new_rest/./src/images/premium.jpeg?\n}");

/***/ }),

/***/ "./src/images/stsfc.jpeg":
/*!*******************************!*\
  !*** ./src/images/stsfc.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"1294ef898c5855bc42b6.jpeg\";\n\n//# sourceURL=webpack://new_rest/./src/images/stsfc.jpeg?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load.js */ \"./src/page-load.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\n\r\nfunction clearcontent(){\r\n    const pag = document.getElementById(\"content\");\r\n    pag.innerHTML = '';\r\n};\r\nfunction initpage(){\r\n    const home = document.getElementById(\"home\");\r\n    const menu = document.getElementById(\"menu\");\r\n    const about = document.getElementById(\"about\");\r\n    const contact = document.getElementById(\"contact\");\r\n\r\n    home.addEventListener(\"click\",()=>{clearcontent();(0,_page_load_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();});\r\n    menu.addEventListener(\"click\",()=>{clearcontent();(0,_menu_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();});\r\n    about.addEventListener(\"click\",()=>{clearcontent();(0,_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();});\r\n    contact.addEventListener(\"click\",()=>{clearcontent();(0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();});\r\n    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}\r\ninitpage();\n\n//# sourceURL=webpack://new_rest/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadmenu)\n/* harmony export */ });\n/* harmony import */ var _images_bge_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/bge.jpeg */ \"./src/images/bge.jpeg\");\n\r\nfunction loadmenu(){\r\nconst page  = document.querySelector(\"#content\");\r\nconst newdv = document.createElement(\"div\");\r\nnewdv.style.width = '1000px';\r\nnewdv.style.height = '600px';\r\nnewdv.style.display = 'flex';\r\n// newdv.style.flexDirection = \"column\";\r\nnewdv.style.alignItems = \"center\";\r\nnewdv.style.backgroundImage = `url(${_images_bge_jpeg__WEBPACK_IMPORTED_MODULE_0__})`;\r\nnewdv.style.backgroundRepeat = 'no-repeat';\r\nnewdv.style.backgroundPosition = 'center';\r\nnewdv.style.margin = \"0 auto\";\r\n// newdv.style.backgroundBlendMode = 'screen';\r\nnewdv.style.backgroundSize = 'cover';\r\nconst items = ['Lasagna','Butter Chicken','Sushi','Spaghetti'];\r\nconst items1 = ['Torta','baklava','Apple Pie'];\r\nconst items2 = ['mojito','matcha','macchiato','coffee','Iced coffee'];\r\n\r\n\r\nconst container = document.createElement(\"div\");\r\ncontainer.style.alignItems = 'center';\r\ncontainer.style.margin= '0 auto';\r\ncontainer.style.height= '160px';\r\ncontainer.style.width= '200px';\r\ncontainer.style.padding= '60px';\r\ncontainer.style.backgroundColor= 'rgb(239, 195, 92)';\r\n// container.style.width = '600px';\r\n// container.style.height = '300px';\r\nconst head2 =document.createElement(\"h2\");\r\nhead2.style.backgroundColor = 'rgb(239, 195, 92)';\r\nhead2.textContent = \"Main Dishes\"\r\nconst ul = document.createElement(\"ul\");\r\nul.style.backgroundColor= 'rgb(239, 195, 92)';\r\nitems.forEach(it=>{\r\n    const li =document.createElement(\"li\");\r\n    li.textContent = it;\r\n    li.style.backgroundColor= 'rgb(239, 195, 92)';\r\n    ul.appendChild(li);\r\n})\r\ncontainer.appendChild(head2);\r\ncontainer.appendChild(ul);\r\n\r\n\r\nconst container1 = document.createElement(\"div\");\r\ncontainer1.style.alignItems = 'center';\r\ncontainer1.style.margin= '0 auto';\r\ncontainer1.style.height= '160px';\r\ncontainer1.style.width= '200px';\r\ncontainer1.style.padding= '60px';\r\ncontainer1.style.backgroundColor= 'rgb(239, 195, 92)';\r\n// container1.style.width = '600px';\r\n// container1.style.height = '300px';\r\nconst head3 = document.createElement(\"h2\");\r\nhead3.style.backgroundColor= 'rgb(239, 195, 92)';\r\nhead3.textContent = \"Desserts\"\r\nconst ul1 = document.createElement(\"ul\");\r\nul1.style.backgroundColor= 'rgb(239, 195, 92)';\r\nitems1.forEach(mn=>{\r\n    const li1 = document.createElement(\"li\");\r\n    li1.textContent = mn;\r\n    li1.style.backgroundColor= 'rgb(239, 195, 92)';\r\n    ul1.appendChild(li1);\r\n\r\n})\r\ncontainer1.appendChild(head3);\r\ncontainer1.appendChild(ul1);\r\n\r\nconst container2 = document.createElement(\"div\");\r\ncontainer2.style.alignItems = 'center';\r\ncontainer2.style.margin= '0 auto';\r\ncontainer2.style.height= '160px';\r\ncontainer2.style.width= '200px';\r\ncontainer2.style.padding= '60px';\r\ncontainer2.style.backgroundColor= 'rgb(239, 195, 92)';\r\n// container2.style.width = '600px';\r\n// container2.style.height = '300px';\r\nconst head4 = document.createElement(\"h2\");\r\nhead4.style.backgroundColor= 'rgb(239, 195, 92)';\r\nhead4.textContent = \"Drinks\";\r\nconst ul2 = document.createElement(\"ul\");\r\nul2.style.backgroundColor= 'rgb(239, 195, 92)';\r\nitems2.forEach(dr=>{\r\n    const li2 = document.createElement(\"li\");\r\n    li2.textContent = dr;\r\n    li2.style.backgroundColor= 'rgb(239, 195, 92)'\r\n    ul2.appendChild(li2);\r\n\r\n})\r\ncontainer2.appendChild(head4)\r\ncontainer2.appendChild(ul2);\r\nnewdv.append(container,container1,container2);\r\npage.appendChild(newdv);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://new_rest/./src/menu.js?\n}");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _images_premium_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/premium.jpeg */ \"./src/images/premium.jpeg\");\n/* harmony import */ var _images_ddd_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/ddd.jpeg */ \"./src/images/ddd.jpeg\");\n/* harmony import */ var _images_download_1_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/download (1).jpeg */ \"./src/images/download (1).jpeg\");\n/* harmony import */ var _images_download_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/download.jpeg */ \"./src/images/download.jpeg\");\n/* harmony import */ var _images_last_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/last.jpeg */ \"./src/images/last.jpeg\");\n/* harmony import */ var _images_images_2_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/images (2).jpeg */ \"./src/images/images (2).jpeg\");\n/* harmony import */ var _images_immg_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/immg.jpeg */ \"./src/images/immg.jpeg\");\n/* harmony import */ var _images_stsfc_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/stsfc.jpeg */ \"./src/images/stsfc.jpeg\");\n/* harmony import */ var _images_bfls_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/bfls.jpeg */ \"./src/images/bfls.jpeg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction loadHome() {\r\nconst images1 = [_images_ddd_jpeg__WEBPACK_IMPORTED_MODULE_1__,_images_download_1_jpeg__WEBPACK_IMPORTED_MODULE_2__,_images_download_jpeg__WEBPACK_IMPORTED_MODULE_3__];\r\nconst images2 = [_images_last_jpeg__WEBPACK_IMPORTED_MODULE_4__,_images_images_2_jpeg__WEBPACK_IMPORTED_MODULE_5__,_images_immg_jpeg__WEBPACK_IMPORTED_MODULE_6__];\r\nconst images3 = [_images_stsfc_jpeg__WEBPACK_IMPORTED_MODULE_7__,_images_bfls_jpeg__WEBPACK_IMPORTED_MODULE_8__];\r\n\r\nconst content = document.querySelector(\"#content\");\r\nconst image = document.createElement('img');\r\nconst container = document.createElement('div');\r\ncontainer.style.width = '1000px'\r\ncontainer.style.height = '400px'\r\ncontainer.style.display = 'grid'\r\ncontainer.style.gridTemplateColumns= 'repeat(3,1fr)';\r\ncontainer.style.margin = '0 auto';\r\n\r\nconst newds = document.createElement('div');\r\nnewds.style.width = '1000px';\r\nnewds.style.height = '60px';\r\nnewds.style.backgroundColor = 'orange';\r\nnewds.textContent = 'A Restaurant That Feels Like Home';\r\nnewds.style.fontSize = 'larger';\r\nnewds.style.fontWeight = 'bolder';\r\nnewds.style.textAlign = 'center';\r\nnewds.style.paddingTop = '20px';\r\nnewds.style.margin = '0 auto';\r\nnewds.style.backgroundColor = 'rgb(224, 165, 56)';\r\ncontent.appendChild(newds);\r\n\r\n\r\nimage.src = _images_premium_jpeg__WEBPACK_IMPORTED_MODULE_0__;\r\nimage.style.maxWidth = '100%';\r\ncontent.appendChild(image);\r\n\r\nconst newd = document.createElement('div');\r\nnewd.style.width = '1000px';\r\nnewd.style.height = '60px';\r\nnewd.style.backgroundColor = 'orange';\r\nnewd.textContent = 'All Kinds Of Foods Cooked With The Recipe Of Love For Our Lovely Customers';\r\nnewd.style.fontSize = 'larger';\r\nnewd.style.fontWeight = 'bolder';\r\nnewd.style.textAlign = 'center';\r\nnewd.style.paddingTop = '20px';\r\n// newd.style.marginBottom = '20px';\r\nnewd.style.margin = '0 auto';\r\nnewd.style.backgroundColor = 'rgb(224, 165, 56)';\r\ncontent.appendChild(newd);\r\n\r\nimages1.forEach((img)=>{\r\n    const cont = document.createElement('div');\r\n    const pics = document.createElement('img');\r\n    pics.src = img;\r\n    cont.appendChild(pics);\r\n    cont.style.backgroundColor = 'rgb(244, 187, 80)';\r\n    // cont.style.borderRadius = '8px';\r\n    cont.style.padding = '10px 25px';\r\n    container.appendChild(cont) ;\r\n    content.appendChild(container);\r\n})\r\n\r\nimages2.forEach((imgs)=>{\r\n    const contain = document.createElement('div');\r\n    const pic = document.createElement('img');\r\n    pic.src = imgs;\r\n    contain.appendChild(pic);\r\n    contain.style.backgroundColor = 'rgb(244, 187, 80)';\r\n    // contain.style.borderRadius = '8px';\r\n    contain.style.padding = '10px 25px';\r\n    container.appendChild(contain);\r\n    content.appendChild(container);\r\n});\r\n\r\nconst last = document.createElement(\"div\");\r\nlast.style.width = '1000px';\r\nlast.style.height = '60px';\r\nlast.style.backgroundColor = 'orange';\r\nlast.textContent = 'With Smile On The Face , We Serve You Your Favorite Dishes';\r\nlast.style.fontSize = 'larger';\r\nlast.style.fontWeight = 'bolder';\r\nlast.style.textAlign = 'center';\r\nlast.style.paddingTop = '20px';\r\nlast.style.marginTop = '10px'\r\nlast.style.marginBottom = '20px';\r\nlast.style.margin = '0 auto';\r\nlast.style.backgroundColor = 'rgb(224, 165, 56)';\r\n// container.appendChild(last);\r\ncontent.appendChild(last);\r\nconst lastdiv = document.createElement('div');\r\nlastdiv.style.display = 'grid';\r\nlastdiv.style.gridTemplateColumns = 'repeat(2,1fr)';\r\nlastdiv.style.width = '600px'\r\nlastdiv.style.margin = '0 auto';\r\nlastdiv.style.backgroundColor = 'rgb(244, 187, 80)'\r\n\r\nimages3.forEach((imga)=>{\r\n    const cards = document.createElement('div');\r\n    const wit = document.createElement('img');\r\n    wit.src= imga;\r\n    cards.appendChild(wit);\r\n    cards.style.backgroundColor = 'rgb(244, 187, 80)';\r\n    cards.style.display = 'flex';\r\n    cards.style.flexDirection = 'row';\r\n    cards.style.paddingLeft = '13px'\r\n    lastdiv.appendChild(cards);\r\n    content.appendChild(lastdiv);\r\n});\r\n\r\nconst footer = document.createElement('footer');\r\nconst foot = document.createElement('div');\r\nfoot.innerHTML = '2025, All Right Reserved.';\r\nfoot.style.color = 'aliceblue';\r\nfoot.style.fontSize = 'larger';\r\nfoot.style.fontWeight = 'bolder';\r\nfoot.style.backgroundColor = 'chocolate';\r\nfoot.style.textAlign = 'center';\r\nfoot.style.paddingTop = '10px'\r\nfooter.style.width = '100%';\r\nfooter.style.height = '50px';\r\nfooter.style.marginTop = '20px';\r\nfooter.style.backgroundColor = 'chocolate';\r\nfooter.appendChild(foot);\r\ncontent.appendChild(footer);\r\n\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://new_rest/./src/page-load.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://new_rest/./src/styles.css?\n}");

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
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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