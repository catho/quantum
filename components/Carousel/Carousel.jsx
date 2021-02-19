import React from 'react';
import Slider from "react-slick";
import Proptypes from 'prop-types';
import { SlickSliderWrapper } from './slick'
import { colors } from '../shared/theme';
import Arrow from './sub-components/Arrow'
import CarouselCard from './sub-components/CarouselCard';

const Carousel = (props) => {
  const {theme, dotsPagination, infiniteScroll, cardsToShow, cards} = props;

  const settings = {
      dots: dotsPagination,
      infinite: infiniteScroll,
      speed: 500,
      slidesToShow: cardsToShow,
      slidesToScroll: 1,
      nextArrow: <Arrow theme={theme} targeting="right" />,
      prevArrow: <Arrow theme={theme} targeting="left" />,
    };

  return (
    <SlickSliderWrapper>
      <Slider {...settings}>
        {cards.map(card => (
          <CarouselCard key={card.title} card={card} />
        ))}
    </Slider>
  </SlickSliderWrapper>
  )};

  Carousel.defaultProps = {
    dotsPagination: true,
    infiniteScroll: true,
    cardsToShow: 3,
    cardSize: 'medium',
    cards: [
      {
        imagePath: 'dddd',
        imageDescription: 'dddd',
        title: 'sfdsf',
        description: 'htrhtrghtr',
      }
    ],
    theme: {
      colors,
    },
  };
  
  Carousel.propTypes = {
    /** this prop enable dots pagination */
    dotsPagination: Proptypes.bool,
    /** this prop enable infinite horizontal scroll */
    infiniteScroll: Proptypes.bool,
    /** Number of cards to show */
    cardsToShow: Proptypes.number,
    /** this prop sets what size of card will render */
    cardSize: Proptypes.oneOf([
      'small',
      'medium',
      'large',
    ]),
    /** this prop receives a object with all content to render in component */
    cards: Proptypes.arrayOf(
      Proptypes.shape({
        imagePath: Proptypes.string,
        imageDescription: Proptypes.string,
        title: Proptypes.string,
        description: Proptypes.string,
      }),
    ),
    theme: Proptypes.shape({
      colors: Proptypes.object,
    }),
  };
  

export default Carousel;