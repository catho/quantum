import React from 'react';
import styled from 'styled-components';
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
import Mobile from '../../components/Pagination/sub-components/Mobile';
import ControlledPagination from './examples/ControlledPagination';
import ControlledPaginationAria from './examples/ControlledPaginationAria';

const MobileWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export default {
  title: 'Pagination',
};

export const _Pagination = () => (
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

          <p>
            The Pagination component will render a mobile-friendly component if
            the viewport width is below small breakpoint value else it will
            render a dotted component.
          </p>

          <p>
            <strong>
              It&apos;s highly recommended to avoid pagination and use infinite
              scroll in small devices.
            </strong>
          </p>

          <Title as="h3">Simple usage</Title>
          <Row>
            <Col medium={5}>
              <p>
                If you want to control the state of pagination, set{' '}
                <code>onPageClick</code>
                prop, if you want the <code>{'<a>'}</code> element controls the
                pagination, set <code>pageHref</code> prop.
              </p>
              <SimpleHighlight>{`<Pagination totalPages={6} />`}</SimpleHighlight>
            </Col>
            <Col medium={7}>
              <Pagination
                totalPages={6}
                infoFormatter={(activePage, totalPages) => (
                  <>
                    <strong>{activePage}</strong> de{' '}
                    <strong>{totalPages}</strong>
                  </>
                )}
              />
            </Col>
          </Row>

          <Title as="h3">With several pages and active page</Title>
          <Row>
            <Col medium={5}>
              <SimpleHighlight>{`<Pagination totalPages={10} activePage={5} />`}</SimpleHighlight>
            </Col>
            <Col medium={7}>
              <Pagination totalPages={10} activePage={5} />
            </Col>
          </Row>

          <Title as="h3">Custom previous and next button texts</Title>
          <Row>
            <Col medium={5}>
              <p>
                It&apos;s possible to change the text from &quot;Previous&quot;
                and &quot;Next&quot; buttons through <code>prevButtonText</code>{' '}
                and <code>nextButtonText</code> props.
              </p>
              <SimpleHighlight>{`<Pagination
  prevButtonText="Previous Page"
  nextButtonText="Next Page"
  totalPages={10}
  activePage={5}
/>`}</SimpleHighlight>
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

          <Title as="h3">Helper text</Title>
          <Row>
            <Col medium={5}>
              <p>
                You can format the helper text of the mobile-friendly component
                with the <code>infoFormatter</code> prop, see the example below:
              </p>
              <SimpleHighlight>
                {`<Pagination
  totalPages={10}
  infoFormatter={(activePage, totalPage) => \`\${activePage} of \${totalPage}\`}
/>`}
              </SimpleHighlight>
            </Col>
            <Col medium={7}>
              <MobileWrapper>
                <Mobile
                  totalPages={10}
                  infoFormatter={(activePage, totalPage) =>
                    `${activePage} of ${totalPage}`
                  }
                />
              </MobileWrapper>
            </Col>
          </Row>
          <Row>
            <Col medium={5}>
              <p>
                You can also pass a component to the returned value from
                <code>infoFormatter</code> function.
              </p>
              <SimpleHighlight>
                {`<Pagination
  totalPages={10}
  infoFormatter={(activePage, totalPages) => (
    <>
      <strong>{activePage}</strong> of{' '}
      <strong>{totalPages}</strong>
    </>
  )}
/>`}
              </SimpleHighlight>
            </Col>
            <Col medium={7}>
              <MobileWrapper>
                <Mobile
                  totalPages={10}
                  infoFormatter={(activePage, totalPages) => (
                    <>
                      <strong>{activePage}</strong> of{' '}
                      <strong>{totalPages}</strong>
                    </>
                  )}
                />
              </MobileWrapper>
            </Col>
          </Row>

          <Title as="h3">
            Setting the href attribute of the page link elements
          </Title>
          <Row>
            <Col medium={5}>
              <p>
                The page elements are rendered as anchor elements (
                <code>{`<a>`}</code>).
              </p>
              <p>
                You can set the href attribute through <code>pageHref</code>{' '}
                prop, this prop must be a function, it receives the page
                elements value and should return a string.
              </p>

              <p>
                Example of usage: (hover the elements to see href value, if you
                click, the pagination will send you to another page)
              </p>
              <SimpleHighlight>
                {`<Pagination
  totalPages={10}
  pageHref={page => \`/?page=\${page}\`}
/>` // eslint-disable-line
                }
              </SimpleHighlight>
            </Col>
            <Col medium={7}>
              <Pagination totalPages={10} pageHref={page => `/?page=${page}`} />
            </Col>
          </Row>

          <Title as="h3">
            Adding nofollow to all pagination buttons except the first one
          </Title>
          <Row>
            <Col medium={5}>
              <p>
                Page elements greater than 1 are rendered with attribute
                rel=nofollow: (<code>{`<a rel="nofollow">`}</code>).
              </p>
              <p>
                For SEO purposes, sometimes it will be necessary to allow search
                engines following only the first page and ignore the others.
                This feature can be activated by adding{' '}
                <code>followOnlyFirstPage</code> property.
              </p>

              <SimpleHighlight>
                {`<Pagination
  totalPages={10}
  pageHref={page => \`/?page=\${page}\`}
  followOnlyFirstPage
/>` // eslint-disable-line
                }
              </SimpleHighlight>
            </Col>
            <Col medium={7}>
              <Pagination
                totalPages={10}
                pageHref={page => `/?page=${page}`}
                followOnlyFirstPage
              />
            </Col>
          </Row>

          <Title as="h3">onPageClick prop</Title>
          <p>
            Through <code>onPageClick</code> prop is possible to get the page
            clicked.
          </p>
          <p>
            This prop must be a function and it{' '}
            <strong>receives the page clicked number and a event</strong> (open
            console, click in the pages and see).
          </p>
          <p>
            If you set <code>onPageClick</code> prop the <code>pageHref</code>{' '}
            prop will be ignored.
          </p>
          <p>
            Here&apos;s an example of a controlled pagination that use this prop
            to handle the state:
          </p>
          <Row>
            <Col medium={5}>
              <SimpleHighlight>{ControlledPagination.code}</SimpleHighlight>
            </Col>
            <Col medium={7}>
              <ControlledPagination />
            </Col>
          </Row>

          <Title as="h2">Aria attributes</Title>
          <p>
            We provide a way to set aria attributes to the rendered pages
            elements, such as: <code>ariaLabel</code>,{' '}
            <code>activePageAriaLabel</code> and <code>pageAriaLabel</code>.
          </p>
          <p>You can check the description of each prop:</p>
          <Row>
            <Col medium={12}>
              <Table>
                <thead>
                  <tr>
                    <th style={{ width: 180 }}>Component prop</th>
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
                      active page element, the default value is &quot;Current
                      Page&quot;. This will be displayed with the pageAriaLabel
                      prop. Ex: Current Page, Page 1.
                    </td>
                  </tr>
                  <tr>
                    <td>pageAriaLabel</td>
                    <td>
                      Set the value of <code>aria-label</code> attribute of the
                      availables page elements, this value will be concatenated
                      with the page number. The default value is
                      &quot;Page&quot;. Example: Page 4.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <p>A working example implementing those props:</p>
          <Row>
            <Col medium={5}>
              <SimpleHighlight>{ControlledPaginationAria.code}</SimpleHighlight>
            </Col>
            <Col medium={7}>
              <ControlledPaginationAria />
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
);
