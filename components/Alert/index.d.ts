import React from 'react';

export interface AlertProps {
    children: React.ReactNode;
    onClose?: () => {} | React.MouseEventHandler<HTMLButtonElement> | React.TouchEventHandler<HTMLButtonElement>;
    icon?: string;
    skin?: 'primary' | 'success' | 'error' | 'neutral' | 'warning';
    theme?: {
        baseFontSize?: number;
        colors?: object;
        spacing?: object;
        components?: {
            alert?: object;
            button?: object;
        };
    };
}

export default class Alert extends React.Component<AlertProps> {}
