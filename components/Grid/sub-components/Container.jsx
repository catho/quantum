import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SIZES, DEVICES } from './shared/grid-config';
import { query, hide } from './shared/media';

const Container = styled.div`
  width: ${props => props.width || '100%'};
  box-sizing: border-box;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  ${props => props.hide && [].concat([], props.hide).map(prop => hide[prop]())}

  ${props => !props.fluid && query.desktop`max-width: ${SIZES.desktop}px;`}
  ${props => !props.fluid && query.large`max-width: ${SIZES.large}px;`}
  ${props => !props.fluid && query.hd`max-width: ${SIZES.hd}px;`}
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
