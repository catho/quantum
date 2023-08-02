
// Generated with scripts/create-component.js
import { FC } from 'react';

export interface RingGraphProps {
  percentage: number;
  round: boolean;
  skin: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
  theme?: { baseFontSize?: number; colors?: object };
}

declare const RingGraph: FC<RingGraphProps>;
export default RingGraph;
    