/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BalancedParentheses = function () {
	    function BalancedParentheses(str) {
	        _classCallCheck(this, BalancedParentheses);
	
	        this.chkStr = str;
	        this.stack = [];
	    }
	
	    _createClass(BalancedParentheses, [{
	        key: 'top',
	        value: function top() {
	            return this.stack[this.stack.length - 1];
	        }
	    }, {
	        key: 'stackEmpty',
	        value: function stackEmpty() {
	            return this.stack.length === 0 ? true : false;
	        }
	    }, {
	        key: 'isMatched',
	        value: function isMatched(opening, closing) {
	
	            if (opening == '(' && closing == ')') {
	                return true;
	            } else if (opening == '{' && closing == '}') {
	                return true;
	            } else if (opening == '[' && closing == ']') {
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: 'areBalanced',
	        value: function areBalanced() {
	
	            for (var i = 0, l = this.chkStr.length; i < l; i++) {
	
	                if (this.chkStr[i] == '(' || this.chkStr[i] == '{' || this.chkStr[i] == '[') {
	                    this.stack.push(this.chkStr[i]);
	                } else if (this.chkStr[i] == ')' || this.chkStr[i] == '}' || this.chkStr[i] == ']') {
	
	                    if (this.stackEmpty() || !this.isMatched(this.top(), this.chkStr[i])) {
	                        return false;
	                    } else {
	                        this.stack.pop();
	                    }
	                }
	            }
	            return this.stackEmpty() ? true : false;
	        }
	    }]);
	
	    return BalancedParentheses;
	}();
	
	exports.default = BalancedParentheses;

/***/ }
/******/ ]);
//# sourceMappingURL=BalancedParentheses.js.map