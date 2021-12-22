import styled, { css } from 'styled-components';

export default styled.div`
  position: relative;
  margin-bottom: 20px;
  min-width: 250px;
  width: 100%;

  ${({
    theme: {
      colors: { neutral },
    },
    skin = 'default',
  }) => css`
    color: ${skin === 'default' ? neutral[700] : neutral[0]};
  `}
`;
