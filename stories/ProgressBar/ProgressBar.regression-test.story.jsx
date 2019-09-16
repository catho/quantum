import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProgressBar } from '../../components';

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
  .add('neutral with label', () => (
    <ProgressBar
      skin="neutral"
      progressPercent={progressPercent}
      progressText={progressText}
      label={label}
    />
  ))
  .add('primary with label', () => (
    <ProgressBar
      skin="primary"
      progressPercent={progressPercent}
      progressText={progressText}
      label={label}
    />
  ))
  .add('secondary with label', () => (
    <ProgressBar
      skin="secondary"
      progressPercent={progressPercent}
      progressText={progressText}
      label={label}
    />
  ))
  .add('primary with differents values and percent', () => (
    <ProgressBar
      skin="primary"
      progressPercent={progressPercent}
      progressText={305}
      label=" files loaded from 1220 total"
    />
  ));
