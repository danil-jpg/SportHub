"use strict";
(self["webpackChunksporthub"] = self["webpackChunksporthub"] || []).push([["src_components_pages_Creator_CrPlaylist_CreatePlaylist_tsx"],{

/***/ "./src/components/pages/Creator/CrPlaylist/CreatePlaylist.tsx":
/*!********************************************************************!*\
  !*** ./src/components/pages/Creator/CrPlaylist/CreatePlaylist.tsx ***!
  \********************************************************************/
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
/* harmony import */ var _ui_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/Button/Button */ "./src/components/ui/Button/Button.tsx");
/* harmony import */ var _ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/IconRenderer/IconRenderer */ "./src/components/ui/IconRenderer/IconRenderer.tsx");
/* harmony import */ var _CreatePlaylist_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CreatePlaylist.scss */ "./src/components/pages/Creator/CrPlaylist/CreatePlaylist.scss");
/* harmony import */ var _ui_Forms_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/Forms/InputContainer/InputContainer */ "./src/components/ui/Forms/InputContainer/InputContainer.tsx");
/* harmony import */ var _ui_Forms_SelectContainer_SelectContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/Forms/SelectContainer/SelectContainer */ "./src/components/ui/Forms/SelectContainer/SelectContainer.tsx");
/* harmony import */ var _ui_Forms_Input_Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/Forms/Input/Input */ "./src/components/ui/Forms/Input/Input.tsx");
/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/redux */ "./src/components/hooks/redux.tsx");
/* harmony import */ var _Video_Video__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Video/Video */ "./src/components/pages/Creator/Video/Video.tsx");
/* harmony import */ var _utils_getDate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../utils/getDate */ "./src/components/utils/getDate.tsx");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony import */ var _ui_Forms_TextareaContainer_TextareaContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ui/Forms/TextareaContainer/TextareaContainer */ "./src/components/ui/Forms/TextareaContainer/TextareaContainer.tsx");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/esm/index.esm.js");
/* harmony import */ var _config_firebase_config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../config/firebase-config */ "./src/config/firebase-config.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
























var CreatePlaylist = function CreatePlaylist() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    burgerMenu = _useState2[0],
    setBurgerMenu = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
    searchInput = _useState4[0],
    setSearchInput = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
    selectState = _useState6[0],
    setSelectState = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
    _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
    titleInput = _useState8[0],
    setTitleInput = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
    _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
    textAreaInput = _useState10[0],
    setTextAreaInput = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
    _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState11, 2),
    saveBtnState = _useState12[0],
    setSaveBtnState = _useState12[1];
  var selector = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_11__.useAppSelector)(function (state) {
    return state.regSlice.regData;
  });
  var videosIds = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_11__.useAppSelector)(function (state) {
    return state.regSlice.regData.videosIds;
  });
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
    _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState13, 2),
    videoData = _useState14[0],
    setVideoData = _useState14[1];
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (videosIds && (videosIds === null || videosIds === void 0 ? void 0 : videosIds.length) > 0) {
      videosIds.map( /*#__PURE__*/function () {
        var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(el) {
          var docRef, getVideo;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_16__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_17__.DB, 'videos', el);
              case 2:
                docRef = _context.sent;
                _context.next = 5;
                return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_16__.getDoc)(docRef);
              case 5:
                getVideo = _context.sent;
                if (getVideo.data()) {
                  setVideoData(function (prev) {
                    return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev), [getVideo.data()]);
                  });
                }
              case 7:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, []);
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([Array(videoData === null || videoData === void 0 ? void 0 : videoData.length).fill(false), Array(videoData === null || videoData === void 0 ? void 0 : videoData.length).fill({})]),
    _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState15, 2),
    selectedArrState = _useState16[0],
    setSelectedArrState = _useState16[1];
  var countNumberOfVideos = function countNumberOfVideos() {
    var num = 0;
    for (var i = 0; i < selectedArrState[0].length; i++) {
      if (selectedArrState[0][i]) {
        num++;
      }
    }
    return num;
  };
  var numOfVideos = countNumberOfVideos();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useNavigate)();
  var filterVideosArrFunc = function filterVideosArrFunc() {
    var res = videoData.filter(function (el) {
      return el.title.toUpperCase().includes(searchInput.toUpperCase());
    }).map(function (el, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
        onClick: function onClick() {
          setSelectedArrState(function (prev) {
            var res = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev[0]);
            res[index] = !res[index];
            //
            var vidoesArr = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev[1]);
            if (res[index]) {
              vidoesArr[index] = el;
            } else {
              vidoesArr[index] = [];
            }
            return [res, vidoesArr];
          });
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Video_Video__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: "".concat(selectedArrState[0][index] ? 'video-active' : '', " video-cr-playlist"),
          previewUrl: el.previewUrl,
          title: el.title,
          isClickAble: false,
          date: (0,_utils_getDate__WEBPACK_IMPORTED_MODULE_13__["default"])(el.date)
        })
      }, (0,uuid__WEBPACK_IMPORTED_MODULE_20__["default"])());
    });
    return res;
  };
  var checkIfVideoHadChoosen = function checkIfVideoHadChoosen() {
    var status = false;
    for (var i = 0; i < selectedArrState[0].length; i++) {
      if (selectedArrState[0][i] === true) {
        status = true;
        break;
      }
    }
    return status ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("p", {
        className: "cr-playlist__selected",
        children: "Selected"
      }), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("ul", {
        className: "cr-playlist__chosen-ul",
        children: selectedArrState[1].map(function (el, index) {
          return el.title ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("li", {
            className: "cr-playlist__chosen-li",
            children: [el.title, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_6__["default"], {
              id: "small-cross",
              onClick: function onClick() {
                return setSelectedArrState(function (prev) {
                  var res = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev[0]);
                  res[index] = !res[index];
                  //
                  var vidoesArr = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev[1]);
                  if (res[index]) {
                    vidoesArr[index] = el;
                  } else {
                    vidoesArr[index] = [];
                  }
                  return [res, vidoesArr];
                });
              }
            })]
          }, (0,uuid__WEBPACK_IMPORTED_MODULE_20__["default"])()) : '';
        })
      })]
    }) : '';
  };
  var onSaveClick = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
      var oldData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(selectState && selectState !== 'Select category' && titleInput && textAreaInput && countNumberOfVideos() > 1)) {
              _context2.next = 13;
              break;
            }
            _context2.next = 3;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_16__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_16__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_17__.DB, 'users', selector.email)).then(function (res) {
              var _res$data;
              return (_res$data = res.data()) === null || _res$data === void 0 ? void 0 : _res$data.playlists;
            });
          case 3:
            oldData = _context2.sent;
            if (!oldData) {
              _context2.next = 9;
              break;
            }
            _context2.next = 7;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_16__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_16__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_17__.DB, 'users', selector.email), {
              playlists: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(oldData), [{
                title: titleInput,
                description: textAreaInput,
                type: selectState,
                videos: selectedArrState[0].map(function (el, index) {
                  if (el === true) {
                    return videosIds ? videosIds[index] : '';
                  }
                }).filter(function (el) {
                  return el !== undefined;
                })
              }])
            }).then(function () {
              return sweetalert__WEBPACK_IMPORTED_MODULE_15___default()('Successfully added');
            }).then(function () {
              return navigate('../home-cr-playlist');
            });
          case 7:
            _context2.next = 11;
            break;
          case 9:
            _context2.next = 11;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_16__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_16__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_17__.DB, 'users', selector.email), {
              playlists: [{
                title: titleInput,
                description: textAreaInput,
                type: selectState,
                videos: selectedArrState[0].map(function (el, index) {
                  if (el === true) {
                    return videosIds ? videosIds[index] : '';
                  }
                }).filter(function (el) {
                  return el !== undefined;
                })
              }]
            }).then(function () {
              return sweetalert__WEBPACK_IMPORTED_MODULE_15___default()('Successfully added');
            }).then(function () {
              return navigate('../home-cr-playlist');
            });
          case 11:
            _context2.next = 14;
            break;
          case 13:
            sweetalert__WEBPACK_IMPORTED_MODULE_15___default()('Fill out all fields and select at least two video');
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function onSaveClick() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setSelectedArrState([Array(videoData === null || videoData === void 0 ? void 0 : videoData.length).fill(false), Array(videoData === null || videoData === void 0 ? void 0 : videoData.length).fill({})]);
  }, [videoData]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (selectState && selectState !== 'Select category' && titleInput && textAreaInput && numOfVideos > 1) {
      setSaveBtnState(true);
    } else {
      setSaveBtnState(false);
    }
  }, [selectState, titleInput, textAreaInput, numOfVideos]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
    className: "cr-playlist",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
      className: "cr-playlist__top",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("p", {
        className: "cr-playlist__title",
        children: "Create new playlist"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
        className: "cr-playlist__top-right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_ui_Button_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "".concat(saveBtnState ? 'active' : '', " cr-playlist__top_btn"),
          onClickHandler: function onClickHandler() {
            return onSaveClick();
          },
          children: "Save"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
      className: "cr-playlist__center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_ui_Forms_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
          text: "Playlist name",
          placeholder: "Enter playlist name",
          value: titleInput,
          onChangeHandler: function onChangeHandler(e) {
            return setTitleInput(e.target.value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_ui_Forms_TextareaContainer_TextareaContainer__WEBPACK_IMPORTED_MODULE_14__["default"], {
          value: textAreaInput,
          onChangeHandler: function onChangeHandler(e) {
            return setTextAreaInput(e.target.value);
          },
          text: "Description",
          placeholder: "Description"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_ui_Forms_SelectContainer_SelectContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
          setValue: setSelectState,
          value: selectState,
          title: "Category",
          placeholder: "Select category",
          arr: ['Mind', 'Body', 'Soul']
        }), checkIfVideoHadChoosen(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_ui_Button_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "cr-playlist__center_select-videos",
          onClickHandler: function onClickHandler() {
            return setBurgerMenu(true);
          },
          children: "Select video"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
        className: "cr-playlist__center__right  ".concat(burgerMenu ? 'active' : '', " "),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
          className: "cr-playlist__center__right_selected",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("p", {
            className: "cr-playlist_selected-text",
            children: ["Selected:", countNumberOfVideos()]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_6__["default"], {
            id: "cross",
            onClick: function onClick() {
              return setBurgerMenu(false);
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_ui_Forms_Input_Input__WEBPACK_IMPORTED_MODULE_10__["default"], {
          placeholder: "Search",
          value: searchInput,
          onChangeHandler: function onChangeHandler(e) {
            return setSearchInput(e.target.value);
          }
        }), filterVideosArrFunc()]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreatePlaylist);

/***/ })

}]);
//# sourceMappingURL=src_components_pages_Creator_CrPlaylist_CreatePlaylist_tsx.app.fca11d340e44a9399b9d.js.map