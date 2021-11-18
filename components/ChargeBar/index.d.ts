import React from 'react';

export interface ChargeBarProps {
    skin?: 'neutral' | 'primary' | 'secondary' | 'success';
    theme?: {
        components?: {
            chargeBar?: object;
        };
        spacing: object;
        baseFontSize: number;
    };
    width?: string;
    progressPercent?: number;
    label?: string;
}

export default class ChargeBar extends React.Component<ChargeBarProps> {}
