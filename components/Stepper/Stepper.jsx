import React from 'react';
import Proptypes from 'prop-types';
import { colors, baseFontSize, spacing } from '../shared/theme';
import {
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
NextStep.displayName = 'NextStep';

const Stepper = ({ total, index, currentStepText, nextStepText, ...rest }) => {
  const _totalPrepared = handlerValuePrepare(total);
  const _indexPrepared = handlerStepPrepare(index, total);
  const _isLastStep = _totalPrepared === _indexPrepared;
  const _progressPercent = Math.round((_indexPrepared / _totalPrepared) * 100);

  return (
    <Wrapper degrees={percentToDegrees(_progressPercent)} {...rest}>
      <RadialProgressBar className="progress" {...rest}>
        <RadialProgressOverlay {...rest}>
          {_indexPrepared} de {_totalPrepared}
        </RadialProgressOverlay>
      </RadialProgressBar>
      <TextWrapper {...rest}>
        <CurrentText {...rest}>{currentStepText}</CurrentText>
        <NextStep {...rest}>
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
};

export default Stepper;
