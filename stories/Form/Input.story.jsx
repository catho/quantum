import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import ComponentPanel from '../../.storybook/components/ComponentPanel';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import Form from '../../components/Form/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Atom from '../static/atom.svg';

import Validate from '../../components/Form/validate';

storiesOf('8. Form validation', module)
  .add('Input', () => (
    <Form>
      <Input.CPF
        name="valid"
        label="CPF"
      />

      <Input
        name="invalid"
        label="CPF"
      />

      <Button
        skin="default"
        type="submit"
        name="submit"
      >
        ENVIA ESSA MERDA
      </Button>
    </Form>
  ));
