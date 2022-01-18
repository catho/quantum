import styled from 'styled-components';
import { colors } from '../../components/shared/theme';

const DefaultDiv = styled.div`
  width: 150px;
  height: 50px;
  display: inline-block;
  margin-top: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const DarkDiv = styled(DefaultDiv)`
  background-color: ${colors.primary[700]};
`;

export { DefaultDiv, DarkDiv };
