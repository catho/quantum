import { Component } from 'react';

export interface AutoCompleteProps {
  theme?: {
    colors?: object;
    spacing?: object;
  };
  suggestions: Array<string>;
  id?: string;
  name?: string;
  label?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  minlength?: string;
  onChange?: (item: string) => void;
  selectedItem?: (item: string) => void;
  onSelectedItem?: (item: string) => void;
}

export default class AutoComplete extends Component<AutoCompleteProps> {}
