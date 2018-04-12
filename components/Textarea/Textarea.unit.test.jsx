import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Textarea from './Textarea';

describe('Radio component', () => {
  const textarea = (<Textarea
    id="maxLength"
    name="maxLength"
    label="maxLength"
    maxLength={50}
  />);
  const wrapper = shallow(<div>{textarea}</div>);

  it('Should verify if Textarea contains the required properties', () => {
    expect(wrapper.find('Textarea')).toHaveLength(1);
    expect(wrapper.find('Textarea').prop('id')).toEqual('maxLength');
    expect(wrapper.find('Textarea').prop('name')).toEqual('maxLength');
    expect(wrapper.find('Textarea').prop('label')).toEqual('maxLength');
    expect(wrapper.find('Textarea').prop('maxLength')).toEqual(50);
  });

  it('Should match the snapshot', () => {
    const tree = renderer.create(textarea).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
