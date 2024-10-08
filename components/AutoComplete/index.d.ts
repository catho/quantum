import { FC } from 'react';
export interface AutoCompleteProps {
  suggestions: Array<string>;
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  minlength?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onSelectedItem?: (item: string) => void;
}

declare const AutoComplete: FC<AutoCompleteProps>;
export default AutoComplete;