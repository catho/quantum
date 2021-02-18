import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import { SlickSliderWrapper } from './slick'
import  Card from "../Card";
import Icon from '../Icon';
import { theme } from '../shared'

const { colors } = theme;

const AdaptedCard = styled(Card)`
  margin: 2px;
`;

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Icon name="keyboard_arrow_right" skin={colors.secondary[700]} className={className} onClick={onClick}/>
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Icon name="keyboard_arrow_left" skin={colors.secondary[700]} className={className} onClick={onClick}/>
  );
}


const Carousel = () => {

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
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

export default Carousel;