import styled from 'styled-components';
import { Rect } from './Rect';

export const Tag = styled(Rect)`
  border-radius: 8px;
  margin-right: 8px;

  height: ${({ size, theme: { baseFontSize, spacing } }) => {
    const sizes = {
      small: baseFontSize * 0.875,
      medium: baseFontSize * 1.125,
      large: baseFontSize * 1.25,
    };

    return `${(sizes[size] || sizes.medium) + spacing.xxsmall * 2}px`;
  }};
`;
