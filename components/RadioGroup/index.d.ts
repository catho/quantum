import React from 'react';
import { IconNames } from '../Icon';

export interface RadioProps {
  disabled?: boolean;
  error?: boolean;
  children?: string | React.ReactNode[] | React.ReactNode;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  theme?: {
    colors?: {};
    spacing?: {};
  };
  value: string;
}

export type Radio = React.ComponentType<RadioProps>;

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
  onChange?: () => void | React.ChangeEventHandler<HTMLInputElement>;
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

export type RadioButton = React.ComponentType<RadioButtonProps>;

export interface RadioGroupProps {
  type?: 'radio' | 'button';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  options?: Array<{
    label?: React.ReactNode;
    value: string;
    disabled?: boolean;
  }>;
  children?: React.ReactNode[] | React.ReactNode;
  inline?: boolean;
  onChange?: () => {} | React.ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string;
  name: string;
  error?: string;
  theme?: {
    colors?: {};
    spacing?: {};
  };
  required?: boolean;
}

export default class RadioGroup extends React.Component<RadioGroupProps> {
  static Radio: Radio;

  static Button: RadioButton;
}
