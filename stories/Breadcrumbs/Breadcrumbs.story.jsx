// Generated with scripts/create-componnent.js
import React from 'react';
import {
  AutoExample,
  Tab,
  StoryContainer,
  Title,
  Example,
} from '@catho/quantum-storybook-ui';

import Breadcrumbs from '../../components/Breadcrumbs';

const TabExample = (
  <Tab title="Examples">
    <StoryContainer>
      <Title as="h3">Breadcrumbs default</Title>
      <Example component={<Breadcrumbs />} code="<Breadcrumbs />" />
    </StoryContainer>
  </Tab>
);

export default {
  title: 'Breadcrumbs',
};

export const BreadcrumbsStory = () => (
  <AutoExample
    description="Some description for component"
    component={Breadcrumbs}
    additionalTabs={TabExample}
  />
);
