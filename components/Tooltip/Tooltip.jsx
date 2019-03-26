import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import placementConfig from './options';

const Tip = styled.div`
  background-color: ${Colors.BLACK[700]};
  border-color: ${Colors.BLACK[700]};
  border-radius: 4px;
  color: ${Colors.WHITE};
  font-size: 16px;
  font-weight: bold;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  padding: 4px 8px;
  position: absolute;
  line-height: 0;
  text-align: center;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  z-index: 100;

  ${({ placement }) => placementConfig.tipPosition[placement]};

  &:before {
    content: '';
    position: absolute;
    ${({ placement }) => placementConfig.arrowPosition[placement]};
  }
`;

const TipText = styled.span`
  display: inline-block;
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Wrapper = styled.div`
  position: relative;
`;

class Tooltip extends Component {
  constructor(props) {
    super(props);
    const { visible } = this.props;
    this.state = { visible };
  }

  isVisible = visible => this.setState({ visible });

  render() {
    const {
      children,
      placement,
      text,
      visible: visibleProp,
      ...rest
    } = this.props;
    const { visible: visibleState } = this.state;

    return (
      <Wrapper
        onMouseEnter={() => this.isVisible(true)}
        onMouseLeave={() => this.isVisible(false)}
        {...rest}
      >
        <Tip placement={placement} visible={visibleProp || visibleState}>
          <TipText>{text}</TipText>
        </Tip>
        {children}
      </Wrapper>
    );
  }
}

Tip.displayName = 'Tip';

Tooltip.propTypes = {
  /** Text that tooltip will show */
  text: PropTypes.string.isRequired,
  /** Define tooltip positioning */
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  visible: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Tooltip.defaultProps = {
  placement: 'top',
  visible: false,
};

export default Tooltip;
