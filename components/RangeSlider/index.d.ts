import React from 'react';

export interface RangeSliderProps {
    step?: number;
    max?: number;
    min?: number;
    disabled?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onChangeCommitted?: React.ChangeEventHandler<HTMLInputElement>;
    marks?: Array<{
        value?: string | number;
        label?: string;
    }>;
    valueLabelDisplay?: 'auto' | 'on' | 'off';
    track?: 'normal' | false | 'inverted';
    'aria-labelledby'?: string;
    tipFormatter?: (value?: number, index?: number) => string;
    value?: number | { from: number; to: number };
    defaultValue?: number | { from: number; to: number };
    theme?: {
        spacing?: object;
        colors?: object;
        baseFontSize?: number;
    };
}

export default class RangeSlider extends React.Component<RangeSliderProps> {}
