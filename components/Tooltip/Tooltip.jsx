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

  ${placement.tipPosition}

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
  children: 'Hover me',
  place: 'top',
  text: 'Tooltip',
};

export default Tooltip;
