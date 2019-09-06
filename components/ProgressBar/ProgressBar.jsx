import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { components } from '../shared/theme';
import { hexToRgba } from '../../shared/helpers';

const Bar = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-top: 8px;

  ${({ height, width, background }) => `
    height: ${height};
    width: ${width}; 
    background-color: ${hexToRgba(background, 0.39)};
  `}
`;

const Content = styled.div`
  transition: width 0.4s linear;
  display: inline-block;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;

  ${({ background, progress }) => `
    background-color: ${background};
    width: ${progress}%;
  `}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.18px;

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
    progress,
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
        <Content background={background} progress={progress} />
      </Bar>
      {withLabel && (
        <ProgressLabel textColor={textColor}>
          {progress}
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
  progress: 0,
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
  progress: PropTypes.number,
  label: PropTypes.string,
  withLabel: PropTypes.bool,
};

export default ProgressBar;
