import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './sub-components/Item';

const Container = styled.div`
  padding: 10px;
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
      width: 30px;
      height: 30px;
      content: '';
      line-height: 30px;
      border: 2px solid #7d7d7d;
      display: block;
      text-align: center;
      margin: 0 auto 10px auto;
      border-radius: 50%;
      background-color: white;
  }
   li:after {
      width: 100%;
      height: 2px;
      content: '';
      position: absolute;
      background-color: #7d7d7d;
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
      border-color: #55b776;
  }
  li.active + li:after {
      background-color: #55b776;
  }
  li p {
    position: relative;
    top: -60px;
  }
`;

class Steps extends React.Component {
  render() {
    const stepList = [
      { title: 'Step 1', active: true, icon: '1' },
      { title: 'Step 2', active: true, icon: '2' },
      { title: 'Step 3', active: false, icon: '3' }
    ];

    return (
      <React.Fragment>
        <Container>
          <ProgressBar>
          {stepList.map(step => <Item {...step} />)}
          </ProgressBar>
        </Container>
      </React.Fragment>
    );
  }
}

// Steps.propTypes = {
//   name: PropTypes.string,
// };
//
// Steps.defaultProps = {
//   name: 'Steps',
// };

export default Steps;
