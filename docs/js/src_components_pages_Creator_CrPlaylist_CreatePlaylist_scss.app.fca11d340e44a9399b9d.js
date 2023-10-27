"use strict";
(self["webpackChunksporthub"] = self["webpackChunksporthub"] || []).push([["src_components_pages_Creator_CrPlaylist_CreatePlaylist_scss"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Creator/CrPlaylist/CreatePlaylist.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Creator/CrPlaylist/CreatePlaylist.scss ***!
  \********************************************************************************************************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../assets/img/playlists/Check.svg */ "./src/assets/img/playlists/Check.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cr-playlist {
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 33px;
  width: 100%;
}
.cr-playlist .creator__video {
  width: 100%;
  margin: 24px 0;
}
.cr-playlist__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
}
.cr-playlist__top_btn {
  width: 180px;
  background-color: #777;
}
.cr-playlist__top_btn.active {
  background-color: #ad7955;
}
.cr-playlist__center {
  display: grid;
  grid-template-columns: 47% 1fr;
  gap: 47px;
}
.cr-playlist__center__right {
  border-left: 1px solid var(--9, #222);
  padding-left: 7%;
  padding-top: 16px;
}
.cr-playlist__center_select-videos {
  margin-top: 24px;
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid #ad7955;
  color: #ad7955;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
}
.cr-playlist__title {
  color: #fff;
  font-size: 24px;
  font-weight: 500;
}
.cr-playlist__top-right {
  display: flex;
  justify-content: space-between;
}
.cr-playlist .input__wr,
.cr-playlist .textarea__wr {
  margin-bottom: 25px;
}
.cr-playlist__selected {
  margin-top: 24px;
  font-size: 14px;
  font-weight: 400;
}
.cr-playlist__chosen-ul {
  margin-top: 4px;
  border-radius: 8px;
  background: var(--9, #222);
  padding: 16px;
}
.cr-playlist__chosen-li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 16px;
}
.cr-playlist__chosen-li:last-of-type {
  margin-bottom: 0;
}

.cr-playlist__center__right_selected {
  display: none;
}

.cr-playlist__center_select-videos {
  display: none;
}

.video-active {
  border: 1px solid #ad7955;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}
.video-active::after {
  fill: #fff;
  width: 31.348px;
  height: 31.348px;
  content: "";
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  border-radius: 0px 5px 0px 9px;
  background-color: #ad7955;
  background-position: center center;
}

@media screen and (max-width: 1440px) {
  .cr-playlist {
    padding: 0 16px;
  }
}
@media screen and (max-width: 996px) {
  .cr-playlist {
    padding: 0 16px;
    max-width: 920px;
  }
}
@media screen and (max-width: 767px) {
  .cr-playlist__center_select-videos {
    display: block;
  }
  .cr-playlist {
    margin-top: 7px;
  }
  .cr-playlist .dotBtn {
    display: none;
  }
  .cr-playlist__center__right {
    display: none;
  }
  .cr-playlist__center__right.active {
    display: block;
  }
  .cr-playlist__center__right .input {
    margin-top: 14px;
  }
  .cr-playlist__top_btn {
    width: auto;
  }
  .cr-playlist__title {
    font-size: 18px;
    font-weight: 500;
  }
  .cr-playlist_selected-text {
    color: #fff;
    font-family: Uto;
    font-size: 16px;
    font-weight: 600;
  }
  .cr-playlist__center__right_selected {
    display: block;
    width: 100%;
    background: #323232;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17px 14px;
  }
  .cr-playlist__center {
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    gap: 0;
  }
  .cr-playlist__center__right {
    background: #111;
    width: 100%;
    position: absolute;
    bottom: 0;
    border-left: none;
    padding-left: 0;
    padding-top: 0;
    top: -70px;
    width: 100%;
    height: 100vh;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Creator/CrPlaylist/CreatePlaylist.scss"],"names":[],"mappings":"AAAA;EACI,iBAAA;EACA,cAAA;EACA,gBAAA;EACA,WAAA;AACJ;AACI;EACI,WAAA;EACA,cAAA;AACR;AAEI;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EAEA,mBAAA;AADR;AAGQ;EACI,YAAA;EACA,sBAAA;AADZ;AAEY;EACI,yBAAA;AAAhB;AAKI;EACI,aAAA;EACA,8BAAA;EACA,SAAA;AAHR;AAIQ;EACI,qCAAA;EACA,gBAAA;EACA,iBAAA;AAFZ;AAIQ;EACI,gBAAA;EACA,6BAAA;EACA,kBAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,WAAA;AAFZ;AAKI;EACI,WAAA;EACA,eAAA;EACA,gBAAA;AAHR;AAMI;EACI,aAAA;EACA,8BAAA;AAJR;AAMI;;EAEI,mBAAA;AAJR;AAMI;EACI,gBAAA;EACA,eAAA;EACA,gBAAA;AAJR;AAOI;EACI,eAAA;EACA,kBAAA;EACA,0BAAA;EACA,aAAA;AALR;AAOI;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;AALR;AAMQ;EACI,gBAAA;AAJZ;;AAQA;EACI,aAAA;AALJ;;AAOA;EACI,aAAA;AAJJ;;AAYA;EACI,yBAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;AATJ;AAUI;EACI,UAAA;EACA,eAAA;EACA,gBAAA;EACA,WAAA;EACA,QAAA;EACA,MAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yDAAA;EACA,4BAAA;EACA,8BAAA;EACA,yBAAA;EACA,kCAAA;AARR;;AAYA;EACI;IACI,eAAA;EATN;AACF;AAYA;EACI;IACI,eAAA;IACA,gBAAA;EAVN;AACF;AAaA;EAII;IACI,cAAA;EAdN;EAgBE;IACI,eAAA;EAdN;EAgBM;IACI,aAAA;EAdV;EAgBM;IACI,aAAA;EAdV;EAeU;IACI,cAAA;EAbd;EAeU;IACI,gBAAA;EAbd;EAgBM;IACI,WAAA;EAdV;EAgBM;IACI,eAAA;IACA,gBAAA;EAdV;EAgBM;IACI,WAAA;IACA,gBAAA;IACA,eAAA;IAEA,gBAAA;EAfV;EAkBM;IACI,cAAA;IACA,WAAA;IACA,mBAAA;IACA,aAAA;IACA,8BAAA;IACA,mBAAA;IACA,kBAAA;EAhBV;EAoBE;IACI,aAAA;IACA,0BAAA;IACA,kBAAA;IACA,MAAA;EAlBN;EAmBM;IACI,gBAAA;IACA,WAAA;IACA,kBAAA;IACA,SAAA;IACA,iBAAA;IACA,eAAA;IACA,cAAA;IACA,UAAA;IACA,WAAA;IACA,aAAA;EAjBV;AACF","sourcesContent":[".cr-playlist {\r\n    max-width: 1440px;\r\n    margin: 0 auto;\r\n    margin-top: 33px;\r\n    width: 100%;\r\n\r\n    .creator__video {\r\n        width: 100%;\r\n        margin: 24px 0;\r\n    }\r\n\r\n    &__top {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n\r\n        margin-bottom: 26px;\r\n\r\n        &_btn {\r\n            width: 180px;\r\n            background-color: #777;\r\n            &.active {\r\n                background-color: #ad7955;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__center {\r\n        display: grid;\r\n        grid-template-columns: 47% 1fr;\r\n        gap: 47px;\r\n        &__right {\r\n            border-left: 1px solid var(--9, #222);\r\n            padding-left: 7%;\r\n            padding-top: 16px;\r\n        }\r\n        &_select-videos {\r\n            margin-top: 24px;\r\n            background-color: transparent;\r\n            border-radius: 8px;\r\n            border: 1px solid #ad7955;\r\n            color: #ad7955;\r\n            font-size: 16px;\r\n            font-weight: 600;\r\n            width: 100%;\r\n        }\r\n    }\r\n    &__title {\r\n        color: #fff;\r\n        font-size: 24px;\r\n        font-weight: 500;\r\n    }\r\n\r\n    &__top-right {\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n    .input__wr,\r\n    .textarea__wr {\r\n        margin-bottom: 25px;\r\n    }\r\n    &__selected {\r\n        margin-top: 24px;\r\n        font-size: 14px;\r\n        font-weight: 400;\r\n    }\r\n\r\n    &__chosen-ul {\r\n        margin-top: 4px;\r\n        border-radius: 8px;\r\n        background: var(--9, #222);\r\n        padding: 16px;\r\n    }\r\n    &__chosen-li {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        font-size: 16px;\r\n        font-weight: 400;\r\n        margin-bottom: 16px;\r\n        &:last-of-type {\r\n            margin-bottom: 0;\r\n        }\r\n    }\r\n}\r\n.cr-playlist__center__right_selected {\r\n    display: none;\r\n}\r\n.cr-playlist__center_select-videos {\r\n    display: none;\r\n}\r\n\r\n.cr-playlist {\r\n    &__chosen-li {\r\n    }\r\n}\r\n\r\n.video-active {\r\n    border: 1px solid #ad7955;\r\n    position: relative;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    &::after {\r\n        fill: #fff;\r\n        width: 31.348px;\r\n        height: 31.348px;\r\n        content: '';\r\n        right: 0;\r\n        top: 0;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        position: absolute;\r\n        background-image: url('../../../../assets/img/playlists/Check.svg');\r\n        background-repeat: no-repeat;\r\n        border-radius: 0px 5px 0px 9px;\r\n        background-color: #ad7955;\r\n        background-position: center center;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1440px) {\r\n    .cr-playlist {\r\n        padding: 0 16px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 996px) {\r\n    .cr-playlist {\r\n        padding: 0 16px;\r\n        max-width: 920px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .cr-playlist__center__right_selected {\r\n        // display: none;\r\n    }\r\n    .cr-playlist__center_select-videos {\r\n        display: block;\r\n    }\r\n    .cr-playlist {\r\n        margin-top: 7px;\r\n\r\n        .dotBtn {\r\n            display: none;\r\n        }\r\n        &__center__right {\r\n            display: none;\r\n            &.active {\r\n                display: block;\r\n            }\r\n            .input {\r\n                margin-top: 14px;\r\n            }\r\n        }\r\n        &__top_btn {\r\n            width: auto;\r\n        }\r\n        &__title {\r\n            font-size: 18px;\r\n            font-weight: 500;\r\n        }\r\n        &_selected-text {\r\n            color: #fff;\r\n            font-family: Uto;\r\n            font-size: 16px;\r\n\r\n            font-weight: 600;\r\n        }\r\n\r\n        &__center__right_selected {\r\n            display: block;\r\n            width: 100%;\r\n            background: #323232;\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            padding: 17px 14px;\r\n        }\r\n    }\r\n\r\n    .cr-playlist__center {\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        position: relative;\r\n        gap: 0;\r\n        &__right {\r\n            background: #111;\r\n            width: 100%;\r\n            position: absolute;\r\n            bottom: 0;\r\n            border-left: none;\r\n            padding-left: 0;\r\n            padding-top: 0;\r\n            top: -70px;\r\n            width: 100%;\r\n            height: 100vh;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/pages/Creator/CrPlaylist/CreatePlaylist.scss":
/*!*********************************************************************!*\
  !*** ./src/components/pages/Creator/CrPlaylist/CreatePlaylist.scss ***!
  \*********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_CreatePlaylist_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./CreatePlaylist.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Creator/CrPlaylist/CreatePlaylist.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_CreatePlaylist_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_CreatePlaylist_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_CreatePlaylist_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_CreatePlaylist_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/img/playlists/Check.svg":
/*!********************************************!*\
  !*** ./src/assets/img/playlists/Check.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/d35585aba87bd7c9b6d3.svg";

/***/ })

}]);
//# sourceMappingURL=src_components_pages_Creator_CrPlaylist_CreatePlaylist_scss.app.fca11d340e44a9399b9d.js.map