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

const getNumberPages = (active, total) => {
  if (active <= 3 || active === total) {
    return 4;
  }

  return 3;
};

const pagination = ({
  totalPages = 1,
  activePage = 1,
  hideLastPagination = false,
} = {}) => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const initialPages = [
    1,
    ...Array.from(
      { length: getNumberPages(activePage, totalPages) },
      (_, i) => i + centerRule({ total: totalPages, active: activePage }),
    ),
    totalPages,
  ];

  let visiblePages = initialPages.filter(
    (page, index, array) => array.indexOf(page) === index,
  );

  let [firstPage, secondPage] = visiblePages;

  if (secondPage === firstPage + 2) {
    visiblePages = [firstPage, firstPage + 1, ...visiblePages.slice(1)];
  }

  let {
    [visiblePages.length - 2]: penultimatePage,
    [visiblePages.length - 1]: lastPage,
  } = visiblePages;

  if (penultimatePage === lastPage - 2) {
    visiblePages = [...visiblePages.slice(0, -1), lastPage - 1, lastPage];
  }

  [firstPage, secondPage] = visiblePages;

  if (secondPage > firstPage + 2) {
    visiblePages = [firstPage, '...', ...visiblePages.slice(1)];
  }

  penultimatePage = visiblePages[visiblePages.length - 2];
  lastPage = visiblePages[visiblePages.length - 1];

  if (penultimatePage < lastPage - 2) {
    visiblePages = [...visiblePages.slice(0, -1), '...'];

    if (!hideLastPagination) {
      visiblePages = [...visiblePages, lastPage];
    }
  }

  return visiblePages;
};

export default pagination;
