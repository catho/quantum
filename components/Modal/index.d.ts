import { ReactNode, TouchEvent, MouseEventHandler } from 'react';

export interface ModalProps {
  children?: ReactNode[] | ReactNode;
  onClick?: (e?: MouseEvent | TouchEvent) => void;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  closeButtonAriaLabel?: string;
  theme?: {
    breakpoints?: {};
    colors?: {};
    spacing?: {};
    components?: {
      button?: {};
    };
  };
}

  interface ModalHeaderProps {
    theme?: {
      spacing?: {};
    };
  }

  interface ModalTitleProps {
    small?: boolean;
    theme?: { 
      baseFontSize?: {}; 
    };
}


interface ModalContentProps {
  theme?: { 
    baseFontSize?: number;
     spacing?: {} 
    };
}

interface ModalFooterProps {
  theme?: {
    spacing?: {};
  };
}

interface CompoundedModal extends React.FunctionComponent<ModalProps> {
  Header: React.FunctionComponent<ModalHeaderProps>;
  Title: React.FunctionComponent<ModalTitleProps>;
  HeaderText: React.FunctionComponent;
  Content: React.FunctionComponent<ModalContentProps>;
  Footer: React.FunctionComponent<ModalFooterProps>;
}

const Modal: CompoundedModal = () => null;

export default Modal;
