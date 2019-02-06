import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BREAKPOINTS from './shared/breakpoints';
import GlobalVars from './shared/variables';
import { query, hide } from './shared/media';

const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  box-sizing: border-box;
  margin: var(--gutter);

  @media (min-width: 1px) {
    --grid-column: 4;
  }

  @media (min-width: 600px) {
    --grid-column: 8;
  }

  @media (min-width: 840px) {
    --grid-column: 12;
  }

  ${props =>
    props.hide &&
    [].concat([], props.hide).map(prop => hide[prop] && hide[prop]())}

  ${props =>
    props.xsmall &&
    query.xsmall`width: calc(${
      props.xsmall
    } / var(--grid-column) * 100% - calc(var(--gutter) * 2));`}
  ${props =>
    props.small &&
    query.small`width: calc(${
      props.small
    } / var(--grid-column) * 100% - calc(var(--gutter) * 2));`}
  ${props =>
    props.medium &&
    query.medium`width: calc(${
      props.medium
    } / var(--grid-column) * 100% - calc(var(--gutter) * 2));`}
  ${props =>
    props.large &&
    query.large`width: calc(${
      props.large
    } / var(--grid-column) * 100% - calc(var(--gutter) * 2));`}
  ${props =>
    props.xlarge &&
    query.xlarge`width: calc(${
      props.xlarge
    } / var(--grid-column) * 100% - calc(var(--gutter) * 2));`}
`;

Col.propTypes = {
  desktop: PropTypes.number,
  large: PropTypes.number,
  hd: PropTypes.number,
  hide: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(BREAKPOINTS)),
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

Col.displayName = 'Col';

export default props => (
  <>
    <GlobalVars />
    <Col {...props} />
  </>
);
