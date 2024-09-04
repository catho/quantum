import Proptypes from 'prop-types';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  display: inline-block;
`;

const SocialYoutubeIcon = ({ size = '48', title, withBox = true }) => {
  const SVGOriginalSize = 48;
  const SVGOriginalSizeWithBox = 50;

  return withBox ? (
    <StyledSvg
      role="img"
      aria-labelledby="youtube-title"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${SVGOriginalSizeWithBox} ${SVGOriginalSizeWithBox}`}
    >
      <title id="youtube-title">{title}</title>
      <g id="Box_Youtube" transform="translate(350 -35)">
        <rect
          id="Rectangle_3"
          data-name="Rectangle 3"
          width={SVGOriginalSize}
          height={SVGOriginalSize}
          rx="8"
          transform="translate(-349 36)"
          fill="#fff"
          stroke="#424242"
          strokeWidth="2"
        />
        <path
          id="Path_20"
          data-name="Path 20"
          d="M422.05,96.9a3.711,3.711,0,0,0-2.6-2.617c-2.283-.617-11.45-.617-11.45-.617s-9.167,0-11.467.617a3.685,3.685,0,0,0-2.6,2.617,39.409,39.409,0,0,0-.6,7.1,38.348,38.348,0,0,0,.617,7.1,3.711,3.711,0,0,0,2.6,2.617c2.283.616,11.45.616,11.45.616s9.167,0,11.467-.616a3.687,3.687,0,0,0,2.6-2.617,39.409,39.409,0,0,0,.6-7.1A38.348,38.348,0,0,0,422.05,96.9Z"
          transform="translate(-733 -44)"
          fill="#ee3124"
        />
        <path
          id="Path_21"
          data-name="Path 21"
          d="M405,108.367V99.633L412.667,104Z"
          transform="translate(-733 -44)"
          fill="#fff"
        />
      </g>
    </StyledSvg>
  ) : (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="youtube-title"
      width={size}
      height={size}
      viewBox={`0 0 ${SVGOriginalSize} ${SVGOriginalSize}`}
    >
      <title id="youtube-title">{title}</title>
      <g id="Youtube" transform="translate(347.5 36.5)">
        <path
          id="Path_9"
          data-name="Path 9"
          d="M429.075,13.35a5.569,5.569,0,0,0-3.9-3.925C421.75,8.5,408,8.5,408,8.5s-13.75,0-17.2.925a5.526,5.526,0,0,0-3.9,3.925C386,16.8,386,24,386,24s0,7.2.925,10.65a5.569,5.569,0,0,0,3.9,3.925C394.25,39.5,408,39.5,408,39.5s13.75,0,17.2-.925a5.526,5.526,0,0,0,3.9-3.925C430,31.2,430,24,430,24S430,16.8,429.075,13.35Z"
          transform="translate(-732 -36)"
          fill="#ee3124"
          width={SVGOriginalSize}
          height={SVGOriginalSize}
        />
        <path
          id="Path_10"
          data-name="Path 10"
          d="M403.5,30.55V17.45L415,24Z"
          transform="translate(-732 -37)"
          fill="#fff"
        />
      </g>
    </StyledSvg>
  );
};

SocialYoutubeIcon.propTypes = {
  size: Proptypes.string,
  title: Proptypes.string.isRequired,
  withBox: Proptypes.bool,
};

export default SocialYoutubeIcon;
