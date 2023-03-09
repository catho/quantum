import { InputHTMLAttributes, MouseEventHandler, ChangeEventHandler } from 'react';
import masks from '../shared/masks';
import Input from './Input';


import { Validations } from '../Form';

export type MaskFunction = (rawValue: string) => string[];
export type Mask = boolean | RegExp | string | MaskFunction;
export type Validate =
  | typeof Validations.Required
  | typeof Validations.CPF
  | typeof Validations.CEP
  | typeof Validations.Date
  | typeof Validations.MinLength
  | typeof Validations.MaxLength
  | typeof Validations.Email;
export type CustomValidate =
  | ((param?: { value: string }) => string)
  | { validate: Validate; error: string };

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  label?: string;
  helperText?: string;
  descriptionLabel?: string;
  required?: boolean;
  placeholder?: string;
  type?: 'email' | 'text' | 'tel' | 'number' | 'password' | 'search';
  error?: string;
  id?: string;
  name?: string;
  validate?: Validate | CustomValidate | Array<Validate | CustomValidate>;
  mask?: Mask | Mask[];
  onClean?: MouseEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  minLength?: number;
  maxLength?: number;
  skin?: 'default' | 'dark';
  theme?: {
    spacing?: {};
    colors?: {};
    baseFontSize?: number;
  };
}


interface CompoundedInput extends React.FunctionComponent<InputProps> {
  CEP: React.FunctionComponent<InputProps>;
  CNPJ: React.FunctionComponent<InputProps>;
  CPF: React.FunctionComponent<InputProps>;
  Date: React.FunctionComponent<InputProps>;
  Password: React.FunctionComponent<InputProps>;
  Phone: React.FunctionComponent<InputProps>;
}

const Input: CompoundedInput = () => null

export default Input;
