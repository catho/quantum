import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SIZES } from '../Grid/sub-components/shared/grid-config';
import Colors from '../Colors';
import theme from '../../theme';

const ModalOverlay = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  right: 0;
  position: fixed;
  top: 0;
  z-index: 10;

  @media (max-width: ${SIZES.tablet}px) {
    align-items: flex-start;
  }
`;

const ModalContent = styled.section`
  background-color: white;
  box-shadow: ${theme.shadow};
  box-sizing: border-box;
  min-width: 455px;
  min-height: 200px;
  padding: 20px;
  position: relative;
  width: 50%;

  @media (max-width: ${SIZES.tablet}px) {
    min-width: 100%;
    width: 100%;
  }
`;

const ModalClose = styled.span`
  color: ${Colors.NEUTRAL.DARKERGRAY.BLACK};
  cursor: pointer;
  font-size: 12px;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const ModalTitle = styled.h2`
  color: ${Colors.NEUTRAL.DARKERGRAY.BLACK};
  font-size: 18px;
  margin: 0;
`;

const ModalText = styled.p`
  margin: 5px 0;
`;

class Modal extends React.Component {
  constructor({ show }) {
    super();
    this.state = {
      show,
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  }

  render() {
    const { title, children } = this.props;
    return this.state.show && (
      <ModalOverlay>
        <ModalContent>
          <ModalClose onClick={this.handleClose}>x</ModalClose>
          {title && (<ModalTitle>{title}</ModalTitle>)}
          <ModalText>
            {children}
          </ModalText>
        </ModalContent>
      </ModalOverlay>
    );
  }
}

Modal.defaultProps = {
  title: 'Generic title',
  show: true,
  children: 'Generic message',
};

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  title: PropTypes.string,
};

export default Modal;
