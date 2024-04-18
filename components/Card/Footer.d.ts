import { FC, HTMLAttributes, ReactNode } from 'react';

export interface FooterProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode | ReactNode[];
}

declare const Footer: FC<FooterProps>;
    
export default Footer;
