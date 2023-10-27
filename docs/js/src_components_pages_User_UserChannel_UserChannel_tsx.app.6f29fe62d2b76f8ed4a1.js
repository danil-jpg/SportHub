"use strict";
(self["webpackChunksporthub"] = self["webpackChunksporthub"] || []).push([["src_components_pages_User_UserChannel_UserChannel_tsx"],{

/***/ "./src/components/pages/Creator/HomePlay/Playlist/Playlist.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/pages/Creator/HomePlay/Playlist/Playlist.tsx ***!
  \*********************************************************************/
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
/* harmony import */ var _Playlist_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Playlist.scss */ "./src/components/pages/Creator/HomePlay/Playlist/Playlist.scss");
/* harmony import */ var _Video_Video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Video/Video */ "./src/components/pages/Creator/Video/Video.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _utils_getDate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utils/getDate */ "./src/components/utils/getDate.tsx");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/esm/index.esm.js");
/* harmony import */ var _config_firebase_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../config/firebase-config */ "./src/config/firebase-config.js");
/* harmony import */ var _common_Loading_Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/Loading/Loading */ "./src/components/common/Loading/Loading.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }












var Playlist = function Playlist(_ref) {
  var playlist = _ref.playlist,
    index = _ref.index,
    type = _ref.type;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    showAll = _useState2[0],
    setShowAll = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
    hasLoaded = _useState4[0],
    setHasLoaded = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
    playlistVideoObj = _useState6[0],
    setPlaylistVideoObj = _useState6[1];
  var inputRef = react__WEBPACK_IMPORTED_MODULE_5___default().useRef(null);
  var getPlaylistVideos = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            try {
              setPlaylistVideoObj(function (prev) {
                return [];
              });
              playlist.videos.map( /*#__PURE__*/function () {
                var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(innerEl, innerIndex) {
                  var docRef, getVideoItem;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_10__.DB, 'videos', innerEl);
                      case 2:
                        docRef = _context.sent;
                        _context.next = 5;
                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.getDoc)(docRef);
                      case 5:
                        getVideoItem = _context.sent.data();
                        setPlaylistVideoObj(function (prev) {
                          return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), [_objectSpread(_objectSpread({}, getVideoItem), {}, {
                            videoId: innerEl
                          })]);
                        });
                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function (_x, _x2) {
                  return _ref3.apply(this, arguments);
                };
              }());
            } catch (e) {
              console.error(e);
            }
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getPlaylistVideos() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    getPlaylistVideos();
    setHasLoaded(true);
  }, []);
  if (!hasLoaded) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_common_Loading_Loading__WEBPACK_IMPORTED_MODULE_11__["default"], {});
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    className: "playlist",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: "creator__playlist-line",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        className: "creator__playlist_title",
        children: type === 'channel' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("a", {
          children: playlist.title
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Link, {
          to: "../playlist?playlist-index=".concat(index),
          children: playlist.title
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        className: "".concat(showAll ? 'active' : '', " creator__playlist_view-more"),
        ref: inputRef,
        onClick: function onClick() {
          return setShowAll(!showAll);
        },
        children: "View all"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
      className: "playlist__videos",
      children: playlistVideoObj.map(function (el, index) {
        return showAll ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Video_Video__WEBPACK_IMPORTED_MODULE_7__["default"], {
          email: el.email,
          title: el.title,
          previewUrl: el.previewUrl,
          fName: el.fname,
          lName: el.lname,
          date: (0,_utils_getDate__WEBPACK_IMPORTED_MODULE_8__["default"])(el.date),
          author: false,
          authorPicUrl: el.authorPicUrl,
          videoObj: el,
          videoId: el.videoId
        }, (0,uuid__WEBPACK_IMPORTED_MODULE_14__["default"])()) : index < 4 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Video_Video__WEBPACK_IMPORTED_MODULE_7__["default"], {
          email: el.email,
          title: el.title,
          previewUrl: el.previewUrl,
          fName: el.fname,
          lName: el.lname,
          date: (0,_utils_getDate__WEBPACK_IMPORTED_MODULE_8__["default"])(el.date),
          author: false,
          authorPicUrl: el.authorPicUrl,
          videoObj: el,
          videoId: el.videoId
        }, (0,uuid__WEBPACK_IMPORTED_MODULE_14__["default"])()) : '';
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Playlist);

/***/ }),

/***/ "./src/components/pages/User/UserChannel/Banner/Banner.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/pages/User/UserChannel/Banner/Banner.tsx ***!
  \*****************************************************************/
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
/* harmony import */ var _ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/IconRenderer/IconRenderer */ "./src/components/ui/IconRenderer/IconRenderer.tsx");
/* harmony import */ var _Banner_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Banner.scss */ "./src/components/pages/User/UserChannel/Banner/Banner.scss");
/* harmony import */ var _assets_img_user_card_default_user_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../assets/img/user/card/default-user.jpg */ "./src/assets/img/user/card/default-user.jpg");
/* harmony import */ var _assets_img_user_card_default_user_jpg_as_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../assets/img/user/card/default-user.jpg?as=webp */ "./src/assets/img/user/card/default-user.jpg?as=webp");
/* harmony import */ var _ui_Button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ui/Button/Button */ "./src/components/ui/Button/Button.tsx");
/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/redux */ "./src/components/hooks/redux.tsx");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/esm/index.esm.js");
/* harmony import */ var _config_firebase_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../config/firebase-config */ "./src/config/firebase-config.js");
/* harmony import */ var _store_slices_users__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../store/slices/users */ "./src/components/store/slices/users.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");















var Banner = function Banner() {
  var _channelData$0$subscr, _channelData$0$videos, _channelData$0$videos2, _channelData$0$videos3, _channelData$0$subscr2, _channelData$0$videos4;
  var selectorCreatorEmail = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)(function (state) {
    return state.creatorSlice.creatorEmail.email;
  });
  var selectorUsers = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)(function (state) {
    return state.usersSlice.data;
  });
  var selectorUserEmail = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)(function (state) {
    return state.regSlice.regData.email;
  });
  var dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_9__.useAppDispatch)();
  var getCurrentUser = selectorUsers.filter(function (el) {
    return el.email === selectorUserEmail;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(getCurrentUser[0].subscriptions && getCurrentUser[0].subscriptions.includes(selectorCreatorEmail)),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    sbsBtn = _useState2[0],
    setSbsBtn = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(selectorUsers.filter(function (el) {
      return el.email === selectorCreatorEmail;
    })),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
    channelData = _useState4[0],
    setChannelData = _useState4[1];
  var onSubscribeBtnClickHandler = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var docRef, docRefCreator, userUpdate, creatorUpdate, _userUpdate, _creatorUpdate;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_11__.DB, 'users', selectorUserEmail);
            docRefCreator = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_11__.DB, 'users', selectorCreatorEmail);
            if (!(getCurrentUser[0].subscriptions && getCurrentUser[0].subscriptions.includes(selectorCreatorEmail))) {
              _context.next = 13;
              break;
            }
            _context.next = 5;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.updateDoc)(docRef, {
              subscriptions: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.arrayRemove)(selectorCreatorEmail)
            });
          case 5:
            userUpdate = _context.sent;
            _context.next = 8;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.updateDoc)(docRefCreator, {
              subscribers: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.arrayRemove)(selectorUserEmail)
            });
          case 8:
            creatorUpdate = _context.sent;
            dispatch((0,_store_slices_users__WEBPACK_IMPORTED_MODULE_12__.getUsers)());
            setSbsBtn(false);
            _context.next = 21;
            break;
          case 13:
            _context.next = 15;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.updateDoc)(docRef, {
              subscriptions: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.arrayUnion)(selectorCreatorEmail)
            });
          case 15:
            _userUpdate = _context.sent;
            _context.next = 18;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.updateDoc)(docRefCreator, {
              subscribers: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.arrayUnion)(selectorUserEmail)
            });
          case 18:
            _creatorUpdate = _context.sent;
            dispatch((0,_store_slices_users__WEBPACK_IMPORTED_MODULE_12__.getUsers)());
            setSbsBtn(true);
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onSubscribeBtnClickHandler() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
    children: channelData[0].coverPhotoUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "banner",
      style: {
        backgroundImage: "url(".concat(channelData[0].coverPhotoUrl, ")")
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "banner__empty"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: " banner__left",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: " banner_avatar-wr",
          children: [channelData[0].photoUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("img", {
            className: " banner_avatar_img",
            alt: "avatar",
            src: channelData[0].photoUrl
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("picture", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("source", {
              src: _assets_img_user_card_default_user_jpg_as_webp__WEBPACK_IMPORTED_MODULE_7__
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("img", {
              className: " banner_avatar_img",
              alt: "avatar",
              src: _assets_img_user_card_default_user_jpg__WEBPACK_IMPORTED_MODULE_6__
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
            className: " banner_avatar_text",
            children: "".concat(channelData[0].fname, " ").concat(channelData[0].lname)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: " banner__center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: " banner__data",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_4__["default"], {
              id: "subs"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
              className: " banner__inner-data-wr",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
                className: " banner__data-num",
                children: channelData[0].subscribers && ((_channelData$0$subscr = channelData[0].subscribers) === null || _channelData$0$subscr === void 0 ? void 0 : _channelData$0$subscr.length) > 0 ? channelData[0].subscribers.length : 0
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
                className: " banner__data-text",
                children: "Subscribers"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: " banner__data",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_4__["default"], {
              id: "camera"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
              className: " banner__inner-data-wr",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
                className: " banner__data-num",
                children: "".concat((_channelData$0$videos = channelData[0].videosIds) !== null && _channelData$0$videos !== void 0 && _channelData$0$videos.length && ((_channelData$0$videos2 = channelData[0].videosIds) === null || _channelData$0$videos2 === void 0 ? void 0 : _channelData$0$videos2.length) > 0 ? (_channelData$0$videos3 = channelData[0].videosIds) === null || _channelData$0$videos3 === void 0 ? void 0 : _channelData$0$videos3.length : 0)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
                className: " banner__data-text",
                children: "Videos"
              })]
            })]
          })]
        }), sbsBtn ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_Button_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: "banner__subs-btn button_unsubscribe",
          onClickHandler: onSubscribeBtnClickHandler,
          children: "Unsubscribe"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_Button_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: "banner__subs-btn ",
          onClickHandler: onSubscribeBtnClickHandler,
          children: "Subscribe"
        })]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "banner",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: " banner__left",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: " banner_avatar-wr",
          children: [channelData[0].photoUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("img", {
            className: " banner_avatar_img",
            alt: "avatar",
            src: channelData[0].photoUrl
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("img", {
            className: " banner_avatar_img",
            alt: "avatar",
            src: _assets_img_user_card_default_user_jpg__WEBPACK_IMPORTED_MODULE_6__
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
            className: " banner_avatar_text",
            children: "".concat(channelData[0].fname, " ").concat(channelData[0].lname)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: " banner__center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: " banner__data",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_4__["default"], {
              id: "subs"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
              className: " banner__inner-data-wr",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
                className: " banner__data-num",
                children: channelData[0].subscribers && ((_channelData$0$subscr2 = channelData[0].subscribers) === null || _channelData$0$subscr2 === void 0 ? void 0 : _channelData$0$subscr2.length) > 1 ? channelData[0].subscribers.length : 0
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
                className: " banner__data-text",
                children: "Subscribers"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: " banner__data",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_4__["default"], {
              id: "camera"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
              className: " banner__inner-data-wr",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
                className: " banner__data-num",
                children: "".concat((_channelData$0$videos4 = channelData[0].videos) === null || _channelData$0$videos4 === void 0 ? void 0 : _channelData$0$videos4.length)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
                className: " banner__data-text",
                children: "Videos"
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_Button_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: " banner__subs-btn",
          children: "Subscribe"
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

/***/ }),

/***/ "./src/components/pages/User/UserChannel/Tabs/Tabs.tsx":
/*!*************************************************************!*\
  !*** ./src/components/pages/User/UserChannel/Tabs/Tabs.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Tabs_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tabs.scss */ "./src/components/pages/User/UserChannel/Tabs/Tabs.scss");
/* harmony import */ var _Creator_Video_Video__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Creator/Video/Video */ "./src/components/pages/Creator/Video/Video.tsx");
/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/redux */ "./src/components/hooks/redux.tsx");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony import */ var _ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../ui/IconRenderer/IconRenderer */ "./src/components/ui/IconRenderer/IconRenderer.tsx");
/* harmony import */ var _Creator_HomePlay_Playlist_Playlist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Creator/HomePlay/Playlist/Playlist */ "./src/components/pages/Creator/HomePlay/Playlist/Playlist.tsx");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/esm/index.esm.js");
/* harmony import */ var _config_firebase_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../config/firebase-config */ "./src/config/firebase-config.js");
/* harmony import */ var _utils_getDate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../utils/getDate */ "./src/components/utils/getDate.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }












var Tabs = function Tabs(_ref) {
  var _channelData$0$playli;
  (0,_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([true, false, false]),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    tabs = _useState2[0],
    setTabs = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
    videos = _useState4[0],
    setVideos = _useState4[1];
  var selectorEmail = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)(function (state) {
    return state.creatorSlice.creatorEmail.email;
  });
  var selectorUsers = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)(function (state) {
    return state.usersSlice.data;
  });
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(selectorUsers.filter(function (el) {
      return el.email === selectorEmail;
    })),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
    channelData = _useState6[0],
    setChannelData = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    var getVideos = /*#__PURE__*/function () {
      var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee2() {
        var videosIds;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              try {
                videosIds = channelData[0].videosIds;
                if (videosIds && (videosIds === null || videosIds === void 0 ? void 0 : videosIds.length) > 0) {
                  videosIds.map( /*#__PURE__*/function () {
                    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee(el) {
                      var docRef, getVideo;
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
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
                              return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), [_objectSpread(_objectSpread({}, getVideo), {}, {
                                videoId: el
                              })]);
                            });
                          case 7:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee);
                    }));
                    return function (_x) {
                      return _ref3.apply(this, arguments);
                    };
                  }());
                }
              } catch (e) {
                console.error(e);
              }
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function getVideos() {
        return _ref2.apply(this, arguments);
      };
    }();
    getVideos();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    className: "tabs",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: "tabs__items",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
        className: "".concat(tabs[0] ? 'active' : '', " tab__item "),
        onClick: function onClick() {
          return setTabs([true, false, false]);
        },
        children: "Video"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
        className: "".concat(tabs[1] ? 'active' : '', " tab__item "),
        onClick: function onClick() {
          return setTabs([false, true, false]);
        },
        children: "Bio"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
        className: "".concat(tabs[2] ? 'active' : '', " tab__item "),
        onClick: function onClick() {
          return setTabs([false, false, true]);
        },
        children: "Playlists"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: "tabs__content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: "".concat(tabs[0] ? 'active' : '', " tabs__videos"),
        children: videos ? videos.map(function (el) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Creator_Video_Video__WEBPACK_IMPORTED_MODULE_8__["default"], {
            email: el.email,
            title: el.title,
            previewUrl: el.previewUrl,
            fName: el.fname,
            lName: el.lname,
            date: (0,_utils_getDate__WEBPACK_IMPORTED_MODULE_14__["default"])(el.date),
            author: false,
            authorPicUrl: el.authorPicUrl,
            videoObj: el,
            videoId: el.videoId
          }, (0,uuid__WEBPACK_IMPORTED_MODULE_16__["default"])());
        }) : ''
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "".concat(tabs[1] ? 'active' : '', " tabs__bio"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "bio__about",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
            className: "bio__title",
            children: "About"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
            className: "bio__descr",
            children: channelData[0].bio
          })]
        }), channelData[0].facebook || channelData[0].inst || channelData[0].twitter ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "bio__social",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
            className: "bio__social_title",
            children: "About"
          }), channelData[0].facebook ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: "bio__social_line",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_10__["default"], {
              id: "facebook"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
              className: "bio__social_text",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("a", {
                href: "".concat(channelData[0].facebook),
                children: "Facebook"
              })
            })]
          }) : '', channelData[0].inst ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: "bio__social_line",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_10__["default"], {
              id: "inst"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("a", {
              href: "".concat(channelData[0].inst),
              children: "Instagram"
            })]
          }) : '', channelData[0].twitter ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: "bio__social_line",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_10__["default"], {
              id: "twitter"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("a", {
              href: "".concat(channelData[0].twitter),
              children: "Twitter"
            })]
          }) : '']
        }) : '']
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: "".concat(tabs[2] ? 'active' : '', " tabs__playlists"),
        children: (_channelData$0$playli = channelData[0].playlists) === null || _channelData$0$playli === void 0 ? void 0 : _channelData$0$playli.map(function (el, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Creator_HomePlay_Playlist_Playlist__WEBPACK_IMPORTED_MODULE_11__["default"], {
            index: index,
            playlist: el,
            type: "channel"
          }, index);
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);

/***/ }),

/***/ "./src/components/pages/User/UserChannel/UserChannel.tsx":
/*!***************************************************************!*\
  !*** ./src/components/pages/User/UserChannel/UserChannel.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserChannel_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserChannel.scss */ "./src/components/pages/User/UserChannel/UserChannel.scss");
/* harmony import */ var _Banner_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Banner/Banner */ "./src/components/pages/User/UserChannel/Banner/Banner.tsx");
/* harmony import */ var _Tabs_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tabs/Tabs */ "./src/components/pages/User/UserChannel/Tabs/Tabs.tsx");
/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/redux */ "./src/components/hooks/redux.tsx");
/* harmony import */ var _store_slices_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/slices/users */ "./src/components/store/slices/users.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var UserChannel = function UserChannel() {
  var selectorUsers = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)(function (state) {
    return state.usersSlice.data;
  });
  var selectorCreatorEmail = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)(function (state) {
    return state.creatorSlice.creatorEmail.email;
  });
  var currentCreator = selectorUsers.filter(function (el) {
    return el.email === selectorCreatorEmail;
  })[0].email;
  var dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();
  var currentUserEmailFormatted = currentCreator.replace(/\./g, '');
  var UserChannelJsx = function UserChannelJsx() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
        path: "".concat(currentUserEmailFormatted),
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "channel",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Banner_Banner__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "tabs-wr",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {})
          })]
        })
      })
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_store_slices_users__WEBPACK_IMPORTED_MODULE_5__.getUsers)());
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [currentUserEmailFormatted]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(UserChannelJsx, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserChannel);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Creator/HomePlay/Playlist/Playlist.scss":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Creator/HomePlay/Playlist/Playlist.scss ***!
  \*********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.creator-playlist a {
  color: #fff;
}

.creator__playlist-line {
  display: flex;
  justify-content: space-between;
  margin: 32px 0 24px;
}

.creator__playlist_title {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
}

.creator__playlist_view-more {
  color: #ad7955;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}
.creator__playlist_view-more.active {
  color: #fff;
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Creator/HomePlay/Playlist/Playlist.scss"],"names":[],"mappings":"AACI;EACI,WAAA;AAAR;;AAGA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;AAAJ;;AAEA;EACI,WAAA;EACA,eAAA;EACA,gBAAA;AACJ;;AAEA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;AACJ;AAAI;EACI,WAAA;AAER","sourcesContent":[".creator-playlist {\r\n    a {\r\n        color: #fff;\r\n    }\r\n}\r\n.creator__playlist-line {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 32px 0 24px;\r\n}\r\n.creator__playlist_title {\r\n    color: #fff;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n}\r\n\r\n.creator__playlist_view-more {\r\n    color: #ad7955;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    &.active {\r\n        color: #fff;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserChannel/Banner/Banner.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserChannel/Banner/Banner.scss ***!
  \*****************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.banner {
  background: grey;
  width: 100%;
  height: 480px;
  display: grid;
  margin-top: 24px;
  border-radius: 15px;
  grid-template-columns: 1fr 41%;
  background-repeat: no-repeat;
  background-size: cover;
}
.banner__left {
  padding-top: 133px;
}
.banner__center {
  display: flex;
  margin-top: 33px;
  padding-left: 3px;
}
.banner_avatar-wr {
  display: flex;
  align-items: center;
}
.banner__data {
  display: flex;
  margin-right: 29px;
}
.banner__inner-data-wr {
  margin-left: 18px;
  margin-top: 7px;
  display: block;
}
.banner__data-num {
  font-size: 18px;
  font-weight: 700;
}
.banner__data-text {
  font-size: 12px;
  font-weight: 300;
}
.banner__subs-btn {
  margin-top: 32px;
}
.banner_avatar_img {
  width: 64px;
  border-radius: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  margin-right: 8px;
}
.banner_avatar_text {
  font-size: 32px;
  font-weight: 600;
}

@media screen and (max-width: 996px) {
  .banner_avatar-wr {
    display: block;
  }
  .banner {
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  }
}
@media screen and (max-width: 576px) {
  .banner_avatar-wr {
    display: block;
  }
  .banner {
    grid-template-columns: 1fr;
    justify-content: center;
    height: 155.709px;
  }
  .banner_avatar_img {
    display: block;
    margin: 0 auto;
  }
  .banner_avatar_text {
    font-size: 24px;
    font-weight: 600;
    margin-top: 10px;
  }
  .banner__empty {
    display: none;
  }
  .banner__left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 120px;
  }
  .banner__center {
    justify-content: space-around;
    display: flex;
    padding: 0;
    border-radius: 8px;
    background: var(--9, #222);
    width: 100%;
    margin-top: 15px;
    width: 100%;
  }
  .banner__data {
    width: fit-content;
    margin: 0;
  }
  .banner .button {
    margin-top: 15px;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/pages/User/UserChannel/Banner/Banner.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,WAAA;EACA,aAAA;EACA,aAAA;EACA,gBAAA;EACA,mBAAA;EACA,8BAAA;EACA,4BAAA;EAEA,sBAAA;AAAJ;AACI;EACI,kBAAA;AACR;AAEI;EACI,aAAA;EACA,gBAAA;EACA,iBAAA;AAAR;AAKI;EACI,aAAA;EACA,mBAAA;AAHR;AAMI;EACI,aAAA;EACA,kBAAA;AAJR;AAOI;EACI,iBAAA;EACA,eAAA;EAEA,cAAA;AANR;AASI;EACI,eAAA;EACA,gBAAA;AAPR;AASI;EACI,eAAA;EACA,gBAAA;AAPR;AASI;EACI,gBAAA;AAPR;AAWQ;EACI,WAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;AATZ;AAWQ;EACI,eAAA;EACA,gBAAA;AATZ;;AAcA;EACI;IACI,cAAA;EAXN;EAaE;IACI,8BAAA;IACA,uBAAA;EAXN;AACF;AAcA;EACI;IACI,cAAA;EAZN;EAcE;IACI,0BAAA;IACA,uBAAA;IACA,iBAAA;EAZN;EAaM;IACI,cAAA;IACA,cAAA;EAXV;EAaM;IACI,eAAA;IACA,gBAAA;IACA,gBAAA;EAXV;EAaM;IACI,aAAA;EAXV;EAaM;IACI,aAAA;IACA,sBAAA;IACA,mBAAA;IACA,uBAAA;IACA,kBAAA;EAXV;EAaM;IACI,6BAAA;IACA,aAAA;IACA,UAAA;IACA,kBAAA;IACA,0BAAA;IACA,WAAA;IACA,gBAAA;IACA,WAAA;EAXV;EAaM;IACI,kBAAA;IACA,SAAA;EAXV;EAaM;IACI,gBAAA;EAXV;AACF","sourcesContent":[".banner {\r\n    background: grey;\r\n    width: 100%;\r\n    height: 480px;\r\n    display: grid;\r\n    margin-top: 24px;\r\n    border-radius: 15px;\r\n    grid-template-columns: 1fr 41%;\r\n    background-repeat: no-repeat;\r\n    // background-size: 100% 100%;\r\n    background-size: cover;\r\n    &__left {\r\n        padding-top: 133px;\r\n    }\r\n\r\n    &__center {\r\n        display: flex;\r\n        margin-top: 33px;\r\n        padding-left: 3px;\r\n    }\r\n    &_img {\r\n    }\r\n\r\n    &_avatar-wr {\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n\r\n    &__data {\r\n        display: flex;\r\n        margin-right: 29px;\r\n    }\r\n\r\n    &__inner-data-wr {\r\n        margin-left: 18px;\r\n        margin-top: 7px;\r\n\r\n        display: block;\r\n    }\r\n\r\n    &__data-num {\r\n        font-size: 18px;\r\n        font-weight: 700;\r\n    }\r\n    &__data-text {\r\n        font-size: 12px;\r\n        font-weight: 300;\r\n    }\r\n    &__subs-btn {\r\n        margin-top: 32px;\r\n    }\r\n\r\n    &_avatar {\r\n        &_img {\r\n            width: 64px;\r\n            border-radius: 64px;\r\n            height: 64px;\r\n            display: flex;\r\n            align-items: center;\r\n            margin-right: 8px;\r\n        }\r\n        &_text {\r\n            font-size: 32px;\r\n            font-weight: 600;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 996px) {\r\n    .banner_avatar-wr {\r\n        display: block;\r\n    }\r\n    .banner {\r\n        grid-template-columns: 1fr 1fr;\r\n        justify-content: center;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 576px) {\r\n    .banner_avatar-wr {\r\n        display: block;\r\n    }\r\n    .banner {\r\n        grid-template-columns: 1fr;\r\n        justify-content: center;\r\n        height: 155.709px;\r\n        &_avatar_img {\r\n            display: block;\r\n            margin: 0 auto;\r\n        }\r\n        &_avatar_text {\r\n            font-size: 24px;\r\n            font-weight: 600;\r\n            margin-top: 10px;\r\n        }\r\n        &__empty {\r\n            display: none;\r\n        }\r\n        &__left {\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            justify-content: center;\r\n            padding-top: 120px;\r\n        }\r\n        &__center {\r\n            justify-content: space-around;\r\n            display: flex;\r\n            padding: 0;\r\n            border-radius: 8px;\r\n            background: var(--9, #222);\r\n            width: 100%;\r\n            margin-top: 15px;\r\n            width: 100%;\r\n        }\r\n        &__data {\r\n            width: fit-content;\r\n            margin: 0;\r\n        }\r\n        .button {\r\n            margin-top: 15px;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserChannel/Tabs/Tabs.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserChannel/Tabs/Tabs.scss ***!
  \*************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.tabs-wr {
  margin-top: 32px;
}
.tabs__items {
  display: flex;
  margin-bottom: 16px;
}
.tabs__videos {
  display: none;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
}
.tabs__videos.active {
  display: grid;
}
.tabs__videos .creator__video {
  width: auto;
}
.tabs__videos .creator__video:last-of-type {
  margin-right: 0;
}
.tabs__bio {
  display: none;
}
.tabs__bio.active {
  display: grid;
}
.tabs__playlists {
  display: none;
}
.tabs__playlists.active {
  display: block;
}
.tabs .playlist__videos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
}
.tabs .playlist__videos.active {
  display: grid;
}
.tabs .playlist__videos .creator__video {
  width: auto;
}
.tabs .playlist__videos .creator__video:last-of-type {
  margin-right: 0;
}
.tabs .creator__video {
  width: auto;
}

.tabs__bio {
  margin-top: 25px;
  gap: 24px;
  grid-template-columns: 1fr 28%;
}

.bio__title {
  color: #bbb;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 4px;
}
.bio__descr {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
}
.bio__social {
  display: flex;
  width: 100%;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 8px;
  background: var(--9, #222);
}
.bio__social_title {
  font-size: 18px;
  font-weight: 600;
}
.bio__social_line {
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
}
.bio__social_text {
  color: #bbb;
  font-size: 14px;
  font-weight: 400;
}

.tab__item {
  cursor: pointer;
  color: #777;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px; /* 150% */
  padding: 5px 24px;
}
.tab__item.active {
  color: #fff;
  border-bottom: 1px solid #ad7955;
}

@media screen and (max-width: 1440px) {
  .tabs__videos {
    grid-template-columns: 1fr 1fr;
  }
  .tabs .playlist__videos {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 996px) {
  .tabs__bio {
    grid-template-columns: 1fr;
  }
}
@media screen and (max-width: 768px) {
  .tabs__videos {
    grid-template-columns: 1fr;
  }
  .tabs .playlist__videos {
    grid-template-columns: 1fr;
  }
}
@media screen and (max-width: 576px) {
  .tabs-wr {
    margin-top: 200px;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/pages/User/UserChannel/Tabs/Tabs.scss"],"names":[],"mappings":"AACI;EACI,gBAAA;AAAR;AAEI;EACI,aAAA;EACA,mBAAA;AAAR;AAMI;EACI,aAAA;EACA,kCAAA;EACA,SAAA;AAJR;AAKQ;EACI,aAAA;AAHZ;AAKQ;EACI,WAAA;AAHZ;AAIY;EACI,eAAA;AAFhB;AAOI;EACI,aAAA;AALR;AAMQ;EACI,aAAA;AAJZ;AAQI;EACI,aAAA;AANR;AAOQ;EACI,cAAA;AALZ;AAQI;EACI,aAAA;EACA,kCAAA;EACA,SAAA;AANR;AAOQ;EACI,aAAA;AALZ;AAOQ;EACI,WAAA;AALZ;AAMY;EACI,eAAA;AAJhB;AAQI;EACI,WAAA;AANR;;AASA;EACI,gBAAA;EACA,SAAA;EACA,8BAAA;AANJ;;AAYI;EACI,WAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AATR;AAYI;EACI,WAAA;EACA,eAAA;EACA,gBAAA;AAVR;AAaI;EACI,aAAA;EAEA,WAAA;EAEA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,SAAA;EACA,kBAAA;EACA,0BAAA;AAbR;AAcQ;EACI,eAAA;EACA,gBAAA;AAZZ;AAeQ;EACI,aAAA;EACA,QAAA;EACA,mBAAA;EACA,eAAA;AAbZ;AAgBQ;EACI,WAAA;EACA,eAAA;EACA,gBAAA;AAdZ;;AAoBI;EACI,eAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;EACA,iBAAA;AAjBR;AAmBQ;EACI,WAAA;EAEA,gCAAA;AAlBZ;;AAuBA;EACI;IACI,8BAAA;EApBN;EAuBM;IACI,8BAAA;EArBV;AACF;AAyBA;EACI;IACI,0BAAA;EAvBN;AACF;AA0BA;EACI;IACI,0BAAA;EAxBN;EA2BM;IACI,0BAAA;EAzBV;AACF;AA6BA;EACI;IACI,iBAAA;EA3BN;AACF","sourcesContent":[".tabs {\r\n    &-wr {\r\n        margin-top: 32px;\r\n    }\r\n    &__items {\r\n        display: flex;\r\n        margin-bottom: 16px;\r\n    }\r\n\r\n    &__content {\r\n    }\r\n\r\n    &__videos {\r\n        display: none;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n        gap: 24px;\r\n        &.active {\r\n            display: grid;\r\n        }\r\n        .creator__video {\r\n            width: auto;\r\n            &:last-of-type {\r\n                margin-right: 0;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__bio {\r\n        display: none;\r\n        &.active {\r\n            display: grid;\r\n        }\r\n    }\r\n\r\n    &__playlists {\r\n        display: none;\r\n        &.active {\r\n            display: block;\r\n        }\r\n    }\r\n    .playlist__videos {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n        gap: 24px;\r\n        &.active {\r\n            display: grid;\r\n        }\r\n        .creator__video {\r\n            width: auto;\r\n            &:last-of-type {\r\n                margin-right: 0;\r\n            }\r\n        }\r\n    }\r\n    .creator__video {\r\n        width: auto;\r\n    }\r\n}\r\n.tabs__bio {\r\n    margin-top: 25px;\r\n    gap: 24px;\r\n    grid-template-columns: 1fr 28%;\r\n}\r\n.bio {\r\n    &__about {\r\n    }\r\n\r\n    &__title {\r\n        color: #bbb;\r\n        font-size: 12px;\r\n        font-weight: 400;\r\n        margin-bottom: 4px;\r\n    }\r\n\r\n    &__descr {\r\n        color: #fff;\r\n        font-size: 14px;\r\n        font-weight: 400;\r\n    }\r\n\r\n    &__social {\r\n        display: flex;\r\n\r\n        width: 100%;\r\n\r\n        padding: 24px;\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n        gap: 24px;\r\n        border-radius: 8px;\r\n        background: var(--9, #222);\r\n        &_title {\r\n            font-size: 18px;\r\n            font-weight: 600;\r\n        }\r\n\r\n        &_line {\r\n            display: flex;\r\n            gap: 8px;\r\n            align-items: center;\r\n            cursor: pointer;\r\n        }\r\n\r\n        &_text {\r\n            color: #bbb;\r\n            font-size: 14px;\r\n            font-weight: 400;\r\n        }\r\n    }\r\n}\r\n\r\n.tab {\r\n    &__item {\r\n        cursor: pointer;\r\n        color: #777;\r\n        text-align: center;\r\n        font-size: 16px;\r\n        font-weight: 600;\r\n        line-height: 24px; /* 150% */\r\n        padding: 5px 24px;\r\n\r\n        &.active {\r\n            color: #fff;\r\n\r\n            border-bottom: 1px solid #ad7955;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1440px) {\r\n    .tabs__videos {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n    .tabs {\r\n        .playlist__videos {\r\n            grid-template-columns: 1fr 1fr;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 996px) {\r\n    .tabs__bio {\r\n        grid-template-columns: 1fr;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .tabs__videos {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    .tabs {\r\n        .playlist__videos {\r\n            grid-template-columns: 1fr;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 576px) {\r\n    .tabs-wr {\r\n        margin-top: 200px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserChannel/UserChannel.scss":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserChannel/UserChannel.scss ***!
  \***************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/pages/Creator/HomePlay/Playlist/Playlist.scss":
/*!**********************************************************************!*\
  !*** ./src/components/pages/Creator/HomePlay/Playlist/Playlist.scss ***!
  \**********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Playlist_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./Playlist.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Creator/HomePlay/Playlist/Playlist.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Playlist_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Playlist_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Playlist_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Playlist_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/User/UserChannel/Banner/Banner.scss":
/*!******************************************************************!*\
  !*** ./src/components/pages/User/UserChannel/Banner/Banner.scss ***!
  \******************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Banner_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./Banner.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserChannel/Banner/Banner.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Banner_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Banner_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Banner_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Banner_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/User/UserChannel/Tabs/Tabs.scss":
/*!**************************************************************!*\
  !*** ./src/components/pages/User/UserChannel/Tabs/Tabs.scss ***!
  \**************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Tabs_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./Tabs.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserChannel/Tabs/Tabs.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Tabs_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Tabs_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Tabs_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Tabs_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/User/UserChannel/UserChannel.scss":
/*!****************************************************************!*\
  !*** ./src/components/pages/User/UserChannel/UserChannel.scss ***!
  \****************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserChannel_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./UserChannel.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserChannel/UserChannel.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserChannel_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserChannel_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserChannel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserChannel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectDestructuringEmpty)
/* harmony export */ });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
}

/***/ })

}]);
//# sourceMappingURL=src_components_pages_User_UserChannel_UserChannel_tsx.app.6f29fe62d2b76f8ed4a1.js.map