import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import theme from '../../theme';
import Colors from '../Colors';

const Wrapper = styled.div`
  ${props => props.theme.mixins.transition()};

  width: ${props => props.theme.sizes.loading};
  height: ${props => props.theme.sizes.loading};
  border-radius: ${props => props.theme.sizes.loading};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  animation-name: ${props => (props.visible ? 'show;' : 'hide;')}

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
  stroke: ${Colors.PRIMARY.BLUE.PEACOCK};
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
 * to be used in fixed overflows and request dependent user inputs
 */
const Loading = ({
  viewBox, cx, cy, r, ...rest
}) => (
  <ThemeProvider theme={theme}>
    <Wrapper {...rest}>
      <Svg viewBox={viewBox}>
        <Circle cx={cx} cy={cy} r={r} />
      </Svg>
    </Wrapper>
  </ThemeProvider>
);

Loading.defaultProps = {
  visible: true,
  viewBox: '25 25 50 50',
  cx: 50,
  cy: 50,
  r: 12,
};

Loading.propTypes = {
  /** Toggles the visibilitty */
  visible: PropTypes.bool,
  /**
   * For the svg html tag, it allows you to specify that a given set of graphics
   * stretch to fit a particular container element.
   * The value of the viewBox attribute is a list of four numbers min-x, min-y, width and height,
   * separated by whitespace and/or a comma, which specify a rectangle in user space which
   * should be mapped to the bounds of the viewport established by the given element.
   *
   */
  viewBox: PropTypes.string,
  /** For the circle html tag, it defines the x-axis coordinate of the center element */
  cx: PropTypes.number,
  /** For the circle html tag, it defines the y-axis coordinate of the center element */
  cy: PropTypes.number,
  /** For the circle html tag, it defines the radius of the element */
  r: PropTypes.number,
};

export default Loading;
