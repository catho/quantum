import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Colors from '../Colors';
import Card from '../Card';
import Button from '../Button';
import { query } from '../Grid/sub-components/shared';
import { Content, Header, HeaderText, Title, Footer } from './sub-components';
import { theme as defaultTheme } from '../shared';

function getBreakpoint({ theme: { breakpoints } }) {
  const sizes = {
    xsmall: '90%',
    small: '400px',
    medium: '600px',
    large: '800px',
  };
  return Object.entries(sizes).map(
    ([breakpoint, value]) => query(breakpoints)[breakpoint]`width: ${value};`,
  );
}

const ModalCard = styled(Card)`
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

const ModalWrapper = styled.div`
  align-items: center;
  background-color: ${Colors.SHADOW[50]};
  display: flex;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100vw;
`;

ModalWrapper.displayName = 'ModalWrapper';

class Modal extends React.Component {
  static Header = Header;

  static HeaderText = HeaderText;

  static Content = Content;

  static Title = Title;

  static Footer = Footer;

  constructor(props) {
    super(props);

    this.modalWrapperRef = React.createRef();
    this.modalOverlay = document.createElement('section');
    this.focusableElements = [];
    this.focusedElementBeforeOpen = document.activeElement;
    this.firstFocusableElement = null;
    this.lastFocusableElement = null;
  }

  componentDidMount() {
    const { body } = document;

    body.appendChild(this.modalOverlay);

    this.focusableElements = this.modalOverlay.querySelectorAll(
      `a[href],
      area[href],
      input:not([disabled]),
      select:not([disabled]),
      textarea:not([disabled]),
      button:not([disabled]),
      [tabindex="0"]`,
    );
    this.firstFocusableElement = this.focusableElements[0]; // eslint-disable-line
    this.lastFocusableElement = this.focusableElements[
      this.focusableElements.length - 1
    ];
    this.firstFocusableElement.focus();

    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keydown', this.handleEscKey);
  }

  componentWillUnmount() {
    const { body } = document;
    this.focusedElementBeforeOpen.focus();

    body.removeChild(this.modalOverlay);
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keydown', this.handleEscKey);
  }

  handleClickOutside = ({ target }) => {
    const { onClose } = this.props;
    const { current: modalRef } = this.modalWrapperRef;

    if (target === modalRef) {
      onClose();
    }
  };

  handleEscKey = ({ key }) => {
    const { onClose } = this.props;

    if (key === 'Escape') {
      onClose();
    }
  };

  handleBackwardTab = e => {
    if (document.activeElement === this.firstFocusableElement) {
      e.preventDefault();
      this.lastFocusableElement.focus();
    }
  };

  handleFowardTab = e => {
    if (document.activeElement === this.lastFocusableElement) {
      e.preventDefault();
      this.firstFocusableElement.focus();
    }
  };

  handleKeyDown = e => {
    if (e.key === 'Tab') {
      if (this.focusableElements.length === 1) {
        return e.preventDefault();
      }

      if (e.shiftKey) {
        return this.handleBackwardTab(e);
      }

      return this.handleFowardTab(e);
    }

    return false;
  };

  render() {
    const {
      children,
      onClose,
      closeButtonAriaLabel,
      theme,
      ...rest
    } = this.props;

    return ReactDOM.createPortal(
      <ModalWrapper
        onClick={this.handleClickOutside}
        ref={this.modalWrapperRef}
        role="dialog"
        {...rest}
      >
        <ModalCard theme={theme}>
          {children}
          <CloseIcon onClick={onClose} aria-label={closeButtonAriaLabel} />
        </ModalCard>
      </ModalWrapper>,
      this.modalOverlay,
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
  theme: PropTypes.shape({
    breakpoints: PropTypes.object,
  }),
};

Modal.defaultProps = {
  children: undefined,
  onClose: () => {},
  closeButtonAriaLabel: 'close dialog',
  theme: defaultTheme,
};

export default Modal;
