import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AvatarWrapper = styled.div`
  display: inline-block;
`;

const AvatarImage = styled.img`
  border-radius: 50% !important;
`;

/** This components is used to display the user picture. */
const Avatar = ({ picture, size, hasNotification }) => (
  <AvatarWrapper>
    <AvatarImage
      src={picture}
      size={size}
      alt="user picture"
      aria-hidden="true"
    />
    <span>{hasNotification && '!'}</span>
  </AvatarWrapper>
);

AvatarWrapper.displayName = 'AvatarWrapper';
AvatarImage.displayName = 'AvatarImage';
Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  picture: PropTypes.string,
  size: PropTypes.string,
  hasNotification: PropTypes.bool,
};

Avatar.defaultProps = {
  picture: '',
  size: 'small',
  hasNotification: false,
};

export default Avatar;
