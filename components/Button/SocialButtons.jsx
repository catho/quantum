import React from 'react';
import styled from 'styled-components';
import googleLogo from '../../static/googleSocialLogo.svg';
import facebookLogo from '../../static/facebookSocialLogo.svg';

const sharedStyles = `
  border: none;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  font-family: 'Oxygen', sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  padding: 10px 12px 10px 35px;
  position: relative;
  text-align: center;
  width: 200px;
`;

const Facebook = styled.button`
  background-color: #3c5193;
  background-image: url(${facebookLogo});
  background-repeat: no-repeat;
  background-size: 8px 15px;
  background-position: 15px 12px;
  ${sharedStyles}
`;

const Google = styled.button`
  &:before {
    background-color: #fff;
    background-image: url(${googleLogo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 18px 18px;
    content: '';
    width: 38px;
    height: 38px;
    display: inline-block;
    position: absolute;
    border-radius: 2px;
    left: 1px;
    top: 1px;
  }
  background-color: #4285f4;
  ${sharedStyles}
`;

const SocialButtons = {
  Facebook: ({ ...props }) => (<Facebook {...props}>Entrar com Facebook</Facebook>),
  Google: ({ ...props }) => (<Google {...props}>Entrar com Google</Google>),
};

SocialButtons.Facebook.displayName = 'Button.Facebook';
SocialButtons.Google.displayName = 'Button.Google';

export default SocialButtons;
