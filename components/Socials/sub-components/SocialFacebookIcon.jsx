import Proptypes from 'prop-types';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  display: inline-block;
`;

const SocialFacebookIcon = ({ size = '48', title, withBox = true }) => {
  const SVGOriginalSize = 48;

  return withBox ? (
    <StyledSvg
      role="img"
      aria-labelledby="facebook-title"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${SVGOriginalSize} ${SVGOriginalSize}`}
    >
      <title id="facebook-title">{title}</title>
      <g id="Box_Facebook" transform="translate(606 -35)">
        <rect
          id="Rectangle_1"
          data-name="Rectangle 1"
          width={SVGOriginalSize}
          height={SVGOriginalSize}
          rx="9"
          transform="translate(-606 35)"
          fill="#3c5193"
        />
        <path
          id="Path_4"
          data-name="Path 4"
          d="M146.667,100.389h2.285V98.246a5.551,5.551,0,0,1,.737-3.306,4.115,4.115,0,0,1,3.547-1.606,14.874,14.874,0,0,1,4.1.4L156.763,97a7.945,7.945,0,0,0-1.842-.267c-.888,0-1.685.309-1.685,1.165v2.493h3.645l-.254,3.192h-3.391v11.086h-4.284V103.581h-2.285Z"
          transform="translate(-734 -45)"
          fill="#fff"
          fillRule="evenodd"
        />
      </g>
    </StyledSvg>
  ) : (
    <svg
      role="img"
      aria-labelledby="facebook-title"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${SVGOriginalSize} ${SVGOriginalSize}`}
    >
      <title id="facebook-title">{title}</title>
      <g id="Box_Facebook" transform="translate(605 45)">
        <path
          id="Path_3"
          data-name="Path 3"
          d="M144,18.583h3.428V15.368c0-1.418.037-3.6,1.105-4.959A6.175,6.175,0,0,1,153.854,8,22.314,22.314,0,0,1,160,8.594l-.856,4.9a11.91,11.91,0,0,0-2.763-.4c-1.332,0-2.527.463-2.527,1.748v3.74h5.467l-.38,4.788h-5.087V40h-6.426V23.371H144Z"
          transform="translate(-734 -45)"
          fill="#3c5193"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

SocialFacebookIcon.propTypes = {
  size: Proptypes.string,
  title: Proptypes.string.isRequired,
  withBox: Proptypes.bool,
};

export default SocialFacebookIcon;
