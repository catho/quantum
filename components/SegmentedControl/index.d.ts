import React from 'react';

export interface SegmentedControlProps {
    name?: string;
    onChange?: React.MouseEventHandler<HTMLButtonElement>;
    darkMode?: boolean;
    theme?: {
      spacing?: {};
      colors?: {};
    };
    items: [{
      label: string;
      value: string;
      icon: string;
      checked: boolean;
    }];
}

declare const SegmentedControl: React.FC<SegmentedControlProps>;