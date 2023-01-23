import { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors, spacing, baseFontSize } from '../shared/theme';
import Icon from '../Icon/Icon';

const itemPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
]);

const ITEM_HEIGHT = '30px';
const MAX_ITEMS_VISIBILITY = 7;

const CheckIcon = styled(Icon).attrs({
  name: 'check',
})`
  ${({
    selectedItem,
    theme: {
      colors: {
        primary: { 700: primary700 },
      },
    },
  }) =>
    !selectedItem &&
    `
    color: ${primary700};
  `}
`;

const ArrowIcon = styled(Icon)`
  display: inline-block;
  pointer-events: none;
  width: 24px;
`;

const ButtonField = styled.button`
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
    const {
      baseFontSize: baseFontSizeButton,
      colors: colorsButton,
      spacing: spacingButton,
    } = theme;

    return css`
      font-size: ${baseFontSizeButton}px;
      padding: ${spacingButton.xsmall}px ${spacingButton.medium}px;
      background-color: ${colorsButton.neutral['0']};
      border: 2px solid ${colorsButton.neutral['500']};
      color: ${colorsButton.neutral['700']};

      :hover {
        border-color: ${colorsButton.primary['700']};
        box-shadow: 0px 3px 1px -2px rgb(18 80 196 / 20%),
          0px 2px 2px 0px rgb(18 80 196 / 14%),
          0px 1px 5px 0px rgb(18 80 196 / 12%);
      }

      :focus {
        border-color: ${colorsButton.primary['700']};
        box-shadow: 0px 3px 1px -2px rgb(18 80 196 / 20%),
          0px 2px 2px 0px rgb(18 80 196 / 14%),
          0px 1px 5px 0px rgb(18 80 196 / 12%);
      }
    `;
  }}
`;

const DropdownSelect = styled.ul`
  border-radius: 4px;
  box-sizing: border-box;
  list-style: none;
  height: calc(${ITEM_HEIGHT} * ${MAX_ITEMS_VISIBILITY});
  overflow: auto;
  padding: 0;
  position: absolute;
  width: 96%;
  z-index: 9999;
  box-shadow: 0px 3px 5px -1px rgba(224, 224, 224, 0.2),
    0px 5px 8px 0px rgba(224, 224, 224, 0.14),
    0px 1px 14px 0px rgba(224, 224, 224, 0.12);

  ${({ theme }) => {
    const {
      baseFontSize: baseFontSizeDropdownSelect,
      colors: colorsDropdownSelect,
      spacing: spacingDropdownSelect,
    } = theme;

    return css`
      font-size: ${baseFontSizeDropdownSelect}px;
      margin-top: ${spacingDropdownSelect.xxsmall}px;
      background-color: ${colorsDropdownSelect.neutral['0']};
    `;
  }}
`;

const OptionItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  cursor: pointer;
  min-height: 40px;

  ${({ theme }) => {
    const {
      baseFontSize: baseFontSizeDropdownOption,
      colors: colorsOption,
      spacing: spacingOption,
    } = theme;

    return css`
      font-size: ${baseFontSizeDropdownOption * 0.875}px;
      padding: ${spacingOption.xsmall}px ${spacingOption.medium}px;

      :hover {
        background-color: ${colorsOption.neutral['100']};
      }
    `;
  }}
`;

const DropdownLight = ({ disabled, items, theme, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [itemLabel, setItemLabel] = useState(placeholder);

  const handleClose = item => {
    setIsOpen(false);
    setSelectedItem(item?.value || item);
    setItemLabel(item?.label || item);
  };

  return (
    <>
      <input
        type="hidden"
        value={selectedItem}
        aria-label="selecione uma opcao"
      />

      <ButtonField onClick={() => setIsOpen(!isOpen)} theme={theme}>
        {itemLabel}
        <ArrowIcon
          name={isOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
          theme={theme}
        />
      </ButtonField>

      {isOpen && (
        <DropdownSelect disabled={disabled} theme={theme}>
          {items.map(item => (
            <OptionItem
              theme={theme}
              key={item?.value || item}
              onClick={() => handleClose(item)}
            >
              {item?.label || item}

              {(selectedItem === item?.value || selectedItem === item) && (
                <CheckIcon theme={theme} />
              )}
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
