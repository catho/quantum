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
