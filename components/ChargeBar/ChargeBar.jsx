import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { components } from '../shared/theme';
import { hexToRgba } from '../shared';
import  Icon from '../Icon';

const Bar = styled.div`
  border-radius: 4px;
  margin-top: 4px;
  overflow: hidden;
  position: relative;

  ${({ width, background }) => `
    background-color: ${hexToRgba(background, 0.39)};
    height: 4px;
    width: ${width}; 
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
  ${({ width, background }) => `
    width: ${width};
    color: ${background};
  `}
  font-size: 14px;
  `;

  const TextBlock = styled.span`
    display: flex;
    align-items: center;
  `;

  const LabelInfo = styled.span`
    margin-left: 8px;
    height: 17px;
  `;

ProgressLabel.displayName = 'ProgressLabel';

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
    },
  } = props;

  return (
    <Wrapper>
      <InfoBlock width={width} background={background} >
        <TextBlock>
          <Icon name="whatshot" size="small" skin={background} />
          <LabelInfo>{label}</LabelInfo>
        </TextBlock>
        <ProgressLabel>
          {progressPercent}%
        </ProgressLabel>
      </InfoBlock>
      <Bar
        background={background}
        width={width}
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
  },
  label: 'Força do meu currículo',
};

ChargeBar.propTypes = {
  skin: PropTypes.oneOf(['neutral', 'primary', 'secondary', 'success']),
  theme: PropTypes.shape({
    components: PropTypes.shape({
      chargeBar: PropTypes.object,
    }),
  }),
  width: PropTypes.string,
  progressPercent: PropTypes.number,
  label: PropTypes.string,
};

export default ChargeBar;
