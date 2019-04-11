import PropTypes from 'prop-types';
import styled from 'styled-components';
import { query, hide, noGutters } from './shared';
import { BREAKPOINTS } from '../../shared';

const maxWidth = ({ name }, { width: nextWidth = 0 } = {}, fluid) =>
  !fluid && nextWidth && query[name]`max-width: ${nextWidth}px;`;

const Container = styled.div`
  width: ${props => props.width || '100%'};
  box-sizing: border-box;
  padding: var(--gutter);
  margin-right: auto;
  margin-left: auto;

  ${({ fluid }) =>
    Object.entries(BREAKPOINTS)
      .map(([name, value]) => ({ name, ...value }))
      .sort((a, b) => a.width - b.width)
      .map((breakpoint, i, list) => {
        return maxWidth(breakpoint, list[i + 1], fluid);
      })}

  ${hide}
  ${noGutters}
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
