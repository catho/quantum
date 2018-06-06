import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';

const wrapperMeasures = ({ wrapperHeight, wrapperWidth }) => `
  height: ${wrapperHeight}px;
  width: ${wrapperWidth}px;
`;

const ribbonMeasures = ({
  ribbonHeight,
  ribbonWidth,
  degrees,
  top,
  left,
}) => `
  height: ${ribbonHeight}px;
  left: ${left}px;
  top: ${top}px;
  transform: rotate(${degrees}deg);
  width: ${ribbonWidth}px;
`;

const Wrapper = styled.div`
  overflow: hidden;
  position: absolute;
  ${wrapperMeasures}

  &:before {
    background-color: ${Colors.SECONDARY['500']};
    box-sizing: border-box;
    color: ${Colors.WHITE};
    content: '${({ text }) => text}';
    font-size: 8px;
    font-weight: bold;
    padding: 10px 26px 0;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    ${ribbonMeasures}
  }
`;

const Ribbon = props => <Wrapper {...props} />;

Ribbon.defaultProps = {
  wrapperHeight: 81,
  wrapperWidth: 114,
  ribbonHeight: 29,
  ribbonWidth: 150,
  degrees: -35,
  top: 17,
  left: -31,
};

Ribbon.propTypes = {
  degrees: PropTypes.number,
  left: PropTypes.number,
  ribbonHeight: PropTypes.number,
  ribbonWidth: PropTypes.number,
  text: PropTypes.string.isRequired,
  top: PropTypes.number,
  wrapperHeight: PropTypes.number,
  wrapperWidth: PropTypes.number,
};

export default Ribbon;
