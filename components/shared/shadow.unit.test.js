import shadow from './shadow';
import theme, { colors } from './theme';
import hexToRgba from './hexToRgba';
import { normalizeCSS } from '../GlobalStyle/test.utils';

const [opacity0, opacity1, opacity2] = [0.2, 0.14, 0.12];
const normalize = str => normalizeCSS(str.trimLeft().split('\n'));

describe('Shadow helper', () => {
  describe('without a color', () => {
    it('should get the correct elevation style', () => {
      const {
        neutral: { 700: defaultColor },
      } = colors;

      expect(normalize(shadow()({ theme }))).toBe(
        normalize(`
          box-shadow:
            0px 0px 0px 0px ${hexToRgba(defaultColor, opacity0)},
            0px 0px 0px 0px ${hexToRgba(defaultColor, opacity1)},
            0px 0px 0px 0px ${hexToRgba(defaultColor, opacity2)};
          `),
      );
      expect(normalize(shadow(0)({ theme }))).toBe(
        normalize(`
          box-shadow:
            0px 0px 0px 0px ${hexToRgba(defaultColor, opacity0)},
            0px 0px 0px 0px ${hexToRgba(defaultColor, opacity1)},
            0px 0px 0px 0px ${hexToRgba(defaultColor, opacity2)};
          `),
      );
      expect(normalize(shadow(2)({ theme }))).toBe(
        normalize(`
          box-shadow:
            0px 3px 1px -2px ${hexToRgba(defaultColor, opacity0)},
            0px 2px 2px 0px ${hexToRgba(defaultColor, opacity1)},
            0px 1px 5px 0px ${hexToRgba(defaultColor, opacity2)};
          `),
      );
    });
  });

  describe('with a color', () => {
    it('should get the correct elevation style', () => {
      const {
        primary: { 100: first },
        secondary: { 300: second },
        success: { 500: third },
      } = colors;

      expect(normalize(shadow(5, first)({ theme }))).toBe(
        normalize(
          `box-shadow:
            0px 3px 5px -1px ${hexToRgba(first, opacity0)},
            0px 5px 8px 0px ${hexToRgba(first, opacity1)},
            0px 1px 14px 0px ${hexToRgba(first, opacity2)};
          `,
        ),
      );
      expect(normalize(shadow(9, second)({ theme }))).toBe(
        normalize(
          `box-shadow:
            0px 5px 6px -3px ${hexToRgba(second, opacity0)},
            0px 9px 12px 1px ${hexToRgba(second, opacity1)},
            0px 3px 16px 2px ${hexToRgba(second, opacity2)};
          `,
        ),
      );
      expect(normalize(shadow(15, third)({ theme }))).toBe(
        normalize(
          `box-shadow:
            0px 8px 9px -5px ${hexToRgba(third, opacity0)},
            0px 15px 22px 2px ${hexToRgba(third, opacity1)},
            0px 6px 28px 5px ${hexToRgba(third, opacity2)};
          `,
        ),
      );
    });
  });
});
