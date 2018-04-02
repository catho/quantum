import React from 'react';
import styled from 'styled-components';

const Props = (storyFn, {story}) => {
  const props =  storyFn().props;

  Object.keys(props).map(key => {
    console.log(`tipo da prop é: ${Object.prototype.toString.call(props[key])} (respeitano)`);
  });

  return (
    <React.Fragment>
    </React.Fragment>
    )
}

export default Props;
