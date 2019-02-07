import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Heading, TabbedView, Tab } from '@catho-private/quantum-storybook-ui';

import Usage from './Usage';
import Components from './Components';

import GlobalStyle from '../../components/GlobalStyle';

const QuantumFont = storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

const Font = styled.div`
  * {
    font-family: Montserrat, sans-serif !important;
  }

  & > h1:first-child {
    line-height: 1;
    letter-spacing: inherit;
  }

  p strong {
    font-weight: 700;
  }
`;

storiesOf('1. Foundation', module)
  .addDecorator(QuantumFont)
  .add('Typography', () => (
    <Font>
      <Heading title="Typography">
        <TabbedView>
          <Tab title="Usage">
            <Usage />
          </Tab>
          <Tab title="Components">
            <Components />
          </Tab>
        </TabbedView>
      </Heading>
    </Font>
  ));
