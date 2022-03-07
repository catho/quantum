import { ReactNode, AnchorHTMLAttributes }  from 'react';

export interface Link extends AnchorHTMLAttributes<HTMLAnchorElement> {
  theme?: {
    colors?: {};
  };
  skin?: 'default' | 'dark';
  children?: ReactNode[] | ReactNode;
}