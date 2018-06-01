import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Tab, Example, AutoExample } from '../../.storybook/components';
import { Container, Row, Col } from '../../components/Grid';
import Button from '../../components/Button';
import Popover from '../../components/Popover';
import { Form, Validations } from '../../components/Form';
import Input from '../../components/Input';

const Content = styled.div`
  min-width: 150px;
`;

const form = (
  <Form>
    <Input
      name="email"
      id="email"
      label="E-mail"
      validate={[
        Validations.Required,
        Validations.Email,
      ]}
    />

    <Input.Password
      name="password"
      id="password"
      label="Password"
      validate={Validations.MinLength}
      minLength={6}
    />

    <Button type="submit">Submit</Button>
  </Form>
);

const examples = [{
  label: 'Top Right',
  props: {
    content: 'Content',
    place: 'top-right',
  },
}, {
  label: 'Left',
  props: {
    content: 'Content',
    place: 'left',
  },
}, {
  label: 'Right',
  props: {
    content: 'Content',
    place: 'right',
  },
}, {
  label: 'Top-Left',
  props: {
    content: 'Content',
    place: 'top-left',
  },
}, {
  label: 'With Title',
  props: {
    content: 'Content',
    title: 'Great Popover',
    place: 'top-right',
  },
}, {
  label: 'With p2p skin',
  props: {
    content: 'Content',
    skin: 'p2p',
  },
}, {
  label: 'With Stamp',
  props: {
    content: 'Content',
    skin: 'p2p',
    stamp: 'Limited edition',
  },
}, {
  label: 'With rich content',
  props: {
    content: form,
    title: 'Register',
  },
}].map(({ label, props: { content, ...rest } }, index) => (
  <Col tablet={3} index={`example-${index}`}>
    <Example
      component={(
        <Popover content={<Content>{content}</Content>} {...rest}>
          <Button size="big">{ label }</Button>
        </Popover>
      )}
    />
  </Col>
));

const exampleTab = (
  <Tab title="Example">
    <Container fluid>
      <Row>{ examples }</Row>
    </Container>
  </Tab>
);

storiesOf('12. Popover', module).add('Popover', () => (
  <AutoExample
    component={Popover}
    componentProps={{
      content: 'Content',
      title: 'Title',
      closeTitle: 'Close',
      children: 'Click me',
    }}
    additionalTabs={exampleTab}
  />
));
