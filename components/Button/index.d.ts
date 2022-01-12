import React, { ButtonHTMLAttributes } from 'react';
import { IconNames } from '../Icon';
import IconButton from './IconButton';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    center?: boolean;
    disabled?: boolean;
    stroked?: boolean;
    full?: boolean;
    icon?: IconNames | string;
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    skin?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    type?: 'button' | 'reset' | 'submit';
    children?: React.ReactNode[] | React.ReactNode;
    $as?: JSX.Element | string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    theme?: {
        baseFontSize?: number;
        colors?: {};
        spacing?: {};
        breakpoints?: {};
        components?: {
            button: {};
        };
    };
    id?: string;
}

export default class Button extends React.Component<ButtonProps> {
    static Icon: IconButton;
}
