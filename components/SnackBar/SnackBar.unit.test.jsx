import React from 'react';
import renderer from 'react-test-renderer';
import SnackBar from './SnackBar';

describe('SnackBar component', () => {
  it('should match snapshots', () => {
    const SNACKBARS = [
      <SnackBar />,
      <SnackBar text="SnackBar message content " />,
      <SnackBar onClose={() => {}} />,
      <SnackBar closeButtonAriaLabel="close" />,
      <SnackBar secondsToClose={10} />,
    ];
    SNACKBARS.forEach(snackbar =>
      expect(renderer.create(snackbar).toJSON()).toMatchSnapshot(),
    );
  });
});
