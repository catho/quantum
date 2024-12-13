import { fireEvent, render, screen } from '@testing-library/react';
import RadioGroup from './RadioGroup';

const _childrenTest = (RadioItem) => {
  describe(`<${RadioItem.displayName} />`, () => {
    it(`should render three <${RadioItem.displayName} />`, () => {
      render(
        <RadioGroup name="foo">
          <RadioItem value="Foo">Foo</RadioItem>
          <RadioItem value="Bar">Bar</RadioItem>
          <RadioItem value="Baz">Baz</RadioItem>
        </RadioGroup>,
      );

      expect(screen.getAllByRole('radio')).toHaveLength(3);
    });

    it(`every <${RadioItem.displayName} /> should have the <RadioGroup /> name`, () => {
      render(
        <RadioGroup name="foo">
          <RadioItem value="Foo">Foo</RadioItem>
          <RadioItem value="Bar">Bar</RadioItem>
          <RadioItem value="Baz">Baz</RadioItem>
        </RadioGroup>,
      );
      const radios = screen.getAllByRole('radio');

      radios.map((radio) => expect(radio.getAttribute('name')).toEqual('foo'));
    });

    if (RadioItem.displayName === 'RadioGroup.Radio') {
      it(`should have <${RadioItem.displayName} /> defaultChecked matching <RadioGroup /> defaultValue`, () => {
        render(
          <RadioGroup name="foo" defaultValue="Bar">
            <RadioItem value="Foo">Foo</RadioItem>
            <RadioItem value="Bar">Bar</RadioItem>
            <RadioItem value="Baz">Baz</RadioItem>
          </RadioGroup>,
        );
        const radios = screen.getByRole('radio', { name: 'Bar' });
        expect(radios).toHaveAttribute('checked');
      });
    }

    it(`should call onChange on every <${RadioItem.displayName} />`, () => {
      const onChangeMock = jest.fn();

      render(
        <RadioGroup name="foo" onChange={onChangeMock}>
          <RadioItem value="Foo">Foo</RadioItem>
          <RadioItem value="Bar">Bar</RadioItem>
          <RadioItem value="Baz">Baz</RadioItem>
        </RadioGroup>,
      );

      const radios = screen.getAllByRole('radio');

      radios.map((radio) => fireEvent.click(radio));

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

      const { container } = render(<RadioGroup name="foo" options={options} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('simple with button options', () => {
      const options = [
        { value: 'Foo', label: 'Foo' },
        { value: 'Bar', label: 'Bar' },
        { value: 'Baz', label: 'Baz' },
      ];

      const { container } = render(
        <RadioGroup name="foo" options={options} type="button" />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('simple with <RadioGroup.Radio />', () => {
      const { container } = render(
        <RadioGroup name="groceries">
          <RadioGroup.Radio value="Foo">Foo</RadioGroup.Radio>
          <RadioGroup.Radio value="Bar">Bar</RadioGroup.Radio>
          <RadioGroup.Radio value="Baz">Baz</RadioGroup.Radio>
        </RadioGroup>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('simple with <RadioGroup.Button />', () => {
      const { container } = render(
        <RadioGroup name="groceries">
          <RadioGroup.Button value="Foo">Foo</RadioGroup.Button>
          <RadioGroup.Button value="Bar">Bar</RadioGroup.Button>
          <RadioGroup.Button value="Baz">Baz</RadioGroup.Button>
        </RadioGroup>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('simple with <RadioGroup.Button /> inline', () => {
      const { container } = render(
        <RadioGroup name="groceries" inline>
          <RadioGroup.Button value="Foo">Foo</RadioGroup.Button>
          <RadioGroup.Button value="Bar">Bar</RadioGroup.Button>
          <RadioGroup.Button value="Baz">Baz</RadioGroup.Button>
        </RadioGroup>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('with an error', () => {
      const { container } = render(
        <RadioGroup name="groceries" error="Error text">
          <RadioGroup.Radio value="Foo">Foo</RadioGroup.Radio>
        </RadioGroup>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render the same', () => {
      const options = [
        { value: 'Foo', label: 'Foo' },
        { value: 'Bar', label: 'Bar' },
        { value: 'Baz', label: 'Baz' },
      ];

      const { container: snapOptions } = render(
        <RadioGroup name="foo" options={options} />,
      );

      const { container: snapComposable } = render(
        <RadioGroup name="foo">
          <RadioGroup.Radio value="Foo">Foo</RadioGroup.Radio>
          <RadioGroup.Radio value="Bar">Bar</RadioGroup.Radio>
          <RadioGroup.Radio value="Baz">Baz</RadioGroup.Radio>
        </RadioGroup>,
      );

      expect(snapOptions).toMatchDiffSnapshot(snapComposable);
    });

    it('should render the same, with <RadioGroup.Button />', () => {
      const options = [
        { value: 'Foo', label: 'Foo' },
        { value: 'Bar', label: 'Bar' },
        { value: 'Baz', label: 'Baz' },
      ];

      const { container: snapOptions } = render(
        <RadioGroup name="foo" options={options} type="button" />,
      );

      const { container: snapComposable } = render(
        <RadioGroup name="foo">
          <RadioGroup.Button value="Foo">Foo</RadioGroup.Button>
          <RadioGroup.Button value="Bar">Bar</RadioGroup.Button>
          <RadioGroup.Button value="Baz">Baz</RadioGroup.Button>
        </RadioGroup>,
      );

      expect(snapOptions).toMatchDiffSnapshot(snapComposable);
    });

    it('with required', () => {
      const { container } = render(
        <RadioGroup name="groceries" required>
          <RadioGroup.Radio value="Foo">Foo</RadioGroup.Radio>
        </RadioGroup>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('with inline', () => {
      const options = [
        { value: 'Foo', label: 'Foo' },
        { value: 'Bar', label: 'Bar' },
        { value: 'Baz', label: 'Baz' },
      ];

      const { container } = render(
        <RadioGroup inline name="foo" options={options} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  _childrenTest(RadioGroup.Radio);
  _childrenTest(RadioGroup.Button);
});
