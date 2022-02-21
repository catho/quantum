import Proptypes from 'prop-types';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  display: inline-block;
`;

const SocialTwitterIcon = ({ size, title, withBox }) => {
  const SVGOriginalSize = 48;

  return withBox ? (
    <StyledSvg
      role="img"
      aria-labelledby="twitter-title"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${SVGOriginalSize} ${SVGOriginalSize}`}
    >
      <title id="twitter-title">{title}</title>
      <g id="box_twitter" transform="translate(606 -203)">
        <rect
          id="twitterID"
          data-name="twitter-name"
          width={SVGOriginalSize}
          height={SVGOriginalSize}
          rx="9"
          transform="translate(-606 203)"
          fill="#2caae1"
        />
        <path
          id="twitterID-path"
          data-name="Path 27"
          d="M166.667,262.829a11.931,11.931,0,0,1-3.457.955,6.067,6.067,0,0,0,2.64-3.355,11.977,11.977,0,0,1-3.821,1.478,6.007,6.007,0,0,0-9.872,1.655,6.107,6.107,0,0,0-.383,3.876,17.046,17.046,0,0,1-12.4-6.347,6.1,6.1,0,0,0,1.862,8.092,5.957,5.957,0,0,1-2.731-.755v.077a6.089,6.089,0,0,0,1.367,3.843,6.01,6.01,0,0,0,3.474,2.1,6.017,6.017,0,0,1-2.718.1,6.068,6.068,0,0,0,2.141,3.013,6,6,0,0,0,3.481,1.2,12.071,12.071,0,0,1-8.917,2.51A16.943,16.943,0,0,0,146.559,284c11.07,0,17.123-9.239,17.123-17.252,0-.263,0-.525-.016-.785a12.288,12.288,0,0,0,3-3.134Z"
          transform="translate(-734 -45)"
          fill="#fff"
        />
      </g>
    </StyledSvg>
  ) : (
    <svg
      aria-labelledby="twitter-title"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${SVGOriginalSize} ${SVGOriginalSize}`}
    >
      <title id="twitter-title">{title}</title>
      <g id="Twitter" transform="translate(604 -129)">
        <path
          id="Path_15"
          data-name="Path 15"
          d="M174,178.244a17.905,17.905,0,0,1-5.186,1.432,9.1,9.1,0,0,0,3.961-5.032,17.963,17.963,0,0,1-5.732,2.217,9.011,9.011,0,0,0-14.808,2.482,9.174,9.174,0,0,0-.575,5.814,25.58,25.58,0,0,1-18.6-9.52,9.154,9.154,0,0,0,2.794,12.138,8.944,8.944,0,0,1-4.1-1.133v.115a9.145,9.145,0,0,0,2.049,5.766,9.028,9.028,0,0,0,5.211,3.152,9.017,9.017,0,0,1-4.077.157,9.109,9.109,0,0,0,3.212,4.52,8.991,8.991,0,0,0,5.221,1.795,18.018,18.018,0,0,1-11.22,3.894,18.242,18.242,0,0,1-2.154-.128A25.407,25.407,0,0,0,143.839,210c16.6,0,25.684-13.858,25.684-25.878,0-.395,0-.787-.024-1.177A18.413,18.413,0,0,0,174,178.244Z"
          transform="translate(-734 -39)"
          fill="#2caae1"
        />
      </g>
    </svg>
  );
};

SocialTwitterIcon.defaultProps = {
  size: '48',
  withBox: true,
};

SocialTwitterIcon.propTypes = {
  size: Proptypes.string,
  title: Proptypes.string.isRequired,
  withBox: Proptypes.bool,
};

export default SocialTwitterIcon;
