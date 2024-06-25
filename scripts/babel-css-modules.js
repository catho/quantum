// babel-plugin-css-to-js.js

const fs = require('fs');
const path = require('path');

module.exports = function CssToJS({ types: t }) {
  return {
    visitor: {
      ImportDeclaration(specifiers, source) {
        const environment = process.env.NODE_ENV;
        if (environment === 'production' || environment === 'test') {
          const { node } = specifiers;

          const importedModulePath = node.source.value;
          if (importedModulePath.endsWith('.css')) {
            const componentDirPath = path.dirname(source.filename);
            const styleFilePath = path.resolve(
              componentDirPath,
              importedModulePath,
            );
            const styleFilePathInComponentsFolder = path.relative(
              'components',
              styleFilePath,
            );

            const mappedStylesFilePath =
              styleFilePathInComponentsFolder.replace('.css', '.json');
            const mappedStylesFilePathInTempDir = path.resolve(
              './.temp',
              mappedStylesFilePath,
            );

            if (!fs.existsSync(mappedStylesFilePathInTempDir)) {
              throw new Error(
                `\n\n JSON map file not found in temporary folder: ${mappedStylesFilePathInTempDir} \n\n`,
              );
            }

            const jsonMapFileContent = fs.readFileSync(
              mappedStylesFilePathInTempDir,
              {
                encoding: 'utf8',
              },
            );

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
