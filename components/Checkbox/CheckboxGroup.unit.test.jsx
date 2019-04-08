import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import diff from 'jest-diff';
import stripAnsi from 'strip-ansi';
import CheckboxGroup from './CheckboxGroup';

const _create = ({
  enzymeMethod = shallow,
  groupOptions = {},
  children = [
    { value: 'Foo', checked: true },
    { value: 'Bar' },
    { value: 'Baz', checked: true },
  ],
} = {}) => ({
  withOptions: enzymeMethod(
    <CheckboxGroup name="foo" options={children} {...groupOptions} />,
  ),
  withChildren: enzymeMethod(
    <CheckboxGroup name="foo" {...groupOptions}>
      {children.map(option => (
        <CheckboxGroup.Checkbox {...option} key={option.value} />
      ))}
    </CheckboxGroup>,
  ),
});

const _childrenTest = CheckboxItem => {
  describe(`<${CheckboxItem.displayName} />`, () => {
    it(`should render three <${CheckboxItem.displayName} />`, () => {
      const { withOptions, withChildren } = _create();

      expect(withOptions.find(CheckboxItem)).toHaveLength(3);
      expect(withChildren.find(CheckboxItem)).toHaveLength(3);
    });

    it(`every <${
      CheckboxItem.displayName
    } /> should have the <CheckboxGroup /> name`, () => {
      const { withOptions, withChildren } = _create({ enzymeMethod: mount });

      withChildren
        .find(CheckboxItem)
        .map(checkbox =>
          expect(checkbox.prop('name')).toBe(withChildren.prop('name')),
        );

      withOptions
        .find(CheckboxItem)
        .map(checkbox =>
          expect(checkbox.prop('name')).toBe(withOptions.prop('name')),
        );
    });

    it(`should <CheckboxGroup /> have proper values state`, () => {
      const children = [
        { value: 'Foo', checked: true },
        { value: 'Bar' },
        { value: 'Baz', checked: true },
      ];

      const { withOptions, withChildren } = _create({ children });

      const desiredState = {
        Foo: true,
        Bar: false,
        Baz: true,
      };

      expect(withChildren.state('values')).toEqual(desiredState);
      expect(withOptions.state('values')).toEqual(desiredState);
    });

    it(`should call onChange on every <${CheckboxItem.displayName} />`, () => {
      const onOptionsChangeMock = jest.fn();
      const onChildrenChangeMock = jest.fn();

      const { withOptions } = _create({
        groupOptions: {
          onChange: onOptionsChangeMock,
        },
      });

      const { withChildren } = _create({
        groupOptions: {
          onChange: onChildrenChangeMock,
        },
      });

      withChildren.find(CheckboxItem).map(checkbox =>
        checkbox.simulate('change', {
          target: { checked: true },
        }),
      );

      withOptions.find(CheckboxItem).map(checkbox =>
        checkbox.simulate('change', {
          target: { checked: true },
        }),
      );

      expect(onOptionsChangeMock).toBeCalledTimes(3);
      expect(onChildrenChangeMock).toBeCalledTimes(3);
    });
  });
};

describe('<CheckboxGroup />', () => {
  describe('snapshot', () => {
    it('simple with options', () => {
      const options = [
        { value: 'Foo', label: 'Foo' },
        { value: 'Bar', label: 'Bar' },
        { value: 'Baz', label: 'Baz' },
      ];

      const component = <CheckboxGroup name="foo" options={options} />;
      expect(renderer.create(component)).toMatchSnapshot();
    });

    it.skip('simple with button options', () => {
      const options = [
        { value: 'Foo', label: 'Foo' },
        { value: 'Bar', label: 'Bar' },
        { value: 'Baz', label: 'Baz' },
      ];

      const component = (
        <CheckboxGroup name="foo" options={options} type="button" />
      );
      expect(renderer.create(component)).toMatchSnapshot();
    });

    it('simple with <CheckboxGroup.Checkbox />', () => {
      const component = (
        <CheckboxGroup name="groceries">
          <CheckboxGroup.Checkbox value="Foo">Foo</CheckboxGroup.Checkbox>
          <CheckboxGroup.Checkbox value="Bar">Bar</CheckboxGroup.Checkbox>
          <CheckboxGroup.Checkbox value="Baz">Baz</CheckboxGroup.Checkbox>
        </CheckboxGroup>
      );
      expect(renderer.create(component)).toMatchSnapshot();
    });

    it.skip('simple with <CheckboxGroup.Button />', () => {
      const component = (
        <CheckboxGroup name="groceries">
          <CheckboxGroup.Button value="Foo">Foo</CheckboxGroup.Button>
          <CheckboxGroup.Button value="Bar">Bar</CheckboxGroup.Button>
          <CheckboxGroup.Button value="Baz">Baz</CheckboxGroup.Button>
        </CheckboxGroup>
      );
      expect(renderer.create(component)).toMatchSnapshot();
    });

    it.skip('simple with <CheckboxGroup.Button /> inline', () => {
      const component = (
        <CheckboxGroup name="groceries" inline>
          <CheckboxGroup.Button value="Foo">Foo</CheckboxGroup.Button>
          <CheckboxGroup.Button value="Bar">Bar</CheckboxGroup.Button>
          <CheckboxGroup.Button value="Baz">Baz</CheckboxGroup.Button>
        </CheckboxGroup>
      );
      expect(renderer.create(component)).toMatchSnapshot();
    });

    it('should render the same', () => {
      const options = [
        { value: 'Foo', label: 'Foo label' },
        { value: 'Bar', label: 'Bar label' },
        { value: 'Baz', label: 'Baz label' },
      ];

      const snapOptions = renderer
        .create(<CheckboxGroup name="foo" options={options} />)
        .toJSON();

      const snapComposable = renderer
        .create(
          <CheckboxGroup name="foo">
            <CheckboxGroup.Checkbox value="Foo">Foo</CheckboxGroup.Checkbox>
            <CheckboxGroup.Checkbox value="Bar">Bar</CheckboxGroup.Checkbox>
            <CheckboxGroup.Checkbox value="Baz">Baz</CheckboxGroup.Checkbox>
          </CheckboxGroup>,
        )
        .toJSON();

      expect(
        `Snapshot Diff:\n ${stripAnsi(diff(snapOptions, snapComposable))}`,
      ).toMatchSnapshot();
    });

    it.skip('should render the same, with <CheckboxGroup.Button />', () => {
      const options = [
        { value: 'Foo', label: 'Foo' },
        { value: 'Bar', label: 'Bar' },
        { value: 'Baz', label: 'Baz' },
      ];

      const snapOptions = renderer
        .create(<CheckboxGroup name="foo" options={options} type="button" />)
        .toJSON();

      const snapComposable = renderer
        .create(
          <CheckboxGroup name="foo">
            <CheckboxGroup.Button value="Foo">Foo</CheckboxGroup.Button>
            <CheckboxGroup.Button value="Bar">Bar</CheckboxGroup.Button>
            <CheckboxGroup.Button value="Baz">Baz</CheckboxGroup.Button>
          </CheckboxGroup>,
        )
        .toJSON();

      expect(
        `Snapshot Diff:\n ${stripAnsi(diff(snapOptions, snapComposable))}`,
      ).toMatchSnapshot();
    });
  });

  _childrenTest(CheckboxGroup.Checkbox);
});
