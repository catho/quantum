import { render, screen } from '@testing-library/react';
import Row from './Row';
import Col from './Col';

describe('<Row />', () => {
  it('Should render all react nodes', () => {
    const samplePhrase = 'Hello world';
    const number = 1;

    render(
      <Row>
        <span key={1}>{samplePhrase}</span>
        <Col key={2}>{samplePhrase}</Col>
        {false}
        {/* returned in conditional rendering (ex: condition && <element/>) */}
        {null}
        {/* returned in conditional rendering (ex: condition ? <element/> : null) */}
        {undefined}
        {/* returned when rendering an object's undefined prop (ex: <div{obj.prop}</div>) */}
        {number}
      </Row>,
    );

    const nodeListWithPhraseSample = screen.getAllByText(samplePhrase);
    expect(nodeListWithPhraseSample).toHaveLength(2);

    expect(screen.getByText(/1/)).toBeInTheDocument();
  });
});
