import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button';

const SnackBarDialog = styled.section`
  position: relative;
`;

const CloseIcon = styled(Button.Icon).attrs({
  icon: 'close',
})`
  position: absolute;
  top: 16px;
  right: 16px;
`;

class SnackBar extends React.Component {
  componentDidMount() {}

  render() {
    const { text, onClose, closeButtonAriaLabel, ...rest } = this.props;
    return (
      <SnackBarDialog {...rest} role="dialog">
        {text}
        {onClose && (
          <CloseIcon onClick={onClose} aria-label={closeButtonAriaLabel} />
        )}
      </SnackBarDialog>
    );
  }
}

CloseIcon.displayName = 'CloseIcon';

SnackBar.propTypes = {
  onClose: PropTypes.func,
  secondsToClose: PropTypes.number,
  text: PropTypes.string,
  closeButtonAriaLabel: PropTypes.string,
};

SnackBar.defaultProps = {
  onClose: () => {},
  secondsToClose: 6,
  text: 'Text of SnackBar component',
  closeButtonAriaLabel: 'close SnackBar',
};

export default SnackBar;
