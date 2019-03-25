import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import placementConfig from './options';

const TIP_MAXLENGTH = 36;

const Tip = styled.div`
  background-color: ${Colors.BLACK[700]};
  border-color: ${Colors.BLACK[700]};
  border-radius: 4px;
  color: ${Colors.WHITE};
  font-size: 16px;
  font-weight: bold;
  opacity: ${props => (props.show ? '1' : '0')};
  padding: 4px 8px;
  position: absolute;
  text-align: center;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  z-index: 100;
  ${({ placement }) => placementConfig.tipPosition[placement]};

  &:before {
    content: '';
    position: absolute;
    ${({ placement }) => placementConfig.arrowPosition[placement]};
  }
`;

const Wrapper = styled.div`
  position: relative;
  white-space: ${props =>
    props.length >= TIP_MAXLENGTH ? 'initial' : 'nowrap'};

  ${Tip} {
    width: ${props => (props.length >= TIP_MAXLENGTH ? '200px' : 'initial')};
  }
`;

class Tooltip extends Component {
  constructor(props) {
    super(props);
    const { visible } = this.props;
    this.state = { show: visible };
  }

  handleEnter = () => this.setState({ show: true });

  handleLeave = () => this.setState({ show: false });

  render() {
    const { children, placement, text, ...rest } = this.props;
    const { show } = this.state;

    return (
      <Wrapper
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
        length={text ? text.length : 0}
        {...rest}
      >
        <Tip placement={placement} show={show}>
          {text}
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
