import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors';
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
  background-color: ${Colors.WHITE};
  border-radius: 8px;
  box-shadow: 0 2px 6px 0 ${Colors.SHADOW[50]};
  display: flex;
  flex-direction: column;
  position: relative;
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

export default Card;
