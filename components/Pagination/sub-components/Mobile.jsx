import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ActionButton from './ActionButton';
import { colors, spacing } from '../../shared/theme';

const Info = styled.span`
  border-bottom: 1px solid;
  border-top: 1px solid;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  ${({
    theme: {
      colors: {
        neutral: { 300: neutral300, 700: neutral700 },
        primary: { 100: primary100, 500: primary500 },
      },
      spacing: { xsmall, medium },
    },
  }) => `
    border-color: ${neutral300};
    color: ${neutral700};
    padding: ${xsmall}px ${medium}px;

    :hover {
      background-color: ${primary100};
      strong {
        color: ${primary500};
      }
    }
  `}
`;
const StyledActionButton = styled(ActionButton)`
  ${({
    theme: {
      colors: {
        neutral: { 300: neutral300 },
      },
    },
  }) => `
    border-color: ${neutral300};
  `}

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

Info.displayName = 'Info';

const Mobile = ({
  activePage,
  handlePageClick,
  handleHref,
  prevButtonText,
  nextButtonText,
  totalPages,
  infoFormatter,
  theme,
}) => (
  <>
    <StyledActionButton
      tabIndex={0}
      aria-disabled={activePage === 1}
      onClick={handlePageClick(activePage - 1)}
      href={handleHref(activePage - 1)}
      rightSquared
      theme={theme}
    >
      {prevButtonText}
    </StyledActionButton>

    <Info theme={theme}>{infoFormatter(activePage, totalPages)}</Info>

    <StyledActionButton
      tabIndex={0}
      aria-disabled={activePage === totalPages}
      onClick={handlePageClick(activePage + 1)}
      href={handleHref(activePage + 1)}
      leftSquared
      theme={theme}
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
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
  }),
};

Mobile.defaultProps = {
  activePage: 1,
  nextButtonText: 'Next',
  prevButtonText: 'Previous',
  infoFormatter: (activePage, lastPage) => `${activePage} of ${lastPage}`,
  handleHref: () => {},
  handlePageClick: () => {},
  theme: {
    colors,
    spacing,
  },
};

export default Mobile;
