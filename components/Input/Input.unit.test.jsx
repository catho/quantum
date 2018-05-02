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

  it('with a passwordLink prop should match the snapshot', () => {
    expect(renderer.create(<Input value="foo" passwordLink="http://www.catho.com.br/" />).toJSON()).toMatchSnapshot();
  });

  describe('with a label', () => {
    const input = <Input label="Text label" id="input-with-label" value="foo" />;

    it('should match the snapshot', () => {
      expect(renderer.create(input).toJSON()).toMatchSnapshot();
    });

    it('should have withValue prop set to true when input have value', () => {
      const wrapper = shallow(input);
      const label = wrapper.childAt(1);

      expect(label.prop('withValue')).toEqual(true);
    });

    it('should have withValue prop set to false when input doesn\'t have value', () => {
      const inputWithoutValue = <Input label="Text label" id="withoutValue" />;
      const wrapper = shallow(inputWithoutValue);
      const label = wrapper.childAt(1);

      expect(label.prop('withValue')).toEqual(false);
    });

    it('should match label "htmlFor" label param with "id" input param', () => {
      const wrapper = shallow(input);
      const styledInput = wrapper.childAt(0);
      const label = wrapper.childAt(1);

      expect(label.prop('htmlFor')).toEqual(styledInput.prop('id'));
    });
  });
});
