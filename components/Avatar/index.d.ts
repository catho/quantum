import { Component } from 'react';

export interface AvatarProps {
    picture?: string;
    hasNotification?: boolean;
    text?: string;
    hasToggle?: boolean;
    href?: string;
    onClick?: () => void;
}

export default class Avatar extends Component<AvatarProps> { }
