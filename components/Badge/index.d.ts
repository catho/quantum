import { FC, ReactNode } from 'react';

export interface BadgeProps {
    skin?: 'primary' | 'secondary' | 'success' | 'error' | 'neutral';
    children?: ReactNode[] | ReactNode;
    number?: number;
    inverted?: boolean;
    dot?: boolean;
}

declare const Badge: FC<BadgeProps>;
export default Badge;
