import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';
import FacebookIcon from './sub-components/FacebookIcon';
import GoogleIcon from './sub-components/GoogleIcon';
import { theme as defaultTheme } from '../shared';

const BUTTON_SIZE = '40px';
const BUTTON_PADDING = defaultTheme.spacing.xsmall;

const BaseButton = styled(Button)`
  width: ${BUTTON_SIZE};
  height: ${BUTTON_SIZE};
  border-radius: 9px;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`;

const GoogleButton = styled(BaseButton)`
  padding: ${BUTTON_PADDING - 1}px;
`;

const FacebookButton = styled(BaseButton)`
  border: none;
  background-color: #3c5193;
  padding: ${BUTTON_PADDING}px;
`;

const SocialButton = ({ provider, ...props }) => {
  const providers = {
    facebook: (
      <FacebookButton {...props}>
        <FacebookIcon title="facebook-button" size="24" />
      </FacebookButton>
    ),
    google: (
      <GoogleButton {...props} stroked skin="neutral">
        <GoogleIcon title="google-button" size="24" />
      </GoogleButton>
    ),
  };

  return providers[provider];
};

SocialButton.propTypes = {
  provider: PropTypes.oneOf(['facebook', 'google']).isRequired,
  onClick: PropTypes.func,
};

/* istanbul ignore next */
SocialButton.defaultProps = {
  onClick: () => {},
};

export default SocialButton;
