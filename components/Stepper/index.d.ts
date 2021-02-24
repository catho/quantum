import React from 'react';

export interface StepperProps {
    total?: number;
    index?: number;
    skin?: 'primary' | 'secondary' | 'success';
    currentStepText?: string;
    nextStepText?: string;
    theme?: {
        colors?: object;
        baseFontSize?: number;
        spacing?: object;
    };
    i18n?: {
      paginationPreposition: string;
      nextWord: string;
    }
}

declare const Stepper: React.FC<StepperProps>;
