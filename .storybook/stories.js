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

const componentsStories = ['../stories/**/*.stories.jsx'];

module.exports = [...docs, ...foundation, ...hooks, ...componentsStories];
