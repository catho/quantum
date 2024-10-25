import { ReactNode, MouseEventHandler, TouchEventHandler, FC } from 'react';
import { IconNames } from '../Icon';

export interface AlertProps {
    children: ReactNode;
    onClose?: MouseEventHandler<HTMLButtonElement> | TouchEventHandler<HTMLButtonElement>;
    icon?: IconNames | string;
    skin?: 'primary' | 'success' | 'error' | 'neutral' | 'warning';
}

declare const Alert: FC<AlertProps>;
export default Alert;
