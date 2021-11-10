import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  components,
  spacing as themeSpacing,
  baseFontSize as defaultBaseFontSize,
} from '../shared/theme';
import { hexToRgba } from '../shared';
import Icon from '../Icon';

const Bar = styled.div`
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  ${({ width, background, spacing: { xxsmall } }) => `
    background-color: ${hexToRgba(background, 0.39)};
    height: 4px;
    width: ${width}; 
    margin-top: ${xxsmall}px;
  `}
`;

const Content = styled.div`
  border-radius: 8px;
  display: inline-block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: width 0.4s linear;

  ${({ background, progress }) => `
    background-color: ${background};
    width: ${progress}%;
  `}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.18px;
  line-height: 1.5;
`;

const ProgressLabel = styled.span`
  display: inline-block;
`;

const InfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ width, background, baseFontSize }) => `
    width: ${width};
    color: ${background};
    font-size: ${baseFontSize * 0.875}px;
  `}
`;

const TextBlock = styled.span`
  display: flex;
  align-items: center;
`;

const LabelInfo = styled.span`
  ${({ spacing: { xsmall } }) => `
    margin-left: ${xsmall}px;
  `}
  height: 17px;
`;

ProgressLabel.displayName = 'ProgressLabel';
LabelInfo.displayName = 'LabelInfo';

const ChargeBar = props => {
  const {
    width,
    progressPercent,
    label,
    skin,
    theme: {
      components: {
        chargeBar: {
          skins: {
            [skin]: { background },
          },
        },
      },
      spacing,
      baseFontSize,
    },
  } = props;

  return (
    <Wrapper>
      <InfoBlock
        width={width}
        background={background}
        baseFontSize={baseFontSize}
      >
        <TextBlock>
          <Icon name="whatshot" size="small" skin={background} />
          <LabelInfo spacing={spacing}>{label}</LabelInfo>
        </TextBlock>
        <ProgressLabel>{progressPercent}%</ProgressLabel>
      </InfoBlock>
      <Bar
        background={background}
        width={width}
        spacing={spacing}
        role="progressbar"
      >
        <Content background={background} progress={progressPercent} />
      </Bar>
    </Wrapper>
  );
};

ChargeBar.defaultProps = {
  width: '250px',
  progressPercent: 0,
  skin: 'primary',
  theme: {
    components: {
      chargeBar: components.chargeBar,
    },
    spacing: themeSpacing,
    baseFontSize: defaultBaseFontSize,
  },
  label: 'Força do meu currículo',
};

ChargeBar.propTypes = {
  skin: PropTypes.oneOf(['neutral', 'primary', 'secondary', 'success']),
  theme: PropTypes.shape({
    components: PropTypes.shape({
      chargeBar: PropTypes.object,
    }),
    spacing: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
  width: PropTypes.string,
  progressPercent: PropTypes.number,
  label: PropTypes.string,
};

export default ChargeBar;
