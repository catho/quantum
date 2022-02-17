import { Example, Title } from '@catho/quantum-storybook-ui';
import styled from 'styled-components';
import { Tag } from '../../components';

const ExamplesWrapper = styled.div`
  margin-bottom: 10px;
`;

const skinsCode = `<Tag>Neutral (Default)</Tag>
<Tag skin="primary">Primary</Tag>
<Tag skin="success">Success</Tag>
<Tag skin="warning">Warning</Tag>
<Tag skin="error">Error</Tag>`;

const skinsExample = (
  <>
    <Title as="h2">Skins</Title>
    <Example
      component={
        <ExamplesWrapper>
          <Tag>Neutral (Default)</Tag>
          <Tag skin="primary">Primary</Tag>
          <Tag skin="success">Success</Tag>
          <Tag skin="warning">Warning</Tag>
          <Tag skin="error">Error</Tag>
        </ExamplesWrapper>
      }
      code={skinsCode}
    />
  </>
);

const invertedCode = `<Tag inverted>Neutral (Default)</Tag>
<Tag inverted skin="primary">Primary</Tag>
<Tag inverted skin="success">Success</Tag>
<Tag inverted skin="warning">Warning</Tag>
<Tag inverted skin="error">Error</Tag>`;

const invertedExample = (
  <>
    <Title as="h2">Inverted</Title>
    <Example
      component={
        <ExamplesWrapper>
          <Tag inverted>Neutral (Default)</Tag>
          <Tag inverted skin="primary">
            Primary
          </Tag>
          <Tag inverted skin="success">
            Success
          </Tag>
          <Tag inverted skin="warning">
            Warning
          </Tag>
          <Tag inverted skin="error">
            Error
          </Tag>
        </ExamplesWrapper>
      }
      code={invertedCode}
    />
  </>
);

const strokedCode = `<Tag stroked>Neutral (Default)</Tag>
<Tag stroked skin="primary">Primary</Tag>
<Tag stroked skin="success">Success</Tag>
<Tag stroked skin="warning">Warning</Tag>
<Tag stroked skin="error">Error</Tag>`;

const strokedExample = (
  <>
    <Title as="h2">Stroked</Title>
    <Example
      component={
        <ExamplesWrapper>
          <Tag stroked>Neutral (Default)</Tag>
          <Tag stroked skin="primary">
            Primary
          </Tag>
          <Tag stroked skin="success">
            Success
          </Tag>
          <Tag stroked skin="warning">
            Warning
          </Tag>
          <Tag stroked skin="error">
            Error
          </Tag>
        </ExamplesWrapper>
      }
      code={strokedCode}
    />
  </>
);

const closableCodes = `<Tag onClose={() => {}}>Neutral (Default)</Tag>
<Tag onClose={() => {}} skin="primary">Primary</Tag>
<Tag onClose={() => {}} skin="success">Success</Tag>
<Tag onClose={() => {}} skin="warning">Warning</Tag>
<Tag onClose={() => {}} skin="error">Error</Tag>`;

const closableExample = (
  <>
    <Title as="h2">Closables</Title>
    <Example
      component={
        <ExamplesWrapper>
          <Tag onClose={() => {}}>Neutral (Default)</Tag>
          <Tag onClose={() => {}} skin="primary">
            Primary
          </Tag>
          <Tag onClose={() => {}} skin="success">
            Success
          </Tag>
          <Tag onClose={() => {}} skin="warning">
            Warning
          </Tag>
          <Tag onClose={() => {}} skin="error">
            Error
          </Tag>
        </ExamplesWrapper>
      }
      code={closableCodes}
    />
  </>
);

const sizesCode = `
<Tag size="small">Small</Tag>
<Tag>Medium (Default)</Tag>
<Tag size="large">Large</Tag>`;

const sizesExample = (
  <>
    <Title as="h2">Sizes</Title>
    <Example
      component={
        <ExamplesWrapper>
          <Tag size="small">Small</Tag>
          <Tag>Medium (Default)</Tag>
          <Tag size="large">Large</Tag>
        </ExamplesWrapper>
      }
      code={sizesCode}
    />
  </>
);

export {
  skinsExample,
  invertedExample,
  strokedExample,
  closableExample,
  sizesExample,
};
