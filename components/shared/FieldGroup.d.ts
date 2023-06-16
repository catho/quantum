import { FC, HTMLAttributes } from "react";

interface FieldGroupProps extends HTMLAttributes<HTMLDivElement>{
    theme?: {
      colors?: object;
    }
    skin: 'default' | string;
}

declare const FieldGroup: FC<FieldGroupProps>;
  
export default FieldGroup;