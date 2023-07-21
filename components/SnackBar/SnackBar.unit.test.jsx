import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SnackBar from './SnackBar';
import { colors } from '../shared/theme';

describe('<SnackBar />', () => {
  const actionTriggerEventMock = jest.fn();
  const onCloseEventMock = jest.fn();
  const CloseButtonAriaLabel = 'close';
  const secondsToClose = 1;

  const actionTrigger = {
    title: 'HIDE',
    callbackFn: actionTriggerEventMock,
  };

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
      <SnackBar
        text={
          <p>
            SnackBar <b>message</b> content
          </p>
        }
      />,
      <SnackBar onClose={() => {}} />,
      <SnackBar closeButtonAriaLabel="close" />,
      <SnackBar secondsToClose={10} />,
      <SnackBar skin="neutral" />,
      <SnackBar skin="primary" />,
      <SnackBar skin="primary" hideIcon />,
      <SnackBar skin="success" />,
      <SnackBar skin="success" hideIcon />,
      <SnackBar skin="warning" />,
      <SnackBar skin="warning" hideIcon />,
      <SnackBar skin="error" />,
      <SnackBar skin="error" hideIcon />,
      <SnackBar skin="neutral" inverted />,
      <SnackBar skin="primary" inverted />,
      <SnackBar skin="success" inverted />,
      <SnackBar skin="warning" inverted />,
      <SnackBar skin="error" inverted />,
    ];

    SNACKBARS.forEach((snackbar) => {
      const { container } = render(snackbar);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should match background color with neutral skin', () => {
    render(<SnackBar skin="neutral" />);
    const snackBarDialog = screen.getByRole('alertdialog');
    expect(snackBarDialog).toHaveStyle({
      'background-color': colors.neutral[700],
    });
  });

  it('should match background color with success skin', () => {
    render(<SnackBar skin="success" />);
    const snackBarDialog = screen.getByRole('alertdialog');
    expect(snackBarDialog).toHaveStyle({
      'background-color': colors.success[900],
    });
  });

  it('should match background color with primary skin', () => {
    render(<SnackBar skin="primary" />);
    const snackBarDialog = screen.getByRole('alertdialog');
    expect(snackBarDialog).toHaveStyle({
      'background-color': colors.primary[900],
    });
  });

  it('should match background color with warning skin', () => {
    render(<SnackBar skin="warning" />);
    const snackBarDialog = screen.getByRole('alertdialog');
    expect(snackBarDialog).toHaveStyle({
      'background-color': colors.warning[700],
    });
  });

  it('should match background color with error skin', () => {
    render(<SnackBar skin="error" />);
    const snackBarDialog = screen.getByRole('alertdialog');
    expect(snackBarDialog).toHaveStyle({
      'background-color': colors.error[900],
    });
  });

  it('should not show the action button when the skin is different of neutral', () => {
    render(SnackBarComponentWithSuccessSkin);
    expect(screen.queryByText('HIDE')).not.toBeInTheDocument();
  });

  it('should call the action button when the skin is neutral and have a action trigger', () => {
    render(SnackBarComponentWithNeutralSkin);

    const button = screen.getByText('HIDE');
    expect(button).toBeInTheDocument();
  });

  it('should call action trigger callback', () => {
    render(SnackBarComponent);

    const button = screen.getByText('HIDE');
    fireEvent.click(button);

    expect(actionTriggerEventMock).toHaveBeenCalled();
  });

  it('should call on close event callback without action triggers (call close icon in the right)', () => {
    render(SnackBarComponentWithoutActionTriggers);
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(onCloseEventMock).toHaveBeenCalled();
  });

  it('should action trigger title has the same of the prop object', () => {
    render(SnackBarComponent);
    expect(screen.getByText(actionTrigger.title)).toBeInTheDocument();
  });

  it('(a11y) should the dialog has the same id of content', () => {
    render(SnackBarComponent);

    const snackBarDialog = screen.getByRole('alertdialog');
    const snackBarDialogTextContainer = screen.getByText(
      /SnackBar message content/i,
    );

    expect(snackBarDialog.getAttribute('aria-describedby')).toMatch(
      snackBarDialogTextContainer.getAttribute('id'),
    );
  });

  it('(a11y) should focus the action button when component was rendered', () => {
    render(SnackBarComponent);
    const focusedElement = document.activeElement;

    expect(screen.getByRole('button', { name: /HIDE/i })).toEqual(
      focusedElement,
    );
  });

  it('(a11y) should close the component by secondsToClose prop time setted', async () => {
    render(SnackBarComponent);

    const snackBarDialog = screen.getByRole('alertdialog');

    await expect(async () => {
      await waitFor(() => {
        expect(snackBarDialog).not.toBeInTheDocument();
      });
    }).rejects.toEqual(expect.anything());
  });

  it('Should close when enter is pressed', async () => {
    render(SnackBarComponentWithoutActionTriggers);
    const closeButton = screen.getByRole('button', { name: /close/i });

    fireEvent.keyPress(closeButton, { key: 'escape', code: 27, charCode: 27 });

    expect(onCloseEventMock).not.toHaveBeenCalled();

    fireEvent.keyPress(closeButton, { key: 'Enter', code: 13, charCode: 13 });

    expect(onCloseEventMock).toHaveBeenCalled();
  });

  it('should be child of body element', () => {
    expect(document.body.childNodes.length).toBe(0);
    render(SnackBarComponent);
    expect(document.body.childNodes.length).toBe(2);
  });
});
