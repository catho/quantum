import styled from 'styled-components';
import Proptypes from 'prop-types';
import Card from '../../Card';
import { colors, spacing, baseFontSize } from '../../shared/theme';

const SQUARE_CARD_SIZE = 80;
const SQUARE_THUMB_SIZE = 64;

const AdaptedCard = styled(Card)`
  ${({
    theme: {
      spacing: { xxxsmall, xxsmall },
    },
  }) => `
    margin: ${xxxsmall}px ${xxsmall}px;
  `};

  text-align: center;
  height: ${SQUARE_CARD_SIZE}px;
  width: ${SQUARE_CARD_SIZE}px;
`;

const Content = styled(Card.Content)`
  height: 100%;
  ${({
    theme: {
      spacing: { xsmall },
    },
  }) => `
    padding: ${xsmall}px;
  `};
`;

const Thumb = styled.img`
  width: ${SQUARE_THUMB_SIZE}px;
  height: ${SQUARE_THUMB_SIZE}px;
`;

const ThumbCard = ({ card, theme }) => (
  <AdaptedCard theme={theme}>
    <Content>
      <Thumb src={card.imagePath} alt={card.imageDescription} />
    </Content>
  </AdaptedCard>
);

ThumbCard.defaultProps = {
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

ThumbCard.propTypes = {
  card: Proptypes.shape({
    imagePath: Proptypes.string,
    imageDescription: Proptypes.string,
    title: Proptypes.string,
    description: Proptypes.string,
  }),
  theme: Proptypes.shape({
    colors: Proptypes.object,
    spacing: Proptypes.object,
    baseFontSize: Proptypes.number,
  }),
};

export default ThumbCard;
