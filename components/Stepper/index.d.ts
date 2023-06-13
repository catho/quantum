import { FC } from 'react';

export interface StepperProps {
    total?: number;
    index?: number;
    skin?: 'primary' | 'secondary' | 'success';
    currentStepText?: string;
    nextStepText?: string;
    theme?: {
        colors?: {};
        baseFontSize?: number;
        spacing?: {};
    };
    i18n?: {
      paginationPreposition: string;
      nextWord: string;
    }
}

declare const Stepper: FC<StepperProps>;
export default Stepper;
