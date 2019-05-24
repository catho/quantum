import React from 'react';
import { storiesOf } from '@storybook/react';
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

storiesOf('Tag', module).add('Tag', () => (
  <AutoExample
    description={description}
    component={Tag}
    additionalTabs={exampleTab}
  />
));
