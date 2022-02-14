import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import 'snapshot-diff/extend-expect';

import matchMediaMock from './components/shared/helpers';

Enzyme.configure({ adapter: new Adapter() });
matchMediaMock();
