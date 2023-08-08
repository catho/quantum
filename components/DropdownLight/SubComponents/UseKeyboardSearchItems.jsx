import { useState, useEffect } from 'react';

const useKeyboardSearchItems = (items = [], cursor = -1) => {
  const [pressedKey, setPressedKey] = useState(null);
  const [selectedFilteredItemIndex, setSelectedFilteredItemIndex] =
    useState(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const isEqual = (item, itemToCompare) =>
    (item?.label || item) === (itemToCompare?.label || itemToCompare);

  useEffect(() => {
    setSelectedItemIndex(cursor >= 0 ? cursor : null);
    setSelectedFilteredItemIndex(null);
  }, [cursor]);

  useEffect(() => {
    if (pressedKey) {
      const indexFilteredItems = selectedFilteredItemIndex || 0;
      let indexItem = selectedItemIndex;

      const itemsWithLetterPressed = items.filter((item) =>
        (item?.label || item).toLowerCase().startsWith(pressedKey),
      );

      if (!itemsWithLetterPressed.length) {
        return;
      }

      const selectedItemHaveFilteredItem = itemsWithLetterPressed.some((item) =>
        isEqual(item, items[cursor]),
      );

      if (
        typeof indexItem !== 'number' ||
        (!selectedItemHaveFilteredItem &&
          cursor <
            items.findIndex((item) => isEqual(item, itemsWithLetterPressed[0])))
      ) {
        indexItem = items.findIndex((item) =>
          isEqual(item, itemsWithLetterPressed[indexFilteredItems]),
        );
        setSelectedItemIndex(indexItem);
        setSelectedFilteredItemIndex(indexFilteredItems);
        return;
      }

      let nextFilteredItemIndex = indexFilteredItems + 1;
      let nextFilteredItem = itemsWithLetterPressed[nextFilteredItemIndex];

      if (nextFilteredItem) {
        if (indexItem >= 0) {
          indexItem = items.findIndex((item) =>
            isEqual(item, nextFilteredItem),
          );
          while (cursor >= indexItem && nextFilteredItem) {
            nextFilteredItem =
              itemsWithLetterPressed[nextFilteredItemIndex + 1];
            if (nextFilteredItem) {
              nextFilteredItemIndex += 1;
              // eslint-disable-next-line no-loop-func
              indexItem = items.findIndex((item) =>
                isEqual(item, nextFilteredItem),
              );
            } else {
              nextFilteredItemIndex = 0;
              // eslint-disable-next-line no-loop-func
              indexItem = items.findIndex((item) =>
                isEqual(item, itemsWithLetterPressed[nextFilteredItemIndex]),
              );
            }
          }
          setSelectedItemIndex(indexItem);
          setSelectedFilteredItemIndex(nextFilteredItem);
        }
      } else {
        const firstFilteredItemIndex = 0;
        indexItem = items.findIndex((item) =>
          isEqual(item, itemsWithLetterPressed[firstFilteredItemIndex]),
        );
        setSelectedItemIndex(indexItem);
        setSelectedFilteredItemIndex(firstFilteredItemIndex);
      }
    }
  }, [pressedKey]);

  const downHandler = ({ key }) => {
    setPressedKey(key);
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
