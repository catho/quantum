import React from 'react';
import { storiesOf } from '@storybook/react';
import Mask from '../../components/Mask';
import Input from '../../components/Input';

storiesOf('8. Mask', module)
  .add('Basic', () => (
    <React.Fragment>
      <h3>Static texts</h3>
      <div>
        CPF: <Mask value="35841429892" pattern="999.999.999-99" />
      </div>
      <div>
        CEP: <Mask value="06826520" pattern="99999-999" />
      </div>
      <div>
        PHONE: <Mask value="11993621797" pattern="(99) 99999-9999" />
      </div>
      <div>
        CNPJ: <Mask value="11993621797" pattern="99.999.999/9999-99" />
      </div>
      <div>
        DATE: <Mask value="15101988" pattern="99/99/9999" />
      </div>

      <h3>Inputs</h3>
      <div>
        <Input.Phone label="Phone" value="11993621797" />
        <Input.CPF label="CPF" value="35841429892" />
        <Input.CNPJ label="CNPJ" value="99999999999999" />
        <Input.Date label="Date" value="15101988" />
        <Input.CEP label="CEP" value="06826510" />
      </div>
    </React.Fragment>
  ));
