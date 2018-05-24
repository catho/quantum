import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Col } from '../../components/Grid';
import Colors from '../../components/Colors';
import Icon from '../../components/Icon';

const IconName = styled.div`
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const IconWrapper = styled(Col)`
  font-size: 12px;
  padding: 10px;
  position: relative;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.PRIMARY['500']};
    color: ${Colors.WHITE};
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
  }

  render() {
    const { hasJustCopied } = this.state;
    const { name } = this.props;

    return (
      <CopyToClipboard
        text={`<Icon name="${name}" />`}
        key={name}
        onCopy={this.showFeedback}
      >
        <IconWrapper tablet={1} title={name}>
          <Icon name={name} />
          <IconName>{hasJustCopied ? 'Copied!!' : name}</IconName>
        </IconWrapper>
      </CopyToClipboard>
    );
  }
}

IconToClipboard.propTypes = { name: PropTypes.string.isRequired };

export default IconToClipboard;
