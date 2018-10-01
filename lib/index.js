"use strict"

exports.__esModule = true

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i]
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }
    return target
  }

var _templateObject = _taggedTemplateLiteralLoose(
  ["\n  position: relative;\n  display: inline-block;\n"],
  ["\n  position: relative;\n  display: inline-block;\n"]
)

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _propTypes = require("prop-types")

var _propTypes2 = _interopRequireDefault(_propTypes)

var _styledComponents = require("styled-components")

var _styledComponents2 = _interopRequireDefault(_styledComponents)

var _Arrow = require("./components/Arrow")

var _Arrow2 = _interopRequireDefault(_Arrow)

var _Tooltip = require("./components/Tooltip")

var _Tooltip2 = _interopRequireDefault(_Tooltip)

var _Bubble = require("./components/Bubble")

var _Bubble2 = _interopRequireDefault(_Bubble)

var _propTypes3 = require("./utils/propTypes")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj}
}

function _objectWithoutProperties(obj, keys) {
  var target = {}
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
    target[i] = obj[i]
  }
  return target
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function")
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    )
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  })
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
}

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw
  return strings
}

var Container = _styledComponents2.default.div(_templateObject)

var Wrapper = (function(_React$Component) {
  _inherits(Wrapper, _React$Component)

  function Wrapper() {
    _classCallCheck(this, Wrapper)

    var _this = _possibleConstructorReturn(this, _React$Component.call(this))

    _this.state = {
      open: false,
    }

    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this)
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this)
    return _this
  }

  Wrapper.prototype.handleMouseEnter = function handleMouseEnter() {
    this.setState({open: true})
  }

  Wrapper.prototype.handleMouseLeave = function handleMouseLeave() {
    this.setState({open: false})
  }

  Wrapper.prototype.render = function render() {
    var open = this.state.open

    var _props = this.props,
      offset = _props.offset,
      arrow = _props.arrow,
      background = _props.background,
      boxShadow = _props.boxShadow,
      border = _props.border,
      children = _props.children,
      color = _props.color,
      content = _props.content,
      fixed = _props.fixed,
      fontFamily = _props.fontFamily,
      fontSize = _props.fontSize,
      fontWeight = _props.fontWeight,
      padding = _props.padding,
      placement = _props.placement,
      radius = _props.radius,
      zIndex = _props.zIndex,
      fadeEasing = _props.fadeEasing,
      fadeDuration = _props.fadeDuration,
      props = _objectWithoutProperties(_props, [
        "offset",
        "arrow",
        "background",
        "boxShadow",
        "border",
        "children",
        "color",
        "content",
        "fixed",
        "fontFamily",
        "fontSize",
        "fontWeight",
        "padding",
        "placement",
        "radius",
        "zIndex",
        "fadeEasing",
        "fadeDuration",
      ])

    var hasTrigger = children !== undefined && children !== null
    var tooltipElement = _react2.default.createElement(
      _Tooltip2.default,
      {
        open: !hasTrigger || fixed ? true : open,
        placement: placement,
        offset: offset + arrow,
        zIndex: zIndex,
        fadeEasing: fadeEasing,
        fadeDuration: fadeDuration,
      },
      _react2.default.createElement(
        _Bubble2.default,
        {
          background: background,
          border: border,
          color: color,
          radius: radius,
          fontFamily: fontFamily,
          fontSize: fontSize,
          fontWeight: fontWeight,
          padding: padding,
          boxShadow: boxShadow,
        },
        _react2.default.createElement(_Arrow2.default, {
          width: arrow,
          background: background,
          border: border,
          color: color,
          placement: placement,
        }),
        content
      )
    )
    return hasTrigger
      ? _react2.default.createElement(
          Container,
          _extends(
            {
              onMouseEnter: !fixed ? this.handleMouseEnter : undefined,
              onMouseLeave: !fixed ? this.handleMouseLeave : undefined,
            },
            props
          ),
          children,
          tooltipElement
        )
      : _react2.default.createElement(Container, props, tooltipElement)
  }

  return Wrapper
})(_react2.default.Component)

Wrapper.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        arrow: _propTypes2.default.number,
        background: _propTypes2.default.string,
        border: _propTypes2.default.string,
        boxShadow: _propTypes2.default.string,
        children: _propTypes2.default.any,
        color: _propTypes2.default.string,
        content: _propTypes2.default.any.isRequired,
        fadeDuration: _propTypes2.default.number,
        fadeEasing: _propTypes3.easingPropType,
        fixed: _propTypes2.default.bool,
        fontFamily: _propTypes2.default.string,
        fontSize: _propTypes2.default.string,
        fontWeight: _propTypes2.default.string,
        offset: _propTypes2.default.number,
        padding: _propTypes2.default.string,
        placement: _propTypes2.default.oneOf([
          "left",
          "top",
          "right",
          "bottom",
        ]),
        radius: _propTypes2.default.string,
        zIndex: _propTypes2.default.number,
      }
    : {}

Wrapper.defaultProps = {
  arrow: 8,
  background: "#000",
  border: "#000",
  boxShadow: "0 2px 4px 0 rgba(70, 72, 80, 0.25)",
  children: null,
  color: "#fff",
  fadeDuration: 0,
  fadeEasing: "linear",
  fixed: false,
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "normal",
  offset: 0,
  padding: "1rem 3rem",
  placement: "top",
  radius: "0.25rem",
  zIndex: 1,
}

Wrapper.displayName = "Tooltip.Wrapper"
_Tooltip2.default.displayName = "Tooltip"
_Bubble2.default.displayName = "Tooltip.Bubble"
_Arrow2.default.displayName = "Tooltip.Arrow"

exports.default = Wrapper
module.exports = exports["default"]