import React from 'react';

export interface TabProps {
    title: string;
    badge?: React.ReactNode;
    icon?: React.ReactNode;
    children: React.ReactNode[] | React.ReactNode;
}

export class Tab extends React.Component<TabProps> { }

export interface TabbedViewProps {
    fluid?: boolean;
    children: React.ReactNode[] | React.ReactNode;
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
    onTabClick?: () => {};
}

export class TabbedView extends React.Component<TabbedViewProps> {
    static Tab: Tab;
}
