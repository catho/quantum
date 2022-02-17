import { fireEvent, render, screen } from '@testing-library/react';

import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  it('should match the snapshot', () => {
    expect(render(<Checkbox name="foo" />).asFragment()).toMatchSnapshot();
    expect(
      render(<Checkbox name="foo" error="error message" />).asFragment(),
    ).toMatchSnapshot();
    expect(
      render(
        <Checkbox name="foo" error="error message" checked />,
      ).asFragment(),
    ).toMatchSnapshot();
    expect(
      render(<Checkbox name="foo" checked />).asFragment(),
    ).toMatchSnapshot();
    expect(
      render(<Checkbox name="foo" disabled />).asFragment(),
    ).toMatchSnapshot();
    expect(
      render(<Checkbox name="foo" label="Some text" />).asFragment(),
    ).toMatchSnapshot();
    expect(
      render(<Checkbox name="foo" checked disabled />).asFragment(),
    ).toMatchSnapshot();
  });

  it('should pass checked prop to checkbox starts checked', () => {
    render(<Checkbox name="foo" checked />);

    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('should apply id prop on htmlFor', () => {
    const { container } = render(<Checkbox name="foo" id="test" />);

    const { htmlFor } = container.querySelector('label');

    expect(htmlFor).toBe('test');
  });

  it('should get the checkbox status with its label', () => {
    render(<Checkbox name="foo" label="test" id="some-id" />);

    expect(screen.queryByLabelText(/test/i)).not.toBeChecked();
  });

  it('should call onChange prop when the checkbox is clicked', async () => {
    const mockFn = jest.fn();

    render(<Checkbox name="foo" onChange={mockFn} />);

    fireEvent.click(screen.getByRole('checkbox'));

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
