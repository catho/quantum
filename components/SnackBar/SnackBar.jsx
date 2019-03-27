import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Colors from '../Colors';
import Button from '../Button';
import { Row, Col } from '../Grid';

const SnackBarDialog = styled.div`
  align-items: center;
  background-color: ${Colors.COBALT['500']};
  border-radius: 4px;
  color: ${Colors.WHITE};
  display: flex;
  justify-content: space-between;
  min-height: 48px;
  padding: 13px 16px;
`;

const TextContainer = styled.strong`
  font-weight: normal;
  max-width: 344px;
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
  componentDidMount() {}

  render() {
    const { text, onClose, closeButtonAriaLabel, ...rest } = this.props;
    return (
      <DialogBlock>
        <Row>
          <Col xsmall-offset={1} xsmall={10}>
            <SnackBarDialog {...rest} role="dialog">
              <TextContainer>{text}</TextContainer>
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
      </DialogBlock>
    );
  }
}

CloseIcon.displayName = 'CloseIcon';

SnackBar.propTypes = {
  closeButtonAriaLabel: PropTypes.string,
  onClose: PropTypes.func,
  secondsToClose: PropTypes.number,
  text: PropTypes.string,
};

SnackBar.defaultProps = {
  closeButtonAriaLabel: 'close SnackBar',
  onClose: () => {},
  secondsToClose: 6,
  text: 'Text of SnackBar component',
};

export default SnackBar;
