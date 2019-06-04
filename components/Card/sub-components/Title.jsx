import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { baseFontSize as defaultBaseFontSize } from '../../shared/theme';

const Heading = styled.h2`
  font-size: ${({ small, theme: { baseFontSize } }) =>
    `${small ? baseFontSize * 1.25 : baseFontSize * 1.5}`}px;
  font-weight: 600;
  margin: 0;
`;

const Title = ({ ...props }) => <Heading {...props} />;

Title.displayName = 'Card.Title';

Title.propTypes = {
  /** default `font-size` is `24px`, with `small` prop defined the `font-size` is changed to `20px`. */
  small: PropTypes.bool,
  theme: PropTypes.shape({
    baseFontSize: PropTypes.number,
  }),
};

Title.defaultProps = {
  small: false,
  theme: {
    baseFontSize: defaultBaseFontSize,
  },
};

export default Title;
