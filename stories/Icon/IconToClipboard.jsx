import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Col } from '../../components/Grid';
import { colors } from '../../components/shared/theme';
import Icon from '../../components/Icon';

const IconName = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
`;

const IconWrapper = styled(Col)`
  font-size: 12px;
  padding: 10px;
  position: relative;
  text-align: center;
  cursor: pointer;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    background-color: ${colors.primary['700']};
    color: ${colors.neutral['0']};
  }
`;

class IconToClipboard extends Component {
  constructor(props) {
    super(props);

    this.state = { hasJustCopied: false };
  }

  showFeedback = () => {
    this.setState({ hasJustCopied: true });

    setTimeout(() => {
      this.setState({ hasJustCopied: false });
    }, 3000);
  };

  render() {
    const { hasJustCopied } = this.state;
    const { name } = this.props;

    return (
      <CopyToClipboard
        text={`<Icon name="${name}" />`}
        key={name}
        onCopy={this.showFeedback}
      >
        <IconWrapper medium={1} title={name}>
          <Icon name={name} />
          <IconName>{hasJustCopied ? 'Copied!!' : name}</IconName>
        </IconWrapper>
      </CopyToClipboard>
    );
  }
}

IconToClipboard.propTypes = { name: PropTypes.string.isRequired };

export default IconToClipboard;
