/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _srcDefaultsJsx = __webpack_require__(2);

	var _srcDefaultsJsx2 = _interopRequireDefault(_srcDefaultsJsx);

	var _srcContainerJsx = __webpack_require__(3);

	var _srcContainerJsx2 = _interopRequireDefault(_srcContainerJsx);

	var _srcRowJsx = __webpack_require__(4);

	var _srcRowJsx2 = _interopRequireDefault(_srcRowJsx);

	var _srcColJsx = __webpack_require__(5);

	var _srcColJsx2 = _interopRequireDefault(_srcColJsx);

	var _srcSpaceJsx = __webpack_require__(6);

	var _srcSpaceJsx2 = _interopRequireDefault(_srcSpaceJsx);

	var _srcHeaderJsx = __webpack_require__(1);

	var _srcHeaderJsx2 = _interopRequireDefault(_srcHeaderJsx);

	var _srcSectionJsx = __webpack_require__(7);

	var _srcSectionJsx2 = _interopRequireDefault(_srcSectionJsx);

	var _srcBtnJsx = __webpack_require__(8);

	var _srcBtnJsx2 = _interopRequireDefault(_srcBtnJsx);

	var _srcBoxJsx = __webpack_require__(9);

	var _srcBoxJsx2 = _interopRequireDefault(_srcBoxJsx);

	var _srcRuleJsx = __webpack_require__(10);

	var _srcRuleJsx2 = _interopRequireDefault(_srcRuleJsx);

	// Experimental

	var _srcFlexJsx = __webpack_require__(11);

	var _srcFlexJsx2 = _interopRequireDefault(_srcFlexJsx);

	var _srcFlexColJsx = __webpack_require__(12);

	var _srcFlexColJsx2 = _interopRequireDefault(_srcFlexColJsx);

	exports['default'] = {
	  defaults: _srcDefaultsJsx2['default'],
	  Container: _srcContainerJsx2['default'],
	  Row: _srcRowJsx2['default'],
	  Col: _srcColJsx2['default'],
	  Space: _srcSpaceJsx2['default'],
	  Header: _srcHeaderJsx2['default'],
	  Section: _srcSectionJsx2['default'],
	  Btn: _srcBtnJsx2['default'],
	  Box: _srcBoxJsx2['default'],
	  Rule: _srcRuleJsx2['default'],
	  Flex: _srcFlexJsx2['default'],
	  FlexCol: _srcFlexColJsx2['default'] };
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _defaultsJsx = __webpack_require__(2);

	var _defaultsJsx2 = _interopRequireDefault(_defaultsJsx);

	var Header = (function (_React$Component) {
	  function Header() {
	    _classCallCheck(this, Header);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Header, _React$Component);

	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      var style = {
	        paddingTop: _defaultsJsx2['default'].s2,
	        paddingBottom: _defaultsJsx2['default'].s2,
	        marginBottom: _defaultsJsx2['default'].s2,
	        borderBottomWidth: '1px',
	        borderBottomStyle: 'solid',
	        borderBottomColor: _defaultsJsx2['default'].gray };

	      return _react2['default'].createElement(
	        'header',
	        _extends({}, this.props, { style: style }),
	        this.props.children
	      );
	    }
	  }]);

	  return Header;
	})(_react2['default'].Component);

	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _colorsCss = __webpack_require__(14);

	var _colorsCss2 = _interopRequireDefault(_colorsCss);

	exports['default'] = {
	  s1: 8,
	  s2: 16,
	  s3: 32,
	  s4: 64,
	  small: '.875em',
	  maxWidth: 1024,
	  blue: _colorsCss2['default'].blue,
	  gray: '#ccc',
	  silver: '#eee',
	  borderRadius: 3,
	  m0: {
	    margin: 0
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _defaultsJsx = __webpack_require__(2);

	var _defaultsJsx2 = _interopRequireDefault(_defaultsJsx);

	var Container = (function (_React$Component) {
	  function Container() {
	    _classCallCheck(this, Container);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Container, _React$Component);

	  _createClass(Container, [{
	    key: 'render',
	    value: function render() {
	      var style = {
	        paddingLeft: _defaultsJsx2['default'].s2,
	        paddingRight: _defaultsJsx2['default'].s2,
	        maxWidth: this.props.fluid ? null : _defaultsJsx2['default'].maxWidth,
	        margin: '0 auto' };

	      return _react2['default'].createElement(
	        'div',
	        { style: style },
	        this.props.children
	      );
	    }
	  }]);

	  return Container;
	})(_react2['default'].Component);

	Container.propTypes = {
	  fluid: _react2['default'].PropTypes.bool
	};

	exports['default'] = Container;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _defaultsJsx = __webpack_require__(2);

	var _defaultsJsx2 = _interopRequireDefault(_defaultsJsx);

	var Row = (function (_React$Component) {
	  function Row() {
	    _classCallCheck(this, Row);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Row, _React$Component);

	  _createClass(Row, [{
	    key: 'render',
	    value: function render() {
	      var styles = {
	        row: {
	          marginLeft: -_defaultsJsx2['default'].s2,
	          marginRight: -_defaultsJsx2['default'].s2 },
	        cf: {
	          display: 'table',
	          clear: 'both'
	        }
	      };

	      return _react2['default'].createElement(
	        'div',
	        { style: styles.row },
	        this.props.children,
	        _react2['default'].createElement('div', { style: styles.cf })
	      );
	    }
	  }]);

	  return Row;
	})(_react2['default'].Component);

	exports['default'] = Row;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _defaultsJsx = __webpack_require__(2);

	var _defaultsJsx2 = _interopRequireDefault(_defaultsJsx);

	var Col = (function (_React$Component) {
	  function Col() {
	    _classCallCheck(this, Col);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Col, _React$Component);

	  _createClass(Col, [{
	    key: 'render',
	    value: function render() {

	      var style = {
	        boxSizing: 'border-box',
	        float: 'left',
	        paddingLeft: _defaultsJsx2['default'].s2,
	        paddingRight: _defaultsJsx2['default'].s2,
	        width: this.props.w / 12 * 100 + '%' };

	      return _react2['default'].createElement(
	        'div',
	        { style: style },
	        this.props.children
	      );
	    }
	  }]);

	  return Col;
	})(_react2['default'].Component);

	Col.propTypes = {
	  w: _react2['default'].PropTypes.number
	};

	Col.defaultProps = {
	  w: 12
	};

	exports['default'] = Col;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _defaultsJsx = __webpack_require__(2);

	var _defaultsJsx2 = _interopRequireDefault(_defaultsJsx);

	var Space = (function (_React$Component) {
	  function Space() {
	    _classCallCheck(this, Space);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Space, _React$Component);

	  _createClass(Space, [{
	    key: 'render',
	    value: function render() {
	      var scale = [0, _defaultsJsx2['default'].s1, _defaultsJsx2['default'].s2, _defaultsJsx2['default'].s3, _defaultsJsx2['default'].s4];
	      var _props = this.props;
	      var m = _props.m;
	      var mt = _props.mt;
	      var mr = _props.mr;
	      var mb = _props.mb;
	      var ml = _props.ml;
	      var mx = _props.mx;
	      var my = _props.my;
	      var p = _props.p;
	      var pt = _props.pt;
	      var pr = _props.pr;
	      var pb = _props.pb;
	      var pl = _props.pl;
	      var px = _props.px;
	      var py = _props.py;

	      var style = {
	        margin: m ? scale[m] : null,
	        marginTop: mt ? scale[mt] : null,
	        marginRight: mr ? scale[mr] : null,
	        marginBottom: mb ? scale[mb] : null,
	        marginLeft: ml ? scale[ml] : null,
	        padding: p ? scale[p] : null,
	        paddingTop: pt ? scale[pt] : null,
	        paddingRight: pr ? scale[pr] : null,
	        paddingBottom: pb ? scale[pb] : null,
	        paddingLeft: pl ? scale[pl] : null };
	      if (mx) {
	        style.marginLeft = scale[mx];
	        style.marginRight = scale[mx];
	      }
	      if (my) {
	        style.marginTop = scale[my];
	        style.marginBottom = scale[my];
	      }
	      if (px) {
	        style.paddingLeft = scale[px];
	        style.paddingRight = scale[px];
	      }
	      if (py) {
	        style.paddingTop = scale[py];
	        style.paddingBottom = scale[py];
	      }

	      return _react2['default'].createElement(
	        'div',
	        _extends({}, this.props, { style: style }),
	        this.props.children
	      );
	    }
	  }]);

	  return Space;
	})(_react2['default'].Component);

	Space.propTypes = {
	  m: _react2['default'].PropTypes.number,
	  mt: _react2['default'].PropTypes.number,
	  mr: _react2['default'].PropTypes.number,
	  mb: _react2['default'].PropTypes.number,
	  ml: _react2['default'].PropTypes.number,
	  mx: _react2['default'].PropTypes.number,
	  my: _react2['default'].PropTypes.number,
	  p: _react2['default'].PropTypes.number,
	  pt: _react2['default'].PropTypes.number,
	  pr: _react2['default'].PropTypes.number,
	  pb: _react2['default'].PropTypes.number,
	  pl: _react2['default'].PropTypes.number,
	  px: _react2['default'].PropTypes.number,
	  py: _react2['default'].PropTypes.number
	};

	exports['default'] = Space;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _defaultsJsx = __webpack_require__(2);

	var _defaultsJsx2 = _interopRequireDefault(_defaultsJsx);

	var Section = (function (_React$Component) {
	  function Section() {
	    _classCallCheck(this, Section);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Section, _React$Component);

	  _createClass(Section, [{
	    key: 'render',
	    value: function render() {
	      var style = {
	        paddingTop: _defaultsJsx2['default'].s3,
	        paddingBottom: _defaultsJsx2['default'].s3 };

	      return _react2['default'].createElement(
	        'section',
	        _extends({}, this.props, { style: style }),
	        this.props.children
	      );
	    }
	  }]);

	  return Section;
	})(_react2['default'].Component);

	exports['default'] = Section;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _defaultsJsx = __webpack_require__(2);

	var _defaultsJsx2 = _interopRequireDefault(_defaultsJsx);

	var Btn = (function (_React$Component) {
	  function Btn() {
	    _classCallCheck(this, Btn);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Btn, _React$Component);

	  _createClass(Btn, [{
	    key: 'render',
	    value: function render() {
	      var secondary = this.props.secondary;
	      var style = {
	        fontFamily: 'inherit',
	        fontSize: _defaultsJsx2['default'].small,
	        fontWeight: 'bold',
	        lineHeight: '32px',
	        cursor: 'pointer',
	        display: 'inline-block',
	        padding: '4px 16px',
	        margin: 0,
	        height: 'auto',
	        borderWidth: '1px',
	        borderStyle: 'solid',
	        borderColor: secondary ? _defaultsJsx2['default'].gray : 'transparent',
	        color: secondary ? 'inherit' : '#fff',
	        backgroundColor: secondary ? _defaultsJsx2['default'].silver : _defaultsJsx2['default'].blue,
	        borderRadius: _defaultsJsx2['default'].borderRadius
	      };

	      return _react2['default'].createElement(
	        'button',
	        _extends({}, this.props, { style: style }),
	        this.props.children
	      );
	    }
	  }]);

	  return Btn;
	})(_react2['default'].Component);

	Btn.propTypes = {
	  secondary: _react2['default'].PropTypes.bool
	};

	exports['default'] = Btn;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _defaultsJsx = __webpack_require__(2);

	var _defaultsJsx2 = _interopRequireDefault(_defaultsJsx);

	var Box = (function (_React$Component) {
	  function Box() {
	    _classCallCheck(this, Box);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Box, _React$Component);

	  _createClass(Box, [{
	    key: 'render',
	    value: function render() {
	      var style = {
	        padding: _defaultsJsx2['default'].s2,
	        marginBottom: _defaultsJsx2['default'].s2,
	        borderWidth: '1px',
	        borderStyle: 'solid',
	        borderColor: _defaultsJsx2['default'].gray,
	        borderRadius: _defaultsJsx2['default'].borderRadius
	      };

	      return _react2['default'].createElement(
	        'div',
	        _extends({}, this.props, { style: style }),
	        this.props.children
	      );
	    }
	  }]);

	  return Box;
	})(_react2['default'].Component);

	var Header = (function (_React$Component2) {
	  function Header() {
	    _classCallCheck(this, Header);

	    if (_React$Component2 != null) {
	      _React$Component2.apply(this, arguments);
	    }
	  }

	  _inherits(Header, _React$Component2);

	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      var style = {
	        fontWeight: 'bold',
	        padding: _defaultsJsx2['default'].s2,
	        marginTop: -_defaultsJsx2['default'].s2,
	        marginRight: -_defaultsJsx2['default'].s2,
	        marginLeft: -_defaultsJsx2['default'].s2,
	        marginBottom: _defaultsJsx2['default'].s2,
	        //color: '#fff',
	        backgroundColor: _defaultsJsx2['default'].silver,
	        borderBottomWidth: '1px',
	        borderBottomStyle: 'solid',
	        borderBottomColor: _defaultsJsx2['default'].gray };

	      return _react2['default'].createElement(
	        'div',
	        { style: style },
	        this.props.children
	      );
	    }
	  }]);

	  return Header;
	})(_react2['default'].Component);

	var Footer = (function (_React$Component3) {
	  function Footer() {
	    _classCallCheck(this, Footer);

	    if (_React$Component3 != null) {
	      _React$Component3.apply(this, arguments);
	    }
	  }

	  _inherits(Footer, _React$Component3);

	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	      var style = {
	        fontSize: _defaultsJsx2['default'].small,
	        padding: _defaultsJsx2['default'].s2,
	        marginTop: _defaultsJsx2['default'].s2,
	        marginRight: -_defaultsJsx2['default'].s2,
	        marginLeft: -_defaultsJsx2['default'].s2,
	        marginBottom: -_defaultsJsx2['default'].s2,
	        borderTopWidth: '1px',
	        borderTopStyle: 'solid',
	        borderTopColor: _defaultsJsx2['default'].gray };

	      return _react2['default'].createElement(
	        'div',
	        { style: style },
	        this.props.children
	      );
	    }
	  }]);

	  return Footer;
	})(_react2['default'].Component);

	Box.Header = Header;
	Box.Footer = Footer;

	exports['default'] = Box;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _defaultsJsx = __webpack_require__(2);

	var _defaultsJsx2 = _interopRequireDefault(_defaultsJsx);

	var Rule = (function (_React$Component) {
	  function Rule() {
	    _classCallCheck(this, Rule);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Rule, _React$Component);

	  _createClass(Rule, [{
	    key: 'render',
	    value: function render() {
	      var style = {
	        marginTop: _defaultsJsx2['default'].s2,
	        marginBottom: _defaultsJsx2['default'].s2,
	        border: 0,
	        borderBottomWidth: '1px',
	        borderBottomStyle: 'solid',
	        borderBottomColor: _defaultsJsx2['default'].gray };

	      return _react2['default'].createElement('hr', _extends({}, this.props, { style: style }));
	    }
	  }]);

	  return Rule;
	})(_react2['default'].Component);

	exports['default'] = Rule;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _defaultsJsx = __webpack_require__(2);

	var _defaultsJsx2 = _interopRequireDefault(_defaultsJsx);

	var Flex = (function (_React$Component) {
	  function Flex() {
	    _classCallCheck(this, Flex);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Flex, _React$Component);

	  _createClass(Flex, [{
	    key: 'render',
	    value: function render() {

	      var style = {
	        display: 'flex',
	        flexWrap: 'wrap' };

	      return _react2['default'].createElement(
	        'div',
	        { style: style },
	        this.props.children
	      );
	    }
	  }]);

	  return Flex;
	})(_react2['default'].Component);

	exports['default'] = Flex;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _defaultsJsx = __webpack_require__(2);

	var _defaultsJsx2 = _interopRequireDefault(_defaultsJsx);

	var FlexCol = (function (_React$Component) {
	  function FlexCol() {
	    _classCallCheck(this, FlexCol);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(FlexCol, _React$Component);

	  _createClass(FlexCol, [{
	    key: 'render',
	    value: function render() {

	      var style = {
	        flex: '1 0 auto',
	        boxSizing: 'border-box',
	        width: this.props.w / 12 * 100 + '%',
	        minWidth: this.props.min * this.props.w,
	        paddingLeft: _defaultsJsx2['default'].s2,
	        paddingRight: _defaultsJsx2['default'].s2 };

	      return _react2['default'].createElement(
	        'div',
	        { style: style },
	        this.props.children
	      );
	    }
	  }]);

	  return FlexCol;
	})(_react2['default'].Component);

	FlexCol.propTypes = {
	  w: _react2['default'].PropTypes.number,
	  min: _react2['default'].PropTypes.number
	};

	FlexCol.defaultProps = {
	  w: 12,
	  min: 40
	};

	exports['default'] = FlexCol;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var colors = {
		aqua: "#7FDBFF",
		blue: "#0074D9",
		lime: "#01FF70",
		navy: "#001F3F",
		teal: "#39CCCC",
		olive: "#3D9970",
		green: "#2ECC40",
		red: "#FF4136",
		maroon: "#85144B",
		orange: "#FF851B",
		purple: "#B10DC9",
		yellow: "#FFDC00",
		fuchsia: "#F012BE",
		gray: "#aaa",
		white: "#fff",
		black: "#111",
		silver: "#ddd"
	};

	if(
		typeof module !== "undefined" &&
		typeof module.exports !== "undefined"
	){
		module.exports = colors;
	}


/***/ }
/******/ ]);