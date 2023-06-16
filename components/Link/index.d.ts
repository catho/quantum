import { ReactNode, AnchorHTMLAttributes, FC }  from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  theme?: {
    colors?: {};
  };
  skin?: 'default' | 'dark';
  children?: ReactNode[] | ReactNode;
}

declare const Link: FC<LinkProps>;
export default Link