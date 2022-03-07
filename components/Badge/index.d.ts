import { Component, ReactNode } from 'react';

export interface BadgeProps {
    skin?: 'primary' | 'secondary' | 'success' | 'error' | 'neutral';
    children?: ReactNode[] | ReactNode;
    number?: number;
    inverted?: boolean;
    dot?: boolean;
    theme?: {
        baseFontSize?: number;
        spacing?: {};
        components?: {
            badge?: {};
        };
    };
}

export default class Badge extends Component<BadgeProps> {}
