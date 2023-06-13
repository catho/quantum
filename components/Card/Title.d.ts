import { FC } from 'react';

export interface TitleProps {
    small?: boolean;
    theme?: { baseFontSize?: object };
}

declare const Title: FC<TitleProps> & {
    displayName: "Card.Title";
};

export default Title;