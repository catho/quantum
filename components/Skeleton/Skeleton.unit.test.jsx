import React from 'react';
import { render } from '@testing-library/react';
import Skeleton from './Skeleton';

describe('Skeleton component', () => {
  it('Should match the snapshot of a simple skeleton', () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should match the snapshot of a text skeleton', () => {
    const { container } = render(<Skeleton.Text />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should match the snapshot of a circular skeleton', () => {
    const { container } = render(
      <Skeleton.Circle height="56px" width="56px" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should match the snapshot of a Button component skeleton', () => {
    const { container } = render(<Skeleton.Button width="100px" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should match the snapshot of a Tag component loader', () => {
    const { container } = render(<Skeleton.Tag width="100px" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
