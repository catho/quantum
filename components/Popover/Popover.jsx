import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes, { oneOf } from 'prop-types';

import Content from './sub-components/Content';

import popoverPosition from './options';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const ChildrenBlock = styled.div`
  cursor: pointer;
`;

class Popover extends Component {
  constructor(props) {
    super(props);

    const { visible } = props;

    this.wrapperRef = React.createRef();
    this.state = {
      visible,
    };
  }

  isVisible = visible => {
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
    const { children, trigger, placement, ...rest } = this.props;
    const { visible } = this.state;

    return (
      <Wrapper ref={this.wrapperRef}>
        {visible && (
          <Content
            placement={placement}
            visible={visible}
            onPopoverClose={() => this.isVisible(false)}
            ref={element => {
              this.contentRef = element;
            }}
            {...rest}
          >
            {children}
          </Content>
        )}
        <ChildrenBlock onClick={() => this.isVisible(true)}>
          {trigger}
        </ChildrenBlock>
      </Wrapper>
    );
  }
}

ChildrenBlock.displayName = 'ChildrenBlock';

Popover.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  trigger: PropTypes.node.isRequired,
  visible: PropTypes.bool,
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  onClose: PropTypes.func,
  skin: oneOf(['default', 'success', 'warning', 'error']),
};

Popover.defaultProps = {
  visible: false,
  placement: 'top',
  onClose: () => {},
  skin: 'default',
};

export default Popover;
