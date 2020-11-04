import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  baseFontSize as defaultBaseFontSize,
  spacing,
} from '../../shared/theme';

const Content = styled.div`
  ${({
    small,
    theme: {
      baseFontSize,
      spacing: { xsmall },
    },
  }) => `
    font-size: ${small ? baseFontSize * 0.75 : baseFontSize * 0.875}px;
    margin: ${xsmall}px 0 0 0;
  `}
`;

const Description = ({ ...props }) => <Content {...props} />;

Description.displayName = 'Card.Description';

Description.propTypes = {
  /** default `font-size` is `14px`, with `small` prop defined the `font-size` is changed to `12px`. */
  small: PropTypes.bool,
  theme: PropTypes.shape({
    baseFontSize: PropTypes.number,
    spacing: PropTypes.object,
  }),
};

Description.defaultProps = {
  small: false,
  theme: {
    baseFontSize: defaultBaseFontSize,
    spacing,
  },
};

export default Description;
