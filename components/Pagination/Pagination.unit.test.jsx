import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Pagination from './Pagination';

describe('<Pagination />', () => {
  beforeEach(() => {
    window.innerWidth = 1024;
  });

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

    it('should match snapshot when viewport is below then small breakpoint', () => {
      window.innerWidth = 400;

      expect(
        renderer.create(<Pagination totalPages={10} />).toJSON(),
      ).toMatchSnapshot();
    });
  });

  describe('onPageClick prop', () => {
    describe('Page button', () => {
      it('should call onPageClick when button is clicked', () => {
        const onPageClickMock = jest.fn();
        const wrapper = mount(
          <Pagination totalPages={10} onPageClick={onPageClickMock} />,
        );

        const page = wrapper.find('Page');
        page.at(0).simulate('click', { preventDefault: () => {} });

        expect(onPageClickMock).toHaveBeenCalled();
      });

      it('should receive clicked page as onClick parameter when button is clicked', () => {
        const onPageClickMock = jest.fn();
        const wrapper = mount(
          <Pagination
            totalPages={10}
            activePage={2}
            onPageClick={onPageClickMock}
          />,
        );

        wrapper
          .find('Page')
          .at(2)
          .simulate('click');

        expect(onPageClickMock).toHaveBeenCalledWith(3);
      });
    });

    describe('Action buttons', () => {
      it('should call onClick when previous button is clicked', () => {
        const onPageClickMock = jest.fn();
        const wrapper = mount(
          <Pagination
            totalPages={10}
            activePage={2}
            onPageClick={onPageClickMock}
          />,
        );

        const page = wrapper.find('ActionButton');
        page.at(0).simulate('click', { preventDefault: () => {} });

        expect(onPageClickMock).toHaveBeenCalled();
      });

      it('should call onClick when next button is clicked', () => {
        const onPageClickMock = jest.fn();
        const wrapper = mount(
          <Pagination totalPages={10} onPageClick={onPageClickMock} />,
        );

        const page = wrapper.find('ActionButton');
        page.at(1).simulate('click', { preventDefault: () => {} });

        expect(onPageClickMock).toHaveBeenCalled();
      });

      it('should receive previous page as onClick parameter when previous button is clicked', () => {
        const onPageClickMock = jest.fn();
        const wrapper = mount(
          <Pagination
            totalPages={10}
            activePage={2}
            onPageClick={onPageClickMock}
          />,
        );

        wrapper
          .find('ActionButton')
          .at(0)
          .simulate('click');

        expect(onPageClickMock).toHaveBeenCalledWith(1);
      });

      it('should receive next page as onClick parameter when next button is clicked', () => {
        const onPageClickMock = jest.fn();
        const wrapper = mount(
          <Pagination
            totalPages={10}
            activePage={2}
            onPageClick={onPageClickMock}
          />,
        );

        wrapper
          .find('ActionButton')
          .at(1)
          .simulate('click');

        expect(onPageClickMock).toHaveBeenCalledWith(3);
      });
    });
  });

  describe('Page href prop', () => {
    it('should set href value with correct value', () => {
      const wrapper = mount(
        <Pagination
          totalPages={10}
          activePage={2}
          pageHref={page => `/?page=${page}`}
        />,
      );
      expect(
        wrapper
          .find('Page')
          .at(0)
          .prop('href'),
      ).toBe('/?page=1');
    });
  });

  describe('Mobile Pagination', () => {
    beforeEach(() => {
      window.innerWidth = 400;
    });
    describe('infoFormatter prop', () => {
      it('should receive activePage and totalPages as arguments', () => {
        const infoFormatterMock = jest.fn();
        mount(
          <Pagination
            totalPages={10}
            activePage={1}
            infoFormatter={infoFormatterMock}
          />,
        );

        expect(infoFormatterMock).toBeCalledWith(1, 10);
      });
      it('should format the info text of mobile pagination component', () => {
        const wrapper = mount(
          <Pagination
            totalPages={10}
            activePage={6}
            infoFormatter={(activePage, totalPages) =>
              `${activePage} of ${totalPages}`
            }
          />,
        );
        expect(wrapper.find('Info').text()).toBe('6 of 10');
      });
    });
  });
});
