"use strict";
(self["webpackChunksporthub"] = self["webpackChunksporthub"] || []).push([["src_components_pages_Registration_ResetPassword_ResetPassword_tsx"],{

/***/ "./src/components/pages/Registration/ResetPassword/ResetPassword.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/pages/Registration/ResetPassword/ResetPassword.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SignInUp_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SignInUp.scss */ "./src/components/pages/Registration/SignInUp.scss");
/* harmony import */ var _common_Logo_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/Logo/Logo */ "./src/components/common/Logo/Logo.tsx");
/* harmony import */ var _common_RegistrationCouch_RegistrationCouch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/RegistrationCouch/RegistrationCouch */ "./src/components/common/RegistrationCouch/RegistrationCouch.jsx");
/* harmony import */ var _ui_Forms_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/Forms/InputContainer/InputContainer */ "./src/components/ui/Forms/InputContainer/InputContainer.tsx");
/* harmony import */ var _ui_Button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/Button/Button */ "./src/components/ui/Button/Button.tsx");
/* harmony import */ var _ResetPassword_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ResetPassword.scss */ "./src/components/pages/Registration/ResetPassword/ResetPassword.scss");
/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/redux */ "./src/components/hooks/redux.tsx");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/esm/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");














var ResetPassword = function ResetPassword(_ref) {
  var _ref$state = _ref.state,
    state = _ref$state === void 0 ? 1 : _ref$state;
  var selector = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_10__.useAppSelector)(function (state) {
    return state.regSlice.regData.email;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    email = _useState2[0],
    setEmail = _useState2[1];
  var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_11__.getAuth)();
  var triggerResetEmail = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_11__.sendPasswordResetEmail)(auth, email);
          case 2:
            console.log('Password reset email sent');
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function triggerResetEmail() {
      return _ref2.apply(this, arguments);
    };
  }();

  // const ResetInitial: FC = () => {
  //     return (
  //         <div className='registration-container forgot-container'>
  //             <RegistrationCouch />
  //             <div className='reg-form__wr'>
  //                 <div className='reg-form__logo-wr'>
  //                     <Logo isReg={true} />
  //                 </div>
  //                 <form className='reg-form__form form'>
  //                     <p className='form__title'>Forgot your password?</p>
  //                     <p className='form__descr'>Enter your email address and we'll send you instructions on how to reset your password</p>
  //                     <InputContainer text='Email' placeholder='Your Email' value={email} onChangeHandler={(e) => setEmail(e.target.value)}></InputContainer>
  //                     <Button className='email__send' onClickHandler={triggerResetEmail}>
  //                         Send Email
  //                     </Button>
  //                 </form>
  //             </div>
  //         </div>
  //     );
  // };

  // const ResetSuccsess: FC = () => {
  //     return (
  //         <div className='registration-container forgot-container'>
  //             <RegistrationCouch />
  //             <div className='reg-form__wr'>
  //                 <div className='reg-form__logo-wr'>
  //                     <Logo isReg={true} />
  //                 </div>
  //                 <form className='reg-form__form form'>
  //                     <p className='form__title'>Please check your inbox</p>
  //                     <p className='form__descr'>
  //                         Check your email {selector} for instructions on how to reset your password. If it doesn’t appear within a few minutes, check your spam folder.
  //                     </p>
  //                     <div className='form__etc'>
  //                         Didn't receive the email?
  //                         <span>
  //                             <Link to={'../404'}>Go to Support</Link>
  //                         </span>
  //                     </div>
  //                 </form>
  //             </div>
  //         </div>
  //     );
  // };

  // return state === 1 ? <ResetInitial /> : <ResetSuccsess />;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    className: "registration-container forgot-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_common_RegistrationCouch_RegistrationCouch__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: "reg-form__wr",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        className: "reg-form__logo-wr",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_common_Logo_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
          isReg: true
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("form", {
        className: "reg-form__form form",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
          className: "form__title",
          children: "Forgot your password?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
          className: "form__descr",
          children: "Enter your email address and we'll send you instructions on how to reset your password"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_Forms_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
          text: "Email",
          placeholder: "Your Email",
          value: email,
          onChangeHandler: function onChangeHandler(e) {
            return setEmail(e.target.value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_Button_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: "email__send",
          onClickHandler: triggerResetEmail,
          children: "Send Email"
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetPassword);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registration/ResetPassword/ResetPassword.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registration/ResetPassword/ResetPassword.scss ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.forgot-container .form__descr {
  color: var(--4, #eee);
  text-align: center;
  font-family: Uto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 40px;
}
.forgot-container .email__send {
  margin: 0 auto;
}
.forgot-container a {
  color: #ad7955;
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Registration/ResetPassword/ResetPassword.scss"],"names":[],"mappings":"AAOI;EACI,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;AANR;AASI;EACI,cAAA;AAPR;AAUI;EACI,cAAA;AARR","sourcesContent":["// passwordReset\r\n\r\n.forgot-container {\r\n    // .reg-form__wr {\r\n    //     max-width: 420px;\r\n    // }\r\n\r\n    .form__descr {\r\n        color: var(--4, #eee);\r\n        text-align: center;\r\n        font-family: Uto;\r\n        font-size: 14px;\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        line-height: normal;\r\n        margin-bottom: 40px;\r\n    }\r\n\r\n    .email__send {\r\n        margin: 0 auto;\r\n    }\r\n\r\n    a {\r\n        color: #ad7955;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/pages/Registration/ResetPassword/ResetPassword.scss":
/*!****************************************************************************!*\
  !*** ./src/components/pages/Registration/ResetPassword/ResetPassword.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ResetPassword_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./ResetPassword.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registration/ResetPassword/ResetPassword.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ResetPassword_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ResetPassword_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ResetPassword_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ResetPassword_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_components_pages_Registration_ResetPassword_ResetPassword_tsx.app.351a09cc8781df972862.js.map