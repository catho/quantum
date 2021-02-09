/* eslint-disable no-console */

const limitChars = {
  desktopCurrent: 25,
  desktopNext: 50,
  mobileCurrent: 35,
  mobileNext: 50,
};

const warning = (prop, propNumberOfChars) => {
  console.warn(
    `Stepper component: '${prop}' text was exceeded the limit of ${propNumberOfChars} chars. This problem may affect the user experience.`,
  );
};

const limitCharsWarning = (isMobile, currentText, nextText) => {
  if (isMobile) {
    if (currentText.length > limitChars.mobileCurrent)
      warning(currentText, limitChars.mobileCurrent);
    if (nextText.length > limitChars.mobileNext)
      warning(nextText, limitChars.mobileNext);
  } else {
    if (currentText.length > limitChars.desktopCurrent)
      warning(currentText, limitChars.desktopCurrent);
    if (nextText.length > limitChars.desktopNext)
      warning(nextText, limitChars.desktopNext);
  }
};

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
  const degrees = {
    17: [90, -50],
    20: [90, -45],
    25: [90, 0],
    33: [90, 20],
    40: [90, 40],
    50: [90, 90],
    60: [-90, -54],
    67: [-90, -22],
    75: [-90, 0],
    80: [-90, 18],
    83: [-90, 20],
    100: [-90, 90],
  };

  return degrees[progressPercent];
};

export {
  limitCharsWarning,
  handlerValuePrepare,
  handlerStepPrepare,
  percentToDegrees,
};
