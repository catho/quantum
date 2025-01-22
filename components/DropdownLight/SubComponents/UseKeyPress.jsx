import { useState, useEffect } from 'react';

const useKeyPress = (targetKey, isPreventDefault = () => false) => {
  const [keyPressed, setKeyPressed] = useState(false);

  /* istanbul ignore next */
  const downHandler = (event) => {
    if (event.key === targetKey) {
      if (isPreventDefault()) {
        event.preventDefault();
      }
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
