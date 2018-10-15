(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ReconnectingWebSocket"), require("SIP"));
	else if(typeof define === 'function' && define.amd)
		define(["ReconnectingWebSocket", "SIP"], factory);
	else if(typeof exports === 'object')
		exports["@wazo/sdk"] = factory(require("ReconnectingWebSocket"), require("SIP"));
	else
		root["@wazo/sdk"] = factory(root["ReconnectingWebSocket"], root["SIP"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_reconnecting_websocket__, __WEBPACK_EXTERNAL_MODULE_sip_js__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cross-fetch/dist/browser-polyfill.js":
/*!***********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/browser-polyfill.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(self) {

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    };

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue+','+value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) { items.push(name); });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) { items.push(value); });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) { items.push([name, value]); });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : this);


/***/ }),

/***/ "./node_modules/js-base64/base64.js":
/*!******************************************!*\
  !*** ./node_modules/js-base64/base64.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  base64.js
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
;(function (global, factory) {
     true
        ? module.exports = factory(global)
        : undefined
}((
    typeof self !== 'undefined' ? self
        : typeof window !== 'undefined' ? window
        : typeof global !== 'undefined' ? global
: this
), function(global) {
    'use strict';
    // existing version for noConflict()
    var _Base64 = global.Base64;
    var version = "2.4.9";
    // if node.js and NOT React Native, we use Buffer
    var buffer;
    if (typeof module !== 'undefined' && module.exports) {
        try {
            buffer = eval("require('buffer').Buffer");
        } catch (err) {
            buffer = undefined;
        }
    }
    // constants
    var b64chars
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = function(bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    // encoder stuff
    var cb_utob = function(c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                                + fromCharCode(0x80 | (cc & 0x3f)))
                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                   + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                   + fromCharCode(0x80 | ( cc         & 0x3f)));
        } else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                    + fromCharCode(0x80 | ( cc         & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function(u) {
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function(ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
        ord = ccc.charCodeAt(0) << 16
            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
        chars = [
            b64chars.charAt( ord >>> 18),
            b64chars.charAt((ord >>> 12) & 63),
            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
        ];
        return chars.join('');
    };
    var btoa = global.btoa ? function(b) {
        return global.btoa(b);
    } : function(b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    var _encode = buffer ?
        buffer.from && Uint8Array && buffer.from !== Uint8Array.from
        ? function (u) {
            return (u.constructor === buffer.constructor ? u : buffer.from(u))
                .toString('base64')
        }
        :  function (u) {
            return (u.constructor === buffer.constructor ? u : new  buffer(u))
                .toString('base64')
        }
        : function (u) { return btoa(utob(u)) }
    ;
    var encode = function(u, urisafe) {
        return !urisafe
            ? _encode(String(u))
            : _encode(String(u)).replace(/[+\/]/g, function(m0) {
                return m0 == '+' ? '-' : '_';
            }).replace(/=/g, '');
    };
    var encodeURI = function(u) { return encode(u, true) };
    // decoder stuff
    var re_btou = new RegExp([
        '[\xC0-\xDF][\x80-\xBF]',
        '[\xE0-\xEF][\x80-\xBF]{2}',
        '[\xF0-\xF7][\x80-\xBF]{3}'
    ].join('|'), 'g');
    var cb_btou = function(cccc) {
        switch(cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                |    ((0x3f & cccc.charCodeAt(1)) << 12)
                |    ((0x3f & cccc.charCodeAt(2)) <<  6)
                |     (0x3f & cccc.charCodeAt(3)),
            offset = cp - 0x10000;
            return (fromCharCode((offset  >>> 10) + 0xD800)
                    + fromCharCode((offset & 0x3FF) + 0xDC00));
        case 3:
            return fromCharCode(
                ((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    |  (0x3f & cccc.charCodeAt(2))
            );
        default:
            return  fromCharCode(
                ((0x1f & cccc.charCodeAt(0)) << 6)
                    |  (0x3f & cccc.charCodeAt(1))
            );
        }
    };
    var btou = function(b) {
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function(cccc) {
        var len = cccc.length,
        padlen = len % 4,
        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
            | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
            | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
        chars = [
            fromCharCode( n >>> 16),
            fromCharCode((n >>>  8) & 0xff),
            fromCharCode( n         & 0xff)
        ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var atob = global.atob ? function(a) {
        return global.atob(a);
    } : function(a){
        return a.replace(/[\s\S]{1,4}/g, cb_decode);
    };
    var _decode = buffer ?
        buffer.from && Uint8Array && buffer.from !== Uint8Array.from
        ? function(a) {
            return (a.constructor === buffer.constructor
                    ? a : buffer.from(a, 'base64')).toString();
        }
        : function(a) {
            return (a.constructor === buffer.constructor
                    ? a : new buffer(a, 'base64')).toString();
        }
        : function(a) { return btou(atob(a)) };
    var decode = function(a){
        return _decode(
            String(a).replace(/[-_]/g, function(m0) { return m0 == '-' ? '+' : '/' })
                .replace(/[^A-Za-z0-9\+\/]/g, '')
        );
    };
    var noConflict = function() {
        var Base64 = global.Base64;
        global.Base64 = _Base64;
        return Base64;
    };
    // export Base64
    global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict,
        __buffer__: buffer
    };
    // if ES5 is available, make Base64.extendString() available
    if (typeof Object.defineProperty === 'function') {
        var noEnum = function(v){
            return {value:v,enumerable:false,writable:true,configurable:true};
        };
        global.Base64.extendString = function () {
            Object.defineProperty(
                String.prototype, 'fromBase64', noEnum(function () {
                    return decode(this)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64', noEnum(function (urisafe) {
                    return encode(this, urisafe)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64URI', noEnum(function () {
                    return encode(this, true)
                }));
        };
    }
    //
    // export Base64 to the namespace
    //
    if (global['Meteor']) { // Meteor.js
        Base64 = global.Base64;
    }
    // module.exports and AMD are mutually exclusive.
    // module.exports has precedence.
    if (typeof module !== 'undefined' && module.exports) {
        module.exports.Base64 = global.Base64;
    }
    else if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){ return global.Base64 }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    // that's it!
    return {Base64: global.Base64}
}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/api-client.js":
/*!***************************!*\
  !*** ./src/api-client.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApiClient; });
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/auth */ "./src/api/auth.js");
/* harmony import */ var _api_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/application */ "./src/api/application.js");
/* harmony import */ var _api_confd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/confd */ "./src/api/confd.js");
/* harmony import */ var _api_accessd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/accessd */ "./src/api/accessd.js");
/* harmony import */ var _api_ctid_ng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/ctid-ng */ "./src/api/ctid-ng.js");
/* harmony import */ var _api_dird__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/dird */ "./src/api/dird.js");
/* harmony import */ var _api_call_logd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/call-logd */ "./src/api/call-logd.js");
/* harmony import */ var _utils_api_requester__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/api-requester */ "./src/utils/api-requester.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var AUTH_VERSION = '0.1';
var APPLICATION_VERSION = '1.0';
var CONFD_VERSION = '1.1';
var ACCESSD_VERSION = '1.0';
var CTIDNG_VERSION = '1.0';
var DIRD_VERSION = '0.1';
var CALL_LOGD_VERSION = '1.0';

var ApiClient =
/*#__PURE__*/
function () {
  // @see https://github.com/facebook/flow/issues/183#issuecomment-358607052
  function ApiClient(_ref) {
    var server = _ref.server,
        _ref$agent = _ref.agent,
        agent = _ref$agent === void 0 ? null : _ref$agent;

    _classCallCheck(this, ApiClient);

    this.updatePatemers({
      server: server,
      agent: agent
    });
  }

  _createClass(ApiClient, [{
    key: "initializeEndpoints",
    value: function initializeEndpoints() {
      this.auth = Object(_api_auth__WEBPACK_IMPORTED_MODULE_0__["default"])(this.client, "auth/".concat(AUTH_VERSION));
      this.application = Object(_api_application__WEBPACK_IMPORTED_MODULE_1__["default"])(this.client, "ctid-ng/".concat(APPLICATION_VERSION, "/applications"));
      this.confd = Object(_api_confd__WEBPACK_IMPORTED_MODULE_2__["default"])(this.client, "confd/".concat(CONFD_VERSION));
      this.accessd = Object(_api_accessd__WEBPACK_IMPORTED_MODULE_3__["default"])(this.client, "accessd/".concat(ACCESSD_VERSION));
      this.ctidNg = Object(_api_ctid_ng__WEBPACK_IMPORTED_MODULE_4__["default"])(this.client, "ctid-ng/".concat(CTIDNG_VERSION));
      this.dird = Object(_api_dird__WEBPACK_IMPORTED_MODULE_5__["default"])(this.client, "dird/".concat(DIRD_VERSION));
      this.callLogd = Object(_api_call_logd__WEBPACK_IMPORTED_MODULE_6__["default"])(this.client, "call-logd/".concat(CALL_LOGD_VERSION));
    }
  }, {
    key: "updatePatemers",
    value: function updatePatemers(_ref2) {
      var server = _ref2.server,
          agent = _ref2.agent;
      this.client = new _utils_api_requester__WEBPACK_IMPORTED_MODULE_7__["default"]({
        server: server,
        agent: agent
      });
      this.initializeEndpoints();
    }
  }]);

  return ApiClient;
}();



/***/ }),

/***/ "./src/api/accessd.js":
/*!****************************!*\
  !*** ./src/api/accessd.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_api_requester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/api-requester */ "./src/utils/api-requester.js");

/* harmony default export */ __webpack_exports__["default"] = (function (client, baseUrl) {
  return {
    listSubscriptions: function listSubscriptions(token) {
      return client.get("".concat(baseUrl, "/subscriptions?recurse=true"), null, token);
    },
    createSubscription: function createSubscription(token, _ref) {
      var tenantUuid = _ref.tenantUuid,
          productSku = _ref.productSku,
          name = _ref.name,
          startDate = _ref.startDate,
          contractDate = _ref.contractDate,
          autoRenew = _ref.autoRenew,
          term = _ref.term;
      var body = {
        product_sku: productSku,
        name: name,
        start_date: startDate,
        contract_date: contractDate,
        auto_renew: autoRenew,
        term: term
      };
      var headers = {
        'X-Auth-Token': token
      };

      if (tenantUuid) {
        headers['Wazo-Tenant'] = tenantUuid;
      }

      return client.post("".concat(baseUrl, "/subscriptions"), body, headers);
    },
    getSubscription: function getSubscription(token, uuid) {
      return client.get("".concat(baseUrl, "/subscriptions/").concat(uuid), null, token);
    },
    listAuthorizations: function listAuthorizations(token, subscriptionUuid) {
      return client.get("".concat(baseUrl, "/subscriptions/").concat(subscriptionUuid, "/authorizations"), null, token);
    },
    getAuthorization: function getAuthorization(token, subscriptionUuid, uuid) {
      return client.get("".concat(baseUrl, "/subscriptions/").concat(subscriptionUuid, "/authorizations/").concat(uuid), null, token);
    },
    createAuthorization: function createAuthorization(token, subscriptionUuid, _ref2) {
      var startDate = _ref2.startDate,
          term = _ref2.term,
          service = _ref2.service,
          rules = _ref2.rules,
          autoRenew = _ref2.autoRenew;
      var url = "".concat(baseUrl, "/subscriptions/").concat(subscriptionUuid, "/authorizations");
      var body = {
        start_date: startDate,
        term: term,
        service: service,
        rules: rules,
        auto_renew: autoRenew
      };
      return client.post(url, body, token);
    }
  };
});

/***/ }),

/***/ "./src/api/application.js":
/*!********************************!*\
  !*** ./src/api/application.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_api_requester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/api-requester */ "./src/utils/api-requester.js");

/* harmony default export */ __webpack_exports__["default"] = (function (client, baseUrl) {
  return {
    answerCall: function answerCall(token, applicationUuid, callId, context, exten, autoanswer) {
      var url = "".concat(baseUrl, "/").concat(applicationUuid, "/nodes");
      var body = {
        calls: [{
          id: callId
        }]
      };
      return client.post(url, body, token, function (res) {
        return res.data.uuid;
      }).then(function (nodeUuid) {
        return client.post("".concat(url, "/").concat(nodeUuid, "/calls"), {
          context: context,
          exten: exten,
          autoanswer: autoanswer
        }, token).then(function (data) {
          return {
            nodeUuid: nodeUuid,
            data: data
          };
        });
      });
    },
    calls: function calls(token, applicationUuid) {
      return client.get("".concat(baseUrl, "/").concat(applicationUuid, "/calls"), null, token);
    },
    hangupCall: function hangupCall(token, applicationUuid, callId) {
      var url = "".concat(baseUrl, "/").concat(applicationUuid, "/calls/").concat(callId);
      return client.delete(url, null, token);
    },
    playCall: function playCall(token, applicationUuid, callId, language, uri) {
      return client.post("".concat(baseUrl, "/").concat(applicationUuid, "/calls/").concat(callId, "/play"), {
        language: language,
        uri: uri
      }, token);
    },
    addCallNodes: function addCallNodes(token, applicationUuid, nodeUuid, callId) {
      return client.put("".concat(baseUrl, "/").concat(applicationUuid, "/nodes/").concat(nodeUuid, "/calls/").concat(callId), null, token);
    },
    addNewCallNodes: function addNewCallNodes(token, applicationUuid, nodeUuid, context, exten, autoanswer) {
      var data = {
        context: context,
        exten: exten,
        autoanswer: autoanswer
      };
      return client.post("".concat(baseUrl, "/").concat(applicationUuid, "/nodes/").concat(nodeUuid, "/calls"), data, token);
    },
    listCallsNodes: function listCallsNodes(token, applicationUuid, nodeUuid) {
      return client.get("".concat(baseUrl, "/").concat(applicationUuid, "/nodes/").concat(nodeUuid), null, token);
    },
    listNodes: function listNodes(token, applicationUuid) {
      return client.get("".concat(baseUrl, "/").concat(applicationUuid, "/nodes"), null, token);
    },
    removeNode: function removeNode(token, applicationUuid, nodeUuid) {
      return client.delete("".concat(baseUrl, "/").concat(applicationUuid, "/nodes/").concat(nodeUuid), null, token);
    },
    removeCallNodes: function removeCallNodes(token, applicationUuid, nodeUuid, callId) {
      return client.delete("".concat(baseUrl, "/").concat(applicationUuid, "/nodes/").concat(nodeUuid, "/calls/").concat(callId), null, token);
    }
  };
});

/***/ }),

/***/ "./src/api/auth.js":
/*!*************************!*\
  !*** ./src/api/auth.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_api_requester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/api-requester */ "./src/utils/api-requester.js");
/* harmony import */ var _domain_Session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/Session */ "./src/domain/Session.js");


var DEFAULT_BACKEND_USER = 'wazo_user';
var DETAULT_EXPIRATION = 3600;
/* harmony default export */ __webpack_exports__["default"] = (function (client, baseUrl) {
  return {
    checkToken: function checkToken(token) {
      return client.head("".concat(baseUrl, "/token/").concat(token), null, {});
    },
    authenticate: function authenticate(token) {
      return client.get("".concat(baseUrl, "/token/").concat(token), null, {}).then(function (response) {
        return _domain_Session__WEBPACK_IMPORTED_MODULE_1__["default"].parse(response);
      });
    },
    logIn: function logIn(params) {
      var body = {
        backend: params.backend || DEFAULT_BACKEND_USER,
        expiration: params.expiration || DETAULT_EXPIRATION
      };
      var headers = {
        Authorization: "Basic ".concat(_utils_api_requester__WEBPACK_IMPORTED_MODULE_0__["default"].base64Encode("".concat(params.username, ":").concat(params.password))),
        'Content-Type': 'application/json'
      };
      return client.post("".concat(baseUrl, "/token"), body, headers).then(function (response) {
        return _domain_Session__WEBPACK_IMPORTED_MODULE_1__["default"].parse(response);
      });
    },
    logOut: function logOut(token) {
      return client.delete("".concat(baseUrl, "/token/").concat(token), null, {}, _utils_api_requester__WEBPACK_IMPORTED_MODULE_0__["default"].successResponseParser);
    },
    updatePassword: function updatePassword(token, userUuid, oldPassword, newPassword) {
      var body = {
        new_password: newPassword,
        old_password: oldPassword
      };
      return client.put("".concat(baseUrl, "/users/").concat(userUuid, "/password"), body, token, _utils_api_requester__WEBPACK_IMPORTED_MODULE_0__["default"].successResponseParser);
    },
    sendDeviceToken: function sendDeviceToken(token, userUuid, deviceToken) {
      var body = {
        token: deviceToken
      };
      return client.post("".concat(baseUrl, "/users/").concat(userUuid, "/external/mobile"), body, token);
    },
    removeDeviceToken: function removeDeviceToken(token, userUuid) {
      return client.delete("".concat(baseUrl, "/users/").concat(userUuid, "/external/mobile"), null, token);
    },
    getUser: function getUser(token, userUuid) {
      return client.get("".concat(baseUrl, "/users/").concat(userUuid), null, token);
    },
    listTenants: function listTenants(token) {
      return client.get("".concat(baseUrl, "/tenants"), null, token);
    },
    getTenant: function getTenant(token, tenantUuid) {
      return client.get("".concat(baseUrl, "/tenants/").concat(tenantUuid), null, token);
    },
    createTenant: function createTenant(token, name) {
      return client.post("".concat(baseUrl, "/tenants"), {
        name: name
      }, token);
    },
    deleteTenant: function deleteTenant(token, uuid) {
      return client.delete("".concat(baseUrl, "/tenants/").concat(uuid), null, token);
    },
    listUsers: function listUsers(token) {
      return client.get("".concat(baseUrl, "/users"), null, token);
    },
    listGroups: function listGroups(token) {
      return client.get("".concat(baseUrl, "/groups"), null, token);
    },
    listPolicies: function listPolicies(token) {
      return client.get("".concat(baseUrl, "/policies"), null, token);
    }
  };
});

/***/ }),

/***/ "./src/api/call-logd.js":
/*!******************************!*\
  !*** ./src/api/call-logd.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_api_requester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/api-requester */ "./src/utils/api-requester.js");
/* harmony import */ var _domain_CallLog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/CallLog */ "./src/domain/CallLog.js");


/* harmony default export */ __webpack_exports__["default"] = (function (client, baseUrl) {
  return {
    search: function search(token, _search) {
      var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
      return client.get("".concat(baseUrl, "/users/me/cdr"), {
        search: _search,
        limit: limit
      }, token).then(function (response) {
        return _domain_CallLog__WEBPACK_IMPORTED_MODULE_1__["default"].parseMany(response);
      });
    },
    listCallLogs: function listCallLogs(token, offset) {
      var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
      return client.get("".concat(baseUrl, "/users/me/cdr"), {
        offset: offset,
        limit: limit
      }, token).then(function (response) {
        return _domain_CallLog__WEBPACK_IMPORTED_MODULE_1__["default"].parseMany(response);
      });
    },
    listCallLogsFromDate: function listCallLogsFromDate(token, from, number) {
      return client.get("".concat(baseUrl, "/users/me/cdr"), {
        from: from.toISOString(),
        number: number
      }, token).then(function (response) {
        return _domain_CallLog__WEBPACK_IMPORTED_MODULE_1__["default"].parseMany(response);
      });
    }
  };
});

/***/ }),

/***/ "./src/api/confd.js":
/*!**************************!*\
  !*** ./src/api/confd.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_api_requester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/api-requester */ "./src/utils/api-requester.js");
/* harmony import */ var _domain_Profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/Profile */ "./src/domain/Profile.js");


/* harmony default export */ __webpack_exports__["default"] = (function (client, baseUrl) {
  return {
    listUsers: function listUsers(token) {
      return client.get("".concat(baseUrl, "/users"), null, token);
    },
    getUser: function getUser(token, userUuid) {
      return client.get("".concat(baseUrl, "/users/").concat(userUuid), null, token).then(function (response) {
        return _domain_Profile__WEBPACK_IMPORTED_MODULE_1__["default"].parse(response);
      });
    },
    updateUser: function updateUser(token, userUuid, profile) {
      var body = {
        firstname: profile.firstName,
        lastname: profile.lastName,
        email: profile.email,
        mobile_phone_number: profile.mobileNumber
      };
      return client.put("".concat(baseUrl, "/users/").concat(userUuid), body, token, _utils_api_requester__WEBPACK_IMPORTED_MODULE_0__["default"].successResponseParser);
    },
    updateForwardOption: function updateForwardOption(token, userUuid, key, destination, enabled) {
      var url = "".concat(baseUrl, "/users/").concat(userUuid, "/forwards/").concat(key);
      return client.put(url, {
        destination: destination,
        enabled: enabled
      }, token, _utils_api_requester__WEBPACK_IMPORTED_MODULE_0__["default"].successResponseParser);
    },
    updateDoNotDisturb: function updateDoNotDisturb(token, userUuid, enabled) {
      var url = "".concat(baseUrl, "/users/").concat(userUuid, "/services/dnd");
      return client.put(url, {
        enabled: enabled
      }, token, _utils_api_requester__WEBPACK_IMPORTED_MODULE_0__["default"].successResponseParser);
    },
    // @TODO: type response
    getUserLineSip: function getUserLineSip(token, userUuid, lineId) {
      return client.get("".concat(baseUrl, "/users/").concat(userUuid, "/lines/").concat(lineId, "/associated/endpoints/sip"), null, token);
    },
    listApplications: function listApplications(token) {
      var url = "".concat(baseUrl, "/applications?recurse=true");
      return client.get(url, null, token);
    },
    getSIP: function getSIP(token, userUuid, lineId) {
      return client.get("".concat(baseUrl, "/users/").concat(userUuid, "/lines/").concat(lineId, "/associated/endpoints/sip"), null, token);
    }
  };
});

/***/ }),

/***/ "./src/api/ctid-ng.js":
/*!****************************!*\
  !*** ./src/api/ctid-ng.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_api_requester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/api-requester */ "./src/utils/api-requester.js");
/* harmony import */ var _domain_ChatMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/ChatMessage */ "./src/domain/ChatMessage.js");
/* harmony import */ var _domain_Voicemail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/Voicemail */ "./src/domain/Voicemail.js");
/* harmony import */ var _domain_Call__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/Call */ "./src/domain/Call.js");




/* harmony default export */ __webpack_exports__["default"] = (function (client, baseUrl) {
  return {
    updatePresence: function updatePresence(token, presence) {
      return client.put("".concat(baseUrl, "/users/me/presences"), {
        presence: presence
      }, token, _utils_api_requester__WEBPACK_IMPORTED_MODULE_0__["default"].successResponseParser);
    },
    listMessages: function listMessages(token, participantUuid) {
      var body = participantUuid ? {
        participant_user_uuid: participantUuid
      } : null;
      return client.get("".concat(baseUrl, "/users/me/chats"), body, token).then(function (response) {
        return _domain_ChatMessage__WEBPACK_IMPORTED_MODULE_1__["default"].parseMany(response);
      });
    },
    sendMessage: function sendMessage(token, alias, msg, toUserId) {
      var body = {
        alias: alias,
        msg: msg,
        to: toUserId
      };
      return client.post("".concat(baseUrl, "/users/me/chats"), body, token);
    },
    makeCall: function makeCall(token, extension) {
      return client.post("".concat(baseUrl, "/users/me/calls"), {
        from_mobile: true,
        extension: extension
      }, token);
    },
    cancelCall: function cancelCall(token, callId) {
      return client.delete("".concat(baseUrl, "/users/me/calls/").concat(callId), null, token);
    },
    listCalls: function listCalls(token) {
      return client.get("".concat(baseUrl, "/users/me/calls"), null, token).then(function (response) {
        return _domain_Call__WEBPACK_IMPORTED_MODULE_3__["default"].parseMany(response.items);
      });
    },
    relocateCall: function relocateCall(token, callId, destination, lineId) {
      var body = {
        completions: ['answer'],
        destination: destination,
        initiator_call: callId
      };

      if (lineId) {
        body.location = {
          line_id: lineId
        };
      }

      return client.post("".concat(baseUrl, "/users/me/relocates"), body, token);
    },
    listVoicemails: function listVoicemails(token) {
      return client.get("".concat(baseUrl, "/users/me/voicemails"), null, token).then(function (response) {
        return _domain_Voicemail__WEBPACK_IMPORTED_MODULE_2__["default"].parseMany(response);
      });
    },
    deleteVoicemail: function deleteVoicemail(token, voicemailId) {
      return client.delete("".concat(baseUrl, "/users/me/voicemails/messages/").concat(voicemailId), null, token);
    },
    getPresence: function getPresence(token, contactUuid) {
      return client.get("".concat(baseUrl, "/users/").concat(contactUuid, "/presences"), null, token);
    },
    getStatus: function getStatus(token, lineUuid) {
      return client.get("".concat(baseUrl, "/lines/").concat(lineUuid, "/presences"), null, token);
    }
  };
});

/***/ }),

/***/ "./src/api/dird.js":
/*!*************************!*\
  !*** ./src/api/dird.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_api_requester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/api-requester */ "./src/utils/api-requester.js");
/* harmony import */ var _domain_Contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/Contact */ "./src/domain/Contact.js");



var getContactPayload = function getContactPayload(contact) {
  return {
    email: contact.email,
    firstname: contact.firstName ? contact.firstName : null,
    lastname: contact.lastName ? contact.lastName : null,
    number: contact.phoneNumber ? contact.phoneNumber : null,
    entreprise: contact.entreprise,
    birthday: contact.birthday,
    address: contact.address,
    note: contact.note
  };
};

/* harmony default export */ __webpack_exports__["default"] = (function (client, baseUrl) {
  return {
    search: function search(token, context, term) {
      return client.get("".concat(baseUrl, "/directories/lookup/").concat(context), {
        term: term
      }, token).then(function (response) {
        return _domain_Contact__WEBPACK_IMPORTED_MODULE_1__["default"].parseMany(response);
      });
    },
    listPersonalContacts: function listPersonalContacts(token) {
      return client.get("".concat(baseUrl, "/personal"), null, token).then(function (response) {
        return _domain_Contact__WEBPACK_IMPORTED_MODULE_1__["default"].parseManyPersonal(response.items);
      });
    },
    addContact: function addContact(token, contact) {
      return client.post("".concat(baseUrl, "/personal"), getContactPayload(contact), token).then(function (response) {
        return _domain_Contact__WEBPACK_IMPORTED_MODULE_1__["default"].parsePersonal(response);
      });
    },
    editContact: function editContact(token, contact) {
      return client.put("".concat(baseUrl, "/personal/").concat(contact.id || ''), getContactPayload(contact), token);
    },
    deleteContact: function deleteContact(token, contactUuid) {
      return client.delete("".concat(baseUrl, "/personal/").concat(contactUuid), null, token);
    },
    listFavorites: function listFavorites(token, context) {
      return client.get("".concat(baseUrl, "/directories/favorites/").concat(context), null, token).then(function (response) {
        return _domain_Contact__WEBPACK_IMPORTED_MODULE_1__["default"].parseMany(response);
      });
    },
    markAsFavorite: function markAsFavorite(token, source, sourceId) {
      var url = "".concat(baseUrl, "/directories/favorites/").concat(source, "/").concat(sourceId);
      return client.put(url, null, token, _utils_api_requester__WEBPACK_IMPORTED_MODULE_0__["default"].successResponseParser);
    },
    removeFavorite: function removeFavorite(token, source, sourceId) {
      return client.delete("".concat(baseUrl, "/directories/favorites/").concat(source, "/").concat(sourceId), null, token);
    }
  };
});

/***/ }),

/***/ "./src/domain/BadResponse.js":
/*!***********************************!*\
  !*** ./src/domain/BadResponse.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BadResponse; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BadResponse =
/*#__PURE__*/
function (_Error) {
  _inherits(BadResponse, _Error);

  _createClass(BadResponse, null, [{
    key: "fromResponse",
    value: function fromResponse(error, status) {
      return new BadResponse(error.message, status, error.timestamp, error.error_id, error.details);
    }
  }, {
    key: "fromText",
    value: function fromText(response, status) {
      return new BadResponse(response, status);
    }
  }]);

  function BadResponse(message, status) {
    var _this;

    var timestamp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var errorId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var details = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

    _classCallCheck(this, BadResponse);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BadResponse).call(this, message));
    _this.timestamp = timestamp;
    _this.status = status;
    _this.errorId = errorId;
    _this.details = details;
    return _this;
  }

  return BadResponse;
}(_wrapNativeSuper(Error));



/***/ }),

/***/ "./src/domain/Call.js":
/*!****************************!*\
  !*** ./src/domain/Call.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Call; });
/* harmony import */ var _utils_new_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/new-from */ "./src/utils/new-from.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Call =
/*#__PURE__*/
function () {
  _createClass(Call, null, [{
    key: "parseMany",
    value: function parseMany(plain) {
      return plain.map(function (plainCall) {
        return Call.parse(plainCall);
      });
    }
  }, {
    key: "parse",
    value: function parse(plain) {
      return new Call({
        id: +plain.call_id,
        calleeName: plain.peer_caller_id_name,
        calleeNumber: plain.peer_caller_id_number,
        status: plain.status,
        startingTime: new Date(plain.creation_time)
      });
    }
  }, {
    key: "newFrom",
    value: function newFrom(profile) {
      return Object(_utils_new_from__WEBPACK_IMPORTED_MODULE_0__["default"])(profile, Call);
    }
  }]);

  function Call() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        id = _ref.id,
        calleeName = _ref.calleeName,
        calleeNumber = _ref.calleeNumber,
        status = _ref.status,
        startingTime = _ref.startingTime;

    _classCallCheck(this, Call);

    this.id = id;
    this.calleeName = calleeName;
    this.calleeNumber = calleeNumber;
    this.status = status;
    this.startingTime = startingTime;
  }

  _createClass(Call, [{
    key: "separateCalleeName",
    value: function separateCalleeName() {
      var names = this.calleeName.split(' ');
      var firstName = names[0];
      var lastName = names.slice(1).join(' ');
      return {
        firstName: firstName,
        lastName: lastName
      };
    }
  }, {
    key: "is",
    value: function is(other) {
      return this.id === other.id;
    }
  }, {
    key: "hasACalleeName",
    value: function hasACalleeName() {
      return this.calleeName.length > 0;
    }
  }, {
    key: "isUp",
    value: function isUp() {
      return this.status === 'Up';
    }
  }, {
    key: "isDown",
    value: function isDown() {
      return this.status === 'Down';
    }
  }, {
    key: "isRingingIncoming",
    value: function isRingingIncoming() {
      return this.status === 'Ringing';
    }
  }, {
    key: "isRingingOutgoing",
    value: function isRingingOutgoing() {
      return this.status === 'Ring';
    }
  }, {
    key: "isFromTransfer",
    value: function isFromTransfer() {
      return this.status === 'Down' || this.status === 'Ringing';
    }
  }]);

  return Call;
}();



/***/ }),

/***/ "./src/domain/CallLog.js":
/*!*******************************!*\
  !*** ./src/domain/CallLog.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CallLog; });
/* harmony import */ var _Session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Session */ "./src/domain/Session.js");
/* harmony import */ var _utils_new_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/new-from */ "./src/utils/new-from.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var CallLog =
/*#__PURE__*/
function () {
  _createClass(CallLog, null, [{
    key: "merge",
    value: function merge(current, toMerge) {
      var onlyUnique = function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      };

      var allLogs = current.concat(toMerge);
      var onlyUniqueIds = allLogs.map(function (c) {
        return c.id;
      }).filter(onlyUnique);
      return onlyUniqueIds.map(function (id) {
        return allLogs.find(function (log) {
          return log.id === id;
        });
      });
    }
  }, {
    key: "parseMany",
    value: function parseMany(plain) {
      return plain.items.map(function (item) {
        return CallLog.parse(item);
      });
    }
  }, {
    key: "parse",
    value: function parse(plain) {
      return new CallLog({
        answer: new Date(plain.answer),
        answered: plain.answered,
        callDirection: plain.call_direction,
        destination: {
          extension: plain.destination_extension,
          name: plain.destination_name || ''
        },
        source: {
          extension: plain.source_extension,
          name: plain.source_name
        },
        id: plain.id,
        duration: (plain.duration || 0) * 1000,
        // duration is in seconds
        start: new Date(plain.start),
        end: new Date(plain.end)
      });
    }
  }, {
    key: "parseNew",
    value: function parseNew(plain, session) {
      return new CallLog({
        answer: new Date(plain.answer),
        answered: plain.answered,
        callDirection: plain.call_direction,
        destination: {
          extension: plain.destination_extension,
          name: plain.destination_name || ''
        },
        source: {
          extension: plain.source_extension,
          name: plain.source_name
        },
        id: plain.id,
        duration: (plain.duration || 0) * 1000,
        // duration is in seconds
        start: new Date(plain.start),
        end: new Date(plain.end),
        // @TODO: FIXME add verification declined vs missed call
        newMissedCall: plain.destination_extension === session.primaryNumber() && !plain.answered
      });
    }
  }, {
    key: "newFrom",
    value: function newFrom(profile) {
      return Object(_utils_new_from__WEBPACK_IMPORTED_MODULE_1__["default"])(profile, CallLog);
    }
  }]);

  function CallLog() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        answer = _ref.answer,
        answered = _ref.answered,
        callDirection = _ref.callDirection,
        destination = _ref.destination,
        source = _ref.source,
        id = _ref.id,
        duration = _ref.duration,
        start = _ref.start,
        end = _ref.end;

    _classCallCheck(this, CallLog);

    this.answer = answer;
    this.answered = answered;
    this.callDirection = callDirection;
    this.destination = destination;
    this.source = source;
    this.id = id;
    this.duration = duration;
    this.start = start;
    this.end = end;
  }

  _createClass(CallLog, [{
    key: "isFromSameParty",
    value: function isFromSameParty(other, session) {
      return this.theOtherParty(session).extension === other.theOtherParty(session).extension;
    }
  }, {
    key: "theOtherParty",
    value: function theOtherParty(session) {
      if (this.source.extension === session.primaryNumber()) {
        return this.destination;
      }

      return this.source;
    }
  }, {
    key: "isNewMissedCall",
    value: function isNewMissedCall() {
      return this.newMissedCall;
    }
  }, {
    key: "acknowledgeCall",
    value: function acknowledgeCall() {
      this.newMissedCall = false;
      return this;
    }
  }, {
    key: "isAcknowledged",
    value: function isAcknowledged() {
      return this.newMissedCall;
    }
  }, {
    key: "isAnOutgoingCall",
    value: function isAnOutgoingCall(session) {
      return this.source.extension === session.primaryNumber() && this.answered;
    }
  }, {
    key: "isAMissedOutgoingCall",
    value: function isAMissedOutgoingCall(session) {
      return this.source.extension === session.primaryNumber() && !this.answered;
    }
  }, {
    key: "isAnIncomingCall",
    value: function isAnIncomingCall(session) {
      return this.destination.extension === session.primaryNumber() && this.answered;
    }
  }, {
    key: "isADeclinedCall",
    value: function isADeclinedCall(session) {
      return this.destination.extension === session.primaryNumber() && !this.answered;
    }
  }]);

  return CallLog;
}();



/***/ }),

/***/ "./src/domain/ChatMessage.js":
/*!***********************************!*\
  !*** ./src/domain/ChatMessage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatMessage; });
/* harmony import */ var _utils_new_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/new-from */ "./src/utils/new-from.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var uuid = function uuid() {
  var s4 = function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };

  return "".concat(s4()).concat(s4(), "-").concat(s4(), "-").concat(s4(), "-").concat(s4(), "-").concat(s4()).concat(s4()).concat(s4());
};

var ChatMessage =
/*#__PURE__*/
function () {
  _createClass(ChatMessage, null, [{
    key: "parseMany",
    value: function parseMany(plain) {
      return plain.items.map(function (item) {
        return ChatMessage.parse(item);
      });
    }
  }, {
    key: "parse",
    value: function parse(plain) {
      return new ChatMessage({
        id: uuid(),
        date: new Date(plain.date),
        message: plain.msg,
        direction: plain.direction,
        destination: {
          serverId: plain.destination_server_uuid,
          userId: plain.destination_user_uuid
        },
        source: {
          serverId: plain.source_server_uuid,
          userId: plain.source_user_uuid
        },
        read: true
      });
    }
  }, {
    key: "parseMessageSent",
    value: function parseMessageSent(plain) {
      return new ChatMessage({
        id: uuid(),
        date: new Date(),
        message: plain.msg,
        direction: 'sent',
        destination: {
          serverId: plain.to[0],
          userId: plain.to[1]
        },
        source: {
          serverId: plain.from[0],
          userId: plain.from[1]
        },
        read: true
      });
    }
  }, {
    key: "parseMessageReceived",
    value: function parseMessageReceived(plain) {
      return new ChatMessage({
        id: uuid(),
        date: new Date(),
        message: plain.msg,
        direction: 'received',
        destination: {
          serverId: plain.to[0],
          userId: plain.to[1]
        },
        source: {
          serverId: plain.from[0],
          userId: plain.from[1]
        },
        read: false
      });
    }
  }, {
    key: "newFrom",
    value: function newFrom(profile) {
      return Object(_utils_new_from__WEBPACK_IMPORTED_MODULE_0__["default"])(profile, ChatMessage);
    }
  }]);

  function ChatMessage() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        id = _ref.id,
        date = _ref.date,
        message = _ref.message,
        direction = _ref.direction,
        destination = _ref.destination,
        source = _ref.source,
        _ref$read = _ref.read,
        read = _ref$read === void 0 ? true : _ref$read;

    _classCallCheck(this, ChatMessage);

    this.id = id;
    this.date = date;
    this.message = message;
    this.direction = direction;
    this.destination = destination;
    this.source = source;
    this.read = read;
  }

  _createClass(ChatMessage, [{
    key: "is",
    value: function is(other) {
      return this.id === other.id;
    }
  }, {
    key: "isIncoming",
    value: function isIncoming() {
      return this.direction === 'received';
    }
  }, {
    key: "acknowledge",
    value: function acknowledge() {
      this.read = true;
      return this;
    }
  }, {
    key: "getTheOtherParty",
    value: function getTheOtherParty() {
      if (this.direction === 'sent') {
        return this.destination.userId;
      }

      return this.source.userId;
    }
  }]);

  return ChatMessage;
}();



/***/ }),

/***/ "./src/domain/Contact.js":
/*!*******************************!*\
  !*** ./src/domain/Contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var _Session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Session */ "./src/domain/Session.js");
/* harmony import */ var _utils_new_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/new-from */ "./src/utils/new-from.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Contact =
/*#__PURE__*/
function () {
  _createClass(Contact, null, [{
    key: "merge",
    value: function merge(oldContacts, newContacts) {
      return newContacts.map(function (current) {
        var old = oldContacts.find(function (contact) {
          return contact.is(current);
        });
        return typeof old !== 'undefined' ? current.merge(old) : current;
      });
    }
  }, {
    key: "parseMany",
    value: function parseMany(response) {
      return response.results.map(function (r) {
        return Contact.parse(r, response.column_types);
      });
    }
  }, {
    key: "parse",
    value: function parse(plain, columns) {
      return new Contact({
        name: plain.column_values[columns.indexOf('name')],
        number: plain.column_values[columns.indexOf('number')] || '',
        favorited: plain.column_values[columns.indexOf('favorite')],
        email: plain.column_values[columns.indexOf('email')] || '',
        entreprise: plain.column_values[columns.indexOf('entreprise')] || '',
        birthday: plain.column_values[columns.indexOf('birthday')] || '',
        address: plain.column_values[columns.indexOf('address')] || '',
        note: plain.column_values[columns.indexOf('note')] || '',
        endpointId: plain.relations.endpoint_id,
        personal: plain.column_values[columns.indexOf('personal')],
        source: plain.source,
        sourceId: plain.relations.source_entry_id,
        uuid: plain.relations.user_uuid
      });
    }
  }, {
    key: "parseManyPersonal",
    value: function parseManyPersonal(results) {
      return results.map(function (r) {
        return Contact.parsePersonal(r);
      });
    }
  }, {
    key: "parsePersonal",
    value: function parsePersonal(plain) {
      return new Contact({
        name: "".concat(plain.firstName || plain.firstname || '', " ").concat(plain.lastName || plain.lastname || ''),
        number: plain.number || '',
        email: plain.email || '',
        source: 'personal',
        sourceId: plain.id,
        entreprise: plain.entreprise || '',
        birthday: plain.birthday || '',
        address: plain.address || '',
        note: plain.note || '',
        favorited: false,
        personal: true
      });
    }
  }, {
    key: "newFrom",
    value: function newFrom(profile) {
      return Object(_utils_new_from__WEBPACK_IMPORTED_MODULE_1__["default"])(profile, Contact);
    }
  }]);

  function Contact() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        id = _ref.id,
        uuid = _ref.uuid,
        name = _ref.name,
        number = _ref.number,
        email = _ref.email,
        source = _ref.source,
        sourceId = _ref.sourceId,
        entreprise = _ref.entreprise,
        birthday = _ref.birthday,
        address = _ref.address,
        note = _ref.note,
        presence = _ref.presence,
        status = _ref.status,
        endpointId = _ref.endpointId,
        personal = _ref.personal;

    _classCallCheck(this, Contact);

    this.id = id;
    this.uuid = uuid;
    this.name = name;
    this.number = number;
    this.email = email;
    this.source = source;
    this.sourceId = sourceId || '';
    this.entreprise = entreprise;
    this.birthday = birthday;
    this.address = address;
    this.note = note;
    this.presence = presence;
    this.status = status;
    this.endpointId = endpointId;
    this.personal = personal;
  }

  _createClass(Contact, [{
    key: "setFavorite",
    value: function setFavorite(value) {
      this.favorited = value;
      return this;
    }
  }, {
    key: "is",
    value: function is(other) {
      return Boolean(other) && this.sourceId === other.sourceId && (this.uuid ? this.uuid === other.uuid : true);
    }
  }, {
    key: "hasId",
    value: function hasId(id) {
      return this.uuid === id;
    }
  }, {
    key: "hasNumber",
    value: function hasNumber(number) {
      return this.number === number;
    }
  }, {
    key: "hasEndpointId",
    value: function hasEndpointId(endpointId) {
      return this.endpointId === endpointId;
    }
  }, {
    key: "isAvailable",
    value: function isAvailable() {
      return this.presence === 'available';
    }
  }, {
    key: "isDoNotDisturb",
    value: function isDoNotDisturb() {
      return this.presence === 'donotdisturb';
    }
  }, {
    key: "isDisconnected",
    value: function isDisconnected() {
      return this.presence === 'disconnected';
    }
  }, {
    key: "merge",
    value: function merge(old) {
      this.presence = old.presence;
      this.status = old.status;
      return this;
    }
  }, {
    key: "isIntern",
    value: function isIntern() {
      return !!this.uuid;
    }
  }, {
    key: "isCallable",
    value: function isCallable(session) {
      return !!this.number && !!session && !session.is(this);
    }
  }, {
    key: "separateName",
    value: function separateName() {
      if (!this.name) {
        return {
          firstName: '',
          lastName: ''
        };
      }

      var names = this.name.split(' ');
      var firstName = names[0];
      var lastName = names.slice(1).join(' ');
      return {
        firstName: firstName,
        lastName: lastName
      };
    }
  }]);

  return Contact;
}();



/***/ }),

/***/ "./src/domain/Country.js":
/*!*******************************!*\
  !*** ./src/domain/Country.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  BELGIUM: 'BE',
  CANADA: 'CA',
  FRANCE: 'FR',
  GERMANY: 'DE',
  ITALY: 'IT',
  PORTUGAL: 'PT',
  SPAIN: 'ES',
  SWITZERLAND: 'CH',
  UNITED_KINGDOM: 'GB',
  UNITED_STATES: 'US'
});

/***/ }),

/***/ "./src/domain/Device/DebugDevice.js":
/*!******************************************!*\
  !*** ./src/domain/Device/DebugDevice.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DebugDevice; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable */
var DebugDevice =
/*#__PURE__*/
function () {
  function DebugDevice() {
    _classCallCheck(this, DebugDevice);
  }

  _createClass(DebugDevice, [{
    key: "connectToCall",
    value: function connectToCall() {
      console.info('DebugDevice - Connected to call');
    }
  }, {
    key: "disconnectFromCall",
    value: function disconnectFromCall() {
      console.info('DebugDevice - Disconnected from call');
    }
  }, {
    key: "ringback",
    value: function ringback() {
      console.info('DebugDevice - Ringback');
    }
  }, {
    key: "stopRingback",
    value: function stopRingback() {
      console.info('DebugDevice - Stop ringback');
    }
  }, {
    key: "playRingtone",
    value: function playRingtone() {
      console.info('DebugDevice - Play ringtone');
    }
  }, {
    key: "stopRingtone",
    value: function stopRingtone() {
      console.info('DebugDevice - Stop ringtone');
    }
  }, {
    key: "mute",
    value: function mute() {
      console.info('DebugDevice - Mute');
    }
  }, {
    key: "unmute",
    value: function unmute() {
      console.info('DebugDevice - Unmute');
    }
  }, {
    key: "putOnSpeaker",
    value: function putOnSpeaker() {
      console.info('DebugDevice - Put on speaker');
    }
  }, {
    key: "putOffSpeaker",
    value: function putOffSpeaker() {
      console.info('DebugDevice - Put off speaker');
    }
  }]);

  return DebugDevice;
}();



/***/ }),

/***/ "./src/domain/ForwardOption.js":
/*!*************************************!*\
  !*** ./src/domain/ForwardOption.js ***!
  \*************************************/
/*! exports provided: FORWARD_KEYS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORWARD_KEYS", function() { return FORWARD_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ForwardOption; });
/* harmony import */ var _utils_new_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/new-from */ "./src/utils/new-from.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var FORWARD_KEYS = {
  BUSY: 'busy',
  NO_ANSWER: 'noanswer',
  UNCONDITIONAL: 'unconditional'
};

var ForwardOption =
/*#__PURE__*/
function () {
  _createClass(ForwardOption, null, [{
    key: "parse",
    value: function parse(plain, key) {
      return new ForwardOption({
        destination: plain.destination || '',
        enabled: plain.enabled,
        key: key
      });
    }
  }, {
    key: "newFrom",
    value: function newFrom(profile) {
      return Object(_utils_new_from__WEBPACK_IMPORTED_MODULE_0__["default"])(profile, ForwardOption);
    }
  }]);

  function ForwardOption() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        destination = _ref.destination,
        enabled = _ref.enabled,
        key = _ref.key;

    _classCallCheck(this, ForwardOption);

    this.destination = destination;
    this.enabled = enabled;
    this.key = key;
  }

  _createClass(ForwardOption, [{
    key: "setDestination",
    value: function setDestination(number) {
      this.destination = number;
      return this;
    }
  }, {
    key: "is",
    value: function is(other) {
      return this.key === other.key;
    }
  }]);

  return ForwardOption;
}();



/***/ }),

/***/ "./src/domain/Line.js":
/*!****************************!*\
  !*** ./src/domain/Line.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Line; });
/* harmony import */ var _utils_new_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/new-from */ "./src/utils/new-from.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Line =
/*#__PURE__*/
function () {
  _createClass(Line, null, [{
    key: "parse",
    value: function parse(plain) {
      return new Line({
        id: plain.id,
        extensions: plain.extensions
      });
    }
  }, {
    key: "newFrom",
    value: function newFrom(profile) {
      return Object(_utils_new_from__WEBPACK_IMPORTED_MODULE_0__["default"])(profile, Line);
    }
  }]);

  function Line() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        id = _ref.id,
        extensions = _ref.extensions;

    _classCallCheck(this, Line);

    this.id = id;
    this.extensions = extensions;
  }

  return Line;
}();



/***/ }),

/***/ "./src/domain/NotificationOptions.js":
/*!*******************************************!*\
  !*** ./src/domain/NotificationOptions.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotificationOptions; });
/* harmony import */ var _utils_new_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/new-from */ "./src/utils/new-from.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var NotificationOptions =
/*#__PURE__*/
function () {
  _createClass(NotificationOptions, null, [{
    key: "parse",
    value: function parse(plain) {
      if (!plain) {
        return new NotificationOptions({
          sound: true,
          vibration: true
        });
      }

      return new NotificationOptions({
        sound: plain.sound,
        vibration: plain.vibration
      });
    }
  }, {
    key: "newFrom",
    value: function newFrom(profile) {
      return Object(_utils_new_from__WEBPACK_IMPORTED_MODULE_0__["default"])(profile, NotificationOptions);
    }
  }]);

  function NotificationOptions() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$sound = _ref.sound,
        sound = _ref$sound === void 0 ? true : _ref$sound,
        _ref$vibration = _ref.vibration,
        vibration = _ref$vibration === void 0 ? true : _ref$vibration;

    _classCallCheck(this, NotificationOptions);

    this.sound = sound;
    this.vibration = vibration;
  }

  _createClass(NotificationOptions, [{
    key: "setSound",
    value: function setSound(sound) {
      this.sound = sound;
      return this;
    }
  }, {
    key: "setVibration",
    value: function setVibration(vibration) {
      this.vibration = vibration;
      return this;
    }
  }, {
    key: "enable",
    value: function enable() {
      this.vibration = true;
      this.sound = true;
      return this;
    }
  }, {
    key: "disable",
    value: function disable() {
      this.vibration = false;
      this.sound = false;
      return this;
    }
  }, {
    key: "isEnabled",
    value: function isEnabled() {
      return this.sound || this.vibration;
    }
  }]);

  return NotificationOptions;
}();



/***/ }),

/***/ "./src/domain/Phone/DebugPhone.js":
/*!****************************************!*\
  !*** ./src/domain/Phone/DebugPhone.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DebugPhone; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable */
var DebugPhone =
/*#__PURE__*/
function () {
  function DebugPhone() {
    _classCallCheck(this, DebugPhone);
  }

  _createClass(DebugPhone, [{
    key: "makeCall",
    value: function makeCall(number) {
      console.info('DebugPhone - calling: ${number}');
    }
  }, {
    key: "acceptCall",
    value: function acceptCall() {
      console.info('DebugPhone - Accept call');
    }
  }, {
    key: "mute",
    value: function mute() {
      console.info('DebugPhone - Mute phone');
    }
  }, {
    key: "unmute",
    value: function unmute() {
      console.info('DebugPhone - Unmute phone');
    }
  }, {
    key: "hold",
    value: function hold() {
      console.info('DebugPhone - Put on hold');
    }
  }, {
    key: "unhold",
    value: function unhold() {
      console.info('DebugPhone - Put on unhold');
    }
  }, {
    key: "transfer",
    value: function transfer(target) {
      console.info("DebugPhone - Transferring to ".concat(target));
    }
  }, {
    key: "sendKey",
    value: function sendKey(key) {
      console.info('DebugPhone - sending: ${key}');
    }
  }, {
    key: "putOnSpeaker",
    value: function putOnSpeaker() {
      console.info('DebugPhone - Put on speaker');
    }
  }, {
    key: "putOffSpeaker",
    value: function putOffSpeaker() {
      console.info('DebugPhone - Put off speaker');
    }
  }, {
    key: "endCall",
    value: function endCall() {
      console.info('DebugPhone - Hang up');
    }
  }, {
    key: "onConnectionMade",
    value: function onConnectionMade() {
      console.info('DebugPhone - Connection made');
    }
  }, {
    key: "close",
    value: function close() {
      console.info('DebugPhone - Close');
    }
  }]);

  return DebugPhone;
}();



/***/ }),

/***/ "./src/domain/Profile.js":
/*!*******************************!*\
  !*** ./src/domain/Profile.js ***!
  \*******************************/
/*! exports provided: PRESENCE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRESENCE", function() { return PRESENCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Line */ "./src/domain/Line.js");
/* harmony import */ var _ForwardOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForwardOption */ "./src/domain/ForwardOption.js");
/* harmony import */ var _utils_new_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/new-from */ "./src/utils/new-from.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var PRESENCE = {
  AVAILABLE: 'available',
  DO_NOT_DISTURB: 'donotdisturb',
  DISCONNECTED: 'disconnected'
};

var Profile =
/*#__PURE__*/
function () {
  _createClass(Profile, null, [{
    key: "parse",
    value: function parse(plain) {
      return new Profile({
        id: plain.uuid,
        firstName: plain.firstName,
        lastName: plain.lastName,
        email: plain.email,
        lines: plain.lines.map(function (line) {
          return _Line__WEBPACK_IMPORTED_MODULE_0__["default"].parse(line);
        }),
        username: plain.username,
        mobileNumber: plain.mobile_phone_number || '',
        forwards: [_ForwardOption__WEBPACK_IMPORTED_MODULE_1__["default"].parse(plain.forwards.unconditional, _ForwardOption__WEBPACK_IMPORTED_MODULE_1__["FORWARD_KEYS"].UNCONDITIONAL), _ForwardOption__WEBPACK_IMPORTED_MODULE_1__["default"].parse(plain.forwards.noanswer, _ForwardOption__WEBPACK_IMPORTED_MODULE_1__["FORWARD_KEYS"].NO_ANSWER), _ForwardOption__WEBPACK_IMPORTED_MODULE_1__["default"].parse(plain.forwards.busy, _ForwardOption__WEBPACK_IMPORTED_MODULE_1__["FORWARD_KEYS"].BUSY)],
        doNotDisturb: plain.services.dnd.enabled
      });
    }
  }, {
    key: "newFrom",
    value: function newFrom(profile) {
      return Object(_utils_new_from__WEBPACK_IMPORTED_MODULE_2__["default"])(profile, Profile);
    }
  }]);

  function Profile() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        id = _ref.id,
        firstName = _ref.firstName,
        lastName = _ref.lastName,
        email = _ref.email,
        lines = _ref.lines,
        username = _ref.username,
        mobileNumber = _ref.mobileNumber,
        forwards = _ref.forwards,
        doNotDisturb = _ref.doNotDisturb,
        presence = _ref.presence;

    _classCallCheck(this, Profile);

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.lines = lines;
    this.username = username;
    this.mobileNumber = mobileNumber;
    this.forwards = forwards;
    this.doNotDisturb = doNotDisturb;
    this.presence = presence;
  }

  _createClass(Profile, [{
    key: "hasId",
    value: function hasId(id) {
      return id === this.id;
    }
  }, {
    key: "setMobileNumber",
    value: function setMobileNumber(number) {
      this.mobileNumber = number;
      return this;
    }
  }, {
    key: "setForwardOption",
    value: function setForwardOption(forwardOption) {
      var updatedForwardOptions = this.forwards.slice();
      var index = updatedForwardOptions.findIndex(function (forward) {
        return forward.is(forwardOption);
      });
      updatedForwardOptions.splice(index, 1, forwardOption);
      this.forwards = updatedForwardOptions;
      return this;
    }
  }, {
    key: "setDoNotDisturb",
    value: function setDoNotDisturb(enabled) {
      this.doNotDisturb = enabled;
      return this;
    }
  }, {
    key: "setPresence",
    value: function setPresence(presence) {
      this.presence = presence;
      return this;
    }
  }]);

  return Profile;
}();



/***/ }),

/***/ "./src/domain/ServerError.js":
/*!***********************************!*\
  !*** ./src/domain/ServerError.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServerError; });
/* harmony import */ var _BadResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BadResponse */ "./src/domain/BadResponse.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ServerError =
/*#__PURE__*/
function (_BadResponse) {
  _inherits(ServerError, _BadResponse);

  function ServerError() {
    _classCallCheck(this, ServerError);

    return _possibleConstructorReturn(this, _getPrototypeOf(ServerError).apply(this, arguments));
  }

  _createClass(ServerError, null, [{
    key: "fromResponse",
    value: function fromResponse(error, status) {
      return new ServerError(error.message, status, error.timestamp, error.error_id, error.details);
    }
  }, {
    key: "fromText",
    value: function fromText(response, status) {
      return new ServerError(response, status);
    }
  }]);

  return ServerError;
}(_BadResponse__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/domain/Session.js":
/*!*******************************!*\
  !*** ./src/domain/Session.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Session; });
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile */ "./src/domain/Profile.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact */ "./src/domain/Contact.js");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Line */ "./src/domain/Line.js");
/* harmony import */ var _utils_new_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/new-from */ "./src/utils/new-from.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Session =
/*#__PURE__*/
function () {
  _createClass(Session, null, [{
    key: "parse",
    value: function parse(plain) {
      return new Session({
        token: plain.data.token,
        uuid: plain.data.xivo_user_uuid
      });
    }
  }, {
    key: "newFrom",
    value: function newFrom(profile) {
      return Object(_utils_new_from__WEBPACK_IMPORTED_MODULE_3__["default"])(profile, Session);
    }
  }]);

  function Session() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        token = _ref.token,
        uuid = _ref.uuid,
        profile = _ref.profile;

    _classCallCheck(this, Session);

    this.token = token;
    this.uuid = uuid;
    this.profile = profile;
  }

  _createClass(Session, [{
    key: "is",
    value: function is(contact) {
      return Boolean(contact) && this.uuid === contact.uuid;
    }
  }, {
    key: "using",
    value: function using(profile) {
      this.profile = profile;
      return this;
    }
  }, {
    key: "displayName",
    value: function displayName() {
      return this.profile ? "".concat(this.profile.firstName, " ").concat(this.profile.lastName) : '';
    }
  }, {
    key: "primaryLine",
    value: function primaryLine() {
      return this.profile ? this.profile.lines[0] : null;
    }
  }, {
    key: "primaryContext",
    value: function primaryContext() {
      var line = this.primaryLine();
      return line ? line.extensions[0].context : null;
    }
  }, {
    key: "primaryNumber",
    value: function primaryNumber() {
      var line = this.primaryLine();
      return line ? line.extensions[0].exten : null;
    }
  }]);

  return Session;
}();



/***/ }),

/***/ "./src/domain/Voicemail.js":
/*!*********************************!*\
  !*** ./src/domain/Voicemail.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Voicemail; });
/* harmony import */ var _utils_new_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/new-from */ "./src/utils/new-from.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Voicemail =
/*#__PURE__*/
function () {
  _createClass(Voicemail, null, [{
    key: "parse",
    value: function parse(plain) {
      return new Voicemail({
        id: plain.id,
        date: new Date(plain.timestamp),
        duration: plain.duration * 1000,
        caller: {
          name: plain.caller_id_name,
          number: plain.caller_id_num
        },
        unread: plain.folder ? plain.folder.type === 'new' : null
      });
    }
  }, {
    key: "parseMany",
    value: function parseMany(plain) {
      var plainUnread = plain.folders.filter(function (folder) {
        return folder.type === 'new';
      })[0].messages;
      var plainRead = plain.folders.filter(function (folder) {
        return folder.type === 'old';
      })[0].messages;
      var unread = plainUnread.map(function (message) {
        return Voicemail.parse(message);
      }).map(function (voicemail) {
        return voicemail.makeAsUnRead();
      });
      var read = plainRead.map(function (message) {
        return Voicemail.parse(message);
      }).map(function (voicemail) {
        return voicemail.acknowledge();
      });
      return _toConsumableArray(unread).concat(_toConsumableArray(read));
    }
  }, {
    key: "newFrom",
    value: function newFrom(profile) {
      return Object(_utils_new_from__WEBPACK_IMPORTED_MODULE_0__["default"])(profile, Voicemail);
    }
  }]);

  function Voicemail() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        id = _ref.id,
        date = _ref.date,
        duration = _ref.duration,
        caller = _ref.caller;

    _classCallCheck(this, Voicemail);

    this.id = id;
    this.date = date;
    this.duration = duration;
    this.caller = caller;
  }

  _createClass(Voicemail, [{
    key: "is",
    value: function is(other) {
      return other && this.id === other.id;
    }
  }, {
    key: "acknowledge",
    value: function acknowledge() {
      this.unread = false;
      return this;
    }
  }, {
    key: "makeAsUnRead",
    value: function makeAsUnRead() {
      this.unread = true;
      return this;
    }
  }, {
    key: "contains",
    value: function contains(query) {
      if (!query) {
        return true;
      }

      return this.caller.name.toUpperCase().includes(query.toUpperCase()) || this.caller.number.includes(query);
    }
  }]);

  return Voicemail;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-client */ "./src/api-client.js");
/* harmony import */ var _web_rtc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-rtc-client */ "./src/web-rtc-client.js");
/* harmony import */ var _websocket_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./websocket-client */ "./src/websocket-client.js");
/* harmony import */ var _domain_BadResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domain/BadResponse */ "./src/domain/BadResponse.js");
/* harmony import */ var _domain_ServerError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domain/ServerError */ "./src/domain/ServerError.js");
/* harmony import */ var _domain_Call__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domain/Call */ "./src/domain/Call.js");
/* harmony import */ var _domain_CallLog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domain/CallLog */ "./src/domain/CallLog.js");
/* harmony import */ var _domain_ChatMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domain/ChatMessage */ "./src/domain/ChatMessage.js");
/* harmony import */ var _domain_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./domain/Contact */ "./src/domain/Contact.js");
/* harmony import */ var _domain_Country__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./domain/Country */ "./src/domain/Country.js");
/* harmony import */ var _domain_ForwardOption__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./domain/ForwardOption */ "./src/domain/ForwardOption.js");
/* harmony import */ var _domain_Line__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./domain/Line */ "./src/domain/Line.js");
/* harmony import */ var _domain_NotificationOptions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./domain/NotificationOptions */ "./src/domain/NotificationOptions.js");
/* harmony import */ var _domain_Profile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./domain/Profile */ "./src/domain/Profile.js");
/* harmony import */ var _domain_Session__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./domain/Session */ "./src/domain/Session.js");
/* harmony import */ var _domain_Voicemail__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./domain/Voicemail */ "./src/domain/Voicemail.js");
/* harmony import */ var _domain_Phone_DebugPhone__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./domain/Phone/DebugPhone */ "./src/domain/Phone/DebugPhone.js");
/* harmony import */ var _domain_Device_DebugDevice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./domain/Device/DebugDevice */ "./src/domain/Device/DebugDevice.js");


 // Domain
















/* harmony default export */ __webpack_exports__["default"] = ({
  WazoApiClient: _api_client__WEBPACK_IMPORTED_MODULE_0__["default"],
  WazoWebRTCClient: _web_rtc_client__WEBPACK_IMPORTED_MODULE_1__["default"],
  WazoWebSocketClient: _websocket_client__WEBPACK_IMPORTED_MODULE_2__["default"],
  BadResponse: _domain_BadResponse__WEBPACK_IMPORTED_MODULE_3__["default"],
  ServerError: _domain_ServerError__WEBPACK_IMPORTED_MODULE_4__["default"],
  Call: _domain_Call__WEBPACK_IMPORTED_MODULE_5__["default"],
  CallLog: _domain_CallLog__WEBPACK_IMPORTED_MODULE_6__["default"],
  ChatMessage: _domain_ChatMessage__WEBPACK_IMPORTED_MODULE_7__["default"],
  Contact: _domain_Contact__WEBPACK_IMPORTED_MODULE_8__["default"],
  COUNTRIES: _domain_Country__WEBPACK_IMPORTED_MODULE_9__["default"],
  ForwardOption: _domain_ForwardOption__WEBPACK_IMPORTED_MODULE_10__["default"],
  Line: _domain_Line__WEBPACK_IMPORTED_MODULE_11__["default"],
  NotificationOptions: _domain_NotificationOptions__WEBPACK_IMPORTED_MODULE_12__["default"],
  Profile: _domain_Profile__WEBPACK_IMPORTED_MODULE_13__["default"],
  Session: _domain_Session__WEBPACK_IMPORTED_MODULE_14__["default"],
  Voicemail: _domain_Voicemail__WEBPACK_IMPORTED_MODULE_15__["default"],
  DebugPhone: _domain_Phone_DebugPhone__WEBPACK_IMPORTED_MODULE_16__["default"],
  DebugDevice: _domain_Device_DebugDevice__WEBPACK_IMPORTED_MODULE_17__["default"],
  PRESENCE: _domain_Profile__WEBPACK_IMPORTED_MODULE_13__["PRESENCE"],
  FORWARD_KEYS: _domain_ForwardOption__WEBPACK_IMPORTED_MODULE_10__["FORWARD_KEYS"]
});

/***/ }),

/***/ "./src/utils/CallbacksHandler.js":
/*!***************************************!*\
  !*** ./src/utils/CallbacksHandler.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CallbacksHandler; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CallbacksHandler =
/*#__PURE__*/
function () {
  function CallbacksHandler() {
    _classCallCheck(this, CallbacksHandler);

    this.callbacks = {};
  }

  _createClass(CallbacksHandler, [{
    key: "on",
    value: function on(event, callback) {
      this.callbacks[event] = callback;
    } // trigger callback registered with .on('name', ...)

  }, {
    key: "triggerCallback",
    value: function triggerCallback(eventName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Add event name at last argument, so we can know the event name if we do on('*', ...)
      args.push(eventName);

      if (this.callbacks['*']) {
        this.callbacks['*'].apply(undefined, args);
      }

      if (!(eventName in this.callbacks)) {
        return null;
      }

      return this.callbacks[eventName].apply(undefined, args);
    }
  }]);

  return CallbacksHandler;
}();



/***/ }),

/***/ "./src/utils/api-requester.js":
/*!************************************!*\
  !*** ./src/utils/api-requester.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApiRequester; });
/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cross-fetch/polyfill */ "./node_modules/cross-fetch/dist/browser-polyfill.js");
/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domain_BadResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/BadResponse */ "./src/domain/BadResponse.js");
/* harmony import */ var _domain_ServerError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/ServerError */ "./src/domain/ServerError.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger */ "./src/utils/logger.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* global fetch, btoa */
// $FlowFixMe: can't find `cross-fetch/polyfill`.





var methods = ['head', 'get', 'post', 'put', 'delete'];

var ApiRequester =
/*#__PURE__*/
function () {
  _createClass(ApiRequester, null, [{
    key: "successResponseParser",
    // eslint-disable-next-line
    value: function successResponseParser(response, isJson) {
      return response.status === 204;
    }
  }, {
    key: "defaultParser",
    value: function defaultParser(response) {
      return response.json().then(function (data) {
        return data;
      });
    }
  }, {
    key: "getHeaders",
    value: function getHeaders(header) {
      if (header instanceof Object) {
        return header;
      }

      return {
        'X-Auth-Token': header,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      };
    }
  }, {
    key: "getQueryString",
    value: function getQueryString(obj) {
      return Object.keys(obj).filter(function (key) {
        return obj[key];
      }).map(function (key) {
        return "".concat(key, "=").concat(encodeURIComponent(obj[key]));
      }).join('&');
    }
  }, {
    key: "base64Encode",
    value: function base64Encode(str) {
      return typeof btoa !== 'undefined' ? btoa(str) : js_base64__WEBPACK_IMPORTED_MODULE_1__["Base64"].encode(str);
    } // @see https://github.com/facebook/flow/issues/183#issuecomment-358607052

  }]);

  function ApiRequester(_ref) {
    var server = _ref.server,
        _ref$agent = _ref.agent,
        agent = _ref$agent === void 0 ? null : _ref$agent;

    _classCallCheck(this, ApiRequester);

    this.server = server;
    this.agent = agent;
    methods.forEach(function (method) {
      // $FlowFixMe
      ApiRequester.prototype[method] = function sugar() {
        var _this$call;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        // Add method in arguments passed to `call`
        args.splice(1, 0, method);
        return (_this$call = this.call).call.apply(_this$call, [this].concat(args));
      };
    });
  }

  _createClass(ApiRequester, [{
    key: "call",
    value: function call(path) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
      var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var parse = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ApiRequester.defaultParser;
      var url = this.computeUrl(method, path, body);
      var newBody = body && method !== 'get' ? JSON.stringify(body) : null;
      var isHead = method === 'head';
      var hasEmptyResponse = method === 'delete' || isHead;
      var newParse = hasEmptyResponse ? ApiRequester.successResponseParser : parse;
      var options = {
        method: method,
        body: newBody,
        headers: headers ? ApiRequester.getHeaders(headers) : {},
        agent: this.agent
      };
      return fetch(url, options).then(function (response) {
        var contentType = response.headers.get('content-type') || '';
        var isJson = contentType.indexOf('application/json') !== -1;
        _logger__WEBPACK_IMPORTED_MODULE_4__["default"].logRequest(url, options, response); // Throw an error only if status >= 500

        if (isHead && response.status >= 500 || !isHead && response.status >= 400) {
          var promise = isJson ? response.json() : response.text();
          var exceptionClass = response.status >= 500 ? _domain_ServerError__WEBPACK_IMPORTED_MODULE_3__["default"] : _domain_BadResponse__WEBPACK_IMPORTED_MODULE_2__["default"];
          return promise.then(function (err) {
            throw typeof err === 'string' ? exceptionClass.fromText(err, response.status) : exceptionClass.fromResponse(err, response.status);
          });
        }

        return newParse(response, isJson);
      });
    }
  }, {
    key: "computeUrl",
    value: function computeUrl(method, path, body) {
      var url = "".concat(this.baseUrl, "/").concat(path);
      return method === 'get' && body && Object.keys(body).length ? "".concat(url, "?").concat(ApiRequester.getQueryString(body)) : url;
    }
  }, {
    key: "baseUrl",
    get: function get() {
      return "https://".concat(this.server, "/api");
    }
  }]);

  return ApiRequester;
}();



/***/ }),

/***/ "./src/utils/logger.js":
/*!*****************************!*\
  !*** ./src/utils/logger.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logger; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Logger =
/*#__PURE__*/
function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, null, [{
    key: "hasDebug",
    value: function hasDebug() {
      return typeof process !== 'undefined' && (+"undefined" === 1 || "undefined" === 'true');
    }
  }, {
    key: "logRequest",
    value: function logRequest(url, _ref, response) {
      var method = _ref.method,
          body = _ref.body,
          headers = _ref.headers;

      if (!Logger.hasDebug()) {
        return;
      }

      var status = response.status;
      var curl = "".concat(status, " - curl ").concat(method !== 'get' ? "-X ".concat(method.toUpperCase()) : '');
      Object.keys(headers).forEach(function (headerName) {
        curl += " -H '".concat(headerName, ": ").concat(headers[headerName], "'");
      });
      curl += " ".concat(url);

      if (body) {
        curl += " -d '".concat(body, "'");
      }

      console.info(curl);
    }
  }]);

  return Logger;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/utils/new-from.js":
/*!*******************************!*\
  !*** ./src/utils/new-from.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (instance, ToClass) {
  var args = {};
  Object.getOwnPropertyNames(instance).forEach(function (prop) {
    args[prop] = instance[prop];
  });
  return new ToClass(args);
});

/***/ }),

/***/ "./src/web-rtc-client.js":
/*!*******************************!*\
  !*** ./src/web-rtc-client.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebRTCClient; });
/* harmony import */ var sip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sip.js */ "sip.js");
/* harmony import */ var sip_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sip_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_CallbacksHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/CallbacksHandler */ "./src/utils/CallbacksHandler.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable class-methods-use-this */

/* global window */


var states = ['STATUS_NULL', 'STATUS_NEW', 'STATUS_CONNECTING', 'STATUS_CONNECTED', 'STATUS_COMPLETED'];
var events = ['connected', 'disconnected', 'registered', 'unregistered', 'registrationFailed', 'invite', 'inviteSent', 'transportCreated', 'newTransaction', 'transactionDestroyed', 'notify', 'outOfDialogReferRequested', 'message'];

// @see https://github.com/onsip/SIP.js/blob/master/src/Web/Simple.js
var WebRTCClient =
/*#__PURE__*/
function () {
  _createClass(WebRTCClient, null, [{
    key: "isAPrivateIp",
    value: function isAPrivateIp(ip) {
      var regex = /^(?:10|127|172\.(?:1[6-9]|2[0-9]|3[01])|192\.168)\..*/;
      return regex.exec(ip) == null;
    }
  }, {
    key: "getIceServers",
    value: function getIceServers(ip) {
      if (WebRTCClient.isAPrivateIp(ip)) {
        return [{
          urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302', 'stun:stun3.l.google.com:19302', 'stun:stun4.l.google.com:19302']
        }];
      }

      return [];
    }
  }]);

  function WebRTCClient(config) {
    _classCallCheck(this, WebRTCClient);

    this.config = config;
    this.callbacksHandler = new _utils_CallbacksHandler__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.configureMedia(config.media);
    this.userAgent = this.createUserAgent();
  }

  _createClass(WebRTCClient, [{
    key: "configureMedia",
    value: function configureMedia(media) {
      this.audio = media.audio;
      this.video = media.video;
      this.localVideo = media.localVideo;
    }
  }, {
    key: "createUserAgent",
    value: function createUserAgent() {
      var _this = this;

      var webRTCConfiguration = this._createWebRTCConfiguration();

      var userAgent = new sip_js__WEBPACK_IMPORTED_MODULE_0___default.a.UA(webRTCConfiguration);
      events.filter(function (eventName) {
        return eventName !== 'invite';
      }).forEach(function (eventName) {
        userAgent.on(eventName, function (event) {
          _this.callbacksHandler.triggerCallback(eventName, event);
        });
      }); // Particular case for `invite` event

      userAgent.on('invite', function (session) {
        _this._setupSession(session);

        _this.callbacksHandler.triggerCallback('invite', session);
      });
      return userAgent;
    }
  }, {
    key: "on",
    value: function on(event, callback) {
      this.callbacksHandler.on(event, callback);
    }
  }, {
    key: "call",
    value: function call(number) {
      // Safari hack, because you cannot call .play() from a non user action
      if (this.audio && this._isWeb()) {
        this.audio.autoplay = true;
      }

      if (this.video && this._isWeb()) {
        this.video.autoplay = true;
      }

      if (this.localVideo && this._isWeb()) {
        this.localVideo.autoplay = true;
        this.localVideo.volume = 0;
      }

      return this.userAgent.invite(number, this._getMediaConfiguration());
    }
  }, {
    key: "answer",
    value: function answer(session) {
      // Safari hack, because you cannot call .play() from a non user action
      if (this.audio && this._isWeb()) {
        this.audio.autoplay = true;
      }

      if (this.video && this._isWeb()) {
        this.video.autoplay = true;
      }

      session.accept(this._getMediaConfiguration());
    }
  }, {
    key: "hangup",
    value: function hangup(session) {
      if (session.hasAnswer && session.bye) {
        session.bye();
        return;
      }

      if (!session.hasAnswer && session.cancel) {
        session.cancel();
        return;
      }

      if (session.reject) {
        session.reject();
      }
    }
  }, {
    key: "reject",
    value: function reject(session) {
      return session.reject();
    }
  }, {
    key: "mute",
    value: function mute(session) {
      this._toggleMute(session, true);
    }
  }, {
    key: "unmute",
    value: function unmute(session) {
      this._toggleMute(session, false);
    }
  }, {
    key: "hold",
    value: function hold(session) {
      this.mute(session);
      return session.hold();
    }
  }, {
    key: "unhold",
    value: function unhold(session) {
      this.unmute(session);
      return session.unhold();
    }
  }, {
    key: "sendDTMF",
    value: function sendDTMF(session, tone) {
      session.dtmf(tone);
    }
  }, {
    key: "message",
    value: function message(destination, _message) {
      this.userAgent.message(destination, _message);
    }
  }, {
    key: "transfert",
    value: function transfert(session, target) {
      var _this2 = this;

      this.hold(session);
      setTimeout(function () {
        session.refer(target);

        _this2.hangup(session);
      }, 50);
    }
  }, {
    key: "getState",
    value: function getState() {
      return states[this.userAgent.state];
    }
  }, {
    key: "close",
    value: function close() {
      this._cleanupMedia();

      this.userAgent.transport.disconnect();
      this.userAgent.stop();
    }
  }, {
    key: "_isWeb",
    value: function _isWeb() {
      return _typeof(this.audio) === 'object' || _typeof(this.video) === 'object';
    }
  }, {
    key: "_hasAudio",
    value: function _hasAudio() {
      return !!this.audio;
    }
  }, {
    key: "_hasVideo",
    value: function _hasVideo() {
      return !!this.video;
    }
  }, {
    key: "_hasLocalVideo",
    value: function _hasLocalVideo() {
      return !!this.localVideo;
    }
  }, {
    key: "_createWebRTCConfiguration",
    value: function _createWebRTCConfiguration() {
      return {
        authorizationUser: this.config.authorizationUser,
        displayName: this.config.displayName,
        hackIpInContact: true,
        hackWssInTransport: true,
        log: {
          builtinEnabled: false
        },
        password: this.config.password,
        uri: "".concat(this.config.authorizationUser, "@").concat(this.config.host),
        transportOptions: {
          traceSip: false,
          wsServers: "wss://".concat(this.config.host, ":").concat(this.config.port || 443, "/api/asterisk/ws")
        },
        sessionDescriptionHandlerFactoryOptions: {
          peerConnectionOptions: {
            iceCheckingTimeout: 500,
            constraints: {
              audio: true,
              video: false
            },
            rtcConfiguration: {
              iceServers: WebRTCClient.getIceServers(this.config.host),
              mandatory: {
                OfferToReceiveAudio: true,
                OfferToReceiveVideo: false
              }
            }
          }
        }
      };
    }
  }, {
    key: "_getMediaConfiguration",
    value: function _getMediaConfiguration() {
      return {
        sessionDescriptionHandlerOptions: {
          constraints: {
            audio: this._hasAudio(),
            video: this._hasVideo()
          },
          RTCOfferOptions: {
            mandatory: {
              OfferToReceiveAudio: this._hasAudio(),
              OfferToReceiveVideo: this._hasVideo()
            }
          }
        }
      };
    }
  }, {
    key: "_setupSession",
    value: function _setupSession(session) {
      var _this3 = this;

      session.on('accepted', function () {
        return _this3._onAccepted(session);
      });
    }
  }, {
    key: "_onAccepted",
    value: function _onAccepted(session) {
      var _this4 = this;

      this._setupLocalMedia(session);

      this._setupRemoteMedia(session);

      session.sessionDescriptionHandler.on('addTrack', function () {
        _this4._setupRemoteMedia(session);
      });
      session.sessionDescriptionHandler.on('addStream', function () {
        _this4._setupRemoteMedia(session);
      });
    }
  }, {
    key: "_setupRemoteMedia",
    value: function _setupRemoteMedia(session) {
      // If there is a video track, it will attach the video and audio to the same element
      var pc = session.sessionDescriptionHandler.peerConnection;
      var remoteStream;

      if (pc.getReceivers) {
        remoteStream = typeof global !== 'undefined' ? new global.window.MediaStream() : window.MediaStream();
        pc.getReceivers().forEach(function (receiver) {
          var track = receiver.track;

          if (track) {
            remoteStream.addTrack(track);
          }
        });
      } else {
        var _pc$getRemoteStreams = pc.getRemoteStreams();

        var _pc$getRemoteStreams2 = _slicedToArray(_pc$getRemoteStreams, 1);

        remoteStream = _pc$getRemoteStreams2[0];
      }

      if (this._hasVideo()) {
        this.video.srcObject = remoteStream;
        this.video.play();
      } else if (this._hasAudio()) {
        this.audio.srcObject = remoteStream;
        this.audio.play();
      }
    }
  }, {
    key: "_setupLocalMedia",
    value: function _setupLocalMedia(session) {
      if (this.localVideo) {
        var pc = session.sessionDescriptionHandler.peerConnection;
        var localStream;

        if (pc.getSenders) {
          localStream = typeof global !== 'undefined' ? new global.window.MediaStream() : window.MediaStream();
          pc.getSenders().forEach(function (sender) {
            var track = sender.track;

            if (track && track.kind === 'video') {
              localStream.addTrack(track);
            }
          });
        } else {
          var _pc$getLocalStreams = pc.getLocalStreams();

          var _pc$getLocalStreams2 = _slicedToArray(_pc$getLocalStreams, 1);

          localStream = _pc$getLocalStreams2[0];
        }

        this.localVideo.srcObject = localStream;
        this.localVideo.volume = 0;
        this.localVideo.play();
      }
    }
  }, {
    key: "_cleanupMedia",
    value: function _cleanupMedia() {
      if (this.video && this._isWeb()) {
        this.video.srcObject = null;
        this.video.pause();

        if (this.localVideo) {
          this.localVideo.srcObject = null;
          this.localVideo.pause();
        }
      }

      if (this.audio && this._isWeb()) {
        this.audio.srcObject = null;
        this.audio.pause();
      }
    }
  }, {
    key: "_toggleMute",
    value: function _toggleMute(session, mute) {
      var pc = session.sessionDescriptionHandler.peerConnection;

      if (pc.getSenders) {
        pc.getSenders().forEach(function (sender) {
          if (sender.track) {
            // eslint-disable-next-line
            sender.track.enabled = !mute;
          }
        });
      } else {
        pc.getLocalStreams().forEach(function (stream) {
          stream.getAudioTracks().forEach(function (track) {
            // eslint-disable-next-line
            track.enabled = !mute;
          });
          stream.getVideoTracks().forEach(function (track) {
            // eslint-disable-next-line
            track.enabled = !mute;
          });
        });
      }
    }
  }]);

  return WebRTCClient;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/websocket-client.js":
/*!*********************************!*\
  !*** ./src/websocket-client.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebSocketClient; });
/* harmony import */ var reconnecting_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reconnecting-websocket */ "reconnecting-websocket");
/* harmony import */ var reconnecting_websocket__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reconnecting_websocket__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_CallbacksHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/CallbacksHandler */ "./src/utils/CallbacksHandler.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var WebSocketClient =
/*#__PURE__*/
function () {
  /**
   *
   * @param host
   * @param token
   * @param events
   * @param options @see https://github.com/pladaria/reconnecting-websocket#available-options
   */
  function WebSocketClient(_ref) {
    var host = _ref.host,
        token = _ref.token,
        _ref$events = _ref.events,
        events = _ref$events === void 0 ? [] : _ref$events;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, WebSocketClient);

    this.initialized = false;
    this.callbacksHandler = new _utils_CallbacksHandler__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.socket = null;
    this.host = host;
    this.token = token;
    this.events = events;
    this.options = options;
  }

  _createClass(WebSocketClient, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      this.socket = new reconnecting_websocket__WEBPACK_IMPORTED_MODULE_0___default.a("wss://".concat(this.host, "/api/websocketd/?token=").concat(this.token), [], this.options);

      if (this.options.binaryType) {
        this.socket.binaryType = this.options.binaryType;
      }

      this.socket.onmessage = function (event) {
        var message = JSON.parse(typeof event.data === 'string' ? event.data : '{}');

        if (!_this.initialized) {
          _this.handleMessage(message, _this.socket);
        } else {
          _this.callbacksHandler.triggerCallback(message.name, message);
        }
      };

      this.socket.onclose = function (e) {
        switch (e.code) {
          case 4002:
            break;

          case 4003:
            break;

          default:
        }
      };
    }
  }, {
    key: "close",
    value: function close() {
      if (!this.socket) {
        return;
      }

      this.socket.close();
    }
  }, {
    key: "on",
    value: function on(event, callback) {
      this.callbacksHandler.on(event, callback);
    }
  }, {
    key: "handleMessage",
    value: function handleMessage(message, sock) {
      switch (message.op) {
        case 'init':
          this.events.forEach(function (event) {
            var op = {
              op: 'subscribe',
              data: {
                event_name: event
              }
            };
            sock.send(JSON.stringify(op));
          });
          sock.send(JSON.stringify({
            op: 'start'
          }));
          break;

        case 'subscribe':
          break;

        case 'start':
          this.initialized = true;
          break;

        default:
          this.callbacksHandler.triggerCallback('message', message);
      }
    }
  }]);

  return WebSocketClient;
}();



/***/ }),

/***/ "reconnecting-websocket":
/*!****************************************!*\
  !*** external "ReconnectingWebSocket" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_reconnecting_websocket__;

/***/ }),

/***/ "sip.js":
/*!**********************!*\
  !*** external "SIP" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_sip_js__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=wazo-sdk.js.map