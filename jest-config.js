import 'jest-styled-components';
import '@testing-library/jest-dom';
import 'snapshot-diff/extend-expect';
import './scripts/injectCssInDocument';

import matchMediaMock from './components/shared/helpers';

matchMediaMock();
