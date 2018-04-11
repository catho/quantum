import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import theme from '../../theme';
import Colors from '../Colors';

const animationDuration = '0.4s';

const Overlay = styled.div`
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(${Colors.NEUTRAL.GRAY.WHITE}, .8);
  z-index: 10;
  // opacity: 0;
  animation-duration: ${animationDuration};
  animation-fill-mode: forwards;

  ${props => props.in && `
    animation-name: overlay-in;
  `}

  ${props => props.out && `
    animation-name: overlay-out;
  `}

  @keyframes overlay-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes overlay-out {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;

const LoadingWrapper = styled.div`
  ${theme.mixins.transition()};

  width: ${theme.sizes.loading};
  height: ${theme.sizes.loading};
  border-radius: ${theme.sizes.loading};
  animation-duration: ${animationDuration};
  animation-fill-mode: forwards;

  ${props => props.in && `
    animation-name: loader-in;
  `}

  ${props => props.out && `
    animation-name: loader-out;
  `}

  @keyframes loader-in {
    0% {
      transform: scale(0);
    }

    60% {
      transform: scale(1.2);
    }
  }

  @keyframes loader-out {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(0);
      opacity: 0;
    }
  }
`;

const StyledSvg = styled.svg`
  animation: rotate 2s linear infinite;

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;

const StyledCircle = styled.circle`
  fill: none;
  stroke: ${Colors.PRIMARY.BLUE.PEACOCK};
  stroke-width: 3;
  stroke-dasharray: 110, 200;
  stroke-dashoffset: -10;
  animation: dash 2s ease-in-out infinite;
  stroke-linecap: round;

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 110, 200;
      stroke-dashoffset: -15;
    }

    100% {
      stroke-dasharray: 110, 200;
      stroke-dashoffset: -72;
    }
  }
`;

const Loading = ({
  viewBox,
  cx,
  cy,
  r,
}) => (
  <Overlay>
    <LoadingWrapper>
      <StyledSvg viewBox={viewBox} >
        <StyledCircle cx={cx} cy={cy} r={r} />
      </StyledSvg>
    </LoadingWrapper>
  </Overlay>
);

Loading.defaultProps = {
  viewBox: '25 25 50 50',
  cx: '50',
  cy: '50',
  r: '12',
  // active: true,
};

Loading.propTypes = {
  viewBox: PropTypes.string,
  cx: PropTypes.string,
  cy: PropTypes.string,
  r: PropTypes.string,
  // active: PropTypes.bool,
};

export default Loading;
