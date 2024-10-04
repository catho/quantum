import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  colors as colorsDefault,
  spacing as spacingDefault,
  baseFontSize as baseFontSizeDefault,
} from '../shared/theme';
import {
  InputLabel,
  RequiredMark,
  TextInput,
  HelperText,
  InputErrorMessage,
} from '../Input/sub-components';
import Icon from '../Icon/Icon';
import useKeyPress from './SubComponents/UseKeyPress';
import { FieldGroup } from '../shared';
import useKeyboardSearchItems from './SubComponents/UseKeyboardSearchItems';

const itemPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
]);

const MAX_ITEMS_VISIBILITY = 7;
const DROPITEM_IMAGE_SIZE = '24px';

const CheckIcon = styled(Icon).attrs({
  name: 'check',
})`
  ${({ theme }) => {
    const {
      colors: {
        primary: { 700: primary700 },
      },
    } = theme;

    return css`
      color: ${primary700};
    `;
  }}
`;

const ArrowIcon = styled(Icon)`
  display: inline-block;
  pointer-events: none;
  width: 24px;
`;

const Button = styled.button`
  width: 100%;
  border-radius: 4px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;

  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;

  ${({ theme, error, skin }) => {
    const { baseFontSize, spacing, colors } = theme;

    return css`
      font-size: ${baseFontSize}px;
      margin-top: ${spacing.xsmall}px;
      padding: ${spacing.xsmall}px ${spacing.medium}px;
      background-color: ${skin === 'default'
        ? colors.neutral['0']
        : colors.neutral['700']};
      color: ${skin === 'default'
        ? colors.neutral['700']
        : colors.neutral['0']};
      border: 2px solid ${error ? colors.error['700'] : colors.neutral['500']};

      &:disabled {
        background-color: ${colors.neutral['100']};
        border-color: ${colors.neutral['500']};
        color: ${colors.neutral['500']};
        box-shadow: none;
        cursor: not-allowed;
      }

      &:hover:enabled {
        border-color: ${colors.primary['700']};
        box-shadow:
          0px 3px 1px -2px rgb(18 80 196 / 20%),
          0px 2px 2px 0px rgb(18 80 196 / 14%),
          0px 1px 5px 0px rgb(18 80 196 / 12%);
      }

      &:focus:enabled {
        border-color: ${colors.primary['700']};
        box-shadow:
          0px 3px 1px -2px rgb(18 80 196 / 20%),
          0px 2px 2px 0px rgb(18 80 196 / 14%),
          0px 1px 5px 0px rgb(18 80 196 / 12%);
      }
    `;
  }}
`;

const SelectionList = styled.ul`
  border-radius: 4px;
  box-sizing: border-box;
  list-style: none;
  height: calc(30px * ${MAX_ITEMS_VISIBILITY});
  overflow: auto;
  padding: 0;
  position: absolute;
  width: 100%;
  z-index: 9999;
  box-shadow:
    0px 3px 5px -1px rgba(224, 224, 224, 0.2),
    0px 5px 8px 0px rgba(224, 224, 224, 0.14),
    0px 1px 14px 0px rgba(224, 224, 224, 0.12);

  ${({ theme, skin }) => {
    const { baseFontSize, spacing, colors } = theme;

    return css`
      font-size: ${baseFontSize}px;
      margin-top: ${spacing.xxsmall}px;
      background-color: ${colors.neutral['0']};
      color: ${skin === 'default'
        ? colors.neutral['0']
        : colors.neutral['700']};
    `;
  }}
`;

const SelectionListItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  cursor: pointer;
  min-height: 40px;

  ${({ theme }) => {
    const { baseFontSize, spacing, colors } = theme;

    return css`
      font-size: ${baseFontSize * 0.875}px;
      padding: ${spacing.xsmall}px ${spacing.medium}px;

      &:hover {
        background-color: ${colors.neutral['100']};
      }
    `;
  }}
`;

const InputWrapper = styled.div`
  position: relative;
`;

const propsNotContainedInInput = ['theme'];

const InputText = styled(TextInput).withConfig({
  shouldForwardProp: (prop) => !propsNotContainedInInput.includes(prop),
})`
  ${({
    theme: {
      spacing: { xsmall },
      colors,
    },
    skin,
  }) => css`
    margin-top: ${xsmall}px;
    background-color: ${skin === 'default'
      ? colors.neutral['0']
      : colors.neutral['700']};
  `}
`;

const SelectionItemImage = styled.img`
  width: ${DROPITEM_IMAGE_SIZE};
  height: ${DROPITEM_IMAGE_SIZE};
  margin-left: ${spacingDefault.xsmall}px;
`;

const DropdownLight = ({
  disabled = false,
  items,
  theme = {
    colors: colorsDefault,
    spacing: spacingDefault,
    baseFontSize: baseFontSizeDefault,
  },
  placeholder = 'Select an option',
  name = '',
  id = '',
  label = '',
  error = '',
  required = false,
  helperText = '',
  skin = 'default',
  onChange = () => {},
  selectedItem = null,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptionItem, setSelectedOptionItem] = useState(
    selectedItem || '',
  );

  const [cursor, setCursor] = useState(-1);
  const buttonRef = useRef();
  const listOptions = useRef();

  const downPress = useKeyPress('ArrowDown');
  const upPress = useKeyPress('ArrowUp');
  const enterPress = useKeyPress('Enter');
  const focusedItemIndex = useKeyboardSearchItems(items, cursor, isOpen);
  const EscapeKeyPressValue = 'Escape';

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hasItemSelected = typeof focusedItemIndex === 'number';
    setCursor(hasItemSelected ? focusedItemIndex : -1);
  }, [focusedItemIndex]);

  useEffect(() => {
    if (isOpen && cursor >= 0) {
      listOptions.current.children[cursor].focus();
    }
  }, [cursor, isOpen]);

  const selectItem = (item) => {
    setSelectedOptionItem(item?.label || item);
    onChange(item);
    setCursor(-1);
    buttonRef.current.focus();
  };

  const handleOnClickListItem = (item) => {
    selectItem(item);
  };

  const handleClickOutside = (event) => {
    if (!buttonRef.current?.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleEscPress = ({ key }) => {
    if (key === EscapeKeyPressValue) {
      setIsOpen(false);
      setCursor(-1);
      buttonRef.current.focus();
    }
  };

  useEffect(() => {
    if (isOpen && downPress) {
      const selectedCursor = cursor < items.length - 1 ? cursor + 1 : cursor;
      setCursor(selectedCursor);
    }
  }, [downPress, items, isOpen]);

  useEffect(() => {
    if (isOpen && upPress && cursor > 0) {
      const selectedCursor = cursor - 1;
      setCursor(selectedCursor);
    }
  }, [upPress, items, isOpen]);

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleEscPress);
    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleEscPress);
    };
  }, []);

  useEffect(() => {
    if (
      enterPress &&
      !isOpen &&
      document.activeElement === buttonRef.current &&
      selectedOptionItem
    ) {
      const selectedItemIndex = items.findIndex(
        (item) => (item?.label || item) === selectedOptionItem,
      );
      setCursor(selectedItemIndex);
    }

    if (
      enterPress &&
      isOpen &&
      listOptions.current?.contains(document.activeElement)
    ) {
      const itemsList = [...listOptions.current.children];
      const selectedItemIndex = itemsList.findIndex(
        (item) => item === document.activeElement,
      );

      selectItem(items[selectedItemIndex]);
    }
  }, [enterPress]);

  return (
    <FieldGroup skin={skin}>
      <InputWrapper>
        {label && (
          <InputLabel error={error}>
            {label}
            {required && (
              <RequiredMark skin={skin} aria-label="campo obrigatório">
                *
              </RequiredMark>
            )}
          </InputLabel>
        )}
        <InputText
          type="text"
          hidden
          skin={skin}
          name={name}
          defaultValue={selectedOptionItem?.label || selectedOptionItem}
          aria-label="selecione uma opção"
          required={required}
          theme={theme}
        />
        <Button
          type="button"
          aria-haspopup="true"
          aria-label={isOpen ? 'fechar lista de itens' : 'abrir lista de itens'}
          onClick={handleToggleDropdown}
          theme={theme}
          skin={skin}
          error={error}
          disabled={disabled}
          ref={buttonRef}
          id={id}
        >
          {selectedOptionItem
            ? selectedOptionItem?.label || selectedOptionItem
            : placeholder}
          <ArrowIcon name={isOpen ? 'arrow_drop_up' : 'arrow_drop_down'} />
        </Button>
      </InputWrapper>

      {isOpen && (
        <SelectionList theme={theme} ref={listOptions}>
          {items.map((item, index) => (
            <SelectionListItem
              role="option"
              theme={theme}
              key={item?.value || item}
              onClick={() => handleOnClickListItem(item)}
              aria-posinset={index}
              aria-selected={index === cursor}
              tabIndex="-1"
            >
              {item?.label || item}

              {item?.img ? (
                <>
                  <SelectionItemImage src={item?.img} alt={item?.alt} />
                  {selectedOptionItem === item?.label ||
                    selectedOptionItem === item}
                </>
              ) : (
                (selectedOptionItem === item?.label ||
                  selectedOptionItem === item) && <CheckIcon theme={theme} />
              )}
            </SelectionListItem>
          ))}
        </SelectionList>
      )}
      {helperText && <HelperText>{helperText}</HelperText>}
      {error && (
        <InputErrorMessage theme={theme} skin={skin}>
          {error}
        </InputErrorMessage>
      )}
    </FieldGroup>
  );
};

DropdownLight.propTypes = {
  /** Disables component */
  disabled: PropTypes.bool,
  /** Displays a mark to shows thats component is required */
  required: PropTypes.bool,
  /** Displays an error message and changes border color to error color */
  error: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  /** Displays a label text that describes the field */
  label: PropTypes.string,
  placeholder: PropTypes.string,
  /** Receives the item of the list to be selected */
  selectedItem: itemPropType,
  /** Displays a helper text below the component */
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  /** A list of string or objects with value and label keys */
  items: PropTypes.arrayOf(itemPropType).isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
  skin: PropTypes.oneOf(['default', 'dark']),
};

export default DropdownLight;
