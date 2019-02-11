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
import { Row, Col, Hide } from '../../components/Grid';

const StyledCol = styled(Col)`
  background-color: ${Colors.SECONDARY['100']};
  border: 1px solid ${Colors.SECONDARY['200']};
  padding: 8px;
  font-size: 14px;
`;

const SizesTable = () => (
  <Table>
    <tbody>
      <tr>
        <td colSpan="1" rowSpan="1">
          <p>Breakpoint Range (dp)</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>Portrait</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>Landscape</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>Window</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>Columns</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>Margins / Gutters</p>
        </td>
      </tr>
      <tr>
        <td colSpan="1" rowSpan="1">
          <p>0 – 359</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>small handset</p>
        </td>
        <td colSpan="1" rowSpan="1" />
        <td colSpan="1" rowSpan="1">
          <p>xsmall</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>4</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>16</p>
        </td>
      </tr>
      <tr>
        <td colSpan="1" rowSpan="1">
          <p>360 – 399</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>medium handset</p>
        </td>
        <td colSpan="1" rowSpan="1" />
        <td colSpan="1" rowSpan="1">
          <p>xsmall</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>4</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>16</p>
        </td>
      </tr>
      <tr>
        <td colSpan="1" rowSpan="1">
          <p>400 – 479</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>large handset</p>
        </td>
        <td colSpan="1" rowSpan="1" />
        <td colSpan="1" rowSpan="1">
          <p>xsmall</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>4</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>16</p>
        </td>
      </tr>
      <tr>
        <td colSpan="1" rowSpan="1">
          <p>480 – 599</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>large handset</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>small handset</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>xsmall</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>4</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>16</p>
        </td>
      </tr>
      <tr>
        <td colSpan="1" rowSpan="1">
          <p>600 – 719</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>small tablet</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>medium handset</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>small</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>8</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>24</p>
        </td>
      </tr>
      <tr>
        <td colSpan="1" rowSpan="1">
          <p>720 – 839</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>large tablet</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>large handset</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>small</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>8</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>24</p>
        </td>
      </tr>
      <tr>
        <td colSpan="1" rowSpan="1">
          <p>840 – 959</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>large tablet</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>large handset</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>small</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>8</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>24</p>
        </td>
      </tr>
      <tr>
        <td colSpan="1" rowSpan="1">
          <p>960 – 1023</p>
        </td>
        <td colSpan="1" rowSpan="1" />
        <td colSpan="1" rowSpan="1">
          <p>small tablet</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>small</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>8</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>24</p>
        </td>
      </tr>
      <tr>
        <td colSpan="1" rowSpan="1">
          <p>1024 – 1279</p>
        </td>
        <td colSpan="1" rowSpan="1" />
        <td colSpan="1" rowSpan="1">
          <p>large tablet</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>medium</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>12</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>24</p>
        </td>
      </tr>
      <tr>
        <td colSpan="1" rowSpan="1">
          <p>1280 – 1439</p>
        </td>
        <td colSpan="1" rowSpan="1" />
        <td colSpan="1" rowSpan="1">
          <p>large tablet</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>medium</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>12</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>24</p>
        </td>
      </tr>
      <tr>
        <td colSpan="1" rowSpan="1">
          <p>1440 – 1599</p>
        </td>
        <td colSpan="1" rowSpan="1" />
        <td colSpan="1" rowSpan="1" />
        <td colSpan="1" rowSpan="1">
          <p>large</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>12</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>24</p>
        </td>
      </tr>
      <tr>
        <td colSpan="1" rowSpan="1">
          <p>1600 – 1919</p>
        </td>
        <td colSpan="1" rowSpan="1" />
        <td colSpan="1" rowSpan="1" />
        <td colSpan="1" rowSpan="1">
          <p>large</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>12</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>24</p>
        </td>
      </tr>
      <tr>
        <td colSpan="1" rowSpan="1">
          <p>1920 +</p>
        </td>
        <td colSpan="1" rowSpan="1" />
        <td colSpan="1" rowSpan="1" />
        <td colSpan="1" rowSpan="1">
          <p>xlarge</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>12</p>
        </td>
        <td colSpan="1" rowSpan="1">
          <p>24</p>
        </td>
      </tr>
    </tbody>
  </Table>
);

const HorizontalExample = () => (
  <React.Fragment>
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

    <Highlight language="javascript" className="highlight">
      {`<Row>
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

    <Highlight language="javascript" className="highlight">
      {`<Row>
    <Col xsmall={2} small={8}>...</Col>
    <Col xsmall={2} small={4}>...</Col>
  </Row>

  <Row>
    <Col xsmall={4} small={4}>...</Col>
    <Col xsmall={4} small={4}>...</Col>
    <Col xsmall={4} small={4}>...</Col>
  </Row>

  <Row>
    <Col xsmall={2}>...</Col>
    <Col xsmall={2}>...</Col>
  </Row>
  `}
    </Highlight>
  </React.Fragment>
);

const HideExample = () => (
  <React.Fragment>
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

    <Highlight language="javascript" className="highlight">
      {`<Hide xsmall>
    <Row>
      <Col>...</Col>
      <Col>...</Col>
    </Row>
  </Hide>
  `}
    </Highlight>
  </React.Fragment>
);

const NoGuttersExample = () => (
  <>
    <Row no-gutters>
      <StyledCol medium={6}>medium={6}</StyledCol>
      <StyledCol medium={6}>medium={6}</StyledCol>
    </Row>

    <Highlight language="javascript" className="highlight">
      {`<Row no-gutters>
  <StyledCol medium={6}>medium={6}</StyledCol>
  <StyledCol medium={6}>medium={6}</StyledCol>
</Row>`}
    </Highlight>
  </>
);

const OffsetExample = () => (
  <>
    <Row>
      <StyledCol small={2} small-offset={2}>
        small={2} small-offset={2}
      </StyledCol>
      <StyledCol small={2}>small={2}</StyledCol>
      <StyledCol small={2}>small={2}</StyledCol>
      <StyledCol small={2}>small={2}</StyledCol>
      <StyledCol small={2}>small={2}</StyledCol>
    </Row>

    <Highlight language="javascript" className="highlight">
      {`<Row>
  <Col small={2} small-offset={2}>small-offset={2}</Col>
  <Col small={2}>small={2}</Col>
  <Col small={2}>small={2}</Col>
  <Col small={2}>small={2}</Col>
  <Col small={2}>small={2}</Col>
</Row>
`}
    </Highlight>
  </>
);

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
      {`<Container>
    ...
  </Container>
`}
    </Highlight>
    <p>
      Use <code>{'<Container fluid></Container>'}</code> for a full width
      container, spanning the entire width of your viewport.
    </p>
    <Highlight language="javascript" className="highlight">
      {`<Container fluid>
...
</Container>
`}
    </Highlight>
    <Subtitle>Row</Subtitle>
    <p>
      Rows are wrappers for columns. Each column has horizontal space{' '}
      <code>column gap</code>
      (called a gutter) for controlling the space between them.
    </p>
    <Subtitle>No Gutters</Subtitle>
    <p>
      The padding in container and the gutter between rows and columns can be
      removed with no-gutters prop on <code>{'<Container no-gutters>'}</code> or{' '}
      <code>{'<Row no-gutters>'}</code>.
    </p>
    <NoGuttersExample />
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
    <p>
      The <code>{'<Col>'}</code> component accepts this props for breakpoints:
    </p>
    <ul>
      <li>xsmall</li>
      <li>small</li>
      <li>medium</li>
      <li>large</li>
      <li>xlarge</li>
    </ul>
    <Subtitle>Example: Stacked-to-horizontal</Subtitle>
    <p>
      You can create a basic grid system that starts out stacked on mobile
      devices and tablet devices before becoming horizontal on desktop devices.
      Place grid columns in any <code>{'<Row>'}</code>
    </p>
    <HorizontalExample />
    <Subtitle>Example: Mobile and desktop</Subtitle>
    <p>
      Don’t want your columns to simply stack in smaller devices? Use the xsmall
      and small device grid props by adding <code>{'xsmall={*}'}</code>
      <code>{'small={*}'}</code> to your columns. See the example below for a
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
      <li>xsmall</li>
      <li>small</li>
      <li>medium</li>
      <li>large</li>
      <li>xlarge</li>
    </ul>
    <Subtitle>Example: Hiding elements in xsmall devices</Subtitle>
    <HideExample />
    <Subtitle>Offsetting columns</Subtitle>
    <p>
      Move columns to the right using{' '}
      <code>{'<Col [breakpoint]-offset={2}>'}</code> props. These props increase
      the left gap of a column by * columns. For example,
      <code>{'<Col small-offset={2} />'}</code> moves the column over two
      columns on small devices up.
    </p>
    <OffsetExample />
    <p>You can pass offset to all predefined props:</p>
    <ul>
      <li>xsmall-offset</li>
      <li>small-offset</li>
      <li>medium-offset</li>
      <li>large-offset</li>
      <li>xlarge-offset</li>
    </ul>
  </React.Fragment>
);

export default Grid;
