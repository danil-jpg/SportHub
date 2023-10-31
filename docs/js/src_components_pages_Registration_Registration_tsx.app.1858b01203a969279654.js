"use strict";
(self["webpackChunksporthub"] = self["webpackChunksporthub"] || []).push([["src_components_pages_Registration_Registration_tsx"],{

/***/ "./src/components/pages/Registration/Registration.tsx":
/*!************************************************************!*\
  !*** ./src/components/pages/Registration/Registration.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var SignUp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_sweetalert_dist_sweetalert_min_js"), __webpack_require__.e("vendors-node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js-node_modules_babel_-387be1"), __webpack_require__.e("vendors-node_modules_swiper_swiper_css"), __webpack_require__.e("src_components_common_Logo_Logo_tsx-src_components_hooks_redux_tsx-src_components_ui_Button_B-df9184"), __webpack_require__.e("src_components_common_RegistrationCouch_RegistrationCouch_jsx-src_components_pages_Registrati-dff370"), __webpack_require__.e("src_components_pages_Registration_SignUp_SignUp_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./SignUp/SignUp */ "./src/components/pages/Registration/SignUp/SignUp.tsx"));
});
var SignIn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_sweetalert_dist_sweetalert_min_js"), __webpack_require__.e("vendors-node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js-node_modules_babel_-387be1"), __webpack_require__.e("vendors-node_modules_swiper_swiper_css"), __webpack_require__.e("src_components_common_Logo_Logo_tsx-src_components_hooks_redux_tsx-src_components_ui_Button_B-df9184"), __webpack_require__.e("src_components_common_RegistrationCouch_RegistrationCouch_jsx-src_components_pages_Registrati-dff370"), __webpack_require__.e("src_components_pages_Registration_SignIn_SignIn_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./SignIn/SignIn */ "./src/components/pages/Registration/SignIn/SignIn.tsx"));
});
var PersonalInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_sweetalert_dist_sweetalert_min_js"), __webpack_require__.e("src_components_common_AddPhoto_AddPhoto_tsx-src_components_ui_Forms_InputContainer_InputConta-98fe72"), __webpack_require__.e("src_components_pages_Registration_Personalnfo_PersonalInfo_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Personalnfo/PersonalInfo */ "./src/components/pages/Registration/Personalnfo/PersonalInfo.tsx"));
});
var ResetPassword = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_sweetalert_dist_sweetalert_min_js"), __webpack_require__.e("vendors-node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js-node_modules_babel_-387be1"), __webpack_require__.e("vendors-node_modules_swiper_swiper_css"), __webpack_require__.e("src_components_common_Logo_Logo_tsx-src_components_hooks_redux_tsx-src_components_ui_Button_B-df9184"), __webpack_require__.e("src_components_common_RegistrationCouch_RegistrationCouch_jsx-src_components_pages_Registrati-dff370"), __webpack_require__.e("src_components_pages_Registration_ResetPassword_ResetPassword_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ResetPassword/ResetPassword */ "./src/components/pages/Registration/ResetPassword/ResetPassword.tsx"));
});
var ChangePassword = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_sweetalert_dist_sweetalert_min_js"), __webpack_require__.e("vendors-node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js-node_modules_babel_-387be1"), __webpack_require__.e("vendors-node_modules_swiper_swiper_css"), __webpack_require__.e("src_components_common_Logo_Logo_tsx-src_components_hooks_redux_tsx-src_components_ui_Button_B-df9184"), __webpack_require__.e("src_components_common_RegistrationCouch_RegistrationCouch_jsx-src_components_pages_Registrati-dff370"), __webpack_require__.e("src_components_pages_Registration_ChangePassword_ChangePassword_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ChangePassword/ChangePassword */ "./src/components/pages/Registration/ChangePassword/ChangePassword.tsx"));
});
var AuthorizedUser = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_components_common_RedirectComp_AuthorizedUser_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../common/RedirectComp/AuthorizedUser */ "./src/components/common/RedirectComp/AuthorizedUser.tsx"));
});
var Registration = function Registration() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Routes, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SignIn, {}),
      path: "/"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SignUp, {}),
      path: "signUp"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AuthorizedUser, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PersonalInfo, {}),
        path: "personalInfo"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ResetPassword, {}),
      path: "resetPassword"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ChangePassword, {}),
      path: "changePassword"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Registration);

/***/ })

}]);
//# sourceMappingURL=src_components_pages_Registration_Registration_tsx.app.1858b01203a969279654.js.map