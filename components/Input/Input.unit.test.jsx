import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input component ', () => {
  it('should match the snapshot', () => {
    expect(renderer.create(<Input value="foo" />).toJSON()).toMatchSnapshot();
  });

  it('with an error message should match the snapshot', () => {
    expect(renderer.create(<Input value="foo" error="Error message" />).toJSON()).toMatchSnapshot();
  });

  describe('with a label', () => {
    const input = <Input label="Text label" id="input-with-label" value="foo" />;

    it('should match the snapshot', () => {
      expect(renderer.create(input).toJSON()).toMatchSnapshot();
    });

    it('should match label "htmlFor" label param with "id" input param', () => {
      const wrapper = shallow(input);
      const label = wrapper.childAt(0);
      const styledInput = wrapper.childAt(1);

      expect(label.prop('htmlFor')).toEqual(styledInput.prop('id'));
    });
  });
});
