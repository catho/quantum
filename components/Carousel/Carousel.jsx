import Slider from 'react-slick';
import Proptypes from 'prop-types';
import SlickSliderWrapper from './slick';
import { colors, spacing, baseFontSize, breakpoints } from '../shared/theme';
import Arrow from './sub-components/Arrow';
import CarouselCard from './sub-components/CarouselCard';

const MOBILE_BREAKPOINT = breakpoints.medium.width;

const Carousel = ({
  theme = {
    colors,
    spacing,
    baseFontSize,
  },
  dotsPagination = true,
  cards,
  cardSize = 'medium',
  speed = 500,
  slidesToScroll = 1,
  arrowColor = 'secondary',
}) => {
  const settings = {
    dots: cardSize !== 'small' ? dotsPagination : false,
    infinite: true,
    variableWidth: true,
    slidesToShow: -1,
    speed,
    slidesToScroll,

    nextArrow: <Arrow theme={theme} targeting="right" color={arrowColor} />,
    prevArrow: <Arrow theme={theme} targeting="left" color={arrowColor} />,
    responsive: [
      {
        breakpoint: MOBILE_BREAKPOINT,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <SlickSliderWrapper theme={theme}>
      <Slider {...settings}>
        {cards.map((card) => (
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

Carousel.propTypes = {
  /** this prop enable dots pagination (only for 'medium' and 'large' card sizes) */
  dotsPagination: Proptypes.bool,
  /** receives a number (miliseconds) to controle de speed of carousel drags */
  speed: Proptypes.number,
  /** receives a number of cards to drag simultaneously */
  slidesToScroll: Proptypes.number,
  /** sets the color of next/previous arrow */
  arrowColor: Proptypes.oneOf([
    'primary',
    'secondary',
    'warning',
    'success',
    'error',
    'neutral',
  ]),
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
