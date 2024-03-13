/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');

const ENV = process.env.NODE_ENV;

module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [
        require('autoprefixer'),
        require('cssnano')({
          preset: 'default',
        }),
        require('postcss-modules')({
          getJSON(cssFilePath, json) {
            if (ENV === 'production' || ENV === 'jest') {
              const tempFolder = path.resolve('.temp');
              if (!fs.existsSync(tempFolder)) {
                fs.mkdirSync(tempFolder);
              }

              const stylesFileNameWithouExtension = path.basename(
                cssFilePath,
                '.css',
              );
              const jsonFilePath = path.resolve(
                `./.temp/${stylesFileNameWithouExtension}.json`,
              );
              const jsonFileContent = JSON.stringify(json);

              fs.writeFileSync(jsonFilePath, jsonFileContent);
            }
          },
          generateScopedName: `[name]__[local]___[hash:base64:5]`,
        }),
      ],
    }),
  ],
};
