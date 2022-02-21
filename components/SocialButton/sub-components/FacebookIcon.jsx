import Proptypes from 'prop-types';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  display: inline-block;
`;

const FacebookIcon = ({ size, title }) => {
  const SVGOriginalHeight = 402;
  const SVGOriginalWidth = 582;

  return (
    <StyledSvg
      role="img"
      aria-labelledby="facebook-title"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <title id="facebook-title">{title}</title>
      <g>
        <rect
          fill="none"
          id="canvas_background"
          height={SVGOriginalHeight}
          width={SVGOriginalWidth}
          y="-1"
          x="-1"
        />
      </g>
      <g>
        <path
          fill="#ffffff"
          id="svg_2"
          d="m13,10l3,0l0,3l-3,0l0,7l-3,0l0,-7l-3,0l0,-3l3,0l0,-1.255c0,-1.189 0.374,-2.691 1.118,-3.512c0.744,-0.823 1.673,-1.233 2.786,-1.233l2.096,0l0,3l-2.1,0c-0.498,0 -0.9,0.402 -0.9,0.899l0,2.101z"
        />
      </g>
    </StyledSvg>
  );
};

FacebookIcon.defaultProps = {
  size: '48',
};

FacebookIcon.propTypes = {
  size: Proptypes.string,
  title: Proptypes.string.isRequired,
};

export default FacebookIcon;
