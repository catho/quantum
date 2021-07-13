import React from 'react';

import { Pagination } from '../../components';

export default {
  title: 'Pagination',
};

export const Basic = () => <Pagination totalPages={6} />;

Basic.story = {
  name: 'basic',
};

export const SeveralPagesAndActive = () => (
  <Pagination totalPages={10} activePage={5} />
);

SeveralPagesAndActive.story = {
  name: 'several pages and active',
};

export const CustomNextPrevButtons = () => (
  <Pagination
    prevButtonText="Previous Page"
    nextButtonText="Next Page"
    totalPages={10}
    activePage={5}
  />
);

CustomNextPrevButtons.story = {
  name: 'custom next prev buttons',
};

export const HelperText = () => (
  <Pagination
    totalPages={10}
    infoFormatter={(activePage, totalPage) => `${activePage} of ${totalPage}`}
  />
);

HelperText.story = {
  name: 'helperText',
};
