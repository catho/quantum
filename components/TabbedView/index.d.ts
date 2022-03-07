import { Component, ReactNode } from 'react';

export interface TabProps {
    title: string;
    badge?: ReactNode;
    icon?: ReactNode;
    children: ReactNode[] | ReactNode;
}

export class Tab extends Component<TabProps> { }

export interface TabbedViewProps {
    fluid?: boolean;
    children: ReactNode[] | ReactNode;
    activeTab?: string;
    skin?: 'neutral' | 'primary';
    theme?: {
        components?: {
            tabbedView?: {};
        };
        baseFontSize?: number;
        breakpoints?: {};
        spacing?: {};
    };
    onTabClick?: () => void;
}

export class TabbedView extends Component<TabbedViewProps> {
    static Tab: Tab;
}
