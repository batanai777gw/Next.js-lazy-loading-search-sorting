"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/frontend",{

/***/ "./pages/frontend.js":
/*!***************************!*\
  !*** ./pages/frontend.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_Exporetv_Desktop_Front_End_Development_NextJS_Next_js_lazy_loading_search_sorting_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Exporetv_Desktop_Front_End_Development_NextJS_Next_js_lazy_loading_search_sorting_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Exporetv_Desktop_Front_End_Development_NextJS_Next_js_lazy_loading_search_sorting_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Products */ \"./components/Products.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar frontend = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), products = ref[0], setProducts = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_Exporetv_Desktop_Front_End_Development_NextJS_Next_js_lazy_loading_search_sorting_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, content;\n            return _Users_Exporetv_Desktop_Front_End_Development_NextJS_Next_js_lazy_loading_search_sorting_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"http://localhost:8000/api/products/frontend\");\n                    case 2:\n                        response = _ctx.sent;\n                        _ctx.next = 5;\n                        return response.json();\n                    case 5:\n                        content = _ctx.sent;\n                        setProducts(content);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }))();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Products__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            products: products\n        }, void 0, false, {\n            fileName: \"/Users/Exporetv/Desktop/Front-End Development/NextJS/Next.js-lazy-loading-search-sorting/pages/frontend.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Exporetv/Desktop/Front-End Development/NextJS/Next.js-lazy-loading-search-sorting/pages/frontend.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(frontend, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (frontend);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mcm9udGVuZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQTBCO0FBQ29CO0FBQ0o7QUFDRTtBQUU1QyxJQUFNSyxRQUFRLEdBQUcsV0FBTTs7SUFDckIsSUFBZ0NGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBckNHLFFBQVEsR0FBaUJILEdBQVksR0FBN0IsRUFBRUksV0FBVyxHQUFJSixHQUFZLEdBQWhCO0lBRTVCQyxnREFBUyxDQUFDLFdBQU07UUFFViwyU0FBWTtnQkFDRkksUUFBUSxFQUVSQyxPQUFPOzs7OzsrQkFGVUMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDOzt3QkFBckVGLFFBQVEsWUFBNkQ7OytCQUVyREEsUUFBUSxDQUFDRyxJQUFJLEVBQUU7O3dCQUEvQkYsT0FBTyxZQUF3Qjt3QkFFckNGLFdBQVcsQ0FBQ0UsT0FBTyxDQUFDLENBQUM7Ozs7OztTQUN4QixJQUNGO0tBQ04sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNMLHFCQUNFLDhEQUFDUCwwREFBTTtrQkFDTCw0RUFBQ0QsNERBQVE7WUFBQ0ssUUFBUSxFQUFFQSxRQUFROzs7OztpQkFBRzs7Ozs7YUFDeEIsQ0FDVDtDQUNIO0dBbkJLRCxRQUFRO0FBcUJkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnJvbnRlbmQuanM/NDU5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvZHVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdHNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGZyb250ZW5kID0gKCkgPT4ge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChcbiAgICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wcm9kdWN0cy9mcm9udGVuZCcpO1xuXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgICBzZXRQcm9kdWN0cyhjb250ZW50KTtcbiAgICAgICAgfVxuICAgICkoKVxufSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8UHJvZHVjdHMgcHJvZHVjdHM9e3Byb2R1Y3RzfS8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmcm9udGVuZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb2R1Y3RzIiwiTGF5b3V0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmcm9udGVuZCIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJyZXNwb25zZSIsImNvbnRlbnQiLCJmZXRjaCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/frontend.js\n"));

/***/ })

});