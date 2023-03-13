/* eslint-disable no-console */
require('colors');
const fs = require('fs');

const componentTemplates = require('./templates/component');
const componentStoryTemplates = require('./templates/component-story');

const updateStoriesFile = component => {
  const file = './.storybook/stories.js';

  const data = fs.readFileSync(file, {
    encoding: 'utf-8',
  });

  const dataUpdated = data.replace(',\n]', `,\n\t'${component}',\n]`);

  fs.writeFileSync(file, dataUpdated, { encoding: 'utf-8' });
};

const updateIndexFile = component => {
  const file = './components/index.js';

  const data = fs.readFileSync(file, {
    encoding: 'utf-8',
  });

  let dataUpdated = data.replace(
    '\n\nexport',
    `\nimport ${component} from './${component}';\n\nexport`,
  );

  dataUpdated = dataUpdated.replace(',\n}', `,\n\t${component},\n}`);

  fs.writeFileSync(file, dataUpdated, { encoding: 'utf-8' });
};

const updateIndexTSFile = component => {
  const file = './components/index.d.ts';

  const data = fs.readFileSync(file, {
    encoding: 'utf-8',
  });

  const exportTypedComponent = `export const ${component}: StyledComponent<typeof ${component}Component, ${component}Props>;\n`;

  const dataUpdated = `${data}\n${exportTypedComponent}`;

  fs.writeFileSync(file, dataUpdated, { encoding: 'utf-8' });
};

const componentName = process.argv[2];

if (!componentName) {
  console.error('Please supply a valid component name'.red);
  process.exit(1);
}

const componentDirectory = `./components/${componentName}`;
const componentStoryDirectory = `./stories/${componentName}`;

try {
  console.log(`Creating Component Templates with name: ${componentName}`);

  if (
    fs.existsSync(componentDirectory) ||
    fs.existsSync(componentStoryDirectory)
  ) {
    console.error(`Component ${componentName} already exists`.red);
    process.exit(1);
  }

  fs.mkdirSync(componentDirectory);
  fs.mkdirSync(componentStoryDirectory);

  const generatedComponentTemplates = componentTemplates(componentName);

  generatedComponentTemplates.forEach(generatedTemplate => {
    fs.writeFileSync(
      `${componentDirectory}/${generatedTemplate.name}`,
      generatedTemplate.content,
    );
  });

  const generatedComponentStoryTemplates = componentStoryTemplates(
    componentName,
  );

  generatedComponentStoryTemplates.forEach(generatedTemplate => {
    fs.writeFileSync(
      `${componentStoryDirectory}/${generatedTemplate.name}`,
      generatedTemplate.content,
    );
  });

  updateStoriesFile(componentName);
  updateIndexFile(componentName);
  updateIndexTSFile(componentName);

  console.log(
    `Successfully create component under: ${componentDirectory}`.green,
  );
  console.log(
    `Successfully create component story under: ${componentStoryDirectory}`
      .green,
  );
} catch (error) {
  if (fs.existsSync(componentDirectory)) {
    fs.rmdirSync(componentDirectory, { recursive: true });
  }

  if (fs.existsSync(componentStoryDirectory)) {
    fs.rmdirSync(componentStoryDirectory, { recursive: true });
  }

  process.exit(1);
}
