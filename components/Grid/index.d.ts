import { FC, HTMLAttributes, ReactNode } from 'react';
import Breakpoints from '../Breakpoints';

export type BreakpointsType = keyof typeof Breakpoints;

export interface ColProps extends HTMLAttributes<HTMLDivElement> {
    xsmall?: number;
    small?: number;
    medium?: number;
    large?: number;
    'xsmall-offset'?: number;
    'small-offset'?: number;
    'medium-offset'?: number;
    'large-offset'?: number;
}


export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    withBreakpoints?: boolean;
    fluid?: boolean;
    'no-gutters'?: boolean;
}


export interface HideProps extends HTMLAttributes<HTMLDivElement> {
    large?: boolean;
    medium?: boolean;
    small?: boolean;
    xsmall?: boolean;
}

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
    'no-gutters'?: boolean;
    children: ReactNode[] | ReactNode;
}

export const Row: FC<RowProps>;
export const Col: FC<ColProps>;
export const Hide: FC<HideProps>;
export const Container: FC<ContainerProps>;