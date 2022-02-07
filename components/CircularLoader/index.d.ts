import React from 'react';

export interface CircularLoaderProps {
    size?: 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge';
    skin?: 'primary' | 'secondary';
    theme?: {
        colors?: {};
        gutter?: number;
    };
}

export default class CircularLoader extends React.Component<CircularLoaderProps> {}
