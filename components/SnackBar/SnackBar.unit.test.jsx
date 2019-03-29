import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SnackBar from './SnackBar';

describe('<SnackBar />', () => {
  it('should match snapshots', () => {
    const SNACKBARS = [
      <SnackBar />,
      <SnackBar text="SnackBar message content " />,
      <SnackBar onClose={() => {}} />,
      <SnackBar closeButtonAriaLabel="close" />,
      <SnackBar secondsToClose={10} />,
      <SnackBar skin="black" />,
    ];
    SNACKBARS.forEach(snackbar =>
      expect(toJson(mount(snackbar))).toMatchSnapshot(),
    );
  });
});
