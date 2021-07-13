import React from 'react';
import { ProgressBar } from '../../components';

const progressPercent = 25;
const progressText = 25;
const label = '% percent to finish';

export default {
  title: 'ProgressBar',
};

export const NeutralDefault = () => (
  <ProgressBar
    skin="neutral"
    progressPercent={progressPercent}
    progressText={progressText}
  />
);

NeutralDefault.story = {
  name: 'neutral default',
};

export const NeutralWithLabel = () => (
  <ProgressBar
    skin="neutral"
    progressPercent={progressPercent}
    progressText={progressText}
    label={label}
  />
);

NeutralWithLabel.story = {
  name: 'neutral with label',
};

export const PrimaryWithLabel = () => (
  <ProgressBar
    skin="primary"
    progressPercent={progressPercent}
    progressText={progressText}
    label={label}
  />
);

PrimaryWithLabel.story = {
  name: 'primary with label',
};

export const SecondaryWithLabel = () => (
  <ProgressBar
    skin="secondary"
    progressPercent={progressPercent}
    progressText={progressText}
    label={label}
  />
);

SecondaryWithLabel.story = {
  name: 'secondary with label',
};

export const PrimaryWithDifferentsValuesAndPercent = () => (
  <ProgressBar
    skin="primary"
    progressPercent={progressPercent}
    progressText={305}
    label=" files loaded from 1220 total"
  />
);

PrimaryWithDifferentsValuesAndPercent.story = {
  name: 'primary with differents values and percent',
};
