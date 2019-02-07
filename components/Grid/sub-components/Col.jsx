import PropTypes from 'prop-types';
import styled from 'styled-components';
import { query, BREAKPOINTS, hide } from './shared';

const collumnConfig = (
  { xsmall, small = xsmall, medium = small, large = medium, xlarge = large },
  breakpointName,
) => {
  const sizes = { xsmall, small, medium, large, xlarge };
  const columnSize = sizes[breakpointName];
  const { columns } = BREAKPOINTS[breakpointName];

  return query[breakpointName]`
    width: calc(${columnSize || columns} / ${columns} * 100% - var(--gutter));
    margin: calc(var(--gutter) / 2);
  `;
};

const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  box-sizing: border-box;

  ${props =>
    Object.keys(BREAKPOINTS).map(breakpoint =>
      collumnConfig(props, breakpoint),
    )}
  ${hide}
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
