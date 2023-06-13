import { ReactNode, MouseEventHandler, FC, HTMLAttributes } from 'react';

export interface TagProps extends HTMLAttributes<HTMLInputElement> {
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

declare const Tag: FC<TagProps>;
export default Tag;
