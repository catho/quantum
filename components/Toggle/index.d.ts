import { ChangeEventHandler, FC, HTMLAttributes } from 'react';

export interface ToggleProps extends HTMLAttributes<HTMLInputElement>{
  onChange?: ChangeEventHandler<HTMLInputElement>;
  id?: string;
  checked?: boolean;
  theme?: {
    colors?: {};
    spacing?: {};
    baseFontSize?: number;
  };
}

declare const Toggle: FC<ToggleProps>;
export default Toggle;
