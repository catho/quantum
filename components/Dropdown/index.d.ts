import React from 'react';
import { ControllerStateAndHelpers } from 'downshift';

export type ItemPropType = string | { value: string | number; label: string };

export interface DropdownProps {
  autocomplete?: boolean;
  disabled?: boolean;
  required?: boolean;
  ignoreSpecialChars?: boolean;
  error?: string;
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  selectedItem?: ItemPropType;
  helperText?: string;
  /** More about stateAndHelpers parameter here https://github.com/downshift-js/downshift#children-function */
  onChange?: (
    selectedItem: ItemPropType | null,
    stateAndHelpers: ControllerStateAndHelpers<ItemPropType>,
  ) => void;
  items?: ItemPropType[];
  theme?: {
    colors?: object;
    spacing?: object;
    baseFontSize?: number;
  };
}

export default class Dropdown extends React.Component<DropdownProps> {}
