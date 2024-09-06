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

const SocialType = ({ type, url, size = '48', title, withBox = true }) => {
  const socialTypes = {
    twitter: <SocialTwitterIcon size={size} title={title} withBox={withBox} />,
    youtube: <SocialYoutubeIcon size={size} title={title} withBox={withBox} />,
    facebook: (
      <SocialFacebookIcon size={size} title={title} withBox={withBox} />
    ),
  };
  return <SocialWrapper href={url}>{socialTypes[type]}</SocialWrapper>;
};

SocialType.propTypes = {
  type: Proptypes.oneOf(['twitter', 'youtube', 'facebook']).isRequired,
  url: Proptypes.string.isRequired,
  size: Proptypes.string,
  title: Proptypes.string.isRequired,
  withBox: Proptypes.bool,
};

export default SocialType;
