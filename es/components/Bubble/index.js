var _templateObject = _taggedTemplateLiteralLoose(
  [
    "\n  color: ",
    ";\n  background: ",
    ";\n  border-radius: ",
    ";\n  border: 1px solid ",
    ";\n  box-shadow: ",
    ";\n  padding: ",
    ";\n  font-size: ",
    ";\n  font-weight: ",
    ";\n  font-family: ",
    ";\n",
  ],
  [
    "\n  color: ",
    ";\n  background: ",
    ";\n  border-radius: ",
    ";\n  border: 1px solid ",
    ";\n  box-shadow: ",
    ";\n  padding: ",
    ";\n  font-size: ",
    ";\n  font-weight: ",
    ";\n  font-family: ",
    ";\n",
  ]
)

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw
  return strings
}

import PropTypes from "prop-types"
import styled from "styled-components"

var Bubble = styled.div(
  _templateObject,
  function(props) {
    return props.color ? props.color : "inherit"
  },
  function(props) {
    return props.background ? props.background : "inherit"
  },
  function(props) {
    return props.radius ? "" + props.radius : "0"
  },
  function(props) {
    return props.border
  },
  function(props) {
    return props.boxShadow
  },
  function(props) {
    return props.padding ? "" + props.padding : "0"
  },
  function(props) {
    return props.fontSize
  },
  function(props) {
    return props.fontWeight
  },
  function(props) {
    return props.fontFamily
  }
)

Bubble.propTypes = {
  background: PropTypes.string,
  boxShadow: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  radius: PropTypes.string,
  padding: PropTypes.string,
}

export default Bubble
