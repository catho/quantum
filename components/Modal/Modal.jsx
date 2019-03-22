import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Colors from '../Colors';
import Card from '../Card';
import Button from '../Button';
import { query } from '../Grid/sub-components/shared';
import { Content, Header, HeaderText, Title } from './sub-components';

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

const CloseIcon = styled(Button.Icon)`
  position: absolute;
  top: 16px;
  right: 16px;
`;

class Modal extends React.Component {
  static Content = Content;

  static Header = Header;

  static HeaderText = HeaderText;

  static Title = Title;

  constructor(props) {
    super(props);

    this.modalWrapper = document.createElement('section');
    this.modalWrapper.style.cssText = `
      position: absolute;
      width: 100vw;
      height: 100vh;
      background-color: ${Colors.SHADOW[50]};
      display: flex;
      align-items: center;
      justify-content: center;
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
    const { children, onClose } = this.props;

    return ReactDOM.createPortal(
      <ModalCard>
        {children}
        <CloseIcon icon="close" onClick={onClose} />
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
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  children: undefined,
  onClose: () => {},
};

export default Modal;
