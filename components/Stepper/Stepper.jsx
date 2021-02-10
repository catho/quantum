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

const Stepper = ({
  total,
  index,
  currentStepText,
  nextStepText,
  isPtBR,
  ...rest
}) => {
  const _totalPrepared = handlerValuePrepare(total);
  const _indexPrepared = handlerStepPrepare(index, total);
  const _isLastStep = _totalPrepared === _indexPrepared;
  const _progressPercent = Math.round((_indexPrepared / _totalPrepared) * 100);

  const _nextText = isPtBR ? 'próximo: ' : 'next: ';
  const _paginationText = isPtBR ? 'de' : 'of';

  return (
    <Wrapper degrees={percentToDegrees(_progressPercent)} {...rest}>
      <RadialProgressBar className="progress" {...rest}>
        <RadialProgressOverlay {...rest}>
          {_indexPrepared} {_paginationText} {_totalPrepared}
        </RadialProgressOverlay>
      </RadialProgressBar>
      <TextWrapper {...rest}>
        <CurrentText {...rest}>{currentStepText}</CurrentText>
        <NextStep {...rest}>
          {!_isLastStep && _nextText} {nextStepText}
        </NextStep>
      </TextWrapper>
    </Wrapper>
  );
};

Stepper.defaultProps = {
  total: 6,
  index: 1,
  skin: 'primary',
  currentStepText: 'Current step',
  nextStepText: 'next step',
  theme: {
    colors,
    baseFontSize,
    spacing,
  },
  isPtBR: false,
};

Stepper.propTypes = {
  /** this number is the total of steps thats used as reference (maximum = 6) */

  total: Proptypes.number,
  /** this number is current step (maximum = 6) */

  index: Proptypes.number,
  /** this prop is the text of current step */

  currentStepText: Proptypes.string,
  /** this prop is the text of next step */

  nextStepText: Proptypes.string,
  /** this prop is used to set the color of progress ring  */

  skin: Proptypes.oneOf(['primary', 'success', 'secondary']),
  theme: Proptypes.shape({
    colors: Proptypes.object,
    baseFontSize: Proptypes.number,
    spacing: Proptypes.object,
  }),
  /** this prop is used to translate all the informations to portuguese */

  isPtBR: Proptypes.bool,
};

export default Stepper;
