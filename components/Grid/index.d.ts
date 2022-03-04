import { Component, ReactNode } from 'react';
import Breakpoints from '../Breakpoints';

export type BreakpointsType = keyof typeof Breakpoints;

export interface ColProps {
    'no-gutters'?: boolean;
    xsmall?: number;
    small?: number;
    medium?: number;
    large?: number;
    'xsmall-offset'?: number;
    'small-offset'?: number;
    'medium-offset'?: number;
    'large-offset'?: number;
    hide?: BreakpointsType | BreakpointsType[];
}

export class Col extends Component<ColProps> {}

export interface ContainerProps {
    withBreakpoints?: boolean;
    fluid?: boolean;
    hide?: BreakpointsType | string[];
    theme?: {
        breakpoints?: {};
        components?: {};
    };
    'no-gutters'?: boolean;
}

export class Container extends Component<ContainerProps> {}

export interface HideProps {
    large?: boolean;
    medium?: boolean;
    small?: boolean;
    xsmall?: boolean;
    theme?: {
        breakpoints: {};
    };
}

export class Hide extends Component<HideProps> {}

export interface RowProps {
    'no-gutters'?: boolean;
    children: ReactNode[] | ReactNode;
    hide?: BreakpointsType | BreakpointsType[];
    theme?: {
        breakpoints?: {};
    };
}

export class Row extends Component<RowProps> {}
