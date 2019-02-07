import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  query,
  CSSVariables,
  BREAKPOINTS,
  hideCb,
  collumnSize,
} from './shared';

const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  box-sizing: border-box;
  margin: calc(var(--gutter) / 2);

  @media (min-width: 1px) {
    --grid-column: 4;
  }

  @media (min-width: 600px) {
    --grid-column: 8;
  }

  @media (min-width: 840px) {
    --grid-column: 12;
  }

  ${hideCb}

  ${props => collumnSize(props.xsmall, query.xsmall)}
  ${props => collumnSize(props.small, query.small)}
  ${props => collumnSize(props.medium, query.medium)}
  ${props => collumnSize(props.large, query.large)}
  ${props => collumnSize(props.xlarge, query.xlarge)}
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

export default props => (
  <>
    <CSSVariables />
    <Col {...props} />
  </>
);
