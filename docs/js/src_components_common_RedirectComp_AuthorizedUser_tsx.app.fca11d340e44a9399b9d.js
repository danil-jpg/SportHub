"use strict";
(self["webpackChunksporthub"] = self["webpackChunksporthub"] || []).push([["src_components_common_RedirectComp_AuthorizedUser_tsx"],{

/***/ "./src/components/common/RedirectComp/AuthorizedUser.tsx":
/*!***************************************************************!*\
  !*** ./src/components/common/RedirectComp/AuthorizedUser.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/redux */ "./src/components/hooks/redux.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var AuthorizedUser = function AuthorizedUser() {
  var selectorRegData = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(function (state) {
    return state.regSlice.regData;
  });
  var auth = selectorRegData.email ? true : false;
  return auth ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Outlet, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Navigate, {
    to: "/"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthorizedUser);

/***/ }),

/***/ "./src/components/hooks/redux.tsx":
/*!****************************************!*\
  !*** ./src/components/hooks/redux.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAppDispatch: () => (/* binding */ useAppDispatch),
/* harmony export */   useAppSelector: () => (/* binding */ useAppSelector)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

// Use throughout your app instead of plain `useDispatch` and `useSelector`
var useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch;
var useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;

/***/ })

}]);
//# sourceMappingURL=src_components_common_RedirectComp_AuthorizedUser_tsx.app.fca11d340e44a9399b9d.js.map