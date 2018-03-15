import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hide } from './shared/media';

const Hide = styled.div`
  ${props => props.phone && hide.phone()}
  ${props => props.tablet && hide.tablet()}
  ${props => props.desktop && hide.desktop()}
  ${props => props.large && hide.large()}
  ${props => props.hd && hide.hd()}
`;

Hide.propTypes = {
  phone: PropTypes.bool,
  tablet: PropTypes.bool,
  desktop: PropTypes.bool,
  large: PropTypes.bool,
  hd: PropTypes.bool,
};

export default Hide;
