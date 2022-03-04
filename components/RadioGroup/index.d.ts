import { Component, ReactNode, ChangeEventHandler, ComponentType } from 'react';
import { IconNames } from '../Icon';

export interface RadioProps {
  disabled?: boolean;
  error?: boolean;
  children?: string | ReactNode[] | ReactNode;
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  theme?: {
    colors?: {};
    spacing?: {};
  };
  value: string;
}

export type Radio = ComponentType<RadioProps>;

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

export type RadioButton = ComponentType<RadioButtonProps>;

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

export default class RadioGroup extends Component<RadioGroupProps> {
  static Radio: Radio;

  static Button: RadioButton;
}
