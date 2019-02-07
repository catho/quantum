import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BREAKPOINTS, query } from './shared';

const columnSize = (
  { xsmall, small = xsmall, medium = small, large = medium, xlarge = large },
  breakpoint,
) => {
  const q = query[breakpoint];
  const size =
    {
      xsmall,
      small,
      medium,
      large,
      xlarge,
    }[breakpoint] || 12;

  return q`grid-column-start: span ${size};`;
};

const Col = styled.div`
  ${props =>
    Object.keys(BREAKPOINTS).map(breakpoint => columnSize(props, breakpoint))}
  word-break: break-word;
  box-sizing: border-box;
`;

Col.propTypes = {
  xsmall: PropTypes.number,
  small: PropTypes.number,
  medium: PropTypes.number,
  large: PropTypes.number,
  xlarge: PropTypes.number,
  hide: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(BREAKPOINTS)),
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

Col.displayName = 'Col';

export default Col;
