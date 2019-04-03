import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SnackBar from './SnackBar';

describe('<SnackBar />', () => {
  const actionTriggerEventMock = jest.fn();
  const onCloseEventMock = jest.fn();
  const CloseButtonAriaLabel = 'close';
  const secondsToClose = 1;

  const actionTrigger = {
    title: 'ACTION',
    callbackFn: actionTriggerEventMock,
  };

  let component;
  const SnackBarComponent = (
    <SnackBar
      text="SnackBar message content"
      secondsToClose={secondsToClose}
      onClose={onCloseEventMock}
      closeButtonAriaLabel={CloseButtonAriaLabel}
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

    SNACKBARS.forEach(snackbar => {
      const SnackComponent = mount(snackbar);
      expect(toJson(SnackComponent)).toMatchSnapshot();
      SnackComponent.unmount();
    });
  });

  afterEach(() => {
    if (component && component.length) {
      component.unmount();
    }
  });

  it('should call on close event callback', () => {
    component = mount(SnackBarComponent);
    component.find('CloseIcon').simulate('click');
    expect(onCloseEventMock).toHaveBeenCalled();
  });

  it('should call action trigger callback', () => {
    component = mount(SnackBarComponent);
    component.find('ActionButton').simulate('click');
    expect(actionTriggerEventMock).toHaveBeenCalled();
  });

  it('should action trigger title has the same of the prop object', () => {
    component = mount(SnackBarComponent);
    const actionTriggerText = component.find('ActionButton').text();
    expect(actionTrigger.title).toMatch(actionTriggerText);
  });

  it('should have a close icon when its props is set', () => {
    component = mount(SnackBarComponent);
    const closeIconContent = component.find('CloseIcon').text();
    expect(closeIconContent).toMatch('close');
  });

  it('should the arial label os close button prop be the same of the props setted', () => {
    component = mount(SnackBarComponent);
    const ariaLabelContent = component.find('CloseIcon').prop('aria-label');
    expect(CloseButtonAriaLabel).toMatch(ariaLabelContent);
  });

  it('(a11y) should the dialog has the same id of content', () => {
    component = mount(SnackBarComponent);
    const snackBarDialogAriaDescribedBy = component
      .find('SnackBarDialog')
      .prop('aria-describedby');
    const snackBarDialogTextContainerId = component
      .find('TextContainer')
      .prop('id');
    expect(snackBarDialogAriaDescribedBy).toMatch(
      snackBarDialogTextContainerId,
    );
  });

  it('(a11y) should close component when the close button was confirmed by keyboard', () => {
    component = mount(SnackBarComponent);
    component.find('CloseIcon').simulate('keypress', { key: 'Enter' });
    expect(onCloseEventMock).toHaveBeenCalled();
  });

  it('(a11y) should focus the action button when component was rendered', () => {
    component = mount(SnackBarComponent);
    const focusedElement = document.activeElement;
    expect(component.find('ActionButton').getDOMNode()).toEqual(focusedElement);
  });

  it('(a11y) should close the component by secondsToClose prop time setted', () => {
    component = mount(SnackBarComponent);

    const secondsToCloseProp = component
      .find('SnackBarDialog')
      .prop('secondsToClose');

    expect(secondsToCloseProp).toBe(secondsToClose);

    setTimeout(() => {
      expect(onCloseEventMock).toHaveBeenCalled();
    }, secondsToClose);
  });

  it('should be child of body element', () => {
    expect(document.body.childNodes.length).toBe(0);
    mount(SnackBarComponent);
    expect(document.body.childNodes.length).toBe(1);
  });
});
