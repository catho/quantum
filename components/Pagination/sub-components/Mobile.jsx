import PropTypes from 'prop-types';
import styled from 'styled-components';

import ActionButton from './ActionButton';
import { colors, spacing } from '../../shared/theme';

const Info = styled.span`
  border-bottom: 1px solid;
  border-top: 1px solid;
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;

  ${({
    theme: {
      colors: {
        neutral: { 300: neutral300, 700: neutral700 },
      },
      spacing: { xsmall, medium },
    },
  }) => `
    border-color: ${neutral300};
    color: ${neutral700};
    padding: ${xsmall}px ${medium}px;
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
    border-radius: 10px;
    border-width: 1px;

    &[aria-disabled=true] {
      color: ${neutral300};
      display: block;
    }

    &[aria-disabled=false] {
      :focus {
        border-width: 1px;
      }
    }
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
  followOnlyFirstPage,
}) => (
  <>
    <StyledActionButton
      tabIndex={0}
      aria-disabled={activePage === 1}
      onClick={handlePageClick(activePage - 1)}
      href={handleHref(activePage - 1)}
      rightSquared
      theme={theme}
      rel={followOnlyFirstPage && activePage > 2 ? 'nofollow' : undefined}
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
      rel={followOnlyFirstPage ? 'nofollow' : undefined}
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
  followOnlyFirstPage: PropTypes.bool,
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
  followOnlyFirstPage: false,
};

export default Mobile;
