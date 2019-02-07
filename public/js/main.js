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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/Bird.js":
/*!********************!*\
  !*** ./js/Bird.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bird; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Bird =
/*#__PURE__*/
function () {
  function Bird(config) {
    _classCallCheck(this, Bird);

    _defineProperty(this, "defaultConfig", {
      color: 'black',
      speed: 2 + Math.random() * 4,
      position: {
        x: 0,
        y: 200 + Math.random() * 200
      }
    });

    config = _objectSpread({}, this.defaultConfig, config);
    var _config = config,
        color = _config.color,
        speed = _config.speed,
        position = _config.position,
        onRemove = _config.onRemove,
        onClick = _config.onClick,
        onEscape = _config.onEscape;
    this.onClick = onClick;
    this.onRemove = onRemove;
    this.onEscape = onEscape;
    this.color = color;
    this.position = position;
    this.speed = speed;
    this.el = this.render();
    this.addClickHandler();
  }

  _createClass(Bird, [{
    key: "addClickHandler",
    value: function addClickHandler() {
      var _this = this;

      this.el.addEventListener('click', function () {
        _this.onClick();

        _this.remove();
      });
    }
  }, {
    key: "remove",
    value: function remove() {
      this.onRemove(this);
      this.el.remove();
    }
  }, {
    key: "update",
    value: function update() {
      this.position.x += this.speed;

      if (this.position.x > window.innerWidth) {
        this.remove();
        this.onEscape();
      } else {
        this.el.style.left = this.position.x + 'px';
        this.el.style.top = this.position.y + Math.sin(this.position.x / 100) * 100 + 'px';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var el = document.createElement('div');
      el.className = 'bird';
      el.style.background = this.color;
      document.body.insertAdjacentElement('beforeend', el);
      return el;
    }
  }]);

  return Bird;
}();



/***/ }),

/***/ "./js/Counter.js":
/*!***********************!*\
  !*** ./js/Counter.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Counter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Counter =
/*#__PURE__*/
function () {
  function Counter() {
    _classCallCheck(this, Counter);

    _defineProperty(this, "playerPoints", 0);

    _defineProperty(this, "birdsPoints", 0);

    this.el = this.render();
  }

  _createClass(Counter, [{
    key: "addPlayerPoint",
    value: function addPlayerPoint() {
      this.playerPoints = this.playerPoints + 1;
      this.updatePlayerPoints();
    }
  }, {
    key: "addBirdsPoint",
    value: function addBirdsPoint() {
      this.birdsPoints = this.birdsPoints + 1;
      this.updatePlayerPoints();
    }
  }, {
    key: "updatePlayerPoints",
    value: function updatePlayerPoints() {
      this.el.innerHTML = "".concat(this.playerPoints, " : ").concat(this.birdsPoints);
    }
  }, {
    key: "render",
    value: function render() {
      var el = document.createElement('div');
      el.className = 'counter';
      document.body.insertAdjacentElement('afterbegin', el);
      return el;
    }
  }]);

  return Counter;
}();



/***/ }),

/***/ "./js/Game.js":
/*!********************!*\
  !*** ./js/Game.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _Bird__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bird */ "./js/Bird.js");
/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Counter */ "./js/Counter.js");
/* harmony import */ var _Hunter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hunter */ "./js/Hunter.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Game =
/*#__PURE__*/
function () {
  function Game() {
    var _this = this;

    _classCallCheck(this, Game);

    _defineProperty(this, "entities", []);

    _defineProperty(this, "removeBird", function (bird) {
      var index = _this.entities.indexOf(bird);

      _this.entities = [].concat(_toConsumableArray(_this.entities.slice(0, index)), _toConsumableArray(_this.entities.slice(index + 1)));
    });

    _defineProperty(this, "updateBirdsPoints", function () {
      _this.counter.addBirdsPoint();
    });

    _defineProperty(this, "updatePlayerPoints", function () {
      _this.counter.addPlayerPoint();
    });

    this.createBirds();
    this.createCounter();
    this.loop();
    this.createHunter();
  }

  _createClass(Game, [{
    key: "createBirds",
    value: function createBirds() {
      this.addBird();
      this.addBird();
      this.addBird();
      this.addBird();
      this.addBird();
    }
  }, {
    key: "createHunter",
    value: function createHunter() {
      this.hunter = new _Hunter__WEBPACK_IMPORTED_MODULE_2__["default"]();
      this.entities = [].concat(_toConsumableArray(this.entities), [this.hunter]);
    }
  }, {
    key: "createCounter",
    value: function createCounter() {
      this.counter = new _Counter__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
  }, {
    key: "addBird",
    value: function addBird() {
      var config = {
        onRemove: this.removeBird,
        onClick: this.updatePlayerPoints,
        onEscape: this.updateBirdsPoints
      };
      this.entities = [].concat(_toConsumableArray(this.entities), [new _Bird__WEBPACK_IMPORTED_MODULE_0__["default"](config)]);
    }
  }, {
    key: "loop",
    value: function loop() {
      var _this2 = this;

      Math.random() < 1 / 60 && this.addBird();
      this.entities.forEach(function (entity) {
        return entity.update();
      });
      requestAnimationFrame(function () {
        _this2.loop();
      });
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./js/Hunter.js":
/*!**********************!*\
  !*** ./js/Hunter.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hunter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Hunter =
/*#__PURE__*/
function () {
  function Hunter() {
    _classCallCheck(this, Hunter);

    _defineProperty(this, "position", window.innerWidth / 2);

    _defineProperty(this, "speed", 0);

    this.el = this.render();
    this.setupMovement();
  }

  _createClass(Hunter, [{
    key: "update",
    value: function update() {
      this.position += this.speed;
      this.el.style.left = this.position + 'px';
    }
  }, {
    key: "setupMovement",
    value: function setupMovement() {
      var _this = this;

      document.body.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
          _this.speed = -10;
        } else if (event.key === 'ArrowRight') {
          _this.speed = +10;
        }
      });
      document.body.addEventListener('keyup', function (event) {
        if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
          _this.speed = 0;
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var el = document.createElement('div');
      el.className = 'hunter';
      document.body.insertAdjacentElement('beforeend', el);
      return el;
    }
  }]);

  return Hunter;
}();



/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./js/Game.js");

new _Game__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ })

/******/ });
//# sourceMappingURL=main.js.map