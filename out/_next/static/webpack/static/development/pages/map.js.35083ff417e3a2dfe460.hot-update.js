webpackHotUpdate("static\\development\\pages\\map.js",{

/***/ "./components/map/Mapview.js":
/*!***********************************!*\
  !*** ./components/map/Mapview.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Mapview.module.css */ "./components/map/Mapview.module.css");
/* harmony import */ var _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Mapview_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styled_icons_boxicons_solid_Map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @styled-icons/boxicons-solid/Map */ "./node_modules/@styled-icons/boxicons-solid/Map/Map.esm.js");
/* harmony import */ var _styled_icons_boxicons_regular_Slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @styled-icons/boxicons-regular/Slider */ "./node_modules/@styled-icons/boxicons-regular/Slider/Slider.esm.js");
/* harmony import */ var _map2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./map2 */ "./components/map/map2.js");
/* harmony import */ var _shared_DayFilters__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/DayFilters */ "./components/shared/DayFilters.js");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../modal/modal */ "./components/modal/modal.js");
/* harmony import */ var react_activity__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-activity */ "./node_modules/react-activity/dist/react-activity.js");
/* harmony import */ var react_activity__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_activity__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _styled_icons_heroicons_solid_ArrowLeft__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @styled-icons/heroicons-solid/ArrowLeft */ "./node_modules/@styled-icons/heroicons-solid/ArrowLeft/ArrowLeft.esm.js");
/* harmony import */ var _location_location__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../location/location */ "./components/location/location.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-no-ssr */ "./node_modules/react-no-ssr/index.js");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_tiny_fab__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-tiny-fab */ "./node_modules/react-tiny-fab/dist/fab.esm.js");









var _jsxFileName = "D:\\REACT_NEXT\\TheSauce\\components\\map\\Mapview.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
















var UserIcon = __webpack_require__(/*! ../../public/images/add.png */ "./public/images/add.png");

var Services = __webpack_require__(/*! ../../services/services */ "./services/services.js");

var MapView = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MapView, _Component);

  var _super = _createSuper(MapView);

  function MapView(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MapView);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setCurrentLoc", function _callee() {
      var latitude, longitude;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              latitude = localStorage.getItem('latitude');
              latitude = JSON.parse(latitude);
              longitude = localStorage.getItem('longitude');
              longitude = JSON.parse(longitude);

              _this.setState({
                currentlat: latitude,
                currentlong: longitude
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "updateState", function _callee2() {
      var List;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.showLoader();

              _context2.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Services.GetEstablishmentMap(_this.state.currentlat, _this.state.currentlong));

            case 3:
              List = _context2.sent;

              if (List != undefined) {
                _this.setState({
                  markers: List
                });

                _this.setState({
                  resultCount: _this.state.markers.length
                });
              }

              _this.showLoader();

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onMapDrag", function _callee3(ref) {
      var List;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this.setState({
                currentlat: ref.getCenter().lat(),
                currentlong: ref.getCenter().lng()
              });

              _context3.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Services.GetEstablishmentMap(ref.getCenter().lat(), ref.getCenter().lng()));

            case 3:
              List = _context3.sent;

              if (List != undefined) {
                _this.setState({
                  markers: List
                });

                _this.setState({
                  resultCount: _this.state.markers.length
                });
              }

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showList", function () {
      next_router__WEBPACK_IMPORTED_MODULE_20___default.a.push('/home');
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "updateFilter", function _callee4() {
      var List;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _this.setState({
                isVisible: false
              });

              _this.showLoader();

              _context4.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Services.GetEstablishmentMap(_this.state.currentlat, _this.state.currentlong));

            case 4:
              List = _context4.sent;

              if (List != undefined) {
                _this.setState({
                  markers: List
                });

                _this.setState({
                  resultCount: _this.state.markers.length
                });
              }

              _this.showLoader();

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChangeLocation", function _callee5() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this.setState({
                isLocation: false
              });

              window.location.reload(false);

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "closeModal", function () {
      _this.setState({
        isVisible: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showLoader", function () {
      _this.setState({
        isLoader: !_this.state.isLoader
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "closeLocation", function () {
      _this.setState({
        isLocation: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "useMyLocation", function () {
      window.location.reload(false);
    });

    _this.state = {
      markers: [],
      isVisible: false,
      isLoader: false,
      resultCount: 0,
      currentlat: 0,
      currentlong: 0,
      isLocation: false,
      locationName: 'Current location'
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MapView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var List, current_location, location_name;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function componentDidMount$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              this.showLoader();
              _context6.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(this.setCurrentLoc());

            case 3:
              _context6.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Services.GetEstablishmentMap(this.state.currentlat, this.state.currentlong));

            case 5:
              List = _context6.sent;

              if (List != undefined) {
                this.setState({
                  markers: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.state.markers), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(List))
                });
                this.setState({
                  resultCount: this.state.markers.length
                });
              }

              current_location = localStorage.getItem('mylocation');

              if (current_location !== null) {
                current_location = JSON.parse(current_location);
                location_name = current_location.split(',');
                this.setState({
                  locationName: location_name[0]
                });
              }

              this.showLoader();

            case 10:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          markers = _this$state.markers,
          currentlat = _this$state.currentlat,
          currentlong = _this$state.currentlong,
          resultCount = _this$state.resultCount;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 17
        }
      }, "The sauce - Map View"), __jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.page_container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.header,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.header_container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }
      }, __jsx(_styled_icons_heroicons_solid_ArrowLeft__WEBPACK_IMPORTED_MODULE_18__["ArrowLeft"], {
        size: 25,
        style: {
          marginLeft: 5,
          cursor: 'pointer'
        },
        onClick: function onClick() {
          _this2.showList();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 25
        }
      }), __jsx(_styled_icons_boxicons_solid_Map__WEBPACK_IMPORTED_MODULE_12__["Map"], {
        size: 20,
        style: {
          marginLeft: 5,
          color: '#fff'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 25
        }
      }), __jsx("span", {
        style: {
          marginLeft: 5,
          color: '#fff'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 25
        }
      }, this.state.locationName), __jsx("span", {
        className: _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.change_location,
        onClick: function onClick() {
          _this2.setState({
            isLocation: true
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 25
        }
      }, "change"), __jsx(_styled_icons_boxicons_regular_Slider__WEBPACK_IMPORTED_MODULE_13__["Slider"], {
        size: 30,
        className: _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.slider,
        onClick: function onClick() {
          _this2.setState({
            isVisible: true
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 25
        }
      }))), __jsx("div", {
        className: _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.large_container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.large_left_container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.map_container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 25
        }
      }, __jsx(_map2__WEBPACK_IMPORTED_MODULE_14__["default"], {
        markers: markers,
        resultCount: resultCount,
        centerMoved: this.onMapDrag,
        latitude: currentlat,
        longitude: currentlong,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 29
        }
      }))), __jsx("div", {
        className: _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.large_right_container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.fixed,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 25
        }
      }, __jsx(_shared_DayFilters__WEBPACK_IMPORTED_MODULE_15__["default"], {
        updateState: this.updateState,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 29
        }
      }))))), this.state.isLoader ? __jsx("div", {
        className: _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.custom_loader,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 21
        }
      }, __jsx("div", {
        style: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 25
        }
      }, __jsx(react_activity__WEBPACK_IMPORTED_MODULE_17__["Spinner"], {
        size: "large",
        color: "#FFB6E4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 29
        }
      }), __jsx("span", {
        style: {
          marginLeft: 10
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 29
        }
      }, "Retrieving results"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null), __jsx(_modal_modal__WEBPACK_IMPORTED_MODULE_16__["default"], {
        isVisible: this.state.isVisible,
        closeModal: this.closeModal,
        updateFilter: this.updateFilter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 13
        }
      }), __jsx(_location_location__WEBPACK_IMPORTED_MODULE_19__["default"], {
        isLocation: this.state.isLocation,
        closeLocation: this.closeLocation,
        onChangeLocation: this.onChangeLocation,
        useMyLocation: this.useMyLocation,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 13
        }
      }), __jsx(react_no_ssr__WEBPACK_IMPORTED_MODULE_21___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 13
        }
      }, __jsx(react_tiny_fab__WEBPACK_IMPORTED_MODULE_22__["Fab"], {
        icon: __jsx("img", {
          src: UserIcon,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 23
          }
        }),
        mainButtonStyles: {
          background: '#FFB6E4'
        },
        onClick: function onClick() {
          return _this2.setState({
            isSubscribe: true
          });
        },
        text: "User Subscription",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 17
        }
      })));
    }
  }]);

  return MapView;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MapView);

/***/ }),

/***/ "./public/images/add.png":
/*!*******************************!*\
  !*** ./public/images/add.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkBR4FDyXzcFaLAAAEZUlEQVRo3rWZXWgcVRTHfxOTmjRJGy0k1aQkGjVqlQbBapVSQ/wC7YcS8QMEtakEFBTjQ9WXgoL4oljxIdWKimBLzEOb2iqUNi1FSaxg1dS2QZsS0iXxIwlp8735+5DZSXZnZ2fuZPY87b3n3PP/zZnZe+/csTAwrWALG7iVSpaRxzCDnOUH2q3TJllCmq7T55pQejuh+mzLb9NlZbbPVJA9+XcUxE6oKFtXH9T2y4pevtq3+AttW/QAXxnISzEtjVa+TFNGANLTZgo5Pv4nyDNkfjxagDrjoj2sJVEC1BgDFFERJcAqYwCojAxAy1kWAsAIOnMFFELecFRmgMuhAIxGZQSw4kyGABiLrgJwMQSA0Rg/gLPG8rP0RAlwxhig1xqPEqDLGKDTLNwPoMMY4HikAFaMc4YAx6KtALQa5eu2/oga4AujfGbRwUzHA29GJnRtNgDWBwZ4PwvyADoUSH5UpdkCqNTfAQCez5I8gOo14yO/M4vyANqaEWGPTDevBtKWU4W+tOKT2q6chZFRipdqh/r1qN1aqmadThL/Vx+ryvaW6ZTatS4q6QI1qNV+IZ/Q1gWeSm1Uo5r0pNYo1+ldo79sqB/1yiLnA9XqU42mFLpNnptN5estjSdFx3VYDfKfZ9MkK9QninvMc7u0LjWpqvSm+j0ezS7d5qeX8tiogMPck3HEf3TRwxDTlFBJLTdkjB7hPusXE4CPeDlE2dz2O0f4jQsM8Y/VG7z8t/hON/42rRatDomtXYuW36ebzTQX3AItYZDliyh7nGbrQyfbHdxPBRWMM8AZDll9/tcffNlNZ6N6yM5zpZp1IcU7q87EdOYNsGMR8nFttrPUqdcz6qjKMwF0LALgDTtHk8+RzkWt9ZK3NBJavnNuGdKzAWJHPP4jun4R118HoLtcR7mtqlW9ulN6zyndo66NoeUP2hU8mdIfmzst0p2uEe+mA3g9NMAmAD3l6u+wM+e5PGPzD+P80nJjqP8+jPE9AI0uz2zi2lyeAp6JDqDTmgSVsN5o1ObED2dDQXVIgG4A1jJ/OniSY8wAfzqVeA+AIh4jsVG5W7nWTFKelA1FcNsOoOec9nfe2xCVLdjelyfdAhWSH7ICcydCZU77G2vWK9Qa4KjTKEsCYEVIeSgGYNhp13qHKpfbnYY9IvEMXB0aYA495rSbNEoHcWDI+hlAFnNflApoZH6xjiVlUU3oWeAAgKrSeI4krjuNzzn8StyC85wPWYF7lQNWL78ajdqXAmBN8QBtTIcAKGFuffvaYIzYm76/VC/qoOfXQS/bDaAixVL67c+ZWuUa0ZYZr1hb9IF+0nRAgEsqA9ALLs9LoALtdcXfFKxOxdqgV/WlTvnWZLc9osXlGXC9Yc2qYaFKoPdZXUEVNVRzDeWs5CryKQSmucQog8ToY6c1Dcpjj883o1lem9+4ZsFk6W2PFztJGtYjWRR3IFarPY34lFq00h0d/ZGCDcEmHqSCcibpp4dv2W8Npov8H625chn956kEAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA1LTMwVDA1OjE1OjM3KzAwOjAwECwuNgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wNS0zMFQwNToxNTozNyswMDowMGFxlooAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"

/***/ })

})
//# sourceMappingURL=map.js.35083ff417e3a2dfe460.hot-update.js.map