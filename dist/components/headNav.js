// { "framework": "Vue"} 

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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(5)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/GAOYI/wwwroot/weiui/weiui-template/src/components/headNav.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c6e7507a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = {
  "nav": {
    "flexDirection": "row",
    "alignItems": "center",
    "width": "750",
    "height": "96"
  },
  "back": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "width": "96",
    "height": "96",
    "lineHeight": "96",
    "textAlign": "center",
    "fontSize": "38",
    "color": "#ffffff"
  },
  "title": {
    "flex": 1,
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "title-text": {
    "fontSize": "32",
    "fontWeight": "300",
    "maxWidth": "520",
    "textOverflow": "ellipsis",
    "lines": 1
  },
  "title-load": {
    "width": "42",
    "height": "42",
    "fontSize": "32",
    "marginLeft": "6",
    "content": "'tb-loading-d spin'"
  },
  "title-right": {
    "position": "absolute",
    "right": 0,
    "top": 0,
    "height": "96",
    "lineHeight": "96",
    "textAlign": "center",
    "fontSize": "26",
    "color": "#ffffff",
    "paddingTop": 0,
    "paddingRight": "26",
    "paddingBottom": 0,
    "paddingLeft": "26"
  }
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//

var weiui = weex.requireModule('weiui');

exports.default = {
    name: 'head-nav',

    props: {
        title: {
            type: String,
            default: ''
        },

        loading: {
            type: Boolean,
            default: false
        },

        back: {
            type: Boolean,
            default: true
        },

        backIcon: {
            type: String,
            default: 'tb-back'
        },

        rightTitle: {
            type: String,
            default: ''
        },

        color: {
            type: String,
            default: '#FFFFFF'
        },

        backgroundColor: {
            type: String,
            default: '#3EB4FF'
        }
    },

    methods: {
        goBack: function goBack() {
            weiui.closePage();
        },
        rightClick: function rightClick() {
            this.$emit('rightClick');
        }
    }
};

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["nav"],
    style: {
      backgroundColor: _vm.backgroundColor
    }
  }, [_c('div', {
    staticClass: ["title"]
  }, [_c('text', {
    staticClass: ["title-text"],
    style: {
      color: _vm.color
    }
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.loading) ? _c('weiui_icon', {
    staticClass: ["title-load"],
    style: {
      color: _vm.color
    }
  }) : _vm._e()], 1), (_vm.rightTitle !== '') ? _c('text', {
    staticClass: ["title-right"],
    on: {
      "click": _vm.rightClick
    }
  }, [_vm._v(_vm._s(_vm.rightTitle))]) : _vm._e(), (_vm.back) ? _c('weiui_icon', {
    staticClass: ["back"],
    attrs: {
      "content": _vm.backIcon
    },
    on: {
      "click": _vm.goBack
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _headNav = __webpack_require__(2);

var _headNav2 = _interopRequireDefault(_headNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_headNav2.default.el = '#root';
new Vue(_headNav2.default);

/***/ })

/******/ });