import { Hamburger } from '../../components';

const Template = (args) => {
  const { inverted, ...rest } = args;
  return (
    <div style={{ backgroundColor: inverted ? '#fff' : '#000' }}>
      <Hamburger inverted={inverted} {...rest} />
    </div>
  );
};

export const Default = Template.bind({});

export const Opened = Template.bind({});
Opened.args = {
  isOpened: true,
};

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};

export const WithNotificationIcon = Template.bind({});
WithNotificationIcon.args = {
  showNotification: true,
};
