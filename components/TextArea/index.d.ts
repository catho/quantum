import { FC, ChangeEventHandler, TextareaHTMLAttributes } from 'react';

export interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange" | "id"> {
    disabled?: boolean;
    isAutoResize?: boolean;
    autoResizeConfig?: {
        initialRows: number,
        minRows: number,
		maxRows: number,
    };
    error?: string;
    helperText?: string;
    label?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    required?: boolean;
    value?: string;
    id?: string | number;
    skin?: 'default' | 'dark';
    theme?: {
        spacing?: {};
        colors?: {};
        baseFontSize?: number;
    }
}

declare const TextArea: FC<TextAreaProps>;
export default TextArea;
