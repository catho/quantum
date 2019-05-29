import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes, { oneOf } from 'prop-types';

import Content from './sub-components/Content';

import popoverPosition from './options';
import { colors, spacing, components } from '../shared/theme';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const TriggerBlock = styled.div`
  cursor: pointer;
`;

class Popover extends Component {
  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
    this.state = {
      visible: undefined,
    };
  }

  componentDidMount() {
    if (this.isVisible) {
      this.setPopoverPosition();
    }
  }

  componentDidUpdate() {
    if (this.isVisible) {
      this.setPopoverPosition();
    }
  }

  get isVisible() {
    const { visible: visibleState } = this.state;
    const { visible } = this.props;

    return visibleState !== undefined ? visibleState : visible;
  }

  handleVisible = visible => {
    const { onClose } = this.props;
    if (!visible) {
      onClose();
    }
    this.setState({ visible }, () => {
      const { visible: newVisibleValue } = this.state;

      if (newVisibleValue) {
        this.setPopoverPosition();
      }
    });
  };

  setPopoverPosition = () => {
    const { placement } = this.props;
    const {
      current: {
        offsetTop: popoverWrapperTopValue,
        offsetLeft: triggerLeftValue,
        offsetWidth: triggerWidthValue,
        offsetHeight: triggerHeightValue,
      },
    } = this.wrapperRef;
    const {
      innerContentRef,
      innerContentRef: {
        offsetWidth: popoverContentWidth,
        offsetHeight: popoverContentHeight,
      },
    } = this.contentRef;

    const position = popoverPosition({
      popoverWrapperTopValue,
      popoverContentWidth,
      popoverContentHeight,
      triggerLeftValue,
      triggerWidthValue,
      triggerHeightValue,
    });

    innerContentRef.style.left = `${position[placement].left}px`;
    innerContentRef.style.top = `${position[placement].top}px`;

    if (placement === 'right' || placement === 'left') {
      innerContentRef.style.transform = 'translateY(-50%)';
    }
  };

  render() {
    const {
      children,
      trigger,
      placement,
      visible,
      theme,
      ...rest
    } = this.props;

    return (
      <Wrapper ref={this.wrapperRef}>
        {this.isVisible && (
          <Content
            theme={theme}
            placement={placement}
            visible={visible}
            onPopoverClose={() => this.handleVisible(false)}
            ref={element => {
              this.contentRef = element;
            }}
            {...rest}
          >
            {children}
          </Content>
        )}
        <TriggerBlock onClick={() => this.handleVisible(true)}>
          {trigger}
        </TriggerBlock>
      </Wrapper>
    );
  }
}

TriggerBlock.displayName = 'TriggerBlock';

Popover.propTypes = {
  inverted: PropTypes.bool,
  visible: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  skin: oneOf(['neutral', 'success', 'warning', 'error']),
  trigger: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
    components: PropTypes.shape({
      badge: PropTypes.object,
    }),
  }),
};

Popover.defaultProps = {
  inverted: false,
  visible: false,
  skin: 'neutral',
  placement: 'top',
  onClose: () => {},
  theme: {
    colors,
    spacing,
    components: {
      popover: components.popover,
    },
  },
};

export default Popover;
