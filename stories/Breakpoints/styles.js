import styled from 'styled-components';
import { BREAKPOINTS } from '../../components/shared';
import { query } from '../../components/Grid/sub-components/shared';

const mediaQueries = query(BREAKPOINTS);

export const StyledDivExample = styled.div`
  padding: 15px 20px;
  color: white;
  background-color: red;

  ${mediaQueries.small`
    background-color: blue;
  `}

  ${mediaQueries.medium`
    background-color: green;
  `}

  ${mediaQueries.large`
    background-color: black;
  `}
`;
