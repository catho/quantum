import React from 'react';

export interface SnackBarProps {
  actionTrigger?: {
    title: string;
    callbackFn: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> | React.TouchEventHandler<HTMLButtonElement | HTMLAnchorElement>;
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
  onClose?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> | React.TouchEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  secondsToClose?: number;
  skin?: 'primary' | 'success' | 'error' | 'neutral' | 'warning';
  text: string | HTMLParagraphElement;
  inverted?: boolean;
  hideIcon?: boolean;
  id?: string;
}

export default class SnackBar extends React.Component<SnackBarProps> {}
