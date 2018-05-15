import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import HowToImport from '../../.storybook/components/HowToImport';
import CodeExample from '../../.storybook/components/CodeExample';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import { Col, Row } from '../../components/Grid';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Atom from '../static/atom.svg';
import GitlabLink from '../../.storybook/components/GitlabLink';

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

const stories = storiesOf('5. Modals', module);

class ModalStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleOpen = () => this.setState({ showModal: !this.state.showModal });

  render() {
    return (
      <Heading image={Atom} title="<Modal />">
        <TabbedView>
          <Tab title="Usage">
            <GitlabLink name="Modal" />
            <HowToImport importModules="Modal" />

            <p>Use Modal component to add dialogs to your UI for lightboxes, user notifications, or completely custom content.</p>
            <p>A modal displays content that temporarily blocks interactions with the main view of a site.</p>
            <Row>
              <Col phone={6}>
                <CodeExample showTitle={false} component={<Modal title="Example Title" closeModal={this.handleOpen}> Example Content</Modal>} />
              </Col>
              <Col phone={6}>
                <StyledButton skin="primary" onClick={this.handleOpen}>
                  {this.state.showModal ? 'Close' : 'Open'} Modal
                </StyledButton>

                { this.state.showModal &&
                  (
                    <Modal
                      title="Example Title"
                      closeModal={this.handleOpen}
                    >
                      Example Content
                    </Modal>
                  )
                }
              </Col>
            </Row>
          </Tab>

          <Tab title="API">
            <AutoPropsApi component={Modal} />
          </Tab>
        </TabbedView>
      </Heading>
    );
  }
}

stories
  .add('Basic', () => (
    <ModalStory />
  ));
