import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import { colors, baseFontSize, spacing } from '../shared/theme';

const MOBILE_CIRCLE_SIZE = 64;
const DESKTOP_CIRCLE_SIZE = 72;
const DESKTOP_OVERLAY_WIDTH = 60;
const DESKTOP_OVERLAY_HEIGHT = 40;
const MOBILE_OVERLAY_WIDTH = 52;
const MOBILE_OVERLAY_HEIGHT = 34;

const Wrapper = styled.section`
  .progress {
    background-image: ${({
      degrees: { 0: reference, 1: position },
      theme: { colors: Colors },
      skin,
    }) => `
    ${
      reference > 0
        ? `linear-gradient(${reference}deg, ${Colors.neutral[300]} 50%, transparent 50%), 
      linear-gradient(${position}deg, ${Colors.neutral[300]} 50%, ${Colors[skin][500]} 50%)`
        : `linear-gradient(${reference}deg, ${Colors[skin][500]} 50%, transparent 50%), 
      linear-gradient(${position}deg, ${Colors[skin][500]} 50%, ${Colors.neutral[300]} 50%)`
    }`};
  }
`;

const RadialProgressBar = styled.div`
  border-radius: 50%;
  transform: translate(50%, 50%);
  display: flex;
  background: #ddd;
  float: left;
  font-weight: 700;

  ${({ isMobile, theme: { baseFontSize: defaultBaseFontSize } }) => `
    width: ${isMobile ? MOBILE_CIRCLE_SIZE : DESKTOP_CIRCLE_SIZE}px;
    height: ${isMobile ? MOBILE_CIRCLE_SIZE : DESKTOP_CIRCLE_SIZE}px;
    font-size: ${
      isMobile ? defaultBaseFontSize * 0.75 : defaultBaseFontSize * 0.875
    }px; 
  `}
`;

const RadialProgressOverlay = styled.div`
  border-radius: 50%;
  margin: auto;
  background: #fff;
  text-align: center;

  ${({ isMobile }) => `
  padding-top: ${isMobile ? '16' : '18'}px;
  width: ${isMobile ? MOBILE_OVERLAY_WIDTH : DESKTOP_OVERLAY_WIDTH}px;
  height: ${isMobile ? MOBILE_OVERLAY_HEIGHT : DESKTOP_OVERLAY_HEIGHT}px;
`}
`;

const percentToDegrees = progressPercent => {
  const degrees = {
    17: [90, -50],
    20: [90, -45],
    25: [90, 0],
    33: [90, 20],
    40: [90, 40],
    50: [90, 90],
    60: [-90, -54],
    67: [-90, -22],
    75: [-90, 0],
    80: [-90, 18],
    83: [-90, 20],
    100: [-90, 90],
  };

  return degrees[progressPercent];
};

const Stepper = ({
  total,
  index,
  currentStepText,
  nextStepText,
  isMobile,
  ...rest
}) => {
  const progressPercent = Math.round((index / total) * 100);

  return (
    <Wrapper degrees={percentToDegrees(progressPercent)} {...rest}>
      <RadialProgressBar className="progress" isMobile={isMobile} {...rest}>
        <RadialProgressOverlay isMobile={isMobile}>
          {index} de {total}
        </RadialProgressOverlay>
      </RadialProgressBar>
      {currentStepText}
      {nextStepText}
    </Wrapper>
  );
};

Stepper.defaultProps = {
  total: 6,
  index: 1,
  skin: 'primary',
  theme: {
    colors,
    baseFontSize,
    spacing,
  },
  isMobile: false,
};

Stepper.propTypes = {
  total: Proptypes.number,
  index: Proptypes.number,
  currentStepText: Proptypes.string.isRequired,
  nextStepText: Proptypes.string.isRequired,
  skin: Proptypes.oneOf(['primary', 'success', 'warning']),
  theme: Proptypes.shape({
    colors: Proptypes.object,
    baseFontSize: Proptypes.number,
    spacing: Proptypes.object,
  }),
  isMobile: Proptypes.bool,
};

export default Stepper;
