import { FC, ReactNode } from 'react';

export interface HeaderProps {
    theme?: { spacing?: object };
    children: ReactNode | ReactNode[];
}

declare const Header: FC<HeaderProps> & {
    displayName: 'Card.Header';
};
    
export default Header;
