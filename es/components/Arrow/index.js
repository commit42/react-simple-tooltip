var _templateObject = _taggedTemplateLiteralLoose(
    [
      "\n  position: absolute;\n  width: ",
      "px;\n  height: ",
      "px;\n  background: ",
      ";\n",
    ],
    [
      "\n  position: absolute;\n  width: ",
      "px;\n  height: ",
      "px;\n  background: ",
      ";\n",
    ]
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    [
      "\n  transform: translateX(-50%) translateY(50%) rotateZ(45deg);\n  bottom: 100%;\n  left: 50%;\n  border-left: 1px solid ",
      ";\n  border-top: 1px solid ",
      ";\n",
    ],
    [
      "\n  transform: translateX(-50%) translateY(50%) rotateZ(45deg);\n  bottom: 100%;\n  left: 50%;\n  border-left: 1px solid ",
      ";\n  border-top: 1px solid ",
      ";\n",
    ]
  ),
  _templateObject3 = _taggedTemplateLiteralLoose(
    [
      "\n  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);\n  top: 100%;\n  left: 50%;\n  border-right: 1px solid ",
      ";\n  border-bottom: 1px solid ",
      ";\n",
    ],
    [
      "\n  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);\n  top: 100%;\n  left: 50%;\n  border-right: 1px solid ",
      ";\n  border-bottom: 1px solid ",
      ";\n",
    ]
  ),
  _templateObject4 = _taggedTemplateLiteralLoose(
    [
      "\n  transform: translateX(50%) translateY(-50%) rotateZ(45deg);\n  right: 100%;\n  top: 50%;\n  border-left: 1px solid ",
      ";\n  border-bottom: 1px solid ",
      ";\n",
    ],
    [
      "\n  transform: translateX(50%) translateY(-50%) rotateZ(45deg);\n  right: 100%;\n  top: 50%;\n  border-left: 1px solid ",
      ";\n  border-bottom: 1px solid ",
      ";\n",
    ]
  ),
  _templateObject5 = _taggedTemplateLiteralLoose(
    [
      "\n  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);\n  left: 100%;\n  top: 50%;\n  border-right: 1px solid ",
      ";\n  border-top: 1px solid ",
      ";\n",
    ],
    [
      "\n  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);\n  left: 100%;\n  top: 50%;\n  border-right: 1px solid ",
      ";\n  border-top: 1px solid ",
      ";\n",
    ]
  )

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw
  return strings
}

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

var Base = styled.div(
  _templateObject,
  function(props) {
    return props.width
  },
  function(props) {
    return props.width
  },
  function(props) {
    return props.background
  }
)

var Up = Base.extend(
  _templateObject2,
  function(props) {
    return props.border
  },
  function(props) {
    return props.border
  }
)
var Down = Base.extend(
  _templateObject3,
  function(props) {
    return props.border
  },
  function(props) {
    return props.border
  }
)
var Left = Base.extend(
  _templateObject4,
  function(props) {
    return props.border
  },
  function(props) {
    return props.border
  }
)

var Right = Base.extend(
  _templateObject5,
  function(props) {
    return props.border
  },
  function(props) {
    return props.border
  }
)

var arrows = {
  left: Right,
  top: Down,
  right: Left,
  bottom: Up,
}

var Arrow = function Arrow(_ref) {
  var background = _ref.background,
    border = _ref.border,
    placement = _ref.placement,
    width = _ref.width

  var Component = arrows[placement] || arrows.top
  return (
    width > 0 &&
    React.createElement(Component, {
      background: background,
      border: border,
      width: width,
    })
  )
}

Arrow.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        background: PropTypes.string.isRequired,
        border: PropTypes.string.isRequired,
        placement: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
      }
    : {}

export default Arrow
