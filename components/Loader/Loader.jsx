import styled from 'styled-components';
import { CircularLoader } from '@catho/quantum';
import { theme, hexToRgba } from '@catho/quantum/shared';

const {
  colors: { neutral },
  spacing: { small },
} = theme;

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  padding: ${small}px 0;

  background-color: ${hexToRgba(neutral[300], 0.25)};
`;

const Loader = () => (
  <LoaderWrapper aria-live="polite" aria-busy="true">
    <CircularLoader skin="primary" size="large" />
  </LoaderWrapper>
);

export default Loader;
