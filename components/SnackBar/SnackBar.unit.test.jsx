import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SnackBar from './SnackBar';

describe('<SnackBar />', () => {
  const actionTriggerEventMock = jest.fn();
  const onCloseEventMock = jest.fn();

  const actionTrigger = {
    title: 'ACTION',
    callbackFn: actionTriggerEventMock,
  };
  const SnackBarComponent = (
    <SnackBar
      text="SnackBar message content"
      secondsToClose={10}
      onClose={onCloseEventMock}
      closeButtonAriaLabel="close"
      skin="black"
      actionTrigger={actionTrigger}
    />
  );

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

  it('should call on close event callback', () => {
    const component = mount(SnackBarComponent);
    component.find('CloseIcon').simulate('click');
    expect(onCloseEventMock).toHaveBeenCalled();
  });

  it('should call action trigger callback', () => {
    const component = mount(SnackBarComponent);
    component.find('ActionButton').simulate('click');
    expect(actionTriggerEventMock).toHaveBeenCalled();
  });

  it('should action trigger title has the same of the prop object', () => {});

  it('should have a close icon when its props is set', () => {});

  it('(a11y) should the dialog has the same id of content', () => {});

  it('(a11y) should close component when the close button was confirmed by keyboard', () => {});

  it('(a11y) should focus the action button when component was rendered', () => {});

  it('should be child of body element', () => {
    expect(document.body.childNodes.length).toBe(8);
    mount(SnackBarComponent);
    expect(document.body.childNodes.length).toBe(9);
  });
});
