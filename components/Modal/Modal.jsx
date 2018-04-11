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
  height: 25%;
  min-width: 455px;
  min-height: 200px;
  padding: 20px;
  position: relative;
  width: 50%;

  @media (max-width: ${SIZES.tablet}px) {
    min-width: 100%;
    height: auto;
    width: 100%;
  }
`;

const ModalTitle = styled.h2`
  color: ${Colors.NEUTRAL.DARKEYGRAY.BLACK};
  font-size: 18px;
  margin-bottom: 0;
`;

const ModalText = styled.p`
  margin: 5px 0;
`;

class Modal extends React.Component {
  componentDidMount() {

  }

  render() {
    const { title, children } = this.props;
    return (
      <ModalOverlay>
        <ModalContent>
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
  title: '',
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Modal;
