import { FC, MouseEvent } from 'react';
import Content from './Content';
import Description from './Description';
import Footer from './Footer';
import Header from './Header';
import HeaderText from './HeaderText';
import Media from './Media';
import Thumbnail from './Thumbnail';
import Title from './Title';

export interface CardProps {
    onClick?: (e: MouseEvent) => void;
    backgroundOpacity?: number;
}

declare const Card: FC<CardProps> & {
    Content: typeof Content;
    Description: typeof Description;
    Footer: typeof Footer;
    Header: typeof Header;
    HeaderText: typeof HeaderText;
    Media: typeof Media;
    Thumbnail: typeof Thumbnail;
    Title: typeof Title;
}

export default Card;
