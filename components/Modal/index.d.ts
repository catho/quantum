import { ReactNode, TouchEvent, MouseEventHandler, FC, HTMLAttributes } from 'react';

export interface ModalProps {
  children?: ReactNode[] | ReactNode;
  onClick?: (e?: MouseEvent | TouchEvent) => void; // braking change
  onClose?: MouseEventHandler<HTMLButtonElement>;
  closeButtonAriaLabel?: string;
  theme?: {
    breakpoints?: object;
    colors?: object;
    spacing?: object;
    components?: {
      button?: object;
    };
  };
}

  interface ModalHeaderProps  extends HTMLAttributes<HTMLElement> {
    children?: ReactNode[] | ReactNode;
    theme?: {
      spacing?: object;
    };
  }

  interface ModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    children?: ReactNode[] | ReactNode;
    small?: boolean;
    theme?: { 
      baseFontSize?: object; 
    };
}


interface ModalContentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode[] | ReactNode;
  theme?: { 
    baseFontSize?: number;
     spacing?: {} 
    };
}

interface ModalFooterProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode[] | ReactNode;
  theme?: {
    spacing?: {};
  };
}

interface HeaderTextProps  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode[] | ReactNode;
}

declare const Modal: FC<ModalProps> & {
  Header: FC<ModalHeaderProps>;
  Title: FC<ModalTitleProps>;
  HeaderText: FC<HeaderTextProps>;
  Content: FC<ModalContentProps>;
  Footer: FC<ModalFooterProps>;
};

export default Modal;
