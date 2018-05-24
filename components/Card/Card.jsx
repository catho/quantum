import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Container, Thumbnail, HeaderText, Title, SupportText, Media, Divider } from '../Card/sub-components/';

const elevation = ({ elevation: level, hoverElevation: hoverLevel }) => {
  const elev = Number(level);
  const hovElev = hoverLevel ? Number(hoverLevel) : 0;

  return `
    box-shadow: 0 ${elev * elev}px ${(elev * elev) * 2}px rgba(0, 0, 0, 0.12), 0 ${elev}px ${elev * 2}px rgba(0, 0, 0, 0.24);

    ${hoverLevel && `&:hover {
      box-shadow: 0 ${hovElev * hovElev}px ${(hovElev * hovElev) * 2}px rgba(0, 0, 0, 0.12), 0 ${hovElev}px ${hovElev * 2}px rgba(0, 0, 0, 0.24);
    }`}
  `;
};

const CardWrapper = styled.div`
  background-color: #fff;
  border-radius: 2px;
  display: inline-block;
  position: relative;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  width: 300px;

  ${elevation};
`;

class Card extends React.Component {
  static Button = Button;
  static Container = Container;
  static Thumbnail = Thumbnail;
  static HeaderText = HeaderText;
  static Title = Title;
  static SupportText = SupportText;
  static Media = Media;
  static Divider = Divider;

  render = () => <CardWrapper {...this.props} />
}

Card.defaultProps = {
  elevation: 1,
  hoverElevation: 0,
};

Card.propTypes = {
  elevation: PropTypes.number,
  hoverElevation: PropTypes.number,
};

export default Card;
