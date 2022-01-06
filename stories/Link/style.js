import styled from 'styled-components';

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
  background-color: #1250c4;
`;

export { DefaultDiv, DarkDiv };
