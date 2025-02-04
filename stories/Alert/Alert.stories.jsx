import { Alert } from '../../components';

export default {
  title: 'Alert',
  component: Alert,
};

const sampleChildren = (
  <span>
    This is a <strong>sample</strong> message, a much bigger text could fit in
    here
    <br />
    and a buch of other lines too, just to demonstrate
    <br />
    how this component behaves ❤
  </span>
);

const Template = (args) => <Alert {...args}>{sampleChildren}</Alert>;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  skin: 'primary',
};

export const Success = Template.bind({});
Success.args = {
  skin: 'success',
};

export const Error = Template.bind({});
Error.args = {
  skin: 'error',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  skin: 'primary',
  icon: 'info',
};

export const WithClose = Template.bind({});
WithClose.args = {
  skin: 'primary',
  onClose: () => {},
};
