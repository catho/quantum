import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../../Colors';

const PageButton = styled.a`
  align-items: center;
  background-color: ${({ active }) =>
    active ? Colors.BLUE['500'] : Colors.WHITE};
  border: 1px solid
    ${({ active }) => (active ? Colors.BLUE['500'] : Colors.BLACK['200'])};
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: ${({ active }) => (active ? '700' : 'normal')};
  justify-content: center;
  margin: 0 4px;
  min-height: 40px;
  min-width: 40px;
  outline: none;
  padding: 5px 8px;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out,
    color 0.2s ease-in-out, font-weight 0.2s ease-in-out;

  ${({ active }) => active && `color: ${Colors.WHITE};`};

  :hover,
  :focus {
    background-color: ${({ active }) =>
      active ? Colors.COBALT['500'] : Colors.BLUE['200']};
    border-color: ${({ active }) =>
      active ? Colors.COBALT['500'] : Colors.BLUE['500']};
    color: ${({ active }) => (active ? Colors.WHITE : Colors.BLUE['500'])};
  }
`;

const Page = ({ children, onClick, ...props }) => (
  <PageButton onClick={onClick} {...props}>
    {children}
  </PageButton>
);

Page.displayName = 'Page';

Page.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

Page.defaultProps = {
  active: false,
  onClick: () => {},
};

export default Page;
