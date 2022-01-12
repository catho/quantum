import React from 'react';

export interface AvatarProps {
    picture?: string;
    hasNotification?: boolean;
    text?: string;
    hasToggle?: boolean;
    href?: string;
    onClick?: () => {};
}

export default class Avatar extends React.Component<AvatarProps> { }
