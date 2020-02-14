import React from 'react';

type Header = React.ComponentType<{
    theme?: { spacing?: object };
}> & {
    displayName: 'Card.Header';
};

export default Header;
