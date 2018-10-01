"use strict"

exports.__esModule = true

var _templateObject = _taggedTemplateLiteralLoose(
    ["\n  0% {\n      opacity: 0;\n  }\n  100% {\n      opacity: 1;\n  }\n"],
    ["\n  0% {\n      opacity: 0;\n  }\n  100% {\n      opacity: 1;\n  }\n"]
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    ["\n  position: absolute;\n  ", "\n  ", ";\n"],
    ["\n  position: absolute;\n  ", "\n  ", ";\n"]
  ),
  _templateObject3 = _taggedTemplateLiteralLoose(
    [
      "\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-bottom: ",
      "px;\n",
    ],
    [
      "\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-bottom: ",
      "px;\n",
    ]
  ),
  _templateObject4 = _taggedTemplateLiteralLoose(
    [
      "\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-top: ",
      "px;\n",
    ],
    [
      "\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-top: ",
      "px;\n",
    ]
  ),
  _templateObject5 = _taggedTemplateLiteralLoose(
    [
      "\n  right: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  margin-right: ",
      "px;\n",
    ],
    [
      "\n  right: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  margin-right: ",
      "px;\n",
    ]
  ),
  _templateObject6 = _taggedTemplateLiteralLoose(
    [
      "\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  margin-left: ",
      "px;\n",
    ],
    [
      "\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  margin-left: ",
      "px;\n",
    ]
  )

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _propTypes = require("prop-types")

var _propTypes2 = _interopRequireDefault(_propTypes)

var _styledComponents = require("styled-components")

var _styledComponents2 = _interopRequireDefault(_styledComponents)

var _propTypes3 = require("../../utils/propTypes")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj}
}

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw
  return strings
}

var fadeAnimation = (0, _styledComponents.keyframes)(_templateObject)

var createAnimation = function createAnimation(props) {
  return (
    "animation:\n    " +
    props.fadeDuration +
    "ms\n    " +
    props.fadeEasing +
    "\n    0s\n    1\n    " +
    fadeAnimation +
    "\n  "
  )
}

// prettier-ignore
var Base = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.fadeDuration && createAnimation(props) + ";";
}, function (props) {
  return props.zIndex && "z-index: " + props.zIndex + ";";
});

var Top = Base.extend(_templateObject3, function(props) {
  return props.offset
})

var Bottom = Base.extend(_templateObject4, function(props) {
  return props.offset
})

var Left = Base.extend(_templateObject5, function(props) {
  return props.offset
})

var Right = Base.extend(_templateObject6, function(props) {
  return props.offset
})

var tooltips = {
  left: Left,
  top: Top,
  right: Right,
  bottom: Bottom,
}

var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
    offset = _ref.offset,
    open = _ref.open,
    placement = _ref.placement,
    zIndex = _ref.zIndex,
    fadeDuration = _ref.fadeDuration,
    fadeEasing = _ref.fadeEasing

  var Component = tooltips[placement] || tooltips.top
  return (
    open &&
    _react2.default.createElement(
      Component,
      {
        offset: offset,
        open: open,
        zIndex: zIndex,
        fadeDuration: fadeDuration,
        fadeEasing: fadeEasing,
      },
      children
    )
  )
}

Tooltip.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        children: _propTypes2.default.any.isRequired,
        offset: _propTypes2.default.number,
        open: _propTypes2.default.bool,
        placement: _propTypes2.default.string,
        zIndex: _propTypes2.default.number,
        fadeEasing: _propTypes3.easingPropType,
        fadeDuration: _propTypes2.default.number,
      }
    : {}

exports.default = Tooltip
module.exports = exports["default"]