import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { colors } from '../shared/theme';

const Content = styled.svg`
  overflow: hidden;

  ${({
    skin,
    theme: {
      colors: {
        [skin]: { 500: mainColor500 },
      },
    },
  }) => `
    color: ${mainColor500};
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

  ${({
    skin,
    theme: {
      colors: {
        [skin]: { 500: mainColor500 },
      },
    },
  }) => `
    color: ${mainColor500};
  `}
`;

const Wrapper = styled.div`
  animation: ${circularRotate} 1.4s linear infinite;

  ${({ size }) => `
    height: ${size};
    width: ${size}; 
  `}
`;

const CircularLoader = props => (
  <Wrapper {...props} role="progressbar">
    <Content {...props} viewBox="22 22 44 44">
      <Circle {...props} />
    </Content>
  </Wrapper>
);

CircularLoader.defaultProps = {
  size: '48px',
  skin: 'neutral',
  theme: {
    colors,
  },
};

CircularLoader.propTypes = {
  size: PropTypes.string,
  skin: PropTypes.oneOf(['primary', 'success', 'error', 'neutral', 'warning']),
  theme: PropTypes.shape({
    colors,
  }),
};

export default CircularLoader;
