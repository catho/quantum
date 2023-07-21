import PropTypes from 'prop-types';
import styled from 'styled-components';
import { components } from '../shared/theme';
import { hexToRgba } from '../shared';

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
`;

const ProgressLabel = styled.span`
  ${({ textColor }) => `
    color: ${textColor};
  `}
`;

ProgressLabel.displayName = 'ProgressLabel';

const ProgressBar = (props) => {
  const {
    width,
    height,
    progressText,
    progressPercent,
    label,
    skin,
    theme: {
      components: {
        progressBar: {
          skins: {
            [skin]: { background, textColor },
          },
        },
      },
    },
  } = props;

  const progressLabel = progressText === null ? progressPercent : progressText;

  return (
    <Wrapper>
      <Bar
        background={background}
        height={height}
        width={width}
        role="progressbar"
      >
        <Content background={background} progress={progressPercent} />
      </Bar>
      <ProgressLabel textColor={textColor}>
        {progressLabel}
        {label}
      </ProgressLabel>
    </Wrapper>
  );
};

ProgressBar.defaultProps = {
  width: '250px',
  height: '8px',
  progressText: null,
  progressPercent: 0,
  skin: 'primary',
  theme: {
    components: {
      progressBar: components.progressBar,
    },
  },
  label: '%',
};

ProgressBar.propTypes = {
  skin: PropTypes.oneOf(['neutral', 'primary', 'secondary']),
  theme: PropTypes.shape({
    components: PropTypes.shape({
      progressBar: PropTypes.object,
    }),
  }),
  width: PropTypes.string,
  height: PropTypes.string,
  progressText: PropTypes.number,
  progressPercent: PropTypes.number,
  label: PropTypes.string,
};

export default ProgressBar;
