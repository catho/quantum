import styled from 'styled-components';
import { BREAKPOINTS } from '../shared';
import { query } from '../Grid/sub-components/shared';

const MOBILE_CIRCLE_SIZE = 64;
const DESKTOP_CIRCLE_SIZE = 72;
const DESKTOP_OVERLAY_WIDTH = 60;
const DESKTOP_OVERLAY_HEIGHT = 40;
const MOBILE_OVERLAY_WIDTH = 52;
const MOBILE_OVERLAY_HEIGHT = 34;

const mediaQueries = query(BREAKPOINTS);
const desktopBreakpoint = mediaQueries.medium;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 300px;

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

  width: ${MOBILE_CIRCLE_SIZE}px;
  height: ${MOBILE_CIRCLE_SIZE}px;

  ${({ theme: { baseFontSize } }) => `
    font-size: ${baseFontSize * 0.75}px; 
  `}

  ${desktopBreakpoint`
    width: ${DESKTOP_CIRCLE_SIZE}px;
    height: ${DESKTOP_CIRCLE_SIZE}px;

    ${({ theme: { baseFontSize } }) => `
    font-size: ${baseFontSize * 0.875}px; 
    `}
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
    theme: {
      spacing: { medium },
    },
  }) => `
  padding-top: ${medium}px;
`}

  ${desktopBreakpoint`
    ${({
      theme: {
        spacing: { medium },
      },
    }) => `
    padding-top: ${medium * 1.125}px;
  `}
`}

  width: ${MOBILE_OVERLAY_WIDTH}px;
  height: ${MOBILE_OVERLAY_HEIGHT}px;

  ${desktopBreakpoint`
    width: ${DESKTOP_OVERLAY_WIDTH}px;
    height: ${DESKTOP_OVERLAY_HEIGHT}px;
  `};

`;

const TextWrapper = styled.div`
  ${({
    theme: {
      spacing: { medium },
    },
  }) => `
      margin-left: ${medium}px;
  `}

  width: 210px;
  ${desktopBreakpoint`
    width: 300px;
  `}

  display: inline-block;

  strong,
  small {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const CurrentText = styled.strong`
  display: block;
  height: 26px;
  ${({ theme: { baseFontSize } }) => `
    font-size: ${baseFontSize * 1.25}px;
  `};

  ${desktopBreakpoint`
    ${({ theme: { baseFontSize } }) => `
      font-size: ${baseFontSize * 1.75}px;
    `};
    height: 36px;
  `}
`;

const NextStep = styled.small`
  display: block;
  ${({ theme: { baseFontSize } }) => `
    font-size: ${baseFontSize * 0.875}px;
  `};
  ${desktopBreakpoint`
    ${({ theme: { baseFontSize } }) => `
      font-size: ${baseFontSize}px;
  `};
  `}
`;

export {
  Wrapper,
  RadialProgressBar,
  RadialProgressOverlay,
  TextWrapper,
  CurrentText,
  NextStep,
};
