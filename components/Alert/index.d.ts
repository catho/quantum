import React from 'react';
import { IconNames } from '../Icon';

export interface AlertProps {
    children: React.ReactNode;
    onClose?: () => {} | React.MouseEventHandler<HTMLButtonElement> | React.TouchEventHandler<HTMLButtonElement>;
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

export default class Alert extends React.Component<AlertProps> {}
