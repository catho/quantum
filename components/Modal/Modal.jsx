import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SIZES } from '../Grid/sub-components/shared/grid-config';
import Colors from '../Colors';
import theme from '../../theme';

const Overlay = styled.div`
  align-items: center;
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

const Content = styled.section`
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

const Close = styled.span`
  color: ${Colors.BLACK};
  cursor: pointer;
  font-size: 12px;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Title = styled.h2`
  color: ${Colors.BLACK};
  font-size: 18px;
  margin: 0;
`;

const Text = styled.p`
  margin: 5px 0;
`;

const Modal = ({
  title,
  children,
  closeModal,
}) => (
  <Overlay>
    <Content>
      <Close onClick={closeModal}>x</Close>
      {title && (<Title>{title}</Title>)}
      <Text>
        {children}
      </Text>
    </Content>
  </Overlay>
);

Modal.defaultProps = {
  title: 'Generic title',
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  /** function to close the modal */
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default Modal;
