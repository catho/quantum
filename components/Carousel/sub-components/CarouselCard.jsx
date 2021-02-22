import React from 'react';
import Proptypes from 'prop-types';
import ThumbCard from './ThumbCard';
import DescriptionCard from './DescriptionCard';

const renderCarouselCardSize = (card, cardSize) => {
  if (cardSize === 'small') return <ThumbCard card={card} />;

  return <DescriptionCard card={card} cardSize={cardSize} />;
};

const CarouselCard = ({ card, cardSize }) => (
  <>{renderCarouselCardSize(card, cardSize)}</>
);

CarouselCard.defaultProps = {
  card: {
    imagePath: 'http://',
    imageDescription: 'card image a11y description',
    title: 'card title',
    description: 'card description',
  },
};

CarouselCard.propTypes = {
  card: Proptypes.shape({
    imagePath: Proptypes.string,
    imageDescription: Proptypes.string,
    title: Proptypes.string,
    description: Proptypes.string,
  }),
  cardSize: Proptypes.oneOf(['small', 'medium', 'large']).isRequired,
};

export default CarouselCard;
