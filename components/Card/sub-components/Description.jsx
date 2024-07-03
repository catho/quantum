import styled from 'styled-components';

import {
  baseFontSize as defaultBaseFontSize,
  spacing,
} from '../../shared/theme';

const Content = styled.div`
  ${({
    small,
    theme: {
      baseFontSize,
      spacing: { xsmall },
    },
  }) => `
    font-size: ${small ? baseFontSize * 0.75 : baseFontSize * 0.875}px;
    margin: ${xsmall}px 0 0 0;
  `}
`;

const Description = ({
  small = false,
  theme = {
    baseFontSize: defaultBaseFontSize,
    spacing,
  },
  ...props
}) => <Content small={small} theme={theme} {...props} />;

Description.displayName = 'Card.Description';

export default Description;
