import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Accordion from './Accordion';
import mock from './mock';

const closeMock = m => {
  const newMock = m;
  newMock.items = m.items.map(item => ({ ...item, opened: false }));
  return newMock;
};

describe('Accordion component', () => {
  it('Should match the snapshot of a simple circular loader', () => {
    const simpleAccordion = <Accordion {...closeMock(mock)} />;
    expect(renderer.create(simpleAccordion).toJSON()).toMatchSnapshot();
  });

  it('Should open and close items', () => {
    const wrapper = shallow(<Accordion {...closeMock(mock)} />);
    const getFirstItem = () => wrapper.find('AccordionItem').at(0);
    expect(getFirstItem().props().opened).toEqual(false);
    getFirstItem()
      .find('AccordionHeader')
      .simulate('click');
    expect(getFirstItem().props().opened).toEqual(true);
  });

  it('Should open more than one item', () => {
    const wrapper = shallow(<Accordion {...closeMock(mock)} />);
    for (let i = 0; i < 2; i += 1) {
      const getItem = () => wrapper.find('AccordionItem').at(i);
      expect(getItem().props().opened).toEqual(false);
      getItem()
        .find('AccordionHeader')
        .simulate('click');
      expect(getItem().props().opened).toEqual(true);
    }
  });

  it('Should close another items when `keepOnlyOneOpen` is true ', () => {
    const wrapper = shallow(<Accordion keepOnlyOneOpen {...closeMock(mock)} />);
    for (let i = 0; i < 2; i += 1) {
      const getItem = index => wrapper.find('AccordionItem').at(index);
      expect(getItem(i).props().opened).toEqual(false);
      getItem(i)
        .find('AccordionHeader')
        .simulate('click');
      expect(getItem(i).props().opened).toEqual(true);

      if (i > 0) {
        const j = i - 1;
        expect(getItem(j).props().opened).toEqual(false);
      }
    }
  });

  it('Should call onClick function', () => {
    const onClickMock = jest.fn();
    const onCloseMock = closeMock(mock);
    onCloseMock.items[0].onClick = onClickMock;
    const wrapper = shallow(<Accordion {...onCloseMock} />);
    const getFirstItem = () => wrapper.find('AccordionItem').at(0);
    getFirstItem()
      .find('AccordionHeader')
      .simulate('click');
    expect(onClickMock).toBeCalled();
  });
});
