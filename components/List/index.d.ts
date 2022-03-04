import { Component, ReactElement } from 'react';
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
  items: string[] | ListItem[];
  ordered?: boolean;
  inline?: boolean;
  divided?: boolean;
  bullet?: boolean;
  children?: ReactElement | ReactElement[];
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
  children?: ReactElement | ReactElement[];
  theme?: {
    spacing?: {};
    baseFontSize?: number;
  }
}

interface Header {
  theme?: {
    spacing?: {};
  };
}

interface SubHeader {
  children?: ReactElement | ReactElement[];
  theme?: {
    baseFontSize?: number;
  }
}

interface Item {
  content?: ItemContent;
  icon?: IconNames | string;
  bullet?: string;
  children?: ReactElement | ReactElement[];
  theme?: {
    spacing?: {};
    baseFontSize?: number;
  }
}

export default class List extends Component<ListProps> {
  static Header: Header;
  
  static SubHeader: SubHeader;
  
  static Content: Content;

  static Item: Item;
}