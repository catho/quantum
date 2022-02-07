import React from 'react';
import {
  AutoPropsApi,
  Heading,
  SimpleHighlight,
  StoryContainer,
  Tab,
  TabbedView,
  Title,
} from '@catho/quantum-storybook-ui';

// eslint-disable-next-line import/no-named-default
import { default as AutoCompleteComponent } from '../../components/AutoComplete';

const Examples = ['morango', 'melancia', 'maça', 'banana', 'laranja'];

const AutoCompleteExample = () => (
  <AutoCompleteComponent
    label="Pick a fruit"
    selectedItem={item => console.log(item)}
    helperText="Type your favorite fruit"
    suggestions={Examples}
  />
);

AutoCompleteExample.CODE = ` import { AutoComplete } from '@catho/quantum';

const Examples = ['morango', 'melancia', 'maça', 'banana', 'laranja'];

<AutoComplete label="Pick a fruit" helperText="Type you favorite fruit" selectedItem={item => console.log(item)} 
suggestions={Examples} />
`;

export default {
  title: 'Forms',
};

export const AutoComplete = () => (
  <>
    <Heading name="AutoComplete">
      The autocomplete it`&apos;`,s a input that has a dropdown menu with
      suggestions.
    </Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing</Title>
          <SimpleHighlight>{AutoCompleteExample.CODE}</SimpleHighlight>
          <AutoCompleteExample />
        </StoryContainer>
      </Tab>
      <Tab title="API">
        <AutoPropsApi
          component={AutoCompleteComponent}
          ignoredProps={['theme']}
        />
      </Tab>
    </TabbedView>
  </>
);
