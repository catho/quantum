import React from 'react';
import useMaxWidthMediaQuery from './useMaxWidthMediaQuery';

const ExampleMediaQuery = () => {
  const breakpoint = useMaxWidthMediaQuery(768);

  return breakpoint ? <h1>Less than 768</h1> : <h1>More than 768</h1>;
};

export default ExampleMediaQuery;
