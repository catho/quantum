import { FC } from 'react';

export interface AvatarProps {
    picture?: string;
    hasNotification?: boolean;
    text?: string;
    hasToggle?: boolean;
    href?: string;
    onClick?: () => void;
}

declare const Avatar: FC<AvatarProps>;
export default Avatar;