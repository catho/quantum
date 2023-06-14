import { FC, HTMLAttributes, ReactNode } from 'react';

export interface HeaderTextProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode | ReactNode[];
}

declare const HeaderText: FC<HeaderTextProps>;

export default HeaderText;
