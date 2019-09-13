import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { components } from '../shared/theme';
import { hexToRgba } from '../../shared/helpers';

const Bar = styled.div`
  border-radius: 8px;
  margin-top: 8px;
  overflow: hidden;
  position: relative;

  ${({ height, width, background }) => `
    background-color: ${hexToRgba(background, 0.39)};
    height: ${height};
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

  ${({ baseFontSize, textColor }) => `
    color: ${textColor};
    font-size: ${baseFontSize}px;
  `}
`;

const Title = styled.span`
  font-weight: bold;
  ${({ titleColor }) => `
    color: ${titleColor};
  `}
`;

const SubTitle = styled.span`
  ${({ background }) => `
    color: ${background};
  `}
`;

const ProgressLabel = styled.span`
  ${({ textColor }) => `
    color: ${textColor};
  `}
`;

const ProgressBar = props => {
  const {
    title,
    subTitle,
    width,
    height,
    progressText,
    progressPercent,
    label,
    withLabel,
    skin,
    theme: {
      baseFontSize,
      components: {
        progressBar: {
          skins: {
            [skin]: { background, titleColor, textColor },
          },
        },
      },
    },
  } = props;

  return (
    <Wrapper baseFontSize={baseFontSize} textColor={textColor}>
      {title && <Title titleColor={titleColor}>{title}</Title>}
      {subTitle && <SubTitle background={background}>{subTitle}</SubTitle>}
      <Bar
        background={background}
        height={height}
        width={width}
        role="progressbar"
      >
        <Content background={background} progress={progressPercent} />
      </Bar>
      {withLabel && (
        <ProgressLabel textColor={textColor}>
          {progressText}
          {label}
        </ProgressLabel>
      )}
    </Wrapper>
  );
};

ProgressBar.defaultProps = {
  title: null,
  subTitle: null,
  width: '250px',
  height: '8px',
  progressText: 0,
  progressPercent: 0,
  skin: 'primary',
  theme: {
    baseFontSize: 12,
    components: {
      progressBar: components.progressBar,
    },
  },
  label: '%',
  withLabel: true,
};

ProgressBar.propTypes = {
  skin: PropTypes.oneOf(['neutral', 'primary', 'secondary']),
  theme: PropTypes.shape({
    baseFontSize: PropTypes.number,
    components: PropTypes.shape({
      progressBar: PropTypes.object,
    }),
  }),
  title: PropTypes.string,
  subTitle: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  progressText: PropTypes.number,
  progressPercent: PropTypes.number,
  label: PropTypes.string,
  withLabel: PropTypes.bool,
};

export default ProgressBar;
