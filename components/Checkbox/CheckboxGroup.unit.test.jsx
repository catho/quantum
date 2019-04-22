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
    { name: 'Foo', checked: true },
    { name: 'Bar' },
    { name: 'Baz', checked: true },
  ],
  Item = CheckboxGroup.Checkbox,
} = {}) => ({
  withOptions: enzymeMethod(
    <CheckboxGroup
      options={children}
      {...groupOptions}
      type={Item === CheckboxGroup.Checkbox ? 'checkbox' : 'button'}
    />,
  ),
  withChildren: enzymeMethod(
    <CheckboxGroup {...groupOptions}>
      {children.map(option => (
        <Item {...option} key={option.name} />
      ))}
    </CheckboxGroup>,
  ),
});

const _childrenTest = CheckboxItem => {
  describe(`<${CheckboxItem.displayName} />`, () => {
    it(`should render three <${CheckboxItem.displayName} />`, () => {
      const { withOptions, withChildren } = _create({
        Item: CheckboxItem,
      });

      expect(withOptions.find(CheckboxItem)).toHaveLength(3);
      expect(withChildren.find(CheckboxItem)).toHaveLength(3);
    });

    it(`should call onChange on every <${
      CheckboxItem.displayName
    } /> change`, () => {
      const onChildrenChangeMock = jest.fn();
      const onOptionsChangeMock = jest.fn();

      const { withChildren } = _create({
        groupOptions: {
          onChange: onChildrenChangeMock,
        },
        enzymeMethod: mount,
        Item: CheckboxItem,
      });

      const { withOptions } = _create({
        groupOptions: {
          onChange: onOptionsChangeMock,
        },
        enzymeMethod: mount,
        Item: CheckboxItem,
      });

      withChildren.find(CheckboxItem).forEach(checkbox =>
        checkbox.find('HiddenCheckbox').simulate('change', {
          target: {
            checked: true,
            name: checkbox.prop('name'),
          },
        }),
      );

      withOptions.find(CheckboxItem).forEach(checkbox => {
        checkbox.find('HiddenCheckbox').simulate('change', {
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

    it('simple with options and type prop as "button"', () => {
      const options = [
        { name: 'Foo', label: 'Foo' },
        { name: 'Bar', label: 'Bar' },
        { name: 'Baz', label: 'Baz' },
      ];

      const component = <CheckboxGroup options={options} type="button" />;
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

    it('simple with <CheckboxGroup.Button />', () => {
      const component = (
        <CheckboxGroup>
          <CheckboxGroup.Button name="Foo">Foo</CheckboxGroup.Button>
          <CheckboxGroup.Button name="Bar">Bar</CheckboxGroup.Button>
          <CheckboxGroup.Button name="Baz">Baz</CheckboxGroup.Button>
        </CheckboxGroup>
      );
      expect(renderer.create(component)).toMatchSnapshot();
    });

    it('with <CheckboxGroup.Checkbox /> with an error', () => {
      const component = (
        <CheckboxGroup error="Error Message">
          <CheckboxGroup.Checkbox name="Foo">Foo</CheckboxGroup.Checkbox>
          <CheckboxGroup.Checkbox name="Bar">Bar</CheckboxGroup.Checkbox>
          <CheckboxGroup.Checkbox name="Baz">Baz</CheckboxGroup.Checkbox>
        </CheckboxGroup>
      );
      expect(renderer.create(component)).toMatchSnapshot();
    });

    it('with <CheckboxGroup.Button /> with an error', () => {
      const component = (
        <CheckboxGroup error="Error Message">
          <CheckboxGroup.Button name="Foo">Foo</CheckboxGroup.Button>
          <CheckboxGroup.Button name="Bar">Bar</CheckboxGroup.Button>
          <CheckboxGroup.Button name="Baz">Baz</CheckboxGroup.Button>
        </CheckboxGroup>
      );
      expect(renderer.create(component)).toMatchSnapshot();
    });

    it('with <CheckboxGroup.Checkbox /> with disabled options', () => {
      const component = (
        <CheckboxGroup>
          <CheckboxGroup.Checkbox name="Foo" disabled>
            Foo
          </CheckboxGroup.Checkbox>
          <CheckboxGroup.Checkbox name="Bar">Bar</CheckboxGroup.Checkbox>
          <CheckboxGroup.Checkbox name="Baz" disabled checked>
            Baz
          </CheckboxGroup.Checkbox>
        </CheckboxGroup>
      );
      expect(renderer.create(component)).toMatchSnapshot();
    });

    it('with <CheckboxGroup.Button /> with disabled options', () => {
      const component = (
        <CheckboxGroup>
          <CheckboxGroup.Button name="Foo" disabled>
            Foo
          </CheckboxGroup.Button>
          <CheckboxGroup.Button name="Bar">Bar</CheckboxGroup.Button>
          <CheckboxGroup.Button name="Baz" disabled checked>
            Baz
          </CheckboxGroup.Button>
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

    it('should render the same, when using buttons', () => {
      const options = [
        { name: 'Foo', label: 'Foo label' },
        { name: 'Bar', label: 'Bar label' },
        { name: 'Baz', label: 'Baz label' },
      ];

      const snapOptions = renderer
        .create(<CheckboxGroup options={options} type="button" />)
        .toJSON();

      const snapComposable = renderer
        .create(
          <CheckboxGroup>
            <CheckboxGroup.Button name="Foo">Foo</CheckboxGroup.Button>
            <CheckboxGroup.Button name="Bar">Bar</CheckboxGroup.Button>
            <CheckboxGroup.Button name="Baz">Baz</CheckboxGroup.Button>
          </CheckboxGroup>,
        )
        .toJSON();

      expect(
        `Snapshot Diff:\n ${stripAnsi(diff(snapOptions, snapComposable))}`,
      ).toMatchSnapshot();
    });

    it('with <CheckboxGroup.Button /> and icons', () => {
      const component = (
        <CheckboxGroup>
          <CheckboxGroup.Button name="Foo" icon="print">
            Foo
          </CheckboxGroup.Button>
          <CheckboxGroup.Button name="Bar">Bar</CheckboxGroup.Button>
          <CheckboxGroup.Button name="Baz" icon="face">
            Baz
          </CheckboxGroup.Button>
        </CheckboxGroup>
      );
      expect(renderer.create(component)).toMatchSnapshot();
    });
  });

  _childrenTest(CheckboxGroup.Checkbox);
  _childrenTest(CheckboxGroup.Button);
});
