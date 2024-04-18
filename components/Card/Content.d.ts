import { FC, HTMLAttributes, ReactNode } from 'react';

export interface ContentProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode | ReactNode[];
}

declare const Content: FC<ContentProps>;
    
export default Content;