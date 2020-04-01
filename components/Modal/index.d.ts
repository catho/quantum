import React from 'react';
import HeaderText from '../Card/HeaderText';
import Footer from '../Card/Footer';

interface StaticProps {
  theme?: {
    spacing?: object;
  };
}

export type ModalHeader = React.ComponentType<StaticProps>;
export type ModalContent = React.ComponentType<StaticProps>;

export interface ModalProps {
  children?: React.ReactNode[] | React.ReactNode;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
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

export default class Modal extends React.Component<ModalProps> {
  static Header: ModalHeader;
  static HeaderText: HeaderText;
  static Content: ModalContent;
  static Footer: Footer;
}
