import React from 'react';
import Button, { ButtonProps } from '../Button';

interface SocialButtonProps extends ButtonProps {
  provider: string;
  title: string;
}

export default class SocialButton extends React.Component<SocialButtonProps> {}
