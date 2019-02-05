import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BREAKPOINTS, DEVICES } from './shared/grid-config';
import { query, hide } from './shared/media';

const Container = styled.div`
  width: ${props => props.width || '100%'};
  box-sizing: border-box;
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;

  ${props => props.hide && [].concat([], props.hide).map(prop => hide[prop]())}

  ${props => !props.fluid && query.medium`max-width: ${BREAKPOINTS.medium}px;`}
  ${props => !props.fluid && query.large`max-width: ${BREAKPOINTS.large}px;`}
  ${props => !props.fluid && query.xlarge`max-width: ${BREAKPOINTS.xlarge}px;`}
`;

Container.propTypes = {
  desktop: PropTypes.number,
  large: PropTypes.number,
  hd: PropTypes.number,
  fluid: PropTypes.bool,
  hide: PropTypes.oneOfType([
    PropTypes.oneOf(DEVICES),
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

Container.defaultProps = {
  fluid: false,
};

Container.displayName = 'Container';

export default Container;
