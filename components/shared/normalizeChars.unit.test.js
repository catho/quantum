import normalizeChars from './normalizeChars';

describe('normalizeChars function', () => {
  it('remove special chars in string correctly', () => {
    expect(normalizeChars('São Paulo')).toBe('Sao Paulo');
    expect(normalizeChars('río-de-Jâneiro')).toBe('rio de Janeiro');
    expect(normalizeChars('ãçí_-aâsd')).toBe('aci  aasd');
  });
});
