import { ReactNode, MouseEventHandler, TouchEventHandler, Component } from 'react';
import { IconNames } from '../Icon';

export interface AlertProps {
    children: ReactNode;
    onClose?: MouseEventHandler<HTMLButtonElement> | TouchEventHandler<HTMLButtonElement>;
    icon?: IconNames | string;
    skin?: 'primary' | 'success' | 'error' | 'neutral' | 'warning';
    theme?: {
        baseFontSize?: number;
        colors?: {};
        spacing?: {};
        components?: {
            alert?: {};
            button?: {};
        };
    };
}

export default class Alert extends Component<AlertProps> {}
