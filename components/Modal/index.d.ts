import { ReactNode, TouchEvent, MouseEventHandler, FC, HTMLAttributes } from 'react';

export interface ModalProps {
  children?: ReactNode[] | ReactNode;
  onClick?: (e?: MouseEvent | TouchEvent) => void; // braking change
  onClose?: MouseEventHandler<HTMLButtonElement>;
  closeButtonAriaLabel?: string;
}

  interface ModalHeaderProps  extends HTMLAttributes<HTMLElement> {
    children?: ReactNode[] | ReactNode;
  }

  interface ModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    children?: ReactNode[] | ReactNode;
    small?: boolean;
}


interface ModalContentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode[] | ReactNode;
}

interface ModalFooterProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode[] | ReactNode;
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
