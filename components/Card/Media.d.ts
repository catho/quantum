import React from 'react';

type Media = React.ComponentType<{
    className?: string;
    style?: {};
    theme?: { colors?: {}; spacing?: object };
}> & {
    displayName: 'Card.Media';
};

export default Media;
