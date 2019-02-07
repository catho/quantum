import React from 'react';
import Highlight from 'react-highlight';
import styled from 'styled-components';
import {
  HowToImport,
  Title,
  Subtitle,
  Table,
} from '@catho-private/quantum-storybook-ui';

import Colors from '../../components/Colors';
import { Container, Row, Col, Hide } from '../../components/Grid';

const StyledRow = styled(Row)`
  margin-bottom: 10px;
`;

const StyledCol = styled(Col)`
  background-color: ${Colors.SECONDARY['100']};
  border: 1px solid ${Colors.SECONDARY['200']};
  font-size: 14px;
  padding-bottom: 10px;
  padding-top: 10px;
`;

const ViewportTable = () => (
  <Table>
    <thead>
      <tr>
        <th>Grid</th>
        <th>
          <a href="https://getbootstrap.com/docs/3.3/css/#grid">Bootstrap</a>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>phone</td>
        <td>xs</td>
      </tr>
      <tr>
        <td>tablet</td>
        <td>sm</td>
      </tr>
      <tr>
        <td>desktop</td>
        <td>md</td>
      </tr>
      <tr>
        <td>large</td>
        <td>lg</td>
      </tr>
      <tr>
        <td>hd</td>
        <td>xl</td>
      </tr>
    </tbody>
  </Table>
);

const SizesTable = () => (
  <Table>
    <tbody>
      <tr>
        <td colspan="1" rowspan="1">
          <p>Breakpoint Range (dp)</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>Portrait</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>Landscape</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>Window</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>Columns</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>Margins / Gutters*</p>
        </td>
      </tr>
      <tr>
        <td colspan="1" rowspan="1">
          <p>0 – 359</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>small handset</p>
        </td>
        <td colspan="1" rowspan="1" />
        <td colspan="1" rowspan="1">
          <p>xsmall</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>4</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>16</p>
        </td>
      </tr>
      <tr>
        <td colspan="1" rowspan="1">
          <p>360 – 399</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>medium handset</p>
        </td>
        <td colspan="1" rowspan="1" />
        <td colspan="1" rowspan="1">
          <p>xsmall</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>4</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>16</p>
        </td>
      </tr>
      <tr>
        <td colspan="1" rowspan="1">
          <p>400 – 479</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>large handset</p>
        </td>
        <td colspan="1" rowspan="1" />
        <td colspan="1" rowspan="1">
          <p>xsmall</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>4</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>16</p>
        </td>
      </tr>
      <tr>
        <td colspan="1" rowspan="1">
          <p>480 – 599</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>large handset</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>small handset</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>xsmall</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>4</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>16</p>
        </td>
      </tr>
      <tr>
        <td colspan="1" rowspan="1">
          <p>600 – 719</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>small tablet</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>medium handset</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>small</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>8</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>16</p>
        </td>
      </tr>
      <tr>
        <td colspan="1" rowspan="1">
          <p>720 – 839</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>large tablet</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>large handset</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>small</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>8</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>24</p>
        </td>
      </tr>
      <tr>
        <td colspan="1" rowspan="1">
          <p>840 – 959</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>large tablet</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>large handset</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>small</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>12</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>24</p>
        </td>
      </tr>
      <tr>
        <td colspan="1" rowspan="1">
          <p>960 – 1023</p>
        </td>
        <td colspan="1" rowspan="1" />
        <td colspan="1" rowspan="1">
          <p>small tablet</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>small</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>12</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>24</p>
        </td>
      </tr>
      <tr>
        <td colspan="1" rowspan="1">
          <p>1024 – 1279</p>
        </td>
        <td colspan="1" rowspan="1" />
        <td colspan="1" rowspan="1">
          <p>large tablet</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>medium</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>12</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>24</p>
        </td>
      </tr>
      <tr>
        <td colspan="1" rowspan="1">
          <p>1280 – 1439</p>
        </td>
        <td colspan="1" rowspan="1" />
        <td colspan="1" rowspan="1">
          <p>large tablet</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>medium</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>12</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>24</p>
        </td>
      </tr>
      <tr>
        <td colspan="1" rowspan="1">
          <p>1440 – 1599</p>
        </td>
        <td colspan="1" rowspan="1" />
        <td colspan="1" rowspan="1" />
        <td colspan="1" rowspan="1">
          <p>large</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>12</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>24</p>
        </td>
      </tr>
      <tr>
        <td colspan="1" rowspan="1">
          <p>1600 – 1919</p>
        </td>
        <td colspan="1" rowspan="1" />
        <td colspan="1" rowspan="1" />
        <td colspan="1" rowspan="1">
          <p>large</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>12</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>24</p>
        </td>
      </tr>
      <tr>
        <td colspan="1" rowspan="1">
          <p>1920 +</p>
        </td>
        <td colspan="1" rowspan="1" />
        <td colspan="1" rowspan="1" />
        <td colspan="1" rowspan="1">
          <p>xlarge</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>12</p>
        </td>
        <td colspan="1" rowspan="1">
          <p>24</p>
        </td>
      </tr>
    </tbody>
  </Table>
);

const HorizontalExample = () => (
  <React.Fragment>
    <Container fluid>
      <StyledRow>
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
      </StyledRow>

      <StyledRow>
        <StyledCol medium={8}>{'<Col medium={8}>'}</StyledCol>
        <StyledCol medium={4}>{'<Col medium={4}>'}</StyledCol>
      </StyledRow>

      <StyledRow>
        <StyledCol medium={4}>{'<Col medium={4}>'}</StyledCol>
        <StyledCol medium={4}>{'<Col medium={4}>'}</StyledCol>
        <StyledCol medium={4}>{'<Col medium={4}>'}</StyledCol>
      </StyledRow>

      <StyledRow>
        <StyledCol medium={6}>{'<Col medium={6}>'}</StyledCol>
        <StyledCol medium={6}>{'<Col medium={6}>'}</StyledCol>
      </StyledRow>
    </Container>

    <Highlight language="javascript" className="highlight">
      {`
  <Row>
    <Col medium={1}>...</Col>
    <Col medium={1}>...</Col>
    <Col medium={1}>...</Col>
    <Col medium={1}>...</Col>
    <Col medium={1}>...</Col>
    <Col medium={1}>...</Col>
    <Col medium={1}>...</Col>
    <Col medium={1}>...</Col>
    <Col medium={1}>...</Col>
    <Col medium={1}>...</Col>
    <Col medium={1}>...</Col>
    <Col medium={1}>...</Col>
  </Row>

  <Row>
    <Col medium={8}>...</Col>
    <Col medium={4}>...</Col>
  </Row>

  <Row>
    <Col medium={4}>...</Col>
    <Col medium={4}>...</Col>
    <Col medium={4}>...</Col>
  </Row>

  <Row>
    <Col medium={6}>...</Col>
    <Col medium={6}>...</Col>
  </Row>
`}
    </Highlight>
  </React.Fragment>
);

const MobileDesktopExample = () => (
  <React.Fragment>
    <Container fluid>
      <StyledRow>
        <StyledCol xsmall={4} small={8}>
          {'<Col xsmall={4} small={8}>'}
        </StyledCol>
        <StyledCol xsmall={4} small={4}>
          {'<Col xsmall={6} small={4}>'}
        </StyledCol>
      </StyledRow>

      <StyledRow>
        <StyledCol xsmall={4} small={4}>
          {'<Col xsmall={4} small={4}>'}
        </StyledCol>
        <StyledCol xsmall={4} small={4}>
          {'<Col xsmall={4} small={4}>'}
        </StyledCol>
        <StyledCol xsmall={4} small={4}>
          {'<Col xsmall={4} small={4}>'}
        </StyledCol>
      </StyledRow>

      <StyledRow>
        <StyledCol xsmall={4}>{'<Col xsmall={4}>'}</StyledCol>
        <StyledCol xsmall={4}>{'<Col xsmall={4}>'}</StyledCol>
      </StyledRow>
    </Container>

    <Highlight language="javascript" className="highlight">
      {`
  <Row>
    <Col xsmall={12} medium={8}>...</Col>
    <Col xsmall={6} medium={4}>...</Col>
  </Row>

  <Row>
    <Col xsmall={6} medium={4}>...</Col>
    <Col xsmall={6} medium={4}>...</Col>
    <Col xsmall={6} medium={4}>...</Col>
  </Row>

  <Row>
    <Col xsmall={6}>...</Col>
    <Col xsmall={6}>...</Col>
  </Row>
  `}
    </Highlight>
  </React.Fragment>
);

const HideExample = () => (
  <React.Fragment>
    <Container fluid>
      <Hide small>
        <StyledRow>
          <StyledCol xsmall={12} medium={8}>
            ...
          </StyledCol>
          <StyledCol xsmall={6} medium={4}>
            ...
          </StyledCol>
        </StyledRow>
      </Hide>
    </Container>

    <Highlight language="javascript" className="highlight">
      {`
  <Hide xsmall>
    <Row>
      <Col>...</Col>
      <Col>...</Col>
    </Row>
  </Hide>
  `}
    </Highlight>
  </React.Fragment>
);

const GreyCol = styled(Col)`
  background-color: #ccc;
  border: 1px solid #000;
`;

const Grid = () => (
  <React.Fragment>
    <p>
      This Grid is based on{' '}
      <a href="https://material.io/design/layout/responsive-layout-grid.html">
        Material Design Grid definition
      </a>
      It is adaptable to screen size and orientation and has columns definitions
      to each resolution.
    </p>
    <HowToImport importModules="Container, Row, Col, Hide" />

    <Title>How it works</Title>
    <Subtitle>Containers</Subtitle>
    <p>
      You may choose one of two containers or both to use in your projects. Note
      that, due to padding and more, neither container is nestable.
    </p>
    <p>
      Use <code>{'<Container></Container>'}</code> for a responsive fixed width
      container.
    </p>
    <Highlight language="javascript" className="highlight">
      {`
  <Container>
    ...
  </Container>
`}
    </Highlight>
    <p>
      Use <code>{'<Container fluid></Container>'}</code> for a full width
      container, spanning the entire width of your viewport.
    </p>
    <Highlight language="javascript" className="highlight">
      {`
<Container fluid>
...
</Container>
`}
    </Highlight>
    <Subtitle>Row</Subtitle>
    <p>
      Rows are wrappers for columns. Each column has horizontal{' '}
      <code>padding</code>
      (called a gutter) for controlling the space between them. This padding is
      then counteracted on the rows with negative margins. This way, all the
      content in your columns is visually aligned down the left side.
    </p>
    <Subtitle>No Gutters</Subtitle>
    <p>
      The gutters between columns in our predefined grid styles can be removed
      with no-gutters prop <code>{'<Row no-gutters>'}</code>. This removes the
      negative margins from <code>{'<Col>'}</code> and the horizontal padding
      from all immediate children columns.
    </p>
    <Subtitle>Breakpoints</Subtitle>
    <p>
      Material Design provides responsive layouts based on the following column
      structures. Layouts using 4-column, 8-column, and 12-column grids are
      available for use across different screens, devices, and orientations.
    </p>
    <p>
      Each breakpoint range determines the number of columns, and recommended
      margins and gutters, for each display size.
    </p>
    <SizesTable />
    <Subtitle>Example: Stacked-to-horizontal</Subtitle>
    <p>
      You can create a basic grid system that starts out stacked on mobile
      devices and tablet devices before becoming horizontal on desktop devices.
      Place grid columns in any <code>{'<Row>'}</code>
    </p>
    <HorizontalExample />
    <Subtitle>Example: Mobile and desktop</Subtitle>
    <p>
      Don’t want your columns to simply stack in smaller devices? Use the phone
      and tablet device grid props by adding <code>{'phone={*}'}</code>
      <code>{'tablet={*}'}</code> to your columns. See the example below for a
      better idea of how it all works.
    </p>
    <MobileDesktopExample />
    <Subtitle>Hide Component</Subtitle>
    <p>
      If you need to hide some elements in your UI, you can use the
      <code>{'<Hide>'}</code> component.
    </p>
    <p>
      <code>{'<Hide>'}</code> receives the same props as the
      <code>{'<Col>'}</code> component, they are:
    </p>
    <ul>
      <li>phone</li>
      <li>tablet</li>
      <li>desktop</li>
      <li>large</li>
      <li>hd</li>
    </ul>
    <Subtitle>Example: Hiding elements in phone devices</Subtitle>
    <HideExample />
    <Row>
      <GreyCol medium={3}>
        <Hide small medium large xlarge>
          xsmall
        </Hide>
        <Hide xsmall medium large xlarge>
          small
        </Hide>
        <Hide xsmall small large xlarge>
          medium
        </Hide>
        <Hide xsmall small medium xlarge>
          large
        </Hide>
        <Hide xsmall small medium large>
          xlarge
        </Hide>
      </GreyCol>
      <GreyCol medium={9}>
        <Container fluid>
          <Row>
            <GreyCol xsmall={2} medium={6}>
              ø
            </GreyCol>
            <GreyCol xsmall={2} medium={6}>
              ø
            </GreyCol>
            <GreyCol xsmall={2} medium={6}>
              ø
            </GreyCol>
            <GreyCol xsmall={2} medium={6}>
              ø
            </GreyCol>
            <GreyCol xsmall={2} medium={6}>
              ø
            </GreyCol>
            <GreyCol xsmall={2} medium={6}>
              ø
            </GreyCol>
            <GreyCol xsmall={2} medium={6}>
              ø
            </GreyCol>
            <GreyCol xsmall={2} medium={6}>
              ø
            </GreyCol>
            <GreyCol xsmall={2} medium={6}>
              ø
            </GreyCol>
            <GreyCol xsmall={2} medium={6}>
              ø
            </GreyCol>
            <GreyCol xsmall={2} medium={6}>
              ø
            </GreyCol>
            <GreyCol xsmall={2} medium={6}>
              ø
            </GreyCol>
          </Row>
        </Container>
      </GreyCol>
    </Row>
  </React.Fragment>
);

export default Grid;
