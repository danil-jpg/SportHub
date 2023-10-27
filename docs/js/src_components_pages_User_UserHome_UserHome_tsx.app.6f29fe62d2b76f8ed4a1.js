"use strict";
(self["webpackChunksporthub"] = self["webpackChunksporthub"] || []).push([["src_components_pages_User_UserHome_UserHome_tsx"],{

/***/ "./src/components/pages/User/UserHome/Slider/Slider.tsx":
/*!**************************************************************!*\
  !*** ./src/components/pages/User/UserHome/Slider/Slider.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/element/bundle */ "./node_modules/swiper/swiper-element-bundle.mjs");
/* harmony import */ var _assets_img_user_card_mind_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../assets/img/user/card/mind.jpg */ "./src/assets/img/user/card/mind.jpg");
/* harmony import */ var _assets_img_user_card_mind_jpg_as_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../assets/img/user/card/mind.jpg?as=webp */ "./src/assets/img/user/card/mind.jpg?as=webp");
/* harmony import */ var _assets_img_user_card_body_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../assets/img/user/card/body.jpg */ "./src/assets/img/user/card/body.jpg");
/* harmony import */ var _assets_img_user_card_body_jpg_as_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../assets/img/user/card/body.jpg?as=webp */ "./src/assets/img/user/card/body.jpg?as=webp");
/* harmony import */ var _assets_img_user_card_soul_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../assets/img/user/card/soul.jpg */ "./src/assets/img/user/card/soul.jpg");
/* harmony import */ var _assets_img_user_card_soul_jpg_as_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../assets/img/user/card/soul.jpg?as=webp */ "./src/assets/img/user/card/soul.jpg?as=webp");
/* harmony import */ var _Slider_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Slider.scss */ "./src/components/pages/User/UserHome/Slider/Slider.scss");
/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/redux */ "./src/components/hooks/redux.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












var Slider = function Slider(_ref) {
  var className = _ref.className,
    setVideos = _ref.setVideos;
  var swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var selector = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)(function (state) {
    return state.regSlice.regData.videos;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,swiper_element_bundle__WEBPACK_IMPORTED_MODULE_1__.register)();
    var params = {
      slidesPerView: 3,
      spaceBetween: 24,
      breakpoints: {
        768: {
          slidesPerView: 2.5
        },
        576: {
          slidesPerView: 2
        },
        320: {
          slidesPerView: 1.5
        }
      }
    };
    if (!swiperRef.current) return;
    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("swiper-container", {
    className: className,
    init: false,
    ref: swiperRef,
    style: {},
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("swiper-slide", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "slider__item",
        onClick: function onClick() {
          setVideos(function (prev) {
            prev = selector;
            return prev = prev.filter(function (el) {
              return el.category === 'Mind';
            });
          });
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("picture", {
          className: "",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("source", {
            src: _assets_img_user_card_mind_jpg_as_webp__WEBPACK_IMPORTED_MODULE_3__
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            src: _assets_img_user_card_mind_jpg__WEBPACK_IMPORTED_MODULE_2__
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("swiper-slide", {
      style: {
        cursor: 'pointer'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "slider__item",
        onClick: function onClick() {
          setVideos(function (prev) {
            prev = selector;
            return prev = prev.filter(function (el) {
              return el.category === 'Body';
            });
          });
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("picture", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("source", {
            src: _assets_img_user_card_body_jpg_as_webp__WEBPACK_IMPORTED_MODULE_5__
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            src: _assets_img_user_card_body_jpg__WEBPACK_IMPORTED_MODULE_4__
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("swiper-slide", {
      style: {
        cursor: 'pointer'
      },
      onClick: function onClick() {
        setVideos(function (prev) {
          prev = selector;
          return prev = prev.filter(function (el) {
            return el.category === 'Soul';
          });
        });
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "slider__item",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("picture", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("source", {
            src: _assets_img_user_card_soul_jpg_as_webp__WEBPACK_IMPORTED_MODULE_7__
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            src: _assets_img_user_card_soul_jpg__WEBPACK_IMPORTED_MODULE_6__
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);

/***/ }),

/***/ "./src/components/pages/User/UserHome/UserHome.tsx":
/*!*********************************************************!*\
  !*** ./src/components/pages/User/UserHome/UserHome.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserHome_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserHome.scss */ "./src/components/pages/User/UserHome/UserHome.scss");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony import */ var _Slider_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider/Slider */ "./src/components/pages/User/UserHome/Slider/Slider.tsx");
/* harmony import */ var _Creator_Video_Video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Creator/Video/Video */ "./src/components/pages/Creator/Video/Video.tsx");
/* harmony import */ var _utils_getDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/getDate */ "./src/components/utils/getDate.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var UserHome = function UserHome(_ref) {
  var videos = _ref.videos,
    setVideos = _ref.setVideos;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "user-home__right",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Slider_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "user-home__slider",
      setVideos: setVideos
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "user-home__videos-section",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "user-home__videos_text",
        children: "Video List"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "user-home__videos-wr",
        children: videos ? videos.map(function (el) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Creator_Video_Video__WEBPACK_IMPORTED_MODULE_3__["default"], {
            email: el.email,
            title: el.title,
            previewUrl: el.previewUrl,
            date: (0,_utils_getDate__WEBPACK_IMPORTED_MODULE_4__["default"])(el.date),
            fName: el.fname,
            lName: el.lname,
            author: true,
            authorPicUrl: el.authorPicUrl,
            videoObj: el,
            videoId: el.videoId
          }, (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])());
        }) : ''
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserHome);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserHome/Slider/Slider.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserHome/Slider/Slider.scss ***!
  \**************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.user-home__slider {
  height: 100%;
}

.slider__item {
  cursor: pointer;
  transition: 0.3s;
  border: 1px solid transparent;
  width: 100%;
  border-radius: 10px;
}
.slider__item:hover {
  border: 1px solid #fff;
  border-radius: 10px;
}
.slider__item img {
  width: 100%;
  display: block;
  width: 100%;
  border-radius: 10px;
}

@media screen and (max-width: 992px) {
  .user-home__right {
    height: auto;
  }
  .slider__item {
    width: auto;
    height: auto;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/pages/User/UserHome/Slider/Slider.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;AACJ;;AAEA;EAGI,eAAA;EACA,gBAAA;EACA,6BAAA;EACA,WAAA;EACA,mBAAA;AADJ;AAEI;EACI,sBAAA;EACA,mBAAA;AAAR;AAEI;EACI,WAAA;EACA,cAAA;EACA,WAAA;EACA,mBAAA;AAAR;;AAIA;EACI;IACI,YAAA;EADN;EAGE;IACI,WAAA;IACA,YAAA;EADN;AACF","sourcesContent":[".user-home__slider {\r\n    height: 100%;\r\n}\r\n\r\n.slider__item {\r\n    // max-height: 240px;\r\n    // aspect-ratio: 1;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n    border: 1px solid transparent;\r\n    width: 100%;\r\n    border-radius: 10px;\r\n    &:hover {\r\n        border: 1px solid #fff;\r\n        border-radius: 10px;\r\n    }\r\n    img {\r\n        width: 100%;\r\n        display: block;\r\n        width: 100%;\r\n        border-radius: 10px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n    .user-home__right {\r\n        height: auto;\r\n    }\r\n    .slider__item {\r\n        width: auto;\r\n        height: auto;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserHome/UserHome.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserHome/UserHome.scss ***!
  \*********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.user-home {
  display: grid;
  grid-template-columns: 1fr 83%;
  gap: 24px;
}
.user-home__container {
  padding: 0px 24px;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 7px;
}
.user-home__filters-wr {
  margin-top: 22px;
}
.user-home__filter {
  margin-bottom: 8px;
  color: #bbb;
  font-size: 16px;
  font-weight: 400;
  height: 38px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
}
.user-home__filter:last-of-type {
  margin-bottom: 0;
}
.user-home__filter.active {
  border-radius: 8px;
  background: #222;
  color: #fff;
  font-size: 16px;
}
.user-home__subscriptions {
  border-top: 1px solid #222;
  margin-top: 24px;
  padding-top: 12px;
}
.user-home__subscriptions_title {
  color: #ad7955;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 11px;
  text-transform: uppercase;
}
.user-home__right {
  cursor: pointer;
  height: 240px;
  margin-top: 25px;
}
.user-home__videos-section {
  margin-top: 30px;
}
.user-home__videos_text {
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 25.5px;
}
.user-home__videos-wr {
  gap: 24px;
  padding-left: 1px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.user-home .creator__video {
  width: 100%;
}

@media screen and (max-width: 1440px) {
  .user-home {
    display: block;
  }
  .user-home__left {
    display: none;
  }
}
@media screen and (max-width: 992px) {
  .user-home {
    display: block;
  }
  .user-home__left {
    display: none;
  }
  .user-home__videos-wr {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 768px) {
  .user-home__videos-wr {
    grid-template-columns: 1fr;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/pages/User/UserHome/UserHome.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,8BAAA;EACA,SAAA;AACJ;AACI;EACI,iBAAA;EACA,iBAAA;EACA,cAAA;EACA,eAAA;AACR;AAKI;EACI,gBAAA;AAHR;AAMI;EACI,kBAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;AAJR;AAKQ;EACI,gBAAA;AAHZ;AAKQ;EACI,kBAAA;EACA,gBAAA;EACA,WAAA;EACA,eAAA;AAHZ;AAOI;EACI,0BAAA;EACA,gBAAA;EACA,iBAAA;AALR;AAMQ;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;AAJZ;AAQI;EACI,eAAA;EACA,aAAA;EACA,gBAAA;AANR;AAQI;EACI,gBAAA;AANR;AAQI;EACI,WAAA;EACA,eAAA;EACA,gBAAA;EACA,qBAAA;AANR;AAQI;EACI,SAAA;EACA,iBAAA;EACA,aAAA;EACA,kCAAA;AANR;AAUI;EACI,WAAA;AARR;;AAYA;EACI;IACI,cAAA;EATN;EAUM;IACI,aAAA;EARV;AACF;AAYA;EACI;IACI,cAAA;EAVN;EAWM;IACI,aAAA;EATV;EAYM;IACI,8BAAA;EAVV;AACF;AAcA;EAEQ;IACI,0BAAA;EAbV;AACF","sourcesContent":[".user-home {\r\n    display: grid;\r\n    grid-template-columns: 1fr 83%;\r\n    gap: 24px;\r\n\r\n    &__container {\r\n        padding: 0px 24px;\r\n        max-width: 1440px;\r\n        margin: 0 auto;\r\n        margin-top: 7px;\r\n    }\r\n\r\n    &__left {\r\n    }\r\n\r\n    &__filters-wr {\r\n        margin-top: 22px;\r\n    }\r\n\r\n    &__filter {\r\n        margin-bottom: 8px;\r\n        color: #bbb;\r\n        font-size: 16px;\r\n        font-weight: 400;\r\n        height: 38px;\r\n        display: flex;\r\n        align-items: center;\r\n        padding: 0 10px;\r\n        cursor: pointer;\r\n        &:last-of-type {\r\n            margin-bottom: 0;\r\n        }\r\n        &.active {\r\n            border-radius: 8px;\r\n            background: #222;\r\n            color: #fff;\r\n            font-size: 16px;\r\n        }\r\n    }\r\n\r\n    &__subscriptions {\r\n        border-top: 1px solid #222;\r\n        margin-top: 24px;\r\n        padding-top: 12px;\r\n        &_title {\r\n            color: #ad7955;\r\n            font-size: 12px;\r\n            font-weight: 600;\r\n            margin-bottom: 11px;\r\n            text-transform: uppercase;\r\n        }\r\n    }\r\n\r\n    &__right {\r\n        cursor: pointer;\r\n        height: 240px;\r\n        margin-top: 25px;\r\n    }\r\n    &__videos-section {\r\n        margin-top: 30px;\r\n    }\r\n    &__videos_text {\r\n        color: #fff;\r\n        font-size: 24px;\r\n        font-weight: 500;\r\n        margin-bottom: 25.5px;\r\n    }\r\n    &__videos-wr {\r\n        gap: 24px;\r\n        padding-left: 1px;\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n    &__slider {\r\n    }\r\n    .creator__video {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1440px) {\r\n    .user-home {\r\n        display: block;\r\n        &__left {\r\n            display: none;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n    .user-home {\r\n        display: block;\r\n        &__left {\r\n            display: none;\r\n        }\r\n\r\n        &__videos-wr {\r\n            grid-template-columns: 1fr 1fr;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .user-home {\r\n        &__videos-wr {\r\n            grid-template-columns: 1fr;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/pages/User/UserHome/Slider/Slider.scss":
/*!***************************************************************!*\
  !*** ./src/components/pages/User/UserHome/Slider/Slider.scss ***!
  \***************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Slider_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./Slider.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserHome/Slider/Slider.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Slider_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Slider_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Slider_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Slider_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/User/UserHome/UserHome.scss":
/*!**********************************************************!*\
  !*** ./src/components/pages/User/UserHome/UserHome.scss ***!
  \**********************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserHome_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./UserHome.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/User/UserHome/UserHome.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserHome_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserHome_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserHome_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserHome_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/img/user/card/body.jpg":
/*!*******************************************!*\
  !*** ./src/assets/img/user/card/body.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/body49d220f758d127d8fed0.jpg";

/***/ }),

/***/ "./src/assets/img/user/card/body.jpg?as=webp":
/*!***************************************************!*\
  !*** ./src/assets/img/user/card/body.jpg?as=webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/bodye983ae47d6368e316ada.webp";

/***/ }),

/***/ "./src/assets/img/user/card/mind.jpg":
/*!*******************************************!*\
  !*** ./src/assets/img/user/card/mind.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/mind680415711e071046c9a7.jpg";

/***/ }),

/***/ "./src/assets/img/user/card/mind.jpg?as=webp":
/*!***************************************************!*\
  !*** ./src/assets/img/user/card/mind.jpg?as=webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/mind2f265da9629c6941982f.webp";

/***/ }),

/***/ "./src/assets/img/user/card/soul.jpg":
/*!*******************************************!*\
  !*** ./src/assets/img/user/card/soul.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/soulc62e433f5102c0c875de.jpg";

/***/ }),

/***/ "./src/assets/img/user/card/soul.jpg?as=webp":
/*!***************************************************!*\
  !*** ./src/assets/img/user/card/soul.jpg?as=webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/soul7e44cf403766071c6bcd.webp";

/***/ })

}]);
//# sourceMappingURL=src_components_pages_User_UserHome_UserHome_tsx.app.6f29fe62d2b76f8ed4a1.js.map