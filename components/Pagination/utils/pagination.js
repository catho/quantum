const centerRule = ({ total, active }) => {
  if (active - 1 <= 0) {
    return 1;
  }

  if (active === total) {
    return active - 3;
  }

  if (active >= total - 1) {
    return active - 2;
  }

  return active - 1;
};

const visiblePages = (active, total) => {
  if (active <= 3 || active === total) {
    return 4;
  }

  return 3;
};

const pagination = ({ totalPages = 1, activePage = 1 } = {}) => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  let pages = [
    1,
    ...Array.from(
      { length: visiblePages(activePage, totalPages) },
      (_, i) => i + centerRule({ total: totalPages, active: activePage }),
    ),
    totalPages,
  ];

  pages = pages.filter((page, index, array) => array.indexOf(page) === index);

  let firstPage = pages[0];
  let secondPage = pages[1];

  if (secondPage === firstPage + 2) {
    pages = [firstPage, firstPage + 1, ...pages.slice(1)];
  }

  let penultimatePage = pages[pages.length - 2];
  let lastPage = pages[pages.length - 1];

  if (penultimatePage === lastPage - 2) {
    pages = [...pages.slice(0, -1), lastPage - 1, lastPage];
  }

  firstPage = pages[0]; // eslint-disable-line
  secondPage = pages[1]; // eslint-disable-line

  if (secondPage > firstPage + 2) {
    pages = [firstPage, '...', ...pages.slice(1)];
  }

  penultimatePage = pages[pages.length - 2];
  lastPage = pages[pages.length - 1];

  if (penultimatePage < lastPage - 2) {
    pages = [...pages.slice(0, -1), '...', lastPage];
  }

  return pages;
};

export default pagination;
