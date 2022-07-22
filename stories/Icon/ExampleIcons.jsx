/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import Icon from '../../components/Icon';
import { colors } from '../../components/shared/theme';

const IconWrapper = styled.div`
  padding: 10px;
  display: inline-block;
`;

const exampleIcons = [
  <Icon name="info" size="small" />,
  <Icon name="info" />,
  <Icon name="info" size="large" />,
  <Icon name="clear" />,
  <Icon name="search" />,
  <Icon name="error" />,
  <Icon name="visibility_off" />,
  <Icon name="visibility" />,
  <Icon name="check_box" />,
  <Icon name="emoji_people" skin={colors.primary['900']} />,
  <Icon name="emoji_people" skin={colors.secondary['900']} />,
  <Icon name="emoji_people" skin={colors.primary['700']} />,
  <Icon name="emoji_people" skin={colors.warning['900']} />,
  <Icon name="emoji_people" skin={colors.error['300']} />,
  <Icon name="emoji_people" skin={colors.error['300']} size="large" />,
];

const exampleIncorrectIcons = [
  <Icon name="bike" />,
  <Icon name="emoji_smile" skin={colors.primary['900']} />,
];

export const ExampleIcons = () =>
  exampleIcons.map((icon, index) => (
    <IconWrapper key={`${icon.props.name}_${index}`}>{icon}</IconWrapper>
  ));

export const ExampleIncorrectIcons = () =>
  exampleIncorrectIcons.map((icon, index) => (
    <IconWrapper key={`${icon.props.name}_${index}`}>{icon}</IconWrapper>
  ));

export default ExampleIcons;
