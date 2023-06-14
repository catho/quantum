import {FC, HTMLAttributes } from "react";

interface ErrorMessageProps extends HTMLAttributes<HTMLSpanElement>{
    theme?: {
      spacing?: object;
      colors?: object;
    }
}

declare const ErrorMessage: FC<ErrorMessageProps>;
  
export default ErrorMessage;