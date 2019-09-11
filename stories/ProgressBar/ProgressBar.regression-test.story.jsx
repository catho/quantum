import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProgressBar } from '../../components';

const title = 'This is a title';
const subTitle = 'Now this is a subtitle';
const progressPercent = 25;
const progressText = 25;
const label = '% percent to finish';

storiesOf('ProgressBar', module)
  .add('neutral default', () => (
    <ProgressBar
      skin="neutral"
      progressPercent={progressPercent}
      progressText={progressText}
    />
  ))
  .add('neutral with title', () => (
    <ProgressBar
      skin="neutral"
      progressPercent={progressPercent}
      progressText={progressText}
      title={title}
    />
  ))
  .add('neutral with title and subtitle', () => (
    <ProgressBar
      skin="neutral"
      progressPercent={progressPercent}
      progressText={progressText}
      title={title}
      subTitle={subTitle}
    />
  ))
  .add('neutral with title and subtitle and label', () => (
    <ProgressBar
      skin="neutral"
      progressPercent={progressPercent}
      progressText={progressText}
      title={title}
      subTitle={subTitle}
      label={label}
    />
  ))
  .add('primary with title and subtitle and label', () => (
    <ProgressBar
      skin="primary"
      progressPercent={progressPercent}
      progressText={progressText}
      title={title}
      subTitle={subTitle}
      label={label}
    />
  ))
  .add('secondary with title and subtitle and label', () => (
    <ProgressBar
      skin="secondary"
      progressPercent={progressPercent}
      progressText={progressText}
      title={title}
      subTitle={subTitle}
      label={label}
    />
  ))
  .add('primary with differents values and percent', () => (
    <ProgressBar
      skin="primary"
      progressPercent={progressPercent}
      progressText={305}
      title={title}
      subTitle={subTitle}
      label=" files loaded from 1220 total"
    />
  ));
