import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';
import FacebookIcon from './sub-components/FacebookIcon';
import GoogleIcon from './sub-components/GoogleIcon';
import { theme as defaultTheme } from '../shared';

const GoogleButton = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: 9px;
  cursor: pointer;
  padding: ${defaultTheme.spacing.xsmall - 1}px;
  overflow: hidden;
  outline: none;
`;
const FacebookButton = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: 9px;
  background-color: #3c5193;
  cursor: pointer;
  padding: ${defaultTheme.spacing.xsmall}px;
  border: none;
  overflow: hidden;
  outline: none;
`;

const SocialButton = ({ provider, title, ...props }) => {
  switch (provider) {
    case 'facebook':
      return (
        <FacebookButton {...props}>
          <FacebookIcon title={title} />
        </FacebookButton>
      );
    case 'google':
      return (
        <GoogleButton {...props} stroked skin="neutral">
          <GoogleIcon title={title} size={24} />
        </GoogleButton>
      );
    default:
      return <Button />;
  }
};

SocialButton.propTypes = {
  provider: PropTypes.oneOf(['facebook', 'google']).isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

SocialButton.defaultProps = {
  onClick: () => {},
};

export default SocialButton;
