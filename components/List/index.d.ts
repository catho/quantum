import { FC, ReactNode } from 'react';
import { IconNames } from '../Icon';

interface ItemContent {
  header?: string;
  subheader?: string;
}

interface ListItem {
  icon?: IconNames | string;
  content?: ItemContent;
}

export interface ListProps {
  items?: string[] | ListItem[];
  ordered?: boolean;
  inline?: boolean;
  divided?: boolean;
  bullet?: boolean;
  children?: ReactNode | ReactNode[];
  theme?: {
    colors?: {};
    spacing?: {};
    baseFontSize?: number;
  };
}

interface Content {
  header?: string;
  subheader?: string;
  content?: ItemContent,
  children?: ReactNode | ReactNode[];
  theme?: {
    spacing?: {};
    baseFontSize?: number;
  }
}

interface Header {
  children?: ReactNode | ReactNode[];
  theme?: {
    spacing?: {};
  };
}

interface SubHeader {
  children?: ReactNode | ReactNode[];
  theme?: {
    baseFontSize?: number;
  }
}

interface Item {
  content?: ItemContent;
  icon?: IconNames | string;
  bullet?: string;
  children?: ReactNode | ReactNode[];
  theme?: {
    spacing?: {};
    baseFontSize?: number;
  }
}

declare const List: FC<ListProps> & {
  Header: FC<Header>;
  SubHeader: FC<SubHeader>;
  Content: FC<Content>;
  Item: FC<Item>;
}

export default List;