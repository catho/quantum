import React from 'react';
import { storiesOf } from '@storybook/react';

import { Pagination } from '../../components';

storiesOf('Pagination', module)
  .add('default', () => <Pagination />)
  .add('basic', () => <Pagination totalPages={6} />)
  .add('several pages and active', () => (
    <Pagination totalPages={10} activePage={5} />
  ))
  .add('custom next prev buttons', () => (
    <Pagination
      prevButtonText="Previous Page"
      nextButtonText="Next Page"
      totalPages={10}
      activePage={5}
    />
  ))
  .add('helperText', () => (
    <Pagination
      totalPages={10}
      infoFormatter={(activePage, totalPage) => `${activePage} of ${totalPage}`}
    />
  ));
