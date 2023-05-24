import styled from 'styled-components';
import { Rect } from './Rect';

export const Button = styled(Rect)`
  border-radius: 4px;

  height: ${({ size, theme: { spacing } }) => {
    const sizes = {
      xsmall: spacing.large,
      small: spacing.xlarge,
      medium: spacing.xxlarge,
      large: spacing.xxxlarge,
    };

    return `${sizes[size] || sizes.medium}px`;
  }};
`;
