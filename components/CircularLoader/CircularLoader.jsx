import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { colors, gutter as defaultGutter } from '../shared/theme';

const getSizePixels = (size, gutter) => {
  const sizes = {
    medium: gutter * 2, // 16
    large: gutter * 3, // 24
    xlarge: gutter * 4, // 32
    xxlarge: gutter * 5, // 40
    xxxlarge: gutter * 6, // 48
  };

  return sizes[size];
};

const Content = styled.svg`
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  ${({ color }) => `
    color: ${color};
  `}
`;

const circularRotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const circularDash = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`;

const Circle = styled.circle`
  animation: ${circularDash} 1.4s ease-in-out infinite;
  stroke-dasharray: 80px, 200px;
  stroke-dashoffset: 0px;
  stroke: currentColor;
  line-height: 1;
  stroke-width: 3.6;
  fill: none;
  cx: 44;
  cy: 44;
  r: 20.2;

  ${({ color }) => `
    color: ${color};
  `}
`;

const Wrapper = styled.div`
  position: relative;
  animation: ${circularRotate} 1.4s linear infinite;

  ${({ size, gutter }) => `
    height: ${getSizePixels(size, gutter)}px;
    width: ${getSizePixels(size, gutter)}px; 
  `}
`;

const CircularLoader = props => {
  const {
    size,
    skin,
    theme: {
      colors: {
        [skin]: { 500: color },
      },
      gutter,
    },
  } = props;

  return (
    <Wrapper size={size} gutter={gutter} role="progressbar">
      <Content color={color} viewBox="22 22 44 44">
        <Circle color={color} />
      </Content>
    </Wrapper>
  );
};

CircularLoader.defaultProps = {
  size: 'medium',
  skin: 'primary',
  theme: {
    colors,
    gutter: defaultGutter,
  },
};

CircularLoader.propTypes = {
  size: PropTypes.oneOf(['medium', 'large', 'xlarge', 'xxlarge', 'xxxlarge']),
  skin: PropTypes.oneOf(['primary', 'secondary']),
  theme: PropTypes.shape({
    colors: PropTypes.object,
    gutter: PropTypes.number,
  }),
};

export default CircularLoader;
