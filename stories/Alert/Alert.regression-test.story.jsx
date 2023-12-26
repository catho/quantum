import { Alert } from '../../components';

const props = {
  onClose: () => {},
  icon: 'info',
};

export default {
  title: 'Alert',
  component: Alert,
};

const Template = (args) => (
  <Alert {...args}>
    <span>
      This is a <strong>sample</strong> message, a much bigger text could fit in
      here
      <br />
      and a buch of other lines too, just to demonstrate
      <br />
      how this component behaves ❤
    </span>
  </Alert>
);

export const Default = Template.bind({});
Default.args = { ...props };

export const DefaultWithoutClose = Template.bind({});
DefaultWithoutClose.args = { ...props, onClose: undefined };

export const DefaultWithoutIcon = Template.bind({});
DefaultWithoutIcon.args = { ...props, icon: undefined };

export const SkinPrimary = Template.bind({});
SkinPrimary.args = {
  ...Default.args,
  skin: 'primary',
};

export const SkinSuccess = Template.bind({});
SkinSuccess.args = {
  ...Default.args,
  skin: 'success',
};

export const SkinWarning = Template.bind({});
SkinWarning.args = {
  ...Default.args,
  skin: 'warning',
};

export const SkinError = Template.bind({});
SkinError.args = {
  ...Default.args,
  skin: 'error',
};
