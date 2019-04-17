import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import PropTypes, { oneOf } from 'prop-types';

import Content from './sub-components/Content';

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
        this.contentMeasures();
      }
    });
  };

  contentMeasures = () => {
    const top = this.wrapperRef.current.offsetTop;
    this.contentRef.innerContentRef.style.top = `${top}px`;
  };

  render() {
    const { children, text, placement, onClose, ...rest } = this.props;
    const { visible } = this.state;

    return (
      <Wrapper ref={this.wrapperRef}>
        {visible && (
          <Content
            placement={placement}
            visible={visible}
            text={text}
            onPopoverClose={() => this.isVisible(false)}
            ref={element => (this.contentRef = element)}
            {...rest}
          />
        )}
        <ChildrenBlock onClick={() => this.isVisible(true)}>
          {children}
        </ChildrenBlock>
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
