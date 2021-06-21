import React from 'react';
import styled from 'styled-components';

import { Row, Col, Hide } from '../../components/Grid';

const StyledCol = styled(Col)`
  background-color: #f6f8fa;
  padding: 8px;
  font-size: 14px;
`;

const HorizontalExample = () => (
  <>
    <Row>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
      <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
    </Row>

    <Row>
      <StyledCol medium={8}>{'<Col medium={8}>'}</StyledCol>
      <StyledCol medium={4}>{'<Col medium={4}>'}</StyledCol>
    </Row>

    <Row>
      <StyledCol medium={4}>{'<Col medium={4}>'}</StyledCol>
      <StyledCol medium={4}>{'<Col medium={4}>'}</StyledCol>
      <StyledCol medium={4}>{'<Col medium={4}>'}</StyledCol>
    </Row>

    <Row>
      <StyledCol medium={6}>{'<Col medium={6}>'}</StyledCol>
      <StyledCol medium={6}>{'<Col medium={6}>'}</StyledCol>
    </Row>
  </>
);

const MobileDesktopExample = () => (
  <>
    <Row>
      <StyledCol xsmall={2} small={8}>
        {'<Col xsmall={2} small={8}>'}
      </StyledCol>
      <StyledCol xsmall={2} small={4}>
        {'<Col xsmall={2} small={4}>'}
      </StyledCol>
    </Row>

    <Row>
      <StyledCol xsmall={4} small={4}>
        {'<Col xsmall={4} small={4}>'}
      </StyledCol>
      <StyledCol xsmall={4} small={4}>
        {'<Col xsmall={4} small={4}>'}
      </StyledCol>
      <StyledCol xsmall={4} small={4}>
        {'<Col xsmall={4} small={4}>'}
      </StyledCol>
    </Row>

    <Row>
      <StyledCol xsmall={2}>{'<Col xsmall={2}>'}</StyledCol>
      <StyledCol xsmall={2}>{'<Col xsmall={2}>'}</StyledCol>
    </Row>
  </>
);

const HideExample = () => (
  <>
    <p>Hide example</p>
    <Hide xsmall>
      <Row>
        <StyledCol xsmall={2} small={4} medium={6}>
          ...
        </StyledCol>
        <StyledCol xsmall={2} small={4} medium={6}>
          ...
        </StyledCol>
      </Row>
    </Hide>
  </>
);

const NoGuttersExample = () => (
  <>
    <Row no-gutters>
      <StyledCol medium={6}>medium={6}</StyledCol>
      <StyledCol medium={6}>medium={6}</StyledCol>
    </Row>
  </>
);

const OffsetExample = () => (
  <>
    <Row>
      <StyledCol small={2} small-offset={2}>
        small={2} small-offset={2}
      </StyledCol>
      <StyledCol small={2}>small={2}</StyledCol>
      <StyledCol small={2}>small={2}</StyledCol>
      <StyledCol small={2}>small={2}</StyledCol>
      <StyledCol small={2}>small={2}</StyledCol>
    </Row>
  </>
);

export default {
  title: 'Grid',
};

export const _HorizontalExample = () => <HorizontalExample />;

_HorizontalExample.story = {
  name: 'HorizontalExample',
};

export const _MobileDesktopExample = () => <MobileDesktopExample />;

_MobileDesktopExample.story = {
  name: 'MobileDesktopExample',
};

export const _HideExample = () => <HideExample />;

_HideExample.story = {
  name: 'HideExample',
};

export const _NoGuttersExample = () => <NoGuttersExample />;

_NoGuttersExample.story = {
  name: 'NoGuttersExample',
};

export const _OffsetExample = () => <OffsetExample />;

_OffsetExample.story = {
  name: 'OffsetExample',
};
