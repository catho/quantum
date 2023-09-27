/* eslint-disable global-require */

module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [
        require('postcss-modules')({
          getJSON(cssFileName, json) {
            // Condition is necessary if postcss-loader used in storybook webpack
            if (process.env.NODE_ENV === 'production') {
              const fs = require('fs');
              const path = require('path');

              const tempDir = path.resolve('.temp');
              if (!fs.existsSync(tempDir)) {
                fs.mkdirSync(tempDir);
              }

              const cssName = path.basename(cssFileName, '.css');
              const jsonFile = path.resolve(`./.temp/${cssName}.json`);
              const jsonContent = JSON.stringify(json);

              fs.writeFileSync(jsonFile, jsonContent);
            }
          },
        }),
        require('autoprefixer'),
        /*
          require('cssnano')({
              preset: 'default',
          }),
        */
      ],
    }),
  ],
};
