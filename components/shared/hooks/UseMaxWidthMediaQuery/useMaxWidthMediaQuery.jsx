import { useState, useCallback, useEffect } from 'react';

const useMaxWidthMediaQuery = width => {
  const [targetReached, setTargetReached] = useState(false);
  /* istanbul ignore next */
  const updateTarget = useCallback(event => {
    if (event.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);

    try {
      media.addEventListener('change', e => updateTarget(e));
    } catch (e1) {
      /* istanbul ignore next */
      try {
        media.addListener(e => updateTarget(e));
      } catch (e2) {
        console.error(e2);
      }
    }

    if (media.matches) {
      setTargetReached(true);
    }

    return () => {
      try {
        media.removeEventListener('change', e => updateTarget(e));
      } catch (e3) {
        /* istanbul ignore next */
        media.removeListener(updateTarget);
      }
    };
  }, []);

  return targetReached;
};

export default useMaxWidthMediaQuery;
