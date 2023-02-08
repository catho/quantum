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

const ComponentWrapper = styled.div`
  ${({
    theme: {
      colors: { neutral },
    },
    skin = 'default',
  }) => css`
    position: relative;
    color: ${skin === 'default' ? neutral[700] : neutral[0]};
  `}
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

const InputWrapper = styled.div`
  position: relative;
`;

const InputText = styled(TextInput)`
  ${({
    theme: {
      spacing: { xsmall },
    },
  }) => css`
    margin-top: ${xsmall}px;
  `}
`;

const InputIcon = styled(Icon)`
  cursor: pointer;
  position: absolute;
  ${({
    theme: {
      spacing: { xsmall, medium },
      baseFontSize,
    },
  }) => css`
    right: ${medium}px;
    bottom: ${xsmall * 1.25}px;
    width: ${baseFontSize * 1.5}px;
  `}
`;

const InputErrorIcon = styled(InputIcon).attrs({ name: 'error' })`
  ${({
    theme: {
      colors: {
        error: { 700: error700 },
      },
    },
    skin,
  }) => css`
    color: ${skin === 'default' ? error700 : 'inherit'};
  `}
`;

const DropdownLight = ({
  disabled,
  items,
  theme,
  placeholder,
  name,
  id,
  label,
  error,
  required,
  helperText,
  skin,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [itemLabel, setItemLabel] = useState(placeholder);
  const wrapperRef = useRef();
  const inputRef = useRef();

  const handleClose = item => {
    setIsOpen(false);
    setSelectedItem(item?.value || item);
    setItemLabel(item?.label || item);
  };

  useEffect(() => {
    if (error !== '') {
      inputRef.current.style.borderColor = 'red';
    }
  }, [error]);

  return (
    <>
      <ComponentWrapper theme={theme} skin={skin}>
        <InputWrapper ref={wrapperRef}>
          <InputLabel htmlFor={id} error={error}>
            {label}
            {required && <RequiredMark skin={skin}>*</RequiredMark>}
          </InputLabel>
          <InputText
            type="text"
            hidden
            error={error}
            ref={inputRef}
            skin={skin}
            name={name}
            placeholder={placeholder}
            defaultValue={selectedItem}
            aria-label="selecione uma opção"
            htmlFor={id}
            required={required}
          />

          <Button
            aria-haspopup="true"
            aria-label={
              isOpen ? 'fechar lista de itens' : 'abrir lista de itens'
            }
            onClick={() => setIsOpen(!isOpen)}
            theme={theme}
            disabled={disabled}
          >
            {itemLabel}
            {error ? (
              <InputErrorIcon description={error} theme={theme} skin={skin} />
            ) : (
              <ArrowIcon
                name={isOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
                theme={theme}
              />
            )}
          </Button>
        </InputWrapper>
        {helperText && <HelperText>{helperText}</HelperText>}
        {error && (
          <InputErrorMessage theme={theme} skin={skin}>
            {error}
          </InputErrorMessage>
        )}

        {isOpen && (
          <SelectionList id={id} theme={theme}>
            {items.map(item => (
              <SelectionListItem
                role="option"
                theme={theme}
                key={item?.value || item}
                onClick={() => handleClose(item)}
              >
                {item?.label || item}

                {(selectedItem === item?.value || selectedItem === item) && (
                  <CheckIcon theme={theme} />
                )}
              </SelectionListItem>
            ))}
          </SelectionList>
        )}
      </ComponentWrapper>
    </>
  );
};

DropdownLight.propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  items: PropTypes.arrayOf(itemPropType).isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
  name: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  skin: PropTypes.oneOf(['default', 'dark']),
};

DropdownLight.defaultProps = {
  id: '',
  label: '',
  error: '',
  required: false,
  disabled: false,
  theme: {
    colors: colorsDefault,
    spacing: spacingDefault,
    baseFontSize: baseFontSizeDefault,
  },
  placeholder: 'Select an option',
  name: '',
  helperText: '',
  skin: 'default',
};

export default DropdownLight;
