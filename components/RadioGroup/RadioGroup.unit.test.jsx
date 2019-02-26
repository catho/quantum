import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import diff from 'jest-diff';
import stripAnsi from 'strip-ansi';
import RadioGroup from './RadioGroup';

describe('<RadioGroup />', () => {
  describe('snapshot', () => {
    it('simple with options', () => {
      const options = [
        { value: 'Foo', label: 'Foo' },
        { value: 'Bar', label: 'Bar' },
        { value: 'Baz', label: 'Baz' },
      ];

      const component = <RadioGroup name="foo" options={options} />;
      expect(renderer.create(component)).toMatchSnapshot();
    });

    it('simple with <RadioGroup.Radio />', () => {
      const component = (
        <RadioGroup name="groceries">
          <RadioGroup.Radio value="Foo">Foo</RadioGroup.Radio>
          <RadioGroup.Radio value="Bar">Bar</RadioGroup.Radio>
          <RadioGroup.Radio value="Baz">Baz</RadioGroup.Radio>
        </RadioGroup>
      );
      expect(renderer.create(component)).toMatchSnapshot();
    });

    it('should render the same', () => {
      const options = [
        { value: 'Foo', label: 'Foo' },
        { value: 'Bar', label: 'Bar' },
        { value: 'Baz', label: 'Baz' },
      ];

      const snapOptions = renderer
        .create(<RadioGroup name="foo" options={options} />)
        .toJSON();

      const snapComposable = renderer
        .create(
          <RadioGroup name="foo">
            <RadioGroup.Radio value="Foo">Foo</RadioGroup.Radio>
            <RadioGroup.Radio value="Bar">Bar</RadioGroup.Radio>
            <RadioGroup.Radio value="Baz">Baz</RadioGroup.Radio>
          </RadioGroup>,
        )
        .toJSON();

      expect(
        `Snapshot Diff:\n ${stripAnsi(diff(snapOptions, snapComposable))}`,
      ).toMatchSnapshot();
    });
  });

  describe('<RadioGroup.Radio />', () => {
    it('simple case', () => {
      const component = (
        <RadioGroup name="foo">
          <RadioGroup.Radio value="Foo">Foo</RadioGroup.Radio>
          <RadioGroup.Radio value="Bar">Bar</RadioGroup.Radio>
          <RadioGroup.Radio value="Baz">Baz</RadioGroup.Radio>
        </RadioGroup>
      );
      const wrapper = shallow(component);
      const radios = wrapper.find(RadioGroup.Radio);

      expect(radios).toHaveLength(3);
    });

    it('every <RadioGroup.Radio /> should have the <RadioGroup /> name', () => {
      const component = (
        <RadioGroup name="foo">
          <RadioGroup.Radio value="Foo">Foo</RadioGroup.Radio>
          <RadioGroup.Radio value="Bar">Bar</RadioGroup.Radio>
          <RadioGroup.Radio value="Baz">Baz</RadioGroup.Radio>
        </RadioGroup>
      );
      const wrapper = mount(component);
      const radios = wrapper.find(RadioGroup.Radio);

      radios.map(radio =>
        expect(radio.prop('name')).toBe(wrapper.prop('name')),
      );
    });

    it('should have selected prop', () => {
      const component = (
        <RadioGroup name="foo" value="Bar">
          <RadioGroup.Radio value="Foo">Foo</RadioGroup.Radio>
          <RadioGroup.Radio value="Bar">Bar</RadioGroup.Radio>
          <RadioGroup.Radio value="Baz">Baz</RadioGroup.Radio>
        </RadioGroup>
      );
      const wrapper = shallow(component);
      const radios = wrapper.find(RadioGroup.Radio);

      const radioBar = radios.at(1);
      expect(radioBar.prop('checked')).toBe(true);
    });

    it('should call onChange on every <RadioGroup.Radio />', () => {
      const onChangeMock = jest.fn();

      const component = (
        <RadioGroup name="foo" onChange={onChangeMock}>
          <RadioGroup.Radio value="Foo">Foo</RadioGroup.Radio>
          <RadioGroup.Radio value="Bar">Bar</RadioGroup.Radio>
          <RadioGroup.Radio value="Baz">Baz</RadioGroup.Radio>
        </RadioGroup>
      );

      const wrapper = shallow(component);
      const radios = wrapper.find(RadioGroup.Radio);

      radios.map(radio => radio.simulate('change'));

      expect(onChangeMock).toBeCalledTimes(3);
    });
  });
});
