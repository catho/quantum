import React from 'react';
import { storiesOf } from '@storybook/react';
import Carousel from '../../components/Carousel';
import { content, contentWithLongTexts } from './Content';

storiesOf('Carousel', module)
  .add('Small cards', () => <Carousel cards={content} cardSize="small" />)
  .add('Medium cards', () => <Carousel cards={content} cardSize="medium" />)
  .add('Medium cards with ellipsis', () => (
    <Carousel cards={contentWithLongTexts} cardSize="medium" />
  ))
  .add('Medium cards without dots', () => (
    <Carousel cards={content} cardSize="medium" dotsPagination={false} />
  ))
  .add('Large cards', () => <Carousel cards={content} cardSize="large" />)
  .add('Large cards with ellipsis', () => (
    <Carousel cards={contentWithLongTexts} cardSize="large" />
  ));
