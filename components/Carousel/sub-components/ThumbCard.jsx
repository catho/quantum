import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import Card from '../../Card';

const AdaptedCard = styled(Card)`
  margin: 2px;
  text-align: center;
  height: 80px;
  width: 80px;
`;

const Content = styled(Card.Content)`
  height: 100%;
  padding: 8px;
`;

const ThumbCard = ({ card }) => (
  <>
    <AdaptedCard>
      <Content>
        <img
          src={card.imagePath}
          alt={card.imageDescription}
          style={{ width: 64, height: 64 }}
        />
      </Content>
    </AdaptedCard>
  </>
);

ThumbCard.defaultProps = {
  card: {
    imagePath: 'http://',
    imageDescription: 'card image a11y description',
    title: 'card title',
    description: 'card description',
  },
};

ThumbCard.propTypes = {
  card: Proptypes.shape({
    imagePath: Proptypes.string,
    imageDescription: Proptypes.string,
    title: Proptypes.string,
    description: Proptypes.string,
  }),
};

export default ThumbCard;
