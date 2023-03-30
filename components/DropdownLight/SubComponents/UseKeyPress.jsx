import { useState, useEffect } from 'react';

const useKeyPress = targetKey => {
  const [keyPressed, setKeyPressed] = useState(false);

  /* istanbul ignore next */
  const downHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  };

  /* istanbul ignore next */
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  return keyPressed;
};

export default useKeyPress;
