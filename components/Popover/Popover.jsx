import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes, { oneOf } from 'prop-types';
import Colors from '../Colors';
import placementConfig from '../Tooltip/options';
import Button from '../Button';

const getStyleBySkin = skin => {
  const color = skin.toUpperCase();
  // const indexColor = skin === 'default' ? '500' : '700';
  return `
      background-color: ${
        skin === 'default' ? Colors.WHITE : Colors[color][200]
      };
      color: ${skin === 'default' ? Colors.BLACK[700] : Colors[color][900]};
  `;
};

const PopoverContent = styled.div`
  box-shadow: 0 2px 4px 0 ${Colors.SHADOW[50]};
  align-items: start;
  display: flex;
  border-radius: 4px;
  font-size: 16px;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  padding: 4px 8px;
  position: absolute;
  line-height: 0;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  z-index: 100;

  ${({ placement }) => placementConfig.tipPosition[placement]};

  &:before {
    content: '';
    position: absolute;
    ${({ placement }) => placementConfig.arrowPosition[placement]};
  }

  ${({ skin }) => getStyleBySkin(skin)}
`;

const PopoverText = styled.span`
  display: inline-block;
  max-width: 250px;
`;

const Wrapper = styled.div`
  position: relative;
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

const ChildrenBlock = styled.div`
  text-decoration: none;
  cursor: pointer;
`;

class Popover extends Component {
  constructor(props) {
    super(props);
    const { visible } = props;
    this.state = {
      visible,
    };
  }

  componentDidMount() {}

  isVisible = visible => {
    this.setState({ visible });
  };

  render() {
    const {
      children,
      text,
      placement,
      visible,
      isClickable,
      onClose,
      ...rest
    } = this.props;
    const { visible: visibleState } = this.state;
    return (
      <Wrapper>
        <PopoverContent
          placement={placement}
          visible={visible || visibleState}
          {...rest}
        >
          <PopoverText>{text}</PopoverText>
          <CloseButton onClick={() => this.isVisible(false)} />
        </PopoverContent>
        <ChildrenBlock onClick={() => this.isVisible(true)}>
          {children}
        </ChildrenBlock>
      </Wrapper>
    );
  }
}

Popover.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  visible: PropTypes.bool,
  text: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  isClickable: PropTypes.bool,
  onClose: PropTypes.func,
  skin: oneOf(['default', 'success', 'warning', 'error']),
};

Popover.defaultProps = {
  visible: false,
  placement: 'top',
  isClickable: false,
  onClose: () => {},
  skin: 'default',
};

export default Popover;
