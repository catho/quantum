import React from 'react';
import { mount, shallow } from 'enzyme';
import TextMask from './TextMask';

describe('TextMask component', () => {
  it('Should match the snapshot', () => {
    expect(shallow(<TextMask />)).toMatchSnapshot();
    expect(shallow(<TextMask.CEP />)).toMatchSnapshot();
    expect(shallow(<TextMask.CNPJ />)).toMatchSnapshot();
    expect(shallow(<TextMask.CPF />)).toMatchSnapshot();
    expect(shallow(<TextMask.Date />)).toMatchSnapshot();
    expect(shallow(<TextMask.Phone />)).toMatchSnapshot();
  });

  describe('Should format text', () => {
    const execStaticMaskTest = ({ mask, original, expected }) => {
      const TextMaskClass = TextMask[mask] || TextMask;

      const withValue = mount(<TextMaskClass text={original} />);
      const withChildren = mount(<TextMaskClass>{original}</TextMaskClass>);

      expect(withValue.text()).toBe(expected);
      expect(withChildren.text()).toBe(expected);
    };

    it('No mask', () => {
      execStaticMaskTest({
        original: '12345',
        expected: '12345',
      });
    });

    it('CEP', () => {
      execStaticMaskTest({
        mask: 'CEP',
        original: '06824980',
        expected: '06824-980',
      });
    });

    it('CNPJ', () => {
      execStaticMaskTest({
        mask: 'CNPJ',
        original: '85818714000164',
        expected: '85.818.714/0001-64',
      });
    });

    it('Date', () => {
      execStaticMaskTest({
        mask: 'Date',
        original: '15101988',
        expected: '15/10/1988',
      });
    });

    it('House Phone', () => {
      execStaticMaskTest({
        mask: 'Phone',
        original: '1144445555',
        expected: '(11) 4444-5555',
      });
    });

    it('Cell Phone', () => {
      execStaticMaskTest({
        mask: 'Phone',
        original: '11999998888',
        expected: '(11) 99999-8888',
      });
    });

    it('Custom maks', () => {
      const original = '5102341298321293';
      const expected = '5102 3412 9832 1293';
      const mask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];

      const withValue = mount(<TextMask text={original} mask={mask} />);
      const withChildren = mount(<TextMask mask={mask}>{original}</TextMask>);

      expect(withValue.text()).toBe(expected);
      expect(withChildren.text()).toBe(expected);
    });
  });
});
