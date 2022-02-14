import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Pagination from './Pagination';

const PREVIOUS_BUTTON_TEXT = 'Previous';
const NEXT_BUTTON_TEXT = 'Next';

describe('<Pagination />', () => {
  beforeEach(() => {
    window.innerWidth = 1024;
  });

  describe('Snapshots', () => {
    it('should match snapshot without props', () => {
      expect(
        render(<Pagination totalPages={1} />).asFragment(),
      ).toMatchSnapshot();
    });

    it('should match snapshot with 5 pages', () => {
      expect(
        render(<Pagination totalPages={5} />).asFragment(),
      ).toMatchSnapshot();
    });

    it('should match snapshot with 6 pages', () => {
      expect(
        render(<Pagination totalPages={6} />).asFragment(),
      ).toMatchSnapshot();
    });

    it('should match snapshot with 7 pages', () => {
      expect(
        render(<Pagination totalPages={7} />).asFragment(),
      ).toMatchSnapshot();
    });

    it('should match snapshot with 7 pages and activePage equals 4', () => {
      expect(
        render(<Pagination totalPages={7} activePage={4} />).asFragment(),
      ).toMatchSnapshot();
    });

    it('should match snapshot with 7 pages and activePage equals 5', () => {
      expect(
        render(<Pagination totalPages={7} activePage={5} />).asFragment(),
      ).toMatchSnapshot();
    });

    it('should match snapshot with 7 pages and activePage equals 7', () => {
      expect(
        render(<Pagination totalPages={7} activePage={5} />).asFragment(),
      ).toMatchSnapshot();
    });

    it('should match snapshot with 100 pages and activePage equals 50', () => {
      expect(
        render(<Pagination totalPages={100} activePage={50} />).asFragment(),
      ).toMatchSnapshot();
    });

    it('should match snapshot when viewport is below then small breakpoint', () => {
      window.innerWidth = 400;

      expect(
        render(<Pagination totalPages={10} />).asFragment(),
      ).toMatchSnapshot();
    });
  });

  describe('onPageClick prop', () => {
    describe('Page button', () => {
      it('should call onPageClick when page button is clicked', () => {
        const onPageClickMock = jest.fn();
        render(<Pagination totalPages={10} onPageClick={onPageClickMock} />);

        const page1 = screen.getByText('1');
        fireEvent.click(page1);

        expect(onPageClickMock).toHaveBeenCalled();
      });

      it('should receive clicked page as onClick parameter when button is clicked', () => {
        const onPageClickMock = jest.fn();
        render(
          <Pagination
            totalPages={10}
            activePage={2}
            onPageClick={onPageClickMock}
          />,
        );

        const page2 = screen.getByText('2');
        fireEvent.click(page2);

        expect(onPageClickMock).toHaveBeenCalledWith(2, expect.any(Object));
      });
    });

    describe('Action buttons', () => {
      it('should call onClick when previous button is clicked', () => {
        const onPageClickMock = jest.fn();
        render(
          <Pagination
            totalPages={10}
            activePage={2}
            onPageClick={onPageClickMock}
          />,
        );

        const previousButton = screen.getAllByText(PREVIOUS_BUTTON_TEXT);
        fireEvent.click(previousButton[1]);

        expect(onPageClickMock).toHaveBeenCalled();
      });

      it(`shouldn't call onClick when previous button is clicked on the first page`, () => {
        const onPageClickMock = jest.fn();
        render(<Pagination totalPages={10} onPageClick={onPageClickMock} />);

        const previousButton = screen.getAllByText(PREVIOUS_BUTTON_TEXT);
        fireEvent.click(previousButton[1]);

        expect(onPageClickMock).not.toHaveBeenCalled();
      });

      it(`shouldn't call onClick when next button is clicked on the last page`, () => {
        const onPageClickMock = jest.fn();
        render(
          <Pagination
            totalPages={10}
            activePage={10}
            onPageClick={onPageClickMock}
          />,
        );

        const NextButton = screen.getAllByText(NEXT_BUTTON_TEXT);
        fireEvent.click(NextButton[1]);

        expect(onPageClickMock).not.toHaveBeenCalled();
      });

      it('should call onClick when next button is clicked', () => {
        const onPageClickMock = jest.fn();
        render(<Pagination totalPages={10} onPageClick={onPageClickMock} />);

        const NextButton = screen.getAllByText(NEXT_BUTTON_TEXT);
        fireEvent.click(NextButton[1]);

        expect(onPageClickMock).toHaveBeenCalled();
      });

      it('should receive previous page as onClick parameter when previous button is clicked', () => {
        const onPageClickMock = jest.fn();
        render(
          <Pagination
            totalPages={10}
            activePage={2}
            onPageClick={onPageClickMock}
          />,
        );

        const previousButton = screen.getAllByText(PREVIOUS_BUTTON_TEXT);
        fireEvent.click(previousButton[1]);

        expect(onPageClickMock).toHaveBeenCalledWith(1, expect.any(Object));
      });

      it('should receive next page as onClick parameter when next button is clicked', () => {
        const onPageClickMock = jest.fn();
        render(
          <Pagination
            totalPages={10}
            activePage={2}
            onPageClick={onPageClickMock}
          />,
        );

        const NextButton = screen.getAllByText(NEXT_BUTTON_TEXT);
        fireEvent.click(NextButton[1]);

        expect(onPageClickMock).toHaveBeenCalledWith(3, expect.any(Object));
      });
    });
  });

  describe('Page href prop', () => {
    it('should set href value with correct value', () => {
      render(
        <Pagination
          totalPages={10}
          activePage={2}
          pageHref={page => `/?page=${page}`}
        />,
      );

      const pageButton1 = screen.getByText('1');

      expect(pageButton1.getAttribute('href')).toBe('/?page=1');
    });
  });

  describe('Mobile Pagination', () => {
    beforeAll(() => {
      window.innerWidth = 400;
    });
    describe('infoFormatter prop', () => {
      it('should receive activePage and totalPages as arguments', () => {
        const infoFormatterMock = jest.fn();
        render(
          <Pagination
            totalPages={10}
            activePage={1}
            infoFormatter={infoFormatterMock}
          />,
        );

        expect(infoFormatterMock).toBeCalledWith(1, 10);
      });

      it('should format the info text of mobile pagination component', () => {
        render(
          <Pagination
            totalPages={10}
            activePage={6}
            infoFormatter={(activePage, totalPages) =>
              `${activePage} of ${totalPages}`
            }
          />,
        );

        const info = screen.getByText('6 of 10');

        expect(info).toBeInTheDocument();
        expect(info.tagName).toBe('SPAN');
      });
    });
  });

  describe('Follow only first page', () => {
    beforeEach(() => {
      render(
        <Pagination
          activePage={2}
          totalPages={10}
          pageHref={page => `/?page=${page}`}
          followOnlyFirstPage
        />,
      );
    });

    it('should not add rel="nofollow" to page 1 button', () => {
      const previousButton = screen.getAllByText(PREVIOUS_BUTTON_TEXT);
      expect(previousButton[0].getAttribute('rel')).toBeNull();

      const page1Button = screen.getByText('1');
      expect(page1Button.getAttribute('rel')).toBeNull();
    });

    it('should add rel="nofollow" to all pagination buttons except the first one', () => {
      // eslint-disable-next-line no-plusplus
      for (let i = 2; i <= 4; i++) {
        expect(screen.getByText(`${i}`).getAttribute('rel')).toBe('nofollow');
      }

      expect(screen.getByText('1').getAttribute('rel')).toBeNull();
    });
  });
});
