import path from 'path';
import fs from 'fs';

const copyFile = file => {
  const buildPath = path.resolve(__dirname, '../dist/', path.basename(file));
  fs.copyFile(file, buildPath, () =>
    console.log(`Copied ${file} to ${buildPath}`),
  );
};

const createPackageJson = () => {
  const packageData = fs.readFileSync(
    path.resolve(__dirname, '../package.json'),
    'utf8',
  );
  const {
    scripts,
    devDependencies,
    'lint-staged': lintStaged,
    jest,
    ...packageDataOther
  } = JSON.parse(packageData);
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
  ['CHANGELOG.md', 'README.md'].map(copyFile);
  createPackageJson();
};

run();
