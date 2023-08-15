
// Generated with scripts/create-component.js
import { FC } from 'react';

export interface ScoreProps {
  percentage: number;
  text: string;
  round: boolean;
  skin: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
  theme?: { baseFontSize?: number; colors?: object };
}

declare const Score: FC<ScoreProps>;
export default Score;
    