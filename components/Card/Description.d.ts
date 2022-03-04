import { ComponentType } from 'react';

type Description = ComponentType<{
    small?: boolean;
    theme?: { baseFontSize?: number; spacing?: object };
}> & {
    displayName: 'Card.Description';
};

export default Description;
