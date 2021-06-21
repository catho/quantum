import React from 'react';
import styled from 'styled-components';
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
  padding-left: 24px;
  position: relative;

  &::-webkit-details-marker {
    display: none;
    height: 8px;
    width: 8px;
  }

  &:before {
    content: 'add';
    font-family: 'Material Icons';
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    left: 0;
    line-height: 1;
    position: absolute;
    top: 6px;
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
  padding-left: 24px;
  position: relative;

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

export default {
  title: 'Foundation',
};

export const Theme = () => (
  <>
    <Heading title="Theme">
      All Quantum components are initialized with the default Quantum theme.
      <br />
      Here we will describe which properties are available on it.
    </Heading>

    <StoryContainer>
      <Title>Quantum Theme</Title>

      <p>
        The theme has properties which, some of them, are used in components.
        It&apos;s structured with these ones:
      </p>

      <Details>
        <Summary>
          <code>breakpoints</code>
        </Summary>
        <p>
          Used at <code>{'<Grid />'}</code> to generate and manage the grid
          system behavior in all defined screen sizes named as{' '}
          <code>xsmall</code>, <code>small</code>, <code>medium</code>,{' '}
          <code>large</code>, and <code>xlarge</code>.
        </p>
        <p>
          Each breakpoint is defined by an object which contains 2 properties:{' '}
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

      <Details>
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
          Is the default value used in <code>{'<Grid />'}</code>, to generate
          and manipulate the grid system properties, and spacing property of the
          default theme. The <strong>value is 8</strong>.
        </p>
      </Details>

      <Details>
        <Summary>
          <code>baseFontSize</code>
        </Summary>
        <p>
          The <code>font-size</code> property of a component is calculed based
          on a value that is <strong>16</strong>, by default. Changing this
          value will affect all library.
        </p>
      </Details>

      <Details>
        <Summary>
          <code>spacing</code>
        </Summary>
        <p>
          Present in several components, the <code>spacing</code> object has 9
          predefined values and should be used to set margins and paddings.
        </p>
        <p>The spacing names and values are:</p>
        <Table>
          <caption
            style={{ captionSide: 'bottom', fontSize: 'small', padding: 8 }}
          >
            All values are calculated using the gutter as a base value. If you
            change it&apos;s value, the spacing object will be affected.
          </caption>
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
      </Details>

      <Details>
        <Summary>
          <code>components</code>
        </Summary>
        <p>
          Each component may have a prop to set the colors used inside itself.
          That prop is called <code>skin</code> and can be changed respectively,
          according to each component, inside the
          <code>components</code> theme property.
        </p>
        <p>Currently, these components have skins:</p>
        <ul>
          {Object.keys(components)
            .sort()
            .map(([firstLetter, ...rest]) => (
              <li>
                <code>{`<${firstLetter.toUpperCase()}${rest.join(
                  '',
                )} />`}</code>
              </li>
            ))}
        </ul>

        <p>Here&apos;s an example of the components object:</p>
        <code
          style={{
            whiteSpace: 'pre-wrap',
            lineHeight: 1.5,
            width: '100%',
          }}
        >
          &quot;badge&quot;: {JSON.stringify(components.badge, null, 2)}
        </code>
      </Details>
    </StoryContainer>
  </>
);
