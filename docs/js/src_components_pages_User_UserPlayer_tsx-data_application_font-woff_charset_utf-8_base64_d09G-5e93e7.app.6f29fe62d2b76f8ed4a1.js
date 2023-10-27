"use strict";
(self["webpackChunksporthub"] = self["webpackChunksporthub"] || []).push([["src_components_pages_User_UserPlayer_tsx-data_application_font-woff_charset_utf-8_base64_d09G-5e93e7"],{

/***/ "./src/components/common/UserSlider/UserSlider.tsx":
/*!*********************************************************!*\
  !*** ./src/components/common/UserSlider/UserSlider.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_getDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/getDate */ "./src/components/utils/getDate.tsx");
/* harmony import */ var _pages_Creator_Video_Video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/Creator/Video/Video */ "./src/components/pages/Creator/Video/Video.tsx");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.mjs");
/* harmony import */ var _UserSlider_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserSlider.scss */ "./src/components/common/UserSlider/UserSlider.scss");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/navigation */ "./node_modules/swiper/modules/navigation.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");
/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/css/scrollbar */ "./node_modules/swiper/modules/scrollbar.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











var UserSlider = function UserSlider(_ref) {
  var videos = _ref.videos;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: "player__another-videos",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
      spaceBetween: 24,
      breakpoints: {
        1200: {
          slidesPerView: 3.5
        },
        768: {
          slidesPerView: 2
        },
        576: {
          slidesPerView: 1.5,
          direction: 'horizontal'
        },
        320: {
          height: 300,
          direction: 'vertical'
        }
      },
      children: videos.map(function (el) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_pages_Creator_Video_Video__WEBPACK_IMPORTED_MODULE_2__["default"], {
            email: el.email,
            title: el.title,
            previewUrl: el.previewUrl,
            fName: el.fname,
            lName: el.lname,
            date: (0,_utils_getDate__WEBPACK_IMPORTED_MODULE_1__["default"])(el.date),
            author: true,
            authorPicUrl: el.authorPicUrl,
            videoObj: el,
            videoId: el.videoId
          })
        }, (0,uuid__WEBPACK_IMPORTED_MODULE_10__["default"])());
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserSlider);

/***/ }),

/***/ "./src/components/pages/User/UserCommon/UserComment/Comment/Comment.tsx":
/*!******************************************************************************!*\
  !*** ./src/components/pages/User/UserCommon/UserComment/Comment/Comment.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var Comment = function Comment(_ref) {
  var authorPhotoUrl = _ref.authorPhotoUrl,
    authorName = _ref.authorName,
    comment = _ref.comment;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "comment__item",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "comment__item_top",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        className: "comment__item__avatar",
        src: authorPhotoUrl
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "comment__item__name",
        children: authorName
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "comment__comment",
      children: comment
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);

/***/ }),

/***/ "./src/components/pages/User/UserCommon/UserComment/UserComment.tsx":
/*!**************************************************************************!*\
  !*** ./src/components/pages/User/UserCommon/UserComment/UserComment.tsx ***!
  \**************************************************************************/
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
/* harmony import */ var _UserComment_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserComment.scss */ "./src/components/pages/User/UserCommon/UserComment/UserComment.scss");
/* harmony import */ var _ui_Forms_TextareaContainer_TextareaContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/Forms/TextareaContainer/TextareaContainer */ "./src/components/ui/Forms/TextareaContainer/TextareaContainer.tsx");
/* harmony import */ var _ui_Button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ui/Button/Button */ "./src/components/ui/Button/Button.tsx");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/esm/index.esm.js");
/* harmony import */ var _config_firebase_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../config/firebase-config */ "./src/config/firebase-config.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../hooks/redux */ "./src/components/hooks/redux.tsx");
/* harmony import */ var _store_slices_creator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../store/slices/creator */ "./src/components/store/slices/creator.tsx");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony import */ var _Comment_Comment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Comment/Comment */ "./src/components/pages/User/UserCommon/UserComment/Comment/Comment.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }













var UserComment = function UserComment(_ref) {
  var _currVideoDataSelecto3, _currVideoDataSelecto4, _currVideoDataSelecto5;
  var isOpen = _ref.isOpen,
    setIsOpen = _ref.setIsOpen;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    textAreaValue = _useState2[0],
    setTextAreaValue = _useState2[1];
  var currVideoDataSelector = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_11__.useAppSelector)(function (state) {
    return state.creatorSlice.videoData.videoObj;
  });
  var currUserSelector = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_11__.useAppSelector)(function (state) {
    return state.regSlice.regData;
  });
  var dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_11__.useAppDispatch)();
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useParams)(),
    id = _useParams.id;
  var onSendClickHandler = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
      var _currVideoDataSelecto, _currVideoDataSelecto2, docRef, newComment;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_10__.DB, 'videos', id ? id : '');
            newComment = {
              authorPhotoUrl: "".concat(currUserSelector.photoUrl ? currUserSelector.photoUrl : ''),
              authorName: "".concat(currUserSelector.fname ? currUserSelector.fname : '', " ").concat(currUserSelector.lname ? currUserSelector.lname : ''),
              comment: textAreaValue
            };
            if (!(currVideoDataSelector !== null && currVideoDataSelector !== void 0 && (_currVideoDataSelecto = currVideoDataSelector.comments) !== null && _currVideoDataSelecto !== void 0 && _currVideoDataSelecto.length && (currVideoDataSelector === null || currVideoDataSelector === void 0 || (_currVideoDataSelecto2 = currVideoDataSelector.comments) === null || _currVideoDataSelecto2 === void 0 ? void 0 : _currVideoDataSelecto2.length) > 0)) {
              _context.next = 9;
              break;
            }
            _context.next = 6;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.updateDoc)(docRef, {
              comments: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(currVideoDataSelector === null || currVideoDataSelector === void 0 ? void 0 : currVideoDataSelector.comments), [newComment])
            });
          case 6:
            dispatch((0,_store_slices_creator__WEBPACK_IMPORTED_MODULE_12__.setCurrentVideo)({
              videoObj: _objectSpread(_objectSpread({}, currVideoDataSelector), {}, {
                comments: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(currVideoDataSelector === null || currVideoDataSelector === void 0 ? void 0 : currVideoDataSelector.comments), [newComment])
              })
            }));
            _context.next = 12;
            break;
          case 9:
            _context.next = 11;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.updateDoc)(docRef, {
              comments: [newComment]
            });
          case 11:
            dispatch((0,_store_slices_creator__WEBPACK_IMPORTED_MODULE_12__.setCurrentVideo)({
              videoObj: _objectSpread(_objectSpread({}, currVideoDataSelector), {}, {
                comments: [newComment]
              })
            }));
          case 12:
            _context.next = 17;
            break;
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 14]]);
    }));
    return function onSendClickHandler() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
    className: "".concat(isOpen ? 'active' : '', " comment"),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
      className: "comment__count",
      children: "".concat(currVideoDataSelector !== null && currVideoDataSelector !== void 0 && (_currVideoDataSelecto3 = currVideoDataSelector.comments) !== null && _currVideoDataSelecto3 !== void 0 && _currVideoDataSelecto3.length ? currVideoDataSelector === null || currVideoDataSelector === void 0 || (_currVideoDataSelecto4 = currVideoDataSelector.comments) === null || _currVideoDataSelecto4 === void 0 ? void 0 : _currVideoDataSelecto4.length : 0, " Comments")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
      className: "comment__add",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_Forms_TextareaContainer_TextareaContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        value: textAreaValue,
        onChangeHandler: function onChangeHandler(e) {
          return setTextAreaValue(e.target.value);
        },
        placeholder: "Enter your comment",
        text: ""
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_Button_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "comment__btn",
        onClickHandler: onSendClickHandler,
        children: "Send"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      className: "comment__comments",
      children: currVideoDataSelector === null || currVideoDataSelector === void 0 || (_currVideoDataSelecto5 = currVideoDataSelector.comments) === null || _currVideoDataSelecto5 === void 0 ? void 0 : _currVideoDataSelecto5.map(function (el) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Comment_Comment__WEBPACK_IMPORTED_MODULE_13__["default"], {
          authorPhotoUrl: el.authorPhotoUrl,
          authorName: el.authorName,
          comment: el.comment
        }, (0,uuid__WEBPACK_IMPORTED_MODULE_16__["default"])());
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserComment);

/***/ }),

/***/ "./src/components/pages/User/UserPlayer.tsx":
/*!**************************************************!*\
  !*** ./src/components/pages/User/UserPlayer.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UserPlayer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserPlayer.scss */ "./src/components/pages/User/UserPlayer.scss");
/* harmony import */ var _ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/IconRenderer/IconRenderer */ "./src/components/ui/IconRenderer/IconRenderer.tsx");
/* harmony import */ var _assets_img_user_test_user_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/img/user/test-user.png */ "./src/assets/img/user/test-user.png");
/* harmony import */ var _ui_Button_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/Button/Button */ "./src/components/ui/Button/Button.tsx");
/* harmony import */ var _common_Header_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/Header/Header */ "./src/components/common/Header/Header.tsx");
/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/redux */ "./src/components/hooks/redux.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _common_Loading_Loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/Loading/Loading */ "./src/components/common/Loading/Loading.tsx");
/* harmony import */ var _utils_getDate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/getDate */ "./src/components/utils/getDate.tsx");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/esm/index.esm.js");
/* harmony import */ var _config_firebase_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../config/firebase-config */ "./src/config/firebase-config.js");
/* harmony import */ var _common_UserSlider_UserSlider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/UserSlider/UserSlider */ "./src/components/common/UserSlider/UserSlider.tsx");
/* harmony import */ var _store_slices_creator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../store/slices/creator */ "./src/components/store/slices/creator.tsx");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./User */ "./src/components/pages/User/User.tsx");
/* harmony import */ var _UserCommon_UserComment_UserComment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./UserCommon/UserComment/UserComment */ "./src/components/pages/User/UserCommon/UserComment/UserComment.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



















var UserPlayer = function UserPlayer() {
  var _channelUserData$subs, _channelUserData$subs2, _channelUserData$subs3, _currVideoData$likes2, _currVideoData$likes3, _currVideoData$dislik2, _currVideoData$dislik3, _currVideoDataSelecto, _currVideoDataSelecto2;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    videos = _useState2[0],
    setVideos = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
    currVideoData = _useState4[0],
    setCurrVideoData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
    channelUserData = _useState6[0],
    setchannelUserData = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
    _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState7, 2),
    isCommentOpen = _useState8[0],
    setIsCommentOpen = _useState8[1];
  var currentUserEmail = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_11__.useAppSelector)(function (state) {
    return state.regSlice.regData.email;
  });
  var selectorCurrentVideoId = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_11__.useAppSelector)(function (state) {
    var _state$creatorSlice$v;
    return (_state$creatorSlice$v = state.creatorSlice.videoData.videoObj) === null || _state$creatorSlice$v === void 0 ? void 0 : _state$creatorSlice$v.videoId;
  });
  var selectorUsers = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_11__.useAppSelector)(function (state) {
    return state.usersSlice.data;
  });

  // тест
  var currVideoDataSelector = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_11__.useAppSelector)(function (state) {
    return state.creatorSlice.videoData.videoObj;
  });
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(channelUserData && channelUserData.subscribers ? channelUserData.subscribers.includes(currentUserEmail) : false),
    _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState9, 2),
    sbsBtn = _useState10[0],
    setSbsBtn = _useState10[1];
  var hashOfVideo = window.location.href.match(/video\/([^/]+)/);
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_21__.useParams)(),
    id = _useParams.id;
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(selectorCurrentVideoId),
    _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState11, 2),
    videoUUID = _useState12[0],
    setVideoUUID = _useState12[1];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_21__.useNavigate)();
  var dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_11__.useAppDispatch)();
  var getVideos = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
      var converter, collRef, _getVideos, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            converter = {
              toFirestore: function toFirestore(data) {
                return data;
              },
              fromFirestore: function fromFirestore(snap) {
                return snap.data();
              }
            };
            collRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.collection)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_15__.DB, 'videos').withConverter(converter);
            _context.next = 5;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.getDocs)(collRef);
          case 5:
            _getVideos = _context.sent.docs.map(function (el) {
              return _objectSpread(_objectSpread({}, el.data()), {}, {
                videoId: el.id
              });
            });
            res = _getVideos.map(function (el) {
              var videoAuthor = selectorUsers.filter(function (innerEl) {
                return innerEl.email === el.email;
              })[0];
              return _objectSpread(_objectSpread({}, el), {}, {
                fname: videoAuthor.fname ? videoAuthor.fname : '',
                lname: videoAuthor.lname ? videoAuthor.lname : '',
                authorPicUrl: videoAuthor.photoUrl ? videoAuthor.photoUrl : ''
              });
            });
            setVideos(res);
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    return function getVideos() {
      return _ref.apply(this, arguments);
    };
  }();
  var getCurrentUserData = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
      var converter, docRef, getCurrentUser;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            converter = {
              toFirestore: function toFirestore(data) {
                return data;
              },
              fromFirestore: function fromFirestore(snap) {
                return snap.data();
              }
            };
            if (!(currVideoData && currVideoData.email)) {
              _context2.next = 10;
              break;
            }
            docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_15__.DB, 'users', currVideoData.email).withConverter(converter);
            _context2.next = 6;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.getDoc)(docRef);
          case 6:
            getCurrentUser = _context2.sent.data();
            setchannelUserData(getCurrentUser ? getCurrentUser : null);
            _context2.next = 10;
            break;
          case 10:
            _context2.next = 15;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 12]]);
    }));
    return function getCurrentUserData() {
      return _ref2.apply(this, arguments);
    };
  }();
  var getCurrentVideoData = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3() {
      var converter, docRef, getCurrentVideo;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            converter = {
              toFirestore: function toFirestore(data) {
                return data;
              },
              fromFirestore: function fromFirestore(snap) {
                return snap.data();
              }
            };
            _context3.next = 4;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_15__.DB, 'videos', hashOfVideo ? hashOfVideo[1] : '').withConverter(converter);
          case 4:
            docRef = _context3.sent;
            _context3.next = 7;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.getDoc)(docRef);
          case 7:
            getCurrentVideo = _context3.sent.data();
            setCurrVideoData(getCurrentVideo ? getCurrentVideo : null);
            return _context3.abrupt("return", getCurrentVideo);
          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);
          case 15:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 12]]);
    }));
    return function getCurrentVideoData() {
      return _ref3.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    getCurrentVideoData();
    getVideos();
  }, [id]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    getCurrentUserData();
  }, [currVideoData]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    setSbsBtn(channelUserData && channelUserData.subscribers ? channelUserData.subscribers.includes(currentUserEmail) : false);
  }, [channelUserData]);
  var onReturnArrowClickHandler = function onReturnArrowClickHandler() {
    navigate(-1);
  };
  var onSubscribeBtnClickHandler = /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee4() {
      var docRef, docRefCreator;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_15__.DB, 'users', currentUserEmail);
            docRefCreator = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_15__.DB, 'users', channelUserData ? channelUserData.email : '');
            if (!(channelUserData && channelUserData.subscribers && channelUserData.subscribers.includes(currentUserEmail))) {
              _context4.next = 12;
              break;
            }
            _context4.next = 6;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.updateDoc)(docRef, {
              subscriptions: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.arrayRemove)(channelUserData.email)
            });
          case 6:
            _context4.next = 8;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.updateDoc)(docRefCreator, {
              subscribers: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.arrayRemove)(currentUserEmail)
            });
          case 8:
            getCurrentUserData();
            setSbsBtn(false);
            _context4.next = 18;
            break;
          case 12:
            _context4.next = 14;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.updateDoc)(docRef, {
              subscriptions: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.arrayUnion)(channelUserData ? channelUserData.email : '')
            });
          case 14:
            _context4.next = 16;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.updateDoc)(docRefCreator, {
              subscribers: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.arrayUnion)(currentUserEmail)
            });
          case 16:
            getCurrentUserData();
            setSbsBtn(true);
          case 18:
            _context4.next = 23;
            break;
          case 20:
            _context4.prev = 20;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);
          case 23:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 20]]);
    }));
    return function onSubscribeBtnClickHandler() {
      return _ref4.apply(this, arguments);
    };
  }();
  var onLikeClickHandler = /*#__PURE__*/function () {
    var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee5() {
      var _currVideoData$likes, docRef;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_15__.DB, 'videos', videoUUID ? videoUUID : '');
            if (!(currVideoData !== null && currVideoData !== void 0 && (_currVideoData$likes = currVideoData.likes) !== null && _currVideoData$likes !== void 0 && _currVideoData$likes.includes(currentUserEmail))) {
              _context5.next = 9;
              break;
            }
            setCurrVideoData(function (prev) {
              return prev ? _objectSpread(_objectSpread({}, prev), {}, {
                likes: prev === null || prev === void 0 ? void 0 : prev.likes.filter(function (el) {
                  return el !== currentUserEmail;
                }),
                dislikes: prev === null || prev === void 0 ? void 0 : prev.dislikes.filter(function (el) {
                  return el !== currentUserEmail;
                })
              }) : prev;
            });
            _context5.next = 6;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.updateDoc)(docRef, {
              likes: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.arrayRemove)(currentUserEmail)
            });
          case 6:
            getCurrentUserData();
            _context5.next = 12;
            break;
          case 9:
            setCurrVideoData(function (prev) {
              return prev ? _objectSpread(_objectSpread({}, prev), {}, {
                likes: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev === null || prev === void 0 ? void 0 : prev.likes), [currentUserEmail]),
                dislikes: prev === null || prev === void 0 ? void 0 : prev.likes.filter(function (el) {
                  return el !== currentUserEmail;
                })
              }) : prev;
            });
            _context5.next = 12;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.updateDoc)(docRef, {
              likes: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.arrayUnion)(currentUserEmail),
              dislikes: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.arrayRemove)(currentUserEmail)
            });
          case 12:
            _context5.next = 17;
            break;
          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0);
          case 17:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 14]]);
    }));
    return function onLikeClickHandler() {
      return _ref5.apply(this, arguments);
    };
  }();
  var onDisLikeClickHandler = /*#__PURE__*/function () {
    var _ref6 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee6() {
      var _currVideoData$dislik, docRef;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_15__.DB, 'videos', videoUUID ? videoUUID : '');
            if (!(currVideoData !== null && currVideoData !== void 0 && (_currVideoData$dislik = currVideoData.dislikes) !== null && _currVideoData$dislik !== void 0 && _currVideoData$dislik.includes(currentUserEmail))) {
              _context6.next = 8;
              break;
            }
            setCurrVideoData(function (prev) {
              return prev ? _objectSpread(_objectSpread({}, prev), {}, {
                dislikes: prev === null || prev === void 0 ? void 0 : prev.dislikes.filter(function (el) {
                  return el !== currentUserEmail;
                }),
                likes: prev === null || prev === void 0 ? void 0 : prev.likes.filter(function (el) {
                  return el !== currentUserEmail;
                })
              }) : prev;
            });
            _context6.next = 6;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.updateDoc)(docRef, {
              dislikes: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.arrayRemove)(currentUserEmail)
            });
          case 6:
            _context6.next = 11;
            break;
          case 8:
            setCurrVideoData(function (prev) {
              return prev && prev.dislikes ? _objectSpread(_objectSpread({}, prev), {}, {
                dislikes: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev === null || prev === void 0 ? void 0 : prev.dislikes), [currentUserEmail]),
                likes: prev === null || prev === void 0 ? void 0 : prev.likes.filter(function (el) {
                  return el !== currentUserEmail;
                })
              }) : prev;
            });
            _context6.next = 11;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.updateDoc)(docRef, {
              dislikes: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.arrayUnion)(currentUserEmail),
              likes: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.arrayRemove)(currentUserEmail)
            });
          case 11:
            _context6.next = 16;
            break;
          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](0);
            console.error(_context6.t0);
          case 16:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 13]]);
    }));
    return function onDisLikeClickHandler() {
      return _ref6.apply(this, arguments);
    };
  }();
  var onCommentClickHandler = /*#__PURE__*/function () {
    var _ref7 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee7() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            setIsCommentOpen(!isCommentOpen);
          case 1:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function onCommentClickHandler() {
      return _ref7.apply(this, arguments);
    };
  }();
  if (!(channelUserData !== null && channelUserData !== void 0 && channelUserData.email)) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_common_Loading_Loading__WEBPACK_IMPORTED_MODULE_12__["default"], {});
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_common_Header_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
      mobChildren: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_User__WEBPACK_IMPORTED_MODULE_18__.Subscribers, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
      className: "player",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
        className: "player__top player__content-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
          className: "player__return-btn",
          onClick: onReturnArrowClickHandler,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_7__["default"], {
            id: "return-arrow"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
          className: "player__author",
          onClick: function onClick() {
            dispatch((0,_store_slices_creator__WEBPACK_IMPORTED_MODULE_17__.setCreatorEmail)({
              email: currVideoData ? currVideoData.email : ''
            }));
            navigate("../../../user/channel/".concat(currVideoData && currVideoData.email ? currVideoData.email.replace(/\./g, '') : ''));
          },
          children: [currVideoData ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("img", {
            src: channelUserData === null || channelUserData === void 0 ? void 0 : channelUserData.photoUrl,
            alt: "logo",
            className: "player__author_img"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("img", {
            src: _assets_img_user_test_user_png__WEBPACK_IMPORTED_MODULE_8__,
            alt: "logo",
            className: "player__author_img"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
            className: "player__author_texts",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p", {
              className: "player__author_title",
              children: "".concat(channelUserData === null || channelUserData === void 0 ? void 0 : channelUserData.fname, " ").concat(channelUserData === null || channelUserData === void 0 ? void 0 : channelUserData.lname)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("p", {
              className: "player__author_text",
              children: [channelUserData !== null && channelUserData !== void 0 && (_channelUserData$subs = channelUserData.subscribers) !== null && _channelUserData$subs !== void 0 && _channelUserData$subs.length && (channelUserData === null || channelUserData === void 0 || (_channelUserData$subs2 = channelUserData.subscribers) === null || _channelUserData$subs2 === void 0 ? void 0 : _channelUserData$subs2.length) > 0 ? channelUserData === null || channelUserData === void 0 || (_channelUserData$subs3 = channelUserData.subscribers) === null || _channelUserData$subs3 === void 0 ? void 0 : _channelUserData$subs3.length : 0, " subscribers"]
            })]
          })]
        }), sbsBtn ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_ui_Button_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
          className: "banner__subs-btn button_unsubscribe player__top_btn",
          onClickHandler: onSubscribeBtnClickHandler,
          children: "Unsubscribe"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_ui_Button_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
          className: "banner__subs-btn player__top_btn",
          onClickHandler: onSubscribeBtnClickHandler,
          children: "Subscribe"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("video", {
        src: currVideoData === null || currVideoData === void 0 ? void 0 : currVideoData.videoUrl,
        controls: true,
        className: "player__player player__content-container"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
        className: "player__info player__content-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p", {
          className: "player__title",
          children: currVideoData === null || currVideoData === void 0 ? void 0 : currVideoData.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
          className: "player__info-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
            className: "player__icons-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
              className: "player__reaction-wr",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
                className: "player__like-wr ".concat(currVideoData !== null && currVideoData !== void 0 && (_currVideoData$likes2 = currVideoData.likes) !== null && _currVideoData$likes2 !== void 0 && _currVideoData$likes2.includes(currentUserEmail) ? 'active' : ''),
                onClick: onLikeClickHandler,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  id: "like"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p", {
                  className: "player__reaction_text",
                  children: currVideoData === null || currVideoData === void 0 || (_currVideoData$likes3 = currVideoData.likes) === null || _currVideoData$likes3 === void 0 ? void 0 : _currVideoData$likes3.length
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
                className: "player__like-wr ".concat(currVideoData !== null && currVideoData !== void 0 && (_currVideoData$dislik2 = currVideoData.dislikes) !== null && _currVideoData$dislik2 !== void 0 && _currVideoData$dislik2.includes(currentUserEmail) ? 'active' : ''),
                onClick: onDisLikeClickHandler,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  id: "dislike"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p", {
                  className: "player__reaction_text",
                  children: currVideoData === null || currVideoData === void 0 || (_currVideoData$dislik3 = currVideoData.dislikes) === null || _currVideoData$dislik3 === void 0 ? void 0 : _currVideoData$dislik3.length
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
              className: "".concat(isCommentOpen ? 'active' : '', " player__icon-comment"),
              onClick: onCommentClickHandler,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_7__["default"], {
                id: "comments"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p", {
                className: "player__reaction_text",
                children: currVideoDataSelector !== null && currVideoDataSelector !== void 0 && (_currVideoDataSelecto = currVideoDataSelector.comments) !== null && _currVideoDataSelecto !== void 0 && _currVideoDataSelecto.length ? currVideoDataSelector === null || currVideoDataSelector === void 0 || (_currVideoDataSelecto2 = currVideoDataSelector.comments) === null || _currVideoDataSelecto2 === void 0 ? void 0 : _currVideoDataSelecto2.length : 0
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
            className: "player__num-info",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("p", {
              className: "player__num-info_text",
              children: [(0,_utils_getDate__WEBPACK_IMPORTED_MODULE_13__["default"])(currVideoData === null || currVideoData === void 0 ? void 0 : currVideoData.date), " days ago"]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p", {
          className: "player__descr",
          children: currVideoData === null || currVideoData === void 0 ? void 0 : currVideoData.descr
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_common_UserSlider_UserSlider__WEBPACK_IMPORTED_MODULE_16__["default"], {
        videos: videos
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_UserCommon_UserComment_UserComment__WEBPACK_IMPORTED_MODULE_19__["default"], {
        isOpen: isCommentOpen,
        setIsOpen: setIsCommentOpen
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserPlayer);

/***/ }),

/***/ "./src/components/ui/Forms/TextareaContainer/TextareaContainer.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/ui/Forms/TextareaContainer/TextareaContainer.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextareaContainer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextareaContainer.scss */ "./src/components/ui/Forms/TextareaContainer/TextareaContainer.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var TextareaContainer = function TextareaContainer(_ref) {
  var _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
    value = _ref.value,
    onChangeHandler = _ref.onChangeHandler,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$text = _ref.text,
    text = _ref$text === void 0 ? 'hey' : _ref$text;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "textarea__wr",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      className: "textarea__text",
      children: text
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea", {
      className: "".concat(className, " textarea"),
      placeholder: placeholder,
      value: value,
      onChange: onChangeHandler
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextareaContainer);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/common/UserSlider/UserSlider.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/common/UserSlider/UserSlider.scss ***!
  \*********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `@media screen and (max-width: 576px) {
  .player__another-videos {
    height: 1000px;
  }
  .player__another-videos .swiper {
    height: 100%;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/common/UserSlider/UserSlider.scss"],"names":[],"mappings":"AAIA;EACI;IACI,cAAA;EAHN;EAIM;IACI,YAAA;EAFV;AACF","sourcesContent":["// .swiper-container {\r\n//     height: 300px;\r\n// }\r\n\r\n@media screen and (max-width: 576px) {\r\n    .player__another-videos {\r\n        height: 1000px;\r\n        .swiper {\r\n            height: 100%;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserCommon/UserComment/UserComment.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserCommon/UserComment/UserComment.scss ***!
  \**************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.comment {
  background: #222;
  padding: 24px;
  margin-top: 32px;
  pointer-events: none;
  z-index: 1;
  position: absolute;
  opacity: 0;
  bottom: 0;
}
.comment.active {
  position: static;
  pointer-events: all;
  opacity: 1;
}
.comment .textarea__wr {
  width: 100%;
}
.comment__count {
  color: #fff;
  font-size: 24px;
  margin-bottom: 25px;
  font-weight: 500;
}
.comment__btn {
  height: fit-content;
}
.comment__add {
  display: flex;
  width: 100%;
  align-items: center;
}
.comment__comments {
  margin-top: 15px;
}
.comment__item {
  margin-bottom: 15px;
}
.comment__item_top {
  display: flex;
  align-items: center;
  gap: 15px;
}
.comment__item__avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.comment__item__name {
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
}
.comment__comment {
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  margin-left: 47px;
}`, "",{"version":3,"sources":["webpack://./src/components/pages/User/UserCommon/UserComment/UserComment.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,aAAA;EACA,gBAAA;EACA,oBAAA;EACA,UAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;AACJ;AAAI;EACI,gBAAA;EACA,mBAAA;EACA,UAAA;AAER;AACI;EACI,WAAA;AACR;AACI;EACI,WAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;AACR;AAEI;EACI,mBAAA;AAAR;AAGI;EACI,aAAA;EACA,WAAA;EACA,mBAAA;AADR;AAII;EACI,gBAAA;AAFR;AAKI;EACI,mBAAA;AAHR;AAIQ;EACI,aAAA;EACA,mBAAA;EACA,SAAA;AAFZ;AAIQ;EACI,WAAA;EACA,YAAA;EACA,kBAAA;AAFZ;AAIQ;EACI,WAAA;EACA,6CAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAFZ;AAMI;EACI,WAAA;EACA,6CAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;AAJR","sourcesContent":[".comment {\r\n    background: #222;\r\n    padding: 24px;\r\n    margin-top: 32px;\r\n    pointer-events: none;\r\n    z-index: 1;\r\n    position: absolute;\r\n    opacity: 0;\r\n    bottom: 0;\r\n    &.active {\r\n        position: static;\r\n        pointer-events: all;\r\n        opacity: 1;\r\n    }\r\n\r\n    .textarea__wr {\r\n        width: 100%;\r\n    }\r\n    &__count {\r\n        color: #fff;\r\n        font-size: 24px;\r\n        margin-bottom: 25px;\r\n        font-weight: 500;\r\n    }\r\n\r\n    &__btn {\r\n        height: fit-content;\r\n    }\r\n\r\n    &__add {\r\n        display: flex;\r\n        width: 100%;\r\n        align-items: center;\r\n    }\r\n\r\n    &__comments {\r\n        margin-top: 15px;\r\n    }\r\n\r\n    &__item {\r\n        margin-bottom: 15px;\r\n        &_top {\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 15px;\r\n        }\r\n        &__avatar {\r\n            width: 32px;\r\n            height: 32px;\r\n            border-radius: 50%;\r\n        }\r\n        &__name {\r\n            color: #fff;\r\n            font-feature-settings: 'clig' off, 'liga' off;\r\n            font-size: 16px;\r\n            font-weight: 600;\r\n            line-height: 18px;\r\n        }\r\n    }\r\n\r\n    &__comment {\r\n        color: #fff;\r\n        font-feature-settings: 'clig' off, 'liga' off;\r\n        font-size: 16px;\r\n        font-weight: 400;\r\n        line-height: normal;\r\n        margin-left: 47px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserPlayer.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserPlayer.scss ***!
  \**************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.player {
  position: relative;
}
.player__content-container {
  max-width: 920px;
  width: 100%;
  margin: 0 auto;
}
.player__top {
  margin-top: 29px;
  display: flex;
  align-items: center;
}
.player__top_btn {
  margin-left: auto;
}
.player__return-btn {
  display: flex;
  padding: 8px;
  align-items: center;
  border-radius: 8px;
  background: #222;
  width: 40px;
  height: 40px;
  justify-content: center;
  cursor: pointer;
}
.player__author {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
}
.player__author_img {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  margin-right: 9px;
}
.player__author_title {
  color: #fff;
  font-size: 18px;
  font-weight: 600;
}
.player__author_text {
  color: #999;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
}
.player__player {
  width: 920px;
  height: 519.911px;
  flex-shrink: 0;
  display: block;
  background-color: #222;
  margin-top: 15px;
}
.player__info {
  margin-top: 21px;
}
.player__title {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px; /* 100% */
}
.player__info-center {
  display: flex;
  justify-content: space-between;
  margin-top: 22px;
}
.player__icons-section {
  display: flex;
  gap: 16px;
}
.player__reaction-wr {
  display: flex;
  border-radius: 8px;
  background: var(--9, #222);
  position: relative;
}
.player__reaction-wr::after {
  content: "";
  background: #323232;
  height: 28px;
  width: 1px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.player__like-wr {
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: var(--9, #222);
  padding: 8px 20px;
  width: 100%;
}
.player__like-wr.active svg {
  fill: #ad7955;
}
.player__reaction_text {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
}
.player__icon-comment {
  border-radius: 8px;
  background: #222;
  display: flex;
  height: 44px;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
}
.player__icon-comment.active svg {
  stroke: #ad7955;
}
.player__num-info {
  gap: 16px;
  display: flex;
  align-items: center;
}
.player__num-info_text {
  color: #bbb;
  font-size: 16px;
  font-weight: 300;
}
.player__descr {
  color: #eee;
  font-size: 14px;
  font-weight: 400;
  margin-top: 18px;
  margin-bottom: 32px;
}
.player__another-videos {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
}
.player .banner__subs-btn {
  margin-top: 0;
}

@media screen and (max-width: 996px) {
  .player {
    padding: 0 16px;
  }
  .player__player {
    height: auto;
    width: 98%;
  }
}
@media screen and (max-width: 768px) {
  .player {
    padding: 0 16px;
  }
  .player__top {
    display: block;
  }
  .player__return-btn {
    display: none;
  }
  .player__player {
    height: auto;
    width: 98%;
  }
  .player__info-center {
    display: block;
  }
  .player__author {
    margin-bottom: 15px;
    margin-left: 0;
  }
  .player__num-info {
    margin: 10px 0;
  }
  .player .creator__video {
    width: 100%;
  }
  .banner__subs-btn {
    width: 100%;
    display: block;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/pages/User/UserPlayer.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;AACJ;AACI;EACI,gBAAA;EACA,WAAA;EACA,cAAA;AACR;AACI;EACI,gBAAA;EACA,aAAA;EACA,mBAAA;AACR;AACQ;EACI,iBAAA;AACZ;AAGI;EACI,aAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,eAAA;AADR;AAII;EACI,eAAA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;AAFR;AAIQ;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;AAFZ;AAQQ;EACI,WAAA;EACA,eAAA;EACA,gBAAA;AANZ;AASQ;EACI,WAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAPZ;AAWI;EACI,YAAA;EACA,iBAAA;EACA,cAAA;EACA,cAAA;EACA,sBAAA;EACA,gBAAA;AATR;AAWI;EACI,gBAAA;AATR;AAYI;EACI,WAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;AAVR;AAaI;EACI,aAAA;EACA,8BAAA;EACA,gBAAA;AAXR;AAcI;EACI,aAAA;EACA,SAAA;AAZR;AAeI;EACI,aAAA;EACA,kBAAA;EACA,0BAAA;EACA,kBAAA;AAbR;AAcQ;EACI,WAAA;EACA,mBAAA;EACA,YAAA;EACA,UAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;AAZZ;AAgBI;EACI,aAAA;EACA,mBAAA;EACA,QAAA;EACA,kBAAA;EACA,0BAAA;EACA,iBAAA;EACA,WAAA;AAdR;AAiBY;EACI,aAAA;AAfhB;AAqBQ;EACI,WAAA;EACA,eAAA;EACA,gBAAA;AAnBZ;AAuBI;EACI,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;EACA,QAAA;AArBR;AAuBY;EACI,eAAA;AArBhB;AA0BI;EACI,SAAA;EACA,aAAA;EACA,mBAAA;AAxBR;AAyBQ;EACI,WAAA;EACA,eAAA;EACA,gBAAA;AAvBZ;AA0BI;EACI,WAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;AAxBR;AA0BI;EACI,iBAAA;EACA,WAAA;EACA,cAAA;AAxBR;AA2BI;EAEI,aAAA;AA1BR;;AA8BA;EACI;IACI,eAAA;EA3BN;EA4BM;IACI,YAAA;IACA,UAAA;EA1BV;AACF;AA8BA;EACI;IACI,eAAA;EA5BN;EA6BM;IACI,cAAA;EA3BV;EA6BM;IACI,aAAA;EA3BV;EA6BM;IACI,YAAA;IACA,UAAA;EA3BV;EA6BM;IACI,cAAA;EA3BV;EA6BM;IACI,mBAAA;IACA,cAAA;EA3BV;EA6BM;IACI,cAAA;EA3BV;EA6BM;IACI,WAAA;EA3BV;EA8BE;IACI,WAAA;IACA,cAAA;EA5BN;AACF","sourcesContent":[".player {\r\n    position: relative;\r\n\r\n    &__content-container {\r\n        max-width: 920px;\r\n        width: 100%;\r\n        margin: 0 auto;\r\n    }\r\n    &__top {\r\n        margin-top: 29px;\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        &_btn {\r\n            margin-left: auto;\r\n        }\r\n    }\r\n\r\n    &__return-btn {\r\n        display: flex;\r\n        padding: 8px;\r\n        align-items: center;\r\n        border-radius: 8px;\r\n        background: #222;\r\n        width: 40px;\r\n        height: 40px;\r\n        justify-content: center;\r\n        cursor: pointer;\r\n    }\r\n\r\n    &__author {\r\n        cursor: pointer;\r\n        display: flex;\r\n        align-items: center;\r\n        margin-left: 24px;\r\n\r\n        &_img {\r\n            width: 40px;\r\n            height: 40px;\r\n            flex-shrink: 0;\r\n            margin-right: 9px;\r\n        }\r\n\r\n        &_texts {\r\n        }\r\n\r\n        &_title {\r\n            color: #fff;\r\n            font-size: 18px;\r\n            font-weight: 600;\r\n        }\r\n\r\n        &_text {\r\n            color: #999;\r\n            font-size: 14px;\r\n            font-weight: 400;\r\n            line-height: 14px;\r\n        }\r\n    }\r\n\r\n    &__player {\r\n        width: 920px;\r\n        height: 519.911px;\r\n        flex-shrink: 0;\r\n        display: block;\r\n        background-color: #222;\r\n        margin-top: 15px;\r\n    }\r\n    &__info {\r\n        margin-top: 21px;\r\n    }\r\n\r\n    &__title {\r\n        color: #fff;\r\n        font-size: 20px;\r\n        font-weight: 600;\r\n        line-height: 20px; /* 100% */\r\n    }\r\n\r\n    &__info-center {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        margin-top: 22px;\r\n    }\r\n\r\n    &__icons-section {\r\n        display: flex;\r\n        gap: 16px;\r\n    }\r\n\r\n    &__reaction-wr {\r\n        display: flex;\r\n        border-radius: 8px;\r\n        background: var(--9, #222);\r\n        position: relative;\r\n        &::after {\r\n            content: '';\r\n            background: #323232;\r\n            height: 28px;\r\n            width: 1px;\r\n            position: absolute;\r\n            left: 50%;\r\n            top: 50%;\r\n            transform: translate(-50%, -50%);\r\n        }\r\n    }\r\n\r\n    &__like-wr {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 8px;\r\n        border-radius: 8px;\r\n        background: var(--9, #222);\r\n        padding: 8px 20px;\r\n        width: 100%;\r\n        &.active {\r\n            // background-color: red;\r\n            svg {\r\n                fill: #ad7955;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__reaction {\r\n        &_text {\r\n            color: #fff;\r\n            font-size: 16px;\r\n            font-weight: 500;\r\n        }\r\n    }\r\n\r\n    &__icon-comment {\r\n        border-radius: 8px;\r\n        background: #222;\r\n        display: flex;\r\n        height: 44px;\r\n        padding: 8px 16px;\r\n        align-items: center;\r\n        gap: 8px;\r\n        &.active {\r\n            svg {\r\n                stroke: #ad7955;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__num-info {\r\n        gap: 16px;\r\n        display: flex;\r\n        align-items: center;\r\n        &_text {\r\n            color: #bbb;\r\n            font-size: 16px;\r\n            font-weight: 300;\r\n        }\r\n    }\r\n    &__descr {\r\n        color: #eee;\r\n        font-size: 14px;\r\n        font-weight: 400;\r\n        margin-top: 18px;\r\n        margin-bottom: 32px;\r\n    }\r\n    &__another-videos {\r\n        max-width: 1440px;\r\n        width: 100%;\r\n        margin: 0 auto;\r\n        // display: none;\r\n    }\r\n    .banner__subs-btn {\r\n        // margin: 0;\\\r\n        margin-top: 0;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 996px) {\r\n    .player {\r\n        padding: 0 16px;\r\n        &__player {\r\n            height: auto;\r\n            width: 98%;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .player {\r\n        padding: 0 16px;\r\n        &__top {\r\n            display: block;\r\n        }\r\n        &__return-btn {\r\n            display: none;\r\n        }\r\n        &__player {\r\n            height: auto;\r\n            width: 98%;\r\n        }\r\n        &__info-center {\r\n            display: block;\r\n        }\r\n        &__author {\r\n            margin-bottom: 15px;\r\n            margin-left: 0;\r\n        }\r\n        &__num-info {\r\n            margin: 10px 0;\r\n        }\r\n        .creator__video {\r\n            width: 100%;\r\n        }\r\n    }\r\n    .banner__subs-btn {\r\n        width: 100%;\r\n        display: block;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ui/Forms/TextareaContainer/TextareaContainer.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ui/Forms/TextareaContainer/TextareaContainer.scss ***!
  \*************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.textarea {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 16px;
  border-radius: 8px;
  background: #222;
  transition: 0.3s;
  color: #999;
  resize: none;
  width: 100%;
}
.textarea__text {
  color: var(--3, #fff);
  font-weight: 400;
  margin-bottom: 4px;
}
.textarea:focus {
  color: #fff;
}`, "",{"version":3,"sources":["webpack://./src/components/ui/Forms/TextareaContainer/TextareaContainer.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;AACJ;AACI;EACI,qBAAA;EACA,gBAAA;EACA,kBAAA;AACR;AACI;EACI,WAAA;AACR","sourcesContent":[".textarea {\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding: 16px;\r\n    border-radius: 8px;\r\n    background: #222;\r\n    transition: 0.3s;\r\n    color: #999;\r\n    resize: none;\r\n    width: 100%;\r\n\r\n    &__text {\r\n        color: var(--3, #fff);\r\n        font-weight: 400;\r\n        margin-bottom: 4px;\r\n    }\r\n    &:focus {\r\n        color: #fff;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/common/UserSlider/UserSlider.scss":
/*!**********************************************************!*\
  !*** ./src/components/common/UserSlider/UserSlider.scss ***!
  \**********************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserSlider_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./UserSlider.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/common/UserSlider/UserSlider.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserSlider_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserSlider_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserSlider_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserSlider_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/User/UserCommon/UserComment/UserComment.scss":
/*!***************************************************************************!*\
  !*** ./src/components/pages/User/UserCommon/UserComment/UserComment.scss ***!
  \***************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserComment_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./UserComment.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserCommon/UserComment/UserComment.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserComment_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserComment_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserComment_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserComment_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/User/UserPlayer.scss":
/*!***************************************************!*\
  !*** ./src/components/pages/User/UserPlayer.scss ***!
  \***************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserPlayer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./UserPlayer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserPlayer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserPlayer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserPlayer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserPlayer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserPlayer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ui/Forms/TextareaContainer/TextareaContainer.scss":
/*!**************************************************************************!*\
  !*** ./src/components/ui/Forms/TextareaContainer/TextareaContainer.scss ***!
  \**************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TextareaContainer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./TextareaContainer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ui/Forms/TextareaContainer/TextareaContainer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TextareaContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TextareaContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TextareaContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TextareaContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "data:application/font-woff;charset=utf-8;base64, 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":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:application/font-woff;charset=utf-8;base64, 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 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA";

/***/ }),

/***/ "./src/assets/img/user/test-user.png":
/*!*******************************************!*\
  !*** ./src/assets/img/user/test-user.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/test-userd33f1f471d115c095ddf.png";

/***/ })

}]);
//# sourceMappingURL=src_components_pages_User_UserPlayer_tsx-data_application_font-woff_charset_utf-8_base64_d09G-5e93e7.app.6f29fe62d2b76f8ed4a1.js.map