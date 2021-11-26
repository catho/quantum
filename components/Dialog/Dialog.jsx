import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hexToRgba } from '../shared';
import { colors } from '../shared/theme';

const Wrapper = styled.div`
  animation: fadeIn ease-out 0.3s;
  background-color: ${({
    theme: {
      colors: { neutral },
    },
  }) => hexToRgba(neutral[700], 0.5)};
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 99;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Dialog = ({ shouldOpen, onClose, closeOnTime, children, theme }) => {
  const dialogOver = useRef();

  const handleCloseDialog = () => {
    onClose();
    document.body.style.overflow = 'auto';
  };

  const handleEscKey = ({ key }) => {
    if (key === 'Escape') {
      handleCloseDialog();
    }
  };

  const handleClickOutside = ({ target }) => {
    if (target === dialogOver.current) {
      handleCloseDialog();
    }
  };

  if (shouldOpen) {
    document.body.style.overflow = 'hidden';
  }

  if (closeOnTime && shouldOpen) {
    setTimeout(() => {
      handleCloseDialog();
    }, closeOnTime * 1000);
  }

  useEffect(() => {
    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    shouldOpen && (
      <Wrapper
        ref={dialogOver}
        onClick={e => handleClickOutside(e)}
        role="dialog"
        tabIndex="-1"
        theme={theme}
      >
        {children}
      </Wrapper>
    )
  );
};

Dialog.propTypes = {
  /** This prop can be anything from a component to pure html */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /** This prop is to inform when the dialog should open or not */
  shouldOpen: PropTypes.bool.isRequired,
  /** Callback function triggered when the component requests to be closed */
  onClose: PropTypes.func,
  /** Defines a time in seconds for the dialog to be closed */
  closeOnTime: PropTypes.number,
  theme: PropTypes.shape({
    colors: PropTypes.object,
  }),
};

Dialog.defaultProps = {
  onClose: () => {},
  children: undefined,
  closeOnTime: undefined,
  theme: {
    colors,
  },
};

export default Dialog;
