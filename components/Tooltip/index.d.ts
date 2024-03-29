import { FC, ReactNode } from 'react';

export interface TooltipProps {
    text: string | JSX.Element;
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
