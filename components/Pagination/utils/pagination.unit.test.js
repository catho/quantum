import pagination from './pagination';

describe('Pagination', () => {
  describe('How pages are displayed', () => {
    describe('Without params', () => {
      it('should return [1] when pagination is called without arguments', () => {
        expect(pagination()).toEqual([1]);
      });
    });

    describe('When totalPages are', () => {
      describe('Less or equal 5 pages', () => {
        it('should return [1] when totalPages is 1', () => {
          expect(pagination({ totalPages: 1 })).toEqual([1]);
        });

        it('should return [1, 2, 3, 4 ,5] when totalPages is 5', () => {
          expect(pagination({ totalPages: 5 })).toEqual([1, 2, 3, 4, 5]);
        });
      });

      describe('More than 5 pages', () => {
        it('should return [1, 2, 3, 4, 5, 6] when totalPages is 6', () => {
          expect(pagination({ totalPages: 6 })).toEqual([1, 2, 3, 4, 5, 6]);
        });

        it('should return [1, 2, 3, 4, "...", 7] when totalPages is 7', () => {
          expect(pagination({ totalPages: 7 })).toEqual([1, 2, 3, 4, '...', 7]);
        });

        it('should return [1, 2, 3, 4, "..."] when totalPages is 7 and hideLastPagination as true', () => {
          expect(
            pagination({ totalPages: 7, hideLastPagination: true }),
          ).toEqual([1, 2, 3, 4, '...']);
        });
      });
    });

    describe('With activePage', () => {
      it('should return [1, "...", 49, 50, 51, "...", 100] when activePage are 50 and totalPages are 100', () => {
        expect(
          pagination({
            totalPages: 100,
            activePage: 50,
          }),
        ).toEqual([1, '...', 49, 50, 51, '...', 100]);
      });

      it('should return [1, "...", 49, 50, 51, "..."] when activePage are 50 and totalPages are 100 as hideLastPagination as true', () => {
        expect(
          pagination({
            totalPages: 100,
            activePage: 50,
            hideLastPagination: true,
          }),
        ).toEqual([1, '...', 49, 50, 51, '...']);
      });

      it('should return [1, "...", 96, 97, 98, 99, 100] when activePage is 97 and totalPages are 100', () => {
        expect(pagination({ totalPages: 100, activePage: 97 })).toEqual([
          1,
          '...',
          96,
          97,
          98,
          99,
          100,
        ]);
      });

      it('should return [1, "...", 97, 98, 99, 100] when activePage is 98 and totalPages are 100', () => {
        expect(pagination({ totalPages: 100, activePage: 98 })).toEqual([
          1,
          '...',
          97,
          98,
          99,
          100,
        ]);
      });

      it('should return [1, "...", 97, 98, 99, 100] when activePage is 99 and totalPages are 100', () => {
        expect(pagination({ totalPages: 100, activePage: 99 })).toEqual([
          1,
          '...',
          97,
          98,
          99,
          100,
        ]);
      });

      it('should return [1, "...", 97, 98, 99, 100] when activePage is 100 and totalPages are 100', () => {
        expect(pagination({ totalPages: 100, activePage: 100 })).toEqual([
          1,
          '...',
          97,
          98,
          99,
          100,
        ]);
      });
    });
  });
});
