import hexToRgba from './hexToRgba';

describe('Hex To RGBA helper', () => {
  it('should convert correctly', () => {
    expect(hexToRgba('#f1c245')).toBe('rgba(241,194,69,1)');
    expect(hexToRgba('#cf1426', 0.5)).toBe('rgba(207,20,38,0.5)');
    expect(hexToRgba('eb46f1')).toBe('rgba(235,70,241,1)');
    expect(hexToRgba('#ccc')).toBe('rgba(204,204,204,1)');
    expect(hexToRgba('fff')).toBe('rgba(255,255,255,1)');
    expect(hexToRgba('#444', 0.4)).toBe('rgba(68,68,68,0.4)');
  });
});
