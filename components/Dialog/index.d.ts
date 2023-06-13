import { FC, ReactNode } from 'react';

export interface DialogProps {
  children: ReactNode[] | ReactNode;
  theme?: {
    colors?: {};
  };
  onClose?: () => void;
  onClickOutside?: () => void;
  disableClickOutside?: boolean;
  closeOnTime?: number;
}

declare const Dialog: FC<DialogProps>;
export default Dialog;
