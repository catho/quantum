import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Colors from '../../Colors';
import { components, spacing } from '../../shared/theme';
import getArrow from '../arrowProperties';
import Button from '../../Button';

const _colors = ({
  skin,
  theme: {
    components: {
      popover: {
        skins: { [skin]: popoverColor },
      },
    },
  },
  inverted,
}) => {
  if (inverted) {
    const [background, text] = [popoverColor.text, popoverColor.background];

    return css`
      background-color: ${background};
      color: ${text};
    `;
  }
  return css`
    background-color: ${popoverColor.background};
    color: ${popoverColor.text};
  `;
};

const PopoverContent = styled.div`
  box-shadow: 0 2px 4px 0 ${Colors.SHADOW[50]};
  align-items: start;
  display: flex;
  border-radius: 4px;
  font-size: 16px;
  ${({
    theme: {
      spacing: { xsmall },
    },
  }) => `padding: ${xsmall}px`};
  position: absolute;
  line-height: 0;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  z-index: 100;

  &:before {
    ${({ placement, skin, theme, inverted }) =>
      getArrow(placement, skin, theme, inverted)};
  }

  ${_colors}
`;

const CloseButton = styled(Button.Icon).attrs({
  icon: 'close',
})`
  display: inherit;
  height: auto;
  ${({
    theme: {
      spacing: { medium },
    },
  }) => `margin-left: ${medium}px`};
  opacity: 0.8;
  padding: 0;
  transition: opacity 0.4s ease;
  width: auto;

  :hover {
    background: none;
    opacity: 1;
  }
`;

const PopoverChildren = styled.div``;

class Content extends Component {
  constructor(props) {
    super(props);

    this.wrapper = document.createElement('section');
  }

  componentDidMount() {
    document.body.appendChild(this.wrapper);
  }

  componentWillUnmount() {
    document.body.removeChild(this.wrapper);
  }

  render() {
    const { placement, children, onPopoverClose, theme, ...rest } = this.props;

    return ReactDOM.createPortal(
      <PopoverContent
        theme={theme}
        placement={placement}
        ref={element => {
          this.innerContentRef = element;
        }}
        {...rest}
      >
        <PopoverChildren>{children}</PopoverChildren>
        <CloseButton theme={theme} onClick={onPopoverClose} />
      </PopoverContent>,
      this.wrapper,
    );
  }
}

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
  skin: PropTypes.oneOf(['neutral', 'success', 'warning', 'error']),
  theme: PropTypes.shape({
    spacing: PropTypes.object,
    components: PropTypes.shape({
      badge: PropTypes.object,
    }),
  }),
};

Content.defaultProps = {
  inverted: false,
  placement: 'top',
  onPopoverClose: () => {},
  skin: 'neutral',
  theme: {
    spacing,
    components: {
      popover: components.popover,
    },
  },
};

export default Content;
