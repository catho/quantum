const { readFileSync, readdirSync, statSync } = require('fs');
const path = require('path');

const injectCSS = (componentsPath) => {
  const files = readdirSync(componentsPath);

  files.forEach((file) => {
    const filePath = path.join(componentsPath, file);

    if (statSync(filePath).isDirectory()) {
      injectCSS(filePath);
    } else if (file.endsWith('.css')) {
      const cssContent = readFileSync(filePath, 'utf-8');

      const styleElement = document.createElement('style');
      const cssFilePath = path.resolve(__dirname, componentsPath, filePath);
      styleElement.dataset.cssPath = cssFilePath;
      styleElement.appendChild(document.createTextNode(cssContent));
      document.head.appendChild(styleElement);
    }
  });
};

injectCSS(path.join(__dirname, '../components'));
