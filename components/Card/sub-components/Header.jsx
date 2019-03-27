import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  padding: 20px 20px 0;

  > * {
    margin-right: 18px;
  }

  > *:last-child {
    margin-right: 0;
  }
`;

Header.displayName = 'Card.Header';

export default Header;
