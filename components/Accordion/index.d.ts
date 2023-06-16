import { ReactNode, FC } from 'react';

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

declare const Accordion: FC<AccordionProps>;
export default Accordion;
