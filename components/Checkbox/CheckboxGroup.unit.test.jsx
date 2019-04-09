import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import diff from 'jest-diff';
import stripAnsi from 'strip-ansi';
import CheckboxGroup from './CheckboxGroup';

const _create = ({
  enzymeMethod = shallow,
  groupOptions = {},
  children = [
    { name: 'Foo', checked: true },
    { name: 'Bar' },
    { name: 'Baz', checked: true },
  ],
} = {}) => ({
  withOptions: enzymeMethod(
    <CheckboxGroup options={children} {...groupOptions} />,
  ),
  withChildren: enzymeMethod(
    <CheckboxGroup {...groupOptions}>
      {children.map(option => (
        <CheckboxGroup.Checkbox {...option} key={option.name} />
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

    it(`should <CheckboxGroup /> have proper values state`, () => {
      const children = [
        { value: 'foo', name: 'Foo', checked: true },
        { value: 'bar', name: 'Bar' },
        { value: 'baz', name: 'Baz', checked: true },
      ];

      const { withOptions, withChildren } = _create({ children });

      const desiredState = [
        { value: 'foo', name: 'Foo', checked: true },
        { value: 'bar', name: 'Bar', checked: false },
        { value: 'baz', name: 'Baz', checked: true },
      ];

      expect(withChildren.state('values')).toEqual(desiredState);
      expect(withOptions.state('values')).toEqual(desiredState);
    });

    it(`should call onChange on every <${CheckboxItem.displayName} />`, () => {
      const onChildrenChangeMock = jest.fn();
      const onOptionsChangeMock = jest.fn();

      const { withChildren } = _create({
        groupOptions: {
          onChange: onChildrenChangeMock,
        },
      });

      const { withOptions } = _create({
        groupOptions: {
          onChange: onOptionsChangeMock,
        },
      });

      withChildren.find(CheckboxItem).forEach(checkbox =>
        checkbox.simulate('change', {
          target: {
            checked: true,
            name: checkbox.prop('name'),
          },
        }),
      );

      withOptions.find(CheckboxItem).forEach(checkbox => {
        checkbox.simulate('change', {
          target: {
            checked: true,
            name: checkbox.prop('name'),
          },
        });
      });

      expect(onChildrenChangeMock).toBeCalledTimes(3);
      expect(onOptionsChangeMock).toBeCalledTimes(3);
    });
  });
};

describe('<CheckboxGroup />', () => {
  describe('snapshot', () => {
    it('simple with options', () => {
      const options = [
        { name: 'Foo', label: 'Foo' },
        { name: 'Bar', label: 'Bar' },
        { name: 'Baz', label: 'Baz' },
      ];

      const component = <CheckboxGroup options={options} />;
      expect(renderer.create(component)).toMatchSnapshot();
    });

    it('simple with <CheckboxGroup.Checkbox />', () => {
      const component = (
        <CheckboxGroup>
          <CheckboxGroup.Checkbox name="Foo">Foo</CheckboxGroup.Checkbox>
          <CheckboxGroup.Checkbox name="Bar">Bar</CheckboxGroup.Checkbox>
          <CheckboxGroup.Checkbox name="Baz">Baz</CheckboxGroup.Checkbox>
        </CheckboxGroup>
      );
      expect(renderer.create(component)).toMatchSnapshot();
    });

    it('should render the same', () => {
      const options = [
        { name: 'Foo', label: 'Foo label' },
        { name: 'Bar', label: 'Bar label' },
        { name: 'Baz', label: 'Baz label' },
      ];

      const snapOptions = renderer
        .create(<CheckboxGroup options={options} />)
        .toJSON();

      const snapComposable = renderer
        .create(
          <CheckboxGroup>
            <CheckboxGroup.Checkbox name="Foo">Foo</CheckboxGroup.Checkbox>
            <CheckboxGroup.Checkbox name="Bar">Bar</CheckboxGroup.Checkbox>
            <CheckboxGroup.Checkbox name="Baz">Baz</CheckboxGroup.Checkbox>
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
