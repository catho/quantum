import { AutoExample, Tab, SimpleHighlight } from '@catho/quantum-storybook-ui';
import {
  ProgressBarExample,
  CircularLoaderExample,
  SkeletonExample,
} from './Examples';

import {
  ProgressBar,
  CircularLoader,
  Container,
  Row,
  Col,
  Skeleton,
} from '../../components';

const descriptions = {
  progressBar: `Progress bars are used to give the user a feedback to the progress of a process or an action.`,
  circularLoader: `CircularLoaders are used to give the user the impression of loading while a component is not ready to be displayed.`,
  skeleton:
    'A component that replaces others while they are loading or not ready to render.',
};

const renderExampleTab = componentExamples => (
  <Tab title="Example">
    <Container>
      {componentExamples.map(example => (
        <Row key={example.code}>
          <Col xsmall={2} small={4} medium={6}>
            <SimpleHighlight>{example.code}</SimpleHighlight>
          </Col>
          <Col xsmall={2} small={4} medium={6}>
            {example.component}
          </Col>
        </Row>
      ))}
    </Container>
  </Tab>
);

export default {
  title: 'Loaders',
};

export const ProgressBarStory = () => (
  <AutoExample
    description={descriptions.progressBar}
    component={ProgressBar}
    additionalTabs={renderExampleTab(ProgressBarExample)}
  />
);

export const CircularLoaderStory = () => (
  <AutoExample
    description={descriptions.circularLoader}
    component={CircularLoader}
    additionalTabs={renderExampleTab(CircularLoaderExample)}
  />
);

export const SkeletonStory = () => (
  <AutoExample
    description={descriptions.skeleton}
    component={Skeleton}
    additionalTabs={renderExampleTab(SkeletonExample)}
  />
);
