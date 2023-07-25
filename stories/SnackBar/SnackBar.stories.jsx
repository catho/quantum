import { useState } from 'react';
import SnackBar from '../../components/SnackBar';
import { Button } from '../../components';

export default {
  title: 'SnackBar',
  component: SnackBar,
};

const Template = args => {
  const { actionTrigger, ...rest } = args;
  const [openSnackBar, setOpenSnackbar] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenSnackbar(true)}>Open snackbar</Button>
      {openSnackBar && (
        <SnackBar
          onClose={() => setOpenSnackbar(false)}
          actionTrigger={
            actionTrigger && {
              ...actionTrigger,
              callbackFn: () => setOpenSnackbar(false),
            }
          }
          {...rest}
        />
      )}
    </>
  );
};

export const Default = Template.bind({});

export const WithText = Template.bind({});
WithText.args = {
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export const WithSkin = Template.bind({});
WithSkin.args = {
  skin: 'success',
};

export const WithHideIcon = Template.bind({});
WithHideIcon.args = {
  skin: 'success',
  hideIcon: true,
};

export const WithSecondsToClose = Template.bind({});
WithSecondsToClose.args = {
  secondsToClose: 3,
};

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};

export const WithActionTrigger = Template.bind({});
WithActionTrigger.args = {
  actionTrigger: {
    title: 'HIDE',
    callbackFn: () => {},
  },
};
