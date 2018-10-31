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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src-graphql */ \"./src-graphql/index.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-validator */ \"express-validator\");\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_validator__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst host = process.env.HOST || '0.0.0.0';\nconst port = process.env.PORT || 3001;\napp.set('port', port); // to support JSON-encoded bodies and URL-encoded bodies\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json({\n  limit: '50mb',\n  extended: true\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n  limit: '50mb',\n  extended: true\n})); // add express validator middleware\n\napp.use(express_validator__WEBPACK_IMPORTED_MODULE_3___default()());\n_src_graphql__WEBPACK_IMPORTED_MODULE_1__[\"default\"].applyMiddleware({\n  app\n}); // Listen the server\n\napp.listen(port, host);\nconsole.log(`Server listening on http://localhost:${port}`); // eslint-disable-line no-console\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaW5kZXguanM/MGE4YiJdLCJuYW1lcyI6WyJhcHAiLCJleHByZXNzIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJIT1NUIiwicG9ydCIsIlBPUlQiLCJzZXQiLCJ1c2UiLCJib2R5UGFyc2VyIiwianNvbiIsImxpbWl0IiwiZXh0ZW5kZWQiLCJ1cmxlbmNvZGVkIiwiZXhwcmVzc1ZhbGlkYXRvciIsImdyYXBocWwiLCJhcHBseU1pZGRsZXdhcmUiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxNQUFNQyw4Q0FBT0EsRUFBbkI7QUFDQSxNQUFNQyxPQUFPQyxRQUFRQyxHQUFSLENBQVlDLElBQVosSUFBb0IsU0FBakM7QUFDQSxNQUFNQyxPQUFPSCxRQUFRQyxHQUFSLENBQVlHLElBQVosSUFBb0IsSUFBakM7QUFFQVAsSUFBSVEsR0FBSixDQUFRLE1BQVIsRUFBZ0JGLElBQWhCLEUsQ0FFQTs7QUFFQU4sSUFBSVMsR0FBSixDQUFRQyxrREFBVUEsQ0FBQ0MsSUFBWCxDQUFnQjtBQUN0QkMsU0FBTyxNQURlO0FBRXRCQyxZQUFVO0FBRlksQ0FBaEIsQ0FBUjtBQUlBYixJQUFJUyxHQUFKLENBQVFDLGtEQUFVQSxDQUFDSSxVQUFYLENBQXNCO0FBQzVCRixTQUFPLE1BRHFCO0FBRTVCQyxZQUFVO0FBRmtCLENBQXRCLENBQVIsRSxDQUlBOztBQUNBYixJQUFJUyxHQUFKLENBQVFNLHdEQUFnQkEsRUFBeEI7QUFDQUMsb0RBQU9BLENBQUNDLGVBQVIsQ0FBd0I7QUFBRWpCO0FBQUYsQ0FBeEIsRSxDQUNBOztBQUNBQSxJQUFJa0IsTUFBSixDQUFXWixJQUFYLEVBQWlCSixJQUFqQjtBQUNBaUIsUUFBUUMsR0FBUixDQUFhLHdDQUF1Q2QsSUFBSyxFQUF6RCxFLENBQTREIiwiZmlsZSI6Ii4vc2VydmVyL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuXHJcbmltcG9ydCBncmFwaHFsIGZyb20gJy4uL3NyYy1ncmFwaHFsJ1xyXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcclxuaW1wb3J0IGV4cHJlc3NWYWxpZGF0b3IgZnJvbSAnZXhwcmVzcy12YWxpZGF0b3InXHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKClcclxuY29uc3QgaG9zdCA9IHByb2Nlc3MuZW52LkhPU1QgfHwgJzAuMC4wLjAnXHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDFcclxuXHJcbmFwcC5zZXQoJ3BvcnQnLCBwb3J0KVxyXG5cclxuLy8gdG8gc3VwcG9ydCBKU09OLWVuY29kZWQgYm9kaWVzIGFuZCBVUkwtZW5jb2RlZCBib2RpZXNcclxuXHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKHtcclxuICBsaW1pdDogJzUwbWInLFxyXG4gIGV4dGVuZGVkOiB0cnVlXHJcbn0pKVxyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XHJcbiAgbGltaXQ6ICc1MG1iJyxcclxuICBleHRlbmRlZDogdHJ1ZVxyXG59KSlcclxuLy8gYWRkIGV4cHJlc3MgdmFsaWRhdG9yIG1pZGRsZXdhcmVcclxuYXBwLnVzZShleHByZXNzVmFsaWRhdG9yKCkpXHJcbmdyYXBocWwuYXBwbHlNaWRkbGV3YXJlKHsgYXBwIH0pXHJcbi8vIExpc3RlbiB0aGUgc2VydmVyXHJcbmFwcC5saXN0ZW4ocG9ydCwgaG9zdClcclxuY29uc29sZS5sb2coYFNlcnZlciBsaXN0ZW5pbmcgb24gaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9YCkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./server/index.js\n");

/***/ }),

/***/ "./src-graphql/index.js":
/*!******************************!*\
  !*** ./src-graphql/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolvers */ \"./src-graphql/resolvers/index.js\");\n/* harmony import */ var _typeDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeDefs */ \"./src-graphql/typeDefs/index.js\");\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_2__[\"ApolloServer\"]({\n  typeDefs: _typeDefs__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  formatError: error => {\n    console.error(error);\n    return new Error('Internal server error');\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (server);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMtZ3JhcGhxbC9pbmRleC5qcz83NTkyIl0sIm5hbWVzIjpbInNlcnZlciIsIkFwb2xsb1NlcnZlciIsInR5cGVEZWZzIiwicmVzb2x2ZXJzIiwiZm9ybWF0RXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsSUFBSUMsa0VBQUosQ0FBaUI7QUFDOUJDLDZEQUQ4QjtBQUU5QkMsK0RBRjhCO0FBRzlCQyxlQUFhQyxTQUFTO0FBQ3BCQyxZQUFRRCxLQUFSLENBQWNBLEtBQWQ7QUFDQSxXQUFPLElBQUlFLEtBQUosQ0FBVSx1QkFBVixDQUFQO0FBQ0Q7QUFONkIsQ0FBakIsQ0FBZjtBQVNlUCxxRUFBZiIsImZpbGUiOiIuL3NyYy1ncmFwaHFsL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlc29sdmVycyBmcm9tICcuL3Jlc29sdmVycydcclxuaW1wb3J0IHR5cGVEZWZzIGZyb20gJy4vdHlwZURlZnMnXHJcbmltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcydcclxuXHJcbmNvbnN0IHNlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xyXG4gIHR5cGVEZWZzLFxyXG4gIHJlc29sdmVycyxcclxuICBmb3JtYXRFcnJvcjogZXJyb3IgPT4ge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludGVybmFsIHNlcnZlciBlcnJvcicpXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlcnZlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src-graphql/index.js\n");

/***/ }),

/***/ "./src-graphql/resolvers/index.js":
/*!****************************************!*\
  !*** ./src-graphql/resolvers/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge-graphql-schemas */ \"merge-graphql-schemas\");\n/* harmony import */ var merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _message_resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.resolvers */ \"./src-graphql/resolvers/message.resolvers.js\");\n\n\nconst resolvers = [_message_resolvers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_0__[\"mergeResolvers\"])(resolvers));\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMtZ3JhcGhxbC9yZXNvbHZlcnMvaW5kZXguanM/NDMzOSJdLCJuYW1lcyI6WyJyZXNvbHZlcnMiLCJtZXNzYWdlUmVzb2x2ZXIiLCJtZXJnZVJlc29sdmVycyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTUEsWUFBWSxDQUNoQkMsMERBRGdCLENBQWxCO0FBSWVDLDJJQUFjQSxDQUFDRixTQUFmLENBQWYiLCJmaWxlIjoiLi9zcmMtZ3JhcGhxbC9yZXNvbHZlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZXJnZVJlc29sdmVycyB9IGZyb20gJ21lcmdlLWdyYXBocWwtc2NoZW1hcydcclxuaW1wb3J0IG1lc3NhZ2VSZXNvbHZlciBmcm9tICcuL21lc3NhZ2UucmVzb2x2ZXJzJ1xyXG5cclxuY29uc3QgcmVzb2x2ZXJzID0gW1xyXG4gIG1lc3NhZ2VSZXNvbHZlcixcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VSZXNvbHZlcnMocmVzb2x2ZXJzKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src-graphql/resolvers/index.js\n");

/***/ }),

/***/ "./src-graphql/resolvers/message.resolvers.js":
/*!****************************************************!*\
  !*** ./src-graphql/resolvers/message.resolvers.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Query: {\n    getMessage: root => {\n      // should check args\n      return {\n        message: 'Graphql request success!'\n      };\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMtZ3JhcGhxbC9yZXNvbHZlcnMvbWVzc2FnZS5yZXNvbHZlcnMuanM/NDkzZCJdLCJuYW1lcyI6WyJRdWVyeSIsImdldE1lc3NhZ2UiLCJyb290IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZTtBQUNiQSxTQUFPO0FBQ0xDLGdCQUFhQyxJQUFELElBQVU7QUFDcEI7QUFDQSxhQUFPO0FBQUNDLGlCQUFTO0FBQVYsT0FBUDtBQUNEO0FBSkk7QUFETSxDQUFmIiwiZmlsZSI6Ii4vc3JjLWdyYXBocWwvcmVzb2x2ZXJzL21lc3NhZ2UucmVzb2x2ZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIFF1ZXJ5OiB7XHJcbiAgICBnZXRNZXNzYWdlOiAocm9vdCkgPT4ge1xyXG4gICAgICAvLyBzaG91bGQgY2hlY2sgYXJnc1xyXG4gICAgICByZXR1cm4ge21lc3NhZ2U6ICdHcmFwaHFsIHJlcXVlc3Qgc3VjY2VzcyEnfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src-graphql/resolvers/message.resolvers.js\n");

/***/ }),

/***/ "./src-graphql/typeDefs/index.js":
/*!***************************************!*\
  !*** ./src-graphql/typeDefs/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge-graphql-schemas */ \"merge-graphql-schemas\");\n/* harmony import */ var merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _message_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.graphql */ \"./src-graphql/typeDefs/message.graphql\");\n/* harmony import */ var _message_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_message_graphql__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst types = [_message_graphql__WEBPACK_IMPORTED_MODULE_1___default.a]; // NOTE: 2nd param is optional, and defaults to false\n// Only use if you have defined the same type multiple times in\n// different files and wish to attempt merging them together.\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_0__[\"mergeTypes\"])(types, {\n  all: true\n}));\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMtZ3JhcGhxbC90eXBlRGVmcy9pbmRleC5qcz9iNDhjIl0sIm5hbWVzIjpbInR5cGVzIiwibWVzc2FnZSIsIm1lcmdlVHlwZXMiLCJhbGwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTUEsUUFBUSxDQUNaQyx1REFEWSxDQUFkLEMsQ0FJQTtBQUNBO0FBQ0E7O0FBQ2VDLHVJQUFVQSxDQUFDRixLQUFYLEVBQWtCO0FBQUVHLE9BQUs7QUFBUCxDQUFsQixDQUFmIiwiZmlsZSI6Ii4vc3JjLWdyYXBocWwvdHlwZURlZnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZXJnZVR5cGVzIH0gZnJvbSAnbWVyZ2UtZ3JhcGhxbC1zY2hlbWFzJ1xyXG5pbXBvcnQgbWVzc2FnZSBmcm9tICcuL21lc3NhZ2UuZ3JhcGhxbCdcclxuXHJcbmNvbnN0IHR5cGVzID0gW1xyXG4gIG1lc3NhZ2UsXHJcbl1cclxuXHJcbi8vIE5PVEU6IDJuZCBwYXJhbSBpcyBvcHRpb25hbCwgYW5kIGRlZmF1bHRzIHRvIGZhbHNlXHJcbi8vIE9ubHkgdXNlIGlmIHlvdSBoYXZlIGRlZmluZWQgdGhlIHNhbWUgdHlwZSBtdWx0aXBsZSB0aW1lcyBpblxyXG4vLyBkaWZmZXJlbnQgZmlsZXMgYW5kIHdpc2ggdG8gYXR0ZW1wdCBtZXJnaW5nIHRoZW0gdG9nZXRoZXIuXHJcbmV4cG9ydCBkZWZhdWx0IG1lcmdlVHlwZXModHlwZXMsIHsgYWxsOiB0cnVlIH0pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src-graphql/typeDefs/index.js\n");

/***/ }),

/***/ "./src-graphql/typeDefs/message.graphql":
/*!**********************************************!*\
  !*** ./src-graphql/typeDefs/message.graphql ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n    var doc = {\"kind\":\"Document\",\"definitions\":[{\"kind\":\"ObjectTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"Message\"},\"interfaces\":[],\"directives\":[],\"fields\":[{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"message\"},\"arguments\":[],\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}},\"directives\":[]}]},{\"kind\":\"ObjectTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"Query\"},\"interfaces\":[],\"directives\":[],\"fields\":[{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"getMessage\"},\"arguments\":[],\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Message\"}},\"directives\":[]}]}],\"loc\":{\"start\":0,\"end\":76}};\n    doc.loc.source = {\"body\":\"type Message {\\r\\n  message: String\\r\\n}\\r\\ntype Query {\\r\\n  getMessage: Message\\r\\n}\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}};\n  \r\n\n    var names = {};\n    function unique(defs) {\n      return defs.filter(\n        function(def) {\n          if (def.kind !== 'FragmentDefinition') return true;\n          var name = def.name.value\n          if (names[name]) {\n            return false;\n          } else {\n            names[name] = true;\n            return true;\n          }\n        }\n      )\n    }\n  \r\n\n      module.exports = doc;\n    \r\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMtZ3JhcGhxbC90eXBlRGVmcy9tZXNzYWdlLmdyYXBocWw/YzVkNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZUFBZSxrQ0FBa0Msc0NBQXNDLGdDQUFnQyw0Q0FBNEMsaUNBQWlDLGdDQUFnQyx3QkFBd0IsMkJBQTJCLGdDQUFnQyxpQkFBaUIsRUFBRSxFQUFFLHNDQUFzQyw4QkFBOEIsNENBQTRDLGlDQUFpQyxtQ0FBbUMsd0JBQXdCLDJCQUEyQixpQ0FBaUMsaUJBQWlCLEVBQUUsU0FBUztBQUNobkIsc0JBQXNCLHNCQUFzQiwwQkFBMEIsZ0JBQWdCLDhCQUE4Qiw2Q0FBNkM7OztBQUdqSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EiLCJmaWxlIjoiLi9zcmMtZ3JhcGhxbC90eXBlRGVmcy9tZXNzYWdlLmdyYXBocWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICB2YXIgZG9jID0ge1wia2luZFwiOlwiRG9jdW1lbnRcIixcImRlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIk9iamVjdFR5cGVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIk1lc3NhZ2VcIn0sXCJpbnRlcmZhY2VzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJmaWVsZHNcIjpbe1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIm1lc3NhZ2VcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX1dfSx7XCJraW5kXCI6XCJPYmplY3RUeXBlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJRdWVyeVwifSxcImludGVyZmFjZXNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcImZpZWxkc1wiOlt7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZ2V0TWVzc2FnZVwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJNZXNzYWdlXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX1dfV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjo3Nn19O1xuICAgIGRvYy5sb2Muc291cmNlID0ge1wiYm9keVwiOlwidHlwZSBNZXNzYWdlIHtcXHJcXG4gIG1lc3NhZ2U6IFN0cmluZ1xcclxcbn1cXHJcXG50eXBlIFF1ZXJ5IHtcXHJcXG4gIGdldE1lc3NhZ2U6IE1lc3NhZ2VcXHJcXG59XCIsXCJuYW1lXCI6XCJHcmFwaFFMIHJlcXVlc3RcIixcImxvY2F0aW9uT2Zmc2V0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoxfX07XG4gIFxyXG5cbiAgICB2YXIgbmFtZXMgPSB7fTtcbiAgICBmdW5jdGlvbiB1bmlxdWUoZGVmcykge1xuICAgICAgcmV0dXJuIGRlZnMuZmlsdGVyKFxuICAgICAgICBmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBpZiAoZGVmLmtpbmQgIT09ICdGcmFnbWVudERlZmluaXRpb24nKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB2YXIgbmFtZSA9IGRlZi5uYW1lLnZhbHVlXG4gICAgICAgICAgaWYgKG5hbWVzW25hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgXHJcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBkb2M7XG4gICAgXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src-graphql/typeDefs/message.graphql\n");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-express\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIj8yMmYzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImFwb2xsby1zZXJ2ZXItZXhwcmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-server-express\n");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzgxODgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYm9keS1wYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///body-parser\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/MjJmZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJleHByZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validator\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXZhbGlkYXRvclwiPzJmYTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZXhwcmVzcy12YWxpZGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXZhbGlkYXRvclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///express-validator\n");

/***/ }),

/***/ "merge-graphql-schemas":
/*!****************************************!*\
  !*** external "merge-graphql-schemas" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"merge-graphql-schemas\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtZXJnZS1ncmFwaHFsLXNjaGVtYXNcIj80MDk4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1lcmdlLWdyYXBocWwtc2NoZW1hcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1lcmdlLWdyYXBocWwtc2NoZW1hc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///merge-graphql-schemas\n");

/***/ })

/******/ });