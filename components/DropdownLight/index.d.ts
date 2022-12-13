
// Generated with scripts/create-component.js
import { Component } from 'react';

export type ItemPropType = string | { value: string | number; label: string };


export interface DropdownLightProps {
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  selectedItem?: ItemPropType;

  onChange?: (
    selectedItem: ItemPropType | null,
  ) => void;
  items?: ItemPropType[];
  skin?: 'default' | 'dark',
  theme?: {
    colors?: {};
    spacing?: {};
    baseFontSize?: number;
  };
}

export default class DropdownLight extends Component<DropdownLightProps> {}
    