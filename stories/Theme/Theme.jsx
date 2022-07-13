import styled from 'styled-components';

import { Table } from '../shared';
import { colors, spacing } from '../../components/shared/theme';

const ColorSquare = styled.span`
  padding-left: 24px;
  position: relative;

  &:before {
    background-color: ${({ children }) => children};
    border-radius: 4px;
    border: 1px solid #ccc;
    content: '';
    display: block;
    height: 16px;
    margin-right: 8px;
    position: absolute;
    top: 2px;
    width: 16px;
  }
`;

export const BreakpointsProperties = () => (
  <Table>
    <tbody>
      <tr>
        <th>width</th>
        <td>responsive behavior starts from this</td>
      </tr>
      <tr>
        <th>columns</th>
        <td>define how many columns the respective breakpoint will have</td>
      </tr>
    </tbody>
  </Table>
);

export const ColorIntensity = () => (
  <Table>
    <thead>
      <tr>
        <th style={{ width: 100 }}>Intensity</th>
        <th>Color</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(colors.primary).map(([intensity, value]) => (
        <tr>
          <td>{intensity}</td>
          <td>
            <ColorSquare>{value}</ColorSquare>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export const SpacingValues = () => (
  <Table>
    <caption style={{ captionSide: 'bottom', fontSize: 'small', padding: 8 }}>
      All values are calculated using the gutter as a base value. If you change
      it&apos;s value, the spacing object will be affected.
    </caption>
    <thead>
      <th style={{ width: 100 }}>name</th>
      <th>value</th>
    </thead>
    <tbody>
      {Object.entries(spacing).map(([name, size]) => (
        <tr>
          <td>{name}</td>
          <td>{size}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);
