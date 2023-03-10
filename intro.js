/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./canvas/javascripts/baseGame.js":
/*!****************************************!*\
  !*** ./canvas/javascripts/baseGame.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BaseGame = /*#__PURE__*/function () {
  function BaseGame(options) {
    _classCallCheck(this, BaseGame);
    this.canvas = document.createElement('canvas');
    this.options = options;
    this.score = 0;
    this.myObstacles = [];
    this.frames = 0;
  }

  /**
   * @function buildCanvas
   * Build the canvas
   *
  **/
  _createClass(BaseGame, [{
    key: "buildCanvas",
    value: function buildCanvas() {
      this.canvas.width = this.options.width;
      this.canvas.height = this.options.height;
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }

    /**
     * @function start
     * Initiate the game by building the canvas, binding the keyboard
     * and setting an interval time where the game area is updated
     *
    **/
  }, {
    key: "start",
    value: function start() {
      var _this = this;
      this.buildCanvas();
      this.bindKeyboard();
      this.interval = setInterval(function () {
        _this.updateGameArea();
      }, 20);
    }

    /**
     * @function stop
     * Stops the game
    **/
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.interval);
      if (this.canRestart()) {
        this.restart();
      }
    }

    /**
     * @function canRestart
     * Check whether the game can be restarted by checking the player lives;
    &*/
  }, {
    key: "canRestart",
    value: function canRestart() {
      return this.player.lives;
    }

    /**
     *  @function restart
     * Starts the game over
    **/
  }, {
    key: "restart",
    value: function restart() {
      this.frames = 0;
      this.myObstacles = [];
      this.score = 0;
      this.player.x = 0;
      this.player.y = 110;
      this.start();
    }

    /**
     * @function clear
     * Empty the canvas and sets a new one
     *
    **/
  }, {
    key: "clear",
    value: function clear() {
      this.context = this.canvas.getContext('2d');
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * @function updateGameArea
     * Creates a new frame with a new canvas and invoke the player and obstacle functions
     * checks if the player touches the obstacles
     *
    **/
  }, {
    key: "updateGameArea",
    value: function updateGameArea() {
      this.frames += 1;
      this.clear();
      this.handlePlayer();
      this.handleObstacles();
      this.checkGameOver();
      this.handleScore();
    }

    /**
     * @function handlePlayer
     * Creates a new position for the player and updates his position on the canvas
     *
    **/
  }, {
    key: "handlePlayer",
    value: function handlePlayer() {
      this.player.newPos();
      this.player.update();
    }
  }, {
    key: "checkGameOver",
    value: function checkGameOver() {
      var _this2 = this;
      var crashed = this.myObstacles.some(function (obstacle) {
        return _this2.player.crashWith(obstacle);
      });
      if (crashed) {
        this.player.lives -= 1;
        this.stop();
      }
    }

    /**
     * @function bindKeyboard
     * Bind keys for player handling
     *
    **/
  }, {
    key: "bindKeyboard",
    value: function bindKeyboard() {
      var _this3 = this;
      document.addEventListener('keydown', function (e) {
        switch (e.keyCode) {
          case 38:
            // up arrow
            _this3.player.speedY -= 1;
            break;
          case 40:
            // down arrow
            _this3.player.speedY += 1;
            break;
          case 37:
            // left arrow
            _this3.player.speedX -= 1;
            break;
          case 39:
            // right arrow
            _this3.player.speedX += 1;
            break;
        }
      });
      document.addEventListener('keyup', function (e) {
        _this3.player.speedX = 0;
        _this3.player.speedY = 0;
      });
    }
  }]);
  return BaseGame;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseGame);

/***/ }),

/***/ "./canvas/javascripts/component.js":
/*!*****************************************!*\
  !*** ./canvas/javascripts/component.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Component = /*#__PURE__*/function () {
  function Component(options) {
    _classCallCheck(this, Component);
    this.ctx = options.canvasContext;
    this.width = options.width;
    this.height = options.height;
    this.color = options.color;
    this.x = options.posX;
    this.y = options.posY;
    this.speedX = 0;
    this.speedY = 0;
  }
  _createClass(Component, [{
    key: "update",
    value: function update() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }, {
    key: "newPos",
    value: function newPos() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }, {
    key: "left",
    value: function left() {
      return this.x;
    }
  }, {
    key: "right",
    value: function right() {
      return this.x + this.width;
    }
  }, {
    key: "top",
    value: function top() {
      return this.y;
    }
  }, {
    key: "bottom",
    value: function bottom() {
      return this.y + this.height;
    }
  }, {
    key: "crashWith",
    value: function crashWith(obstacle) {
      return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
    }
  }]);
  return Component;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);

/***/ }),

/***/ "./canvas/javascripts/myGame.js":
/*!**************************************!*\
  !*** ./canvas/javascripts/myGame.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./canvas/javascripts/component.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./canvas/javascripts/player.js");
/* harmony import */ var _baseGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseGame */ "./canvas/javascripts/baseGame.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var myGame = /*#__PURE__*/function (_BaseGame) {
  _inherits(myGame, _BaseGame);
  var _super = _createSuper(myGame);
  function myGame(options) {
    var _this;
    _classCallCheck(this, myGame);
    _this = _super.call(this, options);
    _this.player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]({
      width: 30,
      height: 30,
      color: 'red',
      posX: 0,
      posY: 110,
      canvasContext: _this.canvas.getContext('2d'),
      lives: _this.options.lives || 3
    });
    return _this;
  }

  /**
   * @function start
   * Initiate the game by building the canvas, binding the keyboard
   * and setting an interval time where the game area is updated
   *
  **/
  _createClass(myGame, [{
    key: "start",
    value: function start() {
      _get(_getPrototypeOf(myGame.prototype), "start", this).call(this);
    }

    /**
     * @function updateObstacles
     * @see this.updateGameArea()
     * This function is handle the obstacles and is invoked on updateGameArea which is a function
     * that repeats under a setInterval
    **/
  }, {
    key: "handleObstacles",
    value: function handleObstacles() {
      for (var i = 0; i < this.myObstacles.length; i++) {
        this.myObstacles[i].x += -1;
        this.myObstacles[i].update();
      }
      if (this.frames % 120 === 0) {
        var x = this.canvas.width;
        var minHeight = 20;
        var maxHeight = 200;
        var height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        var minGap = 50;
        var maxGap = 200;
        var gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        this.myObstacles.push(new _component__WEBPACK_IMPORTED_MODULE_0__["default"]({
          width: 10,
          height: height,
          color: 'green',
          posX: x,
          posY: 0,
          canvasContext: this.canvas.getContext('2d')
        }));
        this.myObstacles.push(new _component__WEBPACK_IMPORTED_MODULE_0__["default"]({
          width: 10,
          height: x - height - gap,
          color: 'green',
          posX: x,
          posY: height + gap,
          canvasContext: this.canvas.getContext('2d')
        }));
      }
    }
  }, {
    key: "handleScore",
    value: function handleScore() {
      this.score = Math.floor(this.frames / 5);
      this.context.font = '18px serif';
      this.context.fillStyle = 'black';
      this.context.fillText("Score: ".concat(this.score), this.options.width - 100, 50);
      this.context.fillText("Lives: ".concat(this.player.lives), this.options.width - 100, 75);
    }
  }]);
  return myGame;
}(_baseGame__WEBPACK_IMPORTED_MODULE_2__["default"]);
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myGame);

/***/ }),

/***/ "./canvas/javascripts/player.js":
/*!**************************************!*\
  !*** ./canvas/javascripts/player.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./canvas/javascripts/component.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Player = /*#__PURE__*/function (_Component) {
  _inherits(Player, _Component);
  var _super = _createSuper(Player);
  function Player(options) {
    var _this;
    _classCallCheck(this, Player);
    _this = _super.call(this, options);
    _this.lives = options.lives;
    return _this;
  }
  return _createClass(Player);
}(_component__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************!*\
  !*** ./canvas/javascripts/intro.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _myGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myGame */ "./canvas/javascripts/myGame.js");

var newGame = new _myGame__WEBPACK_IMPORTED_MODULE_0__["default"]({
  width: 900,
  height: 480
});
newGame.start();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLEdBQUssSUFBSSxDQUFDckIsT0FBTyxDQUFDTyxLQUFLLEdBQUcsR0FBRyxFQUFHLEVBQUUsQ0FBQztJQUN0RjtFQUFDO0VBQUE7QUFBQSxFQXZFa0JSLGlEQUFRO0FBeUU1QjtBQUVELGlFQUFlMkQsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FZTtBQUFBLElBRTlCRCxNQUFNO0VBQUE7RUFBQTtFQUNWLGdCQUFZekQsT0FBTyxFQUFFO0lBQUE7SUFBQTtJQUNuQiwwQkFBTUEsT0FBTztJQUNiLE1BQUtxQixLQUFLLEdBQUdyQixPQUFPLENBQUNxQixLQUFLO0lBQUM7RUFDN0I7RUFBQztBQUFBLEVBSmtCd0Isa0RBQVM7QUFPOUIsaUVBQWVZLE1BQU07Ozs7OztVQ1RyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjhCO0FBRTlCLElBQU1lLE9BQU8sR0FBRyxJQUFJZCwrQ0FBTSxDQUFDO0VBQ3pCbkQsS0FBSyxFQUFFLEdBQUc7RUFDVkMsTUFBTSxFQUFFO0FBQ1YsQ0FBQyxDQUFDO0FBQ0ZnRSxPQUFPLENBQUNoRCxLQUFLLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lyb25oYWNrLy4vY2FudmFzL2phdmFzY3JpcHRzL2Jhc2VHYW1lLmpzIiwid2VicGFjazovL2lyb25oYWNrLy4vY2FudmFzL2phdmFzY3JpcHRzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9pcm9uaGFjay8uL2NhbnZhcy9qYXZhc2NyaXB0cy9teUdhbWUuanMiLCJ3ZWJwYWNrOi8vaXJvbmhhY2svLi9jYW52YXMvamF2YXNjcmlwdHMvcGxheWVyLmpzIiwid2VicGFjazovL2lyb25oYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2lyb25oYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9pcm9uaGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2lyb25oYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaXJvbmhhY2svLi9jYW52YXMvamF2YXNjcmlwdHMvaW50cm8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFzZUdhbWUge1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5teU9ic3RhY2xlcyA9IFtdO1xuICAgIHRoaXMuZnJhbWVzID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gYnVpbGRDYW52YXNcbiAgICogQnVpbGQgdGhlIGNhbnZhc1xuICAgKlxuICAqKi9cbiAgYnVpbGRDYW52YXMoKSB7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLm9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5vcHRpb25zLmhlaWdodDtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZSh0aGlzLmNhbnZhcywgZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzBdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gc3RhcnRcbiAgICogSW5pdGlhdGUgdGhlIGdhbWUgYnkgYnVpbGRpbmcgdGhlIGNhbnZhcywgYmluZGluZyB0aGUga2V5Ym9hcmRcbiAgICogYW5kIHNldHRpbmcgYW4gaW50ZXJ2YWwgdGltZSB3aGVyZSB0aGUgZ2FtZSBhcmVhIGlzIHVwZGF0ZWRcbiAgICpcbiAgKiovXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuYnVpbGRDYW52YXMoKTtcbiAgICB0aGlzLmJpbmRLZXlib2FyZCgpO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVHYW1lQXJlYSgpO1xuICAgIH0sIDIwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gc3RvcFxuICAgKiBTdG9wcyB0aGUgZ2FtZVxuICAqKi9cbiAgc3RvcCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgIGlmICggdGhpcy5jYW5SZXN0YXJ0KCkgKXtcbiAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gY2FuUmVzdGFydFxuICAgKiBDaGVjayB3aGV0aGVyIHRoZSBnYW1lIGNhbiBiZSByZXN0YXJ0ZWQgYnkgY2hlY2tpbmcgdGhlIHBsYXllciBsaXZlcztcbiAgJiovXG4gIGNhblJlc3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVyLmxpdmVzO1xuICB9XG5cbiAgLyoqXG4gICAqICBAZnVuY3Rpb24gcmVzdGFydFxuICAgKiBTdGFydHMgdGhlIGdhbWUgb3ZlclxuICAqKi9cbiAgcmVzdGFydCgpIHtcbiAgICB0aGlzLmZyYW1lcyA9IDA7XG4gICAgdGhpcy5teU9ic3RhY2xlcyA9IFtdO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMucGxheWVyLnggPSAwO1xuICAgIHRoaXMucGxheWVyLnkgPSAxMTA7XG4gICAgdGhpcy5zdGFydCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBjbGVhclxuICAgKiBFbXB0eSB0aGUgY2FudmFzIGFuZCBzZXRzIGEgbmV3IG9uZVxuICAgKlxuICAqKi9cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiB1cGRhdGVHYW1lQXJlYVxuICAgKiBDcmVhdGVzIGEgbmV3IGZyYW1lIHdpdGggYSBuZXcgY2FudmFzIGFuZCBpbnZva2UgdGhlIHBsYXllciBhbmQgb2JzdGFjbGUgZnVuY3Rpb25zXG4gICAqIGNoZWNrcyBpZiB0aGUgcGxheWVyIHRvdWNoZXMgdGhlIG9ic3RhY2xlc1xuICAgKlxuICAqKi9cbiAgdXBkYXRlR2FtZUFyZWEoKSB7XG4gICAgdGhpcy5mcmFtZXMgKz0gMTtcbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5oYW5kbGVQbGF5ZXIoKTtcbiAgICB0aGlzLmhhbmRsZU9ic3RhY2xlcygpO1xuICAgIHRoaXMuY2hlY2tHYW1lT3ZlcigpO1xuICAgIHRoaXMuaGFuZGxlU2NvcmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gaGFuZGxlUGxheWVyXG4gICAqIENyZWF0ZXMgYSBuZXcgcG9zaXRpb24gZm9yIHRoZSBwbGF5ZXIgYW5kIHVwZGF0ZXMgaGlzIHBvc2l0aW9uIG9uIHRoZSBjYW52YXNcbiAgICpcbiAgKiovXG4gIGhhbmRsZVBsYXllcigpIHtcbiAgICB0aGlzLnBsYXllci5uZXdQb3MoKTtcbiAgICB0aGlzLnBsYXllci51cGRhdGUoKTtcbiAgfVxuXG4gIGNoZWNrR2FtZU92ZXIoKSB7XG4gICAgY29uc3QgY3Jhc2hlZCA9IHRoaXMubXlPYnN0YWNsZXMuc29tZSggKG9ic3RhY2xlKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5wbGF5ZXIuY3Jhc2hXaXRoKG9ic3RhY2xlKTtcbiAgICB9KTtcbiAgICBpZiAoY3Jhc2hlZCkge1xuICAgICAgdGhpcy5wbGF5ZXIubGl2ZXMgLT0gMTtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gYmluZEtleWJvYXJkXG4gICAqIEJpbmQga2V5cyBmb3IgcGxheWVyIGhhbmRsaW5nXG4gICAqXG4gICoqL1xuICBiaW5kS2V5Ym9hcmQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDM4OiAvLyB1cCBhcnJvd1xuICAgICAgICAgIHRoaXMucGxheWVyLnNwZWVkWSAtPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQwOiAvLyBkb3duIGFycm93XG4gICAgICAgICAgdGhpcy5wbGF5ZXIuc3BlZWRZICs9IDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6IC8vIGxlZnQgYXJyb3dcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNwZWVkWCAtPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM5OiAvLyByaWdodCBhcnJvd1xuICAgICAgICAgIHRoaXMucGxheWVyLnNwZWVkWCArPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICB0aGlzLnBsYXllci5zcGVlZFggPSAwO1xuICAgICAgdGhpcy5wbGF5ZXIuc3BlZWRZID0gMDtcbiAgICB9KTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUdhbWU7XG4iLCJjbGFzcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmN0eCA9IG9wdGlvbnMuY2FudmFzQ29udGV4dDtcbiAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgIHRoaXMueCA9IG9wdGlvbnMucG9zWDtcbiAgICB0aGlzLnkgPSBvcHRpb25zLnBvc1k7XG4gICAgdGhpcy5zcGVlZFggPSAwO1xuICAgIHRoaXMuc3BlZWRZID0gMDtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gIH1cblxuICBuZXdQb3MoKSB7XG4gICAgdGhpcy54ICs9IHRoaXMuc3BlZWRYO1xuICAgIHRoaXMueSArPSB0aGlzLnNwZWVkWTtcbiAgfVxuXG4gIGxlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMueDtcbiAgfVxuICByaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aDtcbiAgfVxuICB0b3AoKSB7XG4gICAgcmV0dXJuIHRoaXMueTtcbiAgfVxuICBib3R0b20oKSB7XG4gICAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgY3Jhc2hXaXRoKG9ic3RhY2xlKSB7XG4gICAgcmV0dXJuICEodGhpcy5ib3R0b20oKSA8IG9ic3RhY2xlLnRvcCgpIHx8IHRoaXMudG9wKCkgPiBvYnN0YWNsZS5ib3R0b20oKSB8fCB0aGlzLnJpZ2h0KCkgPCBvYnN0YWNsZS5sZWZ0KCkgfHwgdGhpcy5sZWZ0KCkgPiBvYnN0YWNsZS5yaWdodCgpKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgQmFzZUdhbWUgZnJvbSAnLi9iYXNlR2FtZSc7XG5cbmNsYXNzIG15R2FtZSBleHRlbmRzIEJhc2VHYW1lIHtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHtcbiAgICAgIHdpZHRoOiAzMCxcbiAgICAgIGhlaWdodDogMzAsXG4gICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICBwb3NYOiAwLFxuICAgICAgcG9zWTogMTEwLFxuICAgICAgY2FudmFzQ29udGV4dDogdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICAgIGxpdmVzOiB0aGlzLm9wdGlvbnMubGl2ZXMgfHwgM1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBzdGFydFxuICAgKiBJbml0aWF0ZSB0aGUgZ2FtZSBieSBidWlsZGluZyB0aGUgY2FudmFzLCBiaW5kaW5nIHRoZSBrZXlib2FyZFxuICAgKiBhbmQgc2V0dGluZyBhbiBpbnRlcnZhbCB0aW1lIHdoZXJlIHRoZSBnYW1lIGFyZWEgaXMgdXBkYXRlZFxuICAgKlxuICAqKi9cbiAgc3RhcnQoKSB7XG4gICAgc3VwZXIuc3RhcnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gdXBkYXRlT2JzdGFjbGVzXG4gICAqIEBzZWUgdGhpcy51cGRhdGVHYW1lQXJlYSgpXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgaGFuZGxlIHRoZSBvYnN0YWNsZXMgYW5kIGlzIGludm9rZWQgb24gdXBkYXRlR2FtZUFyZWEgd2hpY2ggaXMgYSBmdW5jdGlvblxuICAgKiB0aGF0IHJlcGVhdHMgdW5kZXIgYSBzZXRJbnRlcnZhbFxuICAqKi9cbiAgaGFuZGxlT2JzdGFjbGVzKCkge1xuXG4gICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgdGhpcy5teU9ic3RhY2xlcy5sZW5ndGggOyBpKyspIHtcbiAgICAgIHRoaXMubXlPYnN0YWNsZXNbaV0ueCArPSAtMTtcbiAgICAgIHRoaXMubXlPYnN0YWNsZXNbaV0udXBkYXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZnJhbWVzICUgMTIwID09PSAwKSB7XG4gICAgICBsZXQgeCA9IHRoaXMuY2FudmFzLndpZHRoO1xuICAgICAgbGV0IG1pbkhlaWdodCA9IDIwO1xuICAgICAgbGV0IG1heEhlaWdodCA9IDIwMDtcbiAgICAgIGxldCBoZWlnaHQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4SGVpZ2h0IC0gbWluSGVpZ2h0ICsgMSkgKyBtaW5IZWlnaHQpO1xuICAgICAgbGV0IG1pbkdhcCA9IDUwO1xuICAgICAgbGV0IG1heEdhcCA9IDIwMDtcbiAgICAgIGxldCBnYXAgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4R2FwIC0gbWluR2FwICsgMSkgKyBtaW5HYXApO1xuICAgICAgdGhpcy5teU9ic3RhY2xlcy5wdXNoKG5ldyBDb21wb25lbnQoe1xuICAgICAgICB3aWR0aDogMTAsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICBjb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgcG9zWDogeCxcbiAgICAgICAgcG9zWTogMCxcbiAgICAgICAgY2FudmFzQ29udGV4dDogdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgfSkpO1xuICAgICAgdGhpcy5teU9ic3RhY2xlcy5wdXNoKG5ldyBDb21wb25lbnQoe1xuICAgICAgICB3aWR0aDogMTAsXG4gICAgICAgIGhlaWdodDogeCAtIGhlaWdodCAtIGdhcCxcbiAgICAgICAgY29sb3I6ICdncmVlbicsXG4gICAgICAgIHBvc1g6IHgsXG4gICAgICAgIHBvc1k6IGhlaWdodCArIGdhcCxcbiAgICAgICAgY2FudmFzQ29udGV4dDogdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNjb3JlICgpIHtcbiAgICB0aGlzLnNjb3JlID0gTWF0aC5mbG9vcih0aGlzLmZyYW1lcyAvIDUpO1xuICAgIHRoaXMuY29udGV4dC5mb250ID0gJzE4cHggc2VyaWYnO1xuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChgU2NvcmU6ICR7dGhpcy5zY29yZX1gLCAodGhpcy5vcHRpb25zLndpZHRoIC0gMTAwKSwgNTApO1xuICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChgTGl2ZXM6ICR7dGhpcy5wbGF5ZXIubGl2ZXN9YCwgKHRoaXMub3B0aW9ucy53aWR0aCAtIDEwMCksIDc1KTtcbiAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBteUdhbWU7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuY2xhc3MgUGxheWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMubGl2ZXMgPSBvcHRpb25zLmxpdmVzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG15R2FtZSBmcm9tICcuL215R2FtZSc7XG5cbmNvbnN0IG5ld0dhbWUgPSBuZXcgbXlHYW1lKHtcbiAgd2lkdGg6IDkwMCxcbiAgaGVpZ2h0OiA0ODBcbn0pO1xubmV3R2FtZS5zdGFydCgpO1xuIl0sIm5hbWVzIjpbIkJhc2VHYW1lIiwib3B0aW9ucyIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNjb3JlIiwibXlPYnN0YWNsZXMiLCJmcmFtZXMiLCJ3aWR0aCIsImhlaWdodCIsImJvZHkiLCJpbnNlcnRCZWZvcmUiLCJjaGlsZE5vZGVzIiwiYnVpbGRDYW52YXMiLCJiaW5kS2V5Ym9hcmQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwidXBkYXRlR2FtZUFyZWEiLCJjbGVhckludGVydmFsIiwiY2FuUmVzdGFydCIsInJlc3RhcnQiLCJwbGF5ZXIiLCJsaXZlcyIsIngiLCJ5Iiwic3RhcnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsImNsZWFyIiwiaGFuZGxlUGxheWVyIiwiaGFuZGxlT2JzdGFjbGVzIiwiY2hlY2tHYW1lT3ZlciIsImhhbmRsZVNjb3JlIiwibmV3UG9zIiwidXBkYXRlIiwiY3Jhc2hlZCIsInNvbWUiLCJvYnN0YWNsZSIsImNyYXNoV2l0aCIsInN0b3AiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJzcGVlZFkiLCJzcGVlZFgiLCJDb21wb25lbnQiLCJjdHgiLCJjYW52YXNDb250ZXh0IiwiY29sb3IiLCJwb3NYIiwicG9zWSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiYm90dG9tIiwidG9wIiwicmlnaHQiLCJsZWZ0IiwiUGxheWVyIiwibXlHYW1lIiwiaSIsImxlbmd0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm1pbkdhcCIsIm1heEdhcCIsImdhcCIsInB1c2giLCJmb250IiwiZmlsbFRleHQiLCJuZXdHYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==