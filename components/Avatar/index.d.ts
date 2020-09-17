import React from 'react';

export interface AvatarProps {
    picture?: string;
    size?: string;
    hasNotification?: boolean;
}

export default class Avatar extends React.Component<AvatarProps> { }
