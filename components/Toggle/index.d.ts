import React from 'react';

export interface ToggleProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
  checked?: boolean;
  theme?: {
    colors?: {};
    spacing?: {};
    baseFontSize?: number;
  };
}

export default class Toggle extends React.Component<ToggleProps> {}
