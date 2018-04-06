import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import RadioButton from './RadioButton';

describe('Button component', () => {
  const onChangeMock = jest.fn();
  const radioButton = (<RadioButton
    id="radio"
    name="radio"
    value="1"
    label="Hello"
    onChange={onChangeMock}
  />);
  const wrapper = shallow(<div>{radioButton}</div>);

  it('Should verify if RadioButton contains the required properties', () => {
    expect(wrapper.find('RadioButton')).toHaveLength(1);
    expect(wrapper.find('RadioButton').prop('id')).toEqual('radio');
    expect(wrapper.find('RadioButton').prop('name')).toEqual('radio');
    expect(wrapper.find('RadioButton').prop('value')).toEqual('1');
    expect(wrapper.find('RadioButton').prop('label')).toEqual('Hello');
    expect(wrapper.find('RadioButton').prop('onChange')).toEqual(onChangeMock);
  });

  it('Should match the snapshot', () => {
    const tree = renderer.create(radioButton).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
