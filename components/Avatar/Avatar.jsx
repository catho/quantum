import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Person from '@material-ui/icons/Person';
import Icon from '../Icon/Icon';
import { colors } from '../shared/theme';

const borderStyle = 'border-radius: 50%;';

const AvatarWrapper = styled.span`
  display: inline-flex;
  position: relative;
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
  overflow: hidden;
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
  left: 17px;
  top: 0;
  width: 12px;
  height: 12px;
`;

const AvatarText = styled.span`
  display: inline-flex;
  margin-left: 12px;
`;

/** This components is used to display the user picture. */
const Avatar = ({
  picture,
  text,
  hasNotification,
  hasToggle,
  href,
  ...rest
}) => (
  <AvatarWrapper as={href && 'a'} href={href || undefined} {...rest}>
    {picture ? <AvatarImage src={picture} /> : <AvatarIcon />}
    {hasNotification && <AvatarNotification />}
    {text && <AvatarText>{text}</AvatarText>}
    {hasToggle && <Icon name="keyboard_arrow_down" />}
  </AvatarWrapper>
);

AvatarWrapper.displayName = 'AvatarWrapper';
Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  picture: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  hasNotification: PropTypes.bool,
  hasToggle: PropTypes.bool,
};

Avatar.defaultProps = {
  picture: '',
  text: '',
  href: '',
  hasNotification: false,
  hasToggle: false,
};

export default Avatar;
