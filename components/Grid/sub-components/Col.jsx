import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DEVICES } from './shared/grid-config';
import { query, hide } from './shared/media';

const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;

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
    query.xsmall`width: calc(${props.xsmall} / var(--grid-column) * 100)%;`}
  ${props =>
    props.small &&
    query.small`width: calc(${props.small} / var(--grid-column) * 100)%;`}
  ${props =>
    props.medium &&
    query.medium`width: calc(${props.medium} / var(--grid-column) * 100)%;`}
  ${props =>
    props.large &&
    query.large`width: calc(${props.large} / var(--grid-column) * 100)%;`}
  ${props =>
    props.xlarge &&
    query.xlarge`width: calc(${props.xlarge} / var(--grid-column) * 100)%;`}
`;

Col.propTypes = {
  desktop: PropTypes.number,
  large: PropTypes.number,
  hd: PropTypes.number,
  hide: PropTypes.oneOfType([
    PropTypes.oneOf(DEVICES),
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

Col.displayName = 'Col';

export default Col;
