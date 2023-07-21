import { render, fireEvent, screen } from '@testing-library/react';
import Dialog from './Dialog';
import Example from '../../stories/Dialog/ExampleStyle';

describe('Dialog', () => {
  it('should render the Dialog with children', () => {
    render(
      <Dialog>
        <Example>
          <h3>Some text</h3>
        </Example>
      </Dialog>,
    );

    expect(
      screen.getByRole('heading', { name: /Some Text/i }),
    ).toBeInTheDocument();
  });

  it('should call onClose when clicked outside content', () => {
    const onCloseFunc = jest.fn();
    render(<Dialog onClose={onCloseFunc} />);

    const overlay = screen.getByRole('dialog');
    fireEvent.click(overlay);

    expect(onCloseFunc).toHaveBeenCalled();
  });

  it('should not call onClose when disableClickOutside is passed', () => {
    const onCloseFunc = jest.fn();
    render(<Dialog onClose={onCloseFunc} disableClickOutside />);

    const overlay = screen.getByRole('dialog');
    fireEvent.click(overlay);

    expect(onCloseFunc).not.toHaveBeenCalled();
  });

  it('should call onClose when "Escape" key is pressed', () => {
    const eventMap = {
      keydown: null,
    };
    window.addEventListener = jest.fn((event, cb) => {
      eventMap[event] = cb;
    });

    const onCloseMock = jest.fn();

    render(<Dialog onClose={onCloseMock} />);

    eventMap.keydown({ key: 'Enter' });

    expect(onCloseMock).not.toHaveBeenCalled();

    eventMap.keydown({ key: 'Escape' });

    expect(onCloseMock).toHaveBeenCalled();
  });

  it('should call onClose after 1 second', async () => {
    const onCloseTimeout = jest.fn();
    render(<Dialog onClose={onCloseTimeout} closeOnTime={1} />);

    await new Promise((r) => {
      setTimeout(r, 1000);
    });

    expect(onCloseTimeout).toHaveBeenCalled();
  });

  it('should call onClickOutside when clicked outside content', () => {
    const onClickOutside = jest.fn();
    render(<Dialog onClickOutside={onClickOutside} />);

    const overlay = screen.getByRole('dialog');
    fireEvent.click(overlay);

    expect(onClickOutside).toHaveBeenCalled();
  });
});
