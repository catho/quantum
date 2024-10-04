import {FC, HTMLAttributes } from "react";

interface ErrorMessageProps extends HTMLAttributes<HTMLSpanElement>{}

declare const ErrorMessage: FC<ErrorMessageProps>;
  
export default ErrorMessage;