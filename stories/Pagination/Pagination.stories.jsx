import { useState } from 'react';
import styled from 'styled-components';
import Pagination from '../../components/Pagination';
import MobilePagination from '../../components/Pagination/sub-components/Mobile';

const MobileWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

MobileWrapper.displayName = 'MobileWrapper';
MobilePagination.displayName = 'Pagination';

const Template = args => {
  const { totalPages = 6, ...rest } = args;
  return <Pagination totalPages={totalPages} {...rest} />;
};

const MobileTemplate = args => {
  const { totalPages = 6, ...rest } = args;
  return (
    <MobileWrapper>
      <MobilePagination totalPages={totalPages} {...rest} />
    </MobileWrapper>
  );
};

export const Default = Template.bind({});

export const WithSeveralPagesAndActivePage = Template.bind({});
WithSeveralPagesAndActivePage.args = {
  totalPages: 10,
  activePage: 6,
};

export const WithCustomNextAndPrevButtonText = Template.bind({});
WithCustomNextAndPrevButtonText.args = {
  totalPages: 10,
  prevButtonText: 'Custom Prev Button Text',
  nextButtonText: 'Custom Next Button Text',
  activePage: 6,
};

export const WithPageHref = Template.bind({});
WithPageHref.args = {
  pageHref: page => `/?page=${page}`,
};

export const HideLastPage = Template.bind({});
HideLastPage.args = {
  totalPages: 10,
  hideLastPagination: true,
};

export const MobileWithCustomHelperText = MobileTemplate.bind({});
MobileWithCustomHelperText.args = {
  infoFormatter: (activePage, totalPage) =>
    `${activePage} of ${totalPage} pages`,
};

export const ControlledPagination = () => {
  const [totalPages] = useState(10);
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = page => setActivePage(page);

  return (
    <Pagination
      totalPages={totalPages}
      activePage={activePage}
      onPageClick={handlePageClick}
    />
  );
};
