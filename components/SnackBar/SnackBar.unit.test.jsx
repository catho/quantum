import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SnackBar from './SnackBar';
import { GetAllSkinsIcons } from './IconTypes';

describe('<SnackBar />', () => {
  const actionTriggerEventMock = jest.fn();
  const onCloseEventMock = jest.fn();
  const CloseButtonAriaLabel = 'close';
  const secondsToClose = 1;

  const actionTrigger = {
    title: 'HIDE',
    callbackFn: actionTriggerEventMock,
  };

  let component;
  const SnackBarComponent = (
    <SnackBar
      text="SnackBar message content"
      secondsToClose={secondsToClose}
      onClose={onCloseEventMock}
      closeButtonAriaLabel={CloseButtonAriaLabel}
      actionTrigger={actionTrigger}
    />
  );

  const SnackBarComponentWithoutActionTriggers = (
    <SnackBar
      text="SnackBar message content"
      secondsToClose={secondsToClose}
      onClose={onCloseEventMock}
      closeButtonAriaLabel={CloseButtonAriaLabel}
    />
  );

  const SnackBarComponentWithNeutralSkin = (
    <SnackBar
      text="SnackBar message content"
      secondsToClose={secondsToClose}
      onClose={onCloseEventMock}
      closeButtonAriaLabel={CloseButtonAriaLabel}
      actionTrigger={actionTrigger}
      skin="neutral"
    />
  );

  const SnackBarComponentWithSuccessSkin = (
    <SnackBar
      text="SnackBar message content"
      secondsToClose={secondsToClose}
      onClose={onCloseEventMock}
      closeButtonAriaLabel={CloseButtonAriaLabel}
      skin="success"
    />
  );

  it('should match snapshots', () => {
    const SNACKBARS = [
      <SnackBar />,
      <SnackBar text="SnackBar message content " />,
      <SnackBar onClose={() => {}} />,
      <SnackBar closeButtonAriaLabel="close" />,
      <SnackBar secondsToClose={10} />,
      <SnackBar skin="neutral" />,
      <SnackBar skin="primary" />,
      <SnackBar skin="success" />,
      <SnackBar skin="warning" />,
      <SnackBar skin="error" />,
      <SnackBar skin="neutral" inverted />,
      <SnackBar skin="primary" inverted />,
      <SnackBar skin="success" inverted />,
      <SnackBar skin="warning" inverted />,
      <SnackBar skin="error" inverted />,
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

  it('should show the correct skin icon on the matched skin', () => {
    Object.entries(GetAllSkinsIcons()).forEach(([skin, skinIconName]) => {
      component = mount(
        <SnackBar
          text="SnackBar message content"
          onClose={onCloseEventMock}
          closeButtonAriaLabel={CloseButtonAriaLabel}
          skin={skin}
        />,
      );
      const iconName = component.find('SkinIcon').text();
      expect(iconName).toMatch(skinIconName);
      component.unmount();
    });
  });

  it('should not show the close left icon when the skin is different of neutral', () => {
    component = mount(SnackBarComponentWithSuccessSkin);
    expect(component.find('CloseIconLeft').exists()).toBe(false);
  });

  it('should not show the action button when the skin is different of neutral', () => {
    component = mount(SnackBarComponentWithSuccessSkin);
    expect(component.find('ActionButton').exists()).toBe(false);
  });

  it('should call the action button when the skin is neutral and have a action trigger', () => {
    component = mount(SnackBarComponentWithNeutralSkin);
    component.find('ActionButton').simulate('click');
    expect(actionTriggerEventMock).toHaveBeenCalled();
  });

  it('should call on close event callback with action triggers (call close icon in the left)', () => {
    component = mount(SnackBarComponent);
    component.find('CloseIconLeft').simulate('click');
    expect(onCloseEventMock).toHaveBeenCalled();
  });

  it('should call on close event callback without action triggers (call close icon in the right)', () => {
    component = mount(SnackBarComponentWithoutActionTriggers);
    component.find('CloseIconRight').simulate('click');
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
    const closeIconContent = component.find('CloseIconLeft').text();
    expect(closeIconContent).toMatch('close');
  });

  it('should the arial label of close button prop be the same of the props setted', () => {
    component = mount(SnackBarComponent);
    const ariaLabelContent = component.find('CloseIconLeft').prop('aria-label');
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
    component.find('CloseIconLeft').simulate('keypress', { key: 'Enter' });
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
