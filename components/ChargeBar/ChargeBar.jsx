import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon';
import { query } from '../Grid/sub-components/shared';
import {
  components,
  spacing as themeSpacing,
  baseFontSize as defaultBaseFontSize,
} from '../shared/theme';
import { hexToRgba, BREAKPOINTS } from '../shared';

const mediaQueries = query(BREAKPOINTS);

const Bar = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  height: 4px;

  ${mediaQueries.medium`
    border-radius: 8px;
    height: 8px;
  `};

  ${({ width, background, spacing: { xxsmall } }) => `
    background-color: ${hexToRgba(background, 0.39)};
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

  ${({ width, background, baseFontSize }) => `
  width: ${width};
  color: ${background};
  font-size: ${baseFontSize * 0.875}px;
`}
`;

const ProgressLabel = styled.span`
  display: inline-block;
`;

const InfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg + span {
    flex: 1;
  }
`;

const LabelInfo = styled.span`
  ${({ spacing: { xsmall } }) => `
    margin-left: ${xsmall}px;
  `}
  height: 17px;
`;

ProgressLabel.displayName = 'ProgressLabel';
LabelInfo.displayName = 'LabelInfo';

const ChargeBar = ({
  width = '250px',
  progressPercent = 50,
  label = 'default informative text',
  skin = 'primary',
  theme = {
    components: {
      chargeBar: components.chargeBar,
    },
    spacing: themeSpacing,
    baseFontSize: defaultBaseFontSize,
  },
}) => {
  const {
    components: {
      chargeBar: {
        skins: {
          [skin]: { background },
        },
      },
    },
    spacing,
    baseFontSize,
  } = theme;

  return (
    <Wrapper width={width} background={background} baseFontSize={baseFontSize}>
      <InfoBlock id="chargebar-label">
        <Icon name="whatshot" size="small" skin={background} />
        <LabelInfo spacing={spacing}>{label}</LabelInfo>
        <ProgressLabel>{progressPercent}%</ProgressLabel>
      </InfoBlock>
      <Bar
        background={background}
        width={width}
        spacing={spacing}
        role="progressbar"
        tabIndex="0"
        aria-labelledby="chargebar-label"
      >
        <Content background={background} progress={progressPercent} />
      </Bar>
    </Wrapper>
  );
};

ChargeBar.propTypes = {
  /** This prop sets the color of bar and text.  */
  skin: PropTypes.oneOf(['neutral', 'primary', 'secondary', 'success']),
  theme: PropTypes.shape({
    components: PropTypes.shape({
      chargeBar: PropTypes.object,
    }),
    spacing: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
  /** This prop sets the width of component, its can be in px or %  */
  width: PropTypes.string,
  /** This prop receives a number of 1 until 100. Its the progress bar in component  */
  progressPercent(props, propName) {
    const percentRange = props[propName];
    if (!percentRange) return null;

    return percentRange >= 0 && percentRange <= 100
      ? null
      : new Error('Must be within range of 0 to 100');
  },
  /** This prop receives the text that describe the progress bar */
  label: PropTypes.string,
};

export default ChargeBar;
