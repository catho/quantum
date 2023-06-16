import { FormHTMLAttributes, ReactNode, FC } from 'react';

export interface FormProps extends Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
    children: ReactNode[] | ReactNode;
    onSubmit?: ({ valid }?: { valid: boolean }) => void;
    onValidSubmit?: (values?: { [name: string]: string | undefined }) => void;
    noValidate?: boolean;
}

declare const Form: FC<FormProps>;

export namespace Validations {
    function Required(params: { value?: string }): string;
    
    function CPF(params: { value?: string }, cpf?: string): string;
    
    function CEP(params: { value?: string }): string;
    
    function Date(params: { value?: string }): string;
    
    function MinLength(params: { value?: string; minLength?: string | number }): string;
    
    function MaxLength(params: { value?: string; maxLength?: string | number }): string;
    
    function Email(params: { value?: string }): string;
    
    function EmailBlockAccent(params: { value?: string }): string;
}

export default Form;