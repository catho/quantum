import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { colors } from '../shared/theme';

const Content = styled.svg`
  overflow: hidden;

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
  color: colors.primary[500],
};

CircularLoader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default CircularLoader;
