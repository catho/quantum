import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Popover from './Popover';

const POPOVER_TEXT = 'This is a hint';
const POPOVER_TRIGGER_TEXT = 'popover here';
const POPOVER_TRIGGER = <button type="button">{POPOVER_TRIGGER_TEXT}</button>;

const POPOVERS = [
  <Popover visible trigger={POPOVER_TRIGGER}>
    {POPOVER_TEXT}
  </Popover>,
  <Popover visible skin="neutral" trigger={POPOVER_TRIGGER}>
    {POPOVER_TEXT}
  </Popover>,
  <Popover visible skin="success" trigger={POPOVER_TRIGGER}>
    {POPOVER_TEXT}
  </Popover>,
  <Popover visible skin="warning" trigger={POPOVER_TRIGGER}>
    {POPOVER_TEXT}
  </Popover>,
  <Popover visible skin="error" trigger={POPOVER_TRIGGER}>
    {POPOVER_TEXT}
  </Popover>,
  <Popover visible placement="bottom" trigger={POPOVER_TRIGGER}>
    {POPOVER_TEXT}
  </Popover>,
  <Popover visible placement="left" trigger={POPOVER_TRIGGER}>
    {POPOVER_TEXT}
  </Popover>,
  <Popover visible placement="right" trigger={POPOVER_TRIGGER}>
    {POPOVER_TEXT}
  </Popover>,
  <Popover visible inverted trigger={POPOVER_TRIGGER}>
    {POPOVER_TEXT}
  </Popover>,
];

describe('Popover component', () => {
  it('should match snapshots', () => {
    POPOVERS.forEach(popover => {
      expect(render(popover).asFragment()).toMatchSnapshot();
    });
  });

  it('should content when popover is opened', () => {
    render(
      <Popover skin="success" trigger={POPOVER_TRIGGER}>
        {POPOVER_TEXT}
      </Popover>,
    );

    expect(screen.queryByText(POPOVER_TEXT)).not.toBeInTheDocument();

    const trigger = screen.getByText(POPOVER_TRIGGER_TEXT);
    fireEvent.click(trigger);

    expect(screen.getByText(POPOVER_TEXT)).toBeInTheDocument();
  });

  it('should call on close event callback', () => {
    const onCLoseEventMock = jest.fn();
    render(
      <Popover
        skin="success"
        trigger={POPOVER_TRIGGER}
        onClose={onCLoseEventMock}
      >
        {POPOVER_TEXT}
      </Popover>,
    );

    const trigger = screen.getByText(POPOVER_TRIGGER_TEXT);
    fireEvent.click(trigger);

    const [, closeButton] = screen.getAllByRole('button');
    fireEvent.click(closeButton);

    expect(onCLoseEventMock).toHaveBeenCalled();
  });
});

// describe('Popover component ', () => {
//   const onCloseEventMock = jest.fn();

//   const component = mount(
//     <Popover
//       skin="success"
//       trigger={POPOVER_TRIGGER}
//       onClose={onCloseEventMock}
//     >
//       {POPOVER_TEXT}
//     </Popover>,
//   );

//   describe('Snapshots', () => {
//     const POPOVERS = [
//       <Popover trigger={POPOVER_TRIGGER}>{POPOVER_TEXT}</Popover>,
//       <Popover skin="neutral" trigger={POPOVER_TRIGGER}>
//         {POPOVER_TEXT}
//       </Popover>,
//       <Popover skin="success" trigger={POPOVER_TRIGGER}>
//         {POPOVER_TEXT}
//       </Popover>,
//       <Popover skin="warning" trigger={POPOVER_TRIGGER}>
//         {POPOVER_TEXT}
//       </Popover>,
//       <Popover skin="error" trigger={POPOVER_TRIGGER}>
//         {POPOVER_TEXT}
//       </Popover>,
//       <Popover placement="bottom" trigger={POPOVER_TRIGGER}>
//         {POPOVER_TEXT}
//       </Popover>,
//       <Popover placement="left" trigger={POPOVER_TRIGGER}>
//         {POPOVER_TEXT}
//       </Popover>,
//       <Popover placement="right" trigger={POPOVER_TRIGGER}>
//         {POPOVER_TEXT}
//       </Popover>,
//     ];

//     it('should match snapshots', () => {
//       POPOVERS.forEach(popover => {
//         const popoverComponent = mount(popover);
//         expect(toJson(popoverComponent)).toMatchSnapshot();
//         popoverComponent.unmount();
//       });
//     });

//     it('should match the snapshots after click on trigger to show Popover Balloon', () => {
//       POPOVERS.forEach(popover => {
//         const popoverComponent = mount(popover);
//         const trigger = popoverComponent.find('TriggerBlock');
//         trigger.simulate('click');
//         expect(toJson(popoverComponent)).toMatchSnapshot();
//         popoverComponent.unmount();
//       });
//     });
//   });

//   describe('Popover close button', () => {
//     it('should call on close event callback', () => {
//       component.find('TriggerBlock').simulate('click');
//       component.find('CloseButton').simulate('click');
//       expect(onCloseEventMock).toHaveBeenCalled();
//     });
//   });

//   describe('Popover trigger', () => {
//     it('should trigger be Popover children', () => {
//       const childrenBlocktext = component.find('TriggerBlock').prop('children');
//       expect(childrenBlocktext).toEqual(POPOVER_TRIGGER);
//     });
//   });

//   describe('Openning Popover', () => {
//     it('should display correct content when Popover is opened', () => {
//       expect(component.find('PopoverChildren').exists()).toBe(false);

//       const trigger = component.find('TriggerBlock');
//       trigger.simulate('click');

//       expect(component.find('PopoverChildren').text()).toMatch(POPOVER_TEXT);
//     });
//   });

//   describe('Popover visible', () => {
//     it('should be visible at first render', () => {
//       const wrapper = mount(
//         <Popover visible trigger={POPOVER_TRIGGER}>
//           {POPOVER_TEXT}
//         </Popover>,
//       );

//       expect(wrapper.find('PopoverChildren').text()).toBe(POPOVER_TEXT);
//     });
//   });
// });
