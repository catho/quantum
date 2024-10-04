import { useState } from 'react';
import styled from 'styled-components';
import PropTypes, { oneOf } from 'prop-types';

import Content from './sub-components/Content';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const TriggerBlock = styled.div`
  cursor: pointer;
`;

const Popover = ({
  visible = false,
  inverted = false,
  closeOnClickOut = false,
  onClose = () => {},
  skin = 'neutral',
  placement = 'top',
  trigger,
  children,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(visible);

  const handleVisible = (newVisibleValue) => {
    setIsVisible(newVisibleValue);

    if (!isVisible) {
      onClose();
    }
  };

  return (
    <Wrapper>
      {isVisible && (
        <Content
          placement={placement}
          onPopoverClose={() => handleVisible(false)}
          inverted={inverted}
          closeOnClickOut={closeOnClickOut}
          skin={skin}
          {...rest}
        >
          {children}
        </Content>
      )}
      <TriggerBlock
        onClick={(event) => {
          event.stopPropagation();
          handleVisible(true);
        }}
      >
        {trigger}
      </TriggerBlock>
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
  closeOnClickOut: PropTypes.bool,
};

export default Popover;
