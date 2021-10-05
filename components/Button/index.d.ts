import React from 'react';
import IconButton from './IconButton';

export interface ButtonProps {
    rounded?: boolean;
    center?: boolean;
    disabled?: boolean;
    stroked?: boolean;
    full?: boolean;
    icon?: string;
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    skin?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    type?: 'button' | 'reset' | 'submit';
    children?: React.ReactNode[] | React.ReactNode;
    $as?: JSX.Element | string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    theme?: {
        baseFontSize?: number;
        colors?: object;
        spacing?: object;
        breakpoints?: object;
        components?: {
            button: object;
        };
    };
    id?: string;
}

export default class Button extends React.Component<ButtonProps> {
    static Icon: IconButton;
}
