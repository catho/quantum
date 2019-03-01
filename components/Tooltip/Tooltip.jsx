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

  ${placementConfig.tipPosition} &:before {
    content: '';
    position: absolute;
    ${props => placementConfig.arrowPosition[props.placement]};
  }
`;

const Wrapper = styled.div`
  cursor: default;
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

    this.state = { show: false, width: null, height: null };
  }

  componentDidMount() {
    this.measure();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { text, visible, children } = this.props;
    const { show, width, height } = this.state;

    return (
      text !== nextProps.text ||
      show !== nextState.show ||
      visible !== nextProps.visible ||
      width !== nextState.width ||
      height !== nextState.height ||
      children !== nextProps.children
    );
  }

  componentDidUpdate() {
    this.measure();
  }

  handleEnter = () => {
    this.setState({ show: true });
  };

  handleLeave = () => {
    this.setState({ show: false });
  };

  measure() {
    const { clientWidth, clientHeight } = this.tip;

    this.setState({ width: clientWidth, height: clientHeight });
  }

  render() {
    const { children, placement, text, visible, ...rest } = this.props;
    const { width, height, show } = this.state;
    const { length } = text;

    return (
      <Wrapper
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
        length={length}
        {...rest}
      >
        <Tip
          ref={tip => {
            this.tip = tip;
          }}
          placement={placement}
          width={width}
          height={height}
          show={visible || show}
        >
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
  text: PropTypes.string,
  /** Define tooltip positioning */
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  visible: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Tooltip.defaultProps = {
  text: 'Tooltip',
  placement: 'top',
  visible: undefined,
};

export default Tooltip;
