// Generated with scripts/create-component.js
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import {
  colors,
  baseFontSize as defaultBaseFontSize,
  spacing as defaultSpacing,
} from '../shared/theme';
import { shadow } from '../shared';
import { percentToDegrees } from '../Stepper/helper';

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  min-width: 24px;
  height: 24px;
  min-height: 24px;

  ${({
    degrees: { 0: reference, 1: position },
    skin,
    theme: {
      colors: {
        neutral: { 300: neutralColor },
        [skin]: { 900: color },
      },
    },
  }) =>
    reference > 0
      ? css`
          background-image: linear-gradient(
              ${reference}deg,
              ${neutralColor} 50%,
              transparent 50%
            ),
            linear-gradient(${position}deg, ${neutralColor} 50%, ${color} 50%);
        `
      : css`
          background-image: linear-gradient(
              ${reference}deg,
              ${color} 50%,
              transparent 50%
            ),
            linear-gradient(${position}deg, ${color} 50%, ${neutralColor} 50%);
        `}
  border-radius: 50%;
  ${shadow(2)}
`;
const CircleOverlay = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({
    theme: {
      colors: {
        neutral: { 0: neutralColor },
      },
    },
  }) => neutralColor};
`;

const ProgressWrapper = styled.span`
  margin-left: ${({
    theme: {
      spacing: { small },
    },
  }) => `${small}px`};
  ${({
    theme: {
      baseFontSize,
      colors: {
        primary: { 900: primaryColor },
      },
    },
  }) => `
    color: ${primaryColor};
    font-size: ${baseFontSize}px;
  `}
`;
const formatInPercentage = (number) =>
  number.toLocaleString('pt-br', {
    style: 'percent',
    maximumFractionDigits: 2,
  });

const Score = ({
  percentage = 0,
  round = true,
  text = 'compatível',
  skin = 'primary',
  theme = {
    colors,
    baseFontSize: defaultBaseFontSize,
    spacing: defaultSpacing,
  },
}) => {
  const [compatibilityPercentage, setCompatibilityPercentage] = useState(
    formatInPercentage(0),
  );

  const isPercentageValid = (percentageValue) =>
    percentageValue >= 0 && percentageValue <= 100;

  useEffect(() => {
    if (isPercentageValid(percentage)) {
      let percentageValue = percentage;
      if (round) {
        percentageValue = Math.round(percentageValue);
      }
      const formattedPercentageValue = formatInPercentage(
        percentageValue / 100,
      );
      setCompatibilityPercentage(formattedPercentageValue);
    }
  }, [percentage]);

  return (
    <Wrapper>
      <Circle degrees={percentToDegrees(percentage)} theme={theme} skin={skin}>
        <CircleOverlay theme={theme} />
      </Circle>
      <ProgressWrapper
        theme={theme}
      >{`${compatibilityPercentage} ${text}`}</ProgressWrapper>
    </Wrapper>
  );
};

Score.propTypes = {
  percentage: PropTypes.number,
  text: PropTypes.string,
  round: PropTypes.bool,
  skin: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
    'neutral',
  ]),
  theme: PropTypes.shape({
    colors: PropTypes.object,
    baseFontSize: PropTypes.number,
    spacing: PropTypes.object,
  }),
};

export default Score;
