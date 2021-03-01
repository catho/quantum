import React from 'react';
import Slider from 'react-slick';
import Proptypes from 'prop-types';
import SlickSliderWrapper from './slick';
import { colors, spacing, baseFontSize } from '../shared/theme';
import Arrow from './sub-components/Arrow';
import CarouselCard from './sub-components/CarouselCard';

const Carousel = props => {
  const { theme, dotsPagination, cards, cardSize } = props;

  const settings = {
    dots: cardSize !== 'small' ? dotsPagination : false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <Arrow theme={theme} targeting="right" />,
    prevArrow: <Arrow theme={theme} targeting="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <SlickSliderWrapper theme={theme}>
      <Slider {...settings}>
        {cards.map(card => (
          <CarouselCard
            key={card.title}
            card={card}
            cardSize={cardSize}
            theme={theme}
          />
        ))}
      </Slider>
    </SlickSliderWrapper>
  );
};

Carousel.defaultProps = {
  dotsPagination: true,
  cardSize: 'medium',
  theme: {
    colors,
    spacing,
    baseFontSize,
  },
};

Carousel.propTypes = {
  /** this prop enable dots pagination (only for 'medium' and 'large' card sizes) */
  dotsPagination: Proptypes.bool,
  /** this prop sets what size of card will render */
  cardSize: Proptypes.oneOf(['small', 'medium', 'large']),
  /** this prop receives a object with all content to render in component */
  cards: Proptypes.arrayOf(
    Proptypes.shape({
      imagePath: Proptypes.string,
      imageDescription: Proptypes.string,
      title: Proptypes.string,
      description: Proptypes.string,
    }),
  ).isRequired,
  theme: Proptypes.shape({
    colors: Proptypes.object,
    spacing: Proptypes.object,
    baseFontSize: Proptypes.number,
  }),
};

export default Carousel;
