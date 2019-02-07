import PropTypes from 'prop-types';
import styled from 'styled-components';
import { query, BREAKPOINTS, hideCb, noGuttersCb } from './shared';

const Container = styled.div`
  width: ${props => props.width || '100%'};
  box-sizing: border-box;
  padding: ${BREAKPOINTS.xsmall.gutter}px;
  margin-right: auto;
  margin-left: auto;

  ${props =>
    !props.fluid &&
    query.small`
    max-width: ${BREAKPOINTS.small.width}px;
    padding: ${BREAKPOINTS.small.gutter}px;
  `}
  ${props =>
    !props.fluid &&
    query.medium`
    max-width: ${BREAKPOINTS.medium.width}px;
  `}
  ${props =>
    !props.fluid &&
    query.large`
    max-width: ${BREAKPOINTS.large.width}px;
  `}
  ${props =>
    !props.fluid &&
    query.xlarge`
    max-width: ${BREAKPOINTS.xlarge.width}px;
  `}

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

export default Container;
