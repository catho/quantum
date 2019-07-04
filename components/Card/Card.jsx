import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { shadow } from '../shared';
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

const CardWrapper = styled.article`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;

  ${shadow(1)}

  ${({
    theme: {
      colors: {
        neutral: { 100: neutral100 },
      },
    },
  }) => `
    background-color: ${neutral100};
  `}
`;

class Card extends React.Component {
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
};

Card.defaultProps = {
  theme: {
    colors,
  },
};

export default Card;
