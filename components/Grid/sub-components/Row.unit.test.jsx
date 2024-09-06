import { render, screen } from '@testing-library/react';
import Row from './Row';
import Col from './Col';
import Container from './Container';

const SAMPLE_PHRASE = 'Hello world';

describe('<Row />', () => {
  it('Should render all react nodes', () => {
    const number = 1;

    render(
      <Row>
        <span key={1}>{SAMPLE_PHRASE}</span>
        <Col key={2}>{SAMPLE_PHRASE}</Col>
        {false}
        {/* returned in conditional rendering (ex: condition && <element/>) */}
        {null}
        {/* returned in conditional rendering (ex: condition ? <element/> : null) */}
        {undefined}
        {/* returned when rendering an object's undefined prop (ex: <div{obj.prop}</div>) */}
        {number}
      </Row>,
    );

    const nodeListWithPhraseSample = screen.getAllByText(SAMPLE_PHRASE);
    expect(nodeListWithPhraseSample).toHaveLength(2);

    expect(screen.getByText(/1/)).toBeInTheDocument();
  });

  it('Should forward no-gutters prop only to other Row and Container', () => {
    const { container } = render(
      <Row no-gutters>
        <span key={1}>{SAMPLE_PHRASE}</span>
        <Row key={2}>{SAMPLE_PHRASE}</Row>
        <Container key={3}>{SAMPLE_PHRASE}</Container>
      </Row>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
