import path from 'path';
import fs from 'fs';
import pkg from '../package.json';

const copyFile = (file) => {
  let filePath;

  if (file === 'index.css') {
    filePath = path.resolve(__dirname, '../.temp/', file);
  }

  const pathDir = path.resolve(__dirname, '../dist/', path.basename(file));
  fs.copyFile(filePath || file, pathDir, () =>
    console.log(`Copied ${file} to ${pathDir}`),
  );
};

const createPackageJson = () => {
  const {
    scripts,
    devDependencies,
    'lint-staged': lintStaged,
    jest,
    config,
    publishConfig,
    release,
    ...packageDataOther
  } = pkg;

  const newPackageData = {
    ...packageDataOther,
    main: './index.js',
    private: false,
  };

  const buildPath = path.resolve(__dirname, '../dist/package.json');

  fs.writeFileSync(buildPath, JSON.stringify(newPackageData, null, 2), 'utf8');
  console.log(`Created package.json in ${buildPath}`);

  return newPackageData;
};

const run = () => {
  ['CHANGELOG.md', 'README.md', 'index.css'].map(copyFile);
  createPackageJson();
};

run();
