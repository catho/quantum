import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './sub-components/Item';

const Container = styled.div`
  padding: 0;
  margin: 0;
`;

const ProgressBar = styled.ul`
  li {
      list-style-type: none;
      width: 25%;
      float: left;
      font-size: 12px;
      position: relative;
      text-align: center;
      color: #7d7d7d;
  }
  li:before {
      width: 32px;
      height: 32px;
      content: '';
      line-height: 30px;
      border: 2px solid #a0a0a0;
      display: block;
      text-align: center;
      margin: 0 auto 10px auto;
      border-radius: 50%;
      background-color: white;
  }
   li:after {
      width: 100%;
      height: 1px;
      content: '';
      position: absolute;
      background-color: #a0a0a0;
      top: 15px;
      left: -50%;
      z-index: -1;
  }
  li:first-child:after {
      content: none;
  }
  li.active {
      color: #404040;
  }
  li.active:before {
      border-color: #165ea3;
  }
  li.active + li:after {
      background-color: #165ea3;
  }
  li p {
    position: relative;
    top: -60px;
  }
`;

const stepList = [
  { title: 'Step 1', active: true, icon: '1' },
  { title: 'Step 2', active: true, icon: '2' },
  { title: 'Step 3', active: false, icon: '3' },
];

const Steps = () => (
  <React.Fragment>
    <Container>
      <ProgressBar>
        {stepList.map(step => <Item {...step} />)}
      </ProgressBar>
    </Container>
  </React.Fragment>
);

// Steps.propTypes = {
//   name: PropTypes.string,
// };
//
// Steps.defaultProps = {
//   name: 'Steps',
// };

export default Steps;
