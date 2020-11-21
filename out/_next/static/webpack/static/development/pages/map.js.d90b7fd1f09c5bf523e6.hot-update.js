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
/* harmony import */ var _subscribe_Subscribe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../subscribe/Subscribe */ "./components/subscribe/Subscribe.js");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-no-ssr */ "./node_modules/react-no-ssr/index.js");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_tiny_fab__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-tiny-fab */ "./node_modules/react-tiny-fab/dist/fab.esm.js");









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
          lineNumber: 171,
          columnNumber: 13
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 17
        }
      }, "The sauce - Map View"), __jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.page_container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.header,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.header_container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
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
          lineNumber: 180,
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
          lineNumber: 181,
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
          lineNumber: 182,
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
          lineNumber: 183,
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
          lineNumber: 184,
          columnNumber: 25
        }
      }))), __jsx("div", {
        className: _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.large_container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.large_left_container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.map_container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
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
          lineNumber: 191,
          columnNumber: 29
        }
      }))), __jsx("div", {
        className: _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.large_right_container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.fixed,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 25
        }
      }, __jsx(_shared_DayFilters__WEBPACK_IMPORTED_MODULE_15__["default"], {
        updateState: this.updateState,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 29
        }
      }))))), this.state.isLoader ? __jsx("div", {
        className: _Mapview_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.custom_loader,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
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
          lineNumber: 207,
          columnNumber: 25
        }
      }, __jsx(react_activity__WEBPACK_IMPORTED_MODULE_17__["Spinner"], {
        size: "large",
        color: "#FFB6E4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 29
        }
      }), __jsx("span", {
        style: {
          marginLeft: 10
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 29
        }
      }, "Retrieving results"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null), __jsx(_modal_modal__WEBPACK_IMPORTED_MODULE_16__["default"], {
        isVisible: this.state.isVisible,
        closeModal: this.closeModal,
        updateFilter: this.updateFilter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
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
          lineNumber: 217,
          columnNumber: 13
        }
      }), __jsx(_subscribe_Subscribe__WEBPACK_IMPORTED_MODULE_21__["default"], {
        isSubscribe: this.state.isSubscribe,
        closeModal: this.closeModal,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 13
        }
      }), __jsx(react_no_ssr__WEBPACK_IMPORTED_MODULE_22___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 13
        }
      }, __jsx(react_tiny_fab__WEBPACK_IMPORTED_MODULE_23__["Fab"], {
        icon: __jsx("img", {
          src: UserIcon,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222,
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
          lineNumber: 221,
          columnNumber: 17
        }
      })));
    }
  }]);

  return MapView;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MapView);

/***/ }),

/***/ "./components/subscribe/Subscribe.js":
/*!*******************************************!*\
  !*** ./components/subscribe/Subscribe.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Subscribe_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Subscribe.module.css */ "./components/subscribe/Subscribe.module.css");
/* harmony import */ var _Subscribe_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Subscribe_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styled_icons_evaicons_solid_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @styled-icons/evaicons-solid/Close */ "./node_modules/@styled-icons/evaicons-solid/Close/Close.esm.js");








var _jsxFileName = "D:\\REACT_NEXT\\TheSauce\\components\\subscribe\\Subscribe.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Services = __webpack_require__(/*! ../../services/services */ "./services/services.js");

var ModalView = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ModalView, _React$Component);

  var _super = _createSuper(ModalView);

  function ModalView(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ModalView);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleChangeName", function (event) {
      _this.setState({
        name: event.target.value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleChangeEmail", function (event) {
      _this.setState({
        email: event.target.value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "closeSignup", function () {
      _this.setState({
        isToastActive: false
      });

      _this.props.closeModal();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "userSubscribe", function _callee() {
      var name, email, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              name = _this.state.name;
              email = _this.state.email;

              if (!(name !== '')) {
                _context.next = 13;
                break;
              }

              if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && name !== '')) {
                _context.next = 10;
                break;
              }

              _context.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Services.sendSignUpDetails(name, email));

            case 6:
              result = _context.sent;

              if (result.data.error) {
                _this.setState({
                  emailError: true,
                  nameError: false,
                  emailErrorText: '* ' + result.data.message
                });
              } else {
                _this.setState({
                  nameError: false,
                  emailError: false,
                  name: '',
                  email: '',
                  isToastActive: true
                });
              }

              _context.next = 11;
              break;

            case 10:
              _this.setState({
                emailError: true,
                emailErrorText: '* Invalid email address',
                nameError: false
              });

            case 11:
              _context.next = 14;
              break;

            case 13:
              _this.setState({
                nameError: true,
                emailErrorText: '* Invalid email address',
                emailError: true
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    });

    _this.state = {
      name: '',
      email: '',
      nameError: false,
      emailError: false,
      isToastActive: false,
      emailErrorText: '* Invalid email address'
    };
    _this.userSubscribe = _this.userSubscribe.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ModalView, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(react_modal__WEBPACK_IMPORTED_MODULE_9___default.a, {
        isOpen: this.props.isSubscribe,
        closeTimeoutMS: 500,
        ariaHideApp: false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: _Subscribe_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: _Subscribe_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.modal_header,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }
      }, __jsx(_styled_icons_evaicons_solid_Close__WEBPACK_IMPORTED_MODULE_11__["Close"], {
        size: 30,
        className: _Subscribe_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.modal_close,
        onClick: function onClick() {
          return _this2.closeSignup();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 25
        }
      }), __jsx("span", {
        className: _Subscribe_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subscribe_header_text,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 25
        }
      }, "Get on The Hot Sauce"), __jsx("p", {
        className: _Subscribe_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subscribe_header_below,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 25
        }
      }, "Get our hottest local restaurent and bar deals delivered direct to your inbox"), __jsx("p", {
        className: _Subscribe_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subscribe_policy,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 25
        }
      }, "We have a strict no spam policy")), __jsx("div", {
        className: _Subscribe_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subscribe_container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: _Subscribe_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.input_container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 25
        }
      }, this.state.isToastActive ? __jsx("span", {
        className: _Subscribe_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.successMSG,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 37
        }
      }, "Successfull") : null, __jsx("input", {
        type: "text",
        name: "name",
        placeholder: "First name",
        className: _Subscribe_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.input,
        onChange: this.handleChangeName,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 29
        }
      }), this.state.nameError ? __jsx("span", {
        className: _Subscribe_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.errorMSG,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 37
        }
      }, "* Invalid first name") : null, __jsx("input", {
        type: "email",
        name: "email",
        placeholder: "Enter email",
        className: _Subscribe_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.input,
        onChange: this.handleChangeEmail,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 29
        }
      }), this.state.emailError ? __jsx("span", {
        className: _Subscribe_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.errorMSG,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 37
        }
      }, this.state.emailErrorText) : null), __jsx("div", {
        className: _Subscribe_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.button_container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 25
        }
      }, __jsx("button", {
        className: _Subscribe_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.offer_btn,
        onClick: function onClick() {
          _this2.userSubscribe();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 29
        }
      }, __jsx("span", {
        className: _Subscribe_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.offer_btn_text,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 33
        }
      }, "Send me updates")))))));
    }
  }]);

  return ModalView;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ModalView);

/***/ }),

/***/ "./components/subscribe/Subscribe.module.css":
/*!***************************************************!*\
  !*** ./components/subscribe/Subscribe.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Subscribe.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/subscribe/Subscribe.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Subscribe.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/subscribe/Subscribe.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Subscribe.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/subscribe/Subscribe.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/subscribe/Subscribe.module.css":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/subscribe/Subscribe.module.css ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Subscribe_container__2dKaI{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    z-index: 999;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.Subscribe_modal_header__1hzeY{\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: relative;\r\n    padding:20px;\r\n    text-align:center;\r\n    background-color: #FFB6E4;\r\n    color:#000;\r\n}\r\n\r\n.Subscribe_subscribe_header_text__1Skgm{\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n.Subscribe_subscribe_header_below__2EsWx{\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n}\r\n\r\n.Subscribe_subscribe_policy__NxWRV{\r\n    font-size: 12px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.Subscribe_subscribe_container__6yRKV{\r\n    padding:20px;\r\n}\r\n\r\n.Subscribe_input_container__2LCZK{\r\n    padding:8px;\r\n}\r\n\r\n.Subscribe_input__b8cjJ{\r\n    width: 98%;\r\n    border: none;\r\n    border-bottom: 1px solid #FFB6E4;\r\n    padding-bottom: .8em;\r\n    margin-top: 1em;\r\n    background: #fff !important;\r\n}\r\n\r\n.Subscribe_modal_close__3DKWR{\r\n    position: absolute;\r\n    right: 10px;\r\n    top:10px;\r\n    cursor: pointer;\r\n    color:#000;\r\n}\r\n\r\n.Subscribe_button_container__1pN3m{\r\n    padding:8px;\r\n    text-align: center;\r\n    margin-bottom: 2em;\r\n}\r\n\r\n.Subscribe_offer_btn__2Xn5u{\r\n    background-color: #E676BD;\r\n    color: #ffffff;\r\n    padding:15px;\r\n    text-align: center;\r\n    align-items: center;\r\n    border-radius: 10px;\r\n    margin-top: 20px;\r\n    width: 100%;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.Subscribe_errorMSG__ly2_Z{\r\n    font-size: 13px;\r\n    margin-top: 10px;\r\n    display: block;\r\n    color: red;\r\n}\r\n\r\n.Subscribe_successMSG__2_8DI{\r\n    background: #FFB6E4;\r\n    width: 90%;\r\n    display: block;\r\n    text-align: center;\r\n    padding: 5%;\r\n    border-radius: 10px;\r\n    color: #fff;\r\n    margin-bottom: 1em;\r\n    font-size: 14px;\r\n}\r\n\r\n@media(min-width:767px){\r\n\r\n.Subscribe_modal_header__1hzeY{\r\n    margin-top:0px;\r\n}\r\n\r\n.Subscribe_container__2dKaI{\r\n    width: 25%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    top: 10%;\r\n    box-shadow: 0px 5px 5px 3px #ccc;\r\n}\r\n\r\n}", "",{"version":3,"sources":["D:/REACT_NEXT/TheSauce/components/subscribe/Subscribe.module.css"],"names":[],"mappings":"AAAA;IACI,yCAAyC;IACzC,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,yBAAyB;IACzB,UAAU;AACd;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,gCAAgC;IAChC,oBAAoB;IACpB,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,eAAe;IACf,UAAU;AACd;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,cAAc;IACd,kBAAkB;IAClB,WAAW;IACX,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,eAAe;AACnB;;AAEA;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,cAAc;IACd,kBAAkB;IAClB,QAAQ;IACR,gCAAgC;AACpC;;AAEA","file":"Subscribe.module.css","sourcesContent":[".container{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    z-index: 999;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.modal_header{\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: relative;\r\n    padding:20px;\r\n    text-align:center;\r\n    background-color: #FFB6E4;\r\n    color:#000;\r\n}\r\n\r\n.subscribe_header_text{\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n.subscribe_header_below{\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n}\r\n\r\n.subscribe_policy{\r\n    font-size: 12px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.subscribe_container{\r\n    padding:20px;\r\n}\r\n\r\n.input_container{\r\n    padding:8px;\r\n}\r\n\r\n.input{\r\n    width: 98%;\r\n    border: none;\r\n    border-bottom: 1px solid #FFB6E4;\r\n    padding-bottom: .8em;\r\n    margin-top: 1em;\r\n    background: #fff !important;\r\n}\r\n\r\n.modal_close{\r\n    position: absolute;\r\n    right: 10px;\r\n    top:10px;\r\n    cursor: pointer;\r\n    color:#000;\r\n}\r\n\r\n.button_container{\r\n    padding:8px;\r\n    text-align: center;\r\n    margin-bottom: 2em;\r\n}\r\n\r\n.offer_btn{\r\n    background-color: #E676BD;\r\n    color: #ffffff;\r\n    padding:15px;\r\n    text-align: center;\r\n    align-items: center;\r\n    border-radius: 10px;\r\n    margin-top: 20px;\r\n    width: 100%;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.errorMSG{\r\n    font-size: 13px;\r\n    margin-top: 10px;\r\n    display: block;\r\n    color: red;\r\n}\r\n\r\n.successMSG{\r\n    background: #FFB6E4;\r\n    width: 90%;\r\n    display: block;\r\n    text-align: center;\r\n    padding: 5%;\r\n    border-radius: 10px;\r\n    color: #fff;\r\n    margin-bottom: 1em;\r\n    font-size: 14px;\r\n}\r\n\r\n@media(min-width:767px){\r\n\r\n.modal_header{\r\n    margin-top:0px;\r\n}\r\n\r\n.container{\r\n    width: 25%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    top: 10%;\r\n    box-shadow: 0px 5px 5px 3px #ccc;\r\n}\r\n\r\n}"]}]);
// Exports
exports.locals = {
	"container": "Subscribe_container__2dKaI",
	"modal_header": "Subscribe_modal_header__1hzeY",
	"subscribe_header_text": "Subscribe_subscribe_header_text__1Skgm",
	"subscribe_header_below": "Subscribe_subscribe_header_below__2EsWx",
	"subscribe_policy": "Subscribe_subscribe_policy__NxWRV",
	"subscribe_container": "Subscribe_subscribe_container__6yRKV",
	"input_container": "Subscribe_input_container__2LCZK",
	"input": "Subscribe_input__b8cjJ",
	"modal_close": "Subscribe_modal_close__3DKWR",
	"button_container": "Subscribe_button_container__1pN3m",
	"offer_btn": "Subscribe_offer_btn__2Xn5u",
	"errorMSG": "Subscribe_errorMSG__ly2_Z",
	"successMSG": "Subscribe_successMSG__2_8DI"
};

/***/ })

})
//# sourceMappingURL=map.js.d90b7fd1f09c5bf523e6.hot-update.js.map