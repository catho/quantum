import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import placement from './options';

const TIP_MAXLENGTH = 36;

const Tip = styled.div`
  background-color: ${Colors.BLACK[700]};
  border-color: ${Colors.BLACK[700]};
  border-radius: 2px;
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

  ${placement.tipPosition} &:before {
    content: '';
    position: absolute;
    ${props => placement.arrowPosition[props.place]};
  }

  ${({ offset }) => (offset || offset === 0 ? `left: ${offset}%;` : '')};
`;

const Wrapper = styled.div`
  cursor: default;
  display: ${props => (props.slider ? 'block' : 'inline-block')};
  position: ${props => (props.slider ? 'initial' : 'relative')};
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
    const { text } = this.props;
    const { show, width, height } = this.state;
    return (
      text !== nextProps.text ||
      show !== nextState.show ||
      width !== nextState.width ||
      height !== nextState.height
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
    const { children, place, text, slider, offset } = this.props;
    const { width, height, show } = this.state;
    const { length } = text;

    return (
      <Wrapper
        onMouseEnter={!slider ? this.handleEnter : () => {}}
        onMouseLeave={!slider ? this.handleLeave : () => {}}
        slider={slider}
        length={length}
      >
        <Tip
          ref={tip => {
            this.tip = tip;
          }}
          place={place}
          width={width}
          height={height}
          show={slider ? true : show}
          slider={slider}
          offset={offset}
        >
          {text}
        </Tip>
        {children}
      </Wrapper>
    );
  }
}

Tooltip.propTypes = {
  text: PropTypes.string,
  place: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  offset: PropTypes.string,
  slider: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Tooltip.defaultProps = {
  text: 'Tooltip',
  place: 'top',
  offset: '',
  slider: false,
};

export default Tooltip;
