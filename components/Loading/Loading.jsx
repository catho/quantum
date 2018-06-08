import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import theme from '../../theme';
import Colors from '../Colors';

const sizeStr = ({ size }) => `${size}px`;

const Wrapper = styled.div`
  ${({ theme: t }) => t.mixins.transition()};
  width: ${sizeStr};
  height: ${sizeStr};
  border-radius: ${sizeStr};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  animation-name: ${({ visible }) => (visible ? 'show;' : 'hide;')}

  @keyframes show {
    0% {
      transform: scale(0);
    }

    60% {
      transform: scale(1.2);
    }
  }

  @keyframes hide {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(0);
      opacity: 0;
    }
  }
`;

const Svg = styled.svg`
  animation: rotate 2s linear infinite;

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Circle = styled.circle`
  fill: none;
  stroke: ${Colors.PRIMARY['500']};
  stroke-width: 3;
  stroke-dasharray: 110, 200;
  stroke-dashoffset: -10;
  stroke-linecap: round;
  animation: dash 2s ease-in-out infinite;

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

/** An svg stand alone loading element,
 */
const Loading = ({
  ...rest
}) => (
  <ThemeProvider theme={theme}>
    <Wrapper {...rest} >
      <Svg viewBox="25 25 50 50">
        <Circle cx="50" cy="50" r="12" />
      </Svg>
    </Wrapper>
  </ThemeProvider>
);

Loading.defaultProps = {
  size: Number(theme.sizes.loading.replace('px', '')),
  visible: true,
};

Loading.propTypes = {
  /** SVG canvas size, in px */
  size: PropTypes.number,
  /** Toggles the visibilitty */
  visible: PropTypes.bool,
};

export default Loading;
