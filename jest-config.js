import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

if (typeof window !== 'undefined') {
  // eslint-disable-next-line func-names
  window.matchMedia =
    window.matchMedia ||
    function() {
      return {
        matches: false,
        addListener() {},
        removeListener() {},
      };
    };
}
