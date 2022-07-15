import styled from 'styled-components';

export default styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 40px;
  &.bordered {
    th,
    td {
      border: 1px solid #ccc;
    }
  }
  th,
  td {
    padding: 8px;
    text-align: left;
  }
  tr:nth-child(even) {
    background-color: #f6f8fa;
  }
`;
