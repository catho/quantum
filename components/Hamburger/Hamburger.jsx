import React from 'react';
import PropTypes from 'prop-types';
import HamburgerIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import styled from 'styled-components';
import { colors } from '../shared/theme';

const HAMBURGER_SIZE = 24;
const NOTIFICATION_SIZE = 7;

const getColors = ({ inverted }) => {
  console.log('inverted', inverted);

  const weight = !inverted ? 0 : 900;

  return colors.neutral[weight];
};

const HamburgerWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: ${HAMBURGER_SIZE}px;
  height: ${HAMBURGER_SIZE}px;
`;

const NotificationIcon = styled.span`
  position: absolute;
  width: ${NOTIFICATION_SIZE}px;
  height: ${NOTIFICATION_SIZE}px;
  border: solid 2px ${props => colors.neutral[props.inverted ? 0 : 1000]}}};
  top: 0;
  right: 0;
  border-radius: ${NOTIFICATION_SIZE}px;
  background-color: ${colors.error[700]};
`;

const HamburgerIconWrapper = styled(HamburgerIcon)`
  color: ${getColors};
`;

const CloseIconWrapper = styled(CloseIcon)`
  color: ${getColors};
`;

const Hamburger = ({
  showNotification,
  isOpened,
  inverted,
  ariaLabelDescription,
}) => {
  const HamburgerBlock = (
    <>
      {showNotification && (
        <NotificationIcon
          aria-label={ariaLabelDescription}
          inverted={inverted}
        />
      )}
      <HamburgerIconWrapper inverted={inverted ? 1 : 0} />
    </>
  );

  return (
    <HamburgerWrapper aria-live="polite">
      {!isOpened ? HamburgerBlock : <CloseIconWrapper inverted={inverted} />}
    </HamburgerWrapper>
  );
};

HamburgerWrapper.displayName = 'HamburgerWrapper';
Hamburger.displayName = 'Hamburger';

Hamburger.propTypes = {
  showNotification: PropTypes.bool,
  isOpened: PropTypes.bool,
  /** Swap background and text color */
  inverted: PropTypes.bool,
  ariaLabelDescription: PropTypes.string,
};

Hamburger.defaultProps = {
  inverted: false,
  showNotification: false,
  isOpened: false,
  ariaLabelDescription: 'There are new notifications',
};

export default Hamburger;
