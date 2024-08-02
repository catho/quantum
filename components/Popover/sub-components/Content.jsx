import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

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

const propsNotContainedInButton = ['inverted'];

const CloseButton = styled(Button.Icon)
  .attrs({
    icon: 'close',
  })
  .withConfig({
    shouldForwardProp: (prop) => !propsNotContainedInButton.includes(prop),
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
  placement,
  children,
  onPopoverClose,
  theme,
  skin,
  inverted,
  ...rest
}) => (
  <PopoverContent
    theme={theme}
    inverted={inverted}
    placement={placement}
    skin={skin}
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

/* istanbul ignore next */
Content.defaultProps = {
  inverted: false,
  placement: 'top',
  onPopoverClose: () => {},
  skin: 'neutral',
  theme: {
    colors,
    spacing,
    breakpoints,
    components: {
      popover: components.popover,
    },
  },
};

export default Content;
