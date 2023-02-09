import { Component, ChangeEventHandler, ComponentType, ReactNode } from 'react';

export interface CheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    children?: ReactNode;
    error?: string;
    id?: string;
    label?: ReactNode;
    name: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    theme?: {
        colors?: {};
        spacing?: {};
        baseFontSize?: number;
    };
}

export class Checkbox extends Component<CheckboxProps> {}
export type CheckboxType = ComponentType<CheckboxProps>;

export interface CheckboxButtonProps {
  children?: ReactNode[] | ReactNode;
  skin?: 'neutral' | 'primary' | 'success' | 'warning' | 'error';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  checked?: boolean;
  disabled?: boolean;
  error?: string;
  id?: string;
  icon?: string;
  label?: string;
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

export type CheckboxButton = ComponentType<CheckboxButtonProps>;

export type Options = Array<{
    checked?: boolean;
    disabled?: boolean;
    label?: ReactNode;
    name: string;
    value?: string;
}>;
export interface CheckboxGroupProps {
    children?: JSX.Element[] | JSX.Element;
    error?: string;
    inline?: boolean;
    onChange?: (items?: Options, event?: ChangeEvent<HTMLInputElement>) => void;
    options?: Options;
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    type: 'checkbox' | 'button';
    theme?: {
        colors?: {};
        spacing?: {};
    };
}

export class CheckboxGroup extends Component<CheckboxGroupProps> {
    static Checkbox: CheckboxType;

    static Button: CheckboxButton;
}
