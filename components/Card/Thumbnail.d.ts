import { FC } from 'react';

export interface ThumbnailProps {
    src: string;
    alt: string;
    rounded?: boolean;
    theme?: { colors?: object };
}

declare const Thumbnail: FC<ThumbnailProps> & {
    displayName: "Card.Thumbnail";
};

export default Thumbnail;
