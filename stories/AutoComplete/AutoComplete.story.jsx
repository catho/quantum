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

const Examples = [
  'Analista de Gestão de Incidentes',
  'Analista de Governança de TI',
  'Analista de Help Desk',
  'Analista de Negócios de TI',
  'Analista de Garantia da Qualidade',
  'Analista de Pricing Sênior',
  'Analista de Pricing Pleno',
  'Analista de Pricing Junior',
  'Analista de Engenharia de Produto',
  'Analista de Sustentabilidade',
  'Cronoanalista',
];

const AutoCompleteExample = () => (
  <AutoCompleteComponent
    label="Pick a analyst"
    onSelectedItem={item => console.log('selected', item)}
    onChange={item => console.log('change', item)}
    helperText="Type a analyst"
    suggestions={Examples}
  />
);

AutoCompleteExample.CODE = ` import { AutoComplete } from '@catho/quantum';

const Examples = [
  "Analista de Gestão de Incidentes",
  "Analista de Governança de TI",
  "Analista de Help Desk",
  "Analista de Negócios de TI",
  "Analista de Garantia da Qualidade",
  "Analista de Pricing Sênior",
  "Analista de Pricing Pleno",
  "Analista de Pricing Junior",
  "Analista de Engenharia de Produto",
  "Analista de Sustentabilidade",
  "Cronoanalista",
];

<AutoComplete label="Pick a analyst" helperText="Type a analyst" onChange={item => console.log(item)} selectedItem={item => console.log(item)} 
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
