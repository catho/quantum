/* eslint-disable no-console */
import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import { colors, baseFontSize, spacing } from '../shared/theme';

const limitChars = {
  desktopCurrent: 20,
  desktopNext: 50,
  mobileCurrent: 35,
  mobileNext: 50,
};

const MOBILE_CIRCLE_SIZE = 64;
const DESKTOP_CIRCLE_SIZE = 72;
const DESKTOP_OVERLAY_WIDTH = 60;
const DESKTOP_OVERLAY_HEIGHT = 40;
const MOBILE_OVERLAY_WIDTH = 52;
const MOBILE_OVERLAY_HEIGHT = 34;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

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

const TextWrapper = styled.div`
  display: inline-block;
  margin-left: 16px;
  width: 300px;

  strong,
  small {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const CurrentText = styled.strong`
  display: block;
  ${({ isMobile }) => `
      font-size: ${isMobile ? 20 : 28}px;
      height: ${isMobile ? 26 : 36}px;
    `};
`;

const NextStep = styled.small`
  display: block;
  ${({ isMobile }) => `
      font-size: ${isMobile ? 14 : 16}px;
    `};
`;

const limitCharsWarning = (isMobile, currentText, nextText) => {
  if (isMobile) {
    if (currentText.length > limitChars.mobileCurrent)
      console.warn(
        `Stepper component: ${currentText} text was exceeded the limit of ${limitChars.mobileCurrent} chars. This problem may affect the user experience.`,
      );
    if (nextText.length > limitChars.mobileNext)
      console.warn(
        `Stepper component: ${nextText} text was exceeded the limit of ${limitChars.mobileNext} chars. This problem may affect the user experience.`,
      );
  } else {
    if (currentText.length > limitChars.desktopCurrent)
      console.warn(
        `Stepper component: ${currentText} text was exceeded the limit of ${limitChars.desktopCurrent} chars. This problem may affect the user experience.`,
      );
    if (nextText.length > limitChars.desktopNext)
      console.warn(
        `Stepper component: ${nextText} text was exceeded the limit of ${limitChars.desktopNext} chars. This problem may affect the user experience.`,
      );
  }
};

const handlerValuePrepare = total => {
  if (total > 6 && total > 0) return 6;
  if (total < 1) return 1;

  return total;
};

const handlerStepPrepare = (index, total) => {
  if (index <= total) {
    const _index = handlerValuePrepare(index);
    return _index;
  }

  console.warn(
    'Stepper component: the "index" prop can not be bigger than "total" prop. The index value was settled now to 1.',
  );
  return 1;
};

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
  const _totalPrepared = handlerValuePrepare(total);
  const _indexPrepared = handlerStepPrepare(index, total);
  const _isLastStep = _totalPrepared === _indexPrepared;
  const _progressPercent = Math.round((_indexPrepared / _totalPrepared) * 100);
  limitCharsWarning(isMobile, currentStepText, nextStepText);

  return (
    <Wrapper degrees={percentToDegrees(_progressPercent)} {...rest}>
      <RadialProgressBar className="progress" isMobile={isMobile} {...rest}>
        <RadialProgressOverlay isMobile={isMobile}>
          {_indexPrepared} de {_totalPrepared}
        </RadialProgressOverlay>
      </RadialProgressBar>
      <TextWrapper>
        <CurrentText isMobile={isMobile}>{currentStepText}</CurrentText>
        <NextStep isMobile={isMobile}>
          {' '}
          {!_isLastStep && 'próximo: '} {nextStepText}
        </NextStep>
      </TextWrapper>
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
