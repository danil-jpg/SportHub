"use strict";
(self["webpackChunksporthub"] = self["webpackChunksporthub"] || []).push([["src_components_pages_Creator_Video_Video_tsx-src_components_utils_getDate_tsx"],{

/***/ "./src/components/pages/Creator/Video/Video.tsx":
/*!******************************************************!*\
  !*** ./src/components/pages/Creator/Video/Video.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Video_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Video.scss */ "./src/components/pages/Creator/Video/Video.scss");
/* harmony import */ var _ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/IconRenderer/IconRenderer */ "./src/components/ui/IconRenderer/IconRenderer.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/redux */ "./src/components/hooks/redux.tsx");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/esm/index.esm.js");
/* harmony import */ var _config_firebase_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../config/firebase-config */ "./src/config/firebase-config.js");
/* harmony import */ var _assets_img_user_card_default_user_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../assets/img/user/card/default-user.jpg */ "./src/assets/img/user/card/default-user.jpg");
/* harmony import */ var _assets_img_user_card_default_user_jpg_as_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../assets/img/user/card/default-user.jpg?as=webp */ "./src/assets/img/user/card/default-user.jpg?as=webp");
/* harmony import */ var _store_slices_registration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../store/slices/registration */ "./src/components/store/slices/registration.tsx");
/* harmony import */ var _store_slices_creator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../store/slices/creator */ "./src/components/store/slices/creator.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

















var Video = function Video(_ref) {
  var videoId = _ref.videoId,
    videoObj = _ref.videoObj,
    _ref$author = _ref.author,
    author = _ref$author === void 0 ? false : _ref$author,
    authorPicUrl = _ref.authorPicUrl,
    fName = _ref.fName,
    lName = _ref.lName,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...' : _ref$title,
    _ref$date = _ref.date,
    date = _ref$date === void 0 ? 'Long ago' : _ref$date,
    _ref$previewUrl = _ref.previewUrl,
    previewUrl = _ref$previewUrl === void 0 ? '' : _ref$previewUrl,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$isClickAble = _ref.isClickAble,
    isClickAble = _ref$isClickAble === void 0 ? true : _ref$isClickAble,
    email = _ref.email;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    videoMenu = _useState2[0],
    setVideoMenu = _useState2[1];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useNavigate)();
  var selector = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)(function (state) {
    return state.regSlice.regData;
  });
  var dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch)();
  var addToViewLater = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
      var _data$data;
      var ref, data, oldViewLater, isVidUnique, i;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_9__.DB, 'users', selector.email);
          case 2:
            ref = _context.sent;
            _context.next = 5;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDoc)(ref);
          case 5:
            data = _context.sent;
            oldViewLater = (_data$data = data.data()) === null || _data$data === void 0 ? void 0 : _data$data.viewLater;
            _context.prev = 7;
            if (!oldViewLater) {
              _context.next = 24;
              break;
            }
            isVidUnique = true;
            i = 0;
          case 11:
            if (!(i < oldViewLater.length)) {
              _context.next = 18;
              break;
            }
            isVidUnique = !(videoId === oldViewLater[i]);
            if (isVidUnique) {
              _context.next = 15;
              break;
            }
            return _context.abrupt("break", 18);
          case 15:
            i++;
            _context.next = 11;
            break;
          case 18:
            if (!isVidUnique) {
              _context.next = 22;
              break;
            }
            _context.next = 21;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.updateDoc)(ref, {
              viewLater: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(oldViewLater), [videoId])
            });
          case 21:
            if (selector.viewLater) dispatch((0,_store_slices_registration__WEBPACK_IMPORTED_MODULE_12__.setRegData)({
              viewLater: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selector.viewLater), [videoObj])
            }));
          case 22:
            _context.next = 27;
            break;
          case 24:
            _context.next = 26;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.updateDoc)(ref, {
              viewLater: [videoId]
            });
          case 26:
            dispatch((0,_store_slices_registration__WEBPACK_IMPORTED_MODULE_12__.setRegData)({
              viewLater: [videoObj]
            }));
          case 27:
            _context.next = 32;
            break;
          case 29:
            _context.prev = 29;
            _context.t0 = _context["catch"](7);
            console.error(_context.t0);
          case 32:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[7, 29]]);
    }));
    return function addToViewLater() {
      return _ref2.apply(this, arguments);
    };
  }();
  var currentUserEmailFormatted = email ? email.replace(/\./g, '') : '';
  var onVideoAuthorClickHandler = function onVideoAuthorClickHandler() {
    dispatch((0,_store_slices_creator__WEBPACK_IMPORTED_MODULE_13__.setCreatorEmail)({
      email: email
    }));
    navigate("../../../user/channel/".concat(currentUserEmailFormatted));
  };
  var onVideoCompClickHandler = function onVideoCompClickHandler() {
    dispatch((0,_store_slices_creator__WEBPACK_IMPORTED_MODULE_13__.setCurrentVideo)({
      videoObj: videoObj
    }));
    isClickAble ? navigate("../../../video/".concat(videoId)) : '';
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
    className: "".concat(className, " creator__video "),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      className: "creator__video__edit",
      onClick: function onClick() {
        setVideoMenu(!videoMenu);
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: "".concat(videoMenu ? 'active' : '', " creator__video__dots-wr"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_6__["default"], {
          id: "dots",
          className: "dots"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
          className: "".concat(videoMenu ? 'active' : '', " creator__video_view-later"),
          onClick: addToViewLater,
          children: "View later"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
      className: "creator__video__preview",
      src: previewUrl,
      onClick: onVideoCompClickHandler
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
      className: "creator__video__bottom",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: "creator__video__bottom_title",
        children: title
      }), author ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: "creator__video_author-wr",
        onClick: onVideoAuthorClickHandler,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: "creator__video_author",
          children: [authorPicUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("picture", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
              className: "creator__video_author_img",
              alt: "author img",
              src: authorPicUrl
            })
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("picture", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("source", {
              src: _assets_img_user_card_default_user_jpg_as_webp__WEBPACK_IMPORTED_MODULE_11__
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
              className: "creator__video_author_img",
              alt: "author img",
              src: _assets_img_user_card_default_user_jpg__WEBPACK_IMPORTED_MODULE_10__
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
            className: "creator__video_author_text",
            children: fName ? "".concat(fName, " ").concat(lName) : 'unknown'
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          className: "creator__video__bottom_date",
          children: date === 'NaN' ? 'unknown' : +date > 30 ? 'Long ago' : +date < 1 ? 'Today' : "".concat(date, " days ago")
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: "creator__video__bottom_date",
        children: date === 'NaN' ? 'unknown' : +date > 30 ? 'Long ago' : +date < 1 ? 'Today' : "".concat(date, " days ago")
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Creator/Video/Video.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Creator/Video/Video.scss ***!
  \******************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../assets/img/addvideo/play-btn.png */ "./src/assets/img/addvideo/play-btn.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.creator__video {
  cursor: pointer;
  width: 331.772px;
  position: relative;
  transition: 0.3s;
}
.creator__video:hover .creator__video__dots-wr {
  display: flex;
}
.creator__video:hover .creator__video__bottom {
  background-color: #222222;
  border-radius: 0 0 7.212px 7.212px;
}
.creator__video:hover::after {
  pointer-events: none;
  content: "";
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  display: block;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 50px;
  transition: 0.3s;
  height: 40px;
}
.creator__video__edit {
  position: absolute;
  right: 15px;
  top: 10px;
  z-index: 1;
}
.creator__video__dots-wr {
  border-radius: 7.212px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(1.8031088114px);
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  display: none;
}
.creator__video__dots-wr.active {
  border: 1px solid #fff;
}
.creator__video__dots-wr:hover {
  border: 1px solid #fff;
}
.creator__video__preview {
  width: 100%;
  height: 188.049px;
  object-fit: contain;
  background-color: #222;
  position: relative;
}
.creator__video__bottom {
  transition: 0.3s;
  padding: 7px;
}
.creator__video__bottom_title {
  font-size: 14.425px;
  font-weight: 500;
  line-height: 16.228px;
}
.creator__video__bottom_date {
  font-size: 12.622px;
  font-weight: 400;
  margin-top: 12px;
}
.creator__video_view-later {
  position: absolute;
  right: 0;
  bottom: -35px;
  width: 187px;
  background: red;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  background: var(--9, #222);
  display: none;
}
.creator__video_view-later:hover {
  text-decoration: underline;
}
.creator__video_view-later.active {
  display: block;
}
.creator__video_author {
  display: flex;
  align-items: center;
  gap: 5px;
}
.creator__video_author-wr {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
}
.creator__video_author-wr .creator__video__bottom_date {
  margin-top: 0;
}
.creator__video_author_text {
  color: #999;
  font-size: 14px;
  font-weight: 400;
}
.creator__video_author_img {
  width: 24px;
  height: 24px;
}

.video-cr-playlist {
  position: static;
}
.video-cr-playlist .creator__video__edit {
  display: none;
}
.video-cr-playlist:hover::after {
  display: none;
  content: "";
  background: none;
}

@media screen and (max-width: 375px) {
  .creator__video {
    width: 343px;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Creator/Video/Video.scss"],"names":[],"mappings":"AACI;EACI,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;AAAR;AAGY;EACI,aAAA;AADhB;AAGY;EACI,yBAAA;EACA,kCAAA;AADhB;AAGY;EACI,oBAAA;EACA,WAAA;EACA,yDAAA;EACA,4BAAA;EACA,cAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,6BAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;AADhB;AAKQ;EACI,kBAAA;EACA,WAAA;EACA,SAAA;EACA,UAAA;AAHZ;AAKQ;EACI,sBAAA;EACA,8BAAA;EACA,qCAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,aAAA;AAHZ;AAIY;EACI,sBAAA;AAFhB;AAIY;EACI,sBAAA;AAFhB;AAKQ;EACI,WAAA;EACA,iBAAA;EACA,mBAAA;EACA,sBAAA;EACA,kBAAA;AAHZ;AAKQ;EACI,gBAAA;EACA,YAAA;AAHZ;AAIY;EACI,mBAAA;EACA,gBAAA;EACA,qBAAA;AAFhB;AAIY;EACI,mBAAA;EACA,gBAAA;EACA,gBAAA;AAFhB;AAKQ;EACI,kBAAA;EACA,QAAA;EACA,aAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,aAAA;EACA,eAAA;EACA,0BAAA;EACA,aAAA;AAHZ;AAIY;EACI,0BAAA;AAFhB;AAIY;EACI,cAAA;AAFhB;AAKQ;EACI,aAAA;EACA,mBAAA;EACA,QAAA;AAHZ;AAKQ;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;AAHZ;AAIY;EACI,aAAA;AAFhB;AAKQ;EACI,WAAA;EACA,eAAA;EACA,gBAAA;AAHZ;AAMQ;EACI,WAAA;EACA,YAAA;AAJZ;;AAQA;EACI,gBAAA;AALJ;AAMI;EACI,aAAA;AAJR;AAOQ;EACI,aAAA;EACA,WAAA;EACA,gBAAA;AALZ;;AASA;EAEQ;IACI,YAAA;EAPV;AACF","sourcesContent":[".creator {\r\n    &__video {\r\n        cursor: pointer;\r\n        width: 331.772px;\r\n        position: relative;\r\n        transition: 0.3s;\r\n\r\n        &:hover {\r\n            .creator__video__dots-wr {\r\n                display: flex;\r\n            }\r\n            .creator__video__bottom {\r\n                background-color: #222222;\r\n                border-radius: 0 0 7.212px 7.212px;\r\n            }\r\n            &::after {\r\n                pointer-events: none;\r\n                content: '';\r\n                background-image: url('../../../../assets/img/addvideo/play-btn.png');\r\n                background-repeat: no-repeat;\r\n                display: block;\r\n                position: absolute;\r\n                top: 40%;\r\n                left: 50%;\r\n                transform: translate(-50%, 0);\r\n                width: 50px;\r\n                transition: 0.3s;\r\n                height: 40px;\r\n            }\r\n        }\r\n\r\n        &__edit {\r\n            position: absolute;\r\n            right: 15px;\r\n            top: 10px;\r\n            z-index: 1;\r\n        }\r\n        &__dots-wr {\r\n            border-radius: 7.212px;\r\n            background: rgba(0, 0, 0, 0.4);\r\n            backdrop-filter: blur(1.803108811378479px);\r\n            width: 30px;\r\n            height: 30px;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            transition: 0.3s;\r\n            display: none;\r\n            &.active {\r\n                border: 1px solid #fff;\r\n            }\r\n            &:hover {\r\n                border: 1px solid #fff;\r\n            }\r\n        }\r\n        &__preview {\r\n            width: 100%;\r\n            height: 188.049px;\r\n            object-fit: contain;\r\n            background-color: #222;\r\n            position: relative;\r\n        }\r\n        &__bottom {\r\n            transition: 0.3s;\r\n            padding: 7px;\r\n            &_title {\r\n                font-size: 14.425px;\r\n                font-weight: 500;\r\n                line-height: 16.228px;\r\n            }\r\n            &_date {\r\n                font-size: 12.622px;\r\n                font-weight: 400;\r\n                margin-top: 12px;\r\n            }\r\n        }\r\n        &_view-later {\r\n            position: absolute;\r\n            right: 0;\r\n            bottom: -35px;\r\n            width: 187px;\r\n            background: red;\r\n            border-radius: 8px;\r\n            padding: 10px;\r\n            cursor: pointer;\r\n            background: var(--9, #222);\r\n            display: none;\r\n            &:hover {\r\n                text-decoration: underline;\r\n            }\r\n            &.active {\r\n                display: block;\r\n            }\r\n        }\r\n        &_author {\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 5px;\r\n        }\r\n        &_author-wr {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            margin-top: 5px;\r\n            .creator__video__bottom_date {\r\n                margin-top: 0;\r\n            }\r\n        }\r\n        &_author_text {\r\n            color: #999;\r\n            font-size: 14px;\r\n            font-weight: 400;\r\n        }\r\n\r\n        &_author_img {\r\n            width: 24px;\r\n            height: 24px;\r\n        }\r\n    }\r\n}\r\n.video-cr-playlist {\r\n    position: static;\r\n    .creator__video__edit {\r\n        display: none;\r\n    }\r\n    &:hover {\r\n        &::after {\r\n            display: none;\r\n            content: '';\r\n            background: none;\r\n        }\r\n    }\r\n}\r\n@media screen and (max-width: 375px) {\r\n    .creator {\r\n        &__video {\r\n            width: 343px;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/pages/Creator/Video/Video.scss":
/*!*******************************************************!*\
  !*** ./src/components/pages/Creator/Video/Video.scss ***!
  \*******************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Video_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./Video.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Creator/Video/Video.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Video_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Video_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Video_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Video_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/img/addvideo/play-btn.png":
/*!**********************************************!*\
  !*** ./src/assets/img/addvideo/play-btn.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/play-btn5034c1840b4b9d66ad94.png";

/***/ }),

/***/ "./src/assets/img/user/card/default-user.jpg":
/*!***************************************************!*\
  !*** ./src/assets/img/user/card/default-user.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/default-user27f7d13b61ed57e08c65.jpg";

/***/ }),

/***/ "./src/assets/img/user/card/default-user.jpg?as=webp":
/*!***********************************************************!*\
  !*** ./src/assets/img/user/card/default-user.jpg?as=webp ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/default-userc09dcb5183597e87a48a.webp";

/***/ })

}]);
//# sourceMappingURL=src_components_pages_Creator_Video_Video_tsx-src_components_utils_getDate_tsx.app.997e1107378afbc3d8fe.js.map