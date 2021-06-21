import React from 'react';
import {
  Tab,
  Example,
  AutoExample,
  Title,
  StoryContainer,
} from '@catho/quantum-storybook-ui';
import Toggle from '../../components/Toggle';

const exampleTab = (
  <Tab title="Example">
    <StoryContainer fluid>
      <Title>Left label</Title>
      <Example
        component={
          <div style={{ display: 'flex', alignContent: 'center' }}>
            <label
              htmlFor="left"
              style={{ marginRight: 10, cursor: 'pointer' }}
            >
              Left label with checked true
            </label>
            <Toggle checked id="left" onChange={() => {}} />
          </div>
        }
        code={`<div style={{ display: 'flex', alignContent: 'center' }}>
  <label htmlFor="left" style={{ marginRight: 10 }}>Left label</label>
  <Toggle checked id="left" />
</div>`}
      />
      <Title>Right label</Title>
      <Example
        component={
          <div style={{ display: 'flex', alignContent: 'center' }}>
            <Toggle id="right" />
            <label
              htmlFor="right"
              style={{ marginLeft: 10, cursor: 'pointer' }}
            >
              Right label without checked prop
            </label>
          </div>
        }
        code={`<div style={{ display: 'flex', alignContent: 'center' }}>
  <Toggle id="right" />
  <label htmlFor="right" style={{ marginLeft: 10 }}>Right label</label>
</div>`}
      />
    </StoryContainer>
  </Tab>
);

const description = `Toggle is a control that is used to quickly switch
between two possible states.`;

export default {
  title: 'Forms',
};

export const _Toggle = () => (
  <AutoExample
    description={description}
    component={Toggle}
    additionalTabs={exampleTab}
  />
);
