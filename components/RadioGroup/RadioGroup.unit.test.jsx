import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import RadioGroup from './RadioGroup';
import Radio from './Radio';

describe('<RadioGroup />', () => {
  const onChangeMock = jest.fn();

  const radioGroup = (
    <RadioGroup name="group" onChange={onChangeMock}>
      <Radio value="Foo" label="Foo" />
      <Radio value="Bar" label="Bar" />
      <Radio value="Baz" label="Baz" />
    </RadioGroup>
  );

  const shallowWrapper = shallow(radioGroup);

  function getRadios(wrapper) {
    return wrapper.find(RadioGroup.Radio);
  }

  let wrapper = mount(radioGroup);
  let radios = getRadios(wrapper);

  it('Should match the snapshot', () => {
    const tree = renderer.create(radioGroup).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('properties', () => {
    it('Should have defaults', () => {
      const {
        type: {
          attrs: [attributes],
        },
      } = shallowWrapper.get(0);
      expect(attributes).toHaveProperty('role', 'radiogroup');
    });

    it('Should set name to all <RadioGroup.Radio />', () => {
      radios.forEach(radio => {
        expect(radio.prop('name')).toBe(wrapper.prop('name'));
      });
    });

    it("Should have its first child's tabIndex set to 0 in case no <RadioGroup.Radio /> is checked", () => {
      expect(radios.first().prop('tabIndex')).toBe(0);
    });

    it('Should set the selected <RadioGroup.Radio />', () => {
      const secondRadio = radios.at(1);

      wrapper.setProps({ selected: secondRadio.prop('value') });

      wrapper.unmount();
      wrapper.mount();

      const updatedRadios = getRadios(wrapper);

      const firstUpdatedRadio = updatedRadios.at(0);
      const secondUpdatedRadio = updatedRadios.at(1);
      const lastUpdatedRadio = updatedRadios.at(2);

      expect(firstUpdatedRadio.prop('tabIndex')).toBe(-1);
      expect(secondUpdatedRadio.prop('tabIndex')).toBe(0);
      expect(secondUpdatedRadio.prop('aria-checked')).toBe(true);
      expect(lastUpdatedRadio.prop('tabIndex')).toBe(-1);
    });

    it('Should show error', () => {
      expect(wrapper.find('ErrorLabel').exists()).toBe(false);

      wrapper.setProps({
        error: 'Error message',
      });

      expect(wrapper.find('ErrorLabel').exists()).toBe(true);
    });
  });

  describe('events', () => {
    beforeEach(() => {
      wrapper = mount(radioGroup);
      radios = getRadios(wrapper);
    });

    it('Should check a <RadioGroup.Radio />', () => {
      const secondRadio = radios.at(1);

      expect(secondRadio.prop('tabIndex')).toBe(-1);
      expect(secondRadio.prop('aria-checked')).toBe(false);

      wrapper.instance().check(secondRadio.props());
      wrapper.update();

      const updatedRadios = getRadios(wrapper);

      const secondUpdatedRadio = updatedRadios.at(1);

      expect(secondUpdatedRadio.prop('tabIndex')).toBe(0);
      expect(secondUpdatedRadio.prop('aria-checked')).toBe(true);
    });

    it('Should check the next <RadioGroup.Radio />', () => {
      const secondRadio = radios.at(1);
      const lastRadio = radios.at(2);

      expect(secondRadio.prop('tabIndex')).toBe(-1);
      expect(secondRadio.prop('aria-checked')).toBe(false);
      expect(lastRadio.prop('tabIndex')).toBe(-1);
      expect(lastRadio.prop('aria-checked')).toBe(false);

      wrapper.instance().checkNext(secondRadio.props());
      wrapper.update();

      const updatedRadios = getRadios(wrapper);
      const secondUpdatedRadio = updatedRadios.at(1);
      const lastUpdatedRadio = updatedRadios.at(2);

      expect(secondUpdatedRadio.prop('tabIndex')).toBe(-1);
      expect(secondUpdatedRadio.prop('aria-checked')).toBe(false);
      expect(lastUpdatedRadio.prop('tabIndex')).toBe(0);
      expect(lastUpdatedRadio.prop('aria-checked')).toBe(true);
    });

    it('Should check the previous <RadioGroup.Radio />', () => {
      const secondRadio = radios.at(1);
      const lastRadio = radios.at(2);

      expect(secondRadio.prop('tabIndex')).toBe(-1);
      expect(secondRadio.prop('aria-checked')).toBe(false);
      expect(lastRadio.prop('tabIndex')).toBe(-1);
      expect(lastRadio.prop('aria-checked')).toBe(false);

      wrapper.instance().checkPrevious(secondRadio.props());
      wrapper.update();

      const updatedRadios = getRadios(wrapper);
      const secondUpdatedRadio = updatedRadios.at(1);
      const firstUpdatedRadio = updatedRadios.at(0);

      expect(firstUpdatedRadio.prop('tabIndex')).toBe(0);
      expect(firstUpdatedRadio.prop('aria-checked')).toBe(true);
      expect(secondUpdatedRadio.prop('tabIndex')).toBe(-1);
      expect(secondUpdatedRadio.prop('aria-checked')).toBe(false);
    });

    it("Should check it's first child in case no previous <RadioGroup.Radio /> ", () => {
      const firstRadio = radios.at(0);

      expect(firstRadio.prop('aria-checked')).toBe(false);

      wrapper.instance().checkPrevious(firstRadio.props());
      wrapper.update();

      const updatedRadios = getRadios(wrapper);
      const firstUpdatedRadio = updatedRadios.at(0);

      expect(firstUpdatedRadio.prop('tabIndex')).toBe(0);
      expect(firstUpdatedRadio.prop('aria-checked')).toBe(true);
    });

    it("Should check it's last child in case no next <RadioGroup.Radio /> ", () => {
      const lastRadio = radios.at(2);

      expect(lastRadio.prop('tabIndex')).toBe(-1);
      expect(lastRadio.prop('aria-checked')).toBe(false);

      wrapper.instance().checkNext(lastRadio.props());
      wrapper.update();

      const updatedRadios = getRadios(wrapper);
      const lastUpdatedRadio = updatedRadios.at(2);

      expect(lastUpdatedRadio.prop('tabIndex')).toBe(0);
      expect(lastUpdatedRadio.prop('aria-checked')).toBe(true);
    });

    it('Should check the next <RadioGroup.Radio />, skipping the disabled one', () => {
      wrapper.setProps({
        children: [
          <Radio value="Foo" label="Foo" />,
          <Radio value="Bar" label="Bar" disabled />,
          <Radio value="Baz" label="Baz" />,
        ],
      });

      wrapper.unmount();
      wrapper.mount();

      const firstRadio = radios.at(0);
      const lastRadio = radios.at(2);

      expect(lastRadio.prop('tabIndex')).toBe(-1);
      expect(lastRadio.prop('aria-checked')).toBe(false);

      wrapper.instance().checkNext(firstRadio.props());
      wrapper.update();

      const updatedRadios = getRadios(wrapper);
      const lastUpdatedRadio = updatedRadios.at(2);

      expect(lastUpdatedRadio.prop('tabIndex')).toBe(0);
      expect(lastUpdatedRadio.prop('aria-checked')).toBe(true);
    });

    it('Should check the only one <RadioGroup.Radio /> available', () => {
      wrapper.setProps({
        children: [
          <Radio value="Foo" label="Foo" />,
          <Radio value="Bar" label="Bar" disabled />,
          <Radio value="Baz" label="Baz" disabled />,
        ],
      });

      wrapper.unmount();
      wrapper.mount();

      const firstRadio = radios.at(0);

      expect(firstRadio.prop('aria-checked')).toBe(false);

      wrapper.instance().checkNext(firstRadio.props());
      wrapper.update();

      const updatedRadios = getRadios(wrapper);
      const firstUpdatedRadio = updatedRadios.at(0);

      expect(firstUpdatedRadio.prop('aria-checked')).toBe(true);
    });

    it('Should check the previous <RadioGroup.Radio />, skipping the disabled one', () => {
      wrapper.setProps({
        children: [
          <Radio value="Foo" label="Foo" />,
          <Radio value="Bar" label="Bar" disabled />,
          <Radio value="Baz" label="Baz" />,
        ],
      });

      wrapper.unmount();
      wrapper.mount();

      const newRadios = getRadios(wrapper);
      const firstRadio = newRadios.at(0);
      const lastRadio = newRadios.at(2);

      expect(firstRadio.prop('tabIndex')).toBe(0);
      expect(firstRadio.prop('aria-checked')).toBe(false);

      wrapper.instance().checkPrevious(lastRadio.props());
      wrapper.update();

      const updatedRadios = getRadios(wrapper);
      const firstUpdatedRadio = updatedRadios.at(0);

      expect(firstUpdatedRadio.prop('tabIndex')).toBe(0);
      expect(firstUpdatedRadio.prop('aria-checked')).toBe(true);
    });

    it('Should call onChange prop', () => {
      const firstRadio = radios.at(0);
      firstRadio.simulate('click');

      expect(onChangeMock).toHaveBeenCalled();
    });
  });
});
