"use strict";
(self["webpackChunksporthub"] = self["webpackChunksporthub"] || []).push([["src_components_pages_Creator_Home_CrHome_tsx"],{

/***/ "./src/components/pages/Creator/Home/CrHome.tsx":
/*!******************************************************!*\
  !*** ./src/components/pages/Creator/Home/CrHome.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/Button/Button */ "./src/components/ui/Button/Button.tsx");
/* harmony import */ var _ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/IconRenderer/IconRenderer */ "./src/components/ui/IconRenderer/IconRenderer.tsx");
/* harmony import */ var _CrHome_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CrHome.scss */ "./src/components/pages/Creator/CrHome.scss");
/* harmony import */ var _Video_Video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Video/Video */ "./src/components/pages/Creator/Video/Video.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/redux */ "./src/components/hooks/redux.tsx");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_getDate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utils/getDate */ "./src/components/utils/getDate.tsx");
/* harmony import */ var _common_Loading_Loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/Loading/Loading */ "./src/components/common/Loading/Loading.tsx");
/* harmony import */ var _store_slices_users__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../store/slices/users */ "./src/components/store/slices/users.tsx");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/esm/index.esm.js");
/* harmony import */ var _config_firebase_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../config/firebase-config */ "./src/config/firebase-config.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
















var CrHome = function CrHome() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    videosArr = _useState2[0],
    setVideosArr = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
    filteredVideosArr = _useState4[0],
    setFilteredVideosArr = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
    isLoaded = _useState6[0],
    setIsLoaded = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([true, false, false, false]),
    _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState7, 2),
    activeButtonArr = _useState8[0],
    setActiveButtonArr = _useState8[1];
  var videosIds = [];
  var dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_10__.useAppDispatch)();
  var selector = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_10__.useAppSelector)(function (state) {
    return state.regSlice.regData;
  });
  var getVideoData = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
      var _videosIds;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_15__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_15__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_16__.DB, 'users', selector.email)).then(function (res) {
              var _res$data;
              return (_res$data = res.data()) === null || _res$data === void 0 ? void 0 : _res$data.videosIds;
            });
          case 3:
            videosIds = _context2.sent;
            if (videosIds && ((_videosIds = videosIds) === null || _videosIds === void 0 ? void 0 : _videosIds.length) > 0) {
              videosIds.map( /*#__PURE__*/function () {
                var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(el) {
                  var docRef, getVideo;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_15__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_16__.DB, 'videos', el);
                      case 2:
                        docRef = _context.sent;
                        _context.next = 5;
                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_15__.getDoc)(docRef);
                      case 5:
                        getVideo = _context.sent.data();
                        setVideosArr(function (prev) {
                          return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), [_objectSpread(_objectSpread({}, getVideo), {}, {
                            videoId: el
                          })]);
                        });
                        setFilteredVideosArr(function (prev) {
                          return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), [_objectSpread(_objectSpread({}, getVideo), {}, {
                            videoId: el
                          })]);
                        });
                        setIsLoaded(true);
                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }());
            }
            setIsLoaded(true);
            _context2.next = 11;
            break;
          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 8]]);
    }));
    return function getVideoData() {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    dispatch((0,_store_slices_users__WEBPACK_IMPORTED_MODULE_14__.getUsers)());
    getVideoData();
  }, []);
  var filterByType = function filterByType(type) {
    if (type === 'All') {
      setFilteredVideosArr(videosArr);
    } else if (type === 'Mind') {
      setFilteredVideosArr(videosArr.filter(function (el) {
        return el.category === 'Mind';
      }));
    } else if (type === 'Body') {
      setFilteredVideosArr(videosArr.filter(function (el) {
        return el.category === 'Body';
      }));
    } else if (type === 'Soul') {
      setFilteredVideosArr(videosArr.filter(function (el) {
        return el.category === 'Soul';
      }));
    } else {
      sweetalert__WEBPACK_IMPORTED_MODULE_11___default()('Something went wrong');
    }
  };
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_18__.useNavigate)();
  if (!isLoaded) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_common_Loading_Loading__WEBPACK_IMPORTED_MODULE_13__["default"], {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
    className: "creator-container creator",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
      className: "creator__top",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: "creator__video-play-tabs",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
          className: "creator__tab creator__video_tab active",
          children: "Your video"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
          className: "creator__tab creator__play_tab",
          onClick: function onClick() {
            return navigate('../home-cr-playlist');
          },
          children: "Playlists"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "creator__add-video-btn",
        onClickHandler: function onClickHandler() {
          navigate('../addvideo1');
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_7__["default"], {
          id: "plus",
          className: "creator__add-video-svg"
        }), "Add new video"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
      className: "creator__types",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "creator__type ".concat(activeButtonArr[0] ? 'active' : '', " creator__type_all"),
        onClick: function onClick(e) {
          filterByType('All');
          setActiveButtonArr([true, false, false, false]);
        },
        children: "All"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "creator__type ".concat(activeButtonArr[1] ? 'active' : '', " creator__type_all"),
        onClick: function onClick() {
          setActiveButtonArr([false, true, false, false]);
          filterByType('Mind');
        },
        children: "Mind"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "creator__type ".concat(activeButtonArr[2] ? 'active' : '', " creator__type_all"),
        onClick: function onClick() {
          setActiveButtonArr([false, false, true, false]);
          filterByType('Body');
        },
        children: "Body"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "creator__type ".concat(activeButtonArr[3] ? 'active' : '', " creator__type_all"),
        onClick: function onClick() {
          setActiveButtonArr([false, false, false, true]);
          filterByType('Soul');
        },
        children: "Soul"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
      className: "creator__videos",
      children: filteredVideosArr ? filteredVideosArr.map(function (el) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Video_Video__WEBPACK_IMPORTED_MODULE_9__["default"], {
          email: el.email,
          title: el.title,
          previewUrl: el.previewUrl,
          fName: el.fname,
          lName: el.lname,
          date: (0,_utils_getDate__WEBPACK_IMPORTED_MODULE_12__["default"])(el.date),
          author: false,
          authorPicUrl: el.authorPicUrl,
          videoObj: el,
          videoId: el.videoId
        }, (0,uuid__WEBPACK_IMPORTED_MODULE_19__["default"])());
      }) : ''
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CrHome);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Creator/CrHome.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Creator/CrHome.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.creator-container {
  padding: 0 24px;
  max-width: 1440px;
  margin: 0 auto;
}

.creator__top {
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
}
.creator__video-play-tabs {
  display: flex;
}
.creator__tab {
  cursor: pointer;
  color: #bbb;
  font-size: 24px;
  font-weight: 500;
  padding: 14px 24px;
}
.creator__tab.active {
  color: #fff;
  border-radius: 8px;
  background: var(--9, #222);
}
.creator__add-video-btn {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.creator__add-video-svg {
  margin-right: 10px;
}
.creator__types {
  display: flex;
  margin-top: 40px;
  border-bottom: 1px solid #222;
}
.creator__type {
  cursor: pointer;
  padding: 8px 24px;
  font-size: 16px;
  color: #777;
  font-weight: 600;
}
.creator__type.active {
  border-bottom: 1px solid #ad7955;
  color: #fff;
}
.creator__videos {
  display: flex;
  flex-wrap: wrap;
  gap: 25px 21px;
  margin-top: 22px;
}

.playlist__videos {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

@media screen and (max-width: 767px) {
  .creator__types {
    justify-content: center;
  }
  .creator__videos {
    justify-content: center;
  }
  .playlist__videos {
    justify-content: center;
  }
  .creator {
    padding: 0 16px;
  }
  .creator__top {
    margin-top: 29px;
  }
  .creator__tab {
    font-size: 16px;
    padding: 10px 15px;
  }
  .creator__add-video-btn {
    position: fixed;
    bottom: 25px;
    z-index: 999;
    right: 25px;
  }
  .creator__types {
    margin-top: 15px;
    width: 100%;
    justify-content: space-between;
    padding: 0 14px;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Creator/CrHome.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;EACA,iBAAA;EACA,cAAA;AACJ;;AAEI;EACI,gBAAA;EACA,aAAA;EACA,8BAAA;AACR;AAEI;EACI,aAAA;AAAR;AAGI;EACI,eAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AADR;AAEQ;EACI,WAAA;EACA,kBAAA;EACA,0BAAA;AAAZ;AAOI;EACI,WAAA;EACA,eAAA;EACA,gBAAA;EAEA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AANR;AASI;EACI,kBAAA;AAPR;AASI;EACI,aAAA;EACA,gBAAA;EACA,6BAAA;AAPR;AASI;EACI,eAAA;EACA,iBAAA;EACA,eAAA;EACA,WAAA;EACA,gBAAA;AAPR;AAQQ;EACI,gCAAA;EACA,WAAA;AANZ;AAUI;EACI,aAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;AARR;;AAeI;EACI,aAAA;EACA,eAAA;EACA,SAAA;AAZR;;AAgBA;EACI;IACI,uBAAA;EAbN;EAeE;IACI,uBAAA;EAbN;EAiBM;IACI,uBAAA;EAfV;EAkBE;IACI,eAAA;EAhBN;EAiBM;IACI,gBAAA;EAfV;EAiBM;IACI,eAAA;IACA,kBAAA;EAfV;EAiBM;IACI,eAAA;IACA,YAAA;IACA,YAAA;IACA,WAAA;EAfV;EAkBM;IACI,gBAAA;IACA,WAAA;IACA,8BAAA;IACA,eAAA;EAhBV;AACF","sourcesContent":[".creator-container {\r\n    padding: 0 24px;\r\n    max-width: 1440px;\r\n    margin: 0 auto;\r\n}\r\n.creator {\r\n    &__top {\r\n        margin-top: 35px;\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    &__video-play-tabs {\r\n        display: flex;\r\n    }\r\n\r\n    &__tab {\r\n        cursor: pointer;\r\n        color: #bbb;\r\n        font-size: 24px;\r\n        font-weight: 500;\r\n        padding: 14px 24px;\r\n        &.active {\r\n            color: #fff;\r\n            border-radius: 8px;\r\n            background: var(--9, #222);\r\n        }\r\n    }\r\n\r\n    &__video {\r\n    }\r\n\r\n    &__add-video-btn {\r\n        color: #fff;\r\n        font-size: 16px;\r\n        font-weight: 600;\r\n\r\n        padding: 10px 15px;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n\r\n    &__add-video-svg {\r\n        margin-right: 10px;\r\n    }\r\n    &__types {\r\n        display: flex;\r\n        margin-top: 40px;\r\n        border-bottom: 1px solid #222;\r\n    }\r\n    &__type {\r\n        cursor: pointer;\r\n        padding: 8px 24px;\r\n        font-size: 16px;\r\n        color: #777;\r\n        font-weight: 600;\r\n        &.active {\r\n            border-bottom: 1px solid #ad7955;\r\n            color: #fff;\r\n        }\r\n    }\r\n\r\n    &__videos {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        gap: 25px 21px;\r\n        margin-top: 22px;\r\n    }\r\n}\r\n\r\n// playlists\r\n\r\n.playlist {\r\n    &__videos {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        gap: 18px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .creator__types {\r\n        justify-content: center;\r\n    }\r\n    .creator__videos {\r\n        justify-content: center;\r\n    }\r\n\r\n    .playlist {\r\n        &__videos {\r\n            justify-content: center;\r\n        }\r\n    }\r\n    .creator {\r\n        padding: 0 16px;\r\n        &__top {\r\n            margin-top: 29px;\r\n        }\r\n        &__tab {\r\n            font-size: 16px;\r\n            padding: 10px 15px;\r\n        }\r\n        &__add-video-btn {\r\n            position: fixed;\r\n            bottom: 25px;\r\n            z-index: 999;\r\n            right: 25px;\r\n        }\r\n\r\n        &__types {\r\n            margin-top: 15px;\r\n            width: 100%;\r\n            justify-content: space-between;\r\n            padding: 0 14px;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/pages/Creator/CrHome.scss":
/*!**************************************************!*\
  !*** ./src/components/pages/Creator/CrHome.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_CrHome_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./CrHome.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Creator/CrHome.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_CrHome_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_CrHome_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_CrHome_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_CrHome_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ })

}]);
//# sourceMappingURL=src_components_pages_Creator_Home_CrHome_tsx.app.997e1107378afbc3d8fe.js.map