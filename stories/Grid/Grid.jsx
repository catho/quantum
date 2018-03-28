import React from 'react';
import Highlight from 'react-highlight';
import styled, { css } from 'styled-components';
import { Row, Col } from '../../components/Grid';

import 'highlight.js/styles/default.css';

const SharedTableStyles = css`
  
`;

const Grid = () => (
  <React.Fragment>
    <p>
      If you are familiar with bootstrap 3, you can easily understand ours.
    </p>
    <p>
      <table>
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
      </table>

    </p>
    <h2>How it works</h2>
    <hr />
    <h3>Containers</h3>
    <p>You may choose one of two containers or both to use in your projects. Note that, due to padding and more, neither container is nestable.</p>
    <p>Use {`<Container></Container>`} for a responsive fixed width container.</p>
    <Highlight language="javascript" className="highlight">
      {
`
  <Container>
    ...
  </Container>
`
      }
    </Highlight>
    <p>Use {`<Container fluid></Container>`} for a full width container, spanning the entire width of your viewport.</p>
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
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Phone <small>(&lt;320px)</small> </th>
          <th>Tablet <small>{`(>=321px <=768px)`}</small> </th>
          <th>Desktop <small>{`(>=769px <=980px)`}</small> </th>
          <th>Large <small>{`(>=981px <=1280px)`}</small> </th>
          <th>HD <small>{`(>=1281px <=1440px)`}</small> </th>
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
          <td colspan="4">Yes</td>
        </tr>
        <tr>
          <th scope="row">Offsets</th>
          <td colspan="4">Soon...</td>
        </tr>
        <tr>
          <th scope="row">Column ordering</th>
          <td colspan="4">Soon...</td>
        </tr>
      </tbody>
    </table>
    <h2>Example: Stacked-to-horizontal</h2>
    <hr/>
    <p>You can create a basic grid system that starts out stacked on mobile devices and tablet devices before becoming horizontal on desktop devices. Place grid columns in any {`<Row>`}</p>

    <Row>
      <Col phone={1}>{`<Col phone={1}></Col>`}</Col>
      <Col phone={1}>{`<Col phone={1}></Col>`}</Col>
      <Col phone={1}>{`<Col phone={1}></Col>`}</Col>
      <Col phone={1}>{`<Col phone={1}></Col>`}</Col>
      <Col phone={1}>{`<Col phone={1}></Col>`}</Col>
      <Col phone={1}>{`<Col phone={1}></Col>`}</Col>
      <Col phone={1}>{`<Col phone={1}></Col>`}</Col>
      <Col phone={1}>{`<Col phone={1}></Col>`}</Col>
      <Col phone={1}>{`<Col phone={1}></Col>`}</Col>
      <Col phone={1}>{`<Col phone={1}></Col>`}</Col>
      <Col phone={1}>{`<Col phone={1}></Col>`}</Col>
      <Col phone={1}>{`<Col phone={1}></Col>`}</Col>
    </Row>

    <Row>
      <Col phone={8}>phone 8</Col>
      <Col phone={4}>phone 4</Col>
    </Row>

    <Row>
      <Col phone={4}>phone 4</Col>
      <Col phone={4}>phone 4</Col>
      <Col phone={4}>phone 4</Col>
    </Row>

    <Row>
      <Col phone={6}>phone 6</Col>
      <Col phone={6}>phone 6</Col>
    </Row>

    <Highlight language="javascript" className="highlight">
      {`
<Row>
  <Col phone={1}><Col phone={1}></Col></Col>
  <Col phone={1}><Col phone={1}></Col></Col>
  <Col phone={1}><Col phone={1}></Col></Col>
  <Col phone={1}><Col phone={1}></Col></Col>
  <Col phone={1}><Col phone={1}></Col></Col>
  <Col phone={1}><Col phone={1}></Col></Col>
  <Col phone={1}><Col phone={1}></Col></Col>
  <Col phone={1}><Col phone={1}></Col></Col>
  <Col phone={1}><Col phone={1}></Col></Col>
  <Col phone={1}><Col phone={1}></Col></Col>
  <Col phone={1}><Col phone={1}></Col></Col>
  <Col phone={1}><Col phone={1}></Col></Col>
</Row>

<Row>
  <Col phone={8}>phone 8</Col>
  <Col phone={4}>phone 4</Col>
</Row>

<Row>
  <Col phone={4}>phone 4</Col>
  <Col phone={4}>phone 4</Col>
  <Col phone={4}>phone 4</Col>
</Row>

<Row>
  <Col phone={6}>phone 6</Col>
  <Col phone={6}>phone 6</Col>
</Row>
      `}
    </Highlight>


  </React.Fragment>
);

export default Grid;
