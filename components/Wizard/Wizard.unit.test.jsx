import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Wizard, Step } from '.';

describe('Wizard Component', () => {
  const component = (
    <Wizard>
      <Step title="Criação de conta" icon="person" status="done" />
      <Step
        title="Plano Forma de pagamento"
        icon="credit_card"
        status="active"
      />
    </Wizard>
  );
  const wrapper = shallow(component);

  it('Should match the snapshot', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should verify if Wizard contains children', () => {
    expect(wrapper.find('Step')).toHaveLength(2);
  });
});
