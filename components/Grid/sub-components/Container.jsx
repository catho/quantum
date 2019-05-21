import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hide, noGutters } from './shared';
import { theme as defaultTheme } from '../../shared';

const Container = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding: var(--gutter);

  ${({ fluid }) => !fluid && 'max-width: 95%;'}
  ${hide}
  ${noGutters}

  & & {
    max-width: 100%;
  }
`;

Container.propTypes = {
  fluid: PropTypes.bool,
  hide: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(defaultTheme.breakpoints)),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  theme: PropTypes.shape({
    breakpoints: PropTypes.object,
  }),
  'no-gutters': PropTypes.bool,
};

Container.defaultProps = {
  fluid: false,
  'no-gutters': false,
  theme: defaultTheme,
};

Container.displayName = 'Container';

export default Container;
