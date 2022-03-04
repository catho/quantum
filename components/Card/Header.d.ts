import { ComponentType } from 'react';

type Header = ComponentType<{
    theme?: { spacing?: object };
}> & {
    displayName: 'Card.Header';
};

export default Header;
