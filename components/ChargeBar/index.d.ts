import React from 'react';

export interface ChargeBarProps {
    skin?: 'neutral' | 'primary' | 'secondary' | 'success';
    theme?: {
        components?: {
            chargeBar?: {};
        };
        spacing: {};
        baseFontSize: number;
    };
    width?: string;
    progressPercent?: number;
    label?: string;
}

export default class ChargeBar extends React.Component<ChargeBarProps> {}
