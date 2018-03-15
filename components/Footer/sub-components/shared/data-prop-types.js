import PropTypes from 'prop-types';
import linkShape from './link-shape';

export default {
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  hasTitle: PropTypes.bool,
  bgColor: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.shape({
    hasSideSeparator: PropTypes.bool,
    links: PropTypes.arrayOf(linkShape),
  }).isRequired,
};
