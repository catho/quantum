import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import {
  Heading,
  StoryContainer,
  Title,
  Table,
} from '@catho/quantum-storybook-ui';

import {
  colors,
  breakpoints,
  spacing,
  components,
} from '../../components/shared/theme';

const Summary = styled.summary`
  cursor: pointer;
  position: relative;
  padding-left: 24px;
  &::-webkit-details-marker {
    width: 8px;
    height: 8px;
    display: none;
  }

  &:before {
    content: 'add';
    position: absolute;
    top: 6px;
    left: 0;
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 20px;
    line-height: 1;
  }
`;

const Details = styled.details`
  margin-top: 10px;

  &[open] {
    ${Summary} {
      &:before {
        content: 'remove';
      }
    }
  }
`;

const ColorSquare = styled.span`
  position: relative;
  padding-left: 24px;

  &:before {
    background-color: ${({ children }) => children};
    border-radius: 4px;
    border: 1px solid #ccc;
    content: '';
    display: block;
    height: 16px;
    margin-right: 8px;
    position: absolute;
    top: 2px;
    width: 16px;
  }
`;

storiesOf('Foundation', module).add('Theme', () => (
  <>
    <Heading title="Theme">
      All Quantum components are initialized with the default Quantum theme.
      <br />
      Here we will describe wich properties are available on it.
    </Heading>

    <StoryContainer>
      <Title>Quantum Theme</Title>

      <p>
        The theme has properties wich, some of them, are used in components. We
        structured our theme with those props:
      </p>

      <Details open>
        <Summary>
          <code>breakpoints</code>
        </Summary>
        <p>
          Used at <code>{'<Grid />'}</code> to generate and manage the grid
          system behavior in all defined screen sizes named as{' '}
          <code>xsmall</code>, <code>small</code>, <code>medium</code>,{' '}
          <code>large</code> and <code>xlarge</code>.
        </p>
        <p>
          Each breakpoint is defined by an object wich contains 2 properties:{' '}
          <Table>
            <tbody>
              <tr>
                <th>width</th>
                <td>responsive behavior starts from this</td>
              </tr>
              <tr>
                <th>columns</th>
                <td>
                  define how many columns the respective breakpoint will have
                </td>
              </tr>
            </tbody>
          </Table>
        </p>

        <p>With the right configuration, the object must be like this:</p>
        <code
          style={{
            whiteSpace: 'pre-wrap',
            lineHeight: 1.5,
            width: '100%',
          }}
        >
          {JSON.stringify(breakpoints, null, 2)}
        </code>
      </Details>

      <Details open>
        <Summary>
          <code>colors</code>
        </Summary>
        <p>
          With 6 predefined colors, this object contains all major colors used
          in several components:
        </p>
        <ul>
          <li>primary</li>
          <li>secondary</li>
          <li>success</li>
          <li>warning</li>
          <li>error</li>
          <li>neutral</li>
        </ul>
        <p>
          All of them should have five intensity levels: <code>100</code>,{' '}
          <code>300</code>, <code>500</code>, <code>700</code> and{' '}
          <code>900</code>.
        </p>

        <p>For example:</p>

        <Table>
          <thead>
            <tr>
              <th style={{ width: 100 }}>Intensity</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(colors.primary).map(([intensity, value]) => (
              <tr>
                <td>{intensity}</td>
                <td>
                  <ColorSquare>{value}</ColorSquare>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Details>

      <Details>
        <Summary>
          <code>gutter</code>
        </Summary>
        <p>
          Gutter is a default value used in grid gap and spacing property of the
          default theme. The <strong>default value is 8</strong> and it's used
          to dictates the spacing of the components.
        </p>
      </Details>

      <Details>
        <Summary>
          <code>baseFontSize</code>
        </Summary>
        <p>
          The <code>font-size</code> of the components is calculed based on a
          default value that is <strong>16</strong>, if you change this value,
          all the "font-sizes" will be affected.
        </p>
      </Details>

      <Details>
        <Summary>
          <code>spacing</code>
        </Summary>
        <p>
          Used in several components the <code>spacing</code> object have 9
          predefined values.
        </p>
        <p>The spacings name and values are:</p>
        <Table>
          <thead>
            <th style={{ width: 100 }}>name</th>
            <th>value</th>
          </thead>
          <tbody>
            {Object.entries(spacing).map(([name, size]) => (
              <tr>
                <td>{name}</td>
                <td>{size}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <em>
          All of them is calculed using the gutter as a base value, so, if you
          change the gutter value, the spacing object will be affected.
        </em>
      </Details>

      <Details>
        <Summary>
          <code>components</code>
        </Summary>
        <p>
          The components object holds components that have skins, the skins
          object are relationed with the "skin" prop of the components that have
          it.
        </p>
        <p>Currently components that have skins are:</p>
        <ul>
          {Object.keys(components)
            .sort()
            .map(component => (
              <li>{component}</li>
            ))}
        </ul>

        <p>Here's the components object:</p>
        <code
          style={{
            whiteSpace: 'pre-wrap',
            lineHeight: 1.5,
            width: '100%',
          }}
        >
          "badge": {JSON.stringify(components.badge, null, 2)}
        </code>
      </Details>
    </StoryContainer>
  </>
));
