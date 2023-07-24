const docs = ['Introduction'].map(
  (s) => `../stories/${s}/${s}.story.@(jsx|mdx)`,
);

const foundation = [
  'Colors',
  'Grid',
  'Typography',
  'Theme',
  'Icon',
  'Breakpoints',
  'List',
  'InfiniteScroll',
].map((s) => `../stories/${s}/${s}.story.@(jsx|mdx)`);

const hooks = ['Hooks'].map((s) => `../stories/${s}/${s}.story.@(jsx|mdx)`);

const components = ['../stories/**/!(*.regression).story.@(jsx|mdx)'].filter(
  Boolean,
);

module.exports = [...docs, ...foundation, ...hooks, ...components];
