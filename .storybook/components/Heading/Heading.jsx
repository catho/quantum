import React from 'react';
import styled from 'styled-components';
import atomImage from '../../../stories/static/atom.svg';
import formulaImage from '../../../stories/static/formula.svg';

const Heading = ({ atom, title, children }) => (
  <React.Fragment>
    {
      <TabbedViewTitle>
        <img src={atom ? atomImage : formulaImage} width="60" height="60"/>
        {
          atom &&
          `<${title} />`
        }
        {
          !atom &&
          `${title}`
        }
      </TabbedViewTitle>
    }
    { children }
  </React.Fragment>
);

const Title = styled.h1`
  position:relative;
  padding: 60px 20px;
  top: -10px;
  left:-20px;
  width:120%;
  background-color: #f8f7f7;
`;

const TabbedViewTitle = styled.h1`
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: left;
  font-weight: normal;
  padding: 15px 0;
  margin: 0;
  font-size: 32px;

  img {
    margin-right: 10px;
  }
`

export default Heading;
