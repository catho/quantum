import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import TextArea from './TextArea';

describe('TextArea component', () => {
  it('should match snapshots', () => {
    const TEXT_AREAS = [
      <TextArea />,
      <TextArea value="foo" />,
      <TextArea label="Text label" />,
      <TextArea label="Text label" required />,
      <TextArea disabled />,
      <TextArea placeholder="this input has a placeholder" />,
      <TextArea helperText="this is a helper text" />,
      <TextArea error="Error message" />,
    ];

    TEXT_AREAS.forEach(textArea =>
      expect(renderer.create(textArea).toJSON()).toMatchSnapshot(),
    );
  });

  it('should has a required signal when "required" and "label" props are set ', () => {
    const component = shallow(<TextArea label="Text label" required />);
    expect(component.find('InputLabel').text()).toMatch('*');
  });

  it('should have a placeholder when "placeholder" prop is set ', () => {
    const placeholderText = 'this input has a placeholder';
    const component = shallow(<TextArea placeholder={placeholderText} />);
    const textAreaPlaceholder = component
      .find('TextAreaTag')
      .prop('placeholder');

    expect(textAreaPlaceholder).toMatch(placeholderText);
  });

  it('should have a helper text when "helper text" prop is set ', () => {
    const helperTextContent = 'this is a helper text';
    const component = shallow(<TextArea helperText={helperTextContent} />);
    const textAreaHelperText = component.find('HelperText').text();

    expect(textAreaHelperText).toMatch(helperTextContent);
  });

  it('should have a error text when "error" prop is set', () => {
    const errorMessageContent = 'Error message';
    const component = shallow(<TextArea error={errorMessageContent} />);
    const errorMessage = component.find('InputErrorMessage').text();
    expect(errorMessage).toMatch(errorMessageContent);
  });

  it('should onChange props be called', () => {
    const onChangeEventMock = jest.fn();
    const wrapper = mount(
      <TextArea label="Text label" value="foo" onChange={onChangeEventMock} />,
    );
    const componentText = wrapper.find('TextAreaTag');
    componentText.simulate('change');
    expect(onChangeEventMock).toHaveBeenCalled();
  });

  describe('with a label', () => {
    it('should match label "htmlFor" label param with "id" input param', () => {
      const id = 'input-id';
      const wrapper = shallow(<TextArea label="Text label" id={id} />);
      const input = wrapper.find('TextAreaTag');
      const label = wrapper.find('InputLabel');
      const labelHtmlFor = label.prop('htmlFor');
      const inputId = input.prop('id');

      expect(labelHtmlFor).toEqual(id);
      expect(inputId).toEqual(id);
    });

    it('should match label "htmlFor" label param and "input" param with generated id', () => {
      const wrapper = shallow(<TextArea label="Text label" value="foo" />);
      const labelId = wrapper.find('InputLabel').prop('htmlFor');
      const inputId = wrapper.find('TextAreaTag').prop('id');

      expect(labelId).toEqual(inputId);
    });
  });
});
