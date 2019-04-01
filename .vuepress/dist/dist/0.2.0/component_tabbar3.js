// { "framework": "Vue" } 

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
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ({

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _component_tabbar = __webpack_require__(65);

var _component_tabbar2 = _interopRequireDefault(_component_tabbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_component_tabbar2.default.el = '#root';
new Vue(_component_tabbar2.default);

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(66)
)

/* script */
__vue_exports__ = __webpack_require__(67)

/* template */
var __vue_template__ = __webpack_require__(68)
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
__vue_options__.__file = "/Users/GAOYI/wwwroot/weiui/weiui-template/src/component_tabbar3.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3835a36c"
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

/***/ 66:
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "flex": 1
  },
  "tabbar": {
    "flex": 1,
    "width": "750"
  }
}

/***/ }),

/***/ 67:
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

exports.default = {
    data: function data() {
        return {
            tabPages: [{
                title: '首页',
                selectedIcon: 'tb-home',
                url: 'http://dotwe.org/raw/dist/b5fd96d8d790f0100bdfc20b93eedf09.bundle.wx'
            }, {
                title: '好友',
                selectedIcon: 'https://weiui.app/assets/images/cartoon/m7.png',
                unSelectedIcon: 'https://weiui.app/assets/images/cartoon/m8.png',
                url: 'http://dotwe.org/raw/dist/ba938c9aaebe41e5f60b98f90bd0bf61.bundle.wx',
                message: 9
            }, {
                title: '圈子',
                selectedIcon: 'md-aperture',
                url: 'http://dotwe.org/raw/dist/fb6f016b0116969b6b503e1d3a35285f.bundle.wx',
                message: 18
            }, {
                title: '设置',
                selectedIcon: 'md-settings',
                unSelectedIcon: 'md-settings',
                url: 'http://dotwe.org/raw/dist/ad0045a7cff0b3a680d9de6dd4806e81.bundle.wx',
                dot: true
            }]
        };
    }
};

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('tabbar', {
    ref: "reflectName",
    staticClass: ["tabbar"],
    attrs: {
      "weiui": {
        tabType: 'bottom'
      },
      "tabPages": _vm.tabPages
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });