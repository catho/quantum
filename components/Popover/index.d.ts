import { Component, ReactNode } from 'react';

export interface PopoverProps {
    inverted?: boolean;
    visible?: boolean;
    children: ReactNode[] | ReactNode;
    placement?: 'top' | 'right' | 'bottom' | 'left';
    skin?: 'neutral' | 'primary' | 'success' | 'warning' | 'error';
    trigger: ReactNode;
    onClose?: () => void;
}

export default class Popover extends Component<PopoverProps> {}
