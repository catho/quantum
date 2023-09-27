// babel-plugin-css-to-js.js

const fs = require('fs');
const path = require('path');

module.exports = function CssToJS({ types: t }) {
  return {
    visitor: {
      ImportDeclaration(importPath) {
        if (process.env.NODE_ENV === 'production') {
          const { node } = importPath;

          if (node.source.value.endsWith('.css')) {
            const styleMappingFile = node.source.value.replace('.css', '.json');
            const classMapping = JSON.parse(
              fs.readFileSync(
                path.resolve('./.temp', styleMappingFile),
                'utf8',
              ),
            );

            const cssVariableName = t.identifier('styles');
            const objectExpression = t.objectExpression(
              Object.keys(classMapping).map((originalClassName) =>
                t.objectProperty(
                  t.identifier(originalClassName),
                  t.stringLiteral(classMapping[originalClassName]),
                ),
              ),
            );

            const variableDeclaration = t.variableDeclaration('const', [
              t.variableDeclarator(cssVariableName, objectExpression),
            ]);

            importPath.replaceWith(variableDeclaration);
          }
        }
      },
    },
  };
};
