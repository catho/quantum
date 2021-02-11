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
  i18n,
  ...rest
}) => {
  const _totalPrepared = handlerValuePrepare(total);
  const _indexPrepared = handlerStepPrepare(index, total);
  const _isLastStep = _totalPrepared === _indexPrepared;
  const _progressPercent = Math.round((_indexPrepared / _totalPrepared) * 100);
  const { nextWord, paginationPreposition } = i18n;
  const nextWordFormated = `${nextWord}: `;

  return (
    <Wrapper degrees={percentToDegrees(_progressPercent)} {...rest}>
      <RadialProgressBar className="progress" {...rest}>
        <RadialProgressOverlay {...rest}>
          {_indexPrepared} {paginationPreposition} {_totalPrepared}
        </RadialProgressOverlay>
      </RadialProgressBar>
      <TextWrapper {...rest}>
        <CurrentText {...rest}>{currentStepText}</CurrentText>
        <NextStep {...rest}>
          {!_isLastStep && nextWordFormated} {nextStepText}
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
  i18n: {
    paginationPreposition: 'of',
    nextWord: 'next',
  },
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
  /** this prop is used to internationalization */
  i18n: Proptypes.shape({
    paginationPreposition: Proptypes.string,
    nextWord: Proptypes.string,
  }),
};

export default Stepper;
