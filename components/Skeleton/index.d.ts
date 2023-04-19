import { Component, ComponentType } from 'react';

export interface SkeletonButtonProps {
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  theme?: {
    spacing?: {};
  };
}

export type SkeletonButton = ComponentType<SkeletonButtonProps>;

export type SkeletonCircle = ComponentType;
export interface SkeletonTagProps {
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  theme?: {
    spacing?: {};
    baseFontSize?: number;
  };
}

export type SkeletonTag = ComponentType<SkeletonTagProps>;

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

export type SkeletonText = ComponentType<SkeletonProps>;

export default class Skeleton extends Component<SkeletonProps> {
  static Button: SkeletonButton;

  static Circle: SkeletonCircle;

  static Text: SkeletonText;

  static Tag: SkeletonTag;
}
