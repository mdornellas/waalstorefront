"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(main)/cart/page",{

/***/ "(app-pages-browser)/./src/modules/cart/templates/items.tsx":
/*!**********************************************!*\
  !*** ./src/modules/cart/templates/items.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _medusajs_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @medusajs/ui */ \"(app-pages-browser)/./node_modules/@medusajs/ui/dist/esm/components/heading/heading.js\");\n/* harmony import */ var _medusajs_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @medusajs/ui */ \"(app-pages-browser)/./node_modules/@medusajs/ui/dist/esm/components/table/table.js\");\n/* harmony import */ var _modules_cart_components_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/cart/components/item */ \"(app-pages-browser)/./src/modules/cart/components/item/index.tsx\");\n/* harmony import */ var _modules_skeletons_components_skeleton_line_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/skeletons/components/skeleton-line-item */ \"(app-pages-browser)/./src/modules/skeletons/components/skeleton-line-item/index.tsx\");\n\n\n\n\nconst ItemsTemplate = (param)=>{\n    let { items, region } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pb-3 flex items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_medusajs_ui__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                    className: \"text-[2rem] leading-[2.75rem]\",\n                    children: \"Carta\"\n                }, void 0, false, {\n                    fileName: \"/Users/vanderwaal/www/waalstore-storefront/src/modules/cart/templates/items.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/vanderwaal/www/waalstore-storefront/src/modules/cart/templates/items.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_medusajs_ui__WEBPACK_IMPORTED_MODULE_4__.Table, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_medusajs_ui__WEBPACK_IMPORTED_MODULE_4__.Table.Header, {\n                        className: \"border-t-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_medusajs_ui__WEBPACK_IMPORTED_MODULE_4__.Table.Row, {\n                            className: \"text-ui-fg-subtle txt-medium-plus\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_medusajs_ui__WEBPACK_IMPORTED_MODULE_4__.Table.HeaderCell, {\n                                    className: \"!pl-0\",\n                                    children: \"Item\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vanderwaal/www/waalstore-storefront/src/modules/cart/templates/items.tsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_medusajs_ui__WEBPACK_IMPORTED_MODULE_4__.Table.HeaderCell, {}, void 0, false, {\n                                    fileName: \"/Users/vanderwaal/www/waalstore-storefront/src/modules/cart/templates/items.tsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_medusajs_ui__WEBPACK_IMPORTED_MODULE_4__.Table.HeaderCell, {\n                                    children: \"Quantity\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vanderwaal/www/waalstore-storefront/src/modules/cart/templates/items.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_medusajs_ui__WEBPACK_IMPORTED_MODULE_4__.Table.HeaderCell, {\n                                    className: \"hidden small:table-cell\",\n                                    children: \"Price\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vanderwaal/www/waalstore-storefront/src/modules/cart/templates/items.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_medusajs_ui__WEBPACK_IMPORTED_MODULE_4__.Table.HeaderCell, {\n                                    className: \"!pr-0 text-right\",\n                                    children: \"Total\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vanderwaal/www/waalstore-storefront/src/modules/cart/templates/items.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vanderwaal/www/waalstore-storefront/src/modules/cart/templates/items.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vanderwaal/www/waalstore-storefront/src/modules/cart/templates/items.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_medusajs_ui__WEBPACK_IMPORTED_MODULE_4__.Table.Body, {\n                        children: items && region ? items.sort((a, b)=>{\n                            return a.created_at > b.created_at ? -1 : 1;\n                        }).map((item)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_cart_components_item__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                item: item,\n                                region: region\n                            }, item.id, false, {\n                                fileName: \"/Users/vanderwaal/www/waalstore-storefront/src/modules/cart/templates/items.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 26\n                            }, undefined);\n                        }) : Array.from(Array(5).keys()).map((i)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_skeletons_components_skeleton_line_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, i, false, {\n                                fileName: \"/Users/vanderwaal/www/waalstore-storefront/src/modules/cart/templates/items.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 24\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/vanderwaal/www/waalstore-storefront/src/modules/cart/templates/items.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vanderwaal/www/waalstore-storefront/src/modules/cart/templates/items.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vanderwaal/www/waalstore-storefront/src/modules/cart/templates/items.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ItemsTemplate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemsTemplate);\nvar _c;\n$RefreshReg$(_c, \"ItemsTemplate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9tb2R1bGVzL2NhcnQvdGVtcGxhdGVzL2l0ZW1zLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzZDO0FBQ0c7QUFDK0I7QUFPL0UsTUFBTUksZ0JBQWdCO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQXNCO0lBQzFELHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNBO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDUixpREFBT0E7b0JBQUNRLFdBQVU7OEJBQWdDOzs7Ozs7Ozs7OzswQkFFckQsOERBQUNQLCtDQUFLQTs7a0NBQ0osOERBQUNBLCtDQUFLQSxDQUFDUSxNQUFNO3dCQUFDRCxXQUFVO2tDQUN0Qiw0RUFBQ1AsK0NBQUtBLENBQUNTLEdBQUc7NEJBQUNGLFdBQVU7OzhDQUNuQiw4REFBQ1AsK0NBQUtBLENBQUNVLFVBQVU7b0NBQUNILFdBQVU7OENBQVE7Ozs7Ozs4Q0FDcEMsOERBQUNQLCtDQUFLQSxDQUFDVSxVQUFVOzs7Ozs4Q0FDakIsOERBQUNWLCtDQUFLQSxDQUFDVSxVQUFVOzhDQUFDOzs7Ozs7OENBQ2xCLDhEQUFDViwrQ0FBS0EsQ0FBQ1UsVUFBVTtvQ0FBQ0gsV0FBVTs4Q0FBMEI7Ozs7Ozs4Q0FHdEQsOERBQUNQLCtDQUFLQSxDQUFDVSxVQUFVO29DQUFDSCxXQUFVOzhDQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS25ELDhEQUFDUCwrQ0FBS0EsQ0FBQ1csSUFBSTtrQ0FDUlAsU0FBU0MsU0FDTkQsTUFDR1EsSUFBSSxDQUFDLENBQUNDLEdBQUdDOzRCQUNSLE9BQU9ELEVBQUVFLFVBQVUsR0FBR0QsRUFBRUMsVUFBVSxHQUFHLENBQUMsSUFBSTt3QkFDNUMsR0FDQ0MsR0FBRyxDQUFDLENBQUNDOzRCQUNKLHFCQUFPLDhEQUFDaEIscUVBQUlBO2dDQUFlZ0IsTUFBTUE7Z0NBQU1aLFFBQVFBOytCQUE3QlksS0FBS0MsRUFBRTs7Ozs7d0JBQzNCLEtBQ0ZDLE1BQU1DLElBQUksQ0FBQ0QsTUFBTSxHQUFHRSxJQUFJLElBQUlMLEdBQUcsQ0FBQyxDQUFDTTs0QkFDL0IscUJBQU8sOERBQUNwQix3RkFBZ0JBLE1BQU1vQjs7Ozs7d0JBQ2hDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLZDtLQXBDTW5CO0FBc0NOLCtEQUFlQSxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9tb2R1bGVzL2NhcnQvdGVtcGxhdGVzL2l0ZW1zLnRzeD85YTE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmVJdGVtLCBSZWdpb24gfSBmcm9tIFwiQG1lZHVzYWpzL21lZHVzYVwiXG5pbXBvcnQgeyBIZWFkaW5nLCBUYWJsZSB9IGZyb20gXCJAbWVkdXNhanMvdWlcIlxuaW1wb3J0IEl0ZW0gZnJvbSBcIkBtb2R1bGVzL2NhcnQvY29tcG9uZW50cy9pdGVtXCJcbmltcG9ydCBTa2VsZXRvbkxpbmVJdGVtIGZyb20gXCJAbW9kdWxlcy9za2VsZXRvbnMvY29tcG9uZW50cy9za2VsZXRvbi1saW5lLWl0ZW1cIlxuXG50eXBlIEl0ZW1zVGVtcGxhdGVQcm9wcyA9IHtcbiAgaXRlbXM/OiBPbWl0PExpbmVJdGVtLCBcImJlZm9yZUluc2VydFwiPltdXG4gIHJlZ2lvbj86IFJlZ2lvblxufVxuXG5jb25zdCBJdGVtc1RlbXBsYXRlID0gKHsgaXRlbXMsIHJlZ2lvbiB9OiBJdGVtc1RlbXBsYXRlUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0zIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxIZWFkaW5nIGNsYXNzTmFtZT1cInRleHQtWzJyZW1dIGxlYWRpbmctWzIuNzVyZW1dXCI+Q2FydGE8L0hlYWRpbmc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxUYWJsZT5cbiAgICAgICAgPFRhYmxlLkhlYWRlciBjbGFzc05hbWU9XCJib3JkZXItdC0wXCI+XG4gICAgICAgICAgPFRhYmxlLlJvdyBjbGFzc05hbWU9XCJ0ZXh0LXVpLWZnLXN1YnRsZSB0eHQtbWVkaXVtLXBsdXNcIj5cbiAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsIGNsYXNzTmFtZT1cIiFwbC0wXCI+SXRlbTwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPjwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPlF1YW50aXR5PC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGwgY2xhc3NOYW1lPVwiaGlkZGVuIHNtYWxsOnRhYmxlLWNlbGxcIj5cbiAgICAgICAgICAgICAgUHJpY2VcbiAgICAgICAgICAgIDwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsIGNsYXNzTmFtZT1cIiFwci0wIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgVG90YWxcbiAgICAgICAgICAgIDwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgPC9UYWJsZS5IZWFkZXI+XG4gICAgICAgIDxUYWJsZS5Cb2R5PlxuICAgICAgICAgIHtpdGVtcyAmJiByZWdpb25cbiAgICAgICAgICAgID8gaXRlbXNcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuY3JlYXRlZF9hdCA+IGIuY3JlYXRlZF9hdCA/IC0xIDogMVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gcmVnaW9uPXtyZWdpb259IC8+XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogQXJyYXkuZnJvbShBcnJheSg1KS5rZXlzKCkpLm1hcCgoaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8U2tlbGV0b25MaW5lSXRlbSBrZXk9e2l9IC8+XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICA8L1RhYmxlLkJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1zVGVtcGxhdGVcbiJdLCJuYW1lcyI6WyJIZWFkaW5nIiwiVGFibGUiLCJJdGVtIiwiU2tlbGV0b25MaW5lSXRlbSIsIkl0ZW1zVGVtcGxhdGUiLCJpdGVtcyIsInJlZ2lvbiIsImRpdiIsImNsYXNzTmFtZSIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5Iiwic29ydCIsImEiLCJiIiwiY3JlYXRlZF9hdCIsIm1hcCIsIml0ZW0iLCJpZCIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/modules/cart/templates/items.tsx\n"));

/***/ })

});