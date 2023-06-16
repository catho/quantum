
// Generated with scripts/create-component.js
import { FC } from 'react';

export type ItemPropType = string | { value: string | number; label: string };

export interface DropdownLightProps {
  id?: string;
  name?: string;
  disabled?: boolean;
  items: ItemPropType[];
  placeholder?: string;
  theme?: {
    colors?: {};
    spacing?: {};
    baseFontSize?: number;
  };
  label?: string,
  error?: string,
  required?: boolean,
  helperText?: string,
  skin?: 'default' | 'dark',
  selectedItem?: ItemPropType;
  onChange?: (
    selectedItem?: ItemPropType,
  ) => void;
}

declare const DropdownLight: FC<DropdownLightProps>;
export default DropdownLight;
    