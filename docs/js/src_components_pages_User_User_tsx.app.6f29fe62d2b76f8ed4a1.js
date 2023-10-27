"use strict";
(self["webpackChunksporthub"] = self["webpackChunksporthub"] || []).push([["src_components_pages_User_User_tsx"],{

/***/ "./src/components/pages/User/User.tsx":
/*!********************************************!*\
  !*** ./src/components/pages/User/User.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Subscribers: () => (/* binding */ Subscribers),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _common_Header_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/Header/Header */ "./src/components/common/Header/Header.tsx");
/* harmony import */ var _common_Loading_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/Loading/Loading */ "./src/components/common/Loading/Loading.tsx");
/* harmony import */ var _utils_getDate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/getDate */ "./src/components/utils/getDate.tsx");
/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/redux */ "./src/components/hooks/redux.tsx");
/* harmony import */ var _store_slices_users__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/slices/users */ "./src/components/store/slices/users.tsx");
/* harmony import */ var _UserCommon_UserItem_UserItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./UserCommon/UserItem/UserItem */ "./src/components/pages/User/UserCommon/UserItem/UserItem.tsx");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/esm/index.esm.js");
/* harmony import */ var _config_firebase_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../config/firebase-config */ "./src/config/firebase-config.js");
/* harmony import */ var _store_slices_registration__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/slices/registration */ "./src/components/store/slices/registration.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }















var UserHome = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_swiper_shared_swiper-core_mjs-node_modules_swiper_shared_update-swiper_mjs"), __webpack_require__.e("vendors-node_modules_swiper_swiper-element-bundle_mjs"), __webpack_require__.e("src_components_pages_Creator_Video_Video_tsx"), __webpack_require__.e("src_components_pages_User_UserHome_UserHome_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./UserHome/UserHome */ "./src/components/pages/User/UserHome/UserHome.tsx"));
});
var UserChannel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("src_components_pages_Creator_Video_Video_tsx"), __webpack_require__.e("src_components_pages_User_UserChannel_UserChannel_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./UserChannel/UserChannel */ "./src/components/pages/User/UserChannel/UserChannel.tsx"));
});
var Subscribers = function Subscribers() {
  var _currentUser$subscrip;
  var selectorUsers = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)(function (state) {
    return state.usersSlice.data;
  });
  var selector = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)(function (state) {
    return state.regSlice.regData;
  });
  var currentUser = selectorUsers.filter(function (el) {
    return el.email === selector.email;
  })[0];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    className: "user-home__subscriptions",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
      className: "user-home__subscriptions_title",
      children: "My subscription"
    }), currentUser === null || currentUser === void 0 || (_currentUser$subscrip = currentUser.subscriptions) === null || _currentUser$subscrip === void 0 ? void 0 : _currentUser$subscrip.map(function (el) {
      var currentCreator = selectorUsers.filter(function (innerEl) {
        return innerEl.email === el;
      });
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_UserCommon_UserItem_UserItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        email: currentCreator[0].email,
        name: currentCreator[0].fname ? currentCreator[0].fname : '',
        imgUrl: currentCreator[0].photoUrl ? currentCreator[0].photoUrl : ''
      }, (0,uuid__WEBPACK_IMPORTED_MODULE_16__["default"])());
    })]
  });
};
var User = function User() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    usersData = _useState2[0],
    setUsersData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
    defaultVideos = _useState4[0],
    setDefaultVideos = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
    videos = _useState6[0],
    setVideos = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([true, false, false]),
    _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState7, 2),
    filterBtn = _useState8[0],
    setFilterBtn = _useState8[1];
  var selector = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)(function (state) {
    return state.regSlice.regData;
  });
  var selectorUsers = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)(function (state) {
    return state.usersSlice.data;
  });
  var dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_9__.useAppDispatch)();
  var defVideosshuffleVideos = function defVideosshuffleVideos() {
    setVideos(function (prev) {
      var copyArr = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prev);
      copyArr.sort(function () {
        return Math.random() - 0.5;
      });
      return prev = copyArr;
    });
    return videos;
  };
  var onHomeFilterClickHandler = function onHomeFilterClickHandler() {
    setVideos(function (prev) {
      prev = defaultVideos;
      var copyArr = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prev);
      copyArr.sort(function () {
        return Math.random() - 0.5;
      });
      return prev = copyArr;
    });
    return videos;
  };
  var onLatestFilterClickHandler = function onLatestFilterClickHandler() {
    setVideos(function (prev) {
      prev = defaultVideos;
      var copyArr = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prev);
      copyArr.sort(function (a, b) {
        return (0,_utils_getDate__WEBPACK_IMPORTED_MODULE_8__["default"])(a.date) - (0,_utils_getDate__WEBPACK_IMPORTED_MODULE_8__["default"])(b.date);
      });
      return prev = copyArr;
    });
  };
  var onViewLaterClickHandler = function onViewLaterClickHandler() {
    selector.viewLater ? setVideos(selector === null || selector === void 0 ? void 0 : selector.viewLater) : setVideos([]);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    dispatch((0,_store_slices_users__WEBPACK_IMPORTED_MODULE_10__.getUsers)());
    var getVideos = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
        var usersWithVideos, filteredData, _loop, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              usersWithVideos = selectorUsers.filter(function (el) {
                return el.videosIds;
              });
              filteredData = [];
              _loop = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _loop(i) {
                var videosIds;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _loop$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      videosIds = usersWithVideos[i].videosIds;
                      if (videosIds && (videosIds === null || videosIds === void 0 ? void 0 : videosIds.length) > 0) {
                        videosIds.map( /*#__PURE__*/function () {
                          var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(el) {
                            var docRef, getVideo;
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
                              while (1) switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_12__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_13__.DB, 'videos', el);
                                case 2:
                                  docRef = _context.sent;
                                  _context.next = 5;
                                  return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_12__.getDoc)(docRef);
                                case 5:
                                  getVideo = _context.sent.data();
                                  setVideos(function (prev) {
                                    return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prev), [_objectSpread(_objectSpread({}, getVideo), {}, {
                                      videoId: el,
                                      fname: usersWithVideos[i].fname,
                                      lname: usersWithVideos[i].lname,
                                      authorPicUrl: usersWithVideos[i].photoUrl
                                    })]);
                                  });
                                  setDefaultVideos(function (prev) {
                                    return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prev), [_objectSpread(_objectSpread({}, getVideo), {}, {
                                      videoId: el,
                                      fname: usersWithVideos[i].fname,
                                      lname: usersWithVideos[i].lname,
                                      authorPicUrl: usersWithVideos[i].photoUrl
                                    })]);
                                  });
                                case 8:
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
                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }, _loop);
              });
              i = 0;
            case 5:
              if (!(i < usersWithVideos.length)) {
                _context3.next = 10;
                break;
              }
              return _context3.delegateYield(_loop(i), "t0", 7);
            case 7:
              i++;
              _context3.next = 5;
              break;
            case 10:
              _context3.next = 15;
              break;
            case 12:
              _context3.prev = 12;
              _context3.t1 = _context3["catch"](0);
              console.error(_context3.t1);
            case 15:
            case "end":
              return _context3.stop();
          }
        }, _callee2, null, [[0, 12]]);
      }));
      return function getVideos() {
        return _ref.apply(this, arguments);
      };
    }();
    getVideos();
    defVideosshuffleVideos();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    defVideosshuffleVideos();
  }, [usersData]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    dispatch((0,_store_slices_registration__WEBPACK_IMPORTED_MODULE_14__.setRegData)({
      videos: defaultVideos
    }));
  }, [defaultVideos]);
  var LeftSectionFunc = function LeftSectionFunc() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: "user-home__left",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "user-home__filters-wr",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
          className: "".concat(filterBtn[0] ? ' active' : '', " user-home__filter"),
          onClick: function onClick() {
            onHomeFilterClickHandler();
            setFilterBtn([true, false, false]);
          },
          children: "Home"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
          className: "".concat(filterBtn[1] ? ' active' : '', " user-home__filter"),
          onClick: function onClick() {
            onLatestFilterClickHandler();
            setFilterBtn([false, true, false]);
          },
          children: "Latest"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
          className: "".concat(filterBtn[2] ? ' active' : '', " user-home__filter"),
          onClick: function onClick() {
            onViewLaterClickHandler();
            setFilterBtn([false, false, true]);
          },
          children: "View later"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(Subscribers, {})]
    });
  };
  if (defaultVideos.length < 1) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_common_Loading_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {});
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_common_Header_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
      mobChildren: LeftSectionFunc()
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: "user-home user-home__container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(LeftSectionFunc, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Routes, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(UserHome, {
            videos: videos,
            setVideos: setVideos
          }),
          index: true,
          path: "home"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(UserChannel, {}),
          path: "channel/*"
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),

/***/ "./src/components/pages/User/UserCommon/UserItem/UserItem.tsx":
/*!********************************************************************!*\
  !*** ./src/components/pages/User/UserCommon/UserItem/UserItem.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserItem.scss */ "./src/components/pages/User/UserCommon/UserItem/UserItem.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/redux */ "./src/components/hooks/redux.tsx");
/* harmony import */ var _store_slices_creator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../store/slices/creator */ "./src/components/store/slices/creator.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var UserItem = function UserItem(_ref) {
  var email = _ref.email,
    name = _ref.name,
    imgUrl = _ref.imgUrl;
  var dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  var selectorCreatorEmail = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function (state) {
    return state.creatorSlice.creatorEmail.email;
  });
  var currentUserEmailFormatted = email.replace(/\./g, '');
  var onUserClickHandler = function onUserClickHandler() {
    dispatch((0,_store_slices_creator__WEBPACK_IMPORTED_MODULE_3__.setCreatorEmail)({
      email: email
    }));
    navigate("../../../user/channel/".concat(currentUserEmailFormatted));
  };
  console.log();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "user-item ".concat(window.location.href.includes('channel') && selectorCreatorEmail === email ? 'active' : ''),
    onClick: function onClick() {
      return onUserClickHandler();
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
      className: "user-item__img",
      src: imgUrl
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      className: "user-item__name",
      children: name
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserItem);

/***/ }),

/***/ "./src/components/utils/getDate.tsx":
/*!******************************************!*\
  !*** ./src/components/utils/getDate.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDate)
/* harmony export */ });
function getDate(oldDate) {
  // вместо any должен быть Timestamp,но его  тс находить не хочет :(
  var currentDay = new Date().getTime();
  return +((currentDay - new Date(oldDate).getTime()) / 1000 / 60 / 60 / 24).toFixed(0);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserCommon/UserItem/UserItem.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserCommon/UserItem/UserItem.scss ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.user-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  margin-bottom: 4px;
  border: 1px solid transparent;
  transition: 0.3s;
  border-radius: 5px;
}
.user-item__img {
  margin-right: 8px;
  width: 24px;
  height: 24px;
  border-radius: 24px;
}
.user-item__name {
  color: #bbb;
  font-size: 14px;
  font-weight: 400;
}
.user-item:hover {
  border: 1px solid #fff;
}
.user-item.active {
  border-radius: 8px;
  background: var(--9, #222);
}`, "",{"version":3,"sources":["webpack://./src/components/pages/User/UserCommon/UserItem/UserItem.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,mBAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,6BAAA;EACA,gBAAA;EACA,kBAAA;AACJ;AACI;EACI,iBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;AACR;AAEI;EACI,WAAA;EACA,eAAA;EACA,gBAAA;AAAR;AAGI;EACI,sBAAA;AADR;AAGI;EACI,kBAAA;EACA,0BAAA;AADR","sourcesContent":[".user-item {\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 8px;\r\n    margin-bottom: 4px;\r\n    border: 1px solid transparent;\r\n    transition: 0.3s;\r\n    border-radius: 5px;\r\n\r\n    &__img {\r\n        margin-right: 8px;\r\n        width: 24px;\r\n        height: 24px;\r\n        border-radius: 24px;\r\n    }\r\n\r\n    &__name {\r\n        color: #bbb;\r\n        font-size: 14px;\r\n        font-weight: 400;\r\n    }\r\n\r\n    &:hover {\r\n        border: 1px solid #fff;\r\n    }\r\n    &.active {\r\n        border-radius: 8px;\r\n        background: var(--9, #222);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/pages/User/UserCommon/UserItem/UserItem.scss":
/*!*********************************************************************!*\
  !*** ./src/components/pages/User/UserCommon/UserItem/UserItem.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserItem_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./UserItem.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserCommon/UserItem/UserItem.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserItem_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserItem_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserItem_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserItem_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_components_pages_User_User_tsx.app.6f29fe62d2b76f8ed4a1.js.map