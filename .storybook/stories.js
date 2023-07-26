const docs = ['Introduction'].map((s) => `../stories/${s}/${s}.mdx`);

const foundation = [
  'Colors',
  'Grid',
  'Typography',
  'Theme',
  'Icon',
  'Breakpoints',
  'List',
  'InfiniteScroll',
].map((s) => `../stories/${s}/${s}.mdx`);

const hooks = ['Hooks'].map((s) => `../stories/${s}/${s}.mdx`);

const components = ['../stories/**/!(*.regression).mdx'].filter(Boolean);

const componentsStories = ['../stories/**/*.stories.jsx'];

module.exports = [
  ...docs,
  ...foundation,
  ...hooks,
  ...components,
  ...componentsStories,
];
