import React from 'react';
import HeaderText from '../Card/HeaderText';
import Title from '../Card/Title';
import Footer from '../Card/Footer';

interface StaticProps {
  theme?: {
    spacing?: {};
  };
}

export type ModalHeader = React.ComponentType<StaticProps>;
export type ModalContent = React.ComponentType<StaticProps>;

export interface ModalProps {
  children?: React.ReactNode[] | React.ReactNode;
  onClick?: (e?: React.MouseEvent | React.TouchEvent) => void;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
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

export default class Modal extends React.Component<ModalProps> {
  static Header: ModalHeader;

  static Title: Title;

  static HeaderText: HeaderText;

  static Content: ModalContent;

  static Footer: Footer;
}
