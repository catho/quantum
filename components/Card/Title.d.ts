import { FC, HTMLAttributes } from 'react';

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
    small?: boolean;
    theme?: { baseFontSize?: object };
}

declare const Title: FC<TitleProps>;

export default Title;