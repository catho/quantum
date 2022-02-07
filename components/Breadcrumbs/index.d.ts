
import React from 'react';

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

export default class Breadcrumbs extends React.Component<BreadcrumbsProps> {}
    