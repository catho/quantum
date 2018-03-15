import PropTypes from 'prop-types';

export default PropTypes.shape({
  href: PropTypes.string,
  text: PropTypes.string,
  target: PropTypes.string,
  isLinkImg: PropTypes.bool,
  isTitle: PropTypes.bool,
  imgSrc: PropTypes.string,
  imgWidth: PropTypes.string,
});
