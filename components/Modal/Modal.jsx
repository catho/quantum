import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../Card';
import Button from '../Button';
import { query } from '../Grid/sub-components/shared';
import { Content, Header, HeaderText, Title, Footer } from './sub-components';
import { hexToRgba } from '../shared';
import { breakpoints, colors, spacing, components } from '../shared/theme';
import isSSR from '../shared/isSSR';

const closeButtonPadding = spacing.medium;

function getBreakpoint({ theme: { breakpoints: themeBreakpoints } }) {
  const sizes = {
    xsmall: '90%',
    small: '400px',
    medium: '600px',
    large: '800px',
  };
  return Object.entries(sizes).map(
    ([breakpoint, value]) =>
      query(themeBreakpoints)[breakpoint]`width: ${value};`,
  );
}

const ModalCard = styled(Card)`
  ${Card.Header} {
    padding-right: ${({
      theme: {
        spacing: { xxxlarge },
      },
    }) => `${xxxlarge + closeButtonPadding}px`};
  }

  ${getBreakpoint}
`;

const CloseIcon = styled(Button.Icon).attrs({
  icon: 'close',
})`
  position: absolute;

  ${({
    theme: {
      spacing: { medium, small },
    },
  }) => `
    top: ${small}px;
    right: ${medium}px;
  `};
`;

CloseIcon.displayName = 'CloseIcon';

const ModalWrapper = styled.div`
  align-items: center;
  background-color: ${({
    theme: {
      colors: { neutral },
    },
  }) => hexToRgba(neutral[700], 0.5)};
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

ModalWrapper.displayName = 'ModalWrapper';

class Modal extends React.Component {
  parent = document.body;

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
    if (document.querySelector('#regression-tests')) {
      this.parent = document.querySelector('#regression-tests');
    }
    this.parent.appendChild(this.modalOverlay);
    this.setBodyOverflow('hidden');

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
    this.focusedElementBeforeOpen.focus();
    this.setBodyOverflow('auto');

    this.parent.removeChild(this.modalOverlay);
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keydown', this.handleEscKey);
  }

  setBodyOverflow = value => {
    if (isSSR()) return;
    const { body } = document;
    body.style.overflow = value;
  };

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

  static Header = Header;

  static HeaderText = HeaderText;

  static Content = Content;

  static Title = Title;

  static Footer = Footer;

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
        theme={theme}
        {...rest}
      >
        <ModalCard theme={theme}>
          {children}
          <CloseIcon
            onClick={onClose}
            aria-label={closeButtonAriaLabel}
            theme={theme}
          />
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
    colors: PropTypes.object,
    spacing: PropTypes.object,
    components: PropTypes.shape({
      button: PropTypes.object,
    }),
  }),
};

Modal.defaultProps = {
  children: undefined,
  onClose: () => {},
  closeButtonAriaLabel: 'close dialog',
  theme: {
    breakpoints,
    colors,
    spacing,
    components: {
      button: components.button,
    },
  },
};

export default Modal;
