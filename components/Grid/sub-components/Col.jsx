import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GRID_COLUMNS, DEVICES } from './shared/grid-config';
import { query, hide } from './shared/media';

const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;

  ${props => props.hide && [].concat([], props.hide).map(prop => hide[prop] && hide[prop]())}

  ${props => props.phone && query.phone`width: ${(props.phone / GRID_COLUMNS) * 100}%;`}
  ${props => props.tablet && query.tablet`width: ${(props.tablet / GRID_COLUMNS) * 100}%;`}
  ${props => props.desktop && query.desktop`width: ${(props.desktop / GRID_COLUMNS) * 100}%;`}
  ${props => props.large && query.large`width: ${(props.large / GRID_COLUMNS) * 100}%;`}
  ${props => props.hd && query.hd`width: ${(props.hd / GRID_COLUMNS) * 100}%;`}
`;

Col.propTypes = {
  desktop: PropTypes.number,
  large: PropTypes.number,
  hd: PropTypes.number,
  hide: PropTypes.oneOfType([
    PropTypes.oneOf(DEVICES),
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

Col.displayName = 'Col';

export default Col;
