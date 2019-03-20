import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../../Colors';

const Image = styled.img`
  background-color: ${Colors.BLACK['200']};
  border-radius: ${({ rounded }) => (rounded ? '50%' : '4px')};
  display: inline-block;
  height: 72px;
  width: 72px;
`;

const Thumbnail = ({ ...props }) => <Image {...props} />;

Thumbnail.displayName = 'Card.Thumbnail';

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  /** Display a rounded Thumbnail. */
  rounded: PropTypes.bool,
};

Thumbnail.defaultProps = {
  rounded: false,
};

export default Thumbnail;
