import { Component, ChangeEventHandler } from 'react';

export interface ToggleProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  id?: string;
  checked?: boolean;
  theme?: {
    colors?: {};
    spacing?: {};
    baseFontSize?: number;
  };
}

export default class Toggle extends Component<ToggleProps> {}
