import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Input from './Input';

describe('Input component ', () => {
  it('should match the snapshot', () => {
    expect(renderer.create(<Input value="foo" />).toJSON()).toMatchSnapshot();
    expect(
      renderer
        .create(<Input label="Text label" id="input-with-label" value="foo" />)
        .toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer.create(<Input value="foo" error="Error message" />).toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer.create(<Input value="foo" required />).toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer.create(<Input value="foo" isSearchable />).toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer
        .create(<Input value="foo" helperText="this is a helper text" />)
        .toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer
        .create(
          <Input value="foo" descriptionLabel="this is a description label" />,
        )
        .toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer.create(<Input value="foo" disabled />).toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer
        .create(<Input placeholder="this input has a placeholder" />)
        .toJSON(),
    ).toMatchSnapshot();
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

  it('should has a searchabel icon when IsSearchable prop is true', () => {
    const component = mount(
      <Input value="foo" label="label of input" isSearchable />,
    );
    const InputSearchIconElement = component
      .find('InputSearchIcon')
      .html()
      .includes('search');

    expect(InputSearchIconElement).toBeTruthy();
  });

  it('should has a error icon when the input error has a text', () => {
    const component = mount(
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
    const component = mount(
      <Input
        value="foo"
        label="label of input"
        helperText={helperTextContent}
      />,
    );
    const helperTextElementContent = component.find('HelperText').text();

    expect(helperTextElementContent).toEqual(helperTextContent);
  });

  it('should has a description label when his input was set ', () => {
    const descriptionLabelContent = 'this is a description label';
    const component = mount(
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
    const input = (
      <Input label="Text label" id="input-with-label" value="foo" />
    );

    it('should match label "htmlFor" label param with "id" input param', () => {
      const wrapper = shallow(input);
      const styledInput = wrapper.childAt(0);
      const label = wrapper.childAt(1);

      expect(label.prop('htmlFor')).toEqual(styledInput.prop('id'));
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

    it('should has "password", as default input type', () => {
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
});
