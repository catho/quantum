import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';
import { SIZES } from '../Grid/sub-components/shared/grid-config';
import Colors from '../Colors';
import theme from '../../theme';

const ModalOverlay = styled.div`
  align-items: center;
  background-color: ${rgba(Colors.NEUTRAL.GRAY.WHITE, 0.8)};
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

const Modal = ({
  title,
  children,
  closeModal,
  opened,
}) => opened && (
  <ModalOverlay>
    <ModalContent>
      <ModalClose onClick={closeModal}>x</ModalClose>
      {title && (<ModalTitle>{title}</ModalTitle>)}
      <ModalText>
        {children}
      </ModalText>
    </ModalContent>
  </ModalOverlay>
);

Modal.defaultProps = {
  title: 'Generic title',
  children: 'Generic message',
  opened: false,
};

Modal.propTypes = {
  children: PropTypes.node,
  /** function to close the modal */
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  opened: PropTypes.bool,
};

export default Modal;
