import React from 'react';

export interface HamburgerProps {
    showNotification?: boolean;
    isOpened?: boolean;
    inverted?: boolean;
    ariaLabelDescription?: string;
}

export default class Hamburger extends React.Component<HamburgerProps> {}
