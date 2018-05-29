import React from 'react';
import renderer from 'react-test-renderer';
import Steps from './Steps';
import Step from '../../components/Steps/sub-components/Step';

describe('<Steps />', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create((
      <Steps>
        <Step title="Criação de conta" icon="person" status="done" />
        <Step title="Plano Forma de pagamento" icon="credit_card" status="active" />
        <Step title="Preencher o currículo" icon="description" />
      </Steps>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
