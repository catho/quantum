import { Component, ButtonHTMLAttributes, ReactNode, MouseEventHandler } from 'react';
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
    children?: ReactNode[] | ReactNode;
    $as?: JSX.Element | string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    theme?: {
        baseFontSize?: number;
        colors?: {};
        spacing?: {};
        breakpoints?: {};
        components?: {
            button: {};
        };
    };
}

export default class Button extends Component<ButtonProps> {
    static Icon: IconButton;
}
