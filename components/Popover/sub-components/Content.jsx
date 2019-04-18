import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Colors from '../../Colors';
import getArrow from '../config';
import Button from '../../Button';

const getStyleBySkin = skin => {
  const indexColor = skin.toUpperCase();
  return `
      background-color: ${
        skin === 'default' ? Colors.WHITE : Colors[indexColor][200]
      };
      color: ${
        skin === 'default' ? Colors.BLACK[700] : Colors[indexColor][900]
      };
  `;
};

const PopoverContent = styled.div`
  box-shadow: 0 2px 4px 0 ${Colors.SHADOW[50]};
  align-items: start;
  display: flex;
  border-radius: 4px;
  font-size: 16px;
  padding: 8px;
  position: absolute;
  line-height: 0;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  z-index: 100;

  &:before {
    ${({ placement, skin }) => getArrow(placement, skin)};
  }

  ${({ skin }) => getStyleBySkin(skin)}
`;

const PopoverText = styled.span`
  display: inline-block;
  max-width: 250px;
`;

const CloseButton = styled(Button.Icon).attrs({
  icon: 'close',
})`
  display: inherit;
  height: auto;
  margin: 0 0 0 16px;
  opacity: 0.8;
  padding: 0;
  transition: opacity 0.4s ease;
  width: auto;

  :hover {
    background: none;
    opacity: 1;
  }
`;

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
    const { placement, children, onPopoverClose, ...rest } = this.props;

    return ReactDOM.createPortal(
      <PopoverContent
        placement={placement}
        ref={element => {
          this.innerContentRef = element;
        }}
        {...rest}
      >
        <PopoverText>{children}</PopoverText>
        <CloseButton onClick={onPopoverClose} />
      </PopoverContent>,
      this.wrapper,
    );
  }
}

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  onPopoverClose: PropTypes.func,
  skin: PropTypes.oneOf(['default', 'success', 'warning', 'error']),
};

Content.defaultProps = {
  placement: 'top',
  onPopoverClose: () => {},
  skin: 'default',
};

export default Content;
