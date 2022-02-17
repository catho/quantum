import {
  AutoPropsApi,
  TabbedView,
  Heading,
  SimpleHighlight,
  Tab,
  StoryContainer,
  Title,
} from '@catho/quantum-storybook-ui';

import Alert from '../../components/Alert';
import Breadcrumbs from '../../components/Breadcrumbs';
import defaultContent from '../../components/Breadcrumbs/exampleContents';

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
          <SimpleHighlight>{defaultContent.code}</SimpleHighlight>
          <SimpleHighlight>
            {`<Breadcrumbs items={defaultContent} />`}
          </SimpleHighlight>
          <br />
          <Breadcrumbs items={defaultContent} />
        </StoryContainer>
      </Tab>
    </TabbedView>
  </>
);
