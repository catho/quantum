import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import Card from '../../Card';

const cardHeights = {
  medium: 240,
  large: 264,
};

const AdaptedCard = styled(Card)`
  margin: 2px;
  text-align: center;
  width: 224px;
  ${({ cardHeight }) => `height: ${cardHeight}px;`}
`;

const Content = styled(Card.Content)`
  height: 100%;
`;

const handleCardHeight = cardSize => cardHeights[cardSize];

const DescriptionCard = ({ card, cardSize }) => (
  <>
    <AdaptedCard cardHeight={handleCardHeight(cardSize)}>
      <Content>
        <AdaptedCard.Media src={card.imagePath} alt={card.imageDescription} />
        <AdaptedCard.Title small>{card.title}</AdaptedCard.Title>
        <AdaptedCard.Description>{card.description} </AdaptedCard.Description>
      </Content>
    </AdaptedCard>
  </>
);

DescriptionCard.defaultProps = {
  card: {
    imagePath: 'http://',
    imageDescription: 'card image a11y description',
    title: 'card title',
    description: 'card description',
  },
};

DescriptionCard.propTypes = {
  card: Proptypes.shape({
    imagePath: Proptypes.string,
    imageDescription: Proptypes.string,
    title: Proptypes.string,
    description: Proptypes.string,
  }),
  cardSize: Proptypes.oneOf(['medium', 'large']).isRequired,
};

export default DescriptionCard;
