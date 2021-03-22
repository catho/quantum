const defaultContent = [
  {
    label: 'Profissional',
    value: 'profissional',
  },
  {
    label: 'Operacional',
    value: 'operacional',
    checked: true,
  },
  {
    label: 'Estagiário',
    value: 'estagiário',
  },
];

defaultContent.code = `
  const defaultContent = [
    {
      label: 'Profissional',
      value: 'profissional',
    },
    {
      label: 'Operacional',
      value: 'operacional',
      checked: true,
    },
    {
      label: 'Estagiário',
      value: 'estagiário',
    },
  ];
`;
const defaultContentWithoutCheckedItems = [
  {
    label: 'Profissional',
    value: 'profissional',
  },
  {
    label: 'Operacional',
    value: 'operacional',
  },
  {
    label: 'Estagiário',
    value: 'estagiário',
  },
];

const twoContents = [
  {
    label: 'Profissional',
    value: 'profissional',
  },
  {
    label: 'Operacional',
    value: 'operacional',
    checked: true,
  },
];

const fiveContentsWithFirstChecked = [
  {
    label: 'Profissional',
    value: 'profissional',
    icon: 'info',
    checked: true,
  },
  {
    label: 'Operacional',
    value: 'operacional',
    icon: 'block',
  },
  {
    label: 'Estagiário',
    value: 'estagiário',
    icon: 'date_range',
  },
  {
    label: 'Maquinário',
    value: 'maquinário',
    icon: 'error',
  },
  {
    label: 'Favorito',
    value: 'favorito',
    icon: 'favorite_border',
  },
];

const fiveContentsWithIcon = [
  {
    label: 'Profissional',
    value: 'profissional',
    icon: 'info',
  },
  {
    label: 'Operacional',
    value: 'operacional',
    checked: true,
    icon: 'block',
  },
  {
    label: 'Estagiário',
    value: 'estagiário',
    icon: 'date_range',
  },
  {
    label: 'Maquinário',
    value: 'maquinário',
    icon: 'error',
  },
  {
    label: 'Favorito',
    value: 'favorito',
    icon: 'favorite_border',
  },
];

const fiveContentsWithIconAndWithoutCheckedItems = [
  {
    label: 'Profissional',
    value: 'profissional',
    icon: 'info',
  },
  {
    label: 'Operacional',
    value: 'operacional',
    icon: 'block',
  },
  {
    label: 'Estagiário',
    value: 'estagiário',
    icon: 'date_range',
  },
  {
    label: 'Maquinário',
    value: 'maquinário',
    icon: 'error',
  },
  {
    label: 'Favorito',
    value: 'favorito',
    icon: 'favorite_border',
  },
];

const thresContentsWithIcon = [
  {
    label: 'Profissional',
    value: 'profissional',
    icon: 'info',
  },
  {
    label: 'Operacional',
    value: 'operacional',
    checked: true,
    icon: 'block',
  },
  {
    label: 'Estagiário',
    value: 'estagiário',
    icon: 'date_range',
  },
];

thresContentsWithIcon.code = `
  const thresContentsWithIcon = [
    {
      label: 'Profissional',
      value: 'profissional',
      icon: 'info',
    },
    {
      label: 'Operacional',
      value: 'operacional',
      checked: true,
      icon: 'block',
    },
    {
      label: 'Estagiário',
      value: 'estagiário',
      icon: 'date_range',
    },
  ];`;

const nContents = [
  {
    label: 'Profissional',
    value: 'profissional',
  },
  {
    label: 'Operacional',
    value: 'operacional',
    checked: true,
  },
  {
    label: 'Estagiário',
    value: 'estagiário',
  },
  {
    label: 'Maquinário',
    value: 'maquinário',
  },
  {
    label: 'Favorito',
    value: 'favorito',
  },
  {
    label: 'Empreiteiro',
    value: 'Empreiteiro',
  },
  {
    label: 'Padeiro',
    value: 'padeiro',
  },
];

export {
  defaultContent,
  defaultContentWithoutCheckedItems,
  twoContents,
  fiveContentsWithIcon,
  fiveContentsWithFirstChecked,
  fiveContentsWithIconAndWithoutCheckedItems,
  thresContentsWithIcon,
  nContents,
};
