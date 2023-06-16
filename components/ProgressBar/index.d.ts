import { FC } from 'react';

export interface ProgressBarProps {
    skin?: 'neutral' | 'primary' | 'secondary';
    theme?: {
        components?: {
            progressBar?: {};
        };
    };
    width?: string;
    height?: string;
    progressText?: number;
    progressPercent?: number;
    label?: string;
}
declare const ProgressBar: FC<ProgressBarProps>;

export default ProgressBar
