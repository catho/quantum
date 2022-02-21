import { Component } from 'react';
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
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
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
  max-width: ${({ multiline }) => (multiline ? 'unset' : '250px')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: ${({ multiline }) => (multiline ? 'pre' : 'nowrap')};
  line-height: 20px;
  text-align: ${({ multiline }) => (multiline ? 'left' : 'unset')};
`;

const Wrapper = styled.div`
  position: relative;
  float: left;
  clear: left;
  width: ${({ multiline }) => (multiline ? 'max-content' : 'unset')};
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
      multiline,
      ...rest
    } = this.props;
    const { visible: visibleState } = this.state;

    return (
      <Wrapper
        onMouseEnter={() => this.isVisible(true)}
        onMouseLeave={() => this.isVisible(false)}
        multiline={multiline}
        {...rest}
      >
        <Tip
          placement={placement}
          visible={visibleProp || visibleState}
          theme={theme}
        >
          <TipText multiline={multiline}>{text}</TipText>
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
  multiline: PropTypes.bool,
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
  multiline: false,
  theme: {
    spacing,
    colors,
    baseFontSize: defaultBaseFontSize,
  },
};

export default Tooltip;
