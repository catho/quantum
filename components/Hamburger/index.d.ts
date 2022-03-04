import { Component } from 'react';

export interface HamburgerProps {
    showNotification?: boolean;
    isOpened?: boolean;
    inverted?: boolean;
    ariaLabelDescription?: string;
}

export default class Hamburger extends Component<HamburgerProps> {}
