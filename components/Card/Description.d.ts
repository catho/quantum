import { ReactNode, FC, HTMLAttributes } from 'react';

export interface DescriptionProps extends HTMLAttributes<HTMLDivElement> {
    small?: boolean;
    children: ReactNode | ReactNode[];
}

declare const Description: FC<DescriptionProps>;
    
export default Description;
