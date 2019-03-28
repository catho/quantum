import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes, { oneOf } from 'prop-types';
import Colors from '../Colors';
import Button from '../Button';
import { Row, Col } from '../Grid';
import uniqId from '../shared/uniqId';

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
  }
`;

const ActionLink = styled.a`
  color: ${Colors.WHITE};
  font-weight: bold;
  padding: 13px 8px;
  text-decoration: underline;
  text-transform: uppercase;
  white-space: nowrap;

  :hover {
    text-decoration: none;
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
  }

  componentWillUnmount() {
    const { body } = document;
    body.removeChild(this.snackBarSection);
  }

  render() {
    const _id = uniqId('snack-bar-dialog-');
    const { text, onClose, closeButtonAriaLabel, ...rest } = this.props;

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
              <ActionsSection>
                <ActionLink href="/">action</ActionLink>
                {onClose && (
                  <CloseIcon
                    onClick={onClose}
                    aria-label={closeButtonAriaLabel}
                  />
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

CloseIcon.displayName = 'CloseIcon';

SnackBar.propTypes = {
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
};

export default SnackBar;
