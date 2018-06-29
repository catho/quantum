import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import theme from '../../theme';
import { Header, Content, Footer } from './sub-components';
import Button from '../Button';

const Overlay = styled.div`
  align-items: center;
  background-color: ${theme.mixins.hexToRgba(Colors.BLACK, 0.5)};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  right: 0;
  position: fixed;
  top: 0;
  z-index: 100;
`;

Overlay.displayName = 'Overlay';

const Wrapper = styled.section`
  background-color: ${Colors.WHITE};
  border-radius: 8px;
  box-shadow: 0 3px 3px 0 ${theme.mixins.hexToRgba(Colors.BLACK, 0.2)},
    0 8px 14px 3px ${theme.mixins.hexToRgba(Colors.BLACK, 0.12)},
    0 8px 10px 1px ${theme.mixins.hexToRgba(Colors.BLACK, 0.14)};
  color: ${Colors.SECONDARY['800']};
  overflow: hidden;
`;

class Modal extends Component {
  static Header = Header;
  static Content = Content;
  static Footer = Footer;

  constructor(props) {
    super(props);

    const { opened } = this.props;

    this.state = {
      opened,
    };
  }

  shouldComponentUpdate(props, state) {
    if (props.opened !== state.opened) {
      this.state.opened = props.opened;
    }
    return true;
  }

  closeModal = () => {
    this.setState({
      opened: false,
    });
  };

  openModal = () => {
    this.setState({
      opened: true,
    });
  };

  handleOverlayClick = ({ target }) =>
    this.overlayRef === target && this.closeModal();

  handleTriggerClick = e => {
    const {
      trigger: {
        props: { onClick },
      },
    } = this.props;
    this.openModal();

    onClick(e);
  };

  render() {
    const { children, trigger, closeOnOverlayClick } = this.props;

    return (
      <React.Fragment>
        {cloneElement(trigger, {
          onClick: this.handleTriggerClick,
        })}

        {this.state.opened && (
          <Overlay
            innerRef={ref => {
              this.overlayRef = ref;
            }}
            onClick={closeOnOverlayClick ? this.handleOverlayClick : undefined}
          >
            <Wrapper>{children}</Wrapper>
          </Overlay>
        )}
      </React.Fragment>
    );
  }
}

Modal.defaultProps = {
  opened: false,
  trigger: '',
  closeOnOverlayClick: false,
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  /** An element to fire the open event */
  trigger: PropTypes.node,
  opened: PropTypes.bool,
  closeOnOverlayClick: PropTypes.bool,
};

export default Modal;
