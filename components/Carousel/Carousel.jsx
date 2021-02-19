import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { SlickSliderWrapper } from './slick'
import  Card from "../Card";
import { colors } from '../shared/theme';
import Arrow from './sub-components/Arrow'

const AdaptedCard = styled(Card)`
  margin: 2px;
`;

const Carousel = ({theme}) => {

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <Arrow theme={theme} targeting="right" />,
      prevArrow: <Arrow theme={theme} targeting="left" />,
    };

  return (
    <SlickSliderWrapper>
      <Slider {...settings}>
        <div>
          <AdaptedCard>
            <AdaptedCard.Content>
              asfdsf 
            </AdaptedCard.Content>
          </AdaptedCard>
        </div>
        <div>
          <AdaptedCard>
            <AdaptedCard.Content>
              asfdsf 
            </AdaptedCard.Content>
          </AdaptedCard>
        </div>
        <div>
          <AdaptedCard>
            <AdaptedCard.Content>
              asfdsf 
            </AdaptedCard.Content>
          </AdaptedCard>
        </div>
        <div>
          <AdaptedCard>
            <AdaptedCard.Content>
              asfdsf 
            </AdaptedCard.Content>
          </AdaptedCard>
        </div>
        <div>
          <AdaptedCard>
            <AdaptedCard.Content>
              asfdsf 
            </AdaptedCard.Content>
          </AdaptedCard>
        </div>
        <div>
          <AdaptedCard>
            <AdaptedCard.Content>
              asfdsf 
            </AdaptedCard.Content>
          </AdaptedCard>
        </div>
    </Slider>
  </SlickSliderWrapper>
  )};

    // content = [
    //   {
    //     image: 'dddd',
    //     title: 'sfdsf',
    //     description: 'htrhtrghtr',
    //   },
    //   {
    //     image: 'dddd',
    //     title: 'sfdsf',
    //     description: 'htrhtrghtr',
    //   },
    // ]

  Carousel.defaultProps = {
    dots: true,
    infinite: true,
    cardsToShow: 3,
    cardSize: 'medium',
    cards: [
      {
        image: 'dddd',
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
    dots: Proptypes.bool,
    /** this prop enable infinite horizontal scroll */
    infinite: Proptypes.bool,
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
        image: Proptypes.string,
        title: Proptypes.string,
        description: Proptypes.string,
      }),
    ),
    theme: Proptypes.shape({
      colors: Proptypes.object,
    }),
  };
  

export default Carousel;