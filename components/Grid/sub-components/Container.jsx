import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { query, BREAKPOINTS, hide, noGutters, CSSVariables } from './shared';

const maxWidth = ({ fluid }, name) =>
  !fluid && query[name]`max-width: ${BREAKPOINTS[name].width}px;`;

const Container = styled.div`
  width: ${props => props.width || '100%'};
  box-sizing: border-box;
  padding: var(--gutter);
  margin-right: auto;
  margin-left: auto;

  ${props =>
    Object.keys(BREAKPOINTS).map(breakpoint => maxWidth(props, breakpoint))}

  ${hide}
  ${noGutters}
`;

Container.propTypes = {
  width: PropTypes.string,
  fluid: PropTypes.bool,
  hide: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(BREAKPOINTS)),
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

Container.defaultProps = {
  fluid: false,
  'no-gutters': false,
};

Container.displayName = 'Container';

export default props => (
  <>
    <CSSVariables />
    <Container {...props} />
  </>
);
