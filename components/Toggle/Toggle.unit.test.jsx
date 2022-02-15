import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Toggle from './Toggle';

describe('<Toggle /> ', () => {
  it('should match snapshot without props', () => {
    expect(render(<Toggle />).asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with checked prop', () => {
    expect(render(<Toggle checked />).asFragment()).toMatchSnapshot();
  });

  it('should call onChange callback when toggle is clicked', () => {
    const onChangeMock = jest.fn();
    render(<Toggle onChange={onChangeMock} />);

    const toggle = screen.getByRole('switch');
    fireEvent.click(toggle);

    expect(onChangeMock).toHaveBeenCalled();
  });

  it('should render unchecked', () => {
    render(<Toggle />);

    const toggleChecked = screen.getByRole('switch', { checked: false });

    expect(toggleChecked).toBeInTheDocument();
  });

  it('should render checked when prop checked is received', () => {
    render(<Toggle checked />);

    const toggleChecked = screen.getByRole('switch', { checked: true });

    expect(toggleChecked).toBeInTheDocument();
  });
});
