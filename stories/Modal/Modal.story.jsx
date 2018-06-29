import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import HowToImport from '../../.storybook/components/HowToImport';
import CodeExample from '../../.storybook/components/CodeExample';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import { Col, Row } from '../../components/Grid';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

const stories = storiesOf('5. Modals', module);

class ModalStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
  }

  handleClose = () =>
    this.setState({
      opened: false,
    });

  render() {
    return (
      <Modal
        opened={this.state.opened}
        closeOnOverlayClick
        trigger={<Button>Open modal</Button>}
      >
        <Modal.Header>Title</Modal.Header>
        <Modal.Content>Example Content</Modal.Content>
        <Modal.Footer>
          <Button skin="modal" onClick={this.handleClose}>
            Cancel
          </Button>
          <Button onClick={this.handleClose}>OK</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const ModalExample = {
  component: <ModalStory />,
  code: `
<Modal
  opened
  closeOnOverlayClick
  trigger={<Button>Open modal</Button>}>
  <Modal.Header>Title</Modal.Header>
  <Modal.Content>Example Content</Modal.Content>
  <Modal.Footer>
    <Button skin="modal" onClick={this.handleClose}>
      Cancel
    </Button>
    <Button onClick={this.handleClose}>OK</Button>
  </Modal.Footer>
</Modal>`,
};

stories.add('Basic', () => (
  <Heading name="Modal">
    <TabbedView>
      <Tab title="Usage">
        <HowToImport importModules="Modal" />

        <p>
          Use Modal component to add dialogs to your UI for lightboxes, user
          notifications, or completely custom content.
        </p>
        <p>
          A modal displays content that temporarily blocks interactions with the
          main view of a site.
        </p>
        <Row>
          <Col phone={6}>
            <CodeExample
              showTitle={false}
              component={ModalExample.component}
              code={ModalExample.code}
            />
          </Col>
          <Col phone={6}>{ModalExample.component}</Col>
        </Row>
      </Tab>

      <Tab title="API">
        <AutoPropsApi component={Modal} />
      </Tab>
    </TabbedView>
  </Heading>
));
