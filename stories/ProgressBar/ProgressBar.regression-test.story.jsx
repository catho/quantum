import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProgressBar } from '../../components';

const title = 'This is a title';
const subTitle = 'Now this is a subtitle';
const progress = 25;
const label = '% percent to finish';

storiesOf('ProgressBar', module)
  .add('neutral default', () => (
    <ProgressBar skin="neutral" progress={progress} />
  ))
  .add('neutral with title', () => (
    <ProgressBar skin="neutral" progress={progress} title={title} />
  ))
  .add('neutral with title and subtitle', () => (
    <ProgressBar
      skin="neutral"
      progress={progress}
      title={title}
      subTitle={subTitle}
    />
  ))
  .add('neutral with title and subtitle and label', () => (
    <ProgressBar
      skin="neutral"
      progress={progress}
      title={title}
      subTitle={subTitle}
      label={label}
    />
  ))
  .add('primary with title and subtitle and label', () => (
    <ProgressBar
      skin="primary"
      progress={progress}
      title={title}
      subTitle={subTitle}
      label={label}
    />
  ))
  .add('secondary with title and subtitle and label', () => (
    <ProgressBar
      skin="secondary"
      progress={progress}
      title={title}
      subTitle={subTitle}
      label={label}
    />
  ));
