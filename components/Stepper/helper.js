/* eslint-disable no-console */
const handlerValuePrepare = total => {
  if (total > 6 && total > 0) return 6;
  if (total < 1) return 1;

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

const percentToDegrees = progressPercent => {
  const firstDegree = progressPercent > 50 ? -90 : 90;
  let secondDegree = Math.round((progressPercent * 180) / 50) - 90;
  if (progressPercent > 50) {
    secondDegree = Math.round(((progressPercent - 50) * 180) / 50) - 90;
  }
  return [firstDegree, secondDegree];
};

export { handlerValuePrepare, handlerStepPrepare, percentToDegrees };
