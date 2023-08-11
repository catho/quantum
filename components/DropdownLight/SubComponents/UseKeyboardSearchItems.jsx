import { useState, useEffect } from 'react';

const useKeyboardSearchItems = (items = [], cursor = -1, isOpen = false) => {
  const [pressedKey, setPressedKey] = useState(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const isEqual = (item, itemToCompare) =>
    (item?.label || item) === (itemToCompare?.label || itemToCompare);

  useEffect(() => {
    setSelectedItemIndex(cursor >= 0 ? cursor : null);
  }, [cursor]);

  useEffect(() => {
    if (pressedKey && isOpen) {
      let indexItem = selectedItemIndex;

      const itemsWithLetterPressed = items.filter((item) =>
        (item?.label || item)
          .toLowerCase()
          .startsWith(pressedKey.toLowerCase()),
      );

      if (!itemsWithLetterPressed.length) {
        return;
      }

      const selectedItemHasTheLetterPressed = itemsWithLetterPressed.some(
        (item) => isEqual(item, items[cursor]),
      );
      const firstItemInItemsWithLetterPressed = itemsWithLetterPressed[0];
      const indexOfFirstItemWithLetterPressedOnItems = items.findIndex((item) =>
        isEqual(item, firstItemInItemsWithLetterPressed),
      );
      const selectedItemIsBeforeTheFirstItemWithLetterPressed =
        cursor < indexOfFirstItemWithLetterPressedOnItems;
      const noItemSelected = typeof indexItem !== 'number';

      if (
        noItemSelected ||
        (!selectedItemHasTheLetterPressed &&
          selectedItemIsBeforeTheFirstItemWithLetterPressed)
      ) {
        setSelectedItemIndex(indexOfFirstItemWithLetterPressedOnItems);
        return;
      }

      const selectedItem = items[indexItem];
      const selectedItemIndexInFilteredItem = itemsWithLetterPressed.findIndex(
        (item) => isEqual(item, selectedItem),
      );
      const nextItemInItemsWithLetterPressed =
        itemsWithLetterPressed[selectedItemIndexInFilteredItem + 1];

      indexItem = items.findIndex((item) =>
        isEqual(
          item,
          nextItemInItemsWithLetterPressed || firstItemInItemsWithLetterPressed,
        ),
      );

      setSelectedItemIndex(indexItem);
    }
  }, [pressedKey]);

  const downHandler = ({ key }) => {
    if (key.length === 1) {
      setPressedKey(key);
    }
  };

  const upHandler = () => {
    setPressedKey(null);
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  return selectedItemIndex;
};

export default useKeyboardSearchItems;
