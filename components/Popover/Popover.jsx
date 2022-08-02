import { useEffect, useRef, useState } from 'react';
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

  const wrapperRef = useRef();
  const contentRef = useRef();

  const setPopoverPosition = () => {
    if (!contentRef?.current) return;

    const {
      offsetWidth: triggerWidthValue,
      offsetHeight: triggerHeightValue,
    } = wrapperRef.current;

    const {
      offsetWidth: popoverContentWidth,
      offsetHeight: popoverContentHeight,
    } = contentRef.current;

    const position = popoverPosition({
      popoverContentWidth,
      popoverContentHeight,
      triggerWidthValue,
      triggerHeightValue,
    });

    contentRef.current.style.left = `${position[placement].left}px`;
    contentRef.current.style.top = `${position[placement].top}px`;
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
          onPopoverClose={() => handleVisible(false)}
          ref={contentRef}
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
