"use strict";
(self["webpackChunksporthub"] = self["webpackChunksporthub"] || []).push([["src_components_common_Header_Header_tsx"],{

/***/ "./src/components/common/Header/Header.tsx":
/*!*************************************************!*\
  !*** ./src/components/common/Header/Header.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Logo/Logo */ "./src/components/common/Logo/Logo.tsx");
/* harmony import */ var _ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/IconRenderer/IconRenderer */ "./src/components/ui/IconRenderer/IconRenderer.tsx");
/* harmony import */ var _ui_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/Button/Button */ "./src/components/ui/Button/Button.tsx");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header.scss */ "./src/components/common/Header/Header.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/redux */ "./src/components/hooks/redux.tsx");
/* harmony import */ var _store_slices_registration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/slices/registration */ "./src/components/store/slices/registration.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












var Header = function Header(_ref) {
  var mobChildren = _ref.mobChildren;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    menuState = _useState2[0],
    setMenuState = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    profileState = _useState4[0],
    setProfileState = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
    auth = _useState6[0],
    setAuth = _useState6[1];
  var menuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  var selector = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_6__.useAppSelector)(function (state) {
    return state.regSlice.regData;
  });
  var dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch)();
  var profileExitHandler = function profileExitHandler() {
    dispatch((0,_store_slices_registration__WEBPACK_IMPORTED_MODULE_7__.setInitialUserState)());
    navigate('../../');
  };
  var profileEditHandler = function profileEditHandler() {
    navigate('../../creator/edit-profile');
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    selector.email ? setAuth(true) : '';
  }, [selector.email]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var onMenuOutMenuClickHandler = function onMenuOutMenuClickHandler(e) {
      var _menuRef$current;
      var target = e.target;
      if (target instanceof Node && !((_menuRef$current = menuRef.current) !== null && _menuRef$current !== void 0 && _menuRef$current.contains(target))) {
        setMenuState(false);
        document.body.style.overflow = 'auto';
      }
    };
    window.addEventListener('click', onMenuOutMenuClickHandler);
    return function () {
      window.removeEventListener('click', onMenuOutMenuClickHandler);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "header ".concat(auth ? 'header__authed' : ''),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "header__left",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        ref: menuRef,
        children: [menuState ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onClick: function onClick() {
            setMenuState(!menuState);
            document.body.style.overflow = 'auto';
          },
          id: "cross"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onClick: function onClick() {
            setMenuState(!menuState);
            setProfileState(false);
            document.body.style.overflow = 'hidden';
          },
          id: "burger"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: menuState ? 'header__menu header__menu_active' : 'header__menu',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("ul", {
            className: "header__menu_ul",
            children: auth ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("li", {
                className: "header__menu_li",
                onClick: function onClick() {
                  return navigate('../../creator/home');
                },
                children: "My videos"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("li", {
                className: "header__menu_li",
                children: mobChildren
              })]
            }) : ''
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
        isReg: false,
        onClickHandler: function onClickHandler() {
          return navigate('../../user/home');
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "header__right",
      children: auth ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "header__authed-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "header__video",
          onClick: function onClick() {
            return navigate('../../creator/home');
          },
          children: "Video"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "header__profile",
          onClick: function onClick() {
            return setProfileState(!profileState);
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
            className: "header__profile_img",
            src: selector === null || selector === void 0 ? void 0 : selector.photoUrl
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
            className: "profile__text",
            children: "Profile"
          }), profileState ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "profile__popup",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "profile__edit",
              onClick: profileEditHandler,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_3__["default"], {
                id: "pencil"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                className: "profile__edit_text",
                children: "Edit profile"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "profile__edit",
              onClick: profileExitHandler,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_3__["default"], {
                id: "exit"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                className: "profile__edit_text",
                children: "Log out"
              })]
            })]
          }) : '']
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "header__button",
        onClickHandler: function onClickHandler() {
          return navigate('../registration/signIn');
        },
        children: "Sign in"
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/common/Header/Header.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/common/Header/Header.scss ***!
  \*************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.header {
  padding: 10px 24px;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
}
.header__left {
  padding-top: 8px;
}
.header__left .burger {
  display: none;
}
.header__right {
  display: flex;
  align-items: center;
  flex-basis: auto;
}
.header__menu {
  position: absolute;
  left: -100%;
}
.header .search {
  margin-right: 38px;
}
.header .ring {
  margin-right: 14px;
}
.header__button {
  padding: 10.5px 35px;
  margin-left: 15px;
}
.header__profile {
  position: relative;
  margin-left: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  color: #bbb;
}
.header__profile_img {
  margin-right: 10px;
  width: 24px;
  height: 24px;
  border-radius: 24px;
}
.header__video {
  transition: 0.3s;
  position: relative;
  color: #bbb;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  margin-left: 24px;
  z-index: 1;
}
.header__video:active {
  color: #fff;
}
.header__video:active:after {
  border-radius: 8px;
  z-index: -1;
  background: #222;
  position: absolute;
  padding: 15px;
  width: 120%;
  left: -10%;
  content: "";
}
.header__store {
  transition: 0.3s;
  color: #bbb;
  position: relative;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  margin-left: 24px;
}
.header__store:active {
  color: #fff;
}
.header__store:active:after {
  border-radius: 8px;
  z-index: -1;
  background: #222;
  position: absolute;
  padding: 15px;
  width: 120%;
  left: -10%;
  content: "";
}
.header__authed {
  flex-basis: auto;
}
.header__authed .search {
  margin-left: 0px;
  margin-right: 47px;
}
.header__authed .ring {
  margin-right: 37px;
}
.header .header__authed-block {
  display: flex;
  flex-basis: auto;
}
.header .header__video {
  margin: 0 9px;
  align-items: center;
  display: flex;
}
.header .header__store {
  align-items: center;
  display: flex;
  margin: 0 34px;
}
.header .header__profile {
  margin-right: 11px;
  margin-left: 11px;
  z-index: 2;
}
.header .profile__text {
  color: #bbb;
  font-size: 16px;
  font-weight: 400;
}
.header .profile__popup {
  border-radius: 8px;
  background: #222;
  position: absolute;
  z-index: 999;
  padding: 16px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  bottom: -90px;
  width: 150px;
  left: -60px;
}
.header .profile__popup svg {
  margin-right: 8px;
}
.header .profile__edit {
  display: flex;
  align-items: center;
}
.header .profile__edit_text {
  color: #bbb;
  font-size: 16px;
  font-weight: 400;
}

@media screen and (max-width: 575px) {
  .header {
    padding: 15px 23px;
    position: relative;
  }
  .header .header__video, .header .header__store {
    display: none;
  }
  .header__menu {
    z-index: 2;
    position: absolute;
    padding-left: 16px;
    top: 50px;
    background: var(--9, #222);
    height: 100vh;
    width: 294px;
    transition: 0.3s;
  }
  .header__menu_active {
    left: 0;
  }
  .header__menu_ul {
    margin-top: 24px;
  }
  .header__menu_li {
    padding: 10px 14px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    color: #bbb;
  }
  .header__left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .header__left .burger {
    display: block;
    margin-right: 21px;
  }
  .header__left .cross {
    display: block;
    margin-right: 21px;
  }
  .header__right {
    display: flex;
    flex-basis: auto;
    justify-content: flex-end;
    justify-content: space-between;
    align-items: center;
  }
  .header__right .search {
    margin: 0;
  }
  .header .ring {
    display: none;
  }
  .header__button {
    display: none;
  }
  .header__menu .user-home__left {
    display: block;
  }
  .header__menu .user-home__filter {
    padding: 0;
  }
  .header__menu .header__menu_li {
    padding: 0 14px;
    margin-bottom: 10px;
  }
  .header__menu .header__menu_li {
    padding: 0 14px;
  }
  .header__menu .user-home__filters-wr {
    margin: 0;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/common/Header/Header.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,aAAA;EACA,8BAAA;EACA,iBAAA;EACA,cAAA;AACJ;AAAI;EACI,gBAAA;AAER;AAAQ;EACI,aAAA;AAEZ;AACI;EACI,aAAA;EACA,mBAAA;EAEA,gBAAA;AAAR;AAEI;EACI,kBAAA;EACA,WAAA;AAAR;AAEI;EACI,kBAAA;AAAR;AAEI;EACI,kBAAA;AAAR;AAEI;EACI,oBAAA;EACA,iBAAA;AAAR;AAEI;EACI,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,UAAA;EACA,WAAA;AAAR;AACQ;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;AACZ;AAEI;EACI,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,UAAA;AAAR;AACQ;EACI,WAAA;AACZ;AAAY;EACI,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,WAAA;EACA,UAAA;EACA,WAAA;AAEhB;AAEI;EACI,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AAAR;AACQ;EACI,WAAA;AACZ;AAAY;EACI,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,WAAA;EACA,UAAA;EACA,WAAA;AAEhB;AAEI;EACI,gBAAA;AAAR;AACQ;EACI,gBAAA;EACA,kBAAA;AACZ;AACQ;EACI,kBAAA;AACZ;AAGI;EACI,aAAA;EACA,gBAAA;AADR;AAGI;EACI,aAAA;EACA,mBAAA;EACA,aAAA;AADR;AAII;EACI,mBAAA;EACA,aAAA;EACA,cAAA;AAFR;AAKI;EACI,kBAAA;EACA,iBAAA;EACA,UAAA;AAHR;AAKI;EACI,WAAA;EACA,eAAA;EACA,gBAAA;AAHR;AAKI;EACI,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,SAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,YAAA;EACA,WAAA;AAHR;AAKQ;EACI,iBAAA;AAHZ;AAMI;EAEI,aAAA;EACA,mBAAA;AALR;AAOI;EACI,WAAA;EACA,eAAA;EACA,gBAAA;AALR;;AASA;EACI;IACI,kBAAA;IACA,kBAAA;EANN;EAQU;IAEI,aAAA;EAPd;EAUM;IACI,UAAA;IACA,kBAAA;IACA,kBAAA;IACA,SAAA;IACA,0BAAA;IACA,aAAA;IACA,YAAA;IAGA,gBAAA;EAVV;EAWU;IACI,OAAA;EATd;EAWU;IACI,gBAAA;EATd;EAWU;IACI,kBAAA;IACA,eAAA;IACA,eAAA;IACA,gBAAA;IACA,WAAA;EATd;EAYM;IACI,aAAA;IACA,2BAAA;IACA,mBAAA;EAVV;EAWU;IACI,cAAA;IACA,kBAAA;EATd;EAWU;IACI,cAAA;IACA,kBAAA;EATd;EAYM;IACI,aAAA;IACA,gBAAA;IACA,yBAAA;IACA,8BAAA;IACA,mBAAA;EAVV;EAYU;IACI,SAAA;EAVd;EAaM;IACI,aAAA;EAXV;EAaM;IACI,aAAA;EAXV;EAeM;IACI,cAAA;EAbV;EAeM;IACI,UAAA;EAbV;EAeM;IACI,eAAA;IACA,mBAAA;EAbV;EAeM;IACI,eAAA;EAbV;EAeM;IACI,SAAA;EAbV;AACF","sourcesContent":[".header {\r\n    padding: 10px 24px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    max-width: 1440px;\r\n    margin: 0 auto;\r\n    &__left {\r\n        padding-top: 8px;\r\n\r\n        .burger {\r\n            display: none;\r\n        }\r\n    }\r\n    &__right {\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        flex-basis: auto;\r\n    }\r\n    &__menu {\r\n        position: absolute;\r\n        left: -100%;\r\n    }\r\n    .search {\r\n        margin-right: 38px;\r\n    }\r\n    .ring {\r\n        margin-right: 14px;\r\n    }\r\n    &__button {\r\n        padding: 10.5px 35px;\r\n        margin-left: 15px;\r\n    }\r\n    &__profile {\r\n        position: relative;\r\n        margin-left: 24px;\r\n        display: flex;\r\n        align-items: center;\r\n        cursor: pointer;\r\n        z-index: 1;\r\n        color: #bbb;\r\n        &_img {\r\n            margin-right: 10px;\r\n            width: 24px;\r\n            height: 24px;\r\n            border-radius: 24px;\r\n        }\r\n    }\r\n    &__video {\r\n        transition: 0.3s;\r\n        position: relative;\r\n        color: #bbb;\r\n        font-size: 16px;\r\n        font-weight: 400;\r\n        cursor: pointer;\r\n        margin-left: 24px;\r\n        z-index: 1;\r\n        &:active {\r\n            color: #fff;\r\n            &:after {\r\n                border-radius: 8px;\r\n                z-index: -1;\r\n                background: #222;\r\n                position: absolute;\r\n                padding: 15px;\r\n                width: 120%;\r\n                left: -10%;\r\n                content: '';\r\n            }\r\n        }\r\n    }\r\n    &__store {\r\n        transition: 0.3s;\r\n        color: #bbb;\r\n        position: relative;\r\n        font-size: 16px;\r\n        font-weight: 400;\r\n        cursor: pointer;\r\n        margin-left: 24px;\r\n        &:active {\r\n            color: #fff;\r\n            &:after {\r\n                border-radius: 8px;\r\n                z-index: -1;\r\n                background: #222;\r\n                position: absolute;\r\n                padding: 15px;\r\n                width: 120%;\r\n                left: -10%;\r\n                content: '';\r\n            }\r\n        }\r\n    }\r\n    &__authed {\r\n        flex-basis: auto;\r\n        .search {\r\n            margin-left: 0px;\r\n            margin-right: 47px;\r\n        }\r\n        .ring {\r\n            margin-right: 37px;\r\n        }\r\n    }\r\n\r\n    .header__authed-block {\r\n        display: flex;\r\n        flex-basis: auto;\r\n    }\r\n    .header__video {\r\n        margin: 0 9px;\r\n        align-items: center;\r\n        display: flex;\r\n    }\r\n\r\n    .header__store {\r\n        align-items: center;\r\n        display: flex;\r\n        margin: 0 34px;\r\n    }\r\n\r\n    .header__profile {\r\n        margin-right: 11px;\r\n        margin-left: 11px;\r\n        z-index: 2;\r\n    }\r\n    .profile__text {\r\n        color: #bbb;\r\n        font-size: 16px;\r\n        font-weight: 400;\r\n    }\r\n    .profile__popup {\r\n        border-radius: 8px;\r\n        background: #222;\r\n        position: absolute;\r\n        z-index: 999;\r\n        padding: 16px;\r\n        gap: 10px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        bottom: -90px;\r\n        width: 150px;\r\n        left: -60px;\r\n\r\n        svg {\r\n            margin-right: 8px;\r\n        }\r\n    }\r\n    .profile__edit {\r\n        // margin-top: 18px;\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n    .profile__edit_text {\r\n        color: #bbb;\r\n        font-size: 16px;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 575px) {\r\n    .header {\r\n        padding: 15px 23px;\r\n        position: relative;\r\n        .header {\r\n            &__video,\r\n            &__store {\r\n                display: none;\r\n            }\r\n        }\r\n        &__menu {\r\n            z-index: 2;\r\n            position: absolute;\r\n            padding-left: 16px;\r\n            top: 50px;\r\n            background: var(--9, #222);\r\n            height: 100vh;\r\n            width: 294px;\r\n\r\n            // left: -100%;\r\n            transition: 0.3s;\r\n            &_active {\r\n                left: 0;\r\n            }\r\n            &_ul {\r\n                margin-top: 24px;\r\n            }\r\n            &_li {\r\n                padding: 10px 14px;\r\n                cursor: pointer;\r\n                font-size: 16px;\r\n                font-weight: 400;\r\n                color: #bbb;\r\n            }\r\n        }\r\n        &__left {\r\n            display: flex;\r\n            justify-content: flex-start;\r\n            align-items: center;\r\n            .burger {\r\n                display: block;\r\n                margin-right: 21px;\r\n            }\r\n            .cross {\r\n                display: block;\r\n                margin-right: 21px;\r\n            }\r\n        }\r\n        &__right {\r\n            display: flex;\r\n            flex-basis: auto;\r\n            justify-content: flex-end;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n\r\n            .search {\r\n                margin: 0;\r\n            }\r\n        }\r\n        .ring {\r\n            display: none;\r\n        }\r\n        &__button {\r\n            display: none;\r\n        }\r\n    }\r\n    .header__menu {\r\n        .user-home__left {\r\n            display: block;\r\n        }\r\n        .user-home__filter {\r\n            padding: 0;\r\n        }\r\n        .header__menu_li {\r\n            padding: 0 14px;\r\n            margin-bottom: 10px;\r\n        }\r\n        .header__menu_li {\r\n            padding: 0 14px;\r\n        }\r\n        .user-home__filters-wr {\r\n            margin: 0;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/common/Header/Header.scss":
/*!**************************************************!*\
  !*** ./src/components/common/Header/Header.scss ***!
  \**************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/common/Header/Header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_components_common_Header_Header_tsx.app.1858b01203a969279654.js.map