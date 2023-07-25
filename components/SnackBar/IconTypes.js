import { components } from '../shared/theme';

const GetSkinIcon = (skin) => {
  const {
    snackbar: {
      skins: {
        [skin]: { icon: skinIcon },
      },
    },
  } = components;

  return skinIcon;
};

const GetAllSkinsIcons = () => {
  const {
    snackbar: { skins },
  } = components;
  const icons = {};

  Object.entries(skins).forEach(([key]) => {
    if (GetSkinIcon(key) !== '') icons[key] = GetSkinIcon(key);

    return icons;
  });

  return icons;
};

export { GetSkinIcon, GetAllSkinsIcons };
