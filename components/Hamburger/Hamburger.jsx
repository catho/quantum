import React from 'react';
import PropTypes from 'prop-types';
import HamburgerIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import styled, { css } from 'styled-components';
import { colors } from '../shared/theme';

const getColors = ({ inverted }) => {
  const weight = !inverted ? 0 : 900;

  return colors.neutral[weight];
};

const HamburgerWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;
`;

const NotificationIcon = styled.span`
  position: absolute;
  width: 7px;
  height: 7px;
  border: solid 2px ${colors.neutral[1000]};
  top: 0;
  right: 0;
  border-radius: 7px;
  background-color: ${colors.error[700]};
`;

const HamburgerIconWrapper = styled(HamburgerIcon)`
  color: ${getColors};
`;

const CloseIconWrapper = styled(CloseIcon)`
  color: ${getColors};
`;

/** This components is used to display only `Numbers`. If you want to pass a string, use `<Tag />` component instead */
const Hamburger = ({ showNotification, isOpened, inverted }) => {
  const HamburgerBlock = (
    <>
      {showNotification && <NotificationIcon />}
      <HamburgerIconWrapper inverted={inverted} />
    </>
  );

  return (
    <HamburgerWrapper inverted={inverted}>
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
};

Hamburger.defaultProps = {
  inverted: false,
  showNotification: false,
  isOpened: false,
};

export default Hamburger;
