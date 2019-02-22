import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Toggle from './Toggle';
import 'jest-styled-components';

describe('<Toggle /> ', () => {
  describe('Snapshots', () => {
    it('should match snapshot without props', () => {
      expect(renderer.create(<Toggle />).toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with checked props', () => {
      expect(renderer.create(<Toggle checked />).toJSON()).toMatchSnapshot();
    });
  });

  describe('Correctly props', () => {
    it('should pass onChange prop to input element', () => {
      const toggle = shallow(<Toggle onChange={() => {}} />);
      const checkbox = toggle.find('HiddenCheckbox');

      expect(checkbox.props().onChange).toBeTruthy();
    });

    it('should pass checked prop to input element', () => {
      const toggle = shallow(<Toggle checked />);
      const checkbox = toggle.find('HiddenCheckbox');

      expect(checkbox.props().checked).toBe(true);
    });
  });
});
