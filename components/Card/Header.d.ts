import { FC, HTMLAttributes, ReactNode } from 'react';

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
    theme?: { spacing?: object };
    children: ReactNode | ReactNode[];
}

declare const Header: FC<HeaderProps>;
    
export default Header;
