import { ComponentType } from 'react';

type Thumbnail = ComponentType<{
    src: string;
    alt: string;
    rounded?: boolean;
    theme?: { colors?: object };
}> & {
    displayName: 'Card.Thumbnail';
};

export default Thumbnail;
