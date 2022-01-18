import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Alert from './Alert';

describe('Alert component', () => {
  it('Should match the snapshot of a simple alert', () => {
    const { container } = render(
      <Alert onClose={() => {}}>Sample alert</Alert>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should match the snapshot with an icon', () => {
    const { container } = render(
      <Alert onClose={() => {}} icon="info">
        Sample alert
      </Alert>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should match a skin snapshot', () => {
    const { container: neutralContainer } = render(
      <Alert onClose={() => {}} skin="neutral">
        neutral
      </Alert>,
    );
    const { container: primaryContainer } = render(
      <Alert onClose={() => {}} skin="primary">
        blue
      </Alert>,
    );
    const { container: successContainer } = render(
      <Alert onClose={() => {}} skin="success">
        success
      </Alert>,
    );
    const { container: warningContainer } = render(
      <Alert onClose={() => {}} skin="warning">
        warning
      </Alert>,
    );
    const { container: errorContainer } = render(
      <Alert onClose={() => {}} skins="error">
        error
      </Alert>,
    );
    expect(neutralContainer.firstChild).toMatchSnapshot();
    expect(primaryContainer.firstChild).toMatchSnapshot();
    expect(successContainer.firstChild).toMatchSnapshot();
    expect(warningContainer.firstChild).toMatchSnapshot();
    expect(errorContainer.firstChild).toMatchSnapshot();
  });

  it('Should call the onClose function when button is clicked', () => {
    const onCloseMock = jest.fn();
    render(<Alert onClose={onCloseMock}>Sample alert</Alert>);

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    expect(onCloseMock).toBeCalled();
  });
});
