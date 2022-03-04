import { FC, MouseEventHandler } from 'react';

export interface SegmentedControlProps {
    name?: string;
    onChange?: MouseEventHandler<HTMLButtonElement>;
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

declare const SegmentedControl: FC<SegmentedControlProps>;