import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  query,
  CSSVariables,
  BREAKPOINTS,
  hideCb,
  noGuttersCb,
} from './shared';

const Container = styled.div`
  width: ${props => props.width || '100%'};
  box-sizing: border-box;
  padding: var(--gutter);
  margin-right: auto;
  margin-left: auto;

  ${props => !props.fluid && query.small`max-width: ${BREAKPOINTS.small}px;`}
  ${props => !props.fluid && query.medium`max-width: ${BREAKPOINTS.medium}px;`}
  ${props => !props.fluid && query.large`max-width: ${BREAKPOINTS.large}px;`}
  ${props => !props.fluid && query.xlarge`max-width: ${BREAKPOINTS.xlarge}px;`}

  ${hideCb}
  ${noGuttersCb}
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
