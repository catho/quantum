/* eslint-disable global-require */

module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [
        require('postcss-modules')({
          getJSON(cssFileName, json) {
            const fs = require('fs');
            const path = require('path');
            const cssName = path.basename(cssFileName, '.css');
            const jsonFileName = path.resolve(`./.temp/${cssName}.json`);
            fs.writeFileSync(jsonFileName, JSON.stringify(json));
          },
        }),
      ],
    }),
    require('autoprefixer'),
    /*
            require('cssnano')({
                preset: 'default',
            }),
        */
  ],
};
