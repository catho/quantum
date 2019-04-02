import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Pagination from './Pagination';

describe('<Pagination />', () => {
  describe('Snapshots', () => {
    it('should match snapshot without props', () => {
      expect(
        renderer.create(<Pagination totalPages={1} />).toJSON(),
      ).toMatchSnapshot();
    });

    it('should match snapshot with 5 pages', () => {
      expect(
        renderer.create(<Pagination totalPages={5} />).toJSON(),
      ).toMatchSnapshot();
    });

    it('should match snapshot with 6 pages', () => {
      expect(
        renderer.create(<Pagination totalPages={6} />).toJSON(),
      ).toMatchSnapshot();
    });

    it('should match snapshot with 7 pages', () => {
      expect(
        renderer.create(<Pagination totalPages={7} />).toJSON(),
      ).toMatchSnapshot();
    });

    it('should match snapshot with 7 pages and activePage equals 4', () => {
      expect(
        renderer.create(<Pagination totalPages={7} activePage={4} />).toJSON(),
      ).toMatchSnapshot();
    });

    it('should match snapshot with 7 pages and activePage equals 5', () => {
      expect(
        renderer.create(<Pagination totalPages={7} activePage={5} />).toJSON(),
      ).toMatchSnapshot();
    });

    it('should match snapshot with 7 pages and activePage equals 7', () => {
      expect(
        renderer.create(<Pagination totalPages={7} activePage={5} />).toJSON(),
      ).toMatchSnapshot();
    });

    it('should match snapshot with 100 pages and activePage equals 50', () => {
      expect(
        renderer
          .create(<Pagination totalPages={100} activePage={50} />)
          .toJSON(),
      ).toMatchSnapshot();
    });
  });

  describe('onClick prop', () => {
    describe('Page button', () => {
      it('should call onClick when button is clicked', () => {
        const onClickMock = jest.fn();
        const wrapper = shallow(
          <Pagination totalPages={10} onClick={onClickMock} />,
        );

        const page = wrapper.find('Page');
        page.at(0).simulate('click');

        expect(onClickMock).toHaveBeenCalled();
      });

      it('should receive clicked page as onClick parameter when button is clicked', () => {
        const onClickMock = jest.fn();
        const wrapper = mount(
          <Pagination totalPages={10} activePage={2} onClick={onClickMock} />,
        );

        wrapper
          .find('Page')
          .at(2)
          .simulate('click');

        expect(onClickMock).toHaveBeenCalledWith(3);
      });
    });

    describe('Action buttons', () => {
      it('should call onClick when previous button is clicked', () => {
        const onClickMock = jest.fn();
        const wrapper = shallow(
          <Pagination totalPages={10} onClick={onClickMock} />,
        );

        const page = wrapper.find('ActionButton');
        page.at(0).simulate('click');

        expect(onClickMock).toHaveBeenCalled();
      });

      it('should call onClick when next button is clicked', () => {
        const onClickMock = jest.fn();
        const wrapper = shallow(
          <Pagination totalPages={10} onClick={onClickMock} />,
        );

        const page = wrapper.find('ActionButton');
        page.at(1).simulate('click');

        expect(onClickMock).toHaveBeenCalled();
      });

      it('should receive previous page as onClick parameter when previous button is clicked', () => {
        const onClickMock = jest.fn();
        const wrapper = mount(
          <Pagination totalPages={10} activePage={2} onClick={onClickMock} />,
        );

        wrapper
          .find('ActionButton')
          .at(0)
          .simulate('click');

        expect(onClickMock).toHaveBeenCalledWith(1);
      });

      it('should receive next page as onClick parameter when next button is clicked', () => {
        const onClickMock = jest.fn();
        const wrapper = mount(
          <Pagination totalPages={10} activePage={2} onClick={onClickMock} />,
        );

        wrapper
          .find('ActionButton')
          .at(1)
          .simulate('click');

        expect(onClickMock).toHaveBeenCalledWith(3);
      });
    });
  });
});
