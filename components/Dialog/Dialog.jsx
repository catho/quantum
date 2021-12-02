import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  z-index: 98;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Dialog = ({
  onClose,
  closeOnTime,
  children,
  theme,
  disableClickOutside,
  selector,
}) => {
  const dialogOver = useRef();

  const [mounted, setMounted] = useState(false);

  let timeout = null;

  const handleClose = () => {
    onClose();
    clearTimeout(timeout);
  };

  const handleEscKey = ({ key }) => {
    if (key === 'Escape') {
      handleClose();
    }
  };

  const handleClickOutside = ({ target }) => {
    if (target === dialogOver.current && !disableClickOutside) {
      handleClose();
    }
  };

  if (closeOnTime && mounted) {
    timeout = setTimeout(() => {
      onClose();
    }, closeOnTime * 1000);
  }

  useEffect(() => {
    setMounted(true);
    window.addEventListener('keydown', handleEscKey);
    document.body.style.overflow = 'hidden';

    return () => {
      setMounted(false);
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return mounted
    ? createPortal(
        <Wrapper
          ref={dialogOver}
          onClick={e => handleClickOutside(e)}
          role="dialog"
          tabIndex="-1"
          theme={theme}
        >
          {children}
        </Wrapper>,
        document.querySelector(selector),
      )
    : null;
};

Dialog.propTypes = {
  /** This prop can be anything from a component to pure html */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /** Callback function triggered when the component requests to be closed */
  onClose: PropTypes.func,
  /** Defines a time in seconds for the dialog to be closed */
  closeOnTime: PropTypes.number,
  /** This props it's to disable the functionality to close when user clicks in the overlay */
  disableClickOutside: PropTypes.bool,
  selector: PropTypes.string,
  theme: PropTypes.shape({
    colors: PropTypes.object,
  }),
};

Dialog.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Dialog',
  props: {
    onClose: {
      defaultValue: {
        value: '() => { }',
        computed: false,
      },
      type: {
        name: 'func',
      },
      required: false,
      description:
        'Callback function triggered when the component requests to be closed',
    },
    children: {
      defaultValue: {
        value: 'undefined',
        computed: true,
      },
      type: {
        name: 'union',
        value: [
          {
            name: 'arrayOf',
            value: {
              name: 'node',
            },
          },
          {
            name: 'node',
          },
        ],
      },
      required: false,
      description: 'This prop can be anything from a component to pure html',
    },
    closeOnTime: {
      defaultValue: {
        value: 'undefined',
        computed: true,
      },
      type: {
        name: 'number',
      },
      required: false,
      description: 'Defines a time in seconds for the dialog to be closed',
    },
    disableClickOutside: {
      defaultValue: {
        value: 'false',
        computed: false,
      },
      type: {
        name: 'bool',
      },
      required: false,
      description:
        "This props it's to disable the functionality to close when user clicks in the overlay",
    },
  },
};

Dialog.defaultProps = {
  onClose: () => {},
  selector: 'body',
  children: undefined,
  closeOnTime: undefined,
  disableClickOutside: false,
  theme: {
    colors,
  },
};

export default Dialog;
