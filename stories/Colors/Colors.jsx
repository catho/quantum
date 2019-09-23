import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title, StoryContainer } from '@catho/quantum-storybook-ui';
import { colors } from '../../components/shared/theme';

const ColorBackground = styled.div`
  background-color: ${({ hex }) => hex};
  color: ${({ fontColor = 'white' }) => fontColor};
  width: 30%;
  padding: 50px 25px;
`;

const ColorDescription = styled.div`
  padding: 50px 25px;
  display: flex;
  width: 100%;
  align-content: center;
  align-items: center;
  background-color: #f7f7f7;
  font-size: 14px;
  padding: 15px;
  position: relative;
  color: #333;
`;

const ColorProperties = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ColorName = styled.div`
  font-size: 18px;
`;
const ColorNumber = styled.div`
  font-size: 14px;
`;
const ColorHex = styled.div`
  flex-grow: 0;
  padding: 5px;
  color: #666;
`;

const PalleteColor = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2px;
`;

const ColorSample = ({ hex, number, name, fontColor }) => (
  <PalleteColor>
    <ColorBackground hex={hex} fontColor={fontColor}>
      <ColorName>{name}</ColorName>
      <ColorNumber>{number}</ColorNumber>
    </ColorBackground>

    <ColorDescription>
      <ColorProperties>
        <ColorName>
          Colors.{name}[{number}]
        </ColorName>
        <ColorHex>{hex}</ColorHex>
      </ColorProperties>
    </ColorDescription>
  </PalleteColor>
);

ColorSample.propTypes = {
  hex: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  fontColor: PropTypes.string,
};

ColorSample.defaultProps = {
  fontColor: '#fff',
};

export default () => (
  <StoryContainer>
    <Title as="h3" style={{ paddingTop: 0 }}>
      Primary
    </Title>

    <ColorSample hex={colors.primary['900']} number={900} name="primary" />
    <ColorSample hex={colors.primary['700']} number={700} name="primary" />
    <ColorSample
      hex={colors.primary['500']}
      number={500}
      fontColor="black"
      name="primary"
    />
    <ColorSample
      hex={colors.primary['300']}
      number={300}
      fontColor="black"
      name="primary"
    />
    <ColorSample
      hex={colors.primary['100']}
      number={100}
      fontColor="black"
      name="primary"
    />

    <Title as="h3">Secondary</Title>

    <ColorSample hex={colors.secondary['900']} number={900} name="secondary" />
    <ColorSample hex={colors.secondary['700']} number={700} name="secondary" />
    <ColorSample hex={colors.secondary['500']} number={500} name="secondary" />
    <ColorSample hex={colors.secondary['300']} number={300} name="secondary" />
    <ColorSample hex={colors.secondary['100']} number={100} name="secondary" />

    <Title as="h3">Success</Title>

    <ColorSample hex={colors.success['900']} number={900} name="success" />
    <ColorSample hex={colors.success['700']} number={700} name="success" />
    <ColorSample hex={colors.success['500']} number={500} name="success" />
    <ColorSample
      hex={colors.success['300']}
      number={300}
      fontColor="black"
      name="success"
    />
    <ColorSample
      hex={colors.success['100']}
      number={100}
      fontColor="black"
      name="success"
    />

    <Title as="h3">Warning</Title>

    <ColorSample hex={colors.warning['900']} number={900} name="warning" />
    <ColorSample hex={colors.warning['700']} number={700} name="warning" />
    <ColorSample
      hex={colors.warning['500']}
      number={500}
      fontColor="black"
      name="warning"
    />
    <ColorSample
      hex={colors.warning['300']}
      number={300}
      fontColor="black"
      name="warning"
    />
    <ColorSample
      hex={colors.warning['100']}
      number={100}
      fontColor="black"
      name="warning"
    />

    <Title as="h3">error</Title>

    <ColorSample hex={colors.error['900']} number={900} name="error" />
    <ColorSample hex={colors.error['700']} number={700} name="error" />
    <ColorSample
      hex={colors.error['500']}
      number={500}
      fontColor="black"
      name="error"
    />
    <ColorSample
      hex={colors.error['300']}
      number={300}
      fontColor="black"
      name="error"
    />
    <ColorSample
      hex={colors.error['100']}
      number={100}
      fontColor="black"
      name="error"
    />

    <Title as="h3">Neutral</Title>

    <ColorSample hex={colors.neutral['900']} number={900} name="neutral" />
    <ColorSample hex={colors.neutral['700']} number={700} name="neutral" />
    <ColorSample
      hex={colors.neutral['500']}
      number={500}
      fontColor="black"
      name="neutral"
    />
    <ColorSample
      hex={colors.neutral['300']}
      number={300}
      fontColor="black"
      name="neutral"
    />
    <ColorSample
      hex={colors.neutral['100']}
      number={100}
      fontColor="black"
      name="neutral"
    />
  </StoryContainer>
);
