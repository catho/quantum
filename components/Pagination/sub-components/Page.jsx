import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../../Colors';

const PageButton = styled.button`
  align-items: center;
  background-color: ${({ active }) =>
    active ? Colors.BLUE['500'] : Colors.WHITE};
  border: 1px solid ${({ active }) => (active ? Colors.BLUE['500'] : '#d3d3d3')};
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: ${({ active }) => (active ? '700' : 'normal')};
  justify-content: center;
  min-height: 40px;
  min-width: 40px;
  outline: none;
  padding: 5px 8px;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out,
    color 0.2s ease-in-out;

  ${({ active }) => active && `color: ${Colors.WHITE};`};

  :hover,
  :focus {
    background-color: ${Colors.BLUE['200']};
    border-color: ${Colors.BLUE['500']};
    color: ${Colors.BLUE['500']};
  }
`;

const Page = ({ children, onClick, ...props }) => {
  return (
    <PageButton onClick={onClick} {...props}>
      {children}
    </PageButton>
  );
};

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
