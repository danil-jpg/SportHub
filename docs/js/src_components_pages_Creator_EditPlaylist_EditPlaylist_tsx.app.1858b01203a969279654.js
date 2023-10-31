"use strict";
(self["webpackChunksporthub"] = self["webpackChunksporthub"] || []).push([["src_components_pages_Creator_EditPlaylist_EditPlaylist_tsx"],{

/***/ "./src/components/pages/Creator/EditPlaylist/EditPlaylist.tsx":
/*!********************************************************************!*\
  !*** ./src/components/pages/Creator/EditPlaylist/EditPlaylist.tsx ***!
  \********************************************************************/
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
/* harmony import */ var _EditPlaylist_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EditPlaylist.scss */ "./src/components/pages/Creator/EditPlaylist/EditPlaylist.scss");
/* harmony import */ var _ui_Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/Button/Button */ "./src/components/ui/Button/Button.tsx");
/* harmony import */ var _ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/IconRenderer/IconRenderer */ "./src/components/ui/IconRenderer/IconRenderer.tsx");
/* harmony import */ var _CrPlaylist_CreatePlaylist_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../CrPlaylist/CreatePlaylist.scss */ "./src/components/pages/Creator/CrPlaylist/CreatePlaylist.scss");
/* harmony import */ var _ui_Forms_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/Forms/InputContainer/InputContainer */ "./src/components/ui/Forms/InputContainer/InputContainer.tsx");
/* harmony import */ var _ui_Forms_SelectContainer_SelectContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/Forms/SelectContainer/SelectContainer */ "./src/components/ui/Forms/SelectContainer/SelectContainer.tsx");
/* harmony import */ var _ui_Forms_Input_Input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/Forms/Input/Input */ "./src/components/ui/Forms/Input/Input.tsx");
/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../hooks/redux */ "./src/components/hooks/redux.tsx");
/* harmony import */ var _Video_Video__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Video/Video */ "./src/components/pages/Creator/Video/Video.tsx");
/* harmony import */ var _utils_getDate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../utils/getDate */ "./src/components/utils/getDate.tsx");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony import */ var _ui_Forms_TextareaContainer_TextareaContainer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../ui/Forms/TextareaContainer/TextareaContainer */ "./src/components/ui/Forms/TextareaContainer/TextareaContainer.tsx");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/esm/index.esm.js");
/* harmony import */ var _config_firebase_config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../config/firebase-config */ "./src/config/firebase-config.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _common_Loading_Loading__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../common/Loading/Loading */ "./src/components/common/Loading/Loading.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }























var EditPlaylist = function EditPlaylist() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    burgerMenu = _useState2[0],
    setBurgerMenu = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
    searchInput = _useState4[0],
    setSearchInput = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
    isLoaded = _useState6[0],
    setIsLoaded = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(2),
    _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState7, 2),
    numOfVideos = _useState8[0],
    setNumOfVideos = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
    _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState9, 2),
    selectState = _useState10[0],
    setSelectState = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
    _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState11, 2),
    titleInput = _useState12[0],
    setTitleInput = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
    _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState13, 2),
    textAreaInput = _useState14[0],
    setTextAreaInput = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true),
    _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState15, 2),
    saveBtnState = _useState16[0],
    setSaveBtnState = _useState16[1];
  var selector = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_13__.useAppSelector)(function (state) {
    return state.regSlice.regData;
  });
  var videosIds = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_13__.useAppSelector)(function (state) {
    return state.regSlice.regData.videosIds;
  });
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
    _useState18 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState17, 2),
    playlistVideoObj = _useState18[0],
    setPlaylistVideoObj = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
    _useState20 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState19, 2),
    allVideos = _useState20[0],
    setAllVideos = _useState20[1];
  var filteredVideos = allVideos;
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([Array(filteredVideos === null || filteredVideos === void 0 ? void 0 : filteredVideos.length).fill(false), Array(filteredVideos === null || filteredVideos === void 0 ? void 0 : filteredVideos.length).fill({})]),
    _useState22 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState21, 2),
    selectedArrState = _useState22[0],
    setSelectedArrState = _useState22[1];
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useSearchParams)(),
    _useSearchParams2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useSearchParams, 2),
    searchParams = _useSearchParams2[0],
    setSearchParams = _useSearchParams2[1];
  var index = searchParams.get('playlist-index');
  var navigation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_23__.useNavigate)();

  // useEffect(() => {
  //     console.log(selectedArrState);
  // }, [selectedArrState]);

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (videosIds && (videosIds === null || videosIds === void 0 ? void 0 : videosIds.length) > 0) {
      videosIds.map( /*#__PURE__*/function () {
        var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(el) {
          var docRef, getVideo;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_18__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_19__.DB, 'videos', el);
              case 2:
                docRef = _context.sent;
                _context.next = 5;
                return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_18__.getDoc)(docRef);
              case 5:
                getVideo = _context.sent;
                if (getVideo.data()) {
                  setAllVideos(function (prev) {
                    return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), [getVideo.data()]);
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
  var getPlaylist = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3() {
      var _concretePlaylist, _concretePlaylist2, _concretePlaylist3, _concretePlaylist4, _data$data, _concretePlaylist5, documentRef, data, concretePlaylist, _data$data2;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_18__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_19__.DB, 'users', selector.email);
          case 3:
            documentRef = _context3.sent;
            _context3.next = 6;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_18__.getDoc)(documentRef);
          case 6:
            data = _context3.sent;
            _context3.next = 9;
            return data.data();
          case 9:
            concretePlaylist = _context3.sent;
            index ? concretePlaylist = (_concretePlaylist = concretePlaylist) === null || _concretePlaylist === void 0 ? void 0 : _concretePlaylist.playlists[index] : '';
            setTitleInput((_concretePlaylist2 = concretePlaylist) === null || _concretePlaylist2 === void 0 ? void 0 : _concretePlaylist2.title);
            setTextAreaInput((_concretePlaylist3 = concretePlaylist) === null || _concretePlaylist3 === void 0 ? void 0 : _concretePlaylist3.description);
            setSelectState((_concretePlaylist4 = concretePlaylist) === null || _concretePlaylist4 === void 0 ? void 0 : _concretePlaylist4.type);
            //

            if (index && (_data$data = data.data()) !== null && _data$data !== void 0 && _data$data.playlists[+index].videos) {
              (_data$data2 = data.data()) === null || _data$data2 === void 0 || _data$data2.playlists[+index].videos.map( /*#__PURE__*/function () {
                var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(innerEl) {
                  var docRef, getVideoItem;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_18__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_19__.DB, 'videos', innerEl);
                      case 2:
                        docRef = _context2.sent;
                        _context2.next = 5;
                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_18__.getDoc)(docRef);
                      case 5:
                        getVideoItem = _context2.sent.data();
                        setPlaylistVideoObj(function (prev) {
                          return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), [_objectSpread(_objectSpread({}, getVideoItem), {}, {
                            vidId: innerEl
                          })]);
                        });
                      case 7:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function (_x2) {
                  return _ref3.apply(this, arguments);
                };
              }());
            }
            setIsLoaded(true);
            setNumOfVideos((_concretePlaylist5 = concretePlaylist) === null || _concretePlaylist5 === void 0 ? void 0 : _concretePlaylist5.videos.length);
            _context3.next = 23;
            break;
          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](0);
            setIsLoaded(true);
            console.error(_context3.t0);
          case 23:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 19]]);
    }));
    return function getPlaylist() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    setSelectedArrState(function (prev) {
      return [prev[0].map(function (el) {
        playlistVideoObj.map(function (innerEl) {
          videosIds ? prev[0][videosIds.indexOf(innerEl.vidId)] = true : '';
          return true;
        });
        if (el === true) {
          return true;
        } else {
          return false;
        }
      }), prev[1].map(function (el, index) {
        var _el$index;
        playlistVideoObj.map(function (innerEl) {
          videosIds ? prev[0][videosIds.indexOf(innerEl.vidId)] = true : '';
          if (videosIds && videosIds.indexOf(innerEl.vidId) === index) {
            el[index] = innerEl;
            return el[index];
          }
          return '';
        });
        if ((_el$index = el[index]) !== null && _el$index !== void 0 && _el$index.title) {
          return el[index];
        } else {
          return {};
        }
      })];
    });
  }, [playlistVideoObj]);
  var countNumberOfVideos = function countNumberOfVideos() {
    var num = 0;
    for (var i = 0; i < selectedArrState[0].length; i++) {
      if (selectedArrState[0][i]) {
        num++;
      }
    }
    return num;
  };
  var filterVideosArrFunc = function filterVideosArrFunc() {
    var res = filteredVideos === null || filteredVideos === void 0 ? void 0 : filteredVideos.filter(function (el) {
      return el.title.toUpperCase().includes(searchInput.toUpperCase());
    }).map(function (el, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        onClick: function onClick(e) {
          setSelectedArrState(function (prev) {
            var res = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev[0]);
            res[index] = !res[index];
            //
            var vidoesArr = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev[1]);
            if (res[index]) {
              vidoesArr[index] = el;
            } else {
              vidoesArr[index] = {};
            }
            return [res, vidoesArr];
          });
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Video_Video__WEBPACK_IMPORTED_MODULE_14__["default"], {
          className: "".concat(selectedArrState[0][index] ? 'video-active' : '', " video-cr-playlist"),
          previewUrl: el.previewUrl,
          title: el.title,
          date: (0,_utils_getDate__WEBPACK_IMPORTED_MODULE_15__["default"])(el.date),
          isClickAble: false
        })
      }, (0,uuid__WEBPACK_IMPORTED_MODULE_24__["default"])());
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
    return status ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
        className: "cr-playlist__selected",
        children: "Selected"
      }), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("ul", {
        className: "cr-playlist__chosen-ul",
        children: selectedArrState[1].map(function (el, index) {
          return el.title ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("li", {
            className: "cr-playlist__chosen-li",
            children: [el.title, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_8__["default"], {
              id: "small-cross",
              onClick: function onClick() {
                return setSelectedArrState(function (prev) {
                  var res = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev[0]);
                  res[index] = !res[index];
                  //
                  var vidoesArr = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev[1]);
                  if (res[index]) {
                    vidoesArr[index] = el;
                  } else {
                    vidoesArr[index] = [];
                  }
                  return [res, vidoesArr];
                });
              }
            })]
          }, (0,uuid__WEBPACK_IMPORTED_MODULE_24__["default"])()) : '';
        })
      })]
    }) : '';
  };
  var onSaveClick = /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee4() {
      var oldData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!(selectState && selectState !== 'Select category' && titleInput && textAreaInput && countNumberOfVideos() > 1)) {
              _context4.next = 10;
              break;
            }
            _context4.next = 3;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_18__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_18__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_19__.DB, 'users', selector.email)).then(function (res) {
              var _res$data;
              return (_res$data = res.data()) === null || _res$data === void 0 ? void 0 : _res$data.playlists;
            });
          case 3:
            oldData = _context4.sent;
            oldData.splice(index, 1, {
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
            });
            if (!oldData) {
              _context4.next = 8;
              break;
            }
            _context4.next = 8;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_18__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_18__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_19__.DB, 'users', selector.email), {
              playlists: (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(oldData)
            }).then(function () {
              return sweetalert__WEBPACK_IMPORTED_MODULE_17___default()('Successfully changed');
            }).then(function () {
              return navigation('../home-cr-playlist');
            });
          case 8:
            _context4.next = 11;
            break;
          case 10:
            sweetalert__WEBPACK_IMPORTED_MODULE_17___default()('Fill out all fields and select at least two video');
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function onSaveClick() {
      return _ref4.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    getPlaylist();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    setSelectedArrState([Array(filteredVideos === null || filteredVideos === void 0 ? void 0 : filteredVideos.length).fill(false), Array(filteredVideos === null || filteredVideos === void 0 ? void 0 : filteredVideos.length).fill({})]);
  }, [filteredVideos]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (selectState && selectState !== 'Select category' && titleInput && textAreaInput && countNumberOfVideos() > 1) {
      setSaveBtnState(true);
    } else {
      setSaveBtnState(false);
    }
  }, [selectState, titleInput, textAreaInput, numOfVideos, selectedArrState]);
  if (!isLoaded) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_common_Loading_Loading__WEBPACK_IMPORTED_MODULE_20__["default"], {});
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
    className: "cr-playlist",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
      className: "cr-playlist__top",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
        className: "cr-playlist__title",
        children: "Edit playlist"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: "cr-playlist__top-right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ui_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: "".concat(saveBtnState ? 'active' : '', " cr-playlist__top_btn"),
          onClickHandler: function onClickHandler() {
            return onSaveClick();
          },
          children: "Save"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
      className: "cr-playlist__center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ui_Forms_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
          text: "Playlist name",
          placeholder: "Enter playlist name",
          value: titleInput,
          onChangeHandler: function onChangeHandler(e) {
            return setTitleInput(e.target.value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ui_Forms_TextareaContainer_TextareaContainer__WEBPACK_IMPORTED_MODULE_16__["default"], {
          value: textAreaInput,
          onChangeHandler: function onChangeHandler(e) {
            return setTextAreaInput(e.target.value);
          },
          text: "Description",
          placeholder: "Description"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ui_Forms_SelectContainer_SelectContainer__WEBPACK_IMPORTED_MODULE_11__["default"], {
          setValue: setSelectState,
          value: selectState,
          title: "Category",
          placeholder: "Select category",
          arr: ['Mind', 'Body', 'Soul']
        }), checkIfVideoHadChoosen(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ui_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: "cr-playlist__center_select-videos",
          onClickHandler: function onClickHandler() {
            return setBurgerMenu(true);
          },
          children: "Select video"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
        className: "cr-playlist__center__right  ".concat(burgerMenu ? 'active' : '', " "),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
          className: "cr-playlist__center__right_selected",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("p", {
            className: "cr-playlist_selected-text",
            children: ["Selected:", countNumberOfVideos()]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ui_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_8__["default"], {
            id: "cross",
            onClick: function onClick() {
              return setBurgerMenu(false);
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ui_Forms_Input_Input__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditPlaylist);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Creator/EditPlaylist/EditPlaylist.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Creator/EditPlaylist/EditPlaylist.scss ***!
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/pages/Creator/EditPlaylist/EditPlaylist.scss":
/*!*********************************************************************!*\
  !*** ./src/components/pages/Creator/EditPlaylist/EditPlaylist.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_EditPlaylist_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./EditPlaylist.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Creator/EditPlaylist/EditPlaylist.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_EditPlaylist_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_EditPlaylist_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_EditPlaylist_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_EditPlaylist_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_components_pages_Creator_EditPlaylist_EditPlaylist_tsx.app.1858b01203a969279654.js.map