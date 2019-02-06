import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors/deprecated';
import googleLogo from '../shared/static/googleSocialLogo.svg';
import facebookLogo from '../shared/static/facebookSocialLogo.svg';

const sharedStyles = `
  border: none;
  border-radius: 2px;
  color: ${Colors.WHITE};
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
  background-color: ${Colors.FACEBOOK};
  background-image: url(${facebookLogo});
  background-repeat: no-repeat;
  background-size: 8px 15px;
  background-position: 15px 12px;
  ${sharedStyles};
`;

const Google = styled.button`
  &:before {
    background-color: ${Colors.WHITE};
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
  background-color: ${Colors.GOOGLE};
  ${sharedStyles};
`;

const SocialButtons = {
  Facebook: ({ ...props }) => (
    <Facebook {...props}>Entrar com Facebook</Facebook>
  ),
  Google: ({ ...props }) => <Google {...props}>Entrar com Google</Google>,
};

SocialButtons.Facebook.displayName = 'Button.Facebook';
SocialButtons.Google.displayName = 'Button.Google';

export default SocialButtons;
