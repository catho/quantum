import { FC, ReactNode, ChangeEventHandler, ChangeEvent } from 'react';

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

export interface CheckboxGroupProps {
    children?: JSX.Element[] | JSX.Element;
    error?: string;
    inline?: boolean;
    onChange?: (items?: Options, event?: ChangeEvent<HTMLInputElement>) => void;
    options?: Options;
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    type?: 'checkbox' | 'button';
    theme?: {
        colors?: {};
        spacing?: {};
    };
}

export type Options = Array<{
    checked?: boolean;
    disabled?: boolean;
    label?: ReactNode;
    name: string;
    value?: string;
}>;

declare const Checkbox: FC<CheckboxProps>;
declare const CheckboxButton: FC<CheckboxButtonProps>;
declare const CheckboxGroup: FC<CheckboxGroupProps> & {
    Checkbox: typeof Checkbox;
    Button: typeof CheckboxButton;
}

export { Checkbox, CheckboxButton, CheckboxGroup };
export default Checkbox;