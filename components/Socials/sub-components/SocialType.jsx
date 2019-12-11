import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const SocialWrapper = styled.a`
  display: inline-flex;
`;

const StyledSvg = styled.svg`
  display: inline-block;
`;

const SocialType = ({ type, url, size, title }) => {
  const SVGOriginalSize = 48;
  const SVGOriginalSizeWithBorder = 50;

  return (
    <SocialWrapper href={url}>
      {type === 'twitter' && (
        <StyledSvg
          role="img"
          aria-labelledby="twitter-title"
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox={`0 0 ${SVGOriginalSize} ${SVGOriginalSize}`}
        >
          <title id="twitter-title">{title}</title>
          <g id="Box_Twitter" transform="translate(606 -203)">
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
      )}

      {type === 'youtube' && (
        <StyledSvg
          role="img"
          aria-labelledby="youtube-title"
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox={`0 0 ${SVGOriginalSizeWithBorder} ${SVGOriginalSizeWithBorder}`}
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
      )}

      {type === 'facebook' && (
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
      )}
    </SocialWrapper>
  );
};

SocialType.defaultProps = {
  size: '48',
};

SocialType.propTypes = {
  type: Proptypes.string.isRequired,
  url: Proptypes.string.isRequired,
  size: Proptypes.string,
  title: Proptypes.string.isRequired,
};

export default SocialType;
