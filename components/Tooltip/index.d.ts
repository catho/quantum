import { FC, ReactNode } from 'react';

export interface TooltipProps {
    text: ReactNode;
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

declare const Tooltip: FC<TooltipProps>;
export default Tooltip;
