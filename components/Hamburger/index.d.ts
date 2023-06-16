import { FC } from 'react';

export interface HamburgerProps {
    showNotification?: boolean;
    isOpened?: boolean;
    inverted?: boolean;
    ariaLabelDescription?: string;
}

declare const Hamburger: FC<HamburgerProps>;
export default Hamburger;
