import { Component, ComponentType, ReactNode, TouchEvent, MouseEventHandler } from 'react';
import HeaderText from '../Card/HeaderText';
import Title from '../Card/Title';
import Footer from '../Card/Footer';

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

export default class Modal extends Component<ModalProps> {
  static Header: ModalHeader;

  static Title: Title;

  static HeaderText: HeaderText;

  static Content: ModalContent;

  static Footer: Footer;
}
