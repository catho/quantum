import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Breadcrumbs from './Breadcrumbs';
import defaultContent from './exampleContents';

const mockScrollWidth = (value = 450) => {
  // eslint-disable-next-line no-undef
  Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
    configurable: true,
    value,
  });
};

const mockWindowInnerWidth = (value = 360) => {
  Object.assign(window, { innerWidth: value });
};

describe('<Breadcrumbs />', () => {
  it('should match the snapshots', () => {
    const { asFragment } = render(<Breadcrumbs items={defaultContent} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should match the snapshots when breadcrumbs is collapsed', () => {
    mockScrollWidth();
    mockWindowInnerWidth();

    const { asFragment } = render(<Breadcrumbs items={defaultContent} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should match the snapshots when collapsed breadcrumbs is expanded', () => {
    mockScrollWidth();
    mockWindowInnerWidth();

    const { getByText, asFragment } = render(
      <Breadcrumbs items={defaultContent} />,
    );

    const firstRender = asFragment();

    fireEvent.click(getByText('...'));

    expect(firstRender).toMatchDiffSnapshot(asFragment());
  });

  it('should all links have href attribute', () => {
    render(<Breadcrumbs items={defaultContent} />);

    const links = screen.getAllByRole('link');

    const hasLinkWithoutHREFAttribute = links.some(
      link => !link.hasAttribute('href'),
    );

    expect(hasLinkWithoutHREFAttribute).toBe(false);
  });

  it('should receive an error when items length less than 2', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();

    const { container } = render(
      <Breadcrumbs items={[{ label: 'some-label', url: 'some-url' }]} />,
    );

    expect(container.firstChild).toBeNull();
    expect(consoleError).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});
