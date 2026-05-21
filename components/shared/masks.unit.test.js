import masks from './masks';

describe('Masks helper', () => {
  it('should support alphanumeric CNPJ and keep check digits numeric', () => {
    expect(masks.cnpj).toHaveLength(18);
    expect(masks.cnpj[2]).toBe('.');
    expect(masks.cnpj[6]).toBe('.');
    expect(masks.cnpj[10]).toBe('/');
    expect(masks.cnpj[15]).toBe('-');

    const cnpjRegexTokens = masks.cnpj.filter(
      (token) => token instanceof RegExp,
    );
    expect(cnpjRegexTokens).toHaveLength(14);

    cnpjRegexTokens.slice(0, 12).forEach((token) => {
      expect(token.test('A')).toBe(true);
      expect(token.test('7')).toBe(true);
      expect(token.test('@')).toBe(false);
    });

    cnpjRegexTokens.slice(12).forEach((token) => {
      expect(token.test('A')).toBe(false);
      expect(token.test('7')).toBe(true);
      expect(token.test('@')).toBe(false);
    });
  });
});
