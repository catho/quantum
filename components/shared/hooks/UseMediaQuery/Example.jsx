import React from 'react';
import useMediaQuery from './useMediaQuery';

const ExampleMediaQuery = () => {
  const breakpoint = useMediaQuery(768);

  return breakpoint ? <h1>Less than 768</h1> : <h1>More than 768</h1>;
};

export default ExampleMediaQuery;
