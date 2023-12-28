import { FC, ReactNode } from 'react';
import { baseFontSizeType, breakpointsProps, componentsProps, spacingProps } from '../shared/theme';

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
            tabbedView?: componentsProps["tabbedView"];
        };
        baseFontSize?: baseFontSizeType;
        breakpoints?: breakpointsProps;
        spacing?: spacingProps;
    };
    onTabClick?: (tab: string) => void;
}

declare const Tab: FC<TabProps>;
declare const TabbedView: FC<TabbedViewProps> & {
    Tab: typeof Tab;
}

export { TabbedView, Tab};
export default TabbedView;