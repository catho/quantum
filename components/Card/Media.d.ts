import { FC, HTMLAttributes } from 'react';

export interface MediaProps extends HTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
}

declare const Media: FC<MediaProps>;

export default Media;
