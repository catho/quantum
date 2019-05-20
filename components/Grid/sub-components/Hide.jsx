import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hideQueries } from './shared/media';
import theme from '../../shared/theme';

const Hide = styled.div`
  ${({ theme: { breakpoints }, xsmall }) =>
    xsmall && hideQueries(breakpoints).xsmall()}
  ${({ theme: { breakpoints }, small }) =>
    small && hideQueries(breakpoints).small()}
  ${({ theme: { breakpoints }, medium }) =>
    medium && hideQueries(breakpoints).medium()}
  ${({ theme: { breakpoints }, large }) =>
    large && hideQueries(breakpoints).large()}
  ${({ theme: { breakpoints }, xlarge }) =>
    xlarge && hideQueries(breakpoints).xlarge()}
`;

Hide.defaultProps = { theme };

Hide.propTypes = {
  xlarge: PropTypes.bool,
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  xsmall: PropTypes.bool,
  theme: PropTypes.shape({
    breakpoints: PropTypes.object,
  }),
};

Hide.displayName = 'Hide';

export default Hide;
