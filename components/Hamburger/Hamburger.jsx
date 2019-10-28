import React from 'react';
import PropTypes from 'prop-types';
import HamburgerIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import styled, { css } from 'styled-components';
import {
  components,
  spacing,
  baseFontSize as defaultBaseFontSize,
} from '../shared/theme';

const getColors = ({
  skin,
  theme: {
    components: {
      badge: {
        skins: { [skin]: badgeColor },
      },
    },
  },
  inverted,
}) => {
  if (inverted) {
    const [text, background] = [badgeColor.background, badgeColor.text];
    return css`
      background-color: ${background};
      color: ${text};
    `;
  }
  return css`
    background-color: ${badgeColor.background};
    color: ${badgeColor.text};
  `;
};

const HamburgerWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;
  background-color: black;

  ${props =>
    props.originalChildren
      ? `position: relative;`
      : `margin-left: 8px; margin-right: 8px;`}
`;

const NotificationIcon = styled.span`
  position: absolute;
  width: 7px;
  height: 7px;
  border: solid 2px #000000;
  background-color: #db0f0f;
  top: 0;
  right: 0;
  border-radius: 7px;
`;

const HamburgerIconWrapper = styled(HamburgerIcon)`
  color: #fff;
`;

const CloseIconWrapper = styled(CloseIcon)`
  color: #fff;
`;

const StyledBadge = styled.span`
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  font-weight: bold;
  height: 24px;
  line-height: 24px;
  min-width: 32px;
  align-items: center;
  justify-content: center;

  ${({
    value,
    theme: {
      spacing: { xxxsmall, xxsmall },
      baseFontSize,
    },
    number,
  }) => {
    const padding =
      !Number.isInteger(value) || number >= 10 ? xxsmall : xxxsmall;

    return `
      font-size: ${baseFontSize * 0.75}px;
      padding-left: ${padding}px;
      padding-right: ${padding}px;
    `;
  }}

  ${props =>
    props.originalChildren &&
    `
    position: absolute;
    right: -10px;
    top: -10px;
  `}

  ${getColors}
`;

/** This components is used to display only `Numbers`. If you want to pass a string, use `<Tag />` component instead */
const Hamburger = ({ showNotification, isOpened }) => {
  const HamburgerBlock = (
    <>
      {showNotification && <NotificationIcon />}
      <HamburgerIconWrapper />
    </>
  );

  // const HamburgerTogheter

  return (
    <HamburgerWrapper>
      {!isOpened ? HamburgerBlock : <CloseIconWrapper />}
    </HamburgerWrapper>
  );
};

HamburgerWrapper.displayName = 'HamburgerWrapper';
StyledBadge.displayName = 'StyledBadge';
Hamburger.displayName = 'Badge';

Hamburger.propTypes = {
  /** Define background and text color */
  skin: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'error',
    'neutral',
  ]),
  showNotification: PropTypes.bool,
  isOpened: PropTypes.bool,
  /** Swap background and text color */
  inverted: PropTypes.bool,
  theme: PropTypes.shape({
    baseFontSize: PropTypes.number,
    spacing: PropTypes.object,
    components: PropTypes.shape({
      badge: PropTypes.object,
    }),
  }),
};

Hamburger.defaultProps = {
  skin: 'neutral',
  inverted: false,
  showNotification: false,
  isOpened: false,
  theme: {
    baseFontSize: defaultBaseFontSize,
    spacing,
    components: {
      badge: components.badge,
    },
  },
};

export default Hamburger;
