import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Steps from './Steps';
import Step from '../../components/Steps/sub-components/Step';

describe('Steps Component', () => {
  const component = (
    <Steps>
      <Step title="Criação de conta" icon="person" status="done" />
      <Step title="Plano Forma de pagamento" icon="credit_card" status="active" />
    </Steps>
  );
  const wrapper = shallow(component);

  it('Should match the snapshot', () => {
    const tree = renderer.create((component)).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should verify if Steps contains children', () => {
    expect(wrapper.find('Step')).toHaveLength(2);
  });
});
