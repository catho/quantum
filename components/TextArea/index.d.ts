import React from 'react';

export interface TextAreaProps {
    disabled?: boolean;
    error?: string;
    helperText?: string;
    label?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    required?: boolean;
    value?: string;
    id?: string | number;
}

export default class TextArea extends React.Component<TextAreaProps> {}
