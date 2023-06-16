import { FC, HTMLAttributes, ReactNode } from 'react';

export interface ContentProps extends HTMLAttributes<HTMLDivElement> {
    theme?: { baseFontSize?: number; spacing?: object };
    children: ReactNode | ReactNode[];
}

declare const Content: FC<ContentProps>;
    
export default Content;