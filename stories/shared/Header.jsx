import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Unstyled } from '@storybook/addon-docs';
import { theme } from '../../components/shared';

import ArrowLeft from '../../.storybook/static/arrow-left.png';
import ArrowRight from '../../.storybook/static/arrow-right.png';

const {
  spacing: { large },
  colors: { secondary, neutral },
} = theme;

const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: ${large}px;

  background: linear-gradient(
    101.73deg,
    #0023a0 25.56%,
    ${secondary[700]} 99.08%
  );
  z-index: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
  }

  &::before {
    background: url(${ArrowLeft}) no-repeat left top;
  }

  &::after {
    background: url(${ArrowRight}) no-repeat right bottom;
  }

  & > div {
    width: 100%;
    z-index: 1;
  }

  h1,
  p {
    color: ${neutral[0]};
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 87%;
  padding-bottom: 90px;
`;

const Title = styled.h1`
  align-items: center;
  color: #294661;
  display: flex;
  flex-direction: row;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 60px;
  margin: 0 0 30px 0;
  padding: 90px 0 0 0;
  text-align: left;

  ${({ as }) => as === 'h2' && `font-size: 30px;`}
  ${({ as }) => as === 'h3' && `font-size: 24px;`}
`;

const Header = ({ title, children }) => (
  <Unstyled>
    <HeaderWrapper>
      <Container>
        <Title>{title}</Title>
        <p>{children}</p>
      </Container>
    </HeaderWrapper>
  </Unstyled>
);

Header.defaultProps = {
  children: undefined,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Header;
