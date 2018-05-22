import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import { skins, placement } from './options';

const Tip = styled.div`
  background-color: ${props => skins[props.skin]};
  border-color: ${props => skins[props.skin]};
  border-radius: 2px;
  color: ${Colors.WHITE};
  font-size: 14px;
  font-weight: bold;
  padding: 5px 20px;
  opacity: ${props => (props.show ? '1' : '0')};
  position: absolute;
  text-align: center;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};

  ${props => props.place === 'top' && `top: -${props.height + 10}px; left: 50%; margin-left: -${Math.floor(props.width / 2)}px;`}
  ${props => props.place === 'right' && `right: -${props.width + 15}px;top: 50%; margin-top: -${Math.floor(props.height / 2)}px;`}
  ${props => props.place === 'bottom' && `bottom: -${props.height + 10}px; left: 50%; margin-left: -${Math.floor(props.width / 2)}px;`}
  ${props => props.place === 'left' && `left: -${props.width + 15}px;top: 50%; margin-top: -${Math.floor(props.height / 2)}px;`}

  &:before {
    content: '';
    position: absolute;
    ${props => placement.arrowPosition[props.place]};
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: default;
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
    return (
      this.props.text !== nextProps.text ||
      this.state.show !== nextState.show ||
      this.state.width !== nextState.width ||
      this.state.height !== nextState.height
    );
  }

  componentDidUpdate() {
    this.measure();
  }

  measure() {
    const {
      clientWidth,
      clientHeight,
    } = this.tip;

    this.setState({ width: clientWidth, height: clientHeight });
  }

  handleEnter = () => {
    this.setState({ show: true });
  }

  handleLeave = () => {
    this.setState({ show: false });
  }

  render() {
    const {
      children,
      skin,
      place,
      text,
    } = this.props;

    const {
      width,
      height,
      show,
    } = this.state;

    return (
      <Wrapper
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
        innerRef={(parent) => { this.parent = parent; }}
      >
        <Tip
          skin={skin}
          innerRef={(tip) => { this.tip = tip; }}
          place={place}
          width={width}
          height={height}
          show={show}
        >
          {text}
        </Tip>
        {children}
      </Wrapper>
    );
  }
}

Tooltip.propTypes = {
  children: PropTypes.node,
  skin: PropTypes.oneOf([
    'info',
    'danger',
    'success',
    'warning',
  ]),
  place: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left',
  ]),
  text: PropTypes.string,
};

Tooltip.defaultProps = {
  skin: 'info',
  children: 'Message',
  place: 'top',
  text: 'Tooltip',
};

export default Tooltip;
