import React from 'react';

export interface DialogProps {
  children: React.ReactNode[] | React.ReactNode;
  theme?: {
    colors?: object;
  };
  shouldOpen: boolean;
  onClose?: () => void;
  closeOnTime?: number;
}

export default class Dialog extends React.Component<DialogProps> {}
