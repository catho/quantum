import { ReactNode, FC } from 'react';

export interface DescriptionProps {
    small?: boolean;
    theme?: { baseFontSize?: number; spacing?: object };
    children: ReactNode | ReactNode[];
}

declare const Description: FC<DescriptionProps> & {
    displayName: 'Card.Description';
};
    
export default Description;
