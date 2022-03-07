import { Component } from 'react';

export type NonEmptyArray<T> = [T, ...T[]];

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

export default class Socials extends Component<SocialsProps> {}
