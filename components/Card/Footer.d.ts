import { ComponentType } from 'react';

type Footer = ComponentType<{
    theme?: { spacing?: object };
}> & {
    displayName: 'Card.Footer';
};

export default Footer;
