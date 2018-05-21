import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import Button from '../Button';
import { skins, placement } from './options';

const Tip = styled.div`
  background-color: ${props => skins[props.skin]};
  border-color: ${props => skins[props.skin]};
  border-radius: 2px;
  color: ${Colors.WHITE};
  font-size: 14px;
  font-weight: bold;
  padding: 5px 20px;
  position: absolute;
  margin-left: -${props => props.width / 2}px;
  left: 50%;
  top: -50px;

  &:before {
    content: '';
    position: absolute;
    ${props => placement.arrowPosition[props.place]};
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      width: 0,
    };
  }

  shouldComponentUpdate = false;

  componentDidMount() {
    this._setwidth();
  }

  _setwidth() {
    this.setState({ width: this.tip && this.tip.clientWidth });
  }

  handleEnter = (e) => {
    this.setState({
      show: true,
    });
  }

  handleLeave = () => {
    this.setState({
      show: false,
    });
  }

  render() {

    const {
      children,
      skin,
      place,
      text,
    } = this.props;

    const InnerTip = styled.div`
      background-color: ${props => skins[props.skin]};
      border-color: ${props => skins[props.skin]};
      border-radius: 2px;
      color: ${Colors.WHITE};
      font-size: 14px;
      font-weight: bold;
      padding: 5px 20px;
      position: absolute;
      margin-left: -${props => this.state.width / 2}px;
      left: 50%;
      top: -50px;

      &:before {
        content: '';
        position: absolute;
        ${props => placement.arrowPosition[props.place]};
      }
    `;

    return (
      <Wrapper
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
        innerRef={(parent) => { this.parent = parent; }}
      >
        <InnerTip
          skin={skin}
          innerRef={(tip) => { this.tip = tip; }}
          place={place}
          width={ this._setwidth() & this.state.width}
        >
          {text}
        </InnerTip>
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
  text: 'asdasdasdsda',
};

export default Tooltip;
