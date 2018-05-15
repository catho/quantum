import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Image from '../../components/Image';
import Heading from '../../.storybook/components/Heading';
import Atom from '../static/atom.svg';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import HowToImport from '../../.storybook/components/HowToImport';
import CodeExample from '../../.storybook/components/CodeExample';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import { Col, Row } from '../../components/Grid';
import Loading from '../../components/Loading';
import GitlabLink from '../../.storybook/components/GitlabLink';

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
const basicUsage = (
  <Image
    src="https://static.catho.com.br/images/site/avatarF.jpg"
    alt="Female Avatar"
  />
);

const fallBackimages = (
  <Image
    src={[
      'http://notfound/404.jpg',
      'https://static.catho.com.br/images/site/avatarM.jpg',
    ]}
    alt="Male Avatar"
  />
);

const withLoader = (
  <Image
    src="https://static.catho.com.br/images/candidato/home/banner-responsive/banner_062015.jpg"
    width={430}
    height={200}
    alt="Example"
    loader={<Loading visible size={60} />}
  />
);
const withUnloader = (
  <Image
    src="http://notfound/404.jpg"
    alt="Example"
    unloader={<FallbackComponent>Failed</FallbackComponent>}
  />
);
const withUnloaderCode = `<Image
  src="http://notfound/404.jpg"
  alt="Example"
  unloader={<FallbackComponent>Failed</FallbackComponent>}
/>
`;
const withLoaderCode = `// First import your loading component
import { Loading } from '@cathodevel/style-guide';

// Then use with 'loader' prop
<Image
  src="https://static.catho.com.br/images/candidato/home/banner-responsive/banner_062015.jpg"
  alt="Female Avatar"
  loader={<Loading size={60} visible />}
/>;
`;

storiesOf('7. Image', module)
  .add('Image', () => (
    <Heading image={Atom} title="<Image />">
      <TabbedView>
        <Tab title="Usage">
          <GitlabLink name="Image" />
          <HowToImport importModules="Image" />
          <StyledRow>
            <Col desktop={12}>
              <h3>Basic usage:</h3>
              <p>For a basic usage, you can simple pass a <code>src</code> prop</p>
            </Col>
            <Col desktop={7}>
              <CodeExample
                component={basicUsage}
                showTitle={false}
              />
            </Col>
            <Col desktop={5}>
              {basicUsage}
            </Col>
          </StyledRow>
          <StyledRow>
            <Col desktop={12}>
              <h3>Multiple fallback images:</h3>
              <p>When src is specified as an array, it will attempt to load all the images specified,<br />starting at the first and continuing until an image has been successfully loaded.</p>
            </Col>
            <Col desktop={7}>
              <CodeExample
                component={fallBackimages}
                showTitle={false}
              />
            </Col>
            <Col desktop={5}>
              {fallBackimages}
            </Col>
          </StyledRow>
          <StyledRow>
            <Col desktop={12}>
              <h3>Custom loader</h3>
              <p>You can display a loader component until the image is completely downloaded.<br />Just pass a component inside <code>loader</code> prop.</p>
            </Col>
            <Col desktop={7}>
              <CodeExample
                showTitle={false}
                component={withLoaderCode}
              />
            </Col>
            <Col desktop={5}>
              {withLoader}
            </Col>
          </StyledRow>
          <StyledRow>
            <Col desktop={12}>
              <h3>Fallback element if non of the images could be loaded:</h3>
              <p>If all images from <code>src</code> prop fail, you can use a <code>unloader</code> prop to render a component as fallback.</p>
            </Col>
            <Col desktop={7}>
              <CodeExample
                showTitle={false}
                code={withUnloaderCode}
              />
            </Col>
            <Col desktop={5}>
              {withUnloader}
            </Col>
          </StyledRow>
        </Tab>
        <Tab title="API">
          <AutoPropsApi component={Image} />
        </Tab>
      </TabbedView>
    </Heading>
  ));
