import { ReactNode, Component } from 'react';

export interface AccordionProps {
    theme?: {
        colors?: {};
        spacing?: {};
        baseFontSize?: number;
    };
    keepOnlyOneOpen?: boolean;
    items: Array<{
        title?: string;
        content?: ReactNode;
        opened?: boolean;
        onClick?: () => void;
    }>;
}

export default class Accordion extends Component<AccordionProps> {}
