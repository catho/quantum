import { ComponentType } from 'react';

type Content = ComponentType<{
    theme?: { baseFontSize?: number; spacing?: object };
}> & {
    displayName: 'Card.Content';
};

export default Content;
