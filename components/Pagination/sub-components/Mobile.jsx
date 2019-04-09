import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Colors from '../../Colors';
import ActionButton from './ActionButton';

const Info = styled.span`
  border-bottom: 1px solid;
  border-top: 1px solid;
  border-color: ${Colors.BLACK['200']};
  color: ${Colors.BLACK['700']};
  padding: 8px 16px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  :hover {
    background-color: ${Colors.BLUE['200']};
    strong {
      color: ${Colors.BLUE['500']};
    }
  }
`;
const StyledActionButton = styled(ActionButton)`
  border-color: ${Colors.BLACK['200']};

  ${({ rightSquared }) =>
    rightSquared
      ? `
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin: 0;
  `
      : ''}

  ${({ leftSquared }) =>
    leftSquared
      ? `
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin: 0;
  `
      : ''}
`;

const Mobile = ({
  activePage,
  handlePageClick,
  handleHref,
  prevButtonText,
  nextButtonText,
  totalPages,
  infoFormatter,
}) => (
  <>
    <StyledActionButton
      aria-disabled={activePage === 1}
      onClick={handlePageClick(activePage - 1)}
      href={handleHref(activePage - 1)}
      rightSquared
    >
      {prevButtonText}
    </StyledActionButton>

    <Info>{infoFormatter(activePage, totalPages)}</Info>

    <StyledActionButton
      aria-disabled={activePage === totalPages}
      onClick={handlePageClick(activePage + 1)}
      href={handleHref(activePage + 1)}
      leftSquared
    >
      {nextButtonText}
    </StyledActionButton>
  </>
);

Mobile.propTypes = {
  activePage: PropTypes.number,
  totalPages: PropTypes.number.isRequired,
  infoFormatter: PropTypes.func,
  nextButtonText: PropTypes.string,
  prevButtonText: PropTypes.string,
  handleHref: PropTypes.func,
  handlePageClick: PropTypes.func,
};

Mobile.defaultProps = {
  activePage: 1,
  nextButtonText: 'Next',
  prevButtonText: 'Previous',
  infoFormatter: (activePage, lastPage) => `${activePage} of ${lastPage}`,
  handleHref: undefined,
  handlePageClick: undefined,
};

export default Mobile;
