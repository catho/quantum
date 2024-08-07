import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';
import Icon from '../Icon';
import {
  components,
  spacing,
  colors,
  baseFontSize as defaultBaseFontSize,
  breakpoints,
} from '../shared/theme';

const Content = styled.div`
  align-items: start;
  display: flex;

  & > span {
    flex: 1;
  }
`;

const AlertIcon = styled(Icon)`
  width: ${defaultBaseFontSize * 1.5}px;
`;

const CloseButton = styled(Button.Icon).attrs({
  icon: 'close',
})`
  height: auto;
  opacity: 0.8;
  padding: 0;
  transition: opacity 0.4s ease;
  width: auto;

  &:hover {
    background: none;
    opacity: 1;
  }
`;

CloseButton.displayName = 'CloseButton';

const Wrapper = styled.div`
  border-radius: 8px;
  box-sizing: border-box;

  ${({
    skin,
    theme: {
      baseFontSize,
      spacing: { small, medium },
      components: {
        alert: {
          skins: {
            [skin]: { background, icon, text },
          },
        },
      },
    },
  }) => `
    font-size: ${baseFontSize}px;
    background-color: ${background};
    border: 1.5px solid ${icon};
    color: ${text};
    padding: ${small}px ${medium}px;

    ${Content} ${AlertIcon} {
      color: ${icon};
      margin-right: ${medium}px;
    }

    ${Content} > ${CloseButton} {
      color: ${icon};
      margin: 0 0 0 ${medium}px;
      min-height: 0;
      opacity: 1;

      ${Button.Icon} {
        color: ${icon};
        margin-left: 0;
      }
    }
  `}
`;

const Alert = ({
  icon = null,
  skin = 'neutral',
  children,
  theme = {
    colors,
    baseFontSize: defaultBaseFontSize,
    spacing,
    breakpoints,
    components: {
      alert: components.alert,
      button: components.button,
    },
  },
  onClose = undefined,
  ...rest
}) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    show && (
      <Wrapper theme={theme} skin={skin} {...rest} role="alert">
        <Content>
          {icon && <AlertIcon name={icon} />}
          {children && <span>{children}</span>}
          {onClose && <CloseButton theme={theme} onClick={handleClose} />}
        </Content>
      </Wrapper>
    )
  );
};

Alert.propTypes = {
  /** At least one children is required for Alert component properly works */
  children: PropTypes.node.isRequired,
  /** Icon name. The full catalogue can be found
   * [here](/?path=/docs/foundation-icons--page) */
  icon: PropTypes.string,
  /** You must pass a callback that is called when close button is clicked */
  onClose: PropTypes.func,
  skin: PropTypes.oneOf(['primary', 'success', 'error', 'neutral', 'warning']),
  theme: PropTypes.shape({
    baseFontSize: PropTypes.number,
    colors: PropTypes.object,
    spacing: PropTypes.object,
    components: PropTypes.shape({
      alert: PropTypes.object,
      button: PropTypes.object,
    }),
  }),
};

export default Alert;
