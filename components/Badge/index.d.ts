import React from 'react';

export interface BadgeProps {
    skin?: 'primary' | 'secondary' | 'success' | 'error' | 'neutral';
    children?: React.ReactNode[] | React.ReactNode;
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

export default class Badge extends React.Component<BadgeProps> {}
