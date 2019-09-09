import { calcGutter } from './utils';

describe('Testing ./components/Grid/sub-components/shared/utils.js', () => {
  const gutter = 8;

  describe('function calcGutter', () => {
    it('should return formated gutter', () => {
      const calculedGutter = calcGutter(gutter);
      expect(calculedGutter).toEqual('8px');
    });

    it('should return formated gutter with no gutters', () => {
      const calculedGutter = calcGutter(gutter, true);
      expect(calculedGutter).toEqual('0px');
    });

    it('should return formated gutter with only the value', () => {
      const calculedGutter = calcGutter(gutter, false, true);
      expect(calculedGutter).toEqual('8');
    });

    it('should return formated gutter with no gutters and only the value', () => {
      const calculedGutter = calcGutter(gutter, true, true);
      expect(calculedGutter).toEqual('0');
    });
  });
});
