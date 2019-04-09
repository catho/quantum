import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes, { oneOf } from 'prop-types';
import Colors from '../Colors';
import Button from '../Button';
import { Row, Col } from '../Grid';
import uniqId from '../shared/uniqId';

const ID_GENERATOR = uniqId('snackbar-dialog-');

const a11yFocusTab = `outline: auto;`;

const getBackgroundBySkin = skin => {
  const color = skin.toUpperCase();
  const indexColor = skin === 'cobalt' ? '500' : '700';
  return `
      background-color: ${Colors[color][indexColor]}
  `;
};

const SnackBarDialog = styled.div`
  align-items: center;
  border-radius: 4px;
  color: ${Colors.WHITE};
  display: flex;
  justify-content: space-between;
  min-height: 48px;
  padding: 13px 16px;

  ${({ skin }) => getBackgroundBySkin(skin)}
`;

const TextContainer = styled.strong`
  font-weight: normal;
  padding-right: 8px;

  :focus {
    ${a11yFocusTab}
  }
`;

const CloseIcon = styled(Button.Icon).attrs({
  icon: 'close',
})`
  color: ${Colors.WHITE};

  :hover,
  :focus {
    background-color: transparent;
    box-shadow: none;
    color: ${Colors.WHITE};
    ${a11yFocusTab}
  }
`;

const ActionButton = styled(Button)`
  color: ${Colors.WHITE};
  font-weight: bold;
  text-transform: uppercase;
  white-space: nowrap;

  :hover,
  :focus {
    text-decoration: none;
    color: ${Colors.WHITE};
  }

  :focus {
    ${a11yFocusTab}
  }
`;

const ActionsSection = styled.div`
  align-items: center;
  display: flex;
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
    element.focus();
  };

  closeOnTime = (secondsToClose, callback) => {
    this.closeEventtimeOut = setTimeout(() => {
      callback();
    }, secondsToClose * 1000);
  };

  render() {
    const {
      text,
      onClose,
      closeButtonAriaLabel,
      actionTrigger,
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
              role="alertdialog"
              aria-describedby={this._id}
              tabIndex="0"
            >
              <TextContainer id={this._id}>{text}</TextContainer>
              {actionTrigger && (
                <ActionsSection>
                  <ActionButton
                    className="action-button"
                    skin="link"
                    onClick={actionTrigger.callbackFn}
                  >
                    {actionTrigger.title}
                  </ActionButton>
                  {onClose && (
                    <CloseIcon
                      onClick={onClose}
                      aria-label={closeButtonAriaLabel}
                      onKeyPress={this.handleKeyPress}
                    />
                  )}
                </ActionsSection>
              )}
            </SnackBarDialog>
          </Col>
        </Row>
      </DialogBlock>,
      this.snackBarSection,
    );
  }
}

CloseIcon.displayName = 'CloseIcon';
ActionButton.displayName = 'ActionButton';
SnackBarDialog.displayName = 'SnackBarDialog';
TextContainer.displayName = 'TextContainer';

SnackBar.propTypes = {
  actionTrigger: PropTypes.shape({
    title: PropTypes.string,
    callback: PropTypes.func,
  }),
  closeButtonAriaLabel: PropTypes.string,
  onClose: PropTypes.func,
  secondsToClose: PropTypes.number,
  skin: oneOf(['cobalt', 'black']),
  text: PropTypes.string,
  id: PropTypes.string,
};

SnackBar.defaultProps = {
  closeButtonAriaLabel: 'close SnackBar',
  onClose: () => {},
  secondsToClose: 6,
  skin: 'cobalt',
  text: 'Text of SnackBar component',
  actionTrigger: {
    title: 'ACTION',
    callbackFn: () => {},
  },
  id: undefined,
};

export default SnackBar;
