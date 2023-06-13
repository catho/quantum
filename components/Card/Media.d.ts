import { FC, HTMLAttributes } from 'react';

export interface MediaProps extends HTMLAttributes<HTMLImageElement> {
    theme?: { colors?: {}; spacing?: {} };
}

declare const Media: FC<MediaProps> & {
    displayName: "Card.Media";
};

export default Media;
