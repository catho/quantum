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

const getAccordionItemByPosition = (index, el) =>
  el.find('AccordionItem').at(index);

describe('Accordion component', () => {
  it('Should match the snapshot of a simple circular loader', () => {
    const simpleAccordion = <Accordion {...closeMock(mock)} />;
    expect(renderer.create(simpleAccordion).toJSON()).toMatchSnapshot();
  });

  it('Should open and close items and change area-hidden property', () => {
    const wrapper = shallow(<Accordion {...closeMock(mock)} />);
    const getFirstItem = () => wrapper.find('AccordionItem').first();
    const getFirstItemContentAriaHidden = () =>
      getFirstItem()
        .find('AccordionContent')
        .prop('aria-hidden');
    expect(getFirstItem().prop('opened')).toEqual(false);
    expect(getFirstItemContentAriaHidden()).toEqual(true);
    getFirstItem()
      .find('AccordionHeader')
      .simulate('click');
    expect(getFirstItem().prop('opened')).toEqual(true);
    expect(getFirstItemContentAriaHidden()).toEqual(false);
  });

  it('Should open more than one item', () => {
    const wrapper = shallow(<Accordion {...closeMock(mock)} />);
    for (let i = 0; i < 2; i += 1) {
      expect(getAccordionItemByPosition(i, wrapper).prop('opened')).toEqual(
        false,
      );
      getAccordionItemByPosition(i, wrapper)
        .find('AccordionHeader')
        .simulate('click');
      expect(getAccordionItemByPosition(i, wrapper).prop('opened')).toEqual(
        true,
      );
    }
  });

  it('Should close another items when `keepOnlyOneOpen` is true ', () => {
    const wrapper = shallow(<Accordion keepOnlyOneOpen {...closeMock(mock)} />);
    for (let i = 0; i < 2; i += 1) {
      expect(getAccordionItemByPosition(i, wrapper).prop('opened')).toEqual(
        false,
      );
      getAccordionItemByPosition(i, wrapper)
        .find('AccordionHeader')
        .simulate('click');
      expect(getAccordionItemByPosition(i, wrapper).prop('opened')).toEqual(
        true,
      );

      if (i > 0) {
        const j = i - 1;
        expect(getAccordionItemByPosition(j, wrapper).prop('opened')).toEqual(
          false,
        );
      }
    }
  });

  it('Should call onClick function', () => {
    const onClickMock = jest.fn();
    const onCloseMock = closeMock(mock);
    onCloseMock.items[0].onClick = onClickMock;
    const wrapper = shallow(<Accordion {...onCloseMock} />);
    const getFirstItem = () => wrapper.find('AccordionItem').first();
    getFirstItem()
      .find('AccordionHeader')
      .simulate('click');
    expect(onClickMock).toBeCalled();
  });
});
