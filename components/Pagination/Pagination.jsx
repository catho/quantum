import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Page from './sub-components/Page';
import ActionButton from './sub-components/ActionButton';
import Dots from './sub-components/Dots';

import pagination from './utils/pagination';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 16px !important;
`;

const generateDotsKey = index => `dots-${index}`;

const Pagination = ({
  activePage,
  nextButtonText,
  prevButtonText,
  onClick,
  totalPages,
  ...props
}) => (
  <Wrapper {...props}>
    <ActionButton
      disabled={activePage === 1}
      onClick={() => onClick(activePage - 1)}
    >
      {prevButtonText}
    </ActionButton>
    {pagination({ totalPages, activePage }).map((page, index) => {
      if (page === '...') {
        return <Dots key={generateDotsKey(index)} />;
      }

      return (
        <Page
          key={page}
          active={activePage === page}
          onClick={() => onClick(page)}
        >
          {page}
        </Page>
      );
    })}

    <ActionButton
      disabled={activePage === totalPages}
      onClick={() => onClick(activePage + 1)}
    >
      {nextButtonText}
    </ActionButton>
  </Wrapper>
);

Pagination.propTypes = {
  activePage: PropTypes.number,
  totalPages: PropTypes.number.isRequired,
  nextButtonText: PropTypes.string,
  prevButtonText: PropTypes.string,
  onClick: PropTypes.func,
};

Pagination.defaultProps = {
  activePage: 1,
  nextButtonText: 'Next',
  prevButtonText: 'Previous',
  onClick: () => {},
};

export default Pagination;
