import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
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

  it('should has a required signal when "required" prop is set ', () => {
    const component = mount(<TextArea label="Text label" required />);
    expect(component.find('TextAreaLabel').text()).toMatch('*');
  });

  it('should have a placeholder when "placeholder" prop has a text ', () => {
    const placeholderText = 'this input has a placeholder';
    const component = mount(<TextArea placeholder={placeholderText} />);
    const textAreaPlaceholder = component
      .find('StyledTextArea')
      .prop('placeholder');

    expect(textAreaPlaceholder).toMatch(placeholderText);
  });

  it('should have a helper text when "helper text" prop has a text ', () => {
    const helperTextContent = 'this is a helper text';
    const component = mount(<TextArea helperText={helperTextContent} />);
    const textAreaHelperText = component.find('HelperText').text();

    expect(textAreaHelperText).toMatch(helperTextContent);
  });

  it.only('should have a error text when "error" prop is set', () => {
    const errorMessageContent = 'Error message';
    const component = mount(<TextArea error={errorMessageContent} />);
    const errorMessage = component.find('TextAreaErrorMessage').text();
    expect(errorMessage).toMatch(errorMessageContent);
  });
});
