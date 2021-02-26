import React from 'react';
import Proptypes from 'prop-types';
import ThumbCard from './ThumbCard';
import DescriptionCard from './DescriptionCard';
import { colors, spacing, baseFontSize } from '../../shared/theme';

const renderCarouselCardSize = (card, cardSize) => {
  if (cardSize === 'small') return <ThumbCard card={card} />;

  return <DescriptionCard card={card} cardSize={cardSize} />;
};

const CarouselCard = ({ card, cardSize, theme }) => (
  <>{renderCarouselCardSize(card, cardSize, theme)}</>
);

CarouselCard.defaultProps = {
  card: {
    imagePath: 'http://',
    imageDescription: 'card image a11y description',
    title: 'card title',
    description: 'card description',
  },
  theme: {
    colors,
    spacing,
    baseFontSize,
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
  theme: Proptypes.shape({
    colors: Proptypes.object,
    spacing: Proptypes.object,
    baseFontSize: Proptypes.number,
  }),
};

export default CarouselCard;
