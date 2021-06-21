import React from 'react';
import {
  TabbedView,
  Tab,
  AutoPropsApi,
  Heading,
  StoryContainer,
  Title,
  SimpleHighlight,
} from '@catho/quantum-storybook-ui';

import Alert from '../../components/Alert';
import {
  defaultContent,
  threeContentsWithIcon,
  defaultContentWithoutCheckedItems,
} from '../../components/SegmentedControl/exampleContents';
import SegmentedControl from '../../components/SegmentedControl';

export default {
  title: 'SegmentedControl',
};

export const _SegmentedControl = () => (
  <>
    <Heading name="SegmentedControl">
      The Segmented control component is a linear set of two or more alternation
      buttons, with all segments with same width.
    </Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing SegmentedControl</Title>
          <SimpleHighlight>{`import { SegmentedControl } from '@catho/quantum';`}</SimpleHighlight>
          <br />
          <Alert skin="warning" icon="info">
            The segmented control displays a maximum of 5 items, even if the
            quantity is greater
          </Alert>
        </StoryContainer>
      </Tab>

      <Tab title="API">
        <AutoPropsApi component={SegmentedControl} />
      </Tab>

      <Tab title="Example">
        <StoryContainer>
          <Title as="h3">Simple segmented control</Title>
          <SimpleHighlight>{defaultContent.code}</SimpleHighlight>
          <SimpleHighlight>{`<SegmentedControl name="simple" items={defaultContent} onChange={console.log} />`}</SimpleHighlight>
          <br />
          <SegmentedControl
            name="simple"
            items={defaultContent}
            onChange={console.log} /* eslint-disable-line */
          />

          <Title as="h3">segmented control with icons</Title>
          <SimpleHighlight>{threeContentsWithIcon.code}</SimpleHighlight>
          <SimpleHighlight>{`<SegmentedControl name="simple-with-icon" items={threeContentsWithIcon} onChange={console.log} />`}</SimpleHighlight>
          <br />
          <SegmentedControl
            name="simple-with-icon"
            items={threeContentsWithIcon}
            onChange={console.log} /* eslint-disable-line */
          />

          <Title as="h3">segmented control with icons (dark mode)</Title>
          <SimpleHighlight>{`<SegmentedControl name="with-three-icons" items={threeContentsWithIcon} darkMode onChange={console.log} />`}</SimpleHighlight>
          <br />
          <SegmentedControl
            name="with-three-icons"
            items={threeContentsWithIcon}
            onChange={console.log} /* eslint-disable-line */
            darkMode
          />

          <Title as="h3">segmented control (without checked item)</Title>
          <SimpleHighlight>{`<SegmentedControl name="with-three" items={defaultContentWithoutCheckedItems} darkMode onChange={console.log} />`}</SimpleHighlight>
          <br />
          <SegmentedControl
            name="with-three"
            items={defaultContentWithoutCheckedItems}
            onChange={console.log} /* eslint-disable-line */
          />
        </StoryContainer>
      </Tab>
    </TabbedView>
  </>
);
