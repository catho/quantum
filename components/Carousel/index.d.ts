import { Component } from 'react';

export type NonEmptyArray<T> = [T, ...T[]];

export interface CarouselProps {
  dotsPagination?: boolean,
  speed?: number,
  slidesToScroll?: number,
  arrowColor?: 'primary' | 'success' | 'error' | 'neutral' | 'warning',
  cardSize?: 'small' | 'medium' | 'large',
  cards:NonEmptyArray<{
    imagePath?: string,
    imageDescription?: string,
    title?: string,
    description?: string,
  }>,
  theme?: {
    baseFontSize?: number;
    colors?: {};
    breakpoints?: {};
    spacing?: {};
  };
}

export default class Carousel extends Component<CarouselProps> {}