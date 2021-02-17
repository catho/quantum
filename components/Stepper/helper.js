/* eslint-disable no-console */
const MAXIMUM_STEPS = 6;
const MINIMUM_STEPS = 1;

const handlerValuePrepare = total => {
  if (total > MAXIMUM_STEPS && total > 0) return MAXIMUM_STEPS;
  if (total < MINIMUM_STEPS) return MINIMUM_STEPS;

  return total;
};

const handlerStepPrepare = (index, total) => {
  if (index <= total) {
    const _index = handlerValuePrepare(index);
    return _index;
  }

  console.warn(
    'Stepper component: the "index" prop can not be bigger than "total" prop. The index value was settled now to 1.',
  );
  return 1;
};

const handleProgressPosition = (progressPercent, isOverHalf) => {
  const position = isOverHalf ? progressPercent - 50 : progressPercent;
  return Math.round((position * 180) / 50) - 90;
};

const percentToDegrees = progressPercent => {
  const isOverHalf = progressPercent > 50;
  const firstDegree = isOverHalf ? -90 : 90;
  const secondDegree = handleProgressPosition(progressPercent, isOverHalf);
  return [firstDegree, secondDegree];
};

export { handlerValuePrepare, handlerStepPrepare, percentToDegrees };
