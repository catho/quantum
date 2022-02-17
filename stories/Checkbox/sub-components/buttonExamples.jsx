import PropTypes from 'prop-types';
import {
  CodeExample,
  StoryContainer,
  Title,
} from '@catho/quantum-storybook-ui';
import { Col, Row } from '../../../components/Grid';
import buttonGroup from './buttonGroup';
import buttonGroupError from './buttonGroupError';
import buttonGroupDisabled from './buttonGroupDisabled';
import buttonGroupInline from './buttonGroupInline';
import buttonGroupControlled from './buttonGroupControlled';
import buttonGroupSizes from './buttonGroupSizes';

const GroupExample = ({ code, component }) => (
  <>
    <Col small={5}>
      <CodeExample component={{}} code={code} showTitle={false} />
    </Col>
    <Col small={7}>
      <br />
      {component}
    </Col>
  </>
);

GroupExample.propTypes = {
  code: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired,
};

export default (
  <StoryContainer>
    <Title as="h2">Button Group Skin</Title>
    <p>
      It&apos;s possible to render checkbox elements as buttons, using{' '}
      <code>{'<CheckboxGroup.Button />'}</code> component or{' '}
      <code>type=&quot;button&quot;</code> prop.
    </p>
    <br />

    <Row>
      <GroupExample {...buttonGroup} />
    </Row>
    <br />

    <p>Controlled.</p>
    <br />

    <Row>
      <GroupExample {...buttonGroupControlled} />
    </Row>

    <p>
      It&apos;s also possible to render it inline, with <code>inline</code>{' '}
      prop.
    </p>
    <br />

    <Row>
      <GroupExample {...buttonGroupInline} />
    </Row>
    <br />

    <p>With an error message.</p>
    <br />

    <Row>
      <GroupExample {...buttonGroupError} />
    </Row>
    <br />

    <p>Disabled options.</p>
    <br />

    <Row>
      <GroupExample {...buttonGroupDisabled} />
    </Row>
    <br />

    <p>With size selected.</p>
    <br />

    <Row>
      <GroupExample {...buttonGroupSizes} />
    </Row>
  </StoryContainer>
);
