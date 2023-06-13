import { FC, ReactNode } from 'react';

export interface HeaderTextProps {
    children: ReactNode | ReactNode[];
}

declare const HeaderText: FC<HeaderTextProps> & {
    displayName: 'Card.HeaderText';
};

export default HeaderText;
