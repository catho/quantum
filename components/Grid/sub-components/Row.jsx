import PropTypes from 'prop-types';
import styled from 'styled-components';
import BREAKPOINTS from './shared/breakpoints';
import { hide } from './shared/media';

const noGutters = `
  margin-right: 0;
  margin-left: 0;

  > [class*="Col-"] {
    padding-right: 0;
    padding-left: 0;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* margin-right: -15px;
  margin-left: -15px; */

  ${props =>
    props.hide &&
    [].concat([], props.hide).map(prop => hide[prop]())} ${props =>
    props['no-gutters'] && noGutters};
`;

Row.propTypes = {
  desktop: PropTypes.number,
  large: PropTypes.number,
  hd: PropTypes.number,
  'no-gutters': PropTypes.bool,
  hide: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(BREAKPOINTS)),
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

Row.defaultProps = {
  'no-gutters': false,
};

Row.displayName = 'Row';

export default Row;
