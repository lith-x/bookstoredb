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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/domtree.ts":
/*!************************!*\
  !*** ./src/domtree.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function buildCourseListElt(rootElt, data) {
  data.subjects.forEach(subjectdata => {
    const subject = document.createElement('div');
    subject.classList.add('subjectheader');
    subject.innerText = subjectdata.name;
    const subjectChildren = document.createElement('div');
    if (subjectdata.courses) subject.classList.add('expandable');
  });
}

exports.buildCourseListElt = buildCourseListElt;

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const domtree_1 = __webpack_require__(/*! ./domtree */ "./src/domtree.ts");

window.onload = () => __awaiter(this, void 0, void 0, function* () {
  initializeSearchBar('searchbar');
  const courseListRoot = document.getElementById('courselistroot');
  fetch('/data/sampledb.json').then(res => {
    return res.json();
  }).then(data => {
    domtree_1.buildCourseListElt(courseListRoot, data);
  });
});

function initializeSearchBar(className) {
  const searchBar = document.getElementsByClassName('searchbar')[0];
  if (!(searchBar instanceof HTMLInputElement)) return;
  if (searchBar.placeholder == null) return;
  const defaultPlaceholder = searchBar.placeholder;

  searchBar.onfocus = ev => {
    searchBar.placeholder = '';
  };

  searchBar.onblur = ev => {
    if (searchBar.value === '') {
      searchBar.placeholder = defaultPlaceholder;
    }
  };
}
/*
        <h1 class="subject clickable expandable">Accounting</h1>
        <div class="subject contents">
            <h2 class="course clickable expandable">1100</h2>
            <div class="course contents">
                <h3 class="campus clickable expandable">Elkhorn Valley</h3>
                <div class="campus contents">
                    <h3 class="section clickable expandable">1A</h3>
                    <div class="section contents">
                        <p class="book clickable">Example Book Title: The Example</p>
                        <div class="book contents">
                        </div>
                    </div>
                    <div class="section">
                        <div class="book"></div>
                        <div class="book"></div>
                    </div>
                </div>
                <div class="campus">
                    <div class="section"></div>
                    <div class="section">
                        <div class="book"></div>
                    </div>
                </div>
            </div>
        </div>
*/

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kb210cmVlLnRzIiwid2VicGFjazovLy8uLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBLFNBQWdCLGtCQUFoQixDQUFtQyxPQUFuQyxFQUF5RCxJQUF6RCxFQUFtRTtBQUMvRCxNQUFJLENBQUMsUUFBTCxDQUFjLE9BQWQsQ0FBdUIsV0FBRCxJQUFnQjtBQUNsQyxVQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFoQjtBQUNBLFdBQU8sQ0FBQyxTQUFSLENBQWtCLEdBQWxCLENBQXNCLGVBQXRCO0FBQ0EsV0FBTyxDQUFDLFNBQVIsR0FBb0IsV0FBVyxDQUFDLElBQWhDO0FBQ0EsVUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBeEI7QUFDQSxRQUFJLFdBQVcsQ0FBQyxPQUFoQixFQUF5QixPQUFPLENBQUMsU0FBUixDQUFrQixHQUFsQixDQUFzQixZQUF0QjtBQUM1QixHQU5EO0FBT0g7O0FBUkQsZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7QUFHQSxNQUFNLENBQUMsTUFBUCxHQUFnQixNQUFXO0FBQ3ZCLHFCQUFtQixDQUFDLFdBQUQsQ0FBbkI7QUFDQSxRQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixnQkFBeEIsQ0FBdkI7QUFDQSxPQUFLLENBQUMscUJBQUQsQ0FBTCxDQUE2QixJQUE3QixDQUFtQyxHQUFELElBQVE7QUFDdEMsV0FBTyxHQUFHLENBQUMsSUFBSixFQUFQO0FBQ0gsR0FGRCxFQUVHLElBRkgsQ0FFUyxJQUFELElBQWU7QUFDbkIsaUNBQW1CLGNBQW5CLEVBQW1DLElBQW5DO0FBQ0gsR0FKRDtBQUtILENBUjBCLENBQTNCOztBQVVBLFNBQVMsbUJBQVQsQ0FBNkIsU0FBN0IsRUFBOEM7QUFDMUMsUUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLHNCQUFULENBQWdDLFdBQWhDLEVBQTZDLENBQTdDLENBQWxCO0FBQ0EsTUFBSSxFQUFFLFNBQVMsWUFBWSxnQkFBdkIsQ0FBSixFQUE4QztBQUM5QyxNQUFJLFNBQVMsQ0FBQyxXQUFWLElBQXlCLElBQTdCLEVBQW1DO0FBRW5DLFFBQU0sa0JBQWtCLEdBQUcsU0FBUyxDQUFDLFdBQXJDOztBQUNBLFdBQVMsQ0FBQyxPQUFWLEdBQXFCLEVBQUQsSUFBTztBQUN2QixhQUFTLENBQUMsV0FBVixHQUF3QixFQUF4QjtBQUNILEdBRkQ7O0FBSUEsV0FBUyxDQUFDLE1BQVYsR0FBb0IsRUFBRCxJQUFPO0FBQ3RCLFFBQUksU0FBUyxDQUFDLEtBQVYsS0FBb0IsRUFBeEIsRUFBNkI7QUFDekIsZUFBUyxDQUFDLFdBQVYsR0FBd0Isa0JBQXhCO0FBQ0g7QUFDSixHQUpEO0FBS0g7QUFDRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBidWlsZENvdXJzZUxpc3RFbHQocm9vdEVsdCwgZGF0YSkge1xuICAgIGRhdGEuc3ViamVjdHMuZm9yRWFjaCgoc3ViamVjdGRhdGEpID0+IHtcbiAgICAgICAgY29uc3Qgc3ViamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzdWJqZWN0LmNsYXNzTGlzdC5hZGQoJ3N1YmplY3RoZWFkZXInKTtcbiAgICAgICAgc3ViamVjdC5pbm5lclRleHQgPSBzdWJqZWN0ZGF0YS5uYW1lO1xuICAgICAgICBjb25zdCBzdWJqZWN0Q2hpbGRyZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWYgKHN1YmplY3RkYXRhLmNvdXJzZXMpXG4gICAgICAgICAgICBzdWJqZWN0LmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGFibGUnKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuYnVpbGRDb3Vyc2VMaXN0RWx0ID0gYnVpbGRDb3Vyc2VMaXN0RWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWkc5dGRISmxaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5a2IyMTBjbVZsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJSVUVzVTBGQlowSXNhMEpCUVd0Q0xFTkJRVU1zVDBGQmIwSXNSVUZCUlN4SlFVRlZPMGxCUXk5RUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1YwRkJWeXhGUVVGRkxFVkJRVVU3VVVGRGJFTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTTVReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJRenRSUVVOMlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4SFFVRkhMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGRGNrTXNUVUZCVFN4bFFVRmxMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTjBSQ3hKUVVGSkxGZEJRVmNzUTBGQlF5eFBRVUZQTzFsQlFVVXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdTVUZEYWtVc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRFVDeERRVUZETzBGQlVrUXNaMFJCVVVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZG9tdHJlZV8xID0gcmVxdWlyZShcIi4vZG9tdHJlZVwiKTtcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaW5pdGlhbGl6ZVNlYXJjaEJhcignc2VhcmNoYmFyJyk7XG4gICAgY29uc3QgY291cnNlTGlzdFJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291cnNlbGlzdHJvb3QnKTtcbiAgICBmZXRjaCgnL2RhdGEvc2FtcGxlZGIuanNvbicpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRvbXRyZWVfMS5idWlsZENvdXJzZUxpc3RFbHQoY291cnNlTGlzdFJvb3QsIGRhdGEpO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBpbml0aWFsaXplU2VhcmNoQmFyKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlYXJjaGJhcicpWzBdO1xuICAgIGlmICghKHNlYXJjaEJhciBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKHNlYXJjaEJhci5wbGFjZWhvbGRlciA9PSBudWxsKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgZGVmYXVsdFBsYWNlaG9sZGVyID0gc2VhcmNoQmFyLnBsYWNlaG9sZGVyO1xuICAgIHNlYXJjaEJhci5vbmZvY3VzID0gKGV2KSA9PiB7XG4gICAgICAgIHNlYXJjaEJhci5wbGFjZWhvbGRlciA9ICcnO1xuICAgIH07XG4gICAgc2VhcmNoQmFyLm9uYmx1ciA9IChldikgPT4ge1xuICAgICAgICBpZiAoc2VhcmNoQmFyLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgc2VhcmNoQmFyLnBsYWNlaG9sZGVyID0gZGVmYXVsdFBsYWNlaG9sZGVyO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8qXG4gICAgICAgIDxoMSBjbGFzcz1cInN1YmplY3QgY2xpY2thYmxlIGV4cGFuZGFibGVcIj5BY2NvdW50aW5nPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1YmplY3QgY29udGVudHNcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvdXJzZSBjbGlja2FibGUgZXhwYW5kYWJsZVwiPjExMDA8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdXJzZSBjb250ZW50c1wiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhbXB1cyBjbGlja2FibGUgZXhwYW5kYWJsZVwiPkVsa2hvcm4gVmFsbGV5PC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtcHVzIGNvbnRlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInNlY3Rpb24gY2xpY2thYmxlIGV4cGFuZGFibGVcIj4xQTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uIGNvbnRlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImJvb2sgY2xpY2thYmxlXCI+RXhhbXBsZSBCb29rIFRpdGxlOiBUaGUgRXhhbXBsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib29rIGNvbnRlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9va1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvb2tcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbXB1c1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvb2tcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4qL1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGcGJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTl0WVdsdUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdRVUZCUVN4MVEwRkJOa003UVVGSE4wTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGVExFVkJRVVU3U1VGRGRrSXNiVUpCUVcxQ0xFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdTVUZEYWtNc1RVRkJUU3hqUVVGakxFZEJRVWNzVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eERRVUZETzBsQlEycEZMRXRCUVVzc1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTzFGQlEzUkRMRTlCUVU4c1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFWVXNSVUZCUlN4RlFVRkZPMUZCUTI1Q0xEUkNRVUZyUWl4RFFVRkRMR05CUVdNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU0zUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOUUxFTkJRVU1zUTBGQlFTeERRVUZETzBGQlJVWXNVMEZCVXl4dFFrRkJiVUlzUTBGQlF5eFRRVUZwUWp0SlFVTXhReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNjMEpCUVhOQ0xFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRiRVVzU1VGQlNTeERRVUZETEVOQlFVTXNVMEZCVXl4WlFVRlpMR2RDUVVGblFpeERRVUZETzFGQlFVVXNUMEZCVHp0SlFVTnlSQ3hKUVVGSkxGTkJRVk1zUTBGQlF5eFhRVUZYTEVsQlFVa3NTVUZCU1R0UlFVRkZMRTlCUVU4N1NVRkZNVU1zVFVGQlRTeHJRa0ZCYTBJc1IwRkJSeXhUUVVGVExFTkJRVU1zVjBGQlZ5eERRVUZETzBsQlEycEVMRk5CUVZNc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlR0UlFVTjJRaXhUUVVGVExFTkJRVU1zVjBGQlZ5eEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVTXZRaXhEUVVGRExFTkJRVU03U1VGRlJpeFRRVUZUTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVU3VVVGRGRFSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1MwRkJTeXhMUVVGTExFVkJRVVVzUlVGQlJ6dFpRVU42UWl4VFFVRlRMRU5CUVVNc1YwRkJWeXhIUVVGSExHdENRVUZyUWl4RFFVRkRPMU5CUXpsRE8wbEJRMHdzUTBGQlF5eERRVUZETzBGQlEwNHNRMEZCUXp0QlFVTkVPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEZRVEJDUlNKOSJdLCJzb3VyY2VSb290IjoiIn0=