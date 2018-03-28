import React from 'react';
import Highlight from 'react-highlight';
import styled, { css } from 'styled-components';
import ColorPalette from '../../components/Colors';
import { Container, Row, Col } from '../../components/Grid';

import 'highlight.js/styles/default.css';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    font-size: 14px;
    text-align: left;
  }

  tr:nth-child(even) {
    background-color: ${ColorPalette.NEUTRAL.GRAY.WHITETWO};
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
    <p>
      If you are familiar with bootstrap 3, you can easily understand ours.
    </p>
    <p>
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
            <td> - </td>
          </tr>
        </tbody>
      </StyledTable>

    </p>
    <h2>How it works</h2>
    <hr />
    <h3>Containers</h3>
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
    <h3>Breakpoints</h3>
    <hr/>
    <p>
      The grid system appropriately scales up to 12 columns as the device or viewport size increases.
      It includes predefined viewports, they are:
    </p>
    <StyledTable>
      <thead>
        <tr>
          <th></th>
          <th>Phone <small>{`(<768px)`}</small> </th>
          <th>Tablet <small>{`(>=768px)`}</small> </th>
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
          <td colspan="5">12</td>
        </tr>
        <tr>
          <th  scope="row">Gutter width</th>
          <td colspan="5">30px (15px on each side of a column)</td>
        </tr>
        <tr>
          <th scope="row">Nestable</th>
          <td colspan="5">Yes</td>
        </tr>
        <tr>
          <th scope="row">Offsets</th>
          <td colspan="5">Soon...</td>
        </tr>
        <tr>
          <th scope="row">Column ordering</th>
          <td colspan="5">Soon...</td>
        </tr>
      </tbody>
    </StyledTable>
    <h2>Example: Stacked-to-horizontal</h2>
    <hr/>
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

    <h2>Example: Mobile and desktop</h2>
    <hr/>
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

  </React.Fragment>
);

export default Grid;
