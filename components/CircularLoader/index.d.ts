import { FC } from 'react';

export interface CircularLoaderProps {
    size?: 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge';
    skin?: 'primary' | 'secondary';
    theme?: {
        colors?: {};
        gutter?: number;
    };
}

declare const CircularLoader: FC<CircularLoaderProps>;

export default CircularLoader
