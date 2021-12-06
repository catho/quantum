import React from 'react';

export interface DialogProps {
  children: React.ReactNode[] | React.ReactNode;
  theme?: {
    colors?: object;
  };
  onClose?: () => void;
  onClickOutside?: () => void;
  disableClickOutside: boolean;
  closeOnTime?: number;
}

export default class Dialog extends React.Component<DialogProps> {}
