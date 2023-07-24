import { fireEvent, render, screen } from '@testing-library/react';

import CheckboxGroup from './CheckboxGroup';

const options = [
  { label: 'Foo', name: 'Foo' },
  { label: 'Bar', name: 'Bar' },
  { label: 'Baz', name: 'Baz' },
];

const checkedOptions = [
  { label: 'Checked Label - 1', name: 'Checked Option 1', checked: true },
  { label: 'Checked Label - 2', name: 'Checked Option 2', checked: true },
];

const disabledOptions = [
  {
    label: 'Disabled Checked Label - 1',
    name: 'Disabled Option 1',
    disabled: true,
  },
  {
    label: 'Disabled Checked Label - 2',
    name: 'Disabled Option 2',
    disabled: true,
  },
];

const mixedOptions = [...options, ...checkedOptions, ...disabledOptions];

const onChangeMock = jest.fn();

describe('Checkbox group', () => {
  it('should match snapshots', () => {
    expect(
      render(<CheckboxGroup options={options} />).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(<CheckboxGroup options={checkedOptions} />).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(<CheckboxGroup options={disabledOptions} />).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(<CheckboxGroup options={mixedOptions} />).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <CheckboxGroup options={mixedOptions} error="Some error" />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(<CheckboxGroup options={mixedOptions} inline />).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <CheckboxGroup>
          {mixedOptions.map((item) => (
            <CheckboxGroup.Checkbox
              key={item.name}
              name={item.name}
              label={item.label}
              disabled={item.disabled}
              checked={item.checked}
            />
          ))}
        </CheckboxGroup>,
      ).asFragment(),
    ).toMatchSnapshot();
  });

  it('should match snapshots with different sizes', () => {
    expect(
      render(
        <CheckboxGroup options={mixedOptions} size="xsmall" />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <CheckboxGroup options={mixedOptions} inline size="xsmall" />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <CheckboxGroup options={mixedOptions} size="small" />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <CheckboxGroup options={mixedOptions} inline size="small" />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <CheckboxGroup options={mixedOptions} size="large" />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <CheckboxGroup options={mixedOptions} inline size="large" />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <CheckboxGroup options={mixedOptions} size="xlarge" />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <CheckboxGroup options={mixedOptions} inline size="xlarge" />,
      ).asFragment(),
    ).toMatchSnapshot();
  });

  it('should call on change function when an unchecked option is clicked', () => {
    render(<CheckboxGroup options={mixedOptions} onChange={onChangeMock} />);

    const uncheckedItems = screen.getAllByRole('checkbox', { checked: false });

    uncheckedItems.forEach((item) => {
      fireEvent.click(item);
    });

    expect(onChangeMock).toHaveBeenCalledTimes(5);
  });

  it('should call on change function when a checked option is clicked', () => {
    render(<CheckboxGroup options={mixedOptions} onChange={onChangeMock} />);

    const checkedItems = screen.getAllByRole('checkbox', { checked: true });

    checkedItems.forEach((item) => {
      fireEvent.click(item);
    });

    expect(onChangeMock).toHaveBeenCalledTimes(2);
  });
});

describe('Checkbox group with checkbox button', () => {
  it('should match snapshots', () => {
    expect(
      render(<CheckboxGroup options={options} type="button" />).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <CheckboxGroup options={checkedOptions} type="button" />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <CheckboxGroup options={disabledOptions} type="button" />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <CheckboxGroup options={mixedOptions} type="button" />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <CheckboxGroup
          options={mixedOptions}
          error="Some error"
          type="button"
        />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <CheckboxGroup options={mixedOptions} inline type="button" />,
      ).asFragment(),
    ).toMatchSnapshot();
  });

  it('should match snapshots with children', () => {
    expect(
      render(
        <CheckboxGroup>
          <>
            {mixedOptions.map((item) => (
              <CheckboxGroup.Button
                key={item.name}
                name={item.name}
                label={item.label}
                disabled={item.disabled}
                checked={item.checked}
              />
            ))}

            <CheckboxGroup.Button name="With value" value="With value" />

            <CheckboxGroup.Button
              name="Another name"
              error="Some error"
              onChange={() => {}}
            >
              Another value
            </CheckboxGroup.Button>
          </>
        </CheckboxGroup>,
      ).asFragment(),
    ).toMatchSnapshot();
  });

  it('should match snapshots with different sizes', () => {
    expect(
      render(
        <CheckboxGroup options={mixedOptions} size="xsmall" type="button" />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <CheckboxGroup
          options={mixedOptions}
          inline
          size="xsmall"
          type="button"
        />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <CheckboxGroup options={mixedOptions} size="small" type="button" />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <CheckboxGroup
          options={mixedOptions}
          inline
          size="small"
          type="button"
        />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <CheckboxGroup options={mixedOptions} size="large" type="button" />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <CheckboxGroup
          options={mixedOptions}
          inline
          size="large"
          type="button"
        />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <CheckboxGroup options={mixedOptions} size="xlarge" type="button" />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <CheckboxGroup
          options={mixedOptions}
          inline
          size="xlarge"
          type="button"
        />,
      ).asFragment(),
    ).toMatchSnapshot();
  });

  it('should call on change function when an unchecked option is clicked', () => {
    render(
      <CheckboxGroup
        options={mixedOptions}
        type="button"
        onChange={onChangeMock}
      />,
    );

    const uncheckedItems = screen.getAllByRole('checkbox', { checked: false });

    uncheckedItems.forEach((item) => {
      fireEvent.click(item);
    });

    expect(onChangeMock).toHaveBeenCalledTimes(5);
  });

  it('should call on change function when a checked option is clicked', () => {
    render(
      <CheckboxGroup
        options={mixedOptions}
        type="button"
        onChange={onChangeMock}
      />,
    );

    const checkedItems = screen.getAllByRole('checkbox', { checked: true });

    checkedItems.forEach((item) => {
      fireEvent.click(item);
    });

    expect(onChangeMock).toHaveBeenCalledTimes(2);
  });

  it('should call on change function on children', () => {
    render(
      <CheckboxGroup onChange={onChangeMock}>
        <>
          {mixedOptions.map((item) => (
            <CheckboxGroup.Button
              key={item.name}
              name={item.name}
              label={item.label}
              disabled={item.disabled}
              checked={item.checked}
            />
          ))}

          <CheckboxGroup.Button name="With value" value="With value" />

          <CheckboxGroup.Button name="Another name" error="Some error">
            Another value
          </CheckboxGroup.Button>
        </>
      </CheckboxGroup>,
    );

    const items = screen.getAllByRole('checkbox');

    items.forEach((item) => {
      fireEvent.click(item);
    });

    expect(onChangeMock).toHaveBeenCalledTimes(9);
  });
});
