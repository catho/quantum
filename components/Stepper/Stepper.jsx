import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

// const CIRCLE_SIZE = 64;
const CIRCLE_SIZE = 72;
const OVERLAY_WIDTH = 60;
const OVERLAY_HEIGHT = 42;

const Wrapper = styled.section`

  .radialProgressBar {
    border-radius: 50%;
    transform: translate(50%, 50%);
    width: ${CIRCLE_SIZE}px;
    height: ${CIRCLE_SIZE}px;
    display: flex;
    background: #ddd;
    float: left;
  }
  .radialProgressBar .overlay {
    border-radius: 50%;
    width: ${OVERLAY_WIDTH}px;
    height: ${OVERLAY_HEIGHT}px;
    margin: auto;
    background: #fff;
    text-align: center;
    padding-top: 25%;
  }
  
  .progress-16 {
    background-image: linear-gradient(90deg, #ddd 50%, transparent 50%), 
      linear-gradient(-50deg, #ddd 50%, #028CD6 50%)
  }

  .progress-20 {
    background-image: linear-gradient(90deg, #ddd 50%, transparent 50%), 
      linear-gradient(-45deg, #ddd 50%, #028CD6 50%)
  }

  .progress-33 {
    background-image: linear-gradient(90deg, #ddd 50%, transparent 50%), 
      linear-gradient(20deg, #ddd 50%, #028CD6 50%)
  }

  .progress-40 {
    background-image: linear-gradient(90deg, #ddd 50%, transparent 50%), 
      linear-gradient(40deg, #ddd 50%, #028CD6 50%)
  }

  .progress-50 {
    background-image: linear-gradient(90deg, #ddd 50%, transparent 50%), 
      linear-gradient(90deg, #ddd 50%, #028CD6 50%)
  }

  .progress-60 {
    background-image: linear-gradient(-90deg, #028cd5 50%, transparent 50%), 
      linear-gradient(-54deg, #028cd5 50%, #ddd 50%)
  }

  .progress-66 {
    background-image: linear-gradient(-90deg, #028cd5 50%, transparent 50%), linear-gradient(-22deg, #028cd5 50%, #ddd 50%)
  }

  .progress-75 {
    background-image: linear-gradient(-90deg, #028cd5 50%, transparent 50%), linear-gradient(0deg, #028cd5 50%, #ddd 50%)
  }

  .progress-80 {
    background-image: linear-gradient(-90deg, #028cd5 50%, transparent 50%), linear-gradient(18deg, #028cd5 50%, #ddd 50%)
  }
  
  .progress-83 {
    background-image: linear-gradient(-90deg, #028cd5 50%, transparent 50%), linear-gradient(20deg, #028cd5 50%, #ddd 50%)
  }
  
  .progress-100 {
    background-image: linear-gradient(-90deg, #028cd5 50%, transparent 50%), linear-gradient(90deg, #028cd5 50%, #ddd 50%)
  }

  
   

mobile 64x64
desktop 72x72

/** 

16%  -50deg
20%  -45deg
33%  20deg
40% 40deg
50% 90deg
60% -90 054
66%
75%
80%
83%
100%

1/6 = 16%
2/6 = 33%
3/6 = 50%
4/6 = 66%
5/6 = 83%
6/6 = 100%

1/5 = 20%
2/5 = 40%
3/5 = 60%
4/5 = 80%
5/5 = 100%

1/4 = 25%
2/4 = 50%
3/4 = 75%
4/4 = 100%

1/3 = 33%
2/3 = 66%
3/3 = 100%

1/2 = 50%
2/2 = 100%


**/
`;

const Stepper = ({ total, index, title, description }) => (
  <>
    <Wrapper>
      <div className="radialProgressBar progress-100">
        <div className="overlay">
          {index} de {total}
        </div>
      </div>
    </Wrapper>
  </>
);

Stepper.defaultProps = {
  total: 6,
  index: 1,
};

Stepper.propTypes = {
  total: Proptypes.number,
  index: Proptypes.number,
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
};

export default Stepper;
