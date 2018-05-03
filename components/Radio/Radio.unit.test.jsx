import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import RadioGroup from './RadioGroup';
import Radio from './Radio';

describe('Radio component', () => {
  const onChangeMock = jest.fn();

  const radioButton = (<Radio
    id="radio"
    name="radio"
    value="1"
    label="Hello"
    onChange={onChangeMock}
  />);

  const wrapper = shallow(<RadioGroup>{radioButton}</RadioGroup>);

  it('Should verify if Radio contains the required properties', () => {
    expect(wrapper.find('Radio')).toHaveLength(1);
    expect(wrapper.find('Radio').prop('id')).toEqual('radio');
    expect(wrapper.find('Radio').prop('name')).toEqual('radio');
    expect(wrapper.find('Radio').prop('value')).toEqual('1');
    expect(wrapper.find('Radio').prop('label')).toEqual('Hello');
    expect(wrapper.find('Radio').prop('onChange')).toEqual(onChangeMock);
  });

  it('Should match the snapshot', () => {
    const tree = renderer.create(radioButton).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should call "onChange" when the radio changes', () => {
    const event = { target: { name: 'radio', value: '1' } };
    const value = { checked: '1' };

    const component = shallow(radioButton);

    component.find('#radio').simulate('change', event);
    component.update();

    expect(onChangeMock).toBeCalledWith(event, value);
  });
});
