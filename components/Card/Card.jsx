import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const elevation = ({ elevation, hoverElevation }) => {
  const elev = Number(elevation);
  const hovElev = hoverElevation ? Number(hoverElevation) : 0;

  return `
    box-shadow: 0 ${elev * elev}px ${(elev * elev) * 2}px rgba(0, 0, 0, 0.12), 0 ${elev}px ${elev * 2}px rgba(0, 0, 0, 0.24);
    
    ${
      hoverElevation &&
      `&:hover {
        box-shadow: 0 ${hovElev * hovElev}px ${(hovElev * hovElev) * 2}px rgba(0, 0, 0, 0.12), 0 ${hovElev}px ${hovElev * 2}px rgba(0, 0, 0, 0.24);
      }`
    }
  `
};

const CardWrapper = styled.div`
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  margin: 1rem;
  position: relative;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  overflow: hidden;
  width: 300px;
  
  ${elevation};
`;

const Card = props => <CardWrapper {...props} />;

export default Card;