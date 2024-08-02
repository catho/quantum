import { FC, MouseEventHandler } from 'react';

export type NonEmptyArray<T> = [T, ...T[]];

export interface SegmentedControlProps {
    name?: string;
    onChange?: MouseEventHandler<HTMLButtonElement>;
    darkMode?: boolean;
    items: NonEmptyArray<{
      label: string;
      value: string;
      icon: string;
      checked: boolean;
    }>;
}

declare const SegmentedControl: FC<SegmentedControlProps>;
export default SegmentedControl;