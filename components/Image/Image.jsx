import React from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image';
import Loader from '../Loader';

const Image = ({ src, alt, ...props }) => <Img src={src} alt={alt} decode={false} {...props} />;

Image.defaultProps = {
  loader: <Loader.Image />,
  unloader: null,
};

/**
 * Image component to render images on screen.
 */
Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  alt: PropTypes.string.isRequired,
  /**
   * Show an element before the image is loaded. This accepts any valid react element.
   */
  loader: PropTypes.node,
  /**
   * Show a fallback element if non of the images could be loaded.
   * This accepts any valid react element.
   */
  unloader: PropTypes.node,
};

export default Image;
