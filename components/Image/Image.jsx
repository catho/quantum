import React from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image';

const Image = ({ src, alt, ...props }) => <Img src={src} alt={alt} {...props} />;

Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
