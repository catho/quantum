import React from 'react';

import SimpleCard from './examples/SimpleCard';
import JobAdCard from './examples/JobAdCard';
import AdvancedCard from './examples/AdvancedCard';

export default {
  title: 'Card',
};

export const _SimpleCard = () => <SimpleCard />;

_SimpleCard.story = {
  name: 'SimpleCard',
};

export const _JobAdCard = () => <JobAdCard />;

_JobAdCard.story = {
  name: 'JobAd Card',
};

export const _AdvancedCard = () => <AdvancedCard />;

_AdvancedCard.story = {
  name: 'AdvancedCard',
};
