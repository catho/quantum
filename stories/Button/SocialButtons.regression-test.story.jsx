import SocialButton from '../../components/SocialButton';

export default {
  title: 'SocialButtons',
  component: SocialButton,
};

const Template = args => <SocialButton {...args} />;

export const ProviderGoogle = Template.bind({});
ProviderGoogle.story = {
  name: 'provider google',
};
ProviderGoogle.args = {
  provider: 'google',
  title: 'google-btn',
};

export const ProviderFacebook = Template.bind({});
ProviderFacebook.story = {
  name: 'provider facebook',
};
ProviderFacebook.args = {
  provider: 'facebook',
  title: 'facebook-btn',
};
