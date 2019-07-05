import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../../shared/theme';

const Image = styled.img`
  border-radius: ${({ rounded }) => (rounded ? '50%' : '4px')};
  display: inline-block;
  height: 72px;
  width: 72px;

  ${({
    rounded,
    theme: {
      colors: {
        neutral: { 300: neutral300 },
      },
    },
  }) => `
    background-color: ${neutral300};
    border-radius: ${rounded ? '50%' : '4px'};
  `}
`;

const Thumbnail = ({ ...props }) => <Image {...props} />;

Thumbnail.displayName = 'Card.Thumbnail';

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  /** Display a rounded Thumbnail. */
  rounded: PropTypes.bool,
  theme: PropTypes.shape({
    colors: PropTypes.object,
  }),
};

Thumbnail.defaultProps = {
  rounded: false,
  theme: {
    colors,
  },
};

export default Thumbnail;
