import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes, { oneOf } from 'prop-types';
import Colors from '../Colors';
import Button from '../Button';
import { Row, Col } from '../Grid';
import uniqId from '../shared/uniqId';

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
  display: flex;
  align-items: center;
`;

const DialogBlock = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

class SnackBar extends React.Component {
  constructor(props) {
    super(props);
    this.snackBarSection = document.createElement('section');
  }

  componentDidMount() {
    const { body } = document;
    body.appendChild(this.snackBarSection);

    document.querySelector('.action-button').focus();

    const { onClose, secondsToClose } = this.props;

    setTimeout(() => {
      onClose();
    }, secondsToClose * 1000);
  }

  componentWillUnmount() {
    const { body } = document;
    body.removeChild(this.snackBarSection);
  }

  render() {
    const _id = uniqId('snackbar-dialog-');
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
          <Col xsmall-offset={1} xsmall={10}>
            <SnackBarDialog
              {...rest}
              role="alertdialog"
              aria-describedby={_id}
              tabIndex="0"
            >
              <TextContainer id={_id}>{text}</TextContainer>
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
};

export default SnackBar;
