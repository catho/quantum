import { ComponentType } from 'react';

export interface IconButtonProps {
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    skin?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    theme?: {
        baseFontSize?: number;
        colors?: {};
        spacing?: {};
        components?: {
            button?: {};
        };
    };
}

type IconButton = ComponentType<IconButtonProps>;

export default IconButton;
