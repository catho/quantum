import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import Card from '../../Card';

const cardMeasures = {
  medium: {
    height: 240,
    thumbMargin: 0,
  },
  large: {
    height: 264,
    thumbMargin: 8,
  },
};

const AdaptedCard = styled(Card)`
  margin: 2px;
  text-align: center;
  width: 224px;
  ${({ cardMeasure: { height } }) => `height: ${height}px;`}
`;

const Content = styled(Card.Content)`
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

const Media = styled(Card.Media)`
  width: 192px;
  height: 104px;
  padding-bottom: 0;
  ${({ cardMeasure: { thumbMargin } }) => `
    margin-top: ${thumbMargin}px;
    margin-bottom: ${thumbMargin}px;
  `};
`;

const Title = styled(Card.Title)`
  font-size: 16px;
  margin: 16px;
  line-height: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled(Card.Description)`
  font-size: 14px;
  margin: 0 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const handleCardMeasures = cardSize => cardMeasures[cardSize];

const DescriptionCard = ({ card, cardSize }) => {
  const cardMeasure = handleCardMeasures(cardSize);

  return (
    <>
      <AdaptedCard cardMeasure={cardMeasure}>
        <Content>
          <Media
            cardMeasure={cardMeasure}
            src={card.imagePath}
            alt={card.imageDescription}
          />
          <Title small>{card.title}</Title>
          <Description>{card.description} </Description>
        </Content>
      </AdaptedCard>
    </>
  );
};

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
