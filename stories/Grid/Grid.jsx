import React from 'react';
import Highlight from 'react-highlight';
import styled from 'styled-components';
import ColorPalette from '../../components/Colors';
import HowToImport from '../../.storybook/components/HowToImport';
import Title from '../../.storybook/components/Title';
import Subtitle from '../../.storybook/components/Subtitle';
import { Container, Row, Col, Hide } from '../../components/Grid';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    font-size: 14px;
    text-align: left;
  }
`;

const StyledRow = styled(Row)`
  margin-bottom: 10px;
`;

const StyledCol = styled(Col)`
  background-color: ${ColorPalette.NEUTRAL.GRAY.WHITETWO};
  border: 1px solid ${ColorPalette.NEUTRAL.GRAY.GREYISH};
  font-size: 14px;
  padding-bottom: 10px;
  padding-top: 10px;
`;

const Grid = () => (
  <React.Fragment>
    <p>If you are familiar with <strong>Boostrap</strong>, you can easily understand ours.</p>
    <HowToImport importModules={'Container, Row, Col'} />

    <p>
      Here's a comparison table of viewports. Ours on left - Bootstrap's on right.
    </p>

    <StyledTable>
      <thead>
        <tr>
          <th>Grid</th>
          <th><a href="https://getbootstrap.com/docs/3.3/css/#grid">Bootstrap</a></th>
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
    </StyledTable>
    <Title>How it works</Title>
    <Subtitle>Containers</Subtitle>
    <p>You may choose one of two containers or both to use in your projects. Note that, due to padding and more, neither container is nestable.</p>
    <p>Use <code>{`<Container></Container>`}</code> for a responsive fixed width container.</p>
    <Highlight language="javascript" className="highlight">
      {
`
  <Container>
    ...
  </Container>
`
      }
    </Highlight>
    <p>Use <code>{`<Container fluid></Container>`}</code> for a full width container, spanning the entire width of your viewport.</p>
    <Highlight language="javascript" className="highlight">
      {
`
<Container fluid>
...
</Container>
`
      }
    </Highlight>
    <Subtitle>Row</Subtitle>
    <p>Rows are wrappers for columns. Each column has horizontal <code>padding</code> (called a gutter) for controlling the space between them. This padding is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.</p>

    <Subtitle>No Gutters</Subtitle>
    <p>The gutters between columns in our predefined grid styles can be removed with no-gutters prop <code>{'<Row no-gutters>'}</code>. This removes the negative margins from <code>{'<Col>'}</code> and the horizontal padding from all immediate children columns.</p>

    <Subtitle>Breakpoints</Subtitle>
    <p>
      The grid system appropriately scales up to 12 columns as the device or viewport size increases.
      It includes predefined viewports, they are:
    </p>
    <StyledTable>
      <thead>
        <tr>
          <th></th>
          <th>Phone <small>{`(<768px)`}</small> </th>
          <th>Tablet <small>{`(>768px)`}</small> </th>
          <th>Desktop <small>{`(>=980px)`}</small> </th>
          <th>Large <small>{`(>=1280px)`}</small> </th>
          <th>HD <small>{`(>=1440px)`}</small> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Container width</th>
          <td>540px</td>
          <td>720px</td>
          <td>980px</td>
          <td>1200px</td>
          <td>1330px</td>
        </tr>
        <tr>
          <th scope="row"># of columns</th>
          <td colSpan="5">12</td>
        </tr>
        <tr>
          <th scope="row">Gutter width</th>
          <td colSpan="5">30px (15px on each side of a column)</td>
        </tr>
        <tr>
          <th scope="row">Nestable</th>
          <td colSpan="5">Yes</td>
        </tr>
        <tr>
          <th scope="row">Offsets</th>
          <td colSpan="5">Soon...</td>
        </tr>
        <tr>
          <th scope="row">Column ordering</th>
          <td colSpan="5">Soon...</td>
        </tr>
      </tbody>
    </StyledTable>
    <Subtitle>Example: Stacked-to-horizontal</Subtitle>
    <p>You can create a basic grid system that starts out stacked on mobile devices and tablet devices before becoming horizontal on desktop devices. Place grid columns in any <code>{`<Row>`}</code></p>

    <Container fluid>
      <StyledRow>
        <StyledCol tablet={1}>{`<Col tablet={1}>`}</StyledCol>
        <StyledCol tablet={1}>{`<Col tablet={1}>`}</StyledCol>
        <StyledCol tablet={1}>{`<Col tablet={1}>`}</StyledCol>
        <StyledCol tablet={1}>{`<Col tablet={1}>`}</StyledCol>
        <StyledCol tablet={1}>{`<Col tablet={1}>`}</StyledCol>
        <StyledCol tablet={1}>{`<Col tablet={1}>`}</StyledCol>
        <StyledCol tablet={1}>{`<Col tablet={1}>`}</StyledCol>
        <StyledCol tablet={1}>{`<Col tablet={1}>`}</StyledCol>
        <StyledCol tablet={1}>{`<Col tablet={1}>`}</StyledCol>
        <StyledCol tablet={1}>{`<Col tablet={1}>`}</StyledCol>
        <StyledCol tablet={1}>{`<Col tablet={1}>`}</StyledCol>
        <StyledCol tablet={1}>{`<Col tablet={1}>`}</StyledCol>
      </StyledRow>

      <StyledRow>
        <StyledCol tablet={8}>{`<Col tablet={8}>`}</StyledCol>
        <StyledCol tablet={4}>{`<Col tablet={4}>`}</StyledCol>
      </StyledRow>

      <StyledRow>
        <StyledCol tablet={4}>{`<Col tablet={4}>`}</StyledCol>
        <StyledCol tablet={4}>{`<Col tablet={4}>`}</StyledCol>
        <StyledCol tablet={4}>{`<Col tablet={4}>`}</StyledCol>
      </StyledRow>

      <StyledRow>
        <StyledCol tablet={6}>{`<Col tablet={6}>`}</StyledCol>
        <StyledCol tablet={6}>{`<Col tablet={6}>`}</StyledCol>
      </StyledRow>
    </Container>

    <Highlight language="javascript" className="highlight">
      {`
<Row>
  <Col tablet={1}>...</Col></Col>
  <Col tablet={1}>...</Col></Col>
  <Col tablet={1}>...</Col></Col>
  <Col tablet={1}>...</Col></Col>
  <Col tablet={1}>...</Col></Col>
  <Col tablet={1}>...</Col></Col>
  <Col tablet={1}>...</Col></Col>
  <Col tablet={1}>...</Col></Col>
  <Col tablet={1}>...</Col></Col>
  <Col tablet={1}>...</Col></Col>
  <Col tablet={1}>...</Col></Col>
  <Col tablet={1}>...</Col></Col>
</Row>

<Row>
  <Col tablet={8}>...</Col>
  <Col tablet={4}>...</Col>
</Row>

<Row>
  <Col tablet={4}>...</Col>
  <Col tablet={4}>...</Col>
  <Col tablet={4}>...</Col>
</Row>

<Row>
  <Col tablet={6}>...</Col>
  <Col tablet={6}>...</Col>
</Row>
      `}
    </Highlight>

    <Subtitle>Example: Mobile and desktop</Subtitle>
    <p>Don't want your columns to simply stack in smaller devices? Use the phone and tablet device grid props by adding <code>{'phone={*}'}</code> <code>{'tablet={*}'}</code> to your columns. See the example below for a better idea of how it all works.</p>

    <Container fluid>
      <StyledRow>
        <StyledCol phone={12} tablet={8}>{`<Col phone={12} tablet={8}>`}</StyledCol>
        <StyledCol phone={6} tablet={4}>{`<Col phone={6} tablet={4}>`}</StyledCol>
      </StyledRow>

      <StyledRow>
        <StyledCol phone={6} tablet={4}>{`<Col phone={6} tablet={4}>`}</StyledCol>
        <StyledCol phone={6} tablet={4}>{`<Col phone={6} tablet={4}>`}</StyledCol>
        <StyledCol phone={6} tablet={4}>{`<Col phone={6} tablet={4}>`}</StyledCol>
      </StyledRow>

      <StyledRow>
        <StyledCol phone={6}>{`<Col phone={6}>`}</StyledCol>
        <StyledCol phone={6}>{`<Col phone={6}>`}</StyledCol>
      </StyledRow>
    </Container>

    <Highlight language="javascript" className="highlight">
      {`
<Row>
  <Col phone={12} tablet={8}>...</Col>
  <Col phone={6} tablet={4}>...</Col>
</Row>

<Row>
  <Col phone={6} tablet={4}>...</Col>
  <Col phone={6} tablet={4}>...</Col>
  <Col phone={6} tablet={4}>...</Col>
</Row>

<Row>
  <Col phone={6}>...</Col>
  <Col phone={6}>...</Col>
</Row>
      `}
    </Highlight>

    <Subtitle>Hide Component</Subtitle>
    <p>If you need to hide some elements in your UI, you can use the <code>{'<Hide>'}</code> component.</p>
    <p><code>{'<Hide>'}</code> receives the same props as the <code>{'<Col>'}</code> component, they are:</p>
    <ul>
      <li>phone</li>
      <li>tablet</li>
      <li>desktop</li>
      <li>large</li>
      <li>hd</li>
    </ul>

    <Subtitle>Example: Hiding elements in phone devices</Subtitle>

    <Container fluid>
      <Hide phone>
        <StyledRow>
          <StyledCol phone={12} tablet={8}>...</StyledCol>
          <StyledCol phone={6} tablet={4}>...</StyledCol>
        </StyledRow>
      </Hide>
    </Container>

    <Highlight language="javascript" className="highlight">
    {`
<Hide phone>
  <Row>
    <Col>...</Col>
    <Col>...</Col>
  </Row>
</Hide>
    `}
    </Highlight>

  </React.Fragment>
);

export default Grid;
