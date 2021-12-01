import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { query } from '../Grid/sub-components/shared';
import { hexToRgba, BREAKPOINTS } from '../shared';
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
import { GetSkinIcon } from './IconTypes';

const mediaQueries = query(BREAKPOINTS);

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
  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-radius: 4px;
  min-height: 48px;

  ${({
    theme: {
      spacing: { xsmall, small, medium },
    },
  }) => `
    padding: ${small}px ${medium}px;
    margin: 0 ${xsmall}px;
  `}

  ${props => {
    const { background, text } = getBackgroundAndTextColorBySkin(props);
    return css`
      background-color: ${background};
      color: ${text};

      a {
        color: inherit;
        text-decoration: underline;
      }
    `;
  }}

  :focus {
    ${a11yFocusTab}
  }
`;

const TextContainer = styled.span`
  flex: 1;
  width: 100%;

  & > p {
    margin: 0;
  }

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

const CloseButton = styled(Button.Icon).attrs({
  icon: 'close',
})`
  ${({ skin, theme, inverted }) => {
    const { text } = getBackgroundAndTextColorBySkin({ skin, theme, inverted });

    const {
      spacing: { small },
    } = theme;

    return css`
      margin-left: ${small}px;
      color: ${text};

      :hover,
      :focus {
        background: transparent;
        box-shadow: none;
        color: ${text};
        ${a11yFocusTab};
      }
    `;
  }}
`;

const ActionButton = styled(Button)`
  ${({ theme, skin, inverted }) => {
    const { text: color } = getBackgroundAndTextColorBySkin({
      skin,
      theme,
      inverted,
    });
    const {
      spacing: { small },
    } = theme;

    return css`
      background: ${hexToRgba(color, 0.15)};

      margin-left: ${small}px;
      box-shadow: none;
      color: ${color};
      border-width: 0;
      border-color: unset;

      :hover,
      :focus {
        background: ${hexToRgba(color, 0.15)};
        box-shadow: none;
        color: ${color};
      }

      ${mediaQueries.medium`
        background-color: transparent;
      `}
    `;
  }}
`;

const DialogBlock = styled.section`
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 98;
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

  handleSkinIcon = (theme, skin) =>
    skin !== 'neutral' ? (
      <SkinIcon theme={theme} name={GetSkinIcon(skin)} skin={skin} />
    ) : (
      false
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
      hideIcon,
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
              {!hideIcon && this.handleSkinIcon(theme, skin)}
              <TextContainer
                id={this._id}
                inverted={inverted}
                theme={theme}
                skin={skin}
              >
                {text}
              </TextContainer>
              {actionTrigger && (
                <ActionButton
                  className="action-button"
                  inverted={inverted}
                  theme={theme}
                  skin={skin}
                  onClick={actionTrigger.callbackFn}
                >
                  {actionTrigger.title}
                </ActionButton>
              )}
              {onClose && (
                <CloseButton
                  theme={theme}
                  inverted={inverted}
                  skin={skin}
                  onClick={onClose}
                  aria-label={closeButtonAriaLabel}
                  onKeyPress={this.handleKeyPress}
                />
              )}
            </SnackBarDialog>
          </Col>
        </Row>
      </DialogBlock>,
      this.snackBarSection,
    );
  }
}

CloseButton.displayName = 'CloseButton';
SkinIcon.displayName = 'SkinIcon';
ActionButton.displayName = 'ActionButton';
SnackBarDialog.displayName = 'SnackBarDialog';
TextContainer.displayName = 'TextContainer';

SnackBar.propTypes = {
  actionTrigger: PropTypes.shape({
    title: PropTypes.string.isRequired,
    callbackFn: PropTypes.func.isRequired,
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
  hideIcon: PropTypes.bool,
  onClose: PropTypes.func,
  secondsToClose: PropTypes.number,
  skin: PropTypes.oneOf(['primary', 'success', 'error', 'neutral', 'warning']),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
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
  actionTrigger: undefined,
  hideIcon: false,
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
