import PropTypes from 'prop-types';
import styled from 'styled-components';
import { query, hide, noGutters } from './shared';
import { breakpoints } from '../../shared/theme';

const maxWidthStyle = ({ name, maxWidth }, fluid) =>
  !fluid && Boolean(maxWidth) && query[name]`max-width: ${maxWidth}px;`;

const Container = styled.div`
  width: ${props => props.width || '100%'};
  box-sizing: border-box;
  padding: var(--gutter);
  margin-right: auto;
  margin-left: auto;

  ${({ fluid }) =>
    Object.entries(breakpoints)
      .map(([name, value]) => ({ name, ...value }))
      .sort((a, b) => {
        if (!a.maxWidth) {
          return 1;
        }

        if (!b.maxWidth) {
          return -1;
        }

        return a.maxWidth - b.maxWidth;
      })
      .map(breakpoint => maxWidthStyle(breakpoint, fluid))}

  ${hide}
  ${noGutters}
`;

Container.propTypes = {
  width: PropTypes.string,
  fluid: PropTypes.bool,
  hide: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(breakpoints)),
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

Container.defaultProps = {
  fluid: false,
  'no-gutters': false,
};

Container.displayName = 'Container';

export default Container;
