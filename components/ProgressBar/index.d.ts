import React from 'react';

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

export default class ProgressBar extends React.Component<ProgressBarProps> {}
