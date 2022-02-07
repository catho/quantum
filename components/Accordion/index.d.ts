import React from 'react';

export interface AccordionProps {
    theme?: {
        colors?: {};
        spacing?: {};
        baseFontSize?: number;
    };
    keepOnlyOneOpen?: boolean;
    items: Array<{
        title?: string;
        content?: React.ReactNode;
        opened?: boolean;
        onClick?: () => void;
    }>;
}

export default class Accordion extends React.Component<AccordionProps> {}
