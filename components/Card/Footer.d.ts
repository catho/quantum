import { FC, ReactNode } from 'react';

export interface FooterProps {
    theme?: { spacing?: object };
    children: ReactNode | ReactNode[];
}

declare const Footer: FC<FooterProps> & {
    displayName: 'Card.Footer';
};
    
export default Footer;
