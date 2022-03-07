import { Component, ReactNode } from 'react';

export interface TooltipProps {
    text: string;
    placement?: 'top' | 'right' | 'bottom' | 'left';
    visible?: boolean;
    multiline?: boolean;
    children: ReactNode[] | ReactNode;
    theme?: {
        spacing?: {};
        colors?: {};
        baseFontSize?: number;
    };
}

export default class Tooltip extends Component<TooltipProps> {}
