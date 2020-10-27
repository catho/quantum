import React from 'react';
import { shallow, mount } from 'enzyme';
import MaskedInput from 'react-text-mask';
import Input from './Input';
import masks from '../shared/masks';

describe('Input component', () => {
  it('should has a required signal when "required" prop is set', () => {
    const component = shallow(
      <Input value="foo" label="label of input" required />,
    );

    expect(component.find('InputLabel').text()).toMatch('*');
  });

  it('should has a search icon when type prop is set to "search" value', () => {
    const component = shallow(
      <Input value="foo" label="label of input" type="search" />,
    );

    const InputSearchIconElement = component.find('InputSearchIcon');

    expect(InputSearchIconElement).toHaveLength(1);
  });

  it('should has an error icon when "error" prop is set', () => {
    const component = shallow(
      <Input value="foo" label="label of input" error="error text" />,
    );
    const InputErrorIconElement = component.find('InputErrorIcon');

    expect(InputErrorIconElement).toHaveLength(1);
  });

  it('should has a helper text when "helperText" prop is set ', () => {
    const helperTextContent = 'this is a helper text';
    const component = shallow(
      <Input
        value="foo"
        label="label of input"
        helperText={helperTextContent}
      />,
    );
    const helperTextElementContent = component.find('HelperText').text();

    expect(helperTextElementContent).toEqual(helperTextContent);
  });

  it('should has a description label when "descriptionLabel" prop was set', () => {
    const descriptionLabelContent = 'this is a description label';
    const component = shallow(
      <Input
        value="foo"
        label="label of input"
        descriptionLabel={descriptionLabelContent}
      />,
    );
    const descriptionLabelElementContent = component
      .find('DescriptionLabel')
      .text();

    expect(descriptionLabelElementContent).toEqual(descriptionLabelContent);
  });

  it('should has a placeholder when "placeholder" is text', () => {
    const placeholderContent = 'this is a input placeholder';
    const component = mount(
      <Input
        value="foo"
        label="label of input"
        placeholder={placeholderContent}
      />,
    );

    const placeholderProp = component.find('TextInput').prop('placeholder');
    expect(placeholderProp).toEqual(placeholderContent);
  });

  it('should has a clear icon when input value is not empty', () => {
    const component = mount(<Input value="foo" label="label of input" />);
    const hasIcon = component.find('InputIcon Icon');

    expect(hasIcon).toBeTruthy();

    const clearIcon = hasIcon.prop('name');
    expect(clearIcon).toEqual('clear');
  });

  it('should generate a new id for it instance, when "id" prop is not set', () => {
    const componentA = shallow(<Input value="foo" label="label of input" />);
    const componentB = shallow(<Input value="foo" label="label of input" />);
    const inputIdA = componentA.find(MaskedInput).prop('id');
    const inputIdB = componentB.find(MaskedInput).prop('id');

    expect(inputIdA).not.toBe('');
    expect(inputIdB).not.toBe('');

    expect(inputIdA).not.toEqual(inputIdB);
  });

  it('should apply a mask prop to input value', () => {
    const input = mount(<Input mask={masks.cpf} value="99999999999" />);
    const { value } = input.find(MaskedInput).getDOMNode();

    expect(value).toBe('999.999.999-99');
  });

  it('should call onClean callback when prop is setted', () => {
    const onCleanMock = jest.fn();
    const component = shallow(<Input value="foo" onClean={onCleanMock} />);
    const inputIcon = component.find('InputIcon');
    inputIcon.simulate('click');
    expect(onCleanMock).toHaveBeenCalled();
  });

  it('should update state when value property is changed', () => {
    const component = mount(<Input value="foo" />);
    expect(component.state('currentValue')).toBe('foo');

    component.setProps({ value: 'bar' }).update();
    expect(component.state('currentValue')).toBe('bar');
  });

  describe('with a label', () => {
    it('should match label "htmlFor" label param with "id" input param', () => {
      const id = 'input-id';
      const wrapper = mount(<Input label="Text label" id={id} />);
      const input = wrapper.find('TextInput');
      const label = wrapper.find('InputLabel');
      const labelHtmlFor = label.prop('htmlFor');
      const inputId = input.prop('id');

      expect(labelHtmlFor).toEqual(id);
      expect(inputId).toEqual(id);
    });

    it('should match label "htmlFor" label param and "input" param with generated id', () => {
      const wrapper = shallow(<Input label="Text label" value="foo" />);
      const labelId = wrapper.find('InputLabel').prop('htmlFor');
      const inputId = wrapper.find(MaskedInput).prop('id');

      expect(labelId).toEqual(inputId);
    });
  });

  describe('with password type', () => {
    const wrapper = mount(<Input type="password" />);

    const icon = () => wrapper.find('InputIcon Icon');

    const visibilityIcon = () => icon().prop('name');

    it('should has "password" as default input type', () => {
      expect(visibilityIcon()).toBeTruthy();
      expect(visibilityIcon()).toEqual('visibility');
      expect(wrapper.state('type')).toEqual('password');
    });

    it('should toggle input type, when password icon is clicked', () => {
      const visibilityOffIcon = () => icon().prop('name');

      icon().simulate('click');
      expect(visibilityOffIcon()).toBeTruthy();
      expect(visibilityOffIcon()).toEqual('visibility_off');
      expect(wrapper.state('type')).toEqual('text');

      icon().simulate('click');
      expect(visibilityIcon()).toBeTruthy();
      expect(visibilityIcon()).toEqual('visibility');
      expect(wrapper.state('type')).toEqual('password');
    });
  });

  it('should onChange props be called', () => {
    const onChangeEventMock = jest.fn();
    const wrapper = mount(
      <Input label="Text label" value="foo" onChange={onChangeEventMock} />,
    );
    const componentInput = wrapper.find('TextInput');
    componentInput.simulate('change');
    expect(onChangeEventMock).toHaveBeenCalled();
  });
});
