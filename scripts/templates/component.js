module.exports = (componentName) => [
  {
    content: `// Generated with scripts/create-component.js
import PropTypes from 'prop-types';

const ${componentName} = ({ someProp }) => (
  <>
    <h1>Hello, do something here!</h1>
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
    content: `// Generated with scripts/create-component.js
import { render } from '@testing-library/react';

import ${componentName} from './${componentName}';

describe('<${componentName} />', () => {
  it('should match the snapshots', () => {
    expect(
      render(<${componentName} />)
        .asFragment(),
    ).toMatchSnapshot();
  })
})
  `,
    name: `${componentName}.unit.test.jsx`,
  },
  {
    content: `// Generated with scripts/create-component.js
import ${componentName} from './${componentName}';

export default ${componentName};
    `,
    name: `index.js`,
  },
  {
    content: `
// Generated with scripts/create-component.js
import { Component } from 'react';

export interface ${componentName}Props {
  someProp?: string;
}

export default class ${componentName} extends Component<${componentName}Props> {}
    `,
    name: `index.d.ts`,
  },
];
