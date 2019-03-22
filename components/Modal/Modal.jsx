import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Colors from '../Colors';
import Card from '../Card';
import Button from '../Button';
import { query } from '../Grid/sub-components/shared';
import { Content, Header, HeaderText, Title, Footer } from './sub-components';

function getBreakpoint() {
  const sizes = {
    xsmall: '90%',
    small: '400px',
    medium: '600px',
    large: '800px',
  };

  return Object.entries(sizes).map(
    ([breakpoint, value]) => query[breakpoint]`width: ${value};`,
  );
}

export const ModalCard = styled(Card)`
  ${Card.Header} {
    padding-right: 56px;
  }

  ${getBreakpoint}
`;

const CloseIcon = styled(Button.Icon).attrs({
  icon: 'close',
})`
  position: absolute;
  top: 16px;
  right: 16px;
`;

CloseIcon.displayName = 'CloseIcon';

class Modal extends React.Component {
  static Header = Header;

  static HeaderText = HeaderText;

  static Content = Content;

  static Title = Title;

  static Footer = Footer;

  constructor(props) {
    super(props);

    this.modalWrapper = document.createElement('section');
    this.modalWrapper.style.cssText = `
      align-items: center;
      background-color: ${Colors.SHADOW[50]};
      display: flex;
      height: 100vh;
      left: 0;
      justify-content: center;
      position: fixed;
      top: 0;
      width: 100vw;
    `;
  }

  componentDidMount() {
    const { body } = document;
    body.appendChild(this.modalWrapper);
  }

  componentWillUnmount() {
    const { body } = document;
    body.removeChild(this.modalWrapper);
  }

  render() {
    const { children, onClose, closeButtonAriaLabel } = this.props;

    return ReactDOM.createPortal(
      <ModalCard role="dialog">
        {children}
        <CloseIcon onClick={onClose} aria-label={closeButtonAriaLabel} />
      </ModalCard>,
      this.modalWrapper,
    );
  }
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /** Function to be called when close icon is clicked. */
  onClose: PropTypes.func,
  /** aria-label property value for the close button icon. */
  closeButtonAriaLabel: PropTypes.string,
};

Modal.defaultProps = {
  children: undefined,
  onClose: () => {},
  closeButtonAriaLabel: 'close dialog',
};

export default Modal;
