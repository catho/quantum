import { ComponentType, ReactNode, TouchEvent, MouseEventHandler } from 'react';

interface StaticProps {
  theme?: {
    spacing?: {};
  };
}

export type ModalHeader = ComponentType<StaticProps>;
export type ModalContent = ComponentType<StaticProps>;

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

interface CompoundedModal extends React.FunctionComponent<ModalProps> {
  Header: React.FunctionComponent<ModalProps>;
  Title: React.FunctionComponent<ModalProps>;
  HeaderText: React.FunctionComponent<ModalProps>;
  Content: React.FunctionComponent<ModalProps>;
  Footer: React.FunctionComponent<ModalProps>;
}

const Modal: CompoundedModal = () => null;

export default Modal;
