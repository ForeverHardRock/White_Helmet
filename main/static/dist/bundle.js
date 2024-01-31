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

/***/ "./main/static/main/sass/app.scss":
/*!****************************************!*\
  !*** ./main/static/main/sass/app.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://white_helmet/./main/static/main/sass/app.scss?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main/static/main/js/app.js");
/******/ 	
/******/ })()
;