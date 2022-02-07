import React, { TextareaHTMLAttributes } from 'react';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    disabled?: boolean;
    error?: string;
    helperText?: string;
    label?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
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

export default class TextArea extends React.Component<TextAreaProps> {}
