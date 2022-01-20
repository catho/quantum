import React from 'react';

export interface TooltipProps {
    text: string;
    placement?: 'top' | 'right' | 'bottom' | 'left';
    visible?: boolean;
    multiline?: boolean;
    children: React.ReactNode[] | React.ReactNode;
    theme?: {
        spacing?: {};
        colors?: {};
        baseFontSize?: number;
    };
}

export default class Tooltip extends React.Component<TooltipProps> {}
