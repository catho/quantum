import styled from 'styled-components';

import { Row, Col, Hide } from '../../components/Grid';
import Table from '../shared/Table';

const StyledCol = styled(Col)`
  background-color: #f6f8fa;
  padding: 8px;
  font-size: 14px;
`;

const tableHeadRow = {
  breakpointRange: 'Breakpoint Range (dp)',
  portrait: 'Portrait',
  landscape: 'Landscape',
  window: 'Window',
  columns: 'Columns',
  marginsAndGutters: 'Margins / Gutters',
};

const tableBodyRows = [
  {
    breakpointRange: '0 – 359',
    portrait: 'small handset',
    landscape: '',
    window: 'xsmall',
    columns: '4',
    marginsAndGutters: '16',
  },
  {
    breakpointRange: '360 – 399',
    portrait: 'medium handset',
    landscape: '',
    window: 'xsmall',
    columns: '4',
    marginsAndGutters: '16',
  },
  {
    breakpointRange: '400 – 479',
    portrait: 'large handset',
    landscape: '',
    window: 'xsmall',
    columns: '4',
    marginsAndGutters: '16',
  },
  {
    breakpointRange: '480 – 599',
    portrait: 'large handset',
    landscape: 'small handset',
    window: 'xsmall',
    columns: '4',
    marginsAndGutters: '16',
  },
  {
    breakpointRange: '600 – 719',
    portrait: 'small tablet',
    landscape: 'medium handset',
    window: 'small',
    columns: '8',
    marginsAndGutters: '24',
  },
  {
    breakpointRange: '720 – 839',
    portrait: 'large tablet',
    landscape: 'large handset',
    window: 'small',
    columns: '8',
    marginsAndGutters: '24',
  },
  {
    breakpointRange: '840 – 959',
    portrait: 'large tablet',
    landscape: 'large handset',
    window: 'small',
    columns: '8',
    marginsAndGutters: '24',
  },
  {
    breakpointRange: '960 – 1023',
    portrait: '',
    landscape: 'small tablet',
    window: 'small',
    columns: '8',
    marginsAndGutters: '24',
  },
  {
    breakpointRange: '1024 – 1279',
    portrait: '',
    landscape: 'large tablet',
    window: 'medium',
    columns: '12',
    marginsAndGutters: '24',
  },
  {
    breakpointRange: '1280 – 1439',
    portrait: '',
    landscape: 'large tablet',
    window: 'medium',
    columns: '12',
    marginsAndGutters: '24',
  },
  {
    breakpointRange: '1440 +',
    portrait: '',
    landscape: '',
    window: 'large',
    columns: '12',
    marginsAndGutters: '24',
  },
];

export const SizesTable = () => (
  <Table>
    <thead>
      <tr>
        {Object.keys(tableHeadRow).map((key) => (
          <td>{tableHeadRow[key]}</td>
        ))}
      </tr>
    </thead>
    <tbody>
      {tableBodyRows.map((row) => (
        <tr>
          {Object.keys(row).map((key) => (
            <td>{row[key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </Table>
);

export const HorizontalExample = () => (
  <>
    <Row>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
    </Row>

    <Row>
      <StyledCol medium={8}>{'<Col medium={8}>'}</StyledCol>
      <StyledCol medium={4}>{'<Col medium={4}>'}</StyledCol>
    </Row>

    <Row>
      <StyledCol medium={4}>{'<Col medium={4}>'}</StyledCol>
      <StyledCol medium={4}>{'<Col medium={4}>'}</StyledCol>
      <StyledCol medium={4}>{'<Col medium={4}>'}</StyledCol>
    </Row>

    <Row>
      <StyledCol medium={6}>{'<Col medium={6}>'}</StyledCol>
      <StyledCol medium={6}>{'<Col medium={6}>'}</StyledCol>
    </Row>
  </>
);

export const MobileDesktopExample = () => (
  <>
    <Row>
      <StyledCol xsmall={2} small={8}>
        {'<Col xsmall={2} small={8}>'}
      </StyledCol>
      <StyledCol xsmall={2} small={4}>
        {'<Col xsmall={2} small={4}>'}
      </StyledCol>
    </Row>

    <Row>
      <StyledCol xsmall={4} small={4}>
        {'<Col xsmall={4} small={4}>'}
      </StyledCol>
      <StyledCol xsmall={4} small={4}>
        {'<Col xsmall={4} small={4}>'}
      </StyledCol>
      <StyledCol xsmall={4} small={4}>
        {'<Col xsmall={4} small={4}>'}
      </StyledCol>
    </Row>

    <Row>
      <StyledCol xsmall={2}>{'<Col xsmall={2}>'}</StyledCol>
      <StyledCol xsmall={2}>{'<Col xsmall={2}>'}</StyledCol>
    </Row>
  </>
);

export const HideExample = () => (
  <Hide xsmall>
    <Row>
      <StyledCol xsmall={2} small={4} medium={6}>
        ...
      </StyledCol>
      <StyledCol xsmall={2} small={4} medium={6}>
        ...
      </StyledCol>
    </Row>
  </Hide>
);

export const NoGuttersExample = () => (
  <Row no-gutters>
    <StyledCol medium={6}>medium={6}</StyledCol>
    <StyledCol medium={6}>medium={6}</StyledCol>
  </Row>
);

export const OffsetExample = () => (
  <Row>
    <StyledCol small={2} small-offset={2}>
      small={2} small-offset={2}
    </StyledCol>
    <StyledCol small={2}>small={2}</StyledCol>
    <StyledCol small={2}>small={2}</StyledCol>
    <StyledCol small={2}>small={2}</StyledCol>
    <StyledCol small={2}>small={2}</StyledCol>
  </Row>
);

export const OffsetWithTwoColumnsExample = () => (
  <Row>
    <StyledCol small={2} small-offset={1}>
      small={2} small-offset={1}
    </StyledCol>
    <StyledCol small={2} small-offset={5}>
      small={2} small-offset={5}
    </StyledCol>
  </Row>
);

export default {
  SizesTable,
  HorizontalExample,
  MobileDesktopExample,
  HideExample,
  NoGuttersExample,
  OffsetExample,
  OffsetWithTwoColumnsExample,
};
