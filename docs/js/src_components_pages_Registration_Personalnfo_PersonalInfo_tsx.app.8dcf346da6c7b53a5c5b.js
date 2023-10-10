"use strict";
(self["webpackChunksporthub"] = self["webpackChunksporthub"] || []).push([["src_components_pages_Registration_Personalnfo_PersonalInfo_tsx"],{

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

/***/ }),

/***/ "./src/components/pages/Registration/Personalnfo/PersonalInfo.tsx":
/*!************************************************************************!*\
  !*** ./src/components/pages/Registration/Personalnfo/PersonalInfo.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ui_Forms_InputRadio_InputRadio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/Forms/InputRadio/InputRadio */ "./src/components/ui/Forms/InputRadio/InputRadio.tsx");
/* harmony import */ var _ui_Forms_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/Forms/InputContainer/InputContainer */ "./src/components/ui/Forms/InputContainer/InputContainer.tsx");
/* harmony import */ var _ui_Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/Button/Button */ "./src/components/ui/Button/Button.tsx");
/* harmony import */ var _PersonalInfo_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PersonalInfo.scss */ "./src/components/pages/Registration/Personalnfo/PersonalInfo.scss");
/* harmony import */ var _common_AddPhoto_AddPhoto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/AddPhoto/AddPhoto */ "./src/components/common/AddPhoto/AddPhoto.tsx");
/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/redux */ "./src/components/hooks/redux.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _store_slices_registration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/slices/registration */ "./src/components/store/slices/registration.tsx");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/esm/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/esm/index.esm.js");
/* harmony import */ var _config_firebase_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../config/firebase-config */ "./src/config/firebase-config.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }















var PersonalInfo = function PersonalInfo() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    file = _useState2[0],
    setFile = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
    radio = _useState4[0],
    setRadio = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
    type = _useState6[0],
    setType = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
    _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
    birthday = _useState8[0],
    setBirthday = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
    _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
    photoUrl = _useState10[0],
    setPhotoUrl = _useState10[1];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useNavigate)();
  var dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_10__.useAppDispatch)();
  var selector = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_10__.useAppSelector)(function (state) {
    return state.regSlice;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    dispatch((0,_store_slices_registration__WEBPACK_IMPORTED_MODULE_11__.setRegData)({
      videos: [],
      playlists: [],
      birthday: birthday,
      type: type,
      gender: radio
    }));
  }, [photoUrl, type, birthday, radio]);
  var uploadFile = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
      var filesFolderRef;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (file) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            filesFolderRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_12__.ref)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_14__.storage, "users-avatar/".concat(selector.regData.email));
            _context.prev = 3;
            if (!(typeof file !== 'string')) {
              _context.next = 9;
              break;
            }
            _context.next = 7;
            return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_12__.uploadBytes)(filesFolderRef, file);
          case 7:
            _context.next = 10;
            break;
          case 9:
            '';
          case 10:
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](3);
            alert(_context.t0);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 12]]);
    }));
    return function uploadFile() {
      return _ref.apply(this, arguments);
    };
  }();
  var onInputChangeHandler = function onInputChangeHandler(e) {
    setRadio(e.target.value);
  };
  var onInputTypeChangeHandler = function onInputTypeChangeHandler(e) {
    setType(e.target.value);
  };
  var onButtonSignUpClickHandler = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(e) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return uploadFile();
          case 3:
            _context2.next = 5;
            return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_12__.getDownloadURL)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_12__.ref)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_14__.storage, "users-avatar/".concat(selector.regData.email)));
          case 5:
            res = _context2.sent;
            // const objToLoad: any = { ...selector.regData };
            // delete objToLoad?.some;
            // delete objToLoad?.selectedVideosArr;
            setPhotoUrl(res);
            _context2.next = 9;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_13__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_13__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_14__.DB, 'users', selector.regData.email), _objectSpread(_objectSpread({}, selector.regData), {}, {
              photoUrl: res,
              birthday: birthday,
              type: type,
              gender: radio
            }));
          case 9:
            navigate('../signIn');
            _context2.next = 15;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            alert(_context2.t0);
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 12]]);
    }));
    return function onButtonSignUpClickHandler(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    className: " info",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
      className: "info__title",
      children: "Personal Information"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_common_AddPhoto_AddPhoto__WEBPACK_IMPORTED_MODULE_9__["default"], {
      file: file,
      setFile: setFile,
      classname: "info__addPhoto"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: "info__radio-wr",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
        className: "info__radio_text",
        children: "Gender"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: "info__radio-line",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("form", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_Forms_InputRadio_InputRadio__WEBPACK_IMPORTED_MODULE_5__["default"], {
            checked: radio === 'Male',
            value: 'Male',
            onChange: onInputChangeHandler,
            text: "Male",
            name: "Male",
            id: "Male"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_Forms_InputRadio_InputRadio__WEBPACK_IMPORTED_MODULE_5__["default"], {
            checked: radio === 'Female',
            value: 'Female',
            onChange: onInputChangeHandler,
            text: "Female",
            name: "Female",
            id: "Female"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_Forms_InputRadio_InputRadio__WEBPACK_IMPORTED_MODULE_5__["default"], {
            checked: radio === 'None',
            value: 'None',
            onChange: onInputChangeHandler,
            text: "None",
            name: "None",
            id: "None"
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: "info__radio-wr info__radio_type",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
        className: "info__radio_text",
        children: "Type"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: "info__radio-line",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("form", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_Forms_InputRadio_InputRadio__WEBPACK_IMPORTED_MODULE_5__["default"], {
            checked: type === 'User',
            value: 'User',
            onChange: onInputTypeChangeHandler,
            text: "User",
            name: "User",
            id: "User"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_Forms_InputRadio_InputRadio__WEBPACK_IMPORTED_MODULE_5__["default"], {
            checked: type === 'Creator',
            value: 'Creator',
            onChange: onInputTypeChangeHandler,
            text: "Creator",
            name: "Creator",
            id: "Creator"
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_Forms_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      text: "Date of birthday",
      className: "info__date",
      placeholder: "MM.DD.YYYY",
      value: birthday,
      onChangeHandler: function onChangeHandler(e) {
        return setBirthday(e.target.value);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: "info__bottom-buttons",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "transparent",
        onClickHandler: function onClickHandler() {
          return navigate(-1);
        },
        children: "Back"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onClickHandler: onButtonSignUpClickHandler,
        children: "Sign Up"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonalInfo);

/***/ }),

/***/ "./src/components/ui/Button/Button.tsx":
/*!*********************************************!*\
  !*** ./src/components/ui/Button/Button.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.scss */ "./src/components/ui/Button/Button.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var Button = function Button(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'def' : _ref$type,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? 'default' : _ref$children,
    onClickHandler = _ref.onClickHandler;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
    onClick: onClickHandler,
    className: "".concat(type === 'def' ? 'button_def' : 'button_unsubscribe', " ").concat(className, " button"),
    children: children
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registration/Personalnfo/PersonalInfo.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registration/Personalnfo/PersonalInfo.scss ***!
  \************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.info {
  width: 420px;
  margin: 48px auto;
}
.info .input__wr {
  margin-top: 27px;
}
.info .button {
  width: 100%;
}

.info__addPhoto {
  margin-top: 44px;
}

.info__title {
  color: #fff;
  font-size: 36px;
  font-weight: 500;
  text-align: center;
}

.info__img_texts {
  margin-top: 16px;
  margin-left: 24px;
}

.info__radio-wr {
  margin-top: 24px;
}

.info__radio_text {
  font-weight: 400;
}

.info__radio-line form {
  margin-top: 9px;
  display: flex;
  justify-content: space-between;
}

.info__bottom-buttons {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

.info__radio_type form {
  justify-content: flex-start;
  gap: 15px;
}

@media screen and (max-width: 576px) {
  .info {
    width: 343px;
    margin: 36px auto;
  }
  .info__title {
    text-align: center;
    font-size: 32px;
    font-weight: 500;
  }
  .info__addPhoto {
    margin-top: 44px;
  }
  .info__radio-wr {
    margin-top: 32px;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Registration/Personalnfo/PersonalInfo.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,iBAAA;AACJ;AACI;EACI,gBAAA;AACR;AACI;EACI,WAAA;AACR;;AAEA;EACI,gBAAA;AACJ;;AACA;EACI,WAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AAEJ;;AACA;EACI,gBAAA;EACA,iBAAA;AAEJ;;AACA;EACI,gBAAA;AAEJ;;AAAA;EACI,gBAAA;AAGJ;;AAAI;EACI,eAAA;EAEA,aAAA;EACA,8BAAA;AAER;;AAEA;EACI,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AACJ;;AAEI;EACI,2BAAA;EACA,SAAA;AACR;;AAGA;EACI;IACI,YAAA;IACA,iBAAA;EAAN;EAEM;IACI,kBAAA;IACA,eAAA;IACA,gBAAA;EAAV;EAGM;IACI,gBAAA;EADV;EAIM;IACI,gBAAA;EAFV;AACF","sourcesContent":[".info {\r\n    width: 420px;\r\n    margin: 48px auto;\r\n\r\n    .input__wr {\r\n        margin-top: 27px;\r\n    }\r\n    .button {\r\n        width: 100%;\r\n    }\r\n}\r\n.info__addPhoto {\r\n    margin-top: 44px;\r\n}\r\n.info__title {\r\n    color: #fff;\r\n    font-size: 36px;\r\n    font-weight: 500;\r\n    text-align: center;\r\n}\r\n\r\n.info__img_texts {\r\n    margin-top: 16px;\r\n    margin-left: 24px;\r\n}\r\n\r\n.info__radio-wr {\r\n    margin-top: 24px;\r\n}\r\n.info__radio_text {\r\n    font-weight: 400;\r\n}\r\n.info__radio-line {\r\n    form {\r\n        margin-top: 9px;\r\n\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n}\r\n\r\n.info__bottom-buttons {\r\n    margin-top: 40px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 24px;\r\n}\r\n.info__radio_type {\r\n    form {\r\n        justify-content: flex-start;\r\n        gap: 15px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 576px) {\r\n    .info {\r\n        width: 343px;\r\n        margin: 36px auto;\r\n\r\n        &__title {\r\n            text-align: center;\r\n            font-size: 32px;\r\n            font-weight: 500;\r\n        }\r\n\r\n        &__addPhoto {\r\n            margin-top: 44px;\r\n        }\r\n\r\n        &__radio-wr {\r\n            margin-top: 32px;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ui/Button/Button.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ui/Button/Button.scss ***!
  \*********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.button {
  padding: 11.5px 42.5px;
  border-radius: 8px;
  background: var(--light, #ad7955);
  color: var(--3, #fff);
  font-family: Uto;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  transition: 0.3s;
}
.button:hover {
  background: var(--dark, #ac4002);
}
.button:active {
  background: var(--dark, #4d2709);
}

.button_unsubscribe {
  background: var(--dark, #653012);
}`, "",{"version":3,"sources":["webpack://./src/components/ui/Button/Button.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;EACA,kBAAA;EACA,iCAAA;EACA,qBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;AACJ;AAAI;EACI,gCAAA;AAER;AAAI;EACI,gCAAA;AAER;;AAEA;EACI,gCAAA;AACJ","sourcesContent":[".button {\r\n    padding: 11.5px 42.5px;\r\n    border-radius: 8px;\r\n    background: var(--light, #ad7955);\r\n    color: var(--3, #fff);\r\n    font-family: Uto;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    line-height: normal;\r\n    transition: 0.3s;\r\n    &:hover {\r\n        background: var(--dark, #ac4002);\r\n    }\r\n    &:active {\r\n        background: var(--dark, #4d2709);\r\n    }\r\n}\r\n\r\n.button_unsubscribe {\r\n    background: var(--dark, #653012);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/pages/Registration/Personalnfo/PersonalInfo.scss":
/*!*************************************************************************!*\
  !*** ./src/components/pages/Registration/Personalnfo/PersonalInfo.scss ***!
  \*************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_PersonalInfo_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./PersonalInfo.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registration/Personalnfo/PersonalInfo.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_PersonalInfo_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_PersonalInfo_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_PersonalInfo_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_PersonalInfo_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ui/Button/Button.scss":
/*!**********************************************!*\
  !*** ./src/components/ui/Button/Button.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Button_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Button.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ui/Button/Button.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Button_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Button_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Button_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Button_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_components_pages_Registration_Personalnfo_PersonalInfo_tsx.app.8dcf346da6c7b53a5c5b.js.map