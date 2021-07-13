import React from 'react';
import Carousel from '../../components/Carousel';
import { content, contentWithLongTexts } from './Content';

export default {
  title: 'Carousel',
};

export const SmallCards = () => <Carousel cards={content} cardSize="small" />;
SmallCards.story = {
  name: 'Small cards',
};

export const MediumCards = () => <Carousel cards={content} cardSize="medium" />;
MediumCards.story = {
  name: 'Medium cards',
};

export const MediumCardsWithEllipsis = () => (
  <Carousel cards={contentWithLongTexts} cardSize="medium" />
);
MediumCardsWithEllipsis.story = {
  name: 'Medium cards with ellipsis',
};

export const MediumCardsWithoutDots = () => (
  <Carousel cards={content} cardSize="medium" dotsPagination={false} />
);
MediumCardsWithoutDots.story = {
  name: 'Medium cards without dots',
};

export const LargeCards = () => <Carousel cards={content} cardSize="large" />;
LargeCards.story = {
  name: 'Large cards',
};

export const LargeCardsWithEllipsis = () => (
  <Carousel cards={contentWithLongTexts} cardSize="large" />
);
LargeCardsWithEllipsis.story = {
  name: 'Large cards with ellipsis',
};
