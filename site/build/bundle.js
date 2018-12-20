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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./site/src/scripts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./site/index.html":
/*!*************************!*\
  !*** ./site/index.html ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>BookstoreDB</title>\r\n    <link rel=\"stylesheet\" href=\"build/main.css\">\r\n</head>\r\n\r\n<body>\r\n    <h1 class=\"maintitle\">Main title</h1>\r\n    <input type=\"text\" class=\"searchbar\" placeholder=\"Search...\" />\r\n    <div class=\"courselistroot\">\r\n        <!--Using this space for prototyping design for now-->\r\n        <ul class=\"subject-list\">\r\n            <span class=\"header\">Accounting</span>\r\n            <span class=\"subject-acronym\">(ACCT)</span>\r\n            <ul class=\"course-list\">\r\n                <span class=\"header\">1100</span>\r\n                <div class=\"campus\">Elkhorn</div>\r\n                <ul class=\"section-list\">\r\n                    <span class=\"header\">1A</span>\r\n                    <div class=\"details\">\r\n                        <span class=\"teacher\">Jane Jones</span>\r\n                        <ul class=\"booklist\">\r\n                            <li class=\"book\">\r\n                                <div class=\"book title\">tes</div>\r\n                            </li>\r\n                        </ul>\r\n                        </div>\r\n                    </ul>\r\n                </ul>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <script src=\"build/bundle.js\"></script>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./site/src/scripts/domutils.ts":
/*!**************************************!*\
  !*** ./site/src/scripts/domutils.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function createExpandable(parent, children, wrapperAttrs) {
  const childWrapper = document.createElement('div');
  wrapperAttrs.forEach(attr => childWrapper.setAttribute(attr.name, attr.value));
  const sortedChildren = children.sort();
  sortedChildren.forEach(child => {
    childWrapper.appendChild(child);
  });
  parent.insertAdjacentElement('afterend', childWrapper);
}

exports.createExpandable = createExpandable;
var DomUtils;

(function (DomUtils) {
  function clickOnSearch(inputEltSelector) {
    const inputs = document.getElementsByClassName(inputEltSelector);

    for (const inputElt of inputs) {
      if (!(inputElt instanceof HTMLInputElement)) return;
      if (inputElt.placeholder === null) return;
      const defaultPlaceholder = inputElt.placeholder;

      inputElt.onfocus = ev => {
        inputElt.placeholder = '';
      };

      inputElt.onblur = ev => {
        if (inputElt.value === '') {
          inputElt.placeholder = defaultPlaceholder;
        }
      };
    }
  }

  DomUtils.clickOnSearch = clickOnSearch;
})(DomUtils = exports.DomUtils || (exports.DomUtils = {}));

/***/ }),

/***/ "./site/src/scripts/main.ts":
/*!**********************************!*\
  !*** ./site/src/scripts/main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const domutils_1 = __webpack_require__(/*! ./domutils */ "./site/src/scripts/domutils.ts");

if (true) {
  __webpack_require__(/*! ../../index.html */ "./site/index.html");

  __webpack_require__(/*! ../style.scss */ "./site/src/style.scss");
}

window.onload = () => {
  console.log('hi');
  domutils_1.DomUtils.clickOnSearch('searchbar');
};

/***/ }),

/***/ "./site/src/style.scss":
/*!*****************************!*\
  !*** ./site/src/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9pbmRleC5odG1sIiwid2VicGFjazovLy8uL3NpdGUvc3JjL3NjcmlwdHMvZG9tdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9zcmMvc2NyaXB0cy9tYWluLnRzIiwid2VicGFjazovLy8uL3NpdGUvc3JjL3N0eWxlLnNjc3M/ZGY3ZiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImNyZWF0ZUV4cGFuZGFibGUiLCJwYXJlbnQiLCJjaGlsZHJlbiIsIndyYXBwZXJBdHRycyIsImNoaWxkV3JhcHBlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImZvckVhY2giLCJhdHRyIiwic2V0QXR0cmlidXRlIiwibmFtZSIsInNvcnRlZENoaWxkcmVuIiwic29ydCIsImNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJEb21VdGlscyIsImNsaWNrT25TZWFyY2giLCJpbnB1dEVsdFNlbGVjdG9yIiwiaW5wdXRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlucHV0RWx0IiwiSFRNTElucHV0RWxlbWVudCIsInBsYWNlaG9sZGVyIiwiZGVmYXVsdFBsYWNlaG9sZGVyIiwib25mb2N1cyIsImV2Iiwib25ibHVyIiwiZG9tdXRpbHNfMSIsInJlcXVpcmUiLCJwcm9jZXNzIiwid2luZG93Iiwib25sb2FkIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztB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Z0IsTUFBTTtBQUNsQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQUNBTixZQUFVLENBQUNaLFFBQVgsQ0FBb0JDLGFBQXBCLENBQWtDLFdBQWxDO0FBQ0gsQ0FIRCxDOzs7Ozs7Ozs7OztBQ1BBLHVDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NpdGUvc3JjL3NjcmlwdHMvbWFpbi50c1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IURPQ1RZUEUgaHRtbD5cXHJcXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxyXFxuXFxyXFxuPGhlYWQ+XFxyXFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIj5cXHJcXG4gICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiPlxcclxcbiAgICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcImllPWVkZ2VcXFwiPlxcclxcbiAgICA8dGl0bGU+Qm9va3N0b3JlREI8L3RpdGxlPlxcclxcbiAgICA8bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcImJ1aWxkL21haW4uY3NzXFxcIj5cXHJcXG48L2hlYWQ+XFxyXFxuXFxyXFxuPGJvZHk+XFxyXFxuICAgIDxoMSBjbGFzcz1cXFwibWFpbnRpdGxlXFxcIj5NYWluIHRpdGxlPC9oMT5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJzZWFyY2hiYXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2guLi5cXFwiIC8+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvdXJzZWxpc3Ryb290XFxcIj5cXHJcXG4gICAgICAgIDwhLS1Vc2luZyB0aGlzIHNwYWNlIGZvciBwcm90b3R5cGluZyBkZXNpZ24gZm9yIG5vdy0tPlxcclxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJzdWJqZWN0LWxpc3RcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWFkZXJcXFwiPkFjY291bnRpbmc8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInN1YmplY3QtYWNyb255bVxcXCI+KEFDQ1QpPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiY291cnNlLWxpc3RcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVhZGVyXFxcIj4xMTAwPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYW1wdXNcXFwiPkVsa2hvcm48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJzZWN0aW9uLWxpc3RcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhlYWRlclxcXCI+MUE8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXRhaWxzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGVhY2hlclxcXCI+SmFuZSBKb25lczwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImJvb2tsaXN0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJib29rXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJvb2sgdGl0bGVcXFwiPnRlczwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxzY3JpcHQgc3JjPVxcXCJidWlsZC9idW5kbGUuanNcXFwiPjwvc2NyaXB0PlxcclxcbjwvYm9keT5cXHJcXG5cXHJcXG48L2h0bWw+XCIiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBjcmVhdGVFeHBhbmRhYmxlKHBhcmVudCwgY2hpbGRyZW4sIHdyYXBwZXJBdHRycykge1xyXG4gICAgY29uc3QgY2hpbGRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3cmFwcGVyQXR0cnMuZm9yRWFjaChhdHRyID0+IGNoaWxkV3JhcHBlci5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKSk7XHJcbiAgICBjb25zdCBzb3J0ZWRDaGlsZHJlbiA9IGNoaWxkcmVuLnNvcnQoKTtcclxuICAgIHNvcnRlZENoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgY2hpbGRXcmFwcGVyLmFwcGVuZENoaWxkKGNoaWxkKTtcclxuICAgIH0pO1xyXG4gICAgcGFyZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBjaGlsZFdyYXBwZXIpO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlRXhwYW5kYWJsZSA9IGNyZWF0ZUV4cGFuZGFibGU7XHJcbnZhciBEb21VdGlscztcclxuKGZ1bmN0aW9uIChEb21VdGlscykge1xyXG4gICAgZnVuY3Rpb24gY2xpY2tPblNlYXJjaChpbnB1dEVsdFNlbGVjdG9yKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShpbnB1dEVsdFNlbGVjdG9yKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGlucHV0RWx0IG9mIGlucHV0cykge1xyXG4gICAgICAgICAgICBpZiAoIShpbnB1dEVsdCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoaW5wdXRFbHQucGxhY2Vob2xkZXIgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRQbGFjZWhvbGRlciA9IGlucHV0RWx0LnBsYWNlaG9sZGVyO1xyXG4gICAgICAgICAgICBpbnB1dEVsdC5vbmZvY3VzID0gKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dEVsdC5wbGFjZWhvbGRlciA9ICcnO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpbnB1dEVsdC5vbmJsdXIgPSAoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dEVsdC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dEVsdC5wbGFjZWhvbGRlciA9IGRlZmF1bHRQbGFjZWhvbGRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBEb21VdGlscy5jbGlja09uU2VhcmNoID0gY2xpY2tPblNlYXJjaDtcclxufSkoRG9tVXRpbHMgPSBleHBvcnRzLkRvbVV0aWxzIHx8IChleHBvcnRzLkRvbVV0aWxzID0ge30pKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZG9tdXRpbHNfMSA9IHJlcXVpcmUoXCIuL2RvbXV0aWxzXCIpO1xyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIHJlcXVpcmUoJy4uLy4uL2luZGV4Lmh0bWwnKTtcclxuICAgIHJlcXVpcmUoJy4uL3N0eWxlLnNjc3MnKTtcclxufVxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2hpJyk7XHJcbiAgICBkb211dGlsc18xLkRvbVV0aWxzLmNsaWNrT25TZWFyY2goJ3NlYXJjaGJhcicpO1xyXG59O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9