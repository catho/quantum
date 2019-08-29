import React from 'react';
import styled from 'styled-components';
import {
  Title,
  Table,
  StoryContainer,
  SimpleHighlight,
} from '@catho/quantum-storybook-ui';

import { Row, Col, Hide } from '../../components/Grid';

const importGrid = `import { Container, Row, Col, Hide } from '@catho/quantum';';`;
const codeBackgroundColor = '#e8f2fc';
const codefontColor = '#1a82e2';

const StyledCol = styled(Col)`
  background-color: #f6f8fa;
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

    <SimpleHighlight
      backgroundColor={codeBackgroundColor}
      fontColor={codefontColor}
    >
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
</Row>`}
    </SimpleHighlight>
  </>
);

const MobileDesktopExample = () => (
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

    <SimpleHighlight
      backgroundColor={codeBackgroundColor}
      fontColor={codefontColor}
    >
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
</Row>`}
    </SimpleHighlight>
  </>
);

const HideExample = () => (
  <>
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

    <SimpleHighlight
      backgroundColor={codeBackgroundColor}
      fontColor={codefontColor}
    >
      {`<Hide xsmall>
  <Row>
    <Col>...</Col>
    <Col>...</Col>
  </Row>
</Hide>`}
    </SimpleHighlight>
  </>
);

const NoGuttersExample = () => (
  <>
    <Row no-gutters>
      <StyledCol medium={6}>medium={6}</StyledCol>
      <StyledCol medium={6}>medium={6}</StyledCol>
    </Row>
    <br />
    <SimpleHighlight
      backgroundColor={codeBackgroundColor}
      fontColor={codefontColor}
    >
      {`<Row no-gutters>
  <StyledCol medium={6}>medium={6}</StyledCol>
  <StyledCol medium={6}>medium={6}</StyledCol>
</Row>`}
    </SimpleHighlight>
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

    <SimpleHighlight
      backgroundColor={codeBackgroundColor}
      fontColor={codefontColor}
    >
      {`<Row>
  <Col small={2} small-offset={2}>small-offset={2}</Col>
  <Col small={2}>small={2}</Col>
  <Col small={2}>small={2}</Col>
  <Col small={2}>small={2}</Col>
  <Col small={2}>small={2}</Col>
</Row>`}
    </SimpleHighlight>
  </>
);

const Grid = () => (
  <StoryContainer>
    <Title as="h2">Importing grid</Title>
    <SimpleHighlight
      backgroundColor={codeBackgroundColor}
      fontColor={codefontColor}
    >
      {importGrid}
    </SimpleHighlight>

    <Title as="h2">How it works</Title>
    <Title as="h3" style={{ paddingTop: 0 }}>
      Containers
    </Title>

    <p>
      You may choose one of two containers or both to use in your projects. Note
      that, due to padding and more, neither container is nestable.
      <br />
      Use <code>{'<Container></Container>'}</code> for a responsive fixed width
      container.
    </p>
    <SimpleHighlight
      backgroundColor={codeBackgroundColor}
      fontColor={codefontColor}
    >
      {`<Container>
    ...
 </Container>`}
    </SimpleHighlight>

    <p>
      Use <code>{'<Container fluid></Container>'}</code> for a full width
      container, spanning the entire width of your viewport.
    </p>

    <SimpleHighlight
      backgroundColor={codeBackgroundColor}
      fontColor={codefontColor}
    >
      {`<Container fluid>
    ...
 </Container>`}
    </SimpleHighlight>

    <Title as="h3">Row</Title>
    <p>
      Rows are wrappers for columns. Each column has horizontal space{' '}
      <code>column gap</code>
      (called a gutter) for controlling the space between them.
    </p>

    <Title as="h3">Breakpoints</Title>

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

    <Title as="h3">Example: Stacked-to-horizontal</Title>

    <p>
      You can create a basic grid system that starts out stacked on mobile
      devices and tablet devices before becoming horizontal on desktop devices.
      Place grid columns in any <code>{'<Row>'}</code>
    </p>

    <HorizontalExample />

    <Title as="h3">Example: Mobile and desktop</Title>
    <p>
      Don’t want your columns to simply stack in smaller devices? Use the xsmall
      and small device grid props by adding <code>{'xsmall={*}'}</code>
      <code>{'small={*}'}</code> to your columns. See the example below for a
      better idea of how it all works.
    </p>
    <MobileDesktopExample />
    <Title as="h3">No Gutters</Title>

    <p>
      The padding in container and the gutter between rows and columns can be
      removed with no-gutters prop on <code>{'<Container no-gutters>'}</code> or{' '}
      <code>{'<Row no-gutters>'}</code>.
    </p>
    <NoGuttersExample />
    <Title as="h3">Hide Component</Title>
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

    <Title as="h3">Example: Hiding elements in xsmall devices</Title>
    <HideExample />
    <Title as="h3">Offsetting columns</Title>
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
  </StoryContainer>
);

export default Grid;
