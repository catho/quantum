import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  TabbedView,
  Tab,
  AutoPropsApi,
  Heading,
  StoryContainer,
  Title,
  SimpleHighlight,
  Table,
} from '@catho/quantum-storybook-ui';

import { Pagination, Row, Col } from '../../components';
import ControlledPagination from './examples/ControlledPagination';

storiesOf('Pagination', module).add('Pagination', () => (
  <>
    <Heading name="Pagination">
      Add pagination buttons to help split up your long content into shorter,
      easier to understand blocks.
    </Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing Pagination</Title>
          <SimpleHighlight>{`import { Pagination } from '@catho/quantum';`}</SimpleHighlight>

          <Title as="h2">Examples</Title>

          <Title as="h3">With 6 pages</Title>
          <Row>
            <Col medium={5}>
              <SimpleHighlight>{`<Pagination totalPages={6} />`}</SimpleHighlight>
            </Col>
            <Col medium={7}>
              <Pagination totalPages={6} />
            </Col>
          </Row>

          <Title as="h3">With 10 pages</Title>
          <Row>
            <Col medium={5}>
              <SimpleHighlight>{`<Pagination totalPages={10} />`}</SimpleHighlight>
            </Col>
            <Col medium={7}>
              <Pagination totalPages={10} />
            </Col>
          </Row>

          <Title as="h3">With active page equals 5</Title>
          <Row>
            <Col medium={5}>
              <SimpleHighlight>{`<Pagination totalPages={10} activePage={5} />`}</SimpleHighlight>
            </Col>
            <Col medium={7}>
              <Pagination totalPages={10} activePage={5} />
            </Col>
          </Row>

          <Title as="h3">With active page equals 10</Title>
          <Row>
            <Col medium={5}>
              <SimpleHighlight>{`<Pagination totalPages={10} activePage={10} />`}</SimpleHighlight>
            </Col>
            <Col medium={7}>
              <Pagination totalPages={10} activePage={10} />
            </Col>
          </Row>

          <Title as="h3">With custom previous and next texts</Title>
          <Row>
            <Col medium={5}>
              <SimpleHighlight>{`<Pagination prevButtonText="Previous Page" nextButtonText="Next Page" totalPages={10} activePage={5} />`}</SimpleHighlight>
            </Col>
            <Col medium={7}>
              <Pagination
                prevButtonText="Previous Page"
                nextButtonText="Next Page"
                totalPages={10}
                activePage={5}
              />
            </Col>
          </Row>

          <Title as="h2">Aria attributes</Title>
          <Row>
            <Col medium={12}>
              <Table>
                <thead>
                  <tr>
                    <th>Component prop</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ariaLabel</td>
                    <td>
                      Set the value of the <code>aria-label</code> attribute of
                      the pagination root nav element
                    </td>
                  </tr>
                  <tr>
                    <td>activePageAriaLabel</td>
                    <td>
                      Set the value of <code>aria-label</code> attribute of the
                      active page button, the default value is &quot;Current
                      Page&quot;. This will be displayed with the pageAriaLabel
                      prop. Ex: Current Page, Page 1.
                    </td>
                  </tr>
                  <tr>
                    <td>pageAriaLabel</td>
                    <td>
                      Set the value of <code>aria-label</code> attribute of the
                      availables page buttons, this value will be concatenated
                      with the page number. The default value is
                      &quot;Page&quot;. Example: Page 4.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Title as="h3">
            Controlled pagination with aria attributes and custom texts
          </Title>
          <Row>
            <Col medium={5}>
              <SimpleHighlight>{ControlledPagination.code}</SimpleHighlight>
            </Col>
            <Col medium={7}>
              <ControlledPagination />
            </Col>
          </Row>
        </StoryContainer>
      </Tab>
      <Tab title="API">
        <StoryContainer>
          <AutoPropsApi component={Pagination} />
        </StoryContainer>
      </Tab>
    </TabbedView>
  </>
));
