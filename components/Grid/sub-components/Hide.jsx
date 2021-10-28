import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hideQueries } from './shared/media';
import theme from '../../shared/theme';

const Hide = styled.div`
  ${({ theme: { breakpoints }, xsmall, small, medium, large }) => {
    let style = '';

    const hideBreakpoint = hideQueries(breakpoints);

    style += xsmall ? hideBreakpoint.xsmall() : '';
    style += small ? hideBreakpoint.small() : '';
    style += medium ? hideBreakpoint.medium() : '';
    style += large ? hideBreakpoint.large() : '';

    return style;
  }}
`;

Hide.defaultProps = { theme };

Hide.propTypes = {
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
