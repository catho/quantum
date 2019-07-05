import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { spacing, colors } from '../../shared/theme';

const Wrapper = styled.div`
  padding-bottom: 56.25%;
  position: relative;
  overflow: hidden;

  ${({
    theme: {
      colors: {
        neutral: { 300: neutral300 },
      },
      spacing: { small },
    },
  }) => `
    margin-top: ${small}px;
    background-color: ${neutral300};
  `}
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;

const Media = ({ className, style, theme, ...props }) => (
  <Wrapper className={className} style={style} theme={theme}>
    <Image {...props} />
  </Wrapper>
);

Media.displayName = 'Card.Media';

Media.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
  }),
};

Media.defaultProps = {
  className: undefined,
  style: undefined,
  theme: {
    colors,
    spacing,
  },
};

export default Media;
