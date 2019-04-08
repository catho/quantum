import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import placementConfig from '../Tooltip/options';

const Tip = styled.div`
  border-radius: 4px;
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
    const { children, text, placement, visible, onClick } = this.props;
    const { visible: visibleState } = this.state;
    return (
      <Wrapper
        onMouseEnter={() => this.isVisible(true)}
        onMouseLeave={() => this.isVisible(false)}
      >
        <Tip placement={placement} visible={visible || visibleState}>
          <TipText>
            {text} {onClick}
          </TipText>
        </Tip>
        {children}
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
  onClick: PropTypes.bool,
};

Popover.defaultProps = {
  visible: false,
  placement: 'top',
  onClick: false,
};

export default Popover;
