import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`;

export const Rect = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  animation: ${fadeInOut} 1.5s ease-in-out infinite;
  display: inline-block;
  box-sizing: border-box;
  ${({ width }) => `width: ${width};`};
  ${({ height }) => `height: ${height};`};
`;
