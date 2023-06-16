import { FC } from 'react';

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

declare const ChargeBar: FC<ChargeBarProps>;
export default ChargeBar;
