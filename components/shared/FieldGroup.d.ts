import { FC, HTMLAttributes } from "react";

interface FieldGroupProps extends HTMLAttributes<HTMLDivElement>{
    skin: 'default' | string;
}

declare const FieldGroup: FC<FieldGroupProps>;
  
export default FieldGroup;