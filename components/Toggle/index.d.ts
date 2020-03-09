import React from 'react';

export interface ToggleProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
  checked?: boolean;
  theme?: {
    colors?: object;
    spacing?: object;
    baseFontSize?: number;
  };
}

export default class Toggle extends React.Component<ToggleProps> {}
