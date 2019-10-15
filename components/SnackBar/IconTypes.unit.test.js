import { GetSkinIcon, GetAllSkinsIcons } from './IconTypes';
import { components } from '../shared/theme';

const {
  snackbar: { skins },
} = components;

const themeIcons = {};
Object.entries(skins).forEach(([key]) => {
  if (GetSkinIcon(key) !== '') themeIcons[key] = GetSkinIcon(key);

  return themeIcons;
});

describe('IconTypes unit tests', () => {
  it('should skin returns its matched skin icon', () => {
    Object.entries(GetAllSkinsIcons()).forEach(([skin, skinIconName]) => {
      expect(GetSkinIcon(skin)).toMatch(skinIconName);
    });
  });

  it('should neutral skin not returns skin icon', () => {
    expect(GetSkinIcon('neutral')).toMatch('');
  });

  it('should GetAllSkinsIcons returns the correct theme object', () => {
    expect(GetAllSkinsIcons()).toMatchObject(themeIcons);
  });
});
