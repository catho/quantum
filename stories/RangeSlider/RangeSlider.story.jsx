import styled from 'styled-components';
import {
  Title,
  Heading,
  TabbedView,
  Tab,
  SimpleHighlight,
  CodeExample,
  AutoPropsApi,
} from '@catho/quantum-storybook-ui';
import { StoryContainer } from '@catho/quantum-storybook-ui/dist/components';
import { Col, Row } from '../../components/Grid';
import RangeSlider from '../../components/RangeSlider';
import List from '../../components/List';
import * as Samples from './examples';

const importSlider = `
  import { RangeSlider } from '@catho/quantum';

  const marks = [
    {
      value: 10,
      label: '10 km',
    },
    {
      value: 50,
      label: '50 km',
    },
    {
      value: 100,
      label: '100 km',
    }
  ]
`;

const marks = [
  {
    value: 0,
    label: '0 km',
  },
  {
    value: 50,
    label: '50 km',
  },
  {
    value: 100,
    label: '100 km',
  },
];

const ColSample = styled(Col)`
  padding-top: 15px;
`;

export default {
  title: 'Forms',
};

export const RangeSliderStory = () => (
  <>
    <Heading name="RangeSlider">
      RangeSlider is a component to select a value from a predefined range.
      Through component props it&apos;s possible to set the minimum and maximum
      values to be selected, format tooltip and label texts or disable the
      component itself.
    </Heading>

    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing RangeSlider</Title>
          <SimpleHighlight>{importSlider}</SimpleHighlight>

          <Row>
            <Col xsmall={4} small={8} medium={12}>
              <p>
                You can use some helper props to display the correct information
                desired.
              </p>
              <List>
                <List.Item>
                  <strong>min</strong>: accepted min value (default: 0)
                </List.Item>
                <List.Item>
                  <strong>max</strong>: accepted max value (default: 100)
                </List.Item>
                <List.Item>
                  <strong>tipFormatter</strong>: format tooltip text
                </List.Item>
              </List>
            </Col>
          </Row>
          <Title as="h2">RangeSlider usage</Title>
          <p>Just set value prop with a Number value.</p>
          <Row>
            <Col xsmall={2} small={4} medium={6}>
              <CodeExample
                code={Samples.BasicRangeSlider.code}
                showTitle={false}
              />
              <p>With marks</p>
              <CodeExample
                code={Samples.BasicRangeSlider.codeWithMarks}
                showTitle={false}
              />
            </Col>
            <ColSample xsmall={2} small={4} medium={6}>
              <Samples.BasicRangeSlider />
              <p>With marks</p>
              <Samples.BasicRangeSlider marks={marks} />
            </ColSample>
          </Row>
          <Title as="h2">Disable</Title>
          <Row>
            <Col xsmall={2} small={4} medium={6}>
              <CodeExample
                code={Samples.BasicDisabledRangeSlider.code}
                showTitle={false}
              />
            </Col>
            <ColSample xsmall={2} small={4} medium={6}>
              <Samples.BasicDisabledRangeSlider />
            </ColSample>
          </Row>
          <Title as="h2">Min & Max props</Title>
          <p>You can limit the available range to be selected</p>
          <Row>
            <Col xsmall={2} small={4} medium={6}>
              <CodeExample code={Samples.MinMax.code} showTitle={false} />
            </Col>
            <ColSample xsmall={2} small={4} medium={6}>
              <Samples.MinMax />
            </ColSample>
          </Row>
          <Title as="h2">Range usage</Title>
          <p>
            Set value prop with an Object with &quot;to&quot; and
            &quot;from&quot; properties.
          </p>
          <Row>
            <Col xsmall={2} small={4} medium={6}>
              <CodeExample code={Samples.Range.code} showTitle={false} />
            </Col>
            <ColSample xsmall={2} small={4} medium={6}>
              <Samples.Range />
            </ColSample>
          </Row>
          <Title as="h2">Formatting tooltip text</Title>
          <p>
            You can format tooltip text through <strong>tipFormatter</strong>{' '}
            prop.
          </p>
          <p>
            It receives a function and should return a string.{' '}
            <em>
              <small>(hover {'<RangeSlider />'} to see.)</small>
            </em>
          </p>
          <Row>
            <Col xsmall={2} small={4} medium={6}>
              <CodeExample code={Samples.TipFormatter.code} showTitle={false} />
            </Col>
            <ColSample xsmall={2} small={4} medium={6}>
              <Samples.TipFormatter />
            </ColSample>
          </Row>

          <Title as="h2">Controlled RangeSlider</Title>
          <p>
            it&apos;s needed an
            <a
              href="https://reactjs.org/docs/forms.html#controlled-components"
              rel="noopener noreferrer"
              target="_blank"
              title="controlled component"
            >
              controlled component
            </a>
            to change the {'<RangeSlider />'} value.
          </p>
          <p>The same is applied when is passed an object to value prop.</p>
          <Row>
            <Col xsmall={2} small={4} medium={6}>
              <CodeExample
                code={Samples.ControlledRangeSlider.code}
                showTitle={false}
              />
            </Col>
            <ColSample xsmall={2} small={4} medium={6}>
              <Samples.ControlledRangeSlider />
            </ColSample>
          </Row>
        </StoryContainer>
      </Tab>
      <Tab title="API">
        <AutoPropsApi component={RangeSlider} />
      </Tab>
    </TabbedView>
  </>
);
