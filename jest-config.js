import 'jest-styled-components'; // Must be maintained while migrating components to CSS modules
import '@testing-library/jest-dom';
import 'snapshot-diff/extend-expect';
import './scripts/JestCSSModulesSerializer';

import matchMediaMock from './components/shared/helpers';

matchMediaMock();
