import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import diff from 'jest-diff';
import stripAnsi from 'strip-ansi';
import RadioGroup from './RadioGroup';

const _childrenTest = RadioItem => {
  describe(`<${RadioItem.displayName} />`, () => {
    it(`should render three <${RadioItem.displayName} />`, () => {
      const component = (
        <RadioGroup name="foo">
          <RadioItem value="Foo">Foo</RadioItem>
          <RadioItem value="Bar">Bar</RadioItem>
          <RadioItem value="Baz">Baz</RadioItem>
        </RadioGroup>
      );
      const wrapper = shallow(component);
      const radios = wrapper.find(RadioItem);

      expect(radios).toHaveLength(3);
    });

    it(`every <${
      RadioItem.displayName
    } /> should have the <RadioGroup /> name`, () => {
      const component = (
        <RadioGroup name="foo">
          <RadioItem value="Foo">Foo</RadioItem>
          <RadioItem value="Bar">Bar</RadioItem>
          <RadioItem value="Baz">Baz</RadioItem>
        </RadioGroup>
      );
      const wrapper = mount(component);
      const radios = wrapper.find(RadioItem);

      radios.map(radio =>
        expect(radio.prop('name')).toBe(wrapper.prop('name')),
      );
    });

    it(`should have <${
      RadioItem.displayName
    } /> defaultChecked matching <RadioGroup /> defaultValue`, () => {
      const component = (
        <RadioGroup name="foo" defaultValue="Bar">
          <RadioItem value="Foo">Foo</RadioItem>
          <RadioItem value="Bar">Bar</RadioItem>
          <RadioItem value="Baz">Baz</RadioItem>
        </RadioGroup>
      );
      const wrapper = shallow(component);
      const radios = wrapper.find(RadioItem);

      const radioBar = radios.at(1);
      expect(radioBar.prop('defaultChecked')).toBe(true);
    });

    it(`should call onChange on every <${RadioItem.displayName} />`, () => {
      const onChangeMock = jest.fn();

      const component = (
        <RadioGroup name="foo" onChange={onChangeMock}>
          <RadioItem value="Foo">Foo</RadioItem>
          <RadioItem value="Bar">Bar</RadioItem>
          <RadioItem value="Baz">Baz</RadioItem>
        </RadioGroup>
      );

      const wrapper = shallow(component);
      const radios = wrapper.find(RadioItem);

      radios.map(radio => radio.simulate('change'));

      expect(onChangeMock).toBeCalledTimes(3);
    });
  });
};

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

    it('simple with button options', () => {
      const options = [
        { value: 'Foo', label: 'Foo' },
        { value: 'Bar', label: 'Bar' },
        { value: 'Baz', label: 'Baz' },
      ];

      const component = (
        <RadioGroup name="foo" options={options} type="button" />
      );
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

    it('simple with <RadioGroup.Button />', () => {
      const component = (
        <RadioGroup name="groceries">
          <RadioGroup.Button value="Foo">Foo</RadioGroup.Button>
          <RadioGroup.Button value="Bar">Bar</RadioGroup.Button>
          <RadioGroup.Button value="Baz">Baz</RadioGroup.Button>
        </RadioGroup>
      );
      expect(renderer.create(component)).toMatchSnapshot();
    });

    it('simple with <RadioGroup.Button /> inline', () => {
      const component = (
        <RadioGroup name="groceries" inline>
          <RadioGroup.Button value="Foo">Foo</RadioGroup.Button>
          <RadioGroup.Button value="Bar">Bar</RadioGroup.Button>
          <RadioGroup.Button value="Baz">Baz</RadioGroup.Button>
        </RadioGroup>
      );
      expect(renderer.create(component)).toMatchSnapshot();
    });

    it('with an error', () => {
      const component = (
        <RadioGroup name="groceries" error="Error text">
          <RadioGroup.Radio value="Foo">Foo</RadioGroup.Radio>
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

    it('should render the same, with <RadioGroup.Button />', () => {
      const options = [
        { value: 'Foo', label: 'Foo' },
        { value: 'Bar', label: 'Bar' },
        { value: 'Baz', label: 'Baz' },
      ];

      const snapOptions = renderer
        .create(<RadioGroup name="foo" options={options} type="button" />)
        .toJSON();

      const snapComposable = renderer
        .create(
          <RadioGroup name="foo">
            <RadioGroup.Button value="Foo">Foo</RadioGroup.Button>
            <RadioGroup.Button value="Bar">Bar</RadioGroup.Button>
            <RadioGroup.Button value="Baz">Baz</RadioGroup.Button>
          </RadioGroup>,
        )
        .toJSON();

      expect(
        `Snapshot Diff:\n ${stripAnsi(diff(snapOptions, snapComposable))}`,
      ).toMatchSnapshot();
    });
  });

  _childrenTest(RadioGroup.Radio);
  _childrenTest(RadioGroup.Button);
});
