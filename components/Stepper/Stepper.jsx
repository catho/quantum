import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

// const CIRCLE_SIZE = 64;
const CIRCLE_SIZE = 72;
const OVERLAY_WIDTH = 60;
const OVERLAY_HEIGHT = 42;

const Wrapper = styled.section`
  .progress {
    background-image: ${({
      degrees: { 0: reference, 1: position },
    }) => `linear-gradient(${reference}deg, #028cd5 50%, transparent 50%), 
  linear-gradient(${position}deg, #028cd5 50%, #ddd 50%)`};
  }
`;

const RadialProgressBar = styled.div`
  border-radius: 50%;
  transform: translate(50%, 50%);
  width: ${CIRCLE_SIZE}px;
  height: ${CIRCLE_SIZE}px;
  display: flex;
  background: #ddd;
  float: left;
`;

const RadialProgressOverlay = styled.div`
  border-radius: 50%;
  width: ${OVERLAY_WIDTH}px;
  height: ${OVERLAY_HEIGHT}px;
  margin: auto;
  background: #fff;
  text-align: center;
  padding-top: 25%;
`;

const percentToDegrees = progressPercent => {
  const degrees = {
    17: [90, -50],
    20: [90, -45],
    25: [90, 0],
    33: [90, 20],
    40: [90, 40],
    50: [90, 90],
    60: [-90, -54],
    67: [-90, -22],
    75: [-90, 0],
    80: [-90, 18],
    83: [-90, 20],
    100: [-90, 90],
  };

  return degrees[progressPercent];
};

const Stepper = ({ total, index, title, description }) => {
  const progressPercent = Math.round((index / total) * 100);

  console.log(progressPercent);

  return (
    <Wrapper degrees={percentToDegrees(progressPercent)}>
      <RadialProgressBar className="progress">
        <RadialProgressOverlay>
          {index} de {total}
        </RadialProgressOverlay>
      </RadialProgressBar>
      {title}
      {description}
    </Wrapper>
  );
};

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
