import PropTypes from "prop-types"
import styled from "styled-components"

const Bubble = styled.div`
  color: ${props => (props.color ? props.color : "inherit")};
  background: ${props => (props.background ? props.background : "inherit")};
  border-radius: ${props => (props.radius ? `${props.radius}` : "0")};
  border: 1px solid ${props => props.border};
  box-shadow: ${props => props.boxShadow};
  padding: ${props => (props.padding ? `${props.padding}` : "0")};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  font-family: ${props => props.fontFamily};
`

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
