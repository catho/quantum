import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import MaskedInput from 'react-text-mask';
import Input from './Input';
import masks from '../shared/masks';

describe('Input component ', () => {
  it('should match snapshots', () => {
    const INPUTS = [
      <Input />,
      <Input value="foo" />,
      <Input label="Text label" />,
      <Input error="Error message" />,
      <Input required />,
      <Input searchable />,
      <Input disabled />,
      <Input helperText="this is a helper text" />,
      <Input descriptionLabel="this is a description label" />,
      <Input descriptionLabel="this is a description label" searchable />,
      <Input placeholder="this input has a placeholder" />,
    ];

    INPUTS.forEach(input =>
      expect(renderer.create(input).toJSON()).toMatchSnapshot(),
    );
  });

  it('should has a required signal when "required" prop is set', () => {
    const component = shallow(
      <Input value="foo" label="label of input" required />,
    );
    const label = component.childAt(0);
    const requiredElement = label
      .childAt(1)
      .html()
      .includes('*');

    expect(requiredElement).toBeTruthy();
  });

  it('should has a searchable icon when "searchable" prop is set', () => {
    const component = shallow(
      <Input value="foo" label="label of input" searchable />,
    );
    const InputSearchIconElement = component
      .find('InputSearchIcon')
      .html()
      .includes('search');

    expect(InputSearchIconElement).toBeTruthy();
  });

  it('should has an error icon when "error" prop is set', () => {
    const component = shallow(
      <Input value="foo" label="label of input" error="error text" />,
    );
    const InputErrorIconElement = component
      .find('InputErrorIcon')
      .html()
      .includes('error');

    expect(InputErrorIconElement).toBeTruthy();
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

    const placeholderProp = component.find('InputTag').prop('placeholder');
    expect(placeholderProp).toEqual(placeholderContent);
  });

  it('should has a cancel icon when input value is not empty', () => {
    const component = mount(<Input value="foo" label="label of input" />);
    const hasIcon = component.find('span.material-icons');
    expect(hasIcon).toBeTruthy();

    const cancelIcon = hasIcon.text();
    expect(cancelIcon).toEqual('cancel');
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

  describe('with a label', () => {
    it('should match label "htmlFor" label param with "id" input param', () => {
      const input = <Input label="Text label" id="input-id" value="foo" />;
      const wrapper = mount(input);
      const inputTag = wrapper.find('InputTag');
      const label = wrapper.find('InputLabel');

      expect(label.prop('htmlFor')).toEqual(inputTag.prop('id'));
    });

    it('should match label "htmlFor" label param and "input" param with generated id', () => {
      const wrapper = shallow(<Input label="Text label" value="foo" />);
      const labelId = wrapper.find('InputLabel').prop('htmlFor');
      const inputId = wrapper.find(MaskedInput).prop('id');

      expect(labelId).toEqual(inputId);
    });
  });

  describe('with password type', () => {
    const wrapper = shallow(<Input type="password" />);

    const icon = () => wrapper.childAt(1);

    const visibilityIcon = () =>
      icon()
        .html()
        .includes('visibility');

    it('should has "password" as default input type', () => {
      expect(visibilityIcon()).toBeTruthy();
      expect(wrapper.state('type')).toEqual('password');
    });

    it('should toggle input type, when password icon is clicked', () => {
      const visibilityOffIcon = () =>
        icon()
          .html()
          .includes('visibility_off');

      icon().simulate('click');
      expect(visibilityOffIcon()).toBeTruthy();
      expect(wrapper.state('type')).toEqual('text');

      icon().simulate('click');
      expect(visibilityIcon()).toBeTruthy();
      expect(wrapper.state('type')).toEqual('password');
    });
  });
});
