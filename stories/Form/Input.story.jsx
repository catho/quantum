import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import ComponentPanel from '../../.storybook/components/ComponentPanel';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import Form from '../../components/Form/Form';
import Atom from '../static/atom.svg';

storiesOf('8. Form validation', module)
  .add('Input', () => (
    <Form>
      <Form.Input
        name="test"
        label="Test"
        onChange={(event) => console.log('veio')}
      />
    </Form>
  ));
