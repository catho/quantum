import React from 'react';
import Proptypes from 'prop-types';
import { colors, baseFontSize, spacing } from '../shared/theme';
import {
  limitCharsWarning,
  handlerValuePrepare,
  handlerStepPrepare,
  percentToDegrees,
} from './helper';
import {
  Wrapper,
  RadialProgressBar,
  RadialProgressOverlay,
  TextWrapper,
  CurrentText,
  NextStep,
} from './style';

RadialProgressOverlay.displayName = 'RadialProgressOverlay';

const Stepper = ({
  total,
  index,
  currentStepText,
  nextStepText,
  isMobile,
  ...rest
}) => {
  const _totalPrepared = handlerValuePrepare(total);
  const _indexPrepared = handlerStepPrepare(index, total);
  const _isLastStep = _totalPrepared === _indexPrepared;
  const _progressPercent = Math.round((_indexPrepared / _totalPrepared) * 100);
  limitCharsWarning(isMobile, currentStepText, nextStepText);

  return (
    <Wrapper degrees={percentToDegrees(_progressPercent)} {...rest}>
      <RadialProgressBar className="progress" isMobile={isMobile} {...rest}>
        <RadialProgressOverlay isMobile={isMobile} {...rest}>
          {_indexPrepared} de {_totalPrepared}
        </RadialProgressOverlay>
      </RadialProgressBar>
      <TextWrapper {...rest}>
        <CurrentText isMobile={isMobile}>{currentStepText}</CurrentText>
        <NextStep isMobile={isMobile}>
          {!_isLastStep && 'próximo: '} {nextStepText}
        </NextStep>
      </TextWrapper>
    </Wrapper>
  );
};

Stepper.defaultProps = {
  total: 6,
  index: 1,
  skin: 'primary',
  theme: {
    colors,
    baseFontSize,
    spacing,
  },
  isMobile: false,
};

Stepper.propTypes = {
  total: Proptypes.number,
  index: Proptypes.number,
  currentStepText: Proptypes.string.isRequired,
  nextStepText: Proptypes.string.isRequired,
  skin: Proptypes.oneOf(['primary', 'success', 'warning']),
  theme: Proptypes.shape({
    colors: Proptypes.object,
    baseFontSize: Proptypes.number,
    spacing: Proptypes.object,
  }),
  isMobile: Proptypes.bool,
};

export default Stepper;
