/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main/static/main/js/app.js":
/*!************************************!*\
  !*** ./main/static/main/js/app.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts.js */ \"./main/static/main/js/scripts.js\");\n/* harmony import */ var _scripts_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main_sass_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main/sass/app.scss */ \"./main/static/main/sass/app.scss\");\n\r\n\n\n//# sourceURL=webpack://white_helmet/./main/static/main/js/app.js?");

/***/ }),

/***/ "./main/static/main/js/scripts.js":
/*!****************************************!*\
  !*** ./main/static/main/js/scripts.js ***!
  \****************************************/
/***/ (() => {

eval("function submenu_fnc() {\r\n  document.getElementById(\"myDropdown\").classList.toggle(\"show\");\r\n  document.getElementById(\"rotateFunc\").classList.toggle(\"rotate\");\r\n  document.getElementById(\"backFunc\").classList.toggle(\"show-back\");\r\n  document.getElementById(\"vk-circle\").classList.toggle(\"show-circles\");\r\n  document.getElementById(\"tg-circle\").classList.toggle(\"show-circles\");\r\n}\r\n\r\n\r\n$(function() {\r\n    $('#nav-icon1').click(function(){\r\n        $(this).toggleClass('open');\r\n    });\r\n});\r\n\r\nconst btn_menu_mobile = document.querySelector('.btn-menu-mobile');\r\nif (btn_menu_mobile) {\r\n  btn_menu_mobile.addEventListener('click', submenu_fnc);\r\n}\r\n\r\nwindow.onscroll = function() {scrollFunction()};\r\n\r\nfunction scrollFunction() {\r\n    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {\r\n        document.getElementById(\"up-btn\").style.bottom = \"25px\";\r\n    } else {\r\n        document.getElementById(\"up-btn\").style.bottom = \"-100px\";\r\n    }\r\n}\r\n\r\nfunction topFunction() {\r\n    document.body.scrollTop = 0;\r\n    document.documentElement.scrollTop = 0;\r\n}\r\ndocument.getElementById(\"up-btn\").addEventListener(\"click\", topFunction);\r\n\r\n\r\nfunction checkEmail(input) {\r\n  var email = input.value;\r\n  var regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\r\n  if (regex.test(email)) {\r\n    input.setCustomValidity(\"\");\r\n  } else {\r\n    input.setCustomValidity(\"Введите действительный email адрес\");\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\nconst toggle_rubriki = document.querySelector('.toggle-rubriki');\r\nif (toggle_rubriki) {\r\n  toggle_rubriki.addEventListener('click', submenu_fnc);\r\n}\r\n\r\n\r\nconst buttons_sub_active = document.querySelectorAll('.cat-btn');\r\nbuttons_sub_active.forEach(button => {button.addEventListener('click', () => {\r\n    buttons_sub_active.forEach(btn => btn.classList.remove('cat-btn-active'));\r\n    button.classList.add('cat-btn-active');\r\n});\r\n});\r\n\r\n\r\nwindow.addEventListener('load', function() {\r\n  var catBtn = document.querySelector('.cat-btn-active');\r\n  if (catBtn) {\r\n    catBtn.click();\r\n  }\r\n});\r\n\r\n\r\nvar cat_buttons = document.querySelectorAll('button[id^=\"load-categories\"]');\r\nfor (var ii = 0; ii < cat_buttons.length; ii++) {\r\n  cat_buttons[ii].addEventListener('click', function() {\r\n    var buttonId = this.id.replace('load-categories-', '');\r\n\r\n    var xhr = new XMLHttpRequest();\r\n\r\n    xhr.open('GET', '/load-categories/' + buttonId + '/', true);\r\n\r\n    xhr.send();\r\n\r\n    xhr.onreadystatechange = function() {\r\n      if (xhr.readyState == 4 && xhr.status == 200) {\r\n        // Обновляем контент на странице\r\n\r\n        document.getElementById('content_categories').innerHTML = xhr.responseText;\r\n\r\n      }\r\n    };\r\n  });\r\n}\r\n\r\n\r\n\r\nfunction share_btn_fnc() {\r\n  document.getElementById(\"field-bns-id\").classList.toggle(\"show-btns\");\r\n}\r\n\r\nconst toggle_share = document.querySelector('.share-field-btn');\r\nif (toggle_share) {\r\n  toggle_share.addEventListener('click', share_btn_fnc);\r\n}\r\n\r\n\r\n//\r\n// var buttons = document.querySelectorAll('button[id^=\"load-content\"]');\r\n// for (var i = 0; i < buttons.length; i++) {\r\n//   buttons[i].addEventListener('click', function() {\r\n//     var buttonId = this.id.replace('load-content-', '');\r\n//\r\n//     var xhr1 = new XMLHttpRequest();\r\n//     var xhr2 = new XMLHttpRequest();\r\n//     var xhr3 = new XMLHttpRequest();\r\n//\r\n//     xhr1.open('GET', '/load-content-1/' + buttonId + '/', true);\r\n//\r\n//     xhr1.send();\r\n//\r\n//     xhr1.onreadystatechange = function() {\r\n//       if (xhr1.readyState == 4 && xhr1.status == 200) {\r\n//         // Обновляем контент на странице\r\n//\r\n//         document.getElementById('content-1').innerHTML = xhr1.responseText;\r\n//\r\n//       }\r\n//     };\r\n//\r\n//\r\n//     xhr2.open('GET', '/load-content-2/' + buttonId + '/', true);\r\n//\r\n//     xhr2.send();\r\n//\r\n//     xhr2.onreadystatechange = function() {\r\n//       if (xhr2.readyState == 4 && xhr2.status == 200) {\r\n//         // Обновляем контент на странице\r\n//\r\n//         document.getElementById('content-2').innerHTML = xhr2.responseText;\r\n//\r\n//       }\r\n//     };\r\n//\r\n//\r\n//     xhr3.open('GET', '/load-content-3/' + buttonId + '/', true);\r\n//\r\n//     xhr3.send();\r\n//\r\n//     xhr3.onreadystatechange = function() {\r\n//       if (xhr3.readyState == 4 && xhr3.status == 200) {\r\n//         // Обновляем контент на странице\r\n//\r\n//         document.getElementById('content-3').innerHTML = xhr3.responseText;\r\n//\r\n//       }\r\n//     };\r\n//\r\n//   });\r\n// }\r\n//\r\n\r\n\r\n\r\n\r\n\r\nconst searchForm = document.getElementById('search-form');\r\nconst searchInput = document.getElementById('search-input');\r\n\r\nsearchForm.addEventListener('submit', (event) => {\r\n  if (searchInput.value.trim() === '') {\r\n    event.preventDefault();\r\n    alert('Введите поисковый запрос');\r\n  }\r\n});\r\n\r\n\r\nfunction relevance_link() {\r\n  document.getElementById(\"relevance-link\").click();\r\n}\r\nconst rel_btn = document.getElementById(\"relevance-btn\");\r\nif (rel_btn) {\r\n    rel_btn.addEventListener(\"click\", relevance_link);\r\n}\r\n\r\nfunction chronology_link() {\r\n  document.getElementById(\"chronology-link\").click();\r\n}\r\nconst chr_btn = document.getElementById(\"chronology-btn\");\r\nif (chr_btn) {\r\n    chr_btn.addEventListener(\"click\", chronology_link);\r\n}\r\n\r\n\r\n//\r\n//\r\n//\r\n//\r\n//\r\n//\r\n\r\n\r\n\r\n\r\nconst buttons_active = document.querySelectorAll('.cat_btn');\r\nbuttons_active.forEach(button => {button.addEventListener('click', () => {\r\n    buttons_active.forEach(btn => btn.classList.remove('is-selected'));\r\n    button.classList.add('is-selected');\r\n});\r\n});\r\n\r\n\r\n\r\nconst catBtns = document.querySelectorAll('.cat_btn');\r\n\r\n// Добавляем обработчик клика на каждую кнопку cat_btn\r\ncatBtns.forEach(catBtn => {\r\n  catBtn.addEventListener('click', () => {\r\n    // Получаем aria-label у кнопки cat_btn\r\n    const ariaLabel = catBtn.getAttribute('aria-label');\r\n\r\n    // Находим все кнопки dot с таким же aria-label внутри элемента с классом \"cat-news\"\r\n    const dots = document.querySelectorAll('.cat-news [aria-label=\"' + ariaLabel + '\"]');\r\n\r\n    // Производим клик на найденных кнопках dot\r\n    dots.forEach(dot => {\r\n      dot.click();\r\n    });\r\n  });\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Находим все контейнеры с классом \"puzzle-grid\"\r\nconst puzzleGrids = document.querySelectorAll('.cat-puzzle-grid');\r\n\r\n// Создаем объект для хранения контейнеров с классом \"is-selected\"\r\nconst selectedGrids = {};\r\n\r\n// Создаем функцию для обработки изменений в DOM\r\nconst observer = new MutationObserver(mutations => {\r\n  mutations.forEach(mutation => {\r\n    // Проверяем, что изменения произошли внутри контейнера с классом \"puzzle-grid\"\r\n    if (mutation.target.closest('.cat-puzzle-grid')) {\r\n      // Получаем все контейнеры с классом \"puzzle-grid\"\r\n      const puzzleGrids = document.querySelectorAll('.cat-puzzle-grid');\r\n\r\n      // Проходимся по всем контейнерам с классом \"puzzle-grid\"\r\n      puzzleGrids.forEach(grid => {\r\n        // Проверяем, что контейнер уже был добавлен в объект \"selectedGrids\"\r\n        if (selectedGrids[grid.id]) {\r\n          // Если контейнер уже был добавлен, то проверяем, что он имеет класс \"is-selected\"\r\n          if (grid.classList.contains('is-selected')) {\r\n            // Если контейнер имеет класс \"is-selected\", то добавляем его в объект \"selectedGrids\"\r\n            selectedGrids[grid.id] = grid;\r\n          } else {\r\n            // Если контейнер не имеет класс \"is-selected\", то удаляем его из объекта \"selectedGrids\"\r\n            delete selectedGrids[grid.id];\r\n          }\r\n        } else {\r\n          // Если контейнер еще не был добавлен в объект \"selectedGrids\", то проверяем, что он имеет класс \"is-selected\"\r\n          if (grid.classList.contains('is-selected')) {\r\n            // Если контейнер имеет класс \"is-selected\", то добавляем его в объект \"selectedGrids\"\r\n            selectedGrids[grid.id] = grid;\r\n          }\r\n        }\r\n      });\r\n\r\n      // Проверяем, что в объекте \"selectedGrids\" есть хотя бы один контейнер с классом \"is-selected\"\r\n      if (Object.keys(selectedGrids).length > 0) {\r\n        // Если есть, то получаем первый контейнер с классом \"is-selected\" из объекта \"selectedGrids\"\r\n        const selectedGrid = Object.values(selectedGrids)[0];\r\n\r\n        // Получаем aria-label у контейнера с классом \"is-selected\"\r\n        const selectedLabel = selectedGrid.getAttribute('aria-label');\r\n\r\n        // Находим контейнер с классом \"cat_btn\" с таким же aria-label\r\n        const targetBtn = document.querySelector(`.cat_btn[aria-label=\"${selectedLabel}\"]`);\r\n\r\n        // Добавляем класс \"is-selected\" к найденному контейнеру\r\n        if (targetBtn) {\r\n          const catBtns = document.querySelectorAll('.cat_btn');\r\n          catBtns.forEach(btn => {\r\n            if (btn === targetBtn) {\r\n              btn.classList.add('is-selected');\r\n            } else {\r\n              btn.classList.remove('is-selected');\r\n            }\r\n          });\r\n        }\r\n      }\r\n    }\r\n  });\r\n});\r\n\r\n// Настраиваем объект для отслеживания изменений в DOM\r\nconst config = { attributes: true, childList: true, subtree: true };\r\n\r\n// Запускаем отслеживание изменений в DOM\r\nobserver.observe(document.body, config);\r\n\n\n//# sourceURL=webpack://white_helmet/./main/static/main/js/scripts.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./main/static/main/sass/app.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./main/static/main/sass/app.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://white_helmet/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://white_helmet/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://white_helmet/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./main/static/main/sass/app.scss":
/*!****************************************!*\
  !*** ./main/static/main/sass/app.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./app.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./main/static/main/sass/app.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://white_helmet/./main/static/main/sass/app.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://white_helmet/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://white_helmet/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://white_helmet/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://white_helmet/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://white_helmet/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://white_helmet/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./main/static/main/sass/fonts/BasisGrotesquePro-Regular.woff2":
/*!*********************************************************************!*\
  !*** ./main/static/main/sass/fonts/BasisGrotesquePro-Regular.woff2 ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fc5973283fa334f121ea.woff2\";\n\n//# sourceURL=webpack://white_helmet/./main/static/main/sass/fonts/BasisGrotesquePro-Regular.woff2?");

/***/ }),

/***/ "./main/static/main/sass/fonts/LavaPro-Medium.woff2":
/*!**********************************************************!*\
  !*** ./main/static/main/sass/fonts/LavaPro-Medium.woff2 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"536a727b14af8806cc67.woff2\";\n\n//# sourceURL=webpack://white_helmet/./main/static/main/sass/fonts/LavaPro-Medium.woff2?");

/***/ }),

/***/ "./main/static/main/sass/fonts/apparat-regular.woff2":
/*!***********************************************************!*\
  !*** ./main/static/main/sass/fonts/apparat-regular.woff2 ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d0acb4c30dddced0c984.woff2\";\n\n//# sourceURL=webpack://white_helmet/./main/static/main/sass/fonts/apparat-regular.woff2?");

/***/ }),

/***/ "./main/static/main/sass/fonts/intro.woff2":
/*!*************************************************!*\
  !*** ./main/static/main/sass/fonts/intro.woff2 ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c098078f719ace14b104.woff2\";\n\n//# sourceURL=webpack://white_helmet/./main/static/main/sass/fonts/intro.woff2?");

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
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/******/ 			"main": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main/static/main/js/app.js");
/******/ 	
/******/ })()
;