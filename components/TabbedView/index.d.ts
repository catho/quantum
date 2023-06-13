import { FC, ReactNode } from 'react';

export interface TabProps {
    title: string;
    badge?: ReactNode;
    icon?: ReactNode;
    children: ReactNode[] | ReactNode;
}


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

declare const Tab: FC<TabProps>;
declare const TabbedView: FC<TabbedViewProps> & {
    Tab: typeof Tab;
}

export default TabbedView;