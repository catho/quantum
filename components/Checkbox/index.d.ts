import React from 'react';

export interface CheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    children?: string;
    error?: string;
    id?: string;
    label?: string;
    name: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    theme?: {
        colors?: object;
        spacing?: object;
        baseFontSize?: number;
    };
}

export class Checkbox extends React.Component<CheckboxProps> {}
export type CheckboxType = React.ComponentType<CheckboxProps>;

export interface CheckboxButtonProps {
  children?: React.ReactNode[] | React.ReactNode;
  skin?: 'neutral' | 'primary' | 'success' | 'warning' | 'error';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  checked?: boolean;
  disabled?: boolean;
  error?: string;
  id?: string;
  icon?: string;
  label?: string;
  name: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

export type CheckboxButton = React.ComponentType<CheckboxButtonProps>;

export type Options = Array<{
    checked?: boolean;
    disabled?: boolean;
    label?: React.ReactNode;
    name: string;
    value?: string;
}>;
export interface CheckboxGroupProps {
    children?: JSX.Element[] | JSX.Element;
    error?: string;
    inline?: boolean;
    onChange?: (items?: Options, event?: React.ChangeEvent<HTMLInputElement>) => void;
    options?: Options;
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    type: 'checkbox' | 'button';
    theme?: {
        colors?: object;
        spacing?: object;
    };
}

export class CheckboxGroup extends React.Component<CheckboxGroupProps> {
    static Checkbox: CheckboxType;
    static Button: CheckboxButton;
}
