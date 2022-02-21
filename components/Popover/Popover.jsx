import { useEffect, useRef, useState, createRef } from 'react';
import styled from 'styled-components';
import PropTypes, { oneOf } from 'prop-types';

import Content from './sub-components/Content';

import popoverPosition from './options';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const TriggerBlock = styled.div`
  cursor: pointer;
`;

const Popover = ({
  visible,
  onClose,
  placement,
  trigger,
  children,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(visible);

  const wrapperRef = createRef();
  let contentRef = useRef(null);

  const setPopoverPosition = () => {
    const {
      current: {
        offsetTop: popoverWrapperTopValue,
        offsetLeft: triggerLeftValue,
        offsetWidth: triggerWidthValue,
        offsetHeight: triggerHeightValue,
      },
    } = wrapperRef;
    const {
      innerContentRef,
      innerContentRef: {
        offsetWidth: popoverContentWidth,
        offsetHeight: popoverContentHeight,
      },
    } = contentRef;

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

  useEffect(() => {
    if (isVisible) {
      setPopoverPosition();
    }
  }, [isVisible]);

  const handleVisible = newVisibleValue => {
    setIsVisible(newVisibleValue);

    if (!isVisible) {
      onClose();
    }
  };

  return (
    <Wrapper ref={wrapperRef}>
      {isVisible && (
        <Content
          placement={placement}
          visible={isVisible}
          onPopoverClose={() => handleVisible(false)}
          ref={element => {
            contentRef = element;
          }}
          {...rest}
        >
          {children}
        </Content>
      )}
      <TriggerBlock onClick={() => handleVisible(true)}>{trigger}</TriggerBlock>
    </Wrapper>
  );
};

TriggerBlock.displayName = 'TriggerBlock';

Popover.propTypes = {
  inverted: PropTypes.bool,
  visible: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  skin: oneOf(['neutral', 'primary', 'success', 'warning', 'error']),
  trigger: PropTypes.node.isRequired,
  onClose: PropTypes.func,
};

/* istanbul ignore next */
Popover.defaultProps = {
  inverted: false,
  visible: false,
  skin: 'neutral',
  placement: 'top',
  onClose: () => {},
};

export default Popover;
