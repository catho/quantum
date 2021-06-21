import React from 'react';
import { Tab, AutoExample, StoryContainer } from '@catho/quantum-storybook-ui';
import { Tag } from '../../components';
import {
  skinsExample,
  invertedExample,
  strokedExample,
  closableExample,
  sizesExample,
} from './TagExamples';

const exampleTab = (
  <Tab title="Examples">
    <StoryContainer>
      {skinsExample}
      {invertedExample}
      {strokedExample}
      {closableExample}
      {sizesExample}
    </StoryContainer>
  </Tab>
);

const description = `Tags are used for items that need to be labeled,
categorized, or organized using keywords that describe them.`;

export default {
  title: 'Tag',
};

export const _Tag = () => (
  <AutoExample
    description={description}
    component={Tag}
    additionalTabs={exampleTab}
  />
);
