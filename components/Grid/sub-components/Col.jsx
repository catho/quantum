import PropTypes from 'prop-types';
import styled from 'styled-components';
import { query, BREAKPOINTS, hideCb } from './shared';

const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  box-sizing: border-box;
  margin: calc(${BREAKPOINTS.xsmall.gutter}px / 2);

  ${props =>
    query.xsmall`width: calc(${props.xsmall || BREAKPOINTS.xsmall.columns} / ${
      BREAKPOINTS.xsmall.columns
    } * 100% - ${BREAKPOINTS.xsmall.gutter}px);`}
  ${props => query.small`
    width: calc(${props.small || props.xsmall || BREAKPOINTS.small.columns} / ${
    BREAKPOINTS.small.columns
  } * 100% - ${BREAKPOINTS.small.gutter}px);
    margin: calc(${BREAKPOINTS.small.gutter}px / 2);
  `}
  ${props => query.medium`
    width: calc(${props.medium ||
      props.small ||
      props.xsmall ||
      BREAKPOINTS.medium.columns} / ${BREAKPOINTS.medium.columns} * 100% - ${
    BREAKPOINTS.medium.gutter
  }px);
    margin: calc(${BREAKPOINTS.medium.gutter}px / 2);
  `}
  ${props => query.large`
    width: calc(${props.large ||
      props.medium ||
      props.small ||
      props.xsmall ||
      BREAKPOINTS.large.columns} / ${BREAKPOINTS.large.columns} * 100% - ${
    BREAKPOINTS.large.gutter
  }px);
    margin: calc(${BREAKPOINTS.large.gutter}px / 2);
  `}
  ${props => query.xlarge`
    width: calc(${props.xlarge ||
      props.large ||
      props.medium ||
      props.small ||
      props.xsmall ||
      BREAKPOINTS.xlarge.columns} / ${BREAKPOINTS.xlarge.columns} * 100% - ${
    BREAKPOINTS.xlarge.gutter
  }px);
    margin: calc(${BREAKPOINTS.xlarge.gutter}px / 2);
  `}

  ${hideCb}
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
