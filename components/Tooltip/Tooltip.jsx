import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import { skins, placement } from './options';

const tipSkin = ({ skin }) => skins[skin] || skins.info;

const Tip = styled.div`
  background-color: ${tipSkin};
  border-color: ${tipSkin};
  border-radius: 2px;
  color: ${Colors.WHITE};
  font-size: 14px;
  font-weight: bold;
  opacity: ${props => (props.show ? '1' : '0')};
  padding: 5px 20px;
  position: absolute;
  text-align: center;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  z-index: 100;

  ${placement.tipPosition}

  left: ${props => props.offset}%;

  &:before {
    content: '';
    position: absolute;
    ${props => placement.arrowPosition[props.place]};
  }
`;

const Wrapper = styled.div`
  display: ${props => (props.slider ? 'block' : 'inline-block')};
  position: ${props => (props.slider ? 'initial' : 'relative')};
  cursor: default;
  white-space: nowrap;
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
      slider,
      offset,
    } = this.props;

    const {
      width,
      height,
      show,
    } = this.state;

    return (
      <Wrapper
        onMouseEnter={!slider ? this.handleEnter : () => {}}
        onMouseLeave={!slider ? this.handleLeave : () => {}}
        slider={slider}
      >
        <Tip
          skin={skin}
          innerRef={(tip) => { this.tip = tip; }}
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
  children: PropTypes.node.isRequired,
  skin: PropTypes.oneOf([
    'info',
    'danger',
    'success',
    'warning',
  ]),
  slider: PropTypes.bool,
  place: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left',
  ]),
  text: PropTypes.string,
  offset: PropTypes.number,
};

Tooltip.defaultProps = {
  skin: 'info',
  place: 'top',
  text: 'Tooltip',
  slider: false,
  offset: 0,
};

export default Tooltip;
