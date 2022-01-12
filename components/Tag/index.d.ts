import React from 'react';

export interface TagProps {
    bold?: boolean;
    inverted?: boolean;
    children?: React.ReactNode[] | React.ReactNode;
    onClose?: React.MouseEventHandler<HTMLButtonElement>;
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

export default class Tag extends React.Component<TagProps> {}
