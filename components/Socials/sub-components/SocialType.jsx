import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import {
  SocialTwitterIcon,
  SocialFacebookIcon,
  SocialYoutubeIcon,
} from './SocialIcons';

const SocialWrapper = styled.a`
  display: inline-flex;
`;

const SocialType = ({ type, url, size, title, withBox }) => (
  <SocialWrapper href={url}>
    {type === 'twitter' && (
      <SocialTwitterIcon size={size} title={title} withBox={withBox} />
    )}

    {type === 'youtube' && (
      <SocialYoutubeIcon size={size} title={title} withBox={withBox} />
    )}

    {type === 'facebook' && (
      <SocialFacebookIcon size={size} title={title} withBox={withBox} />
    )}
  </SocialWrapper>
);

SocialType.defaultProps = {
  size: '48',
  withBox: true,
};

SocialType.propTypes = {
  type: Proptypes.string.isRequired,
  url: Proptypes.string.isRequired,
  size: Proptypes.string,
  title: Proptypes.string.isRequired,
  withBox: Proptypes.bool,
};

export default SocialType;
