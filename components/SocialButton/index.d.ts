import { Component } from 'react';
import { ButtonProps } from '../Button';

interface SocialButtonProps extends ButtonProps {
  provider: string;
}

export default class SocialButton extends Component<SocialButtonProps> {}
