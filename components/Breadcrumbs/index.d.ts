
import { FC } from 'react';

export interface BreadcrumbsProps {
  items: Array<{
    label: string;
    url: string;
  }>;
  theme?: {
    colors: {},
    spacing: {},
    baseFontSize: number;
  };
}

declare const Breadcrumbs: FC<BreadcrumbsProps>;
export default Breadcrumbs;
    