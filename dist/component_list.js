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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var global = {
    isNullOrUndefined: function isNullOrUndefined(obj) {
        return typeof obj === "undefined" || obj === null;
    },
    isFunction: function isFunction(obj) {
        return global.isNullOrUndefined(obj) ? false : typeof obj === "function";
    },
    isObject: function isObject(obj) {
        return global.isNullOrUndefined(obj) ? false : (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object";
    },
    likeArray: function likeArray(obj) {
        return global.isNullOrUndefined(obj) ? false : typeof obj.length === 'number';
    },
    isJson: function isJson(obj) {
        return global.isObject(obj) && !global.likeArray(obj);
    },
    getObject: function getObject(obj, keys) {
        var object = obj;
        if (global.count(obj) > 0 && global.count(keys) > 0) {
            var arr = keys.replace(/,/g, "|").replace(/\./g, "|").split("|");
            global.each(arr, function (index, key) {
                if (typeof object[key] !== "undefined") {
                    object = object[key];
                }
            });
        }
        return object;
    },


    /**
     * 遍历数组、对象
     * @param elements
     * @param callback
     * @returns {*}
     */
    each: function each(elements, callback) {
        var i = void 0,
            key = void 0;
        if (global.likeArray(elements)) {
            if (typeof elements.length === "number") {
                for (i = 0; i < elements.length; i++) {
                    if (callback.call(elements[i], i, elements[i]) === false) return elements;
                }
            }
        } else {
            for (key in elements) {
                if (!elements.hasOwnProperty(key)) continue;
                if (callback.call(elements[key], key, elements[key]) === false) return elements;
            }
        }

        return elements;
    },


    /**
     * 获取数组最后一个值
     * @param array
     * @returns {*}
     */
    last: function last(array) {
        var str = false;
        if ((typeof array === "undefined" ? "undefined" : _typeof(array)) === 'object' && array.length > 0) {
            str = array[array.length - 1];
        }
        return str;
    },


    /**
     * 删除数组最后一个值
     * @param array
     * @returns {Array}
     */
    delLast: function delLast(array) {
        var newArray = [];
        if ((typeof array === "undefined" ? "undefined" : _typeof(array)) === 'object' && array.length > 0) {
            global.each(array, function (index, item) {
                if (index < array.length - 1) {
                    newArray.push(item);
                }
            });
        }
        return newArray;
    },


    /**
     * 字符串是否包含
     * @param string
     * @param find
     * @returns {boolean}
     */
    strExists: function strExists(string, find) {
        string += "";
        find += "";
        return string.indexOf(find) !== -1;
    },


    /**
     * 字符串是否左边包含
     * @param string
     * @param find
     * @returns {boolean}
     */
    leftExists: function leftExists(string, find) {
        string += "";
        find += "";
        return string.substring(0, find.length) === find;
    },


    /**
     * 字符串是否右边包含
     * @param string
     * @param find
     * @returns {boolean}
     */
    rightExists: function rightExists(string, find) {
        string += "";
        find += "";
        return string.substring(string.length - find.length) === find;
    },


    /**
     * 取字符串中间
     * @param string
     * @param start
     * @param end
     * @returns {*}
     */
    getMiddle: function getMiddle(string, start, end) {
        string += "";
        if (global.ishave(start) && global.strExists(string, start)) {
            string = string.substring(string.indexOf(start) + start.length);
        }
        if (global.ishave(end) && global.strExists(string, end)) {
            string = string.substring(0, string.indexOf(end));
        }
        return string;
    },


    /**
     * 截取字符串
     * @param string
     * @param start
     * @param end
     * @returns {string}
     */
    subString: function subString(string, start, end) {
        string += "";
        if (!global.ishave(end)) {
            end = string.length;
        }
        return string.substring(start, end);
    },


    /**
     * 随机字符
     * @param len
     * @returns {string}
     */
    randomString: function randomString(len) {
        len = len || 32;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1';
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    },


    /**
     * 判断是否有
     * @param set
     * @returns {boolean}
     */
    ishave: function ishave(set) {
        return !!(set !== null && set !== "null" && set !== undefined && set !== "undefined" && set);
    },


    /**
     * 补零
     * @param str
     * @param length
     * @param after
     * @returns {*}
     */
    zeroFill: function zeroFill(str, length, after) {
        str += "";
        if (str.length >= length) {
            return str;
        }
        var _str = '',
            _ret = '';
        for (var i = 0; i < length; i++) {
            _str += '0';
        }
        if (after || typeof after === 'undefined') {
            _ret = (_str + "" + str).substr(length * -1);
        } else {
            _ret = (str + "" + _str).substr(0, length);
        }
        return _ret;
    },


    /**
     * 时间戳转时间格式
     * @param format
     * @param v
     * @returns {string}
     */
    formatDate: function formatDate(format, v) {
        if (format === '') {
            format = 'Y-m-d H:i:s';
        }
        if (typeof v === 'undefined') {
            v = new Date().getTime();
        } else if (/^(-)?\d{1,10}$/.test(v)) {
            v = v * 1000;
        } else if (/^(-)?\d{1,13}$/.test(v)) {
            v = v * 1000;
        } else if (/^(-)?\d{1,14}$/.test(v)) {
            v = v * 100;
        } else if (/^(-)?\d{1,15}$/.test(v)) {
            v = v * 10;
        } else if (/^(-)?\d{1,16}$/.test(v)) {
            v = v * 1;
        } else {
            return v;
        }
        var dateObj = new Date(v);
        if (parseInt(dateObj.getFullYear()) + "" === "NaN") {
            return v;
        }
        //
        format = format.replace(/Y/g, dateObj.getFullYear());
        format = format.replace(/m/g, global.zeroFill(dateObj.getMonth() + 1, 2));
        format = format.replace(/d/g, global.zeroFill(dateObj.getDate(), 2));
        format = format.replace(/H/g, global.zeroFill(dateObj.getHours(), 2));
        format = format.replace(/i/g, global.zeroFill(dateObj.getMinutes(), 2));
        format = format.replace(/s/g, global.zeroFill(dateObj.getSeconds(), 2));
        return format;
    },


    /**
     * 检测手机号码格式
     * @param str
     * @returns {boolean}
     */
    isMobile: function isMobile(str) {
        return (/^1(3|4|5|7|8)\d{9}$/.test(str)
        );
    },


    /**
     * 手机号码中间换成****
     * @param phone
     * @returns {string}
     */
    formatMobile: function formatMobile(phone) {
        if (global.count(phone) === 0) {
            return "";
        }
        return phone.substring(0, 3) + "****" + phone.substring(phone.length - 4);
    },


    /**
     * 克隆对象
     * @param myObj
     * @returns {*}
     */
    clone: function clone(myObj) {
        if ((typeof myObj === "undefined" ? "undefined" : _typeof(myObj)) !== 'object') return myObj;
        if (myObj === null) return myObj;
        //
        if (global.likeArray(myObj)) {
            var _myObj = _toArray(myObj),
                myNewObj = _myObj.slice(0);

            return myNewObj;
        } else {
            var _myNewObj = _objectWithoutProperties(myObj, []);

            return _myNewObj;
        }
    },


    /**
     * 统计数组或对象长度
     * @param obj
     * @returns {number}
     */
    count: function count(obj) {
        try {
            if (typeof obj === "undefined") {
                return 0;
            }
            if (typeof obj === "number") {
                obj += "";
            }
            if (typeof obj.length === 'number') {
                return obj.length;
            } else {
                var i = 0,
                    key = void 0;
                for (key in obj) {
                    i++;
                }
                return i;
            }
        } catch (e) {
            return 0;
        }
    },


    /**
     * 相当于 intval
     * @param str
     * @param fixed
     * @returns {number}
     */
    runNum: function runNum(str, fixed) {
        var _s = Number(str);
        if (_s + "" === "NaN") {
            _s = 0;
        }
        if (/^[0-9]*[1-9][0-9]*$/.test(fixed)) {
            _s = _s.toFixed(fixed);
            var rs = _s.indexOf('.');
            if (rs < 0) {
                _s += ".";
                for (var i = 0; i < fixed; i++) {
                    _s += "0";
                }
            }
        }
        return _s;
    },


    /**
     * 秒转化为天小时分秒字符串
     * @param value
     * @returns {string}
     */
    formatSeconds: function formatSeconds(value) {
        var theTime = parseInt(value); // 秒
        var theTime1 = 0; // 分
        var theTime2 = 0; // 小时
        if (theTime > 60) {
            theTime1 = parseInt(theTime / 60);
            theTime = parseInt(theTime % 60);
            if (theTime1 > 60) {
                theTime2 = parseInt(theTime1 / 60);
                theTime1 = parseInt(theTime1 % 60);
            }
        }
        var result = parseInt(theTime) + "秒";
        if (theTime1 > 0) {
            result = parseInt(theTime1) + "分" + result;
        }
        if (theTime2 > 0) {
            result = parseInt(theTime2) + "小时" + result;
        }
        return result;
    },


    /**
     * 将一个 JSON 字符串转换为对象（已try）
     * @param str
     * @param defaultVal
     * @returns {*}
     */
    jsonParse: function jsonParse(str, defaultVal) {
        try {
            return JSON.parse(str);
        } catch (e) {
            return defaultVal ? defaultVal : {};
        }
    },


    /**
     * 将 JavaScript 值转换为 JSON 字符串（已try）
     * @param json
     * @param defaultVal
     * @returns {string}
     */
    jsonStringify: function jsonStringify(json, defaultVal) {
        try {
            return JSON.stringify(json);
        } catch (e) {
            return defaultVal ? defaultVal : "";
        }
    },


    /**
     * 去除数组中的非数字项
     * @param value
     * @returns {Array}
     */
    removerNumberNaN: function removerNumberNaN() {
        var array = [];

        for (var _len = arguments.length, value = Array(_len), _key = 0; _key < _len; _key++) {
            value[_key] = arguments[_key];
        }

        value.forEach(function (ele) {
            if (!isNaN(Number(ele))) {
                array.push(ele);
            }
        });
        return array;
    },


    /**
     * Math.max 过滤NaN
     * @param value
     * @returns {number}
     */
    runMax: function runMax() {
        return Math.max.apply(Math, _toConsumableArray(global.removerNumberNaN.apply(global, arguments)));
    },


    /**
     * Math.min 过滤NaN
     * @param value
     * @returns {number}
     */
    runMin: function runMin() {
        return Math.min.apply(Math, _toConsumableArray(global.removerNumberNaN.apply(global, arguments)));
    },


    /**
     * 链接字符串
     * @param value 第一个参数为连接符
     * @returns {string}
     */
    stringConnect: function stringConnect() {
        var s = null;
        var text = "";

        for (var _len2 = arguments.length, value = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            value[_key2] = arguments[_key2];
        }

        value.forEach(function (val) {
            if (s === null) {
                s = val;
            } else if (val) {
                if (val && text) text += s;
                text += val;
            }
        });
        return text;
    }
};

module.exports = global;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _global = __webpack_require__(0);

var weiui = weex.requireModule('weiui');

var app = {
    openViewCode: function openViewCode(str) {
        app.openViewUrl("http://weiui.cc/#/" + str);
    },
    openViewUrl: function openViewUrl(url) {
        weiui.openPage({
            url: 'index_browser.js',
            pageType: 'weex',
            statusBarColor: "#3EB4FF",
            params: {
                title: "WEIUI",
                url: url
            }
        });
    },
    checkVersion: function checkVersion(compareVersion) {
        if (typeof weiui.getVersion !== "function") {
            return false;
        }
        return (0, _global.runNum)(weiui.getVersion()) >= (0, _global.runNum)(compareVersion);
    }
};

module.exports = app;

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _component_list = __webpack_require__(27);

var _component_list2 = _interopRequireDefault(_component_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_component_list2.default.el = '#root';
new Vue(_component_list2.default);

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(28)
)

/* script */
__vue_exports__ = __webpack_require__(29)

/* template */
var __vue_template__ = __webpack_require__(30)
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
__vue_options__.__file = "/Users/GAOYI/wwwroot/weiui/weiui-template/src/component_list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-43e1d6b9"
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

/***/ 28:
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "width": "750",
    "flex": 1
  },
  "navbar": {
    "width": "750",
    "height": "100"
  },
  "title": {
    "fontSize": "28",
    "color": "#ffffff"
  },
  "iconr": {
    "width": "100",
    "height": "100",
    "color": "#ffffff"
  },
  "list": {
    "width": "750",
    "flex": 1
  },
  "panel": {
    "width": "750",
    "borderBottomColor": "#e4e4e4",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1"
  },
  "panel-item": {
    "width": "750",
    "paddingTop": "22",
    "paddingBottom": "22",
    "flexDirection": "column",
    "justifyContent": "center"
  },
  "panel-text": {
    "fontSize": "50",
    "textAlign": "center"
  }
}

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _app = __webpack_require__(1);

var weiui = weex.requireModule('weiui'); //
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
            lists: []
        };
    },
    mounted: function mounted() {
        var _this = this;

        for (var i = 1; i <= 20; i++) {
            this.lists.push(i);
        }
        this.$refs.reflectName.setHasMore(true);
        //
        setTimeout(function () {
            _this.lists.splice(2, 1, "改变第三项文字");
            // splice 详细用法http://www.w3school.com.cn/jsref/jsref_splice.asp
        }, 1000);
    },

    methods: {
        viewCode: function viewCode(str) {
            (0, _app.openViewCode)(str);
        },
        itemClick: function itemClick(params) {
            weiui.toast("点击了" + (params.position + 1) + "项");
        },
        pullLoadListener: function pullLoadListener() {
            var _this2 = this;

            var count = this.lists.length;
            if (count >= 100) {
                this.$refs.reflectName.setHasMore(false);
                return;
            }
            setTimeout(function () {
                for (var i = 1; i <= 20; i++) {
                    _this2.lists.push(count + i);
                }
                _this2.$refs.reflectName.pullloaded();
                weiui.toast("加载" + (count + 1) + "~" + _this2.lists.length + "数据成功");
            }, 1000);
        },
        refreshListener: function refreshListener() {
            var _this3 = this;

            var newList = [];
            for (var i = 1; i <= 20; i++) {
                newList.push(i);
            }
            setTimeout(function () {
                _this3.lists = newList;
                _this3.$refs.reflectName.setHasMore(true);
                _this3.$refs.reflectName.refreshed();
                weiui.toast("刷新数据成功");
            }, 1000);
        }
    }
};

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('weiui_navbar', {
    staticClass: ["navbar"]
  }, [_c('weiui_navbar_item', {
    attrs: {
      "type": "back"
    }
  }), _c('weiui_navbar_item', {
    attrs: {
      "type": "title"
    }
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("列表容器")])]), _c('weiui_navbar_item', {
    attrs: {
      "type": "right"
    },
    on: {
      "click": function($event) {
        _vm.viewCode('component/weiui_list')
      }
    }
  }, [_c('weiui_icon', {
    staticClass: ["iconr"],
    attrs: {
      "content": "code-working"
    }
  })], 1)], 1), _c('weiui_list', {
    ref: "reflectName",
    staticClass: ["list"],
    attrs: {
      "weiui": {
        pullTips: true,
      }
    },
    on: {
      "itemClick": _vm.itemClick,
      "pullLoadListener": _vm.pullLoadListener,
      "refreshListener": _vm.refreshListener
    }
  }, _vm._l((_vm.lists), function(num) {
    return _c('div', {
      staticClass: ["panel"]
    }, [_c('div', {
      staticClass: ["panel-item"]
    }, [_c('text', {
      staticClass: ["panel-text"]
    }, [_vm._v(_vm._s(num))])])])
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });