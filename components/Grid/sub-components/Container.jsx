import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hide, noGutters } from './shared';
import { breakpoints } from '../../shared/theme';

const Container = styled.div`
  width: ${props => props.width || '100%'};
  box-sizing: border-box;
  padding: var(--gutter);
  margin-right: auto;
  margin-left: auto;

  ${({ fluid }) => !fluid && 'max-width: 95%;'}
  ${hide}
  ${noGutters}

  & & {
    max-width: 100%;
  }
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
