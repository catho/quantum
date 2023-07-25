import SocialButton from '../../components/SocialButton';

export default {
  title: 'Button/Social',
  component: SocialButton,
};

const Template = (args) => <SocialButton {...args} />;

export const Google = Template.bind({});
Google.args = {
  provider: 'google',
};

export const Facebook = Template.bind({});
Facebook.args = {
  provider: 'facebook',
};
