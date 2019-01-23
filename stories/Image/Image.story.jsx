import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import {
  Heading,
  TabbedView,
  Tab,
  HowToImport,
  CodeExample,
  AutoPropsApi,
} from '@catho/quantum-storybook-ui';

import Image from '../../components/Image';
import { Col, Row } from '../../components/Grid';
import Loading from '../../components/Loading';

const StyledRow = styled(Row)`
  margin-bottom: 30px;
`;

const FallbackComponent = styled.div`
  background-color: #eee;
  width: 200px;
  height: 100px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const examples = {
  basicUsage: {
    component: (
      <Image
        src="https://static.catho.com.br/images/site/avatarF.jpg"
        alt="Female Avatar"
      />
    ),
    code: `<Image
  src="https://static.catho.com.br/images/site/avatarF.jpg"
  alt="Female Avatar"
/>`,
  },
  fallBackimages: {
    component: (
      <Image
        src={[
          'http://notfound/404.jpg',
          'https://static.catho.com.br/images/site/avatarM.jpg',
        ]}
        alt="Male Avatar"
      />
    ),
    code: `<Image
  src={[
    'http://notfound/404.jpg',
    'https://static.catho.com.br/images/site/avatarM.jpg',
  ]}
  alt="Male Avatar"
/>`,
  },
  withLoader: {
    component: (
      <Image
        src="https://static.catho.com.br/images/candidato/home/banner-responsive/banner_062015.jpg"
        width={430}
        height={200}
        alt="Example"
        loader={<Loading visible size={50} />}
      />
    ),
    code: `// First import your loading component
import { Loading } from '@cathodevel/quantum';

// Then use with 'loader' prop
<Image
  src="https://static.catho.com.br/images/candidato/home/banner-responsive/banner_062015.jpg"
  alt="Female Avatar"
  loader={<Loading visible size={50} />}
/>`,
  },
  withUnloader: {
    component: (
      <Image
        src="http://notfound/404.jpg"
        alt="Example"
        unloader={<FallbackComponent>Failed</FallbackComponent>}
      />
    ),
    code: `<Image
  src="http://notfound/404.jpg"
  alt="Example"
  unloader={<FallbackComponent>Failed</FallbackComponent>}
/>`,
  },
};

storiesOf('6. Images', module).add('Image', () => (
  <Heading name="Image">
    <TabbedView>
      <Tab title="Usage">
        <HowToImport importModules="Image" />
        <StyledRow>
          <Col desktop={12}>
            <h3>Basic usage:</h3>
            <p>
              For a basic usage, you can simple pass a <code>src</code> prop
            </p>
          </Col>
          <Col desktop={7}>
            <CodeExample
              component={examples.basicUsage.component}
              code={examples.basicUsage.code}
              showTitle={false}
            />
          </Col>
          <Col desktop={5}>{examples.basicUsage.component}</Col>
        </StyledRow>
        <StyledRow>
          <Col desktop={12}>
            <h3>Multiple fallback images:</h3>
            <p>
              When src is specified as an array, it will attempt to load all the
              images specified,
              <br />
              starting at the first and continuing until an image has been
              successfully loaded.
            </p>
          </Col>
          <Col desktop={7}>
            <CodeExample
              component={examples.fallBackimages.component}
              code={examples.fallBackimages.code}
              showTitle={false}
            />
          </Col>
          <Col desktop={5}>{examples.fallBackimages.component}</Col>
        </StyledRow>
        <StyledRow>
          <Col desktop={12}>
            <h3>Custom loader</h3>
            <p>
              You can display a loader component until the image is completely
              downloaded.
              <br />
              Just pass a component inside <code>loader</code> prop.
            </p>
          </Col>
          <Col desktop={7}>
            <CodeExample
              component={examples.withLoader.component}
              code={examples.withLoader.code}
              showTitle={false}
            />
          </Col>
          <Col desktop={5}>{examples.withLoader.component}</Col>
        </StyledRow>
        <StyledRow>
          <Col desktop={12}>
            <h3>Fallback element if non of the images could be loaded:</h3>
            <p>
              If all images from <code>src</code> prop fail, you can use a
              <code>unloader</code> prop to render a component as fallback.
            </p>
          </Col>
          <Col desktop={7}>
            <CodeExample
              component={examples.withUnloader.component}
              code={examples.withUnloader.code}
              showTitle={false}
            />
          </Col>
          <Col desktop={5}>{examples.withUnloader.component}</Col>
        </StyledRow>
      </Tab>
      <Tab title="API">
        <AutoPropsApi component={Image} />
      </Tab>
    </TabbedView>
  </Heading>
));
