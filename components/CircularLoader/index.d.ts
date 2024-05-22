import { FC } from 'react';

export interface CircularLoaderProps {
    size?: 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge';
    skin?: 'primary' | 'secondary';
}

declare const CircularLoader: FC<CircularLoaderProps>;

export default CircularLoader
