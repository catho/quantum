import { Pagination } from '../../components';

export default {
  title: 'Pagination',
  component: Pagination,
};

const Template = args => {
  const { totalPages = 10, ...otherArgs } = args;

  return <Pagination totalPages={totalPages} {...otherArgs} />;
};

export const Basic = Template.bind({});
Basic.args = {
  totalPages: 6,
};

export const SeveralPagesAndActive = Template.bind({});
SeveralPagesAndActive.args = {
  activePage: 5,
};

export const CustomPreviousAndNextButtons = Template.bind({});
CustomPreviousAndNextButtons.args = {
  ...SeveralPagesAndActive.args,
  prevButtonText: 'Previous Page',
  nextButtonText: 'Next Page',
};

export const HelperText = Template.bind({});
HelperText.args = {
  infoFormatter: (activePage, totalPage) => `${activePage} of ${totalPage}`,
};
