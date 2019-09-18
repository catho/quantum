import React from 'react';
import ProgressBar from '../../../components/ProgressBar';

export default [
  {
    code: '<ProgressBar />',
    component: <ProgressBar />,
  },
  {
    code: '<ProgressBar progressPercent={30} />',
    component: <ProgressBar progressPercent={30} />,
  },
  {
    code: '<ProgressBar progressPercent={30}  label=" percent processed" />',
    component: <ProgressBar progressPercent={30} label=" percent processed" />,
  },
  {
    code:
      '<ProgressBar progressText={70} progressPercent={30} label=" percent to finish" />',
    component: (
      <ProgressBar
        progressText={70}
        progressPercent={30}
        label=" percent to finish"
      />
    ),
  },
  {
    code:
      '<ProgressBar progressText={30} progressPercent={50} label=" seconds to finish" />',
    component: (
      <ProgressBar
        progressText={30}
        progressPercent={50}
        label=" seconds to finish"
      />
    ),
  },
];
