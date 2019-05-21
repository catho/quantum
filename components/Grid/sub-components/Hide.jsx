import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hideQueries } from './shared/media';
import theme from '../../shared/theme';

const Hide = styled.div`
  ${({ theme: { breakpoints }, xsmall, small, medium, large, xlarge }) => {
    let style = '';

    const hideBreapoint = hideQueries(breakpoints);

    style += xsmall ? hideBreapoint.xsmall() : '';
    style += xlarge ? hideBreapoint.xlarge() : '';
    style += small ? hideBreapoint.small() : '';
    style += medium ? hideBreapoint.medium() : '';
    style += large ? hideBreapoint.large() : '';

    return style;
  }}
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
