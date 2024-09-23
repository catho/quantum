import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { useEffect, useRef } from 'react';
import { components, spacing, colors, breakpoints } from '../../shared/theme';
import getArrow from '../arrowProperties';
import Button from '../../Button';
import { shadow } from '../../shared';

const _getColors = ({
  skin,
  theme: {
    components: {
      popover: {
        skins: {
          [skin]: { text, background },
        },
      },
    },
  },
  inverted,
}) => `
  background-color: ${inverted ? text : background};
  color: ${inverted ? background : text}
`;

const _getTextColor = ({
  skin,
  theme: {
    components: {
      popover: {
        skins: {
          [skin]: { background, text },
        },
      },
    },
  },
  inverted,
}) => `color: ${inverted ? background : text};`;

const contentPositionVariations = {
  top: css`
    top: -15px;
    left: 50%;
    transform: translate(-50%, -100%);
  `,
  bottom: css`
    bottom: -15px;
    left: 50%;
    transform: translate(-50%, 100%);
  `,
  left: css`
    top: 50%;
    left: -15px;
    transform: translate(-100%, -50%);
  `,
  right: css`
    top: 50%;
    right: -15px;
    transform: translate(100%, -50%);
  `,
};

const PopoverContent = styled.div`
  ${shadow(5)};
  align-items: center;
  display: flex;
  border-radius: 4px;
  font-size: 16px;
  width: max-content;
  ${({
    theme: {
      spacing: { xsmall },
    },
  }) => `padding: ${xsmall}px;`}

  position: absolute;
  ${({ placement }) => contentPositionVariations[placement]};

  line-height: 0;
  transition:
    opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;
  z-index: 100;

  &:before {
    ${getArrow};
  }

  ${_getColors}
`;

const CloseButton = styled(Button.Icon).attrs({
  icon: 'close',
})`
  ${_getTextColor}
  display: inherit;
  height: auto;
  ${({
    theme: {
      spacing: { medium },
    },
  }) => `margin-left: ${medium}px;`}

  min-height: auto;
  opacity: 0.8;
  padding: 0;
  transition: opacity 0.4s ease;
  width: auto;

  &:hover {
    background: none;
    opacity: 1;
    ${_getTextColor}
  }
`;

const PopoverChildren = styled.div``;

const Content = ({
  placement = 'top',
  children,
  onPopoverClose = () => {},
  theme = {
    colors,
    spacing,
    breakpoints,
    components: {
      popover: components.popover,
      button: components.button,
    },
  },
  skin = 'neutral',
  inverted = false,
  closeOnClickOut = false,
  ...rest
}) => {
  const popoverRef = useRef(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (closeOnClickOut) {
      const onClickOutside = (event) => {
        const element = event.target;

        if (popoverRef.current && !popoverRef.current.contains(element)) {
          onPopoverClose();
        }
      };

      window.addEventListener('click', onClickOutside);
      return () => {
        window.removeEventListener('click', onClickOutside);
      };
    }
  }, []);

  return (
    <PopoverContent
      theme={theme}
      inverted={inverted}
      placement={placement}
      skin={skin}
      ref={popoverRef}
      {...rest}
    >
      <PopoverChildren>{children}</PopoverChildren>
      <CloseButton
        skin={skin}
        theme={theme}
        inverted={inverted}
        onClick={onPopoverClose}
      />
    </PopoverContent>
  );
};

CloseButton.displayName = 'CloseButton';
PopoverChildren.displayName = 'PopoverChildren';

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  inverted: PropTypes.bool,
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  onPopoverClose: PropTypes.func,
  skin: PropTypes.oneOf(['neutral', 'primary', 'success', 'warning', 'error']),
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
    breakpoints: PropTypes.object,
    components: PropTypes.shape({
      popover: PropTypes.object,
      button: PropTypes.object,
    }),
  }),
};

export default Content;
