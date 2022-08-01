import { useEffect, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
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

const PopoverContent = styled.div`
  ${shadow(5)};
  align-items: center;
  display: flex;
  border-radius: 4px;
  font-size: 16px;
  ${({
    theme: {
      spacing: { xsmall },
    },
  }) => `padding: ${xsmall}px;`}

  position: absolute;
  line-height: 0;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
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

  :hover {
    background: none;
    opacity: 1;
    ${_getTextColor}
  }
`;

const PopoverChildren = styled.div``;

const Content = props => {
  const {
    placement,
    children,
    onPopoverClose,
    theme,
    skin,
    inverted,
    anchorEl,
    visible,
    ...rest
  } = props;

  useEffect(() => {
    console.log('props content', props);
    if (visible && !anchorEl) {
      document.body.appendChild(props.anchorEl);
    }

    return () => {
      if (visible && !anchorEl) {
        document.body.removeChild(props.anchorEl);
      }
    };
  }, []);

  if (!visible) {
    return <p>OPA</p>;
  }

  return ReactDOM.createPortal(
    <PopoverContent
      theme={theme}
      inverted={inverted}
      placement={placement}
      skin={skin}
      ref={element => {
        this.innerContentRef = element;
      }}
      {...rest}
    >
      <PopoverChildren>{children}</PopoverChildren>
      <CloseButton
        skin={skin}
        theme={theme}
        inverted={inverted}
        onClick={onPopoverClose}
      />
    </PopoverContent>,
    this.anchorEl,
  );
};

CloseButton.displayName = 'CloseButton';
PopoverChildren.displayName = 'PopoverChildren';

Content.propTypes = {
  anchorEl: PropTypes.element,
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
  anchorEl: undefined,
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
      button: components.button,
    },
  },
};

export default Content;
