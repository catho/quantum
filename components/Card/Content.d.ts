import { FC, ReactNode } from 'react';

export interface ContentProps {
    theme?: { baseFontSize?: number; spacing?: object };
    children: ReactNode | ReactNode[];
}

declare const Content: FC<ContentProps> & {
    displayName: 'Card.Content';
};
    
export default Content;