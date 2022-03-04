import { Component, MouseEventHandler, TouchEventHandler } from 'react';

export interface SnackBarProps {
  actionTrigger?: {
    title: string;
    callbackFn: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> | TouchEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  };
  theme?: {
    baseFontSize?: number;
    colors?: {};
    breakpoints?: {};
    spacing?: {};
    components?: {
      snackbar?: {};
      button?: {};
    };
  };
  closeButtonAriaLabel?: string;
  onClose?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> | TouchEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  secondsToClose?: number;
  skin?: 'primary' | 'success' | 'error' | 'neutral' | 'warning';
  text: string | HTMLParagraphElement;
  inverted?: boolean;
  hideIcon?: boolean;
  id?: string;
}

export default class SnackBar extends Component<SnackBarProps> {}
