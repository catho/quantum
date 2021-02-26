import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import Card from '../../Card';
import { colors, spacing, baseFontSize } from '../../shared/theme';

const cardMeasures = {
  medium: {
    height: 240,
    thumbMargin: 0,
  },
  large: {
    height: 264,
    thumbMargin: spacing.xsmall,
  },
};

const AdaptedCard = styled(Card)`
  ${({
    theme: {
      spacing: { xxxsmall, xsmall },
    },
  }) => `
    margin: ${xxxsmall}px ${xsmall}px;
  `};
  text-align: center;
  width: 224px;
  ${({ cardMeasure: { height } }) => `height: ${height}px;`}
`;

const Content = styled(Card.Content)`
  height: 100%;
  ${({
    theme: {
      spacing: { medium },
    },
  }) => `
    padding: ${medium}px;
  `};
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
  ${({
    theme: {
      baseFontSize: baseFont,
      spacing: { medium },
    },
  }) => `
    font-size: ${baseFont}px;
    line-height: ${baseFont}px;
    margin: ${medium}px;
  `};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled(Card.Description)`
  ${({
    theme: {
      baseFontSize: baseFont,
      spacing: { medium },
    },
  }) => `
    font-size: ${baseFont * 0.875}px;
    margin: 0 ${medium}px;
  `};

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const handleCardMeasures = cardSize => cardMeasures[cardSize];

const DescriptionCard = ({ card, cardSize, theme }) => {
  const cardMeasure = handleCardMeasures(cardSize);

  return (
    <>
      <AdaptedCard cardMeasure={cardMeasure} theme={theme}>
        <Content>
          <Media
            cardMeasure={cardMeasure}
            src={card.imagePath}
            alt={card.imageDescription}
          />
          <Title theme={theme} small>
            {card.title}
          </Title>
          <Description theme={theme}>{card.description} </Description>
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
  theme: {
    colors,
    spacing,
    baseFontSize,
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
  theme: Proptypes.shape({
    colors: Proptypes.object,
    spacing: Proptypes.object,
    baseFontSize: Proptypes.number,
  }),
};

export default DescriptionCard;
