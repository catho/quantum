import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button';
import { Row, Col } from '../Grid';
import uniqId from '../shared/uniqId';
import {
  components,
  spacing,
  colors,
  baseFontSize as defaultBaseFontSize,
  breakpoints,
} from '../shared/theme';
import Icon from '../Icon/Icon';

const skinIcons = {
  primary: 'info',
  error: 'error',
  success: 'done',
  warning: 'warning',
};

const ID_GENERATOR = uniqId('snackbar-dialog-');

const getBackgroundAndTextColorBySkin = ({
  skin,
  theme: {
    components: {
      snackbar: {
        skins: {
          [skin]: { text, background },
        },
      },
    },
  },
  inverted,
}) => {
  if (inverted) {
    const [textInverted, backgroundInverted] = [background, text];

    return {
      background: backgroundInverted,
      text: textInverted,
    };
  }

  return {
    background,
    text,
  };
};

const a11yFocusTab = props => {
  const { text } = getBackgroundAndTextColorBySkin(props);

  return `
    outline: 1px solid ${text};
  `;
};

const SnackBarDialog = styled.div`
  align-items: center;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  min-height: 48px;
  ${({
    theme: {
      spacing: { small, medium },
    },
  }) => `
    padding: ${small}px ${medium}px;
  `}

  ${props => {
    const { background, text } = getBackgroundAndTextColorBySkin(props);
    return `
    background-color: ${background};
    color: ${text};
  `;
  }}

  :focus {
    ${a11yFocusTab}
  }
`;

const TextContainer = styled.strong`
  font-weight: normal;
  ${({
    theme: {
      spacing: { xsmall },
    },
  }) => `
    padding-right: ${xsmall}px;
  `}

  :focus {
    ${a11yFocusTab}
  }
`;

const SkinIcon = styled(Icon)`
  ${({
    skin,
    theme: {
      components: {
        snackbar: {
          skins: {
            [skin]: { iconColor },
          },
        },
      },
      spacing: { small },
    },
  }) => `
    color: ${iconColor};
    margin-right: ${small}px;
  `}
`;

const CloseIconRight = styled(Button.Icon).attrs({
  icon: 'close',
})`
  ${props => {
    const { text } = getBackgroundAndTextColorBySkin(props);

    return css`
      color: ${text};

      :hover,
      :focus {
        background-color: transparent;
        box-shadow: none;
        color: ${text};
        ${a11yFocusTab}
      }
    `;
  }}
`;

const CloseIconLeft = styled(CloseIconRight)`
  ${({
    theme: {
      spacing: { xsmall },
    },
  }) => `
    margin-right: ${xsmall}px;
  `}
`;

const WrapperLeft = styled.div`
  display: inherit;
  align-items: center;
`;

const ActionButton = styled(Button)``;

const ActionsSection = styled.div`
  align-items: center;
  display: flex;
  flex: none;
`;

const DialogBlock = styled.section`
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
`;

class SnackBar extends React.Component {
  constructor(props) {
    super(props);
    const { id } = props;
    this.snackBarSection = document.createElement('section');
    this._id = id || ID_GENERATOR.next().value;
  }

  componentDidMount() {
    const { body } = document;
    body.appendChild(this.snackBarSection);

    this.objectFocus(document.querySelector('.action-button'));

    const { onClose, secondsToClose } = this.props;

    this.closeOnTime(secondsToClose, onClose);
  }

  componentWillUnmount() {
    const { body } = document;
    body.removeChild(this.snackBarSection);
    clearTimeout(this.closeEventtimeOut);
  }

  handleKeyPress = event => {
    const { onClose } = this.props;
    if (event.key === 'Enter') onClose();
  };

  objectFocus = element => {
    if (element && element !== null) element.focus();
  };

  closeOnTime = (secondsToClose, callback) => {
    this.closeEventtimeOut = setTimeout(() => {
      callback();
    }, secondsToClose * 1000);
  };

  setIconType = skin => skinIcons[skin];

  handleSkinIcon = (theme, skin) => (
    <SkinIcon theme={theme} name={this.setIconType(skin)} skin={skin} />
  );

  render() {
    const {
      text,
      onClose,
      closeButtonAriaLabel,
      actionTrigger,
      theme,
      skin,
      inverted,
      ...rest
    } = this.props;
    return ReactDOM.createPortal(
      <DialogBlock>
        <Row>
          <Col
            xsmall-offset={0}
            xsmall={4}
            small-offset={1}
            small={6}
            medium-offset={1}
            medium={10}
          >
            <SnackBarDialog
              {...rest}
              theme={theme}
              inverted={inverted}
              skin={skin}
              role="alertdialog"
              aria-describedby={this._id}
              tabIndex="0"
            >
              <WrapperLeft>
                {skin !== 'neutral' && this.handleSkinIcon(theme, skin)}
                {actionTrigger &&
                  actionTrigger.title !== 'ACTION' &&
                  skin === 'neutral' && (
                    <CloseIconLeft
                      theme={theme}
                      inverted={inverted}
                      skin={skin}
                      onClick={onClose}
                      aria-label={closeButtonAriaLabel}
                      onKeyPress={this.handleKeyPress}
                    />
                  )}

                <TextContainer
                  id={this._id}
                  inverted={inverted}
                  theme={theme}
                  skin={skin}
                >
                  {text}
                </TextContainer>
              </WrapperLeft>
              <ActionsSection>
                {actionTrigger &&
                actionTrigger.title !== 'ACTION' &&
                skin === 'neutral' ? (
                  <ActionButton
                    className="action-button"
                    inverted={inverted}
                    theme={theme}
                    skin="secondary"
                    onClick={actionTrigger.callbackFn}
                  >
                    {actionTrigger.title}
                  </ActionButton>
                ) : (
                  onClose && (
                    <CloseIconRight
                      theme={theme}
                      inverted={inverted}
                      skin={skin}
                      onClick={onClose}
                      aria-label={closeButtonAriaLabel}
                      onKeyPress={this.handleKeyPress}
                    />
                  )
                )}
              </ActionsSection>
            </SnackBarDialog>
          </Col>
        </Row>
      </DialogBlock>,
      this.snackBarSection,
    );
  }
}

CloseIconLeft.displayName = 'CloseIconLeft';
CloseIconRight.displayName = 'CloseIconRight';
SkinIcon.displayName = 'SkinIcon';
ActionButton.displayName = 'ActionButton';
SnackBarDialog.displayName = 'SnackBarDialog';
TextContainer.displayName = 'TextContainer';

SnackBar.propTypes = {
  /** This prop works only on neutral skin */
  actionTrigger: PropTypes.shape({
    title: PropTypes.string,
    callback: PropTypes.func,
  }),
  theme: PropTypes.shape({
    baseFontSize: PropTypes.number,
    colors: PropTypes.object,
    breakpoints: PropTypes.object,
    spacing: PropTypes.object,
    components: PropTypes.shape({
      snackbar: PropTypes.object,
      button: PropTypes.object,
    }),
  }),
  closeButtonAriaLabel: PropTypes.string,
  onClose: PropTypes.func,
  secondsToClose: PropTypes.number,
  skin: PropTypes.oneOf(['primary', 'success', 'error', 'neutral', 'warning']),
  text: PropTypes.string,
  /** Swap background and text color */
  inverted: PropTypes.bool,
  id: PropTypes.string,
};

SnackBar.defaultProps = {
  closeButtonAriaLabel: 'close SnackBar',
  onClose: () => {},
  secondsToClose: 6,
  skin: 'neutral',
  text: 'Text of SnackBar component',
  actionTrigger: {
    title: 'ACTION',
    callbackFn: () => {},
  },
  inverted: false,
  id: undefined,
  theme: {
    colors,
    baseFontSize: defaultBaseFontSize,
    spacing,
    breakpoints,
    components: {
      snackbar: components.snackbar,
      button: components.button,
    },
  },
};

export default SnackBar;
