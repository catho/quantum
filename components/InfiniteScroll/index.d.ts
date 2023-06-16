
// Generated with scripts/create-component.js
import { FC, ReactNode } from 'react';

export interface InfiniteScrollProps {
  children: ReactNode[] | ReactNode;
  reverse?: boolean;
  onScrollEnd?: () => void;
}

declare const InfiniteScroll: FC<InfiniteScrollProps>;
export default InfiniteScroll;
    