import { FC, HTMLAttributes } from 'react';

export interface ThumbnailProps extends HTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    rounded?: boolean;
    theme?: { colors?: object };
}

declare const Thumbnail: FC<ThumbnailProps>;

export default Thumbnail;
