import React from 'react';

export interface AutoCompleteProps {
  theme?: {
    colors?: object;
    spacing?: object;
  };
  suggestions?: Array<string>;
  id?: string;
  name?: string;
  label?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  placeholder?: string;
  selectedItem?: () => void;
}

export default class AutoComplete extends React.Component<AutoCompleteProps> {}
