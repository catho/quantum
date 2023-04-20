import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { hexToRgba, shadow } from '../shared';
import { colors } from '../shared/theme';

import {
  Header,
  HeaderText,
  Title,
  Description,
  Media,
  Thumbnail,
  Content,
  Footer,
} from './sub-components';
import alphaNumber, {
  isValidAlphaNumber,
} from './alphaNumberPropTypesValidator';

const CardWrapper = styled.article`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;

  ${shadow(1)}

  ${({
    theme: {
      colors: {
        neutral: { 0: neutral0 },
      },
    },
    backgroundOpacity,
  }) => `
    background-color: ${
      isValidAlphaNumber(backgroundOpacity)
        ? hexToRgba(neutral0, backgroundOpacity)
        : neutral0
    };
  `}
`;

class Card extends Component {
  static Header = Header;

  static HeaderText = HeaderText;

  static Title = Title;

  static Description = Description;

  static Media = Media;

  static Thumbnail = Thumbnail;

  static Content = Content;

  static Footer = Footer;

  render = () => <CardWrapper {...this.props} />;
}

Card.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.object,
  }),
  /** alpha value (number in range [0,1]) to set background opacity. 0 is fully transparent and 1 is fully opaque. */
  backgroundOpacity: alphaNumber,
};

Card.defaultProps = {
  theme: {
    colors,
  },
  backgroundOpacity: undefined,
};

export default Card;
