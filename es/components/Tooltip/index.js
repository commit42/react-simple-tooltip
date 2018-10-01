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

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw
  return strings
}

import React from "react"
import PropTypes from "prop-types"
import styled, {keyframes} from "styled-components"
import {easingPropType} from "../../utils/propTypes"

var fadeAnimation = keyframes(_templateObject)

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
var Base = styled.div(_templateObject2, function (props) {
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
    React.createElement(
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
        children: PropTypes.any.isRequired,
        offset: PropTypes.number,
        open: PropTypes.bool,
        placement: PropTypes.string,
        zIndex: PropTypes.number,
        fadeEasing: easingPropType,
        fadeDuration: PropTypes.number,
      }
    : {}

export default Tooltip