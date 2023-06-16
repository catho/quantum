import { FC } from 'react';
import { ButtonProps } from '../Button';

export interface SocialButtonProps extends ButtonProps {
  provider: string;
}

declare const SocialButton: FC<SocialButtonProps>;
export default SocialButton;
