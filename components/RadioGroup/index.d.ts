import React from 'react';

export interface RadioProps {
  disabled?: boolean;
  error?: boolean;
  children?: string | React.ReactNode[] | React.ReactNode;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  theme?: {
    colors?: object;
    spacing?: object;
  };
  value: string;
}

export type Radio = React.ComponentType<RadioProps>;

export interface RadioButtonProps {
  checked?: boolean;
  children?: string;
  skin?: 'neutral' | 'primary' | 'success' | 'warning' | 'error';
  disabled?: boolean;
  error?: boolean;
  icon?: string;
  id?: string;
  inline?: boolean;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  theme?: {
    baseFontSize?: number;
    spacing?: object;
    colors?: object;
    components?: {
      button?: object;
    };
  };
  value: string;
}

export type RadioButton = React.ComponentType<RadioButtonProps>;

export interface RadioGroupProps {
  type?: 'radio' | 'button';
  options?: Array<{
    label?: React.ReactNode;
    value: string;
    disabled?: boolean;
  }>;

  children?: React.ReactNode[] | React.ReactNode;
  inline?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  error?: string;
  theme?: {
    colors?: object;
    spacing?: object;
  };
  name: string;
}

export default class RadioGroup extends React.Component<RadioGroupProps> {
  static Radio: Radio;

  static Button: RadioButton;
}
