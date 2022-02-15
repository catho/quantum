import React from 'react';
import { render, screen } from '@testing-library/react';
import Link from './Link';

const ChildrenExample = 'Unit test';

describe(' Link', () => {
  it('Should match the default snapshot', () => {
    const { container } = render(
      <Link href="_blank" rel="noreferrer">
        Link
      </Link>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should match the default snapshot without underline', () => {
    const { container } = render(
      <Link href="_blank" rel="noreferrer" skin="dark" underline={false}>
        Link
      </Link>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should match the dark snapshot', () => {
    const { container } = render(
      <Link href="_blank" rel="noreferrer" skin="dark">
        Link
      </Link>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should render the children', () => {
    render(
      <Link href="_blank" rel="noreferrer">
        {ChildrenExample}
      </Link>,
    );
    expect(screen.getByText(ChildrenExample)).toBeInTheDocument();
  });
});
