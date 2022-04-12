import { Component, ChangeEventHandler, TextareaHTMLAttributes } from 'react';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    disabled?: boolean;
    autoResize?: boolean;
    autoResizeConfig?: {
        rowsConfig: number,
        minRowsConfig: number,
		maxRowsConfig: number,
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

export default class TextArea extends Component<TextAreaProps> {}
