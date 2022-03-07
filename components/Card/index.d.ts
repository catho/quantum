import { Component, MouseEvent } from 'react';
import Content from './Content';
import Description from './Description';
import Footer from './Footer';
import Header from './Header';
import HeaderText from './HeaderText';
import Media from './Media';
import Thumbnail from './Thumbnail';
import Title from './Title';

type Props = {
    onClick?: (e: MouseEvent) => void;
    theme?: {
        colors?: object
    }
}

export default class Card extends Component<Props> {
    static Content: Content;

    static Description: Description;

    static Footer: Footer;

    static Header: Header;

    static HeaderText: HeaderText;

    static Media: Media;

    static Thumbnail: Thumbnail;

    static Title: Title;
}
