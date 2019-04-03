import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';
import Colors from '../Colors';
import Icon from '../Icon';

const BORDER_SIZE = '1.5px';
const DEFAULT_SPACING = '16px';
const WRAPPER_SPACING = '11px';

const Content = styled.div`
  align-items: start;
  display: flex;
`;

const AlertIcon = styled(Icon)``;

const CloseButton = styled(Button.Icon).attrs({
  icon: 'close',
})`
  height: auto;
  width: auto;
  margin: 0 0 0 ${DEFAULT_SPACING};
  padding: 0;
  opacity: 0.8;
  transition: opacity 0.4s ease;

  :hover {
    background: none;
    opacity: 1;
  }
`;

CloseButton.displayName = 'CloseButton';

const getStylesBySkin = skin => {
  const colorName = skin.toUpperCase();
  const colorSchema = Colors[colorName];

  return `
    color: ${colorSchema[900] ? colorSchema[900] : 'inherit'};
    background-color: ${colorSchema[200]};
    border: ${BORDER_SIZE} solid ${colorSchema[500]};

    ${Content} ${AlertIcon} {
      color: ${colorSchema[500]};
      margin-right: ${DEFAULT_SPACING};
    }

    ${Content} ${CloseButton} {
      color: ${colorSchema[500]};
    }
  `;
};

const Wrapper = styled.div`
  border-radius: 8px;
  box-sizing: border-box;
  padding: ${WRAPPER_SPACING} ${DEFAULT_SPACING};

  ${({ skin }) => getStylesBySkin(skin)}
`;

const Alert = ({ icon, children, onClose, ...rest }) => (
  <Wrapper {...rest} role="alert">
    <Content onClose={onClose}>
      {icon && <AlertIcon name={icon} />}
      {children && <span>{children}</span>}
      {onClose && <CloseButton onClick={onClose} />}
    </Content>
  </Wrapper>
);

Alert.defaultProps = {
  icon: null,
  skin: 'blue',
};

Alert.propTypes = {
  /** At least one children is required for Alert component properly works */
  children: PropTypes.node.isRequired,
  /** Icon name. The full catalogue can be found
   * [here](/?selectedKind=1.%20Foundation&selectedStory=Icons) */
  icon: PropTypes.string,
  /** You must pass a callback that is called when close button is clicked */
  onClose: PropTypes.func.isRequired,
  skin: PropTypes.oneOf(['blue', 'success', 'warning', 'error']),
};

export default Alert;
