import { FC } from 'react';
import { NonEmptyArray } from '../shared/types';

export interface SocialsProps {
    size?: string;
    theme?: {
        spacing?: {};
    };
    items: NonEmptyArray<{
        name?: 'facebook' | 'twitter' | 'youtube';
        url?: string;
        title?: string;
    }>;
    withBox?: boolean;
}

declare const Socials: FC<SocialsProps>;
export default Socials;
