import { FC, ReactNode, ChangeEventHandler, ComponentType } from 'react';
import { IconNames } from '../Icon';

export interface RadioProps {
  disabled?: boolean;
  error?: boolean;
  children?: ReactNode[] | ReactNode;
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  theme?: {
    colors?: {};
    spacing?: {};
  };
  value: string;
}


export interface RadioButtonProps {
  checked?: boolean;
  children?: string;
  skin?: 'neutral' | 'primary' | 'success' | 'warning' | 'error';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  disabled?: boolean;
  error?: boolean;
  icon?: IconNames | string;
  id?: string;
  inline?: boolean;
  label?: string;
  onChange?: () => void | ChangeEventHandler<HTMLInputElement>;
  theme?: {
    baseFontSize?: number;
    spacing?: {};
    colors?: {};
    components?: {
      button?: {};
    };
  };
  value: string;
}

export interface RadioGroupProps {
  type?: 'radio' | 'button';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  options?: Array<{
    label?: ReactNode;
    value: string;
    disabled?: boolean;
  }>;
  children?: ReactNode[] | ReactNode;
  inline?: boolean;
  onChange?: () => {} | ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string;
  name: string;
  error?: string;
  theme?: {
    colors?: {};
    spacing?: {};
  };
  required?: boolean;
}

declare const Radio: FC<RadioProps>;
declare const RadioButton: FC<RadioButtonProps>;
declare const RadioGroup: FC<RadioGroupProps> & {
  Radio: typeof Radio;
  Button: typeof RadioButton;
}

export { Radio, RadioButton };
export default RadioGroup;
