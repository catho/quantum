import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hideQueries } from './shared/media';

const Hide = styled.div`
  ${props => props.xlarge && hideQueries.xlarge()}
  ${props => props.large && hideQueries.large()}
  ${props => props.medium && hideQueries.medium()}
  ${props => props.small && hideQueries.small()}
  ${props => props.xsmall && hideQueries.xsmall()}
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
