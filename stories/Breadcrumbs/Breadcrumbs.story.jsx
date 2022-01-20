import React from 'react';
import {
  AutoPropsApi,
  TabbedView,
  Heading,
  SimpleHighlight,
  Tab,
  StoryContainer,
  Title,
  Example,
} from '@catho/quantum-storybook-ui';

import Alert from '../../components/Alert';
import Breadcrumbs from '../../components/Breadcrumbs';

const items = [
  {
    label: 'Home',
    url: 'catho.com',
  },
  {
    label: 'Quantum',
    url: 'catho.com',
  },
  {
    label: 'Components',
    url: 'catho.com',
  },
  {
    label: 'Breadcrumbs',
    url: 'catho.com',
  },
];

export default {
  title: 'Breadcrumbs',
};

const description = `Breadcrumbs component consist of a list of links that help a user visualize a page's location within the hierarchical structure of a website, and allow navigation up to any of its "ancestors".`;

export const BreadcrumbsStory = () => (
  <>
    <Heading name="Breadcrumbs">{description}</Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing Breadcrumbs</Title>
          <SimpleHighlight>{`import { Breadcrumbs } from '@catho/quantum';`}</SimpleHighlight>
          <br />
          <Alert skin="warning" icon="info">
            The breadcrumbs will start collapsed when list items overflows
            window width
          </Alert>
        </StoryContainer>
      </Tab>

      <Tab title="API">
        <AutoPropsApi component={Breadcrumbs} />
      </Tab>

      <Tab title="Examples">
        <StoryContainer>
          <Title as="h3">Breadcrumbs default</Title>
          <Example
            component={<Breadcrumbs items={items} />}
            code="<Breadcrumbs />"
          />
        </StoryContainer>
      </Tab>
    </TabbedView>
  </>
);
