import styled from 'styled-components';

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
  ${({
    theme: {
      colors: { neutral },
    },
  }) => `
    background: ${neutral[0]};
  `}
  border-radius: 50%;
  margin: auto;
  text-align: center;

  ${({
    isMobile,
    theme: {
      spacing: { medium },
    },
  }) => `
  padding-top: ${isMobile ? medium : medium * 1.125}px;
  width: ${isMobile ? MOBILE_OVERLAY_WIDTH : DESKTOP_OVERLAY_WIDTH}px;
  height: ${isMobile ? MOBILE_OVERLAY_HEIGHT : DESKTOP_OVERLAY_HEIGHT}px;
`}
`;

const TextWrapper = styled.div`
  ${({
    theme: {
      spacing: { medium },
    },
  }) => `
      margin-left: ${medium}px;
  `}
  display: inline-block;
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

export {
  Wrapper,
  RadialProgressBar,
  RadialProgressOverlay,
  TextWrapper,
  CurrentText,
  NextStep,
};
