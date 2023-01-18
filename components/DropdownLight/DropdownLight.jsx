import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors, spacing, baseFontSize } from '../shared/theme';
import Icon from '../Icon/Icon';
import useKeyPress from './SubComponents/UseKeyPress';

const itemPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
]);

const ITEM_HEIGHT = '44px';
const MAX_ITEMS_VISIBILITY = 7;

const DropdownSelect = styled.ul`
  border-radius: 4px;
  box-sizing: border-box;
  list-style: none;
  max-height: calc(${ITEM_HEIGHT} * ${MAX_ITEMS_VISIBILITY});
  overflow: auto;
  padding: 0;
  position: absolute;
  width: 100%;
  z-index: 9999;

  ${({ theme }) => {
    const { baseFontSize: baseFontSizeDropdownSelect } = theme;

    return css`
      font-size: ${baseFontSizeDropdownSelect}px;
    `;
  }}
`;

const Input = styled.input`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  text-align: left;
`;

const ArrowIcon = styled(Icon)`
  display: inline-block;
  pointer-events: none;
  width: 24px;

  ${({ selectedItem }) =>
    !selectedItem &&
    `
    color: inherit;
  `}
`;

const ButtonField = styled.button`
  width: 100%;
  margin-top: 0px;
  padding: 8px 16px;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: ${baseFontSize};

  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;

  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
  border: 2px solid ${colors.neutral['500']};
  color: ${colors.neutral['700']};

  :hover {
    border-color: ${colors.primary['700']};
    box-shadow: 0px 3px 1px -2px rgb(18 80 196 / 20%),
      0px 2px 2px 0px rgb(18 80 196 / 14%), 0px 1px 5px 0px rgb(18 80 196 / 12%);
  }

  :focus {
    border-color: ${colors.primary['700']};
    box-shadow: 0px 3px 1px -2px rgb(18 80 196 / 20%),
      0px 2px 2px 0px rgb(18 80 196 / 14%), 0px 1px 5px 0px rgb(18 80 196 / 12%);
  }
`;

const OptionItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  cursor: pointer;
  min-height: 42px;
  padding: 8px 16px;
  :hover {
    background-color: ${colors.neutral['100']};
  }
`;

const DropdownLight = ({ disabled, items, theme, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [itemLabel, setItemLabel] = useState(placeholder);

  const [cursor, setCursor] = useState(0);
  const wrapperRef = useRef();
  const listOptions = useRef();

  const downPress = useKeyPress('ArrowDown');
  const upPress = useKeyPress('ArrowUp');
  const enterPress = useKeyPress('Enter');
  const EscapeKeyPressValue = 'Escape';

  const handleItemClick = item => {
    console.log(`esse aqui: ${item?.value || item}`);
  };

  const handleClose = item => {
    setIsOpen(false);
    setSelectedItem(item?.value || item);
    setItemLabel(item?.label || item);
    handleItemClick(item);
  };

  const handleClickOutside = event => {
    if (!wrapperRef.current?.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleEscPress = ({ key }) => {
    const node = wrapperRef.current;
    if (node && key === EscapeKeyPressValue) {
      setIsOpen(false);
      setCursor(0);
    }
  };

  const handleEnterPress = ({ key }) => {
    const node = wrapperRef.current;
    if (node && key === enterPress) {
      setIsOpen(false);
      handleItemClick(cursor);
    }
  };

  useEffect(() => {
    console.log(cursor);
  }, [cursor]);

  useEffect(() => {
    if (isOpen && downPress && items.length) {
      const selectedCursor = cursor < items.length - 1 ? cursor + 1 : cursor;
      setCursor(selectedCursor);
      listOptions.current.children[selectedCursor].focus();
    }
  }, [downPress, items, isOpen]);

  useEffect(() => {
    if (isOpen && upPress && items.length && cursor > 0) {
      const selectedCursor = cursor - 1;
      setCursor(selectedCursor);
      listOptions.current.children[selectedCursor].focus();
    }
  }, [upPress, items, isOpen]);

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleEscPress);
    window.addEventListener('keydown', handleEnterPress);
    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleEscPress);
      window.removeEventListener('keydown', handleEnterPress);
    };
  }, []);

  useEffect(() => {
    if (isOpen && enterPress) {
      setIsOpen(false);
      handleItemClick(cursor);
    }
    console.log('#Esse cursor', cursor);
  }, [enterPress, isOpen]);

  return (
    <>
      <Input type="hidden" value={selectedItem} />

      <ButtonField onClick={() => setIsOpen(!isOpen)} ref={wrapperRef}>
        {itemLabel}
        <ArrowIcon
          name={isOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
          theme={theme}
        />
      </ButtonField>

      {isOpen && (
        <DropdownSelect disabled={disabled} theme={theme} ref={listOptions}>
          {items.map((item, index) => (
            <OptionItem
              key={item?.value || item}
              aria-posinset={index}
              aria-selected={index === cursor}
              role="option"
              tabIndex="-1"
              onClick={() => handleClose(item)}
            >
              {item?.label || item}
            </OptionItem>
          ))}
        </DropdownSelect>
      )}
    </>
  );
};

DropdownLight.propTypes = {
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  items: PropTypes.arrayOf(itemPropType).isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
};

DropdownLight.defaultProps = {
  disabled: false,
  theme: { colors, spacing, baseFontSize },
  placeholder: 'Select an option',
};

export default DropdownLight;
