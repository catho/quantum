import { useState, useCallback, useEffect } from 'react';

const useMediaQuery = width => {
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
    media.addEventListener('change', e => updateTarget(e));

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener('change', e => updateTarget(e));
  }, []);

  return targetReached;
};

export default useMediaQuery;
