import { FC, MouseEvent } from 'react';
import { ContentProps } from './Content';
import { DescriptionProps } from './Description';
import { FooterProps } from './Footer';
import { HeaderProps } from './Header';
import { HeaderTextProps } from './HeaderText';
import { MediaProps } from './Media';
import { ThumbnailProps } from './Thumbnail';
import { TitleProps } from './Title';

export interface CardProps {
    onClick?: (e: MouseEvent) => void;
    theme?: {
        colors?: object;
    },
    backgroundOpacity?: number;
}

declare const Card: FC<CardProps> & {
    Content: FC<ContentProps>;
    Description: FC<DescriptionProps>;
    Footer: FC<FooterProps>;
    Header: FC<HeaderProps>;
    HeaderText: FC<HeaderTextProps>;
    Media: FC<MediaProps>;
    Thumbnail: FC<ThumbnailProps>;
    Title: FC<TitleProps>;
}

export default Card;
