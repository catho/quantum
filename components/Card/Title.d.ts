import { ComponentType } from 'react';

type Title = ComponentType<{
    small?: boolean;
    theme?: { baseFontSize?: object };
}> & {
    displayName: 'Card.Title';
};

export default Title;
