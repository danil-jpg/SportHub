"use strict";
(self["webpackChunksporthub"] = self["webpackChunksporthub"] || []).push([["src_components_pages_Creator_AddVideo1_AddVideo1_tsx"],{

/***/ "./src/components/pages/Creator/AddVideo1/AddVideo1.tsx":
/*!**************************************************************!*\
  !*** ./src/components/pages/Creator/AddVideo1/AddVideo1.tsx ***!
  \**************************************************************/
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
/* harmony import */ var _AddVideo_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddVideo.scss */ "./src/components/pages/Creator/AddVideo1/AddVideo.scss");
/* harmony import */ var _ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/Button/Button */ "./src/components/ui/Button/Button.tsx");
/* harmony import */ var _assets_img_addvideo_addvideo_png_as_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/img/addvideo/addvideo.png?as=webp */ "./src/assets/img/addvideo/addvideo.png?as=webp");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/esm/index.esm.js");
/* harmony import */ var _config_firebase_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../config/firebase-config */ "./src/config/firebase-config.js");
/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/redux */ "./src/components/hooks/redux.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/esm/index.esm.js");
/* harmony import */ var _ui_Forms_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/Forms/InputContainer/InputContainer */ "./src/components/ui/Forms/InputContainer/InputContainer.tsx");
/* harmony import */ var _ui_Forms_SelectContainer_SelectContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ui/Forms/SelectContainer/SelectContainer */ "./src/components/ui/Forms/SelectContainer/SelectContainer.tsx");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony import */ var _ui_Forms_TextareaContainer_TextareaContainer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../ui/Forms/TextareaContainer/TextareaContainer */ "./src/components/ui/Forms/TextareaContainer/TextareaContainer.tsx");
/* harmony import */ var _store_slices_users__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../store/slices/users */ "./src/components/store/slices/users.tsx");
/* harmony import */ var _store_slices_registration__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../store/slices/registration */ "./src/components/store/slices/registration.tsx");
/* harmony import */ var _common_Loading_Loading__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../common/Loading/Loading */ "./src/components/common/Loading/Loading.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

























var AddVideo1 = function AddVideo1() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    video = _useState2[0],
    setVideo = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
    videoTitle = _useState4[0],
    setVideoTitle = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
    videoDescr = _useState6[0],
    setVideoDescr = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
    _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
    videoType = _useState8[0],
    setVideoType = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
    _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
    shopify = _useState10[0],
    setShopify = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
    _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState11, 2),
    preview = _useState12[0],
    setPreview = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
    _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState13, 2),
    publishButtonState = _useState14[0],
    setPublishButtonState = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
    _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState15, 2),
    spinner = _useState16[0],
    setSpinner = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
    _useState18 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState17, 2),
    dragActive = _useState18[0],
    setDragActive = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
    _useState20 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState19, 2),
    dragPreviewActive = _useState20[0],
    setDragPreviewActive = _useState20[1];
  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  var uniqueId = (0,uuid__WEBPACK_IMPORTED_MODULE_20__["default"])();
  var allowedTypesImg = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  var allowedTypesVideo = ['video/mp4', 'video/*', 'video/x-m4v'];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_21__.useNavigate)();
  var selectorUsers = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_10__.useAppSelector)(function (state) {
    return state.usersSlice.data;
  });
  var dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_10__.useAppDispatch)();
  var handleDragEvent = function handleDragEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  var handlePrevewDragEvent = function handlePrevewDragEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragPreviewActive(true);
    } else if (e.type === 'dragleave') {
      setDragPreviewActive(false);
    }
  };
  var handlePrevewDropEvent = function handlePrevewDropEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragPreviewActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      var _e$dataTransfer$files;
      if (e.dataTransfer.files[0].size > 52097152) {
        sweetalert__WEBPACK_IMPORTED_MODULE_14___default()('File is too big! Max size is 52 mb');
      } else if (!allowedTypesImg.includes((_e$dataTransfer$files = e.dataTransfer.files[0]) === null || _e$dataTransfer$files === void 0 ? void 0 : _e$dataTransfer$files.type)) {
        sweetalert__WEBPACK_IMPORTED_MODULE_14___default()('File must be jpeg,png,gif or webp format');
      } else {
        setPreview(e.dataTransfer.files[0]);
      }
    }
  };
  var handleDropEvent = function handleDropEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      var _e$dataTransfer$files2;
      if (e.dataTransfer.files[0].size > 52097152) {
        sweetalert__WEBPACK_IMPORTED_MODULE_14___default()('File is too big! Max size is 52 mb');
      } else if (!allowedTypesVideo.includes((_e$dataTransfer$files2 = e.dataTransfer.files[0]) === null || _e$dataTransfer$files2 === void 0 ? void 0 : _e$dataTransfer$files2.type)) {
        sweetalert__WEBPACK_IMPORTED_MODULE_14___default()('File must have video format');
      } else {
        setVideo(e.dataTransfer.files[0]);
      }
    }
  };
  var videoHandler = function videoHandler(e) {
    if (!e.target.files || e.target.files[0].size > 52097152) {
      sweetalert__WEBPACK_IMPORTED_MODULE_14___default()('File is too big! Max size is 52 mb');
      e.target.value = '';
    } else {
      setVideo(e.target.files[0]);
    }
  };
  var imageHandler = function imageHandler(e) {
    var _e$target$files$;
    if (!e.target.files || e.target.files[0].size > 52097152) {
      sweetalert__WEBPACK_IMPORTED_MODULE_14___default()('File is too big! Max size is 52 mb');
      e.target.value = '';
    } else if (!allowedTypesImg.includes((_e$target$files$ = e.target.files[0]) === null || _e$target$files$ === void 0 ? void 0 : _e$target$files$.type)) {
      sweetalert__WEBPACK_IMPORTED_MODULE_14___default()('File must be jpeg,png,gif or webp format');
    } else {
      setPreview(e.target.files[0]);
    }
  };
  var selector = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_10__.useAppSelector)(function (state) {
    return state.regSlice;
  });
  var uploadVideo = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
      var filesFolderRef, previewsFolderRef, message;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(!video || !preview)) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            filesFolderRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_11__.ref)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_9__.storage, "videos/".concat(selector.regData.email, "/").concat(videoTitle).concat(uniqueId));
            previewsFolderRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_11__.ref)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_9__.storage, "previews/".concat(selector.regData.email, "/").concat(videoTitle).concat(uniqueId));
            _context.prev = 4;
            _context.next = 7;
            return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_11__.uploadBytes)(filesFolderRef, video);
          case 7:
            _context.next = 9;
            return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_11__.uploadBytes)(previewsFolderRef, preview);
          case 9:
            _context.next = 17;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            message = 'Unknown Error';
            if (_context.t0 instanceof Error) message = _context.t0.message;
            console.error(message);
            sweetalert__WEBPACK_IMPORTED_MODULE_14___default()('Something went wrong');
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 11]]);
    }));
    return function uploadVideo() {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (preview && video && videoTitle && videoType && videoType !== 'Select category' && videoDescr) {
      setPublishButtonState(true);
    }
  }, [preview, videoTitle, videoType, videoDescr, video]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    dispatch((0,_store_slices_users__WEBPACK_IMPORTED_MODULE_16__.getUsers)());
  }, []);
  if (spinner) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_common_Loading_Loading__WEBPACK_IMPORTED_MODULE_18__["default"], {});
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
    className: "addvideo",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
      className: "addvideo__top",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("p", {
        className: "addvideo__text",
        children: "Adding a new video"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "".concat(publishButtonState ? '' : 'btn-innactive', "  addvideo__btn "),
        onClickHandler: /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
          var videoUrl, previewUrl, currentUser;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!(preview && video && videoTitle && videoType && videoType !== 'Select category' && videoDescr)) {
                  _context2.next = 25;
                  break;
                }
                setSpinner(true);
                _context2.prev = 2;
                _context2.next = 5;
                return uploadVideo();
              case 5:
                _context2.next = 7;
                return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_11__.getDownloadURL)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_11__.ref)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_9__.storage, "videos/".concat(selector.regData.email, "/").concat(videoTitle).concat(uniqueId)));
              case 7:
                videoUrl = _context2.sent;
                _context2.next = 10;
                return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_11__.getDownloadURL)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_11__.ref)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_9__.storage, "previews/".concat(selector.regData.email, "/").concat(videoTitle).concat(uniqueId)));
              case 10:
                previewUrl = _context2.sent;
                currentUser = selectorUsers.filter(function (el) {
                  return el.email === selector.regData.email;
                });
                _context2.next = 14;
                return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_9__.DB, 'videos'), {
                  title: videoTitle,
                  descr: videoDescr,
                  category: videoType,
                  shopify: shopify,
                  videoUrl: videoUrl,
                  previewUrl: previewUrl,
                  date: new Date().toString(),
                  email: selector.regData.email,
                  likes: [],
                  dislikes: []
                }).then(function (res) {
                  var _currentUser$0$videos;
                  if (currentUser[0].videosIds && ((_currentUser$0$videos = currentUser[0].videosIds) === null || _currentUser$0$videos === void 0 ? void 0 : _currentUser$0$videos.length) > 0) {
                    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_9__.DB, 'users', selector.regData.email), {
                      videosIds: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(currentUser[0].videosIds), [res.id])
                    });
                    dispatch((0,_store_slices_registration__WEBPACK_IMPORTED_MODULE_17__.setRegData)({
                      videosIds: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(currentUser[0].videosIds), [res.id])
                    }));
                  } else {
                    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_9__.DB, 'users', selector.regData.email), {
                      videosIds: [res.id]
                    });
                  }
                });
              case 14:
                setSpinner(false);
                sweetalert__WEBPACK_IMPORTED_MODULE_14___default()('Your video is successfully published').then(function () {
                  navigate('../home');
                });
                _context2.next = 23;
                break;
              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](2);
                console.error(_context2.t0);
                setSpinner(false);
                sweetalert__WEBPACK_IMPORTED_MODULE_14___default()('Something went wrong');
              case 23:
                _context2.next = 26;
                break;
              case 25:
                if (videoType === 'Select category') {
                  sweetalert__WEBPACK_IMPORTED_MODULE_14___default()('Please,choose video type');
                } else {
                  sweetalert__WEBPACK_IMPORTED_MODULE_14___default()('Please,write in all the fields , put video and its preview in the corresponding items');
                }
              case 26:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[2, 18]]);
        })),
        children: "Publish"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("form", {
      className: "addvideo__dragAndDrop-section",
      onDragEnter: handleDragEvent,
      onSubmit: function onSubmit(e) {
        return e.preventDefault();
      },
      children: video ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("video", {
        controls: true,
        className: "addvideo__video",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("source", {
          src: URL.createObjectURL(video)
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("input", {
          ref: inputRef,
          id: "input__addvideo",
          type: "file",
          onChange: videoHandler,
          className: "addvideo__input",
          accept: "video/mp4,video/x-m4v,video/*"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("label", {
          htmlFor: "input__addvideo",
          className: dragActive ? 'active addvideo__drag-text' : 'addvideo__drag-text',
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("img", {
            src: _assets_img_addvideo_addvideo_png_as_webp__WEBPACK_IMPORTED_MODULE_7__,
            className: "addvideo__img"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("p", {
            children: "Drag and drop videos to upload"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: "addvideo__btn-addvideo",
            onClickHandler: function onClickHandler(e) {
              var _inputRef$current;
              e.preventDefault();
              (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.click();
            },
            children: "Or choose files"
          })]
        }), dragActive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
          className: "addvideo__drag-file-element",
          onDragEnter: handleDragEvent,
          onDragLeave: handleDragEvent,
          onDragOver: handleDragEvent,
          onDrop: handleDropEvent
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
      className: "addvideo__bottom",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
        className: "addvideo__bottom__left",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ui_Forms_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: "addvideo__bottom__input",
          text: "Title",
          placeholder: "Video Name",
          value: videoTitle,
          onChangeHandler: function onChangeHandler(e) {
            return setVideoTitle(e.target.value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ui_Forms_SelectContainer_SelectContainer__WEBPACK_IMPORTED_MODULE_13__["default"], {
          value: videoType,
          setValue: setVideoType,
          containerClassName: "addvideo__bottom__input",
          arr: ['Soul', 'Mind', 'Body'],
          placeholder: "Select category",
          title: "Category"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ui_Forms_TextareaContainer_TextareaContainer__WEBPACK_IMPORTED_MODULE_15__["default"], {
          className: "addvideo__bottom__input",
          text: "Description",
          placeholder: "Description",
          value: videoDescr,
          onChangeHandler: function onChangeHandler(e) {
            return setVideoDescr(e.target.value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ui_Forms_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: "addvideo__bottom__input",
          text: "Add Shopify link",
          placeholder: "Add link on product",
          onChangeHandler: function onChangeHandler(e) {
            return setShopify(e.target.value);
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("form", {
        id: "preview-form",
        onDragEnter: function onDragEnter() {
          setDragPreviewActive(true);
        },
        onSubmit: function onSubmit(e) {
          return e.preventDefault();
        },
        className: "".concat(dragPreviewActive ? 'active' : '', " addvideo__bottom__right"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("input", {
          accept: "image/*",
          onDragEnter: handlePrevewDragEvent,
          onDragLeave: handlePrevewDragEvent,
          onDragOver: handlePrevewDragEvent,
          onDrop: handlePrevewDropEvent,
          multiple: false,
          type: "file",
          id: "preview-form",
          onChange: function onChange(e) {
            imageHandler(e);
          },
          className: "addvideo__input-preview"
        }), preview ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("img", {
          src: URL.createObjectURL(preview),
          className: "addvideo__preview"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("img", {
            src: _assets_img_addvideo_addvideo_png_as_webp__WEBPACK_IMPORTED_MODULE_7__,
            className: "addvideo__right_img"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("p", {
            className: "addvideo__right_text",
            children: "Drag and drop photo to upload"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("p", {
            className: "addvideo__right_descr",
            children: "Information about adding photo. Amet minim mollit non deserunt ullamco est sit "
          })]
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddVideo1);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Creator/AddVideo1/AddVideo.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Creator/AddVideo1/AddVideo.scss ***!
  \*************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.addvideo {
  max-width: 920px;
  margin: 0 auto;
  margin-top: 33px;
}
.addvideo__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.addvideo__text {
  color: #fff;
  font-size: 24px;
  font-weight: 500;
}
.addvideo__dragAndDrop-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: 23px;
  position: relative;
  transition: 0.3s;
}
.addvideo__drag-file-element {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.addvideo__img {
  width: 51px;
  height: 51px;
  margin-bottom: 51px;
}
.addvideo__drag-text {
  color: #fff;
  font-size: 36px;
  font-weight: 500;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  text-align: center;
  line-height: 114%;
  border-radius: 16px;
  background: #222;
  padding: 127px 0 120px 0px;
  width: 100%;
}
.addvideo__drag-text p {
  width: 41%;
}
.addvideo__drag-text.active {
  opacity: 0.5;
}
.addvideo__drag-text .addvideo__btn-addvideo {
  margin-top: 45px;
}
.addvideo__input {
  display: none;
}
.addvideo__input-preview {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
  position: absolute;
}
.addvideo__input-preview.active {
  opacity: 0.5;
}
.addvideo__bottom {
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}
.addvideo__bottom__right {
  border-radius: 8px;
  background: #653012;
  width: 100%;
  height: 250px;
  padding: 68px 97px 0;
  position: relative;
  transition: 0.3s;
}
.addvideo__bottom__right.active {
  background: #361502;
}
.addvideo__bottom__input {
  margin-bottom: 32px;
}
.addvideo__right {
  position: relative;
}
.addvideo__right_text {
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  width: 71%;
  margin: 0 auto;
}
.addvideo__right_descr {
  color: #eee;
  font-size: 12px;
  font-weight: 400;
  margin-top: 16px;
  text-align: center;
}
.addvideo__right_img {
  width: 38.308px;
  height: 38.301px;
  margin: 0 auto;
  margin-bottom: 25px;
}
.addvideo__preview {
  width: 100%;
  height: 100%;
  object-fit: contain;
  top: 0;
  left: 0;
  position: absolute;
}
.addvideo__video {
  height: 520px;
  width: 100%;
}

.btn-innactive {
  background: #777;
  color: #bbb;
}

@media screen and (max-width: 996px) {
  .addvideo__text {
    font-size: 20px;
  }
  .addvideo {
    padding: 0 15px;
  }
  .addvideo__dragAndDrop-section {
    background: none;
  }
  .addvideo__drag-text {
    width: 95%;
  }
  .addvideo__bottom {
    grid-template-columns: 1fr;
  }
  .addvideo__bottom__right {
    margin-bottom: 50px;
    padding: 50px 50px 0;
  }
  .addvideo__right_text {
    width: 95%;
  }
  .addvideo__right_descr {
    width: 95%;
  }
  .addvideo__drag-text {
    background: none;
  }
  .addvideo__drag-text p {
    width: 95%;
  }
  .addvideo__drag-text .addvideo__btn-addvideo {
    display: none;
  }
  .addideo__video {
    height: 200px;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Creator/AddVideo1/AddVideo.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,cAAA;EACA,gBAAA;AACJ;AACI;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;AACR;AAEI;EACI,WAAA;EACA,eAAA;EACA,gBAAA;AAAR;AAMI;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,WAAA;EAEA,sBAAA;EACA,gBAAA;EAEA,kBAAA;EACA,gBAAA;AAPR;AAUI;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,SAAA;AARR;AAWI;EACI,WAAA;EACA,YAAA;EACA,mBAAA;AATR;AAYI;EACI,WAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;EAEA,0BAAA;EACA,WAAA;AAXR;AAYQ;EACI,UAAA;AAVZ;AAYQ;EACI,YAAA;AAVZ;AAYQ;EACI,gBAAA;AAVZ;AAaI;EACI,aAAA;AAXR;AAaI;EAEI,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,eAAA;EACA,UAAA;EACA,kBAAA;AAZR;AAaQ;EACI,YAAA;AAXZ;AAeI;EACI,gBAAA;EACA,aAAA;EACA,8BAAA;EACA,SAAA;AAbR;AAcQ;EACI,kBAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,oBAAA;EACA,kBAAA;EACA,gBAAA;AAZZ;AAaY;EACI,mBAAA;AAXhB;AAcQ;EACI,mBAAA;AAZZ;AAgBI;EACI,kBAAA;AAdR;AAeQ;EACI,WAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,cAAA;AAbZ;AAeQ;EACI,WAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;AAbZ;AAeQ;EACI,eAAA;EACA,gBAAA;EACA,cAAA;EACA,mBAAA;AAbZ;AAgBI;EACI,WAAA;EACA,YAAA;EACA,mBAAA;EACA,MAAA;EACA,OAAA;EACA,kBAAA;AAdR;AAiBI;EACI,aAAA;EACA,WAAA;AAfR;;AAmBA;EACI,gBAAA;EACA,WAAA;AAhBJ;;AAmBA;EACI;IACI,eAAA;EAhBN;EAkBE;IACI,eAAA;EAhBN;EAqBE;IACI,gBAAA;EAnBN;EAsBE;IACI,UAAA;EApBN;EAsBE;IACI,0BAAA;EApBN;EAsBE;IACI,mBAAA;IACA,oBAAA;EApBN;EAsBE;IACI,UAAA;EApBN;EAsBE;IACI,UAAA;EApBN;EAsBE;IACI,gBAAA;EApBN;EAqBM;IACI,UAAA;EAnBV;EAsBM;IACI,aAAA;EApBV;EAuBE;IACI,aAAA;EArBN;AACF","sourcesContent":[".addvideo {\r\n    max-width: 920px;\r\n    margin: 0 auto;\r\n    margin-top: 33px;\r\n\r\n    &__top {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n    }\r\n\r\n    &__text {\r\n        color: #fff;\r\n        font-size: 24px;\r\n        font-weight: 500;\r\n    }\r\n\r\n    &__btn {\r\n    }\r\n\r\n    &__dragAndDrop-section {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n\r\n        width: 100%;\r\n\r\n        flex-direction: column;\r\n        margin-top: 23px;\r\n        // padding: 127px 0;\r\n        position: relative;\r\n        transition: 0.3s;\r\n    }\r\n\r\n    &__drag-file-element {\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 100%;\r\n        border-radius: 1rem;\r\n        top: 0px;\r\n        right: 0px;\r\n        bottom: 0px;\r\n        left: 0px;\r\n    }\r\n\r\n    &__img {\r\n        width: 51px;\r\n        height: 51px;\r\n        margin-bottom: 51px;\r\n    }\r\n\r\n    &__drag-text {\r\n        color: #fff;\r\n        font-size: 36px;\r\n        font-weight: 500;\r\n        height: 100%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        flex-direction: column;\r\n        cursor: pointer;\r\n        text-align: center;\r\n        line-height: 114%;\r\n        border-radius: 16px;\r\n        background: #222;\r\n\r\n        padding: 127px 0 120px 0px;\r\n        width: 100%;\r\n        p {\r\n            width: 41%;\r\n        }\r\n        &.active {\r\n            opacity: 0.5;\r\n        }\r\n        .addvideo__btn-addvideo {\r\n            margin-top: 45px;\r\n        }\r\n    }\r\n    &__input {\r\n        display: none;\r\n    }\r\n    &__input-preview {\r\n        // display: none;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        opacity: 0;\r\n        cursor: pointer;\r\n        z-index: 1;\r\n        position: absolute;\r\n        &.active {\r\n            opacity: 0.5;\r\n        }\r\n    }\r\n\r\n    &__bottom {\r\n        margin-top: 32px;\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        gap: 48px;\r\n        &__right {\r\n            border-radius: 8px;\r\n            background: #653012;\r\n            width: 100%;\r\n            height: 250px;\r\n            padding: 68px 97px 0;\r\n            position: relative;\r\n            transition: 0.3s;\r\n            &.active {\r\n                background: #361502;\r\n            }\r\n        }\r\n        &__input {\r\n            margin-bottom: 32px;\r\n        }\r\n    }\r\n\r\n    &__right {\r\n        position: relative;\r\n        &_text {\r\n            color: #fff;\r\n            font-size: 16px;\r\n            font-weight: 400;\r\n            text-align: center;\r\n            width: 71%;\r\n            margin: 0 auto;\r\n        }\r\n        &_descr {\r\n            color: #eee;\r\n            font-size: 12px;\r\n            font-weight: 400;\r\n            margin-top: 16px;\r\n            text-align: center;\r\n        }\r\n        &_img {\r\n            width: 38.308px;\r\n            height: 38.301px;\r\n            margin: 0 auto;\r\n            margin-bottom: 25px;\r\n        }\r\n    }\r\n    &__preview {\r\n        width: 100%;\r\n        height: 100%;\r\n        object-fit: contain;\r\n        top: 0;\r\n        left: 0;\r\n        position: absolute;\r\n    }\r\n\r\n    &__video {\r\n        height: 520px;\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n.btn-innactive {\r\n    background: #777;\r\n    color: #bbb;\r\n}\r\n\r\n@media screen and (max-width: 996px) {\r\n    .addvideo__text {\r\n        font-size: 20px;\r\n    }\r\n    .addvideo {\r\n        padding: 0 15px;\r\n    }\r\n    .addvideo__top {\r\n        // display: none;\r\n    }\r\n    .addvideo__dragAndDrop-section {\r\n        background: none;\r\n    }\r\n\r\n    .addvideo__drag-text {\r\n        width: 95%;\r\n    }\r\n    .addvideo__bottom {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    .addvideo__bottom__right {\r\n        margin-bottom: 50px;\r\n        padding: 50px 50px 0;\r\n    }\r\n    .addvideo__right_text {\r\n        width: 95%;\r\n    }\r\n    .addvideo__right_descr {\r\n        width: 95%;\r\n    }\r\n    .addvideo__drag-text {\r\n        background: none;\r\n        p {\r\n            width: 95%;\r\n        }\r\n\r\n        .addvideo__btn-addvideo {\r\n            display: none;\r\n        }\r\n    }\r\n    .addideo__video {\r\n        height: 200px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/pages/Creator/AddVideo1/AddVideo.scss":
/*!**************************************************************!*\
  !*** ./src/components/pages/Creator/AddVideo1/AddVideo.scss ***!
  \**************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AddVideo_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./AddVideo.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Creator/AddVideo1/AddVideo.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AddVideo_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AddVideo_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AddVideo_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AddVideo_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/img/addvideo/addvideo.png?as=webp":
/*!******************************************************!*\
  !*** ./src/assets/img/addvideo/addvideo.png?as=webp ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/addvideof44a68632de2383c60fe.webp";

/***/ })

}]);
//# sourceMappingURL=src_components_pages_Creator_AddVideo1_AddVideo1_tsx.app.fca11d340e44a9399b9d.js.map