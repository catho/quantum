import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  colors as colorsDefault,
  spacing as spacingDefault,
  baseFontSize as baseFontSizeDefault,
} from '../shared/theme';
import Icon from '../Icon/Icon';
import useKeyPress from './SubComponents/UseKeyPress';

const itemPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
]);

const MAX_ITEMS_VISIBILITY = 7;

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

const Wrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  width: 100%;
  border-radius: 4px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  margin-top: 0px;

  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;

  ${({ theme }) => {
    const { baseFontSize, spacing, colors } = theme;

    return css`
      font-size: ${baseFontSize}px;
      padding: ${spacing.xsmall}px ${spacing.medium}px;
      background-color: ${colors.neutral['0']};
      border: 2px solid ${colors.neutral['500']};
      color: ${colors.neutral['700']};

      :disabled {
        background-color: ${colors.neutral['100']};
        border-color: ${colors.neutral['500']};
        color: ${colors.neutral['500']};
        box-shadow: none;
        cursor: not-allowed;
      }

      :hover :enabled {
        border-color: ${colors.primary['700']};
        box-shadow: 0px 3px 1px -2px rgb(18 80 196 / 20%),
          0px 2px 2px 0px rgb(18 80 196 / 14%),
          0px 1px 5px 0px rgb(18 80 196 / 12%);
      }

      :focus :enabled {
        border-color: ${colors.primary['700']};
        box-shadow: 0px 3px 1px -2px rgb(18 80 196 / 20%),
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
  box-shadow: 0px 3px 5px -1px rgba(224, 224, 224, 0.2),
    0px 5px 8px 0px rgba(224, 224, 224, 0.14),
    0px 1px 14px 0px rgba(224, 224, 224, 0.12);

  ${({ theme }) => {
    const { baseFontSize, spacing, colors } = theme;

    return css`
      font-size: ${baseFontSize}px;
      margin-top: ${spacing.xxsmall}px;
      background-color: ${colors.neutral['0']};
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

      :hover {
        background-color: ${colors.neutral['100']};
      }
    `;
  }}
`;

const DropdownLight = ({ disabled, items, theme, placeholder, name }) => {
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

  const handleClose = item => {
    setIsOpen(false);
    setSelectedItem(item?.value || item);
    setItemLabel(item?.label || item);
  };

  const handleClickOutside = event => {
    if (!wrapperRef.current?.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleEscPress = ({ key }) => {
    if (key === EscapeKeyPressValue) {
      setIsOpen(false);
      setCursor(0);
    }
  };

  const handleEnterPress = ({ key }) => {
    if (!isOpen && key === enterPress) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (isOpen && downPress) {
      const selectedCursor = cursor < items.length - 1 ? cursor + 1 : cursor;
      setCursor(selectedCursor);
      listOptions.current.children[selectedCursor].focus();
    }
  }, [downPress, items, isOpen]);

  useEffect(() => {
    if (isOpen && upPress && cursor > 0) {
      const selectedCursor = cursor - 1;
      setCursor(selectedCursor);
      listOptions.current.children[selectedCursor].focus();
    }
  }, [upPress, items, isOpen]);

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleEscPress, handleEnterPress);
    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleEscPress, handleEnterPress);
    };
  }, []);

  useEffect(() => {
    if (isOpen && enterPress) {
      setIsOpen(false);
      handleClose(items[cursor]);
    }
  }, [enterPress, isOpen]);

  return (
    <Wrapper>
      <input
        type="text"
        hidden
        name={name}
        defaultValue={selectedItem}
        aria-label="selecione uma opção"
      />

      <Button
        aria-haspopup="true"
        aria-label={isOpen ? 'fechar lista de itens' : 'abrir lista de itens'}
        onClick={() => setIsOpen(!isOpen)}
        theme={theme}
        disabled={disabled}
        ref={wrapperRef}
      >
        {itemLabel}
        <ArrowIcon
          name={isOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
          theme={theme}
        />
      </Button>

      {isOpen && (
        <SelectionList theme={theme} ref={listOptions}>
          {items.map((item, index) => (
            <SelectionListItem
              role="option"
              theme={theme}
              key={item?.value || item}
              onClick={() => handleClose(item)}
              aria-posinset={index}
              aria-selected={index === cursor}
              tabIndex="-1"
            >
              {item?.label || item}

              {(selectedItem === item?.value || selectedItem === item) && (
                <CheckIcon theme={theme} />
              )}
            </SelectionListItem>
          ))}
        </SelectionList>
      )}
    </Wrapper>
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
  name: PropTypes.string,
};

DropdownLight.defaultProps = {
  disabled: false,
  theme: {
    colors: colorsDefault,
    spacing: spacingDefault,
    baseFontSize: baseFontSizeDefault,
  },
  placeholder: 'Select an option',
  name: '',
};

export default DropdownLight;
