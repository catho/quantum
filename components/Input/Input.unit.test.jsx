import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import MaskedInput from 'react-text-mask';
import Input from './Input';

describe('Input component ', () => {
  it('should match the snapshot', () => {
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
      <Input placeholder="this input has a placeholder" />,
    ];

    INPUTS.forEach(input =>
      expect(renderer.create(input).toJSON()).toMatchSnapshot(),
    );
  });

  it('should has a required signal when the required prop is true', () => {
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

  it('should has a searchable icon when "searchable" prop is true', () => {
    const component = shallow(
      <Input value="foo" label="label of input" searchable />,
    );
    const InputSearchIconElement = component
      .find('InputSearchIcon')
      .html()
      .includes('search');

    expect(InputSearchIconElement).toBeTruthy();
  });

  it('should has a error icon when the input error has a text', () => {
    const component = shallow(
      <Input value="foo" label="label of input" error="error text" />,
    );
    const InputErrorIconElement = component
      .find('InputErrorIcon')
      .html()
      .includes('error');

    expect(InputErrorIconElement).toBeTruthy();
  });

  it('should has a helper text when his input was set ', () => {
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

  it('should has a description label when his input was set', () => {
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

  it('should has a placeholder when the input placeholder has a text', () => {
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

  it('should has a cancel icon when the input value has a text', () => {
    const component = mount(<Input value="foo" label="label of input" />);
    const hasIcon = component.find('span.material-icons');
    expect(hasIcon).toBeTruthy();
    const cancelIcon = hasIcon.text();
    expect(cancelIcon).toEqual('cancel');
  });

  describe('with a label', () => {
    it('should match label "htmlFor" label param with "id" input param', () => {
      const input = <Input label="Text label" id="input-id" value="foo" />;

      const wrapper = mount(input);
      const inputTag = wrapper.find('InputTag');
      const label = wrapper.find('InputLabel');

      expect(label.prop('htmlFor')).toEqual(inputTag.prop('id'));
    });

    it('should match label "htmlFor" label param with generate "id"', () => {
      const input = <Input label="Text label" value="foo" />;
      const wrapper = shallow(input);
      const label = wrapper.find('InputLabel').prop('htmlFor');
      const maskedInput = wrapper.find(MaskedInput).prop('id');

      expect(label).toEqual(maskedInput);
    });
  });

  describe('with password type', () => {
    const wrapper = shallow(<Input type="password" />);

    const icon = () => wrapper.childAt(1);
    const visibilityIcon = () =>
      icon()
        .html()
        .includes('visibility');
    const visibilityOffIcon = () =>
      icon()
        .html()
        .includes('visibility_off');

    it('should has "password" as default input type', () => {
      expect(visibilityIcon()).toBeTruthy();
      expect(wrapper.state('type')).toEqual('password');
    });

    it('should toggle input type, when password icon is clicked', () => {
      icon().simulate('click');

      expect(visibilityOffIcon()).toBeTruthy();
      expect(wrapper.state('type')).toEqual('text');

      icon().simulate('click');

      expect(visibilityIcon()).toBeTruthy();
      expect(wrapper.state('type')).toEqual('password');
    });
  });

  describe('Generate Id', () => {
    it('should generate a new id for it instances', () => {
      const componentA = shallow(<Input value="foo" label="label of input" />);
      const componentB = shallow(<Input value="foo" label="label of input" />);
      const idA = componentA.find(MaskedInput).prop('id');
      const idB = componentB.find(MaskedInput).prop('id');

      expect(idA).not.toBe('');
      expect(idB).not.toBe('');
      expect(idA).not.toEqual(idB);
    });
  });
});
