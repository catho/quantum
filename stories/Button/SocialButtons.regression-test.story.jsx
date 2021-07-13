import React from 'react';
import SocialButton from '../../components/SocialButton';

export default {
  title: 'SocialButtons',
};

export const ProviderGoogle = () => (
  <SocialButton provider="google" title="google-btn" />
);

ProviderGoogle.story = {
  name: 'provider google',
};

export const ProviderFacebook = () => (
  <SocialButton provider="facebook" title="facebook-btn" />
);

ProviderFacebook.story = {
  name: 'provider facebook',
};
