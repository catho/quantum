import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Person from '@material-ui/icons/Person';
import Icon from '../Icon/Icon';
import { colors } from '../shared/theme';

const borderStyle = 'border-radius: 50% !important;';

const AvatarWrapper = styled.a`
  display: inline-flex;
  position: relative;
  cursor: pointer;
  height: 24px;
  text-decoration: unset;
  color: unset;
`;

const AvatarImage = styled.img.attrs({
  alt: 'user picture',
  ariaHidden: 'true',
})`
  ${borderStyle}
  width: 24px;
  height: 24px;
`;

const AvatarIcon = styled(Person).attrs({
  style: {
    color: colors.neutral[300],
    fontSize: '18px',
  },
})`
  ${borderStyle}
  background: ${colors.neutral[700]};
  padding: 3px;
`;

const AvatarNotification = styled.span`
  ${borderStyle}
  background-color: ${colors.secondary[700]};
  position: absolute;
  left: 16px;
  top: 0;
  width: 12px;
  height: 12px;
`;

const AvatarText = styled.span`
  display: inline-flex;
  margin-left: 12px;
`;

/** This components is used to display the user picture. */
const Avatar = ({ picture, text, hasNotification, ...rest }) => (
  <AvatarWrapper {...rest}>
    {picture ? <AvatarImage src={picture} /> : <AvatarIcon />}
    {hasNotification && <AvatarNotification />}
    {text && (
      <AvatarText>
        {text} <Icon name="keyboard_arrow_down" />
      </AvatarText>
    )}
  </AvatarWrapper>
);

AvatarWrapper.displayName = 'AvatarWrapper';
Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  picture: PropTypes.string,
  text: PropTypes.string,
  hasNotification: PropTypes.bool,
};

Avatar.defaultProps = {
  picture: '',
  text: '',
  hasNotification: false,
};

export default Avatar;
