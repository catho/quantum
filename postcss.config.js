/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');

const ENV = process.env.NODE_ENV;
const globalStylesFilePath = [
  './components/theme.css',
  './components/_utilities.css',
];

module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [
        require('autoprefixer'),
        require('cssnano')({
          preset: 'default',
        }),
        require('postcss-modules')({
          globalModulePaths: globalStylesFilePath,
          getJSON(cssFilePath, json) {
            if (ENV === 'production' || ENV === 'jest') {
              const tempFolder = path.resolve('.temp');
              if (!fs.existsSync(tempFolder)) {
                fs.mkdirSync(tempFolder);
              }

              const stylesFilePathInComponentsFolder = path.relative(
                './components/',
                cssFilePath,
              );
              const styleFileFolder = path.dirname(
                stylesFilePathInComponentsFolder,
              );
              const styleFilePathInTempFolder = path.resolve(
                '.temp/',
                styleFileFolder,
              );

              if (!fs.existsSync(styleFilePathInTempFolder)) {
                fs.mkdirSync(styleFilePathInTempFolder);
              }

              const mappedStylesFilePath =
                stylesFilePathInComponentsFolder.replace('.css', '.json');
              const mappedStylesFilePathInTempDir = path.resolve(
                `.temp`,
                mappedStylesFilePath,
              );
              const jsonFileContent = JSON.stringify(json);

              fs.writeFileSync(mappedStylesFilePathInTempDir, jsonFileContent);
            }
          },
          generateScopedName: `[name]__[local]___[hash:base64:5]`,
        }),
      ],
    }),
  ],
};
