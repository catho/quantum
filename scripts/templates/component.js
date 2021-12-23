module.exports = componentName => [
  {
    content: `// Generated with scripts/create-componnent.js
import React from 'react';
import PropTypes from 'prop-types';

const ${componentName} = ({ someProp }) => (
  <>
    <h1>Hello, do domething here!</h1>
    <p>{someProp}</p>
  </>
)

${componentName}.propTypes = {
  someProp: PropTypes.string,
}

${componentName}.defaultProps = {
  someProp: 'some prop',
}

export default ${componentName};
    `,
    name: `${componentName}.jsx`,
  },
  {
    content: `// Generated with scripts/create-componnent.js
import React from 'react';
import { create } from 'react-test-renderer';

import ${componentName} from './${componentName}';

describe(<${componentName} />, () => {
  it('should math the snapshots', () => {
    expect(
      create(<${componentName} />)
        .toJson(),
    ).toMatchSnapshot();
  })
})
  `,
    name: `${componentName}.unit.test.jsx`,
  },
  {
    content: `// Generated with scripts/create-componnent.js
import ${componentName} from './${componentName}';

export default ${componentName};
    `,
    name: `index.js`,
  },
  {
    content: `
// Generated with scripts/create-componnent.js
import React from 'react';

export interface ${componentName}Props {
  someProp?: string;
}

export default class ${componentName} extends React.Component<${componentName}Props> {}
    `,
    name: `index.d.ts`,
  },
];
