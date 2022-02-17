import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import 'snapshot-diff/extend-expect';

import matchMediaMock from './components/shared/helpers';

global.React = React;

matchMediaMock();
