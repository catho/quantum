// babel-plugin-css-to-js.js

const fs = require('fs');
const path = require('path');

module.exports = function CssToJS({ types: t }) {
  return {
    visitor: {
      ImportDeclaration(specifiers) {
        const environment = process.env.NODE_ENV;
        if (environment === 'production' || environment === 'test') {
          const { node } = specifiers;

          const module = node.source.value;
          if (module.endsWith('.css')) {
            const mappedModuleFile = module.replace('.css', '.json');

            const jsonMapFilePath = path.resolve('./.temp', mappedModuleFile);

            if (!fs.existsSync(jsonMapFilePath)) {
              throw new Error(
                `\n\n JSON map file not found in temporary folder: ${jsonMapFilePath} \n\n`,
              );
            }

            const jsonMapFileContent = fs.readFileSync(jsonMapFilePath, {
              encoding: 'utf8',
            });

            const mapFile = JSON.parse(jsonMapFileContent);

            const importName = node.specifiers[0].local.name;

            const cssVariableName = t.identifier(importName);
            const cssVariableValue = t.objectExpression(
              Object.keys(mapFile).map((originalClassName) =>
                t.objectProperty(
                  t.identifier(originalClassName),
                  t.stringLiteral(mapFile[originalClassName]),
                ),
              ),
            );

            const stylesVarDeclaration = t.variableDeclaration('const', [
              t.variableDeclarator(cssVariableName, cssVariableValue),
            ]);

            specifiers.replaceWith(stylesVarDeclaration);
          }
        }
      },
    },
  };
};
