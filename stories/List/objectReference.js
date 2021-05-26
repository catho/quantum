const exampleItemsDefault = [
  { content: 'Lorem ipsum dolor sit amet' },
  { content: 'Sed do eiusmod tempor ' },
  { content: 'Consectetur adipiscing elit' },
];

exampleItemsDefault.code = `
  const exampleItemsDefault = [
    { content: "Lorem ipsum dolor sit amet" },
    { content: "Sed do eiusmod tempor " },
    { content: "Consectetur adipiscing elit" },
  ];
  `;

const exampleItemsWithHeaderAndSubHeader = [
  { header: 'Lorem ipsum ', subheader: 'dolor sit amet' },
  { header: 'Sed', subheader: 'do eiusmod tempor ' },
  { header: 'Consectetur', subheader: 'adipiscing elit' },
];

exampleItemsWithHeaderAndSubHeader.code = `
  const exampleItemsWithHeaderAndSubHeader = [
    { header: "Lorem ipsum ", subheader: "dolor sit amet" },
    { header: "Sed", subheader: "do eiusmod tempor " },
    { header: "Consectetur", subheader: "adipiscing elit" },
  ];
  `;

const exampleItemsWithIcon = [
  { icon: 'close' },
  { icon: 'accessible' },
  { icon: 'block' },
];

exampleItemsWithIcon.code = `
  const exampleItemsWithIcon = [
    { icon: 'close' },
    { icon: 'accessible' },
    { icon: 'block' },
  ];`;

export {
  exampleItemsDefault,
  exampleItemsWithHeaderAndSubHeader,
  exampleItemsWithIcon,
};
