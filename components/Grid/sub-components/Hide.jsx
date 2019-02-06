import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hide } from './shared/media';

const Hide = styled.div`
  ${props => props.xlarge && hide.xlarge()}
  ${props => props.large && hide.large()}
  ${props => props.medium && hide.medium()}
  ${props => props.small && hide.small()}
  ${props => props.xsmall && hide.xsmall()}
`;

Hide.propTypes = {
  xlarge: PropTypes.bool,
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  xsmall: PropTypes.bool,
};

Hide.displayName = 'Hide';

export default Hide;
