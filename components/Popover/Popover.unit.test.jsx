import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Popover from './Popover';

const POPOVER_TEXT = 'This is a hint';
const POPOVER_TRIGGER = <span>popover here</span>;

describe('Popover component ', () => {
  const onCloseEventMock = jest.fn();

  const component = mount(
    <Popover
      skin="success"
      trigger={POPOVER_TRIGGER}
      onClose={onCloseEventMock}
    >
      {POPOVER_TEXT}
    </Popover>,
  );

  describe('Snapshots', () => {
    const POPOVERS = [
      <Popover trigger={POPOVER_TRIGGER}>{POPOVER_TEXT}</Popover>,
      <Popover skin="success" trigger={POPOVER_TRIGGER}>
        {POPOVER_TEXT}
      </Popover>,
      <Popover skin="warning" trigger={POPOVER_TRIGGER}>
        {POPOVER_TEXT}
      </Popover>,
      <Popover skin="error" trigger={POPOVER_TRIGGER}>
        {POPOVER_TEXT}
      </Popover>,
      <Popover placement="bottom" trigger={POPOVER_TRIGGER}>
        {POPOVER_TEXT}
      </Popover>,
      <Popover placement="left" trigger={POPOVER_TRIGGER}>
        {POPOVER_TEXT}
      </Popover>,
      <Popover placement="right" trigger={POPOVER_TRIGGER}>
        {POPOVER_TEXT}
      </Popover>,
    ];

    it('should match snapshots', () => {
      POPOVERS.forEach(popover => {
        const popoverComponent = mount(popover);
        expect(toJson(popoverComponent)).toMatchSnapshot();
        popoverComponent.unmount();
      });
    });

    it('should match the snapshots after click on trigger to show Popover Balloon', () => {
      POPOVERS.forEach(popover => {
        const popoverComponent = mount(popover);
        const trigger = popoverComponent.find('ChildrenBlock');
        trigger.simulate('click');
        expect(toJson(popoverComponent)).toMatchSnapshot();
        popoverComponent.unmount();
      });
    });
  });

  it('should always have a close icon when the Popover is open', () => {
    const childrenBlock = component.find('ChildrenBlock');
    childrenBlock.simulate('click');
    const closeIconContent = component.find('CloseButton').text();
    expect(closeIconContent).toMatch('close');
  });

  it('should the trigger props is match to the component children', () => {
    const childrenBlocktext = component.find('ChildrenBlock').prop('children');
    expect(childrenBlocktext).toEqual(POPOVER_TRIGGER);
  });

  it('should the children props of component seems correct', () => {
    const trigger = component.find('ChildrenBlock');
    trigger.simulate('click');
    const popoverChildren = component.find('PopoverChildren').text();
    expect(popoverChildren).toMatch(POPOVER_TEXT);
  });

  it('should call on close event callback', () => {
    component.find('ChildrenBlock').simulate('click');
    component.find('CloseButton').simulate('click');
    expect(onCloseEventMock).toHaveBeenCalled();
  });
});
