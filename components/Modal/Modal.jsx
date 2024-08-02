import { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Card from '../Card';
import Button from '../Button';
import { Content, Header, HeaderText, Title, Footer } from './sub-components';
import regressionTestContainer from '../shared/regressionTestContainer';
import { colors, spacing } from '../shared/theme';
import isSSR from '../shared/isSSR';
import styles from './Modal.module.css';

const theme = {
  colors,
  spacing,
};

class Modal extends Component {
  static Header = Header;

  static HeaderText = HeaderText;

  static Content = Content;

  static Title = Title;

  static Footer = Footer;

  parent = document.body;

  constructor(props) {
    super(props);
    this.modalWrapperRef = createRef();

    this.modalOverlay = document.createElement('section');
    this.focusableElements = [];
    this.focusedElementBeforeOpen = document.activeElement;
    this.firstFocusableElement = null;
    this.lastFocusableElement = null;
  }

  componentDidMount() {
    this.parent = regressionTestContainer() ?? this.parent;

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
    const firstFocusableIndex = [...this.focusableElements].findIndex(
      (f) => f.nodeName === 'INPUT',
    ); // eslint-disable-line
    this.firstFocusableElement =
      this.focusableElements[
        firstFocusableIndex > -1 ? firstFocusableIndex : 0
      ];
    this.lastFocusableElement =
      this.focusableElements[this.focusableElements.length - 1];

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

  setBodyOverflow = (value) => {
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

  handleBackwardTab = (e) => {
    if (document.activeElement === this.firstFocusableElement) {
      e.preventDefault();
      this.lastFocusableElement.focus();
    }
  };

  handleFowardTab = (e) => {
    if (document.activeElement === this.lastFocusableElement) {
      e.preventDefault();
      this.firstFocusableElement.focus();
    }
  };

  handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        return this.handleBackwardTab(e);
      }

      return this.handleFowardTab(e);
    }

    return false;
  };

  render() {
    const {
      className = '',
      children,
      onClose,
      closeButtonAriaLabel,
      ...rest
    } = this.props;
    const wrapperClass = classNames(styles.wrapper, className);
    const modalCard = classNames(styles['modal-card']);
    const closeIcon = classNames(styles['close-icon']);

    return ReactDOM.createPortal(
      /**
       * This eslint warning was ignored because we need to have an event trigger on this div element to close the Modal
       * when clicking away and a perfectly accessible solution was not found for this scenario
       */
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
      <div
        onClick={this.handleClickOutside}
        ref={this.modalWrapperRef}
        role="dialog"
        className={wrapperClass}
        {...rest}
      >
        <Card tabIndex={0} className={modalCard}>
          {children}
          <Button.Icon
            onClick={onClose}
            aria-label={closeButtonAriaLabel}
            theme={theme}
            className={closeIcon}
            icon="close"
          />
        </Card>
      </div>,
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
};

/* istanbul ignore next */
Modal.defaultProps = {
  children: undefined,
  onClose: () => {},
  closeButtonAriaLabel: 'close dialog',
};

export default Modal;
