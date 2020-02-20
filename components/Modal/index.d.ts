import React from 'react';

export interface ModalProps {
    children?: React.ReactNode[] | React.ReactNode;
    onClose?: React.MouseEventHandler<HTMLButtonElement>;
    closeButtonAriaLabel?: string;
    theme?: {
        breakpoints?: object;
        colors?: object;
        spacing?: object;
        components?: {
            button?: object;
        };
    };
}

export default class Modal extends React.Component<ModalProps> {}
