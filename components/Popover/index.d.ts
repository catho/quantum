import { FC, ReactNode } from 'react';

export interface PopoverProps {
    inverted?: boolean;
    visible?: boolean;
    closeOnClickOut?: boolean;
    children: ReactNode[] | ReactNode;
    placement?: 'top' | 'right' | 'bottom' | 'left';
    skin?: 'neutral' | 'primary' | 'success' | 'warning' | 'error';
    trigger: ReactNode;
    onClose?: () => void;
}

declare const Popover: FC<PopoverProps>;
export default Popover;
