import { FC } from 'react';

export interface SkeletonButtonProps {
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  theme?: {
    spacing?: {};
  };
}

export interface SkeletonProps {
  type?: 'rect' | 'circle' | 'text' | 'button' | 'tag';
  as?: 'div' | 'span';
  width?: string;
  height?: string;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  theme?: {
    spacing?: {};
    baseFontSize?: number;
  };
}
export interface SkeletonTagProps {
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  theme?: {
    spacing?: {};
    baseFontSize?: number;
  };
}

declare const SkeletonText: FC<SkeletonProps>;
declare const SkeletonButton: FC<SkeletonButtonProps>;
declare const SkeletonTag: FC<SkeletonTagProps>;
declare const SkeletonCircle: FC;

declare const Skeleton: FC<SkeletonProps> & {
  Button: typeof SkeletonButton;
  Circle: typeof SkeletonCircle;
  Text: typeof SkeletonText;
  Tag: typeof SkeletonTag;
}

export { SkeletonText, SkeletonButton, SkeletonTag, SkeletonCircle};
export default Skeleton;
