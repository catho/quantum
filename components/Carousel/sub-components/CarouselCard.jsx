import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import  Card from "../../Card";

const AdaptedCard = styled(Card)`
  margin: 2px;
  text-align: center;
`;

const CarouselCard = ({ card } ) => (
    <>
      <AdaptedCard>
        <AdaptedCard.Content>
          <AdaptedCard.Media src={card.imagePath} alt={card.imageDescription} />
          <AdaptedCard.Title small>{card.title}</AdaptedCard.Title>
          <AdaptedCard.Description >{card.description} </AdaptedCard.Description>
        </AdaptedCard.Content>
      </AdaptedCard>
    </>
  );
  
  CarouselCard.defaultProps = {
    card: {
      imagePath: 'http://',
      imageDescription: 'card image a11y description',
      title: 'card title',
      description: 'card description',
    },
  }
  
  CarouselCard.propTypes = {
    card: Proptypes.shape({
      imagePath: Proptypes.string,
      imageDescription: Proptypes.string,
      title: Proptypes.string,
      description: Proptypes.string,
    }),
  }

  export default CarouselCard;
  