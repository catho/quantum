import { FC, HTMLAttributes, ReactNode } from 'react';

export interface FooterProps extends HTMLAttributes<HTMLElement> {
    theme?: { spacing?: object };
    children: ReactNode | ReactNode[];
}

declare const Footer: FC<FooterProps>;
    
export default Footer;
