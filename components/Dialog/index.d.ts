import { Component, ReactNode } from 'react';

export interface DialogProps {
  children: ReactNode[] | ReactNode;
  theme?: {
    colors?: {};
  };
  onClose?: () => void;
  onClickOutside?: () => void;
  disableClickOutside: boolean;
  closeOnTime?: number;
}

export default class Dialog extends Component<DialogProps> {}
