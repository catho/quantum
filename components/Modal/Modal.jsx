import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import theme from '../../theme';
import { Header, Content, Footer } from './sub-components';

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

const Wrapper = styled.section`
  background-color: ${Colors.WHITE};
  border-radius: 8px;
  color: ${Colors.SECONDARY['800']};
  overflow: hidden;
`;

class Modal extends Component {
  static Header = Header;
  static Content = Content;
  static Footer = Footer;

  constructor(props) {
    super(props);

    const { open } = this.props;

    this.state = {
      opened: open,
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  closeModal = () => {
    this.setState({
      opened: false,
    });
  }

  openModal = () => {
    this.setState({
      opened: true,
    });
  }

  handleOverlayClick = ({ target }) => this.overlayRef === target && this.closeModal();

  handleTriggerClick = (e) => {
    const { trigger: { props: { onClick } } } = this.props;
    this.openModal();

    return typeof onClick === 'function' && onClick(e);
  }

  render() {
    const {
      children,
      trigger,
    } = this.props;

    const triggerProps = trigger.props;

    return (
      <React.Fragment>
        {cloneElement(trigger, {
          ...triggerProps,
          onClick: this.handleTriggerClick,
        })}

        {this.state.opened && (
          <Overlay innerRef={(ref) => { this.overlayRef = ref; }} onClick={this.handleOverlayClick}>
            <Wrapper>
              {children}
            </Wrapper>
          </Overlay>
        )}
      </React.Fragment>
    );
  }
}

Modal.defaultProps = {
  open: false,
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  trigger: PropTypes.node.isRequired,
  open: PropTypes.bool,
};

export default Modal;
