import React from 'react';
import renderer from 'react-test-renderer';
import Accordion from './Accordion';

describe('Accordion component', () => {
  it('Should match the snapshot of a simple circular loader', () => {
    const simpleAccordion = <Accordion />;
    expect(renderer.create(simpleAccordion).toJSON()).toMatchSnapshot();
  });
});
