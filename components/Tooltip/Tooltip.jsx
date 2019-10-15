import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import placementConfig from './options';
import {
  colors,
  spacing,
  baseFontSize as defaultBaseFontSize,
} from '../shared/theme';

const Tip = styled.div`
  border-radius: 4px;
  font-weight: bold;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  position: absolute;
  line-height: 0;
  text-align: center;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  z-index: 100;

  ${({
    theme: {
      colors: { neutral },
      spacing: { xsmall },
      baseFontSize,
    },
  }) => `
    background-color: ${neutral[700]};
    border-color: ${neutral[700]};
    color: ${neutral[100]};
    font-size: ${baseFontSize}px;
    padding: ${xsmall}px;
  `}

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
  line-height: 20px;
`;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
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
      theme,
      ...rest
    } = this.props;
    const { visible: visibleState } = this.state;

    return (
      <Wrapper
        onMouseEnter={() => this.isVisible(true)}
        onMouseLeave={() => this.isVisible(false)}
        {...rest}
      >
        <Tip
          placement={placement}
          visible={visibleProp || visibleState}
          theme={theme}
        >
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
  theme: PropTypes.shape({
    spacing: PropTypes.object,
    colors: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
};

Tooltip.defaultProps = {
  placement: 'top',
  visible: false,
  theme: {
    spacing,
    colors,
    baseFontSize: defaultBaseFontSize,
  },
};

export default Tooltip;
