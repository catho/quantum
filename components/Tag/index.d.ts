import { Component, ReactNode, MouseEventHandler } from 'react';

export interface TagProps {
    bold?: boolean;
    inverted?: boolean;
    children?: ReactNode[] | ReactNode;
    onClose?: MouseEventHandler<HTMLButtonElement>;
    size?: 'small' | 'medium' | 'large';
    skin?: 'neutral' | 'primary' | 'success' | 'warning' | 'error';
    stroked?: boolean;
    text?: string;
    theme?: {
        colors?: {};
        components?: {
            tag?: {};
        };
        spacing?: {};
    };
}

export default class Tag extends Component<TagProps> {}
