/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';

const DEFAULT_OPTIONS = {
  config: {
    attributes: true,
    childList: true,
    subtree: true,
  },
};
export const useMutationObservable = ({
  targetEl,
  callback,
  options = DEFAULT_OPTIONS,
}) => {
  const [observer, setObserver] = useState(undefined);

  useEffect(() => {
    const obs = new MutationObserver(callback);
    setObserver(obs);
  }, [callback, options, setObserver]);

  useEffect(() => {
    if (!observer || !targetEl) return;
    const { config } = options;
    observer.observe(targetEl, config);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [observer, targetEl, options]);
};
