import React from 'react';

type Title = React.ComponentType<{
    small?: boolean;
    theme?: { baseFontSize?: object };
}> & {
    displayName: 'Card.Title';
};

export default Title;
