import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, spacing } from '../../shared/theme';

const Wrapper = styled.div`
  display: inline-block;
  margin: ${({
    theme: {
      spacing: { xxsmall },
    },
  }) => `0 ${xxsmall}px`};
  min-width: 22px;
`;

const Dot = styled.span`
  position: relative;

  ${({
    theme: {
      spacing: { xsmall, medium },
      colors: {
        neutral: { 300: neutral300 },
      },
    },
  }) => `
    &, &:after, &:before {
      background-color: ${neutral300};
      border-radius: 50%;
      display: inline-block;
      height: 5px;
      width: 5px;
    }

    &:after, &:before {
      content: '';
      position: absolute;
      top: 0;
    }

    &:after {
      left: ${xsmall}px;
    }

    &:before {
      left: ${medium}px;
    }
  `}
`;

const Dots = ({
  theme = {
    colors,
    spacing,
  },
  ...props
}) => (
  <Wrapper theme={theme} {...props}>
    <Dot theme={theme} />
  </Wrapper>
);

Dots.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
  }),
};

export default Dots;
