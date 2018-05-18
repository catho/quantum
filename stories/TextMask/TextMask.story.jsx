import React from 'react';
import { storiesOf } from '@storybook/react';
import TextMask from '../../components/TextMask';
import TextMaskTypes from '../../components/TextMask/TextMaskTypes';

import {
  Heading,
  Atom,
  TabbedView,
  Tab,
  AutoPropsApi,
  HowToImport,
  Example,
  CodeExample,
} from '../../.storybook/components';

const examples = {
  CEP: {
    code: 'Alameda Juari, 262 - Barueri, SP - <TextMask.CEP>06460-090</TextMask.CEP>',
    component: (
      <React.Fragment>
        Alameda Juari, 262 - Barueri, SP - <TextMask.CEP>06460-090</TextMask.CEP>
      </React.Fragment>
    ),
  },
  CPNJ: {
    code: 'CNPJ: <TextMask.CNPJ text="03.753.088/0001-00" />',
    component: (
      <React.Fragment>
        CNPJ: <TextMask.CNPJ text="03.753.088/0001-00" />
      </React.Fragment>
    ),
  },
  'Card Number': {
    code: 'CNPJ: <TextMask mask={[/\\d/, /\\d/, /\\d/, /\\d/, " ", /\\d/, /\\d/, /\\d/, /\\d/, " ", /\\d/, /\\d/, /\\d/, /\\d/, " ", /\\d/, /\\d/, /\\d/, /\\d/]}>4024007113535149</TextMask>',
    component: (
      <React.Fragment>
        <TextMask mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}>4024007113535149</TextMask>
      </React.Fragment>
    ),
  },
  CPF: {
    code: `// works with formated text too!
<TextMask.CPF>301.703.170-56</TextMask.CPF>`,
    component: (
      <React.Fragment>
        <TextMask.CPF>301.703.170-56</TextMask.CPF>
      </React.Fragment>
    ),
  },
};

const TextMaskCode = `<TextMask text="06460090" mask={[[/\\d/, /\\d/, /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/]]} />

<TextMask.CEP>06460090</TextMask.CEP>

<TextMask.CEP text="06460090" />`;

storiesOf('8. Mask', module)
  .add('Text', () => (
    <React.Fragment>
      <Heading image={Atom} title={'<TextMask />'} />
      <TabbedView>
        <Tab title="Usage">
          <HowToImport importModules="TextMask" />

          <p>
            <br />
            This is a component to render properly the given text:

            <CodeExample showTitle={false} code={TextMaskCode} />

            <br />
            <br />
            All examples above will renders this output: <TextMask.CEP>06460090</TextMask.CEP>

            <br />
            <br />
          </p>
          <p>
            Like Input, you can provide your own mask using <code>mask</code> property,
            or use the available:
            <ul>
              { Object.keys(TextMaskTypes).map(type => <li key={type}>{type}: <code>{`<TextMast.${type} />`}</code> </li>) }
            </ul>

          </p>
          <p>
            You can also provide your custom mask using the <code>mask</code> property.
          </p>
          <br />
        </Tab>
        <Tab title="API">
          <AutoPropsApi component={TextMask} />
        </Tab>
        <Tab title="Examples">
          { Object
              .keys(examples)
              .map((example) => {
                const { code, component } = examples[example];
                return (
                  <Example
                    title={example}
                    key={example}
                    code={code}
                    component={component}
                  />
                );
              }) }
        </Tab>
      </TabbedView>
    </React.Fragment>
  ));
