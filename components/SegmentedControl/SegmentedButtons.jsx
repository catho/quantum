import { useState } from 'react';
import PropTypes from 'prop-types';
import SegmentedButton from './SegmentedButton';

const MAX_NUM_BUTTONS = 5;

const SegmentedButtons = ({ items, darkMode, name, onChange }) => {
  const ButtonDefaultChecked = allItems => {
    const itemChecked = allItems.filter(item => item.checked);
    if (itemChecked.length > 0) return itemChecked[0].value;

    return [];
  };

  const [itemChecked, setItemChecked] = useState(ButtonDefaultChecked(items));

  const onValueChange = (event, value, label) => {
    setItemChecked(value);
    onChange({ value, label }, event);
  };

  const isChecked = itemValue => itemValue === itemChecked;

  return (
    <>
      {items.slice(0, MAX_NUM_BUTTONS).map(item => (
        <SegmentedButton
          key={item.value}
          icon={item.icon}
          label={item.label}
          value={item.value}
          checked={isChecked(item.value)}
          name={name}
          onChange={e => onValueChange(e, item.value, item.label)}
          darkMode={darkMode}
        />
      ))}
    </>
  );
};

SegmentedButtons.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      icon: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};
export default SegmentedButtons;
